import React from 'react';

export default function HelpPage() {
  return (
    <div className="panel-stack">
      <section className="workspace simple-page">
        <h2>How to use</h2>
        <ul className="plain-list">
          <li>Open Home and ask your question.</li>
          <li>The catalog is available by default.</li>
          <li>You can upload syllabus or exam files from Settings.</li>
          <li>If you pick a source, answers will focus on that file.</li>
          <li>Use History to view or delete old chats.</li>
        </ul>
        <h3>How answers work</h3>
        <p className="status">
          The assistant uses the catalog and your files based on your question.
          If data is missing, it tells you clearly instead of guessing.
        </p>
      </section>
    </div>
  );
}
