
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var g={},l;for(l in e)e.hasOwnProperty(l)&&(g[l]=e[l]);var aa=[],ba="./this.program";function r(a,b){throw b;}var ca="object"===typeof window,t="function"===typeof importScripts,u="",da,v,w,x,z;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)u=t?require("path").dirname(u)+"/":__dirname+"/",da=function(a,b){x||(x=require("fs"));z||(z=require("path"));a=z.normalize(a);return x.readFileSync(a,b?null:"utf8")},w=function(a){a=da(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||A("Assertion failed: undefined");return a},v=function(a,b,c){x||(x=require("fs"));z||(z=require("path"));a=z.normalize(a);x.readFile(a,function(d,f){d?c(d):b(f.buffer)})},
1<process.argv.length&&(ba=process.argv[1].replace(/\\/g,"/")),aa=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ea))throw a;}),process.on("unhandledRejection",A),r=function(a,b){if(noExitRuntime||0<fa)throw process.exitCode=a,b;process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(ca||t)t?u=self.location.href:"undefined"!==typeof document&&document.currentScript&&(u=document.currentScript.src),
u=0!==u.indexOf("blob:")?u.substr(0,u.lastIndexOf("/")+1):"",da=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},t&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),v=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};e.print||console.log.bind(console);
var B=e.printErr||console.warn.bind(console);for(l in g)g.hasOwnProperty(l)&&(e[l]=g[l]);g=null;e.arguments&&(aa=e.arguments);e.thisProgram&&(ba=e.thisProgram);e.quit&&(r=e.quit);var C;e.wasmBinary&&(C=e.wasmBinary);var noExitRuntime=e.noExitRuntime||!0;"object"!==typeof WebAssembly&&A("no native wasm support detected");var ha,ia=!1;function ja(a){var b=e["_"+a];b||A("Assertion failed: Cannot call unknown function "+(a+", make sure it is exported"));return b}
function ka(a,b,c){var d={string:function(m){var q=0;if(null!==m&&void 0!==m&&0!==m){var p=(m.length<<2)+1;q=D(p);E(m,F,q,p)}return q},array:function(m){var q=D(m.length);la.set(m,q);return q}};a=ja(a);var f=[],k=0;if(c)for(var h=0;h<c.length;h++){var n=d[b[h]];n?(0===k&&(k=ma()),f[h]=n(c[h])):f[h]=c[h]}a.apply(null,f);0!==k&&na(k)}var oa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function G(a,b){if(a){var c=F,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&oa)a=oa.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var k=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|k);else{var h=c[a++]&63;f=224==(f&240)?(f&15)<<12|k<<6|h:(f&7)<<18|k<<12|h<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function E(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var k=0;k<a.length;++k){var h=a.charCodeAt(k);if(55296<=h&&57343>=h){var n=a.charCodeAt(++k);h=65536+((h&1023)<<10)|n&1023}if(127>=h){if(c>=d)break;b[c++]=h}else{if(2047>=h){if(c+1>=d)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=d)break;b[c++]=224|h>>12}else{if(c+3>=d)break;b[c++]=240|h>>18;b[c++]=128|h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0;return c-f}
function pa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function qa(a){var b=pa(a)+1,c=D(b);E(a,la,c,b);return c}var ra,la,F,sa,H,I;
function ta(){var a=ha.buffer;ra=a;e.HEAP8=la=new Int8Array(a);e.HEAP16=sa=new Int16Array(a);e.HEAP32=H=new Int32Array(a);e.HEAPU8=F=new Uint8Array(a);e.HEAPU16=new Uint16Array(a);e.HEAPU32=new Uint32Array(a);e.HEAPF32=new Float32Array(a);e.HEAPF64=I=new Float64Array(a)}var J,ua=[],va=[],wa=[],xa=[],ya=[],fa=0;function za(){var a=e.preRun.shift();ua.unshift(a)}var K=0,Aa=null,L=null;e.preloadedImages={};e.preloadedAudios={};
function A(a){if(e.onAbort)e.onAbort(a);B(a);ia=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ba(){return M.startsWith("data:application/octet-stream;base64,")}var M;M="quad-sapp.wasm";if(!Ba()){var Ca=M;M=e.locateFile?e.locateFile(Ca,u):u+Ca}function Da(){var a=M;try{if(a==M&&C)return new Uint8Array(C);if(w)return w(a);throw"both async and sync fetching of the wasm failed";}catch(b){A(b)}}
function Ea(){if(!C&&(ca||t)){if("function"===typeof fetch&&!M.startsWith("file://"))return fetch(M,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+M+"'";return a.arrayBuffer()}).catch(function(){return Da()});if(v)return new Promise(function(a,b){v(M,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Da()})}
function N(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.dc;"number"===typeof c?void 0===b.Bb?J.get(c)():J.get(c)(b.Bb):c(void 0===b.Bb?null:b.Bb)}}}var Fa=0;function Ga(){for(var a=O.length-1;0<=a;--a)Ha(a);O=[];P=[]}var P=[];function Ia(){if(Fa&&Ja.wb)for(var a=0;a<P.length;++a){var b=P[a];P.splice(a,1);--a;b.nc.apply(null,b.ac)}}var O=[];function Ha(a){var b=O[a];b.target.removeEventListener(b.qb,b.Vb,b.rb);O.splice(a,1)}
function Q(a){function b(d){++Fa;Ja=a;Ia();a.tb(d);Ia();--Fa}if(a.sb)a.Vb=b,a.target.addEventListener(a.qb,b,a.rb),O.push(a),Ka||(xa.push(Ga),Ka=!0);else for(var c=0;c<O.length;++c)O[c].target==a.target&&O[c].qb==a.qb&&Ha(c--)}var Ka,Ja,La,Ma,Na,Oa,Pa,Qa,Ra=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function R(a){a=2<a?G(a):a;return Ra[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function Sa(a){return 0>Ra.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function Ta(a,b,c,d,f,k){La||(La=S(164));a={target:R(a),wb:!0,qb:k,sb:d,tb:function(h){var n=La,m=n>>2;H[m]=h.location;H[m+1]=h.ctrlKey;H[m+2]=h.shiftKey;H[m+3]=h.altKey;H[m+4]=h.metaKey;H[m+5]=h.repeat;H[m+6]=h.charCode;H[m+7]=h.keyCode;H[m+8]=h.which;E(h.key||"",F,n+36,32);E(h.code||"",F,n+68,32);E(h.char||"",F,n+100,32);E(h.locale||"",F,n+132,32);J.get(d)(f,n,b)&&h.preventDefault()},rb:c};Q(a)}
function Ua(a,b,c){a>>=2;H[a]=b.screenX;H[a+1]=b.screenY;H[a+2]=b.clientX;H[a+3]=b.clientY;H[a+4]=b.ctrlKey;H[a+5]=b.shiftKey;H[a+6]=b.altKey;H[a+7]=b.metaKey;sa[2*a+16]=b.button;sa[2*a+17]=b.buttons;H[a+9]=b.movementX;H[a+10]=b.movementY;c=Sa(c);H[a+11]=b.clientX-c.left;H[a+12]=b.clientY-c.top}function T(a,b,c,d,f,k){Ma||(Ma=S(64));a=R(a);Q({target:a,wb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,qb:k,sb:d,tb:function(h){h=h||event;Ua(Ma,h,a);J.get(d)(f,Ma,b)&&h.preventDefault()},rb:c})}
function Va(a,b,c,d,f){Na||(Na=S(260));Q({target:a,qb:f,sb:d,tb:function(k){k=k||event;var h=Na,n=document.pointerLockElement||document.Jb||document.Lb||document.Kb;H[h>>2]=!!n;var m=n&&n.id?n.id:"";E(n?n==window?"#window":n==screen?"#screen":n&&n.nodeName?n.nodeName:"":"",F,h+4,128);E(m,F,h+132,128);J.get(d)(20,h,b)&&k.preventDefault()},rb:c})}function Wa(a,b,c,d,f){Q({target:a,qb:f,sb:d,tb:function(k){k=k||event;J.get(d)(38,0,b)&&k.preventDefault()},rb:c})}
function Xa(a,b,c,d){Oa||(Oa=S(36));a=R(a);Q({target:a,qb:"resize",sb:d,tb:function(f){f=f||event;if(f.target==a){var k=document.body;if(k){var h=Oa;H[h>>2]=f.detail;H[h+4>>2]=k.clientWidth;H[h+8>>2]=k.clientHeight;H[h+12>>2]=innerWidth;H[h+16>>2]=innerHeight;H[h+20>>2]=outerWidth;H[h+24>>2]=outerHeight;H[h+28>>2]=pageXOffset;H[h+32>>2]=pageYOffset;J.get(d)(10,h,b)&&f.preventDefault()}}},rb:c})}
function Ya(a,b,c,d,f,k){Pa||(Pa=S(1684));a=R(a);Q({target:a,wb:"touchstart"==k||"touchend"==k,qb:k,sb:d,tb:function(h){for(var n={},m=h.touches,q=0;q<m.length;++q){var p=m[q];n[p.identifier]=p}m=h.changedTouches;for(q=0;q<m.length;++q)p=m[q],p.Yb=1,n[p.identifier]=p;m=h.targetTouches;for(q=0;q<m.length;++q)n[m[q].identifier].Zb=1;m=Pa;p=m>>2;H[p+1]=h.ctrlKey;H[p+2]=h.shiftKey;H[p+3]=h.altKey;H[p+4]=h.metaKey;p+=5;var $a=Sa(a),ab=0;for(q in n){var y=n[q];H[p]=y.identifier;H[p+1]=y.screenX;H[p+2]=
y.screenY;H[p+3]=y.clientX;H[p+4]=y.clientY;H[p+5]=y.pageX;H[p+6]=y.pageY;H[p+7]=y.Yb;H[p+8]=y.Zb;H[p+9]=y.clientX-$a.left;H[p+10]=y.clientY-$a.top;p+=13;if(31<++ab)break}H[m>>2]=ab;J.get(d)(f,m,b)&&h.preventDefault()},rb:c})}function Za(a,b,c,d,f,k){a={target:R(a),qb:k,sb:d,tb:function(h){h=h||event;J.get(d)(f,0,b)&&h.preventDefault()},rb:c};Q(a)}
function bb(a,b,c,d){Qa||(Qa=S(96));Q({target:a,wb:!0,qb:"wheel",sb:d,tb:function(f){f=f||event;var k=Qa;Ua(k,f,a);I[k+64>>3]=f.deltaX;I[k+72>>3]=f.deltaY;I[k+80>>3]=f.deltaZ;H[k+88>>2]=f.deltaMode;J.get(d)(9,k,b)&&f.preventDefault()},rb:c})}
function cb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,k){b.drawArraysInstancedANGLE(c,d,f,k)},a.drawElementsInstanced=function(c,d,f,k,h){b.drawElementsInstancedANGLE(c,d,f,k,h)})}
function db(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function eb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function fb(a){a.cc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function gb(a){a.fc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function hb(a){a.ic=a.getExtension("WEBGL_multi_draw")}var ib=1,jb=[],U=[],kb=[],lb=[],mb=[],V=[],nb=[],ob=[],pb={},qb={};function W(a){rb||(rb=a)}function sb(a){for(var b=ib++,c=a.length;c<b;c++)a[c]=null;return b}
function tb(a,b){a.Hb||(a.Hb=a.getContext,a.getContext=function(d,f){f=a.Hb(d,f);return"webgl"==d==f instanceof WebGLRenderingContext?f:null});var c=1<b.Ib?a.getContext("webgl2",b):a.getContext("webgl",b);return c?ub(c,b):0}function ub(a,b){var c=sb(ob),d={ec:c,attributes:b,version:b.Ib,Ab:a};a.canvas&&(a.canvas.$b=d);ob[c]=d;("undefined"===typeof b.Gb||b.Gb)&&vb(d);return c}
function vb(a){a||(a=X);if(!a.Xb){a.Xb=!0;var b=a.Ab;cb(b);db(b);eb(b);fb(b);gb(b);2<=a.version&&(b.Fb=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Fb)b.Fb=b.getExtension("EXT_disjoint_timer_query");hb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var rb,X,wb=["default","low-power","high-performance"];
function xb(a,b,c,d){for(var f=0;f<a;f++){var k=Y[c](),h=k&&sb(d);k?(k.name=h,d[h]=k):W(1282);H[b+4*f>>2]=h}}
function yb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>X.version){W(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>X.version){W(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)H[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){W(1280);B("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:W(1280);B("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}H[b>>2]=c}else W(1281)}
function Z(a){var b=pa(a)+1,c=S(b);E(a,F,c,b);return c}function zb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}
var Y,Eb={O:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ea:function(a,b,c){a=R(a);if(!a)return-4;a=Sa(a);I[b>>3]=a.width;I[c>>3]=a.height;return 0},Va:function(a,b,c){F.copyWithin(a,b,b+c)},Ha:function(a,b){function c(d){J.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Wa:function(a){var b=F.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ha.grow(Math.min(2147483648,
d)-ra.byteLength+65535>>>16);ta();var f=1;break a}catch(k){}f=void 0}if(f)return!0}return!1},N:function(a,b,c){a=R(a);if(!a)return-4;a.width=b;a.height=c;return 0},Z:function(a,b,c,d){Ta(a,b,c,d,2,"keydown");return 0},X:function(a,b,c,d){Ta(a,b,c,d,1,"keypress");return 0},Y:function(a,b,c,d){Ta(a,b,c,d,3,"keyup");return 0},da:function(a,b,c,d){T(a,b,c,d,5,"mousedown");return 0},aa:function(a,b,c,d){T(a,b,c,d,33,"mouseenter");return 0},$:function(a,b,c,d){T(a,b,c,d,34,"mouseleave");return 0},ba:function(a,
b,c,d){T(a,b,c,d,8,"mousemove");return 0},ca:function(a,b,c,d){T(a,b,c,d,6,"mouseup");return 0},S:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Jb||document.body.Lb||document.body.Kb))return-1;a=R(a);if(!a)return-4;Va(a,b,c,d,"pointerlockchange");Va(a,b,c,d,"mozpointerlockchange");Va(a,b,c,d,"webkitpointerlockchange");Va(a,b,c,d,"mspointerlockchange");return 0},R:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Jb||
document.body.Lb||document.body.Kb))return-1;a=R(a);if(!a)return-4;Wa(a,b,c,d,"pointerlockerror");Wa(a,b,c,d,"mozpointerlockerror");Wa(a,b,c,d,"webkitpointerlockerror");Wa(a,b,c,d,"mspointerlockerror");return 0},Ua:function(a,b,c,d){Xa(a,b,c,d);return 0},T:function(a,b,c,d){Ya(a,b,c,d,25,"touchcancel");return 0},U:function(a,b,c,d){Ya(a,b,c,d,23,"touchend");return 0},V:function(a,b,c,d){Ya(a,b,c,d,24,"touchmove");return 0},W:function(a,b,c,d){Ya(a,b,c,d,22,"touchstart");return 0},Q:function(a,b,c,
d){Za(a,b,c,d,31,"webglcontextlost");return 0},P:function(a,b,c,d){Za(a,b,c,d,32,"webglcontextrestored");return 0},_:function(a,b,c,d){a=R(a);return"undefined"!==typeof a.onwheel?(bb(a,b,c,d),0):-1},C:function(a,b){b>>=2;b={alpha:!!H[b],depth:!!H[b+1],stencil:!!H[b+2],antialias:!!H[b+3],premultipliedAlpha:!!H[b+4],preserveDrawingBuffer:!!H[b+5],powerPreference:wb[H[b+6]],failIfMajorPerformanceCaveat:!!H[b+7],Ib:H[b+8],hc:H[b+9],Gb:H[b+10],Wb:H[b+11],jc:H[b+12],kc:H[b+13]};a=R(a);return!a||b.Wb?0:
tb(a,b)},na:function(a,b){a=ob[a];b=G(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&cb(Y);"OES_vertex_array_object"==b&&db(Y);"WEBGL_draw_buffers"==b&&eb(Y);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&fb(Y);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&gb(Y);"WEBGL_multi_draw"==b&&hb(Y);return!!a.Ab.getExtension(b)},Da:function(a){a>>=2;for(var b=0;14>b;++b)H[a+b]=0;H[a]=H[a+1]=H[a+3]=H[a+4]=H[a+8]=H[a+10]=1},va:function(a){X=ob[a];e.bc=Y=X&&X.Ab;return!a||
Y?0:-5},b:function(a){Y.activeTexture(a)},B:function(a,b){Y.attachShader(U[a],V[b])},e:function(a,b){35051==a?Y.Db=b:35052==a&&(Y.Eb=b);Y.bindBuffer(a,jb[b])},g:function(a,b){Y.bindFramebuffer(a,kb[b])},a:function(a,b){Y.bindTexture(a,mb[b])},K:function(a){Y.bindVertexArray(nb[a])},G:function(a,b,c,d){Y.blendColor(a,b,c,d)},H:function(a,b){Y.blendEquationSeparate(a,b)},I:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},o:function(a,b,c,d,f,k,h,n,m,q){Y.blitFramebuffer(a,b,c,d,f,k,h,n,m,q)},Aa:function(a,
b,c,d){2<=X.version?c?Y.bufferData(a,F,d,c,b):Y.bufferData(a,b,d):Y.bufferData(a,c?F.subarray(c,c+b):b,d)},za:function(a,b,c,d){2<=X.version?Y.bufferSubData(a,b,F,d,c):Y.bufferSubData(a,b,F.subarray(d,d+c))},ka:function(a){Y.clear(a)},x:function(a,b,c,d){Y.clearColor(a,b,c,d)},ma:function(a){Y.clearDepth(a)},la:function(a){Y.clearStencil(a)},i:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},sa:function(a){Y.compileShader(V[a])},ya:function(){var a=sb(U),b=Y.createProgram();b.name=a;b.zb=b.xb=b.yb=
0;b.Cb=1;U[a]=b;return a},ua:function(a){var b=sb(V);V[b]=Y.createShader(a);return b},D:function(a){Y.cullFace(a)},Ja:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=jb[d];f&&(Y.deleteBuffer(f),f.name=0,jb[d]=null,d==Y.Db&&(Y.Db=0),d==Y.Eb&&(Y.Eb=0))}},h:function(a,b){for(var c=0;c<a;++c){var d=H[b+4*c>>2],f=kb[d];f&&(Y.deleteFramebuffer(f),f.name=0,kb[d]=null)}},L:function(a){if(a){var b=U[a];b?(Y.deleteProgram(b),b.name=0,U[a]=null):W(1281)}},M:function(a,b){for(var c=0;c<a;c++){var d=H[b+
4*c>>2],f=lb[d];f&&(Y.deleteRenderbuffer(f),f.name=0,lb[d]=null)}},q:function(a){if(a){var b=V[a];b?(Y.deleteShader(b),V[a]=null):W(1281)}},Ia:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=mb[d];f&&(Y.deleteTexture(f),f.name=0,mb[d]=null)}},Ga:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2];Y.deleteVertexArray(nb[d]);nb[d]=null}},t:function(a){Y.depthFunc(a)},s:function(a){Y.depthMask(!!a)},d:function(a){Y.disable(a)},J:function(a){Y.disableVertexAttribArray(a)},fa:function(a,b,c){Y.drawArrays(a,
b,c)},ga:function(a,b,c,d){Y.drawElements(a,b,c,d)},f:function(a){Y.enable(a)},ha:function(a){Y.enableVertexAttribArray(a)},E:function(a){Y.frontFace(a)},Ba:function(a,b){xb(a,b,"createBuffer",jb)},Fa:function(a,b){xb(a,b,"createVertexArray",nb)},qa:function(a,b){return Y.getAttribLocation(U[a],G(b))},c:function(a,b){yb(a,b)},wa:function(a,b,c,d){a=Y.getProgramInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?E(a,F,d,b):0;c&&(H[c>>2]=b)},A:function(a,b,c){if(c)if(a>=ib)W(1281);else if(a=U[a],
35716==b)a=Y.getProgramInfoLog(a),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1;else if(35719==b){if(!a.zb)for(b=0;b<Y.getProgramParameter(a,35718);++b)a.zb=Math.max(a.zb,Y.getActiveUniform(a,b).name.length+1);H[c>>2]=a.zb}else if(35722==b){if(!a.xb)for(b=0;b<Y.getProgramParameter(a,35721);++b)a.xb=Math.max(a.xb,Y.getActiveAttrib(a,b).name.length+1);H[c>>2]=a.xb}else if(35381==b){if(!a.yb)for(b=0;b<Y.getProgramParameter(a,35382);++b)a.yb=Math.max(a.yb,Y.getActiveUniformBlockName(a,b).length+
1);H[c>>2]=a.yb}else H[c>>2]=Y.getProgramParameter(a,b);else W(1281)},ra:function(a,b,c,d){a=Y.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");b=0<b&&d?E(a,F,d,b):0;c&&(H[c>>2]=b)},y:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(V[a]),null===a&&(a="(unknown error)"),H[c>>2]=a?a.length+1:0):35720==b?(a=Y.getShaderSource(V[a]),H[c>>2]=a?a.length+1:0):H[c>>2]=Y.getShaderParameter(V[a],b):W(1281)},La:function(a){var b=pb[a];if(!b){switch(a){case 7939:b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+
d}));b=Z(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||W(1280);b=b&&Z(b);break;case 7938:b=Y.getParameter(7938);b=2<=X.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Z(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Z(b);break;default:W(1280)}pb[a]=b}return b},Ka:function(a,b){if(2>X.version)return W(1282),0;var c=
qb[a];if(c)return 0>b||b>=c.length?(W(1281),0):c[b];switch(a){case 7939:return c=Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Z(d)}),c=qb[a]=c,0>b||b>=c.length?(W(1281),0):c[b];default:return W(1280),0}},j:function(a,b){b=G(b);if(a=U[a]){var c=a,d=c.vb,f=c.Tb,k;if(!d)for(c.vb=d={},c.Sb={},k=0;k<Y.getProgramParameter(c,35718);++k){var h=Y.getActiveUniform(c,k);var n=h.name;h=h.size;var m=zb(n);m=0<m?n.slice(0,m):n;var q=c.Cb;c.Cb+=h;f[m]=[h,
q];for(n=0;n<h;++n)d[q]=n,c.Sb[q++]=m}c=a.vb;d=0;f=b;k=zb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,f=b.slice(0,k));if((f=a.Tb[f])&&d<f[0]&&(d+=f[1],c[d]=c[d]||Y.getUniformLocation(a,b)))return d}else W(1281);return-1},xa:function(a){a=U[a];Y.linkProgram(a);a.vb=0;a.Tb={}},F:function(a,b){Y.polygonOffset(a,b)},p:function(a){Y.readBuffer(a)},oa:function(a,b,c,d){Y.scissor(a,b,c,d)},ta:function(a,b,c,d){for(var f="",k=0;k<b;++k){var h=d?H[d+4*k>>2]:-1;f+=G(H[c+4*k>>2],0>h?void 0:h)}Y.shaderSource(V[a],
f)},Ea:function(a,b,c){Y.stencilFunc(a,b,c)},w:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},r:function(a){Y.stencilMask(a)},Ca:function(a,b,c){Y.stencilOp(a,b,c)},v:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},z:function(a,b){var c=Y,d=c.uniform1i;var f=Y.Ub;if(f){var k=f.vb[a];"number"===typeof k&&(f.vb[a]=k=Y.getUniformLocation(f,f.Sb[a]+(0<k?"["+k+"]":"")));a=k}else W(1282),a=void 0;d.call(c,a,b)},k:function(a){a=U[a];Y.useProgram(a);Y.Ub=a},ia:function(a,b){Y.vertexAttribDivisor(a,b)},
ja:function(a,b,c,d,f,k){Y.vertexAttribPointer(a,b,c,!!d,f,k)},pa:function(a,b,c,d){Y.viewport(a,b,c,d)},Ta:function(){e.Mb=function(a){0!=Ab()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.Mb)},Sa:function(){e.Rb=function(a){a=a.clipboardData.getData("text");ka("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",e.Rb)},Ra:function(a){e.lc=[];a=G(a);a=document.getElementById(a);e.Nb=function(b){b.stopPropagation();b.preventDefault()};e.Ob=function(b){b.stopPropagation();
b.preventDefault()};e.Pb=function(b){b.stopPropagation();b.preventDefault()};e.Qb=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;e.mc=c;Bb(c.length);var d;for(d=0;d<c.length;d++)ka("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Cb(b.clientX,b.clientY)};a.addEventListener("dragenter",e.Nb,!1);a.addEventListener("dragleave",e.Ob,!1);a.addEventListener("dragover",e.Pb,!1);a.addEventListener("drop",e.Qb,!1)},Na:function(){var a=document.getElementById("sokol-app-favicon");
a&&document.head.removeChild(a)},n:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Db()});document.body.append(a)},m:function(){document.getElementById("_sokol_app_input_element").focus()},Xa:function(a){a=G(a);e.ub=document.getElementById(a);e.ub||console.log("sokol_app.h: invalid target:"+a);e.ub.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+
a)},Qa:function(){window.removeEventListener("beforeunload",e.Mb)},Pa:function(){window.removeEventListener("paste",e.Rb)},Oa:function(a){a=G(a);a=document.getElementById(a);a.removeEventListener("dragenter",e.Nb);a.removeEventListener("dragleave",e.Ob);a.removeEventListener("dragover",e.Pb);a.removeEventListener("drop",e.Qb)},u:function(){e.ub&&e.ub.requestPointerLock&&e.ub.requestPointerLock()},Ma:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var f=d.getContext("2d"),
k=f.createImageData(a,b);k.data.set(F.subarray(c,c+a*b*4));f.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},l:function(){document.getElementById("_sokol_app_input_element").blur()}};
(function(){function a(f){e.asm=f.exports;ha=e.asm.Ya;ta();J=e.asm.pb;va.unshift(e.asm.Za);K--;e.monitorRunDependencies&&e.monitorRunDependencies(K);0==K&&(null!==Aa&&(clearInterval(Aa),Aa=null),L&&(f=L,L=null,f()))}function b(f){a(f.instance)}function c(f){return Ea().then(function(k){return WebAssembly.instantiate(k,d)}).then(f,function(k){B("failed to asynchronously prepare wasm: "+k);A(k)})}var d={a:Eb};K++;e.monitorRunDependencies&&e.monitorRunDependencies(K);if(e.instantiateWasm)try{return e.instantiateWasm(d,
a)}catch(f){return B("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return C||"function"!==typeof WebAssembly.instantiateStreaming||Ba()||M.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(M,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(k){B("wasm streaming compile failed: "+k);B("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.Za).apply(null,arguments)};var Db=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Db=e.__sapp_emsc_notify_keyboard_hidden=e.asm._a).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.$a).apply(null,arguments)};
var Ab=e.__sapp_html5_get_ask_leave_site=function(){return(Ab=e.__sapp_html5_get_ask_leave_site=e.asm.ab).apply(null,arguments)},Bb=e.__sapp_emsc_begin_drop=function(){return(Bb=e.__sapp_emsc_begin_drop=e.asm.bb).apply(null,arguments)};e.__sapp_emsc_drop=function(){return(e.__sapp_emsc_drop=e.asm.cb).apply(null,arguments)};var Cb=e.__sapp_emsc_end_drop=function(){return(Cb=e.__sapp_emsc_end_drop=e.asm.db).apply(null,arguments)};
e.__sapp_emsc_invoke_fetch_cb=function(){return(e.__sapp_emsc_invoke_fetch_cb=e.asm.eb).apply(null,arguments)};e._main=function(){return(e._main=e.asm.fb).apply(null,arguments)};e.__saudio_emsc_pull=function(){return(e.__saudio_emsc_pull=e.asm.gb).apply(null,arguments)};e.__sfetch_emsc_head_response=function(){return(e.__sfetch_emsc_head_response=e.asm.hb).apply(null,arguments)};e.__sfetch_emsc_get_response=function(){return(e.__sfetch_emsc_get_response=e.asm.ib).apply(null,arguments)};
e.__sfetch_emsc_failed_http_status=function(){return(e.__sfetch_emsc_failed_http_status=e.asm.jb).apply(null,arguments)};e.__sfetch_emsc_failed_buffer_too_small=function(){return(e.__sfetch_emsc_failed_buffer_too_small=e.asm.kb).apply(null,arguments)};
var S=e._malloc=function(){return(S=e._malloc=e.asm.lb).apply(null,arguments)},ma=e.stackSave=function(){return(ma=e.stackSave=e.asm.mb).apply(null,arguments)},na=e.stackRestore=function(){return(na=e.stackRestore=e.asm.nb).apply(null,arguments)},D=e.stackAlloc=function(){return(D=e.stackAlloc=e.asm.ob).apply(null,arguments)},Fb;function ea(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}L=function Gb(){Fb||Hb();Fb||(L=Gb)};
function Hb(a){function b(){if(!Fb&&(Fb=!0,e.calledRun=!0,!ia)){N(va);N(wa);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Ib){var c=a,d=e._main;c=c||[];var f=c.length+1,k=D(4*(f+1));H[k>>2]=qa(ba);for(var h=1;h<f;h++)H[(k>>2)+h]=qa(c[h-1]);H[(k>>2)+f]=0;try{var n=d(f,k);if(!(noExitRuntime||0<fa)){if(e.onExit)e.onExit(n);ia=!0}r(n,new ea(n))}catch(m){m instanceof ea||"unwind"==m||((c=m)&&"object"===typeof m&&m.stack&&(c=[m,m.stack]),B("exception thrown: "+c),r(1,m))}finally{}}if(e.postRun)for("function"==
typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),ya.unshift(c);N(ya)}}a=a||aa;if(!(0<K)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)za();N(ua);0<K||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Hb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Ib=!0;e.noInitialRun&&(Ib=!1);Hb();
