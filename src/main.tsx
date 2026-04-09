import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from '../src/components/app';
import { ErrorBoundary } from '../src/components/base/error-boundary/error-boundary';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* ErrorBoundary оборачивает часть дерева React и показывает fallback UI, если внутри произошла ошибка рендера/лайфцикла. */}
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
