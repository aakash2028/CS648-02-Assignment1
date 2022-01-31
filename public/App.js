"use strict";

var nameComponent = /*#__PURE__*/React.createElement("div", {
  id: "out"
}, /*#__PURE__*/React.createElement("h2", {
  id: "name_comp"
}, "Aakash Joshi"));
var pictureComponent = /*#__PURE__*/React.createElement("div", {
  id: "picture_out"
}, /*#__PURE__*/React.createElement("img", {
  id: "picture_comp",
  src: "./assignment_1.png"
}));
var introComponent = /*#__PURE__*/React.createElement("div", {
  id: "intro_out"
}, /*#__PURE__*/React.createElement("p", {
  id: "intro_comp"
}, "I am a Computer Science graduate Student at San Diego State University with extensive education in software design and development, experienced in automated software developement in Tata Consultancy Services. Fluent in English with excellent communication and interpersonal skills. A fast learner with strong time management and problem-solving skills. The idea behind taking this course is, my undergrad has laid a foundation in web technology fundamentals and now it's the interest to dwell deeper into the concepts has made me choose this course. I believe I have a decent knowledge in web concepts and by the end of this course I could get expertise in the MERN."));
var buttonComponent = /*#__PURE__*/React.createElement("div", {
  id: "button_out"
}, /*#__PURE__*/React.createElement("a", {
  href: "https://github.com/aakash2028"
}, /*#__PURE__*/React.createElement("button", {
  id: "button_comp"
}, "VIEW MY GITHUB REPO")));
ReactDOM.render(nameComponent, document.getElementById('name'));
ReactDOM.render(pictureComponent, document.getElementById('picture'));
ReactDOM.render(introComponent, document.getElementById('introduction'));
ReactDOM.render(buttonComponent, document.getElementById('button'));