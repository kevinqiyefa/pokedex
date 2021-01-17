import styled from '@emotion/styled';

const ImageWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 3rem;

	& > img {
		max-height: 300px;
		border-radius: 10px;
		box-shadow: 0 0 1px #f2c94c;
		animation: glow 1.5s ease-in infinite;
		@keyframes glow {
			0% {
				box-shadow: 0 0 5px #f2c94c;
			}
			50% {
				box-shadow: 0 0 25px #f2c94c;
			}
			100% {
				box-shadow: 0 0 5px #f2c94c;
			}
		}
	}
`;

export default ImageWrapper;
