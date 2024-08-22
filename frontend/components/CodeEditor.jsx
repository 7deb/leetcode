import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import { useParams } from 'react-router-dom'; // For getting problem ID from URL

const CodeEditor = () => {
  const [problem, setProblem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams(); // Get problem ID from URL parameter
  console.log(id);

  useEffect(() => {
    const fetchProblem = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/problems/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProblem(data.problem);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProblem();
  }, [id]);

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

  const code = problem?.initialCode || '// Your initial code here';

  return (
    <div className="problem-details-container">
      <h2>{title}</h2>
      <div className="problem-info">
        <span className={`difficulty difficulty-${difficulty.toLowerCase()}`}>
          {difficulty}
        </span>
        <span className="acceptance">Acceptance: {acceptance}</span>
      </div>
      <div className="problem-description">
        <h3>Description</h3>
        <p>{description}</p>
      </div>
      <div className="problem-examples">
        <h3>Examples</h3>
        <div className="example">
          <h4>Input</h4>
          <pre>{exampleIn}</pre>
        </div>
        <div className="example">
          <h4>Output</h4>
          <pre>{exampleOut}</pre>
        </div>
      </div>
        <div className="problem-test-cases">
          <h3>Test Cases</h3>
          {testCases.length ? (
            testCases.map((testCase, index) => (
              <div key={index} className="test-case">
                <h4>Test Case {index + 1}</h4>
                <pre>{testCase.input}</pre>
                <pre>{testCase.expectedOutput}</pre>
                
              </div>
            ))
          ) : (
            <p>No test cases available.</p>
          )}
        </div>
      <div className="code-editor">
        <Editor
          height="400px"
          width="100%"
          language="javascript"
          theme="vs-dark"
          value={code}
          options={{
            selectOnLineNumbers: true,
            automaticLayout: true,
            minimap: { enabled: false },
            wordWrap: 'on',
          }}
        />
        {/* Buttons or other elements for code submission and execution */}
      </div>
    </div>
  );
};

export default CodeEditor;