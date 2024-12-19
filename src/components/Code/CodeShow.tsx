import CodeBlock from "./CodeBlock";

const CodeShow = () => {
  const code = `import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";

// Define the props type for the CodeBlock component
interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        backgroundColor: "#1e1e1e", // VS Code-like background
      }}
    >
      {/* Copy Button */}
      <CopyToClipboard text={code} onCopy={() => setCopied(true)}>
        <button
          style={{
            position: "absolute",
            top: "8px",
            right: "8px",
            cursor: "pointer",
            padding: "4px 8px",
            backgroundColor: copied ? "#4caf50" : "#007acc",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            fontSize: "12px",
          }}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </CopyToClipboard>

      {/* Syntax Highlighter */}
      <SyntaxHighlighter language={language} style={vscDarkPlus}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
`;
  return (
    <div>
      <CodeBlock code={code} language="javascript" />
    </div>
  );
};

export default CodeShow;
