import React, { memo } from 'react';
import { InputStyled } from './input.styled';

interface InputProps {
	readonly type?: string;
	readonly placeholder?: string;
	readonly value?: string;
	readonly onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	readonly onEnter?: () => void;
}

export const Input = memo((props: InputProps) => {
	const { onEnter, ...rest } = props;
	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.key === 'Enter') {
			onEnter && onEnter();
		}
	};

	return <InputStyled onKeyDown={handleKeyDown} type={'text'} {...rest} />;
});

Input.displayName = 'Input';
