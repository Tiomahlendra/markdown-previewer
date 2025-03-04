import React, { useState } from "react";
import "./styles.css"; // Pastikan ada file CSS
import { marked } from "marked";

const defaultMarkdown = `# H1 Heading
## H2 Subheading
[Link](https://www.freecodecamp.org)
\`Inline code\`
\`\`\`
Code block
\`\`\`
- List item
> Blockquote
![Image](https://via.placeholder.com/100)
**Bold Text**
`;

const MarkdownPreviewer = () => {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="container">
      <textarea id="editor" value={markdown} onChange={handleChange} />
      <div
        id="preview"
        dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }} // ✅ Gunakan marked.parse()
      />
    </div>
  );
};

export default MarkdownPreviewer;
