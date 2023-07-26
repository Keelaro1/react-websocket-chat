import React, { memo, useCallback } from 'react';
import { Button } from '../ui-kit/button/button';
import { LocalizationButtonsStyled } from './localization-buttons.styled';
import { Languages, LocalizationLanguage } from '../../localization/localization';

interface LocalizationButtonsProps {
	readonly changeLanguage: (language: LocalizationLanguage) => void;
}

export const LocalizationButtons = memo((props: LocalizationButtonsProps) => {
	const { changeLanguage } = props;

	const onChangeLanguageHandler = useCallback(
		(lang: LocalizationLanguage) => {
			changeLanguage(lang);
		},
		[changeLanguage],
	);

	return (
		<LocalizationButtonsStyled>
			<Button onClick={() => onChangeLanguageHandler(Languages.EN)} value={Languages.EN} />
			<Button onClick={() => onChangeLanguageHandler(Languages.RU)} value={Languages.RU} />
		</LocalizationButtonsStyled>
	);
});

LocalizationButtons.displayName = 'LocalizationButtons';
