
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in e)e.hasOwnProperty(l)&&(k[l]=e[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,w,fa,ha;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},w=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",
ja),t=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ka=e.print||console.log.bind(console),x=e.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(e[l]=k[l]);k=null;e.arguments&&(r=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var z;e.wasmBinary&&(z=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&x("no native wasm support detected");var A,la=new WebAssembly.Table({initial:82,maximum:82,element:"anyfunc"}),ma=!1;
function assert(a,b){a||ja("Assertion failed: "+b)}function na(){var a=e.__sapp_emsc_onpaste;assert(a,"Cannot call unknown function _sapp_emsc_onpaste, make sure it is exported");return a}
function oa(a){var b=["string"],c={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=B(q);C(n,D,p,q)}return p},array:function(n){var p=B(n.length);pa.set(n,p);return p}},d=na(),f=[],h=0;if(a)for(var g=0;g<a.length;g++){var m=c[b[g]];m?(0===h&&(h=qa()),f[g]=m(a[g])):f[g]=a[g]}d.apply(null,f);0!==h&&ra(h)}var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function E(a,b){if(a){var c=D,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&sa)a=sa.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var h=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|h);else{var g=c[a++]&63;f=224==(f&240)?(f&15)<<12|h<<6|g:(f&7)<<18|h<<12|g<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function C(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ua(a){var b=ta(a)+1,c=B(b);C(a,pa,c,b);return c}var F,pa,D,va,wa,G,xa,H,I;
function ya(a){F=a;e.HEAP8=pa=new Int8Array(a);e.HEAP16=va=new Int16Array(a);e.HEAP32=G=new Int32Array(a);e.HEAPU8=D=new Uint8Array(a);e.HEAPU16=wa=new Uint16Array(a);e.HEAPU32=xa=new Uint32Array(a);e.HEAPF32=H=new Float32Array(a);e.HEAPF64=I=new Float64Array(a)}var za=e.INITIAL_MEMORY||33554432;e.wasmMemory?A=e.wasmMemory:A=new WebAssembly.Memory({initial:za/65536,maximum:32768});A&&(F=A.buffer);za=F.byteLength;ya(F);G[391948]=6810832;
function Aa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.hc;"number"===typeof c?void 0===b.Wb?e.dynCall_v(c):e.dynCall_vi(c,b.Wb):c(void 0===b.Wb?null:b.Wb)}}}var Ba=[],Ca=[],Da=[],Ea=[],Fa=[];function Ga(){var a=e.preRun.shift();Ba.unshift(a)}var J=0,Ha=null,K=null;e.preloadedImages={};e.preloadedAudios={};function ja(a){if(e.onAbort)e.onAbort(a);ka(a);x(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Ia(a){var b=L;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ja(){return Ia("data:application/octet-stream;base64,")}var L="cube-sapp-ui.wasm";if(!Ja()){var Ka=L;L=e.locateFile?e.locateFile(Ka,v):v+Ka}function La(){try{if(z)return new Uint8Array(z);if(w)return w(L);throw"both async and sync fetching of the wasm failed";}catch(a){ja(a)}}
function Ma(){return z||!ba&&!u||"function"!==typeof fetch||Ia("file://")?new Promise(function(a){a(La())}):fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return La()})}Ca.push({hc:function(){Na()}});function Oa(){for(var a=M.length-1;0<=a;--a)Pa(a);M=[];Qa=[]}var Qa=[];function Ra(){if(Sa.$b&&Ta.Ub)for(var a=0;a<Qa.length;++a){var b=Qa[a];Qa.splice(a,1);--a;b.uc.apply(null,b.mc)}}var M=[];
function Pa(a){var b=M[a];b.target.removeEventListener(b.Nb,b.ec,b.Ob);M.splice(a,1)}function N(a){function b(d){++Sa.$b;Ta=a;Ra();a.Rb(d);Ra();--Sa.$b}if(a.Pb)a.ec=b,a.target.addEventListener(a.Nb,b,a.Ob),M.push(a),Ua||(Ea.push(Oa),Ua=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].Nb==a.Nb&&Pa(c--)}var Sa={},Ua,Ta,Va,Wa,Xa,Ya,Za,$a,ab,bb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function O(a){a=2<a?E(a):a;return bb[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function cb(a){return 0>bb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function db(a,b,c,d,f,h){Va||(Va=P(164));a={target:O(a),Ub:!0,Nb:h,Pb:d,Rb:function(g){var m=Va,n=m>>2;G[n]=g.location;G[n+1]=g.ctrlKey;G[n+2]=g.shiftKey;G[n+3]=g.altKey;G[n+4]=g.metaKey;G[n+5]=g.repeat;G[n+6]=g.charCode;G[n+7]=g.keyCode;G[n+8]=g.which;C(g.key||"",D,m+36,32);C(g.code||"",D,m+68,32);C(g.char||"",D,m+100,32);C(g.locale||"",D,m+132,32);Q(d,f,m,b)&&g.preventDefault()},Ob:c};N(a)}
function eb(a,b,c){G[a>>2]=b.screenX;G[a+4>>2]=b.screenY;G[a+8>>2]=b.clientX;G[a+12>>2]=b.clientY;G[a+16>>2]=b.ctrlKey;G[a+20>>2]=b.shiftKey;G[a+24>>2]=b.altKey;G[a+28>>2]=b.metaKey;va[a+32>>1]=b.button;va[a+34>>1]=b.buttons;var d=b.movementY||b.screenY-Xa;G[a+36>>2]=b.movementX||b.screenX-Wa;G[a+40>>2]=d;c=cb(c);G[a+44>>2]=b.clientX-c.left;G[a+48>>2]=b.clientY-c.top;"wheel"!==b.type&&(Wa=b.screenX,Xa=b.screenY)}
function R(a,b,c,d,f,h){Ya||(Ya=P(64));a=O(a);N({target:a,Ub:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Nb:h,Pb:d,Rb:function(g){g=g||event;eb(Ya,g,a);Q(d,f,Ya,b)&&g.preventDefault()},Ob:c})}
function fb(a,b,c,d){Za||(Za=P(36));a=O(a);N({target:a,Nb:"resize",Pb:d,Rb:function(f){f=f||event;if(f.target==a){var h=Za,g=document.body;G[h>>2]=f.detail;G[h+4>>2]=g.clientWidth;G[h+8>>2]=g.clientHeight;G[h+12>>2]=innerWidth;G[h+16>>2]=innerHeight;G[h+20>>2]=outerWidth;G[h+24>>2]=outerHeight;G[h+28>>2]=pageXOffset;G[h+32>>2]=pageYOffset;Q(d,10,h,b)&&f.preventDefault()}},Ob:c})}
function gb(a,b,c,d,f,h){$a||($a=P(1684));a=O(a);N({target:a,Ub:"touchstart"==h||"touchend"==h,Nb:h,Pb:d,Rb:function(g){for(var m={},n=g.touches,p=0;p<n.length;++p){var q=n[p];m[q.identifier]=q}n=g.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.jc=1,m[q.identifier]=q;n=g.targetTouches;for(p=0;p<n.length;++p)m[n[p].identifier].kc=1;n=$a;q=n>>2;G[q+1]=g.ctrlKey;G[q+2]=g.shiftKey;G[q+3]=g.altKey;G[q+4]=g.metaKey;q+=5;var lb=cb(a),mb=0;for(p in m){var y=m[p];G[q]=y.identifier;G[q+1]=y.screenX;G[q+2]=
y.screenY;G[q+3]=y.clientX;G[q+4]=y.clientY;G[q+5]=y.pageX;G[q+6]=y.pageY;G[q+7]=y.jc;G[q+8]=y.kc;G[q+9]=y.clientX-lb.left;G[q+10]=y.clientY-lb.top;q+=13;if(31<++mb)break}G[n>>2]=mb;Q(d,f,n,b)&&g.preventDefault()},Ob:c})}function hb(a,b,c,d,f,h){a={target:O(a),Nb:h,Pb:d,Rb:function(g){g=g||event;Q(d,f,0,b)&&g.preventDefault()},Ob:c};N(a)}
function ib(a,b,c,d){ab||(ab=P(96));N({target:a,Ub:!0,Nb:"wheel",Pb:d,Rb:function(f){f=f||event;var h=ab;eb(h,f,a);I[h+64>>3]=f.deltaX;I[h+72>>3]=f.deltaY;I[h+80>>3]=f.deltaZ;G[h+88>>2]=f.deltaMode;Q(d,9,h,b)&&f.preventDefault()},Ob:c})}
function jb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,h){b.drawArraysInstancedANGLE(c,d,f,h)},a.drawElementsInstanced=function(c,d,f,h,g){b.drawElementsInstancedANGLE(c,d,f,h,g)})}
function kb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function nb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function ob(a){a.oc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}var pb=1,qb=[],S=[],rb=[],sb=[],tb=[],T=[],U=[],ub=[],vb=[],wb={},xb={},yb={};function V(a){zb||(zb=a)}function W(a){for(var b=pb++,c=a.length;c<b;c++)a[c]=null;return b}
function Ab(a){a||(a=X);if(!a.ic){a.ic=!0;var b=a.Vb;jb(b);kb(b);nb(b);ob(b);b.pc=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");(b.getSupportedExtensions()||
[]).forEach(function(d){-1!=c.indexOf(d)&&b.getExtension(d)})}}var zb,X,Bb=["default","low-power","high-performance"];function Cb(a,b,c,d){for(var f=0;f<a;f++){var h=Y[c](),g=h&&W(d);h?(h.name=g,d[g]=h):V(1282);G[b+4*f>>2]=g}}
function Db(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>X.version){V(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>X.version){V(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)G[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){V(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:V(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}G[b>>2]=c}else V(1281)}
function Eb(a){var b=ta(a)+1,c=P(b);C(a,D,c,b);return c}function Fb(a){a-=5120;return 0==a?pa:1==a?D:2==a?va:4==a?G:6==a?H:5==a||28922==a||28520==a||30779==a||30782==a?xa:wa}function Gb(a,b,c,d,f){a=Fb(a);var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(f>>h,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}for(var Z=[],Y,Hb=new Float32Array(288),Ib=0;288>Ib;++Ib)Z[Ib]=Hb.subarray(0,Ib+1);
var Mb={_:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ka:function(a,b,c){a=O(a);if(!a)return-4;a=cb(a);I[b>>3]=a.width;I[c>>3]=a.height;return 0},Wa:function(a,b,c){D.copyWithin(a,b,b+c)},Ma:function(a,b){function c(d){Jb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Xa:function(a){a>>>=0;var b=D.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);
a:{try{A.grow(Math.min(2147483648,d)-F.byteLength+65535>>>16);ya(A.buffer);var f=1;break a}catch(h){}f=void 0}if(f)return!0}return!1},V:function(a,b,c){a=O(a);if(!a)return-4;a.width=b;a.height=c;return 0},da:function(a,b,c,d){db(a,b,c,d,2,"keydown");return 0},ba:function(a,b,c,d){db(a,b,c,d,1,"keypress");return 0},ca:function(a,b,c,d){db(a,b,c,d,3,"keyup");return 0},C:function(a,b,c,d){R(a,b,c,d,5,"mousedown");return 0},ga:function(a,b,c,d){R(a,b,c,d,33,"mouseenter");return 0},fa:function(a,b,c,d){R(a,
b,c,d,34,"mouseleave");return 0},ia:function(a,b,c,d){R(a,b,c,d,8,"mousemove");return 0},ja:function(a,b,c,d){R(a,b,c,d,6,"mouseup");return 0},fb:function(a,b,c,d){fb(a,b,c,d);return 0},Y:function(a,b,c,d){gb(a,b,c,d,25,"touchcancel");return 0},Z:function(a,b,c,d){gb(a,b,c,d,23,"touchend");return 0},$:function(a,b,c,d){gb(a,b,c,d,24,"touchmove");return 0},aa:function(a,b,c,d){gb(a,b,c,d,22,"touchstart");return 0},X:function(a,b,c,d){hb(a,b,c,d,31,"webglcontextlost");return 0},W:function(a,b,c,d){hb(a,
b,c,d,32,"webglcontextrestored");return 0},ea:function(a,b,c,d){a=O(a);return"undefined"!==typeof a.onwheel?(ib(a,b,c,d),0):-1},K:function(a,b){var c={};b>>=2;c.alpha=!!G[b];c.depth=!!G[b+1];c.stencil=!!G[b+2];c.antialias=!!G[b+3];c.premultipliedAlpha=!!G[b+4];c.preserveDrawingBuffer=!!G[b+5];c.powerPreference=Bb[G[b+6]];c.failIfMajorPerformanceCaveat=!!G[b+7];c.ac=G[b+8];c.rc=G[b+9];c.Zb=G[b+10];c.fc=G[b+11];c.sc=G[b+12];c.tc=G[b+13];if(a=O(a))if(c.fc)c=-1;else if(a=1<c.ac?a.getContext("webgl2",
c):a.getContext("webgl",c)){b=W(vb);var d={qc:b,attributes:c,version:c.ac,Vb:a};a.canvas&&(a.canvas.lc=d);vb[b]=d;("undefined"===typeof c.Zb||c.Zb)&&Ab(d);c=b}else c=0;else c=-4;return c},va:function(a,b){a=vb[a];b=E(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&jb(Y);"OES_vertex_array_object"==b&&kb(Y);"WEBGL_draw_buffers"==b&&nb(Y);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&ob(Y);return!!a.Vb.getExtension(b)},Ja:function(a){a>>=2;for(var b=0;14>b;++b)G[a+b]=0;G[a]=
G[a+1]=G[a+3]=G[a+4]=G[a+8]=G[a+10]=1},za:function(a){X=vb[a];e.nc=Y=X&&X.Vb;return!a||Y?0:-5},i:function(a){Y.activeTexture(a)},I:function(a,b){Y.attachShader(S[a],U[b])},b:function(a,b){35051==a?Y.Yb=b:35052==a&&(Y.Qb=b);Y.bindBuffer(a,qb[b])},g:function(a,b){Y.bindFramebuffer(a,rb[b])},Ha:function(a,b){Y.bindRenderbuffer(a,sb[b])},a:function(a,b){Y.bindTexture(a,tb[b])},U:function(a){Y.bindVertexArray(ub[a])},Q:function(a,b,c,d){Y.blendColor(a,b,c,d)},R:function(a,b){Y.blendEquationSeparate(a,
b)},S:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},r:function(a,b,c,d,f,h,g,m,n,p){Y.blitFramebuffer(a,b,c,d,f,h,g,m,n,p)},L:function(a,b,c,d){2<=X.version?c?Y.bufferData(a,D,d,c,b):Y.bufferData(a,b,d):Y.bufferData(a,c?D.subarray(c,c+b):b,d)},n:function(a,b,c,d){2<=X.version?Y.bufferSubData(a,b,D,d,c):Y.bufferSubData(a,b,D.subarray(d,d+c))},ma:function(a){Y.clear(a)},pa:function(a,b,c,d){Y.clearColor(a,b,c,d)},oa:function(a){Y.clearDepth(a)},na:function(a){Y.clearStencil(a)},w:function(a,b,c,d){Y.colorMask(!!a,
!!b,!!c,!!d)},sa:function(a){Y.compileShader(U[a])},Da:function(a,b,c,d,f,h,g,m){2<=X.version?Y.Qb?Y.compressedTexImage2D(a,b,c,d,f,h,g,m):Y.compressedTexImage2D(a,b,c,d,f,h,D,m,g):Y.compressedTexImage2D(a,b,c,d,f,h,m?D.subarray(m,m+g):null)},Ba:function(a,b,c,d,f,h,g,m,n){Y.Qb?Y.compressedTexImage3D(a,b,c,d,f,h,g,m,n):Y.compressedTexImage3D(a,b,c,d,f,h,g,D,n,m)},ya:function(){var a=W(S),b=Y.createProgram();b.name=a;S[a]=b;return a},ua:function(a){var b=W(U);U[b]=Y.createShader(a);return b},N:function(a){Y.cullFace(a)},
E:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=qb[d];f&&(Y.deleteBuffer(f),f.name=0,qb[d]=null,d==Y.Yb&&(Y.Yb=0),d==Y.Qb&&(Y.Qb=0))}},h:function(a,b){for(var c=0;c<a;++c){var d=G[b+4*c>>2],f=rb[d];f&&(Y.deleteFramebuffer(f),f.name=0,rb[d]=null)}},u:function(a){if(a){var b=S[a];b?(Y.deleteProgram(b),b.name=0,S[a]=null,wb[a]=null):V(1281)}},l:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=sb[d];f&&(Y.deleteRenderbuffer(f),f.name=0,sb[d]=null)}},v:function(a){if(a){var b=U[a];b?(Y.deleteShader(b),
U[a]=null):V(1281)}},D:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=tb[d];f&&(Y.deleteTexture(f),f.name=0,tb[d]=null)}},Oa:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2];Y.deleteVertexArray(ub[d]);ub[d]=null}},z:function(a){Y.depthFunc(a)},y:function(a){Y.depthMask(!!a)},c:function(a){Y.disable(a)},T:function(a){Y.disableVertexAttribArray(a)},Ya:function(a,b,c){Y.drawArrays(a,b,c)},Za:function(a,b,c,d){Y.drawElements(a,b,c,d)},f:function(a){Y.enable(a)},db:function(a){Y.enableVertexAttribArray(a)},
O:function(a){Y.frontFace(a)},M:function(a,b){Cb(a,b,"createBuffer",qb)},Ia:function(a,b){Cb(a,b,"createRenderbuffer",sb)},Ea:function(a,b){Cb(a,b,"createTexture",tb)},Na:function(a,b){Cb(a,b,"createVertexArray",ub)},qa:function(a,b){return Y.getAttribLocation(S[a],E(b))},d:function(a,b){Db(a,b)},wa:function(a,b,c,d){a=Y.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(G[c>>2]=b)},H:function(a,b,c){if(c)if(a>=pb)V(1281);else{var d=wb[a];if(d)if(35716==b)a=Y.getProgramInfoLog(S[a]),
null===a&&(a="(unknown error)"),G[c>>2]=a.length+1;else if(35719==b)G[c>>2]=d.Xb;else if(35722==b){if(-1==d.Sb){a=S[a];var f=Y.getProgramParameter(a,35721);for(b=d.Sb=0;b<f;++b)d.Sb=Math.max(d.Sb,Y.getActiveAttrib(a,b).name.length+1)}G[c>>2]=d.Sb}else if(35381==b){if(-1==d.Tb)for(a=S[a],f=Y.getProgramParameter(a,35382),b=d.Tb=0;b<f;++b)d.Tb=Math.max(d.Tb,Y.getActiveUniformBlockName(a,b).length+1);G[c>>2]=d.Tb}else G[c>>2]=Y.getProgramParameter(S[a],b);else V(1282)}else V(1281)},ra:function(a,b,c,
d){a=Y.getShaderInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(G[c>>2]=b)},F:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(U[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1):35720==b?(a=Y.getShaderSource(U[a]),G[c>>2]=null===a||0==a.length?0:a.length+1):G[c>>2]=Y.getShaderParameter(U[a],b):V(1281)},Qa:function(a){if(xb[a])return xb[a];switch(a){case 7939:var b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Eb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=
Y.getParameter(a))||V(1280);b=Eb(b);break;case 7938:b=Y.getParameter(7938);b=2<=X.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Eb(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Eb(b);break;default:return V(1280),0}return xb[a]=b},Pa:function(a,b){if(2>X.version)return V(1282),0;var c=yb[a];if(c)return 0>b||b>=c.length?(V(1281),0):c[b];switch(a){case 7939:return c=
Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Eb(d)}),c=yb[a]=c,0>b||b>=c.length?(V(1281),0):c[b];default:return V(1280),0}},m:function(a,b){b=E(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=wb[a]&&wb[a].dc[b])&&0<=c&&c<a[0]?a[1]+c:-1},xa:function(a){Y.linkProgram(S[a]);var b=S[a];a=wb[a]={dc:{},Xb:0,Sb:-1,Tb:-1};for(var c=a.dc,d=Y.getProgramParameter(b,35718),f=0;f<
d;++f){var h=Y.getActiveUniform(b,f),g=h.name;a.Xb=Math.max(a.Xb,g.length+1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));var m=Y.getUniformLocation(b,g);if(m){var n=W(T);c[g]=[h.size,n];T[n]=m;for(var p=1;p<h.size;++p)m=Y.getUniformLocation(b,g+"["+p+"]"),n=W(T),T[n]=m}}},P:function(a,b){Y.polygonOffset(a,b)},s:function(a){Y.readBuffer(a)},Fa:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},Ga:function(a,b,c,d,f){Y.renderbufferStorageMultisample(a,b,c,d,f)},j:function(a,b,c,d){Y.scissor(a,
b,c,d)},ta:function(a,b,c,d){for(var f="",h=0;h<b;++h){var g=d?G[d+4*h>>2]:-1;f+=E(G[c+4*h>>2],0>g?void 0:g)}Y.shaderSource(U[a],f)},La:function(a,b,c){Y.stencilFunc(a,b,c)},B:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},x:function(a){Y.stencilMask(a)},Ka:function(a,b,c){Y.stencilOp(a,b,c)},A:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},Ca:function(a,b,c,d,f,h,g,m,n){if(2<=X.version)if(Y.Qb)Y.texImage2D(a,b,c,d,f,h,g,m,n);else if(n){var p=Fb(m);Y.texImage2D(a,b,c,d,f,h,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else Y.texImage2D(a,
b,c,d,f,h,g,m,null);else Y.texImage2D(a,b,c,d,f,h,g,m,n?Gb(m,g,d,f,n):null)},Aa:function(a,b,c,d,f,h,g,m,n,p){if(Y.Qb)Y.texImage3D(a,b,c,d,f,h,g,m,n,p);else if(p){var q=Fb(n);Y.texImage3D(a,b,c,d,f,h,g,m,n,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else Y.texImage3D(a,b,c,d,f,h,g,m,n,null)},J:function(a,b,c){Y.texParameterf(a,b,c)},e:function(a,b,c){Y.texParameteri(a,b,c)},cb:function(a,b,c){if(2<=X.version)Y.uniform1fv(T[a],H,c>>2,b);else{if(288>=b)for(var d=Z[b-1],f=0;f<b;++f)d[f]=H[c+4*f>>2];else d=
H.subarray(c>>2,c+4*b>>2);Y.uniform1fv(T[a],d)}},G:function(a,b){Y.uniform1i(T[a],b)},bb:function(a,b,c){if(2<=X.version)Y.uniform2fv(T[a],H,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],f=0;f<2*b;f+=2)d[f]=H[c+4*f>>2],d[f+1]=H[c+(4*f+4)>>2];else d=H.subarray(c>>2,c+8*b>>2);Y.uniform2fv(T[a],d)}},ab:function(a,b,c){if(2<=X.version)Y.uniform3fv(T[a],H,c>>2,3*b);else{if(96>=b)for(var d=Z[3*b-1],f=0;f<3*b;f+=3)d[f]=H[c+4*f>>2],d[f+1]=H[c+(4*f+4)>>2],d[f+2]=H[c+(4*f+8)>>2];else d=H.subarray(c>>2,c+12*b>>
2);Y.uniform3fv(T[a],d)}},$a:function(a,b,c){if(2<=X.version)Y.uniform4fv(T[a],H,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],f=H;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=f[g];d[h+1]=f[g+1];d[h+2]=f[g+2];d[h+3]=f[g+3]}}else d=H.subarray(c>>2,c+16*b>>2);Y.uniform4fv(T[a],d)}},_a:function(a,b,c,d){if(2<=X.version)Y.uniformMatrix4fv(T[a],!!c,H,d>>2,16*b);else{if(18>=b){var f=Z[16*b-1],h=H;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;f[g]=h[m];f[g+1]=h[m+1];f[g+2]=h[m+2];f[g+3]=h[m+3];f[g+4]=h[m+4];f[g+5]=
h[m+5];f[g+6]=h[m+6];f[g+7]=h[m+7];f[g+8]=h[m+8];f[g+9]=h[m+9];f[g+10]=h[m+10];f[g+11]=h[m+11];f[g+12]=h[m+12];f[g+13]=h[m+13];f[g+14]=h[m+14];f[g+15]=h[m+15]}}else f=H.subarray(d>>2,d+64*b>>2);Y.uniformMatrix4fv(T[a],!!c,f)}},t:function(a){Y.useProgram(S[a])},eb:function(a,b){Y.vertexAttribDivisor(a,b)},la:function(a,b,c,d,f,h){Y.vertexAttribPointer(a,b,c,!!d,f,h)},k:function(a,b,c,d){Y.viewport(a,b,c,d)},memory:A,Va:function(){e.bc=function(a){0!=Kb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",
e.bc)},Ua:function(){e.cc=function(a){a=a.clipboardData.getData("text");oa([a])};window.addEventListener("paste",e.cc)},q:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Lb()});document.body.append(a)},p:function(){document.getElementById("_sokol_app_input_element").focus()},o:function(){document.getElementById("_sokol_app_input_element").blur()},Ra:function(a){a=E(a);var b=document.createElement("textarea");
b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},Ta:function(){window.removeEventListener("beforeunload",e.bc)},Sa:function(){window.removeEventListener("paste",e.cc)},ha:function(){return navigator.userAgent.includes("Macintosh")?
1:0},table:la};
(function(){function a(f){e.asm=f.exports;J--;e.monitorRunDependencies&&e.monitorRunDependencies(J);0==J&&(null!==Ha&&(clearInterval(Ha),Ha=null),K&&(f=K,K=null,f()))}function b(f){a(f.instance)}function c(f){return Ma().then(function(h){return WebAssembly.instantiate(h,d)}).then(f,function(h){x("failed to asynchronously prepare wasm: "+h);ja(h)})}var d={a:Mb};J++;e.monitorRunDependencies&&e.monitorRunDependencies(J);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return x("Module.instantiateWasm callback failed with error: "+f),
!1}(function(){if(z||"function"!==typeof WebAssembly.instantiateStreaming||Ja()||Ia("file://")||"function"!==typeof fetch)return c(b);fetch(L,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(h){x("wasm streaming compile failed: "+h);x("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var Na=e.___wasm_call_ctors=function(){return(Na=e.___wasm_call_ctors=e.asm.gb).apply(null,arguments)},Lb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Lb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.hb).apply(null,arguments)};e.___em_js__sapp_js_create_textfield=function(){return(e.___em_js__sapp_js_create_textfield=e.asm.ib).apply(null,arguments)};e.___em_js__sapp_js_focus_textfield=function(){return(e.___em_js__sapp_js_focus_textfield=e.asm.jb).apply(null,arguments)};
e.___em_js__sapp_js_unfocus_textfield=function(){return(e.___em_js__sapp_js_unfocus_textfield=e.asm.kb).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.lb).apply(null,arguments)};var Kb=e.__sapp_html5_get_ask_leave_site=function(){return(Kb=e.__sapp_html5_get_ask_leave_site=e.asm.mb).apply(null,arguments)};e.___em_js__sapp_add_js_hook_beforeunload=function(){return(e.___em_js__sapp_add_js_hook_beforeunload=e.asm.nb).apply(null,arguments)};
e.___em_js__sapp_remove_js_hook_beforeunload=function(){return(e.___em_js__sapp_remove_js_hook_beforeunload=e.asm.ob).apply(null,arguments)};e.___em_js__sapp_add_js_hook_clipboard=function(){return(e.___em_js__sapp_add_js_hook_clipboard=e.asm.pb).apply(null,arguments)};e.___em_js__sapp_remove_js_hook_clipboard=function(){return(e.___em_js__sapp_remove_js_hook_clipboard=e.asm.qb).apply(null,arguments)};
e.___em_js__sapp_js_write_clipboard=function(){return(e.___em_js__sapp_js_write_clipboard=e.asm.rb).apply(null,arguments)};e._main=function(){return(e._main=e.asm.sb).apply(null,arguments)};e.___em_js__stm_js_perfnow=function(){return(e.___em_js__stm_js_perfnow=e.asm.tb).apply(null,arguments)};e.__saudio_emsc_pull=function(){return(e.__saudio_emsc_pull=e.asm.ub).apply(null,arguments)};e.___em_js__saudio_js_init=function(){return(e.___em_js__saudio_js_init=e.asm.vb).apply(null,arguments)};
e.___em_js__saudio_js_sample_rate=function(){return(e.___em_js__saudio_js_sample_rate=e.asm.wb).apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return(e.___em_js__saudio_js_buffer_frames=e.asm.xb).apply(null,arguments)};e.___em_js__sfetch_js_send_head_request=function(){return(e.___em_js__sfetch_js_send_head_request=e.asm.yb).apply(null,arguments)};e.___em_js__sfetch_js_send_get_request=function(){return(e.___em_js__sfetch_js_send_get_request=e.asm.zb).apply(null,arguments)};
e.__sfetch_emsc_head_response=function(){return(e.__sfetch_emsc_head_response=e.asm.Ab).apply(null,arguments)};e.__sfetch_emsc_get_response=function(){return(e.__sfetch_emsc_get_response=e.asm.Bb).apply(null,arguments)};e.__sfetch_emsc_failed_http_status=function(){return(e.__sfetch_emsc_failed_http_status=e.asm.Cb).apply(null,arguments)};e.__sfetch_emsc_failed_buffer_too_small=function(){return(e.__sfetch_emsc_failed_buffer_too_small=e.asm.Db).apply(null,arguments)};
var P=e._malloc=function(){return(P=e._malloc=e.asm.Eb).apply(null,arguments)};e.___em_js__simgui_js_is_osx=function(){return(e.___em_js__simgui_js_is_osx=e.asm.Fb).apply(null,arguments)};var qa=e.stackSave=function(){return(qa=e.stackSave=e.asm.Gb).apply(null,arguments)},ra=e.stackRestore=function(){return(ra=e.stackRestore=e.asm.Hb).apply(null,arguments)},B=e.stackAlloc=function(){return(B=e.stackAlloc=e.asm.Ib).apply(null,arguments)};
e.dynCall_vi=function(){return(e.dynCall_vi=e.asm.Jb).apply(null,arguments)};var Q=e.dynCall_iiii=function(){return(Q=e.dynCall_iiii=e.asm.Kb).apply(null,arguments)};e.dynCall_v=function(){return(e.dynCall_v=e.asm.Lb).apply(null,arguments)};var Jb=e.dynCall_idi=function(){return(Jb=e.dynCall_idi=e.asm.Mb).apply(null,arguments)},Nb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}K=function Ob(){Nb||Pb();Nb||(K=Ob)};
function Pb(a){function b(){if(!Nb&&(Nb=!0,e.calledRun=!0,!ma)){Aa(Ca);Aa(Da);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Qb){var c=a,d=e._main;c=c||[];var f=c.length+1,h=B(4*(f+1));G[h>>2]=ua(aa);for(var g=1;g<f;g++)G[(h>>2)+g]=ua(c[g-1]);G[(h>>2)+f]=0;try{var m=d(f,h);if(!noExitRuntime||0!==m){if(!noExitRuntime&&(ma=!0,e.onExit))e.onExit(m);t(m,new ia(m))}}catch(n){n instanceof ia||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),x("exception thrown: "+
c),t(1,n)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Fa.unshift(c);Aa(Fa)}}a=a||r;if(!(0<J)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ga();Aa(Ba);0<J||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Pb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();
var Qb=!0;e.noInitialRun&&(Qb=!1);noExitRuntime=!0;Pb();
