import React from "react";
import { render } from "react-dom";
import App from "./src/components/App";

import StoryObject from "./clients/current";

render(<App Story={StoryObject} />, document.querySelector("#root"));
