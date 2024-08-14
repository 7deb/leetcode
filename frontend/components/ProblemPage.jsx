import React from 'react';
import { useParams } from 'react-router-dom';
import { MonacoEditor } from '@monaco-editor/react';
import '../styles/ProblemPage.css';

const ProblemPage = ({ problems }) => {
  const { id } = useParams();
  const problem = problems.find((p) => p.id === parseInt(id));

  return (
    <div className="problem-page">
      <div className="problem-details">
        <h2>{problem.title}</h2>
        <div>
          <strong>Description:</strong>
          <p>{problem.description}</p>
        </div>
        <div>
          <strong>Example Input:</strong>
          <pre>{problem.exampleInput}</pre>
        </div>
        <div>
          <strong>Example Output:</strong>
          <pre>{problem.exampleOutput}</pre>
        </div>
      </div>
      <div className="code-editor">
        <MonacoEditor
          height="400px"
          language="javascript"
          theme="vs-dark"
        />
      </div>
    </div>
  );
};

export default ProblemPage;
