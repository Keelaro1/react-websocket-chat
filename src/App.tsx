import React, { useState, useCallback, useEffect } from 'react';
import './App.css';
import { LocalizationLanguage, localization } from './localization/localization';
import { LocalizationButtons } from './components/localization-buttons/localization-buttons';

const DEFAULT_LANGUAGE = 'EN';

export const App = (): JSX.Element => {
	const [language, setLanguage] = useState<LocalizationLanguage>(DEFAULT_LANGUAGE);

	useEffect(() => {
		console.log(localization[language]);
	}, [language]);

	const changeLanguage = useCallback((language: LocalizationLanguage) => setLanguage(language), []);

	return (
		<>
			<LocalizationButtons changeLanguage={changeLanguage} />
			<div className="App">Test</div>
		</>
	);
};
