
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var h={},l;for(l in e)e.hasOwnProperty(l)&&(h[l]=e[l]);var aa=[],ba="./this.program";function q(a,b){throw b;}var ca="object"===typeof window,t="function"===typeof importScripts,v="",da,w,x,y,z;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)v=t?require("path").dirname(v)+"/":__dirname+"/",da=function(a,b){y||(y=require("fs"));z||(z=require("path"));a=z.normalize(a);return y.readFileSync(a,b?null:"utf8")},x=function(a){a=da(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||A("Assertion failed: undefined");return a},w=function(a,b,c){y||(y=require("fs"));z||(z=require("path"));a=z.normalize(a);y.readFile(a,function(d,f){d?c(d):b(f.buffer)})},
1<process.argv.length&&(ba=process.argv[1].replace(/\\/g,"/")),aa=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof B))throw a;}),process.on("unhandledRejection",function(a){throw a;}),q=function(a,b){if(noExitRuntime||0<ea)throw process.exitCode=a,b;b instanceof B||C("exiting due to exception: "+b);process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(ca||t)t?v=self.location.href:"undefined"!==
typeof document&&document.currentScript&&(v=document.currentScript.src),v=0!==v.indexOf("blob:")?v.substr(0,v.replace(/[?#].*/,"").lastIndexOf("/")+1):"",da=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},t&&(x=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),w=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==
d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};e.print||console.log.bind(console);var C=e.printErr||console.warn.bind(console);for(l in h)h.hasOwnProperty(l)&&(e[l]=h[l]);h=null;e.arguments&&(aa=e.arguments);e.thisProgram&&(ba=e.thisProgram);e.quit&&(q=e.quit);var D;e.wasmBinary&&(D=e.wasmBinary);var noExitRuntime=e.noExitRuntime||!0;"object"!==typeof WebAssembly&&A("no native wasm support detected");var fa,ha=!1;
function ia(a){var b=e["_"+a];b||A("Assertion failed: Cannot call unknown function "+(a+", make sure it is exported"));return b}function ja(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var r=(n.length<<2)+1;p=E(r);F(n,G,p,r)}return p},array:function(n){var p=E(n.length);ka.set(n,p);return p}};a=ia(a);var f=[],k=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===k&&(k=la()),f[g]=m(c[g])):f[g]=c[g]}b=a.apply(null,f);b=function(n){0!==k&&ma(k);return n}(b)}
var na="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function H(a,b){if(a){var c=G,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&na)a=na.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var k=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|k);else{var g=c[a++]&63;f=224==(f&240)?(f&15)<<12|k<<6|g:(f&7)<<18|k<<12|g<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
function F(a,b,c,d){if(!(0<d))return 0;var f=c;d=c+d-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-f}
function oa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function pa(a){var b=oa(a)+1,c=E(b);F(a,ka,c,b);return c}var qa,ka,G,ra,sa,I,ta,ua,J;
function va(){var a=fa.buffer;qa=a;e.HEAP8=ka=new Int8Array(a);e.HEAP16=ra=new Int16Array(a);e.HEAP32=I=new Int32Array(a);e.HEAPU8=G=new Uint8Array(a);e.HEAPU16=sa=new Uint16Array(a);e.HEAPU32=ta=new Uint32Array(a);e.HEAPF32=ua=new Float32Array(a);e.HEAPF64=J=new Float64Array(a)}var wa,xa=[],ya=[],za=[],Aa=[],Ba=[],ea=0;function Ca(){var a=e.preRun.shift();xa.unshift(a)}var K=0,Da=null,L=null;e.preloadedImages={};e.preloadedAudios={};
function A(a){if(e.onAbort)e.onAbort(a);a="Aborted("+a+")";C(a);ha=!0;throw new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS=1 for more info.");}function Ea(){return M.startsWith("data:application/octet-stream;base64,")}var M;M="debugtext-sapp.wasm";if(!Ea()){var Fa=M;M=e.locateFile?e.locateFile(Fa,v):v+Fa}function Ga(){var a=M;try{if(a==M&&D)return new Uint8Array(D);if(x)return x(a);throw"both async and sync fetching of the wasm failed";}catch(b){A(b)}}
function Ha(){if(!D&&(ca||t)){if("function"===typeof fetch&&!M.startsWith("file://"))return fetch(M,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+M+"'";return a.arrayBuffer()}).catch(function(){return Ga()});if(w)return new Promise(function(a,b){w(M,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ga()})}
function Ia(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.rc;"number"===typeof c?void 0===b.Pb?O(c)():O(c)(b.Pb):c(void 0===b.Pb?null:b.Pb)}}}var Ja=[];function O(a){var b=Ja[a];b||(a>=Ja.length&&(Ja.length=a+1),Ja[a]=b=wa.get(a));return b}var Ka=0;function La(){for(var a=P.length-1;0<=a;--a)Ma(a);P=[];Na=[]}var Na=[];function Oa(){if(Ka&&Pa.Kb)for(var a=0;a<Na.length;++a){var b=Na[a];Na.splice(a,1);--a;b.Ac.apply(null,b.oc)}}var P=[];
function Ma(a){var b=P[a];b.target.removeEventListener(b.Db,b.kc,b.Eb);P.splice(a,1)}function Q(a){function b(d){++Ka;Pa=a;Oa();a.Gb(d);Oa();--Ka}if(a.Fb)a.kc=b,a.target.addEventListener(a.Db,b,a.Eb),P.push(a),Qa||(Aa.push(La),Qa=!0);else for(var c=0;c<P.length;++c)P[c].target==a.target&&P[c].Db==a.Db&&Ma(c--)}function Ra(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Qa,Pa,Sa,Ta,Ua,Va,Wa,Xa,Ya,Za=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function R(a){a=2<a?H(a):a;return Za[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function $a(a){return 0>Za.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function ab(a,b,c,d,f,k){Sa||(Sa=S(256));a={target:R(a),Db:k,Fb:d,Gb:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Sa;F(Ra(g.target),G,n+0,128);F(m,G,n+128,128);O(d)(f,n,b)&&g.preventDefault()},Eb:c};Q(a)}
function bb(a,b,c,d,f,k){Ta||(Ta=S(176));a={target:R(a),Kb:!0,Db:k,Fb:d,Gb:function(g){var m=Ta;J[m>>3]=g.timeStamp;var n=m>>2;I[n+2]=g.location;I[n+3]=g.ctrlKey;I[n+4]=g.shiftKey;I[n+5]=g.altKey;I[n+6]=g.metaKey;I[n+7]=g.repeat;I[n+8]=g.charCode;I[n+9]=g.keyCode;I[n+10]=g.which;F(g.key||"",G,m+44,32);F(g.code||"",G,m+76,32);F(g.char||"",G,m+108,32);F(g.locale||"",G,m+140,32);O(d)(f,m,b)&&g.preventDefault()},Eb:c};Q(a)}
function cb(a,b,c){J[a>>3]=b.timeStamp;a>>=2;I[a+2]=b.screenX;I[a+3]=b.screenY;I[a+4]=b.clientX;I[a+5]=b.clientY;I[a+6]=b.ctrlKey;I[a+7]=b.shiftKey;I[a+8]=b.altKey;I[a+9]=b.metaKey;ra[2*a+20]=b.button;ra[2*a+21]=b.buttons;I[a+11]=b.movementX;I[a+12]=b.movementY;c=$a(c);I[a+13]=b.clientX-c.left;I[a+14]=b.clientY-c.top}
function T(a,b,c,d,f,k){Ua||(Ua=S(72));a=R(a);Q({target:a,Kb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Db:k,Fb:d,Gb:function(g){g=g||event;cb(Ua,g,a);O(d)(f,Ua,b)&&g.preventDefault()},Eb:c})}function db(a,b,c,d,f){Va||(Va=S(260));Q({target:a,Db:f,Fb:d,Gb:function(k){k=k||event;var g=Va,m=document.pointerLockElement||document.Rb||document.Tb||document.Sb;I[g>>2]=!!m;var n=m&&m.id?m.id:"";F(Ra(m),G,g+4,128);F(n,G,g+132,128);O(d)(20,g,b)&&k.preventDefault()},Eb:c})}
function eb(a,b,c,d,f){Q({target:a,Db:f,Fb:d,Gb:function(k){k=k||event;O(d)(38,0,b)&&k.preventDefault()},Eb:c})}
function fb(a,b,c,d){Wa||(Wa=S(36));a=R(a);Q({target:a,Db:"resize",Fb:d,Gb:function(f){f=f||event;if(f.target==a){var k=document.body;if(k){var g=Wa;I[g>>2]=f.detail;I[g+4>>2]=k.clientWidth;I[g+8>>2]=k.clientHeight;I[g+12>>2]=innerWidth;I[g+16>>2]=innerHeight;I[g+20>>2]=outerWidth;I[g+24>>2]=outerHeight;I[g+28>>2]=pageXOffset;I[g+32>>2]=pageYOffset;O(d)(10,g,b)&&f.preventDefault()}}},Eb:c})}
function gb(a,b,c,d,f,k){Xa||(Xa=S(1696));a=R(a);Q({target:a,Kb:"touchstart"==k||"touchend"==k,Db:k,Fb:d,Gb:function(g){for(var m,n={},p=g.touches,r=0;r<p.length;++r)m=p[r],m.Yb=m.$b=0,n[m.identifier]=m;for(r=0;r<g.changedTouches.length;++r)m=g.changedTouches[r],m.Yb=1,n[m.identifier]=m;for(r=0;r<g.targetTouches.length;++r)n[g.targetTouches[r].identifier].$b=1;p=Xa;J[p>>3]=g.timeStamp;var u=p>>2;I[u+3]=g.ctrlKey;I[u+4]=g.shiftKey;I[u+5]=g.altKey;I[u+6]=g.metaKey;u+=7;var N=$a(a),lb=0;for(r in n)if(m=
n[r],I[u]=m.identifier,I[u+1]=m.screenX,I[u+2]=m.screenY,I[u+3]=m.clientX,I[u+4]=m.clientY,I[u+5]=m.pageX,I[u+6]=m.pageY,I[u+7]=m.Yb,I[u+8]=m.$b,I[u+9]=m.clientX-N.left,I[u+10]=m.clientY-N.top,u+=13,31<++lb)break;I[p+8>>2]=lb;O(d)(f,p,b)&&g.preventDefault()},Eb:c})}function hb(a,b,c,d,f,k){a={target:R(a),Db:k,Fb:d,Gb:function(g){g=g||event;O(d)(f,0,b)&&g.preventDefault()},Eb:c};Q(a)}
function ib(a,b,c,d){Ya||(Ya=S(104));Q({target:a,Kb:!0,Db:"wheel",Fb:d,Gb:function(f){f=f||event;var k=Ya;cb(k,f,a);J[k+72>>3]=f.deltaX;J[k+80>>3]=f.deltaY;J[k+88>>3]=f.deltaZ;I[k+96>>2]=f.deltaMode;O(d)(9,k,b)&&f.preventDefault()},Eb:c})}
function jb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,k){b.drawArraysInstancedANGLE(c,d,f,k)},a.drawElementsInstanced=function(c,d,f,k,g){b.drawElementsInstancedANGLE(c,d,f,k,g)})}
function kb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function mb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function nb(a){a.qc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function ob(a){a.tc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function pb(a){a.vc=a.getExtension("WEBGL_multi_draw")}var qb=1,rb=[],U=[],sb=[],tb=[],ub=[],V=[],vb=[],wb=[],xb={},yb={};function W(a){zb||(zb=a)}function Ab(a){for(var b=qb++,c=a.length;c<b;c++)a[c]=null;return b}
function Bb(a,b){a.Xb||(a.Xb=a.getContext,a.getContext=function(d,f){f=a.Xb(d,f);return"webgl"==d==f instanceof WebGLRenderingContext?f:null});var c=1<b.Zb?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Cb(c,b):0}function Cb(a,b){var c=Ab(wb),d={sc:c,attributes:b,version:b.Zb,Ob:a};a.canvas&&(a.canvas.nc=d);wb[c]=d;("undefined"===typeof b.Wb||b.Wb)&&Db(d);return c}
function Db(a){a||(a=X);if(!a.mc){a.mc=!0;var b=a.Ob;jb(b);kb(b);mb(b);nb(b);ob(b);2<=a.version&&(b.Vb=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Vb)b.Vb=b.getExtension("EXT_disjoint_timer_query");pb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var zb,X,Eb=["default","low-power","high-performance"];
function Fb(a,b,c,d){for(var f=0;f<a;f++){var k=Y[c](),g=k&&Ab(d);k?(k.name=g,d[g]=k):W(1282);I[b+4*f>>2]=g}}
function Gb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>X.version){W(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>X.version){W(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)I[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){W(1280);C("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:W(1280);C("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}I[b>>2]=c}else W(1281)}
function Z(a){var b=oa(a)+1,c=S(b);F(a,G,c,b);return c}function Hb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Ib(a){a-=5120;return 0==a?ka:1==a?G:2==a?ra:4==a?I:6==a?ua:5==a||28922==a||28520==a||30779==a||30782==a?ta:sa}
var Y,Nb={Q:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ka:function(a,b,c){a=R(a);if(!a)return-4;a=$a(a);J[b>>3]=a.width;J[c>>3]=a.height;return 0},Za:function(a,b,c){G.copyWithin(a,b,b+c)},La:function(a,b){function c(d){O(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},_a:function(a){var b=G.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{fa.grow(Math.min(2147483648,
d)-qa.byteLength+65535>>>16);va();var f=1;break a}catch(k){}f=void 0}if(f)return!0}return!1},R:function(a,b,c,d){ab(a,b,c,d,12,"blur");return 0},N:function(a,b,c){a=R(a);if(!a)return-4;a.width=b;a.height=c;return 0},S:function(a,b,c,d){ab(a,b,c,d,13,"focus");return 0},$:function(a,b,c,d){bb(a,b,c,d,2,"keydown");return 0},Z:function(a,b,c,d){bb(a,b,c,d,1,"keypress");return 0},_:function(a,b,c,d){bb(a,b,c,d,3,"keyup");return 0},ja:function(a,b,c,d){T(a,b,c,d,5,"mousedown");return 0},ca:function(a,b,
c,d){T(a,b,c,d,33,"mouseenter");return 0},ba:function(a,b,c,d){T(a,b,c,d,34,"mouseleave");return 0},da:function(a,b,c,d){T(a,b,c,d,8,"mousemove");return 0},ea:function(a,b,c,d){T(a,b,c,d,6,"mouseup");return 0},U:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Rb||document.body.Tb||document.body.Sb))return-1;a=R(a);if(!a)return-4;db(a,b,c,d,"pointerlockchange");db(a,b,c,d,"mozpointerlockchange");db(a,b,c,d,"webkitpointerlockchange");db(a,b,c,d,"mspointerlockchange");
return 0},T:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Rb||document.body.Tb||document.body.Sb))return-1;a=R(a);if(!a)return-4;eb(a,b,c,d,"pointerlockerror");eb(a,b,c,d,"mozpointerlockerror");eb(a,b,c,d,"webkitpointerlockerror");eb(a,b,c,d,"mspointerlockerror");return 0},Ya:function(a,b,c,d){fb(a,b,c,d);return 0},V:function(a,b,c,d){gb(a,b,c,d,25,"touchcancel");return 0},W:function(a,b,c,d){gb(a,b,c,d,23,"touchend");return 0},X:function(a,b,c,d){gb(a,b,c,d,24,
"touchmove");return 0},Y:function(a,b,c,d){gb(a,b,c,d,22,"touchstart");return 0},P:function(a,b,c,d){hb(a,b,c,d,31,"webglcontextlost");return 0},O:function(a,b,c,d){hb(a,b,c,d,32,"webglcontextrestored");return 0},aa:function(a,b,c,d){a=R(a);return"undefined"!==typeof a.onwheel?(ib(a,b,c,d),0):-1},E:function(a,b){b>>=2;b={alpha:!!I[b],depth:!!I[b+1],stencil:!!I[b+2],antialias:!!I[b+3],premultipliedAlpha:!!I[b+4],preserveDrawingBuffer:!!I[b+5],powerPreference:Eb[I[b+6]],failIfMajorPerformanceCaveat:!!I[b+
7],Zb:I[b+8],uc:I[b+9],Wb:I[b+10],lc:I[b+11],wc:I[b+12],xc:I[b+13]};a=R(a);return!a||b.lc?0:Bb(a,b)},ra:function(a,b){a=wb[a];b=H(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&jb(Y);"OES_vertex_array_object"==b&&kb(Y);"WEBGL_draw_buffers"==b&&mb(Y);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&nb(Y);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&ob(Y);"WEBGL_multi_draw"==b&&pb(Y);return!!a.Ob.getExtension(b)},Ia:function(a){a>>=2;for(var b=0;14>b;++b)I[a+
b]=0;I[a]=I[a+1]=I[a+3]=I[a+4]=I[a+8]=I[a+10]=1},ya:function(a){X=wb[a];e.pc=Y=X&&X.Ob;return!a||Y?0:-5},b:function(a){Y.activeTexture(a)},A:function(a,b){Y.attachShader(U[a],V[b])},c:function(a,b){35051==a?Y.Ub=b:35052==a&&(Y.Hb=b);Y.bindBuffer(a,rb[b])},h:function(a,b){Y.bindFramebuffer(a,sb[b])},Ca:function(a,b){Y.bindRenderbuffer(a,tb[b])},a:function(a,b){Y.bindTexture(a,ub[b])},L:function(a){Y.bindVertexArray(vb[a])},H:function(a,b,c,d){Y.blendColor(a,b,c,d)},I:function(a,b){Y.blendEquationSeparate(a,
b)},J:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},p:function(a,b,c,d,f,k,g,m,n,p){Y.blitFramebuffer(a,b,c,d,f,k,g,m,n,p)},Ea:function(a,b,c,d){2<=X.version?c?Y.bufferData(a,G,d,c,b):Y.bufferData(a,b,d):Y.bufferData(a,c?G.subarray(c,c+b):b,d)},C:function(a,b,c,d){2<=X.version?Y.bufferSubData(a,b,G,d,c):Y.bufferSubData(a,b,G.subarray(d,d+c))},eb:function(a){Y.clear(a)},ia:function(a,b,c,d){Y.clearColor(a,b,c,d)},ha:function(a){Y.clearDepth(a)},fb:function(a){Y.clearStencil(a)},j:function(a,b,c,
d){Y.colorMask(!!a,!!b,!!c,!!d)},na:function(a){Y.compileShader(V[a])},xa:function(a,b,c,d,f,k,g,m){2<=X.version?Y.Hb?Y.compressedTexImage2D(a,b,c,d,f,k,g,m):Y.compressedTexImage2D(a,b,c,d,f,k,G,m,g):Y.compressedTexImage2D(a,b,c,d,f,k,m?G.subarray(m,m+g):null)},va:function(a,b,c,d,f,k,g,m,n){Y.Hb?Y.compressedTexImage3D(a,b,c,d,f,k,g,m,n):Y.compressedTexImage3D(a,b,c,d,f,k,g,G,n,m)},ta:function(){var a=Ab(U),b=Y.createProgram();b.name=a;b.Nb=b.Lb=b.Mb=0;b.Qb=1;U[a]=b;return a},pa:function(a){var b=
Ab(V);V[b]=Y.createShader(a);return b},D:function(a){Y.cullFace(a)},Na:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],f=rb[d];f&&(Y.deleteBuffer(f),f.name=0,rb[d]=null,d==Y.Ub&&(Y.Ub=0),d==Y.Hb&&(Y.Hb=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=I[b+4*c>>2],f=sb[d];f&&(Y.deleteFramebuffer(f),f.name=0,sb[d]=null)}},v:function(a){if(a){var b=U[a];b?(Y.deleteProgram(b),b.name=0,U[a]=null):W(1281)}},M:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],f=tb[d];f&&(Y.deleteRenderbuffer(f),f.name=
0,tb[d]=null)}},r:function(a){if(a){var b=V[a];b?(Y.deleteShader(b),V[a]=null):W(1281)}},Ma:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],f=ub[d];f&&(Y.deleteTexture(f),f.name=0,ub[d]=null)}},Ka:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2];Y.deleteVertexArray(vb[d]);vb[d]=null}},u:function(a){Y.depthFunc(a)},t:function(a){Y.depthMask(!!a)},e:function(a){Y.disable(a)},K:function(a){Y.disableVertexAttribArray(a)},$a:function(a,b,c){Y.drawArrays(a,b,c)},ab:function(a,b,c,d){Y.drawElements(a,
b,c,d)},g:function(a){Y.enable(a)},bb:function(a){Y.enableVertexAttribArray(a)},F:function(a){Y.frontFace(a)},Fa:function(a,b){Fb(a,b,"createBuffer",rb)},Da:function(a,b){Fb(a,b,"createRenderbuffer",tb)},za:function(a,b){Fb(a,b,"createTexture",ub)},Ja:function(a,b){Fb(a,b,"createVertexArray",vb)},la:function(a,b){return Y.getAttribLocation(U[a],H(b))},d:function(a,b){Gb(a,b)},qa:function(a,b,c,d){a=Y.getProgramInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?F(a,G,d,b):0;c&&(I[c>>2]=b)},z:function(a,
b,c){if(c)if(a>=qb)W(1281);else if(a=U[a],35716==b)a=Y.getProgramInfoLog(a),null===a&&(a="(unknown error)"),I[c>>2]=a.length+1;else if(35719==b){if(!a.Nb)for(b=0;b<Y.getProgramParameter(a,35718);++b)a.Nb=Math.max(a.Nb,Y.getActiveUniform(a,b).name.length+1);I[c>>2]=a.Nb}else if(35722==b){if(!a.Lb)for(b=0;b<Y.getProgramParameter(a,35721);++b)a.Lb=Math.max(a.Lb,Y.getActiveAttrib(a,b).name.length+1);I[c>>2]=a.Lb}else if(35381==b){if(!a.Mb)for(b=0;b<Y.getProgramParameter(a,35382);++b)a.Mb=Math.max(a.Mb,
Y.getActiveUniformBlockName(a,b).length+1);I[c>>2]=a.Mb}else I[c>>2]=Y.getProgramParameter(a,b);else W(1281)},ma:function(a,b,c,d){a=Y.getShaderInfoLog(V[a]);null===a&&(a="(unknown error)");b=0<b&&d?F(a,G,d,b):0;c&&(I[c>>2]=b)},x:function(a,b,c){c?35716==b?(a=Y.getShaderInfoLog(V[a]),null===a&&(a="(unknown error)"),I[c>>2]=a?a.length+1:0):35720==b?(a=Y.getShaderSource(V[a]),I[c>>2]=a?a.length+1:0):I[c>>2]=Y.getShaderParameter(V[a],b):W(1281)},Pa:function(a){var b=xb[a];if(!b){switch(a){case 7939:b=
Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Z(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||W(1280);b=b&&Z(b);break;case 7938:b=Y.getParameter(7938);b=2<=X.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Z(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Z(b);break;default:W(1280)}xb[a]=
b}return b},Oa:function(a,b){if(2>X.version)return W(1282),0;var c=yb[a];if(c)return 0>b||b>=c.length?(W(1281),0):c[b];switch(a){case 7939:return c=Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Z(d)}),c=yb[a]=c,0>b||b>=c.length?(W(1281),0):c[b];default:return W(1280),0}},l:function(a,b){b=H(b);if(a=U[a]){var c=a,d=c.Jb,f=c.ic,k;if(!d)for(c.Jb=d={},c.hc={},k=0;k<Y.getProgramParameter(c,35718);++k){var g=Y.getActiveUniform(c,k);var m=g.name;
g=g.size;var n=Hb(m);n=0<n?m.slice(0,n):m;var p=c.Qb;c.Qb+=g;f[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.hc[p++]=n}c=a.Jb;d=0;f=b;k=Hb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,f=b.slice(0,k));if((f=a.ic[f])&&d<f[0]&&(d+=f[1],c[d]=c[d]||Y.getUniformLocation(a,b)))return d}else W(1281);return-1},sa:function(a){a=U[a];Y.linkProgram(a);a.Jb=0;a.ic={}},G:function(a,b){Y.polygonOffset(a,b)},q:function(a){Y.readBuffer(a)},Aa:function(a,b,c,d){Y.renderbufferStorage(a,b,c,d)},Ba:function(a,b,c,d,f){Y.renderbufferStorageMultisample(a,
b,c,d,f)},gb:function(a,b,c,d){Y.scissor(a,b,c,d)},oa:function(a,b,c,d){for(var f="",k=0;k<b;++k){var g=d?I[d+4*k>>2]:-1;f+=H(I[c+4*k>>2],0>g?void 0:g)}Y.shaderSource(V[a],f)},Ha:function(a,b,c){Y.stencilFunc(a,b,c)},ga:function(a,b,c,d){Y.stencilFuncSeparate(a,b,c,d)},s:function(a){Y.stencilMask(a)},Ga:function(a,b,c){Y.stencilOp(a,b,c)},fa:function(a,b,c,d){Y.stencilOpSeparate(a,b,c,d)},wa:function(a,b,c,d,f,k,g,m,n){if(2<=X.version)if(Y.Hb)Y.texImage2D(a,b,c,d,f,k,g,m,n);else if(n){var p=Ib(m);
Y.texImage2D(a,b,c,d,f,k,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else Y.texImage2D(a,b,c,d,f,k,g,m,null);else{p=Y;var r=p.texImage2D;if(n){var u=Ib(m),N=31-Math.clz32(u.BYTES_PER_ELEMENT);n=u.subarray(n>>N,n+f*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[g-6402]||1)*(1<<N)+4-1&-4)>>N)}else n=null;r.call(p,a,b,c,d,f,k,g,m,n)}},ua:function(a,b,c,d,f,k,g,m,n,p){if(Y.Hb)Y.texImage3D(a,b,c,d,f,k,g,m,n,p);else if(p){var r=Ib(n);Y.texImage3D(a,b,c,d,f,k,g,m,n,r,p>>31-Math.clz32(r.BYTES_PER_ELEMENT))}else Y.texImage3D(a,
b,c,d,f,k,g,m,n,null)},B:function(a,b,c){Y.texParameterf(a,b,c)},f:function(a,b,c){Y.texParameteri(a,b,c)},y:function(a,b){var c=Y,d=c.uniform1i;var f=Y.jc;if(f){var k=f.Jb[a];"number"===typeof k&&(f.Jb[a]=k=Y.getUniformLocation(f,f.hc[a]+(0<k?"["+k+"]":"")));a=k}else W(1282),a=void 0;d.call(c,a,b)},k:function(a){a=U[a];Y.useProgram(a);Y.jc=a},cb:function(a,b){Y.vertexAttribDivisor(a,b)},db:function(a,b,c,d,f,k){Y.vertexAttribPointer(a,b,c,!!d,f,k)},hb:function(a,b,c,d){Y.viewport(a,b,c,d)},Xa:function(){e.ac=
function(a){0!=Jb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.ac)},Wa:function(){e.fc=function(a){a=a.clipboardData.getData("text");ja("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",e.fc)},Va:function(a){e.yc=[];a=H(a);a=document.getElementById(a);e.bc=function(b){b.stopPropagation();b.preventDefault()};e.cc=function(b){b.stopPropagation();b.preventDefault()};e.dc=function(b){b.stopPropagation();b.preventDefault()};e.ec=function(b){b.stopPropagation();
b.preventDefault();var c=b.dataTransfer.files;e.zc=c;Kb(c.length);var d;for(d=0;d<c.length;d++)ja("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Lb(b.clientX,b.clientY)};a.addEventListener("dragenter",e.bc,!1);a.addEventListener("dragleave",e.cc,!1);a.addEventListener("dragover",e.dc,!1);a.addEventListener("drop",e.ec,!1)},Ra:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},o:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";
a.autocapitalize="none";a.addEventListener("focusout",function(){Mb()});document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},ib:function(a){a=H(a);e.Ib=document.getElementById(a);e.Ib||console.log("sokol_app.h: invalid target:"+a);e.Ib.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ua:function(){window.removeEventListener("beforeunload",e.ac)},Ta:function(){window.removeEventListener("paste",e.fc)},Sa:function(a){a=
H(a);a=document.getElementById(a);a.removeEventListener("dragenter",e.bc);a.removeEventListener("dragleave",e.cc);a.removeEventListener("dragover",e.dc);a.removeEventListener("drop",e.ec)},w:function(){e.Ib&&e.Ib.requestPointerLock&&e.Ib.requestPointerLock()},Qa:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var f=d.getContext("2d"),k=f.createImageData(a,b);k.data.set(G.subarray(c,c+a*b*4));f.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";
a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},m:function(){document.getElementById("_sokol_app_input_element").blur()}};
(function(){function a(f){e.asm=f.exports;fa=e.asm.jb;va();wa=e.asm.Cb;ya.unshift(e.asm.kb);K--;e.monitorRunDependencies&&e.monitorRunDependencies(K);0==K&&(null!==Da&&(clearInterval(Da),Da=null),L&&(f=L,L=null,f()))}function b(f){a(f.instance)}function c(f){return Ha().then(function(k){return WebAssembly.instantiate(k,d)}).then(function(k){return k}).then(f,function(k){C("failed to asynchronously prepare wasm: "+k);A(k)})}var d={a:Nb};K++;e.monitorRunDependencies&&e.monitorRunDependencies(K);if(e.instantiateWasm)try{return e.instantiateWasm(d,
a)}catch(f){return C("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return D||"function"!==typeof WebAssembly.instantiateStreaming||Ea()||M.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(M,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(k){C("wasm streaming compile failed: "+k);C("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.kb).apply(null,arguments)};var S=e._malloc=function(){return(S=e._malloc=e.asm.lb).apply(null,arguments)},Mb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Mb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.mb).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.nb).apply(null,arguments)};
var Jb=e.__sapp_html5_get_ask_leave_site=function(){return(Jb=e.__sapp_html5_get_ask_leave_site=e.asm.ob).apply(null,arguments)},Kb=e.__sapp_emsc_begin_drop=function(){return(Kb=e.__sapp_emsc_begin_drop=e.asm.pb).apply(null,arguments)};e.__sapp_emsc_drop=function(){return(e.__sapp_emsc_drop=e.asm.qb).apply(null,arguments)};var Lb=e.__sapp_emsc_end_drop=function(){return(Lb=e.__sapp_emsc_end_drop=e.asm.rb).apply(null,arguments)};
e.__sapp_emsc_invoke_fetch_cb=function(){return(e.__sapp_emsc_invoke_fetch_cb=e.asm.sb).apply(null,arguments)};e._main=function(){return(e._main=e.asm.tb).apply(null,arguments)};e.__saudio_emsc_pull=function(){return(e.__saudio_emsc_pull=e.asm.ub).apply(null,arguments)};e.__sfetch_emsc_head_response=function(){return(e.__sfetch_emsc_head_response=e.asm.vb).apply(null,arguments)};e.__sfetch_emsc_get_response=function(){return(e.__sfetch_emsc_get_response=e.asm.wb).apply(null,arguments)};
e.__sfetch_emsc_failed_http_status=function(){return(e.__sfetch_emsc_failed_http_status=e.asm.xb).apply(null,arguments)};e.__sfetch_emsc_failed_buffer_too_small=function(){return(e.__sfetch_emsc_failed_buffer_too_small=e.asm.yb).apply(null,arguments)};
var la=e.stackSave=function(){return(la=e.stackSave=e.asm.zb).apply(null,arguments)},ma=e.stackRestore=function(){return(ma=e.stackRestore=e.asm.Ab).apply(null,arguments)},E=e.stackAlloc=function(){return(E=e.stackAlloc=e.asm.Bb).apply(null,arguments)},Ob;function B(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}L=function Pb(){Ob||Qb();Ob||(L=Pb)};
function Qb(a){function b(){if(!Ob&&(Ob=!0,e.calledRun=!0,!ha)){Ia(ya);Ia(za);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Rb){var c=a,d=e._main;c=c||[];var f=c.length+1,k=E(4*(f+1));I[k>>2]=pa(ba);for(var g=1;g<f;g++)I[(k>>2)+g]=pa(c[g-1]);I[(k>>2)+f]=0;try{var m=d(f,k);if(!(noExitRuntime||0<ea)){if(e.onExit)e.onExit(m);ha=!0}q(m,new B(m))}catch(n){n instanceof B||"unwind"==n||q(1,n)}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),
Ba.unshift(c);Ia(Ba)}}a=a||aa;if(!(0<K)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ca();Ia(xa);0<K||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Qb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Rb=!0;e.noInitialRun&&(Rb=!1);Qb();
