import React, { PropsWithChildren } from 'react';

interface IFormProps extends PropsWithChildren {
	formProps: React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
}

export const Form = ({ formProps, children }: IFormProps) => {
	if (!formProps) {
		throw Error('Form component requires formProps to be provided');
	}
	return <form {...formProps}>{children}</form>;
};
