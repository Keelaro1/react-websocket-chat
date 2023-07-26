import React, { memo } from 'react';
import { ButtonStyled } from './button.styled';

interface ButtonProps {
	readonly value?: string;
	readonly onClick: () => void;
	readonly disabled?: boolean;
	readonly icon?: any;
}

export const Button = memo((props: ButtonProps) => {
	const { value = '', onClick, disabled = false, icon } = props;

	return (
		<ButtonStyled disabled={disabled} onClick={onClick}>
			{icon}
			{value}
		</ButtonStyled>
	);
});

Button.displayName = 'Button';
