
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in f)f.hasOwnProperty(l)&&(k[l]=f[l]);var aa=[],ba="./this.program";function ca(a,b){throw b;}var da="object"===typeof window,r="function"===typeof importScripts,t="",ea,fa,ha,u,v;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)t=r?require("path").dirname(t)+"/":__dirname+"/",ea=function(a,b){u||(u=require("fs"));v||(v=require("path"));a=v.normalize(a);return u.readFileSync(a,b?null:"utf8")},ha=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||w("Assertion failed: undefined");return a},fa=function(a,b,c){u||(u=require("fs"));v||(v=require("path"));a=v.normalize(a);u.readFile(a,function(d,e){d?c(d):b(e.buffer)})},
1<process.argv.length&&(ba=process.argv[1].replace(/\\/g,"/")),aa=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",w),ca=function(a,b){if(noExitRuntime||0<ja)throw process.exitCode=a,b;process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(da||r)r?t=self.location.href:"undefined"!==typeof document&&document.currentScript&&(t=document.currentScript.src),
t=0!==t.indexOf("blob:")?t.substr(0,t.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},r&&(ha=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),fa=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};
f.print||console.log.bind(console);var x=f.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(f[l]=k[l]);k=null;f.arguments&&(aa=f.arguments);f.thisProgram&&(ba=f.thisProgram);f.quit&&(ca=f.quit);var y;f.wasmBinary&&(y=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!==typeof WebAssembly&&w("no native wasm support detected");var ka,la=!1;function ma(a){var b=f["_"+a];b||w("Assertion failed: Cannot call unknown function "+(a+", make sure it is exported"));return b}
function na(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=z(q);B(n,C,p,q)}return p},array:function(n){var p=z(n.length);oa.set(n,p);return p}};a=ma(a);var e=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=pa()),e[g]=m(c[g])):e[g]=c[g]}b=a.apply(null,e);b=function(n){0!==h&&qa(h);return n}(b)}var ra="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function D(a,b){if(a){var c=C,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ra)a=ra.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var h=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=c[a++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function B(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function sa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ta(a){var b=sa(a)+1,c=z(b);B(a,oa,c,b);return c}var ua,oa,C,va,wa,E,xa,F,G;
function ya(){var a=ka.buffer;ua=a;f.HEAP8=oa=new Int8Array(a);f.HEAP16=va=new Int16Array(a);f.HEAP32=E=new Int32Array(a);f.HEAPU8=C=new Uint8Array(a);f.HEAPU16=wa=new Uint16Array(a);f.HEAPU32=xa=new Uint32Array(a);f.HEAPF32=F=new Float32Array(a);f.HEAPF64=G=new Float64Array(a)}var H,za=[],Aa=[],Ba=[],Ca=[],Da=[],ja=0;function Ea(){var a=f.preRun.shift();za.unshift(a)}var I=0,Fa=null,J=null;f.preloadedImages={};f.preloadedAudios={};
function w(a){if(f.onAbort)f.onAbort(a);x(a);la=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ga(){return K.startsWith("data:application/octet-stream;base64,")}var K;K="uvwrap-sapp.wasm";if(!Ga()){var Ha=K;K=f.locateFile?f.locateFile(Ha,t):t+Ha}function Ia(){var a=K;try{if(a==K&&y)return new Uint8Array(y);if(ha)return ha(a);throw"both async and sync fetching of the wasm failed";}catch(b){w(b)}}
function Ja(){if(!y&&(da||r)){if("function"===typeof fetch&&!K.startsWith("file://"))return fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Ia()});if(fa)return new Promise(function(a,b){fa(K,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ia()})}
function Ka(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.wc;"number"===typeof c?void 0===b.Ub?H.get(c)():H.get(c)(b.Ub):c(void 0===b.Ub?null:b.Ub)}}}var La=0;function Ma(){for(var a=L.length-1;0<=a;--a)Na(a);L=[];Oa=[]}var Oa=[];function Pa(){if(La&&Qa.Pb)for(var a=0;a<Oa.length;++a){var b=Oa[a];Oa.splice(a,1);--a;b.Fc.apply(null,b.tc)}}var L=[];function Na(a){var b=L[a];b.target.removeEventListener(b.Ib,b.nc,b.Jb);L.splice(a,1)}
function M(a){function b(d){++La;Qa=a;Pa();a.Lb(d);Pa();--La}if(a.Kb)a.nc=b,a.target.addEventListener(a.Ib,b,a.Jb),L.push(a),Ra||(Ca.push(Ma),Ra=!0);else for(var c=0;c<L.length;++c)L[c].target==a.target&&L[c].Ib==a.Ib&&Na(c--)}function Sa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Ra,Qa,Ta,Ua,Va,Wa,Xa,Ya,Za,$a=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function N(a){a=2<a?D(a):a;return $a[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function ab(a){return 0>$a.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function bb(a,b,c,d,e,h){Ta||(Ta=O(256));a={target:N(a),Ib:h,Kb:d,Lb:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Ta;B(Sa(g.target),C,n+0,128);B(m,C,n+128,128);H.get(d)(e,n,b)&&g.preventDefault()},Jb:c};M(a)}
function cb(a,b,c,d,e,h){Ua||(Ua=O(176));a={target:N(a),Pb:!0,Ib:h,Kb:d,Lb:function(g){var m=Ua;G[m>>3]=g.timeStamp;var n=m>>2;E[n+2]=g.location;E[n+3]=g.ctrlKey;E[n+4]=g.shiftKey;E[n+5]=g.altKey;E[n+6]=g.metaKey;E[n+7]=g.repeat;E[n+8]=g.charCode;E[n+9]=g.keyCode;E[n+10]=g.which;B(g.key||"",C,m+44,32);B(g.code||"",C,m+76,32);B(g.char||"",C,m+108,32);B(g.locale||"",C,m+140,32);H.get(d)(e,m,b)&&g.preventDefault()},Jb:c};M(a)}
function db(a,b,c){G[a>>3]=b.timeStamp;a>>=2;E[a+2]=b.screenX;E[a+3]=b.screenY;E[a+4]=b.clientX;E[a+5]=b.clientY;E[a+6]=b.ctrlKey;E[a+7]=b.shiftKey;E[a+8]=b.altKey;E[a+9]=b.metaKey;va[2*a+20]=b.button;va[2*a+21]=b.buttons;E[a+11]=b.movementX;E[a+12]=b.movementY;c=ab(c);E[a+13]=b.clientX-c.left;E[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,h){Va||(Va=O(72));a=N(a);M({target:a,Pb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Ib:h,Kb:d,Lb:function(g){g=g||event;db(Va,g,a);H.get(d)(e,Va,b)&&g.preventDefault()},Jb:c})}function eb(a,b,c,d,e){Wa||(Wa=O(260));M({target:a,Ib:e,Kb:d,Lb:function(h){h=h||event;var g=Wa,m=document.pointerLockElement||document.Wb||document.Yb||document.Xb;E[g>>2]=!!m;var n=m&&m.id?m.id:"";B(Sa(m),C,g+4,128);B(n,C,g+132,128);H.get(d)(20,g,b)&&h.preventDefault()},Jb:c})}
function fb(a,b,c,d,e){M({target:a,Ib:e,Kb:d,Lb:function(h){h=h||event;H.get(d)(38,0,b)&&h.preventDefault()},Jb:c})}
function gb(a,b,c,d){Xa||(Xa=O(36));a=N(a);M({target:a,Ib:"resize",Kb:d,Lb:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=Xa;E[g>>2]=e.detail;E[g+4>>2]=h.clientWidth;E[g+8>>2]=h.clientHeight;E[g+12>>2]=innerWidth;E[g+16>>2]=innerHeight;E[g+20>>2]=outerWidth;E[g+24>>2]=outerHeight;E[g+28>>2]=pageXOffset;E[g+32>>2]=pageYOffset;H.get(d)(10,g,b)&&e.preventDefault()}}},Jb:c})}
function hb(a,b,c,d,e,h){Ya||(Ya=O(1696));a=N(a);M({target:a,Pb:"touchstart"==h||"touchend"==h,Ib:h,Kb:d,Lb:function(g){for(var m={},n=g.touches,p=0;p<n.length;++p){var q=n[p];m[q.identifier]=q}n=g.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.qc=1,m[q.identifier]=q;n=g.targetTouches;for(p=0;p<n.length;++p)m[n[p].identifier].rc=1;n=Ya;G[n>>3]=g.timeStamp;q=n>>2;E[q+3]=g.ctrlKey;E[q+4]=g.shiftKey;E[q+5]=g.altKey;E[q+6]=g.metaKey;q+=7;var Y=ab(a),Q=0;for(p in m){var A=m[p];E[q]=A.identifier;E[q+1]=
A.screenX;E[q+2]=A.screenY;E[q+3]=A.clientX;E[q+4]=A.clientY;E[q+5]=A.pageX;E[q+6]=A.pageY;E[q+7]=A.qc;E[q+8]=A.rc;E[q+9]=A.clientX-Y.left;E[q+10]=A.clientY-Y.top;q+=13;if(31<++Q)break}E[n+8>>2]=Q;H.get(d)(e,n,b)&&g.preventDefault()},Jb:c})}function ib(a,b,c,d,e,h){a={target:N(a),Ib:h,Kb:d,Lb:function(g){g=g||event;H.get(d)(e,0,b)&&g.preventDefault()},Jb:c};M(a)}
function jb(a,b,c,d){Za||(Za=O(104));M({target:a,Pb:!0,Ib:"wheel",Kb:d,Lb:function(e){e=e||event;var h=Za;db(h,e,a);G[h+72>>3]=e.deltaX;G[h+80>>3]=e.deltaY;G[h+88>>3]=e.deltaZ;E[h+96>>2]=e.deltaMode;H.get(d)(9,h,b)&&e.preventDefault()},Jb:c})}
function kb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function lb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function mb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function nb(a){a.vc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function ob(a){a.yc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function pb(a){a.Ac=a.getExtension("WEBGL_multi_draw")}var qb=1,rb=[],R=[],sb=[],tb=[],ub=[],S=[],vb=[],wb=[],xb={},yb={};function T(a){zb||(zb=a)}function Ab(a){for(var b=qb++,c=a.length;c<b;c++)a[c]=null;return b}
function Bb(a,b){a.bc||(a.bc=a.getContext,a.getContext=function(d,e){e=a.bc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.cc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Cb(c,b):0}function Cb(a,b){var c=Ab(wb),d={xc:c,attributes:b,version:b.cc,Tb:a};a.canvas&&(a.canvas.sc=d);wb[c]=d;("undefined"===typeof b.ac||b.ac)&&Db(d);return c}
function Db(a){a||(a=U);if(!a.pc){a.pc=!0;var b=a.Tb;kb(b);lb(b);mb(b);nb(b);ob(b);2<=a.version&&(b.$b=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.$b)b.$b=b.getExtension("EXT_disjoint_timer_query");pb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var zb,U,Eb=["default","low-power","high-performance"];
function Fb(a,b,c,d){for(var e=0;e<a;e++){var h=V[c](),g=h&&Ab(d);h?(h.name=g,d[g]=h):T(1282);E[b+4*e>>2]=g}}
function Gb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=V.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>U.version){T(1282);return}c=2*(V.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>U.version){T(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=V.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":T(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:T(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)E[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){T(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:T(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}E[b>>2]=c}else T(1281)}
function W(a){var b=sa(a)+1,c=O(b);B(a,C,c,b);return c}function Hb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Ib(a){a-=5120;return 0==a?oa:1==a?C:2==a?va:4==a?E:6==a?F:5==a||28922==a||28520==a||30779==a||30782==a?xa:wa}function X(a){var b=V.mc;if(b){var c=b.Ob[a];"number"===typeof c&&(b.Ob[a]=c=V.getUniformLocation(b,b.kc[a]+(0<c?"["+c+"]":"")));return c}T(1282)}for(var Z=[],V,Jb=new Float32Array(288),Kb=0;288>Kb;++Kb)Z[Kb]=Jb.subarray(0,Kb+1);
var Pb={S:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},la:function(a,b,c){a=N(a);if(!a)return-4;a=ab(a);G[b>>3]=a.width;G[c>>3]=a.height;return 0},Ya:function(a,b,c){C.copyWithin(a,b,b+c)},Ka:function(a,b){function c(d){H.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Za:function(a){var b=C.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ka.grow(Math.min(2147483648,
d)-ua.byteLength+65535>>>16);ya();var e=1;break a}catch(h){}e=void 0}if(e)return!0}return!1},T:function(a,b,c,d){bb(a,b,c,d,12,"blur");return 0},P:function(a,b,c){a=N(a);if(!a)return-4;a.width=b;a.height=c;return 0},U:function(a,b,c,d){bb(a,b,c,d,13,"focus");return 0},ba:function(a,b,c,d){cb(a,b,c,d,2,"keydown");return 0},$:function(a,b,c,d){cb(a,b,c,d,1,"keypress");return 0},aa:function(a,b,c,d){cb(a,b,c,d,3,"keyup");return 0},ka:function(a,b,c,d){P(a,b,c,d,5,"mousedown");return 0},ea:function(a,
b,c,d){P(a,b,c,d,33,"mouseenter");return 0},da:function(a,b,c,d){P(a,b,c,d,34,"mouseleave");return 0},fa:function(a,b,c,d){P(a,b,c,d,8,"mousemove");return 0},ga:function(a,b,c,d){P(a,b,c,d,6,"mouseup");return 0},W:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Wb||document.body.Yb||document.body.Xb))return-1;a=N(a);if(!a)return-4;eb(a,b,c,d,"pointerlockchange");eb(a,b,c,d,"mozpointerlockchange");eb(a,b,c,d,"webkitpointerlockchange");eb(a,b,c,d,"mspointerlockchange");
return 0},V:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Wb||document.body.Yb||document.body.Xb))return-1;a=N(a);if(!a)return-4;fb(a,b,c,d,"pointerlockerror");fb(a,b,c,d,"mozpointerlockerror");fb(a,b,c,d,"webkitpointerlockerror");fb(a,b,c,d,"mspointerlockerror");return 0},Xa:function(a,b,c,d){gb(a,b,c,d);return 0},X:function(a,b,c,d){hb(a,b,c,d,25,"touchcancel");return 0},Y:function(a,b,c,d){hb(a,b,c,d,23,"touchend");return 0},Z:function(a,b,c,d){hb(a,b,c,d,24,
"touchmove");return 0},_:function(a,b,c,d){hb(a,b,c,d,22,"touchstart");return 0},R:function(a,b,c,d){ib(a,b,c,d,31,"webglcontextlost");return 0},Q:function(a,b,c,d){ib(a,b,c,d,32,"webglcontextrestored");return 0},ca:function(a,b,c,d){a=N(a);return"undefined"!==typeof a.onwheel?(jb(a,b,c,d),0):-1},F:function(a,b){b>>=2;b={alpha:!!E[b],depth:!!E[b+1],stencil:!!E[b+2],antialias:!!E[b+3],premultipliedAlpha:!!E[b+4],preserveDrawingBuffer:!!E[b+5],powerPreference:Eb[E[b+6]],failIfMajorPerformanceCaveat:!!E[b+
7],cc:E[b+8],zc:E[b+9],ac:E[b+10],oc:E[b+11],Bc:E[b+12],Cc:E[b+13]};a=N(a);return!a||b.oc?0:Bb(a,b)},sa:function(a,b){a=wb[a];b=D(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&kb(V);"OES_vertex_array_object"==b&&lb(V);"WEBGL_draw_buffers"==b&&mb(V);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&nb(V);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&ob(V);"WEBGL_multi_draw"==b&&pb(V);return!!a.Tb.getExtension(b)},Ha:function(a){a>>=2;for(var b=0;14>b;++b)E[a+
b]=0;E[a]=E[a+1]=E[a+3]=E[a+4]=E[a+8]=E[a+10]=1},za:function(a){U=wb[a];f.uc=V=U&&U.Tb;return!a||V?0:-5},b:function(a){V.activeTexture(a)},z:function(a,b){V.attachShader(R[a],S[b])},e:function(a,b){35051==a?V.Zb=b:35052==a&&(V.Mb=b);V.bindBuffer(a,rb[b])},h:function(a,b){V.bindFramebuffer(a,sb[b])},C:function(a,b){V.bindRenderbuffer(a,tb[b])},a:function(a,b){V.bindTexture(a,ub[b])},M:function(a){V.bindVertexArray(vb[a])},I:function(a,b,c,d){V.blendColor(a,b,c,d)},J:function(a,b){V.blendEquationSeparate(a,
b)},K:function(a,b,c,d){V.blendFuncSeparate(a,b,c,d)},p:function(a,b,c,d,e,h,g,m,n,p){V.blitFramebuffer(a,b,c,d,e,h,g,m,n,p)},Da:function(a,b,c,d){2<=U.version?c?V.bufferData(a,C,d,c,b):V.bufferData(a,b,d):V.bufferData(a,c?C.subarray(c,c+b):b,d)},Ca:function(a,b,c,d){2<=U.version?V.bufferSubData(a,b,C,d,c):V.bufferSubData(a,b,C.subarray(d,d+c))},ib:function(a){V.clear(a)},ja:function(a,b,c,d){V.clearColor(a,b,c,d)},kb:function(a){V.clearDepth(a)},jb:function(a){V.clearStencil(a)},j:function(a,b,c,
d){V.colorMask(!!a,!!b,!!c,!!d)},oa:function(a){V.compileShader(S[a])},ya:function(a,b,c,d,e,h,g,m){2<=U.version?V.Mb?V.compressedTexImage2D(a,b,c,d,e,h,g,m):V.compressedTexImage2D(a,b,c,d,e,h,C,m,g):V.compressedTexImage2D(a,b,c,d,e,h,m?C.subarray(m,m+g):null)},wa:function(a,b,c,d,e,h,g,m,n){V.Mb?V.compressedTexImage3D(a,b,c,d,e,h,g,m,n):V.compressedTexImage3D(a,b,c,d,e,h,g,C,n,m)},ua:function(){var a=Ab(R),b=V.createProgram();b.name=a;b.Sb=b.Qb=b.Rb=0;b.Vb=1;R[a]=b;return a},qa:function(a){var b=
Ab(S);S[b]=V.createShader(a);return b},E:function(a){V.cullFace(a)},Ma:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=rb[d];e&&(V.deleteBuffer(e),e.name=0,rb[d]=null,d==V.Zb&&(V.Zb=0),d==V.Mb&&(V.Mb=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=E[b+4*c>>2],e=sb[d];e&&(V.deleteFramebuffer(e),e.name=0,sb[d]=null)}},N:function(a){if(a){var b=R[a];b?(V.deleteProgram(b),b.name=0,R[a]=null):T(1281)}},O:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=tb[d];e&&(V.deleteRenderbuffer(e),e.name=
0,tb[d]=null)}},r:function(a){if(a){var b=S[a];b?(V.deleteShader(b),S[a]=null):T(1281)}},La:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=ub[d];e&&(V.deleteTexture(e),e.name=0,ub[d]=null)}},Ja:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2];V.deleteVertexArray(vb[d]);vb[d]=null}},u:function(a){V.depthFunc(a)},t:function(a){V.depthMask(!!a)},d:function(a){V.disable(a)},L:function(a){V.disableVertexAttribArray(a)},_a:function(a,b,c){V.drawArrays(a,b,c)},$a:function(a,b,c,d){V.drawElements(a,
b,c,d)},g:function(a){V.enable(a)},fb:function(a){V.enableVertexAttribArray(a)},G:function(a){V.frontFace(a)},Ea:function(a,b){Fb(a,b,"createBuffer",rb)},D:function(a,b){Fb(a,b,"createRenderbuffer",tb)},Aa:function(a,b){Fb(a,b,"createTexture",ub)},Ia:function(a,b){Fb(a,b,"createVertexArray",vb)},ma:function(a,b){return V.getAttribLocation(R[a],D(b))},c:function(a,b){Gb(a,b)},ra:function(a,b,c,d){a=V.getProgramInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,C,d,b):0;c&&(E[c>>2]=b)},y:function(a,
b,c){if(c)if(a>=qb)T(1281);else if(a=R[a],35716==b)a=V.getProgramInfoLog(a),null===a&&(a="(unknown error)"),E[c>>2]=a.length+1;else if(35719==b){if(!a.Sb)for(b=0;b<V.getProgramParameter(a,35718);++b)a.Sb=Math.max(a.Sb,V.getActiveUniform(a,b).name.length+1);E[c>>2]=a.Sb}else if(35722==b){if(!a.Qb)for(b=0;b<V.getProgramParameter(a,35721);++b)a.Qb=Math.max(a.Qb,V.getActiveAttrib(a,b).name.length+1);E[c>>2]=a.Qb}else if(35381==b){if(!a.Rb)for(b=0;b<V.getProgramParameter(a,35382);++b)a.Rb=Math.max(a.Rb,
V.getActiveUniformBlockName(a,b).length+1);E[c>>2]=a.Rb}else E[c>>2]=V.getProgramParameter(a,b);else T(1281)},na:function(a,b,c,d){a=V.getShaderInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,C,d,b):0;c&&(E[c>>2]=b)},w:function(a,b,c){c?35716==b?(a=V.getShaderInfoLog(S[a]),null===a&&(a="(unknown error)"),E[c>>2]=a?a.length+1:0):35720==b?(a=V.getShaderSource(S[a]),E[c>>2]=a?a.length+1:0):E[c>>2]=V.getShaderParameter(S[a],b):T(1281)},Oa:function(a){var b=xb[a];if(!b){switch(a){case 7939:b=
V.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=W(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=V.getParameter(a))||T(1280);b=b&&W(b);break;case 7938:b=V.getParameter(7938);b=2<=U.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=W(b);break;case 35724:b=V.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=W(b);break;default:T(1280)}xb[a]=
b}return b},Na:function(a,b){if(2>U.version)return T(1282),0;var c=yb[a];if(c)return 0>b||b>=c.length?(T(1281),0):c[b];switch(a){case 7939:return c=V.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return W(d)}),c=yb[a]=c,0>b||b>=c.length?(T(1281),0):c[b];default:return T(1280),0}},k:function(a,b){b=D(b);if(a=R[a]){var c=a,d=c.Ob,e=c.lc,h;if(!d)for(c.Ob=d={},c.kc={},h=0;h<V.getProgramParameter(c,35718);++h){var g=V.getActiveUniform(c,h);var m=g.name;
g=g.size;var n=Hb(m);n=0<n?m.slice(0,n):m;var p=c.Vb;c.Vb+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.kc[p++]=n}c=a.Ob;d=0;e=b;h=Hb(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.lc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||V.getUniformLocation(a,b)))return d}else T(1281);return-1},ta:function(a){a=R[a];V.linkProgram(a);a.Ob=0;a.lc={}},H:function(a,b){V.polygonOffset(a,b)},q:function(a){V.readBuffer(a)},Ba:function(a,b,c,d){V.renderbufferStorage(a,b,c,d)},B:function(a,b,c,d,e){V.renderbufferStorageMultisample(a,
b,c,d,e)},lb:function(a,b,c,d){V.scissor(a,b,c,d)},pa:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?E[d+4*h>>2]:-1;e+=D(E[c+4*h>>2],0>g?void 0:g)}V.shaderSource(S[a],e)},Ga:function(a,b,c){V.stencilFunc(a,b,c)},ia:function(a,b,c,d){V.stencilFuncSeparate(a,b,c,d)},s:function(a){V.stencilMask(a)},Fa:function(a,b,c){V.stencilOp(a,b,c)},ha:function(a,b,c,d){V.stencilOpSeparate(a,b,c,d)},xa:function(a,b,c,d,e,h,g,m,n){if(2<=U.version)if(V.Mb)V.texImage2D(a,b,c,d,e,h,g,m,n);else if(n){var p=Ib(m);
V.texImage2D(a,b,c,d,e,h,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else V.texImage2D(a,b,c,d,e,h,g,m,null);else{p=V;var q=p.texImage2D;if(n){var Y=Ib(m),Q=31-Math.clz32(Y.BYTES_PER_ELEMENT);n=Y.subarray(n>>Q,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[g-6402]||1)*(1<<Q)+4-1&-4)>>Q)}else n=null;q.call(p,a,b,c,d,e,h,g,m,n)}},va:function(a,b,c,d,e,h,g,m,n,p){if(V.Mb)V.texImage3D(a,b,c,d,e,h,g,m,n,p);else if(p){var q=Ib(n);V.texImage3D(a,b,c,d,e,h,g,m,n,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else V.texImage3D(a,
b,c,d,e,h,g,m,n,null)},A:function(a,b,c){V.texParameterf(a,b,c)},f:function(a,b,c){V.texParameteri(a,b,c)},eb:function(a,b,c){if(2<=U.version)V.uniform1fv(X(a),F,c>>2,b);else{if(288>=b)for(var d=Z[b-1],e=0;e<b;++e)d[e]=F[c+4*e>>2];else d=F.subarray(c>>2,c+4*b>>2);V.uniform1fv(X(a),d)}},x:function(a,b){V.uniform1i(X(a),b)},db:function(a,b,c){if(2<=U.version)V.uniform2fv(X(a),F,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],e=0;e<2*b;e+=2)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2];else d=F.subarray(c>>2,
c+8*b>>2);V.uniform2fv(X(a),d)}},cb:function(a,b,c){if(2<=U.version)V.uniform3fv(X(a),F,c>>2,3*b);else{if(96>=b)for(var d=Z[3*b-1],e=0;e<3*b;e+=3)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+8)>>2];else d=F.subarray(c>>2,c+12*b>>2);V.uniform3fv(X(a),d)}},bb:function(a,b,c){if(2<=U.version)V.uniform4fv(X(a),F,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],e=F;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=F.subarray(c>>2,c+16*b>>2);V.uniform4fv(X(a),
d)}},ab:function(a,b,c,d){if(2<=U.version)V.uniformMatrix4fv(X(a),!!c,F,d>>2,16*b);else{if(18>=b){var e=Z[16*b-1],h=F;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=h[m];e[g+1]=h[m+1];e[g+2]=h[m+2];e[g+3]=h[m+3];e[g+4]=h[m+4];e[g+5]=h[m+5];e[g+6]=h[m+6];e[g+7]=h[m+7];e[g+8]=h[m+8];e[g+9]=h[m+9];e[g+10]=h[m+10];e[g+11]=h[m+11];e[g+12]=h[m+12];e[g+13]=h[m+13];e[g+14]=h[m+14];e[g+15]=h[m+15]}}else e=F.subarray(d>>2,d+64*b>>2);V.uniformMatrix4fv(X(a),!!c,e)}},l:function(a){a=R[a];V.useProgram(a);V.mc=
a},gb:function(a,b){V.vertexAttribDivisor(a,b)},hb:function(a,b,c,d,e,h){V.vertexAttribPointer(a,b,c,!!d,e,h)},mb:function(a,b,c,d){V.viewport(a,b,c,d)},Wa:function(){f.dc=function(a){0!=Lb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.dc)},Va:function(){f.jc=function(a){a=a.clipboardData.getData("text");na("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.jc)},Ua:function(a){f.Dc=[];a=D(a);a=document.getElementById(a);f.ec=function(b){b.stopPropagation();
b.preventDefault()};f.fc=function(b){b.stopPropagation();b.preventDefault()};f.hc=function(b){b.stopPropagation();b.preventDefault()};f.ic=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.Ec=c;Mb(c.length);var d;for(d=0;d<c.length;d++)na("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Nb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.ec,!1);a.addEventListener("dragleave",f.fc,!1);a.addEventListener("dragover",f.hc,!1);a.addEventListener("drop",f.ic,!1)},
Qa:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},o:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Ob()});document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},nb:function(a){a=D(a);f.Nb=document.getElementById(a);f.Nb||console.log("sokol_app.h: invalid target:"+a);f.Nb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+
a)},Ta:function(){window.removeEventListener("beforeunload",f.dc)},Sa:function(){window.removeEventListener("paste",f.jc)},Ra:function(a){a=D(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.ec);a.removeEventListener("dragleave",f.fc);a.removeEventListener("dragover",f.hc);a.removeEventListener("drop",f.ic)},v:function(){f.Nb&&f.Nb.requestPointerLock&&f.Nb.requestPointerLock()},Pa:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),
h=e.createImageData(a,b);h.data.set(C.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},m:function(){document.getElementById("_sokol_app_input_element").blur()}};
(function(){function a(e){f.asm=e.exports;ka=f.asm.ob;ya();H=f.asm.Hb;Aa.unshift(f.asm.pb);I--;f.monitorRunDependencies&&f.monitorRunDependencies(I);0==I&&(null!==Fa&&(clearInterval(Fa),Fa=null),J&&(e=J,J=null,e()))}function b(e){a(e.instance)}function c(e){return Ja().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(e,function(h){x("failed to asynchronously prepare wasm: "+h);w(h)})}var d={a:Pb};I++;f.monitorRunDependencies&&f.monitorRunDependencies(I);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return x("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return y||"function"!==typeof WebAssembly.instantiateStreaming||Ga()||K.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(K,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){x("wasm streaming compile failed: "+h);x("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.pb).apply(null,arguments)};var Ob=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Ob=f.__sapp_emsc_notify_keyboard_hidden=f.asm.qb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.rb).apply(null,arguments)};
var Lb=f.__sapp_html5_get_ask_leave_site=function(){return(Lb=f.__sapp_html5_get_ask_leave_site=f.asm.sb).apply(null,arguments)},Mb=f.__sapp_emsc_begin_drop=function(){return(Mb=f.__sapp_emsc_begin_drop=f.asm.tb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.ub).apply(null,arguments)};var Nb=f.__sapp_emsc_end_drop=function(){return(Nb=f.__sapp_emsc_end_drop=f.asm.vb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.wb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.xb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.yb).apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.zb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Ab).apply(null,arguments)};
f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.Bb).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.Cb).apply(null,arguments)};
var O=f._malloc=function(){return(O=f._malloc=f.asm.Db).apply(null,arguments)},pa=f.stackSave=function(){return(pa=f.stackSave=f.asm.Eb).apply(null,arguments)},qa=f.stackRestore=function(){return(qa=f.stackRestore=f.asm.Fb).apply(null,arguments)},z=f.stackAlloc=function(){return(z=f.stackAlloc=f.asm.Gb).apply(null,arguments)},Qb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}J=function Rb(){Qb||Sb();Qb||(J=Rb)};
function Sb(a){function b(){if(!Qb&&(Qb=!0,f.calledRun=!0,!la)){Ka(Aa);Ka(Ba);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Tb){var c=a,d=f._main;c=c||[];var e=c.length+1,h=z(4*(e+1));E[h>>2]=ta(ba);for(var g=1;g<e;g++)E[(h>>2)+g]=ta(c[g-1]);E[(h>>2)+e]=0;try{var m=d(e,h);if(!(noExitRuntime||0<ja)){if(f.onExit)f.onExit(m);la=!0}ca(m,new ia(m))}catch(n){n instanceof ia||"unwind"==n||((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),x("exception thrown: "+c),ca(1,n))}finally{}}if(f.postRun)for("function"==
typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),Da.unshift(c);Ka(Da)}}a=a||aa;if(!(0<I)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ea();Ka(za);0<I||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Sb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Tb=!0;f.noInitialRun&&(Tb=!1);Sb();
