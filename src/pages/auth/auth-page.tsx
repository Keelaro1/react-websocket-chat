import React, { memo, useCallback, useState } from 'react';
import {
	AuthPageConfirmNicknameButton,
	AuthPageContainerContentStyled,
	AuthPageContainerStyled,
	AuthPageEnterNicknameInputStyled,
	AuthPageTitleStyled,
} from './auth-page.styled';
import { RuDictionary } from '../../localization/ru';
import { EnDictionary } from '../../localization/en';
import { validateName } from '../../utils/validate';

interface AuthPageProps {
	readonly addUserName: (name: string) => void;
	readonly dictionary: EnDictionary | RuDictionary;
}

export const AuthPage = memo((props: AuthPageProps) => {
	const { addUserName, dictionary } = props;

	const [inputName, setInputName] = useState<string>('');

	const addUserNameHandler = useCallback(() => inputName && addUserName(inputName), [inputName, addUserName]);

	const setInputNameHandler = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => setInputName(e.target.value),
		[],
	);

	return (
		<AuthPageContainerStyled>
			<AuthPageTitleStyled>React Websocket Chat</AuthPageTitleStyled>
			<AuthPageContainerContentStyled>
				<AuthPageEnterNicknameInputStyled
					placeholder={dictionary.enterUsername}
					value={inputName}
					onChange={setInputNameHandler}
				/>
				<AuthPageConfirmNicknameButton
					disabled={!validateName(inputName)}
					value={dictionary.confirmUsername}
					onClick={addUserNameHandler}
				/>
			</AuthPageContainerContentStyled>
		</AuthPageContainerStyled>
	);
});

AuthPage.displayName = 'AuthPage';
