import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { AuthLayout } from './components/layouts/Auth';
import './index.css';
import { ErrorPage } from './pages/Error';
import { LoginPage } from './pages/Login';
import { RegisterPage } from './pages/Register';

const queryClient = new QueryClient();

const routes = (
	<QueryClientProvider client={queryClient}>
		<Routes>
			<Route element={<AuthLayout />}>
				<Route
					path='login'
					element={<LoginPage />}
				/>
				<Route
					path='register'
					element={<RegisterPage />}
				/>
			</Route>
			<Route
				path='*'
				element={<ErrorPage />}
			/>
		</Routes>
	</QueryClientProvider>
);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>{routes}</BrowserRouter>
	</StrictMode>
);
