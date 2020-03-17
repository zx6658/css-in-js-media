'use strict';Object.defineProperty(exports,"__esModule",{value:!0});let breakpoints={smallPhone:320,phone:375,tablet:768,desktop:1024,largeDesktop:1440};const signRegex=/^[<=>]+/;function throwError(){throw"invalid media-query  :("}function throwBreakPointError(){throw"invalid breakpoint :("}function getBreakPoints(){return breakpoints}function checkValidBreakpoint(a){const b=Object.keys(breakpoints),c=Object.keys(a);return c.every(a=>b.includes(a))}function setBreakPoints(a){console.log("dd");const b=checkValidBreakpoint(a);return b?void(breakpoints={...breakpoints,...a}):throwBreakPointError()}function cssinjsMedia(){const a=Array.from(arguments).filter(checkValid),b=Array.from(arguments).length===a.length;return b?"@media "+a.map(convertToQuery).join(" and "):throwError()}function checkValid(a){const[b,c]=parseParam(a),d=!!b&&!!breakpoints[c];return d}function parseParam(a){const b=a.match(signRegex)?a.match(signRegex)[0].trim():"",c=a.replace(signRegex,"").trim();return[b,c]}function convertToQuery(a){const[b,c]=parseParam(a),d=b.includes("="),e=d?breakpoints[c]:breakpoints[c]-1,f=b.includes(">")?"min-width":"max-width";return`(${f}: ${e}px)`}exports.default=cssinjsMedia,exports.getBreakPoints=getBreakPoints,exports.setBreakPoints=setBreakPoints;
