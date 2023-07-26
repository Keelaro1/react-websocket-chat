import React, { memo, useCallback, useContext, useLayoutEffect, useMemo, useRef, useState } from 'react';
import {
	ChatPageContainerStyled,
	ChatPageContentStyled,
	ChatPageHeaderStyled,
	ChatPageSwitchBtnStyled,
	ChatPageTitle,
} from './chat-page.styled';
import { appContext } from '../../App';
import { ChatPageChatComponent, Message } from './components/chat-page-chat-component';
import { ChatPageUserListComponent } from './components/chat-page-userlist-component';
import { SwitchChatIcon } from '../../components/ui-kit/icons/switch-chat-icon';
import { ChatPageForm } from './components/chat-page-message-form';
import { validateInputValue } from '../../utils/validate';

interface ChatPageProps {
	readonly username: string;
}

export const ChatPage = memo((props: ChatPageProps) => {
	const { username } = props;
	const { dictionary } = useContext(appContext);

	const [showChat, setShowChat] = useState<boolean>(true);
	const [messages, setMessages] = useState<Message[]>([]);
	const [users, setUsers] = useState<string[]>([]);

	const toggleShowChat = useCallback(() => setShowChat(!showChat), [showChat]);
	const contentRef = useRef<HTMLDivElement>(null);

	// useLayoutEffect to avoid desync and blinking when page refresh happens
	useLayoutEffect(() => {
		if (contentRef.current) {
			contentRef.current.scrollTop = contentRef.current.clientHeight;
		}
	}, [messages]);

	const ws = useMemo(() => new WebSocket('ws://localhost:8080'), []);

	window.onbeforeunload = () => {
		ws.send(
			JSON.stringify({
				method: 'userLeft',
				user: username,
			}),
		);
	};

	ws.onopen = () => {
		ws.send(
			JSON.stringify({
				method: 'newUser',
				user: username,
			}),
		);
	};

	ws.onmessage = message => {
		const data = JSON.parse(message.data);
		switch (data.method) {
			case 'newMessage':
				setMessages([...messages, { ...data.message }]);
				break;
			case 'messages':
				setMessages(data.messages);
				break;
			case 'newUser':
			case 'userLeft':
				setUsers(data.users);
				break;
			default:
				break;
		}
	};

	const onSendHandler = useCallback(
		(message: Message) => {
			validateInputValue(message.msg) && setMessages([...messages, { ...message }]);
			ws.send(
				JSON.stringify({
					method: 'newMessage',
					message: { ...message },
				}),
			);
		},
		[messages, ws],
	);

	return (
		<ChatPageContainerStyled>
			<ChatPageHeaderStyled>
				<ChatPageTitle>{showChat ? dictionary.chat : dictionary.users}</ChatPageTitle>
				<ChatPageSwitchBtnStyled icon={SwitchChatIcon} onClick={toggleShowChat} />
			</ChatPageHeaderStyled>
			<ChatPageContentStyled ref={contentRef}>
				{showChat ? <ChatPageChatComponent messages={messages} /> : <ChatPageUserListComponent users={users} />}
			</ChatPageContentStyled>
			{showChat && <ChatPageForm onSend={onSendHandler} />}
		</ChatPageContainerStyled>
	);
});

ChatPage.displayName = 'ChatPage';
