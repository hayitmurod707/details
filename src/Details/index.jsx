import { array } from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';
import Detail from './Detail';
const StyledElement = styled.div`
	display: flex;
	flex-direction: column;
	width: 700px;
`;
const Details = ({ details }) => {
	const [activePanel, setActivePanel] = useState(0);
	return (
		<StyledElement>
			{details?.map((detail, index) => (
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
