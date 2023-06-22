import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-tailwind/react';
import store from './store';
import { App } from './components/app';
import reportWebVitals from './reportWebVitals';
import { MaterialTailwindControllerProvider } from "./context";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<Provider store={store}>
		<ThemeProvider>
			<MaterialTailwindControllerProvider>
				<Router>
					<App />
				</Router>
			</MaterialTailwindControllerProvider>
		</ThemeProvider>
	</Provider>
);

reportWebVitals();
