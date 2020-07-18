import React, { useState, useEffect } from "react";

import GlobalStyle from "./GlobalStyle";
import Timeline from "./Timeline";

function Menu({ title, setStart, sources, description }) {
	const [loading, setLoading] = useState(false);
	const [count, setCount] = useState(0)
	useEffect(() => {
		if (loading) {
			sources.forEach(src => {
				const img = new Image();
				img.src = src;
				img.addEventListener('load', function() {
					setCount(state => state + 1);
					console.log(src);
				})
			})
		}
	}, [loading]);
	useEffect(() => {
		if (count === sources.length) {
			setStart(true);
		}
	})
	return (
		<div className="container">
			<div className="title">{title}</div>
	<p>{description}</p>
			{loading ? (
				<div>Loading ({parseInt(count / sources.length * 100)}%)</div>
			) : (
				<button onClick={() => setLoading(true)}>Mulai</button>
			)}
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
				.title {
					font-size: 1.5rem;
					margin: 1.5rem 0;
				}
			`}</style>
		</div>
	);
}

export default function App(props) {
	const { Story } = props;
	const [start, setStart] = useState(false);
	const sources = [
		...Story.BACKGROUND.filter((item) => item.background !== ".").map(
			(item) => item.background
		),
		...Story.FOCUS.filter((item) => item.type === "picture").map(
			(item) => item.asset
		),
	];
	console.log(sources);
	return (
		<GlobalStyle>
			{!start ? (
				<Menu
					title="ROKET PINGFEST"
					description="collab dimas x bunga"
					setStart={setStart}
					sources={sources}
				/>
			) : (
				<Timeline
					focus={Story.FOCUS}
					subtitle={Story.SUBTITLE}
					music={Story.MUSIC}
					background={Story.BACKGROUND}
					pause_break={Story.PAUSE_BREAK}
				/>
			)}
		</GlobalStyle>
	);
}
