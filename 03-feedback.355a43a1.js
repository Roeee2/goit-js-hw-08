!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,b=Math.min,g=function(){return d.Date.now()};function p(e,t,n){var o,r,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(i);function p(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function w(e){return c=e,f=setTimeout(h,t),s?p(e):u}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function h(){var e=g();if(O(e))return S(e);f=setTimeout(h,function(e){var n=t-(e-l);return d?b(n,a-(e-c)):n}(e))}function S(e){return f=void 0,v&&o?p(e):(o=r=void 0,u)}function T(){var e=g(),n=O(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return w(l);if(d)return f=setTimeout(h,t),p(l)}return void 0===f&&(f=setTimeout(h,t)),u}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},T.flush=function(){return void 0===f?u:S(g())},T}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var i=u.test(t);return i||f.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};var w=document.querySelector("form.feedback-form"),O=w.elements.email,h=w.elements.message;w.addEventListener("input",e(t)((function(){var e={email:O.value,message:h.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),window.addEventListener("DOMContentLoaded",(function(){var e=localStorage.getItem("feedback-form-state");if(e){var t=JSON.parse(e);O.value=t.email,h.value=t.message}else O.value="",h.value=""})),w.addEventListener("submit",(function(e){console.log(O.value),console.log(h.value),e.preventDefault(),localStorage.removeItem("feedback-form-state"),w.reset()}))}();
//# sourceMappingURL=03-feedback.355a43a1.js.map
