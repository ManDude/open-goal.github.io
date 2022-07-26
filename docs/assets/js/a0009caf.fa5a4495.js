/*! For license information please see a0009caf.fa5a4495.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7442],{5037:function(e,t,r){r.r(t),r.d(t,{default:function(){return c}});var n=r(74165),a=r(15861),o=r(67294),i=r(93659);function l(){var e=(0,o.useState)([]),t=e[0],r=e[1];return(0,o.useEffect)((0,a.Z)((0,n.Z)().mark((function e(){var t,a,o,i,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/search/issues?q=org:open-goal+is:pr+is:merged&sort=updated");case 2:return t=e.sent,e.next=5,t.json();case 5:for(a=e.sent,5,o=[],i=0;i<5;i++)null!=(l=a.items[i]).body&&0!=l.body.length||(l.body="No Description"),l.body=(n=l.body,c=250,n.length<=c?n:n.slice(0,c)+"..."),l.repository_url.includes("jak-project")?(l.icon="controller",l.color="primary"):l.repository_url.includes("launcher")?(l.icon="arrow-up-square",l.color="warning"):(l.icon="question-circle",l.color="neutral"),o.push(l);r(o);case 10:case"end":return e.stop()}var n,c}),e)}))),[]),0==t.length?o.createElement("sl-spinner",{style:{fontSize:"3rem"}}):o.createElement("div",null,t.map((function(e){return o.createElement("sl-alert",{variant:e.color,open:!0,class:"change-card"},o.createElement("sl-icon",{slot:"icon",name:e.icon}),o.createElement("a",{href:e.html_url,target:"_blank"},o.createElement("strong",null,e.title)," - By ",e.user.login),o.createElement("br",null),e.body)})))}function c(){return o.createElement(i.Z,{title:"Progress",description:"Project Progress"},o.createElement("main",{className:"sl-theme-dark"},o.createElement("section",{className:"home-section",style:{marginTop:0}},o.createElement("div",{className:"container"},o.createElement("div",{className:"row"},o.createElement("div",{className:"col"},o.createElement("h1",{className:"monospaced"},"Jak & Daxter - The Precursor Legacy"))),o.createElement("div",{className:"row mt-2"},o.createElement("div",{className:"col hotspots"},o.createElement("img",{src:"/img/jak1/milestones-a.webp"}),o.createElement("sl-tooltip",{content:"The font renderer was the first to be added in August 9th 2021 - PR#752"},o.createElement("sl-badge",{variant:"danger",pill:!0,pulse:!0,id:"hs-jak1-1",class:"hotspot"},"1")),o.createElement("sl-tooltip",{content:"The tfrag renderer handles the bulk of the static background, first added in November 13th 2021 - PR#958"},o.createElement("sl-badge",{variant:"danger",pill:!0,pulse:!0,id:"hs-jak1-4",class:"hotspot"},"4")),o.createElement("sl-tooltip",{content:"The TIE renderer also handles the bulk of the static background, first added in December 19th 2021 - PR#1026"},o.createElement("sl-badge",{variant:"danger",pill:!0,pulse:!0,id:"hs-jak1-5",class:"hotspot"},"5")),o.createElement("sl-tooltip",{content:"Collision system added - January 15th 2022 - PR#1076"},o.createElement("sl-badge",{variant:"warning",pill:!0,pulse:!0,id:"hs-jak1-7",class:"hotspot"},"7")),o.createElement("sl-tooltip",{content:"MERC renderer added to draw things like Jak and enemies - February 3rd 2022 - PR#1124"},o.createElement("sl-badge",{variant:"danger",pill:!0,pulse:!0,id:"hs-jak1-8",class:"hotspot"},"8")),o.createElement("sl-tooltip",{content:"Eye renderer added - February 15th 2022 - PR#1169"},o.createElement("sl-badge",{variant:"danger",pill:!0,pulse:!0,id:"hs-jak1-9",class:"hotspot"},"9")),o.createElement("sl-tooltip",{content:"Generic renderer added, draw things like Jak's hair - March 6th 2022 - PR#1221"},o.createElement("sl-badge",{variant:"danger",pill:!0,pulse:!0,id:"hs-jak1-10",class:"hotspot"},"10")),o.createElement("sl-tooltip",{content:"Shadow renderer added - March 26th 2022 - PR#1247"},o.createElement("sl-badge",{variant:"danger",pill:!0,pulse:!0,id:"hs-jak1-12",class:"hotspot"},"12")),o.createElement("sl-tooltip",{content:"Shrub renderer added - March 29th 2022 - PR#1261"},o.createElement("sl-badge",{variant:"danger",pill:!0,pulse:!0,id:"hs-jak1-13",class:"hotspot"},"13")),o.createElement("sl-tooltip",{content:"Audio support added - April 19th 2022 - PR#1325"},o.createElement("sl-badge",{variant:"warning",pill:!0,pulse:!0,id:"hs-jak1-14",class:"hotspot"},"14")),o.createElement("sl-tooltip",{content:"Generic TIE renderer added - April 29th 2022 - PR#1341"},o.createElement("sl-badge",{variant:"danger",pill:!0,pulse:!0,id:"hs-jak1-15",class:"hotspot"},"15")))),o.createElement("div",{className:"row mt-2"},o.createElement("div",{className:"col hotspots"},o.createElement("img",{src:"/img/jak1/milestones-b.webp"}),o.createElement("sl-tooltip",{content:"The beginnings of the particle system was added - September 18th 2021 - PR#849"},o.createElement("sl-badge",{variant:"danger",pill:!0,pulse:!0,id:"hs-jak1-2",class:"hotspot"},"2")),o.createElement("sl-tooltip",{content:"Sky renderer and time of day support was added - October 5th 2021 - PR#883"},o.createElement("sl-badge",{variant:"danger",pill:!0,pulse:!0,id:"hs-jak1-3",class:"hotspot"},"3")),o.createElement("sl-tooltip",{content:"Wind effect added to TIE on January 2nd 2022 - PR#1046"},o.createElement("sl-badge",{variant:"danger",pill:!0,pulse:!0,id:"hs-jak1-6",class:"hotspot"},"6")),o.createElement("sl-tooltip",{content:"Ocean renderer added - March 8th 2022 - PR#1230"},o.createElement("sl-badge",{variant:"danger",pill:!0,pulse:!0,id:"hs-jak1-11",class:"hotspot"},"11")))))),o.createElement("section",{className:"home-section alternate-bg-color"},o.createElement("div",{className:"container"},o.createElement("div",{className:"row"},o.createElement("div",{className:"col"},o.createElement("h1",{className:"monospaced"},"Latest Changes"))),o.createElement("div",{className:"row mt-2"},o.createElement("div",{className:"col center"},o.createElement(l,null))))),o.createElement("section",{className:"home-section"},o.createElement("div",{className:"container"},o.createElement("div",{className:"row"},o.createElement("div",{className:"col"},o.createElement("h1",{className:"monospaced"},"Jak 2"),o.createElement("p",null,"Stay Tuned!")))))))}},15861:function(e,t,r){function n(e,t,r,n,a,o,i){try{var l=e[o](i),c=l.value}catch(s){return void r(s)}l.done?t(c):Promise.resolve(c).then(n,a)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(a,o){var i=e.apply(t,r);function l(e){n(i,a,o,l,c,"next",e)}function c(e){n(i,a,o,l,c,"throw",e)}l(void 0)}))}}r.d(t,{Z:function(){return a}})},74165:function(e,t,r){r.d(t,{Z:function(){return a}});var n=r(71002);function a(){a=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(_){s=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof p?t:p,o=Object.create(a.prototype),i=new x(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return P()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var l=k(i,r);if(l){if(l===d)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=h(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,i),o}function h(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(_){return{type:"throw",arg:_}}}e.wrap=u;var d={};function p(){}function m(){}function f(){}var v={};s(v,i,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(L([])));y&&y!==t&&r.call(y,i)&&(v=y);var E=f.prototype=p.prototype=Object.create(v);function w(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function b(e,t){function a(o,i,l,c){var s=h(e[o],e,i);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==(0,n.Z)(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){a("next",e,l,c)}),(function(e){a("throw",e,l,c)})):t.resolve(d).then((function(e){u.value=e,l(u)}),(function(e){return a("throw",e,l,c)}))}c(s.arg)}var o;this._invoke=function(e,r){function n(){return new t((function(t,n){a(e,r,t,n)}))}return o=o?o.then(n,n):n()}}function k(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method))return d;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=h(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,d;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function N(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function L(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,a=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:P}}function P(){return{value:void 0,done:!0}}return m.prototype=f,s(E,"constructor",f),s(f,"constructor",m),m.displayName=s(f,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,s(e,c,"GeneratorFunction")),e.prototype=Object.create(E),e},e.awrap=function(e){return{__await:e}},w(b.prototype),s(b.prototype,l,(function(){return this})),e.AsyncIterator=b,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new b(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(E),s(E,c,"Generator"),s(E,i,(function(){return this})),s(E,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=L,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),c=r.call(o,"finallyLoc");if(l&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),N(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;N(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}}}]);