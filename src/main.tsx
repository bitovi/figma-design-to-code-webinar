import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="p-8">
      <h1 className="text-2xl font-bold text-foreground">Figma Design to Code Webinar</h1>
      <p className="mt-2 text-muted-foreground">See component stories in Storybook: <code>npm run storybook</code></p>
    </div>
  </React.StrictMode>
);
