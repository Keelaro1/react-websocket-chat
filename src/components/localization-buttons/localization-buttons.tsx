import React, { memo, useCallback } from 'react';
import { Button } from '../ui-kit/button/button';
import { LocalizationButtonsStyled } from './localization-buttons.styled';
import { Languages, LocalizationLanguage } from '../../localization/localization';

interface LocalizationButtonsProps {
	changeLanguage: (language: LocalizationLanguage) => void;
}

export const LocalizationButtons = memo((props: LocalizationButtonsProps) => {
	const { changeLanguage } = props;

	const onChangeLanguageHandler = useCallback((lang: LocalizationLanguage) => {
		changeLanguage(lang);
	}, []);

	return (
		<LocalizationButtonsStyled>
			<Button onClick={onChangeLanguageHandler} text={Languages.EN} />
			<Button onClick={onChangeLanguageHandler} text={Languages.RU} />
		</LocalizationButtonsStyled>
	);
});

LocalizationButtons.displayName = 'LocalizationButtons';
