
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign,ba=aa({},f),ca=[],da="./this.program",h=(a,b)=>{throw b;},ea="object"===typeof window,l="function"===typeof importScripts,q="",fa,t,ha,fs,ia,ja;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)q=l?require("path").dirname(q)+"/":__dirname+"/",ja=function(){ia||(fs=require("fs"),ia=require("path"))},fa=function(a,b){ja();a=ia.normalize(a);return fs.readFileSync(a,b?null:"utf8")},ha=function(a){a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a},t=function(a,b,c){ja();a=ia.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(da=process.argv[1].replace(/\\/g,
"/")),ca=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ka))throw a;}),process.on("unhandledRejection",function(a){throw a;}),h=(a,b)=>{if(noExitRuntime||0<la)throw process.exitCode=a,b;b instanceof ka||u("exiting due to exception: "+b);process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(ea||l)l?q=self.location.href:"undefined"!==typeof document&&document.currentScript&&(q=document.currentScript.src),
q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(ha=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),t=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};
var ma=f.print||console.log.bind(console),u=f.printErr||console.warn.bind(console);aa(f,ba);ba=null;f.arguments&&(ca=f.arguments);f.thisProgram&&(da=f.thisProgram);f.quit&&(h=f.quit);var w;f.wasmBinary&&(w=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!==typeof WebAssembly&&na("no native wasm support detected");var oa,pa=!1;
function qa(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var r=(n.length<<2)+1;p=x(r);y(n,z,p,r)}return p},array:function(n){var p=x(n.length);ra.set(n,p);return p}};a=f["_"+a];var e=[],k=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===k&&(k=sa()),e[g]=m(c[g])):e[g]=c[g]}b=a.apply(null,e);b=function(n){0!==k&&ta(k);return n}(b)}var ua="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function va(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&ua)return ua.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var k=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|k<<6|g:(e&7)<<18|k<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function A(a,b){return a?va(z,a,b):""}
function y(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function wa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function xa(a){var b=wa(a)+1,c=x(b);y(a,ra,c,b);return c}var ya,ra,z,za,Aa,B,Ba,C,D;
function Ca(){var a=oa.buffer;ya=a;f.HEAP8=ra=new Int8Array(a);f.HEAP16=za=new Int16Array(a);f.HEAP32=B=new Int32Array(a);f.HEAPU8=z=new Uint8Array(a);f.HEAPU16=Aa=new Uint16Array(a);f.HEAPU32=Ba=new Uint32Array(a);f.HEAPF32=C=new Float32Array(a);f.HEAPF64=D=new Float64Array(a)}var Da,Ea=[],Fa=[],Ga=[],Ha=[],Ia=[],la=0;function Ja(){var a=f.preRun.shift();Ea.unshift(a)}var E=0,Ka=null,F=null;f.preloadedImages={};f.preloadedAudios={};
function na(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";u(a);pa=!0;throw new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS=1 for more info.");}function La(){return G.startsWith("data:application/octet-stream;base64,")}var G;G="offscreen-sapp-ui.wasm";if(!La()){var Ma=G;G=f.locateFile?f.locateFile(Ma,q):q+Ma}function Na(){var a=G;try{if(a==G&&w)return new Uint8Array(w);if(ha)return ha(a);throw"both async and sync fetching of the wasm failed";}catch(b){na(b)}}
function Oa(){if(!w&&(ea||l)){if("function"===typeof fetch&&!G.startsWith("file://"))return fetch(G,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+G+"'";return a.arrayBuffer()}).catch(function(){return Na()});if(t)return new Promise(function(a,b){t(G,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Na()})}
function Pa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.Qc;"number"===typeof c?void 0===b.nc?H(c)():H(c)(b.nc):c(void 0===b.nc?null:b.nc)}}}var Qa=[];function H(a){var b=Qa[a];b||(a>=Qa.length&&(Qa.length=a+1),Qa[a]=b=Da.get(a));return b}var Ra=[null,[],[]],Sa={},Ta=0;function Ua(){for(var a=I.length-1;0<=a;--a)Va(a);I=[];Wa=[]}var Wa=[];function Xa(){if(Ta&&Ya.ic)for(var a=0;a<Wa.length;++a){var b=Wa[a];Wa.splice(a,1);--a;b.$c.apply(null,b.Mc)}}var I=[];
function Va(a){var b=I[a];b.target.removeEventListener(b.ac,b.Ic,b.bc);I.splice(a,1)}function J(a){function b(d){++Ta;Ya=a;Xa();a.dc(d);Xa();--Ta}if(a.cc)a.Ic=b,a.target.addEventListener(a.ac,b,a.bc),I.push(a),Za||(Ha.push(Ua),Za=!0);else for(var c=0;c<I.length;++c)I[c].target==a.target&&I[c].ac==a.ac&&Va(c--)}function $a(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Za,Ya,ab,bb,cb,db,eb,fb,gb,hb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function K(a){a=2<a?A(a):a;return hb[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function ib(a){return 0>hb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function jb(a,b,c,d,e,k){ab||(ab=L(256));a={target:K(a),ac:k,cc:d,dc:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=ab;y($a(g.target),z,n+0,128);y(m,z,n+128,128);H(d)(e,n,b)&&g.preventDefault()},bc:c};J(a)}
function kb(a,b,c,d,e,k){bb||(bb=L(176));a={target:K(a),ic:!0,ac:k,cc:d,dc:function(g){var m=bb;D[m>>3]=g.timeStamp;var n=m>>2;B[n+2]=g.location;B[n+3]=g.ctrlKey;B[n+4]=g.shiftKey;B[n+5]=g.altKey;B[n+6]=g.metaKey;B[n+7]=g.repeat;B[n+8]=g.charCode;B[n+9]=g.keyCode;B[n+10]=g.which;y(g.key||"",z,m+44,32);y(g.code||"",z,m+76,32);y(g.char||"",z,m+108,32);y(g.locale||"",z,m+140,32);H(d)(e,m,b)&&g.preventDefault()},bc:c};J(a)}
function lb(a,b,c){D[a>>3]=b.timeStamp;a>>=2;B[a+2]=b.screenX;B[a+3]=b.screenY;B[a+4]=b.clientX;B[a+5]=b.clientY;B[a+6]=b.ctrlKey;B[a+7]=b.shiftKey;B[a+8]=b.altKey;B[a+9]=b.metaKey;za[2*a+20]=b.button;za[2*a+21]=b.buttons;B[a+11]=b.movementX;B[a+12]=b.movementY;c=ib(c);B[a+13]=b.clientX-c.left;B[a+14]=b.clientY-c.top}
function M(a,b,c,d,e,k){cb||(cb=L(72));a=K(a);J({target:a,ic:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,ac:k,cc:d,dc:function(g){g=g||event;lb(cb,g,a);H(d)(e,cb,b)&&g.preventDefault()},bc:c})}function mb(a,b,c,d,e){db||(db=L(260));J({target:a,ac:e,cc:d,dc:function(k){k=k||event;var g=db,m=document.pointerLockElement||document.pc||document.rc||document.qc;B[g>>2]=!!m;var n=m&&m.id?m.id:"";y($a(m),z,g+4,128);y(n,z,g+132,128);H(d)(20,g,b)&&k.preventDefault()},bc:c})}
function nb(a,b,c,d,e){J({target:a,ac:e,cc:d,dc:function(k){k=k||event;H(d)(38,0,b)&&k.preventDefault()},bc:c})}
function ob(a,b,c,d){eb||(eb=L(36));a=K(a);J({target:a,ac:"resize",cc:d,dc:function(e){e=e||event;if(e.target==a){var k=document.body;if(k){var g=eb;B[g>>2]=e.detail;B[g+4>>2]=k.clientWidth;B[g+8>>2]=k.clientHeight;B[g+12>>2]=innerWidth;B[g+16>>2]=innerHeight;B[g+20>>2]=outerWidth;B[g+24>>2]=outerHeight;B[g+28>>2]=pageXOffset;B[g+32>>2]=pageYOffset;H(d)(10,g,b)&&e.preventDefault()}}},bc:c})}
function pb(a,b,c,d,e,k){fb||(fb=L(1696));a=K(a);J({target:a,ic:"touchstart"==k||"touchend"==k,ac:k,cc:d,dc:function(g){for(var m,n={},p=g.touches,r=0;r<p.length;++r)m=p[r],m.wc=m.yc=0,n[m.identifier]=m;for(r=0;r<g.changedTouches.length;++r)m=g.changedTouches[r],m.wc=1,n[m.identifier]=m;for(r=0;r<g.targetTouches.length;++r)n[g.targetTouches[r].identifier].yc=1;p=fb;D[p>>3]=g.timeStamp;var v=p>>2;B[v+3]=g.ctrlKey;B[v+4]=g.shiftKey;B[v+5]=g.altKey;B[v+6]=g.metaKey;v+=7;var N=ib(a),qb=0;for(r in n)if(m=
n[r],B[v]=m.identifier,B[v+1]=m.screenX,B[v+2]=m.screenY,B[v+3]=m.clientX,B[v+4]=m.clientY,B[v+5]=m.pageX,B[v+6]=m.pageY,B[v+7]=m.wc,B[v+8]=m.yc,B[v+9]=m.clientX-N.left,B[v+10]=m.clientY-N.top,v+=13,31<++qb)break;B[p+8>>2]=qb;H(d)(e,p,b)&&g.preventDefault()},bc:c})}function rb(a,b,c,d,e,k){a={target:K(a),ac:k,cc:d,dc:function(g){g=g||event;H(d)(e,0,b)&&g.preventDefault()},bc:c};J(a)}
function sb(a,b,c,d){gb||(gb=L(104));J({target:a,ic:!0,ac:"wheel",cc:d,dc:function(e){e=e||event;var k=gb;lb(k,e,a);D[k+72>>3]=e.deltaX;D[k+80>>3]=e.deltaY;D[k+88>>3]=e.deltaZ;B[k+96>>2]=e.deltaMode;H(d)(9,k,b)&&e.preventDefault()},bc:c})}
function tb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,g){b.drawElementsInstancedANGLE(c,d,e,k,g)})}
function ub(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function vb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function wb(a){a.Oc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function xb(a){a.Tc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function yb(a){a.Vc=a.getExtension("WEBGL_multi_draw")}var zb=1,Ab=[],O=[],Bb=[],P=[],Q=[],R=[],Cb=[],Db=[],Eb={},Fb={};function S(a){Gb||(Gb=a)}function Hb(a){for(var b=zb++,c=a.length;c<b;c++)a[c]=null;return b}
function Ib(a,b){a.vc||(a.vc=a.getContext,a.getContext=function(d,e){e=a.vc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.xc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Jb(c,b):0}function Jb(a,b){var c=Hb(Db),d={Sc:c,attributes:b,version:b.xc,mc:a};a.canvas&&(a.canvas.Lc=d);Db[c]=d;("undefined"===typeof b.uc||b.uc)&&Kb(d);return c}
function Kb(a){a||(a=T);if(!a.Kc){a.Kc=!0;var b=a.mc;tb(b);ub(b);vb(b);wb(b);xb(b);2<=a.version&&(b.tc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.tc)b.tc=b.getExtension("EXT_disjoint_timer_query");yb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Gb,T,Lb=["default","low-power","high-performance"],Mb=[];
function U(a,b,c,d){for(var e=0;e<a;e++){var k=V[c](),g=k&&Hb(d);k?(k.name=g,d[g]=k):S(1282);B[b+4*e>>2]=g}}
function Nb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=V.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>T.version){S(1282);return}c=2*(V.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>T.version){S(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=V.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":S(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:S(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)B[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){S(1280);u("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:S(1280);u("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}B[b>>2]=c}else S(1281)}
function W(a){var b=wa(a)+1,c=L(b);y(a,z,c,b);return c}function Ob(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Pb(a){a-=5120;return 0==a?ra:1==a?z:2==a?za:4==a?B:6==a?C:5==a||28922==a||28520==a||30779==a||30782==a?Ba:Aa}function X(a){var b=V.Hc;if(b){var c=b.hc[a];"number"===typeof c&&(b.hc[a]=c=V.getUniformLocation(b,b.Fc[a]+(0<c?"["+c+"]":"")));return c}S(1282)}for(var Y=[],V,Z=0;32>Z;++Z)Mb.push(Array(Z));var Qb=new Float32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Qb.subarray(0,Z+1);
var Vb={oa:function(){return 0},nb:function(){return 0},ob:function(){},$:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},xa:function(a,b,c){a=K(a);if(!a)return-4;a=ib(a);D[b>>3]=a.width;D[c>>3]=a.height;return 0},jb:function(a,b,c){z.copyWithin(a,b,b+c)},Va:function(a,b){function c(d){H(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},kb:function(a){var b=z.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);
d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{oa.grow(Math.min(2147483648,d)-ya.byteLength+65535>>>16);Ca();var e=1;break a}catch(k){}e=void 0}if(e)return!0}return!1},aa:function(a,b,c,d){jb(a,b,c,d,12,"blur");return 0},Y:function(a,b,c){a=K(a);if(!a)return-4;a.width=b;a.height=c;return 0},ba:function(a,b,c,d){jb(a,b,c,d,13,"focus");return 0},ka:function(a,b,c,d){kb(a,b,c,d,2,"keydown");return 0},ia:function(a,b,c,d){kb(a,b,c,d,1,"keypress");return 0},ja:function(a,b,c,d){kb(a,b,c,d,3,"keyup");
return 0},wa:function(a,b,c,d){M(a,b,c,d,5,"mousedown");return 0},qa:function(a,b,c,d){M(a,b,c,d,33,"mouseenter");return 0},ma:function(a,b,c,d){M(a,b,c,d,34,"mouseleave");return 0},ra:function(a,b,c,d){M(a,b,c,d,8,"mousemove");return 0},va:function(a,b,c,d){M(a,b,c,d,6,"mouseup");return 0},da:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.pc||document.body.rc||document.body.qc))return-1;a=K(a);if(!a)return-4;mb(a,b,c,d,"pointerlockchange");mb(a,
b,c,d,"mozpointerlockchange");mb(a,b,c,d,"webkitpointerlockchange");mb(a,b,c,d,"mspointerlockchange");return 0},ca:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.pc||document.body.rc||document.body.qc))return-1;a=K(a);if(!a)return-4;nb(a,b,c,d,"pointerlockerror");nb(a,b,c,d,"mozpointerlockerror");nb(a,b,c,d,"webkitpointerlockerror");nb(a,b,c,d,"mspointerlockerror");return 0},hb:function(a,b,c,d){ob(a,b,c,d);return 0},ea:function(a,b,c,d){pb(a,b,c,d,25,"touchcancel");
return 0},fa:function(a,b,c,d){pb(a,b,c,d,23,"touchend");return 0},ga:function(a,b,c,d){pb(a,b,c,d,24,"touchmove");return 0},ha:function(a,b,c,d){pb(a,b,c,d,22,"touchstart");return 0},_:function(a,b,c,d){rb(a,b,c,d,31,"webglcontextlost");return 0},Z:function(a,b,c,d){rb(a,b,c,d,32,"webglcontextrestored");return 0},la:function(a,b,c,d){a=K(a);return"undefined"!==typeof a.onwheel?(sb(a,b,c,d),0):-1},Q:function(a,b){b>>=2;b={alpha:!!B[b],depth:!!B[b+1],stencil:!!B[b+2],antialias:!!B[b+3],premultipliedAlpha:!!B[b+
4],preserveDrawingBuffer:!!B[b+5],powerPreference:Lb[B[b+6]],failIfMajorPerformanceCaveat:!!B[b+7],xc:B[b+8],Uc:B[b+9],uc:B[b+10],Jc:B[b+11],Wc:B[b+12],Xc:B[b+13]};a=K(a);return!a||b.Jc?0:Ib(a,b)},Ea:function(a,b){a=Db[a];b=A(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&tb(V);"OES_vertex_array_object"==b&&ub(V);"WEBGL_draw_buffers"==b&&vb(V);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&wb(V);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&xb(V);"WEBGL_multi_draw"==
b&&yb(V);return!!a.mc.getExtension(b)},Sa:function(a){a>>=2;for(var b=0;14>b;++b)B[a+b]=0;B[a]=B[a+1]=B[a+3]=B[a+4]=B[a+8]=B[a+10]=1},La:function(a){T=Db[a];f.Nc=V=T&&T.mc;return!a||V?0:-5},na:function(){return 0},mb:function(a,b,c,d){a=Sa.Rc(a);b=Sa.Pc(a,b,c);B[d>>2]=b;return 0},ib:function(){},lb:function(a,b,c,d){for(var e=0,k=0;k<c;k++){var g=B[b>>2],m=B[b+4>>2];b+=8;for(var n=0;n<m;n++){var p=z[g+n],r=Ra[a];0===p||10===p?((1===a?ma:u)(va(r,0)),r.length=0):r.push(p)}e+=m}B[d>>2]=e;return 0},b:function(a){V.activeTexture(a)},
J:function(a,b){V.attachShader(O[a],R[b])},d:function(a,b){35051==a?V.sc=b:35052==a&&(V.ec=b);V.bindBuffer(a,Ab[b])},f:function(a,b){V.bindFramebuffer(a,Bb[b])},M:function(a,b){V.bindRenderbuffer(a,P[b])},a:function(a,b){V.bindTexture(a,Q[b])},W:function(a){V.bindVertexArray(Cb[a])},S:function(a,b,c,d){V.blendColor(a,b,c,d)},T:function(a,b){V.blendEquationSeparate(a,b)},U:function(a,b,c,d){V.blendFuncSeparate(a,b,c,d)},w:function(a,b,c,d,e,k,g,m,n,p){V.blitFramebuffer(a,b,c,d,e,k,g,m,n,p)},Oa:function(a,
b,c,d){2<=T.version?c?V.bufferData(a,z,d,c,b):V.bufferData(a,b,d):V.bufferData(a,c?z.subarray(c,c+b):b,d)},s:function(a,b,c,d){2<=T.version?V.bufferSubData(a,b,z,d,c):V.bufferSubData(a,b,z.subarray(d,d+c))},p:function(a){return V.checkFramebufferStatus(a)},Db:function(a){V.clear(a)},Cb:function(a,b,c,d){V.clearBufferfi(a,b,c,d)},ua:function(a,b,c){V.clearBufferfv(a,b,C,c>>2)},Bb:function(a,b,c){V.clearBufferiv(a,b,B,c>>2)},Gb:function(a,b,c,d){V.clearColor(a,b,c,d)},Fb:function(a){V.clearDepth(a)},
Eb:function(a){V.clearStencil(a)},m:function(a,b,c,d){V.colorMask(!!a,!!b,!!c,!!d)},Aa:function(a){V.compileShader(R[a])},Ka:function(a,b,c,d,e,k,g,m){2<=T.version?V.ec?V.compressedTexImage2D(a,b,c,d,e,k,g,m):V.compressedTexImage2D(a,b,c,d,e,k,z,m,g):V.compressedTexImage2D(a,b,c,d,e,k,m?z.subarray(m,m+g):null)},Ia:function(a,b,c,d,e,k,g,m,n){V.ec?V.compressedTexImage3D(a,b,c,d,e,k,g,m,n):V.compressedTexImage3D(a,b,c,d,e,k,g,z,n,m)},Ga:function(){var a=Hb(O),b=V.createProgram();b.name=a;b.lc=b.jc=
b.kc=0;b.oc=1;O[a]=b;return a},Ca:function(a){var b=Hb(R);R[b]=V.createShader(a);return b},O:function(a){V.cullFace(a)},Xa:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2],e=Ab[d];e&&(V.deleteBuffer(e),e.name=0,Ab[d]=null,d==V.sc&&(V.sc=0),d==V.ec&&(V.ec=0))}},k:function(a,b){for(var c=0;c<a;++c){var d=B[b+4*c>>2],e=Bb[d];e&&(V.deleteFramebuffer(e),e.name=0,Bb[d]=null)}},E:function(a){if(a){var b=O[a];b?(V.deleteProgram(b),b.name=0,O[a]=null):S(1281)}},X:function(a,b){for(var c=0;c<a;c++){var d=
B[b+4*c>>2],e=P[d];e&&(V.deleteRenderbuffer(e),e.name=0,P[d]=null)}},A:function(a){if(a){var b=R[a];b?(V.deleteShader(b),R[a]=null):S(1281)}},Wa:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2],e=Q[d];e&&(V.deleteTexture(e),e.name=0,Q[d]=null)}},Ua:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2];V.deleteVertexArray(Cb[d]);Cb[d]=null}},D:function(a){V.depthFunc(a)},C:function(a){V.depthMask(!!a)},g:function(a){V.disable(a)},V:function(a){V.disableVertexAttribArray(a)},pb:function(a,b,c){V.drawArrays(a,
b,c)},qb:function(a,b,c,d){V.drawArraysInstanced(a,b,c,d)},o:function(a,b){for(var c=Mb[a],d=0;d<a;d++)c[d]=B[b+4*d>>2];V.drawBuffers(c)},rb:function(a,b,c,d){V.drawElements(a,b,c,d)},sb:function(a,b,c,d,e){V.drawElementsInstanced(a,b,c,d,e)},i:function(a){V.enable(a)},yb:function(a){V.enableVertexAttribArray(a)},l:function(a,b,c,d){V.framebufferRenderbuffer(a,b,c,P[d])},c:function(a,b,c,d,e){V.framebufferTexture2D(a,b,c,Q[d],e)},j:function(a,b,c,d,e){V.framebufferTextureLayer(a,b,Q[c],d,e)},P:function(a){V.frontFace(a)},
Pa:function(a,b){U(a,b,"createBuffer",Ab)},q:function(a,b){U(a,b,"createFramebuffer",Bb)},N:function(a,b){U(a,b,"createRenderbuffer",P)},Ma:function(a,b){U(a,b,"createTexture",Q)},Ta:function(a,b){U(a,b,"createVertexArray",Cb)},ya:function(a,b){return V.getAttribLocation(O[a],A(b))},e:function(a,b){Nb(a,b)},Da:function(a,b,c,d){a=V.getProgramInfoLog(O[a]);null===a&&(a="(unknown error)");b=0<b&&d?y(a,z,d,b):0;c&&(B[c>>2]=b)},I:function(a,b,c){if(c)if(a>=zb)S(1281);else if(a=O[a],35716==b)a=V.getProgramInfoLog(a),
null===a&&(a="(unknown error)"),B[c>>2]=a.length+1;else if(35719==b){if(!a.lc)for(b=0;b<V.getProgramParameter(a,35718);++b)a.lc=Math.max(a.lc,V.getActiveUniform(a,b).name.length+1);B[c>>2]=a.lc}else if(35722==b){if(!a.jc)for(b=0;b<V.getProgramParameter(a,35721);++b)a.jc=Math.max(a.jc,V.getActiveAttrib(a,b).name.length+1);B[c>>2]=a.jc}else if(35381==b){if(!a.kc)for(b=0;b<V.getProgramParameter(a,35382);++b)a.kc=Math.max(a.kc,V.getActiveUniformBlockName(a,b).length+1);B[c>>2]=a.kc}else B[c>>2]=V.getProgramParameter(a,
b);else S(1281)},za:function(a,b,c,d){a=V.getShaderInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?y(a,z,d,b):0;c&&(B[c>>2]=b)},G:function(a,b,c){c?35716==b?(a=V.getShaderInfoLog(R[a]),null===a&&(a="(unknown error)"),B[c>>2]=a?a.length+1:0):35720==b?(a=V.getShaderSource(R[a]),B[c>>2]=a?a.length+1:0):B[c>>2]=V.getShaderParameter(R[a],b):S(1281)},Za:function(a){var b=Eb[a];if(!b){switch(a){case 7939:b=V.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=W(b.join(" "));
break;case 7936:case 7937:case 37445:case 37446:(b=V.getParameter(a))||S(1280);b=b&&W(b);break;case 7938:b=V.getParameter(7938);b=2<=T.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=W(b);break;case 35724:b=V.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=W(b);break;default:S(1280)}Eb[a]=b}return b},Ya:function(a,b){if(2>T.version)return S(1282),0;var c=Fb[a];if(c)return 0>
b||b>=c.length?(S(1281),0):c[b];switch(a){case 7939:return c=V.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return W(d)}),c=Fb[a]=c,0>b||b>=c.length?(S(1281),0):c[b];default:return S(1280),0}},r:function(a,b){b=A(b);if(a=O[a]){var c=a,d=c.hc,e=c.Gc,k;if(!d)for(c.hc=d={},c.Fc={},k=0;k<V.getProgramParameter(c,35718);++k){var g=V.getActiveUniform(c,k);var m=g.name;g=g.size;var n=Ob(m);n=0<n?m.slice(0,n):m;var p=c.oc;c.oc+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=
m,c.Fc[p++]=n}c=a.hc;d=0;e=b;k=Ob(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.Gc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||V.getUniformLocation(a,b)))return d}else S(1281);return-1},Fa:function(a){a=O[a];V.linkProgram(a);a.hc=0;a.Gc={}},R:function(a,b){V.polygonOffset(a,b)},x:function(a){V.readBuffer(a)},Na:function(a,b,c,d){V.renderbufferStorage(a,b,c,d)},L:function(a,b,c,d,e){V.renderbufferStorageMultisample(a,b,c,d,e)},y:function(a,b,c,d){V.scissor(a,b,c,d)},Ba:function(a,b,c,d){for(var e=
"",k=0;k<b;++k){var g=d?B[d+4*k>>2]:-1;e+=A(B[c+4*k>>2],0>g?void 0:g)}V.shaderSource(R[a],e)},Ra:function(a,b,c){V.stencilFunc(a,b,c)},ta:function(a,b,c,d){V.stencilFuncSeparate(a,b,c,d)},B:function(a){V.stencilMask(a)},Qa:function(a,b,c){V.stencilOp(a,b,c)},sa:function(a,b,c,d){V.stencilOpSeparate(a,b,c,d)},Ja:function(a,b,c,d,e,k,g,m,n){if(2<=T.version)if(V.ec)V.texImage2D(a,b,c,d,e,k,g,m,n);else if(n){var p=Pb(m);V.texImage2D(a,b,c,d,e,k,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else V.texImage2D(a,
b,c,d,e,k,g,m,null);else{p=V;var r=p.texImage2D;if(n){var v=Pb(m),N=31-Math.clz32(v.BYTES_PER_ELEMENT);n=v.subarray(n>>N,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[g-6402]||1)*(1<<N)+4-1&-4)>>N)}else n=null;r.call(p,a,b,c,d,e,k,g,m,n)}},Ha:function(a,b,c,d,e,k,g,m,n,p){if(V.ec)V.texImage3D(a,b,c,d,e,k,g,m,n,p);else if(p){var r=Pb(n);V.texImage3D(a,b,c,d,e,k,g,m,n,r,p>>31-Math.clz32(r.BYTES_PER_ELEMENT))}else V.texImage3D(a,b,c,d,e,k,g,m,n,null)},K:function(a,b,c){V.texParameterf(a,
b,c)},h:function(a,b,c){V.texParameteri(a,b,c)},xb:function(a,b,c){if(2<=T.version)V.uniform1fv(X(a),C,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=C[c+4*e>>2];else d=C.subarray(c>>2,c+4*b>>2);V.uniform1fv(X(a),d)}},H:function(a,b){V.uniform1i(X(a),b)},wb:function(a,b,c){if(2<=T.version)V.uniform2fv(X(a),C,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2];else d=C.subarray(c>>2,c+8*b>>2);V.uniform2fv(X(a),d)}},vb:function(a,b,c){if(2<=T.version)V.uniform3fv(X(a),
C,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2];else d=C.subarray(c>>2,c+12*b>>2);V.uniform3fv(X(a),d)}},ub:function(a,b,c){if(2<=T.version)V.uniform4fv(X(a),C,c>>2,4*b);else{if(72>=b){var d=Y[4*b-1],e=C;c>>=2;for(var k=0;k<4*b;k+=4){var g=c+k;d[k]=e[g];d[k+1]=e[g+1];d[k+2]=e[g+2];d[k+3]=e[g+3]}}else d=C.subarray(c>>2,c+16*b>>2);V.uniform4fv(X(a),d)}},tb:function(a,b,c,d){if(2<=T.version)V.uniformMatrix4fv(X(a),!!c,C,d>>2,
16*b);else{if(18>=b){var e=Y[16*b-1],k=C;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=k[m];e[g+1]=k[m+1];e[g+2]=k[m+2];e[g+3]=k[m+3];e[g+4]=k[m+4];e[g+5]=k[m+5];e[g+6]=k[m+6];e[g+7]=k[m+7];e[g+8]=k[m+8];e[g+9]=k[m+9];e[g+10]=k[m+10];e[g+11]=k[m+11];e[g+12]=k[m+12];e[g+13]=k[m+13];e[g+14]=k[m+14];e[g+15]=k[m+15]}}else e=C.subarray(d>>2,d+64*b>>2);V.uniformMatrix4fv(X(a),!!c,e)}},n:function(a){a=O[a];V.useProgram(a);V.Hc=a},zb:function(a,b){V.vertexAttribDivisor(a,b)},Ab:function(a,b,c,d,e,k){V.vertexAttribPointer(a,
b,c,!!d,e,k)},z:function(a,b,c,d){V.viewport(a,b,c,d)},gb:function(){f.zc=function(a){0!=Rb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.zc)},fb:function(){f.Ec=function(a){a=a.clipboardData.getData("text");qa("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.Ec)},eb:function(a){f.Yc=[];a=A(a);a=document.getElementById(a);f.Ac=function(b){b.stopPropagation();b.preventDefault()};f.Bc=function(b){b.stopPropagation();b.preventDefault()};f.Cc=
function(b){b.stopPropagation();b.preventDefault()};f.Dc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.Zc=c;Sb(c.length);var d;for(d=0;d<c.length;d++)qa("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Tb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.Ac,!1);a.addEventListener("dragleave",f.Bc,!1);a.addEventListener("dragover",f.Cc,!1);a.addEventListener("drop",f.Dc,!1)},$a:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},
v:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Ub()});document.body.append(a)},u:function(){document.getElementById("_sokol_app_input_element").focus()},Hb:function(a){a=A(a);f.fc=document.getElementById(a);f.fc||console.log("sokol_app.h: invalid target:"+a);f.fc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},db:function(){window.removeEventListener("beforeunload",
f.zc)},cb:function(){window.removeEventListener("paste",f.Ec)},bb:function(a){a=A(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.Ac);a.removeEventListener("dragleave",f.Bc);a.removeEventListener("dragover",f.Cc);a.removeEventListener("drop",f.Dc)},F:function(){f.fc&&f.fc.requestPointerLock&&f.fc.requestPointerLock()},_a:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(z.subarray(c,c+a*b*4));
e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},t:function(){document.getElementById("_sokol_app_input_element").blur()},ab:function(a){a=A(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=
1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},pa:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){f.asm=e.exports;oa=f.asm.Ib;Ca();Da=f.asm.$b;Fa.unshift(f.asm.Jb);E--;f.monitorRunDependencies&&f.monitorRunDependencies(E);0==E&&(null!==Ka&&(clearInterval(Ka),Ka=null),F&&(e=F,F=null,e()))}function b(e){a(e.instance)}function c(e){return Oa().then(function(k){return WebAssembly.instantiate(k,d)}).then(function(k){return k}).then(e,function(k){u("failed to asynchronously prepare wasm: "+k);na(k)})}var d={a:Vb};E++;f.monitorRunDependencies&&f.monitorRunDependencies(E);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return u("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return w||"function"!==typeof WebAssembly.instantiateStreaming||La()||G.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(G,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(k){u("wasm streaming compile failed: "+k);u("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.Jb).apply(null,arguments)};var Ub=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Ub=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Kb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.Lb).apply(null,arguments)};
var Rb=f.__sapp_html5_get_ask_leave_site=function(){return(Rb=f.__sapp_html5_get_ask_leave_site=f.asm.Mb).apply(null,arguments)},Sb=f.__sapp_emsc_begin_drop=function(){return(Sb=f.__sapp_emsc_begin_drop=f.asm.Nb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Ob).apply(null,arguments)};var Tb=f.__sapp_emsc_end_drop=function(){return(Tb=f.__sapp_emsc_end_drop=f.asm.Pb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Qb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Rb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Sb).apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.Tb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Ub).apply(null,arguments)};
f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.Vb).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.Wb).apply(null,arguments)};
var L=f._malloc=function(){return(L=f._malloc=f.asm.Xb).apply(null,arguments)},sa=f.stackSave=function(){return(sa=f.stackSave=f.asm.Yb).apply(null,arguments)},ta=f.stackRestore=function(){return(ta=f.stackRestore=f.asm.Zb).apply(null,arguments)},x=f.stackAlloc=function(){return(x=f.stackAlloc=f.asm._b).apply(null,arguments)},Wb;function ka(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}F=function Xb(){Wb||Yb();Wb||(F=Xb)};
function Yb(a){function b(){if(!Wb&&(Wb=!0,f.calledRun=!0,!pa)){Pa(Fa);Pa(Ga);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Zb){var c=a,d=f._main;c=c||[];var e=c.length+1,k=x(4*(e+1));B[k>>2]=xa(da);for(var g=1;g<e;g++)B[(k>>2)+g]=xa(c[g-1]);B[(k>>2)+e]=0;try{var m=d(e,k);if(!(noExitRuntime||0<la)){if(f.onExit)f.onExit(m);pa=!0}h(m,new ka(m))}catch(n){n instanceof ka||"unwind"==n||h(1,n)}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),
Ia.unshift(c);Pa(Ia)}}a=a||ca;if(!(0<E)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ja();Pa(Ea);0<E||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Yb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Zb=!0;f.noInitialRun&&(Zb=!1);Yb();
