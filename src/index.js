import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store'; // Assuming you have a store.js file in src
import { AuthProvider } from './AuthProvider'; // Assuming AuthProvider is at src/AuthProvider.js
import App from './App'; // Main App component

const Index = () => (
    <Provider store={store}>
        <AuthProvider>
            <App />
        </AuthProvider>
    </Provider>
);

ReactDOM.render(<Index />, document.getElementById('root'));