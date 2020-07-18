import React, { useState, useEffect } from "react";

import SubtitleContainer from "./SubtitleContainer";
import FocusContainer from "./FocusContainer";
import Step from "./Step";
import FocusItem from "./FocusItem";
import Background from "./Background";
import Text from "./Text";
import PlayMusic from "./PlayMusic";

export default function Timeline(props) {
	const { subtitle, focus, music, background, pause_break } = props;

	const [step, setStep] = useState(0);
	useEffect(() => {
		if (pause_break.includes(step)) return;
		setTimeout(() => {
			setStep((s) => s + 1);
		}, 1000);
	}, [step]);

	const [musics] = useState(music.map((item) => new Audio(item.music)));

	return (
		<React.Fragment>
			<FocusContainer>
				{focus.map((item, index) => (
					<Step key={index} step={step} when={item.when}>
						<FocusItem {...item} setStep={setStep} />
					</Step>
				))}
			</FocusContainer>
			<SubtitleContainer>
				{subtitle.map((item, index) => (
					<Step key={index} step={step} when={item.when}>
						<Text {...item} />
					</Step>
				))}
			</SubtitleContainer>
			<React.Fragment>
				{background.map((item, index) => (
					<Step key={index} step={step} when={item.when}>
						<Background src={item.background} style={item.style} />
					</Step>
				))}
			</React.Fragment>
			<React.Fragment>
				{music.map((item, index) => (
					<Step key={index} step={step} when={item.when}>
						<PlayMusic music={musics[index]} />
					</Step>
				))}
			</React.Fragment>
		</React.Fragment>
	);
}
