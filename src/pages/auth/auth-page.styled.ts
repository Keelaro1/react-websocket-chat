import styled from 'styled-components';
import { Input } from '../../components/ui-kit/input/input';
import { Button } from '../../components/ui-kit/button/button';
import { ButtonStyled } from '../../components/ui-kit/button/button.styled';

export const AuthPageContainerStyled = styled.div`
	width: 500px;
	height: 200px;
	background: #5a95e2;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	border-radius: 4px;
	padding: 8px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const AuthPageContainerContentStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 80%;
	${ButtonStyled} {
		width: fit-content;
		height: 38px;
	}
	margin-top: 36px;
`;

export const AuthPageTitleStyled = styled.h2``;

export const AuthPageEnterNicknameInputStyled = styled(Input)`
	height: 30px;
	min-width: 75%;
	padding: 4px;
	background: #a8acfd;
	margin-right: 10px;
`;

export const AuthPageConfirmNicknameButton = styled(Button)``;
