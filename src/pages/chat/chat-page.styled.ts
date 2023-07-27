import styled from 'styled-components';
import { Button } from '../../components/ui-kit/button/button';
import { Input } from '../../components/ui-kit/input/input';
import { ButtonStyled } from '../../components/ui-kit/button/button.styled';

export const ChatPageContainerStyled = styled.div`
	width: 35%;
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
	justify-content: space-between;
	@media (max-width: 800px) {
		width: 65%;
		left: 40%;
	}
`;

export const ChatPageHeaderStyled = styled.div`
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
	overflow-y: auto;
	word-wrap: break-word;
	height: fit-content;
	flex-grow: 1;
`;

export const ChatPageControlsStyled = styled.div`
	min-width: 100%;
	padding-top: 16px;
	${ButtonStyled} {
		width: fit-content;
		height: 38px;
		right: 20px;
		position: absolute;
		@media (max-width: 800px) {
			display: none;
		}
	}
	display: flex;
	align-items: center;
	bottom: 5px;
	align-self: end;
`;

export const ChatPageMessageInputStyled = styled(Input)`
	width: 75%;
	height: 30px;
	padding: 4px;
	background: #a8acfd;
	margin-right: 10px;
	@media (max-width: 800px) {
		width: 100%;
	}
`;

export const ChatPageConfirmMessageStyled = styled(Button)``;
