import styled from 'styled-components';
import { Button } from '../../components/ui-kit/button/button';
import { Input } from '../../components/ui-kit/input/input';
import { ButtonStyled } from '../../components/ui-kit/button/button.styled';

export const ChatPageContainerStyled = styled.div`
	width: 25%;
	height: 90%;
	background: #5a95e2;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 4px;
	padding: 8px;
	display: flex;
	flex-direction: column;
`;

export const ChatPageHeaderStyled = styled.div`
	height: 10%;
	${ButtonStyled} {
		position: fixed;
		top: 0;
		right: 0;
	}
`;

export const ChatPageTitle = styled.h2`
	padding: 4px;
`;

export const ChatPageSwitchBtnStyled = styled(Button)``;

export const ChatPageContentStyled = styled.div`
	min-height: 85%;
	overflow-y: auto;
	word-wrap: break-word;
	height: fit-content;
`;

export const ChatPageControlsStyled = styled.div`
	padding-top: 16px;
	height: 5%;
	${ButtonStyled} {
		width: fit-content;
		height: 38px;
	}
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const ChatPageMessageInputStyled = styled(Input)`
	height: 30px;
	min-width: 75%;
	padding: 4px;
	background: #a8acfd;
	margin-right: 10px;
`;

export const ChatPageConfirmMessageStyled = styled(Button)``;
