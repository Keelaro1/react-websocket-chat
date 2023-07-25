import React, { memo, useCallback } from 'react';
import { ButtonStyled } from './button.styled';
import { LocalizationLanguage } from '../../../localization/localization';

interface ButtonProps {
	text: LocalizationLanguage;
	onClick: (lang: LocalizationLanguage) => void;
}

export const Button = memo((props: ButtonProps) => {
	const { text, onClick } = props;

	const onClickHandler = useCallback(() => onClick(text), []);

	return <ButtonStyled onClick={onClickHandler}>{text}</ButtonStyled>;
});

Button.displayName = 'Button';
