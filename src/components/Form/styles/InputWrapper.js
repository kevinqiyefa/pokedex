import styled from '@emotion/styled';

const InputWrapper = styled.div`
	& > input {
		background: #3f414b;
		padding: 1rem;
		line-height: 25px;
		border-radius: 6px;
		border: none;
		color: #ffffff;
		font-size: 1rem;
		width: 100%;
		box-sizing: border-box;
	}

	& > input:focus {
		outline: 0;
	}
	& > input:focus-visible {
		border: 1px solid #f2c94c;
	}

	margin-bottom: 1rem;
`;
export default InputWrapper;
