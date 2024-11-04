import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// const router = createBrowserRouter([
//     {
//         path: '/',
//         element: ,
//     },
// ]);
root.render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>
);
