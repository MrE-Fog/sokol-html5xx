
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var g={},l;for(l in e)e.hasOwnProperty(l)&&(g[l]=e[l]);var aa=[],ba="./this.program";function r(a,b){throw b;}var ca="object"===typeof window,t="function"===typeof importScripts,u="",da,v,w,y,z;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)u=t?require("path").dirname(u)+"/":__dirname+"/",da=function(a,b){y||(y=require("fs"));z||(z=require("path"));a=z.normalize(a);return y.readFileSync(a,b?null:"utf8")},w=function(a){a=da(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||A("Assertion failed: undefined");return a},v=function(a,b,c){y||(y=require("fs"));z||(z=require("path"));a=z.normalize(a);y.readFile(a,function(d,f){d?c(d):b(f.buffer)})},
1<process.argv.length&&(ba=process.argv[1].replace(/\\/g,"/")),aa=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ea))throw a;}),process.on("unhandledRejection",A),r=function(a,b){if(noExitRuntime||0<fa)throw process.exitCode=a,b;process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(ca||t)t?u=self.location.href:"undefined"!==typeof document&&document.currentScript&&(u=document.currentScript.src),
u=0!==u.indexOf("blob:")?u.substr(0,u.lastIndexOf("/")+1):"",da=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},t&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),v=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};e.print||console.log.bind(console);
var B=e.printErr||console.warn.bind(console);for(l in g)g.hasOwnProperty(l)&&(e[l]=g[l]);g=null;e.arguments&&(aa=e.arguments);e.thisProgram&&(ba=e.thisProgram);e.quit&&(r=e.quit);var C;e.wasmBinary&&(C=e.wasmBinary);var noExitRuntime=e.noExitRuntime||!0;"object"!==typeof WebAssembly&&A("no native wasm support detected");var ha,ia=!1;function ja(a){var b=e["_"+a];b||A("Assertion failed: Cannot call unknown function "+(a+", make sure it is exported"));return b}
function ka(a,b,c){var d={string:function(m){var p=0;if(null!==m&&void 0!==m&&0!==m){var q=(m.length<<2)+1;p=D(q);E(m,F,p,q)}return p},array:function(m){var p=D(m.length);la.set(m,p);return p}};a=ja(a);var f=[],h=0;if(c)for(var k=0;k<c.length;k++){var n=d[b[k]];n?(0===h&&(h=ma()),f[k]=n(c[k])):f[k]=c[k]}a.apply(null,f);0!==h&&na(h)}var oa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function G(a){if(a){for(var b=F,c=a+NaN,d=a;b[d]&&!(d>=c);)++d;if(16<d-a&&b.subarray&&oa)a=oa.decode(b.subarray(a,d));else{for(c="";a<d;){var f=b[a++];if(f&128){var h=b[a++]&63;if(192==(f&224))c+=String.fromCharCode((f&31)<<6|h);else{var k=b[a++]&63;f=224==(f&240)?(f&15)<<12|h<<6|k:(f&7)<<18|h<<12|k<<6|b[a++]&63;65536>f?c+=String.fromCharCode(f):(f-=65536,c+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else c+=String.fromCharCode(f)}a=c}}else a="";return a}
function E(a,b,c,d){if(0<d){d=c+d-1;for(var f=0;f<a.length;++f){var h=a.charCodeAt(f);if(55296<=h&&57343>=h){var k=a.charCodeAt(++f);h=65536+((h&1023)<<10)|k&1023}if(127>=h){if(c>=d)break;b[c++]=h}else{if(2047>=h){if(c+1>=d)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=d)break;b[c++]=224|h>>12}else{if(c+3>=d)break;b[c++]=240|h>>18;b[c++]=128|h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0}}
function pa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function qa(a){var b=pa(a)+1,c=D(b);E(a,la,c,b);return c}var ra,la,F,sa,H,ta,I;
function ua(){var a=ha.buffer;ra=a;e.HEAP8=la=new Int8Array(a);e.HEAP16=sa=new Int16Array(a);e.HEAP32=H=new Int32Array(a);e.HEAPU8=F=new Uint8Array(a);e.HEAPU16=new Uint16Array(a);e.HEAPU32=new Uint32Array(a);e.HEAPF32=ta=new Float32Array(a);e.HEAPF64=I=new Float64Array(a)}var J,va=[],wa=[],xa=[],ya=[],za=[],fa=0;function Aa(){var a=e.preRun.shift();va.unshift(a)}var K=0,Ba=null,L=null;e.preloadedImages={};e.preloadedAudios={};
function A(a){if(e.onAbort)e.onAbort(a);B(a);ia=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ca(){return M.startsWith("data:application/octet-stream;base64,")}var M;M="saudio-sapp.wasm";if(!Ca()){var Da=M;M=e.locateFile?e.locateFile(Da,u):u+Da}function Ea(){var a=M;try{if(a==M&&C)return new Uint8Array(C);if(w)return w(a);throw"both async and sync fetching of the wasm failed";}catch(b){A(b)}}
function Fa(){if(!C&&(ca||t)){if("function"===typeof fetch&&!M.startsWith("file://"))return fetch(M,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+M+"'";return a.arrayBuffer()}).catch(function(){return Ea()});if(v)return new Promise(function(a,b){v(M,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ea()})}
function N(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.Hb;"number"===typeof c?void 0===b.hb?J.get(c)():J.get(c)(b.hb):c(void 0===b.hb?null:b.hb)}}}var Ga=0;function Ha(){for(var a=O.length-1;0<=a;--a)Ia(a);O=[];P=[]}var P=[];function Ja(){if(Ga&&Ka.fb)for(var a=0;a<P.length;++a){var b=P[a];P.splice(a,1);--a;b.Qb.apply(null,b.Db)}}var O=[];function Ia(a){var b=O[a];b.target.removeEventListener(b.Za,b.xb,b.$a);O.splice(a,1)}
function Q(a){function b(d){++Ga;Ka=a;Ja();a.cb(d);Ja();--Ga}if(a.bb)a.xb=b,a.target.addEventListener(a.Za,b,a.$a),O.push(a),La||(ya.push(Ha),La=!0);else for(var c=0;c<O.length;++c)O[c].target==a.target&&O[c].Za==a.Za&&Ia(c--)}var La,Ka,Ma,R,Na,Oa,Pa,Qa,Ra=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function S(a){a=2<a?G(a):a;return Ra[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function Sa(a){return 0>Ra.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function Ta(a,b,c,d,f,h){Ma||(Ma=T(164));a={target:S(a),fb:!0,Za:h,bb:d,cb:function(k){var n=Ma,m=n>>2;H[m]=k.location;H[m+1]=k.ctrlKey;H[m+2]=k.shiftKey;H[m+3]=k.altKey;H[m+4]=k.metaKey;H[m+5]=k.repeat;H[m+6]=k.charCode;H[m+7]=k.keyCode;H[m+8]=k.which;E(k.key||"",F,n+36,32);E(k.code||"",F,n+68,32);E(k.char||"",F,n+100,32);E(k.locale||"",F,n+132,32);J.get(d)(f,n,b)&&k.preventDefault()},$a:c};Q(a)}
function Ua(a,b,c){a>>=2;H[a]=b.screenX;H[a+1]=b.screenY;H[a+2]=b.clientX;H[a+3]=b.clientY;H[a+4]=b.ctrlKey;H[a+5]=b.shiftKey;H[a+6]=b.altKey;H[a+7]=b.metaKey;sa[2*a+16]=b.button;sa[2*a+17]=b.buttons;H[a+9]=b.movementX;H[a+10]=b.movementY;c=Sa(c);H[a+11]=b.clientX-c.left;H[a+12]=b.clientY-c.top}function U(a,b,c,d,f,h){R||(R=T(64));a=S(a);Q({target:a,fb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Za:h,bb:d,cb:function(k){k=k||event;Ua(R,k,a);J.get(d)(f,R,b)&&k.preventDefault()},$a:c})}
function Va(a,b,c,d,f){Na||(Na=T(260));Q({target:a,Za:f,bb:d,cb:function(h){h=h||event;var k=Na,n=document.pointerLockElement||document.jb||document.ib||document.kb;H[k>>2]=!!n;var m=n&&n.id?n.id:"";E(n?n==window?"#window":n==screen?"#screen":n&&n.nodeName?n.nodeName:"":"",F,k+4,128);E(m,F,k+132,128);J.get(d)(20,k,b)&&h.preventDefault()},$a:c})}function Wa(a,b,c,d,f){Q({target:a,Za:f,bb:d,cb:function(h){h=h||event;J.get(d)(38,0,b)&&h.preventDefault()},$a:c})}
function Xa(a,b,c,d){Oa||(Oa=T(36));a=S(a);Q({target:a,Za:"resize",bb:d,cb:function(f){f=f||event;if(f.target==a){var h=document.body;if(h){var k=Oa;H[k>>2]=f.detail;H[k+4>>2]=h.clientWidth;H[k+8>>2]=h.clientHeight;H[k+12>>2]=innerWidth;H[k+16>>2]=innerHeight;H[k+20>>2]=outerWidth;H[k+24>>2]=outerHeight;H[k+28>>2]=pageXOffset;H[k+32>>2]=pageYOffset;J.get(d)(10,k,b)&&f.preventDefault()}}},$a:c})}
function Ya(a,b,c,d,f,h){Pa||(Pa=T(1684));a=S(a);Q({target:a,fb:"touchstart"==h||"touchend"==h,Za:h,bb:d,cb:function(k){for(var n={},m=k.touches,p=0;p<m.length;++p){var q=m[p];n[q.identifier]=q}m=k.changedTouches;for(p=0;p<m.length;++p)q=m[p],q.Ab=1,n[q.identifier]=q;m=k.targetTouches;for(p=0;p<m.length;++p)n[m[p].identifier].Bb=1;m=Pa;q=m>>2;H[q+1]=k.ctrlKey;H[q+2]=k.shiftKey;H[q+3]=k.altKey;H[q+4]=k.metaKey;q+=5;var Za=Sa(a),$a=0;for(p in n){var x=n[p];H[q]=x.identifier;H[q+1]=x.screenX;H[q+2]=
x.screenY;H[q+3]=x.clientX;H[q+4]=x.clientY;H[q+5]=x.pageX;H[q+6]=x.pageY;H[q+7]=x.Ab;H[q+8]=x.Bb;H[q+9]=x.clientX-Za.left;H[q+10]=x.clientY-Za.top;q+=13;if(31<++$a)break}H[m>>2]=$a;J.get(d)(f,m,b)&&k.preventDefault()},$a:c})}function ab(a,b,c,d,f,h){a={target:S(a),Za:h,bb:d,cb:function(k){k=k||event;J.get(d)(f,0,b)&&k.preventDefault()},$a:c};Q(a)}
function bb(a,b,c,d){Qa||(Qa=T(96));Q({target:a,fb:!0,Za:"wheel",bb:d,cb:function(f){f=f||event;var h=Qa;Ua(h,f,a);I[h+64>>3]=f.deltaX;I[h+72>>3]=f.deltaY;I[h+80>>3]=f.deltaZ;H[h+88>>2]=f.deltaMode;J.get(d)(9,h,b)&&f.preventDefault()},$a:c})}
function cb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,h){b.drawArraysInstancedANGLE(c,d,f,h)},a.drawElementsInstanced=function(c,d,f,h,k){b.drawElementsInstancedANGLE(c,d,f,h,k)})}
function db(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function eb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function fb(a){a.Gb=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function gb(a){a.Jb=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function hb(a){a.Lb=a.getExtension("WEBGL_multi_draw")}var ib=1,jb=[],kb=[],lb=[],mb=[],nb=[],V=[],ob=[],pb={},qb={};function W(a){rb||(rb=a)}function sb(a){for(var b=ib++,c=a.length;c<b;c++)a[c]=null;return b}
function tb(a,b){a.pb||(a.pb=a.getContext,a.getContext=function(d,f){f=a.pb(d,f);return"webgl"==d==f instanceof WebGLRenderingContext?f:null});var c=1<b.qb?a.getContext("webgl2",b):a.getContext("webgl",b);return c?ub(c,b):0}function ub(a,b){var c=sb(ob),d={Ib:c,attributes:b,version:b.qb,gb:a};a.canvas&&(a.canvas.Cb=d);ob[c]=d;("undefined"===typeof b.ob||b.ob)&&vb(d);return c}
function vb(a){a||(a=X);if(!a.zb){a.zb=!0;var b=a.gb;cb(b);db(b);eb(b);fb(b);gb(b);2<=a.version&&(b.nb=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.nb)b.nb=b.getExtension("EXT_disjoint_timer_query");hb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var rb,X,wb=["default","low-power","high-performance"];
function xb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>X.version){W(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>X.version){W(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)H[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){W(1280);B("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:W(1280);B("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}H[b>>2]=c}else W(1281)}
function Z(a){var b=pa(a)+1,c=T(b);E(a,F,c,b);return c}
var Y,Db={y:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},Q:function(a,b,c){a=S(a);if(!a)return-4;a=Sa(a);I[b>>3]=a.width;I[c>>3]=a.height;return 0},S:function(a,b,c){F.copyWithin(a,b,b+c)},na:function(a,b){function c(d){J.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},T:function(a){var b=F.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ha.grow(Math.min(2147483648,
d)-ra.byteLength+65535>>>16);ua();var f=1;break a}catch(h){}f=void 0}if(f)return!0}return!1},x:function(a,b,c){a=S(a);if(!a)return-4;a.width=b;a.height=c;return 0},J:function(a,b,c,d){Ta(a,b,c,d,2,"keydown");return 0},H:function(a,b,c,d){Ta(a,b,c,d,1,"keypress");return 0},I:function(a,b,c,d){Ta(a,b,c,d,3,"keyup");return 0},P:function(a,b,c,d){U(a,b,c,d,5,"mousedown");return 0},M:function(a,b,c,d){U(a,b,c,d,33,"mouseenter");return 0},L:function(a,b,c,d){U(a,b,c,d,34,"mouseleave");return 0},N:function(a,
b,c,d){U(a,b,c,d,8,"mousemove");return 0},O:function(a,b,c,d){U(a,b,c,d,6,"mouseup");return 0},C:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.jb||document.body.ib||document.body.kb))return-1;a=S(a);if(!a)return-4;Va(a,b,c,d,"pointerlockchange");Va(a,b,c,d,"mozpointerlockchange");Va(a,b,c,d,"webkitpointerlockchange");Va(a,b,c,d,"mspointerlockchange");return 0},B:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.jb||
document.body.ib||document.body.kb))return-1;a=S(a);if(!a)return-4;Wa(a,b,c,d,"pointerlockerror");Wa(a,b,c,d,"mozpointerlockerror");Wa(a,b,c,d,"webkitpointerlockerror");Wa(a,b,c,d,"mspointerlockerror");return 0},Ca:function(a,b,c,d){Xa(a,b,c,d);return 0},D:function(a,b,c,d){Ya(a,b,c,d,25,"touchcancel");return 0},E:function(a,b,c,d){Ya(a,b,c,d,23,"touchend");return 0},F:function(a,b,c,d){Ya(a,b,c,d,24,"touchmove");return 0},G:function(a,b,c,d){Ya(a,b,c,d,22,"touchstart");return 0},A:function(a,b,c,
d){ab(a,b,c,d,31,"webglcontextlost");return 0},z:function(a,b,c,d){ab(a,b,c,d,32,"webglcontextrestored");return 0},K:function(a,b,c,d){a=S(a);return"undefined"!==typeof a.onwheel?(bb(a,b,c,d),0):-1},r:function(a,b){b>>=2;b={alpha:!!H[b],depth:!!H[b+1],stencil:!!H[b+2],antialias:!!H[b+3],premultipliedAlpha:!!H[b+4],preserveDrawingBuffer:!!H[b+5],powerPreference:wb[H[b+6]],failIfMajorPerformanceCaveat:!!H[b+7],qb:H[b+8],Kb:H[b+9],ob:H[b+10],yb:H[b+11],Mb:H[b+12],Nb:H[b+13]};a=S(a);return!a||b.yb?0:
tb(a,b)},R:function(a,b){a=ob[a];b=G(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&cb(Y);"OES_vertex_array_object"==b&&db(Y);"WEBGL_draw_buffers"==b&&eb(Y);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&fb(Y);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&gb(Y);"WEBGL_multi_draw"==b&&hb(Y);return!!a.gb.getExtension(b)},ia:function(a){a>>=2;for(var b=0;14>b;++b)H[a+b]=0;H[a]=H[a+1]=H[a+3]=H[a+4]=H[a+8]=H[a+10]=1},V:function(a){X=ob[a];e.Eb=Y=X&&X.gb;return!a||
Y?0:-5},b:function(a){Y.activeTexture(a)},g:function(a,b){35051==a?Y.lb=b:35052==a&&(Y.mb=b);Y.bindBuffer(a,jb[b])},d:function(a,b){Y.bindFramebuffer(a,lb[b])},a:function(a,b){Y.bindTexture(a,nb[b])},v:function(a){Y.bindVertexArray(V[a])},ea:function(a,b,c,d){Y.blendColor(a,b,c,d)},fa:function(a,b){Y.blendEquationSeparate(a,b)},ga:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},h:function(a,b,c,d,f,h,k,n,m,p){Y.blitFramebuffer(a,b,c,d,f,h,k,n,m,p)},Y:function(a){Y.clear(a)},q:function(a,b,c,d){Y.clearColor(a,
b,c,d)},_:function(a){Y.clearDepth(a)},Z:function(a){Y.clearStencil(a)},j:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},ba:function(a){Y.cullFace(a)},ra:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=jb[d];f&&(Y.deleteBuffer(f),f.name=0,jb[d]=null,d==Y.lb&&(Y.lb=0),d==Y.mb&&(Y.mb=0))}},f:function(a,b){for(var c=0;c<a;++c){var d=H[b+4*c>>2],f=lb[d];f&&(Y.deleteFramebuffer(f),f.name=0,lb[d]=null)}},pa:function(a){if(a){var b=kb[a];b?(Y.deleteProgram(b),b.name=0,kb[a]=null):W(1281)}},w:function(a,
b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=mb[d];f&&(Y.deleteRenderbuffer(f),f.name=0,mb[d]=null)}},qa:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=nb[d];f&&(Y.deleteTexture(f),f.name=0,nb[d]=null)}},ma:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2];Y.deleteVertexArray(V[d]);V[d]=null}},u:function(a){Y.depthFunc(a)},t:function(a){Y.depthMask(!!a)},e:function(a){Y.disable(a)},ka:function(a){Y.disableVertexAttribArray(a)},n:function(a){Y.enable(a)},ca:function(a){Y.frontFace(a)},la:function(a,
b){for(var c=0;c<a;c++){var d=Y.createVertexArray(),f=d&&sb(V);d?(d.name=f,V[f]=d):W(1282);H[b+4*c>>2]=f}},c:function(a,b){xb(a,b)},ta:function(a){var b=pb[a];if(!b){switch(a){case 7939:b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Z(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||W(1280);b=b&&Z(b);break;case 7938:b=Y.getParameter(7938);b=2<=X.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Z(b);break;case 35724:b=Y.getParameter(35724);
var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Z(b);break;default:W(1280)}pb[a]=b}return b},sa:function(a,b){if(2>X.version)return W(1282),0;var c=qb[a];if(c)return 0>b||b>=c.length?(W(1281),0):c[b];switch(a){case 7939:return c=Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Z(d)}),c=qb[a]=c,0>b||b>=c.length?(W(1281),0):c[b];default:return W(1280),
0}},da:function(a,b){Y.polygonOffset(a,b)},i:function(a){Y.readBuffer(a)},$:function(a,b,c,d){Y.scissor(a,b,c,d)},ja:function(a,b,c){Y.stencilFunc(a,b,c)},s:function(a){Y.stencilMask(a)},ha:function(a,b,c){Y.stencilOp(a,b,c)},oa:function(a){a=kb[a];Y.useProgram(a);Y.Fb=a},aa:function(a,b,c,d){Y.viewport(a,b,c,d)},Ba:function(){e.rb=function(a){0!=yb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.rb)},Aa:function(){e.wb=function(a){a=a.clipboardData.getData("text");
ka("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",e.wb)},za:function(a){e.Ob=[];a=G(a);a=document.getElementById(a);e.sb=function(b){b.stopPropagation();b.preventDefault()};e.tb=function(b){b.stopPropagation();b.preventDefault()};e.ub=function(b){b.stopPropagation();b.preventDefault()};e.vb=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;e.Pb=c;zb(c.length);var d;for(d=0;d<c.length;d++)ka("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Ab(b.clientX,
b.clientY)};a.addEventListener("dragenter",e.sb,!1);a.addEventListener("dragleave",e.tb,!1);a.addEventListener("dragover",e.ub,!1);a.addEventListener("drop",e.vb,!1)},va:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},m:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Bb()});document.body.append(a)},l:function(){document.getElementById("_sokol_app_input_element").focus()},
Da:function(a){a=G(a);e.eb=document.getElementById(a);e.eb||console.log("sokol_app.h: invalid target:"+a);e.eb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},ya:function(){window.removeEventListener("beforeunload",e.rb)},xa:function(){window.removeEventListener("paste",e.wb)},wa:function(a){a=G(a);a=document.getElementById(a);a.removeEventListener("dragenter",e.sb);a.removeEventListener("dragleave",e.tb);a.removeEventListener("dragover",e.ub);a.removeEventListener("drop",
e.vb)},o:function(){e.eb&&e.eb.requestPointerLock&&e.eb.requestPointerLock()},ua:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var f=d.getContext("2d"),h=f.createImageData(a,b);h.data.set(F.subarray(c,c+a*b*4));f.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},k:function(){document.getElementById("_sokol_app_input_element").blur()},U:function(){return e.ab?e.ab.bufferSize:
0},X:function(a,b,c){e.Ya=null;e.ab=null;"undefined"!==typeof AudioContext?e.Ya=new AudioContext({sampleRate:a,latencyHint:"interactive"}):"undefined"!==typeof webkitAudioContext?e.Ya=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}):(e.Ya=null,console.log("sokol_audio.h: no WebAudio support"));return e.Ya?(console.log("sokol_audio.h: sample rate ",e.Ya.sampleRate),e.ab=e.Ya.createScriptProcessor(c,0,b),e.ab.onaudioprocess=function(d){var f=d.outputBuffer.length,h=Cb(f);if(h)for(var k=
d.outputBuffer.numberOfChannels,n=0;n<k;n++)for(var m=d.outputBuffer.getChannelData(n),p=0;p<f;p++)m[p]=ta[(h>>2)+(k*p+n)]},e.ab.connect(e.Ya.destination),a=function(){e.Ya&&"suspended"===e.Ya.state&&e.Ya.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},W:function(){return e.Ya?e.Ya.sampleRate:0},p:function(){null!==e.Ya&&(e.ab&&e.ab.disconnect(),e.Ya.close(),e.Ya=null,e.ab=null)}};
(function(){function a(f){e.asm=f.exports;ha=e.asm.Ea;ua();J=e.asm.Xa;wa.unshift(e.asm.Fa);K--;e.monitorRunDependencies&&e.monitorRunDependencies(K);0==K&&(null!==Ba&&(clearInterval(Ba),Ba=null),L&&(f=L,L=null,f()))}function b(f){a(f.instance)}function c(f){return Fa().then(function(h){return WebAssembly.instantiate(h,d)}).then(f,function(h){B("failed to asynchronously prepare wasm: "+h);A(h)})}var d={a:Db};K++;e.monitorRunDependencies&&e.monitorRunDependencies(K);if(e.instantiateWasm)try{return e.instantiateWasm(d,
a)}catch(f){return B("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return C||"function"!==typeof WebAssembly.instantiateStreaming||Ca()||M.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(M,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(h){B("wasm streaming compile failed: "+h);B("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.Fa).apply(null,arguments)};var Bb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Bb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.Ga).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.Ha).apply(null,arguments)};
var yb=e.__sapp_html5_get_ask_leave_site=function(){return(yb=e.__sapp_html5_get_ask_leave_site=e.asm.Ia).apply(null,arguments)},zb=e.__sapp_emsc_begin_drop=function(){return(zb=e.__sapp_emsc_begin_drop=e.asm.Ja).apply(null,arguments)};e.__sapp_emsc_drop=function(){return(e.__sapp_emsc_drop=e.asm.Ka).apply(null,arguments)};var Ab=e.__sapp_emsc_end_drop=function(){return(Ab=e.__sapp_emsc_end_drop=e.asm.La).apply(null,arguments)};
e.__sapp_emsc_invoke_fetch_cb=function(){return(e.__sapp_emsc_invoke_fetch_cb=e.asm.Ma).apply(null,arguments)};e._main=function(){return(e._main=e.asm.Na).apply(null,arguments)};var Cb=e.__saudio_emsc_pull=function(){return(Cb=e.__saudio_emsc_pull=e.asm.Oa).apply(null,arguments)};e.__sfetch_emsc_head_response=function(){return(e.__sfetch_emsc_head_response=e.asm.Pa).apply(null,arguments)};e.__sfetch_emsc_get_response=function(){return(e.__sfetch_emsc_get_response=e.asm.Qa).apply(null,arguments)};
e.__sfetch_emsc_failed_http_status=function(){return(e.__sfetch_emsc_failed_http_status=e.asm.Ra).apply(null,arguments)};e.__sfetch_emsc_failed_buffer_too_small=function(){return(e.__sfetch_emsc_failed_buffer_too_small=e.asm.Sa).apply(null,arguments)};
var T=e._malloc=function(){return(T=e._malloc=e.asm.Ta).apply(null,arguments)},ma=e.stackSave=function(){return(ma=e.stackSave=e.asm.Ua).apply(null,arguments)},na=e.stackRestore=function(){return(na=e.stackRestore=e.asm.Va).apply(null,arguments)},D=e.stackAlloc=function(){return(D=e.stackAlloc=e.asm.Wa).apply(null,arguments)},Eb;function ea(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}L=function Fb(){Eb||Gb();Eb||(L=Fb)};
function Gb(a){function b(){if(!Eb&&(Eb=!0,e.calledRun=!0,!ia)){N(wa);N(xa);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Hb){var c=a,d=e._main;c=c||[];var f=c.length+1,h=D(4*(f+1));H[h>>2]=qa(ba);for(var k=1;k<f;k++)H[(h>>2)+k]=qa(c[k-1]);H[(h>>2)+f]=0;try{var n=d(f,h);if(!(noExitRuntime||0<fa)){if(e.onExit)e.onExit(n);ia=!0}r(n,new ea(n))}catch(m){m instanceof ea||"unwind"==m||((c=m)&&"object"===typeof m&&m.stack&&(c=[m,m.stack]),B("exception thrown: "+c),r(1,m))}finally{}}if(e.postRun)for("function"==
typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),za.unshift(c);N(za)}}a=a||aa;if(!(0<K)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Aa();N(va);0<K||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Gb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Hb=!0;e.noInitialRun&&(Hb=!1);Gb();
