
var g;g||(g=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},g),ba=[],ca="./this.program",h=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,q="",fa,t,u,fs,v,ha;
if(ea)q=l?require("path").dirname(q)+"/":__dirname+"/",ha=()=>{v||(fs=require("fs"),v=require("path"))},fa=function(a,b){ha();a=v.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")},u=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a},t=(a,b,c)=>{ha();a=v.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/")),ba=process.argv.slice(2),"undefined"!=typeof module&&(module.exports=g),process.on("uncaughtException",function(a){if(!(a instanceof
ia))throw a;}),process.on("unhandledRejection",function(a){throw a;}),h=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof ia||x("exiting due to exception: "+b);process.exit(a)},g.inspect=function(){return"[Emscripten Module object]"};else if(da||l)l?q=self.location.href:"undefined"!=typeof document&&document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);
b.send(null);return b.responseText},l&&(u=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),t=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};g.print||console.log.bind(console);var x=g.printErr||console.warn.bind(console);Object.assign(g,aa);aa=null;g.arguments&&(ba=g.arguments);
g.thisProgram&&(ca=g.thisProgram);g.quit&&(h=g.quit);var y;g.wasmBinary&&(y=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!0;"object"!=typeof WebAssembly&&ja("no native wasm support detected");var ka,la=!1;
function ma(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var r=(n.length<<2)+1;p=z(r);A(n,B,p,r)}return p},array:function(n){var p=z(n.length);na.set(n,p);return p}};a=g["_"+a];var e=[],k=0;if(c)for(var f=0;f<c.length;f++){var m=d[b[f]];m?(0===k&&(k=oa()),e[f]=m(c[f])):e[f]=c[f]}b=a.apply(null,e);b=function(n){0!==k&&pa(k);return n}(b)}var qa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function C(a,b){if(a){var c=B,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&qa)a=qa.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var k=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var f=c[a++]&63;e=224==(e&240)?(e&15)<<12|k<<6|f:(e&7)<<18|k<<12|f<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function A(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var f=a.charCodeAt(k);if(55296<=f&&57343>=f){var m=a.charCodeAt(++k);f=65536+((f&1023)<<10)|m&1023}if(127>=f){if(c>=d)break;b[c++]=f}else{if(2047>=f){if(c+1>=d)break;b[c++]=192|f>>6}else{if(65535>=f){if(c+2>=d)break;b[c++]=224|f>>12}else{if(c+3>=d)break;b[c++]=240|f>>18;b[c++]=128|f>>12&63}b[c++]=128|f>>6&63}b[c++]=128|f&63}}b[c]=0;return c-e}
function ra(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}var sa,na,B,ta,ua,D,va,E,F;function wa(){var a=ka.buffer;sa=a;g.HEAP8=na=new Int8Array(a);g.HEAP16=ta=new Int16Array(a);g.HEAP32=D=new Int32Array(a);g.HEAPU8=B=new Uint8Array(a);g.HEAPU16=ua=new Uint16Array(a);g.HEAPU32=va=new Uint32Array(a);g.HEAPF32=E=new Float32Array(a);g.HEAPF64=F=new Float64Array(a)}
var xa,ya=[],za=[],Aa=[],Ba=[],Ca=[];function Da(){var a=g.preRun.shift();ya.unshift(a)}var G=0,Ea=null,H=null;function ja(a){if(g.onAbort)g.onAbort(a);a="Aborted("+a+")";x(a);la=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Fa(){return I.startsWith("data:application/octet-stream;base64,")}var I;I="primtypes-sapp.wasm";if(!Fa()){var Ga=I;I=g.locateFile?g.locateFile(Ga,q):q+Ga}
function Ha(){var a=I;try{if(a==I&&y)return new Uint8Array(y);if(u)return u(a);throw"both async and sync fetching of the wasm failed";}catch(b){ja(b)}}
function Ia(){if(!y&&(da||l)){if("function"==typeof fetch&&!I.startsWith("file://"))return fetch(I,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+I+"'";return a.arrayBuffer()}).catch(function(){return Ha()});if(t)return new Promise(function(a,b){t(I,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ha()})}
function Ja(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(g);else{var c=b.Bc;"number"==typeof c?void 0===b.ac?J(c)():J(c)(b.ac):c(void 0===b.ac?null:b.ac)}}}var Ka=[];function J(a){var b=Ka[a];b||(a>=Ka.length&&(Ka.length=a+1),Ka[a]=b=xa.get(a));return b}var La=0;function Ma(){for(var a=K.length-1;0<=a;--a)Na(a);K=[];Oa=[]}var Oa=[];function Pa(){if(La&&Qa.Wb)for(var a=0;a<Oa.length;++a){var b=Oa[a];Oa.splice(a,1);--a;b.Kc.apply(null,b.yc)}}var K=[];
function Na(a){var b=K[a];b.target.removeEventListener(b.Ob,b.uc,b.Pb);K.splice(a,1)}function L(a){function b(d){++La;Qa=a;Pa();a.Rb(d);Pa();--La}if(a.Qb)a.uc=b,a.target.addEventListener(a.Ob,b,a.Pb),K.push(a),Ra||(Ba.push(Ma),Ra=!0);else for(var c=0;c<K.length;++c)K[c].target==a.target&&K[c].Ob==a.Ob&&Na(c--)}function Sa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Ra,Qa,Ta,Ua,Va,Wa,Xa,Ya,Za,$a=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];function M(a){a=2<a?C(a):a;return $a[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function ab(a){return 0>$a.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function bb(a,b,c,d,e,k){Ta||(Ta=O(256));a={target:M(a),Ob:k,Qb:d,Rb:function(f){f=f||event;var m=f.target.id?f.target.id:"",n=Ta;A(Sa(f.target),B,n+0,128);A(m,B,n+128,128);J(d)(e,n,b)&&f.preventDefault()},Pb:c};L(a)}
function cb(a,b,c,d,e,k){Ua||(Ua=O(176));a={target:M(a),Wb:!0,Ob:k,Qb:d,Rb:function(f){var m=Ua;F[m>>3]=f.timeStamp;var n=m>>2;D[n+2]=f.location;D[n+3]=f.ctrlKey;D[n+4]=f.shiftKey;D[n+5]=f.altKey;D[n+6]=f.metaKey;D[n+7]=f.repeat;D[n+8]=f.charCode;D[n+9]=f.keyCode;D[n+10]=f.which;A(f.key||"",B,m+44,32);A(f.code||"",B,m+76,32);A(f.char||"",B,m+108,32);A(f.locale||"",B,m+140,32);J(d)(e,m,b)&&f.preventDefault()},Pb:c};L(a)}
function db(a,b,c){F[a>>3]=b.timeStamp;a>>=2;D[a+2]=b.screenX;D[a+3]=b.screenY;D[a+4]=b.clientX;D[a+5]=b.clientY;D[a+6]=b.ctrlKey;D[a+7]=b.shiftKey;D[a+8]=b.altKey;D[a+9]=b.metaKey;ta[2*a+20]=b.button;ta[2*a+21]=b.buttons;D[a+11]=b.movementX;D[a+12]=b.movementY;c=ab(c);D[a+13]=b.clientX-c.left;D[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,k){Va||(Va=O(72));a=M(a);L({target:a,Wb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Ob:k,Qb:d,Rb:function(f){f=f||event;db(Va,f,a);J(d)(e,Va,b)&&f.preventDefault()},Pb:c})}function eb(a,b,c,d,e){Wa||(Wa=O(260));L({target:a,Ob:e,Qb:d,Rb:function(k){k=k||event;var f=Wa,m=document.pointerLockElement||document.Tb||document.dc||document.cc;D[f>>2]=!!m;var n=m&&m.id?m.id:"";A(Sa(m),B,f+4,128);A(n,B,f+132,128);J(d)(20,f,b)&&k.preventDefault()},Pb:c})}
function fb(a,b,c,d,e){L({target:a,Ob:e,Qb:d,Rb:function(k){k=k||event;J(d)(38,0,b)&&k.preventDefault()},Pb:c})}
function gb(a,b,c,d){Xa||(Xa=O(36));a=M(a);L({target:a,Ob:"resize",Qb:d,Rb:function(e){e=e||event;if(e.target==a){var k=document.body;if(k){var f=Xa;D[f>>2]=e.detail;D[f+4>>2]=k.clientWidth;D[f+8>>2]=k.clientHeight;D[f+12>>2]=innerWidth;D[f+16>>2]=innerHeight;D[f+20>>2]=outerWidth;D[f+24>>2]=outerHeight;D[f+28>>2]=pageXOffset;D[f+32>>2]=pageYOffset;J(d)(10,f,b)&&e.preventDefault()}}},Pb:c})}
function hb(a,b,c,d,e,k){Ya||(Ya=O(1696));a=M(a);L({target:a,Wb:"touchstart"==k||"touchend"==k,Ob:k,Qb:d,Rb:function(f){for(var m,n={},p=f.touches,r=0;r<p.length;++r)m=p[r],m.ic=m.kc=0,n[m.identifier]=m;for(r=0;r<f.changedTouches.length;++r)m=f.changedTouches[r],m.ic=1,n[m.identifier]=m;for(r=0;r<f.targetTouches.length;++r)n[f.targetTouches[r].identifier].kc=1;p=Ya;F[p>>3]=f.timeStamp;var w=p>>2;D[w+3]=f.ctrlKey;D[w+4]=f.shiftKey;D[w+5]=f.altKey;D[w+6]=f.metaKey;w+=7;var N=ab(a),nb=0;for(r in n)if(m=
n[r],D[w]=m.identifier,D[w+1]=m.screenX,D[w+2]=m.screenY,D[w+3]=m.clientX,D[w+4]=m.clientY,D[w+5]=m.pageX,D[w+6]=m.pageY,D[w+7]=m.ic,D[w+8]=m.kc,D[w+9]=m.clientX-N.left,D[w+10]=m.clientY-N.top,w+=13,31<++nb)break;D[p+8>>2]=nb;J(d)(e,p,b)&&f.preventDefault()},Pb:c})}function ib(a,b,c,d,e,k){a={target:M(a),Ob:k,Qb:d,Rb:function(f){f=f||event;J(d)(e,0,b)&&f.preventDefault()},Pb:c};L(a)}
function jb(a,b,c,d){Za||(Za=O(104));L({target:a,Wb:!0,Ob:"wheel",Qb:d,Rb:function(e){e=e||event;var k=Za;db(k,e,a);F[k+72>>3]=e.deltaX;F[k+80>>3]=e.deltaY;F[k+88>>3]=e.deltaZ;D[k+96>>2]=e.deltaMode;J(d)(9,k,b)&&e.preventDefault()},Pb:c})}
function kb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,f){b.drawElementsInstancedANGLE(c,d,e,k,f)})}
function lb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function mb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function ob(a){a.Ac=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function pb(a){a.Dc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function qb(a){a.Fc=a.getExtension("WEBGL_multi_draw")}var rb=1,sb=[],Q=[],tb=[],ub=[],vb=[],R=[],wb=[],xb=[],yb={},zb={};function S(a){Ab||(Ab=a)}function Bb(a){for(var b=rb++,c=a.length;c<b;c++)a[c]=null;return b}
function Cb(a,b){a.Tb||(a.Tb=a.getContext,a.getContext=function(d,e){e=a.Tb(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.jc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Db(c,b):0}function Db(a,b){var c=Bb(xb),d={Cc:c,attributes:b,version:b.jc,$b:a};a.canvas&&(a.canvas.xc=d);xb[c]=d;("undefined"==typeof b.hc||b.hc)&&Eb(d);return c}
function Eb(a){a||(a=T);if(!a.wc){a.wc=!0;var b=a.$b;kb(b);lb(b);mb(b);ob(b);pb(b);2<=a.version&&(b.fc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.fc)b.fc=b.getExtension("EXT_disjoint_timer_query");qb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Ab,T,Fb=["default","low-power","high-performance"];
function Gb(a,b,c,d){for(var e=0;e<a;e++){var k=U[c](),f=k&&Bb(d);k?(k.name=f,d[f]=k):S(1282);D[b+4*e>>2]=f}}
function Hb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=U.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>T.version){S(1282);return}c=2*(U.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>T.version){S(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=U.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":S(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:S(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)D[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){S(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:S(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}D[b>>2]=c}else S(1281)}
function V(a){var b=ra(a)+1,c=O(b);A(a,B,c,b);return c}function Ib(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Jb(a){a-=5120;return 0==a?na:1==a?B:2==a?ta:4==a?D:6==a?E:5==a||28922==a||28520==a||30779==a||30782==a?va:ua}function W(a){var b=U.tc;if(b){var c=b.Vb[a];"number"==typeof c&&(b.Vb[a]=c=U.getUniformLocation(b,b.rc[a]+(0<c?"["+c+"]":"")));return c}S(1282)}for(var X=[],Y=[],U,Kb=new Float32Array(288),Z=0;288>Z;++Z)X[Z]=Kb.subarray(0,Z+1);var Lb=new Int32Array(288);
for(Z=0;288>Z;++Z)Y[Z]=Lb.subarray(0,Z+1);
var Qb={R:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},ka:function(a,b,c){a=M(a);if(!a)return-4;a=ab(a);F[b>>3]=a.width;F[c>>3]=a.height;return 0},_a:function(a,b,c){B.copyWithin(a,b,b+c)},La:function(a,b){function c(d){J(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Za:function(a){var b=B.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math;d=Math.max(a,d);e=e.min.call(e,2147483648,d+(65536-
d%65536)%65536);a:{try{ka.grow(e-sa.byteLength+65535>>>16);wa();var k=1;break a}catch(f){}k=void 0}if(k)return!0}return!1},S:function(a,b,c,d){bb(a,b,c,d,12,"blur");return 0},O:function(a,b,c){a=M(a);if(!a)return-4;a.width=b;a.height=c;return 0},T:function(a,b,c,d){bb(a,b,c,d,13,"focus");return 0},aa:function(a,b,c,d){cb(a,b,c,d,2,"keydown");return 0},_:function(a,b,c,d){cb(a,b,c,d,1,"keypress");return 0},$:function(a,b,c,d){cb(a,b,c,d,3,"keyup");return 0},ja:function(a,b,c,d){P(a,b,c,d,5,"mousedown");
return 0},da:function(a,b,c,d){P(a,b,c,d,33,"mouseenter");return 0},ca:function(a,b,c,d){P(a,b,c,d,34,"mouseleave");return 0},ea:function(a,b,c,d){P(a,b,c,d,8,"mousemove");return 0},fa:function(a,b,c,d){P(a,b,c,d,6,"mouseup");return 0},V:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Tb||document.body.dc||document.body.cc))return-1;a=M(a);if(!a)return-4;eb(a,b,c,d,"pointerlockchange");eb(a,b,c,d,"mozpointerlockchange");eb(a,b,c,d,"webkitpointerlockchange");
eb(a,b,c,d,"mspointerlockchange");return 0},U:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Tb||document.body.dc||document.body.cc))return-1;a=M(a);if(!a)return-4;fb(a,b,c,d,"pointerlockerror");fb(a,b,c,d,"mozpointerlockerror");fb(a,b,c,d,"webkitpointerlockerror");fb(a,b,c,d,"mspointerlockerror");return 0},Ya:function(a,b,c,d){gb(a,b,c,d);return 0},W:function(a,b,c,d){hb(a,b,c,d,25,"touchcancel");return 0},X:function(a,b,c,d){hb(a,b,c,d,23,"touchend");return 0},
Y:function(a,b,c,d){hb(a,b,c,d,24,"touchmove");return 0},Z:function(a,b,c,d){hb(a,b,c,d,22,"touchstart");return 0},Q:function(a,b,c,d){ib(a,b,c,d,31,"webglcontextlost");return 0},P:function(a,b,c,d){ib(a,b,c,d,32,"webglcontextrestored");return 0},ba:function(a,b,c,d){a=M(a);return"undefined"!=typeof a.onwheel?(jb(a,b,c,d),0):-1},F:function(a,b){b>>=2;b={alpha:!!D[b],depth:!!D[b+1],stencil:!!D[b+2],antialias:!!D[b+3],premultipliedAlpha:!!D[b+4],preserveDrawingBuffer:!!D[b+5],powerPreference:Fb[D[b+
6]],failIfMajorPerformanceCaveat:!!D[b+7],jc:D[b+8],Ec:D[b+9],hc:D[b+10],vc:D[b+11],Gc:D[b+12],Hc:D[b+13]};a=M(a);return!a||b.vc?0:Cb(a,b)},ra:function(a,b){a=xb[a];b=C(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&kb(U);"OES_vertex_array_object"==b&&lb(U);"WEBGL_draw_buffers"==b&&mb(U);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&ob(U);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&pb(U);"WEBGL_multi_draw"==b&&qb(U);return!!a.$b.getExtension(b)},Ia:function(a){a>>=
2;for(var b=0;14>b;++b)D[a+b]=0;D[a]=D[a+1]=D[a+3]=D[a+4]=D[a+8]=D[a+10]=1},ya:function(a){T=xb[a];g.zc=U=T&&T.$b;return!a||U?0:-5},b:function(a){U.activeTexture(a)},C:function(a,b){U.attachShader(Q[a],R[b])},c:function(a,b){35051==a?U.ec=b:35052==a&&(U.Sb=b);U.bindBuffer(a,sb[b])},h:function(a,b){U.bindFramebuffer(a,tb[b])},Ca:function(a,b){U.bindRenderbuffer(a,ub[b])},a:function(a,b){U.bindTexture(a,vb[b])},M:function(a){U.bindVertexArray(wb[a])},I:function(a,b,c,d){U.blendColor(a,b,c,d)},J:function(a,
b){U.blendEquationSeparate(a,b)},K:function(a,b,c,d){U.blendFuncSeparate(a,b,c,d)},p:function(a,b,c,d,e,k,f,m,n,p){U.blitFramebuffer(a,b,c,d,e,k,f,m,n,p)},Ea:function(a,b,c,d){2<=T.version?c&&b?U.bufferData(a,B,d,c,b):U.bufferData(a,b,d):U.bufferData(a,c?B.subarray(c,c+b):b,d)},s:function(a,b,c,d){2<=T.version?c&&U.bufferSubData(a,b,B,d,c):U.bufferSubData(a,b,B.subarray(d,d+c))},pb:function(a){U.clear(a)},ia:function(a,b,c,d){U.clearColor(a,b,c,d)},y:function(a){U.clearDepth(a)},qb:function(a){U.clearStencil(a)},
j:function(a,b,c,d){U.colorMask(!!a,!!b,!!c,!!d)},na:function(a){U.compileShader(R[a])},xa:function(a,b,c,d,e,k,f,m){2<=T.version?U.Sb||!f?U.compressedTexImage2D(a,b,c,d,e,k,f,m):U.compressedTexImage2D(a,b,c,d,e,k,B,m,f):U.compressedTexImage2D(a,b,c,d,e,k,m?B.subarray(m,m+f):null)},va:function(a,b,c,d,e,k,f,m,n){U.Sb?U.compressedTexImage3D(a,b,c,d,e,k,f,m,n):U.compressedTexImage3D(a,b,c,d,e,k,f,B,n,m)},ta:function(){var a=Bb(Q),b=U.createProgram();b.name=a;b.Zb=b.Xb=b.Yb=0;b.bc=1;Q[a]=b;return a},
pa:function(a){var b=Bb(R);R[b]=U.createShader(a);return b},E:function(a){U.cullFace(a)},Na:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],e=sb[d];e&&(U.deleteBuffer(e),e.name=0,sb[d]=null,d==U.ec&&(U.ec=0),d==U.Sb&&(U.Sb=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=D[b+4*c>>2],e=tb[d];e&&(U.deleteFramebuffer(e),e.name=0,tb[d]=null)}},w:function(a){if(a){var b=Q[a];b?(U.deleteProgram(b),b.name=0,Q[a]=null):S(1281)}},N:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],e=ub[d];e&&(U.deleteRenderbuffer(e),
e.name=0,ub[d]=null)}},r:function(a){if(a){var b=R[a];b?(U.deleteShader(b),R[a]=null):S(1281)}},Ma:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],e=vb[d];e&&(U.deleteTexture(e),e.name=0,vb[d]=null)}},Ka:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2];U.deleteVertexArray(wb[d]);wb[d]=null}},v:function(a){U.depthFunc(a)},u:function(a){U.depthMask(!!a)},e:function(a){U.disable(a)},L:function(a){U.disableVertexAttribArray(a)},$a:function(a,b,c){U.drawArrays(a,b,c)},ab:function(a,b,c,d){U.drawArraysInstanced(a,
b,c,d)},bb:function(a,b,c,d){U.drawElements(a,b,c,d)},cb:function(a,b,c,d,e){U.drawElementsInstanced(a,b,c,d,e)},g:function(a){U.enable(a)},mb:function(a){U.enableVertexAttribArray(a)},G:function(a){U.frontFace(a)},Fa:function(a,b){Gb(a,b,"createBuffer",sb)},Da:function(a,b){Gb(a,b,"createRenderbuffer",ub)},za:function(a,b){Gb(a,b,"createTexture",vb)},Ja:function(a,b){Gb(a,b,"createVertexArray",wb)},la:function(a,b){return U.getAttribLocation(Q[a],C(b))},d:function(a,b){Hb(a,b)},qa:function(a,b,c,
d){a=U.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?A(a,B,d,b):0;c&&(D[c>>2]=b)},B:function(a,b,c){if(c)if(a>=rb)S(1281);else if(a=Q[a],35716==b)a=U.getProgramInfoLog(a),null===a&&(a="(unknown error)"),D[c>>2]=a.length+1;else if(35719==b){if(!a.Zb)for(b=0;b<U.getProgramParameter(a,35718);++b)a.Zb=Math.max(a.Zb,U.getActiveUniform(a,b).name.length+1);D[c>>2]=a.Zb}else if(35722==b){if(!a.Xb)for(b=0;b<U.getProgramParameter(a,35721);++b)a.Xb=Math.max(a.Xb,U.getActiveAttrib(a,b).name.length+
1);D[c>>2]=a.Xb}else if(35381==b){if(!a.Yb)for(b=0;b<U.getProgramParameter(a,35382);++b)a.Yb=Math.max(a.Yb,U.getActiveUniformBlockName(a,b).length+1);D[c>>2]=a.Yb}else D[c>>2]=U.getProgramParameter(a,b);else S(1281)},ma:function(a,b,c,d){a=U.getShaderInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?A(a,B,d,b):0;c&&(D[c>>2]=b)},z:function(a,b,c){c?35716==b?(a=U.getShaderInfoLog(R[a]),null===a&&(a="(unknown error)"),D[c>>2]=a?a.length+1:0):35720==b?(a=U.getShaderSource(R[a]),D[c>>2]=a?a.length+
1:0):D[c>>2]=U.getShaderParameter(R[a],b):S(1281)},Pa:function(a){var b=yb[a];if(!b){switch(a){case 7939:b=U.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=V(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=U.getParameter(a))||S(1280);b=b&&V(b);break;case 7938:b=U.getParameter(7938);b=2<=T.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=V(b);break;case 35724:b=U.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=V(b);break;default:S(1280)}yb[a]=b}return b},Oa:function(a,b){if(2>T.version)return S(1282),0;var c=zb[a];if(c)return 0>b||b>=c.length?(S(1281),0):c[b];switch(a){case 7939:return c=U.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return V(d)}),c=zb[a]=c,0>b||b>=c.length?(S(1281),0):c[b];default:return S(1280),0}},l:function(a,b){b=C(b);if(a=Q[a]){var c=a,d=c.Vb,e=c.sc,k;
if(!d)for(c.Vb=d={},c.rc={},k=0;k<U.getProgramParameter(c,35718);++k){var f=U.getActiveUniform(c,k);var m=f.name;f=f.size;var n=Ib(m);n=0<n?m.slice(0,n):m;var p=c.bc;c.bc+=f;e[n]=[f,p];for(m=0;m<f;++m)d[p]=m,c.rc[p++]=n}c=a.Vb;d=0;e=b;k=Ib(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.sc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||U.getUniformLocation(a,b)))return d}else S(1281);return-1},sa:function(a){a=Q[a];U.linkProgram(a);a.Vb=0;a.sc={}},H:function(a,b){U.polygonOffset(a,b)},q:function(a){U.readBuffer(a)},
Aa:function(a,b,c,d){U.renderbufferStorage(a,b,c,d)},Ba:function(a,b,c,d,e){U.renderbufferStorageMultisample(a,b,c,d,e)},rb:function(a,b,c,d){U.scissor(a,b,c,d)},oa:function(a,b,c,d){for(var e="",k=0;k<b;++k){var f=d?D[d+4*k>>2]:-1;e+=C(D[c+4*k>>2],0>f?void 0:f)}U.shaderSource(R[a],e)},Ha:function(a,b,c){U.stencilFunc(a,b,c)},ha:function(a,b,c,d){U.stencilFuncSeparate(a,b,c,d)},t:function(a){U.stencilMask(a)},Ga:function(a,b,c){U.stencilOp(a,b,c)},ga:function(a,b,c,d){U.stencilOpSeparate(a,b,c,d)},
wa:function(a,b,c,d,e,k,f,m,n){if(2<=T.version)if(U.Sb)U.texImage2D(a,b,c,d,e,k,f,m,n);else if(n){var p=Jb(m);U.texImage2D(a,b,c,d,e,k,f,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else U.texImage2D(a,b,c,d,e,k,f,m,null);else{p=U;var r=p.texImage2D;if(n){var w=Jb(m),N=31-Math.clz32(w.BYTES_PER_ELEMENT);n=w.subarray(n>>N,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[f-6402]||1)*(1<<N)+4-1&-4)>>N)}else n=null;r.call(p,a,b,c,d,e,k,f,m,n)}},ua:function(a,b,c,d,e,k,f,m,n,p){if(U.Sb)U.texImage3D(a,
b,c,d,e,k,f,m,n,p);else if(p){var r=Jb(n);U.texImage3D(a,b,c,d,e,k,f,m,n,r,p>>31-Math.clz32(r.BYTES_PER_ELEMENT))}else U.texImage3D(a,b,c,d,e,k,f,m,n,null)},D:function(a,b,c){U.texParameterf(a,b,c)},f:function(a,b,c){U.texParameteri(a,b,c)},lb:function(a,b,c){if(2<=T.version)b&&U.uniform1fv(W(a),E,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=E[c+4*e>>2];else d=E.subarray(c>>2,c+4*b>>2);U.uniform1fv(W(a),d)}},A:function(a,b){U.uniform1i(W(a),b)},hb:function(a,b,c){if(2<=T.version)b&&U.uniform1iv(W(a),
D,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=D[c+4*e>>2];else d=D.subarray(c>>2,c+4*b>>2);U.uniform1iv(W(a),d)}},kb:function(a,b,c){if(2<=T.version)b&&U.uniform2fv(W(a),E,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2];else d=E.subarray(c>>2,c+8*b>>2);U.uniform2fv(W(a),d)}},gb:function(a,b,c){if(2<=T.version)b&&U.uniform2iv(W(a),D,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2];else d=
D.subarray(c>>2,c+8*b>>2);U.uniform2iv(W(a),d)}},jb:function(a,b,c){if(2<=T.version)b&&U.uniform3fv(W(a),E,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=E[c+4*e>>2],d[e+1]=E[c+(4*e+4)>>2],d[e+2]=E[c+(4*e+8)>>2];else d=E.subarray(c>>2,c+12*b>>2);U.uniform3fv(W(a),d)}},fb:function(a,b,c){if(2<=T.version)b&&U.uniform3iv(W(a),D,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2],d[e+2]=D[c+(4*e+8)>>2];else d=D.subarray(c>>2,c+12*b>>2);U.uniform3iv(W(a),
d)}},ib:function(a,b,c){if(2<=T.version)b&&U.uniform4fv(W(a),E,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=E;c>>=2;for(var k=0;k<4*b;k+=4){var f=c+k;d[k]=e[f];d[k+1]=e[f+1];d[k+2]=e[f+2];d[k+3]=e[f+3]}}else d=E.subarray(c>>2,c+16*b>>2);U.uniform4fv(W(a),d)}},eb:function(a,b,c){if(2<=T.version)b&&U.uniform4iv(W(a),D,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2],d[e+2]=D[c+(4*e+8)>>2],d[e+3]=D[c+(4*e+12)>>2];else d=D.subarray(c>>2,c+16*b>>2);U.uniform4iv(W(a),
d)}},db:function(a,b,c,d){if(2<=T.version)b&&U.uniformMatrix4fv(W(a),!!c,E,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],k=E;d>>=2;for(var f=0;f<16*b;f+=16){var m=d+f;e[f]=k[m];e[f+1]=k[m+1];e[f+2]=k[m+2];e[f+3]=k[m+3];e[f+4]=k[m+4];e[f+5]=k[m+5];e[f+6]=k[m+6];e[f+7]=k[m+7];e[f+8]=k[m+8];e[f+9]=k[m+9];e[f+10]=k[m+10];e[f+11]=k[m+11];e[f+12]=k[m+12];e[f+13]=k[m+13];e[f+14]=k[m+14];e[f+15]=k[m+15]}}else e=E.subarray(d>>2,d+64*b>>2);U.uniformMatrix4fv(W(a),!!c,e)}},k:function(a){a=Q[a];U.useProgram(a);U.tc=
a},nb:function(a,b){U.vertexAttribDivisor(a,b)},ob:function(a,b,c,d,e,k){U.vertexAttribPointer(a,b,c,!!d,e,k)},sb:function(a,b,c,d){U.viewport(a,b,c,d)},Xa:function(){g.lc=function(a){0!=Mb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",g.lc)},Wa:function(){g.qc=function(a){a=a.clipboardData.getData("text");ma("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",g.qc)},Va:function(a){g.Ic=[];a=C(a);a=document.getElementById(a);g.mc=function(b){b.stopPropagation();
b.preventDefault()};g.nc=function(b){b.stopPropagation();b.preventDefault()};g.oc=function(b){b.stopPropagation();b.preventDefault()};g.pc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;g.Jc=c;Nb(c.length);var d;for(d=0;d<c.length;d++)ma("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Ob(b.clientX,b.clientY)};a.addEventListener("dragenter",g.mc,!1);a.addEventListener("dragleave",g.nc,!1);a.addEventListener("dragover",g.oc,!1);a.addEventListener("drop",g.pc,!1)},
Ra:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},o:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Pb()});document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},tb:function(a){a=C(a);g.Ub=document.getElementById(a);g.Ub||console.log("sokol_app.h: invalid target:"+a);g.Ub.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+
a)},Ua:function(){window.removeEventListener("beforeunload",g.lc)},Ta:function(){window.removeEventListener("paste",g.qc)},Sa:function(a){a=C(a);a=document.getElementById(a);a.removeEventListener("dragenter",g.mc);a.removeEventListener("dragleave",g.nc);a.removeEventListener("dragover",g.oc);a.removeEventListener("drop",g.pc)},x:function(){g.Ub&&g.Ub.requestPointerLock&&g.Ub.requestPointerLock()},Qa:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),
k=e.createImageData(a,b);k.data.set(B.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},m:function(){document.getElementById("_sokol_app_input_element").blur()}};
(function(){function a(e){g.asm=e.exports;ka=g.asm.ub;wa();xa=g.asm.Kb;za.unshift(g.asm.vb);G--;g.monitorRunDependencies&&g.monitorRunDependencies(G);0==G&&(null!==Ea&&(clearInterval(Ea),Ea=null),H&&(e=H,H=null,e()))}function b(e){a(e.instance)}function c(e){return Ia().then(function(k){return WebAssembly.instantiate(k,d)}).then(function(k){return k}).then(e,function(k){x("failed to asynchronously prepare wasm: "+k);ja(k)})}var d={a:Qb};G++;g.monitorRunDependencies&&g.monitorRunDependencies(G);if(g.instantiateWasm)try{return g.instantiateWasm(d,
a)}catch(e){return x("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return y||"function"!=typeof WebAssembly.instantiateStreaming||Fa()||I.startsWith("file://")||ea||"function"!=typeof fetch?c(b):fetch(I,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(k){x("wasm streaming compile failed: "+k);x("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
g.___wasm_call_ctors=function(){return(g.___wasm_call_ctors=g.asm.vb).apply(null,arguments)};var O=g._malloc=function(){return(O=g._malloc=g.asm.wb).apply(null,arguments)},Pb=g.__sapp_emsc_notify_keyboard_hidden=function(){return(Pb=g.__sapp_emsc_notify_keyboard_hidden=g.asm.xb).apply(null,arguments)};g.__sapp_emsc_onpaste=function(){return(g.__sapp_emsc_onpaste=g.asm.yb).apply(null,arguments)};
var Mb=g.__sapp_html5_get_ask_leave_site=function(){return(Mb=g.__sapp_html5_get_ask_leave_site=g.asm.zb).apply(null,arguments)},Nb=g.__sapp_emsc_begin_drop=function(){return(Nb=g.__sapp_emsc_begin_drop=g.asm.Ab).apply(null,arguments)};g.__sapp_emsc_drop=function(){return(g.__sapp_emsc_drop=g.asm.Bb).apply(null,arguments)};var Ob=g.__sapp_emsc_end_drop=function(){return(Ob=g.__sapp_emsc_end_drop=g.asm.Cb).apply(null,arguments)};
g.__sapp_emsc_invoke_fetch_cb=function(){return(g.__sapp_emsc_invoke_fetch_cb=g.asm.Db).apply(null,arguments)};g._main=function(){return(g._main=g.asm.Eb).apply(null,arguments)};g.__saudio_emsc_pull=function(){return(g.__saudio_emsc_pull=g.asm.Fb).apply(null,arguments)};g.__sfetch_emsc_head_response=function(){return(g.__sfetch_emsc_head_response=g.asm.Gb).apply(null,arguments)};g.__sfetch_emsc_get_response=function(){return(g.__sfetch_emsc_get_response=g.asm.Hb).apply(null,arguments)};
g.__sfetch_emsc_failed_http_status=function(){return(g.__sfetch_emsc_failed_http_status=g.asm.Ib).apply(null,arguments)};g.__sfetch_emsc_failed_buffer_too_small=function(){return(g.__sfetch_emsc_failed_buffer_too_small=g.asm.Jb).apply(null,arguments)};
var oa=g.stackSave=function(){return(oa=g.stackSave=g.asm.Lb).apply(null,arguments)},pa=g.stackRestore=function(){return(pa=g.stackRestore=g.asm.Mb).apply(null,arguments)},z=g.stackAlloc=function(){return(z=g.stackAlloc=g.asm.Nb).apply(null,arguments)},Rb;function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}H=function Sb(){Rb||Tb();Rb||(H=Sb)};
function Ub(a){var b=g._main;a=a||[];a.unshift(ca);var c=a.length,d=z(4*(c+1)),e=d>>2;a.forEach(f=>{var m=D,n=e++,p=ra(f)+1,r=z(p);A(f,na,r,p);m[n]=r});D[e]=0;try{var k=b(c,d);Vb(k)}catch(f){f instanceof ia||"unwind"==f||h(1,f)}finally{}}
function Tb(a){function b(){if(!Rb&&(Rb=!0,g.calledRun=!0,!la)){Ja(za);Ja(Aa);if(g.onRuntimeInitialized)g.onRuntimeInitialized();Wb&&Ub(a);if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var c=g.postRun.shift();Ca.unshift(c)}Ja(Ca)}}a=a||ba;if(!(0<G)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)Da();Ja(ya);0<G||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);b()},
1)):b())}}g.run=Tb;function Vb(a){if(!noExitRuntime){if(g.onExit)g.onExit(a);la=!0}h(a,new ia(a))}if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var Wb=!0;g.noInitialRun&&(Wb=!1);Tb();
