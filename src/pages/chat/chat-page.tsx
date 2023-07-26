import React, { memo, useCallback, useContext, useState } from 'react';
import {
	ChatPageConfirmMessageStyled,
	ChatPageContainerStyled,
	ChatPageContentStyled,
	ChatPageControlsStyled,
	ChatPageHeaderStyled,
	ChatPageMessageInputStyled,
	ChatPageSwitchBtnStyled,
	ChatPageTitle,
} from './chat-page.styled';
import { appContext } from '../../App';
import { ChatPageChatComponent } from './components/chat-page-chat-component';
import { ChatPageUserListComponent } from './components/chat-page-userlist-component';
import { SwitchChatIcon } from '../../components/ui-kit/icons/switch-chat-icon';

const mockMessages = [
	{
		msg: 'test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1test1',
		name: 'username1',
	},
	{ msg: 'test2', name: 'username2' },
	{ msg: 'test3', name: 'username3' },
	{ msg: 'test1', name: 'username1' },
	{ msg: 'test2', name: 'username2' },
	{ msg: 'test3', name: 'username3' },
	{ msg: 'test1', name: 'username1' },
	{ msg: 'test2', name: 'username2' },
	{ msg: 'test3', name: 'username3' },
	{ msg: 'test1', name: 'username1' },
	{ msg: 'test2', name: 'username2' },
	{ msg: 'test3', name: 'username3' },
	{ msg: 'test1', name: 'username1' },
	{ msg: 'test2', name: 'username2' },
	{ msg: 'test3', name: 'username3' },
	{ msg: 'test1', name: 'username1' },
	{ msg: 'test2', name: 'username2' },
	{ msg: 'test3', name: 'username3' },
	{ msg: 'test1', name: 'username1' },
	{ msg: 'test2', name: 'username2' },
	{ msg: 'test3', name: 'username3' },
	{ msg: 'test1', name: 'username1' },
	{ msg: 'test2', name: 'username2' },
	{ msg: 'test3', name: 'username3' },
	{ msg: 'test3', name: 'username3' },
	{ msg: 'test1', name: 'username1' },
	{ msg: 'test2', name: 'username2' },
	{ msg: 'test3', name: 'username3' },
	{ msg: 'test1', name: 'username1' },
	{ msg: 'test2', name: 'username2' },
	{ msg: 'test3', name: 'username3' },
	{ msg: 'test3', name: 'username3' },
	{ msg: 'test1', name: 'username1' },
	{ msg: 'test2', name: 'username2' },
	{ msg: 'test3', name: 'username3' },
	{ msg: 'test1', name: 'username1' },
	{ msg: 'test2', name: 'username2' },
	{ msg: 'test3', name: 'username3' },
];

const mockUsers = ['test', 'test2', 'test3'];

export const ChatPage = memo(() => {
	const { dictionary } = useContext(appContext);

	const [showChat, setShowChat] = useState<boolean>(true);
	const toggleShowChat = useCallback(() => setShowChat(!showChat), [showChat]);

	return (
		<ChatPageContainerStyled>
			<ChatPageHeaderStyled>
				<ChatPageTitle>{showChat ? dictionary.chat : dictionary.users}</ChatPageTitle>
				<ChatPageSwitchBtnStyled icon={SwitchChatIcon} onClick={toggleShowChat} />
			</ChatPageHeaderStyled>
			<ChatPageContentStyled>
				{showChat ? (
					<ChatPageChatComponent messages={mockMessages} />
				) : (
					<ChatPageUserListComponent users={mockUsers} />
				)}
			</ChatPageContentStyled>
			<ChatPageControlsStyled>
				<ChatPageMessageInputStyled placeholder={dictionary.enterMessage}></ChatPageMessageInputStyled>
				<ChatPageConfirmMessageStyled
					onClick={() => {}}
					value={dictionary.sendAMessage}></ChatPageConfirmMessageStyled>
			</ChatPageControlsStyled>
		</ChatPageContainerStyled>
	);
});

ChatPage.displayName = 'ChatPage';
