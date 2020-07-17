import StoryObject from "./sample";

console.log(JSON.stringify(StoryObject, null, 2));

export default StoryObject;

/*
StoryObject = {
	SUBTITLE: [
		{
			when: [3, 4],
			text: "oy",
		},
		{
			when: [48, 50],
			text: "doa cetak tebal",
			style: "font-weight: bold;",
		},
	],
	FOCUS: [
		{
			when: [9, 21],
			type: "picture",
			asset: "bef572971b0fec84f145ffbc256a07db.jpeg",
		},
		{
			when: [26, 27],
			type: "button",
			asset: "TIUP!",
		},
		{
			when: [29, 35],
			type: "text",
			asset: "HBD BUNGAAAAA",
			style: "color: yellow;",
		},
	],
	BACKGROUND: [
		{
			when: [9, 27],
			background: "0ffe1f21e22a0dcd8fa9460692b25093.png",
			style: "background-size: cover;",
		},
		{
			when: [27, 30],
			background: ".",
			style: "background-color: black;",
		},
		{
			when: [30, 3600],
			background: "36e8238ebac5827933a2fb040c48fa14.jpg",
			style: "animation: bg1 24s linear infinite;",
		},
	],
	MUSIC: [
		{
			when: [27, 3600],
			music: "bf2b49f3129f9691ff3636b5e4c0497b.mp3",
		},
	],
	PAUSE_BREAK: [26],
};
*/
