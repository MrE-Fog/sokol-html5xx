
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var k={},m;for(m in f)f.hasOwnProperty(m)&&(k[m]=f[m]);var aa=[],ba="./this.program";function ca(a,b){throw b;}var da="object"===typeof window,r="function"===typeof importScripts,t="",ea,fa,ha,u,v;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)t=r?require("path").dirname(t)+"/":__dirname+"/",ea=function(a,b){u||(u=require("fs"));v||(v=require("path"));a=v.normalize(a);return u.readFileSync(a,b?null:"utf8")},ha=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||w("Assertion failed: undefined");return a},fa=function(a,b,c){u||(u=require("fs"));v||(v=require("path"));a=v.normalize(a);u.readFile(a,function(d,e){d?c(d):b(e.buffer)})},
1<process.argv.length&&(ba=process.argv[1].replace(/\\/g,"/")),aa=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",w),ca=function(a,b){if(noExitRuntime||0<ja)throw process.exitCode=a,b;process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(da||r)r?t=self.location.href:"undefined"!==typeof document&&document.currentScript&&(t=document.currentScript.src),
t=0!==t.indexOf("blob:")?t.substr(0,t.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},r&&(ha=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),fa=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};
f.print||console.log.bind(console);var x=f.printErr||console.warn.bind(console);for(m in k)k.hasOwnProperty(m)&&(f[m]=k[m]);k=null;f.arguments&&(aa=f.arguments);f.thisProgram&&(ba=f.thisProgram);f.quit&&(ca=f.quit);var y;f.wasmBinary&&(y=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!==typeof WebAssembly&&w("no native wasm support detected");var ka,la=!1;function ma(a){var b=f["_"+a];b||w("Assertion failed: Cannot call unknown function "+(a+", make sure it is exported"));return b}
function na(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=z(q);B(n,C,p,q)}return p},array:function(n){var p=z(n.length);oa.set(n,p);return p}};a=ma(a);var e=[],h=0;if(c)for(var g=0;g<c.length;g++){var l=d[b[g]];l?(0===h&&(h=pa()),e[g]=l(c[g])):e[g]=c[g]}b=a.apply(null,e);b=function(n){0!==h&&qa(h);return n}(b)}var ra="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function D(a,b){if(a){var c=C,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ra)a=ra.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var h=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=c[a++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function B(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var l=a.charCodeAt(++h);g=65536+((g&1023)<<10)|l&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function sa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ta(a){var b=sa(a)+1,c=z(b);B(a,oa,c,b);return c}var ua,oa,C,va,wa,E,xa,F,G;
function ya(){var a=ka.buffer;ua=a;f.HEAP8=oa=new Int8Array(a);f.HEAP16=va=new Int16Array(a);f.HEAP32=E=new Int32Array(a);f.HEAPU8=C=new Uint8Array(a);f.HEAPU16=wa=new Uint16Array(a);f.HEAPU32=xa=new Uint32Array(a);f.HEAPF32=F=new Float32Array(a);f.HEAPF64=G=new Float64Array(a)}var H,za=[],Aa=[],Ba=[],Ca=[],Da=[],ja=0;function Ea(){var a=f.preRun.shift();za.unshift(a)}var I=0,Fa=null,J=null;f.preloadedImages={};f.preloadedAudios={};
function w(a){if(f.onAbort)f.onAbort(a);x(a);la=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ga(){return K.startsWith("data:application/octet-stream;base64,")}var K;K="plmpeg-sapp.wasm";if(!Ga()){var Ha=K;K=f.locateFile?f.locateFile(Ha,t):t+Ha}function Ia(){var a=K;try{if(a==K&&y)return new Uint8Array(y);if(ha)return ha(a);throw"both async and sync fetching of the wasm failed";}catch(b){w(b)}}
function Ja(){if(!y&&(da||r)){if("function"===typeof fetch&&!K.startsWith("file://"))return fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Ia()});if(fa)return new Promise(function(a,b){fa(K,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ia()})}
function Ka(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.Gc;"number"===typeof c?void 0===b.dc?H.get(c)():H.get(c)(b.dc):c(void 0===b.dc?null:b.dc)}}}var La=0;function Ma(){for(var a=L.length-1;0<=a;--a)Na(a);L=[];Oa=[]}var Oa=[];function Pa(){if(La&&Qa.Zb)for(var a=0;a<Oa.length;++a){var b=Oa[a];Oa.splice(a,1);--a;b.Pc.apply(null,b.Dc)}}var L=[];function Na(a){var b=L[a];b.target.removeEventListener(b.Rb,b.xc,b.Sb);L.splice(a,1)}
function M(a){function b(d){++La;Qa=a;Pa();a.Ub(d);Pa();--La}if(a.Tb)a.xc=b,a.target.addEventListener(a.Rb,b,a.Sb),L.push(a),Ra||(Ca.push(Ma),Ra=!0);else for(var c=0;c<L.length;++c)L[c].target==a.target&&L[c].Rb==a.Rb&&Na(c--)}function Sa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Ra,Qa,Ta,Ua,Va,Wa,Xa,Ya,Za,$a=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function N(a){a=2<a?D(a):a;return $a[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function ab(a){return 0>$a.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function bb(a,b,c,d,e,h){Ta||(Ta=O(256));a={target:N(a),Rb:h,Tb:d,Ub:function(g){g=g||event;var l=g.target.id?g.target.id:"",n=Ta;B(Sa(g.target),C,n+0,128);B(l,C,n+128,128);H.get(d)(e,n,b)&&g.preventDefault()},Sb:c};M(a)}
function cb(a,b,c,d,e,h){Ua||(Ua=O(176));a={target:N(a),Zb:!0,Rb:h,Tb:d,Ub:function(g){var l=Ua;G[l>>3]=g.timeStamp;var n=l>>2;E[n+2]=g.location;E[n+3]=g.ctrlKey;E[n+4]=g.shiftKey;E[n+5]=g.altKey;E[n+6]=g.metaKey;E[n+7]=g.repeat;E[n+8]=g.charCode;E[n+9]=g.keyCode;E[n+10]=g.which;B(g.key||"",C,l+44,32);B(g.code||"",C,l+76,32);B(g.char||"",C,l+108,32);B(g.locale||"",C,l+140,32);H.get(d)(e,l,b)&&g.preventDefault()},Sb:c};M(a)}
function db(a,b,c){G[a>>3]=b.timeStamp;a>>=2;E[a+2]=b.screenX;E[a+3]=b.screenY;E[a+4]=b.clientX;E[a+5]=b.clientY;E[a+6]=b.ctrlKey;E[a+7]=b.shiftKey;E[a+8]=b.altKey;E[a+9]=b.metaKey;va[2*a+20]=b.button;va[2*a+21]=b.buttons;E[a+11]=b.movementX;E[a+12]=b.movementY;c=ab(c);E[a+13]=b.clientX-c.left;E[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,h){Va||(Va=O(72));a=N(a);M({target:a,Zb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Rb:h,Tb:d,Ub:function(g){g=g||event;db(Va,g,a);H.get(d)(e,Va,b)&&g.preventDefault()},Sb:c})}function eb(a,b,c,d,e){Wa||(Wa=O(260));M({target:a,Rb:e,Tb:d,Ub:function(h){h=h||event;var g=Wa,l=document.pointerLockElement||document.fc||document.ic||document.hc;E[g>>2]=!!l;var n=l&&l.id?l.id:"";B(Sa(l),C,g+4,128);B(n,C,g+132,128);H.get(d)(20,g,b)&&h.preventDefault()},Sb:c})}
function fb(a,b,c,d,e){M({target:a,Rb:e,Tb:d,Ub:function(h){h=h||event;H.get(d)(38,0,b)&&h.preventDefault()},Sb:c})}
function gb(a,b,c,d){Xa||(Xa=O(36));a=N(a);M({target:a,Rb:"resize",Tb:d,Ub:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=Xa;E[g>>2]=e.detail;E[g+4>>2]=h.clientWidth;E[g+8>>2]=h.clientHeight;E[g+12>>2]=innerWidth;E[g+16>>2]=innerHeight;E[g+20>>2]=outerWidth;E[g+24>>2]=outerHeight;E[g+28>>2]=pageXOffset;E[g+32>>2]=pageYOffset;H.get(d)(10,g,b)&&e.preventDefault()}}},Sb:c})}
function hb(a,b,c,d,e,h){Ya||(Ya=O(1696));a=N(a);M({target:a,Zb:"touchstart"==h||"touchend"==h,Rb:h,Tb:d,Ub:function(g){for(var l={},n=g.touches,p=0;p<n.length;++p){var q=n[p];l[q.identifier]=q}n=g.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.Ac=1,l[q.identifier]=q;n=g.targetTouches;for(p=0;p<n.length;++p)l[n[p].identifier].Bc=1;n=Ya;G[n>>3]=g.timeStamp;q=n>>2;E[q+3]=g.ctrlKey;E[q+4]=g.shiftKey;E[q+5]=g.altKey;E[q+6]=g.metaKey;q+=7;var X=ab(a),ob=0;for(p in l){var A=l[p];E[q]=A.identifier;E[q+1]=
A.screenX;E[q+2]=A.screenY;E[q+3]=A.clientX;E[q+4]=A.clientY;E[q+5]=A.pageX;E[q+6]=A.pageY;E[q+7]=A.Ac;E[q+8]=A.Bc;E[q+9]=A.clientX-X.left;E[q+10]=A.clientY-X.top;q+=13;if(31<++ob)break}E[n+8>>2]=ob;H.get(d)(e,n,b)&&g.preventDefault()},Sb:c})}function ib(a,b,c,d,e,h){a={target:N(a),Rb:h,Tb:d,Ub:function(g){g=g||event;H.get(d)(e,0,b)&&g.preventDefault()},Sb:c};M(a)}
function jb(a,b,c,d){Za||(Za=O(104));M({target:a,Zb:!0,Rb:"wheel",Tb:d,Ub:function(e){e=e||event;var h=Za;db(h,e,a);G[h+72>>3]=e.deltaX;G[h+80>>3]=e.deltaY;G[h+88>>3]=e.deltaZ;E[h+96>>2]=e.deltaMode;H.get(d)(9,h,b)&&e.preventDefault()},Sb:c})}
function kb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function lb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function mb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function nb(a){a.Fc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function pb(a){a.Ic=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function qb(a){a.Kc=a.getExtension("WEBGL_multi_draw")}var rb=1,sb=[],Q=[],tb=[],ub=[],vb=[],R=[],wb=[],xb=[],yb={},zb={};function S(a){Ab||(Ab=a)}function Bb(a){for(var b=rb++,c=a.length;c<b;c++)a[c]=null;return b}
function Cb(a,b){a.mc||(a.mc=a.getContext,a.getContext=function(d,e){e=a.mc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.nc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Db(c,b):0}function Db(a,b){var c=Bb(xb),d={Hc:c,attributes:b,version:b.nc,cc:a};a.canvas&&(a.canvas.Cc=d);xb[c]=d;("undefined"===typeof b.lc||b.lc)&&Eb(d);return c}
function Eb(a){a||(a=T);if(!a.zc){a.zc=!0;var b=a.cc;kb(b);lb(b);mb(b);nb(b);pb(b);2<=a.version&&(b.kc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.kc)b.kc=b.getExtension("EXT_disjoint_timer_query");qb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Ab,T,Fb=["default","low-power","high-performance"];
function Gb(a,b,c,d){for(var e=0;e<a;e++){var h=U[c](),g=h&&Bb(d);h?(h.name=g,d[g]=h):S(1282);E[b+4*e>>2]=g}}
function Hb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=U.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>T.version){S(1282);return}c=2*(U.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>T.version){S(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=U.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":S(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:S(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)E[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){S(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:S(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}E[b>>2]=c}else S(1281)}
function V(a){var b=sa(a)+1,c=O(b);B(a,C,c,b);return c}function Ib(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function W(a){a-=5120;return 0==a?oa:1==a?C:2==a?va:4==a?E:6==a?F:5==a||28922==a||28520==a||30779==a||30782==a?xa:wa}function Jb(a){return 31-Math.clz32(a.BYTES_PER_ELEMENT)}function Kb(a,b,c,d,e){a=W(a);var h=Jb(a);return a.subarray(e>>h,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}
function Y(a){var b=U.wc;if(b){var c=b.Yb[a];"number"===typeof c&&(b.Yb[a]=c=U.getUniformLocation(b,b.uc[a]+(0<c?"["+c+"]":"")));return c}S(1282)}for(var Z=[],U,Lb=new Float32Array(288),Mb=0;288>Mb;++Mb)Z[Mb]=Lb.subarray(0,Mb+1);
var Wb={O:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},Z:function(a,b,c){a=N(a);if(!a)return-4;a=ab(a);G[b>>3]=a.width;G[c>>3]=a.height;return 0},Za:function(a,b,c){C.copyWithin(a,b,b+c)},Ja:function(a,b){function c(d){H.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},_a:function(a){var b=C.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ka.grow(Math.min(2147483648,
d)-ua.byteLength+65535>>>16);ya();var e=1;break a}catch(h){}e=void 0}if(e)return!0}return!1},R:function(a,b,c,d){bb(a,b,c,d,12,"blur");return 0},M:function(a,b,c){a=N(a);if(!a)return-4;a.width=b;a.height=c;return 0},S:function(a,b,c,d){bb(a,b,c,d,13,"focus");return 0},aa:function(a,b,c,d){cb(a,b,c,d,2,"keydown");return 0},_:function(a,b,c,d){cb(a,b,c,d,1,"keypress");return 0},$:function(a,b,c,d){cb(a,b,c,d,3,"keyup");return 0},ha:function(a,b,c,d){P(a,b,c,d,5,"mousedown");return 0},da:function(a,
b,c,d){P(a,b,c,d,33,"mouseenter");return 0},ca:function(a,b,c,d){P(a,b,c,d,34,"mouseleave");return 0},ea:function(a,b,c,d){P(a,b,c,d,8,"mousemove");return 0},ga:function(a,b,c,d){P(a,b,c,d,6,"mouseup");return 0},U:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.fc||document.body.ic||document.body.hc))return-1;a=N(a);if(!a)return-4;eb(a,b,c,d,"pointerlockchange");eb(a,b,c,d,"mozpointerlockchange");eb(a,b,c,d,"webkitpointerlockchange");eb(a,b,c,d,"mspointerlockchange");
return 0},T:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.fc||document.body.ic||document.body.hc))return-1;a=N(a);if(!a)return-4;fb(a,b,c,d,"pointerlockerror");fb(a,b,c,d,"mozpointerlockerror");fb(a,b,c,d,"webkitpointerlockerror");fb(a,b,c,d,"mspointerlockerror");return 0},Wa:function(a,b,c,d){gb(a,b,c,d);return 0},V:function(a,b,c,d){hb(a,b,c,d,25,"touchcancel");return 0},W:function(a,b,c,d){hb(a,b,c,d,23,"touchend");return 0},X:function(a,b,c,d){hb(a,b,c,d,24,
"touchmove");return 0},Y:function(a,b,c,d){hb(a,b,c,d,22,"touchstart");return 0},Q:function(a,b,c,d){ib(a,b,c,d,31,"webglcontextlost");return 0},P:function(a,b,c,d){ib(a,b,c,d,32,"webglcontextrestored");return 0},ba:function(a,b,c,d){a=N(a);return"undefined"!==typeof a.onwheel?(jb(a,b,c,d),0):-1},C:function(a,b){b>>=2;b={alpha:!!E[b],depth:!!E[b+1],stencil:!!E[b+2],antialias:!!E[b+3],premultipliedAlpha:!!E[b+4],preserveDrawingBuffer:!!E[b+5],powerPreference:Fb[E[b+6]],failIfMajorPerformanceCaveat:!!E[b+
7],nc:E[b+8],Jc:E[b+9],lc:E[b+10],yc:E[b+11],Lc:E[b+12],Mc:E[b+13]};a=N(a);return!a||b.yc?0:Cb(a,b)},ub:function(a,b){a=xb[a];b=D(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&kb(U);"OES_vertex_array_object"==b&&lb(U);"WEBGL_draw_buffers"==b&&mb(U);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&nb(U);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&pb(U);"WEBGL_multi_draw"==b&&qb(U);return!!a.cc.getExtension(b)},Ga:function(a){a>>=2;for(var b=0;14>b;++b)E[a+
b]=0;E[a]=E[a+1]=E[a+3]=E[a+4]=E[a+8]=E[a+10]=1},ra:function(a){T=xb[a];f.Ec=U=T&&T.cc;return!a||U?0:-5},b:function(a){U.activeTexture(a)},A:function(a,b){U.attachShader(Q[a],R[b])},e:function(a,b){35051==a?U.jc=b:35052==a&&(U.Wb=b);U.bindBuffer(a,sb[b])},h:function(a,b){U.bindFramebuffer(a,tb[b])},Ba:function(a,b){U.bindRenderbuffer(a,ub[b])},a:function(a,b){U.bindTexture(a,vb[b])},K:function(a){U.bindVertexArray(wb[a])},G:function(a,b,c,d){U.blendColor(a,b,c,d)},H:function(a,b){U.blendEquationSeparate(a,
b)},I:function(a,b,c,d){U.blendFuncSeparate(a,b,c,d)},p:function(a,b,c,d,e,h,g,l,n,p){U.blitFramebuffer(a,b,c,d,e,h,g,l,n,p)},Ea:function(a,b,c,d){2<=T.version?c?U.bufferData(a,C,d,c,b):U.bufferData(a,b,d):U.bufferData(a,c?C.subarray(c,c+b):b,d)},Da:function(a,b,c,d){2<=T.version?U.bufferSubData(a,b,C,d,c):U.bufferSubData(a,b,C.subarray(d,d+c))},pb:function(a){U.clear(a)},ka:function(a,b,c,d){U.clearColor(a,b,c,d)},rb:function(a){U.clearDepth(a)},qb:function(a){U.clearStencil(a)},j:function(a,b,c,
d){U.colorMask(!!a,!!b,!!c,!!d)},na:function(a){U.compileShader(R[a])},xa:function(a,b,c,d,e,h,g,l){2<=T.version?U.Wb?U.compressedTexImage2D(a,b,c,d,e,h,g,l):U.compressedTexImage2D(a,b,c,d,e,h,C,l,g):U.compressedTexImage2D(a,b,c,d,e,h,l?C.subarray(l,l+g):null)},va:function(a,b,c,d,e,h,g,l,n){U.Wb?U.compressedTexImage3D(a,b,c,d,e,h,g,l,n):U.compressedTexImage3D(a,b,c,d,e,h,g,C,n,l)},ta:function(){var a=Bb(Q),b=U.createProgram();b.name=a;b.bc=b.$b=b.ac=0;b.ec=1;Q[a]=b;return a},pa:function(a){var b=
Bb(R);R[b]=U.createShader(a);return b},D:function(a){U.cullFace(a)},Na:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=sb[d];e&&(U.deleteBuffer(e),e.name=0,sb[d]=null,d==U.jc&&(U.jc=0),d==U.Wb&&(U.Wb=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=E[b+4*c>>2],e=tb[d];e&&(U.deleteFramebuffer(e),e.name=0,tb[d]=null)}},L:function(a){if(a){var b=Q[a];b?(U.deleteProgram(b),b.name=0,Q[a]=null):S(1281)}},N:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=ub[d];e&&(U.deleteRenderbuffer(e),e.name=
0,ub[d]=null)}},r:function(a){if(a){var b=R[a];b?(U.deleteShader(b),R[a]=null):S(1281)}},Ma:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=vb[d];e&&(U.deleteTexture(e),e.name=0,vb[d]=null)}},La:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2];U.deleteVertexArray(wb[d]);wb[d]=null}},u:function(a){U.depthFunc(a)},t:function(a){U.depthMask(!!a)},d:function(a){U.disable(a)},J:function(a){U.disableVertexAttribArray(a)},fb:function(a,b,c){U.drawArrays(a,b,c)},gb:function(a,b,c,d){U.drawElements(a,
b,c,d)},g:function(a){U.enable(a)},mb:function(a){U.enableVertexAttribArray(a)},E:function(a){U.frontFace(a)},Fa:function(a,b){Gb(a,b,"createBuffer",sb)},Ca:function(a,b){Gb(a,b,"createRenderbuffer",ub)},ya:function(a,b){Gb(a,b,"createTexture",vb)},Ka:function(a,b){Gb(a,b,"createVertexArray",wb)},la:function(a,b){return U.getAttribLocation(Q[a],D(b))},c:function(a,b){Hb(a,b)},qa:function(a,b,c,d){a=U.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,C,d,b):0;c&&(E[c>>2]=b)},z:function(a,
b,c){if(c)if(a>=rb)S(1281);else if(a=Q[a],35716==b)a=U.getProgramInfoLog(a),null===a&&(a="(unknown error)"),E[c>>2]=a.length+1;else if(35719==b){if(!a.bc)for(b=0;b<U.getProgramParameter(a,35718);++b)a.bc=Math.max(a.bc,U.getActiveUniform(a,b).name.length+1);E[c>>2]=a.bc}else if(35722==b){if(!a.$b)for(b=0;b<U.getProgramParameter(a,35721);++b)a.$b=Math.max(a.$b,U.getActiveAttrib(a,b).name.length+1);E[c>>2]=a.$b}else if(35381==b){if(!a.ac)for(b=0;b<U.getProgramParameter(a,35382);++b)a.ac=Math.max(a.ac,
U.getActiveUniformBlockName(a,b).length+1);E[c>>2]=a.ac}else E[c>>2]=U.getProgramParameter(a,b);else S(1281)},ma:function(a,b,c,d){a=U.getShaderInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,C,d,b):0;c&&(E[c>>2]=b)},x:function(a,b,c){c?35716==b?(a=U.getShaderInfoLog(R[a]),null===a&&(a="(unknown error)"),E[c>>2]=a?a.length+1:0):35720==b?(a=U.getShaderSource(R[a]),E[c>>2]=a?a.length+1:0):E[c>>2]=U.getShaderParameter(R[a],b):S(1281)},Pa:function(a){var b=yb[a];if(!b){switch(a){case 7939:b=
U.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=V(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=U.getParameter(a))||S(1280);b=b&&V(b);break;case 7938:b=U.getParameter(7938);b=2<=T.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=V(b);break;case 35724:b=U.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=V(b);break;default:S(1280)}yb[a]=
b}return b},Oa:function(a,b){if(2>T.version)return S(1282),0;var c=zb[a];if(c)return 0>b||b>=c.length?(S(1281),0):c[b];switch(a){case 7939:return c=U.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return V(d)}),c=zb[a]=c,0>b||b>=c.length?(S(1281),0):c[b];default:return S(1280),0}},k:function(a,b){b=D(b);if(a=Q[a]){var c=a,d=c.Yb,e=c.vc,h;if(!d)for(c.Yb=d={},c.uc={},h=0;h<U.getProgramParameter(c,35718);++h){var g=U.getActiveUniform(c,h);var l=g.name;
g=g.size;var n=Ib(l);n=0<n?l.slice(0,n):l;var p=c.ec;c.ec+=g;e[n]=[g,p];for(l=0;l<g;++l)d[p]=l,c.uc[p++]=n}c=a.Yb;d=0;e=b;h=Ib(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.vc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||U.getUniformLocation(a,b)))return d}else S(1281);return-1},sa:function(a){a=Q[a];U.linkProgram(a);a.Yb=0;a.vc={}},F:function(a,b){U.polygonOffset(a,b)},q:function(a){U.readBuffer(a)},za:function(a,b,c,d){U.renderbufferStorage(a,b,c,d)},Aa:function(a,b,c,d,e){U.renderbufferStorageMultisample(a,
b,c,d,e)},sb:function(a,b,c,d){U.scissor(a,b,c,d)},oa:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?E[d+4*h>>2]:-1;e+=D(E[c+4*h>>2],0>g?void 0:g)}U.shaderSource(R[a],e)},Ia:function(a,b,c){U.stencilFunc(a,b,c)},ja:function(a,b,c,d){U.stencilFuncSeparate(a,b,c,d)},s:function(a){U.stencilMask(a)},Ha:function(a,b,c){U.stencilOp(a,b,c)},ia:function(a,b,c,d){U.stencilOpSeparate(a,b,c,d)},wa:function(a,b,c,d,e,h,g,l,n){if(2<=T.version)if(U.Wb)U.texImage2D(a,b,c,d,e,h,g,l,n);else if(n){var p=W(l);
U.texImage2D(a,b,c,d,e,h,g,l,p,n>>Jb(p))}else U.texImage2D(a,b,c,d,e,h,g,l,null);else U.texImage2D(a,b,c,d,e,h,g,l,n?Kb(l,g,d,e,n):null)},ua:function(a,b,c,d,e,h,g,l,n,p){if(U.Wb)U.texImage3D(a,b,c,d,e,h,g,l,n,p);else if(p){var q=W(n);U.texImage3D(a,b,c,d,e,h,g,l,n,q,p>>Jb(q))}else U.texImage3D(a,b,c,d,e,h,g,l,n,null)},B:function(a,b,c){U.texParameterf(a,b,c)},f:function(a,b,c){U.texParameteri(a,b,c)},eb:function(a,b,c,d,e,h,g,l,n){if(2<=T.version)if(U.Wb)U.texSubImage2D(a,b,c,d,e,h,g,l,n);else if(n){var p=
W(l);U.texSubImage2D(a,b,c,d,e,h,g,l,p,n>>Jb(p))}else U.texSubImage2D(a,b,c,d,e,h,g,l,null);else p=null,n&&(p=Kb(l,g,e,h,n)),U.texSubImage2D(a,b,c,d,e,h,g,l,p)},db:function(a,b,c,d,e,h,g,l,n,p,q){if(U.Wb)U.texSubImage3D(a,b,c,d,e,h,g,l,n,p,q);else if(q){var X=W(p);U.texSubImage3D(a,b,c,d,e,h,g,l,n,p,X,q>>Jb(X))}else U.texSubImage3D(a,b,c,d,e,h,g,l,n,p,null)},lb:function(a,b,c){if(2<=T.version)U.uniform1fv(Y(a),F,c>>2,b);else{if(288>=b)for(var d=Z[b-1],e=0;e<b;++e)d[e]=F[c+4*e>>2];else d=F.subarray(c>>
2,c+4*b>>2);U.uniform1fv(Y(a),d)}},y:function(a,b){U.uniform1i(Y(a),b)},kb:function(a,b,c){if(2<=T.version)U.uniform2fv(Y(a),F,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],e=0;e<2*b;e+=2)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2];else d=F.subarray(c>>2,c+8*b>>2);U.uniform2fv(Y(a),d)}},jb:function(a,b,c){if(2<=T.version)U.uniform3fv(Y(a),F,c>>2,3*b);else{if(96>=b)for(var d=Z[3*b-1],e=0;e<3*b;e+=3)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+8)>>2];else d=F.subarray(c>>2,c+12*b>>2);U.uniform3fv(Y(a),
d)}},ib:function(a,b,c){if(2<=T.version)U.uniform4fv(Y(a),F,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],e=F;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=F.subarray(c>>2,c+16*b>>2);U.uniform4fv(Y(a),d)}},hb:function(a,b,c,d){if(2<=T.version)U.uniformMatrix4fv(Y(a),!!c,F,d>>2,16*b);else{if(18>=b){var e=Z[16*b-1],h=F;d>>=2;for(var g=0;g<16*b;g+=16){var l=d+g;e[g]=h[l];e[g+1]=h[l+1];e[g+2]=h[l+2];e[g+3]=h[l+3];e[g+4]=h[l+4];e[g+5]=h[l+5];e[g+6]=h[l+6];
e[g+7]=h[l+7];e[g+8]=h[l+8];e[g+9]=h[l+9];e[g+10]=h[l+10];e[g+11]=h[l+11];e[g+12]=h[l+12];e[g+13]=h[l+13];e[g+14]=h[l+14];e[g+15]=h[l+15]}}else e=F.subarray(d>>2,d+64*b>>2);U.uniformMatrix4fv(Y(a),!!c,e)}},l:function(a){a=Q[a];U.useProgram(a);U.wc=a},nb:function(a,b){U.vertexAttribDivisor(a,b)},ob:function(a,b,c,d,e,h){U.vertexAttribPointer(a,b,c,!!d,e,h)},tb:function(a,b,c,d){U.viewport(a,b,c,d)},Ya:function(){f.oc=function(a){0!=Nb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",
f.oc)},Xa:function(){f.tc=function(a){a=a.clipboardData.getData("text");na("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.tc)},Va:function(a){f.Nc=[];a=D(a);a=document.getElementById(a);f.pc=function(b){b.stopPropagation();b.preventDefault()};f.qc=function(b){b.stopPropagation();b.preventDefault()};f.rc=function(b){b.stopPropagation();b.preventDefault()};f.sc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.Oc=c;Ob(c.length);var d;for(d=0;d<
c.length;d++)na("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Pb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.pc,!1);a.addEventListener("dragleave",f.qc,!1);a.addEventListener("dragover",f.rc,!1);a.addEventListener("drop",f.sc,!1)},Ra:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},o:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Qb()});
document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},vb:function(a){a=D(a);f.Xb=document.getElementById(a);f.Xb||console.log("sokol_app.h: invalid target:"+a);f.Xb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ua:function(){window.removeEventListener("beforeunload",f.oc)},Ta:function(){window.removeEventListener("paste",f.tc)},Sa:function(a){a=D(a);a=document.getElementById(a);a.removeEventListener("dragenter",
f.pc);a.removeEventListener("dragleave",f.qc);a.removeEventListener("dragover",f.rc);a.removeEventListener("drop",f.sc)},v:function(){f.Xb&&f.Xb.requestPointerLock&&f.Xb.requestPointerLock()},Qa:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(C.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},
m:function(){document.getElementById("_sokol_app_input_element").blur()},ab:function(){return f.Vb?f.Vb.bufferSize:0},cb:function(a,b,c){f.Qb=null;f.Vb=null;"undefined"!==typeof AudioContext?f.Qb=new AudioContext({sampleRate:a,latencyHint:"interactive"}):"undefined"!==typeof webkitAudioContext?f.Qb=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}):(f.Qb=null,console.log("sokol_audio.h: no WebAudio support"));return f.Qb?(console.log("sokol_audio.h: sample rate ",f.Qb.sampleRate),f.Vb=
f.Qb.createScriptProcessor(c,0,b),f.Vb.onaudioprocess=function(d){var e=d.outputBuffer.length,h=Rb(e);if(h)for(var g=d.outputBuffer.numberOfChannels,l=0;l<g;l++)for(var n=d.outputBuffer.getChannelData(l),p=0;p<e;p++)n[p]=F[(h>>2)+(g*p+l)]},f.Vb.connect(f.Qb.destination),a=function(){f.Qb&&"suspended"===f.Qb.state&&f.Qb.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},bb:function(){return f.Qb?
f.Qb.sampleRate:0},$a:function(){null!==f.Qb&&(f.Vb&&f.Vb.disconnect(),f.Qb.close(),f.Qb=null,f.Vb=null)},w:function(a,b,c,d,e,h){b=D(b);var g=new XMLHttpRequest;g.open("GET",b);g.responseType="arraybuffer";var l=0<d;l&&g.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));g.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!l){var n=new Uint8Array(g.response),p=n.length;p<=h?(C.set(n,e),Sb(a,d,p)):Tb(a)}else Ub(a,this.status)};g.send()},fa:function(a,
b){b=D(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var d=this.getResponseHeader("Content-Length");Vb(a,d)}else Ub(a,this.status)};c.send()}};
(function(){function a(e){f.asm=e.exports;ka=f.asm.wb;ya();H=f.asm.Pb;Aa.unshift(f.asm.xb);I--;f.monitorRunDependencies&&f.monitorRunDependencies(I);0==I&&(null!==Fa&&(clearInterval(Fa),Fa=null),J&&(e=J,J=null,e()))}function b(e){a(e.instance)}function c(e){return Ja().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(e,function(h){x("failed to asynchronously prepare wasm: "+h);w(h)})}var d={a:Wb};I++;f.monitorRunDependencies&&f.monitorRunDependencies(I);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return x("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return y||"function"!==typeof WebAssembly.instantiateStreaming||Ga()||K.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(K,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){x("wasm streaming compile failed: "+h);x("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.xb).apply(null,arguments)};var O=f._malloc=function(){return(O=f._malloc=f.asm.yb).apply(null,arguments)},Qb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Qb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.zb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.Ab).apply(null,arguments)};
var Nb=f.__sapp_html5_get_ask_leave_site=function(){return(Nb=f.__sapp_html5_get_ask_leave_site=f.asm.Bb).apply(null,arguments)},Ob=f.__sapp_emsc_begin_drop=function(){return(Ob=f.__sapp_emsc_begin_drop=f.asm.Cb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Db).apply(null,arguments)};var Pb=f.__sapp_emsc_end_drop=function(){return(Pb=f.__sapp_emsc_end_drop=f.asm.Eb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Fb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Gb).apply(null,arguments)};
var Rb=f.__saudio_emsc_pull=function(){return(Rb=f.__saudio_emsc_pull=f.asm.Hb).apply(null,arguments)},Vb=f.__sfetch_emsc_head_response=function(){return(Vb=f.__sfetch_emsc_head_response=f.asm.Ib).apply(null,arguments)},Sb=f.__sfetch_emsc_get_response=function(){return(Sb=f.__sfetch_emsc_get_response=f.asm.Jb).apply(null,arguments)},Ub=f.__sfetch_emsc_failed_http_status=function(){return(Ub=f.__sfetch_emsc_failed_http_status=f.asm.Kb).apply(null,arguments)},Tb=f.__sfetch_emsc_failed_buffer_too_small=
function(){return(Tb=f.__sfetch_emsc_failed_buffer_too_small=f.asm.Lb).apply(null,arguments)},pa=f.stackSave=function(){return(pa=f.stackSave=f.asm.Mb).apply(null,arguments)},qa=f.stackRestore=function(){return(qa=f.stackRestore=f.asm.Nb).apply(null,arguments)},z=f.stackAlloc=function(){return(z=f.stackAlloc=f.asm.Ob).apply(null,arguments)},Xb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}J=function Yb(){Xb||Zb();Xb||(J=Yb)};
function Zb(a){function b(){if(!Xb&&(Xb=!0,f.calledRun=!0,!la)){Ka(Aa);Ka(Ba);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if($b){var c=a,d=f._main;c=c||[];var e=c.length+1,h=z(4*(e+1));E[h>>2]=ta(ba);for(var g=1;g<e;g++)E[(h>>2)+g]=ta(c[g-1]);E[(h>>2)+e]=0;try{var l=d(e,h);if(!(noExitRuntime||0<ja)){if(f.onExit)f.onExit(l);la=!0}ca(l,new ia(l))}catch(n){n instanceof ia||"unwind"==n||((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),x("exception thrown: "+c),ca(1,n))}finally{}}if(f.postRun)for("function"==
typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),Da.unshift(c);Ka(Da)}}a=a||aa;if(!(0<I)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ea();Ka(za);0<I||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Zb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var $b=!0;f.noInitialRun&&($b=!1);Zb();
