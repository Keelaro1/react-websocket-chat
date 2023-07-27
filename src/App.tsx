import React, { useState, useCallback, createContext } from 'react';
import './App.css';
import { LocalizationLanguage, localization } from './localization/localization';
import { LocalizationButtons } from './components/localization-buttons/localization-buttons';
import { LS_USERNAME_KEY, getFromLs } from './utils/localstorage';
import { AuthPage } from './pages/auth/auth-page';
import { ChatPage } from './pages/chat/chat-page';
import { RuDictionary } from './localization/ru';
import { EnDictionary } from './localization/en';

const DEFAULT_LANGUAGE = 'EN';

interface AppContext {
	readonly dictionary: RuDictionary | EnDictionary;
}

export const appContext = createContext<AppContext>({ dictionary: localization[DEFAULT_LANGUAGE] });

export const App = (): JSX.Element => {
	const [language, setLanguage] = useState<LocalizationLanguage>(DEFAULT_LANGUAGE);
	const [lsUsername, setLsUsername] = useState<string | null>(getFromLs(LS_USERNAME_KEY));

	const changeLanguage = useCallback((language: LocalizationLanguage) => setLanguage(language), []);
	const addUserName = useCallback((name: string) => {
		setLsUsername(name);
		localStorage.setItem(LS_USERNAME_KEY, name);
	}, []);

	return (
		<appContext.Provider value={{ dictionary: localization[language] }}>
			<LocalizationButtons changeLanguage={changeLanguage} />
			{lsUsername ? <ChatPage username={lsUsername} /> : <AuthPage addUserName={addUserName} />}
		</appContext.Provider>
	);
};
