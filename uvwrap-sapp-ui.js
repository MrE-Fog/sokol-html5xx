
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in e)e.hasOwnProperty(l)&&(k[l]=e[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,w,fa,ha;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},w=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",
x),t=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ja=e.print||console.log.bind(console),y=e.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(e[l]=k[l]);k=null;e.arguments&&(r=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var z;e.wasmBinary&&(z=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&x("no native wasm support detected");var B,ka=new WebAssembly.Table({initial:92,maximum:92,element:"anyfunc"}),la=!1;
function assert(a,b){a||x("Assertion failed: "+b)}function ma(){var a=e.__sapp_emsc_onpaste;assert(a,"Cannot call unknown function _sapp_emsc_onpaste, make sure it is exported");return a}
function na(a){var b=["string"],c={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=C(q);D(n,E,p,q)}return p},array:function(n){var p=C(n.length);oa.set(n,p);return p}},d=ma(),f=[],g=0;if(a)for(var h=0;h<a.length;h++){var m=c[b[h]];m?(0===g&&(g=pa()),f[h]=m(a[h])):f[h]=a[h]}d.apply(null,f);0!==g&&qa(g)}var ra="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function sa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&ra)return ra.decode(a.subarray(b,c));for(d="";b<c;){var f=a[b++];if(f&128){var g=a[b++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|g);else{var h=a[b++]&63;f=224==(f&240)?(f&15)<<12|g<<6|h:(f&7)<<18|g<<12|h<<6|a[b++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}return d}function F(a,b){return a?sa(E,a,b):""}
function D(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var g=0;g<a.length;++g){var h=a.charCodeAt(g);if(55296<=h&&57343>=h){var m=a.charCodeAt(++g);h=65536+((h&1023)<<10)|m&1023}if(127>=h){if(c>=d)break;b[c++]=h}else{if(2047>=h){if(c+1>=d)break;b[c++]=192|h>>6}else{if(65535>=h){if(c+2>=d)break;b[c++]=224|h>>12}else{if(c+3>=d)break;b[c++]=240|h>>18;b[c++]=128|h>>12&63}b[c++]=128|h>>6&63}b[c++]=128|h&63}}b[c]=0;return c-f}
function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ua(a){var b=ta(a)+1,c=C(b);D(a,oa,c,b);return c}var G,oa,E,va,wa,H,xa,I,J;
function ya(a){G=a;e.HEAP8=oa=new Int8Array(a);e.HEAP16=va=new Int16Array(a);e.HEAP32=H=new Int32Array(a);e.HEAPU8=E=new Uint8Array(a);e.HEAPU16=wa=new Uint16Array(a);e.HEAPU32=xa=new Uint32Array(a);e.HEAPF32=I=new Float32Array(a);e.HEAPF64=J=new Float64Array(a)}var za=e.INITIAL_MEMORY||33554432;e.wasmMemory?B=e.wasmMemory:B=new WebAssembly.Memory({initial:za/65536,maximum:32768});B&&(G=B.buffer);za=G.byteLength;ya(G);H[392260]=6812080;
function Aa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.wc;"number"===typeof c?void 0===b.jc?e.dynCall_v(c):e.dynCall_vi(c,b.jc):c(void 0===b.jc?null:b.jc)}}}var Ba=[],Ca=[],Da=[],Ea=[],Fa=[];function Ga(){var a=e.preRun.shift();Ba.unshift(a)}var K=0,Ha=null,L=null;e.preloadedImages={};e.preloadedAudios={};function x(a){if(e.onAbort)e.onAbort(a);y(a);la=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Ia(a){var b=M;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ja(){return Ia("data:application/octet-stream;base64,")}var M="uvwrap-sapp-ui.wasm";if(!Ja()){var Ka=M;M=e.locateFile?e.locateFile(Ka,v):v+Ka}function La(){try{if(z)return new Uint8Array(z);if(w)return w(M);throw"both async and sync fetching of the wasm failed";}catch(a){x(a)}}
function Ma(){return z||!ba&&!u||"function"!==typeof fetch||Ia("file://")?new Promise(function(a){a(La())}):fetch(M,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+M+"'";return a.arrayBuffer()}).catch(function(){return La()})}Ca.push({wc:function(){Na()}});var Oa=[null,[],[]],Pa={},Qa=0;function Ra(){for(var a=N.length-1;0<=a;--a)Sa(a);N=[];Ta=[]}var Ta=[];
function Ua(){if(Qa&&Va.hc)for(var a=0;a<Ta.length;++a){var b=Ta[a];Ta.splice(a,1);--a;b.Lc.apply(null,b.Bc)}}var N=[];function Sa(a){var b=N[a];b.target.removeEventListener(b.$b,b.uc,b.ac);N.splice(a,1)}function O(a){function b(d){++Qa;Va=a;Ua();a.cc(d);Ua();--Qa}if(a.bc)a.uc=b,a.target.addEventListener(a.$b,b,a.ac),N.push(a),Wa||(Ea.push(Ra),Wa=!0);else for(var c=0;c<N.length;++c)N[c].target==a.target&&N[c].$b==a.$b&&Sa(c--)}
var Wa,Va,Xa,Ya,Za,$a,ab,bb,cb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function P(a){a=2<a?F(a):a;return cb[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function db(a){return 0>cb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function eb(a,b,c,d,f,g){Xa||(Xa=Q(164));a={target:P(a),hc:!0,$b:g,bc:d,cc:function(h){var m=Xa,n=m>>2;H[n]=h.location;H[n+1]=h.ctrlKey;H[n+2]=h.shiftKey;H[n+3]=h.altKey;H[n+4]=h.metaKey;H[n+5]=h.repeat;H[n+6]=h.charCode;H[n+7]=h.keyCode;H[n+8]=h.which;D(h.key||"",E,m+36,32);D(h.code||"",E,m+68,32);D(h.char||"",E,m+100,32);D(h.locale||"",E,m+132,32);R(d,f,m,b)&&h.preventDefault()},ac:c};O(a)}
function fb(a,b,c){a>>=2;H[a]=b.screenX;H[a+1]=b.screenY;H[a+2]=b.clientX;H[a+3]=b.clientY;H[a+4]=b.ctrlKey;H[a+5]=b.shiftKey;H[a+6]=b.altKey;H[a+7]=b.metaKey;va[2*a+16]=b.button;va[2*a+17]=b.buttons;H[a+9]=b.movementX;H[a+10]=b.movementY;c=db(c);H[a+11]=b.clientX-c.left;H[a+12]=b.clientY-c.top}function gb(a,b,c,d,f,g){Ya||(Ya=Q(64));a=P(a);O({target:a,hc:"mousemove"!=g&&"mouseenter"!=g&&"mouseleave"!=g,$b:g,bc:d,cc:function(h){h=h||event;fb(Ya,h,a);R(d,f,Ya,b)&&h.preventDefault()},ac:c})}
function hb(a,b,c,d,f){Za||(Za=Q(260));O({target:a,$b:f,bc:d,cc:function(g){g=g||event;var h=Za,m=document.pointerLockElement||document.lc||document.nc||document.mc;H[h>>2]=!!m;var n=m&&m.id?m.id:"";D(m?m==window?"#window":m==screen?"#screen":m&&m.nodeName?m.nodeName:"":"",E,h+4,128);D(n,E,h+132,128);R(d,20,h,b)&&g.preventDefault()},ac:c})}function ib(a,b,c,d,f){O({target:a,$b:f,bc:d,cc:function(g){g=g||event;R(d,38,0,b)&&g.preventDefault()},ac:c})}
function jb(a,b,c,d){$a||($a=Q(36));a=P(a);O({target:a,$b:"resize",bc:d,cc:function(f){f=f||event;if(f.target==a){var g=$a,h=document.body;H[g>>2]=f.detail;H[g+4>>2]=h.clientWidth;H[g+8>>2]=h.clientHeight;H[g+12>>2]=innerWidth;H[g+16>>2]=innerHeight;H[g+20>>2]=outerWidth;H[g+24>>2]=outerHeight;H[g+28>>2]=pageXOffset;H[g+32>>2]=pageYOffset;R(d,10,g,b)&&f.preventDefault()}},ac:c})}
function kb(a,b,c,d,f,g){ab||(ab=Q(1684));a=P(a);O({target:a,hc:"touchstart"==g||"touchend"==g,$b:g,bc:d,cc:function(h){for(var m={},n=h.touches,p=0;p<n.length;++p){var q=n[p];m[q.identifier]=q}n=h.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.yc=1,m[q.identifier]=q;n=h.targetTouches;for(p=0;p<n.length;++p)m[n[p].identifier].zc=1;n=ab;q=n>>2;H[q+1]=h.ctrlKey;H[q+2]=h.shiftKey;H[q+3]=h.altKey;H[q+4]=h.metaKey;q+=5;var ob=db(a),pb=0;for(p in m){var A=m[p];H[q]=A.identifier;H[q+1]=A.screenX;H[q+2]=
A.screenY;H[q+3]=A.clientX;H[q+4]=A.clientY;H[q+5]=A.pageX;H[q+6]=A.pageY;H[q+7]=A.yc;H[q+8]=A.zc;H[q+9]=A.clientX-ob.left;H[q+10]=A.clientY-ob.top;q+=13;if(31<++pb)break}H[n>>2]=pb;R(d,f,n,b)&&h.preventDefault()},ac:c})}function lb(a,b,c,d,f,g){a={target:P(a),$b:g,bc:d,cc:function(h){h=h||event;R(d,f,0,b)&&h.preventDefault()},ac:c};O(a)}
function mb(a,b,c,d){bb||(bb=Q(96));O({target:a,hc:!0,$b:"wheel",bc:d,cc:function(f){f=f||event;var g=bb;fb(g,f,a);J[g+64>>3]=f.deltaX;J[g+72>>3]=f.deltaY;J[g+80>>3]=f.deltaZ;H[g+88>>2]=f.deltaMode;R(d,9,g,b)&&f.preventDefault()},ac:c})}
function nb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,g){b.drawArraysInstancedANGLE(c,d,f,g)},a.drawElementsInstanced=function(c,d,f,g,h){b.drawElementsInstancedANGLE(c,d,f,g,h)})}
function qb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function rb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function sb(a){a.Dc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}var tb=1,ub=[],S=[],vb=[],wb=[],xb=[],T=[],U=[],yb=[],zb=[],Ab={},Bb={},Cb={};function V(a){Db||(Db=a)}function W(a){for(var b=tb++,c=a.length;c<b;c++)a[c]=null;return b}
function Eb(a){a||(a=X);if(!a.xc){a.xc=!0;var b=a.ic;nb(b);qb(b);rb(b);sb(b);b.Ec=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");(b.getSupportedExtensions()||
[]).forEach(function(d){-1!=c.indexOf(d)&&b.getExtension(d)})}}var Db,X,Fb=["default","low-power","high-performance"];function Gb(a,b,c,d){for(var f=0;f<a;f++){var g=Y[c](),h=g&&W(d);g?(g.name=h,d[h]=g):V(1282);H[b+4*f>>2]=h}}
function Hb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>X.version){V(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>X.version){V(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)H[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){V(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:V(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}H[b>>2]=c}else V(1281)}
function Ib(a){var b=ta(a)+1,c=Q(b);D(a,E,c,b);return c}function Jb(a){a-=5120;return 0==a?oa:1==a?E:2==a?va:4==a?H:6==a?I:5==a||28922==a||28520==a||30779==a||30782==a?xa:wa}function Kb(a,b,c,d,f){a=Jb(a);var g=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(f>>g,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<g)+4-1&-4)>>g)}for(var Z=[],Y,Lb=new Float32Array(288),Mb=0;288>Mb;++Mb)Z[Mb]=Lb.subarray(0,Mb+1);
var Qb={la:function(){return 0},db:function(){return 0},eb:function(){},_sapp_emsc_exit_pointerlock:function(){document.exitPointerLock&&document.exitPointerLock()},A:function(a){a=F(a);var b=document.getElementById(a);b?b.requestPointerLock?b.requestPointerLock():console.log("sokol_app.h: target doesn't doesn't support pointer lock:"+a):console.log("sokol_app.h: invalid target:"+a)},ca:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ta:function(a,b,c){a=P(a);if(!a)return-4;
a=db(a);J[b>>3]=a.width;J[c>>3]=a.height;return 0},ab:function(a,b,c){E.copyWithin(a,b,b+c)},Ra:function(a,b){function c(d){Nb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},bb:function(a){a>>>=0;var b=E.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{B.grow(Math.min(2147483648,d)-G.byteLength+65535>>>16);ya(B.buffer);var f=1;break a}catch(g){}f=void 0}if(f)return!0}return!1},
X:function(a,b,c){a=P(a);if(!a)return-4;a.width=b;a.height=c;return 0},ha:function(a,b,c,d){eb(a,b,c,d,2,"keydown");return 0},fa:function(a,b,c,d){eb(a,b,c,d,1,"keypress");return 0},ga:function(a,b,c,d){eb(a,b,c,d,3,"keyup");return 0},D:function(a,b,c,d){gb(a,b,c,d,5,"mousedown");return 0},ka:function(a,b,c,d){gb(a,b,c,d,33,"mouseenter");return 0},ja:function(a,b,c,d){gb(a,b,c,d,34,"mouseleave");return 0},pa:function(a,b,c,d){gb(a,b,c,d,8,"mousemove");return 0},sa:function(a,b,c,d){gb(a,b,c,d,6,"mouseup");
return 0},$:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.lc||document.body.nc||document.body.mc))return-1;a=P(a);if(!a)return-4;hb(a,b,c,d,"pointerlockchange");hb(a,b,c,d,"mozpointerlockchange");hb(a,b,c,d,"webkitpointerlockchange");hb(a,b,c,d,"mspointerlockchange");return 0},_:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.lc||document.body.nc||document.body.mc))return-1;a=P(a);if(!a)return-4;ib(a,b,c,d,"pointerlockerror");
ib(a,b,c,d,"mozpointerlockerror");ib(a,b,c,d,"webkitpointerlockerror");ib(a,b,c,d,"mspointerlockerror");return 0},pb:function(a,b,c,d){jb(a,b,c,d);return 0},aa:function(a,b,c,d){kb(a,b,c,d,25,"touchcancel");return 0},ba:function(a,b,c,d){kb(a,b,c,d,23,"touchend");return 0},da:function(a,b,c,d){kb(a,b,c,d,24,"touchmove");return 0},ea:function(a,b,c,d){kb(a,b,c,d,22,"touchstart");return 0},Z:function(a,b,c,d){lb(a,b,c,d,31,"webglcontextlost");return 0},Y:function(a,b,c,d){lb(a,b,c,d,32,"webglcontextrestored");
return 0},ia:function(a,b,c,d){a=P(a);return"undefined"!==typeof a.onwheel?(mb(a,b,c,d),0):-1},N:function(a,b){var c={};b>>=2;c.alpha=!!H[b];c.depth=!!H[b+1];c.stencil=!!H[b+2];c.antialias=!!H[b+3];c.premultipliedAlpha=!!H[b+4];c.preserveDrawingBuffer=!!H[b+5];c.powerPreference=Fb[H[b+6]];c.failIfMajorPerformanceCaveat=!!H[b+7];c.qc=H[b+8];c.Ic=H[b+9];c.pc=H[b+10];c.vc=H[b+11];c.Jc=H[b+12];c.Kc=H[b+13];if(a=P(a))if(c.vc)c=-1;else if(a=1<c.qc?a.getContext("webgl2",c):a.getContext("webgl",c)){b=W(zb);
var d={Hc:b,attributes:c,version:c.qc,ic:a};a.canvas&&(a.canvas.Ac=d);zb[b]=d;("undefined"===typeof c.pc||c.pc)&&Eb(d);c=b}else c=0;else c=-4;return c},Da:function(a,b){a=zb[a];b=F(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&nb(Y);"OES_vertex_array_object"==b&&qb(Y);"WEBGL_draw_buffers"==b&&rb(Y);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&sb(Y);return!!a.ic.getExtension(b)},Oa:function(a){a>>=2;for(var b=0;14>b;++b)H[a+b]=0;H[a]=H[a+1]=H[a+3]=H[a+4]=H[a+8]=H[a+10]=
1},Ka:function(a){X=zb[a];e.Cc=Y=X&&X.ic;return!a||Y?0:-5},na:function(){return 0},cb:function(a,b,c,d){a=Pa.Gc(a);b=Pa.Fc(a,b,c);H[d>>2]=b;return 0},$a:function(){},ma:function(a,b,c,d){for(var f=0,g=0;g<c;g++){for(var h=H[b+8*g>>2],m=H[b+(8*g+4)>>2],n=0;n<m;n++){var p=E[h+n],q=Oa[a];0===p||10===p?((1===a?ja:y)(sa(q,0)),q.length=0):q.push(p)}f+=m}H[d>>2]=f;return 0},i:function(a){Y.activeTexture(a)},H:function(a,b){Y.attachShader(S[a],U[b])},b:function(a,b){35051==a?Y.oc=b:35052==a&&(Y.dc=b);Y.bindBuffer(a,
ub[b])},g:function(a,b){Y.bindFramebuffer(a,vb[b])},K:function(a,b){Y.bindRenderbuffer(a,wb[b])},a:function(a,b){Y.bindTexture(a,xb[b])},W:function(a){Y.bindVertexArray(yb[a])},S:function(a,b,c,d){Y.blendColor(a,b,c,d)},T:function(a,b){Y.blendEquationSeparate(a,b)},U:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},s:function(a,b,c,d,f,g,h,m,n,p){Y.blitFramebuffer(a,b,c,d,f,g,h,m,n,p)},M:function(a,b,c,d){2<=X.version?c?Y.bufferData(a,E,d,c,b):Y.bufferData(a,b,d):Y.bufferData(a,c?E.subarray(c,c+b):
b,d)},o:function(a,b,c,d){2<=X.version?Y.bufferSubData(a,b,E,d,c):Y.bufferSubData(a,b,E.subarray(d,d+c))},ua:function(a){Y.clear(a)},xa:function(a,b,c,d){Y.clearColor(a,b,c,d)},wa:function(a){Y.clearDepth(a)},va:function(a){Y.clearStencil(a)},w:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},Aa:function(a){Y.compileShader(U[a])},La:function(a,b,c,d,f,g,h,m){2<=X.version?Y.dc?Y.compressedTexImage2D(a,b,c,d,f,g,h,m):Y.compressedTexImage2D(a,b,c,d,f,g,E,m,h):Y.compressedTexImage2D(a,b,c,d,f,g,m?E.subarray(m,
m+h):null)},Ia:function(a,b,c,d,f,g,h,m,n){Y.dc?Y.compressedTexImage3D(a,b,c,d,f,g,h,m,n):Y.compressedTexImage3D(a,b,c,d,f,g,h,E,n,m)},Ga:function(){var a=W(S),b=Y.createProgram();b.name=a;S[a]=b;return a},Ca:function(a){var b=W(U);U[b]=Y.createShader(a);return b},P:function(a){Y.cullFace(a)},C:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=ub[d];f&&(Y.deleteBuffer(f),f.name=0,ub[d]=null,d==Y.oc&&(Y.oc=0),d==Y.dc&&(Y.dc=0))}},h:function(a,b){for(var c=0;c<a;++c){var d=H[b+4*c>>2],f=vb[d];
f&&(Y.deleteFramebuffer(f),f.name=0,vb[d]=null)}},u:function(a){if(a){var b=S[a];b?(Y.deleteProgram(b),b.name=0,S[a]=null,Ab[a]=null):V(1281)}},m:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=wb[d];f&&(Y.deleteRenderbuffer(f),f.name=0,wb[d]=null)}},v:function(a){if(a){var b=U[a];b?(Y.deleteShader(b),U[a]=null):V(1281)}},B:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=xb[d];f&&(Y.deleteTexture(f),f.name=0,xb[d]=null)}},Ta:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2];Y.deleteVertexArray(yb[d]);
yb[d]=null}},z:function(a){Y.depthFunc(a)},y:function(a){Y.depthMask(!!a)},c:function(a){Y.disable(a)},V:function(a){Y.disableVertexAttribArray(a)},fb:function(a,b,c){Y.drawArrays(a,b,c)},gb:function(a,b,c,d){Y.drawElements(a,b,c,d)},f:function(a){Y.enable(a)},mb:function(a){Y.enableVertexAttribArray(a)},Q:function(a){Y.frontFace(a)},O:function(a,b){Gb(a,b,"createBuffer",ub)},L:function(a,b){Gb(a,b,"createRenderbuffer",wb)},Ma:function(a,b){Gb(a,b,"createTexture",xb)},Sa:function(a,b){Gb(a,b,"createVertexArray",
yb)},ya:function(a,b){return Y.getAttribLocation(S[a],F(b))},d:function(a,b){Hb(a,b)},Ea:function(a,b,c,d){a=Y.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(H[c>>2]=b)},G:function(a,b,c){if(c)if(a>=tb)V(1281);else{var d=Ab[a];if(d)if(35716==b)a=Y.getProgramInfoLog(S[a]),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1;else if(35719==b)H[c>>2]=d.kc;else if(35722==b){if(-1==d.ec){a=S[a];var f=Y.getProgramParameter(a,35721);for(b=d.ec=0;b<f;++b)d.ec=Math.max(d.ec,
Y.getActiveAttrib(a,b).name.length+1)}H[c>>2]=d.ec}else if(35381==b){if(-1==d.fc)for(a=S[a],f=Y.getProgramParameter(a,35382),b=d.fc=0;b<f;++b)d.fc=Math.max(d.fc,Y.getActiveUniformBlockName(a,b).length+1);H[c>>2]=d.fc}else H[c>>2]=Y.getProgramParameter(S[a],b);else V(1282)}else V(1281)},za:function(a,b,c,d){a=Y.getShaderInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(H[c>>2]=b)},E:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(U[a]),null===a&&(a="(unknown error)"),H[c>>2]=
a.length+1):35720==b?(a=Y.getShaderSource(U[a]),H[c>>2]=null===a||0==a.length?0:a.length+1):H[c>>2]=Y.getShaderParameter(U[a],b):V(1281)},Va:function(a){if(Bb[a])return Bb[a];switch(a){case 7939:var b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Ib(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||V(1280);b=Ib(b);break;case 7938:b=Y.getParameter(7938);b=2<=X.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Ib(b);break;case 35724:b=
Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Ib(b);break;default:return V(1280),0}return Bb[a]=b},Ua:function(a,b){if(2>X.version)return V(1282),0;var c=Cb[a];if(c)return 0>b||b>=c.length?(V(1281),0):c[b];switch(a){case 7939:return c=Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Ib(d)}),c=Cb[a]=c,0>b||b>=c.length?(V(1281),
0):c[b];default:return V(1280),0}},n:function(a,b){b=F(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=Ab[a]&&Ab[a].tc[b])&&0<=c&&c<a[0]?a[1]+c:-1},Fa:function(a){Y.linkProgram(S[a]);var b=S[a];a=Ab[a]={tc:{},kc:0,ec:-1,fc:-1};for(var c=a.tc,d=Y.getProgramParameter(b,35718),f=0;f<d;++f){var g=Y.getActiveUniform(b,f),h=g.name;a.kc=Math.max(a.kc,h.length+1);"]"==h.slice(-1)&&(h=h.slice(0,h.lastIndexOf("[")));var m=Y.getUniformLocation(b,
h);if(m){var n=W(T);c[h]=[g.size,n];T[n]=m;for(var p=1;p<g.size;++p)m=Y.getUniformLocation(b,h+"["+p+"]"),n=W(T),T[n]=m}}},R:function(a,b){Y.polygonOffset(a,b)},t:function(a){Y.readBuffer(a)},Na:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},J:function(a,b,c,d,f){Y.renderbufferStorageMultisample(a,b,c,d,f)},k:function(a,b,c,d){Y.scissor(a,b,c,d)},Ba:function(a,b,c,d){for(var f="",g=0;g<b;++g){var h=d?H[d+4*g>>2]:-1;f+=F(H[c+4*g>>2],0>h?void 0:h)}Y.shaderSource(U[a],f)},Qa:function(a,b,c){Y.stencilFunc(a,
b,c)},ra:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},x:function(a){Y.stencilMask(a)},Pa:function(a,b,c){Y.stencilOp(a,b,c)},qa:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},Ja:function(a,b,c,d,f,g,h,m,n){if(2<=X.version)if(Y.dc)Y.texImage2D(a,b,c,d,f,g,h,m,n);else if(n){var p=Jb(m);Y.texImage2D(a,b,c,d,f,g,h,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else Y.texImage2D(a,b,c,d,f,g,h,m,null);else Y.texImage2D(a,b,c,d,f,g,h,m,n?Kb(m,h,d,f,n):null)},Ha:function(a,b,c,d,f,g,h,m,n,p){if(Y.dc)Y.texImage3D(a,
b,c,d,f,g,h,m,n,p);else if(p){var q=Jb(n);Y.texImage3D(a,b,c,d,f,g,h,m,n,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else Y.texImage3D(a,b,c,d,f,g,h,m,n,null)},I:function(a,b,c){Y.texParameterf(a,b,c)},e:function(a,b,c){Y.texParameteri(a,b,c)},lb:function(a,b,c){if(2<=X.version)Y.uniform1fv(T[a],I,c>>2,b);else{if(288>=b)for(var d=Z[b-1],f=0;f<b;++f)d[f]=I[c+4*f>>2];else d=I.subarray(c>>2,c+4*b>>2);Y.uniform1fv(T[a],d)}},F:function(a,b){Y.uniform1i(T[a],b)},kb:function(a,b,c){if(2<=X.version)Y.uniform2fv(T[a],
I,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],f=0;f<2*b;f+=2)d[f]=I[c+4*f>>2],d[f+1]=I[c+(4*f+4)>>2];else d=I.subarray(c>>2,c+8*b>>2);Y.uniform2fv(T[a],d)}},jb:function(a,b,c){if(2<=X.version)Y.uniform3fv(T[a],I,c>>2,3*b);else{if(96>=b)for(var d=Z[3*b-1],f=0;f<3*b;f+=3)d[f]=I[c+4*f>>2],d[f+1]=I[c+(4*f+4)>>2],d[f+2]=I[c+(4*f+8)>>2];else d=I.subarray(c>>2,c+12*b>>2);Y.uniform3fv(T[a],d)}},ib:function(a,b,c){if(2<=X.version)Y.uniform4fv(T[a],I,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],f=I;c>>=2;for(var g=
0;g<4*b;g+=4){var h=c+g;d[g]=f[h];d[g+1]=f[h+1];d[g+2]=f[h+2];d[g+3]=f[h+3]}}else d=I.subarray(c>>2,c+16*b>>2);Y.uniform4fv(T[a],d)}},hb:function(a,b,c,d){if(2<=X.version)Y.uniformMatrix4fv(T[a],!!c,I,d>>2,16*b);else{if(18>=b){var f=Z[16*b-1],g=I;d>>=2;for(var h=0;h<16*b;h+=16){var m=d+h;f[h]=g[m];f[h+1]=g[m+1];f[h+2]=g[m+2];f[h+3]=g[m+3];f[h+4]=g[m+4];f[h+5]=g[m+5];f[h+6]=g[m+6];f[h+7]=g[m+7];f[h+8]=g[m+8];f[h+9]=g[m+9];f[h+10]=g[m+10];f[h+11]=g[m+11];f[h+12]=g[m+12];f[h+13]=g[m+13];f[h+14]=g[m+
14];f[h+15]=g[m+15]}}else f=I.subarray(d>>2,d+64*b>>2);Y.uniformMatrix4fv(T[a],!!c,f)}},j:function(a){Y.useProgram(S[a])},nb:function(a,b){Y.vertexAttribDivisor(a,b)},ob:function(a,b,c,d,f,g){Y.vertexAttribPointer(a,b,c,!!d,f,g)},l:function(a,b,c,d){Y.viewport(a,b,c,d)},memory:B,_a:function(){e.rc=function(a){0!=Ob()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.rc)},Za:function(){e.sc=function(a){a=a.clipboardData.getData("text");na([a])};window.addEventListener("paste",
e.sc)},r:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Pb()});document.body.append(a)},q:function(){document.getElementById("_sokol_app_input_element").focus()},p:function(){document.getElementById("_sokol_app_input_element").blur()},Wa:function(a){a=F(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize",
"off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},Ya:function(){window.removeEventListener("beforeunload",e.rc)},Xa:function(){window.removeEventListener("paste",e.sc)},oa:function(){return navigator.userAgent.includes("Macintosh")?1:0},table:ka};
(function(){function a(f){e.asm=f.exports;K--;e.monitorRunDependencies&&e.monitorRunDependencies(K);0==K&&(null!==Ha&&(clearInterval(Ha),Ha=null),L&&(f=L,L=null,f()))}function b(f){a(f.instance)}function c(f){return Ma().then(function(g){return WebAssembly.instantiate(g,d)}).then(f,function(g){y("failed to asynchronously prepare wasm: "+g);x(g)})}var d={a:Qb};K++;e.monitorRunDependencies&&e.monitorRunDependencies(K);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return y("Module.instantiateWasm callback failed with error: "+
f),!1}(function(){if(z||"function"!==typeof WebAssembly.instantiateStreaming||Ja()||Ia("file://")||"function"!==typeof fetch)return c(b);fetch(M,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(g){y("wasm streaming compile failed: "+g);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var Na=e.___wasm_call_ctors=function(){return(Na=e.___wasm_call_ctors=e.asm.qb).apply(null,arguments)},Pb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Pb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.rb).apply(null,arguments)};e.___em_js__sapp_js_create_textfield=function(){return(e.___em_js__sapp_js_create_textfield=e.asm.sb).apply(null,arguments)};e.___em_js__sapp_js_focus_textfield=function(){return(e.___em_js__sapp_js_focus_textfield=e.asm.tb).apply(null,arguments)};
e.___em_js__sapp_js_unfocus_textfield=function(){return(e.___em_js__sapp_js_unfocus_textfield=e.asm.ub).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.vb).apply(null,arguments)};var Ob=e.__sapp_html5_get_ask_leave_site=function(){return(Ob=e.__sapp_html5_get_ask_leave_site=e.asm.wb).apply(null,arguments)};e.___em_js__sapp_add_js_hook_beforeunload=function(){return(e.___em_js__sapp_add_js_hook_beforeunload=e.asm.xb).apply(null,arguments)};
e.___em_js__sapp_remove_js_hook_beforeunload=function(){return(e.___em_js__sapp_remove_js_hook_beforeunload=e.asm.yb).apply(null,arguments)};e.___em_js__sapp_add_js_hook_clipboard=function(){return(e.___em_js__sapp_add_js_hook_clipboard=e.asm.zb).apply(null,arguments)};e.___em_js__sapp_remove_js_hook_clipboard=function(){return(e.___em_js__sapp_remove_js_hook_clipboard=e.asm.Ab).apply(null,arguments)};
e.___em_js__sapp_js_write_clipboard=function(){return(e.___em_js__sapp_js_write_clipboard=e.asm.Bb).apply(null,arguments)};e.___em_js___sapp_emsc_request_pointerlock=function(){return(e.___em_js___sapp_emsc_request_pointerlock=e.asm.Cb).apply(null,arguments)};e.___em_js___sapp_emsc_exit_pointerlock=function(){return(e.___em_js___sapp_emsc_exit_pointerlock=e.asm.Db).apply(null,arguments)};e._main=function(){return(e._main=e.asm.Eb).apply(null,arguments)};
e.___em_js__stm_js_perfnow=function(){return(e.___em_js__stm_js_perfnow=e.asm.Fb).apply(null,arguments)};e.__saudio_emsc_pull=function(){return(e.__saudio_emsc_pull=e.asm.Gb).apply(null,arguments)};e.___em_js__saudio_js_init=function(){return(e.___em_js__saudio_js_init=e.asm.Hb).apply(null,arguments)};e.___em_js__saudio_js_shutdown=function(){return(e.___em_js__saudio_js_shutdown=e.asm.Ib).apply(null,arguments)};
e.___em_js__saudio_js_sample_rate=function(){return(e.___em_js__saudio_js_sample_rate=e.asm.Jb).apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return(e.___em_js__saudio_js_buffer_frames=e.asm.Kb).apply(null,arguments)};e.___em_js__sfetch_js_send_head_request=function(){return(e.___em_js__sfetch_js_send_head_request=e.asm.Lb).apply(null,arguments)};e.___em_js__sfetch_js_send_get_request=function(){return(e.___em_js__sfetch_js_send_get_request=e.asm.Mb).apply(null,arguments)};
e.__sfetch_emsc_head_response=function(){return(e.__sfetch_emsc_head_response=e.asm.Nb).apply(null,arguments)};e.__sfetch_emsc_get_response=function(){return(e.__sfetch_emsc_get_response=e.asm.Ob).apply(null,arguments)};e.__sfetch_emsc_failed_http_status=function(){return(e.__sfetch_emsc_failed_http_status=e.asm.Pb).apply(null,arguments)};e.__sfetch_emsc_failed_buffer_too_small=function(){return(e.__sfetch_emsc_failed_buffer_too_small=e.asm.Qb).apply(null,arguments)};
var Q=e._malloc=function(){return(Q=e._malloc=e.asm.Rb).apply(null,arguments)};e.___em_js__simgui_js_is_osx=function(){return(e.___em_js__simgui_js_is_osx=e.asm.Sb).apply(null,arguments)};var pa=e.stackSave=function(){return(pa=e.stackSave=e.asm.Tb).apply(null,arguments)},qa=e.stackRestore=function(){return(qa=e.stackRestore=e.asm.Ub).apply(null,arguments)},C=e.stackAlloc=function(){return(C=e.stackAlloc=e.asm.Vb).apply(null,arguments)};
e.dynCall_vi=function(){return(e.dynCall_vi=e.asm.Wb).apply(null,arguments)};var R=e.dynCall_iiii=function(){return(R=e.dynCall_iiii=e.asm.Xb).apply(null,arguments)};e.dynCall_v=function(){return(e.dynCall_v=e.asm.Yb).apply(null,arguments)};var Nb=e.dynCall_idi=function(){return(Nb=e.dynCall_idi=e.asm.Zb).apply(null,arguments)},Rb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}L=function Sb(){Rb||Tb();Rb||(L=Sb)};
function Tb(a){function b(){if(!Rb&&(Rb=!0,e.calledRun=!0,!la)){Aa(Ca);Aa(Da);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Ub){var c=a,d=e._main;c=c||[];var f=c.length+1,g=C(4*(f+1));H[g>>2]=ua(aa);for(var h=1;h<f;h++)H[(g>>2)+h]=ua(c[h-1]);H[(g>>2)+f]=0;try{var m=d(f,g);if(!noExitRuntime||0!==m){if(!noExitRuntime&&(la=!0,e.onExit))e.onExit(m);t(m,new ia(m))}}catch(n){n instanceof ia||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),y("exception thrown: "+
c),t(1,n)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Fa.unshift(c);Aa(Fa)}}a=a||r;if(!(0<K)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ga();Aa(Ba);0<K||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Tb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();
var Ub=!0;e.noInitialRun&&(Ub=!1);noExitRuntime=!0;Tb();
