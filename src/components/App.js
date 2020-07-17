import React, { useState, useEffect } from "react";

import GlobalStyle from "./GlobalStyle";
import SubtitleContainer from "./SubtitleContainer";
import FocusContainer from "./FocusContainer";
import Step from "./Step";
import FocusItem from "./FocusItem";
import Background from "./Background";
import Text from "./Text";
import PlayMusic from "./PlayMusic";

export default function App(props) {
	const { Story } = props;

	const [step, setStep] = useState(0);
	useEffect(() => {
		if (Story.PAUSE_BREAK.includes(step)) return;
		setTimeout(() => {
			setStep((s) => s + 1);
		}, 1000);
	}, [step]);

	const [music] = useState(Story.MUSIC.map((item) => new Audio(item.music)));

	return (
		<GlobalStyle>
			<FocusContainer>
				{Story.FOCUS.map((item, index) => (
					<Step key={index} step={step} when={item.when}>
						<FocusItem {...item} setStep={setStep} />
					</Step>
				))}
			</FocusContainer>
			<SubtitleContainer>
				{Story.SUBTITLE.map((item, index) => (
					<Step key={index} step={step} when={item.when}>
						<Text {...item} />
					</Step>
				))}
			</SubtitleContainer>
			<React.Fragment>
				{Story.BACKGROUND.map((item, index) => (
					<Step key={index} step={step} when={item.when}>
						<Background src={item.background} style={item.style} />
					</Step>
				))}
			</React.Fragment>
			<React.Fragment>
				{Story.MUSIC.map((item, index) => (
					<Step key={index} step={step} when={item.when}>
						<PlayMusic music={music[index]} />
					</Step>
				))}
			</React.Fragment>
		</GlobalStyle>
	);
}
