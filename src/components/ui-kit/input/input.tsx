import React, { memo } from 'react';
import { InputStyled } from './input.styled';

interface InputProps {
	readonly type?: string;
	readonly placeholder?: string;
	readonly value?: string;
	readonly onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = memo((props: InputProps) => {
	return <InputStyled type={'text'} {...props} />;
});

Input.displayName = 'Input';
