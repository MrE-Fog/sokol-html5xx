
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},f),ba=[],ca="./this.program",h=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,q="",fa,r,u,fs,v,ha;
if(ea)q=l?require("path").dirname(q)+"/":__dirname+"/",ha=()=>{v||(fs=require("fs"),v=require("path"))},fa=function(a,b){ha();a=v.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")},u=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a},r=(a,b,c)=>{ha();a=v.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/")),ba=process.argv.slice(2),"undefined"!=typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof
w))throw a;}),process.on("unhandledRejection",function(a){throw a;}),h=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof w||y("exiting due to exception: "+b);process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(da||l)l?q=self.location.href:"undefined"!=typeof document&&document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);
b.send(null);return b.responseText},l&&(u=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),r=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};f.print||console.log.bind(console);var y=f.printErr||console.warn.bind(console);Object.assign(f,aa);aa=null;f.arguments&&(ba=f.arguments);
f.thisProgram&&(ca=f.thisProgram);f.quit&&(h=f.quit);var z;f.wasmBinary&&(z=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!=typeof WebAssembly&&ia("no native wasm support detected");var ja,ka=!1;
function la(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var t=(n.length<<2)+1;p=A(t);B(n,C,p,t)}return p},array:function(n){var p=A(n.length);ma.set(n,p);return p}};a=f["_"+a];var e=[],k=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===k&&(k=na()),e[g]=m(c[g])):e[g]=c[g]}b=a.apply(null,e);b=function(n){0!==k&&oa(k);return n}(b)}var pa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function D(a,b){if(a){var c=C,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&pa)a=pa.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var k=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var g=c[a++]&63;e=224==(e&240)?(e&15)<<12|k<<6|g:(e&7)<<18|k<<12|g<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function B(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function qa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}var ra,ma,C,sa,E,F,G;function ta(){var a=ja.buffer;ra=a;f.HEAP8=ma=new Int8Array(a);f.HEAP16=sa=new Int16Array(a);f.HEAP32=E=new Int32Array(a);f.HEAPU8=C=new Uint8Array(a);f.HEAPU16=new Uint16Array(a);f.HEAPU32=new Uint32Array(a);f.HEAPF32=F=new Float32Array(a);f.HEAPF64=G=new Float64Array(a)}
var ua,va=[],wa=[],xa=[],ya=[],za=[];function Aa(){var a=f.preRun.shift();va.unshift(a)}var H=0,Ba=null,I=null;function ia(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";y(a);ka=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Ca(){return J.startsWith("data:application/octet-stream;base64,")}var J;J="noninterleaved-sapp.wasm";if(!Ca()){var Da=J;J=f.locateFile?f.locateFile(Da,q):q+Da}
function Ea(){var a=J;try{if(a==J&&z)return new Uint8Array(z);if(u)return u(a);throw"both async and sync fetching of the wasm failed";}catch(b){ia(b)}}
function Fa(){if(!z&&(da||l)){if("function"==typeof fetch&&!J.startsWith("file://"))return fetch(J,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+J+"'";return a.arrayBuffer()}).catch(function(){return Ea()});if(r)return new Promise(function(a,b){r(J,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ea()})}
function Ga(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.qc;"number"==typeof c?void 0===b.Pb?K(c)():K(c)(b.Pb):c(void 0===b.Pb?null:b.Pb)}}}var Ha=[];function K(a){var b=Ha[a];b||(a>=Ha.length&&(Ha.length=a+1),Ha[a]=b=ua.get(a));return b}var Ia=0;function Ja(){for(var a=L.length-1;0<=a;--a)Ka(a);L=[];La=[]}var La=[];function Ma(){if(Ia&&Na.Kb)for(var a=0;a<La.length;++a){var b=La[a];La.splice(a,1);--a;b.zc.apply(null,b.nc)}}var L=[];
function Ka(a){var b=L[a];b.target.removeEventListener(b.Db,b.jc,b.Eb);L.splice(a,1)}function M(a){function b(d){++Ia;Na=a;Ma();a.Gb(d);Ma();--Ia}if(a.Fb)a.jc=b,a.target.addEventListener(a.Db,b,a.Eb),L.push(a),Oa||(ya.push(Ja),Oa=!0);else for(var c=0;c<L.length;++c)L[c].target==a.target&&L[c].Db==a.Db&&Ka(c--)}function Pa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Oa,Na,Qa,Ra,Sa,Ta,Ua,Va,Wa,Xa=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];function N(a){a=2<a?D(a):a;return Xa[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function Ya(a){return 0>Xa.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function Za(a,b,c,d,e,k){Qa||(Qa=O(256));a={target:N(a),Db:k,Fb:d,Gb:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Qa;B(Pa(g.target),C,n+0,128);B(m,C,n+128,128);K(d)(e,n,b)&&g.preventDefault()},Eb:c};M(a)}
function $a(a,b,c,d,e,k){Ra||(Ra=O(176));a={target:N(a),Kb:!0,Db:k,Fb:d,Gb:function(g){var m=Ra;G[m>>3]=g.timeStamp;var n=m>>2;E[n+2]=g.location;E[n+3]=g.ctrlKey;E[n+4]=g.shiftKey;E[n+5]=g.altKey;E[n+6]=g.metaKey;E[n+7]=g.repeat;E[n+8]=g.charCode;E[n+9]=g.keyCode;E[n+10]=g.which;B(g.key||"",C,m+44,32);B(g.code||"",C,m+76,32);B(g.char||"",C,m+108,32);B(g.locale||"",C,m+140,32);K(d)(e,m,b)&&g.preventDefault()},Eb:c};M(a)}
function ab(a,b,c){G[a>>3]=b.timeStamp;a>>=2;E[a+2]=b.screenX;E[a+3]=b.screenY;E[a+4]=b.clientX;E[a+5]=b.clientY;E[a+6]=b.ctrlKey;E[a+7]=b.shiftKey;E[a+8]=b.altKey;E[a+9]=b.metaKey;sa[2*a+20]=b.button;sa[2*a+21]=b.buttons;E[a+11]=b.movementX;E[a+12]=b.movementY;c=Ya(c);E[a+13]=b.clientX-c.left;E[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,k){Sa||(Sa=O(72));a=N(a);M({target:a,Kb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Db:k,Fb:d,Gb:function(g){g=g||event;ab(Sa,g,a);K(d)(e,Sa,b)&&g.preventDefault()},Eb:c})}function bb(a,b,c,d,e){Ta||(Ta=O(260));M({target:a,Db:e,Fb:d,Gb:function(k){k=k||event;var g=Ta,m=document.pointerLockElement||document.Hb||document.Sb||document.Rb;E[g>>2]=!!m;var n=m&&m.id?m.id:"";B(Pa(m),C,g+4,128);B(n,C,g+132,128);K(d)(20,g,b)&&k.preventDefault()},Eb:c})}
function cb(a,b,c,d,e){M({target:a,Db:e,Fb:d,Gb:function(k){k=k||event;K(d)(38,0,b)&&k.preventDefault()},Eb:c})}
function db(a,b,c,d){Ua||(Ua=O(36));a=N(a);M({target:a,Db:"resize",Fb:d,Gb:function(e){e=e||event;if(e.target==a){var k=document.body;if(k){var g=Ua;E[g>>2]=e.detail;E[g+4>>2]=k.clientWidth;E[g+8>>2]=k.clientHeight;E[g+12>>2]=innerWidth;E[g+16>>2]=innerHeight;E[g+20>>2]=outerWidth;E[g+24>>2]=outerHeight;E[g+28>>2]=pageXOffset;E[g+32>>2]=pageYOffset;K(d)(10,g,b)&&e.preventDefault()}}},Eb:c})}
function eb(a,b,c,d,e,k){Va||(Va=O(1696));a=N(a);M({target:a,Kb:"touchstart"==k||"touchend"==k,Db:k,Fb:d,Gb:function(g){for(var m,n={},p=g.touches,t=0;t<p.length;++t)m=p[t],m.Xb=m.Zb=0,n[m.identifier]=m;for(t=0;t<g.changedTouches.length;++t)m=g.changedTouches[t],m.Xb=1,n[m.identifier]=m;for(t=0;t<g.targetTouches.length;++t)n[g.targetTouches[t].identifier].Zb=1;p=Va;G[p>>3]=g.timeStamp;var x=p>>2;E[x+3]=g.ctrlKey;E[x+4]=g.shiftKey;E[x+5]=g.altKey;E[x+6]=g.metaKey;x+=7;var hb=Ya(a),ib=0;for(t in n)if(m=
n[t],E[x]=m.identifier,E[x+1]=m.screenX,E[x+2]=m.screenY,E[x+3]=m.clientX,E[x+4]=m.clientY,E[x+5]=m.pageX,E[x+6]=m.pageY,E[x+7]=m.Xb,E[x+8]=m.Zb,E[x+9]=m.clientX-hb.left,E[x+10]=m.clientY-hb.top,x+=13,31<++ib)break;E[p+8>>2]=ib;K(d)(e,p,b)&&g.preventDefault()},Eb:c})}function fb(a,b,c,d,e,k){a={target:N(a),Db:k,Fb:d,Gb:function(g){g=g||event;K(d)(e,0,b)&&g.preventDefault()},Eb:c};M(a)}
function gb(a,b,c,d){Wa||(Wa=O(104));M({target:a,Kb:!0,Db:"wheel",Fb:d,Gb:function(e){e=e||event;var k=Wa;ab(k,e,a);G[k+72>>3]=e.deltaX;G[k+80>>3]=e.deltaY;G[k+88>>3]=e.deltaZ;E[k+96>>2]=e.deltaMode;K(d)(9,k,b)&&e.preventDefault()},Eb:c})}
function jb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,g){b.drawElementsInstancedANGLE(c,d,e,k,g)})}
function kb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function lb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function mb(a){a.pc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function nb(a){a.sc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function ob(a){a.uc=a.getExtension("WEBGL_multi_draw")}var pb=1,qb=[],Q=[],rb=[],sb=[],tb=[],R=[],ub=[],vb=[],wb={},xb={};function S(a){yb||(yb=a)}function zb(a){for(var b=pb++,c=a.length;c<b;c++)a[c]=null;return b}
function Ab(a,b){a.Hb||(a.Hb=a.getContext,a.getContext=function(d,e){e=a.Hb(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Yb?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Bb(c,b):0}function Bb(a,b){var c=zb(vb),d={rc:c,attributes:b,version:b.Yb,Ob:a};a.canvas&&(a.canvas.mc=d);vb[c]=d;("undefined"==typeof b.Wb||b.Wb)&&Cb(d);return c}
function Cb(a){a||(a=T);if(!a.lc){a.lc=!0;var b=a.Ob;jb(b);kb(b);lb(b);mb(b);nb(b);2<=a.version&&(b.Vb=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Vb)b.Vb=b.getExtension("EXT_disjoint_timer_query");ob(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var yb,T,Db=["default","low-power","high-performance"];
function Eb(a,b,c,d){for(var e=0;e<a;e++){var k=U[c](),g=k&&zb(d);k?(k.name=g,d[g]=k):S(1282);E[b+4*e>>2]=g}}
function Fb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=U.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>T.version){S(1282);return}c=2*(U.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>T.version){S(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=U.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":S(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:S(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)E[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){S(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:S(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}E[b>>2]=c}else S(1281)}
function V(a){var b=qa(a)+1,c=O(b);B(a,C,c,b);return c}function Gb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function W(a){var b=U.ic;if(b){var c=b.Jb[a];"number"==typeof c&&(b.Jb[a]=c=U.getUniformLocation(b,b.fc[a]+(0<c?"["+c+"]":"")));return c}S(1282)}for(var X=[],Y=[],U,Hb=new Float32Array(288),Z=0;288>Z;++Z)X[Z]=Hb.subarray(0,Z+1);var Ib=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Ib.subarray(0,Z+1);
var Nb={R:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},ha:function(a,b,c){a=N(a);if(!a)return-4;a=Ya(a);G[b>>3]=a.width;G[c>>3]=a.height;return 0},Wa:function(a,b,c){C.copyWithin(a,b,b+c)},Ha:function(a,b){function c(d){K(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Va:function(a){var b=C.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math;d=Math.max(a,d);e=e.min.call(e,2147483648,d+(65536-
d%65536)%65536);a:{try{ja.grow(e-ra.byteLength+65535>>>16);ta();var k=1;break a}catch(g){}k=void 0}if(k)return!0}return!1},S:function(a,b,c,d){Za(a,b,c,d,12,"blur");return 0},O:function(a,b,c){a=N(a);if(!a)return-4;a.width=b;a.height=c;return 0},T:function(a,b,c,d){Za(a,b,c,d,13,"focus");return 0},aa:function(a,b,c,d){$a(a,b,c,d,2,"keydown");return 0},_:function(a,b,c,d){$a(a,b,c,d,1,"keypress");return 0},$:function(a,b,c,d){$a(a,b,c,d,3,"keyup");return 0},ga:function(a,b,c,d){P(a,b,c,d,5,"mousedown");
return 0},da:function(a,b,c,d){P(a,b,c,d,33,"mouseenter");return 0},ca:function(a,b,c,d){P(a,b,c,d,34,"mouseleave");return 0},ea:function(a,b,c,d){P(a,b,c,d,8,"mousemove");return 0},fa:function(a,b,c,d){P(a,b,c,d,6,"mouseup");return 0},V:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Hb||document.body.Sb||document.body.Rb))return-1;a=N(a);if(!a)return-4;bb(a,b,c,d,"pointerlockchange");bb(a,b,c,d,"mozpointerlockchange");bb(a,b,c,d,"webkitpointerlockchange");
bb(a,b,c,d,"mspointerlockchange");return 0},U:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Hb||document.body.Sb||document.body.Rb))return-1;a=N(a);if(!a)return-4;cb(a,b,c,d,"pointerlockerror");cb(a,b,c,d,"mozpointerlockerror");cb(a,b,c,d,"webkitpointerlockerror");cb(a,b,c,d,"mspointerlockerror");return 0},Ua:function(a,b,c,d){db(a,b,c,d);return 0},W:function(a,b,c,d){eb(a,b,c,d,25,"touchcancel");return 0},X:function(a,b,c,d){eb(a,b,c,d,23,"touchend");return 0},
Y:function(a,b,c,d){eb(a,b,c,d,24,"touchmove");return 0},Z:function(a,b,c,d){eb(a,b,c,d,22,"touchstart");return 0},Q:function(a,b,c,d){fb(a,b,c,d,31,"webglcontextlost");return 0},P:function(a,b,c,d){fb(a,b,c,d,32,"webglcontextrestored");return 0},ba:function(a,b,c,d){a=N(a);return"undefined"!=typeof a.onwheel?(gb(a,b,c,d),0):-1},E:function(a,b){b>>=2;b={alpha:!!E[b],depth:!!E[b+1],stencil:!!E[b+2],antialias:!!E[b+3],premultipliedAlpha:!!E[b+4],preserveDrawingBuffer:!!E[b+5],powerPreference:Db[E[b+
6]],failIfMajorPerformanceCaveat:!!E[b+7],Yb:E[b+8],tc:E[b+9],Wb:E[b+10],kc:E[b+11],vc:E[b+12],wc:E[b+13]};a=N(a);return!a||b.kc?0:Ab(a,b)},oa:function(a,b){a=vb[a];b=D(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&jb(U);"OES_vertex_array_object"==b&&kb(U);"WEBGL_draw_buffers"==b&&lb(U);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&mb(U);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&nb(U);"WEBGL_multi_draw"==b&&ob(U);return!!a.Ob.getExtension(b)},Ea:function(a){a>>=
2;for(var b=0;14>b;++b)E[a+b]=0;E[a]=E[a+1]=E[a+3]=E[a+4]=E[a+8]=E[a+10]=1},va:function(a){T=vb[a];f.oc=U=T&&T.Ob;return!a||U?0:-5},b:function(a){U.activeTexture(a)},C:function(a,b){U.attachShader(Q[a],R[b])},e:function(a,b){35051==a?U.Tb=b:35052==a&&(U.Ub=b);U.bindBuffer(a,qb[b])},g:function(a,b){U.bindFramebuffer(a,rb[b])},a:function(a,b){U.bindTexture(a,tb[b])},L:function(a){U.bindVertexArray(ub[a])},H:function(a,b,c,d){U.blendColor(a,b,c,d)},I:function(a,b){U.blendEquationSeparate(a,b)},J:function(a,
b,c,d){U.blendFuncSeparate(a,b,c,d)},o:function(a,b,c,d,e,k,g,m,n,p){U.blitFramebuffer(a,b,c,d,e,k,g,m,n,p)},Aa:function(a,b,c,d){2<=T.version?c&&b?U.bufferData(a,C,d,c,b):U.bufferData(a,b,d):U.bufferData(a,c?C.subarray(c,c+b):b,d)},za:function(a,b,c,d){2<=T.version?c&&U.bufferSubData(a,b,C,d,c):U.bufferSubData(a,b,C.subarray(d,d+c))},la:function(a){U.clear(a)},y:function(a,b,c,d){U.clearColor(a,b,c,d)},q:function(a){U.clearDepth(a)},ma:function(a){U.clearStencil(a)},i:function(a,b,c,d){U.colorMask(!!a,
!!b,!!c,!!d)},sa:function(a){U.compileShader(R[a])},ya:function(){var a=zb(Q),b=U.createProgram();b.name=a;b.Nb=b.Lb=b.Mb=0;b.Qb=1;Q[a]=b;return a},ua:function(a){var b=zb(R);R[b]=U.createShader(a);return b},D:function(a){U.cullFace(a)},Ja:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=qb[d];e&&(U.deleteBuffer(e),e.name=0,qb[d]=null,d==U.Tb&&(U.Tb=0),d==U.Ub&&(U.Ub=0))}},h:function(a,b){for(var c=0;c<a;++c){var d=E[b+4*c>>2],e=rb[d];e&&(U.deleteFramebuffer(e),e.name=0,rb[d]=null)}},M:function(a){if(a){var b=
Q[a];b?(U.deleteProgram(b),b.name=0,Q[a]=null):S(1281)}},N:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=sb[d];e&&(U.deleteRenderbuffer(e),e.name=0,sb[d]=null)}},r:function(a){if(a){var b=R[a];b?(U.deleteShader(b),R[a]=null):S(1281)}},Ia:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=tb[d];e&&(U.deleteTexture(e),e.name=0,tb[d]=null)}},Ga:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2];U.deleteVertexArray(ub[d]);ub[d]=null}},u:function(a){U.depthFunc(a)},t:function(a){U.depthMask(!!a)},
d:function(a){U.disable(a)},K:function(a){U.disableVertexAttribArray(a)},Xa:function(a,b,c){U.drawArrays(a,b,c)},Ya:function(a,b,c,d){U.drawArraysInstanced(a,b,c,d)},Za:function(a,b,c,d){U.drawElements(a,b,c,d)},_a:function(a,b,c,d,e){U.drawElementsInstanced(a,b,c,d,e)},f:function(a){U.enable(a)},ia:function(a){U.enableVertexAttribArray(a)},F:function(a){U.frontFace(a)},Ba:function(a,b){Eb(a,b,"createBuffer",qb)},Fa:function(a,b){Eb(a,b,"createVertexArray",ub)},qa:function(a,b){return U.getAttribLocation(Q[a],
D(b))},c:function(a,b){Fb(a,b)},wa:function(a,b,c,d){a=U.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,C,d,b):0;c&&(E[c>>2]=b)},B:function(a,b,c){if(c)if(a>=pb)S(1281);else if(a=Q[a],35716==b)a=U.getProgramInfoLog(a),null===a&&(a="(unknown error)"),E[c>>2]=a.length+1;else if(35719==b){if(!a.Nb)for(b=0;b<U.getProgramParameter(a,35718);++b)a.Nb=Math.max(a.Nb,U.getActiveUniform(a,b).name.length+1);E[c>>2]=a.Nb}else if(35722==b){if(!a.Lb)for(b=0;b<U.getProgramParameter(a,35721);++b)a.Lb=
Math.max(a.Lb,U.getActiveAttrib(a,b).name.length+1);E[c>>2]=a.Lb}else if(35381==b){if(!a.Mb)for(b=0;b<U.getProgramParameter(a,35382);++b)a.Mb=Math.max(a.Mb,U.getActiveUniformBlockName(a,b).length+1);E[c>>2]=a.Mb}else E[c>>2]=U.getProgramParameter(a,b);else S(1281)},ra:function(a,b,c,d){a=U.getShaderInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,C,d,b):0;c&&(E[c>>2]=b)},z:function(a,b,c){c?35716==b?(a=U.getShaderInfoLog(R[a]),null===a&&(a="(unknown error)"),E[c>>2]=a?a.length+1:0):35720==
b?(a=U.getShaderSource(R[a]),E[c>>2]=a?a.length+1:0):E[c>>2]=U.getShaderParameter(R[a],b):S(1281)},La:function(a){var b=wb[a];if(!b){switch(a){case 7939:b=U.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=V(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=U.getParameter(a))||S(1280);b=b&&V(b);break;case 7938:b=U.getParameter(7938);b=2<=T.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=V(b);break;case 35724:b=U.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=V(b);break;default:S(1280)}wb[a]=b}return b},Ka:function(a,b){if(2>T.version)return S(1282),0;var c=xb[a];if(c)return 0>b||b>=c.length?(S(1281),0):c[b];switch(a){case 7939:return c=U.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return V(d)}),c=xb[a]=c,0>b||b>=c.length?(S(1281),0):c[b];default:return S(1280),0}},j:function(a,b){b=D(b);if(a=Q[a]){var c=a,d=c.Jb,e=c.hc,k;
if(!d)for(c.Jb=d={},c.fc={},k=0;k<U.getProgramParameter(c,35718);++k){var g=U.getActiveUniform(c,k);var m=g.name;g=g.size;var n=Gb(m);n=0<n?m.slice(0,n):m;var p=c.Qb;c.Qb+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.fc[p++]=n}c=a.Jb;d=0;e=b;k=Gb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.hc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||U.getUniformLocation(a,b)))return d}else S(1281);return-1},xa:function(a){a=Q[a];U.linkProgram(a);a.Jb=0;a.hc={}},G:function(a,b){U.polygonOffset(a,b)},p:function(a){U.readBuffer(a)},
na:function(a,b,c,d){U.scissor(a,b,c,d)},ta:function(a,b,c,d){for(var e="",k=0;k<b;++k){var g=d?E[d+4*k>>2]:-1;e+=D(E[c+4*k>>2],0>g?void 0:g)}U.shaderSource(R[a],e)},Da:function(a,b,c){U.stencilFunc(a,b,c)},x:function(a,b,c,d){U.stencilFuncSeparate(a,b,c,d)},s:function(a){U.stencilMask(a)},Ca:function(a,b,c){U.stencilOp(a,b,c)},w:function(a,b,c,d){U.stencilOpSeparate(a,b,c,d)},hb:function(a,b,c){if(2<=T.version)b&&U.uniform1fv(W(a),F,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=F[c+4*
e>>2];else d=F.subarray(c>>2,c+4*b>>2);U.uniform1fv(W(a),d)}},A:function(a,b){U.uniform1i(W(a),b)},db:function(a,b,c){if(2<=T.version)b&&U.uniform1iv(W(a),E,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=E[c+4*e>>2];else d=E.subarray(c>>2,c+4*b>>2);U.uniform1iv(W(a),d)}},gb:function(a,b,c){if(2<=T.version)b&&U.uniform2fv(W(a),F,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2];else d=F.subarray(c>>2,c+8*b>>2);U.uniform2fv(W(a),d)}},cb:function(a,
b,c){if(2<=T.version)b&&U.uniform2iv(W(a),E,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2];else d=E.subarray(c>>2,c+8*b>>2);U.uniform2iv(W(a),d)}},fb:function(a,b,c){if(2<=T.version)b&&U.uniform3fv(W(a),F,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+8)>>2];else d=F.subarray(c>>2,c+12*b>>2);U.uniform3fv(W(a),d)}},bb:function(a,b,c){if(2<=T.version)b&&U.uniform3iv(W(a),E,c>>2,3*b);
else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2],d[e+2]=E[c+(4*e+8)>>2];else d=E.subarray(c>>2,c+12*b>>2);U.uniform3iv(W(a),d)}},eb:function(a,b,c){if(2<=T.version)b&&U.uniform4fv(W(a),F,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=F;c>>=2;for(var k=0;k<4*b;k+=4){var g=c+k;d[k]=e[g];d[k+1]=e[g+1];d[k+2]=e[g+2];d[k+3]=e[g+3]}}else d=F.subarray(c>>2,c+16*b>>2);U.uniform4fv(W(a),d)}},ab:function(a,b,c){if(2<=T.version)b&&U.uniform4iv(W(a),E,c>>2,4*b);else{if(72>=b)for(var d=
Y[4*b-1],e=0;e<4*b;e+=4)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2],d[e+2]=E[c+(4*e+8)>>2],d[e+3]=E[c+(4*e+12)>>2];else d=E.subarray(c>>2,c+16*b>>2);U.uniform4iv(W(a),d)}},$a:function(a,b,c,d){if(2<=T.version)b&&U.uniformMatrix4fv(W(a),!!c,F,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],k=F;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=k[m];e[g+1]=k[m+1];e[g+2]=k[m+2];e[g+3]=k[m+3];e[g+4]=k[m+4];e[g+5]=k[m+5];e[g+6]=k[m+6];e[g+7]=k[m+7];e[g+8]=k[m+8];e[g+9]=k[m+9];e[g+10]=k[m+10];e[g+11]=k[m+11];e[g+12]=
k[m+12];e[g+13]=k[m+13];e[g+14]=k[m+14];e[g+15]=k[m+15]}}else e=F.subarray(d>>2,d+64*b>>2);U.uniformMatrix4fv(W(a),!!c,e)}},k:function(a){a=Q[a];U.useProgram(a);U.ic=a},ja:function(a,b){U.vertexAttribDivisor(a,b)},ka:function(a,b,c,d,e,k){U.vertexAttribPointer(a,b,c,!!d,e,k)},pa:function(a,b,c,d){U.viewport(a,b,c,d)},Ta:function(){f.$b=function(a){0!=Jb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.$b)},Sa:function(){f.ec=function(a){a=a.clipboardData.getData("text");
la("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.ec)},Ra:function(a){f.xc=[];a=D(a);a=document.getElementById(a);f.ac=function(b){b.stopPropagation();b.preventDefault()};f.bc=function(b){b.stopPropagation();b.preventDefault()};f.cc=function(b){b.stopPropagation();b.preventDefault()};f.dc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.yc=c;Kb(c.length);var d;for(d=0;d<c.length;d++)la("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Lb(b.clientX,
b.clientY)};a.addEventListener("dragenter",f.ac,!1);a.addEventListener("dragleave",f.bc,!1);a.addEventListener("dragover",f.cc,!1);a.addEventListener("drop",f.dc,!1)},Na:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},n:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Mb()});document.body.append(a)},m:function(){document.getElementById("_sokol_app_input_element").focus()},
ib:function(a){a=D(a);f.Ib=document.getElementById(a);f.Ib||console.log("sokol_app.h: invalid target:"+a);f.Ib.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Qa:function(){window.removeEventListener("beforeunload",f.$b)},Pa:function(){window.removeEventListener("paste",f.ec)},Oa:function(a){a=D(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.ac);a.removeEventListener("dragleave",f.bc);a.removeEventListener("dragover",f.cc);a.removeEventListener("drop",
f.dc)},v:function(){f.Ib&&f.Ib.requestPointerLock&&f.Ib.requestPointerLock()},Ma:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(C.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},l:function(){document.getElementById("_sokol_app_input_element").blur()}};
(function(){function a(e){f.asm=e.exports;ja=f.asm.jb;ta();ua=f.asm.zb;wa.unshift(f.asm.kb);H--;f.monitorRunDependencies&&f.monitorRunDependencies(H);0==H&&(null!==Ba&&(clearInterval(Ba),Ba=null),I&&(e=I,I=null,e()))}function b(e){a(e.instance)}function c(e){return Fa().then(function(k){return WebAssembly.instantiate(k,d)}).then(function(k){return k}).then(e,function(k){y("failed to asynchronously prepare wasm: "+k);ia(k)})}var d={a:Nb};H++;f.monitorRunDependencies&&f.monitorRunDependencies(H);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return y("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return z||"function"!=typeof WebAssembly.instantiateStreaming||Ca()||J.startsWith("file://")||ea||"function"!=typeof fetch?c(b):fetch(J,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(k){y("wasm streaming compile failed: "+k);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.kb).apply(null,arguments)};var Mb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Mb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.lb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.mb).apply(null,arguments)};
var Jb=f.__sapp_html5_get_ask_leave_site=function(){return(Jb=f.__sapp_html5_get_ask_leave_site=f.asm.nb).apply(null,arguments)},Kb=f.__sapp_emsc_begin_drop=function(){return(Kb=f.__sapp_emsc_begin_drop=f.asm.ob).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.pb).apply(null,arguments)};var Lb=f.__sapp_emsc_end_drop=function(){return(Lb=f.__sapp_emsc_end_drop=f.asm.qb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.rb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.sb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.tb).apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.ub).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.vb).apply(null,arguments)};
f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.wb).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.xb).apply(null,arguments)};
var O=f._malloc=function(){return(O=f._malloc=f.asm.yb).apply(null,arguments)},na=f.stackSave=function(){return(na=f.stackSave=f.asm.Ab).apply(null,arguments)},oa=f.stackRestore=function(){return(oa=f.stackRestore=f.asm.Bb).apply(null,arguments)},A=f.stackAlloc=function(){return(A=f.stackAlloc=f.asm.Cb).apply(null,arguments)},Ob;function w(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}I=function Pb(){Ob||Qb();Ob||(I=Pb)};
function Rb(a){var b=f._main;a=a||[];a.unshift(ca);var c=a.length,d=A(4*(c+1)),e=d>>2;a.forEach(g=>{var m=E,n=e++,p=qa(g)+1,t=A(p);B(g,ma,t,p);m[n]=t});E[e]=0;try{var k=b(c,d);Sb(k)}catch(g){g instanceof w||"unwind"==g||h(1,g)}finally{}}
function Qb(a){function b(){if(!Ob&&(Ob=!0,f.calledRun=!0,!ka)){Ga(wa);Ga(xa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();Tb&&Rb(a);if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var c=f.postRun.shift();za.unshift(c)}Ga(za)}}a=a||ba;if(!(0<H)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Aa();Ga(va);0<H||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},
1)):b())}}f.run=Qb;function Sb(a){if(!noExitRuntime){if(f.onExit)f.onExit(a);ka=!0}h(a,new w(a))}if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Tb=!0;f.noInitialRun&&(Tb=!1);Qb();
