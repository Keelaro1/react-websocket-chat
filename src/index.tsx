import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';

const rootEl = document.getElementById('root') as HTMLElement;

rootEl && ReactDOM.createRoot(rootEl).render(<App />);
