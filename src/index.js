import ReactDOM from "react-dom";
import React from "react";
import {Report} from "./js/components/Report";

import {reportData} from "./data/report";

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Report data={reportData}/>, wrapper) : false;

console.log(reportData);