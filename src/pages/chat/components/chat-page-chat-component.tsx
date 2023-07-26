import React, { memo } from 'react';
import { create_UUID } from '../../../utils/uuid';
import { ChatPageChatComponentItemStyled } from './chat-page-chat-component.styled';

interface Message {
	readonly msg: string;
	readonly name: string;
}

interface ChatPageChatComponentProps {
	readonly messages: Message[];
}

export const ChatPageChatComponent = memo((props: ChatPageChatComponentProps) => {
	const { messages } = props;

	return (
		<>
			{messages.map(m => (
				<ChatPageChatComponentItemStyled key={create_UUID()}>
					<b>{m.name}:</b>
					{m.msg}
				</ChatPageChatComponentItemStyled>
			))}
		</>
	);
});

ChatPageChatComponent.displayName = 'ChatPageChatComponent';
