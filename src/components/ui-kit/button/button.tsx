import React, { memo } from 'react';
import { ButtonStyled } from './button.styled';

interface ButtonProps {
	readonly value: string;
	readonly onClick: () => void;
	readonly disabled?: boolean;
}

export const Button = memo((props: ButtonProps) => {
	const { value, onClick, disabled = false } = props;

	return (
		<ButtonStyled disabled={disabled} onClick={onClick}>
			{value}
		</ButtonStyled>
	);
});

Button.displayName = 'Button';
