
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var g={},h;for(h in e)e.hasOwnProperty(h)&&(g[h]=e[h]);var r=[],aa="./this.program";function t(a,b){throw b;}var ba=!1,u=!1,ca=!1,da=!1;ba="object"===typeof window;u="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!u;var v="",ea,w,fa,ha;
if(ca)v=u?require("path").dirname(v)+"/":__dirname+"/",ea=function(a,b){fa||(fa=require("fs"));ha||(ha=require("path"));a=ha.normalize(a);return fa.readFileSync(a,b?null:"utf8")},w=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),r=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof ia))throw a;}),process.on("unhandledRejection",
y),t=function(a){process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),w=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?r=scriptArgs:"undefined"!=typeof arguments&&(r=arguments),"function"===typeof quit&&(t=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||u)u?v=self.location.href:document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(w=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)});
e.print||console.log.bind(console);var z=e.printErr||console.warn.bind(console);for(h in g)g.hasOwnProperty(h)&&(e[h]=g[h]);g=null;e.arguments&&(r=e.arguments);e.thisProgram&&(aa=e.thisProgram);e.quit&&(t=e.quit);var A;e.wasmBinary&&(A=e.wasmBinary);var noExitRuntime;e.noExitRuntime&&(noExitRuntime=e.noExitRuntime);"object"!==typeof WebAssembly&&y("no native wasm support detected");var B,ja=new WebAssembly.Table({initial:21,maximum:21,element:"anyfunc"}),ka=!1;
function assert(a,b){a||y("Assertion failed: "+b)}function la(){var a=e.__sapp_emsc_onpaste;assert(a,"Cannot call unknown function _sapp_emsc_onpaste, make sure it is exported");return a}
function ma(a){var b=["string"],c={string:function(m){var q=0;if(null!==m&&void 0!==m&&0!==m){var p=(m.length<<2)+1;q=C(p);D(m,E,q,p)}return q},array:function(m){var q=C(m.length);na.set(m,q);return q}},d=la(),f=[],l=0;if(a)for(var k=0;k<a.length;k++){var n=c[b[k]];n?(0===l&&(l=oa()),f[k]=n(a[k])):f[k]=a[k]}d.apply(null,f);0!==l&&pa(l)}var qa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function F(a,b){if(a){var c=E,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&qa)a=qa.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var l=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|l);else{var k=c[a++]&63;f=224==(f&240)?(f&15)<<12|l<<6|k:(f&7)<<18|l<<12|k<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function D(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var l=0;l<a.length;++l){var k=a.charCodeAt(l);if(55296<=k&&57343>=k){var n=a.charCodeAt(++l);k=65536+((k&1023)<<10)|n&1023}if(127>=k){if(c>=d)break;b[c++]=k}else{if(2047>=k){if(c+1>=d)break;b[c++]=192|k>>6}else{if(65535>=k){if(c+2>=d)break;b[c++]=224|k>>12}else{if(c+3>=d)break;b[c++]=240|k>>18;b[c++]=128|k>>12&63}b[c++]=128|k>>6&63}b[c++]=128|k&63}}b[c]=0;return c-f}
function ra(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function sa(a){var b=ra(a)+1,c=C(b);D(a,na,c,b);return c}var G,na,E,ta,H,I;
function ua(a){G=a;e.HEAP8=na=new Int8Array(a);e.HEAP16=ta=new Int16Array(a);e.HEAP32=H=new Int32Array(a);e.HEAPU8=E=new Uint8Array(a);e.HEAPU16=new Uint16Array(a);e.HEAPU32=new Uint32Array(a);e.HEAPF32=new Float32Array(a);e.HEAPF64=I=new Float64Array(a)}var va=e.INITIAL_MEMORY||33554432;e.wasmMemory?B=e.wasmMemory:B=new WebAssembly.Memory({initial:va/65536,maximum:32768});B&&(G=B.buffer);va=G.byteLength;ua(G);H[6688]=5269792;
function wa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.Wb;"number"===typeof c?void 0===b.Ib?e.dynCall_v(c):e.dynCall_vi(c,b.Ib):c(void 0===b.Ib?null:b.Ib)}}}var xa=[],ya=[],za=[],Aa=[],Ba=[];function Ca(){var a=e.preRun.shift();xa.unshift(a)}var J=0,Da=null,K=null;e.preloadedImages={};e.preloadedAudios={};function y(a){if(e.onAbort)e.onAbort(a);z(a);ka=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}
function Ea(a){var b=L;return String.prototype.startsWith?b.startsWith(a):0===b.indexOf(a)}function Fa(){return Ea("data:application/octet-stream;base64,")}var L="bufferoffsets-sapp.wasm";if(!Fa()){var Ga=L;L=e.locateFile?e.locateFile(Ga,v):v+Ga}function Ha(){try{if(A)return new Uint8Array(A);if(w)return w(L);throw"both async and sync fetching of the wasm failed";}catch(a){y(a)}}
function Ia(){return A||!ba&&!u||"function"!==typeof fetch||Ea("file://")?new Promise(function(a){a(Ha())}):fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return Ha()})}ya.push({Wb:function(){Ja()}});var Ka=0;function La(){for(var a=M.length-1;0<=a;--a)Ma(a);M=[];Na=[]}var Na=[];function Oa(){if(Ka&&Pa.Gb)for(var a=0;a<Na.length;++a){var b=Na[a];Na.splice(a,1);--a;b.jc.apply(null,b.ac)}}
var M=[];function Ma(a){var b=M[a];b.target.removeEventListener(b.Ab,b.Ub,b.Bb);M.splice(a,1)}function N(a){function b(d){++Ka;Pa=a;Oa();a.Db(d);Oa();--Ka}if(a.Cb)a.Ub=b,a.target.addEventListener(a.Ab,b,a.Bb),M.push(a),Qa||(Aa.push(La),Qa=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].Ab==a.Ab&&Ma(c--)}var Qa,Pa,Ra,Sa,Ta,Ua,Va,Wa,Xa=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];
function O(a){a=2<a?F(a):a;return Xa[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function Ya(a){return 0>Xa.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function Za(a,b,c,d,f,l){Ra||(Ra=P(164));a={target:O(a),Gb:!0,Ab:l,Cb:d,Db:function(k){var n=Ra,m=n>>2;H[m]=k.location;H[m+1]=k.ctrlKey;H[m+2]=k.shiftKey;H[m+3]=k.altKey;H[m+4]=k.metaKey;H[m+5]=k.repeat;H[m+6]=k.charCode;H[m+7]=k.keyCode;H[m+8]=k.which;D(k.key||"",E,n+36,32);D(k.code||"",E,n+68,32);D(k.char||"",E,n+100,32);D(k.locale||"",E,n+132,32);Q(d,f,n,b)&&k.preventDefault()},Bb:c};N(a)}
function $a(a,b,c){a>>=2;H[a]=b.screenX;H[a+1]=b.screenY;H[a+2]=b.clientX;H[a+3]=b.clientY;H[a+4]=b.ctrlKey;H[a+5]=b.shiftKey;H[a+6]=b.altKey;H[a+7]=b.metaKey;ta[2*a+16]=b.button;ta[2*a+17]=b.buttons;H[a+9]=b.movementX;H[a+10]=b.movementY;c=Ya(c);H[a+11]=b.clientX-c.left;H[a+12]=b.clientY-c.top}function R(a,b,c,d,f,l){Sa||(Sa=P(64));a=O(a);N({target:a,Gb:"mousemove"!=l&&"mouseenter"!=l&&"mouseleave"!=l,Ab:l,Cb:d,Db:function(k){k=k||event;$a(Sa,k,a);Q(d,f,Sa,b)&&k.preventDefault()},Bb:c})}
function ab(a,b,c,d,f){Ta||(Ta=P(260));N({target:a,Ab:f,Cb:d,Db:function(l){l=l||event;var k=Ta,n=document.pointerLockElement||document.Kb||document.Mb||document.Lb;H[k>>2]=!!n;var m=n&&n.id?n.id:"";D(n?n==window?"#window":n==screen?"#screen":n&&n.nodeName?n.nodeName:"":"",E,k+4,128);D(m,E,k+132,128);Q(d,20,k,b)&&l.preventDefault()},Bb:c})}function bb(a,b,c,d,f){N({target:a,Ab:f,Cb:d,Db:function(l){l=l||event;Q(d,38,0,b)&&l.preventDefault()},Bb:c})}
function cb(a,b,c,d){Ua||(Ua=P(36));a=O(a);N({target:a,Ab:"resize",Cb:d,Db:function(f){f=f||event;if(f.target==a){var l=Ua,k=document.body;H[l>>2]=f.detail;H[l+4>>2]=k.clientWidth;H[l+8>>2]=k.clientHeight;H[l+12>>2]=innerWidth;H[l+16>>2]=innerHeight;H[l+20>>2]=outerWidth;H[l+24>>2]=outerHeight;H[l+28>>2]=pageXOffset;H[l+32>>2]=pageYOffset;Q(d,10,l,b)&&f.preventDefault()}},Bb:c})}
function db(a,b,c,d,f,l){Va||(Va=P(1684));a=O(a);N({target:a,Gb:"touchstart"==l||"touchend"==l,Ab:l,Cb:d,Db:function(k){for(var n={},m=k.touches,q=0;q<m.length;++q){var p=m[q];n[p.identifier]=p}m=k.changedTouches;for(q=0;q<m.length;++q)p=m[q],p.Yb=1,n[p.identifier]=p;m=k.targetTouches;for(q=0;q<m.length;++q)n[m[q].identifier].Zb=1;m=Va;p=m>>2;H[p+1]=k.ctrlKey;H[p+2]=k.shiftKey;H[p+3]=k.altKey;H[p+4]=k.metaKey;p+=5;var eb=Ya(a),fb=0;for(q in n){var x=n[q];H[p]=x.identifier;H[p+1]=x.screenX;H[p+2]=
x.screenY;H[p+3]=x.clientX;H[p+4]=x.clientY;H[p+5]=x.pageX;H[p+6]=x.pageY;H[p+7]=x.Yb;H[p+8]=x.Zb;H[p+9]=x.clientX-eb.left;H[p+10]=x.clientY-eb.top;p+=13;if(31<++fb)break}H[m>>2]=fb;Q(d,f,m,b)&&k.preventDefault()},Bb:c})}function gb(a,b,c,d,f,l){a={target:O(a),Ab:l,Cb:d,Db:function(k){k=k||event;Q(d,f,0,b)&&k.preventDefault()},Bb:c};N(a)}
function hb(a,b,c,d){Wa||(Wa=P(96));N({target:a,Gb:!0,Ab:"wheel",Cb:d,Db:function(f){f=f||event;var l=Wa;$a(l,f,a);I[l+64>>3]=f.deltaX;I[l+72>>3]=f.deltaY;I[l+80>>3]=f.deltaZ;H[l+88>>2]=f.deltaMode;Q(d,9,l,b)&&f.preventDefault()},Bb:c})}
function ib(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,l){b.drawArraysInstancedANGLE(c,d,f,l)},a.drawElementsInstanced=function(c,d,f,l,k){b.drawElementsInstancedANGLE(c,d,f,l,k)})}
function jb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function kb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function lb(a){a.cc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}var mb=1,nb=[],S=[],ob=[],pb=[],qb=[],T=[],U=[],rb=[],sb=[],V={},tb={},ub={};function W(a){vb||(vb=a)}function X(a){for(var b=mb++,c=a.length;c<b;c++)a[c]=null;return b}
function wb(a){a||(a=Y);if(!a.Xb){a.Xb=!0;var b=a.Hb;ib(b);jb(b);kb(b);lb(b);b.dc=b.getExtension("EXT_disjoint_timer_query");var c="OES_texture_float OES_texture_half_float OES_standard_derivatives OES_vertex_array_object WEBGL_compressed_texture_s3tc WEBGL_depth_texture OES_element_index_uint EXT_texture_filter_anisotropic EXT_frag_depth WEBGL_draw_buffers ANGLE_instanced_arrays OES_texture_float_linear OES_texture_half_float_linear EXT_blend_minmax EXT_shader_texture_lod EXT_texture_norm16 WEBGL_compressed_texture_pvrtc EXT_color_buffer_half_float WEBGL_color_buffer_float EXT_sRGB WEBGL_compressed_texture_etc1 EXT_disjoint_timer_query WEBGL_compressed_texture_etc WEBGL_compressed_texture_astc EXT_color_buffer_float WEBGL_compressed_texture_s3tc_srgb EXT_disjoint_timer_query_webgl2 WEBKIT_WEBGL_compressed_texture_pvrtc".split(" ");(b.getSupportedExtensions()||
[]).forEach(function(d){-1!=c.indexOf(d)&&b.getExtension(d)})}}var vb,Y,xb=["default","low-power","high-performance"];function yb(a,b,c,d){for(var f=0;f<a;f++){var l=Z[c](),k=l&&X(d);l?(l.name=k,d[k]=l):W(1282);H[b+4*f>>2]=k}}
function zb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>Y.version){W(1282);return}c=2*(Z.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>Y.version){W(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)H[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){W(1280);z("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:W(1280);z("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}H[b>>2]=c}else W(1281)}
function Ab(a){var b=ra(a)+1,c=P(b);D(a,E,c,b);return c}
var Z,Eb={_sapp_emsc_exit_pointerlock:function(){document.exitPointerLock&&document.exitPointerLock()},u:function(a){a=F(a);var b=document.getElementById(a);b?b.requestPointerLock?b.requestPointerLock():console.log("sokol_app.h: target doesn't doesn't support pointer lock:"+a):console.log("sokol_app.h: invalid target:"+a)},X:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ga:function(a,b,c){a=O(a);if(!a)return-4;a=Ya(a);I[b>>3]=a.width;I[c>>3]=a.height;return 0},ha:function(a,
b,c){E.copyWithin(a,b,b+c)},Ja:function(a,b){function c(d){Bb(a,d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},ia:function(a){a>>>=0;var b=E.length;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(16777216,a,d);0<d%65536&&(d+=65536-d%65536);a:{try{B.grow(Math.min(2147483648,d)-G.byteLength+65535>>>16);ua(B.buffer);var f=1;break a}catch(l){}f=void 0}if(f)return!0}return!1},Q:function(a,b,c){a=O(a);if(!a)return-4;a.width=b;a.height=
c;return 0},aa:function(a,b,c,d){Za(a,b,c,d,2,"keydown");return 0},_:function(a,b,c,d){Za(a,b,c,d,1,"keypress");return 0},$:function(a,b,c,d){Za(a,b,c,d,3,"keyup");return 0},v:function(a,b,c,d){R(a,b,c,d,5,"mousedown");return 0},da:function(a,b,c,d){R(a,b,c,d,33,"mouseenter");return 0},ca:function(a,b,c,d){R(a,b,c,d,34,"mouseleave");return 0},ea:function(a,b,c,d){R(a,b,c,d,8,"mousemove");return 0},fa:function(a,b,c,d){R(a,b,c,d,6,"mouseup");return 0},U:function(a,b,c,d){if(!document||!document.body||
!(document.body.requestPointerLock||document.body.Kb||document.body.Mb||document.body.Lb))return-1;a=O(a);if(!a)return-4;ab(a,b,c,d,"pointerlockchange");ab(a,b,c,d,"mozpointerlockchange");ab(a,b,c,d,"webkitpointerlockchange");ab(a,b,c,d,"mspointerlockchange");return 0},T:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Kb||document.body.Mb||document.body.Lb))return-1;a=O(a);if(!a)return-4;bb(a,b,c,d,"pointerlockerror");bb(a,b,c,d,"mozpointerlockerror");bb(a,b,c,d,
"webkitpointerlockerror");bb(a,b,c,d,"mspointerlockerror");return 0},Sa:function(a,b,c,d){cb(a,b,c,d);return 0},V:function(a,b,c,d){db(a,b,c,d,25,"touchcancel");return 0},W:function(a,b,c,d){db(a,b,c,d,23,"touchend");return 0},Y:function(a,b,c,d){db(a,b,c,d,24,"touchmove");return 0},Z:function(a,b,c,d){db(a,b,c,d,22,"touchstart");return 0},S:function(a,b,c,d){gb(a,b,c,d,31,"webglcontextlost");return 0},R:function(a,b,c,d){gb(a,b,c,d,32,"webglcontextrestored");return 0},ba:function(a,b,c,d){a=O(a);
return"undefined"!==typeof a.onwheel?(hb(a,b,c,d),0):-1},F:function(a,b){var c={};b>>=2;c.alpha=!!H[b];c.depth=!!H[b+1];c.stencil=!!H[b+2];c.antialias=!!H[b+3];c.premultipliedAlpha=!!H[b+4];c.preserveDrawingBuffer=!!H[b+5];c.powerPreference=xb[H[b+6]];c.failIfMajorPerformanceCaveat=!!H[b+7];c.Qb=H[b+8];c.fc=H[b+9];c.Pb=H[b+10];c.Vb=H[b+11];c.hc=H[b+12];c.ic=H[b+13];if(a=O(a))if(c.Vb)c=-1;else if(a=1<c.Qb?a.getContext("webgl2",c):a.getContext("webgl",c)){b=X(sb);var d={ec:b,attributes:c,version:c.Qb,
Hb:a};a.canvas&&(a.canvas.$b=d);sb[b]=d;("undefined"===typeof c.Pb||c.Pb)&&wb(d);c=b}else c=0;else c=-4;return c},ua:function(a,b){a=sb[a];b=F(b);0==b.indexOf("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&ib(Z);"OES_vertex_array_object"==b&&jb(Z);"WEBGL_draw_buffers"==b&&kb(Z);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&lb(Z);return!!a.Hb.getExtension(b)},Ga:function(a){a>>=2;for(var b=0;14>b;++b)H[a+b]=0;H[a]=H[a+1]=H[a+3]=H[a+4]=H[a+8]=H[a+10]=1},Ca:function(a){Y=sb[a];e.bc=Z=Y&&
Y.Hb;return!a||Z?0:-5},l:function(a){Z.activeTexture(a)},D:function(a,b){Z.attachShader(S[a],U[b])},d:function(a,b){35051==a?Z.Nb=b:35052==a&&(Z.Ob=b);Z.bindBuffer(a,nb[b])},f:function(a,b){Z.bindFramebuffer(a,ob[b])},a:function(a,b){Z.bindTexture(a,qb[b])},P:function(a){Z.bindVertexArray(rb[a])},L:function(a,b,c,d){Z.blendColor(a,b,c,d)},M:function(a,b){Z.blendEquationSeparate(a,b)},N:function(a,b,c,d){Z.blendFuncSeparate(a,b,c,d)},h:function(a,b,c,d,f,l,k,n,m,q){Z.blitFramebuffer(a,b,c,d,f,l,k,
n,m,q)},G:function(a,b,c,d){2<=Y.version?c?Z.bufferData(a,E,d,c,b):Z.bufferData(a,b,d):Z.bufferData(a,c?E.subarray(c,c+b):b,d)},E:function(a,b,c,d){2<=Y.version?Z.bufferSubData(a,b,E,d,c):Z.bufferSubData(a,b,E.subarray(d,d+c))},oa:function(a){Z.clear(a)},ra:function(a,b,c,d){Z.clearColor(a,b,c,d)},qa:function(a){Z.clearDepth(a)},pa:function(a){Z.clearStencil(a)},q:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},za:function(a){Z.compileShader(U[a])},Fa:function(){var a=X(S),b=Z.createProgram();b.name=
a;S[a]=b;return a},Ba:function(a){var b=X(U);U[b]=Z.createShader(a);return b},I:function(a){Z.cullFace(a)},wa:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=nb[d];f&&(Z.deleteBuffer(f),f.name=0,nb[d]=null,d==Z.Nb&&(Z.Nb=0),d==Z.Ob&&(Z.Ob=0))}},g:function(a,b){for(var c=0;c<a;++c){var d=H[b+4*c>>2],f=ob[d];f&&(Z.deleteFramebuffer(f),f.name=0,ob[d]=null)}},B:function(a){if(a){var b=S[a];b?(Z.deleteProgram(b),b.name=0,S[a]=null,V[a]=null):W(1281)}},y:function(a,b){for(var c=0;c<a;c++){var d=
H[b+4*c>>2],f=pb[d];f&&(Z.deleteRenderbuffer(f),f.name=0,pb[d]=null)}},p:function(a){if(a){var b=U[a];b?(Z.deleteShader(b),U[a]=null):W(1281)}},va:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],f=qb[d];f&&(Z.deleteTexture(f),f.name=0,qb[d]=null)}},La:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2];Z.deleteVertexArray(rb[d]);rb[d]=null}},t:function(a){Z.depthFunc(a)},s:function(a){Z.depthMask(!!a)},b:function(a){Z.disable(a)},O:function(a){Z.disableVertexAttribArray(a)},ja:function(a,b,
c){Z.drawArrays(a,b,c)},ka:function(a,b,c,d){Z.drawElements(a,b,c,d)},e:function(a){Z.enable(a)},la:function(a){Z.enableVertexAttribArray(a)},J:function(a){Z.frontFace(a)},H:function(a,b){yb(a,b,"createBuffer",nb)},Ka:function(a,b){yb(a,b,"createVertexArray",rb)},xa:function(a,b){return Z.getAttribLocation(S[a],F(b))},c:function(a,b){zb(a,b)},Da:function(a,b,c,d){a=Z.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(H[c>>2]=b)},C:function(a,b,c){if(c)if(a>=mb)W(1281);
else{var d=V[a];if(d)if(35716==b)a=Z.getProgramInfoLog(S[a]),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1;else if(35719==b)H[c>>2]=d.Jb;else if(35722==b){if(-1==d.Eb){a=S[a];var f=Z.getProgramParameter(a,35721);for(b=d.Eb=0;b<f;++b)d.Eb=Math.max(d.Eb,Z.getActiveAttrib(a,b).name.length+1)}H[c>>2]=d.Eb}else if(35381==b){if(-1==d.Fb)for(a=S[a],f=Z.getProgramParameter(a,35382),b=d.Fb=0;b<f;++b)d.Fb=Math.max(d.Fb,Z.getActiveUniformBlockName(a,b).length+1);H[c>>2]=d.Fb}else H[c>>2]=Z.getProgramParameter(S[a],
b);else W(1282)}else W(1281)},ya:function(a,b,c,d){a=Z.getShaderInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(H[c>>2]=b)},z:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(U[a]),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1):35720==b?(a=Z.getShaderSource(U[a]),H[c>>2]=null===a||0==a.length?0:a.length+1):H[c>>2]=Z.getShaderParameter(U[a],b):W(1281)},Na:function(a){if(tb[a])return tb[a];switch(a){case 7939:var b=Z.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+
d}));b=Ab(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Z.getParameter(a))||W(1280);b=Ab(b);break;case 7938:b=Z.getParameter(7938);b=2<=Y.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Ab(b);break;case 35724:b=Z.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Ab(b);break;default:return W(1280),0}return tb[a]=b},Ma:function(a,b){if(2>Y.version)return W(1282),
0;var c=ub[a];if(c)return 0>b||b>=c.length?(W(1281),0):c[b];switch(a){case 7939:return c=Z.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Ab(d)}),c=ub[a]=c,0>b||b>=c.length?(W(1281),0):c[b];default:return W(1280),0}},k:function(a,b){b=F(b);var c=0;if("]"==b[b.length-1]){var d=b.lastIndexOf("[");c="]"!=b[d+1]?parseInt(b.slice(d+1)):0;b=b.slice(0,d)}return(a=V[a]&&V[a].Tb[b])&&0<=c&&c<a[0]?a[1]+c:-1},Ea:function(a){Z.linkProgram(S[a]);var b=S[a];
a=V[a]={Tb:{},Jb:0,Eb:-1,Fb:-1};for(var c=a.Tb,d=Z.getProgramParameter(b,35718),f=0;f<d;++f){var l=Z.getActiveUniform(b,f),k=l.name;a.Jb=Math.max(a.Jb,k.length+1);"]"==k.slice(-1)&&(k=k.slice(0,k.lastIndexOf("[")));var n=Z.getUniformLocation(b,k);if(n){var m=X(T);c[k]=[l.size,m];T[m]=n;for(var q=1;q<l.size;++q)n=Z.getUniformLocation(b,k+"["+q+"]"),m=X(T),T[m]=n}}},K:function(a,b){Z.polygonOffset(a,b)},i:function(a){Z.readBuffer(a)},sa:function(a,b,c,d){Z.scissor(a,b,c,d)},Aa:function(a,b,c,d){for(var f=
"",l=0;l<b;++l){var k=d?H[d+4*l>>2]:-1;f+=F(H[c+4*l>>2],0>k?void 0:k)}Z.shaderSource(U[a],f)},Ia:function(a,b,c){Z.stencilFunc(a,b,c)},x:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},r:function(a){Z.stencilMask(a)},Ha:function(a,b,c){Z.stencilOp(a,b,c)},w:function(a,b,c,d){Z.stencilOpSeparate(a,b,c,d)},A:function(a,b){Z.uniform1i(T[a],b)},j:function(a){Z.useProgram(S[a])},ma:function(a,b){Z.vertexAttribDivisor(a,b)},na:function(a,b,c,d,f,l){Z.vertexAttribPointer(a,b,c,!!d,f,l)},ta:function(a,
b,c,d){Z.viewport(a,b,c,d)},memory:B,Ra:function(){e.Rb=function(a){0!=Cb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.Rb)},Qa:function(){e.Sb=function(a){a=a.clipboardData.getData("text");ma([a])};window.addEventListener("paste",e.Sb)},o:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Db()});document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},
m:function(){document.getElementById("_sokol_app_input_element").blur()},Pa:function(){window.removeEventListener("beforeunload",e.Rb)},Oa:function(){window.removeEventListener("paste",e.Sb)},table:ja};
(function(){function a(f){e.asm=f.exports;J--;e.monitorRunDependencies&&e.monitorRunDependencies(J);0==J&&(null!==Da&&(clearInterval(Da),Da=null),K&&(f=K,K=null,f()))}function b(f){a(f.instance)}function c(f){return Ia().then(function(l){return WebAssembly.instantiate(l,d)}).then(f,function(l){z("failed to asynchronously prepare wasm: "+l);y(l)})}var d={a:Eb};J++;e.monitorRunDependencies&&e.monitorRunDependencies(J);if(e.instantiateWasm)try{return e.instantiateWasm(d,a)}catch(f){return z("Module.instantiateWasm callback failed with error: "+
f),!1}(function(){if(A||"function"!==typeof WebAssembly.instantiateStreaming||Fa()||Ea("file://")||"function"!==typeof fetch)return c(b);fetch(L,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(l){z("wasm streaming compile failed: "+l);z("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
var Ja=e.___wasm_call_ctors=function(){return(Ja=e.___wasm_call_ctors=e.asm.Ta).apply(null,arguments)},Db=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Db=e.__sapp_emsc_notify_keyboard_hidden=e.asm.Ua).apply(null,arguments)};e.___em_js__sapp_js_create_textfield=function(){return(e.___em_js__sapp_js_create_textfield=e.asm.Va).apply(null,arguments)};e.___em_js__sapp_js_focus_textfield=function(){return(e.___em_js__sapp_js_focus_textfield=e.asm.Wa).apply(null,arguments)};
e.___em_js__sapp_js_unfocus_textfield=function(){return(e.___em_js__sapp_js_unfocus_textfield=e.asm.Xa).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.Ya).apply(null,arguments)};var Cb=e.__sapp_html5_get_ask_leave_site=function(){return(Cb=e.__sapp_html5_get_ask_leave_site=e.asm.Za).apply(null,arguments)};e.___em_js__sapp_add_js_hook_beforeunload=function(){return(e.___em_js__sapp_add_js_hook_beforeunload=e.asm._a).apply(null,arguments)};
e.___em_js__sapp_remove_js_hook_beforeunload=function(){return(e.___em_js__sapp_remove_js_hook_beforeunload=e.asm.$a).apply(null,arguments)};e.___em_js__sapp_add_js_hook_clipboard=function(){return(e.___em_js__sapp_add_js_hook_clipboard=e.asm.ab).apply(null,arguments)};e.___em_js__sapp_remove_js_hook_clipboard=function(){return(e.___em_js__sapp_remove_js_hook_clipboard=e.asm.bb).apply(null,arguments)};
e.___em_js__sapp_js_write_clipboard=function(){return(e.___em_js__sapp_js_write_clipboard=e.asm.cb).apply(null,arguments)};e.___em_js___sapp_emsc_request_pointerlock=function(){return(e.___em_js___sapp_emsc_request_pointerlock=e.asm.db).apply(null,arguments)};e.___em_js___sapp_emsc_exit_pointerlock=function(){return(e.___em_js___sapp_emsc_exit_pointerlock=e.asm.eb).apply(null,arguments)};e._main=function(){return(e._main=e.asm.fb).apply(null,arguments)};
e.___em_js__stm_js_perfnow=function(){return(e.___em_js__stm_js_perfnow=e.asm.gb).apply(null,arguments)};e.__saudio_emsc_pull=function(){return(e.__saudio_emsc_pull=e.asm.hb).apply(null,arguments)};e.___em_js__saudio_js_init=function(){return(e.___em_js__saudio_js_init=e.asm.ib).apply(null,arguments)};e.___em_js__saudio_js_shutdown=function(){return(e.___em_js__saudio_js_shutdown=e.asm.jb).apply(null,arguments)};
e.___em_js__saudio_js_sample_rate=function(){return(e.___em_js__saudio_js_sample_rate=e.asm.kb).apply(null,arguments)};e.___em_js__saudio_js_buffer_frames=function(){return(e.___em_js__saudio_js_buffer_frames=e.asm.lb).apply(null,arguments)};e.___em_js__sfetch_js_send_head_request=function(){return(e.___em_js__sfetch_js_send_head_request=e.asm.mb).apply(null,arguments)};e.___em_js__sfetch_js_send_get_request=function(){return(e.___em_js__sfetch_js_send_get_request=e.asm.nb).apply(null,arguments)};
e.__sfetch_emsc_head_response=function(){return(e.__sfetch_emsc_head_response=e.asm.ob).apply(null,arguments)};e.__sfetch_emsc_get_response=function(){return(e.__sfetch_emsc_get_response=e.asm.pb).apply(null,arguments)};e.__sfetch_emsc_failed_http_status=function(){return(e.__sfetch_emsc_failed_http_status=e.asm.qb).apply(null,arguments)};e.__sfetch_emsc_failed_buffer_too_small=function(){return(e.__sfetch_emsc_failed_buffer_too_small=e.asm.rb).apply(null,arguments)};
var P=e._malloc=function(){return(P=e._malloc=e.asm.sb).apply(null,arguments)},oa=e.stackSave=function(){return(oa=e.stackSave=e.asm.tb).apply(null,arguments)},pa=e.stackRestore=function(){return(pa=e.stackRestore=e.asm.ub).apply(null,arguments)},C=e.stackAlloc=function(){return(C=e.stackAlloc=e.asm.vb).apply(null,arguments)};e.dynCall_vi=function(){return(e.dynCall_vi=e.asm.wb).apply(null,arguments)};e.dynCall_v=function(){return(e.dynCall_v=e.asm.xb).apply(null,arguments)};
var Q=e.dynCall_iiii=function(){return(Q=e.dynCall_iiii=e.asm.yb).apply(null,arguments)},Bb=e.dynCall_idi=function(){return(Bb=e.dynCall_idi=e.asm.zb).apply(null,arguments)},Fb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}K=function Gb(){Fb||Hb();Fb||(K=Gb)};
function Hb(a){function b(){if(!Fb&&(Fb=!0,e.calledRun=!0,!ka)){wa(ya);wa(za);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Ib){var c=a,d=e._main;c=c||[];var f=c.length+1,l=C(4*(f+1));H[l>>2]=sa(aa);for(var k=1;k<f;k++)H[(l>>2)+k]=sa(c[k-1]);H[(l>>2)+f]=0;try{var n=d(f,l);if(!noExitRuntime||0!==n){if(!noExitRuntime&&(ka=!0,e.onExit))e.onExit(n);t(n,new ia(n))}}catch(m){m instanceof ia||("unwind"==m?noExitRuntime=!0:((c=m)&&"object"===typeof m&&m.stack&&(c=[m,m.stack]),z("exception thrown: "+
c),t(1,m)))}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),Ba.unshift(c);wa(Ba)}}a=a||r;if(!(0<J)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ca();wa(xa);0<J||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Hb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();
var Ib=!0;e.noInitialRun&&(Ib=!1);noExitRuntime=!0;Hb();
