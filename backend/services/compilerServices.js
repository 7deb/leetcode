const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const getDockerExtension = (language) => {
    switch (language) {
        case 'cpp':
            return { dockerImage: 'code-runner-cpp:latest', fileExtension: '.cpp' };
        case 'python':
            return { dockerImage: 'code-runner-python:latest', fileExtension: '.py' };
        default:
            throw new Error('Unsupported language');
    }
};

async function codeExecute(dockerImage, codeFilepath, fileExtension, input) {
    const containerName = 'code_runner';
    const userCodeFile = path.join('/tmp', `userCode${fileExtension}`);
    const inputFile = '/tmp/input.txt';

    fs.writeFileSync(inputFile, input);

    let command;
    switch (fileExtension) {
        case '.cpp':
            command = `g++ ${userCodeFile} -o /tmp/a.out && /tmp/a.out < ${inputFile}`;
            break;
        case '.py':
            command = `python ${userCodeFile}`;
            break;
        default:
            throw new Error('Unsupported file extension');
    }

    console.log('Executing command:', command);

    return new Promise((resolve, reject) => {
        const dockerProcess = spawn('docker', [
            'run', '--rm', '--name', containerName,
            '-v', `${codeFilepath}:${userCodeFile}`,
            dockerImage, 'bash', '-c', command
        ]);

        let output = '';
        dockerProcess.stdout.on('data', (data) => {
            output += data.toString();
        });

        dockerProcess.stderr.on('data', (data) => {
            console.error(`Error from container ${containerName}: ${data.toString()}`);
            output += data.toString();
        });

        dockerProcess.on('close', (code) => {
            if (code === 0) {
                resolve(output.trim());
            } else {
                reject(new Error(`Docker process exited with code ${code}: ${output}`));
            }
        });

        dockerProcess.on('error', (err) => {
            reject(new Error(`Docker process error: ${err.message}`));
        });
    });
}

const runTestCases = async (code, language, testCases) => {
    const { dockerImage, fileExtension } = getDockerExtension(language);
    const fileName = `userCode${fileExtension}`;
    const filePath = path.join(__dirname, fileName);

    try {
        fs.writeFileSync(filePath, code);

        const results = [];
        for (const testcase of testCases) {
            try {
                const output = await codeExecute(dockerImage, filePath, fileExtension, testcase.input);
                const passed = output === testcase.expectedOutput.trim();
                results.push({
                    input: testcase.input,
                    expectedOutput: testcase.expectedOutput.trim(),
                    actualOutput: output,
                    passed
                });
            } catch (error) {
                results.push({
                    input: testcase.input,
                    expectedOutput: testcase.expectedOutput,
                    error: error.message
                });
            }
        }

        return results;
    } finally {
        fs.unlinkSync(filePath); // Ensure file is deleted after execution
    }
};

module.exports = {
    runTestCases,
};