
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in e)e.hasOwnProperty(l)&&(k[l]=e[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,fa,w,ha,ia;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){ha||(ha=require("fs"));ia||(ia=require("path"));a=ia.normalize(a);return ha.readFileSync(a,b?null:"utf8")},w=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ja))throw a;}),process.on("unhandledRejection",
x),t=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:"undefined"!==typeof document&&document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),
fa=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};e.print||console.log.bind(console);var y=e.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(e[l]=k[l]);k=null;e.arguments&&(r=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var z;e.wasmBinary&&(z=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);
"object"!==typeof WebAssembly&&x("no native wasm support detected");var ka,la=!1;function assert(a,b){a||x("Assertion failed: "+b)}function ma(a){var b=e["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function na(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=A(q);C(n,D,p,q)}return p},array:function(n){var p=A(n.length);oa.set(n,p);return p}};a=ma(a);var f=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=pa()),f[g]=m(c[g])):f[g]=c[g]}a.apply(null,f);0!==h&&qa(h)}var ra="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function E(a,b){if(a){var c=D,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ra)a=ra.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var h=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|h);else{var g=c[a++]&63;f=224==(f&240)?(f&15)<<12|h<<6|g:(f&7)<<18|h<<12|g<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function C(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function sa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ta(a){var b=sa(a)+1,c=A(b);C(a,oa,c,b);return c}var ua,oa,D,va,wa,F,xa,G,H;
function ya(){var a=ka.buffer;ua=a;e.HEAP8=oa=new Int8Array(a);e.HEAP16=va=new Int16Array(a);e.HEAP32=F=new Int32Array(a);e.HEAPU8=D=new Uint8Array(a);e.HEAPU16=wa=new Uint16Array(a);e.HEAPU32=xa=new Uint32Array(a);e.HEAPF32=G=new Float32Array(a);e.HEAPF64=H=new Float64Array(a)}var I,za=[],Aa=[],Ba=[],Ca=[],Da=[];Aa.push({Bc:function(){Ea()}});function Fa(){var a=e.preRun.shift();za.unshift(a)}var J=0,Ga=null,K=null;e.preloadedImages={};e.preloadedAudios={};
function x(a){if(e.onAbort)e.onAbort(a);y(a);la=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ha(a){var b=L;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ia(){return Ha("data:application/octet-stream;base64,")}var L="arraytex-sapp.wasm";if(!Ia()){var Ja=L;L=e.locateFile?e.locateFile(Ja,v):v+Ja}
function Ka(){var a=L;try{if(a==L&&z)return new Uint8Array(z);if(w)return w(a);throw"both async and sync fetching of the wasm failed";}catch(b){x(b)}}
function La(){if(!z&&(ba||u)){if("function"===typeof fetch&&!Ha("file://"))return fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return Ka()});if(fa)return new Promise(function(a,b){fa(L,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ka()})}
function Ma(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.Bc;"number"===typeof c?void 0===b.kc?I.get(c)():I.get(c)(b.kc):c(void 0===b.kc?null:b.kc)}}}var Na=0;function Oa(){for(var a=M.length-1;0<=a;--a)Pa(a);M=[];Qa=[]}var Qa=[];function Ra(){if(Na&&Sa.ic)for(var a=0;a<Qa.length;++a){var b=Qa[a];Qa.splice(a,1);--a;b.Sc.apply(null,b.Gc)}}var M=[];function Pa(a){var b=M[a];b.target.removeEventListener(b.$b,b.zc,b.ac);M.splice(a,1)}
function N(a){function b(d){++Na;Sa=a;Ra();a.cc(d);Ra();--Na}if(a.bc)a.zc=b,a.target.addEventListener(a.$b,b,a.ac),M.push(a),Ta||(Ca.push(Oa),Ta=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].$b==a.$b&&Pa(c--)}var Ta,Sa,Ua,Va,Wa,Xa,Ya,Za,$a=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function O(a){a=2<a?E(a):a;return $a[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function ab(a){return 0>$a.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function bb(a,b,c,d,f,h){Ua||(Ua=P(164));a={target:O(a),ic:!0,$b:h,bc:d,cc:function(g){var m=Ua,n=m>>2;F[n]=g.location;F[n+1]=g.ctrlKey;F[n+2]=g.shiftKey;F[n+3]=g.altKey;F[n+4]=g.metaKey;F[n+5]=g.repeat;F[n+6]=g.charCode;F[n+7]=g.keyCode;F[n+8]=g.which;C(g.key||"",D,m+36,32);C(g.code||"",D,m+68,32);C(g.char||"",D,m+100,32);C(g.locale||"",D,m+132,32);I.get(d)(f,m,b)&&g.preventDefault()},ac:c};N(a)}
function cb(a,b,c){a>>=2;F[a]=b.screenX;F[a+1]=b.screenY;F[a+2]=b.clientX;F[a+3]=b.clientY;F[a+4]=b.ctrlKey;F[a+5]=b.shiftKey;F[a+6]=b.altKey;F[a+7]=b.metaKey;va[2*a+16]=b.button;va[2*a+17]=b.buttons;F[a+9]=b.movementX;F[a+10]=b.movementY;c=ab(c);F[a+11]=b.clientX-c.left;F[a+12]=b.clientY-c.top}function Q(a,b,c,d,f,h){Va||(Va=P(64));a=O(a);N({target:a,ic:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,$b:h,bc:d,cc:function(g){g=g||event;cb(Va,g,a);I.get(d)(f,Va,b)&&g.preventDefault()},ac:c})}
function db(a,b,c,d,f){Wa||(Wa=P(260));N({target:a,$b:f,bc:d,cc:function(h){h=h||event;var g=Wa,m=document.pointerLockElement||document.mc||document.oc||document.nc;F[g>>2]=!!m;var n=m&&m.id?m.id:"";C(m?m==window?"#window":m==screen?"#screen":m&&m.nodeName?m.nodeName:"":"",D,g+4,128);C(n,D,g+132,128);I.get(d)(20,g,b)&&h.preventDefault()},ac:c})}function eb(a,b,c,d,f){N({target:a,$b:f,bc:d,cc:function(h){h=h||event;I.get(d)(38,0,b)&&h.preventDefault()},ac:c})}
function fb(a,b,c,d){Xa||(Xa=P(36));a=O(a);N({target:a,$b:"resize",bc:d,cc:function(f){f=f||event;if(f.target==a){var h=document.body;if(h){var g=Xa;F[g>>2]=f.detail;F[g+4>>2]=h.clientWidth;F[g+8>>2]=h.clientHeight;F[g+12>>2]=innerWidth;F[g+16>>2]=innerHeight;F[g+20>>2]=outerWidth;F[g+24>>2]=outerHeight;F[g+28>>2]=pageXOffset;F[g+32>>2]=pageYOffset;I.get(d)(10,g,b)&&f.preventDefault()}}},ac:c})}
function gb(a,b,c,d,f,h){Ya||(Ya=P(1684));a=O(a);N({target:a,ic:"touchstart"==h||"touchend"==h,$b:h,bc:d,cc:function(g){for(var m={},n=g.touches,p=0;p<n.length;++p){var q=n[p];m[q.identifier]=q}n=g.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.Dc=1,m[q.identifier]=q;n=g.targetTouches;for(p=0;p<n.length;++p)m[n[p].identifier].Ec=1;n=Ya;q=n>>2;F[q+1]=g.ctrlKey;F[q+2]=g.shiftKey;F[q+3]=g.altKey;F[q+4]=g.metaKey;q+=5;var nb=ab(a),ob=0;for(p in m){var B=m[p];F[q]=B.identifier;F[q+1]=B.screenX;F[q+2]=
B.screenY;F[q+3]=B.clientX;F[q+4]=B.clientY;F[q+5]=B.pageX;F[q+6]=B.pageY;F[q+7]=B.Dc;F[q+8]=B.Ec;F[q+9]=B.clientX-nb.left;F[q+10]=B.clientY-nb.top;q+=13;if(31<++ob)break}F[n>>2]=ob;I.get(d)(f,n,b)&&g.preventDefault()},ac:c})}function hb(a,b,c,d,f,h){a={target:O(a),$b:h,bc:d,cc:function(g){g=g||event;I.get(d)(f,0,b)&&g.preventDefault()},ac:c};N(a)}
function ib(a,b,c,d){Za||(Za=P(96));N({target:a,ic:!0,$b:"wheel",bc:d,cc:function(f){f=f||event;var h=Za;cb(h,f,a);H[h+64>>3]=f.deltaX;H[h+72>>3]=f.deltaY;H[h+80>>3]=f.deltaZ;F[h+88>>2]=f.deltaMode;I.get(d)(9,h,b)&&f.preventDefault()},ac:c})}
function jb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,h){b.drawArraysInstancedANGLE(c,d,f,h)},a.drawElementsInstanced=function(c,d,f,h,g){b.drawElementsInstancedANGLE(c,d,f,h,g)})}
function kb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function lb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function mb(a){a.Ic=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function pb(a){a.Lc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function qb(a){a.Nc=a.getExtension("WEBGL_multi_draw")}var rb=1,sb=[],R=[],tb=[],ub=[],vb=[],S=[],T=[],wb=[],xb=[],U={},yb={},zb={};function V(a){Ab||(Ab=a)}function W(a){for(var b=rb++,c=a.length;c<b;c++)a[c]=null;return b}
function Bb(a){a||(a=X);if(!a.Cc){a.Cc=!0;var b=a.jc;jb(b);kb(b);lb(b);mb(b);pb(b);b.Jc=b.getExtension("EXT_disjoint_timer_query");qb(b);(b.getSupportedExtensions()||[]).forEach(function(c){0>c.indexOf("lose_context")&&0>c.indexOf("debug")&&b.getExtension(c)})}}var Ab,X,Cb=["default","low-power","high-performance"];function Db(a,b,c,d){for(var f=0;f<a;f++){var h=Y[c](),g=h&&W(d);h?(h.name=g,d[g]=h):V(1282);F[b+4*f>>2]=g}}
function Eb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>X.version){V(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>X.version){V(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)F[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){V(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:V(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}F[b>>2]=c}else V(1281)}
function Fb(a){var b=sa(a)+1,c=P(b);C(a,D,c,b);return c}function Gb(a){a-=5120;return 0==a?oa:1==a?D:2==a?va:4==a?F:6==a?G:5==a||28922==a||28520==a||30779==a||30782==a?xa:wa}function Hb(a,b,c,d,f){a=Gb(a);var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(f>>h,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}for(var Z=[],Y,Ib=new Float32Array(288),Jb=0;288>Jb;++Jb)Z[Jb]=Ib.subarray(0,Jb+1);
var Ob={S:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ka:function(a,b,c){a=O(a);if(!a)return-4;a=ab(a);H[b>>3]=a.width;H[c>>3]=a.height;return 0},Xa:function(a,b,c){D.copyWithin(a,b,b+c)},Ka:function(a,b){function c(d){I.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Ya:function(a){a>>>=0;var b=D.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);
a:{try{ka.grow(Math.min(2147483648,d)-ua.byteLength+65535>>>16);ya();var f=1;break a}catch(h){}f=void 0}if(f)return!0}return!1},R:function(a,b,c){a=O(a);if(!a)return-4;a.width=b;a.height=c;return 0},ba:function(a,b,c,d){bb(a,b,c,d,2,"keydown");return 0},$:function(a,b,c,d){bb(a,b,c,d,1,"keypress");return 0},aa:function(a,b,c,d){bb(a,b,c,d,3,"keyup");return 0},ja:function(a,b,c,d){Q(a,b,c,d,5,"mousedown");return 0},ea:function(a,b,c,d){Q(a,b,c,d,33,"mouseenter");return 0},da:function(a,b,c,d){Q(a,
b,c,d,34,"mouseleave");return 0},fa:function(a,b,c,d){Q(a,b,c,d,8,"mousemove");return 0},ga:function(a,b,c,d){Q(a,b,c,d,6,"mouseup");return 0},W:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.mc||document.body.oc||document.body.nc))return-1;a=O(a);if(!a)return-4;db(a,b,c,d,"pointerlockchange");db(a,b,c,d,"mozpointerlockchange");db(a,b,c,d,"webkitpointerlockchange");db(a,b,c,d,"mspointerlockchange");return 0},V:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||
document.body.mc||document.body.oc||document.body.nc))return-1;a=O(a);if(!a)return-4;eb(a,b,c,d,"pointerlockerror");eb(a,b,c,d,"mozpointerlockerror");eb(a,b,c,d,"webkitpointerlockerror");eb(a,b,c,d,"mspointerlockerror");return 0},Wa:function(a,b,c,d){fb(a,b,c,d);return 0},X:function(a,b,c,d){gb(a,b,c,d,25,"touchcancel");return 0},Y:function(a,b,c,d){gb(a,b,c,d,23,"touchend");return 0},Z:function(a,b,c,d){gb(a,b,c,d,24,"touchmove");return 0},_:function(a,b,c,d){gb(a,b,c,d,22,"touchstart");return 0},
U:function(a,b,c,d){hb(a,b,c,d,31,"webglcontextlost");return 0},T:function(a,b,c,d){hb(a,b,c,d,32,"webglcontextrestored");return 0},ca:function(a,b,c,d){a=O(a);return"undefined"!==typeof a.onwheel?(ib(a,b,c,d),0):-1},D:function(a,b){b>>=2;b={alpha:!!F[b],depth:!!F[b+1],stencil:!!F[b+2],antialias:!!F[b+3],premultipliedAlpha:!!F[b+4],preserveDrawingBuffer:!!F[b+5],powerPreference:Cb[F[b+6]],failIfMajorPerformanceCaveat:!!F[b+7],rc:F[b+8],Mc:F[b+9],qc:F[b+10],Ac:F[b+11],Oc:F[b+12],Pc:F[b+13]};a=O(a);
if(!a||b.Ac)b=0;else if(a=1<b.rc?a.getContext("webgl2",b):a.getContext("webgl",b)){var c=W(xb),d={Kc:c,attributes:b,version:b.rc,jc:a};a.canvas&&(a.canvas.Fc=d);xb[c]=d;("undefined"===typeof b.qc||b.qc)&&Bb(d);b=c}else b=0;return b},ra:function(a,b){a=xb[a];b=E(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&jb(Y);"OES_vertex_array_object"==b&&kb(Y);"WEBGL_draw_buffers"==b&&lb(Y);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&mb(Y);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==
b&&pb(Y);"WEBGL_multi_draw"==b&&qb(Y);return!!a.jc.getExtension(b)},Ga:function(a){a>>=2;for(var b=0;14>b;++b)F[a+b]=0;F[a]=F[a+1]=F[a+3]=F[a+4]=F[a+8]=F[a+10]=1},xa:function(a){X=xb[a];e.Hc=Y=X&&X.jc;return!a||Y?0:-5},b:function(a){Y.activeTexture(a)},B:function(a,b){Y.attachShader(R[a],T[b])},c:function(a,b){35051==a?Y.pc=b:35052==a&&(Y.dc=b);Y.bindBuffer(a,sb[b])},h:function(a,b){Y.bindFramebuffer(a,tb[b])},Ea:function(a,b){Y.bindRenderbuffer(a,ub[b])},a:function(a,b){Y.bindTexture(a,vb[b])},O:function(a){Y.bindVertexArray(wb[a])},
K:function(a,b,c,d){Y.blendColor(a,b,c,d)},L:function(a,b){Y.blendEquationSeparate(a,b)},M:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},p:function(a,b,c,d,f,h,g,m,n,p){Y.blitFramebuffer(a,b,c,d,f,h,g,m,n,p)},F:function(a,b,c,d){2<=X.version?c?Y.bufferData(a,D,d,c,b):Y.bufferData(a,b,d):Y.bufferData(a,c?D.subarray(c,c+b):b,d)},E:function(a,b,c,d){2<=X.version?Y.bufferSubData(a,b,D,d,c):Y.bufferSubData(a,b,D.subarray(d,d+c))},hb:function(a){Y.clear(a)},x:function(a,b,c,d){Y.clearColor(a,b,c,d)},
w:function(a){Y.clearDepth(a)},ib:function(a){Y.clearStencil(a)},j:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},pa:function(a){Y.compileShader(T[a])},Aa:function(a,b,c,d,f,h,g,m){2<=X.version?Y.dc?Y.compressedTexImage2D(a,b,c,d,f,h,g,m):Y.compressedTexImage2D(a,b,c,d,f,h,D,m,g):Y.compressedTexImage2D(a,b,c,d,f,h,m?D.subarray(m,m+g):null)},ya:function(a,b,c,d,f,h,g,m,n){Y.dc?Y.compressedTexImage3D(a,b,c,d,f,h,g,m,n):Y.compressedTexImage3D(a,b,c,d,f,h,g,D,n,m)},va:function(){var a=W(R),b=Y.createProgram();
b.name=a;R[a]=b;return a},sa:function(a){var b=W(T);T[b]=Y.createShader(a);return b},H:function(a){Y.cullFace(a)},Na:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],f=sb[d];f&&(Y.deleteBuffer(f),f.name=0,sb[d]=null,d==Y.pc&&(Y.pc=0),d==Y.dc&&(Y.dc=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=F[b+4*c>>2],f=tb[d];f&&(Y.deleteFramebuffer(f),f.name=0,tb[d]=null)}},P:function(a){if(a){var b=R[a];b?(Y.deleteProgram(b),b.name=0,R[a]=null,U[a]=null):V(1281)}},Q:function(a,b){for(var c=0;c<a;c++){var d=
F[b+4*c>>2],f=ub[d];f&&(Y.deleteRenderbuffer(f),f.name=0,ub[d]=null)}},r:function(a){if(a){var b=T[a];b?(Y.deleteShader(b),T[a]=null):V(1281)}},Ma:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],f=vb[d];f&&(Y.deleteTexture(f),f.name=0,vb[d]=null)}},La:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2];Y.deleteVertexArray(wb[d]);wb[d]=null}},u:function(a){Y.depthFunc(a)},t:function(a){Y.depthMask(!!a)},d:function(a){Y.disable(a)},N:function(a){Y.disableVertexAttribArray(a)},Za:function(a,b,
c){Y.drawArrays(a,b,c)},_a:function(a,b,c,d){Y.drawElements(a,b,c,d)},g:function(a){Y.enable(a)},eb:function(a){Y.enableVertexAttribArray(a)},I:function(a){Y.frontFace(a)},G:function(a,b){Db(a,b,"createBuffer",sb)},Fa:function(a,b){Db(a,b,"createRenderbuffer",ub)},Ba:function(a,b){Db(a,b,"createTexture",vb)},Ja:function(a,b){Db(a,b,"createVertexArray",wb)},na:function(a,b){return Y.getAttribLocation(R[a],E(b))},e:function(a,b){Eb(a,b)},ta:function(a,b,c,d){a=Y.getProgramInfoLog(R[a]);null===a&&(a=
"(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},A:function(a,b,c){if(c)if(a>=rb)V(1281);else{var d=U[a];if(d)if(35716==b)a=Y.getProgramInfoLog(R[a]),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1;else if(35719==b)F[c>>2]=d.lc;else if(35722==b){if(-1==d.ec){a=R[a];var f=Y.getProgramParameter(a,35721);for(b=d.ec=0;b<f;++b)d.ec=Math.max(d.ec,Y.getActiveAttrib(a,b).name.length+1)}F[c>>2]=d.ec}else if(35381==b){if(-1==d.fc)for(a=R[a],f=Y.getProgramParameter(a,35382),b=d.fc=0;b<f;++b)d.fc=
Math.max(d.fc,Y.getActiveUniformBlockName(a,b).length+1);F[c>>2]=d.fc}else F[c>>2]=Y.getProgramParameter(R[a],b);else V(1282)}else V(1281)},oa:function(a,b,c,d){a=Y.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},y:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),F[c>>2]=a?a.length+1:0):35720==b?(a=Y.getShaderSource(T[a]),F[c>>2]=a?a.length+1:0):F[c>>2]=Y.getShaderParameter(T[a],b):V(1281)},Pa:function(a){if(yb[a])return yb[a];
switch(a){case 7939:var b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Fb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||V(1280);b=Fb(b);break;case 7938:b=Y.getParameter(7938);b=2<=X.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Fb(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=
Fb(b);break;default:return V(1280),0}return yb[a]=b},Oa:function(a,b){if(2>X.version)return V(1282),0;var c=zb[a];if(c)return 0>b||b>=c.length?(V(1281),0):c[b];switch(a){case 7939:return c=Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Fb(d)}),c=zb[a]=c,0>b||b>=c.length?(V(1281),0):c[b];default:return V(1280),0}},k:function(a,b){b=E(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,
d)}return(a=U[a]&&U[a].yc[b])&&0<=c&&c<a[0]?a[1]+c:-1},ua:function(a){Y.linkProgram(R[a]);var b=R[a];a=U[a]={yc:{},lc:0,ec:-1,fc:-1};for(var c=a.yc,d=Y.getProgramParameter(b,35718),f=0;f<d;++f){var h=Y.getActiveUniform(b,f),g=h.name;a.lc=Math.max(a.lc,g.length+1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));var m=Y.getUniformLocation(b,g);if(m){var n=W(S);c[g]=[h.size,n];S[n]=m;for(var p=1;p<h.size;++p)m=Y.getUniformLocation(b,g+"["+p+"]"),n=W(S),S[n]=m}}},J:function(a,b){Y.polygonOffset(a,
b)},q:function(a){Y.readBuffer(a)},Ca:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},Da:function(a,b,c,d,f){Y.renderbufferStorageMultisample(a,b,c,d,f)},la:function(a,b,c,d){Y.scissor(a,b,c,d)},qa:function(a,b,c,d){for(var f="",h=0;h<b;++h){var g=d?F[d+4*h>>2]:-1;f+=E(F[c+4*h>>2],0>g?void 0:g)}Y.shaderSource(T[a],f)},Ia:function(a,b,c){Y.stencilFunc(a,b,c)},ia:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},s:function(a){Y.stencilMask(a)},Ha:function(a,b,c){Y.stencilOp(a,b,c)},ha:function(a,
b,c,d){Y.stencilOpSeparate(a,b,c,d)},za:function(a,b,c,d,f,h,g,m,n){if(2<=X.version)if(Y.dc)Y.texImage2D(a,b,c,d,f,h,g,m,n);else if(n){var p=Gb(m);Y.texImage2D(a,b,c,d,f,h,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else Y.texImage2D(a,b,c,d,f,h,g,m,null);else Y.texImage2D(a,b,c,d,f,h,g,m,n?Hb(m,g,d,f,n):null)},wa:function(a,b,c,d,f,h,g,m,n,p){if(Y.dc)Y.texImage3D(a,b,c,d,f,h,g,m,n,p);else if(p){var q=Gb(n);Y.texImage3D(a,b,c,d,f,h,g,m,n,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else Y.texImage3D(a,
b,c,d,f,h,g,m,n,null)},C:function(a,b,c){Y.texParameterf(a,b,c)},f:function(a,b,c){Y.texParameteri(a,b,c)},db:function(a,b,c){if(2<=X.version)Y.uniform1fv(S[a],G,c>>2,b);else{if(288>=b)for(var d=Z[b-1],f=0;f<b;++f)d[f]=G[c+4*f>>2];else d=G.subarray(c>>2,c+4*b>>2);Y.uniform1fv(S[a],d)}},z:function(a,b){Y.uniform1i(S[a],b)},cb:function(a,b,c){if(2<=X.version)Y.uniform2fv(S[a],G,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],f=0;f<2*b;f+=2)d[f]=G[c+4*f>>2],d[f+1]=G[c+(4*f+4)>>2];else d=G.subarray(c>>2,
c+8*b>>2);Y.uniform2fv(S[a],d)}},bb:function(a,b,c){if(2<=X.version)Y.uniform3fv(S[a],G,c>>2,3*b);else{if(96>=b)for(var d=Z[3*b-1],f=0;f<3*b;f+=3)d[f]=G[c+4*f>>2],d[f+1]=G[c+(4*f+4)>>2],d[f+2]=G[c+(4*f+8)>>2];else d=G.subarray(c>>2,c+12*b>>2);Y.uniform3fv(S[a],d)}},ab:function(a,b,c){if(2<=X.version)Y.uniform4fv(S[a],G,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],f=G;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=f[g];d[h+1]=f[g+1];d[h+2]=f[g+2];d[h+3]=f[g+3]}}else d=G.subarray(c>>2,c+16*b>>2);Y.uniform4fv(S[a],
d)}},$a:function(a,b,c,d){if(2<=X.version)Y.uniformMatrix4fv(S[a],!!c,G,d>>2,16*b);else{if(18>=b){var f=Z[16*b-1],h=G;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;f[g]=h[m];f[g+1]=h[m+1];f[g+2]=h[m+2];f[g+3]=h[m+3];f[g+4]=h[m+4];f[g+5]=h[m+5];f[g+6]=h[m+6];f[g+7]=h[m+7];f[g+8]=h[m+8];f[g+9]=h[m+9];f[g+10]=h[m+10];f[g+11]=h[m+11];f[g+12]=h[m+12];f[g+13]=h[m+13];f[g+14]=h[m+14];f[g+15]=h[m+15]}}else f=G.subarray(d>>2,d+64*b>>2);Y.uniformMatrix4fv(S[a],!!c,f)}},l:function(a){Y.useProgram(R[a])},fb:function(a,
b){Y.vertexAttribDivisor(a,b)},gb:function(a,b,c,d,f,h){Y.vertexAttribPointer(a,b,c,!!d,f,h)},ma:function(a,b,c,d){Y.viewport(a,b,c,d)},Va:function(){e.sc=function(a){0!=Kb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.sc)},Ua:function(){e.xc=function(a){a=a.clipboardData.getData("text");na("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",e.xc)},Ta:function(a){e.Qc=[];a=E(a);a=document.getElementById(a);e.tc=function(b){b.stopPropagation();
b.preventDefault()};e.uc=function(b){b.stopPropagation();b.preventDefault()};e.vc=function(b){b.stopPropagation();b.preventDefault()};e.wc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;e.Rc=c;Lb(c.length);var d;for(d=0;d<c.length;d++)na("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Mb(b.clientX,b.clientY)};a.addEventListener("dragenter",e.tc,!1);a.addEventListener("dragleave",e.uc,!1);a.addEventListener("dragover",e.vc,!1);a.addEventListener("drop",e.wc,!1)},
o:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Nb()});document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},jb:function(a){a=E(a);e.hc=document.getElementById(a);e.hc||console.log("sokol_app.h: invalid target:"+a);e.hc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Sa:function(){window.removeEventListener("beforeunload",
e.sc)},Ra:function(){window.removeEventListener("paste",e.xc)},Qa:function(a){a=E(a);a=document.getElementById(a);a.removeEventListener("dragenter",e.tc);a.removeEventListener("dragleave",e.uc);a.removeEventListener("dragover",e.vc);a.removeEventListener("drop",e.wc)},v:function(){e.hc&&e.hc.requestPointerLock&&e.hc.requestPointerLock()},m:function(){document.getElementById("_sokol_app_input_element").blur()}};
(function(){function a(f){e.asm=f.exports;ka=e.asm.kb;ya();I=e.asm.Zb;J--;e.monitorRunDependencies&&e.monitorRunDependencies(J);0==J&&(null!==Ga&&(clearInterval(Ga),Ga=null),K&&(f=K,K=null,f()))}function b(f){a(f.instance)}function c(f){return La().then(function(h){return WebAssembly.instantiate(h,d)}).then(f,function(h){y("failed to asynchronously prepare wasm: "+h);x(h)})}var d={a:Ob};J++;e.monitorRunDependencies&&e.monitorRunDependencies(J);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return y("Module.instantiateWasm callback failed with error: "+
f),!1}(function(){return z||"function"!==typeof WebAssembly.instantiateStreaming||Ia()||Ha("file://")||"function"!==typeof fetch?c(b):fetch(L,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(h){y("wasm streaming compile failed: "+h);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var Ea=e.___wasm_call_ctors=function(){return(Ea=e.___wasm_call_ctors=e.asm.lb).apply(null,arguments)},Nb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Nb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.mb).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.nb).apply(null,arguments)};
var Kb=e.__sapp_html5_get_ask_leave_site=function(){return(Kb=e.__sapp_html5_get_ask_leave_site=e.asm.ob).apply(null,arguments)},Lb=e.__sapp_emsc_begin_drop=function(){return(Lb=e.__sapp_emsc_begin_drop=e.asm.pb).apply(null,arguments)};e.__sapp_emsc_drop=function(){return(e.__sapp_emsc_drop=e.asm.qb).apply(null,arguments)};var Mb=e.__sapp_emsc_end_drop=function(){return(Mb=e.__sapp_emsc_end_drop=e.asm.rb).apply(null,arguments)};
e.__sapp_emsc_invoke_fetch_cb=function(){return(e.__sapp_emsc_invoke_fetch_cb=e.asm.sb).apply(null,arguments)};e.___em_js__sapp_js_create_textfield=function(){return(e.___em_js__sapp_js_create_textfield=e.asm.tb).apply(null,arguments)};e.___em_js__sapp_js_focus_textfield=function(){return(e.___em_js__sapp_js_focus_textfield=e.asm.ub).apply(null,arguments)};e.___em_js__sapp_js_unfocus_textfield=function(){return(e.___em_js__sapp_js_unfocus_textfield=e.asm.vb).apply(null,arguments)};
e.___em_js__sapp_js_add_beforeunload_listener=function(){return(e.___em_js__sapp_js_add_beforeunload_listener=e.asm.wb).apply(null,arguments)};e.___em_js__sapp_js_remove_beforeunload_listener=function(){return(e.___em_js__sapp_js_remove_beforeunload_listener=e.asm.xb).apply(null,arguments)};e.___em_js__sapp_js_add_clipboard_listener=function(){return(e.___em_js__sapp_js_add_clipboard_listener=e.asm.yb).apply(null,arguments)};
e.___em_js__sapp_js_remove_clipboard_listener=function(){return(e.___em_js__sapp_js_remove_clipboard_listener=e.asm.zb).apply(null,arguments)};e.___em_js__sapp_js_write_clipboard=function(){return(e.___em_js__sapp_js_write_clipboard=e.asm.Ab).apply(null,arguments)};e.___em_js__sapp_js_add_dragndrop_listeners=function(){return(e.___em_js__sapp_js_add_dragndrop_listeners=e.asm.Bb).apply(null,arguments)};
e.___em_js__sapp_js_dropped_file_size=function(){return(e.___em_js__sapp_js_dropped_file_size=e.asm.Cb).apply(null,arguments)};e.___em_js__sapp_js_fetch_dropped_file=function(){return(e.___em_js__sapp_js_fetch_dropped_file=e.asm.Db).apply(null,arguments)};e.___em_js__sapp_js_remove_dragndrop_listeners=function(){return(e.___em_js__sapp_js_remove_dragndrop_listeners=e.asm.Eb).apply(null,arguments)};
e.___em_js__sapp_js_pointer_init=function(){return(e.___em_js__sapp_js_pointer_init=e.asm.Fb).apply(null,arguments)};e.___em_js__sapp_js_request_pointerlock=function(){return(e.___em_js__sapp_js_request_pointerlock=e.asm.Gb).apply(null,arguments)};e.___em_js__sapp_js_exit_pointerlock=function(){return(e.___em_js__sapp_js_exit_pointerlock=e.asm.Hb).apply(null,arguments)};e._main=function(){return(e._main=e.asm.Ib).apply(null,arguments)};
e.___em_js__stm_js_perfnow=function(){return(e.___em_js__stm_js_perfnow=e.asm.Jb).apply(null,arguments)};e.__saudio_emsc_pull=function(){return(e.__saudio_emsc_pull=e.asm.Kb).apply(null,arguments)};e.___em_js__saudio_js_init=function(){return(e.___em_js__saudio_js_init=e.asm.Lb).apply(null,arguments)};e.___em_js__saudio_js_shutdown=function(){return(e.___em_js__saudio_js_shutdown=e.asm.Mb).apply(null,arguments)};
e.___em_js__saudio_js_sample_rate=function(){return(e.___em_js__saudio_js_sample_rate=e.asm.Nb).apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return(e.___em_js__saudio_js_buffer_frames=e.asm.Ob).apply(null,arguments)};e.___em_js__sfetch_js_send_head_request=function(){return(e.___em_js__sfetch_js_send_head_request=e.asm.Pb).apply(null,arguments)};e.___em_js__sfetch_js_send_get_request=function(){return(e.___em_js__sfetch_js_send_get_request=e.asm.Qb).apply(null,arguments)};
e.__sfetch_emsc_head_response=function(){return(e.__sfetch_emsc_head_response=e.asm.Rb).apply(null,arguments)};e.__sfetch_emsc_get_response=function(){return(e.__sfetch_emsc_get_response=e.asm.Sb).apply(null,arguments)};e.__sfetch_emsc_failed_http_status=function(){return(e.__sfetch_emsc_failed_http_status=e.asm.Tb).apply(null,arguments)};e.__sfetch_emsc_failed_buffer_too_small=function(){return(e.__sfetch_emsc_failed_buffer_too_small=e.asm.Ub).apply(null,arguments)};
var P=e._malloc=function(){return(P=e._malloc=e.asm.Vb).apply(null,arguments)},pa=e.stackSave=function(){return(pa=e.stackSave=e.asm.Wb).apply(null,arguments)},qa=e.stackRestore=function(){return(qa=e.stackRestore=e.asm.Xb).apply(null,arguments)},A=e.stackAlloc=function(){return(A=e.stackAlloc=e.asm.Yb).apply(null,arguments)},Pb;function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}K=function Qb(){Pb||Rb();Pb||(K=Qb)};
function Rb(a){function b(){if(!Pb&&(Pb=!0,e.calledRun=!0,!la)){Ma(Aa);Ma(Ba);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Sb){var c=a,d=e._main;c=c||[];var f=c.length+1,h=A(4*(f+1));F[h>>2]=ta(aa);for(var g=1;g<f;g++)F[(h>>2)+g]=ta(c[g-1]);F[(h>>2)+f]=0;try{var m=d(f,h);if(!noExitRuntime||0!==m){if(!noExitRuntime){if(e.onExit)e.onExit(m);la=!0}t(m,new ja(m))}}catch(n){n instanceof ja||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),y("exception thrown: "+
c),t(1,n)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Da.unshift(c);Ma(Da)}}a=a||r;if(!(0<J)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Fa();Ma(za);0<J||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Rb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();
var Sb=!0;e.noInitialRun&&(Sb=!1);noExitRuntime=!0;Rb();
