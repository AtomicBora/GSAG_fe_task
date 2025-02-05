import { FocusEvent, useState } from 'react';
import './Input.css';

interface InputProps {
	id: string;
	type: string;
	required?: boolean;
	label: string;
}

export const InputComponent = ({ id, label, type, required = false }: InputProps) => {
	const [isFilled, setIsFilled] = useState(false);

	const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
		setIsFilled(!!event.target.value);
	};

	return (
		<div className='input-container'>
			<input
				type={type}
				id={id}
				name={id}
				required={required}
				onBlur={handleBlur}
				onChange={handleBlur}
				className={isFilled ? 'filled' : ''}
			/>
			<label htmlFor={label}>{label}</label>
		</div>
	);
};
