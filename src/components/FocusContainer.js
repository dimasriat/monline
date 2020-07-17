import React from "react";

export default function FocusContainer(props) {
	return (
		<div className="container">
			{props.children}
			<style jsx>{`
				.container {
					width: 100%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					padding: 0 0.5rem;
				}
			`}</style>
		</div>
	);
}
