!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function r(e){return e&&e.constructor===Symbol?"symbol":typeof e}var o="Expected a function",i=NaN,a="[object Symbol]",u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,v="object"==typeof self&&self&&self.Object===Object&&self,m=s||v||Function("return this")(),p=Object.prototype.toString,g=Math.max,b=Math.min,y=function(){return m.Date.now()};function S(e,t,n){var r,i,a,u,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function m(t){var n=r,o=i;return r=i=void 0,l=t,u=e.apply(o,n)}function p(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=a}function S(){var e=y();if(p(e))return h(e);f=setTimeout(S,function(e){var n=t-(e-c);return s?b(n,a-(e-l)):n}(e))}function h(e){return f=void 0,v&&r?m(e):(r=i=void 0,u)}function w(){var e=y(),n=p(e);if(r=arguments,i=this,c=e,n){if(void 0===f)return function(e){return l=e,f=setTimeout(S,t),d?m(e):u}(c);if(s)return f=setTimeout(S,t),m(c)}return void 0===f&&(f=setTimeout(S,t)),u}return t=O(t)||0,j(n)&&(d=!!n.leading,a=(s="maxWait"in n)?g(O(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=c=i=f=void 0},w.flush=function(){return void 0===f?u:h(y())},w}function j(e){var t=void 0===e?"undefined":r(e);return!!e&&("object"==t||"function"==t)}function O(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":r(e))||function(e){return!!e&&"object"==typeof e}(e)&&p.call(e)==a}(e))return i;if(j(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=j(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=c.test(e);return n||l.test(e)?d(e.slice(2),n?2:8):f.test(e)?i:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return j(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),S(e,t,{leading:r,maxWait:t,trailing:i})};var h="feedback-form-state",w={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")},x=w.form,T=w.input,E=w.textarea;x.addEventListener("submit",(function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem(h));t&&console.log(t);e.target.reset(),localStorage.removeItem(h)})),x.addEventListener("input",e(t)((function(){var e={email:T.value,message:E.value};localStorage.setItem(h,JSON.stringify(e))}),500));var I=localStorage.getItem(h),N=JSON.parse(I);I&&(console.log(N),T.value=N.email,E.value=N.message)}();
//# sourceMappingURL=03-feedback.8d748c34.js.map
