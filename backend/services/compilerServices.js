const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const getDockerExtension = (langauge) => {
    switch (langauge) {
        case 'cpp':
            return { dockerImage: 'code-runner-cpp:latest', fileExtension: '.cpp' };
            break;
        case 'python':
            return { dockerImage: 'code-runner-python:latest', fileExtension: '.py' };
            break;
        default:
            throw new Error("unsupported language");
    }
};
async function codeExecute(dockerImage, codeFilepath, fileExtension, input) {
    const inputFile = 'input.txt';
    const containerName = 'code_runner';
    const userCodeFile = path.join('/tmp', `userCode${fileExtension}`);

    fs.writeFileSync(inputFile, input);

    let command;
    switch (fileExtension) {
        case '.cpp':
            command = `echo "${input}" > /tmp/input.txt && g++ ${userCodeFile} -o /tmp/a.out && /tmp/a.out < /tmp/input.txt`;
            break;
        case '.py':
            command = `python ${userCodeFile}`;
            break;
        default:
            throw new Error('Unsupported file extension');
    }
    console.log("executed command:", command);

    return new Promise((resolve, reject) => {
        const dockerProcess = spawn('docker', ['run', '--rm', '--name',
            containerName,
            '-v', `${codeFilepath}:${userCodeFile}`,
            dockerImage, 'bash', '-c', command]);

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
    });
}
const runTestCases = async (code, langauge, testCases) => {
    const { dockerImage, fileExtension } = getDockerExtension(langauge);
    const fileName = `userCode${fileExtension}`;
    const filePath = path.join(__dirname, fileName);

    fs.writeFileSync(filePath, code);

    const results = [];

    for (const testcase of testCases) {
        try {
            let output = await codeExecute(dockerImage, filePath, fileExtension, testcase.input);

            if (output) {
                output = output.toString().trim();
            } else {
                output = '';
            }

            let parsedExpectedOutput = testcase.expectedOutput;
            if (parsedExpectedOutput) {
                parsedExpectedOutput = parsedExpectedOutput.toString().trim();
            } else {
                parsedExpectedOutput = '';
            }
            console.log('Input:', testcase.input);
            console.log('Expected Output:', parsedExpectedOutput);
            console.log('Actual Output:', output);


            const passed = output == parsedExpectedOutput;
            results.push({
                input: testcase.input,
                expectedOutput: parsedExpectedOutput,
                actualOutput: output,
                passed: passed
            });
        } catch (error) {
            results.push({
                input: testcase.input,
                expectedOutput: testcase.expectedoutput,
                error: error.message
            });
        }
    }
    fs.unlinkSync(filePath);
    return results;
};

module.exports = {
    runTestCases,
}