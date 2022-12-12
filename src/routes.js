import React from 'react';
import App from './App';
import SignIn from './components/SignIn';
import TodoApp from './components/TodoApp';
import Welcome from './components/Welcome';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      children:[
        {
            path: 'welcome',
            element: <Welcome />
        },
        {
            path: 'todos',
            element: <TodoApp />
        },
        {
            path: 'sign-in',
            element: <SignIn />
        }
      ]
    }
  ]);

export default router;
