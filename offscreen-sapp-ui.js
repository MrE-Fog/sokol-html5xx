
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var h={},l;for(l in f)f.hasOwnProperty(l)&&(h[l]=f[l]);var ba=[],ca="./this.program";function da(a,b){throw b;}var ea="object"===typeof window,r="function"===typeof importScripts,t="",fa,ha,ia,u,v;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)t=r?require("path").dirname(t)+"/":__dirname+"/",fa=function(a,b){u||(u=require("fs"));v||(v=require("path"));a=v.normalize(a);return u.readFileSync(a,b?null:"utf8")},ia=function(a){a=fa(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||w("Assertion failed: undefined");return a},ha=function(a,b,c){u||(u=require("fs"));v||(v=require("path"));a=v.normalize(a);u.readFile(a,function(d,e){d?c(d):b(e.buffer)})},
1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/")),ba=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ja))throw a;}),process.on("unhandledRejection",w),da=function(a,b){if(noExitRuntime||0<ka)throw process.exitCode=a,b;process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(ea||r)r?t=self.location.href:"undefined"!==typeof document&&document.currentScript&&(t=document.currentScript.src),
t=0!==t.indexOf("blob:")?t.substr(0,t.lastIndexOf("/")+1):"",fa=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},r&&(ia=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ha=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};
var la=f.print||console.log.bind(console),x=f.printErr||console.warn.bind(console);for(l in h)h.hasOwnProperty(l)&&(f[l]=h[l]);h=null;f.arguments&&(ba=f.arguments);f.thisProgram&&(ca=f.thisProgram);f.quit&&(da=f.quit);var y;f.wasmBinary&&(y=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!==typeof WebAssembly&&w("no native wasm support detected");var ma,na=!1;
function oa(a){var b=f["_"+a];b||w("Assertion failed: Cannot call unknown function "+(a+", make sure it is exported"));return b}function pa(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=z(q);B(n,C,p,q)}return p},array:function(n){var p=z(n.length);qa.set(n,p);return p}};a=oa(a);var e=[],k=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===k&&(k=ra()),e[g]=m(c[g])):e[g]=c[g]}b=a.apply(null,e);b=function(n){0!==k&&sa(k);return n}(b)}
var ta="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ua(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&ta)return ta.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var k=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|k<<6|g:(e&7)<<18|k<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function D(a,b){return a?ua(C,a,b):""}
function B(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function va(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function wa(a){var b=va(a)+1,c=z(b);B(a,qa,c,b);return c}var xa,qa,C,ya,za,E,Aa,F,G;
function Ba(){var a=ma.buffer;xa=a;f.HEAP8=qa=new Int8Array(a);f.HEAP16=ya=new Int16Array(a);f.HEAP32=E=new Int32Array(a);f.HEAPU8=C=new Uint8Array(a);f.HEAPU16=za=new Uint16Array(a);f.HEAPU32=Aa=new Uint32Array(a);f.HEAPF32=F=new Float32Array(a);f.HEAPF64=G=new Float64Array(a)}var H,Ca=[],Da=[],Ea=[],Fa=[],Ga=[],ka=0;function Ha(){var a=f.preRun.shift();Ca.unshift(a)}var I=0,Ia=null,J=null;f.preloadedImages={};f.preloadedAudios={};
function w(a){if(f.onAbort)f.onAbort(a);x(a);na=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ja(){return K.startsWith("data:application/octet-stream;base64,")}var K;K="offscreen-sapp-ui.wasm";if(!Ja()){var Ka=K;K=f.locateFile?f.locateFile(Ka,t):t+Ka}function La(){var a=K;try{if(a==K&&y)return new Uint8Array(y);if(ia)return ia(a);throw"both async and sync fetching of the wasm failed";}catch(b){w(b)}}
function Ma(){if(!y&&(ea||r)){if("function"===typeof fetch&&!K.startsWith("file://"))return fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return La()});if(ha)return new Promise(function(a,b){ha(K,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return La()})}
function Na(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.Nc;"number"===typeof c?void 0===b.kc?H.get(c)():H.get(c)(b.kc):c(void 0===b.kc?null:b.kc)}}}var Oa=[null,[],[]],Pa={},Qa=0;function Ra(){for(var a=L.length-1;0<=a;--a)Sa(a);L=[];Ta=[]}var Ta=[];function Ua(){if(Qa&&Va.ec)for(var a=0;a<Ta.length;++a){var b=Ta[a];Ta.splice(a,1);--a;b.Xc.apply(null,b.Jc)}}var L=[];function Sa(a){var b=L[a];b.target.removeEventListener(b.Yb,b.Dc,b.Zb);L.splice(a,1)}
function M(a){function b(d){++Qa;Va=a;Ua();a.ac(d);Ua();--Qa}if(a.$b)a.Dc=b,a.target.addEventListener(a.Yb,b,a.Zb),L.push(a),Wa||(Fa.push(Ra),Wa=!0);else for(var c=0;c<L.length;++c)L[c].target==a.target&&L[c].Yb==a.Yb&&Sa(c--)}var Wa,Va,Xa,Ya,Za,$a,ab,bb,cb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function N(a){a=2<a?D(a):a;return cb[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function db(a){return 0>cb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function eb(a,b,c,d,e,k){Xa||(Xa=O(176));a={target:N(a),ec:!0,Yb:k,$b:d,ac:function(g){var m=Xa;G[m>>3]=g.timeStamp;var n=m>>2;E[n+2]=g.location;E[n+3]=g.ctrlKey;E[n+4]=g.shiftKey;E[n+5]=g.altKey;E[n+6]=g.metaKey;E[n+7]=g.repeat;E[n+8]=g.charCode;E[n+9]=g.keyCode;E[n+10]=g.which;B(g.key||"",C,m+44,32);B(g.code||"",C,m+76,32);B(g.char||"",C,m+108,32);B(g.locale||"",C,m+140,32);H.get(d)(e,m,b)&&g.preventDefault()},Zb:c};M(a)}
function fb(a,b,c){G[a>>3]=b.timeStamp;a>>=2;E[a+2]=b.screenX;E[a+3]=b.screenY;E[a+4]=b.clientX;E[a+5]=b.clientY;E[a+6]=b.ctrlKey;E[a+7]=b.shiftKey;E[a+8]=b.altKey;E[a+9]=b.metaKey;ya[2*a+20]=b.button;ya[2*a+21]=b.buttons;E[a+11]=b.movementX;E[a+12]=b.movementY;c=db(c);E[a+13]=b.clientX-c.left;E[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,k){Ya||(Ya=O(72));a=N(a);M({target:a,ec:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Yb:k,$b:d,ac:function(g){g=g||event;fb(Ya,g,a);H.get(d)(e,Ya,b)&&g.preventDefault()},Zb:c})}
function gb(a,b,c,d,e){Za||(Za=O(260));M({target:a,Yb:e,$b:d,ac:function(k){k=k||event;var g=Za,m=document.pointerLockElement||document.nc||document.mc||document.oc;E[g>>2]=!!m;var n=m&&m.id?m.id:"";B(m?m==window?"#window":m==screen?"#screen":m&&m.nodeName?m.nodeName:"":"",C,g+4,128);B(n,C,g+132,128);H.get(d)(20,g,b)&&k.preventDefault()},Zb:c})}function hb(a,b,c,d,e){M({target:a,Yb:e,$b:d,ac:function(k){k=k||event;H.get(d)(38,0,b)&&k.preventDefault()},Zb:c})}
function ib(a,b,c,d){$a||($a=O(36));a=N(a);M({target:a,Yb:"resize",$b:d,ac:function(e){e=e||event;if(e.target==a){var k=document.body;if(k){var g=$a;E[g>>2]=e.detail;E[g+4>>2]=k.clientWidth;E[g+8>>2]=k.clientHeight;E[g+12>>2]=innerWidth;E[g+16>>2]=innerHeight;E[g+20>>2]=outerWidth;E[g+24>>2]=outerHeight;E[g+28>>2]=pageXOffset;E[g+32>>2]=pageYOffset;H.get(d)(10,g,b)&&e.preventDefault()}}},Zb:c})}
function jb(a,b,c,d,e,k){ab||(ab=O(1696));a=N(a);M({target:a,ec:"touchstart"==k||"touchend"==k,Yb:k,$b:d,ac:function(g){for(var m={},n=g.touches,p=0;p<n.length;++p){var q=n[p];m[q.identifier]=q}n=g.changedTouches;for(p=0;p<n.length;++p)q=n[p],q.Gc=1,m[q.identifier]=q;n=g.targetTouches;for(p=0;p<n.length;++p)m[n[p].identifier].Hc=1;n=ab;G[n>>3]=g.timeStamp;q=n>>2;E[q+3]=g.ctrlKey;E[q+4]=g.shiftKey;E[q+5]=g.altKey;E[q+6]=g.metaKey;q+=7;var aa=db(a),R=0;for(p in m){var A=m[p];E[q]=A.identifier;E[q+1]=
A.screenX;E[q+2]=A.screenY;E[q+3]=A.clientX;E[q+4]=A.clientY;E[q+5]=A.pageX;E[q+6]=A.pageY;E[q+7]=A.Gc;E[q+8]=A.Hc;E[q+9]=A.clientX-aa.left;E[q+10]=A.clientY-aa.top;q+=13;if(31<++R)break}E[n+8>>2]=R;H.get(d)(e,n,b)&&g.preventDefault()},Zb:c})}function kb(a,b,c,d,e,k){a={target:N(a),Yb:k,$b:d,ac:function(g){g=g||event;H.get(d)(e,0,b)&&g.preventDefault()},Zb:c};M(a)}
function lb(a,b,c,d){bb||(bb=O(104));M({target:a,ec:!0,Yb:"wheel",$b:d,ac:function(e){e=e||event;var k=bb;fb(k,e,a);G[k+72>>3]=e.deltaX;G[k+80>>3]=e.deltaY;G[k+88>>3]=e.deltaZ;E[k+96>>2]=e.deltaMode;H.get(d)(9,k,b)&&e.preventDefault()},Zb:c})}
function mb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,g){b.drawElementsInstancedANGLE(c,d,e,k,g)})}
function nb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function ob(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function pb(a){a.Lc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function qb(a){a.Qc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function rb(a){a.Sc=a.getExtension("WEBGL_multi_draw")}var sb=1,tb=[],Q=[],ub=[],vb=[],S=[],T=[],wb=[],xb=[],yb={},zb={};function U(a){Ab||(Ab=a)}function Bb(a){for(var b=sb++,c=a.length;c<b;c++)a[c]=null;return b}
function Cb(a,b){a.sc||(a.sc=a.getContext,a.getContext=function(d,e){e=a.sc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.tc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Db(c,b):0}function Db(a,b){var c=Bb(xb),d={Pc:c,attributes:b,version:b.tc,jc:a};a.canvas&&(a.canvas.Ic=d);xb[c]=d;("undefined"===typeof b.rc||b.rc)&&Eb(d);return c}
function Eb(a){a||(a=V);if(!a.Fc){a.Fc=!0;var b=a.jc;mb(b);nb(b);ob(b);pb(b);qb(b);2<=a.version&&(b.qc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.qc)b.qc=b.getExtension("EXT_disjoint_timer_query");rb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Ab,V,Fb=["default","low-power","high-performance"],Gb=[];
function Hb(a,b,c,d){for(var e=0;e<a;e++){var k=W[c](),g=k&&Bb(d);k?(k.name=g,d[g]=k):U(1282);E[b+4*e>>2]=g}}
function Ib(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=W.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>V.version){U(1282);return}c=2*(W.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>V.version){U(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=W.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":U(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:U(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)E[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){U(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:U(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}E[b>>2]=c}else U(1281)}
function Jb(a){var b=va(a)+1,c=O(b);B(a,C,c,b);return c}function Kb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Lb(a){a-=5120;return 0==a?qa:1==a?C:2==a?ya:4==a?E:6==a?F:5==a||28922==a||28520==a||30779==a||30782==a?Aa:za}function X(a){var b=W.Cc;if(b){var c=b.dc[a];"number"===typeof c&&(b.dc[a]=c=W.getUniformLocation(b,b.Ac[a]+(0<c?"["+c+"]":"")));return c}U(1282)}for(var Y=[],W,Z=0;32>Z;++Z)Gb.push(Array(Z));var Mb=new Float32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Mb.subarray(0,Z+1);
var Rb={la:function(){return 0},kb:function(){return 0},mb:function(){},Z:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},va:function(a,b,c){a=N(a);if(!a)return-4;a=db(a);G[b>>3]=a.width;G[c>>3]=a.height;return 0},hb:function(a,b,c){C.copyWithin(a,b,b+c)},Ta:function(a,b){function c(d){H.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},ib:function(a){var b=C.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,
a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ma.grow(Math.min(2147483648,d)-xa.byteLength+65535>>>16);Ba();var e=1;break a}catch(k){}e=void 0}if(e)return!0}return!1},Y:function(a,b,c){a=N(a);if(!a)return-4;a.width=b;a.height=c;return 0},ia:function(a,b,c,d){eb(a,b,c,d,2,"keydown");return 0},ga:function(a,b,c,d){eb(a,b,c,d,1,"keypress");return 0},ha:function(a,b,c,d){eb(a,b,c,d,3,"keyup");return 0},ua:function(a,b,c,d){P(a,b,c,d,5,"mousedown");return 0},na:function(a,b,c,d){P(a,
b,c,d,33,"mouseenter");return 0},ka:function(a,b,c,d){P(a,b,c,d,34,"mouseleave");return 0},pa:function(a,b,c,d){P(a,b,c,d,8,"mousemove");return 0},ta:function(a,b,c,d){P(a,b,c,d,6,"mouseup");return 0},ba:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.nc||document.body.mc||document.body.oc))return-1;a=N(a);if(!a)return-4;gb(a,b,c,d,"pointerlockchange");gb(a,b,c,d,"mozpointerlockchange");gb(a,b,c,d,"webkitpointerlockchange");gb(a,b,c,d,"mspointerlockchange");
return 0},aa:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.nc||document.body.mc||document.body.oc))return-1;a=N(a);if(!a)return-4;hb(a,b,c,d,"pointerlockerror");hb(a,b,c,d,"mozpointerlockerror");hb(a,b,c,d,"webkitpointerlockerror");hb(a,b,c,d,"mspointerlockerror");return 0},fb:function(a,b,c,d){ib(a,b,c,d);return 0},ca:function(a,b,c,d){jb(a,b,c,d,25,"touchcancel");return 0},da:function(a,b,c,d){jb(a,b,c,d,23,"touchend");return 0},ea:function(a,b,c,d){jb(a,b,c,
d,24,"touchmove");return 0},fa:function(a,b,c,d){jb(a,b,c,d,22,"touchstart");return 0},$:function(a,b,c,d){kb(a,b,c,d,31,"webglcontextlost");return 0},_:function(a,b,c,d){kb(a,b,c,d,32,"webglcontextrestored");return 0},ja:function(a,b,c,d){a=N(a);return"undefined"!==typeof a.onwheel?(lb(a,b,c,d),0):-1},O:function(a,b){b>>=2;b={alpha:!!E[b],depth:!!E[b+1],stencil:!!E[b+2],antialias:!!E[b+3],premultipliedAlpha:!!E[b+4],preserveDrawingBuffer:!!E[b+5],powerPreference:Fb[E[b+6]],failIfMajorPerformanceCaveat:!!E[b+
7],tc:E[b+8],Rc:E[b+9],rc:E[b+10],Ec:E[b+11],Tc:E[b+12],Uc:E[b+13]};a=N(a);return!a||b.Ec?0:Cb(a,b)},Ba:function(a,b){a=xb[a];b=D(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&mb(W);"OES_vertex_array_object"==b&&nb(W);"WEBGL_draw_buffers"==b&&ob(W);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&pb(W);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&qb(W);"WEBGL_multi_draw"==b&&rb(W);return!!a.jc.getExtension(b)},Qa:function(a){a>>=2;for(var b=0;14>b;++b)E[a+
b]=0;E[a]=E[a+1]=E[a+3]=E[a+4]=E[a+8]=E[a+10]=1},Ja:function(a){V=xb[a];f.Kc=W=V&&V.jc;return!a||W?0:-5},ma:function(){return 0},jb:function(a,b,c,d){a=Pa.Oc(a);b=Pa.Mc(a,b,c);E[d>>2]=b;return 0},gb:function(){},lb:function(a,b,c,d){for(var e=0,k=0;k<c;k++){for(var g=E[b+8*k>>2],m=E[b+(8*k+4)>>2],n=0;n<m;n++){var p=C[g+n],q=Oa[a];0===p||10===p?((1===a?la:x)(ua(q,0)),q.length=0):q.push(p)}e+=m}E[d>>2]=e;return 0},b:function(a){W.activeTexture(a)},I:function(a,b){W.attachShader(Q[a],T[b])},d:function(a,
b){35051==a?W.pc=b:35052==a&&(W.bc=b);W.bindBuffer(a,tb[b])},e:function(a,b){W.bindFramebuffer(a,ub[b])},L:function(a,b){W.bindRenderbuffer(a,vb[b])},a:function(a,b){W.bindTexture(a,S[b])},W:function(a){W.bindVertexArray(wb[a])},S:function(a,b,c,d){W.blendColor(a,b,c,d)},T:function(a,b){W.blendEquationSeparate(a,b)},U:function(a,b,c,d){W.blendFuncSeparate(a,b,c,d)},v:function(a,b,c,d,e,k,g,m,n,p){W.blitFramebuffer(a,b,c,d,e,k,g,m,n,p)},Ma:function(a,b,c,d){2<=V.version?c?W.bufferData(a,C,d,c,b):W.bufferData(a,
b,d):W.bufferData(a,c?C.subarray(c,c+b):b,d)},N:function(a,b,c,d){2<=V.version?W.bufferSubData(a,b,C,d,c):W.bufferSubData(a,b,C.subarray(d,d+c))},q:function(a){return W.checkFramebufferStatus(a)},zb:function(a){W.clear(a)},yb:function(a,b,c,d){W.clearBufferfi(a,b,c,d)},sa:function(a,b,c){W.clearBufferfv(a,b,F,c>>2)},xb:function(a,b,c){W.clearBufferiv(a,b,E,c>>2)},Cb:function(a,b,c,d){W.clearColor(a,b,c,d)},Bb:function(a){W.clearDepth(a)},Ab:function(a){W.clearStencil(a)},n:function(a,b,c,d){W.colorMask(!!a,
!!b,!!c,!!d)},ya:function(a){W.compileShader(T[a])},Ia:function(a,b,c,d,e,k,g,m){2<=V.version?W.bc?W.compressedTexImage2D(a,b,c,d,e,k,g,m):W.compressedTexImage2D(a,b,c,d,e,k,C,m,g):W.compressedTexImage2D(a,b,c,d,e,k,m?C.subarray(m,m+g):null)},Ga:function(a,b,c,d,e,k,g,m,n){W.bc?W.compressedTexImage3D(a,b,c,d,e,k,g,m,n):W.compressedTexImage3D(a,b,c,d,e,k,g,C,n,m)},Ea:function(){var a=Bb(Q),b=W.createProgram();b.name=a;b.ic=b.fc=b.hc=0;b.lc=1;Q[a]=b;return a},Aa:function(a){var b=Bb(T);T[b]=W.createShader(a);
return b},P:function(a){W.cullFace(a)},Va:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=tb[d];e&&(W.deleteBuffer(e),e.name=0,tb[d]=null,d==W.pc&&(W.pc=0),d==W.bc&&(W.bc=0))}},k:function(a,b){for(var c=0;c<a;++c){var d=E[b+4*c>>2],e=ub[d];e&&(W.deleteFramebuffer(e),e.name=0,ub[d]=null)}},D:function(a){if(a){var b=Q[a];b?(W.deleteProgram(b),b.name=0,Q[a]=null):U(1281)}},X:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=vb[d];e&&(W.deleteRenderbuffer(e),e.name=0,vb[d]=null)}},z:function(a){if(a){var b=
T[a];b?(W.deleteShader(b),T[a]=null):U(1281)}},Ua:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2],e=S[d];e&&(W.deleteTexture(e),e.name=0,S[d]=null)}},Sa:function(a,b){for(var c=0;c<a;c++){var d=E[b+4*c>>2];W.deleteVertexArray(wb[d]);wb[d]=null}},C:function(a){W.depthFunc(a)},B:function(a){W.depthMask(!!a)},g:function(a){W.disable(a)},V:function(a){W.disableVertexAttribArray(a)},nb:function(a,b,c){W.drawArrays(a,b,c)},p:function(a,b){for(var c=Gb[a],d=0;d<a;d++)c[d]=E[b+4*d>>2];W.drawBuffers(c)},
ob:function(a,b,c,d){W.drawElements(a,b,c,d)},i:function(a){W.enable(a)},ub:function(a){W.enableVertexAttribArray(a)},l:function(a,b,c,d){W.framebufferRenderbuffer(a,b,c,vb[d])},c:function(a,b,c,d,e){W.framebufferTexture2D(a,b,c,S[d],e)},j:function(a,b,c,d,e){W.framebufferTextureLayer(a,b,S[c],d,e)},Q:function(a){W.frontFace(a)},Na:function(a,b){Hb(a,b,"createBuffer",tb)},m:function(a,b){Hb(a,b,"createFramebuffer",ub)},M:function(a,b){Hb(a,b,"createRenderbuffer",vb)},Ka:function(a,b){Hb(a,b,"createTexture",
S)},Ra:function(a,b){Hb(a,b,"createVertexArray",wb)},wa:function(a,b){return W.getAttribLocation(Q[a],D(b))},f:function(a,b){Ib(a,b)},Ca:function(a,b,c,d){a=W.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,C,d,b):0;c&&(E[c>>2]=b)},H:function(a,b,c){if(c)if(a>=sb)U(1281);else if(a=Q[a],35716==b)a=W.getProgramInfoLog(a),null===a&&(a="(unknown error)"),E[c>>2]=a.length+1;else if(35719==b){if(!a.ic)for(b=0;b<W.getProgramParameter(a,35718);++b)a.ic=Math.max(a.ic,W.getActiveUniform(a,
b).name.length+1);E[c>>2]=a.ic}else if(35722==b){if(!a.fc)for(b=0;b<W.getProgramParameter(a,35721);++b)a.fc=Math.max(a.fc,W.getActiveAttrib(a,b).name.length+1);E[c>>2]=a.fc}else if(35381==b){if(!a.hc)for(b=0;b<W.getProgramParameter(a,35382);++b)a.hc=Math.max(a.hc,W.getActiveUniformBlockName(a,b).length+1);E[c>>2]=a.hc}else E[c>>2]=W.getProgramParameter(a,b);else U(1281)},xa:function(a,b,c,d){a=W.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,C,d,b):0;c&&(E[c>>2]=b)},F:function(a,
b,c){c?35716==b?(a=W.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),E[c>>2]=a?a.length+1:0):35720==b?(a=W.getShaderSource(T[a]),E[c>>2]=a?a.length+1:0):E[c>>2]=W.getShaderParameter(T[a],b):U(1281)},Xa:function(a){var b=yb[a];if(!b){switch(a){case 7939:b=W.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Jb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=W.getParameter(a))||U(1280);b=b&&Jb(b);break;case 7938:b=W.getParameter(7938);b=2<=V.version?
"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Jb(b);break;case 35724:b=W.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Jb(b);break;default:U(1280)}yb[a]=b}return b},Wa:function(a,b){if(2>V.version)return U(1282),0;var c=zb[a];if(c)return 0>b||b>=c.length?(U(1281),0):c[b];switch(a){case 7939:return c=W.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=
c.map(function(d){return Jb(d)}),c=zb[a]=c,0>b||b>=c.length?(U(1281),0):c[b];default:return U(1280),0}},r:function(a,b){b=D(b);if(a=Q[a]){var c=a,d=c.dc,e=c.Bc,k;if(!d)for(c.dc=d={},c.Ac={},k=0;k<W.getProgramParameter(c,35718);++k){var g=W.getActiveUniform(c,k);var m=g.name;g=g.size;var n=Kb(m);n=0<n?m.slice(0,n):m;var p=c.lc;c.lc+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.Ac[p++]=n}c=a.dc;d=0;e=b;k=Kb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.Bc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||W.getUniformLocation(a,
b)))return d}else U(1281);return-1},Da:function(a){a=Q[a];W.linkProgram(a);a.dc=0;a.Bc={}},R:function(a,b){W.polygonOffset(a,b)},w:function(a){W.readBuffer(a)},La:function(a,b,c,d){W.renderbufferStorage(a,b,c,d)},K:function(a,b,c,d,e){W.renderbufferStorageMultisample(a,b,c,d,e)},x:function(a,b,c,d){W.scissor(a,b,c,d)},za:function(a,b,c,d){for(var e="",k=0;k<b;++k){var g=d?E[d+4*k>>2]:-1;e+=D(E[c+4*k>>2],0>g?void 0:g)}W.shaderSource(T[a],e)},Pa:function(a,b,c){W.stencilFunc(a,b,c)},ra:function(a,b,
c,d){W.stencilFuncSeparate(a,b,c,d)},A:function(a){W.stencilMask(a)},Oa:function(a,b,c){W.stencilOp(a,b,c)},qa:function(a,b,c,d){W.stencilOpSeparate(a,b,c,d)},Ha:function(a,b,c,d,e,k,g,m,n){if(2<=V.version)if(W.bc)W.texImage2D(a,b,c,d,e,k,g,m,n);else if(n){var p=Lb(m);W.texImage2D(a,b,c,d,e,k,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else W.texImage2D(a,b,c,d,e,k,g,m,null);else{p=W;var q=p.texImage2D;if(n){var aa=Lb(m),R=31-Math.clz32(aa.BYTES_PER_ELEMENT);n=aa.subarray(n>>R,n+e*(d*({5:3,6:4,8:2,
29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[g-6402]||1)*(1<<R)+4-1&-4)>>R)}else n=null;q.call(p,a,b,c,d,e,k,g,m,n)}},Fa:function(a,b,c,d,e,k,g,m,n,p){if(W.bc)W.texImage3D(a,b,c,d,e,k,g,m,n,p);else if(p){var q=Lb(n);W.texImage3D(a,b,c,d,e,k,g,m,n,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else W.texImage3D(a,b,c,d,e,k,g,m,n,null)},J:function(a,b,c){W.texParameterf(a,b,c)},h:function(a,b,c){W.texParameteri(a,b,c)},tb:function(a,b,c){if(2<=V.version)W.uniform1fv(X(a),F,c>>2,b);else{if(288>=b)for(var d=
Y[b-1],e=0;e<b;++e)d[e]=F[c+4*e>>2];else d=F.subarray(c>>2,c+4*b>>2);W.uniform1fv(X(a),d)}},G:function(a,b){W.uniform1i(X(a),b)},sb:function(a,b,c){if(2<=V.version)W.uniform2fv(X(a),F,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2];else d=F.subarray(c>>2,c+8*b>>2);W.uniform2fv(X(a),d)}},rb:function(a,b,c){if(2<=V.version)W.uniform3fv(X(a),F,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+
(4*e+8)>>2];else d=F.subarray(c>>2,c+12*b>>2);W.uniform3fv(X(a),d)}},qb:function(a,b,c){if(2<=V.version)W.uniform4fv(X(a),F,c>>2,4*b);else{if(72>=b){var d=Y[4*b-1],e=F;c>>=2;for(var k=0;k<4*b;k+=4){var g=c+k;d[k]=e[g];d[k+1]=e[g+1];d[k+2]=e[g+2];d[k+3]=e[g+3]}}else d=F.subarray(c>>2,c+16*b>>2);W.uniform4fv(X(a),d)}},pb:function(a,b,c,d){if(2<=V.version)W.uniformMatrix4fv(X(a),!!c,F,d>>2,16*b);else{if(18>=b){var e=Y[16*b-1],k=F;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=k[m];e[g+1]=k[m+1];e[g+
2]=k[m+2];e[g+3]=k[m+3];e[g+4]=k[m+4];e[g+5]=k[m+5];e[g+6]=k[m+6];e[g+7]=k[m+7];e[g+8]=k[m+8];e[g+9]=k[m+9];e[g+10]=k[m+10];e[g+11]=k[m+11];e[g+12]=k[m+12];e[g+13]=k[m+13];e[g+14]=k[m+14];e[g+15]=k[m+15]}}else e=F.subarray(d>>2,d+64*b>>2);W.uniformMatrix4fv(X(a),!!c,e)}},o:function(a){a=Q[a];W.useProgram(a);W.Cc=a},vb:function(a,b){W.vertexAttribDivisor(a,b)},wb:function(a,b,c,d,e,k){W.vertexAttribPointer(a,b,c,!!d,e,k)},y:function(a,b,c,d){W.viewport(a,b,c,d)},eb:function(){f.uc=function(a){0!=Nb()&&
(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.uc)},db:function(){f.zc=function(a){a=a.clipboardData.getData("text");pa("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.zc)},cb:function(a){f.Vc=[];a=D(a);a=document.getElementById(a);f.vc=function(b){b.stopPropagation();b.preventDefault()};f.wc=function(b){b.stopPropagation();b.preventDefault()};f.xc=function(b){b.stopPropagation();b.preventDefault()};f.yc=function(b){b.stopPropagation();b.preventDefault();
var c=b.dataTransfer.files;f.Wc=c;Ob(c.length);var d;for(d=0;d<c.length;d++)pa("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Pb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.vc,!1);a.addEventListener("dragleave",f.wc,!1);a.addEventListener("dragover",f.xc,!1);a.addEventListener("drop",f.yc,!1)},Za:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},u:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";
a.autocapitalize="none";a.addEventListener("focusout",function(){Qb()});document.body.append(a)},t:function(){document.getElementById("_sokol_app_input_element").focus()},Db:function(a){a=D(a);f.cc=document.getElementById(a);f.cc||console.log("sokol_app.h: invalid target:"+a);f.cc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},bb:function(){window.removeEventListener("beforeunload",f.uc)},ab:function(){window.removeEventListener("paste",f.zc)},$a:function(a){a=
D(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.vc);a.removeEventListener("dragleave",f.wc);a.removeEventListener("dragover",f.xc);a.removeEventListener("drop",f.yc)},E:function(){f.cc&&f.cc.requestPointerLock&&f.cc.requestPointerLock()},Ya:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(C.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";
a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},s:function(){document.getElementById("_sokol_app_input_element").blur()},_a:function(a){a=D(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");
document.body.removeChild(b)},oa:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){f.asm=e.exports;ma=f.asm.Eb;Ba();H=f.asm.Xb;Da.unshift(f.asm.Fb);I--;f.monitorRunDependencies&&f.monitorRunDependencies(I);0==I&&(null!==Ia&&(clearInterval(Ia),Ia=null),J&&(e=J,J=null,e()))}function b(e){a(e.instance)}function c(e){return Ma().then(function(k){return WebAssembly.instantiate(k,d)}).then(function(k){return k}).then(e,function(k){x("failed to asynchronously prepare wasm: "+k);w(k)})}var d={a:Rb};I++;f.monitorRunDependencies&&f.monitorRunDependencies(I);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return x("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return y||"function"!==typeof WebAssembly.instantiateStreaming||Ja()||K.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(K,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(k){x("wasm streaming compile failed: "+k);x("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.Fb).apply(null,arguments)};var Qb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Qb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Gb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.Hb).apply(null,arguments)};
var Nb=f.__sapp_html5_get_ask_leave_site=function(){return(Nb=f.__sapp_html5_get_ask_leave_site=f.asm.Ib).apply(null,arguments)},Ob=f.__sapp_emsc_begin_drop=function(){return(Ob=f.__sapp_emsc_begin_drop=f.asm.Jb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Kb).apply(null,arguments)};var Pb=f.__sapp_emsc_end_drop=function(){return(Pb=f.__sapp_emsc_end_drop=f.asm.Lb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Mb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Nb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Ob).apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.Pb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Qb).apply(null,arguments)};
f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.Rb).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.Sb).apply(null,arguments)};
var O=f._malloc=function(){return(O=f._malloc=f.asm.Tb).apply(null,arguments)},ra=f.stackSave=function(){return(ra=f.stackSave=f.asm.Ub).apply(null,arguments)},sa=f.stackRestore=function(){return(sa=f.stackRestore=f.asm.Vb).apply(null,arguments)},z=f.stackAlloc=function(){return(z=f.stackAlloc=f.asm.Wb).apply(null,arguments)},Sb;function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}J=function Tb(){Sb||Ub();Sb||(J=Tb)};
function Ub(a){function b(){if(!Sb&&(Sb=!0,f.calledRun=!0,!na)){Na(Da);Na(Ea);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Vb){var c=a,d=f._main;c=c||[];var e=c.length+1,k=z(4*(e+1));E[k>>2]=wa(ca);for(var g=1;g<e;g++)E[(k>>2)+g]=wa(c[g-1]);E[(k>>2)+e]=0;try{var m=d(e,k);if(!(noExitRuntime||0<ka)){if(f.onExit)f.onExit(m);na=!0}da(m,new ja(m))}catch(n){n instanceof ja||"unwind"==n||((c=n)&&"object"===typeof n&&n.stack&&(c=[n,n.stack]),x("exception thrown: "+c),da(1,n))}finally{}}if(f.postRun)for("function"==
typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),Ga.unshift(c);Na(Ga)}}a=a||ba;if(!(0<I)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ha();Na(Ca);0<I||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Ub;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Vb=!0;f.noInitialRun&&(Vb=!1);Ub();
