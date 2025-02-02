import { Outlet } from 'react-router';
import './Auth.css';

export const AuthLayout = () => {
	return (
		<div className='layout'>
			<Outlet />
		</div>
	);
};
