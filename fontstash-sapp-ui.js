
var g;g||(g=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in g)g.hasOwnProperty(l)&&(k[l]=g[l]);var aa=[],ba="./this.program";function ca(a,b){throw b;}var da="object"===typeof window,r="function"===typeof importScripts,t="",ea,fa,ha,u,v;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)t=r?require("path").dirname(t)+"/":__dirname+"/",ea=function(a,b){u||(u=require("fs"));v||(v=require("path"));a=v.normalize(a);return u.readFileSync(a,b?null:"utf8")},ha=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||w("Assertion failed: undefined");return a},fa=function(a,b,c){u||(u=require("fs"));v||(v=require("path"));a=v.normalize(a);u.readFile(a,function(d,e){d?c(d):b(e.buffer)})},
1<process.argv.length&&(ba=process.argv[1].replace(/\\/g,"/")),aa=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=g),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",w),ca=function(a,b){if(noExitRuntime||0<ja)throw process.exitCode=a,b;process.exit(a)},g.inspect=function(){return"[Emscripten Module object]"};else if(da||r)r?t=self.location.href:"undefined"!==typeof document&&document.currentScript&&(t=document.currentScript.src),
t=0!==t.indexOf("blob:")?t.substr(0,t.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},r&&(ha=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),fa=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};
var ka=g.print||console.log.bind(console),x=g.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(g[l]=k[l]);k=null;g.arguments&&(aa=g.arguments);g.thisProgram&&(ba=g.thisProgram);g.quit&&(ca=g.quit);var y;g.wasmBinary&&(y=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!0;"object"!==typeof WebAssembly&&w("no native wasm support detected");var la,ma=!1;
function na(a){var b=g["_"+a];b||w("Assertion failed: Cannot call unknown function "+(a+", make sure it is exported"));return b}function oa(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=z(q);A(n,C,p,q)}return p},array:function(n){var p=z(n.length);pa.set(n,p);return p}};a=na(a);var e=[],h=0;if(c)for(var f=0;f<c.length;f++){var m=d[b[f]];m?(0===h&&(h=qa()),e[f]=m(c[f])):e[f]=c[f]}b=a.apply(null,e);b=function(n){0!==h&&ra(h);return n}(b)}
var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ta(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&sa)return sa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var f=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|f:(e&7)<<18|h<<12|f<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function D(a,b){return a?ta(C,a,b):""}
function A(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var f=a.charCodeAt(h);if(55296<=f&&57343>=f){var m=a.charCodeAt(++h);f=65536+((f&1023)<<10)|m&1023}if(127>=f){if(c>=d)break;b[c++]=f}else{if(2047>=f){if(c+1>=d)break;b[c++]=192|f>>6}else{if(65535>=f){if(c+2>=d)break;b[c++]=224|f>>12}else{if(c+3>=d)break;b[c++]=240|f>>18;b[c++]=128|f>>12&63}b[c++]=128|f>>6&63}b[c++]=128|f&63}}b[c]=0;return c-e}
function ua(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function va(a){var b=ua(a)+1,c=z(b);A(a,pa,c,b);return c}var wa,pa,C,xa,ya,E,za,F,G;
function Aa(){var a=la.buffer;wa=a;g.HEAP8=pa=new Int8Array(a);g.HEAP16=xa=new Int16Array(a);g.HEAP32=E=new Int32Array(a);g.HEAPU8=C=new Uint8Array(a);g.HEAPU16=ya=new Uint16Array(a);g.HEAPU32=za=new Uint32Array(a);g.HEAPF32=F=new Float32Array(a);g.HEAPF64=G=new Float64Array(a)}var H,Ba=[],Ca=[],Da=[],Ea=[],Fa=[],ja=0;function Ga(){var a=g.preRun.shift();Ba.unshift(a)}var I=0,Ha=null,J=null;g.preloadedImages={};g.preloadedAudios={};
function w(a){if(g.onAbort)g.onAbort(a);x(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ia(){return K.startsWith("data:application/octet-stream;base64,")}var K;K="fontstash-sapp-ui.wasm";if(!Ia()){var Ja=K;K=g.locateFile?g.locateFile(Ja,t):t+Ja}function Ka(){var a=K;try{if(a==K&&y)return new Uint8Array(y);if(ha)return ha(a);throw"both async and sync fetching of the wasm failed";}catch(b){w(b)}}
function La(){if(!y&&(da||r)){if("function"===typeof fetch&&!K.startsWith("file://"))return fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Ka()});if(fa)return new Promise(function(a,b){fa(K,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ka()})}
function Ma(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(g);else{var c=b.Ic;"number"===typeof c?void 0===b.ec?H.get(c)():H.get(c)(b.ec):c(void 0===b.ec?null:b.ec)}}}var Na=[null,[],[]],Oa={},Pa=0;function Qa(){for(var a=L.length-1;0<=a;--a)Ra(a);L=[];Sa=[]}var Sa=[];function Ta(){if(Pa&&Ua.$b)for(var a=0;a<Sa.length;++a){var b=Sa[a];Sa.splice(a,1);--a;b.Sc.apply(null,b.Ec)}}var L=[];function Ra(a){var b=L[a];b.target.removeEventListener(b.Tb,b.yc,b.Ub);L.splice(a,1)}
function M(a){function b(d){++Pa;Ua=a;Ta();a.Xb(d);Ta();--Pa}if(a.Vb)a.yc=b,a.target.addEventListener(a.Tb,b,a.Ub),L.push(a),Va||(Ea.push(Qa),Va=!0);else for(var c=0;c<L.length;++c)L[c].target==a.target&&L[c].Tb==a.Tb&&Ra(c--)}var Va,Ua,Wa,Xa,Ya,Za,$a,ab,bb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function N(a){a=2<a?D(a):a;return bb[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function cb(a){return 0>bb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function db(a,b,c,d,e,h){Wa||(Wa=O(176));a={target:N(a),$b:!0,Tb:h,Vb:d,Xb:function(f){var m=Wa;G[m>>3]=f.timeStamp;var n=m>>2;E[n+2]=f.location;E[n+3]=f.ctrlKey;E[n+4]=f.shiftKey;E[n+5]=f.altKey;E[n+6]=f.metaKey;E[n+7]=f.repeat;E[n+8]=f.charCode;E[n+9]=f.keyCode;E[n+10]=f.which;A(f.key||"",C,m+44,32);A(f.code||"",C,m+76,32);A(f.char||"",C,m+108,32);A(f.locale||"",C,m+140,32);H.get(d)(e,m,b)&&f.preventDefault()},Ub:c};M(a)}
function eb(a,b,c){G[a>>3]=b.timeStamp;a>>=2;E[a+2]=b.screenX;E[a+3]=b.screenY;E[a+4]=b.clientX;E[a+5]=b.clientY;E[a+6]=b.ctrlKey;E[a+7]=b.shiftKey;E[a+8]=b.altKey;E[a+9]=b.metaKey;xa[2*a+20]=b.button;xa[2*a+21]=b.buttons;E[a+11]=b.movementX;E[a+12]=b.movementY;c=cb(c);E[a+13]=b.clientX-c.left;E[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,h){Xa||(Xa=O(72));a=N(a);M({target:a,$b:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Tb:h,Vb:d,Xb:function(f){f=f||event;eb(Xa,f,a);H.get(d)(e,Xa,b)&&f.preventDefault()},Ub:c})}
function fb(a,b,c,d,e){Ya||(Ya=O(260));M({target:a,Tb:e,Vb:d,Xb:function(h){h=h||event;var f=Ya,m=document.pointerLockElement||document.hc||document.jc||document.ic;E[f>>2]=!!m;var n=m&&m.id?m.id:"";A(m?m==window?"#window":m==screen?"#screen":m&&m.nodeName?m.nodeName:"":"",C,f+4,128);A(n,C,f+132,128);H.get(d)(20,f,b)&&h.preventDefault()},Ub:c})}function gb(a,b,c,d,e){M({target:a,Tb:e,Vb:d,Xb:function(h){h=h||event;H.get(d)(38,0,b)&&h.preventDefault()},Ub:c})}
function hb(a,b,c,d){Za||(Za=O(36));a=N(a);M({target:a,Tb:"resize",Vb:d,Xb:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var f=Za;E[f>>2]=e.detail;E[f+4>>2]=h.clientWidth;E[f+8>>2]=h.clientHeight;E[f+12>>2]=innerWidth;E[f+16>>2]=innerHeight;E[f+20>>2]=outerWidth;E[f+24>>2]=outerHeight;E[f+28>>2]=pageXOffset;E[f+32>>2]=pageYOffset;H.get(d)(10,f,b)&&e.preventDefault()}}},Ub:c})}
function ib(a,b,c,d,e,h){$a||($a=O(1696));a=N(a);M({target:a,$b:"touchstart"==h||"touchend"==h,Tb:h,Vb:d,Xb:function(f){for(var m={},n=f.touches,p=0;p<n.length;++p){var q=n[p];m[q.identifier]=q}n=f.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.Bc=1,m[q.identifier]=q;n=f.targetTouches;for(p=0;p<n.length;++p)m[n[p].identifier].Cc=1;n=$a;G[n>>3]=f.timeStamp;q=n>>2;E[q+3]=f.ctrlKey;E[q+4]=f.shiftKey;E[q+5]=f.altKey;E[q+6]=f.metaKey;q+=7;var X=cb(a),nb=0;for(p in m){var B=m[p];E[q]=B.identifier;E[q+1]=
B.screenX;E[q+2]=B.screenY;E[q+3]=B.clientX;E[q+4]=B.clientY;E[q+5]=B.pageX;E[q+6]=B.pageY;E[q+7]=B.Bc;E[q+8]=B.Cc;E[q+9]=B.clientX-X.left;E[q+10]=B.clientY-X.top;q+=13;if(31<++nb)break}E[n+8>>2]=nb;H.get(d)(e,n,b)&&f.preventDefault()},Ub:c})}function jb(a,b,c,d,e,h){a={target:N(a),Tb:h,Vb:d,Xb:function(f){f=f||event;H.get(d)(e,0,b)&&f.preventDefault()},Ub:c};M(a)}
function kb(a,b,c,d){ab||(ab=O(104));M({target:a,$b:!0,Tb:"wheel",Vb:d,Xb:function(e){e=e||event;var h=ab;eb(h,e,a);G[h+72>>3]=e.deltaX;G[h+80>>3]=e.deltaY;G[h+88>>3]=e.deltaZ;E[h+96>>2]=e.deltaMode;H.get(d)(9,h,b)&&e.preventDefault()},Ub:c})}
function lb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,f){b.drawElementsInstancedANGLE(c,d,e,h,f)})}
function mb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function ob(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function pb(a){a.Gc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function qb(a){a.Lc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function rb(a){a.Nc=a.getExtension("WEBGL_multi_draw")}var sb=1,tb=[],Q=[],ub=[],vb=[],wb=[],R=[],xb=[],yb=[],zb={},Ab={};function S(a){Bb||(Bb=a)}function Cb(a){for(var b=sb++,c=a.length;c<b;c++)a[c]=null;return b}
function Db(a,b){a.nc||(a.nc=a.getContext,a.getContext=function(d,e){e=a.nc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.oc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Eb(c,b):0}function Eb(a,b){var c=Cb(yb),d={Kc:c,attributes:b,version:b.oc,dc:a};a.canvas&&(a.canvas.Dc=d);yb[c]=d;("undefined"===typeof b.mc||b.mc)&&Fb(d);return c}
function Fb(a){a||(a=T);if(!a.Ac){a.Ac=!0;var b=a.dc;lb(b);mb(b);ob(b);pb(b);qb(b);2<=a.version&&(b.lc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.lc)b.lc=b.getExtension("EXT_disjoint_timer_query");rb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Bb,T,Gb=["default","low-power","high-performance"];
function Hb(a,b,c,d){for(var e=0;e<a;e++){var h=U[c](),f=h&&Cb(d);h?(h.name=f,d[f]=h):S(1282);E[b+4*e>>2]=f}}
function Ib(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=U.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>T.version){S(1282);return}c=2*(U.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>T.version){S(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=U.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":S(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:S(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)E[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){S(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:S(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}E[b>>2]=c}else S(1281)}
function V(a){var b=ua(a)+1,c=O(b);A(a,C,c,b);return c}function Jb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function W(a){a-=5120;return 0==a?pa:1==a?C:2==a?xa:4==a?E:6==a?F:5==a||28922==a||28520==a||30779==a||30782==a?za:ya}function Kb(a){return 31-Math.clz32(a.BYTES_PER_ELEMENT)}function Lb(a,b,c,d,e){a=W(a);var h=Kb(a);return a.subarray(e>>h,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}
function Y(a){var b=U.xc;if(b){var c=b.Zb[a];"number"===typeof c&&(b.Zb[a]=c=U.getUniformLocation(b,b.vc[a]+(0<c?"["+c+"]":"")));return c}S(1282)}for(var Z=[],U,Mb=new Float32Array(288),Nb=0;288>Nb;++Nb)Z[Nb]=Mb.subarray(0,Nb+1);
var Wb={ja:function(){return 0},eb:function(){return 0},gb:function(){},U:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ba:function(a,b,c){a=N(a);if(!a)return-4;a=cb(a);G[b>>3]=a.width;G[c>>3]=a.height;return 0},bb:function(a,b,c){C.copyWithin(a,b,b+c)},La:function(a,b){function c(d){H.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},cb:function(a){var b=C.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,
a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{la.grow(Math.min(2147483648,d)-wa.byteLength+65535>>>16);Aa();var e=1;break a}catch(h){}e=void 0}if(e)return!0}return!1},S:function(a,b,c){a=N(a);if(!a)return-4;a.width=b;a.height=c;return 0},ea:function(a,b,c,d){db(a,b,c,d,2,"keydown");return 0},ca:function(a,b,c,d){db(a,b,c,d,1,"keypress");return 0},da:function(a,b,c,d){db(a,b,c,d,3,"keyup");return 0},oa:function(a,b,c,d){P(a,b,c,d,5,"mousedown");return 0},ha:function(a,b,c,d){P(a,
b,c,d,33,"mouseenter");return 0},ga:function(a,b,c,d){P(a,b,c,d,34,"mouseleave");return 0},ia:function(a,b,c,d){P(a,b,c,d,8,"mousemove");return 0},na:function(a,b,c,d){P(a,b,c,d,6,"mouseup");return 0},Y:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.hc||document.body.jc||document.body.ic))return-1;a=N(a);if(!a)return-4;fb(a,b,c,d,"pointerlockchange");fb(a,b,c,d,"mozpointerlockchange");fb(a,b,c,d,"webkitpointerlockchange");fb(a,b,c,d,"mspointerlockchange");
return 0},X:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.hc||document.body.jc||document.body.ic))return-1;a=N(a);if(!a)return-4;gb(a,b,c,d,"pointerlockerror");gb(a,b,c,d,"mozpointerlockerror");gb(a,b,c,d,"webkitpointerlockerror");gb(a,b,c,d,"mspointerlockerror");return 0},Ya:function(a,b,c,d){hb(a,b,c,d);return 0},Z:function(a,b,c,d){ib(a,b,c,d,25,"touchcancel");return 0},_:function(a,b,c,d){ib(a,b,c,d,23,"touchend");return 0},$:function(a,b,c,d){ib(a,b,c,d,24,
"touchmove");return 0},aa:function(a,b,c,d){ib(a,b,c,d,22,"touchstart");return 0},W:function(a,b,c,d){jb(a,b,c,d,31,"webglcontextlost");return 0},V:function(a,b,c,d){jb(a,b,c,d,32,"webglcontextrestored");return 0},fa:function(a,b,c,d){a=N(a);return"undefined"!==typeof a.onwheel?(kb(a,b,c,d),0):-1},F:function(a,b){b>>=2;b={alpha:!!E[b],depth:!!E[b+1],stencil:!!E[b+2],antialias:!!E[b+3],premultipliedAlpha:!!E[b+4],preserveDrawingBuffer:!!E[b+5],powerPreference:Gb[E[b+6]],failIfMajorPerformanceCaveat:!!E[b+
7],oc:E[b+8],Mc:E[b+9],mc:E[b+10],zc:E[b+11],Oc:E[b+12],Pc:E[b+13]};a=N(a);return!a||b.zc?0:Db(a,b)},xb:function(a,b){a=yb[a];b=D(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&lb(U);"OES_vertex_array_object"==b&&mb(U);"WEBGL_draw_buffers"==b&&ob(U);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&pb(U);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&qb(U);"WEBGL_multi_draw"==b&&rb(U);return!!a.dc.getExtension(b)},Ia:function(a){a>>=2;for(var b=0;14>b;++b)E[a+
b]=0;E[a]=E[a+1]=E[a+3]=E[a+4]=E[a+8]=E[a+10]=1},xa:function(a){T=yb[a];g.Fc=U=T&&T.dc;return!a||U?0:-5},ka:function(){return 0},db:function(a,b,c,d){a=Oa.Jc(a);b=Oa.Hc(a,b,c);E[d>>2]=b;return 0},ab:function(){},fb:function(a,b,c,d){for(var e=0,h=0;h<c;h++){for(var f=E[b+8*h>>2],m=E[b+(8*h+4)>>2],n=0;n<m;n++){var p=C[f+n],q=Na[a];0===p||10===p?((1===a?ka:x)(ta(q,0)),q.length=0):q.push(p)}e+=m}E[d>>2]=e;return 0},b:function(a){U.activeTexture(a)},D:function(a,b){U.attachShader(Q[a],R[b])},c:function(a,
b){35051==a?U.kc=b:35052==a&&(U.Wb=b);U.bindBuffer(a,tb[b])},h:function(a,b){U.bindFramebuffer(a,ub[b])},H:function(a,b){U.bindRenderbuffer(a,vb[b])},a:function(a,b){U.bindTexture(a,wb[b])},R:function(a){U.bindVertexArray(xb[a])},N:function(a,b,c,d){U.blendColor(a,b,c,d)},O:function(a,b){U.blendEquationSeparate(a,b)},P:function(a,b,c,d){U.blendFuncSeparate(a,b,c,d)},r:function(a,b,c,d,e,h,f,m,n,p){U.blitFramebuffer(a,b,c,d,e,h,f,m,n,p)},Ga:function(a,b,c,d){2<=T.version?c?U.bufferData(a,C,d,c,b):
U.bufferData(a,b,d):U.bufferData(a,c?C.subarray(c,c+b):b,d)},J:function(a,b,c,d){2<=T.version?U.bufferSubData(a,b,C,d,c):U.bufferSubData(a,b,C.subarray(d,d+c))},tb:function(a){U.clear(a)},wb:function(a,b,c,d){U.clearColor(a,b,c,d)},vb:function(a){U.clearDepth(a)},ub:function(a){U.clearStencil(a)},n:function(a,b,c,d){U.colorMask(!!a,!!b,!!c,!!d)},ta:function(a){U.compileShader(R[a])},Da:function(a,b,c,d,e,h,f,m){2<=T.version?U.Wb?U.compressedTexImage2D(a,b,c,d,e,h,f,m):U.compressedTexImage2D(a,b,c,
d,e,h,C,m,f):U.compressedTexImage2D(a,b,c,d,e,h,m?C.subarray(m,m+f):null)},Ba:function(a,b,c,d,e,h,f,m,n){U.Wb?U.compressedTexImage3D(a,b,c,d,e,h,f,m,n):U.compressedTexImage3D(a,b,c,d,e,h,f,C,n,m)},za:function(){var a=Cb(Q),b=U.createProgram();b.name=a;b.cc=b.ac=b.bc=0;b.fc=1;Q[a]=b;return a},va:function(a){var b=Cb(R);R[b]=U.createShader(a);return b},K:function(a){U.cullFace(a)},Pa:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=tb[d];e&&(U.deleteBuffer(e),e.name=0,tb[d]=null,d==U.kc&&(U.kc=
0),d==U.Wb&&(U.Wb=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=E[b+4*c>>2],e=ub[d];e&&(U.deleteFramebuffer(e),e.name=0,ub[d]=null)}},x:function(a){if(a){var b=Q[a];b?(U.deleteProgram(b),b.name=0,Q[a]=null):S(1281)}},T:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=vb[d];e&&(U.deleteRenderbuffer(e),e.name=0,vb[d]=null)}},t:function(a){if(a){var b=R[a];b?(U.deleteShader(b),R[a]=null):S(1281)}},Oa:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=wb[d];e&&(U.deleteTexture(e),e.name=
0,wb[d]=null)}},Na:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2];U.deleteVertexArray(xb[d]);xb[d]=null}},w:function(a){U.depthFunc(a)},v:function(a){U.depthMask(!!a)},e:function(a){U.disable(a)},Q:function(a){U.disableVertexAttribArray(a)},jb:function(a,b,c){U.drawArrays(a,b,c)},kb:function(a,b,c,d){U.drawElements(a,b,c,d)},g:function(a){U.enable(a)},qb:function(a){U.enableVertexAttribArray(a)},L:function(a){U.frontFace(a)},Ha:function(a,b){Hb(a,b,"createBuffer",tb)},I:function(a,b){Hb(a,b,
"createRenderbuffer",vb)},Ea:function(a,b){Hb(a,b,"createTexture",wb)},Ma:function(a,b){Hb(a,b,"createVertexArray",xb)},ra:function(a,b){return U.getAttribLocation(Q[a],D(b))},d:function(a,b){Ib(a,b)},wa:function(a,b,c,d){a=U.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?A(a,C,d,b):0;c&&(E[c>>2]=b)},C:function(a,b,c){if(c)if(a>=sb)S(1281);else if(a=Q[a],35716==b)a=U.getProgramInfoLog(a),null===a&&(a="(unknown error)"),E[c>>2]=a.length+1;else if(35719==b){if(!a.cc)for(b=0;b<U.getProgramParameter(a,
35718);++b)a.cc=Math.max(a.cc,U.getActiveUniform(a,b).name.length+1);E[c>>2]=a.cc}else if(35722==b){if(!a.ac)for(b=0;b<U.getProgramParameter(a,35721);++b)a.ac=Math.max(a.ac,U.getActiveAttrib(a,b).name.length+1);E[c>>2]=a.ac}else if(35381==b){if(!a.bc)for(b=0;b<U.getProgramParameter(a,35382);++b)a.bc=Math.max(a.bc,U.getActiveUniformBlockName(a,b).length+1);E[c>>2]=a.bc}else E[c>>2]=U.getProgramParameter(a,b);else S(1281)},sa:function(a,b,c,d){a=U.getShaderInfoLog(R[a]);null===a&&(a="(unknown error)");
b=0<b&&d?A(a,C,d,b):0;c&&(E[c>>2]=b)},A:function(a,b,c){c?35716==b?(a=U.getShaderInfoLog(R[a]),null===a&&(a="(unknown error)"),E[c>>2]=a?a.length+1:0):35720==b?(a=U.getShaderSource(R[a]),E[c>>2]=a?a.length+1:0):E[c>>2]=U.getShaderParameter(R[a],b):S(1281)},Ra:function(a){var b=zb[a];if(!b){switch(a){case 7939:b=U.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=V(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=U.getParameter(a))||S(1280);b=b&&V(b);break;
case 7938:b=U.getParameter(7938);b=2<=T.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=V(b);break;case 35724:b=U.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=V(b);break;default:S(1280)}zb[a]=b}return b},Qa:function(a,b){if(2>T.version)return S(1282),0;var c=Ab[a];if(c)return 0>b||b>=c.length?(S(1281),0):c[b];switch(a){case 7939:return c=U.getSupportedExtensions()||[],c=
c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return V(d)}),c=Ab[a]=c,0>b||b>=c.length?(S(1281),0):c[b];default:return S(1280),0}},m:function(a,b){b=D(b);if(a=Q[a]){var c=a,d=c.Zb,e=c.wc,h;if(!d)for(c.Zb=d={},c.vc={},h=0;h<U.getProgramParameter(c,35718);++h){var f=U.getActiveUniform(c,h);var m=f.name;f=f.size;var n=Jb(m);n=0<n?m.slice(0,n):m;var p=c.fc;c.fc+=f;e[n]=[f,p];for(m=0;m<f;++m)d[p]=m,c.vc[p++]=n}c=a.Zb;d=0;e=b;h=Jb(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));
if((e=a.wc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||U.getUniformLocation(a,b)))return d}else S(1281);return-1},ya:function(a){a=Q[a];U.linkProgram(a);a.Zb=0;a.wc={}},M:function(a,b){U.polygonOffset(a,b)},s:function(a){U.readBuffer(a)},Fa:function(a,b,c,d){U.renderbufferStorage(a,b,c,d)},G:function(a,b,c,d,e){U.renderbufferStorageMultisample(a,b,c,d,e)},k:function(a,b,c,d){U.scissor(a,b,c,d)},ua:function(a,b,c,d){for(var e="",h=0;h<b;++h){var f=d?E[d+4*h>>2]:-1;e+=D(E[c+4*h>>2],0>f?void 0:f)}U.shaderSource(R[a],
e)},Ka:function(a,b,c){U.stencilFunc(a,b,c)},qa:function(a,b,c,d){U.stencilFuncSeparate(a,b,c,d)},u:function(a){U.stencilMask(a)},Ja:function(a,b,c){U.stencilOp(a,b,c)},pa:function(a,b,c,d){U.stencilOpSeparate(a,b,c,d)},Ca:function(a,b,c,d,e,h,f,m,n){if(2<=T.version)if(U.Wb)U.texImage2D(a,b,c,d,e,h,f,m,n);else if(n){var p=W(m);U.texImage2D(a,b,c,d,e,h,f,m,p,n>>Kb(p))}else U.texImage2D(a,b,c,d,e,h,f,m,null);else U.texImage2D(a,b,c,d,e,h,f,m,n?Lb(m,f,d,e,n):null)},Aa:function(a,b,c,d,e,h,f,m,n,p){if(U.Wb)U.texImage3D(a,
b,c,d,e,h,f,m,n,p);else if(p){var q=W(n);U.texImage3D(a,b,c,d,e,h,f,m,n,q,p>>Kb(q))}else U.texImage3D(a,b,c,d,e,h,f,m,n,null)},E:function(a,b,c){U.texParameterf(a,b,c)},f:function(a,b,c){U.texParameteri(a,b,c)},ib:function(a,b,c,d,e,h,f,m,n){if(2<=T.version)if(U.Wb)U.texSubImage2D(a,b,c,d,e,h,f,m,n);else if(n){var p=W(m);U.texSubImage2D(a,b,c,d,e,h,f,m,p,n>>Kb(p))}else U.texSubImage2D(a,b,c,d,e,h,f,m,null);else p=null,n&&(p=Lb(m,f,e,h,n)),U.texSubImage2D(a,b,c,d,e,h,f,m,p)},hb:function(a,b,c,d,e,
h,f,m,n,p,q){if(U.Wb)U.texSubImage3D(a,b,c,d,e,h,f,m,n,p,q);else if(q){var X=W(p);U.texSubImage3D(a,b,c,d,e,h,f,m,n,p,X,q>>Kb(X))}else U.texSubImage3D(a,b,c,d,e,h,f,m,n,p,null)},pb:function(a,b,c){if(2<=T.version)U.uniform1fv(Y(a),F,c>>2,b);else{if(288>=b)for(var d=Z[b-1],e=0;e<b;++e)d[e]=F[c+4*e>>2];else d=F.subarray(c>>2,c+4*b>>2);U.uniform1fv(Y(a),d)}},B:function(a,b){U.uniform1i(Y(a),b)},ob:function(a,b,c){if(2<=T.version)U.uniform2fv(Y(a),F,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],e=0;e<2*
b;e+=2)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2];else d=F.subarray(c>>2,c+8*b>>2);U.uniform2fv(Y(a),d)}},nb:function(a,b,c){if(2<=T.version)U.uniform3fv(Y(a),F,c>>2,3*b);else{if(96>=b)for(var d=Z[3*b-1],e=0;e<3*b;e+=3)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+8)>>2];else d=F.subarray(c>>2,c+12*b>>2);U.uniform3fv(Y(a),d)}},mb:function(a,b,c){if(2<=T.version)U.uniform4fv(Y(a),F,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],e=F;c>>=2;for(var h=0;h<4*b;h+=4){var f=c+h;d[h]=e[f];d[h+1]=e[f+1];d[h+
2]=e[f+2];d[h+3]=e[f+3]}}else d=F.subarray(c>>2,c+16*b>>2);U.uniform4fv(Y(a),d)}},lb:function(a,b,c,d){if(2<=T.version)U.uniformMatrix4fv(Y(a),!!c,F,d>>2,16*b);else{if(18>=b){var e=Z[16*b-1],h=F;d>>=2;for(var f=0;f<16*b;f+=16){var m=d+f;e[f]=h[m];e[f+1]=h[m+1];e[f+2]=h[m+2];e[f+3]=h[m+3];e[f+4]=h[m+4];e[f+5]=h[m+5];e[f+6]=h[m+6];e[f+7]=h[m+7];e[f+8]=h[m+8];e[f+9]=h[m+9];e[f+10]=h[m+10];e[f+11]=h[m+11];e[f+12]=h[m+12];e[f+13]=h[m+13];e[f+14]=h[m+14];e[f+15]=h[m+15]}}else e=F.subarray(d>>2,d+64*b>>
2);U.uniformMatrix4fv(Y(a),!!c,e)}},j:function(a){a=Q[a];U.useProgram(a);U.xc=a},rb:function(a,b){U.vertexAttribDivisor(a,b)},sb:function(a,b,c,d,e,h){U.vertexAttribPointer(a,b,c,!!d,e,h)},l:function(a,b,c,d){U.viewport(a,b,c,d)},$a:function(){g.pc=function(a){0!=Ob()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",g.pc)},_a:function(){g.uc=function(a){a=a.clipboardData.getData("text");oa("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",g.uc)},
Za:function(a){g.Qc=[];a=D(a);a=document.getElementById(a);g.qc=function(b){b.stopPropagation();b.preventDefault()};g.rc=function(b){b.stopPropagation();b.preventDefault()};g.sc=function(b){b.stopPropagation();b.preventDefault()};g.tc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;g.Rc=c;Pb(c.length);var d;for(d=0;d<c.length;d++)oa("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Qb(b.clientX,b.clientY)};a.addEventListener("dragenter",g.qc,!1);a.addEventListener("dragleave",
g.rc,!1);a.addEventListener("dragover",g.sc,!1);a.addEventListener("drop",g.tc,!1)},Ta:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},q:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Rb()});document.body.append(a)},p:function(){document.getElementById("_sokol_app_input_element").focus()},yb:function(a){a=D(a);g.Yb=document.getElementById(a);
g.Yb||console.log("sokol_app.h: invalid target:"+a);g.Yb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Xa:function(){window.removeEventListener("beforeunload",g.pc)},Wa:function(){window.removeEventListener("paste",g.uc)},Va:function(a){a=D(a);a=document.getElementById(a);a.removeEventListener("dragenter",g.qc);a.removeEventListener("dragleave",g.rc);a.removeEventListener("dragover",g.sc);a.removeEventListener("drop",g.tc)},y:function(){g.Yb&&g.Yb.requestPointerLock&&
g.Yb.requestPointerLock()},Sa:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(C.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},o:function(){document.getElementById("_sokol_app_input_element").blur()},Ua:function(a){a=D(a);var b=document.createElement("textarea");b.setAttribute("autocomplete",
"off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},z:function(a,b,c,d,e,h){b=D(b);var f=new XMLHttpRequest;f.open("GET",b);f.responseType="arraybuffer";var m=0<d;m&&f.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));f.onreadystatechange=function(){if(this.readyState==
this.DONE)if(206==this.status||200==this.status&&!m){var n=new Uint8Array(f.response),p=n.length;p<=h?(C.set(n,e),Sb(a,d,p)):Tb(a)}else Ub(a,this.status)};f.send()},ma:function(a,b){b=D(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var d=this.getResponseHeader("Content-Length");Vb(a,d)}else Ub(a,this.status)};c.send()},la:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){g.asm=e.exports;la=g.asm.zb;Aa();H=g.asm.Sb;Ca.unshift(g.asm.Ab);I--;g.monitorRunDependencies&&g.monitorRunDependencies(I);0==I&&(null!==Ha&&(clearInterval(Ha),Ha=null),J&&(e=J,J=null,e()))}function b(e){a(e.instance)}function c(e){return La().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(e,function(h){x("failed to asynchronously prepare wasm: "+h);w(h)})}var d={a:Wb};I++;g.monitorRunDependencies&&g.monitorRunDependencies(I);if(g.instantiateWasm)try{return g.instantiateWasm(d,
a)}catch(e){return x("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return y||"function"!==typeof WebAssembly.instantiateStreaming||Ia()||K.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(K,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){x("wasm streaming compile failed: "+h);x("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
g.___wasm_call_ctors=function(){return(g.___wasm_call_ctors=g.asm.Ab).apply(null,arguments)};var O=g._malloc=function(){return(O=g._malloc=g.asm.Bb).apply(null,arguments)},Rb=g.__sapp_emsc_notify_keyboard_hidden=function(){return(Rb=g.__sapp_emsc_notify_keyboard_hidden=g.asm.Cb).apply(null,arguments)};g.__sapp_emsc_onpaste=function(){return(g.__sapp_emsc_onpaste=g.asm.Db).apply(null,arguments)};
var Ob=g.__sapp_html5_get_ask_leave_site=function(){return(Ob=g.__sapp_html5_get_ask_leave_site=g.asm.Eb).apply(null,arguments)},Pb=g.__sapp_emsc_begin_drop=function(){return(Pb=g.__sapp_emsc_begin_drop=g.asm.Fb).apply(null,arguments)};g.__sapp_emsc_drop=function(){return(g.__sapp_emsc_drop=g.asm.Gb).apply(null,arguments)};var Qb=g.__sapp_emsc_end_drop=function(){return(Qb=g.__sapp_emsc_end_drop=g.asm.Hb).apply(null,arguments)};
g.__sapp_emsc_invoke_fetch_cb=function(){return(g.__sapp_emsc_invoke_fetch_cb=g.asm.Ib).apply(null,arguments)};g._main=function(){return(g._main=g.asm.Jb).apply(null,arguments)};g.__saudio_emsc_pull=function(){return(g.__saudio_emsc_pull=g.asm.Kb).apply(null,arguments)};
var Vb=g.__sfetch_emsc_head_response=function(){return(Vb=g.__sfetch_emsc_head_response=g.asm.Lb).apply(null,arguments)},Sb=g.__sfetch_emsc_get_response=function(){return(Sb=g.__sfetch_emsc_get_response=g.asm.Mb).apply(null,arguments)},Ub=g.__sfetch_emsc_failed_http_status=function(){return(Ub=g.__sfetch_emsc_failed_http_status=g.asm.Nb).apply(null,arguments)},Tb=g.__sfetch_emsc_failed_buffer_too_small=function(){return(Tb=g.__sfetch_emsc_failed_buffer_too_small=g.asm.Ob).apply(null,arguments)},qa=
g.stackSave=function(){return(qa=g.stackSave=g.asm.Pb).apply(null,arguments)},ra=g.stackRestore=function(){return(ra=g.stackRestore=g.asm.Qb).apply(null,arguments)},z=g.stackAlloc=function(){return(z=g.stackAlloc=g.asm.Rb).apply(null,arguments)},Xb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}J=function Yb(){Xb||Zb();Xb||(J=Yb)};
function Zb(a){function b(){if(!Xb&&(Xb=!0,g.calledRun=!0,!ma)){Ma(Ca);Ma(Da);if(g.onRuntimeInitialized)g.onRuntimeInitialized();if($b){var c=a,d=g._main;c=c||[];var e=c.length+1,h=z(4*(e+1));E[h>>2]=va(ba);for(var f=1;f<e;f++)E[(h>>2)+f]=va(c[f-1]);E[(h>>2)+e]=0;try{var m=d(e,h);if(!(noExitRuntime||0<ja)){if(g.onExit)g.onExit(m);ma=!0}ca(m,new ia(m))}catch(n){n instanceof ia||"unwind"==n||((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),x("exception thrown: "+c),ca(1,n))}finally{}}if(g.postRun)for("function"==
typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;)c=g.postRun.shift(),Fa.unshift(c);Ma(Fa)}}a=a||aa;if(!(0<I)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)Ga();Ma(Ba);0<I||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);b()},1)):b())}}g.run=Zb;if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var $b=!0;g.noInitialRun&&($b=!1);Zb();
