import React from 'react'
import PortableText from '@sanity/block-content-to-react'


function Body(props) {
	const { doc }  = props;

	return (
		<div>
			<PortableText blocks={doc.body} />

		</div>

	)
}

export default Body