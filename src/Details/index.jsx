import { array } from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';
import Detail from './Detail';
const StyledElement = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 700px;
	width: 100%;
`;
const Details = ({ details }) => {
	const [activePanel, setActivePanel] = useState(0);
	return (
		<StyledElement>
			{(Array.isArray(details) ? details : []).map((detail, index) => (
				<Detail
					{...detail}
					activePanel={activePanel}
					index={index}
					key={index}
					setActivePanel={setActivePanel}
				/>
			))}
		</StyledElement>
	);
};
Details.defaultProps = {
	details: [],
};
Details.propTypes = {
	details: array,
};
export default Details;
