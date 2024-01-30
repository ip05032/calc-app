import React from 'react'

const Result = ({value}) => {

	console.log("renderizacion de result")

	return (
		<div className="result">
			{value}
		</div>
	)
}

export default Result
