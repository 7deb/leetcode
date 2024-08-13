const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const getDockerImageAndExtension = (language) => {
    switch (language) {
        case 'python':
            return { dockerImage: 'code-runner-python', fileExtension: '.py' };
        case 'cpp':
            return { dockerImage: 'code-runner-cpp', fileExtension: '.cpp' };
        case 'javascript':
            return { dockerImage: 'code-runner-javascript', fileExtension: '.js'};
        default:
            throw new Error('Unsupported language');
    }
};

const executeCode = (dockerImage, filePath, fileExtension, input) => {
    return new Promise((resolve, reject) => {
        const containerName = `code_runner_${Date.now()}`;
        const command = `docker run --rm -v "${filePath}:/usr/src/app/user_code${fileExtension}" --name ${containerName} ${dockerImage} < ${input}`;
        
        exec(command, { timeout: 5000 }, (err, stdout, stderr) => {
            if (err || stderr) {
                return reject(stderr || err.message);
            }
            resolve(stdout.trim());
        });
    });
};

const runTestCases = async (code, language, testCases) => {
    const { dockerImage, fileExtension } = getDockerImageAndExtension(language);
    const fileName = `user_code${fileExtension}`;
    const filePath = path.join(__dirname, '..', fileName);
    fs.writeFileSync(filePath, code);

    const results = [];

    for (const testCase of testCases) {
        try {
            const output = await executeCode(dockerImage, filePath, fileExtension, testCase.input);
            results.push({
                input: testCase.input,
                expectedOutput: testCase.expectedOutput,
                actualOutput: output,
                passed: output === testCase.expectedOutput
            });
        } catch (error) {
            results.push({
                input: testCase.input,
                expectedOutput: testCase.expectedOutput,
                error: error
            });
        }
    }

    fs.unlinkSync(filePath); 

    return results;
};

module.exports = {
    runTestCases,
};
