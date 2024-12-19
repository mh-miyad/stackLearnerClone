"use client";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";

// Define the props type for the CodeBlock component
interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  return (
    <div className="">
      <CopyToClipboard text={code} onCopy={() => setCopied(true)}>
        <Button variant={"default"}>{copied ? "Copied!" : "Copy"}</Button>
      </CopyToClipboard>
      <ScrollArea className="max-w-2xl h-[500px]">
        {/* Copy Button */}

        {/* Syntax Highlighter */}
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          wrapLongLines
          wrapLines={true}
        >
          {code}
        </SyntaxHighlighter>
      </ScrollArea>
    </div>
  );
};

export default CodeBlock;
