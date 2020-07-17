import React from "react";

import fontRegular from "../fonts/font-regular.ttf";
import fontBold from "../fonts/font-bold.ttf";

export default function GlobalStyle(props) {
	return (
		<React.Fragment>
			{props.children}
			<style jsx global>{`
				* {
					box-sizing: border-box;
					font-family: "HVT", Arial, Helvetica, sans-serif;
				}
				
				@font-face {
					font-family: "HVT";
					src: url("${fontRegular}") format("truetype");
					font-weight: normal;
					font-style: normal;
				}
				
				@font-face {
					font-family: "HVT";
					src: url("${fontBold}") format("truetype");
					font-weight: bold;
					font-style: normal;
				}
				
				html,
				body,
				#root {
					width: 100%;
					height: 100%;
					margin: 0;
					padding: 0;
					background-color: black;
					color: white;
				}
				
				@keyframes bg0 {
					0% {
						background-position-y: 0;
					}
					100% {
						background-position-y: 768px;
					}
				}

				@keyframes bg1 {
					0% {
						background-position-x: 0;
					}
					100% {
						background-position-x: 750px;
					}
				}
			`}</style>
		</React.Fragment>
	);
}
