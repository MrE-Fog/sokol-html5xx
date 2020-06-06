
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in e)e.hasOwnProperty(l)&&(k[l]=e[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,w,fa,ha;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},w=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",
x),t=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ja=e.print||console.log.bind(console),z=e.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(e[l]=k[l]);k=null;e.arguments&&(r=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var A;e.wasmBinary&&(A=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&z("no native wasm support detected");var B,ka=new WebAssembly.Table({initial:25,maximum:25,element:"anyfunc"}),la=!1;
function assert(a,b){a||x("Assertion failed: "+b)}function ma(){var a=e.__sapp_emsc_onpaste;assert(a,"Cannot call unknown function _sapp_emsc_onpaste, make sure it is exported");return a}
function na(a){var b=["string"],c={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=C(q);D(n,E,p,q)}return p},array:function(n){var p=C(n.length);oa.set(n,p);return p}},d=ma(),f=[],h=0;if(a)for(var g=0;g<a.length;g++){var m=c[b[g]];m?(0===h&&(h=pa()),f[g]=m(a[g])):f[g]=a[g]}d.apply(null,f);0!==h&&qa(h)}var ra="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function F(a,b){if(a){var c=E,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&ra)a=ra.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var h=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|h);else{var g=c[a++]&63;f=224==(f&240)?(f&15)<<12|h<<6|g:(f&7)<<18|h<<12|g<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function D(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function sa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ta(a){var b=sa(a)+1,c=C(b);D(a,oa,c,b);return c}var G,oa,E,ua,va,H,wa,I,J;
function xa(a){G=a;e.HEAP8=oa=new Int8Array(a);e.HEAP16=ua=new Int16Array(a);e.HEAP32=H=new Int32Array(a);e.HEAPU8=E=new Uint8Array(a);e.HEAPU16=va=new Uint16Array(a);e.HEAPU32=wa=new Uint32Array(a);e.HEAPF32=I=new Float32Array(a);e.HEAPF64=J=new Float64Array(a)}var ya=e.INITIAL_MEMORY||33554432;e.wasmMemory?B=e.wasmMemory:B=new WebAssembly.Memory({initial:ya/65536,maximum:32768});B&&(G=B.buffer);ya=G.byteLength;xa(G);H[1100236]=9643984;
function za(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.ic;"number"===typeof c?void 0===b.Xb?e.dynCall_v(c):e.dynCall_vi(c,b.Xb):c(void 0===b.Xb?null:b.Xb)}}}var Aa=[],Ba=[],Ca=[],Da=[],Ea=[];function Fa(){var a=e.preRun.shift();Aa.unshift(a)}var K=0,Ga=null,Ha=null;e.preloadedImages={};e.preloadedAudios={};function x(a){if(e.onAbort)e.onAbort(a);ja(a);z(a);la=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Ia(a){var b=L;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ja(){return Ia("data:application/octet-stream;base64,")}var L="cgltf-sapp.wasm";if(!Ja()){var Ka=L;L=e.locateFile?e.locateFile(Ka,v):v+Ka}function La(){try{if(A)return new Uint8Array(A);if(w)return w(L);throw"both async and sync fetching of the wasm failed";}catch(a){x(a)}}
function Ma(){return A||!ba&&!u||"function"!==typeof fetch||Ia("file://")?new Promise(function(a){a(La())}):fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return La()})}Ba.push({ic:function(){Na()}});function Oa(){for(var a=M.length-1;0<=a;--a)Pa(a);M=[];Qa=[]}var Qa=[];function Ra(){if(Sa.ac&&Ta.Vb)for(var a=0;a<Qa.length;++a){var b=Qa[a];Qa.splice(a,1);--a;b.vc.apply(null,b.nc)}}var M=[];
function Pa(a){var b=M[a];b.target.removeEventListener(b.Ob,b.fc,b.Pb);M.splice(a,1)}function N(a){function b(d){++Sa.ac;Ta=a;Ra();a.Sb(d);Ra();--Sa.ac}if(a.Qb)a.fc=b,a.target.addEventListener(a.Ob,b,a.Pb),M.push(a),Ua||(Da.push(Oa),Ua=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].Ob==a.Ob&&Pa(c--)}var Sa={},Ua,Ta,Va,Wa,Xa,Ya,Za,$a,ab,bb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function O(a){a=2<a?F(a):a;return bb[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function cb(a){return 0>bb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function db(a,b,c,d,f,h){Va||(Va=P(164));a={target:O(a),Vb:!0,Ob:h,Qb:d,Sb:function(g){var m=Va,n=m>>2;H[n]=g.location;H[n+1]=g.ctrlKey;H[n+2]=g.shiftKey;H[n+3]=g.altKey;H[n+4]=g.metaKey;H[n+5]=g.repeat;H[n+6]=g.charCode;H[n+7]=g.keyCode;H[n+8]=g.which;D(g.key||"",E,m+36,32);D(g.code||"",E,m+68,32);D(g.char||"",E,m+100,32);D(g.locale||"",E,m+132,32);Q(d,f,m,b)&&g.preventDefault()},Pb:c};N(a)}
function eb(a,b,c){H[a>>2]=b.screenX;H[a+4>>2]=b.screenY;H[a+8>>2]=b.clientX;H[a+12>>2]=b.clientY;H[a+16>>2]=b.ctrlKey;H[a+20>>2]=b.shiftKey;H[a+24>>2]=b.altKey;H[a+28>>2]=b.metaKey;ua[a+32>>1]=b.button;ua[a+34>>1]=b.buttons;var d=b.movementY||b.screenY-Xa;H[a+36>>2]=b.movementX||b.screenX-Wa;H[a+40>>2]=d;c=cb(c);H[a+44>>2]=b.clientX-c.left;H[a+48>>2]=b.clientY-c.top;"wheel"!==b.type&&(Wa=b.screenX,Xa=b.screenY)}
function fb(a,b,c,d,f,h){Ya||(Ya=P(64));a=O(a);N({target:a,Vb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Ob:h,Qb:d,Sb:function(g){g=g||event;eb(Ya,g,a);Q(d,f,Ya,b)&&g.preventDefault()},Pb:c})}
function gb(a,b,c,d){Za||(Za=P(36));a=O(a);N({target:a,Ob:"resize",Qb:d,Sb:function(f){f=f||event;if(f.target==a){var h=Za,g=document.body;H[h>>2]=f.detail;H[h+4>>2]=g.clientWidth;H[h+8>>2]=g.clientHeight;H[h+12>>2]=innerWidth;H[h+16>>2]=innerHeight;H[h+20>>2]=outerWidth;H[h+24>>2]=outerHeight;H[h+28>>2]=pageXOffset;H[h+32>>2]=pageYOffset;Q(d,10,h,b)&&f.preventDefault()}},Pb:c})}
function hb(a,b,c,d,f,h){$a||($a=P(1684));a=O(a);N({target:a,Vb:"touchstart"==h||"touchend"==h,Ob:h,Qb:d,Sb:function(g){for(var m={},n=g.touches,p=0;p<n.length;++p){var q=n[p];m[q.identifier]=q}n=g.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.kc=1,m[q.identifier]=q;n=g.targetTouches;for(p=0;p<n.length;++p)m[n[p].identifier].lc=1;n=$a;q=n>>2;H[q+1]=g.ctrlKey;H[q+2]=g.shiftKey;H[q+3]=g.altKey;H[q+4]=g.metaKey;q+=5;var mb=cb(a),nb=0;for(p in m){var y=m[p];H[q]=y.identifier;H[q+1]=y.screenX;H[q+2]=
y.screenY;H[q+3]=y.clientX;H[q+4]=y.clientY;H[q+5]=y.pageX;H[q+6]=y.pageY;H[q+7]=y.kc;H[q+8]=y.lc;H[q+9]=y.clientX-mb.left;H[q+10]=y.clientY-mb.top;q+=13;if(31<++nb)break}H[n>>2]=nb;Q(d,f,n,b)&&g.preventDefault()},Pb:c})}function ib(a,b,c,d,f,h){a={target:O(a),Ob:h,Qb:d,Sb:function(g){g=g||event;Q(d,f,0,b)&&g.preventDefault()},Pb:c};N(a)}
function jb(a,b,c,d){ab||(ab=P(96));N({target:a,Vb:!0,Ob:"wheel",Qb:d,Sb:function(f){f=f||event;var h=ab;eb(h,f,a);J[h+64>>3]=f.deltaX;J[h+72>>3]=f.deltaY;J[h+80>>3]=f.deltaZ;H[h+88>>2]=f.deltaMode;Q(d,9,h,b)&&f.preventDefault()},Pb:c})}
function kb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,h){b.drawArraysInstancedANGLE(c,d,f,h)},a.drawElementsInstanced=function(c,d,f,h,g){b.drawElementsInstancedANGLE(c,d,f,h,g)})}
function lb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function ob(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function pb(a){a.pc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}var qb=1,rb=[],R=[],sb=[],tb=[],ub=[],S=[],T=[],vb=[],wb=[],xb={},yb={},zb={};function U(a){Ab||(Ab=a)}function V(a){for(var b=qb++,c=a.length;c<b;c++)a[c]=null;return b}
function Bb(a){a||(a=W);if(!a.jc){a.jc=!0;var b=a.Wb;kb(b);lb(b);ob(b);pb(b);b.qc=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");(b.getSupportedExtensions()||
[]).forEach(function(d){-1!=c.indexOf(d)&&b.getExtension(d)})}}var Ab,W,Cb=["default","low-power","high-performance"],Db=[];function Eb(a,b,c,d){for(var f=0;f<a;f++){var h=X[c](),g=h&&V(d);h?(h.name=g,d[g]=h):U(1282);H[b+4*f>>2]=g}}
function Fb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=X.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){U(1282);return}c=2*(X.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>W.version){U(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=X.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":U(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:U(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)H[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){U(1280);z("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:U(1280);z("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}H[b>>2]=c}else U(1281)}
function Gb(a){var b=sa(a)+1,c=P(b);D(a,E,c,b);return c}function Hb(a){a-=5120;return 0==a?oa:1==a?E:2==a?ua:4==a?H:6==a?I:5==a||28922==a||28520==a||30779==a||30782==a?wa:va}function Ib(a,b,c,d,f){a=Hb(a);var h=31-Math.clz32(a.BYTES_PER_ELEMENT);return a.subarray(f>>h,f+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<h)+4-1&-4)>>h)}for(var Y=[],X,Z=0;32>Z;++Z)Db.push(Array(Z));var Jb=new Float32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Jb.subarray(0,Z+1);
var Rb={h:function(){x()},W:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ka:function(a,b,c){a=O(a);if(!a)return-4;a=cb(a);J[b>>3]=a.width;J[c>>3]=a.height;return 0},Xa:function(a,b,c){E.copyWithin(a,b,b+c)},La:function(a,b){function c(d){Kb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Ya:function(a){a>>>=0;var b=E.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=
65536-d%65536);a:{try{B.grow(Math.min(2147483648,d)-G.byteLength+65535>>>16);xa(B.buffer);var f=1;break a}catch(h){}f=void 0}if(f)return!0}return!1},T:function(a,b,c){a=O(a);if(!a)return-4;a.width=b;a.height=c;return 0},da:function(a,b,c,d){db(a,b,c,d,2,"keydown");return 0},ba:function(a,b,c,d){db(a,b,c,d,1,"keypress");return 0},ca:function(a,b,c,d){db(a,b,c,d,3,"keyup");return 0},ja:function(a,b,c,d){fb(a,b,c,d,5,"mousedown");return 0},ga:function(a,b,c,d){fb(a,b,c,d,33,"mouseenter");return 0},fa:function(a,
b,c,d){fb(a,b,c,d,34,"mouseleave");return 0},ha:function(a,b,c,d){fb(a,b,c,d,8,"mousemove");return 0},ia:function(a,b,c,d){fb(a,b,c,d,6,"mouseup");return 0},Wa:function(a,b,c,d){gb(a,b,c,d);return 0},Z:function(a,b,c,d){hb(a,b,c,d,25,"touchcancel");return 0},_:function(a,b,c,d){hb(a,b,c,d,23,"touchend");return 0},$:function(a,b,c,d){hb(a,b,c,d,24,"touchmove");return 0},aa:function(a,b,c,d){hb(a,b,c,d,22,"touchstart");return 0},Y:function(a,b,c,d){ib(a,b,c,d,31,"webglcontextlost");return 0},X:function(a,
b,c,d){ib(a,b,c,d,32,"webglcontextrestored");return 0},ea:function(a,b,c,d){a=O(a);return"undefined"!==typeof a.onwheel?(jb(a,b,c,d),0):-1},F:function(a,b){var c={};b>>=2;c.alpha=!!H[b];c.depth=!!H[b+1];c.stencil=!!H[b+2];c.antialias=!!H[b+3];c.premultipliedAlpha=!!H[b+4];c.preserveDrawingBuffer=!!H[b+5];c.powerPreference=Cb[H[b+6]];c.failIfMajorPerformanceCaveat=!!H[b+7];c.bc=H[b+8];c.sc=H[b+9];c.$b=H[b+10];c.hc=H[b+11];c.tc=H[b+12];c.uc=H[b+13];if(a=O(a))if(c.hc)c=-1;else if(a=1<c.bc?a.getContext("webgl2",
c):a.getContext("webgl",c)){b=V(wb);var d={rc:b,attributes:c,version:c.bc,Wb:a};a.canvas&&(a.canvas.mc=d);wb[b]=d;("undefined"===typeof c.$b||c.$b)&&Bb(d);c=b}else c=0;else c=-4;return c},sa:function(a,b){a=wb[a];b=F(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&kb(X);"OES_vertex_array_object"==b&&lb(X);"WEBGL_draw_buffers"==b&&ob(X);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&pb(X);return!!a.Wb.getExtension(b)},Ka:function(a){a>>=2;for(var b=0;14>b;++b)H[a+b]=0;H[a]=
H[a+1]=H[a+3]=H[a+4]=H[a+8]=H[a+10]=1},Aa:function(a){W=wb[a];e.oc=X=W&&W.Wb;return!a||X?0:-5},j:function(a){X.activeTexture(a)},E:function(a,b){X.attachShader(R[a],T[b])},c:function(a,b){35051==a?X.Zb=b:35052==a&&(X.Rb=b);X.bindBuffer(a,rb[b])},g:function(a,b){X.bindFramebuffer(a,sb[b])},I:function(a,b){X.bindRenderbuffer(a,tb[b])},a:function(a,b){X.bindTexture(a,ub[b])},V:function(a){X.bindVertexArray(vb[a])},Q:function(a,b,c,d){X.blendColor(a,b,c,d)},R:function(a,b){X.blendEquationSeparate(a,b)},
S:function(a,b,c,d){X.blendFuncSeparate(a,b,c,d)},p:function(a,b,c,d,f,h,g,m,n,p){X.blitFramebuffer(a,b,c,d,f,h,g,m,n,p)},L:function(a,b,c,d){2<=W.version?c?X.bufferData(a,E,d,c,b):X.bufferData(a,b,d):X.bufferData(a,c?E.subarray(c,c+b):b,d)},K:function(a,b,c,d){2<=W.version?X.bufferSubData(a,b,E,d,c):X.bufferSubData(a,b,E.subarray(d,d+c))},ma:function(a){X.clear(a)},pa:function(a,b,c,d){X.clearColor(a,b,c,d)},oa:function(a){X.clearDepth(a)},na:function(a){X.clearStencil(a)},t:function(a,b,c,d){X.colorMask(!!a,
!!b,!!c,!!d)},xa:function(a){X.compileShader(T[a])},Ha:function(a,b,c,d,f,h,g,m){2<=W.version?X.Rb?X.compressedTexImage2D(a,b,c,d,f,h,g,m):X.compressedTexImage2D(a,b,c,d,f,h,E,m,g):X.compressedTexImage2D(a,b,c,d,f,h,m?E.subarray(m,m+g):null)},Fa:function(a,b,c,d,f,h,g,m,n){X.Rb?X.compressedTexImage3D(a,b,c,d,f,h,g,m,n):X.compressedTexImage3D(a,b,c,d,f,h,g,E,n,m)},Da:function(){var a=V(R),b=X.createProgram();b.name=a;R[a]=b;return a},za:function(a){var b=V(T);T[b]=X.createShader(a);return b},N:function(a){X.cullFace(a)},
ua:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=rb[d];f&&(X.deleteBuffer(f),f.name=0,rb[d]=null,d==X.Zb&&(X.Zb=0),d==X.Rb&&(X.Rb=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=H[b+4*c>>2],f=sb[d];f&&(X.deleteFramebuffer(f),f.name=0,sb[d]=null)}},C:function(a){if(a){var b=R[a];b?(X.deleteProgram(b),b.name=0,R[a]=null,xb[a]=null):U(1281)}},z:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=tb[d];f&&(X.deleteRenderbuffer(f),f.name=0,tb[d]=null)}},s:function(a){if(a){var b=T[a];b?(X.deleteShader(b),
T[a]=null):U(1281)}},ta:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=ub[d];f&&(X.deleteTexture(f),f.name=0,ub[d]=null)}},Pa:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2];X.deleteVertexArray(vb[d]);vb[d]=null}},w:function(a){X.depthFunc(a)},v:function(a){X.depthMask(!!a)},b:function(a){X.disable(a)},U:function(a){X.disableVertexAttribArray(a)},_a:function(a,b,c){X.drawArrays(a,b,c)},k:function(a,b){for(var c=Db[a],d=0;d<a;d++)c[d]=H[b+4*d>>2];X.drawBuffers(c)},$a:function(a,b,c,d){X.drawElements(a,
b,c,d)},f:function(a){X.enable(a)},fb:function(a){X.enableVertexAttribArray(a)},O:function(a){X.frontFace(a)},M:function(a,b){Eb(a,b,"createBuffer",rb)},J:function(a,b){Eb(a,b,"createRenderbuffer",tb)},Ia:function(a,b){Eb(a,b,"createTexture",ub)},Oa:function(a,b){Eb(a,b,"createVertexArray",vb)},va:function(a,b){return X.getAttribLocation(R[a],F(b))},d:function(a,b){Fb(a,b)},Ba:function(a,b,c,d){a=X.getProgramInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(H[c>>2]=b)},D:function(a,
b,c){if(c)if(a>=qb)U(1281);else{var d=xb[a];if(d)if(35716==b)a=X.getProgramInfoLog(R[a]),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1;else if(35719==b)H[c>>2]=d.Yb;else if(35722==b){if(-1==d.Tb){a=R[a];var f=X.getProgramParameter(a,35721);for(b=d.Tb=0;b<f;++b)d.Tb=Math.max(d.Tb,X.getActiveAttrib(a,b).name.length+1)}H[c>>2]=d.Tb}else if(35381==b){if(-1==d.Ub)for(a=R[a],f=X.getProgramParameter(a,35382),b=d.Ub=0;b<f;++b)d.Ub=Math.max(d.Ub,X.getActiveUniformBlockName(a,b).length+1);H[c>>2]=d.Ub}else H[c>>
2]=X.getProgramParameter(R[a],b);else U(1282)}else U(1281)},wa:function(a,b,c,d){a=X.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(H[c>>2]=b)},A:function(a,b,c){c?35716==b?(a=X.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1):35720==b?(a=X.getShaderSource(T[a]),H[c>>2]=null===a||0==a.length?0:a.length+1):H[c>>2]=X.getShaderParameter(T[a],b):U(1281)},Ra:function(a){if(yb[a])return yb[a];switch(a){case 7939:var b=X.getSupportedExtensions()||
[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Gb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=X.getParameter(a))||U(1280);b=Gb(b);break;case 7938:b=X.getParameter(7938);b=2<=W.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Gb(b);break;case 35724:b=X.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Gb(b);break;default:return U(1280),0}return yb[a]=b},
Qa:function(a,b){if(2>W.version)return U(1282),0;var c=zb[a];if(c)return 0>b||b>=c.length?(U(1281),0):c[b];switch(a){case 7939:return c=X.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Gb(d)}),c=zb[a]=c,0>b||b>=c.length?(U(1281),0):c[b];default:return U(1280),0}},l:function(a,b){b=F(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=xb[a]&&xb[a].ec[b])&&0<=c&&c<a[0]?a[1]+c:
-1},Ca:function(a){X.linkProgram(R[a]);var b=R[a];a=xb[a]={ec:{},Yb:0,Tb:-1,Ub:-1};for(var c=a.ec,d=X.getProgramParameter(b,35718),f=0;f<d;++f){var h=X.getActiveUniform(b,f),g=h.name;a.Yb=Math.max(a.Yb,g.length+1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));var m=X.getUniformLocation(b,g);if(m){var n=V(S);c[g]=[h.size,n];S[n]=m;for(var p=1;p<h.size;++p)m=X.getUniformLocation(b,g+"["+p+"]"),n=V(S),S[n]=m}}},P:function(a,b){X.polygonOffset(a,b)},q:function(a){X.readBuffer(a)},Ja:function(a,
b,c,d){X.renderbufferStorage(a,b,c,d)},H:function(a,b,c,d,f){X.renderbufferStorageMultisample(a,b,c,d,f)},qa:function(a,b,c,d){X.scissor(a,b,c,d)},ya:function(a,b,c,d){for(var f="",h=0;h<b;++h){var g=d?H[d+4*h>>2]:-1;f+=F(H[c+4*h>>2],0>g?void 0:g)}X.shaderSource(T[a],f)},Na:function(a,b,c){X.stencilFunc(a,b,c)},y:function(a,b,c,d){X.stencilFuncSeparate(a,b,c,d)},u:function(a){X.stencilMask(a)},Ma:function(a,b,c){X.stencilOp(a,b,c)},x:function(a,b,c,d){X.stencilOpSeparate(a,b,c,d)},Ga:function(a,b,
c,d,f,h,g,m,n){if(2<=W.version)if(X.Rb)X.texImage2D(a,b,c,d,f,h,g,m,n);else if(n){var p=Hb(m);X.texImage2D(a,b,c,d,f,h,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else X.texImage2D(a,b,c,d,f,h,g,m,null);else X.texImage2D(a,b,c,d,f,h,g,m,n?Ib(m,g,d,f,n):null)},Ea:function(a,b,c,d,f,h,g,m,n,p){if(X.Rb)X.texImage3D(a,b,c,d,f,h,g,m,n,p);else if(p){var q=Hb(n);X.texImage3D(a,b,c,d,f,h,g,m,n,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else X.texImage3D(a,b,c,d,f,h,g,m,n,null)},G:function(a,b,c){X.texParameterf(a,
b,c)},e:function(a,b,c){X.texParameteri(a,b,c)},eb:function(a,b,c){if(2<=W.version)X.uniform1fv(S[a],I,c>>2,b);else{if(288>=b)for(var d=Y[b-1],f=0;f<b;++f)d[f]=I[c+4*f>>2];else d=I.subarray(c>>2,c+4*b>>2);X.uniform1fv(S[a],d)}},B:function(a,b){X.uniform1i(S[a],b)},db:function(a,b,c){if(2<=W.version)X.uniform2fv(S[a],I,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],f=0;f<2*b;f+=2)d[f]=I[c+4*f>>2],d[f+1]=I[c+(4*f+4)>>2];else d=I.subarray(c>>2,c+8*b>>2);X.uniform2fv(S[a],d)}},cb:function(a,b,c){if(2<=W.version)X.uniform3fv(S[a],
I,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],f=0;f<3*b;f+=3)d[f]=I[c+4*f>>2],d[f+1]=I[c+(4*f+4)>>2],d[f+2]=I[c+(4*f+8)>>2];else d=I.subarray(c>>2,c+12*b>>2);X.uniform3fv(S[a],d)}},bb:function(a,b,c){if(2<=W.version)X.uniform4fv(S[a],I,c>>2,4*b);else{if(72>=b){var d=Y[4*b-1],f=I;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=f[g];d[h+1]=f[g+1];d[h+2]=f[g+2];d[h+3]=f[g+3]}}else d=I.subarray(c>>2,c+16*b>>2);X.uniform4fv(S[a],d)}},ab:function(a,b,c,d){if(2<=W.version)X.uniformMatrix4fv(S[a],!!c,I,d>>2,
16*b);else{if(18>=b){var f=Y[16*b-1],h=I;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;f[g]=h[m];f[g+1]=h[m+1];f[g+2]=h[m+2];f[g+3]=h[m+3];f[g+4]=h[m+4];f[g+5]=h[m+5];f[g+6]=h[m+6];f[g+7]=h[m+7];f[g+8]=h[m+8];f[g+9]=h[m+9];f[g+10]=h[m+10];f[g+11]=h[m+11];f[g+12]=h[m+12];f[g+13]=h[m+13];f[g+14]=h[m+14];f[g+15]=h[m+15]}}else f=I.subarray(d>>2,d+64*b>>2);X.uniformMatrix4fv(S[a],!!c,f)}},r:function(a){X.useProgram(R[a])},gb:function(a,b){X.vertexAttribDivisor(a,b)},hb:function(a,b,c,d,f,h){X.vertexAttribPointer(a,
b,c,!!d,f,h)},ra:function(a,b,c,d){X.viewport(a,b,c,d)},memory:B,Va:function(){e.cc=function(a){0!=Lb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.cc)},Ua:function(){e.dc=function(a){a=a.clipboardData.getData("text");na([a])};window.addEventListener("paste",e.dc)},o:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Mb()});document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},
m:function(){document.getElementById("_sokol_app_input_element").blur()},Ta:function(){window.removeEventListener("beforeunload",e.cc)},Sa:function(){window.removeEventListener("paste",e.dc)},la:function(a,b,c,d,f,h){b=F(b);var g=new XMLHttpRequest;g.open("GET",b);g.responseType="arraybuffer";var m=0<d;m&&g.setRequestHeader("Range","bytes="+c+"-"+(c+d));g.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!m){var n=new Uint8Array(g.response),p=n.length;
p<=h?(E.set(n,f),Nb(a,d,p)):Ob(a)}else Pb(a,this.status)};g.send()},Za:function(a,b){b=F(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var d=this.getResponseHeader("Content-Length");Qb(a,d)}else Pb(a,this.status)};c.send()},table:ka};
(function(){function a(f){e.asm=f.exports;K--;e.monitorRunDependencies&&e.monitorRunDependencies(K);0==K&&(null!==Ga&&(clearInterval(Ga),Ga=null),Ha&&(f=Ha,Ha=null,f()))}function b(f){a(f.instance)}function c(f){return Ma().then(function(h){return WebAssembly.instantiate(h,d)}).then(f,function(h){z("failed to asynchronously prepare wasm: "+h);x(h)})}var d={a:Rb};K++;e.monitorRunDependencies&&e.monitorRunDependencies(K);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return z("Module.instantiateWasm callback failed with error: "+
f),!1}(function(){if(A||"function"!==typeof WebAssembly.instantiateStreaming||Ja()||Ia("file://")||"function"!==typeof fetch)return c(b);fetch(L,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(h){z("wasm streaming compile failed: "+h);z("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var Na=e.___wasm_call_ctors=function(){return(Na=e.___wasm_call_ctors=e.asm.ib).apply(null,arguments)},P=e._malloc=function(){return(P=e._malloc=e.asm.jb).apply(null,arguments)},Mb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Mb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.kb).apply(null,arguments)};e.___em_js__sapp_js_create_textfield=function(){return(e.___em_js__sapp_js_create_textfield=e.asm.lb).apply(null,arguments)};
e.___em_js__sapp_js_focus_textfield=function(){return(e.___em_js__sapp_js_focus_textfield=e.asm.mb).apply(null,arguments)};e.___em_js__sapp_js_unfocus_textfield=function(){return(e.___em_js__sapp_js_unfocus_textfield=e.asm.nb).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.ob).apply(null,arguments)};var Lb=e.__sapp_html5_get_ask_leave_site=function(){return(Lb=e.__sapp_html5_get_ask_leave_site=e.asm.pb).apply(null,arguments)};
e.___em_js__sapp_add_js_hook_beforeunload=function(){return(e.___em_js__sapp_add_js_hook_beforeunload=e.asm.qb).apply(null,arguments)};e.___em_js__sapp_remove_js_hook_beforeunload=function(){return(e.___em_js__sapp_remove_js_hook_beforeunload=e.asm.rb).apply(null,arguments)};e.___em_js__sapp_add_js_hook_clipboard=function(){return(e.___em_js__sapp_add_js_hook_clipboard=e.asm.sb).apply(null,arguments)};
e.___em_js__sapp_remove_js_hook_clipboard=function(){return(e.___em_js__sapp_remove_js_hook_clipboard=e.asm.tb).apply(null,arguments)};e.___em_js__sapp_js_write_clipboard=function(){return(e.___em_js__sapp_js_write_clipboard=e.asm.ub).apply(null,arguments)};e._main=function(){return(e._main=e.asm.vb).apply(null,arguments)};e.___em_js__stm_js_perfnow=function(){return(e.___em_js__stm_js_perfnow=e.asm.wb).apply(null,arguments)};
e.__saudio_emsc_pull=function(){return(e.__saudio_emsc_pull=e.asm.xb).apply(null,arguments)};e.___em_js__saudio_js_init=function(){return(e.___em_js__saudio_js_init=e.asm.yb).apply(null,arguments)};e.___em_js__saudio_js_sample_rate=function(){return(e.___em_js__saudio_js_sample_rate=e.asm.zb).apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return(e.___em_js__saudio_js_buffer_frames=e.asm.Ab).apply(null,arguments)};
e.___em_js__sfetch_js_send_head_request=function(){return(e.___em_js__sfetch_js_send_head_request=e.asm.Bb).apply(null,arguments)};e.___em_js__sfetch_js_send_get_request=function(){return(e.___em_js__sfetch_js_send_get_request=e.asm.Cb).apply(null,arguments)};
var Qb=e.__sfetch_emsc_head_response=function(){return(Qb=e.__sfetch_emsc_head_response=e.asm.Db).apply(null,arguments)},Nb=e.__sfetch_emsc_get_response=function(){return(Nb=e.__sfetch_emsc_get_response=e.asm.Eb).apply(null,arguments)},Pb=e.__sfetch_emsc_failed_http_status=function(){return(Pb=e.__sfetch_emsc_failed_http_status=e.asm.Fb).apply(null,arguments)},Ob=e.__sfetch_emsc_failed_buffer_too_small=function(){return(Ob=e.__sfetch_emsc_failed_buffer_too_small=e.asm.Gb).apply(null,arguments)},pa=
e.stackSave=function(){return(pa=e.stackSave=e.asm.Hb).apply(null,arguments)},qa=e.stackRestore=function(){return(qa=e.stackRestore=e.asm.Ib).apply(null,arguments)},C=e.stackAlloc=function(){return(C=e.stackAlloc=e.asm.Jb).apply(null,arguments)};e.dynCall_vi=function(){return(e.dynCall_vi=e.asm.Kb).apply(null,arguments)};e.dynCall_v=function(){return(e.dynCall_v=e.asm.Lb).apply(null,arguments)};
var Q=e.dynCall_iiii=function(){return(Q=e.dynCall_iiii=e.asm.Mb).apply(null,arguments)},Kb=e.dynCall_idi=function(){return(Kb=e.dynCall_idi=e.asm.Nb).apply(null,arguments)},Sb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Ha=function Tb(){Sb||Ub();Sb||(Ha=Tb)};
function Ub(a){function b(){if(!Sb&&(Sb=!0,e.calledRun=!0,!la)){za(Ba);za(Ca);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Vb){var c=a,d=e._main;c=c||[];var f=c.length+1,h=C(4*(f+1));H[h>>2]=ta(aa);for(var g=1;g<f;g++)H[(h>>2)+g]=ta(c[g-1]);H[(h>>2)+f]=0;try{var m=d(f,h);if(!noExitRuntime||0!==m){if(!noExitRuntime&&(la=!0,e.onExit))e.onExit(m);t(m,new ia(m))}}catch(n){n instanceof ia||("unwind"==n?noExitRuntime=!0:((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),z("exception thrown: "+
c),t(1,n)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Ea.unshift(c);za(Ea)}}a=a||r;if(!(0<K)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Fa();za(Aa);0<K||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Ub;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();
var Vb=!0;e.noInitialRun&&(Vb=!1);noExitRuntime=!0;Ub();
