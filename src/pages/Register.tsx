import { SubmitButton } from '@/components/Buttons/SubmitButton';
import { Form } from '@/components/Form';
import { InputComponent } from '@components/Input';
import { useMutation } from '@tanstack/react-query';

export const RegisterPage = () => {
	const baseUrl = import.meta.env.VITE_API_BASE_URL;

	const {
		mutate,
		isError,
		isPending,
		isSuccess,
		error: registrationError,
	} = useMutation({
		mutationFn: (data: FormData) =>
			fetch(`${baseUrl}/v1/auth/registration`, {
				headers: { 'Content-Type': 'application/json' },
				method: 'POST',
				body: JSON.stringify(data),
			}),
		onError: (error) => {
			console.error('Registration error:', error);
		},
	});

	const onSubmit = (formData: FormData) => {
		mutate(formData);
	};

	return (
		<Form formProps={{ action: onSubmit }}>
			<InputComponent
				id='username'
				label='Username'
				type='email'
				required={true}
			/>
			<InputComponent
				id='password'
				label='Password'
				type='password'
				required={true}
			/>
			<SubmitButton
				text={isPending ? 'Registering...' : 'Register'}
				isPending={isPending}
			/>

			{isError && <div>Error: {registrationError.message}</div>}

			{isSuccess && <div>Registration successful!</div>}
		</Form>
	);
};
