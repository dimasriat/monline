export default function objectFromStory(rawStory) {
	let StoryObject = {};

	rawStory.trim()
		.split("\n\n")
		.forEach((group) => {
			const item = group.split("\n");
			const [type] = item;
			StoryObject[type] = [...item.filter((str) => str != type)];
		});

	StoryObject["SUBTITLE"] = StoryObject["SUBTITLE"].map((item) => {
		const [time, text, style] = item.split(" __ ");
		const when = time.split("-").map((txt) => parseInt(txt));
		return { when, text, style };
	});
	
	StoryObject["FOCUS"] = StoryObject["FOCUS"].map((item) => {
		const [time, type, asset, style] = item.split(" __ ");
		const when = time.split("-").map((txt) => parseInt(txt));
		return { when, type, asset, style };
	});
	
	StoryObject["BACKGROUND"] = StoryObject["BACKGROUND"].map((item) => {
		const [time, background, style] = item.split(" __ ");
		const when = time.split("-").map((txt) => parseInt(txt));
		return { when, background, style };
	});
	
	StoryObject["MUSIC"] = StoryObject["MUSIC"].map((item) => {
		const [time, music] = item.split(" __ ");
		const when = time.split("-").map((txt) => parseInt(txt));
		return { when, music };
	});

	// StoryObject["ANIMATION"] = StoryObject["ANIMATION"].map(item => item.trim()).join('');

	StoryObject["PAUSE_BREAK"] = StoryObject["FOCUS"]
		.filter((item) => item.type === "button")
		.map((item) => item.when[0]);
	/**
	 * returning the function with object
	 */
	return StoryObject;
}