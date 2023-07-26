import React, { memo } from 'react';
import { create_UUID } from '../../../utils/uuid';
import { ChatPageChatComponentItemStyled } from './chat-page-chat-component.styled';

interface ChatPageUserListComponentProps {
	readonly users: string[];
}

export const ChatPageUserListComponent = memo((props: ChatPageUserListComponentProps) => {
	const { users } = props;

	return (
		<>
			{users.map(u => (
				<ChatPageChatComponentItemStyled key={create_UUID()}>{u}</ChatPageChatComponentItemStyled>
			))}
		</>
	);
});

ChatPageUserListComponent.displayName = 'ChatPageUserListComponent';
