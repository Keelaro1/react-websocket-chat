import styled from 'styled-components';

export const ButtonStyled = styled.button`
	width: 30px;
	height: 30px;
	outline: none;
	border: none;
	cursor: pointer;
	padding: 4px;
	margin: 4px;
	&:disabled {
		cursor: default;
	}
	background: #a8acfd;
`;
