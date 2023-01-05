import { useRef, useState } from 'react';
import styled from 'styled-components';
const Minus = () => (
	<svg fill="none" height="22" viewBox="0 0 20 20" width="22">
		<circle cx="10" cy="10" r="10" fill="#5254F1" />
		<path
			d="M13.75 9.13062V10.8693H10.8693H9.13068H6.25V9.13062H9.13068L9.07971 9.13106H10.8183L10.8693 9.13062H13.75Z"
			fill="white"
		/>
	</svg>
);
const Plus = () => (
	<svg fill="none" height="22" viewBox="0 0 20 20" width="22">
		<circle cx="10" cy="10" r="10" fill="#5254F1" />
		<path
			d="M13.75 9.13062V10.8693H10.8693H9.13068H6.25V9.13062H9.13068L9.07971 9.13106H10.8183L10.8693 9.13062H13.75Z"
			fill="white"
		/>
		<path
			d="M13.75 9.13068V10.8693H10.8693V13.75H9.13068V10.8693H6.25V9.13068H9.13068V6.25H10.8693V9.13068H13.75Z"
			fill="white"
		/>
	</svg>
);
const StyledElement = styled.div`
	border-radius: 16px;
	border: 1px solid #e2e4ea;
	margin: 10px 0;
	max-width: 700px;
	overflow: hidden;
	width: 100%;
	&:first-child {
		margin: 0 0 10px 0;
	}
	&:last-child {
		margin: 10px 0 0 0;
	}
	& .summary {
		cursor: pointer;
		display: flex;
		justify-content: space-between;
		padding: 20px;
		&:hover {
			background-color: rgba(226, 228, 234, 0.2);
		}
		& .icon {
			height: 22px;
			width: 22px;
		}
		& .title {
			font-size: 16px;
			font-weight: 600;
			line-height: 140%;
			width: calc(100% - 32px);
		}
	}
	& .content {
		display: none;
		padding: 0 20px 20px 20px;
		& div {
			border-top: 1px solid rgba(105, 111, 133, 0.15);
			color: #6e7892;
			font-size: 15px;
			font-weight: 500;
			line-height: 160%;
			padding: 20px 0 0 0;
		}
	}
`;
// const toggle = (ref, duration) => {
	// const isNumber = typeof duration === 'number' ? duration : 400;
	// const time = parseInt(isNumber / 10);
	// const isOpen = ref.current.style.display;
	// const interval = setInterval(() => {
	// 	if (isOpen) {
	// 	}
	// 	if (d) {
	// 		clearInterval(interval);
	// 	}
	// }, time);
	// for (let x = 0; x < count; x++) {
	// 	console.log('==>', isOpen);
	// 	if (x === 0) {
	// 		ref.current.style.display = 'block';
	// 	} else if (x === count - 1) {
	// 		ref.current.style = {};
	// 	} else {
	// 		ref.current.style.display = 'block';
	// 	}
	// }
// };
const Detail = () => {
	const ref = useRef(null);
	const [active, setActive] = useState(false);
	return (
		<StyledElement>
			<div
				className="summary"
				onClick={() => {
					// toggle(ref, 500);
					setActive(!active);
				}}
			>
				<div className="title">npm run build</div>
				<div className="icon">{active ? <Minus /> : <Plus />}</div>
			</div>
			<div className="content" ref={ref}>
				<div>
					Builds the app for production to the build folder. It correctly
					bundles React in production mode and optimizes the build for the
					best performance.
				</div>
			</div>
		</StyledElement>
	);
};
export default Detail;
