
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in e)e.hasOwnProperty(l)&&(k[l]=e[l]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,w,fa,ha;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},w=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",
ja),t=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
var ka=e.print||console.log.bind(console),x=e.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(e[l]=k[l]);k=null;e.arguments&&(r=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var z;e.wasmBinary&&(z=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&x("no native wasm support detected");var A,la=new WebAssembly.Table({initial:19,maximum:19,element:"anyfunc"}),ma=!1;
function assert(a,b){a||ja("Assertion failed: "+b)}function na(){var a=e.__sapp_emsc_onpaste;assert(a,"Cannot call unknown function _sapp_emsc_onpaste, make sure it is exported");return a}
function oa(a){var b=["string"],c={string:function(m){var q=0;if(null!==m&&void 0!==m&&0!==m){var p=(m.length<<2)+1;q=B(p);C(m,D,q,p)}return q},array:function(m){var q=B(m.length);pa.set(m,q);return q}},d=na(),f=[],h=0;if(a)for(var g=0;g<a.length;g++){var n=c[b[g]];n?(0===h&&(h=qa()),f[g]=n(a[g])):f[g]=a[g]}d.apply(null,f);0!==h&&ra(h)}var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function E(a,b){if(a){var c=D,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&sa)a=sa.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var h=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|h);else{var g=c[a++]&63;f=224==(f&240)?(f&15)<<12|h<<6|g:(f&7)<<18|h<<12|g<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function C(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var n=a.charCodeAt(++h);g=65536+((g&1023)<<10)|n&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ua(a){var b=ta(a)+1,c=B(b);C(a,pa,c,b);return c}var F,pa,D,va,G,H,I;
function wa(a){F=a;e.HEAP8=pa=new Int8Array(a);e.HEAP16=va=new Int16Array(a);e.HEAP32=G=new Int32Array(a);e.HEAPU8=D=new Uint8Array(a);e.HEAPU16=new Uint16Array(a);e.HEAPU32=new Uint32Array(a);e.HEAPF32=H=new Float32Array(a);e.HEAPF64=I=new Float64Array(a)}var xa=e.INITIAL_MEMORY||33554432;e.wasmMemory?A=e.wasmMemory:A=new WebAssembly.Memory({initial:xa/65536,maximum:32768});A&&(F=A.buffer);xa=F.byteLength;wa(F);G[8856]=5278464;
function ya(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.Ub;"number"===typeof c?void 0===b.Ib?e.dynCall_v(c):e.dynCall_vi(c,b.Ib):c(void 0===b.Ib?null:b.Ib)}}}var za=[],Aa=[],Ba=[],Ca=[],Da=[];function Ea(){var a=e.preRun.shift();za.unshift(a)}var J=0,Fa=null,K=null;e.preloadedImages={};e.preloadedAudios={};function ja(a){if(e.onAbort)e.onAbort(a);ka(a);x(a);ma=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Ga(a){var b=L;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Ha(){return Ga("data:application/octet-stream;base64,")}var L="blend-sapp.wasm";if(!Ha()){var Ia=L;L=e.locateFile?e.locateFile(Ia,v):v+Ia}function Ja(){try{if(z)return new Uint8Array(z);if(w)return w(L);throw"both async and sync fetching of the wasm failed";}catch(a){ja(a)}}
function Ka(){return z||!ba&&!u||"function"!==typeof fetch||Ga("file://")?new Promise(function(a){a(Ja())}):fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return Ja()})}Aa.push({Ub:function(){La()}});function Ma(){for(var a=M.length-1;0<=a;--a)Na(a);M=[];Oa=[]}var Oa=[];function Pa(){if(Qa.Nb&&Ra.Gb)for(var a=0;a<Oa.length;++a){var b=Oa[a];Oa.splice(a,1);--a;b.hc.apply(null,b.Zb)}}var M=[];
function Na(a){var b=M[a];b.target.removeEventListener(b.Ab,b.Sb,b.Bb);M.splice(a,1)}function N(a){function b(d){++Qa.Nb;Ra=a;Pa();a.Db(d);Pa();--Qa.Nb}if(a.Cb)a.Sb=b,a.target.addEventListener(a.Ab,b,a.Bb),M.push(a),Sa||(Ca.push(Ma),Sa=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].Ab==a.Ab&&Na(c--)}var Qa={},Sa,Ra,Ta,Ua,Va,Wa,Xa,Ya,Za,$a=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function O(a){a=2<a?E(a):a;return $a[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function ab(a){return 0>$a.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function bb(a,b,c,d,f,h){Ta||(Ta=P(164));a={target:O(a),Gb:!0,Ab:h,Cb:d,Db:function(g){var n=Ta,m=n>>2;G[m]=g.location;G[m+1]=g.ctrlKey;G[m+2]=g.shiftKey;G[m+3]=g.altKey;G[m+4]=g.metaKey;G[m+5]=g.repeat;G[m+6]=g.charCode;G[m+7]=g.keyCode;G[m+8]=g.which;C(g.key||"",D,n+36,32);C(g.code||"",D,n+68,32);C(g.char||"",D,n+100,32);C(g.locale||"",D,n+132,32);Q(d,f,n,b)&&g.preventDefault()},Bb:c};N(a)}
function cb(a,b,c){G[a>>2]=b.screenX;G[a+4>>2]=b.screenY;G[a+8>>2]=b.clientX;G[a+12>>2]=b.clientY;G[a+16>>2]=b.ctrlKey;G[a+20>>2]=b.shiftKey;G[a+24>>2]=b.altKey;G[a+28>>2]=b.metaKey;va[a+32>>1]=b.button;va[a+34>>1]=b.buttons;var d=b.movementY||b.screenY-Va;G[a+36>>2]=b.movementX||b.screenX-Ua;G[a+40>>2]=d;c=ab(c);G[a+44>>2]=b.clientX-c.left;G[a+48>>2]=b.clientY-c.top;"wheel"!==b.type&&(Ua=b.screenX,Va=b.screenY)}
function db(a,b,c,d,f,h){Wa||(Wa=P(64));a=O(a);N({target:a,Gb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Ab:h,Cb:d,Db:function(g){g=g||event;cb(Wa,g,a);Q(d,f,Wa,b)&&g.preventDefault()},Bb:c})}
function eb(a,b,c,d){Xa||(Xa=P(36));a=O(a);N({target:a,Ab:"resize",Cb:d,Db:function(f){f=f||event;if(f.target==a){var h=Xa,g=document.body;G[h>>2]=f.detail;G[h+4>>2]=g.clientWidth;G[h+8>>2]=g.clientHeight;G[h+12>>2]=innerWidth;G[h+16>>2]=innerHeight;G[h+20>>2]=outerWidth;G[h+24>>2]=outerHeight;G[h+28>>2]=pageXOffset;G[h+32>>2]=pageYOffset;Q(d,10,h,b)&&f.preventDefault()}},Bb:c})}
function fb(a,b,c,d,f,h){Ya||(Ya=P(1684));a=O(a);N({target:a,Gb:"touchstart"==h||"touchend"==h,Ab:h,Cb:d,Db:function(g){for(var n={},m=g.touches,q=0;q<m.length;++q){var p=m[q];n[p.identifier]=p}m=g.changedTouches;for(q=0;q<m.length;++q)p=m[q],p.Wb=1,n[p.identifier]=p;m=g.targetTouches;for(q=0;q<m.length;++q)n[m[q].identifier].Xb=1;m=Ya;p=m>>2;G[p+1]=g.ctrlKey;G[p+2]=g.shiftKey;G[p+3]=g.altKey;G[p+4]=g.metaKey;p+=5;var gb=ab(a),hb=0;for(q in n){var y=n[q];G[p]=y.identifier;G[p+1]=y.screenX;G[p+2]=
y.screenY;G[p+3]=y.clientX;G[p+4]=y.clientY;G[p+5]=y.pageX;G[p+6]=y.pageY;G[p+7]=y.Wb;G[p+8]=y.Xb;G[p+9]=y.clientX-gb.left;G[p+10]=y.clientY-gb.top;p+=13;if(31<++hb)break}G[m>>2]=hb;Q(d,f,m,b)&&g.preventDefault()},Bb:c})}function ib(a,b,c,d,f,h){a={target:O(a),Ab:h,Cb:d,Db:function(g){g=g||event;Q(d,f,0,b)&&g.preventDefault()},Bb:c};N(a)}
function jb(a,b,c,d){Za||(Za=P(96));N({target:a,Gb:!0,Ab:"wheel",Cb:d,Db:function(f){f=f||event;var h=Za;cb(h,f,a);I[h+64>>3]=f.deltaX;I[h+72>>3]=f.deltaY;I[h+80>>3]=f.deltaZ;G[h+88>>2]=f.deltaMode;Q(d,9,h,b)&&f.preventDefault()},Bb:c})}
function kb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,h){b.drawArraysInstancedANGLE(c,d,f,h)},a.drawElementsInstanced=function(c,d,f,h,g){b.drawElementsInstancedANGLE(c,d,f,h,g)})}
function lb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function mb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function nb(a){a.ac=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}var ob=1,pb=[],R=[],qb=[],rb=[],sb=[],S=[],T=[],tb=[],ub=[],vb={},wb={},xb={};function U(a){yb||(yb=a)}function V(a){for(var b=ob++,c=a.length;c<b;c++)a[c]=null;return b}
function zb(a){a||(a=W);if(!a.Vb){a.Vb=!0;var b=a.Hb;kb(b);lb(b);mb(b);nb(b);b.bc=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");(b.getSupportedExtensions()||
[]).forEach(function(d){-1!=c.indexOf(d)&&b.getExtension(d)})}}var yb,W,Ab=["default","low-power","high-performance"],Bb=[];function Cb(a,b,c,d){for(var f=0;f<a;f++){var h=X[c](),g=h&&V(d);h?(h.name=g,d[g]=h):U(1282);G[b+4*f>>2]=g}}
function Db(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=X.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){U(1282);return}c=2*(X.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>W.version){U(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=X.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":U(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:U(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)G[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){U(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:U(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}G[b>>2]=c}else U(1281)}
function Eb(a){var b=ta(a)+1,c=P(b);C(a,D,c,b);return c}for(var Y=[],X,Z=0;32>Z;++Z)Bb.push(Array(Z));var Fb=new Float32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Fb.subarray(0,Z+1);
var Jb={V:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ea:function(a,b,c){a=O(a);if(!a)return-4;a=ab(a);I[b>>3]=a.width;I[c>>3]=a.height;return 0},Ta:function(a,b,c){D.copyWithin(a,b,b+c)},Ka:function(a,b){function c(d){Gb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Ua:function(a){a>>>=0;var b=D.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);
a:{try{A.grow(Math.min(2147483648,d)-F.byteLength+65535>>>16);wa(A.buffer);var f=1;break a}catch(h){}f=void 0}if(f)return!0}return!1},Q:function(a,b,c){a=O(a);if(!a)return-4;a.width=b;a.height=c;return 0},_:function(a,b,c,d){bb(a,b,c,d,2,"keydown");return 0},Y:function(a,b,c,d){bb(a,b,c,d,1,"keypress");return 0},Z:function(a,b,c,d){bb(a,b,c,d,3,"keyup");return 0},v:function(a,b,c,d){db(a,b,c,d,5,"mousedown");return 0},ba:function(a,b,c,d){db(a,b,c,d,33,"mouseenter");return 0},aa:function(a,b,c,d){db(a,
b,c,d,34,"mouseleave");return 0},ca:function(a,b,c,d){db(a,b,c,d,8,"mousemove");return 0},da:function(a,b,c,d){db(a,b,c,d,6,"mouseup");return 0},Va:function(a,b,c,d){eb(a,b,c,d);return 0},T:function(a,b,c,d){fb(a,b,c,d,25,"touchcancel");return 0},U:function(a,b,c,d){fb(a,b,c,d,23,"touchend");return 0},W:function(a,b,c,d){fb(a,b,c,d,24,"touchmove");return 0},X:function(a,b,c,d){fb(a,b,c,d,22,"touchstart");return 0},S:function(a,b,c,d){ib(a,b,c,d,31,"webglcontextlost");return 0},R:function(a,b,c,d){ib(a,
b,c,d,32,"webglcontextrestored");return 0},$:function(a,b,c,d){a=O(a);return"undefined"!==typeof a.onwheel?(jb(a,b,c,d),0):-1},D:function(a,b){var c={};b>>=2;c.alpha=!!G[b];c.depth=!!G[b+1];c.stencil=!!G[b+2];c.antialias=!!G[b+3];c.premultipliedAlpha=!!G[b+4];c.preserveDrawingBuffer=!!G[b+5];c.powerPreference=Ab[G[b+6]];c.failIfMajorPerformanceCaveat=!!G[b+7];c.Ob=G[b+8];c.dc=G[b+9];c.Mb=G[b+10];c.Tb=G[b+11];c.ec=G[b+12];c.fc=G[b+13];if(a=O(a))if(c.Tb)c=-1;else if(a=1<c.Ob?a.getContext("webgl2",c):
a.getContext("webgl",c)){b=V(ub);var d={cc:b,attributes:c,version:c.Ob,Hb:a};a.canvas&&(a.canvas.Yb=d);ub[b]=d;("undefined"===typeof c.Mb||c.Mb)&&zb(d);c=b}else c=0;else c=-4;return c},va:function(a,b){a=ub[a];b=E(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&kb(X);"OES_vertex_array_object"==b&&lb(X);"WEBGL_draw_buffers"==b&&mb(X);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&nb(X);return!!a.Hb.getExtension(b)},Ha:function(a){a>>=2;for(var b=0;14>b;++b)G[a+b]=0;G[a]=
G[a+1]=G[a+3]=G[a+4]=G[a+8]=G[a+10]=1},Ba:function(a){W=ub[a];e.$b=X=W&&W.Hb;return!a||X?0:-5},l:function(a){X.activeTexture(a)},E:function(a,b){X.attachShader(R[a],T[b])},c:function(a,b){35051==a?X.Kb=b:35052==a&&(X.Lb=b);X.bindBuffer(a,pb[b])},f:function(a,b){X.bindFramebuffer(a,qb[b])},a:function(a,b){X.bindTexture(a,sb[b])},P:function(a){X.bindVertexArray(tb[a])},L:function(a,b,c,d){X.blendColor(a,b,c,d)},M:function(a,b){X.blendEquationSeparate(a,b)},N:function(a,b,c,d){X.blendFuncSeparate(a,
b,c,d)},h:function(a,b,c,d,f,h,g,n,m,q){X.blitFramebuffer(a,b,c,d,f,h,g,n,m,q)},G:function(a,b,c,d){2<=W.version?c?X.bufferData(a,D,d,c,b):X.bufferData(a,b,d):X.bufferData(a,c?D.subarray(c,c+b):b,d)},F:function(a,b,c,d){2<=W.version?X.bufferSubData(a,b,D,d,c):X.bufferSubData(a,b,D.subarray(d,d+c))},pa:function(a){X.clear(a)},sa:function(a,b,c,d){X.clearColor(a,b,c,d)},ra:function(a){X.clearDepth(a)},qa:function(a){X.clearStencil(a)},r:function(a,b,c,d){X.colorMask(!!a,!!b,!!c,!!d)},Aa:function(a){X.compileShader(T[a])},
Ga:function(){var a=V(R),b=X.createProgram();b.name=a;R[a]=b;return a},Da:function(a){var b=V(T);T[b]=X.createShader(a);return b},I:function(a){X.cullFace(a)},xa:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=pb[d];f&&(X.deleteBuffer(f),f.name=0,pb[d]=null,d==X.Kb&&(X.Kb=0),d==X.Lb&&(X.Lb=0))}},g:function(a,b){for(var c=0;c<a;++c){var d=G[b+4*c>>2],f=qb[d];f&&(X.deleteFramebuffer(f),f.name=0,qb[d]=null)}},B:function(a){if(a){var b=R[a];b?(X.deleteProgram(b),b.name=0,R[a]=null,vb[a]=null):
U(1281)}},y:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=rb[d];f&&(X.deleteRenderbuffer(f),f.name=0,rb[d]=null)}},q:function(a){if(a){var b=T[a];b?(X.deleteShader(b),T[a]=null):U(1281)}},wa:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],f=sb[d];f&&(X.deleteTexture(f),f.name=0,sb[d]=null)}},Ma:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2];X.deleteVertexArray(tb[d]);tb[d]=null}},u:function(a){X.depthFunc(a)},t:function(a){X.depthMask(!!a)},b:function(a){X.disable(a)},O:function(a){X.disableVertexAttribArray(a)},
fa:function(a,b,c){X.drawArrays(a,b,c)},j:function(a,b){for(var c=Bb[a],d=0;d<a;d++)c[d]=G[b+4*d>>2];X.drawBuffers(c)},ga:function(a,b,c,d){X.drawElements(a,b,c,d)},e:function(a){X.enable(a)},ma:function(a){X.enableVertexAttribArray(a)},J:function(a){X.frontFace(a)},H:function(a,b){Cb(a,b,"createBuffer",pb)},La:function(a,b){Cb(a,b,"createVertexArray",tb)},ya:function(a,b){return X.getAttribLocation(R[a],E(b))},d:function(a,b){Db(a,b)},Ea:function(a,b,c,d){a=X.getProgramInfoLog(R[a]);null===a&&(a=
"(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(G[c>>2]=b)},C:function(a,b,c){if(c)if(a>=ob)U(1281);else{var d=vb[a];if(d)if(35716==b)a=X.getProgramInfoLog(R[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1;else if(35719==b)G[c>>2]=d.Jb;else if(35722==b){if(-1==d.Eb){a=R[a];var f=X.getProgramParameter(a,35721);for(b=d.Eb=0;b<f;++b)d.Eb=Math.max(d.Eb,X.getActiveAttrib(a,b).name.length+1)}G[c>>2]=d.Eb}else if(35381==b){if(-1==d.Fb)for(a=R[a],f=X.getProgramParameter(a,35382),b=d.Fb=0;b<f;++b)d.Fb=
Math.max(d.Fb,X.getActiveUniformBlockName(a,b).length+1);G[c>>2]=d.Fb}else G[c>>2]=X.getProgramParameter(R[a],b);else U(1282)}else U(1281)},za:function(a,b,c,d){a=X.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(G[c>>2]=b)},z:function(a,b,c){c?35716==b?(a=X.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1):35720==b?(a=X.getShaderSource(T[a]),G[c>>2]=null===a||0==a.length?0:a.length+1):G[c>>2]=X.getShaderParameter(T[a],b):U(1281)},Oa:function(a){if(wb[a])return wb[a];
switch(a){case 7939:var b=X.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Eb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=X.getParameter(a))||U(1280);b=Eb(b);break;case 7938:b=X.getParameter(7938);b=2<=W.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Eb(b);break;case 35724:b=X.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=
Eb(b);break;default:return U(1280),0}return wb[a]=b},Na:function(a,b){if(2>W.version)return U(1282),0;var c=xb[a];if(c)return 0>b||b>=c.length?(U(1281),0):c[b];switch(a){case 7939:return c=X.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Eb(d)}),c=xb[a]=c,0>b||b>=c.length?(U(1281),0):c[b];default:return U(1280),0}},k:function(a,b){b=E(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,
d)}return(a=vb[a]&&vb[a].Rb[b])&&0<=c&&c<a[0]?a[1]+c:-1},Fa:function(a){X.linkProgram(R[a]);var b=R[a];a=vb[a]={Rb:{},Jb:0,Eb:-1,Fb:-1};for(var c=a.Rb,d=X.getProgramParameter(b,35718),f=0;f<d;++f){var h=X.getActiveUniform(b,f),g=h.name;a.Jb=Math.max(a.Jb,g.length+1);"]"==g.slice(-1)&&(g=g.slice(0,g.lastIndexOf("[")));var n=X.getUniformLocation(b,g);if(n){var m=V(S);c[g]=[h.size,m];S[m]=n;for(var q=1;q<h.size;++q)n=X.getUniformLocation(b,g+"["+q+"]"),m=V(S),S[m]=n}}},K:function(a,b){X.polygonOffset(a,
b)},i:function(a){X.readBuffer(a)},ta:function(a,b,c,d){X.scissor(a,b,c,d)},Ca:function(a,b,c,d){for(var f="",h=0;h<b;++h){var g=d?G[d+4*h>>2]:-1;f+=E(G[c+4*h>>2],0>g?void 0:g)}X.shaderSource(T[a],f)},Ja:function(a,b,c){X.stencilFunc(a,b,c)},x:function(a,b,c,d){X.stencilFuncSeparate(a,b,c,d)},s:function(a){X.stencilMask(a)},Ia:function(a,b,c){X.stencilOp(a,b,c)},w:function(a,b,c,d){X.stencilOpSeparate(a,b,c,d)},la:function(a,b,c){if(2<=W.version)X.uniform1fv(S[a],H,c>>2,b);else{if(288>=b)for(var d=
Y[b-1],f=0;f<b;++f)d[f]=H[c+4*f>>2];else d=H.subarray(c>>2,c+4*b>>2);X.uniform1fv(S[a],d)}},A:function(a,b){X.uniform1i(S[a],b)},ka:function(a,b,c){if(2<=W.version)X.uniform2fv(S[a],H,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],f=0;f<2*b;f+=2)d[f]=H[c+4*f>>2],d[f+1]=H[c+(4*f+4)>>2];else d=H.subarray(c>>2,c+8*b>>2);X.uniform2fv(S[a],d)}},ja:function(a,b,c){if(2<=W.version)X.uniform3fv(S[a],H,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],f=0;f<3*b;f+=3)d[f]=H[c+4*f>>2],d[f+1]=H[c+(4*f+4)>>2],d[f+2]=H[c+
(4*f+8)>>2];else d=H.subarray(c>>2,c+12*b>>2);X.uniform3fv(S[a],d)}},ia:function(a,b,c){if(2<=W.version)X.uniform4fv(S[a],H,c>>2,4*b);else{if(72>=b){var d=Y[4*b-1],f=H;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=f[g];d[h+1]=f[g+1];d[h+2]=f[g+2];d[h+3]=f[g+3]}}else d=H.subarray(c>>2,c+16*b>>2);X.uniform4fv(S[a],d)}},ha:function(a,b,c,d){if(2<=W.version)X.uniformMatrix4fv(S[a],!!c,H,d>>2,16*b);else{if(18>=b){var f=Y[16*b-1],h=H;d>>=2;for(var g=0;g<16*b;g+=16){var n=d+g;f[g]=h[n];f[g+1]=h[n+1];f[g+
2]=h[n+2];f[g+3]=h[n+3];f[g+4]=h[n+4];f[g+5]=h[n+5];f[g+6]=h[n+6];f[g+7]=h[n+7];f[g+8]=h[n+8];f[g+9]=h[n+9];f[g+10]=h[n+10];f[g+11]=h[n+11];f[g+12]=h[n+12];f[g+13]=h[n+13];f[g+14]=h[n+14];f[g+15]=h[n+15]}}else f=H.subarray(d>>2,d+64*b>>2);X.uniformMatrix4fv(S[a],!!c,f)}},p:function(a){X.useProgram(R[a])},na:function(a,b){X.vertexAttribDivisor(a,b)},oa:function(a,b,c,d,f,h){X.vertexAttribPointer(a,b,c,!!d,f,h)},ua:function(a,b,c,d){X.viewport(a,b,c,d)},memory:A,Sa:function(){e.Pb=function(a){0!=Hb()&&
(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.Pb)},Ra:function(){e.Qb=function(a){a=a.clipboardData.getData("text");oa([a])};window.addEventListener("paste",e.Qb)},o:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Ib()});document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},m:function(){document.getElementById("_sokol_app_input_element").blur()},
Qa:function(){window.removeEventListener("beforeunload",e.Pb)},Pa:function(){window.removeEventListener("paste",e.Qb)},table:la};
(function(){function a(f){e.asm=f.exports;J--;e.monitorRunDependencies&&e.monitorRunDependencies(J);0==J&&(null!==Fa&&(clearInterval(Fa),Fa=null),K&&(f=K,K=null,f()))}function b(f){a(f.instance)}function c(f){return Ka().then(function(h){return WebAssembly.instantiate(h,d)}).then(f,function(h){x("failed to asynchronously prepare wasm: "+h);ja(h)})}var d={a:Jb};J++;e.monitorRunDependencies&&e.monitorRunDependencies(J);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return x("Module.instantiateWasm callback failed with error: "+
f),!1}(function(){if(z||"function"!==typeof WebAssembly.instantiateStreaming||Ha()||Ga("file://")||"function"!==typeof fetch)return c(b);fetch(L,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(h){x("wasm streaming compile failed: "+h);x("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var La=e.___wasm_call_ctors=function(){return(La=e.___wasm_call_ctors=e.asm.Wa).apply(null,arguments)},Ib=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Ib=e.__sapp_emsc_notify_keyboard_hidden=e.asm.Xa).apply(null,arguments)};e.___em_js__sapp_js_create_textfield=function(){return(e.___em_js__sapp_js_create_textfield=e.asm.Ya).apply(null,arguments)};e.___em_js__sapp_js_focus_textfield=function(){return(e.___em_js__sapp_js_focus_textfield=e.asm.Za).apply(null,arguments)};
e.___em_js__sapp_js_unfocus_textfield=function(){return(e.___em_js__sapp_js_unfocus_textfield=e.asm._a).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.$a).apply(null,arguments)};var Hb=e.__sapp_html5_get_ask_leave_site=function(){return(Hb=e.__sapp_html5_get_ask_leave_site=e.asm.ab).apply(null,arguments)};e.___em_js__sapp_add_js_hook_beforeunload=function(){return(e.___em_js__sapp_add_js_hook_beforeunload=e.asm.bb).apply(null,arguments)};
e.___em_js__sapp_remove_js_hook_beforeunload=function(){return(e.___em_js__sapp_remove_js_hook_beforeunload=e.asm.cb).apply(null,arguments)};e.___em_js__sapp_add_js_hook_clipboard=function(){return(e.___em_js__sapp_add_js_hook_clipboard=e.asm.db).apply(null,arguments)};e.___em_js__sapp_remove_js_hook_clipboard=function(){return(e.___em_js__sapp_remove_js_hook_clipboard=e.asm.eb).apply(null,arguments)};
e.___em_js__sapp_js_write_clipboard=function(){return(e.___em_js__sapp_js_write_clipboard=e.asm.fb).apply(null,arguments)};e._main=function(){return(e._main=e.asm.gb).apply(null,arguments)};e.___em_js__stm_js_perfnow=function(){return(e.___em_js__stm_js_perfnow=e.asm.hb).apply(null,arguments)};e.__saudio_emsc_pull=function(){return(e.__saudio_emsc_pull=e.asm.ib).apply(null,arguments)};e.___em_js__saudio_js_init=function(){return(e.___em_js__saudio_js_init=e.asm.jb).apply(null,arguments)};
e.___em_js__saudio_js_sample_rate=function(){return(e.___em_js__saudio_js_sample_rate=e.asm.kb).apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return(e.___em_js__saudio_js_buffer_frames=e.asm.lb).apply(null,arguments)};e.___em_js__sfetch_js_send_head_request=function(){return(e.___em_js__sfetch_js_send_head_request=e.asm.mb).apply(null,arguments)};e.___em_js__sfetch_js_send_get_request=function(){return(e.___em_js__sfetch_js_send_get_request=e.asm.nb).apply(null,arguments)};
e.__sfetch_emsc_head_response=function(){return(e.__sfetch_emsc_head_response=e.asm.ob).apply(null,arguments)};e.__sfetch_emsc_get_response=function(){return(e.__sfetch_emsc_get_response=e.asm.pb).apply(null,arguments)};e.__sfetch_emsc_failed_http_status=function(){return(e.__sfetch_emsc_failed_http_status=e.asm.qb).apply(null,arguments)};e.__sfetch_emsc_failed_buffer_too_small=function(){return(e.__sfetch_emsc_failed_buffer_too_small=e.asm.rb).apply(null,arguments)};
var P=e._malloc=function(){return(P=e._malloc=e.asm.sb).apply(null,arguments)},qa=e.stackSave=function(){return(qa=e.stackSave=e.asm.tb).apply(null,arguments)},ra=e.stackRestore=function(){return(ra=e.stackRestore=e.asm.ub).apply(null,arguments)},B=e.stackAlloc=function(){return(B=e.stackAlloc=e.asm.vb).apply(null,arguments)};e.dynCall_vi=function(){return(e.dynCall_vi=e.asm.wb).apply(null,arguments)};e.dynCall_v=function(){return(e.dynCall_v=e.asm.xb).apply(null,arguments)};
var Q=e.dynCall_iiii=function(){return(Q=e.dynCall_iiii=e.asm.yb).apply(null,arguments)},Gb=e.dynCall_idi=function(){return(Gb=e.dynCall_idi=e.asm.zb).apply(null,arguments)},Kb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}K=function Lb(){Kb||Mb();Kb||(K=Lb)};
function Mb(a){function b(){if(!Kb&&(Kb=!0,e.calledRun=!0,!ma)){ya(Aa);ya(Ba);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Nb){var c=a,d=e._main;c=c||[];var f=c.length+1,h=B(4*(f+1));G[h>>2]=ua(aa);for(var g=1;g<f;g++)G[(h>>2)+g]=ua(c[g-1]);G[(h>>2)+f]=0;try{var n=d(f,h);if(!noExitRuntime||0!==n){if(!noExitRuntime&&(ma=!0,e.onExit))e.onExit(n);t(n,new ia(n))}}catch(m){m instanceof ia||("unwind"==m?noExitRuntime=!0:((c=m)&&"object"===typeof m&&m.stack&&(c=[m,m.stack]),x("exception thrown: "+
c),t(1,m)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Da.unshift(c);ya(Da)}}a=a||r;if(!(0<J)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ea();ya(za);0<J||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Mb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();
var Nb=!0;e.noInitialRun&&(Nb=!1);noExitRuntime=!0;Mb();
