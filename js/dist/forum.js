(()=>{var t={195:(t,i,e)=>{t.exports=e(236)},236:t=>{var i=function(t){"use strict";var i,e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",s=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function h(t,i,e){return Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[i]}try{h({},"")}catch(t){h=function(t,i,e){return t[i]=e}}function c(t,i,e,n){var r=i&&i.prototype instanceof m?i:m,o=Object.create(r.prototype),s=new P(n||[]);return o._invoke=function(t,i,e){var n=f;return function(r,o){if(n===d)throw new Error("Generator is already running");if(n===l){if("throw"===r)throw o;return T()}for(e.method=r,e.arg=o;;){var s=e.delegate;if(s){var a=S(s,e);if(a){if(a===v)continue;return a}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=l,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=d;var h=u(t,i,e);if("normal"===h.type){if(n=e.done?l:p,h.arg===v)continue;return{value:h.arg,done:e.done}}"throw"===h.type&&(n=l,e.method="throw",e.arg=h.arg)}}}(t,e,s),o}function u(t,i,e){try{return{type:"normal",arg:t.call(i,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var f="suspendedStart",p="suspendedYield",d="executing",l="completed",v={};function m(){}function y(){}function g(){}var x={};h(x,o,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(j([])));b&&b!==e&&n.call(b,o)&&(x=b);var O=g.prototype=m.prototype=Object.create(x);function k(t){["next","throw","return"].forEach((function(i){h(t,i,(function(t){return this._invoke(i,t)}))}))}function L(t,i){function e(r,o,s,a){var h=u(t[r],t,o);if("throw"!==h.type){var c=h.arg,f=c.value;return f&&"object"==typeof f&&n.call(f,"__await")?i.resolve(f.__await).then((function(t){e("next",t,s,a)}),(function(t){e("throw",t,s,a)})):i.resolve(f).then((function(t){c.value=t,s(c)}),(function(t){return e("throw",t,s,a)}))}a(h.arg)}var r;this._invoke=function(t,n){function o(){return new i((function(i,r){e(t,n,i,r)}))}return r=r?r.then(o,o):o()}}function S(t,e){var n=t.iterator[e.method];if(n===i){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=i,S(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var r=u(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,v;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=i),e.delegate=null,v):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function E(t){var i={tryLoc:t[0]};1 in t&&(i.catchLoc=t[1]),2 in t&&(i.finallyLoc=t[2],i.afterLoc=t[3]),this.tryEntries.push(i)}function M(t){var i=t.completion||{};i.type="normal",delete i.arg,t.completion=i}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function j(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,s=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=i,e.done=!0,e};return s.next=s}}return{next:T}}function T(){return{value:i,done:!0}}return y.prototype=g,h(O,"constructor",g),h(g,"constructor",y),y.displayName=h(g,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var i="function"==typeof t&&t.constructor;return!!i&&(i===y||"GeneratorFunction"===(i.displayName||i.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,h(t,a,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},k(L.prototype),h(L.prototype,s,(function(){return this})),t.AsyncIterator=L,t.async=function(i,e,n,r,o){void 0===o&&(o=Promise);var s=new L(c(i,e,n,r),o);return t.isGeneratorFunction(e)?s:s.next().then((function(t){return t.done?t.value:s.next()}))},k(O),h(O,a,"Generator"),h(O,o,(function(){return this})),h(O,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var i=[];for(var e in t)i.push(e);return i.reverse(),function e(){for(;i.length;){var n=i.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=j,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(M),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=i)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=i),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return r("end");if(s.tryLoc<=this.prev){var h=n.call(s,"catchLoc"),c=n.call(s,"finallyLoc");if(h&&c){if(this.prev<s.catchLoc)return r(s.catchLoc,!0);if(this.prev<s.finallyLoc)return r(s.finallyLoc)}else if(h){if(this.prev<s.catchLoc)return r(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return r(s.finallyLoc)}}}},abrupt:function(t,i){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=i&&i<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=t,s.arg=i,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(s)},complete:function(t,i){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&i&&(this.next=i),v},finish:function(t){for(var i=this.tryEntries.length-1;i>=0;--i){var e=this.tryEntries[i];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),M(e),v}},catch:function(t){for(var i=this.tryEntries.length-1;i>=0;--i){var e=this.tryEntries[i];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var r=n.arg;M(e)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=i),v}},t}(t.exports);try{regeneratorRuntime=i}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=i:Function("r","regeneratorRuntime = r")(i)}}},i={};function e(n){var r=i[n];if(void 0!==r)return r.exports;var o=i[n]={exports:{}};return t[n](o,o.exports,e),o.exports}e.n=t=>{var i=t&&t.__esModule?()=>t.default:()=>t;return e.d(i,{a:i}),i},e.d=(t,i)=>{for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})},e.o=(t,i)=>Object.prototype.hasOwnProperty.call(t,i),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var n={};(()=>{"use strict";e.r(n);const t=flarum.core.compat["forum/app"];var i=e.n(t);const r=flarum.core.compat.extend,o=flarum.core.compat["common/components/HeaderPrimary"];var s=e.n(o);function a(){return a=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},a.apply(this,arguments)}function h(t,i,e,n,r,o,s){try{var a=t[o](s),h=a.value}catch(t){return void e(t)}a.done?i(h):Promise.resolve(h).then(n,r)}function c(t){return function(){var i=this,e=arguments;return new Promise((function(n,r){var o=t.apply(i,e);function s(t){h(o,n,r,s,a,"next",t)}function a(t){h(o,n,r,s,a,"throw",t)}s(void 0)}))}}function u(t,i){for(var e=0;e<i.length;e++){var n=i[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,i,e){return i&&u(t.prototype,i),e&&u(t,e),t}var p=e(195);function d(t,i){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(e)return(e=e.call(t)).next.bind(e);if(Array.isArray(t)||(e=function(t,i){if(t){if("string"==typeof t)return l(t,i);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?l(t,i):void 0}}(t))||i&&t&&"number"==typeof t.length){e&&(t=e);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t,i){(null==i||i>t.length)&&(i=t.length);for(var e=0,n=new Array(i);e<i;e++)n[e]=t[e];return n}function v(t){return Math.abs(Math.floor(t))}function m(t,i){return Math.random()*(i-t)+t}function y(t,i){return Math.floor(m(t,i+1))}function g(t,i,e,n){var r=Math.pow;return Math.sqrt(r(t-e,2)+r(i-n,2))}function x(t,i,e){if(void 0===e&&(e=1),t>360||t<0)throw new Error("Expected hue 0-360 range, got `"+t+"`");if(i>100||i<0)throw new Error("Expected lightness 0-100 range, got `"+i+"`");if(e>1||e<0)throw new Error("Expected alpha 0-1 range, got `"+e+"`");return"hsla("+t+", 100%, "+i+"%, "+e+")"}var w=function(t){if("object"==typeof t&&null!==t){if("function"==typeof Object.getPrototypeOf){var i=Object.getPrototypeOf(t);return i===Object.prototype||null===i}return"[object Object]"===Object.prototype.toString.call(t)}return!1},b=["__proto__","constructor","prototype"],O=function t(){for(var i=arguments.length,e=new Array(i),n=0;n<i;n++)e[n]=arguments[n];return e.reduce((function(i,e){return Object.keys(e).forEach((function(n){b.includes(n)||(Array.isArray(i[n])&&Array.isArray(e[n])?i[n]=e[n]:w(i[n])&&w(e[n])?i[n]=t(i[n],e[n]):i[n]=e[n])})),i}),{})},k=function(){function t(t){var i=t.x,e=t.y,n=t.ctx,r=t.hue,o=t.decay,s=t.gravity,a=t.friction,h=t.brightness,c=t.flickering,u=t.lineWidth,f=t.explosionLength;for(this.x=void 0,this.y=void 0,this.ctx=void 0,this.hue=void 0,this.friction=void 0,this.gravity=void 0,this.flickering=void 0,this.lineWidth=void 0,this.explosionLength=void 0,this.angle=void 0,this.speed=void 0,this.brightness=void 0,this.coordinates=[],this.decay=void 0,this.alpha=1,this.x=i,this.y=e,this.ctx=n,this.hue=r,this.gravity=s,this.friction=a,this.flickering=c,this.lineWidth=u,this.explosionLength=f,this.angle=m(0,2*Math.PI),this.speed=y(1,10),this.brightness=y(h.min,h.max),this.decay=m(o.min,o.max);this.explosionLength--;)this.coordinates.push([i,e])}var i=t.prototype;return i.update=function(t){this.coordinates.pop(),this.coordinates.unshift([this.x,this.y]),this.speed*=this.friction,this.x+=Math.cos(this.angle)*this.speed,this.y+=Math.sin(this.angle)*this.speed+this.gravity,this.alpha-=this.decay,this.alpha<=this.decay&&t()},i.draw=function(){var t=this.coordinates.length-1;this.ctx.beginPath(),this.ctx.lineWidth=this.lineWidth,this.ctx.fillStyle=x(this.hue,this.brightness,this.alpha),this.ctx.moveTo(this.coordinates[t][0],this.coordinates[t][1]),this.ctx.lineTo(this.x,this.y),this.ctx.strokeStyle=x(this.hue,this.flickering?m(0,this.brightness):this.brightness,this.alpha),this.ctx.stroke()},t}(),L=function(){function t(t,i){this.active=!1,this.x=void 0,this.y=void 0,this.options=t,this.canvas=i,this.pointerDown=this.pointerDown.bind(this),this.pointerUp=this.pointerUp.bind(this),this.pointerMove=this.pointerMove.bind(this)}var i=t.prototype;return i.mount=function(){this.canvas.addEventListener("pointerdown",this.pointerDown),this.canvas.addEventListener("pointerup",this.pointerUp),this.canvas.addEventListener("pointermove",this.pointerMove)},i.unmount=function(){this.canvas.removeEventListener("pointerdown",this.pointerDown),this.canvas.removeEventListener("pointerup",this.pointerUp),this.canvas.removeEventListener("pointermove",this.pointerMove)},i.usePointer=function(t,i){var e=this.mouseOptions,n=e.click,r=e.move;(n||r)&&(this.x=t.pageX-this.canvas.offsetLeft,this.y=t.pageY-this.canvas.offsetTop,this.active=i)},i.pointerDown=function(t){this.usePointer(t,this.mouseOptions.click)},i.pointerUp=function(t){this.usePointer(t,!1)},i.pointerMove=function(t){this.usePointer(t,this.active)},f(t,[{key:"mouseOptions",get:function(){return this.options.mouse}}]),t}(),S=function(){function t(){this.hue=void 0,this.rocketsPoint=void 0,this.opacity=void 0,this.acceleration=void 0,this.friction=void 0,this.gravity=void 0,this.particles=void 0,this.explosion=void 0,this.mouse=void 0,this.boundaries=void 0,this.sound=void 0,this.delay=void 0,this.brightness=void 0,this.decay=void 0,this.flickering=void 0,this.intensity=void 0,this.traceLength=void 0,this.traceSpeed=void 0,this.lineWidth=void 0,this.lineStyle=void 0,this.autoresize=void 0,this.autoresize=!0,this.lineStyle="round",this.flickering=50,this.traceLength=3,this.traceSpeed=10,this.intensity=30,this.explosion=5,this.gravity=1.5,this.opacity=.5,this.particles=50,this.friction=.95,this.acceleration=1.05,this.hue={min:0,max:360},this.rocketsPoint={min:50,max:50},this.lineWidth={explosion:{min:1,max:3},trace:{min:1,max:2}},this.mouse={click:!1,move:!1,max:1},this.delay={min:30,max:60},this.brightness={min:50,max:80},this.decay={min:.015,max:.03},this.sound={enabled:!1,files:["explosion0.mp3","explosion1.mp3","explosion2.mp3"],volume:{min:4,max:8}},this.boundaries={height:0,width:0,x:50,y:50}}return t.prototype.update=function(t){Object.assign(this,O(this,t))},t}(),E=function(){function t(t,i){this.tick=0,this.rafId=0,this.fps=60,this.tolerance=.1,this.now=void 0,this.options=t,this.render=i}var i=t.prototype;return i.mount=function(){var t=this;this.now=performance.now();var i=1e3/this.fps;this.rafId=requestAnimationFrame((function e(n){t.rafId=requestAnimationFrame(e);var r=n-t.now;r>=i-t.tolerance&&(t.render(),t.now=n-r%i,t.tick+=r*(t.options.intensity*Math.PI)/1e3)}))},i.unmount=function(){cancelAnimationFrame(this.rafId)},t}(),M=function(){function t(t,i,e){this.resizer=void 0,this.options=t,this.updateSize=i,this.container=e}var i=t.prototype;return i.mount=function(){var t,i,e=this;if(!this.resizer){var n=(t=function(){return e.updateSize()},function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];i&&clearTimeout(i),i=setTimeout((function(){return t.apply(void 0,n)}),100)});this.resizer=new ResizeObserver(n)}this.options.autoresize&&this.resizer.observe(this.container)},i.unmount=function(){this.resizer&&this.resizer.unobserve(this.container)},t}(),P=function(){function t(t){this.buffers=[],this.audioContext=void 0,this.onInit=!1,this.options=t,this.init()}var i=t.prototype;return i.init=function(){!this.onInit&&this.isEnabled&&(this.onInit=!0,this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.loadSounds())},i.loadSounds=function(){var t=c(p.mark((function t(){var i,e,n,r,o=this;return p.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=d(this.soundOptions.files);case 1:if((e=i()).done){t.next=11;break}return n=e.value,t.next=5,fetch(n);case 5:return t.next=7,t.sent.arrayBuffer();case 7:r=t.sent,this.audioContext.decodeAudioData(r).then((function(t){o.buffers.push(t)})).catch((function(t){throw t}));case 9:t.next=1;break;case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),i.play=function(){if(this.isEnabled&&this.buffers.length){var t=this.audioContext.createBufferSource(),i=this.buffers[y(0,this.buffers.length-1)],e=this.audioContext.createGain();t.buffer=i,e.gain.value=m(this.soundOptions.volume.min/100,this.soundOptions.volume.max/100),e.connect(this.audioContext.destination),t.connect(e),t.start(0)}else this.init()},f(t,[{key:"isEnabled",get:function(){return this.options.sound.enabled}},{key:"soundOptions",get:function(){return this.options.sound}}]),t}(),j=function(){function t(t){var i=t.x,e=t.y,n=t.dx,r=t.dy,o=t.ctx,s=t.hue,a=t.speed,h=t.traceLength,c=t.acceleration;for(this.x=void 0,this.y=void 0,this.sx=void 0,this.sy=void 0,this.dx=void 0,this.dy=void 0,this.ctx=void 0,this.hue=void 0,this.speed=void 0,this.acceleration=void 0,this.traceLength=void 0,this.totalDistance=void 0,this.angle=void 0,this.brightness=void 0,this.coordinates=[],this.currentDistance=0,this.x=i,this.y=e,this.sx=i,this.sy=e,this.dx=n,this.dy=r,this.ctx=o,this.hue=s,this.speed=a,this.traceLength=h,this.acceleration=c,this.totalDistance=g(i,e,n,r),this.angle=Math.atan2(r-e,n-i),this.brightness=y(50,70);this.traceLength--;)this.coordinates.push([i,e])}var i=t.prototype;return i.update=function(t){this.coordinates.pop(),this.coordinates.unshift([this.x,this.y]),this.speed*=this.acceleration;var i=Math.cos(this.angle)*this.speed,e=Math.sin(this.angle)*this.speed;this.currentDistance=g(this.sx,this.sy,this.x+i,this.y+e),this.currentDistance>=this.totalDistance?t(this.dx,this.dy,this.hue):(this.x+=i,this.y+=e)},i.draw=function(){var t=this.coordinates.length-1;this.ctx.beginPath(),this.ctx.moveTo(this.coordinates[t][0],this.coordinates[t][1]),this.ctx.lineTo(this.x,this.y),this.ctx.strokeStyle=x(this.hue,this.brightness),this.ctx.stroke()},t}(),T=function(){function t(t,i){void 0===i&&(i={}),this.target=void 0,this.container=void 0,this.canvas=void 0,this.ctx=void 0,this.width=void 0,this.height=void 0,this.traces=[],this.explosions=[],this.waitStopRaf=void 0,this.running=!1,this.opts=void 0,this.sound=void 0,this.resize=void 0,this.mouse=void 0,this.raf=void 0,this.target=t,this.container=t,this.opts=new S,this.updateOptions(i),this.createCanvas(this.target),this.sound=new P(this.opts),this.resize=new M(this.opts,this.updateSize.bind(this),this.container),this.mouse=new L(this.opts,this.canvas),this.raf=new E(this.opts,this.render.bind(this))}var i=t.prototype;return i.start=function(){this.running||(this.canvas.isConnected||this.createCanvas(this.target),this.running=!0,this.resize.mount(),this.mouse.mount(),this.raf.mount())},i.stop=function(t){void 0===t&&(t=!1),!this.running||(this.running=!1,this.resize.unmount(),this.mouse.unmount(),this.raf.unmount(),this.clear(),t&&this.canvas.remove())},i.waitStop=function(){var t=c(p.mark((function t(i){var e=this;return p.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.running){t.next=2;break}return t.abrupt("return",new Promise((function(t){e.waitStopRaf=function(){!e.waitStopRaf||(requestAnimationFrame(e.waitStopRaf),!e.traces.length&&!e.explosions.length&&(e.waitStopRaf=null,e.stop(i),t()))},e.waitStopRaf()})));case 2:case"end":return t.stop()}}),t,this)})));return function(i){return t.apply(this,arguments)}}(),i.pause=function(){this.running=!this.running,this.running?this.raf.mount():this.raf.unmount()},i.clear=function(){!this.ctx||(this.traces=[],this.explosions=[],this.ctx.clearRect(0,0,this.width,this.height))},i.launch=function(t){void 0===t&&(t=1);for(var i=0;i<t;i++)this.createTrace();this.waitStopRaf||(this.start(),this.waitStop())},i.updateOptions=function(t){this.opts.update(t)},i.updateSize=function(t){var i=void 0===t?{}:t,e=i.width,n=void 0===e?this.container.clientWidth:e,r=i.height,o=void 0===r?this.container.clientHeight:r;this.width=n,this.height=o,this.canvas.width=n,this.canvas.height=o,this.updateBoundaries(a({},this.opts.boundaries,{width:n,height:o}))},i.updateBoundaries=function(t){this.updateOptions({boundaries:t})},i.createCanvas=function(t){t instanceof HTMLCanvasElement?(t.isConnected||document.body.append(t),this.canvas=t):(this.canvas=document.createElement("canvas"),this.container.append(this.canvas)),this.ctx=this.canvas.getContext("2d"),this.updateSize()},i.render=function(){if(this.ctx&&this.running){var t=this.opts,i=t.opacity,e=t.lineStyle,n=t.lineWidth;this.ctx.globalCompositeOperation="destination-out",this.ctx.fillStyle="rgba(0, 0, 0, "+i+")",this.ctx.fillRect(0,0,this.width,this.height),this.ctx.globalCompositeOperation="lighter",this.ctx.lineCap=e,this.ctx.lineJoin="round",this.ctx.lineWidth=m(n.trace.min,n.trace.max),this.initTrace(),this.drawTrace(),this.drawExplosion()}},i.createTrace=function(){var t=this.opts,i=t.hue,e=t.rocketsPoint,n=t.boundaries,r=t.traceLength,o=t.traceSpeed,s=t.acceleration,a=t.mouse;this.traces.push(new j({x:this.width*y(e.min,e.max)/100,y:this.height,dx:this.mouse.x&&a.move||this.mouse.active?this.mouse.x:y(n.x,n.width-2*n.x),dy:this.mouse.y&&a.move||this.mouse.active?this.mouse.y:y(n.y,.5*n.height),ctx:this.ctx,hue:y(i.min,i.max),speed:o,acceleration:s,traceLength:v(r)}))},i.initTrace=function(){if(!this.waitStopRaf){var t=this.opts,i=t.delay,e=t.mouse;(this.raf.tick>y(i.min,i.max)||this.mouse.active&&e.max>this.traces.length)&&(this.createTrace(),this.raf.tick=0)}},i.drawTrace=function(){for(var t=this,i=this.traces.length;i--;)this.traces[i].draw(),this.traces[i].update((function(e,n,r){t.initExplosion(e,n,r),t.sound.play(),t.traces.splice(i,1)}))},i.initExplosion=function(t,i,e){for(var n=this.opts,r=n.particles,o=n.flickering,s=n.lineWidth,a=n.explosion,h=n.brightness,c=n.friction,u=n.gravity,f=n.decay,p=v(r);p--;)this.explosions.push(new k({x:t,y:i,ctx:this.ctx,hue:e,friction:c,gravity:u,flickering:y(0,100)<=o,lineWidth:m(s.explosion.min,s.explosion.max),explosionLength:v(a),brightness:h,decay:f}))},i.drawExplosion=function(){for(var t=this,i=this.explosions.length;i--;)this.explosions[i].draw(),this.explosions[i].update((function(){t.explosions.splice(i,1)}))},f(t,[{key:"isRunning",get:function(){return this.running}},{key:"version",get:function(){return"2.10.2"}},{key:"currentOptions",get:function(){return this.opts}}]),t}();i().initializers.add("ziven-fireworks",(function(){(0,r.extend)(s().prototype,"oncreate",(function(){if(!0===i().forum.attribute("fireworksOptionShowFireworks")){var t=document.createElement("div");t.className="fireworksContainer",document.body.appendChild(t);var e=document.querySelector(".fireworksContainer"),n=i().forum.attribute("fireworksOptionOptionBrightnessMin")||50,r=i().forum.attribute("fireworksOptionOptionBrightnessMax")||80,o=i().forum.attribute("fireworksOptionOptionDecayMin")||.015,s=i().forum.attribute("fireworksOptionOptionDecayMax")||.03,a=i().forum.attribute("fireworksOptionOptionDelayMin")||30,h=i().forum.attribute("fireworksOptionOptionDelayMax")||60,c=i().forum.attribute("fireworksOptionOptionRocketsPointMin")||50,u=i().forum.attribute("fireworksOptionOptionRocketsPointMax")||50,f=i().forum.attribute("fireworksOptionOpacity")||.5,p=i().forum.attribute("fireworksOptionAcceleration")||1.05,d=i().forum.attribute("fireworksOptionFriction")||.97,l=i().forum.attribute("fireworksOptionGravity")||1.5,v=i().forum.attribute("fireworksOptionParticles")||50,m=i().forum.attribute("fireworksOptionTraceLength")||3,y=i().forum.attribute("fireworksOptionTraceSpeed")||10,g=i().forum.attribute("fireworksOptionExplosion")||5,x=i().forum.attribute("fireworksOptionIntensity")||5,w=i().forum.attribute("fireworksOptionFlickering")||50,b=i().forum.attribute("fireworksOptionLineStyle")||"round",O=i().forum.attribute("fireworksOptionHueMin")||0,k=i().forum.attribute("fireworksOptionHueMax")||345,L=i().forum.attribute("fireworksOptionOptionLineWidthExplosionMin")||1,S=i().forum.attribute("fireworksOptionOptionLineWidthExplosionMax")||4,E=i().forum.attribute("fireworksOptionOptionLineWidthTraceMin")||.1,M=i().forum.attribute("fireworksOptionOptionLineWidthTraceMax")||1;new T(e,{autoresize:!0,opacity:f,acceleration:p,friction:d,gravity:l,particles:v,traceLength:m,traceSpeed:y,explosion:g,intensity:x,flickering:w,lineStyle:b,hue:{min:O,max:k},delay:{min:a,max:h},rocketsPoint:{min:c,max:u},lineWidth:{explosion:{min:L,max:S},trace:{min:E,max:M}},brightness:{min:n,max:r},decay:{min:o,max:s},mouse:{click:!1,move:!1,max:1}}).start()}}))}))})(),module.exports=n})();
//# sourceMappingURL=forum.js.map