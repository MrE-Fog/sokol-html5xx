var f;f||(f=typeof Module !== 'undefined' ? Module : {});var g={},k;for(k in f)f.hasOwnProperty(k)&&(g[k]=f[k]);var n=[],aa="./this.program";function q(a,b){throw b;}var t=!1,v=!1,ba=!1,ca=!1,da=!1;t="object"===typeof window;v="function"===typeof importScripts;ba=(ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)&&!t&&!v;da=!t&&!ba&&!v;var w="",ea,x,fa,ha;
if(ba)w=__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},x=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),n=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",ja),q=function(a){process.exit(a)},
f.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),x=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?n=scriptArgs:"undefined"!=typeof arguments&&(n=arguments),"function"===typeof quit&&(q=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&(console={}),console.log=print,console.warn=
console.error="undefined"!==typeof printErr?printErr:print);else if(t||v)v?w=self.location.href:document.currentScript&&(w=document.currentScript.src),w=0!==w.indexOf("blob:")?w.substr(0,w.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},v&&(x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ka=f.print||console.log.bind(console),z=f.printErr||console.warn.bind(console);for(k in g)g.hasOwnProperty(k)&&(f[k]=g[k]);g=null;f.arguments&&(n=f.arguments);f.thisProgram&&(aa=f.thisProgram);f.quit&&(q=f.quit);var A;f.wasmBinary&&(A=f.wasmBinary);var B;f.noExitRuntime&&(B=f.noExitRuntime);"object"!==typeof WebAssembly&&z("no native wasm support detected");var C,la=new WebAssembly.Table({initial:83,maximum:83,element:"anyfunc"}),ma=!1;function assert(a,b){a||ja("Assertion failed: "+b)}
function na(){var a=f.__sapp_emsc_onpaste;assert(a,"Cannot call unknown function _sapp_emsc_onpaste, make sure it is exported");return a}function oa(a){var b=["string"],c={string:function(a){var b=0;if(null!==a&&void 0!==a&&0!==a){var c=(a.length<<2)+1;b=pa(c);D(a,E,b,c)}return b},array:function(a){var b=pa(a.length);F.set(a,b);return b}},d=na(),e=[],h=0;if(a)for(var l=0;l<a.length;l++){var m=c[b[l]];m?(0===h&&(h=qa()),e[l]=m(a[l])):e[l]=a[l]}d.apply(null,e);0!==h&&ra(h)}
var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function G(a,b){if(a){var c=E,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&sa)a=sa.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var h=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var l=c[a++]&63;e=224==(e&240)?(e&15)<<12|h<<6|l:(e&7)<<18|h<<12|l<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function D(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var l=a.charCodeAt(h);if(55296<=l&&57343>=l){var m=a.charCodeAt(++h);l=65536+((l&1023)<<10)|m&1023}if(127>=l){if(c>=d)break;b[c++]=l}else{if(2047>=l){if(c+1>=d)break;b[c++]=192|l>>6}else{if(65535>=l){if(c+2>=d)break;b[c++]=224|l>>12}else{if(c+3>=d)break;b[c++]=240|l>>18;b[c++]=128|l>>12&63}b[c++]=128|l>>6&63}b[c++]=128|l&63}}b[c]=0;return c-e}
function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}"undefined"!==typeof TextDecoder&&new TextDecoder("utf-16le");function ua(a){var b=ta(a)+1,c=pa(b);D(a,F,c,b);return c}function va(a){0<a%65536&&(a+=65536-a%65536);return a}var buffer,F,E,H,wa,I,xa,J,K;
function ya(a){buffer=a;f.HEAP8=F=new Int8Array(a);f.HEAP16=H=new Int16Array(a);f.HEAP32=I=new Int32Array(a);f.HEAPU8=E=new Uint8Array(a);f.HEAPU16=wa=new Uint16Array(a);f.HEAPU32=xa=new Uint32Array(a);f.HEAPF32=J=new Float32Array(a);f.HEAPF64=K=new Float64Array(a)}var za=f.TOTAL_MEMORY||33554432;f.wasmMemory?C=f.wasmMemory:C=new WebAssembly.Memory({initial:za/65536});C&&(buffer=C.buffer);za=buffer.byteLength;ya(buffer);I[478896]=7158624;
function Aa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b();else{var c=b.ec;"number"===typeof c?void 0===b.Wb?f.dynCall_v(c):f.dynCall_vi(c,b.Wb):c(void 0===b.Wb?null:b.Wb)}}}var Ba=[],Ca=[],Da=[],Ea=[],Fa=[];function Ga(){var a=f.preRun.shift();Ba.unshift(a)}var L=0,Ha=null,Ia=null;f.preloadedImages={};f.preloadedAudios={};function ja(a){if(f.onAbort)f.onAbort(a);ka(a);z(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Ja(){var a=M;return String.prototype.startsWith?a.startsWith("data:application/octet-stream;base64,"):0===a.indexOf("data:application/octet-stream;base64,")}var M="mipmap-sapp-ui.wasm";if(!Ja()){var La=M;M=f.locateFile?f.locateFile(La,w):w+La}function Ma(){try{if(A)return new Uint8Array(A);if(x)return x(M);throw"both async and sync fetching of the wasm failed";}catch(a){ja(a)}}
function Na(){return A||!t&&!v||"function"!==typeof fetch?new Promise(function(a){a(Ma())}):fetch(M,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+M+"'";return a.arrayBuffer()}).catch(function(){return Ma()})}Ca.push({ec:function(){Oa()}});var Pa=0,Qa=0,N=0,Ra=0,Sa=0,Ta=null,Ua=null,Va=!1;function Wa(){for(var a=O.length-1;0<=a;--a)Xa(a);O=[];Ya=[]}var Ya=[];
function Za(){if($a&&ab.Ob)for(var a=0;a<Ya.length;++a){var b=Ya[a];Ya.splice(a,1);--a;b.pc.apply(this,b.jc)}}var $a=0,ab=null,O=[];function bb(){return-1!==navigator.userAgent.indexOf("MSIE")||0<navigator.appVersion.indexOf("Trident/")}function Xa(a){var b=O[a];b.target.removeEventListener(b.Nb,b.cc,b.Pb);O.splice(a,1)}
function P(a){function b(b){++$a;ab=a;Za();a.Sb(b);Za();--$a}if(a.Qb)a.cc=b,a.target.addEventListener(a.Nb,b,a.Pb),O.push(a),Va||(Ea.push(Wa),Va=!0);else for(var c=0;c<O.length;++c)O[c].target==a.target&&O[c].Nb==a.Nb&&Xa(c--)}var cb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function Q(a){try{if(!a)return window;"number"===typeof a&&(a=cb[a]||G(a));return"#window"===a?window:"#document"===a?document:"#screen"===a?screen:"#canvas"===a?f.canvas:"string"===typeof a?document.getElementById(a):a}catch(b){return null}}function db(a){"number"===typeof a&&(a=G(a));return a&&"#canvas"!==a?"undefined"!==typeof eb&&fb[a]?fb[a]:Q(a):"undefined"!==typeof eb&&fb.canvas?fb.canvas:f.canvas}
function gb(a,b,c,d,e,h){Pa||(Pa=R(164));a={target:Q(a),Ob:bb()?!1:!0,Nb:h,Qb:d,Sb:function(a){a=a||event;var c=Pa;D(a.key?a.key:"",E,c+0,32);D(a.code?a.code:"",E,c+32,32);I[c+64>>2]=a.location;I[c+68>>2]=a.ctrlKey;I[c+72>>2]=a.shiftKey;I[c+76>>2]=a.altKey;I[c+80>>2]=a.metaKey;I[c+84>>2]=a.repeat;D(a.locale?a.locale:"",E,c+88,32);D(a.char?a.char:"",E,c+120,32);I[c+152>>2]=a.charCode;I[c+156>>2]=a.keyCode;I[c+160>>2]=a.which;S(d,e,c,b)&&a.preventDefault()},Pb:c};P(a)}
function hb(a,b,c){K[a>>3]=window.performance&&window.performance.now?window.performance.now():Date.now();I[a+8>>2]=b.screenX;I[a+12>>2]=b.screenY;I[a+16>>2]=b.clientX;I[a+20>>2]=b.clientY;I[a+24>>2]=b.ctrlKey;I[a+28>>2]=b.shiftKey;I[a+32>>2]=b.altKey;I[a+36>>2]=b.metaKey;H[a+40>>1]=b.button;H[a+42>>1]=b.buttons;I[a+44>>2]=b.movementX||b.mozMovementX||b.webkitMovementX||b.screenX-Ta;I[a+48>>2]=b.movementY||b.mozMovementY||b.webkitMovementY||b.screenY-Ua;if(f.canvas){var d=f.canvas.getBoundingClientRect();
I[a+60>>2]=b.clientX-d.left;I[a+64>>2]=b.clientY-d.top}else I[a+60>>2]=0,I[a+64>>2]=0;c?(d=c.getBoundingClientRect?c.getBoundingClientRect():{left:0,top:0},I[a+52>>2]=b.clientX-d.left,I[a+56>>2]=b.clientY-d.top):(I[a+52>>2]=0,I[a+56>>2]=0);"wheel"!==b.type&&"mousewheel"!==b.type&&(Ta=b.screenX,Ua=b.screenY)}
function ib(a,b,c,d,e,h){Qa||(Qa=R(72));a=Q(a);c={target:a,Ob:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Nb:h,Qb:d,Sb:function(c){c=c||event;hb(Qa,c,a);S(d,e,Qa,b)&&c.preventDefault()},Pb:c};bb()&&"mousedown"==h&&(c.Ob=!1);P(c)}
function jb(a,b,c,d){Ra||(Ra=R(36));a=Q(a);P({target:a,Ob:!1,Nb:"resize",Qb:d,Sb:function(c){c=c||event;if(c.target==a){var e=0<pageXOffset||0<pageYOffset?[pageXOffset,pageYOffset]:"undefined"!==typeof document.documentElement.scrollLeft||"undefined"!==typeof document.documentElement.scrollTop?[document.documentElement.scrollLeft,document.documentElement.scrollTop]:[document.body.scrollLeft|0,document.body.scrollTop|0],l=Ra;I[l>>2]=c.detail;I[l+4>>2]=document.body.clientWidth;I[l+8>>2]=document.body.clientHeight;
I[l+12>>2]=innerWidth;I[l+16>>2]=innerHeight;I[l+20>>2]=outerWidth;I[l+24>>2]=outerHeight;I[l+28>>2]=e[0];I[l+32>>2]=e[1];S(d,10,l,b)&&c.preventDefault()}},Pb:c})}
function kb(a,b,c,d,e,h){Sa||(Sa=R(1684));a=Q(a);P({target:a,Ob:"touchstart"==h||"touchend"==h,Nb:h,Qb:d,Sb:function(c){c=c||event;for(var h={},l=0;l<c.touches.length;++l){var r=c.touches[l];r.Yb=!1;h[r.identifier]=r}for(l=0;l<c.changedTouches.length;++l)r=c.changedTouches[l],h[r.identifier]=r,r.Yb=!0;for(l=0;l<c.targetTouches.length;++l)r=c.targetTouches[l],h[r.identifier].hc=!0;var u=r=Sa;I[u+4>>2]=c.ctrlKey;I[u+8>>2]=c.shiftKey;I[u+12>>2]=c.altKey;I[u+16>>2]=c.metaKey;u+=20;var Ka=f.canvas?f.canvas.getBoundingClientRect():
void 0,lb=a.getBoundingClientRect?a.getBoundingClientRect():{left:0,top:0},mb=0;for(l in h){var y=h[l];I[u>>2]=y.identifier;I[u+4>>2]=y.screenX;I[u+8>>2]=y.screenY;I[u+12>>2]=y.clientX;I[u+16>>2]=y.clientY;I[u+20>>2]=y.pageX;I[u+24>>2]=y.pageY;I[u+28>>2]=y.Yb;I[u+32>>2]=y.hc;Ka?(I[u+44>>2]=y.clientX-Ka.left,I[u+48>>2]=y.clientY-Ka.top):(I[u+44>>2]=0,I[u+48>>2]=0);I[u+36>>2]=y.clientX-lb.left;I[u+40>>2]=y.clientY-lb.top;u+=52;if(32<=++mb)break}I[r>>2]=mb;S(d,e,r,b)&&c.preventDefault()},Pb:c})}
function nb(a,b,c,d,e,h){a||(a=f.canvas);a={target:Q(a),Ob:!1,Nb:h,Qb:d,Sb:function(a){a=a||event;S(d,e,0,b)&&a.preventDefault()},Pb:c};P(a)}
function ob(a,b,c,d,e){function h(c){c=c||event;hb(N,c,a);K[N+72>>3]=c.wheelDeltaX||0;K[N+80>>3]=-(c.wheelDeltaY||c.wheelDelta);K[N+88>>3]=0;I[N+96>>2]=0;S(d,9,N,b)&&c.preventDefault()}function l(c){c=c||event;var e=N;hb(e,c,a);K[e+72>>3]=c.deltaX;K[e+80>>3]=c.deltaY;K[e+88>>3]=c.deltaZ;I[e+96>>2]=c.deltaMode;S(d,9,e,b)&&c.preventDefault()}N||(N=R(104));P({target:a,Ob:!0,Nb:e,Qb:d,Sb:"wheel"==e?l:h,Pb:c})}
var pb=1,qb=0,rb=[],T=[],sb=[],tb=[],ub=[],U=[],V=[],vb=[],wb={},W=null,fb={},xb={},yb={},zb={};function X(a){qb||(qb=a)}function Ab(a){for(var b=pb++,c=a.length;c<b;c++)a[c]=null;return b}var Bb=null,Y=[0];
function Cb(a,b){function c(){var a=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);return a?parseInt(a[2],10):!1}var d=R(8),e={handle:d,attributes:b,version:b.ac,Vb:a};e.Mb=2<=e.version&&(!1===c()||58<=c());a.canvas&&(a.canvas.ic=e);wb[d]=e;("undefined"===typeof b.$b||b.$b)&&Db(e);return d}
function Eb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(a,d){b.vertexAttribDivisorANGLE(a,d)},a.drawArraysInstanced=function(a,d,e,h){b.drawArraysInstancedANGLE(a,d,e,h)},a.drawElementsInstanced=function(a,d,e,h,l){b.drawElementsInstancedANGLE(a,d,e,h,l)})}
function Fb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(a){b.deleteVertexArrayOES(a)},a.bindVertexArray=function(a){b.bindVertexArrayOES(a)},a.isVertexArray=function(a){return b.isVertexArrayOES(a)})}function Gb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(a,d){b.drawBuffersWEBGL(a,d)})}
function Db(a){a||(a=W);if(!a.fc){a.fc=!0;var b=a.Vb;2>a.version&&(Eb(b),Fb(b),Gb(b));b.lc=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2".split(" ");
(b.getSupportedExtensions()||[]).forEach(function(a){-1!=c.indexOf(a)&&b.getExtension(a)})}}var eb={},Hb,Ib,Jb=["default","low-power","high-performance"],Kb=[];function Lb(a,b,c,d){for(var e=0;e<a;e++){var h=Z[c](),l=h&&Ab(d);h?(h.name=l,d[l]=h):X(1282);I[b+4*e>>2]=l}}
function Mb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){X(1282);return}c=2*(Z.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>W.version){X(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 35097:case 36389:case 34068:c=
0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)I[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){X(1280);z("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:X(1280);z("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}I[b>>2]=c}else X(1281)}
function Nb(a){var b=ta(a)+1,c=R(b);D(a,E,c,b);return c}var Ob={6402:1,6403:1,6406:1,6407:3,6408:4,6409:1,6410:2,33319:2,33320:2,35904:3,35906:4,36244:1,36248:3,36249:4},Pb={5120:1,5121:1,5122:2,5123:2,5124:4,5125:4,5126:4,5131:2,32819:2,32820:2,33635:2,33640:4,34042:4,35899:4,35902:4,36193:2};
function Qb(a,b,c,d,e){if(b=Ob[b]*Pb[a])switch(c=e+d*(c*b+4-1&-4),a){case 5120:return F.subarray(e,c);case 5121:return E.subarray(e,c);case 5122:return H.subarray(e>>1,c>>1);case 5124:return I.subarray(e>>2,c>>2);case 5126:return J.subarray(e>>2,c>>2);case 5125:case 34042:case 35902:case 33640:case 35899:return xa.subarray(e>>2,c>>2);case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return wa.subarray(e>>1,c>>1);default:X(1280)}else X(1280)}
function Rb(a){switch(a){case 5120:return F;case 5121:return E;case 5122:return H;case 5123:case 33635:case 32819:case 32820:case 36193:case 5131:return wa;case 5124:return I;case 5125:case 34042:case 35902:case 33640:case 35899:case 34042:return xa;case 5126:return J}}var Sb={5122:1,5123:1,5124:2,5125:2,5126:2,5131:1,32819:1,32820:1,33635:1,33640:2,34042:2,35899:2,35902:2,36193:1},Z;Bb=new Float32Array(256);for(var Tb=0;256>Tb;Tb++)Y[Tb]=Bb.subarray(0,Tb+1);for(var Ub=0;32>Ub;Ub++)Kb.push(Array(Ub));
var ac={Y:function(){return devicePixelRatio||1},$:function(a,b,c){a=a?Q(a):f.canvas;if(!a)return-4;a.getBoundingClientRect?(a=a.getBoundingClientRect(),K[b>>3]=a.right-a.left,K[c>>3]=a.bottom-a.top):(K[b>>3]=a.clientWidth,K[c>>3]=a.clientHeight);return 0},Wa:function(a,b,c){E.set(E.subarray(b,b+c),a)},Ia:function(a,b){function c(d){Vb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Xa:function(a){if(2147418112<a)return!1;for(var b=Math.max(F.length,16777216);b<a;)536870912>=b?b=
va(2*b):b=Math.min(va((3*b+2147483648)/4),2147418112);a:{try{C.grow(b-buffer.byteLength+65535>>16);ya(C.buffer);var c=1;break a}catch(d){}c=void 0}return c?!0:!1},S:function(a,b,c){a=db(a);if(!a)return-4;a.width=b;a.height=c;return 0},Sa:function(a,b,c,d){gb(a,b,c,d,2,"keydown");return 0},Qa:function(a,b,c,d){gb(a,b,c,d,1,"keypress");return 0},Ra:function(a,b,c,d){gb(a,b,c,d,3,"keyup");return 0},ha:function(a,b,c,d){ib(a,b,c,d,5,"mousedown");return 0},Va:function(a,b,c,d){ib(a,b,c,d,33,"mouseenter");
return 0},Ua:function(a,b,c,d){ib(a,b,c,d,34,"mouseleave");return 0},Za:function(a,b,c,d){ib(a,b,c,d,8,"mousemove");return 0},eb:function(a,b,c,d){ib(a,b,c,d,6,"mouseup");return 0},Na:function(a,b,c,d){jb(a,b,c,d);return 0},La:function(a,b,c,d){kb(a,b,c,d,25,"touchcancel");return 0},Ma:function(a,b,c,d){kb(a,b,c,d,23,"touchend");return 0},Oa:function(a,b,c,d){kb(a,b,c,d,24,"touchmove");return 0},Pa:function(a,b,c,d){kb(a,b,c,d,22,"touchstart");return 0},Ka:function(a,b,c,d){nb(a,b,c,d,31,"webglcontextlost");
return 0},Ja:function(a,b,c,d){nb(a,b,c,d,32,"webglcontextrestored");return 0},Ta:function(a,b,c,d){a=Q(a);return"undefined"!==typeof a.onwheel?(ob(a,b,c,d,"wheel"),0):"undefined"!==typeof a.onmousewheel?(ob(a,b,c,d,"mousewheel"),0):-1},L:function(a,b){var c={};b>>=2;c.alpha=!!I[b];c.depth=!!I[b+1];c.stencil=!!I[b+2];c.antialias=!!I[b+3];c.premultipliedAlpha=!!I[b+4];c.preserveDrawingBuffer=!!I[b+5];c.powerPreference=Jb[I[b+6]];c.failIfMajorPerformanceCaveat=!!I[b+7];c.ac=I[b+8];c.mc=I[b+9];c.$b=
I[b+10];c.dc=I[b+11];c.nc=I[b+12];c.oc=I[b+13];a=db(a);!a||c.dc?c=0:c=(a=1<c.ac?a.getContext("webgl2",c):a.getContext("webgl",c)||a.getContext("experimental-webgl",c))?Cb(a,c):0;return c},ma:function(a,b){a=wb[a];b=G(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b?Eb(Z):"OES_vertex_array_object"==b?Fb(Z):"WEBGL_draw_buffers"==b&&Gb(Z);return!!a.Vb.getExtension(b)},za:function(a){a>>=2;for(var b=0;14>b;++b)I[a+b]=0;I[a]=I[a+1]=I[a+3]=I[a+4]=I[a+8]=I[a+10]=1},qa:function(a){W=wb[a];
f.kc=Z=W&&W.Vb;return!a||Z?0:-5},j:function(a){Z.activeTexture(a)},N:function(a,b){Z.attachShader(T[a],V[b])},b:function(a,b){35051==a?Z.Zb=b:35052==a&&(Z.Rb=b);Z.bindBuffer(a,rb[b])},g:function(a,b){Z.bindFramebuffer(a,sb[b])},Q:function(a,b){Z.bindRenderbuffer(a,tb[b])},a:function(a,b){Z.bindTexture(a,ub[b])},X:function(a){Z.bindVertexArray(vb[a])},D:function(a,b,c,d){Z.blendColor(a,b,c,d)},E:function(a,b){Z.blendEquationSeparate(a,b)},F:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},k:function(a,
b,c,d,e,h,l,m,p,r){Z.blitFramebuffer(a,b,c,d,e,h,l,m,p,r)},T:function(a,b,c,d){W.Mb?c?Z.bufferData(a,E,d,c,b):Z.bufferData(a,b,d):Z.bufferData(a,c?E.subarray(c,c+b):b,d)},n:function(a,b,c,d){W.Mb?Z.bufferSubData(a,b,E,d,c):Z.bufferSubData(a,b,E.subarray(d,d+c))},I:function(a){Z.clear(a)},pa:function(a,b,c,d){Z.clearColor(a,b,c,d)},oa:function(a){Z.clearDepth(a)},na:function(a){Z.clearStencil(a)},v:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},_a:function(a){Z.compileShader(V[a])},ya:function(a,
b,c,d,e,h,l,m){W.Mb?Z.Rb?Z.compressedTexImage2D(a,b,c,d,e,h,l,m):Z.compressedTexImage2D(a,b,c,d,e,h,E,m,l):Z.compressedTexImage2D(a,b,c,d,e,h,m?E.subarray(m,m+l):null)},wa:function(a,b,c,d,e,h,l,m,p){W.Mb?Z.Rb?Z.compressedTexImage3D(a,b,c,d,e,h,l,m,p):Z.compressedTexImage3D(a,b,c,d,e,h,l,E,p,m):Z.compressedTexImage3D(a,b,c,d,e,h,l,p?E.subarray(p,p+m):null)},ua:function(){var a=Ab(T),b=Z.createProgram();b.name=a;T[a]=b;return a},ab:function(a){var b=Ab(V);V[b]=Z.createShader(a);return b},C:function(a){Z.cullFace(a)},
W:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],e=rb[d];e&&(Z.deleteBuffer(e),e.name=0,rb[d]=null,d==Hb&&(Hb=0),d==Ib&&(Ib=0),d==Z.Zb&&(Z.Zb=0),d==Z.Rb&&(Z.Rb=0))}},h:function(a,b){for(var c=0;c<a;++c){var d=I[b+4*c>>2],e=sb[d];e&&(Z.deleteFramebuffer(e),e.name=0,sb[d]=null)}},x:function(a){if(a){var b=T[a];b?(Z.deleteProgram(b),b.name=0,T[a]=null,xb[a]=null):X(1281)}},o:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],e=tb[d];e&&(Z.deleteRenderbuffer(e),e.name=0,tb[d]=null)}},w:function(a){if(a){var b=
V[a];b?(Z.deleteShader(b),V[a]=null):X(1281)}},V:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],e=ub[d];e&&(Z.deleteTexture(e),e.name=0,ub[d]=null)}},Ca:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2];Z.deleteVertexArray(vb[d]);vb[d]=null}},t:function(a){Z.depthFunc(a)},u:function(a){Z.depthMask(!!a)},c:function(a){Z.disable(a)},y:function(a){Z.disableVertexAttribArray(a)},aa:function(a,b,c){Z.drawArrays(a,b,c)},m:function(a,b){for(var c=Kb[a],d=0;d<a;d++)c[d]=I[b+4*d>>2];Z.drawBuffers(c)},
ba:function(a,b,c,d){Z.drawElements(a,b,c,d)},e:function(a){Z.enable(a)},ia:function(a){Z.enableVertexAttribArray(a)},B:function(a){Z.frontFace(a)},U:function(a,b){Lb(a,b,"createBuffer",rb)},R:function(a,b){Lb(a,b,"createRenderbuffer",tb)},Aa:function(a,b){Lb(a,b,"createTexture",ub)},Da:function(a,b){Lb(a,b,"createVertexArray",vb)},ra:function(a,b){return Z.getAttribLocation(T[a],G(b))},d:function(a,b){Mb(a,b)},sa:function(a,b,c,d){a=Z.getProgramInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&
d?D(a,E,d,b):0;c&&(I[c>>2]=b)},M:function(a,b,c){if(c)if(a>=pb)X(1281);else{var d=xb[a];if(d)if(35716==b)a=Z.getProgramInfoLog(T[a]),null===a&&(a="(unknown error)"),I[c>>2]=a.length+1;else if(35719==b)I[c>>2]=d.Xb;else if(35722==b){if(-1==d.Tb){a=T[a];var e=Z.getProgramParameter(a,35721);for(b=d.Tb=0;b<e;++b)d.Tb=Math.max(d.Tb,Z.getActiveAttrib(a,b).name.length+1)}I[c>>2]=d.Tb}else if(35381==b){if(-1==d.Ub)for(a=T[a],e=Z.getProgramParameter(a,35382),b=d.Ub=0;b<e;++b)d.Ub=Math.max(d.Ub,Z.getActiveUniformBlockName(a,
b).length+1);I[c>>2]=d.Ub}else I[c>>2]=Z.getProgramParameter(T[a],b);else X(1282)}else X(1281)},Ya:function(a,b,c,d){a=Z.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(I[c>>2]=b)},_:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(V[a]),null===a&&(a="(unknown error)"),I[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(V[a]),I[c>>2]=null===a||0==a.length?0:a.length+1):I[c>>2]=Z.getShaderParameter(V[a],b):X(1281)},Fa:function(a){if(yb[a])return yb[a];switch(a){case 7939:var b=
Z.getSupportedExtensions()||[];b=b.concat(b.map(function(a){return"GL_"+a}));b=Nb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||X(1280);b=Nb(b);break;case 7938:b=Z.getParameter(Z.VERSION);b=2<=W.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Nb(b);break;case 35724:b=Z.getParameter(Z.SHADING_LANGUAGE_VERSION);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=
Nb(b);break;default:return X(1280),0}return yb[a]=b},Ea:function(a,b){if(2>W.version)return X(1282),0;var c=zb[a];if(c)return 0>b||b>=c.length?(X(1281),0):c[b];switch(a){case 7939:return c=Z.getSupportedExtensions()||[],c=c.concat(c.map(function(a){return"GL_"+a})),c=c.map(function(a){return Nb(a)}),c=zb[a]=c,0>b||b>=c.length?(X(1281),0):c[b];default:return X(1280),0}},i:function(a,b){b=G(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,
d)}return(a=xb[a]&&xb[a].bc[b])&&0<=c&&c<a[0]?a[1]+c:-1},ta:function(a){Z.linkProgram(T[a]);var b=T[a];a=xb[a]={bc:{},Xb:0,Tb:-1,Ub:-1};for(var c=a.bc,d=Z.getProgramParameter(b,35718),e=0;e<d;++e){var h=Z.getActiveUniform(b,e),l=h.name;a.Xb=Math.max(a.Xb,l.length+1);"]"==l.slice(-1)&&(l=l.slice(0,l.lastIndexOf("[")));var m=Z.getUniformLocation(b,l);if(m){var p=Ab(U);c[l]=[h.size,p];U[p]=m;for(var r=1;r<h.size;++r)m=Z.getUniformLocation(b,l+"["+r+"]"),p=Ab(U),U[p]=m}}},A:function(a,b){Z.polygonOffset(a,
b)},l:function(a){Z.readBuffer(a)},Ba:function(a,b,c,d){Z.renderbufferStorage(a,b,c,d)},P:function(a,b,c,d,e){Z.renderbufferStorageMultisample(a,b,c,d,e)},J:function(a,b,c,d){Z.scissor(a,b,c,d)},$a:function(a,b,c,d){for(var e="",h=0;h<b;++h){var l=d?I[d+4*h>>2]:-1;e+=G(I[c+4*h>>2],0>l?void 0:l)}Z.shaderSource(V[a],e)},db:function(a,b,c){Z.stencilFunc(a,b,c)},H:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},s:function(a){Z.stencilMask(a)},cb:function(a,b,c){Z.stencilOp(a,b,c)},G:function(a,b,c,
d){Z.stencilOpSeparate(a,b,c,d)},xa:function(a,b,c,d,e,h,l,m,p){W.Mb?Z.Rb?Z.texImage2D(a,b,c,d,e,h,l,m,p):0!=p?Z.texImage2D(a,b,c,d,e,h,l,m,Rb(m),p>>(Sb[m]|0)):Z.texImage2D(a,b,c,d,e,h,l,m,null):Z.texImage2D(a,b,c,d,e,h,l,m,p?Qb(m,l,d,e,p):null)},va:function(a,b,c,d,e,h,l,m,p,r){Z.Rb?Z.texImage3D(a,b,c,d,e,h,l,m,p,r):0!=r?Z.texImage3D(a,b,c,d,e,h,l,m,p,Rb(p),r>>(Sb[p]|0)):Z.texImage3D(a,b,c,d,e,h,l,m,p,null)},O:function(a,b,c){Z.texParameterf(a,b,c)},f:function(a,b,c){Z.texParameteri(a,b,c)},ga:function(a,
b,c){if(W.Mb)Z.uniform1fv(U[a],J,c>>2,b);else{if(256>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=J[c+4*e>>2];else d=J.subarray(c>>2,c+4*b>>2);Z.uniform1fv(U[a],d)}},z:function(a,b){Z.uniform1i(U[a],b)},fa:function(a,b,c){if(W.Mb)Z.uniform2fv(U[a],J,c>>2,2*b);else{if(256>=2*b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=J[c+4*e>>2],d[e+1]=J[c+(4*e+4)>>2];else d=J.subarray(c>>2,c+8*b>>2);Z.uniform2fv(U[a],d)}},ea:function(a,b,c){if(W.Mb)Z.uniform3fv(U[a],J,c>>2,3*b);else{if(256>=3*b)for(var d=Y[3*b-1],e=0;e<3*b;e+=
3)d[e]=J[c+4*e>>2],d[e+1]=J[c+(4*e+4)>>2],d[e+2]=J[c+(4*e+8)>>2];else d=J.subarray(c>>2,c+12*b>>2);Z.uniform3fv(U[a],d)}},da:function(a,b,c){if(W.Mb)Z.uniform4fv(U[a],J,c>>2,4*b);else{if(256>=4*b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=J[c+4*e>>2],d[e+1]=J[c+(4*e+4)>>2],d[e+2]=J[c+(4*e+8)>>2],d[e+3]=J[c+(4*e+12)>>2];else d=J.subarray(c>>2,c+16*b>>2);Z.uniform4fv(U[a],d)}},ca:function(a,b,c,d){if(W.Mb)Z.uniformMatrix4fv(U[a],!!c,J,d>>2,16*b);else{if(256>=16*b)for(var e=Y[16*b-1],h=0;h<16*b;h+=16)e[h]=
J[d+4*h>>2],e[h+1]=J[d+(4*h+4)>>2],e[h+2]=J[d+(4*h+8)>>2],e[h+3]=J[d+(4*h+12)>>2],e[h+4]=J[d+(4*h+16)>>2],e[h+5]=J[d+(4*h+20)>>2],e[h+6]=J[d+(4*h+24)>>2],e[h+7]=J[d+(4*h+28)>>2],e[h+8]=J[d+(4*h+32)>>2],e[h+9]=J[d+(4*h+36)>>2],e[h+10]=J[d+(4*h+40)>>2],e[h+11]=J[d+(4*h+44)>>2],e[h+12]=J[d+(4*h+48)>>2],e[h+13]=J[d+(4*h+52)>>2],e[h+14]=J[d+(4*h+56)>>2],e[h+15]=J[d+(4*h+60)>>2];else e=J.subarray(d>>2,d+64*b>>2);Z.uniformMatrix4fv(U[a],!!c,e)}},la:function(a){Z.useProgram(T[a])},ja:function(a,b){Z.vertexAttribDivisor(a,
b)},ka:function(a,b,c,d,e,h){Z.vertexAttribPointer(a,b,c,!!d,e,h)},K:function(a,b,c,d){Z.viewport(a,b,c,d)},memory:C,r:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Wb()});document.body.append(a)},q:function(){document.getElementById("_sokol_app_input_element").focus()},Ha:function(){window.addEventListener("beforeunload",function(a){0!=Xb()&&(a.preventDefault(),a.returnValue=" ")})},
fb:function(){window.addEventListener("paste",function(a){a=a.clipboardData.getData("text");oa([a])})},p:function(){document.getElementById("_sokol_app_input_element").blur()},Ga:function(a){a=G(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);
b.select();document.execCommand("copy");document.body.removeChild(b)},bb:function(a,b,c,d,e,h){b=G(b);var l=new XMLHttpRequest;l.open("GET",b);l.responseType="arraybuffer";var m=0<d;m&&l.setRequestHeader("Range","bytes="+c+"-"+(c+d));l.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!m){var b=new Uint8Array(l.response),c=b.length;c<=h?(E.set(b,e),Yb(a,d,c)):Zb(a)}else $b(a,this.status)};l.send()},Z:function(){return navigator.userAgent.includes("Macintosh")?
1:0},table:la},bc=function(){function a(a){f.asm=a.exports;L--;f.monitorRunDependencies&&f.monitorRunDependencies(L);0==L&&(null!==Ha&&(clearInterval(Ha),Ha=null),Ia&&(a=Ia,Ia=null,a()))}function b(b){a(b.instance)}function c(a){return Na().then(function(a){return WebAssembly.instantiate(a,d)}).then(a,function(a){z("failed to asynchronously prepare wasm: "+a);ja(a)})}var d={env:ac,wasi_unstable:ac};L++;f.monitorRunDependencies&&f.monitorRunDependencies(L);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return z("Module.instantiateWasm callback failed with error: "+e),!1}(function(){if(A||"function"!==typeof WebAssembly.instantiateStreaming||Ja()||"function"!==typeof fetch)return c(b);fetch(M,{credentials:"same-origin"}).then(function(a){return WebAssembly.instantiateStreaming(a,d).then(b,function(a){z("wasm streaming compile failed: "+a);z("falling back to ArrayBuffer instantiation");c(b)})})})();return{}}();f.asm=bc;
var Oa=f.___wasm_call_ctors=function(){return f.asm.gb.apply(null,arguments)},Wb=f.__sapp_emsc_notify_keyboard_hidden=function(){return f.asm.hb.apply(null,arguments)};f.___em_js__sapp_js_create_textfield=function(){return f.asm.ib.apply(null,arguments)};f.___em_js__sapp_js_focus_textfield=function(){return f.asm.jb.apply(null,arguments)};f.___em_js__sapp_js_unfocus_textfield=function(){return f.asm.kb.apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return f.asm.lb.apply(null,arguments)};
var Xb=f.__sapp_html5_get_ask_leave_site=function(){return f.asm.mb.apply(null,arguments)};f.___em_js__sapp_js_hook_beforeunload=function(){return f.asm.nb.apply(null,arguments)};f.___em_js__sapp_js_init_clipboard=function(){return f.asm.ob.apply(null,arguments)};f.___em_js__sapp_js_write_clipboard=function(){return f.asm.pb.apply(null,arguments)};f._main=function(){return f.asm.qb.apply(null,arguments)};var R=f._malloc=function(){return f.asm.rb.apply(null,arguments)};
f._free=function(){return f.asm.sb.apply(null,arguments)};f.___em_js__stm_js_perfnow=function(){return f.asm.tb.apply(null,arguments)};f.__saudio_emsc_pull=function(){return f.asm.ub.apply(null,arguments)};f.___em_js__saudio_js_init=function(){return f.asm.vb.apply(null,arguments)};f.___em_js__saudio_js_sample_rate=function(){return f.asm.wb.apply(null,arguments)};f.___em_js__saudio_js_buffer_frames=function(){return f.asm.xb.apply(null,arguments)};
f.___em_js__sfetch_js_send_head_request=function(){return f.asm.yb.apply(null,arguments)};f.___em_js__sfetch_js_send_get_request=function(){return f.asm.zb.apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return f.asm.Ab.apply(null,arguments)};
var Yb=f.__sfetch_emsc_get_response=function(){return f.asm.Bb.apply(null,arguments)},$b=f.__sfetch_emsc_failed_http_status=function(){return f.asm.Cb.apply(null,arguments)},Zb=f.__sfetch_emsc_failed_buffer_too_small=function(){return f.asm.Db.apply(null,arguments)};f.___em_js__simgui_js_is_osx=function(){return f.asm.Eb.apply(null,arguments)};
var qa=f.stackSave=function(){return f.asm.Fb.apply(null,arguments)},pa=f.stackAlloc=function(){return f.asm.Gb.apply(null,arguments)},ra=f.stackRestore=function(){return f.asm.Hb.apply(null,arguments)};f.dynCall_vi=function(){return f.asm.Ib.apply(null,arguments)};f.dynCall_v=function(){return f.asm.Jb.apply(null,arguments)};var S=f.dynCall_iiii=function(){return f.asm.Kb.apply(null,arguments)},Vb=f.dynCall_idi=function(){return f.asm.Lb.apply(null,arguments)};f.asm=bc;var cc;
function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Ia=function dc(){cc||ec();cc||(Ia=dc)};
function ec(a){function b(){if(!cc&&(cc=!0,!ma)){Aa(Ca);Aa(Da);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(fc){var b=a,d=f._main;b=b||[];var e=b.length+1,h=pa(4*(e+1));I[h>>2]=ua(aa);for(var l=1;l<e;l++)I[(h>>2)+l]=ua(b[l-1]);I[(h>>2)+e]=0;try{var m=d(e,h);if(!B||0!==m){if(!B&&(ma=!0,f.onExit))f.onExit(m);q(m,new ia(m))}}catch(p){p instanceof ia||("SimulateInfiniteLoop"==p?B=!0:((b=p)&&"object"===typeof p&&p.stack&&(b=[p,p.stack]),z("exception thrown: "+b),q(1,p)))}finally{}}if(f.postRun)for("function"==
typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)b=f.postRun.shift(),Fa.unshift(b);Aa(Fa)}}a=a||n;if(!(0<L)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ga();Aa(Ba);0<L||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=ec;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var fc=!0;f.noInitialRun&&(fc=!1);B=!0;ec();
