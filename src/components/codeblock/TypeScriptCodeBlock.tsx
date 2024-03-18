import hljs from 'highlight.js/lib/core';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/atom-one-dark.css';
import { useEffect, useRef } from 'react';

hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);

type CodeBlockProps = {
  children: string;
};

export function CodeBlock({ children }: Readonly<CodeBlockProps>): JSX.Element {
  const codeBlockRef = useRef(null);

  useEffect(() => {
    codeBlockRef.current && hljs.highlightElement(codeBlockRef.current);
  }, [codeBlockRef]);

  return (
    <div className='container my-4'>
      <pre>
        <code ref={codeBlockRef}>{children}</code>
      </pre>
    </div>
  );
}
