import React, { useState, useCallback } from 'react';
import './App.css';
import { LocalizationLanguage, localization } from './localization/localization';
import { LocalizationButtons } from './components/localization-buttons/localization-buttons';
import { getFromLs } from './utils/localstorage';
import { AuthPage } from './pages/auth/auth-page';
import { ChatPage } from './pages/chat/chat-page';

const DEFAULT_LANGUAGE = 'EN';
const LS_USERNAME_KEY = 'Username';

export const App = (): JSX.Element => {
	const [language, setLanguage] = useState<LocalizationLanguage>(DEFAULT_LANGUAGE);
	const [lsUsername, setLsUsername] = useState<string | null>(getFromLs(LS_USERNAME_KEY));

	const changeLanguage = useCallback((language: LocalizationLanguage) => setLanguage(language), []);
	const addUserName = useCallback((name: string) => {
		setLsUsername(name);
		localStorage.setItem(LS_USERNAME_KEY, name);
	}, []);

	return (
		<>
			<LocalizationButtons changeLanguage={changeLanguage} />
			{lsUsername ? <ChatPage /> : <AuthPage dictionary={localization[language]} addUserName={addUserName} />}
		</>
	);
};
