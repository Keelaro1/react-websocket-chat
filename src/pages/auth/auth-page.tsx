import React, { memo, useCallback, useState, useContext } from 'react';
import {
	AuthPageConfirmNicknameButton,
	AuthPageContainerContentStyled,
	AuthPageContainerStyled,
	AuthPageEnterNicknameInputStyled,
	AuthPageTitleStyled,
} from './auth-page.styled';
import { validateName } from '../../utils/validate';
import { appContext } from '../../App';

interface AuthPageProps {
	readonly addUserName: (name: string) => void;
}

export const AuthPage = memo((props: AuthPageProps) => {
	const { addUserName } = props;
	const { dictionary } = useContext(appContext);

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
