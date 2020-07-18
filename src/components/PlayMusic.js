import React, { useEffect } from "react";

export default function PlayMusic(props) {
	useEffect(() => {
		if (props.music.duration === 0 || props.music.paused) {
			props.music.play();
		}
		return () => {
			props.music.pause();
		};
	}, []);
	return <></>;
}
