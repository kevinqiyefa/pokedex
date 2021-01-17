import styled from '@emotion/styled';

const SubmitBtn = styled.button`
	width: 100%;
	background: #f2c94c;
	border-radius: 6px;
	border: none;
	font-size: 1rem;
	font-weight: bold;
	padding-top: 1rem;
	padding-bottom: 1rem;
	margin-top: 0.8rem;
	color: white;
	cursor: pointer;

	&:disabled {
		cursor: not-allowed;
	}
`;
export default SubmitBtn;
