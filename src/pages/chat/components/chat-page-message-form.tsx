import React, { memo, useCallback, useContext, useState } from 'react';
import { ChatPageConfirmMessageStyled, ChatPageControlsStyled, ChatPageMessageInputStyled } from '../chat-page.styled';
import { LS_USERNAME_KEY, appContext } from '../../../App';
import { Message } from './chat-page-chat-component';
import { getFromLs } from '../../../utils/localstorage';
import { validateInputValue } from '../../../utils/validate';

interface ChatPageFormProps {
	readonly onSend: (message: Message) => void;
}

export const ChatPageForm = memo((props: ChatPageFormProps) => {
	const { dictionary } = useContext(appContext);
	const { onSend } = props;
	const [inputValue, setInputValue] = useState<string>('');
	const name = getFromLs(LS_USERNAME_KEY);

	const setInputNameHandler = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value),
		[],
	);
	const onSendHandler = useCallback(() => {
		onSend({ msg: inputValue, name: name ?? '' });
		setInputValue('');
	}, [inputValue, name, onSend]);

	return (
		<ChatPageControlsStyled>
			<ChatPageMessageInputStyled
				placeholder={dictionary.enterMessage}
				value={inputValue}
				onChange={setInputNameHandler}
				onEnter={onSendHandler}
			/>
			<ChatPageConfirmMessageStyled
				disabled={!validateInputValue(inputValue)}
				onClick={onSendHandler}
				value={dictionary.sendAMessage}
			/>
		</ChatPageControlsStyled>
	);
});

ChatPageForm.displayName = 'ChatPageForm';
