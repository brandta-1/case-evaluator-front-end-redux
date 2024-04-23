import React, { lazy, Suspense } from 'react';
import './App.css';

const ContainerList = lazy(() => import('./components/ContainerList'));
const ArticleFeed = lazy(() => import('./components/ArticleFeed'));
function App() {
  return (
    <div className="App">
      <Suspense fallback={null}>{React.createElement(ArticleFeed)}</Suspense>
      <Suspense fallback={null}>{React.createElement(ContainerList)}</Suspense>
    </div>
  );
}

export default App;
