
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign,ba=aa({},f),ca=[],da="./this.program",k=(a,b)=>{throw b;},ea="object"===typeof window,l="function"===typeof importScripts,q="",fa,t,u,fs,w,ha;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)q=l?require("path").dirname(q)+"/":__dirname+"/",ha=function(){w||(fs=require("fs"),w=require("path"))},fa=function(a,b){ha();a=w.normalize(a);return fs.readFileSync(a,b?null:"utf8")},u=function(a){a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a},t=function(a,b,c){ha();a=w.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(da=process.argv[1].replace(/\\/g,
"/")),ca=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof x))throw a;}),process.on("unhandledRejection",function(a){throw a;}),k=(a,b)=>{if(noExitRuntime||0<ia)throw process.exitCode=a,b;b instanceof x||y("exiting due to exception: "+b);process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(ea||l)l?q=self.location.href:"undefined"!==typeof document&&document.currentScript&&(q=document.currentScript.src),
q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(u=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),t=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};
f.print||console.log.bind(console);var y=f.printErr||console.warn.bind(console);aa(f,ba);ba=null;f.arguments&&(ca=f.arguments);f.thisProgram&&(da=f.thisProgram);f.quit&&(k=f.quit);var z;f.wasmBinary&&(z=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!==typeof WebAssembly&&ja("no native wasm support detected");var ka,la=!1;
function ma(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var r=(n.length<<2)+1;p=A(r);B(n,C,p,r)}return p},array:function(n){var p=A(n.length);D.set(n,p);return p}};a=f["_"+a];var e=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=na()),e[g]=m(c[g])):e[g]=c[g]}b=a.apply(null,e);b=function(n){0!==h&&oa(h);return n}(b)}var pa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function E(a,b){if(a){var c=C,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&pa)a=pa.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var h=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=c[a++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function B(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function qa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ra(a){var b=qa(a)+1,c=A(b);B(a,D,c,b);return c}var sa,D,C,ta,ua,F,va,G,H;
function wa(){var a=ka.buffer;sa=a;f.HEAP8=D=new Int8Array(a);f.HEAP16=ta=new Int16Array(a);f.HEAP32=F=new Int32Array(a);f.HEAPU8=C=new Uint8Array(a);f.HEAPU16=ua=new Uint16Array(a);f.HEAPU32=va=new Uint32Array(a);f.HEAPF32=G=new Float32Array(a);f.HEAPF64=H=new Float64Array(a)}var xa,ya=[],za=[],Aa=[],Ba=[],Ca=[],ia=0;function Da(){var a=f.preRun.shift();ya.unshift(a)}var I=0,Ea=null,J=null;f.preloadedImages={};f.preloadedAudios={};
function ja(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";y(a);la=!0;throw new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS=1 for more info.");}function Fa(){return K.startsWith("data:application/octet-stream;base64,")}var K;K="texcube-sapp.wasm";if(!Fa()){var Ga=K;K=f.locateFile?f.locateFile(Ga,q):q+Ga}function Ha(){var a=K;try{if(a==K&&z)return new Uint8Array(z);if(u)return u(a);throw"both async and sync fetching of the wasm failed";}catch(b){ja(b)}}
function Ia(){if(!z&&(ea||l)){if("function"===typeof fetch&&!K.startsWith("file://"))return fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Ha()});if(t)return new Promise(function(a,b){t(K,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ha()})}
function Ja(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.yc;"number"===typeof c?void 0===b.Wb?L(c)():L(c)(b.Wb):c(void 0===b.Wb?null:b.Wb)}}}var Ka=[];function L(a){var b=Ka[a];b||(a>=Ka.length&&(Ka.length=a+1),Ka[a]=b=xa.get(a));return b}var La=0;function Ma(){for(var a=N.length-1;0<=a;--a)Na(a);N=[];Oa=[]}var Oa=[];function Pa(){if(La&&Qa.Rb)for(var a=0;a<Oa.length;++a){var b=Oa[a];Oa.splice(a,1);--a;b.Hc.apply(null,b.vc)}}var N=[];
function Na(a){var b=N[a];b.target.removeEventListener(b.Kb,b.rc,b.Lb);N.splice(a,1)}function O(a){function b(d){++La;Qa=a;Pa();a.Nb(d);Pa();--La}if(a.Mb)a.rc=b,a.target.addEventListener(a.Kb,b,a.Lb),N.push(a),Ra||(Ba.push(Ma),Ra=!0);else for(var c=0;c<N.length;++c)N[c].target==a.target&&N[c].Kb==a.Kb&&Na(c--)}function Sa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Ra,Qa,Ta,Ua,Va,Wa,Xa,Ya,Za,$a=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function P(a){a=2<a?E(a):a;return $a[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function ab(a){return 0>$a.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function bb(a,b,c,d,e,h){Ta||(Ta=Q(256));a={target:P(a),Kb:h,Mb:d,Nb:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Ta;B(Sa(g.target),C,n+0,128);B(m,C,n+128,128);L(d)(e,n,b)&&g.preventDefault()},Lb:c};O(a)}
function cb(a,b,c,d,e,h){Ua||(Ua=Q(176));a={target:P(a),Rb:!0,Kb:h,Mb:d,Nb:function(g){var m=Ua;H[m>>3]=g.timeStamp;var n=m>>2;F[n+2]=g.location;F[n+3]=g.ctrlKey;F[n+4]=g.shiftKey;F[n+5]=g.altKey;F[n+6]=g.metaKey;F[n+7]=g.repeat;F[n+8]=g.charCode;F[n+9]=g.keyCode;F[n+10]=g.which;B(g.key||"",C,m+44,32);B(g.code||"",C,m+76,32);B(g.char||"",C,m+108,32);B(g.locale||"",C,m+140,32);L(d)(e,m,b)&&g.preventDefault()},Lb:c};O(a)}
function db(a,b,c){H[a>>3]=b.timeStamp;a>>=2;F[a+2]=b.screenX;F[a+3]=b.screenY;F[a+4]=b.clientX;F[a+5]=b.clientY;F[a+6]=b.ctrlKey;F[a+7]=b.shiftKey;F[a+8]=b.altKey;F[a+9]=b.metaKey;ta[2*a+20]=b.button;ta[2*a+21]=b.buttons;F[a+11]=b.movementX;F[a+12]=b.movementY;c=ab(c);F[a+13]=b.clientX-c.left;F[a+14]=b.clientY-c.top}
function R(a,b,c,d,e,h){Va||(Va=Q(72));a=P(a);O({target:a,Rb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Kb:h,Mb:d,Nb:function(g){g=g||event;db(Va,g,a);L(d)(e,Va,b)&&g.preventDefault()},Lb:c})}function eb(a,b,c,d,e){Wa||(Wa=Q(260));O({target:a,Kb:e,Mb:d,Nb:function(h){h=h||event;var g=Wa,m=document.pointerLockElement||document.Yb||document.$b||document.Zb;F[g>>2]=!!m;var n=m&&m.id?m.id:"";B(Sa(m),C,g+4,128);B(n,C,g+132,128);L(d)(20,g,b)&&h.preventDefault()},Lb:c})}
function fb(a,b,c,d,e){O({target:a,Kb:e,Mb:d,Nb:function(h){h=h||event;L(d)(38,0,b)&&h.preventDefault()},Lb:c})}
function gb(a,b,c,d){Xa||(Xa=Q(36));a=P(a);O({target:a,Kb:"resize",Mb:d,Nb:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=Xa;F[g>>2]=e.detail;F[g+4>>2]=h.clientWidth;F[g+8>>2]=h.clientHeight;F[g+12>>2]=innerWidth;F[g+16>>2]=innerHeight;F[g+20>>2]=outerWidth;F[g+24>>2]=outerHeight;F[g+28>>2]=pageXOffset;F[g+32>>2]=pageYOffset;L(d)(10,g,b)&&e.preventDefault()}}},Lb:c})}
function hb(a,b,c,d,e,h){Ya||(Ya=Q(1696));a=P(a);O({target:a,Rb:"touchstart"==h||"touchend"==h,Kb:h,Mb:d,Nb:function(g){for(var m,n={},p=g.touches,r=0;r<p.length;++r)m=p[r],m.ec=m.hc=0,n[m.identifier]=m;for(r=0;r<g.changedTouches.length;++r)m=g.changedTouches[r],m.ec=1,n[m.identifier]=m;for(r=0;r<g.targetTouches.length;++r)n[g.targetTouches[r].identifier].hc=1;p=Ya;H[p>>3]=g.timeStamp;var v=p>>2;F[v+3]=g.ctrlKey;F[v+4]=g.shiftKey;F[v+5]=g.altKey;F[v+6]=g.metaKey;v+=7;var M=ab(a),ob=0;for(r in n)if(m=
n[r],F[v]=m.identifier,F[v+1]=m.screenX,F[v+2]=m.screenY,F[v+3]=m.clientX,F[v+4]=m.clientY,F[v+5]=m.pageX,F[v+6]=m.pageY,F[v+7]=m.ec,F[v+8]=m.hc,F[v+9]=m.clientX-M.left,F[v+10]=m.clientY-M.top,v+=13,31<++ob)break;F[p+8>>2]=ob;L(d)(e,p,b)&&g.preventDefault()},Lb:c})}function ib(a,b,c,d,e,h){a={target:P(a),Kb:h,Mb:d,Nb:function(g){g=g||event;L(d)(e,0,b)&&g.preventDefault()},Lb:c};O(a)}
function jb(a,b,c,d){Za||(Za=Q(104));O({target:a,Rb:!0,Kb:"wheel",Mb:d,Nb:function(e){e=e||event;var h=Za;db(h,e,a);H[h+72>>3]=e.deltaX;H[h+80>>3]=e.deltaY;H[h+88>>3]=e.deltaZ;F[h+96>>2]=e.deltaMode;L(d)(9,h,b)&&e.preventDefault()},Lb:c})}
function kb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function lb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function mb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function nb(a){a.xc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function pb(a){a.Ac=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function qb(a){a.Cc=a.getExtension("WEBGL_multi_draw")}var rb=1,sb=[],S=[],tb=[],ub=[],vb=[],T=[],wb=[],xb=[],yb={},zb={};function U(a){Ab||(Ab=a)}function Bb(a){for(var b=rb++,c=a.length;c<b;c++)a[c]=null;return b}
function Cb(a,b){a.dc||(a.dc=a.getContext,a.getContext=function(d,e){e=a.dc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.fc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Db(c,b):0}function Db(a,b){var c=Bb(xb),d={zc:c,attributes:b,version:b.fc,Vb:a};a.canvas&&(a.canvas.uc=d);xb[c]=d;("undefined"===typeof b.cc||b.cc)&&Eb(d);return c}
function Eb(a){a||(a=V);if(!a.tc){a.tc=!0;var b=a.Vb;kb(b);lb(b);mb(b);nb(b);pb(b);2<=a.version&&(b.bc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.bc)b.bc=b.getExtension("EXT_disjoint_timer_query");qb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Ab,V,Fb=["default","low-power","high-performance"];
function Gb(a,b,c,d){for(var e=0;e<a;e++){var h=W[c](),g=h&&Bb(d);h?(h.name=g,d[g]=h):U(1282);F[b+4*e>>2]=g}}
function Hb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=W.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>V.version){U(1282);return}c=2*(W.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>V.version){U(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=W.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":U(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:U(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)F[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){U(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:U(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}F[b>>2]=c}else U(1281)}
function X(a){var b=qa(a)+1,c=Q(b);B(a,C,c,b);return c}function Ib(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Jb(a){a-=5120;return 0==a?D:1==a?C:2==a?ta:4==a?F:6==a?G:5==a||28922==a||28520==a||30779==a||30782==a?va:ua}function Y(a){var b=W.qc;if(b){var c=b.Qb[a];"number"===typeof c&&(b.Qb[a]=c=W.getUniformLocation(b,b.oc[a]+(0<c?"["+c+"]":"")));return c}U(1282)}for(var Z=[],W,Kb=new Float32Array(288),Lb=0;288>Lb;++Lb)Z[Lb]=Kb.subarray(0,Lb+1);
var Qb={Q:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ja:function(a,b,c){a=P(a);if(!a)return-4;a=ab(a);H[b>>3]=a.width;H[c>>3]=a.height;return 0},Za:function(a,b,c){C.copyWithin(a,b,b+c)},La:function(a,b){function c(d){L(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},_a:function(a){var b=C.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ka.grow(Math.min(2147483648,
d)-sa.byteLength+65535>>>16);wa();var e=1;break a}catch(h){}e=void 0}if(e)return!0}return!1},R:function(a,b,c,d){bb(a,b,c,d,12,"blur");return 0},N:function(a,b,c){a=P(a);if(!a)return-4;a.width=b;a.height=c;return 0},S:function(a,b,c,d){bb(a,b,c,d,13,"focus");return 0},$:function(a,b,c,d){cb(a,b,c,d,2,"keydown");return 0},Z:function(a,b,c,d){cb(a,b,c,d,1,"keypress");return 0},_:function(a,b,c,d){cb(a,b,c,d,3,"keyup");return 0},ia:function(a,b,c,d){R(a,b,c,d,5,"mousedown");return 0},ca:function(a,b,
c,d){R(a,b,c,d,33,"mouseenter");return 0},ba:function(a,b,c,d){R(a,b,c,d,34,"mouseleave");return 0},da:function(a,b,c,d){R(a,b,c,d,8,"mousemove");return 0},ea:function(a,b,c,d){R(a,b,c,d,6,"mouseup");return 0},U:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Yb||document.body.$b||document.body.Zb))return-1;a=P(a);if(!a)return-4;eb(a,b,c,d,"pointerlockchange");eb(a,b,c,d,"mozpointerlockchange");eb(a,b,c,d,"webkitpointerlockchange");eb(a,b,c,d,"mspointerlockchange");
return 0},T:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Yb||document.body.$b||document.body.Zb))return-1;a=P(a);if(!a)return-4;fb(a,b,c,d,"pointerlockerror");fb(a,b,c,d,"mozpointerlockerror");fb(a,b,c,d,"webkitpointerlockerror");fb(a,b,c,d,"mspointerlockerror");return 0},Ya:function(a,b,c,d){gb(a,b,c,d);return 0},V:function(a,b,c,d){hb(a,b,c,d,25,"touchcancel");return 0},W:function(a,b,c,d){hb(a,b,c,d,23,"touchend");return 0},X:function(a,b,c,d){hb(a,b,c,d,24,
"touchmove");return 0},Y:function(a,b,c,d){hb(a,b,c,d,22,"touchstart");return 0},P:function(a,b,c,d){ib(a,b,c,d,31,"webglcontextlost");return 0},O:function(a,b,c,d){ib(a,b,c,d,32,"webglcontextrestored");return 0},aa:function(a,b,c,d){a=P(a);return"undefined"!==typeof a.onwheel?(jb(a,b,c,d),0):-1},D:function(a,b){b>>=2;b={alpha:!!F[b],depth:!!F[b+1],stencil:!!F[b+2],antialias:!!F[b+3],premultipliedAlpha:!!F[b+4],preserveDrawingBuffer:!!F[b+5],powerPreference:Fb[F[b+6]],failIfMajorPerformanceCaveat:!!F[b+
7],fc:F[b+8],Bc:F[b+9],cc:F[b+10],sc:F[b+11],Dc:F[b+12],Ec:F[b+13]};a=P(a);return!a||b.sc?0:Cb(a,b)},qa:function(a,b){a=xb[a];b=E(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&kb(W);"OES_vertex_array_object"==b&&lb(W);"WEBGL_draw_buffers"==b&&mb(W);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&nb(W);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&pb(W);"WEBGL_multi_draw"==b&&qb(W);return!!a.Vb.getExtension(b)},Ia:function(a){a>>=2;for(var b=0;14>b;++b)F[a+
b]=0;F[a]=F[a+1]=F[a+3]=F[a+4]=F[a+8]=F[a+10]=1},xa:function(a){V=xb[a];f.wc=W=V&&V.Vb;return!a||W?0:-5},b:function(a){W.activeTexture(a)},A:function(a,b){W.attachShader(S[a],T[b])},e:function(a,b){35051==a?W.ac=b:35052==a&&(W.Ob=b);W.bindBuffer(a,sb[b])},h:function(a,b){W.bindFramebuffer(a,tb[b])},Ba:function(a,b){W.bindRenderbuffer(a,ub[b])},a:function(a,b){W.bindTexture(a,vb[b])},K:function(a){W.bindVertexArray(wb[a])},G:function(a,b,c,d){W.blendColor(a,b,c,d)},H:function(a,b){W.blendEquationSeparate(a,
b)},I:function(a,b,c,d){W.blendFuncSeparate(a,b,c,d)},p:function(a,b,c,d,e,h,g,m,n,p){W.blitFramebuffer(a,b,c,d,e,h,g,m,n,p)},Ea:function(a,b,c,d){2<=V.version?c?W.bufferData(a,C,d,c,b):W.bufferData(a,b,d):W.bufferData(a,c?C.subarray(c,c+b):b,d)},Da:function(a,b,c,d){2<=V.version?W.bufferSubData(a,b,C,d,c):W.bufferSubData(a,b,C.subarray(d,d+c))},lb:function(a){W.clear(a)},ha:function(a,b,c,d){W.clearColor(a,b,c,d)},w:function(a){W.clearDepth(a)},mb:function(a){W.clearStencil(a)},j:function(a,b,c,
d){W.colorMask(!!a,!!b,!!c,!!d)},ma:function(a){W.compileShader(T[a])},wa:function(a,b,c,d,e,h,g,m){2<=V.version?W.Ob?W.compressedTexImage2D(a,b,c,d,e,h,g,m):W.compressedTexImage2D(a,b,c,d,e,h,C,m,g):W.compressedTexImage2D(a,b,c,d,e,h,m?C.subarray(m,m+g):null)},ua:function(a,b,c,d,e,h,g,m,n){W.Ob?W.compressedTexImage3D(a,b,c,d,e,h,g,m,n):W.compressedTexImage3D(a,b,c,d,e,h,g,C,n,m)},sa:function(){var a=Bb(S),b=W.createProgram();b.name=a;b.Ub=b.Sb=b.Tb=0;b.Xb=1;S[a]=b;return a},oa:function(a){var b=
Bb(T);T[b]=W.createShader(a);return b},C:function(a){W.cullFace(a)},Na:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=sb[d];e&&(W.deleteBuffer(e),e.name=0,sb[d]=null,d==W.ac&&(W.ac=0),d==W.Ob&&(W.Ob=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=F[b+4*c>>2],e=tb[d];e&&(W.deleteFramebuffer(e),e.name=0,tb[d]=null)}},L:function(a){if(a){var b=S[a];b?(W.deleteProgram(b),b.name=0,S[a]=null):U(1281)}},M:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=ub[d];e&&(W.deleteRenderbuffer(e),e.name=
0,ub[d]=null)}},r:function(a){if(a){var b=T[a];b?(W.deleteShader(b),T[a]=null):U(1281)}},Ma:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=vb[d];e&&(W.deleteTexture(e),e.name=0,vb[d]=null)}},Ka:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2];W.deleteVertexArray(wb[d]);wb[d]=null}},u:function(a){W.depthFunc(a)},t:function(a){W.depthMask(!!a)},d:function(a){W.disable(a)},J:function(a){W.disableVertexAttribArray(a)},$a:function(a,b,c){W.drawArrays(a,b,c)},ab:function(a,b,c,d){W.drawArraysInstanced(a,
b,c,d)},bb:function(a,b,c,d){W.drawElements(a,b,c,d)},cb:function(a,b,c,d,e){W.drawElementsInstanced(a,b,c,d,e)},g:function(a){W.enable(a)},ib:function(a){W.enableVertexAttribArray(a)},E:function(a){W.frontFace(a)},Fa:function(a,b){Gb(a,b,"createBuffer",sb)},Ca:function(a,b){Gb(a,b,"createRenderbuffer",ub)},ya:function(a,b){Gb(a,b,"createTexture",vb)},Ja:function(a,b){Gb(a,b,"createVertexArray",wb)},ka:function(a,b){return W.getAttribLocation(S[a],E(b))},c:function(a,b){Hb(a,b)},pa:function(a,b,c,
d){a=W.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,C,d,b):0;c&&(F[c>>2]=b)},z:function(a,b,c){if(c)if(a>=rb)U(1281);else if(a=S[a],35716==b)a=W.getProgramInfoLog(a),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1;else if(35719==b){if(!a.Ub)for(b=0;b<W.getProgramParameter(a,35718);++b)a.Ub=Math.max(a.Ub,W.getActiveUniform(a,b).name.length+1);F[c>>2]=a.Ub}else if(35722==b){if(!a.Sb)for(b=0;b<W.getProgramParameter(a,35721);++b)a.Sb=Math.max(a.Sb,W.getActiveAttrib(a,b).name.length+
1);F[c>>2]=a.Sb}else if(35381==b){if(!a.Tb)for(b=0;b<W.getProgramParameter(a,35382);++b)a.Tb=Math.max(a.Tb,W.getActiveUniformBlockName(a,b).length+1);F[c>>2]=a.Tb}else F[c>>2]=W.getProgramParameter(a,b);else U(1281)},la:function(a,b,c,d){a=W.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,C,d,b):0;c&&(F[c>>2]=b)},x:function(a,b,c){c?35716==b?(a=W.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),F[c>>2]=a?a.length+1:0):35720==b?(a=W.getShaderSource(T[a]),F[c>>2]=a?a.length+
1:0):F[c>>2]=W.getShaderParameter(T[a],b):U(1281)},Pa:function(a){var b=yb[a];if(!b){switch(a){case 7939:b=W.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=X(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=W.getParameter(a))||U(1280);b=b&&X(b);break;case 7938:b=W.getParameter(7938);b=2<=V.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=X(b);break;case 35724:b=W.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=X(b);break;default:U(1280)}yb[a]=b}return b},Oa:function(a,b){if(2>V.version)return U(1282),0;var c=zb[a];if(c)return 0>b||b>=c.length?(U(1281),0):c[b];switch(a){case 7939:return c=W.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return X(d)}),c=zb[a]=c,0>b||b>=c.length?(U(1281),0):c[b];default:return U(1280),0}},k:function(a,b){b=E(b);if(a=S[a]){var c=a,d=c.Qb,e=c.pc,h;
if(!d)for(c.Qb=d={},c.oc={},h=0;h<W.getProgramParameter(c,35718);++h){var g=W.getActiveUniform(c,h);var m=g.name;g=g.size;var n=Ib(m);n=0<n?m.slice(0,n):m;var p=c.Xb;c.Xb+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.oc[p++]=n}c=a.Qb;d=0;e=b;h=Ib(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.pc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||W.getUniformLocation(a,b)))return d}else U(1281);return-1},ra:function(a){a=S[a];W.linkProgram(a);a.Qb=0;a.pc={}},F:function(a,b){W.polygonOffset(a,b)},q:function(a){W.readBuffer(a)},
za:function(a,b,c,d){W.renderbufferStorage(a,b,c,d)},Aa:function(a,b,c,d,e){W.renderbufferStorageMultisample(a,b,c,d,e)},nb:function(a,b,c,d){W.scissor(a,b,c,d)},na:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?F[d+4*h>>2]:-1;e+=E(F[c+4*h>>2],0>g?void 0:g)}W.shaderSource(T[a],e)},Ha:function(a,b,c){W.stencilFunc(a,b,c)},ga:function(a,b,c,d){W.stencilFuncSeparate(a,b,c,d)},s:function(a){W.stencilMask(a)},Ga:function(a,b,c){W.stencilOp(a,b,c)},fa:function(a,b,c,d){W.stencilOpSeparate(a,b,c,d)},
va:function(a,b,c,d,e,h,g,m,n){if(2<=V.version)if(W.Ob)W.texImage2D(a,b,c,d,e,h,g,m,n);else if(n){var p=Jb(m);W.texImage2D(a,b,c,d,e,h,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else W.texImage2D(a,b,c,d,e,h,g,m,null);else{p=W;var r=p.texImage2D;if(n){var v=Jb(m),M=31-Math.clz32(v.BYTES_PER_ELEMENT);n=v.subarray(n>>M,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[g-6402]||1)*(1<<M)+4-1&-4)>>M)}else n=null;r.call(p,a,b,c,d,e,h,g,m,n)}},ta:function(a,b,c,d,e,h,g,m,n,p){if(W.Ob)W.texImage3D(a,
b,c,d,e,h,g,m,n,p);else if(p){var r=Jb(n);W.texImage3D(a,b,c,d,e,h,g,m,n,r,p>>31-Math.clz32(r.BYTES_PER_ELEMENT))}else W.texImage3D(a,b,c,d,e,h,g,m,n,null)},B:function(a,b,c){W.texParameterf(a,b,c)},f:function(a,b,c){W.texParameteri(a,b,c)},hb:function(a,b,c){if(2<=V.version)W.uniform1fv(Y(a),G,c>>2,b);else{if(288>=b)for(var d=Z[b-1],e=0;e<b;++e)d[e]=G[c+4*e>>2];else d=G.subarray(c>>2,c+4*b>>2);W.uniform1fv(Y(a),d)}},y:function(a,b){W.uniform1i(Y(a),b)},gb:function(a,b,c){if(2<=V.version)W.uniform2fv(Y(a),
G,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],e=0;e<2*b;e+=2)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2];else d=G.subarray(c>>2,c+8*b>>2);W.uniform2fv(Y(a),d)}},fb:function(a,b,c){if(2<=V.version)W.uniform3fv(Y(a),G,c>>2,3*b);else{if(96>=b)for(var d=Z[3*b-1],e=0;e<3*b;e+=3)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2],d[e+2]=G[c+(4*e+8)>>2];else d=G.subarray(c>>2,c+12*b>>2);W.uniform3fv(Y(a),d)}},eb:function(a,b,c){if(2<=V.version)W.uniform4fv(Y(a),G,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],e=G;c>>=2;for(var h=
0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=G.subarray(c>>2,c+16*b>>2);W.uniform4fv(Y(a),d)}},db:function(a,b,c,d){if(2<=V.version)W.uniformMatrix4fv(Y(a),!!c,G,d>>2,16*b);else{if(18>=b){var e=Z[16*b-1],h=G;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=h[m];e[g+1]=h[m+1];e[g+2]=h[m+2];e[g+3]=h[m+3];e[g+4]=h[m+4];e[g+5]=h[m+5];e[g+6]=h[m+6];e[g+7]=h[m+7];e[g+8]=h[m+8];e[g+9]=h[m+9];e[g+10]=h[m+10];e[g+11]=h[m+11];e[g+12]=h[m+12];e[g+13]=h[m+13];e[g+14]=h[m+
14];e[g+15]=h[m+15]}}else e=G.subarray(d>>2,d+64*b>>2);W.uniformMatrix4fv(Y(a),!!c,e)}},l:function(a){a=S[a];W.useProgram(a);W.qc=a},jb:function(a,b){W.vertexAttribDivisor(a,b)},kb:function(a,b,c,d,e,h){W.vertexAttribPointer(a,b,c,!!d,e,h)},ob:function(a,b,c,d){W.viewport(a,b,c,d)},Xa:function(){f.ic=function(a){0!=Mb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.ic)},Wa:function(){f.nc=function(a){a=a.clipboardData.getData("text");ma("_sapp_emsc_onpaste",["string"],
[a])};window.addEventListener("paste",f.nc)},Va:function(a){f.Fc=[];a=E(a);a=document.getElementById(a);f.jc=function(b){b.stopPropagation();b.preventDefault()};f.kc=function(b){b.stopPropagation();b.preventDefault()};f.lc=function(b){b.stopPropagation();b.preventDefault()};f.mc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.Gc=c;Nb(c.length);var d;for(d=0;d<c.length;d++)ma("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Ob(b.clientX,b.clientY)};a.addEventListener("dragenter",
f.jc,!1);a.addEventListener("dragleave",f.kc,!1);a.addEventListener("dragover",f.lc,!1);a.addEventListener("drop",f.mc,!1)},Ra:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},o:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Pb()});document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},pb:function(a){a=
E(a);f.Pb=document.getElementById(a);f.Pb||console.log("sokol_app.h: invalid target:"+a);f.Pb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ua:function(){window.removeEventListener("beforeunload",f.ic)},Ta:function(){window.removeEventListener("paste",f.nc)},Sa:function(a){a=E(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.jc);a.removeEventListener("dragleave",f.kc);a.removeEventListener("dragover",f.lc);a.removeEventListener("drop",
f.mc)},v:function(){f.Pb&&f.Pb.requestPointerLock&&f.Pb.requestPointerLock()},Qa:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(C.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},m:function(){document.getElementById("_sokol_app_input_element").blur()}};
(function(){function a(e){f.asm=e.exports;ka=f.asm.qb;wa();xa=f.asm.Jb;za.unshift(f.asm.rb);I--;f.monitorRunDependencies&&f.monitorRunDependencies(I);0==I&&(null!==Ea&&(clearInterval(Ea),Ea=null),J&&(e=J,J=null,e()))}function b(e){a(e.instance)}function c(e){return Ia().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(e,function(h){y("failed to asynchronously prepare wasm: "+h);ja(h)})}var d={a:Qb};I++;f.monitorRunDependencies&&f.monitorRunDependencies(I);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return y("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return z||"function"!==typeof WebAssembly.instantiateStreaming||Fa()||K.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(K,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){y("wasm streaming compile failed: "+h);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.rb).apply(null,arguments)};var Pb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Pb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.sb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.tb).apply(null,arguments)};
var Mb=f.__sapp_html5_get_ask_leave_site=function(){return(Mb=f.__sapp_html5_get_ask_leave_site=f.asm.ub).apply(null,arguments)},Nb=f.__sapp_emsc_begin_drop=function(){return(Nb=f.__sapp_emsc_begin_drop=f.asm.vb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.wb).apply(null,arguments)};var Ob=f.__sapp_emsc_end_drop=function(){return(Ob=f.__sapp_emsc_end_drop=f.asm.xb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.yb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.zb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Ab).apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.Bb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Cb).apply(null,arguments)};
f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.Db).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.Eb).apply(null,arguments)};
var Q=f._malloc=function(){return(Q=f._malloc=f.asm.Fb).apply(null,arguments)},na=f.stackSave=function(){return(na=f.stackSave=f.asm.Gb).apply(null,arguments)},oa=f.stackRestore=function(){return(oa=f.stackRestore=f.asm.Hb).apply(null,arguments)},A=f.stackAlloc=function(){return(A=f.stackAlloc=f.asm.Ib).apply(null,arguments)},Rb;function x(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}J=function Sb(){Rb||Tb();Rb||(J=Sb)};
function Tb(a){function b(){if(!Rb&&(Rb=!0,f.calledRun=!0,!la)){Ja(za);Ja(Aa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Ub){var c=a,d=f._main;c=c||[];var e=c.length+1,h=A(4*(e+1));F[h>>2]=ra(da);for(var g=1;g<e;g++)F[(h>>2)+g]=ra(c[g-1]);F[(h>>2)+e]=0;try{var m=d(e,h);if(!(noExitRuntime||0<ia)){if(f.onExit)f.onExit(m);la=!0}k(m,new x(m))}catch(n){n instanceof x||"unwind"==n||k(1,n)}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),
Ca.unshift(c);Ja(Ca)}}a=a||ca;if(!(0<I)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Da();Ja(ya);0<I||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Tb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Ub=!0;f.noInitialRun&&(Ub=!1);Tb();
