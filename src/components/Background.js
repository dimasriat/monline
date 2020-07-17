import React from "react";

export default function Background(props) {
	const { src, style } = props;
	return (
		<React.Fragment>
			<style jsx global>{`
				#root {
					${src !== "" && src !== "."
						? `background-image: url('${src}');`
						: ""}
					${style ? style : ""}
				}
			`}</style>
		</React.Fragment>
	);
}
