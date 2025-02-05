import './SubmitButton.css';

export const SubmitButton = ({ text, isPending }: { text: string; isPending: boolean }) => {
	return (
		<button
			className='submit-btn'
			type='submit'
			disabled={isPending}
		>
			<span>{text}</span>
		</button>
	);
};
