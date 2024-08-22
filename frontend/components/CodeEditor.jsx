import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { useParams } from 'react-router-dom';

const CodeEditor = () => {
  const [problem, setProblem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [code, setCode] = useState('// Your initial code here');
  const [submissionResult, setSubmissionResult] = useState(null);
  const [language, setLanguage] = useState('javascript'); // Default language
  const { id } = useParams();

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/problems/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProblem(data.problem);
        setCode(data.problem?.initialCode || '// Your initial code here');
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProblem();
  }, [id]);

  const handleCodeChange = (value) => {
    setCode(value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, code, language }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      setSubmissionResult(result);
    } catch (error) {
      setSubmissionResult({ success: false, message: error.message });
    }
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!problem) {
    return <div>Problem not found.</div>;
  }

  const { title, difficulty, acceptance, description, exampleIn, exampleOut, testCases } = problem;

  return (
    <div className="flex text-white">
      <div className="problem_description_box flex-1 p-4 overflow-auto">
        <h2 className="text-2xl font-bold mb-2">{title}</h2>

        <div className="problem-info mb-4">
          <div className={`difficulty mb-1 p-1 rounded text-sm ${difficulty === 'Easy' ? 'bg-green-500' : difficulty === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'}`}>
            {difficulty}
          </div>
          <div className="acceptance text-sm">Acceptance: {acceptance}</div>
        </div>

        <div className="problem-description mb-4">
          <p className="text-xl font-semibold">Description</p>
          <p className="text-lg">{description}</p>
        </div>

        <div className="problem-examples mb-4">
          <h4 className="text-lg font-semibold">Examples</h4>
          <div className="example mb-2">
            <h5 className="font-medium">Input</h5>
            <pre className="bg-gray-700 p-2 rounded">{exampleIn}</pre>
          </div>
          <div className="example mb-2">
            <h5 className="font-medium">Output</h5>
            <pre className="bg-gray-700 p-2 rounded">{exampleOut}</pre>
          </div>
        </div>
        <div className="problem-test-cases mb-4">
          <h4 className="text-lg font-semibold">Test Cases</h4>
          {testCases.length ? (
            testCases.map((testCase, index) => (
              <div key={index} className="test-case mb-2">
                <h5 className="font-medium">Test Case {index + 1}</h5>
                <pre className="bg-gray-700 p-2 rounded">{testCase.input}</pre>
                <pre className="bg-gray-700 p-2 rounded">{testCase.expectedOutput}</pre>
              </div>
            ))
          ) : (
            <p>No test cases available.</p>
          )}
        </div>
      </div>
      <div className="code-editor flex-1 p-4 bg-gray-800 overflow-auto">
        <div className="mb-4 flex justify-between items-center">
          <select value={language} onChange={handleLanguageChange} className="p-2 bg-gray-700 border border-gray-600 rounded text-white">
            <option value="python">Python</option>
            <option value="cpp">C++</option>
          </select>
        </div>
        <Editor
          height="400px"
          width="100%"
          language={language}
          theme="vs-dark"
          value={code}
          onChange={handleCodeChange}
          options={{
            selectOnLineNumbers: true,
            automaticLayout: true,
            minimap: { enabled: false },
            wordWrap: 'on',
          }}
        />
        <button onClick={handleSubmit} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          SUBMIT
        </button>
        {submissionResult && (
          <div className={`mt-4 p-2 rounded ${submissionResult.success ? 'bg-green-500' : 'bg-red-500'}`}>
            {submissionResult.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeEditor;
