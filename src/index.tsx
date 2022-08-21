import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const container = document.getElementById('root');
const errorContainer = createNoRootElement();
const root = createRoot(container || errorContainer);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

function createNoRootElement(): HTMLElement {
  const errorContainer = document.createElement('div');
  const heading = document.createElement('h1');

  heading.textContent = 'No Page Found';

  errorContainer.appendChild(heading);

  return errorContainer;
}
