webpackJsonp([8],{'./node_modules/babel-loader/lib/index.js?{"plugins":["/Users/Derek/Documents/React Projects/personal-site/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js","/Users/Derek/Documents/React Projects/personal-site/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/Derek/Documents/React Projects/personal-site/node_modules/babel-plugin-add-module-exports/lib/index.js","/Users/Derek/Documents/React Projects/personal-site/node_modules/babel-plugin-transform-object-assign/lib/index.js"],"presets":["/Users/Derek/Documents/React Projects/personal-site/node_modules/babel-preset-env/lib/index.js","/Users/Derek/Documents/React Projects/personal-site/node_modules/babel-preset-stage-0/lib/index.js","/Users/Derek/Documents/React Projects/personal-site/node_modules/babel-preset-react/lib/index.js"],"cacheDirectory":true}!./src/pages/resume.js':function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n("./node_modules/react/react.js"),c=r(l),u=n("./node_modules/gatsby-link/index.js"),d=(r(u),n("./node_modules/react-helmet/lib/Helmet.js")),p=(r(d),n("./node_modules/semantic-ui-react/dist/commonjs/index.js")),f=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),i(t,[{key:"componentWillMount",value:function(){this.setState({sections:[{sectionName:"Education",entries:[["University of Waterloo","Software Engineering 1A Undergraduate Candidate"],["Colonel By Secondary School","Completed International Baccalaureate Diploma with a score of 39"]]},{sectionName:"Skills",entries:[["React and Javascript","Have worked with React, React Native and Redux"],["C++","Have created a few projects in C++ and mainly use C++ in programming contests"],["Java","Have created an Android App with Java for musicians. It has received over 1000 downloads on the Play Store"],["Python","Use Python frequently for competitive programming. I have experience with Flask and REST APIs"]]},{sectionName:"Awards",entries:[["2017 ECOO Finals 9th Place",""],["2017 ECOO Eastern Ontario Champions",""],["2017 ECOO OCDSB Boardwide Champions",""],["Grade 12 Computer Science (ICS4U) Subject Award","Colonel By Secondary School highest ICS4U grade"],["Grades 9-12 OCDSB Silver Medal","Mainted an average of at least 90 during all four years of high school"]]},{sectionName:"Work Experience",entries:[["Gap Factory Tanger Kanata","Cashier and Sales Associate from August 2016 to July 2017"]]}]})}},{key:"render",value:function(){return c.default.createElement(p.Container,{text:!0},c.default.createElement(p.Header,{as:"h2"},"Resume"),c.default.createElement("div",null,this.state.sections.map(function(e){return c.default.createElement(m,{name:e.sectionName,entries:e.entries})})))}}]),t}(c.default.Component);t.default=f;var m=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),i(t,[{key:"render",value:function(){return c.default.createElement(p.Container,{text:!0},c.default.createElement(p.Header,{as:"h3"}," ",this.props.name," "),c.default.createElement(p.List,null,this.props.entries.map(function(e){return c.default.createElement(h,{title:e[0],text:e[1]})})),c.default.createElement(p.Divider,null))}}]),t}(l.Component),h=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return s(t,e),i(t,[{key:"render",value:function(){return c.default.createElement(p.List.Item,null,c.default.createElement("div",null,c.default.createElement(p.List.Header,{as:"h4"},this.props.title),c.default.createElement("p",{style:{fontSize:16}}," ",this.props.text," ")))}}]),t}(l.Component);e.exports=t.default}});
//# sourceMappingURL=page-component---src-pages-resume-js-d26efef4f9a4aef00094.js.map