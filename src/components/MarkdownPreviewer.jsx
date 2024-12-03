import React, { useState } from 'react';
import { marked } from 'marked';
import './MarkdownPreviewer.css';

marked.setOptions({
    breaks: true,
  });

const initialMarkdown = `
# H1 Header
## H2 Subheader
[Link a YouTube](https://www.youtube.com/)

Inline \`code\`.

\`\`\`
Bloque de codigo
\`\`\`

- Item lista 1

> Blockquote.

**Bold text**

![Imagen de ejemplo](https://es.wikipedia.org/wiki/Lionel_Messi)
`;

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  return (
    <div className="markdown-previewer">
      <textarea
        id="editor"
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      />
    </div>
  );
};

export default MarkdownPreviewer;
