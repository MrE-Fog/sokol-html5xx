
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var k={},m;for(m in f)f.hasOwnProperty(m)&&(k[m]=f[m]);var aa=[],ba="./this.program";function ca(a,b){throw b;}var da="object"===typeof window,r="function"===typeof importScripts,t="",ea,fa,ha,u,v;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)t=r?require("path").dirname(t)+"/":__dirname+"/",ea=function(a,b){u||(u=require("fs"));v||(v=require("path"));a=v.normalize(a);return u.readFileSync(a,b?null:"utf8")},ha=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||w("Assertion failed: undefined");return a},fa=function(a,b,c){u||(u=require("fs"));v||(v=require("path"));a=v.normalize(a);u.readFile(a,function(d,e){d?c(d):b(e.buffer)})},
1<process.argv.length&&(ba=process.argv[1].replace(/\\/g,"/")),aa=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",w),ca=function(a,b){if(noExitRuntime||0<ja)throw process.exitCode=a,b;process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(da||r)r?t=self.location.href:"undefined"!==typeof document&&document.currentScript&&(t=document.currentScript.src),
t=0!==t.indexOf("blob:")?t.substr(0,t.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},r&&(ha=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),fa=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};
var ka=f.print||console.log.bind(console),x=f.printErr||console.warn.bind(console);for(m in k)k.hasOwnProperty(m)&&(f[m]=k[m]);k=null;f.arguments&&(aa=f.arguments);f.thisProgram&&(ba=f.thisProgram);f.quit&&(ca=f.quit);var y;f.wasmBinary&&(y=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!==typeof WebAssembly&&w("no native wasm support detected");var la,ma=!1;
function na(a){var b=f["_"+a];b||w("Assertion failed: Cannot call unknown function "+(a+", make sure it is exported"));return b}function oa(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=z(q);A(n,C,p,q)}return p},array:function(n){var p=z(n.length);pa.set(n,p);return p}};a=na(a);var e=[],h=0;if(c)for(var g=0;g<c.length;g++){var l=d[b[g]];l?(0===h&&(h=qa()),e[g]=l(c[g])):e[g]=c[g]}b=a.apply(null,e);b=function(n){0!==h&&ra(h);return n}(b)}
var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ta(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&sa)return sa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function D(a,b){return a?ta(C,a,b):""}
function A(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var l=a.charCodeAt(++h);g=65536+((g&1023)<<10)|l&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function ua(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function va(a){var b=ua(a)+1,c=z(b);A(a,pa,c,b);return c}var wa,pa,C,xa,ya,E,za,F,G;
function Aa(){var a=la.buffer;wa=a;f.HEAP8=pa=new Int8Array(a);f.HEAP16=xa=new Int16Array(a);f.HEAP32=E=new Int32Array(a);f.HEAPU8=C=new Uint8Array(a);f.HEAPU16=ya=new Uint16Array(a);f.HEAPU32=za=new Uint32Array(a);f.HEAPF32=F=new Float32Array(a);f.HEAPF64=G=new Float64Array(a)}var H,Ba=[],Ca=[],Da=[],Ea=[],Fa=[],ja=0;function Ga(){var a=f.preRun.shift();Ba.unshift(a)}var I=0,Ha=null,J=null;f.preloadedImages={};f.preloadedAudios={};
function w(a){if(f.onAbort)f.onAbort(a);x(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ia(){return K.startsWith("data:application/octet-stream;base64,")}var K;K="plmpeg-sapp-ui.wasm";if(!Ia()){var Ja=K;K=f.locateFile?f.locateFile(Ja,t):t+Ja}function Ka(){var a=K;try{if(a==K&&y)return new Uint8Array(y);if(ha)return ha(a);throw"both async and sync fetching of the wasm failed";}catch(b){w(b)}}
function La(){if(!y&&(da||r)){if("function"===typeof fetch&&!K.startsWith("file://"))return fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Ka()});if(fa)return new Promise(function(a,b){fa(K,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ka()})}
function Ma(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.Qc;"number"===typeof c?void 0===b.nc?H.get(c)():H.get(c)(b.nc):c(void 0===b.nc?null:b.nc)}}}var Na=[null,[],[]],Oa={},Pa=0;function Qa(){for(var a=L.length-1;0<=a;--a)Ra(a);L=[];Sa=[]}var Sa=[];function Ta(){if(Pa&&Ua.ic)for(var a=0;a<Sa.length;++a){var b=Sa[a];Sa.splice(a,1);--a;b.$c.apply(null,b.Mc)}}var L=[];function Ra(a){var b=L[a];b.target.removeEventListener(b.$b,b.Gc,b.ac);L.splice(a,1)}
function M(a){function b(d){++Pa;Ua=a;Ta();a.cc(d);Ta();--Pa}if(a.bc)a.Gc=b,a.target.addEventListener(a.$b,b,a.ac),L.push(a),Va||(Ea.push(Qa),Va=!0);else for(var c=0;c<L.length;++c)L[c].target==a.target&&L[c].$b==a.$b&&Ra(c--)}function Wa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Va,Ua,Xa,Ya,Za,$a,ab,bb,cb,db=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function N(a){a=2<a?D(a):a;return db[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function eb(a){return 0>db.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function fb(a,b,c,d,e,h){Xa||(Xa=O(256));a={target:N(a),$b:h,bc:d,cc:function(g){g=g||event;var l=g.target.id?g.target.id:"",n=Xa;A(Wa(g.target),C,n+0,128);A(l,C,n+128,128);H.get(d)(e,n,b)&&g.preventDefault()},ac:c};M(a)}
function gb(a,b,c,d,e,h){Ya||(Ya=O(176));a={target:N(a),ic:!0,$b:h,bc:d,cc:function(g){var l=Ya;G[l>>3]=g.timeStamp;var n=l>>2;E[n+2]=g.location;E[n+3]=g.ctrlKey;E[n+4]=g.shiftKey;E[n+5]=g.altKey;E[n+6]=g.metaKey;E[n+7]=g.repeat;E[n+8]=g.charCode;E[n+9]=g.keyCode;E[n+10]=g.which;A(g.key||"",C,l+44,32);A(g.code||"",C,l+76,32);A(g.char||"",C,l+108,32);A(g.locale||"",C,l+140,32);H.get(d)(e,l,b)&&g.preventDefault()},ac:c};M(a)}
function hb(a,b,c){G[a>>3]=b.timeStamp;a>>=2;E[a+2]=b.screenX;E[a+3]=b.screenY;E[a+4]=b.clientX;E[a+5]=b.clientY;E[a+6]=b.ctrlKey;E[a+7]=b.shiftKey;E[a+8]=b.altKey;E[a+9]=b.metaKey;xa[2*a+20]=b.button;xa[2*a+21]=b.buttons;E[a+11]=b.movementX;E[a+12]=b.movementY;c=eb(c);E[a+13]=b.clientX-c.left;E[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,h){Za||(Za=O(72));a=N(a);M({target:a,ic:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,$b:h,bc:d,cc:function(g){g=g||event;hb(Za,g,a);H.get(d)(e,Za,b)&&g.preventDefault()},ac:c})}function ib(a,b,c,d,e){$a||($a=O(260));M({target:a,$b:e,bc:d,cc:function(h){h=h||event;var g=$a,l=document.pointerLockElement||document.qc||document.rc||document.pc;E[g>>2]=!!l;var n=l&&l.id?l.id:"";A(Wa(l),C,g+4,128);A(n,C,g+132,128);H.get(d)(20,g,b)&&h.preventDefault()},ac:c})}
function jb(a,b,c,d,e){M({target:a,$b:e,bc:d,cc:function(h){h=h||event;H.get(d)(38,0,b)&&h.preventDefault()},ac:c})}
function kb(a,b,c,d){ab||(ab=O(36));a=N(a);M({target:a,$b:"resize",bc:d,cc:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=ab;E[g>>2]=e.detail;E[g+4>>2]=h.clientWidth;E[g+8>>2]=h.clientHeight;E[g+12>>2]=innerWidth;E[g+16>>2]=innerHeight;E[g+20>>2]=outerWidth;E[g+24>>2]=outerHeight;E[g+28>>2]=pageXOffset;E[g+32>>2]=pageYOffset;H.get(d)(10,g,b)&&e.preventDefault()}}},ac:c})}
function lb(a,b,c,d,e,h){bb||(bb=O(1696));a=N(a);M({target:a,ic:"touchstart"==h||"touchend"==h,$b:h,bc:d,cc:function(g){for(var l={},n=g.touches,p=0;p<n.length;++p){var q=n[p];l[q.identifier]=q}n=g.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.Jc=1,l[q.identifier]=q;n=g.targetTouches;for(p=0;p<n.length;++p)l[n[p].identifier].Kc=1;n=bb;G[n>>3]=g.timeStamp;q=n>>2;E[q+3]=g.ctrlKey;E[q+4]=g.shiftKey;E[q+5]=g.altKey;E[q+6]=g.metaKey;q+=7;var X=eb(a),qb=0;for(p in l){var B=l[p];E[q]=B.identifier;E[q+1]=
B.screenX;E[q+2]=B.screenY;E[q+3]=B.clientX;E[q+4]=B.clientY;E[q+5]=B.pageX;E[q+6]=B.pageY;E[q+7]=B.Jc;E[q+8]=B.Kc;E[q+9]=B.clientX-X.left;E[q+10]=B.clientY-X.top;q+=13;if(31<++qb)break}E[n+8>>2]=qb;H.get(d)(e,n,b)&&g.preventDefault()},ac:c})}function mb(a,b,c,d,e,h){a={target:N(a),$b:h,bc:d,cc:function(g){g=g||event;H.get(d)(e,0,b)&&g.preventDefault()},ac:c};M(a)}
function nb(a,b,c,d){cb||(cb=O(104));M({target:a,ic:!0,$b:"wheel",bc:d,cc:function(e){e=e||event;var h=cb;hb(h,e,a);G[h+72>>3]=e.deltaX;G[h+80>>3]=e.deltaY;G[h+88>>3]=e.deltaZ;E[h+96>>2]=e.deltaMode;H.get(d)(9,h,b)&&e.preventDefault()},ac:c})}
function ob(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function pb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function rb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function sb(a){a.Oc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function tb(a){a.Tc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function ub(a){a.Vc=a.getExtension("WEBGL_multi_draw")}var vb=1,wb=[],Q=[],xb=[],yb=[],zb=[],R=[],Ab=[],Bb=[],Cb={},Db={};function S(a){Eb||(Eb=a)}function Fb(a){for(var b=vb++,c=a.length;c<b;c++)a[c]=null;return b}
function Gb(a,b){a.vc||(a.vc=a.getContext,a.getContext=function(d,e){e=a.vc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.wc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Hb(c,b):0}function Hb(a,b){var c=Fb(Bb),d={Sc:c,attributes:b,version:b.wc,mc:a};a.canvas&&(a.canvas.Lc=d);Bb[c]=d;("undefined"===typeof b.uc||b.uc)&&Ib(d);return c}
function Ib(a){a||(a=T);if(!a.Ic){a.Ic=!0;var b=a.mc;ob(b);pb(b);rb(b);sb(b);tb(b);2<=a.version&&(b.tc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.tc)b.tc=b.getExtension("EXT_disjoint_timer_query");ub(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Eb,T,Jb=["default","low-power","high-performance"];
function Kb(a,b,c,d){for(var e=0;e<a;e++){var h=U[c](),g=h&&Fb(d);h?(h.name=g,d[g]=h):S(1282);E[b+4*e>>2]=g}}
function Lb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=U.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>T.version){S(1282);return}c=2*(U.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>T.version){S(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=U.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":S(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:S(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)E[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){S(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:S(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}E[b>>2]=c}else S(1281)}
function V(a){var b=ua(a)+1,c=O(b);A(a,C,c,b);return c}function Mb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function W(a){a-=5120;return 0==a?pa:1==a?C:2==a?xa:4==a?E:6==a?F:5==a||28922==a||28520==a||30779==a||30782==a?za:ya}function Nb(a){return 31-Math.clz32(a.BYTES_PER_ELEMENT)}function Ob(a,b,c,d,e){a=W(a);var h=Nb(a);return a.subarray(e>>h,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}
function Y(a){var b=U.Fc;if(b){var c=b.hc[a];"number"===typeof c&&(b.hc[a]=c=U.getUniformLocation(b,b.Dc[a]+(0<c?"["+c+"]":"")));return c}S(1282)}for(var Z=[],U,Pb=new Float32Array(288),Qb=0;288>Qb;++Qb)Z[Qb]=Pb.subarray(0,Qb+1);
var $b={ka:function(){return 0},gb:function(){return 0},ib:function(){},U:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},da:function(a,b,c){a=N(a);if(!a)return-4;a=eb(a);G[b>>3]=a.width;G[c>>3]=a.height;return 0},db:function(a,b,c){C.copyWithin(a,b,b+c)},Na:function(a,b){function c(d){H.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},eb:function(a){var b=C.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,
a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{la.grow(Math.min(2147483648,d)-wa.byteLength+65535>>>16);Aa();var e=1;break a}catch(h){}e=void 0}if(e)return!0}return!1},X:function(a,b,c,d){fb(a,b,c,d,12,"blur");return 0},S:function(a,b,c){a=N(a);if(!a)return-4;a.width=b;a.height=c;return 0},Y:function(a,b,c,d){fb(a,b,c,d,13,"focus");return 0},ga:function(a,b,c,d){gb(a,b,c,d,2,"keydown");return 0},ea:function(a,b,c,d){gb(a,b,c,d,1,"keypress");return 0},fa:function(a,b,c,d){gb(a,b,
c,d,3,"keyup");return 0},qa:function(a,b,c,d){P(a,b,c,d,5,"mousedown");return 0},ja:function(a,b,c,d){P(a,b,c,d,33,"mouseenter");return 0},ia:function(a,b,c,d){P(a,b,c,d,34,"mouseleave");return 0},ma:function(a,b,c,d){P(a,b,c,d,8,"mousemove");return 0},pa:function(a,b,c,d){P(a,b,c,d,6,"mouseup");return 0},_:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.qc||document.body.rc||document.body.pc))return-1;a=N(a);if(!a)return-4;ib(a,b,c,d,"pointerlockchange");
ib(a,b,c,d,"mozpointerlockchange");ib(a,b,c,d,"webkitpointerlockchange");ib(a,b,c,d,"mspointerlockchange");return 0},Z:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.qc||document.body.rc||document.body.pc))return-1;a=N(a);if(!a)return-4;jb(a,b,c,d,"pointerlockerror");jb(a,b,c,d,"mozpointerlockerror");jb(a,b,c,d,"webkitpointerlockerror");jb(a,b,c,d,"mspointerlockerror");return 0},$a:function(a,b,c,d){kb(a,b,c,d);return 0},$:function(a,b,c,d){lb(a,b,c,d,25,"touchcancel");
return 0},aa:function(a,b,c,d){lb(a,b,c,d,23,"touchend");return 0},ba:function(a,b,c,d){lb(a,b,c,d,24,"touchmove");return 0},ca:function(a,b,c,d){lb(a,b,c,d,22,"touchstart");return 0},W:function(a,b,c,d){mb(a,b,c,d,31,"webglcontextlost");return 0},V:function(a,b,c,d){mb(a,b,c,d,32,"webglcontextrestored");return 0},ha:function(a,b,c,d){a=N(a);return"undefined"!==typeof a.onwheel?(nb(a,b,c,d),0):-1},F:function(a,b){b>>=2;b={alpha:!!E[b],depth:!!E[b+1],stencil:!!E[b+2],antialias:!!E[b+3],premultipliedAlpha:!!E[b+
4],preserveDrawingBuffer:!!E[b+5],powerPreference:Jb[E[b+6]],failIfMajorPerformanceCaveat:!!E[b+7],wc:E[b+8],Uc:E[b+9],uc:E[b+10],Hc:E[b+11],Wc:E[b+12],Xc:E[b+13]};a=N(a);return!a||b.Hc?0:Gb(a,b)},Db:function(a,b){a=Bb[a];b=D(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&ob(U);"OES_vertex_array_object"==b&&pb(U);"WEBGL_draw_buffers"==b&&rb(U);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&sb(U);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&tb(U);"WEBGL_multi_draw"==
b&&ub(U);return!!a.mc.getExtension(b)},Ka:function(a){a>>=2;for(var b=0;14>b;++b)E[a+b]=0;E[a]=E[a+1]=E[a+3]=E[a+4]=E[a+8]=E[a+10]=1},za:function(a){T=Bb[a];f.Nc=U=T&&T.mc;return!a||U?0:-5},la:function(){return 0},fb:function(a,b,c,d){a=Oa.Rc(a);b=Oa.Pc(a,b,c);E[d>>2]=b;return 0},cb:function(){},hb:function(a,b,c,d){for(var e=0,h=0;h<c;h++){for(var g=E[b+8*h>>2],l=E[b+(8*h+4)>>2],n=0;n<l;n++){var p=C[g+n],q=Na[a];0===p||10===p?((1===a?ka:x)(ta(q,0)),q.length=0):q.push(p)}e+=l}E[d>>2]=e;return 0},
b:function(a){U.activeTexture(a)},D:function(a,b){U.attachShader(Q[a],R[b])},c:function(a,b){35051==a?U.sc=b:35052==a&&(U.ec=b);U.bindBuffer(a,wb[b])},h:function(a,b){U.bindFramebuffer(a,xb[b])},H:function(a,b){U.bindRenderbuffer(a,yb[b])},a:function(a,b){U.bindTexture(a,zb[b])},R:function(a){U.bindVertexArray(Ab[a])},N:function(a,b,c,d){U.blendColor(a,b,c,d)},O:function(a,b){U.blendEquationSeparate(a,b)},P:function(a,b,c,d){U.blendFuncSeparate(a,b,c,d)},p:function(a,b,c,d,e,h,g,l,n,p){U.blitFramebuffer(a,
b,c,d,e,h,g,l,n,p)},Ia:function(a,b,c,d){2<=T.version?c?U.bufferData(a,C,d,c,b):U.bufferData(a,b,d):U.bufferData(a,c?C.subarray(c,c+b):b,d)},J:function(a,b,c,d){2<=T.version?U.bufferSubData(a,b,C,d,c):U.bufferSubData(a,b,C.subarray(d,d+c))},zb:function(a){U.clear(a)},ta:function(a,b,c,d){U.clearColor(a,b,c,d)},Bb:function(a){U.clearDepth(a)},Ab:function(a){U.clearStencil(a)},j:function(a,b,c,d){U.colorMask(!!a,!!b,!!c,!!d)},va:function(a){U.compileShader(R[a])},Fa:function(a,b,c,d,e,h,g,l){2<=T.version?
U.ec?U.compressedTexImage2D(a,b,c,d,e,h,g,l):U.compressedTexImage2D(a,b,c,d,e,h,C,l,g):U.compressedTexImage2D(a,b,c,d,e,h,l?C.subarray(l,l+g):null)},Da:function(a,b,c,d,e,h,g,l,n){U.ec?U.compressedTexImage3D(a,b,c,d,e,h,g,l,n):U.compressedTexImage3D(a,b,c,d,e,h,g,C,n,l)},Ba:function(){var a=Fb(Q),b=U.createProgram();b.name=a;b.lc=b.jc=b.kc=0;b.oc=1;Q[a]=b;return a},xa:function(a){var b=Fb(R);R[b]=U.createShader(a);return b},K:function(a){U.cullFace(a)},Ra:function(a,b){for(var c=0;c<a;c++){var d=
E[b+4*c>>2],e=wb[d];e&&(U.deleteBuffer(e),e.name=0,wb[d]=null,d==U.sc&&(U.sc=0),d==U.ec&&(U.ec=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=E[b+4*c>>2],e=xb[d];e&&(U.deleteFramebuffer(e),e.name=0,xb[d]=null)}},x:function(a){if(a){var b=Q[a];b?(U.deleteProgram(b),b.name=0,Q[a]=null):S(1281)}},T:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=yb[d];e&&(U.deleteRenderbuffer(e),e.name=0,yb[d]=null)}},t:function(a){if(a){var b=R[a];b?(U.deleteShader(b),R[a]=null):S(1281)}},Qa:function(a,b){for(var c=
0;c<a;c++){var d=E[b+4*c>>2],e=zb[d];e&&(U.deleteTexture(e),e.name=0,zb[d]=null)}},Pa:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2];U.deleteVertexArray(Ab[d]);Ab[d]=null}},w:function(a){U.depthFunc(a)},v:function(a){U.depthMask(!!a)},e:function(a){U.disable(a)},Q:function(a){U.disableVertexAttribArray(a)},pb:function(a,b,c){U.drawArrays(a,b,c)},qb:function(a,b,c,d){U.drawElements(a,b,c,d)},g:function(a){U.enable(a)},wb:function(a){U.enableVertexAttribArray(a)},L:function(a){U.frontFace(a)},
Ja:function(a,b){Kb(a,b,"createBuffer",wb)},I:function(a,b){Kb(a,b,"createRenderbuffer",yb)},Ga:function(a,b){Kb(a,b,"createTexture",zb)},Oa:function(a,b){Kb(a,b,"createVertexArray",Ab)},Cb:function(a,b){return U.getAttribLocation(Q[a],D(b))},d:function(a,b){Lb(a,b)},ya:function(a,b,c,d){a=U.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?A(a,C,d,b):0;c&&(E[c>>2]=b)},C:function(a,b,c){if(c)if(a>=vb)S(1281);else if(a=Q[a],35716==b)a=U.getProgramInfoLog(a),null===a&&(a="(unknown error)"),
E[c>>2]=a.length+1;else if(35719==b){if(!a.lc)for(b=0;b<U.getProgramParameter(a,35718);++b)a.lc=Math.max(a.lc,U.getActiveUniform(a,b).name.length+1);E[c>>2]=a.lc}else if(35722==b){if(!a.jc)for(b=0;b<U.getProgramParameter(a,35721);++b)a.jc=Math.max(a.jc,U.getActiveAttrib(a,b).name.length+1);E[c>>2]=a.jc}else if(35381==b){if(!a.kc)for(b=0;b<U.getProgramParameter(a,35382);++b)a.kc=Math.max(a.kc,U.getActiveUniformBlockName(a,b).length+1);E[c>>2]=a.kc}else E[c>>2]=U.getProgramParameter(a,b);else S(1281)},
ua:function(a,b,c,d){a=U.getShaderInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?A(a,C,d,b):0;c&&(E[c>>2]=b)},A:function(a,b,c){c?35716==b?(a=U.getShaderInfoLog(R[a]),null===a&&(a="(unknown error)"),E[c>>2]=a?a.length+1:0):35720==b?(a=U.getShaderSource(R[a]),E[c>>2]=a?a.length+1:0):E[c>>2]=U.getShaderParameter(R[a],b):S(1281)},Ta:function(a){var b=Cb[a];if(!b){switch(a){case 7939:b=U.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=V(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=
U.getParameter(a))||S(1280);b=b&&V(b);break;case 7938:b=U.getParameter(7938);b=2<=T.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=V(b);break;case 35724:b=U.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=V(b);break;default:S(1280)}Cb[a]=b}return b},Sa:function(a,b){if(2>T.version)return S(1282),0;var c=Db[a];if(c)return 0>b||b>=c.length?(S(1281),0):c[b];switch(a){case 7939:return c=
U.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return V(d)}),c=Db[a]=c,0>b||b>=c.length?(S(1281),0):c[b];default:return S(1280),0}},l:function(a,b){b=D(b);if(a=Q[a]){var c=a,d=c.hc,e=c.Ec,h;if(!d)for(c.hc=d={},c.Dc={},h=0;h<U.getProgramParameter(c,35718);++h){var g=U.getActiveUniform(c,h);var l=g.name;g=g.size;var n=Mb(l);n=0<n?l.slice(0,n):l;var p=c.oc;c.oc+=g;e[n]=[g,p];for(l=0;l<g;++l)d[p]=l,c.Dc[p++]=n}c=a.hc;d=0;e=b;h=Mb(b);0<h&&(d=parseInt(b.slice(h+
1))>>>0,e=b.slice(0,h));if((e=a.Ec[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||U.getUniformLocation(a,b)))return d}else S(1281);return-1},Aa:function(a){a=Q[a];U.linkProgram(a);a.hc=0;a.Ec={}},M:function(a,b){U.polygonOffset(a,b)},q:function(a){U.readBuffer(a)},Ha:function(a,b,c,d){U.renderbufferStorage(a,b,c,d)},G:function(a,b,c,d,e){U.renderbufferStorageMultisample(a,b,c,d,e)},r:function(a,b,c,d){U.scissor(a,b,c,d)},wa:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?E[d+4*h>>2]:-1;e+=D(E[c+4*h>>2],0>g?
void 0:g)}U.shaderSource(R[a],e)},Ma:function(a,b,c){U.stencilFunc(a,b,c)},sa:function(a,b,c,d){U.stencilFuncSeparate(a,b,c,d)},u:function(a){U.stencilMask(a)},La:function(a,b,c){U.stencilOp(a,b,c)},ra:function(a,b,c,d){U.stencilOpSeparate(a,b,c,d)},Ea:function(a,b,c,d,e,h,g,l,n){if(2<=T.version)if(U.ec)U.texImage2D(a,b,c,d,e,h,g,l,n);else if(n){var p=W(l);U.texImage2D(a,b,c,d,e,h,g,l,p,n>>Nb(p))}else U.texImage2D(a,b,c,d,e,h,g,l,null);else U.texImage2D(a,b,c,d,e,h,g,l,n?Ob(l,g,d,e,n):null)},Ca:function(a,
b,c,d,e,h,g,l,n,p){if(U.ec)U.texImage3D(a,b,c,d,e,h,g,l,n,p);else if(p){var q=W(n);U.texImage3D(a,b,c,d,e,h,g,l,n,q,p>>Nb(q))}else U.texImage3D(a,b,c,d,e,h,g,l,n,null)},E:function(a,b,c){U.texParameterf(a,b,c)},f:function(a,b,c){U.texParameteri(a,b,c)},ob:function(a,b,c,d,e,h,g,l,n){if(2<=T.version)if(U.ec)U.texSubImage2D(a,b,c,d,e,h,g,l,n);else if(n){var p=W(l);U.texSubImage2D(a,b,c,d,e,h,g,l,p,n>>Nb(p))}else U.texSubImage2D(a,b,c,d,e,h,g,l,null);else p=null,n&&(p=Ob(l,g,e,h,n)),U.texSubImage2D(a,
b,c,d,e,h,g,l,p)},nb:function(a,b,c,d,e,h,g,l,n,p,q){if(U.ec)U.texSubImage3D(a,b,c,d,e,h,g,l,n,p,q);else if(q){var X=W(p);U.texSubImage3D(a,b,c,d,e,h,g,l,n,p,X,q>>Nb(X))}else U.texSubImage3D(a,b,c,d,e,h,g,l,n,p,null)},vb:function(a,b,c){if(2<=T.version)U.uniform1fv(Y(a),F,c>>2,b);else{if(288>=b)for(var d=Z[b-1],e=0;e<b;++e)d[e]=F[c+4*e>>2];else d=F.subarray(c>>2,c+4*b>>2);U.uniform1fv(Y(a),d)}},B:function(a,b){U.uniform1i(Y(a),b)},ub:function(a,b,c){if(2<=T.version)U.uniform2fv(Y(a),F,c>>2,2*b);else{if(144>=
b)for(var d=Z[2*b-1],e=0;e<2*b;e+=2)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2];else d=F.subarray(c>>2,c+8*b>>2);U.uniform2fv(Y(a),d)}},tb:function(a,b,c){if(2<=T.version)U.uniform3fv(Y(a),F,c>>2,3*b);else{if(96>=b)for(var d=Z[3*b-1],e=0;e<3*b;e+=3)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+8)>>2];else d=F.subarray(c>>2,c+12*b>>2);U.uniform3fv(Y(a),d)}},sb:function(a,b,c){if(2<=T.version)U.uniform4fv(Y(a),F,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],e=F;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+
h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=F.subarray(c>>2,c+16*b>>2);U.uniform4fv(Y(a),d)}},rb:function(a,b,c,d){if(2<=T.version)U.uniformMatrix4fv(Y(a),!!c,F,d>>2,16*b);else{if(18>=b){var e=Z[16*b-1],h=F;d>>=2;for(var g=0;g<16*b;g+=16){var l=d+g;e[g]=h[l];e[g+1]=h[l+1];e[g+2]=h[l+2];e[g+3]=h[l+3];e[g+4]=h[l+4];e[g+5]=h[l+5];e[g+6]=h[l+6];e[g+7]=h[l+7];e[g+8]=h[l+8];e[g+9]=h[l+9];e[g+10]=h[l+10];e[g+11]=h[l+11];e[g+12]=h[l+12];e[g+13]=h[l+13];e[g+14]=h[l+14];e[g+15]=h[l+15]}}else e=
F.subarray(d>>2,d+64*b>>2);U.uniformMatrix4fv(Y(a),!!c,e)}},k:function(a){a=Q[a];U.useProgram(a);U.Fc=a},xb:function(a,b){U.vertexAttribDivisor(a,b)},yb:function(a,b,c,d,e,h){U.vertexAttribPointer(a,b,c,!!d,e,h)},s:function(a,b,c,d){U.viewport(a,b,c,d)},bb:function(){f.xc=function(a){0!=Rb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.xc)},ab:function(){f.Cc=function(a){a=a.clipboardData.getData("text");oa("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",
f.Cc)},_a:function(a){f.Yc=[];a=D(a);a=document.getElementById(a);f.yc=function(b){b.stopPropagation();b.preventDefault()};f.zc=function(b){b.stopPropagation();b.preventDefault()};f.Ac=function(b){b.stopPropagation();b.preventDefault()};f.Bc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.Zc=c;Sb(c.length);var d;for(d=0;d<c.length;d++)oa("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Tb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.yc,!1);a.addEventListener("dragleave",
f.zc,!1);a.addEventListener("dragover",f.Ac,!1);a.addEventListener("drop",f.Bc,!1)},Va:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},o:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Ub()});document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},Eb:function(a){a=D(a);f.fc=document.getElementById(a);
f.fc||console.log("sokol_app.h: invalid target:"+a);f.fc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Za:function(){window.removeEventListener("beforeunload",f.xc)},Ya:function(){window.removeEventListener("paste",f.Cc)},Xa:function(a){a=D(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.yc);a.removeEventListener("dragleave",f.zc);a.removeEventListener("dragover",f.Ac);a.removeEventListener("drop",f.Bc)},y:function(){f.fc&&f.fc.requestPointerLock&&
f.fc.requestPointerLock()},Ua:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(C.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},m:function(){document.getElementById("_sokol_app_input_element").blur()},Wa:function(a){a=D(a);var b=document.createElement("textarea");b.setAttribute("autocomplete",
"off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},kb:function(){return f.dc?f.dc.bufferSize:0},mb:function(a,b,c){f.Zb=null;f.dc=null;"undefined"!==typeof AudioContext?f.Zb=new AudioContext({sampleRate:a,latencyHint:"interactive"}):"undefined"!==typeof webkitAudioContext?
f.Zb=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}):(f.Zb=null,console.log("sokol_audio.h: no WebAudio support"));return f.Zb?(console.log("sokol_audio.h: sample rate ",f.Zb.sampleRate),f.dc=f.Zb.createScriptProcessor(c,0,b),f.dc.onaudioprocess=function(d){var e=d.outputBuffer.length,h=Vb(e);if(h)for(var g=d.outputBuffer.numberOfChannels,l=0;l<g;l++)for(var n=d.outputBuffer.getChannelData(l),p=0;p<e;p++)n[p]=F[(h>>2)+(g*p+l)]},f.dc.connect(f.Zb.destination),a=function(){f.Zb&&"suspended"===
f.Zb.state&&f.Zb.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},lb:function(){return f.Zb?f.Zb.sampleRate:0},jb:function(){null!==f.Zb&&(f.dc&&f.dc.disconnect(),f.Zb.close(),f.Zb=null,f.dc=null)},z:function(a,b,c,d,e,h){b=D(b);var g=new XMLHttpRequest;g.open("GET",b);g.responseType="arraybuffer";var l=0<d;l&&g.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));g.onreadystatechange=function(){if(this.readyState==
this.DONE)if(206==this.status||200==this.status&&!l){var n=new Uint8Array(g.response),p=n.length;p<=h?(C.set(n,e),Wb(a,d,p)):Xb(a)}else Yb(a,this.status)};g.send()},oa:function(a,b){b=D(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var d=this.getResponseHeader("Content-Length");Zb(a,d)}else Yb(a,this.status)};c.send()},na:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){f.asm=e.exports;la=f.asm.Fb;Aa();H=f.asm.Yb;Ca.unshift(f.asm.Gb);I--;f.monitorRunDependencies&&f.monitorRunDependencies(I);0==I&&(null!==Ha&&(clearInterval(Ha),Ha=null),J&&(e=J,J=null,e()))}function b(e){a(e.instance)}function c(e){return La().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(e,function(h){x("failed to asynchronously prepare wasm: "+h);w(h)})}var d={a:$b};I++;f.monitorRunDependencies&&f.monitorRunDependencies(I);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return x("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return y||"function"!==typeof WebAssembly.instantiateStreaming||Ia()||K.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(K,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){x("wasm streaming compile failed: "+h);x("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.Gb).apply(null,arguments)};var O=f._malloc=function(){return(O=f._malloc=f.asm.Hb).apply(null,arguments)},Ub=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Ub=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Ib).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.Jb).apply(null,arguments)};
var Rb=f.__sapp_html5_get_ask_leave_site=function(){return(Rb=f.__sapp_html5_get_ask_leave_site=f.asm.Kb).apply(null,arguments)},Sb=f.__sapp_emsc_begin_drop=function(){return(Sb=f.__sapp_emsc_begin_drop=f.asm.Lb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Mb).apply(null,arguments)};var Tb=f.__sapp_emsc_end_drop=function(){return(Tb=f.__sapp_emsc_end_drop=f.asm.Nb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Ob).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Pb).apply(null,arguments)};
var Vb=f.__saudio_emsc_pull=function(){return(Vb=f.__saudio_emsc_pull=f.asm.Qb).apply(null,arguments)},Zb=f.__sfetch_emsc_head_response=function(){return(Zb=f.__sfetch_emsc_head_response=f.asm.Rb).apply(null,arguments)},Wb=f.__sfetch_emsc_get_response=function(){return(Wb=f.__sfetch_emsc_get_response=f.asm.Sb).apply(null,arguments)},Yb=f.__sfetch_emsc_failed_http_status=function(){return(Yb=f.__sfetch_emsc_failed_http_status=f.asm.Tb).apply(null,arguments)},Xb=f.__sfetch_emsc_failed_buffer_too_small=
function(){return(Xb=f.__sfetch_emsc_failed_buffer_too_small=f.asm.Ub).apply(null,arguments)},qa=f.stackSave=function(){return(qa=f.stackSave=f.asm.Vb).apply(null,arguments)},ra=f.stackRestore=function(){return(ra=f.stackRestore=f.asm.Wb).apply(null,arguments)},z=f.stackAlloc=function(){return(z=f.stackAlloc=f.asm.Xb).apply(null,arguments)},ac;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}J=function bc(){ac||cc();ac||(J=bc)};
function cc(a){function b(){if(!ac&&(ac=!0,f.calledRun=!0,!ma)){Ma(Ca);Ma(Da);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(dc){var c=a,d=f._main;c=c||[];var e=c.length+1,h=z(4*(e+1));E[h>>2]=va(ba);for(var g=1;g<e;g++)E[(h>>2)+g]=va(c[g-1]);E[(h>>2)+e]=0;try{var l=d(e,h);if(!(noExitRuntime||0<ja)){if(f.onExit)f.onExit(l);ma=!0}ca(l,new ia(l))}catch(n){n instanceof ia||"unwind"==n||((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),x("exception thrown: "+c),ca(1,n))}finally{}}if(f.postRun)for("function"==
typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),Fa.unshift(c);Ma(Fa)}}a=a||aa;if(!(0<I)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ga();Ma(Ba);0<I||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=cc;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var dc=!0;f.noInitialRun&&(dc=!1);cc();
