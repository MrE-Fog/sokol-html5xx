
var g;g||(g=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},g),ba=[],ca="./this.program",h=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,r="",fa,t,u,fs,ha,ia;
if(ea)r=l?require("path").dirname(r)+"/":__dirname+"/",ia=()=>{ha||(fs=require("fs"),ha=require("path"))},fa=function(a,b){ia();a=ha.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")},u=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a},t=(a,b,c)=>{ia();a=ha.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/")),ba=process.argv.slice(2),"undefined"!=typeof module&&(module.exports=g),process.on("uncaughtException",function(a){if(!(a instanceof
ja))throw a;}),process.on("unhandledRejection",function(a){throw a;}),h=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof ja||v("exiting due to exception: "+b);process.exit(a)},g.inspect=function(){return"[Emscripten Module object]"};else if(da||l)l?r=self.location.href:"undefined"!=typeof document&&document.currentScript&&(r=document.currentScript.src),r=0!==r.indexOf("blob:")?r.substr(0,r.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);
b.send(null);return b.responseText},l&&(u=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),t=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ka=g.print||console.log.bind(console),v=g.printErr||console.warn.bind(console);Object.assign(g,aa);aa=null;g.arguments&&(ba=g.arguments);
g.thisProgram&&(ca=g.thisProgram);g.quit&&(h=g.quit);var x;g.wasmBinary&&(x=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!0;"object"!=typeof WebAssembly&&la("no native wasm support detected");var ma,na=!1;
function oa(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=y(q);z(n,A,p,q)}return p},array:function(n){var p=y(n.length);pa.set(n,p);return p}};a=g["_"+a];var e=[],k=0;if(c)for(var f=0;f<c.length;f++){var m=d[b[f]];m?(0===k&&(k=qa()),e[f]=m(c[f])):e[f]=c[f]}b=a.apply(null,e);b=function(n){0!==k&&ra(k);return n}(b)}var sa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ta(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&sa)return sa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var k=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var f=a[b++]&63;e=224==(e&240)?(e&15)<<12|k<<6|f:(e&7)<<18|k<<12|f<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function B(a,b){return a?ta(A,a,b):""}
function z(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var f=a.charCodeAt(k);if(55296<=f&&57343>=f){var m=a.charCodeAt(++k);f=65536+((f&1023)<<10)|m&1023}if(127>=f){if(c>=d)break;b[c++]=f}else{if(2047>=f){if(c+1>=d)break;b[c++]=192|f>>6}else{if(65535>=f){if(c+2>=d)break;b[c++]=224|f>>12}else{if(c+3>=d)break;b[c++]=240|f>>18;b[c++]=128|f>>12&63}b[c++]=128|f>>6&63}b[c++]=128|f&63}}b[c]=0;return c-e}
function ua(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}var va,pa,A,wa,xa,C,D,E,F;function ya(){var a=ma.buffer;va=a;g.HEAP8=pa=new Int8Array(a);g.HEAP16=wa=new Int16Array(a);g.HEAP32=C=new Int32Array(a);g.HEAPU8=A=new Uint8Array(a);g.HEAPU16=xa=new Uint16Array(a);g.HEAPU32=D=new Uint32Array(a);g.HEAPF32=E=new Float32Array(a);g.HEAPF64=F=new Float64Array(a)}
var za,Aa=[],Ba=[],Ca=[],Da=[],Ea=[];function Fa(){var a=g.preRun.shift();Aa.unshift(a)}var G=0,Ga=null,H=null;function la(a){if(g.onAbort)g.onAbort(a);a="Aborted("+a+")";v(a);na=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Ha(){return I.startsWith("data:application/octet-stream;base64,")}var I;I="basisu-sapp.wasm";if(!Ha()){var Ia=I;I=g.locateFile?g.locateFile(Ia,r):r+Ia}
function Ja(){var a=I;try{if(a==I&&x)return new Uint8Array(x);if(u)return u(a);throw"both async and sync fetching of the wasm failed";}catch(b){la(b)}}
function Ka(){if(!x&&(da||l)){if("function"==typeof fetch&&!I.startsWith("file://"))return fetch(I,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+I+"'";return a.arrayBuffer()}).catch(function(){return Ja()});if(t)return new Promise(function(a,b){t(I,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ja()})}
function La(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(g);else{var c=b.Fc;"number"==typeof c?void 0===b.ec?J(c)():J(c)(b.ec):c(void 0===b.ec?null:b.ec)}}}var Ma=[];function J(a){var b=Ma[a];b||(a>=Ma.length&&(Ma.length=a+1),Ma[a]=b=za.get(a));return b}var Na=0;function Oa(){for(var a=K.length-1;0<=a;--a)Pa(a);K=[];Qa=[]}var Qa=[];function Ra(){if(Na&&Sa.$b)for(var a=0;a<Qa.length;++a){var b=Qa[a];Qa.splice(a,1);--a;b.Oc.apply(null,b.Cc)}}var K=[];
function Pa(a){var b=K[a];b.target.removeEventListener(b.Sb,b.yc,b.Tb);K.splice(a,1)}function L(a){function b(d){++Na;Sa=a;Ra();a.Vb(d);Ra();--Na}if(a.Ub)a.yc=b,a.target.addEventListener(a.Sb,b,a.Tb),K.push(a),Ta||(Da.push(Oa),Ta=!0);else for(var c=0;c<K.length;++c)K[c].target==a.target&&K[c].Sb==a.Sb&&Pa(c--)}function Ua(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Ta,Sa,Va,Wa,Xa,Ya,Za,$a,ab,bb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];function M(a){a=2<a?B(a):a;return bb[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function cb(a){return 0>bb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function db(a,b,c,d,e,k){Va||(Va=O(256));a={target:M(a),Sb:k,Ub:d,Vb:function(f){f=f||event;var m=f.target.id?f.target.id:"",n=Va;z(Ua(f.target),A,n+0,128);z(m,A,n+128,128);J(d)(e,n,b)&&f.preventDefault()},Tb:c};L(a)}
function eb(a,b,c,d,e,k){Wa||(Wa=O(176));a={target:M(a),$b:!0,Sb:k,Ub:d,Vb:function(f){var m=Wa;F[m>>3]=f.timeStamp;var n=m>>2;C[n+2]=f.location;C[n+3]=f.ctrlKey;C[n+4]=f.shiftKey;C[n+5]=f.altKey;C[n+6]=f.metaKey;C[n+7]=f.repeat;C[n+8]=f.charCode;C[n+9]=f.keyCode;C[n+10]=f.which;z(f.key||"",A,m+44,32);z(f.code||"",A,m+76,32);z(f.char||"",A,m+108,32);z(f.locale||"",A,m+140,32);J(d)(e,m,b)&&f.preventDefault()},Tb:c};L(a)}
function fb(a,b,c){F[a>>3]=b.timeStamp;a>>=2;C[a+2]=b.screenX;C[a+3]=b.screenY;C[a+4]=b.clientX;C[a+5]=b.clientY;C[a+6]=b.ctrlKey;C[a+7]=b.shiftKey;C[a+8]=b.altKey;C[a+9]=b.metaKey;wa[2*a+20]=b.button;wa[2*a+21]=b.buttons;C[a+11]=b.movementX;C[a+12]=b.movementY;c=cb(c);C[a+13]=b.clientX-c.left;C[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,k){Xa||(Xa=O(72));a=M(a);L({target:a,$b:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Sb:k,Ub:d,Vb:function(f){f=f||event;fb(Xa,f,a);J(d)(e,Xa,b)&&f.preventDefault()},Tb:c})}function gb(a,b,c,d,e){Ya||(Ya=O(260));L({target:a,Sb:e,Ub:d,Vb:function(k){k=k||event;var f=Ya,m=document.pointerLockElement||document.Xb||document.ic||document.hc;C[f>>2]=!!m;var n=m&&m.id?m.id:"";z(Ua(m),A,f+4,128);z(n,A,f+132,128);J(d)(20,f,b)&&k.preventDefault()},Tb:c})}
function hb(a,b,c,d,e){L({target:a,Sb:e,Ub:d,Vb:function(k){k=k||event;J(d)(38,0,b)&&k.preventDefault()},Tb:c})}
function ib(a,b,c,d){Za||(Za=O(36));a=M(a);L({target:a,Sb:"resize",Ub:d,Vb:function(e){e=e||event;if(e.target==a){var k=document.body;if(k){var f=Za;C[f>>2]=e.detail;C[f+4>>2]=k.clientWidth;C[f+8>>2]=k.clientHeight;C[f+12>>2]=innerWidth;C[f+16>>2]=innerHeight;C[f+20>>2]=outerWidth;C[f+24>>2]=outerHeight;C[f+28>>2]=pageXOffset;C[f+32>>2]=pageYOffset;J(d)(10,f,b)&&e.preventDefault()}}},Tb:c})}
function jb(a,b,c,d,e,k){$a||($a=O(1696));a=M(a);L({target:a,$b:"touchstart"==k||"touchend"==k,Sb:k,Ub:d,Vb:function(f){for(var m,n={},p=f.touches,q=0;q<p.length;++q)m=p[q],m.mc=m.oc=0,n[m.identifier]=m;for(q=0;q<f.changedTouches.length;++q)m=f.changedTouches[q],m.mc=1,n[m.identifier]=m;for(q=0;q<f.targetTouches.length;++q)n[f.targetTouches[q].identifier].oc=1;p=$a;F[p>>3]=f.timeStamp;var w=p>>2;C[w+3]=f.ctrlKey;C[w+4]=f.shiftKey;C[w+5]=f.altKey;C[w+6]=f.metaKey;w+=7;var N=cb(a),ob=0;for(q in n)if(m=
n[q],C[w]=m.identifier,C[w+1]=m.screenX,C[w+2]=m.screenY,C[w+3]=m.clientX,C[w+4]=m.clientY,C[w+5]=m.pageX,C[w+6]=m.pageY,C[w+7]=m.mc,C[w+8]=m.oc,C[w+9]=m.clientX-N.left,C[w+10]=m.clientY-N.top,w+=13,31<++ob)break;C[p+8>>2]=ob;J(d)(e,p,b)&&f.preventDefault()},Tb:c})}function kb(a,b,c,d,e,k){a={target:M(a),Sb:k,Ub:d,Vb:function(f){f=f||event;J(d)(e,0,b)&&f.preventDefault()},Tb:c};L(a)}
function lb(a,b,c,d){ab||(ab=O(104));L({target:a,$b:!0,Sb:"wheel",Ub:d,Vb:function(e){e=e||event;var k=ab;fb(k,e,a);F[k+72>>3]=e.deltaX;F[k+80>>3]=e.deltaY;F[k+88>>3]=e.deltaZ;C[k+96>>2]=e.deltaMode;J(d)(9,k,b)&&e.preventDefault()},Tb:c})}
function mb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,f){b.drawElementsInstancedANGLE(c,d,e,k,f)})}
function nb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function pb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function qb(a){a.Ec=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function rb(a){a.Hc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function sb(a){a.Jc=a.getExtension("WEBGL_multi_draw")}var tb=1,ub=[],Q=[],vb=[],wb=[],xb=[],R=[],yb=[],zb=[],Ab={},Bb={};function S(a){Cb||(Cb=a)}function Db(a){for(var b=tb++,c=a.length;c<b;c++)a[c]=null;return b}
function Eb(a,b){a.Xb||(a.Xb=a.getContext,a.getContext=function(d,e){e=a.Xb(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.nc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Fb(c,b):0}function Fb(a,b){var c=Db(zb),d={Gc:c,attributes:b,version:b.nc,dc:a};a.canvas&&(a.canvas.Bc=d);zb[c]=d;("undefined"==typeof b.lc||b.lc)&&Gb(d);return c}
function Gb(a){a||(a=T);if(!a.Ac){a.Ac=!0;var b=a.dc;mb(b);nb(b);pb(b);qb(b);rb(b);2<=a.version&&(b.kc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.kc)b.kc=b.getExtension("EXT_disjoint_timer_query");sb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Cb,T,Hb=["default","low-power","high-performance"],Ib=[null,[],[]];
function Jb(a,b,c,d){for(var e=0;e<a;e++){var k=U[c](),f=k&&Db(d);k?(k.name=f,d[f]=k):S(1282);C[b+4*e>>2]=f}}
function Kb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=U.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>T.version){S(1282);return}c=2*(U.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>T.version){S(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=U.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":S(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:S(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)C[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){S(1280);v("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:S(1280);v("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}C[b>>2]=c}else S(1281)}
function V(a){var b=ua(a)+1,c=O(b);z(a,A,c,b);return c}function Lb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Mb(a){a-=5120;return 0==a?pa:1==a?A:2==a?wa:4==a?C:6==a?E:5==a||28922==a||28520==a||30779==a||30782==a?D:xa}function W(a){var b=U.xc;if(b){var c=b.Zb[a];"number"==typeof c&&(b.Zb[a]=c=U.getUniformLocation(b,b.vc[a]+(0<c?"["+c+"]":"")));return c}S(1282)}for(var X=[],Y=[],U,Nb=new Float32Array(288),Z=0;288>Z;++Z)X[Z]=Nb.subarray(0,Z+1);var Ob=new Int32Array(288);
for(Z=0;288>Z;++Z)Y[Z]=Ob.subarray(0,Z+1);
var Tb={m:function(){la("")},V:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},qa:function(a,b,c){a=M(a);if(!a)return-4;a=cb(a);F[b>>3]=a.width;F[c>>3]=a.height;return 0},eb:function(a,b,c){A.copyWithin(a,b,b+c)},Oa:function(a,b){function c(d){J(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},bb:function(a){var b=A.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math;d=Math.max(a,d);e=e.min.call(e,
2147483648,d+(65536-d%65536)%65536);a:{try{ma.grow(e-va.byteLength+65535>>>16);ya();var k=1;break a}catch(f){}k=void 0}if(k)return!0}return!1},W:function(a,b,c,d){db(a,b,c,d,12,"blur");return 0},S:function(a,b,c){a=M(a);if(!a)return-4;a.width=b;a.height=c;return 0},X:function(a,b,c,d){db(a,b,c,d,13,"focus");return 0},ea:function(a,b,c,d){eb(a,b,c,d,2,"keydown");return 0},ca:function(a,b,c,d){eb(a,b,c,d,1,"keypress");return 0},da:function(a,b,c,d){eb(a,b,c,d,3,"keyup");return 0},pa:function(a,b,c,
d){P(a,b,c,d,5,"mousedown");return 0},ha:function(a,b,c,d){P(a,b,c,d,33,"mouseenter");return 0},ga:function(a,b,c,d){P(a,b,c,d,34,"mouseleave");return 0},ia:function(a,b,c,d){P(a,b,c,d,8,"mousemove");return 0},ja:function(a,b,c,d){P(a,b,c,d,6,"mouseup");return 0},Z:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Xb||document.body.ic||document.body.hc))return-1;a=M(a);if(!a)return-4;gb(a,b,c,d,"pointerlockchange");gb(a,b,c,d,"mozpointerlockchange");
gb(a,b,c,d,"webkitpointerlockchange");gb(a,b,c,d,"mspointerlockchange");return 0},Y:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Xb||document.body.ic||document.body.hc))return-1;a=M(a);if(!a)return-4;hb(a,b,c,d,"pointerlockerror");hb(a,b,c,d,"mozpointerlockerror");hb(a,b,c,d,"webkitpointerlockerror");hb(a,b,c,d,"mspointerlockerror");return 0},$a:function(a,b,c,d){ib(a,b,c,d);return 0},_:function(a,b,c,d){jb(a,b,c,d,25,"touchcancel");return 0},$:function(a,b,c,
d){jb(a,b,c,d,23,"touchend");return 0},aa:function(a,b,c,d){jb(a,b,c,d,24,"touchmove");return 0},ba:function(a,b,c,d){jb(a,b,c,d,22,"touchstart");return 0},U:function(a,b,c,d){kb(a,b,c,d,31,"webglcontextlost");return 0},T:function(a,b,c,d){kb(a,b,c,d,32,"webglcontextrestored");return 0},fa:function(a,b,c,d){a=M(a);return"undefined"!=typeof a.onwheel?(lb(a,b,c,d),0):-1},J:function(a,b){b>>=2;b={alpha:!!C[b],depth:!!C[b+1],stencil:!!C[b+2],antialias:!!C[b+3],premultipliedAlpha:!!C[b+4],preserveDrawingBuffer:!!C[b+
5],powerPreference:Hb[C[b+6]],failIfMajorPerformanceCaveat:!!C[b+7],nc:C[b+8],Ic:C[b+9],lc:C[b+10],zc:C[b+11],Kc:C[b+12],Lc:C[b+13]};a=M(a);return!a||b.zc?0:Eb(a,b)},xa:function(a,b){a=zb[a];b=B(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&mb(U);"OES_vertex_array_object"==b&&nb(U);"WEBGL_draw_buffers"==b&&pb(U);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&qb(U);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&rb(U);"WEBGL_multi_draw"==b&&sb(U);return!!a.dc.getExtension(b)},
La:function(a){a>>=2;for(var b=0;14>b;++b)C[a+b]=0;C[a]=C[a+1]=C[a+3]=C[a+4]=C[a+8]=C[a+10]=1},Ea:function(a){T=zb[a];g.Dc=U=T&&T.dc;return!a||U?0:-5},db:function(){return 52},ab:function(){return 70},cb:function(a,b,c,d){for(var e=0,k=0;k<c;k++){var f=D[b>>2],m=D[b+4>>2];b+=8;for(var n=0;n<m;n++){var p=A[f+n],q=Ib[a];0===p||10===p?((1===a?ka:v)(ta(q,0)),q.length=0):q.push(p)}e+=m}D[d>>2]=e;return 0},c:function(a){U.activeTexture(a)},D:function(a,b){U.attachShader(Q[a],R[b])},b:function(a,b){35051==
a?U.jc=b:35052==a&&(U.Wb=b);U.bindBuffer(a,ub[b])},h:function(a,b){U.bindFramebuffer(a,vb[b])},G:function(a,b){U.bindRenderbuffer(a,wb[b])},a:function(a,b){U.bindTexture(a,xb[b])},Q:function(a){U.bindVertexArray(yb[a])},M:function(a,b,c,d){U.blendColor(a,b,c,d)},N:function(a,b){U.blendEquationSeparate(a,b)},O:function(a,b,c,d){U.blendFuncSeparate(a,b,c,d)},r:function(a,b,c,d,e,k,f,m,n,p){U.blitFramebuffer(a,b,c,d,e,k,f,m,n,p)},Ha:function(a,b,c,d){2<=T.version?c&&b?U.bufferData(a,A,d,c,b):U.bufferData(a,
b,d):U.bufferData(a,c?A.subarray(c,c+b):b,d)},j:function(a,b,c,d){2<=T.version?c&&U.bufferSubData(a,b,A,d,c):U.bufferSubData(a,b,A.subarray(d,d+c))},vb:function(a){U.clear(a)},ma:function(a,b,c,d){U.clearColor(a,b,c,d)},z:function(a){U.clearDepth(a)},wb:function(a){U.clearStencil(a)},k:function(a,b,c,d){U.colorMask(!!a,!!b,!!c,!!d)},ta:function(a){U.compileShader(R[a])},Da:function(a,b,c,d,e,k,f,m){2<=T.version?U.Wb||!f?U.compressedTexImage2D(a,b,c,d,e,k,f,m):U.compressedTexImage2D(a,b,c,d,e,k,A,
m,f):U.compressedTexImage2D(a,b,c,d,e,k,m?A.subarray(m,m+f):null)},Ba:function(a,b,c,d,e,k,f,m,n){U.Wb?U.compressedTexImage3D(a,b,c,d,e,k,f,m,n):U.compressedTexImage3D(a,b,c,d,e,k,f,A,n,m)},za:function(){var a=Db(Q),b=U.createProgram();b.name=a;b.cc=b.ac=b.bc=0;b.fc=1;Q[a]=b;return a},va:function(a){var b=Db(R);R[b]=U.createShader(a);return b},I:function(a){U.cullFace(a)},Qa:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=ub[d];e&&(U.deleteBuffer(e),e.name=0,ub[d]=null,d==U.jc&&(U.jc=0),d==
U.Wb&&(U.Wb=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=C[b+4*c>>2],e=vb[d];e&&(U.deleteFramebuffer(e),e.name=0,vb[d]=null)}},x:function(a){if(a){var b=Q[a];b?(U.deleteProgram(b),b.name=0,Q[a]=null):S(1281)}},R:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=wb[d];e&&(U.deleteRenderbuffer(e),e.name=0,wb[d]=null)}},t:function(a){if(a){var b=R[a];b?(U.deleteShader(b),R[a]=null):S(1281)}},Pa:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=xb[d];e&&(U.deleteTexture(e),e.name=0,xb[d]=
null)}},Na:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2];U.deleteVertexArray(yb[d]);yb[d]=null}},w:function(a){U.depthFunc(a)},v:function(a){U.depthMask(!!a)},e:function(a){U.disable(a)},P:function(a){U.disableVertexAttribArray(a)},fb:function(a,b,c){U.drawArrays(a,b,c)},gb:function(a,b,c,d){U.drawArraysInstanced(a,b,c,d)},hb:function(a,b,c,d){U.drawElements(a,b,c,d)},ib:function(a,b,c,d,e){U.drawElementsInstanced(a,b,c,d,e)},g:function(a){U.enable(a)},sb:function(a){U.enableVertexAttribArray(a)},
K:function(a){U.frontFace(a)},Ia:function(a,b){Jb(a,b,"createBuffer",ub)},H:function(a,b){Jb(a,b,"createRenderbuffer",wb)},Fa:function(a,b){Jb(a,b,"createTexture",xb)},Ma:function(a,b){Jb(a,b,"createVertexArray",yb)},ra:function(a,b){return U.getAttribLocation(Q[a],B(b))},d:function(a,b){Kb(a,b)},wa:function(a,b,c,d){a=U.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?z(a,A,d,b):0;c&&(C[c>>2]=b)},C:function(a,b,c){if(c)if(a>=tb)S(1281);else if(a=Q[a],35716==b)a=U.getProgramInfoLog(a),
null===a&&(a="(unknown error)"),C[c>>2]=a.length+1;else if(35719==b){if(!a.cc)for(b=0;b<U.getProgramParameter(a,35718);++b)a.cc=Math.max(a.cc,U.getActiveUniform(a,b).name.length+1);C[c>>2]=a.cc}else if(35722==b){if(!a.ac)for(b=0;b<U.getProgramParameter(a,35721);++b)a.ac=Math.max(a.ac,U.getActiveAttrib(a,b).name.length+1);C[c>>2]=a.ac}else if(35381==b){if(!a.bc)for(b=0;b<U.getProgramParameter(a,35382);++b)a.bc=Math.max(a.bc,U.getActiveUniformBlockName(a,b).length+1);C[c>>2]=a.bc}else C[c>>2]=U.getProgramParameter(a,
b);else S(1281)},sa:function(a,b,c,d){a=U.getShaderInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?z(a,A,d,b):0;c&&(C[c>>2]=b)},A:function(a,b,c){c?35716==b?(a=U.getShaderInfoLog(R[a]),null===a&&(a="(unknown error)"),C[c>>2]=a?a.length+1:0):35720==b?(a=U.getShaderSource(R[a]),C[c>>2]=a?a.length+1:0):C[c>>2]=U.getShaderParameter(R[a],b):S(1281)},Sa:function(a){var b=Ab[a];if(!b){switch(a){case 7939:b=U.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=V(b.join(" "));
break;case 7936:case 7937:case 37445:case 37446:(b=U.getParameter(a))||S(1280);b=b&&V(b);break;case 7938:b=U.getParameter(7938);b=2<=T.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=V(b);break;case 35724:b=U.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=V(b);break;default:S(1280)}Ab[a]=b}return b},Ra:function(a,b){if(2>T.version)return S(1282),0;var c=Bb[a];if(c)return 0>
b||b>=c.length?(S(1281),0):c[b];switch(a){case 7939:return c=U.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return V(d)}),c=Bb[a]=c,0>b||b>=c.length?(S(1281),0):c[b];default:return S(1280),0}},n:function(a,b){b=B(b);if(a=Q[a]){var c=a,d=c.Zb,e=c.wc,k;if(!d)for(c.Zb=d={},c.vc={},k=0;k<U.getProgramParameter(c,35718);++k){var f=U.getActiveUniform(c,k);var m=f.name;f=f.size;var n=Lb(m);n=0<n?m.slice(0,n):m;var p=c.fc;c.fc+=f;e[n]=[f,p];for(m=0;m<f;++m)d[p]=
m,c.vc[p++]=n}c=a.Zb;d=0;e=b;k=Lb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.wc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||U.getUniformLocation(a,b)))return d}else S(1281);return-1},ya:function(a){a=Q[a];U.linkProgram(a);a.Zb=0;a.wc={}},L:function(a,b){U.polygonOffset(a,b)},s:function(a){U.readBuffer(a)},Ga:function(a,b,c,d){U.renderbufferStorage(a,b,c,d)},F:function(a,b,c,d,e){U.renderbufferStorageMultisample(a,b,c,d,e)},na:function(a,b,c,d){U.scissor(a,b,c,d)},ua:function(a,b,c,d){for(var e=
"",k=0;k<b;++k){var f=d?C[d+4*k>>2]:-1;e+=B(C[c+4*k>>2],0>f?void 0:f)}U.shaderSource(R[a],e)},Ka:function(a,b,c){U.stencilFunc(a,b,c)},la:function(a,b,c,d){U.stencilFuncSeparate(a,b,c,d)},u:function(a){U.stencilMask(a)},Ja:function(a,b,c){U.stencilOp(a,b,c)},ka:function(a,b,c,d){U.stencilOpSeparate(a,b,c,d)},Ca:function(a,b,c,d,e,k,f,m,n){if(2<=T.version)if(U.Wb)U.texImage2D(a,b,c,d,e,k,f,m,n);else if(n){var p=Mb(m);U.texImage2D(a,b,c,d,e,k,f,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else U.texImage2D(a,
b,c,d,e,k,f,m,null);else{p=U;var q=p.texImage2D;if(n){var w=Mb(m),N=31-Math.clz32(w.BYTES_PER_ELEMENT);n=w.subarray(n>>N,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[f-6402]||1)*(1<<N)+4-1&-4)>>N)}else n=null;q.call(p,a,b,c,d,e,k,f,m,n)}},Aa:function(a,b,c,d,e,k,f,m,n,p){if(U.Wb)U.texImage3D(a,b,c,d,e,k,f,m,n,p);else if(p){var q=Mb(n);U.texImage3D(a,b,c,d,e,k,f,m,n,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else U.texImage3D(a,b,c,d,e,k,f,m,n,null)},E:function(a,b,c){U.texParameterf(a,
b,c)},f:function(a,b,c){U.texParameteri(a,b,c)},rb:function(a,b,c){if(2<=T.version)b&&U.uniform1fv(W(a),E,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=E[c+4*e>>2];else d=E.subarray(c>>2,c+4*b>>2);U.uniform1fv(W(a),d)}},B:function(a,b){U.uniform1i(W(a),b)},nb:function(a,b,c){if(2<=T.version)b&&U.uniform1iv(W(a),C,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=C[c+4*e>>2];else d=C.subarray(c>>2,c+4*b>>2);U.uniform1iv(W(a),d)}},qb:function(a,b,c){if(2<=T.version)b&&U.uniform2fv(W(a),
E,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2];else d=E.subarray(c>>2,c+8*b>>2);U.uniform2fv(W(a),d)}},mb:function(a,b,c){if(2<=T.version)b&&U.uniform2iv(W(a),C,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2];else d=C.subarray(c>>2,c+8*b>>2);U.uniform2iv(W(a),d)}},pb:function(a,b,c){if(2<=T.version)b&&U.uniform3fv(W(a),E,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=E[c+4*e>>2],
d[e+1]=E[c+(4*e+4)>>2],d[e+2]=E[c+(4*e+8)>>2];else d=E.subarray(c>>2,c+12*b>>2);U.uniform3fv(W(a),d)}},lb:function(a,b,c){if(2<=T.version)b&&U.uniform3iv(W(a),C,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2];else d=C.subarray(c>>2,c+12*b>>2);U.uniform3iv(W(a),d)}},ob:function(a,b,c){if(2<=T.version)b&&U.uniform4fv(W(a),E,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=E;c>>=2;for(var k=0;k<4*b;k+=4){var f=c+k;d[k]=e[f];d[k+1]=e[f+
1];d[k+2]=e[f+2];d[k+3]=e[f+3]}}else d=E.subarray(c>>2,c+16*b>>2);U.uniform4fv(W(a),d)}},kb:function(a,b,c){if(2<=T.version)b&&U.uniform4iv(W(a),C,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2],d[e+3]=C[c+(4*e+12)>>2];else d=C.subarray(c>>2,c+16*b>>2);U.uniform4iv(W(a),d)}},jb:function(a,b,c,d){if(2<=T.version)b&&U.uniformMatrix4fv(W(a),!!c,E,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],k=E;d>>=2;for(var f=0;f<16*b;f+=16){var m=
d+f;e[f]=k[m];e[f+1]=k[m+1];e[f+2]=k[m+2];e[f+3]=k[m+3];e[f+4]=k[m+4];e[f+5]=k[m+5];e[f+6]=k[m+6];e[f+7]=k[m+7];e[f+8]=k[m+8];e[f+9]=k[m+9];e[f+10]=k[m+10];e[f+11]=k[m+11];e[f+12]=k[m+12];e[f+13]=k[m+13];e[f+14]=k[m+14];e[f+15]=k[m+15]}}else e=E.subarray(d>>2,d+64*b>>2);U.uniformMatrix4fv(W(a),!!c,e)}},l:function(a){a=Q[a];U.useProgram(a);U.xc=a},tb:function(a,b){U.vertexAttribDivisor(a,b)},ub:function(a,b,c,d,e,k){U.vertexAttribPointer(a,b,c,!!d,e,k)},oa:function(a,b,c,d){U.viewport(a,b,c,d)},_a:function(){g.pc=
function(a){0!=Pb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",g.pc)},Za:function(){g.uc=function(a){a=a.clipboardData.getData("text");oa("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",g.uc)},Ya:function(a){g.Mc=[];a=B(a);a=document.getElementById(a);g.qc=function(b){b.stopPropagation();b.preventDefault()};g.rc=function(b){b.stopPropagation();b.preventDefault()};g.sc=function(b){b.stopPropagation();b.preventDefault()};g.tc=function(b){b.stopPropagation();
b.preventDefault();var c=b.dataTransfer.files;g.Nc=c;Qb(c.length);var d;for(d=0;d<c.length;d++)oa("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Rb(b.clientX,b.clientY)};a.addEventListener("dragenter",g.qc,!1);a.addEventListener("dragleave",g.rc,!1);a.addEventListener("dragover",g.sc,!1);a.addEventListener("drop",g.tc,!1)},Ua:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},q:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";
a.autocapitalize="none";a.addEventListener("focusout",function(){Sb()});document.body.append(a)},p:function(){document.getElementById("_sokol_app_input_element").focus()},xb:function(a){a=B(a);g.Yb=document.getElementById(a);g.Yb||console.log("sokol_app.h: invalid target:"+a);g.Yb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Xa:function(){window.removeEventListener("beforeunload",g.pc)},Wa:function(){window.removeEventListener("paste",g.uc)},Va:function(a){a=
B(a);a=document.getElementById(a);a.removeEventListener("dragenter",g.qc);a.removeEventListener("dragleave",g.rc);a.removeEventListener("dragover",g.sc);a.removeEventListener("drop",g.tc)},y:function(){g.Yb&&g.Yb.requestPointerLock&&g.Yb.requestPointerLock()},Ta:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(A.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";
a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},o:function(){document.getElementById("_sokol_app_input_element").blur()}};
(function(){function a(e){g.asm=e.exports;ma=g.asm.yb;ya();za=g.asm.Ob;Ba.unshift(g.asm.zb);G--;g.monitorRunDependencies&&g.monitorRunDependencies(G);0==G&&(null!==Ga&&(clearInterval(Ga),Ga=null),H&&(e=H,H=null,e()))}function b(e){a(e.instance)}function c(e){return Ka().then(function(k){return WebAssembly.instantiate(k,d)}).then(function(k){return k}).then(e,function(k){v("failed to asynchronously prepare wasm: "+k);la(k)})}var d={a:Tb};G++;g.monitorRunDependencies&&g.monitorRunDependencies(G);if(g.instantiateWasm)try{return g.instantiateWasm(d,
a)}catch(e){return v("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return x||"function"!=typeof WebAssembly.instantiateStreaming||Ha()||I.startsWith("file://")||ea||"function"!=typeof fetch?c(b):fetch(I,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(k){v("wasm streaming compile failed: "+k);v("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
g.___wasm_call_ctors=function(){return(g.___wasm_call_ctors=g.asm.zb).apply(null,arguments)};var O=g._malloc=function(){return(O=g._malloc=g.asm.Ab).apply(null,arguments)},Sb=g.__sapp_emsc_notify_keyboard_hidden=function(){return(Sb=g.__sapp_emsc_notify_keyboard_hidden=g.asm.Bb).apply(null,arguments)};g.__sapp_emsc_onpaste=function(){return(g.__sapp_emsc_onpaste=g.asm.Cb).apply(null,arguments)};
var Pb=g.__sapp_html5_get_ask_leave_site=function(){return(Pb=g.__sapp_html5_get_ask_leave_site=g.asm.Db).apply(null,arguments)},Qb=g.__sapp_emsc_begin_drop=function(){return(Qb=g.__sapp_emsc_begin_drop=g.asm.Eb).apply(null,arguments)};g.__sapp_emsc_drop=function(){return(g.__sapp_emsc_drop=g.asm.Fb).apply(null,arguments)};var Rb=g.__sapp_emsc_end_drop=function(){return(Rb=g.__sapp_emsc_end_drop=g.asm.Gb).apply(null,arguments)};
g.__sapp_emsc_invoke_fetch_cb=function(){return(g.__sapp_emsc_invoke_fetch_cb=g.asm.Hb).apply(null,arguments)};g._main=function(){return(g._main=g.asm.Ib).apply(null,arguments)};g.__saudio_emsc_pull=function(){return(g.__saudio_emsc_pull=g.asm.Jb).apply(null,arguments)};g.__sfetch_emsc_head_response=function(){return(g.__sfetch_emsc_head_response=g.asm.Kb).apply(null,arguments)};g.__sfetch_emsc_get_response=function(){return(g.__sfetch_emsc_get_response=g.asm.Lb).apply(null,arguments)};
g.__sfetch_emsc_failed_http_status=function(){return(g.__sfetch_emsc_failed_http_status=g.asm.Mb).apply(null,arguments)};g.__sfetch_emsc_failed_buffer_too_small=function(){return(g.__sfetch_emsc_failed_buffer_too_small=g.asm.Nb).apply(null,arguments)};
var qa=g.stackSave=function(){return(qa=g.stackSave=g.asm.Pb).apply(null,arguments)},ra=g.stackRestore=function(){return(ra=g.stackRestore=g.asm.Qb).apply(null,arguments)},y=g.stackAlloc=function(){return(y=g.stackAlloc=g.asm.Rb).apply(null,arguments)},Ub;function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}H=function Vb(){Ub||Wb();Ub||(H=Vb)};
function Xb(a){var b=g._main;a=a||[];a.unshift(ca);var c=a.length,d=y(4*(c+1)),e=d>>2;a.forEach(f=>{var m=C,n=e++,p=ua(f)+1,q=y(p);z(f,pa,q,p);m[n]=q});C[e]=0;try{var k=b(c,d);Yb(k)}catch(f){f instanceof ja||"unwind"==f||h(1,f)}finally{}}
function Wb(a){function b(){if(!Ub&&(Ub=!0,g.calledRun=!0,!na)){La(Ba);La(Ca);if(g.onRuntimeInitialized)g.onRuntimeInitialized();Zb&&Xb(a);if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var c=g.postRun.shift();Ea.unshift(c)}La(Ea)}}a=a||ba;if(!(0<G)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)Fa();La(Aa);0<G||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);b()},
1)):b())}}g.run=Wb;function Yb(a){if(!noExitRuntime){if(g.onExit)g.onExit(a);na=!0}h(a,new ja(a))}if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var Zb=!0;g.noInitialRun&&(Zb=!1);Wb();
