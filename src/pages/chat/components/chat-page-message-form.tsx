import React, { memo, useCallback, useContext, useState } from 'react';
import { ChatPageConfirmMessageStyled, ChatPageControlsStyled, ChatPageMessageInputStyled } from '../chat-page.styled';
import { appContext } from '../../../App';
import { Message } from './chat-page-chat-component';
import { validateInputValue } from '../../../utils/validate';

interface ChatPageFormProps {
	readonly onSend: (message: Message) => void;
	readonly username: string;
}

export const ChatPageForm = memo((props: ChatPageFormProps) => {
	const { dictionary } = useContext(appContext);
	const { onSend, username } = props;
	const [inputValue, setInputValue] = useState<string>('');

	const setInputNameHandler = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value),
		[],
	);
	const onSendHandler = useCallback(() => {
		onSend({ msg: inputValue, name: username ?? '' });
		setInputValue('');
	}, [inputValue, onSend, username]);

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
