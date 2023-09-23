import React from 'react';

import './../css/homeContent.css';
import HomeContentColumn from './HomeContentColumn';
/**
 * HomeContent Component
 * @param {object} props - React props containing grouping, ordering, data, and users.
 * @returns {React.node} Component for displaying content based on grouping and ordering.
 */
export default function HomeContent(props) {
	const { data, users, grouping, ordering } = props;
	return (
		<div className='home-content'>
			{Object.keys(data[grouping]).map((el, idx) => {
				return (
					<HomeContentColumn
						key={idx}
						heading={el}
						data={data[grouping][el]}
						users={users}
						ordering={ordering}
						grouping={grouping}
					/>
				);
			})}
		</div>
	);
}
