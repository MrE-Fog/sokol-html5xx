
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in f)f.hasOwnProperty(l)&&(k[l]=f[l]);var aa=[],ba="./this.program";function q(a,b){throw b;}var ca="object"===typeof window,t="function"===typeof importScripts,u="",da,ea,fa,w,x;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)u=t?require("path").dirname(u)+"/":__dirname+"/",da=function(a,b){w||(w=require("fs"));x||(x=require("path"));a=x.normalize(a);return w.readFileSync(a,b?null:"utf8")},fa=function(a){a=da(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||y("Assertion failed: undefined");return a},ea=function(a,b,c){w||(w=require("fs"));x||(x=require("path"));a=x.normalize(a);w.readFile(a,function(d,e){d?c(d):b(e.buffer)})},
1<process.argv.length&&(ba=process.argv[1].replace(/\\/g,"/")),aa=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ha))throw a;}),process.on("unhandledRejection",function(a){throw a;}),q=function(a,b){if(noExitRuntime||0<ia)throw process.exitCode=a,b;b instanceof ha||z("exiting due to exception: "+b);process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(ca||t)t?u=self.location.href:"undefined"!==
typeof document&&document.currentScript&&(u=document.currentScript.src),u=0!==u.indexOf("blob:")?u.substr(0,u.replace(/[?#].*/,"").lastIndexOf("/")+1):"",da=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},t&&(fa=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ea=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==
d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ja=f.print||console.log.bind(console),z=f.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(f[l]=k[l]);k=null;f.arguments&&(aa=f.arguments);f.thisProgram&&(ba=f.thisProgram);f.quit&&(q=f.quit);var A;f.wasmBinary&&(A=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!==typeof WebAssembly&&y("no native wasm support detected");var ka,la=!1;
function ma(a){var b=f["_"+a];b||y("Assertion failed: Cannot call unknown function "+(a+", make sure it is exported"));return b}function na(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var r=(n.length<<2)+1;p=B(r);C(n,D,p,r)}return p},array:function(n){var p=B(n.length);oa.set(n,p);return p}};a=ma(a);var e=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=pa()),e[g]=m(c[g])):e[g]=c[g]}b=a.apply(null,e);b=function(n){0!==h&&qa(h);return n}(b)}
var ra="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function sa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&ra)return ra.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function E(a,b){return a?sa(D,a,b):""}
function C(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function ta(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ua(a){var b=ta(a)+1,c=B(b);C(a,oa,c,b);return c}var va,oa,D,wa,xa,F,ya,G,H;
function za(){var a=ka.buffer;va=a;f.HEAP8=oa=new Int8Array(a);f.HEAP16=wa=new Int16Array(a);f.HEAP32=F=new Int32Array(a);f.HEAPU8=D=new Uint8Array(a);f.HEAPU16=xa=new Uint16Array(a);f.HEAPU32=ya=new Uint32Array(a);f.HEAPF32=G=new Float32Array(a);f.HEAPF64=H=new Float64Array(a)}var Aa,Ba=[],Ca=[],Da=[],Ea=[],Fa=[],ia=0;function Ga(){var a=f.preRun.shift();Ba.unshift(a)}var I=0,Ha=null,J=null;f.preloadedImages={};f.preloadedAudios={};
function y(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";z(a);la=!0;throw new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS=1 for more info.");}function Ia(){return K.startsWith("data:application/octet-stream;base64,")}var K;K="primtypes-sapp-ui.wasm";if(!Ia()){var Ja=K;K=f.locateFile?f.locateFile(Ja,u):u+Ja}function Ka(){var a=K;try{if(a==K&&A)return new Uint8Array(A);if(fa)return fa(a);throw"both async and sync fetching of the wasm failed";}catch(b){y(b)}}
function La(){if(!A&&(ca||t)){if("function"===typeof fetch&&!K.startsWith("file://"))return fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return Ka()});if(ea)return new Promise(function(a,b){ea(K,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ka()})}
function Ma(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.Gc;"number"===typeof c?void 0===b.cc?L(c)():L(c)(b.cc):c(void 0===b.cc?null:b.cc)}}}var Na=[];function L(a){var b=Na[a];b||(a>=Na.length&&(Na.length=a+1),Na[a]=b=Aa.get(a));return b}var Oa=[null,[],[]],Pa={},Qa=0;function Ra(){for(var a=M.length-1;0<=a;--a)Sa(a);M=[];Ta=[]}var Ta=[];function Ua(){if(Qa&&Va.Yb)for(var a=0;a<Ta.length;++a){var b=Ta[a];Ta.splice(a,1);--a;b.Qc.apply(null,b.Cc)}}var M=[];
function Sa(a){var b=M[a];b.target.removeEventListener(b.Rb,b.yc,b.Sb);M.splice(a,1)}function N(a){function b(d){++Qa;Va=a;Ua();a.Ub(d);Ua();--Qa}if(a.Tb)a.yc=b,a.target.addEventListener(a.Rb,b,a.Sb),M.push(a),Wa||(Ea.push(Ra),Wa=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].Rb==a.Rb&&Sa(c--)}function Xa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Wa,Va,Ya,Za,$a,ab,bb,cb,db,eb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function O(a){a=2<a?E(a):a;return eb[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function fb(a){return 0>eb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function gb(a,b,c,d,e,h){Ya||(Ya=Q(256));a={target:O(a),Rb:h,Tb:d,Ub:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Ya;C(Xa(g.target),D,n+0,128);C(m,D,n+128,128);L(d)(e,n,b)&&g.preventDefault()},Sb:c};N(a)}
function hb(a,b,c,d,e,h){Za||(Za=Q(176));a={target:O(a),Yb:!0,Rb:h,Tb:d,Ub:function(g){var m=Za;H[m>>3]=g.timeStamp;var n=m>>2;F[n+2]=g.location;F[n+3]=g.ctrlKey;F[n+4]=g.shiftKey;F[n+5]=g.altKey;F[n+6]=g.metaKey;F[n+7]=g.repeat;F[n+8]=g.charCode;F[n+9]=g.keyCode;F[n+10]=g.which;C(g.key||"",D,m+44,32);C(g.code||"",D,m+76,32);C(g.char||"",D,m+108,32);C(g.locale||"",D,m+140,32);L(d)(e,m,b)&&g.preventDefault()},Sb:c};N(a)}
function ib(a,b,c){H[a>>3]=b.timeStamp;a>>=2;F[a+2]=b.screenX;F[a+3]=b.screenY;F[a+4]=b.clientX;F[a+5]=b.clientY;F[a+6]=b.ctrlKey;F[a+7]=b.shiftKey;F[a+8]=b.altKey;F[a+9]=b.metaKey;wa[2*a+20]=b.button;wa[2*a+21]=b.buttons;F[a+11]=b.movementX;F[a+12]=b.movementY;c=fb(c);F[a+13]=b.clientX-c.left;F[a+14]=b.clientY-c.top}
function R(a,b,c,d,e,h){$a||($a=Q(72));a=O(a);N({target:a,Yb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,Rb:h,Tb:d,Ub:function(g){g=g||event;ib($a,g,a);L(d)(e,$a,b)&&g.preventDefault()},Sb:c})}function jb(a,b,c,d,e){ab||(ab=Q(260));N({target:a,Rb:e,Tb:d,Ub:function(h){h=h||event;var g=ab,m=document.pointerLockElement||document.ec||document.hc||document.fc;F[g>>2]=!!m;var n=m&&m.id?m.id:"";C(Xa(m),D,g+4,128);C(n,D,g+132,128);L(d)(20,g,b)&&h.preventDefault()},Sb:c})}
function kb(a,b,c,d,e){N({target:a,Rb:e,Tb:d,Ub:function(h){h=h||event;L(d)(38,0,b)&&h.preventDefault()},Sb:c})}
function lb(a,b,c,d){bb||(bb=Q(36));a=O(a);N({target:a,Rb:"resize",Tb:d,Ub:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=bb;F[g>>2]=e.detail;F[g+4>>2]=h.clientWidth;F[g+8>>2]=h.clientHeight;F[g+12>>2]=innerWidth;F[g+16>>2]=innerHeight;F[g+20>>2]=outerWidth;F[g+24>>2]=outerHeight;F[g+28>>2]=pageXOffset;F[g+32>>2]=pageYOffset;L(d)(10,g,b)&&e.preventDefault()}}},Sb:c})}
function mb(a,b,c,d,e,h){cb||(cb=Q(1696));a=O(a);N({target:a,Yb:"touchstart"==h||"touchend"==h,Rb:h,Tb:d,Ub:function(g){for(var m,n={},p=g.touches,r=0;r<p.length;++r)m=p[r],m.mc=m.oc=0,n[m.identifier]=m;for(r=0;r<g.changedTouches.length;++r)m=g.changedTouches[r],m.mc=1,n[m.identifier]=m;for(r=0;r<g.targetTouches.length;++r)n[g.targetTouches[r].identifier].oc=1;p=cb;H[p>>3]=g.timeStamp;var v=p>>2;F[v+3]=g.ctrlKey;F[v+4]=g.shiftKey;F[v+5]=g.altKey;F[v+6]=g.metaKey;v+=7;var P=fb(a),qb=0;for(r in n)if(m=
n[r],F[v]=m.identifier,F[v+1]=m.screenX,F[v+2]=m.screenY,F[v+3]=m.clientX,F[v+4]=m.clientY,F[v+5]=m.pageX,F[v+6]=m.pageY,F[v+7]=m.mc,F[v+8]=m.oc,F[v+9]=m.clientX-P.left,F[v+10]=m.clientY-P.top,v+=13,31<++qb)break;F[p+8>>2]=qb;L(d)(e,p,b)&&g.preventDefault()},Sb:c})}function nb(a,b,c,d,e,h){a={target:O(a),Rb:h,Tb:d,Ub:function(g){g=g||event;L(d)(e,0,b)&&g.preventDefault()},Sb:c};N(a)}
function ob(a,b,c,d){db||(db=Q(104));N({target:a,Yb:!0,Rb:"wheel",Tb:d,Ub:function(e){e=e||event;var h=db;ib(h,e,a);H[h+72>>3]=e.deltaX;H[h+80>>3]=e.deltaY;H[h+88>>3]=e.deltaZ;F[h+96>>2]=e.deltaMode;L(d)(9,h,b)&&e.preventDefault()},Sb:c})}
function pb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function rb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function sb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function tb(a){a.Ec=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function ub(a){a.Jc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function vb(a){a.Lc=a.getExtension("WEBGL_multi_draw")}var wb=1,xb=[],S=[],yb=[],zb=[],Ab=[],T=[],Bb=[],Cb=[],Db={},Eb={};function U(a){Fb||(Fb=a)}function Gb(a){for(var b=wb++,c=a.length;c<b;c++)a[c]=null;return b}
function Hb(a,b){a.lc||(a.lc=a.getContext,a.getContext=function(d,e){e=a.lc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.nc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Ib(c,b):0}function Ib(a,b){var c=Gb(Cb),d={Ic:c,attributes:b,version:b.nc,bc:a};a.canvas&&(a.canvas.Bc=d);Cb[c]=d;("undefined"===typeof b.kc||b.kc)&&Jb(d);return c}
function Jb(a){a||(a=V);if(!a.Ac){a.Ac=!0;var b=a.bc;pb(b);rb(b);sb(b);tb(b);ub(b);2<=a.version&&(b.jc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.jc)b.jc=b.getExtension("EXT_disjoint_timer_query");vb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Fb,V,Kb=["default","low-power","high-performance"];
function Lb(a,b,c,d){for(var e=0;e<a;e++){var h=W[c](),g=h&&Gb(d);h?(h.name=g,d[g]=h):U(1282);F[b+4*e>>2]=g}}
function Mb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=W.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>V.version){U(1282);return}c=2*(W.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>V.version){U(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=W.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":U(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:U(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)F[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){U(1280);z("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:U(1280);z("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}F[b>>2]=c}else U(1281)}
function X(a){var b=ta(a)+1,c=Q(b);C(a,D,c,b);return c}function Nb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Ob(a){a-=5120;return 0==a?oa:1==a?D:2==a?wa:4==a?F:6==a?G:5==a||28922==a||28520==a||30779==a||30782==a?ya:xa}function Y(a){var b=W.xc;if(b){var c=b.Xb[a];"number"===typeof c&&(b.Xb[a]=c=W.getUniformLocation(b,b.vc[a]+(0<c?"["+c+"]":"")));return c}U(1282)}for(var Z=[],W,Pb=new Float32Array(288),Qb=0;288>Qb;++Qb)Z[Qb]=Pb.subarray(0,Qb+1);
var Vb={ia:function(){return 0},hb:function(){return 0},jb:function(){},V:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},sa:function(a,b,c){a=O(a);if(!a)return-4;a=fb(a);H[b>>3]=a.width;H[c>>3]=a.height;return 0},eb:function(a,b,c){D.copyWithin(a,b,b+c)},Qa:function(a,b){function c(d){L(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},fb:function(a){var b=D.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);
d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ka.grow(Math.min(2147483648,d)-va.byteLength+65535>>>16);za();var e=1;break a}catch(h){}e=void 0}if(e)return!0}return!1},W:function(a,b,c,d){gb(a,b,c,d,12,"blur");return 0},S:function(a,b,c){a=O(a);if(!a)return-4;a.width=b;a.height=c;return 0},X:function(a,b,c,d){gb(a,b,c,d,13,"focus");return 0},ea:function(a,b,c,d){hb(a,b,c,d,2,"keydown");return 0},ca:function(a,b,c,d){hb(a,b,c,d,1,"keypress");return 0},da:function(a,b,c,d){hb(a,b,c,d,3,"keyup");
return 0},ra:function(a,b,c,d){R(a,b,c,d,5,"mousedown");return 0},ha:function(a,b,c,d){R(a,b,c,d,33,"mouseenter");return 0},ga:function(a,b,c,d){R(a,b,c,d,34,"mouseleave");return 0},la:function(a,b,c,d){R(a,b,c,d,8,"mousemove");return 0},ma:function(a,b,c,d){R(a,b,c,d,6,"mouseup");return 0},Z:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.ec||document.body.hc||document.body.fc))return-1;a=O(a);if(!a)return-4;jb(a,b,c,d,"pointerlockchange");jb(a,b,
c,d,"mozpointerlockchange");jb(a,b,c,d,"webkitpointerlockchange");jb(a,b,c,d,"mspointerlockchange");return 0},Y:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.ec||document.body.hc||document.body.fc))return-1;a=O(a);if(!a)return-4;kb(a,b,c,d,"pointerlockerror");kb(a,b,c,d,"mozpointerlockerror");kb(a,b,c,d,"webkitpointerlockerror");kb(a,b,c,d,"mspointerlockerror");return 0},cb:function(a,b,c,d){lb(a,b,c,d);return 0},_:function(a,b,c,d){mb(a,b,c,d,25,"touchcancel");
return 0},$:function(a,b,c,d){mb(a,b,c,d,23,"touchend");return 0},aa:function(a,b,c,d){mb(a,b,c,d,24,"touchmove");return 0},ba:function(a,b,c,d){mb(a,b,c,d,22,"touchstart");return 0},U:function(a,b,c,d){nb(a,b,c,d,31,"webglcontextlost");return 0},T:function(a,b,c,d){nb(a,b,c,d,32,"webglcontextrestored");return 0},fa:function(a,b,c,d){a=O(a);return"undefined"!==typeof a.onwheel?(ob(a,b,c,d),0):-1},K:function(a,b){b>>=2;b={alpha:!!F[b],depth:!!F[b+1],stencil:!!F[b+2],antialias:!!F[b+3],premultipliedAlpha:!!F[b+
4],preserveDrawingBuffer:!!F[b+5],powerPreference:Kb[F[b+6]],failIfMajorPerformanceCaveat:!!F[b+7],nc:F[b+8],Kc:F[b+9],kc:F[b+10],zc:F[b+11],Mc:F[b+12],Nc:F[b+13]};a=O(a);return!a||b.zc?0:Hb(a,b)},za:function(a,b){a=Cb[a];b=E(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&pb(W);"OES_vertex_array_object"==b&&rb(W);"WEBGL_draw_buffers"==b&&sb(W);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&tb(W);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&ub(W);"WEBGL_multi_draw"==
b&&vb(W);return!!a.bc.getExtension(b)},Na:function(a){a>>=2;for(var b=0;14>b;++b)F[a+b]=0;F[a]=F[a+1]=F[a+3]=F[a+4]=F[a+8]=F[a+10]=1},Ga:function(a){V=Cb[a];f.Dc=W=V&&V.bc;return!a||W?0:-5},ja:function(){return 0},gb:function(a,b,c,d){a=Pa.Hc(a);b=Pa.Fc(a,b,c);F[d>>2]=b;return 0},db:function(){},ib:function(a,b,c,d){for(var e=0,h=0;h<c;h++){var g=F[b>>2],m=F[b+4>>2];b+=8;for(var n=0;n<m;n++){var p=D[g+n],r=Oa[a];0===p||10===p?((1===a?ja:z)(sa(r,0)),r.length=0):r.push(p)}e+=m}F[d>>2]=e;return 0},b:function(a){W.activeTexture(a)},
D:function(a,b){W.attachShader(S[a],T[b])},c:function(a,b){35051==a?W.ic=b:35052==a&&(W.Vb=b);W.bindBuffer(a,xb[b])},h:function(a,b){W.bindFramebuffer(a,yb[b])},G:function(a,b){W.bindRenderbuffer(a,zb[b])},a:function(a,b){W.bindTexture(a,Ab[b])},Q:function(a){W.bindVertexArray(Bb[a])},M:function(a,b,c,d){W.blendColor(a,b,c,d)},N:function(a,b){W.blendEquationSeparate(a,b)},O:function(a,b,c,d){W.blendFuncSeparate(a,b,c,d)},q:function(a,b,c,d,e,h,g,m,n,p){W.blitFramebuffer(a,b,c,d,e,h,g,m,n,p)},Ja:function(a,
b,c,d){2<=V.version?c?W.bufferData(a,D,d,c,b):W.bufferData(a,b,d):W.bufferData(a,c?D.subarray(c,c+b):b,d)},j:function(a,b,c,d){2<=V.version?W.bufferSubData(a,b,D,d,c):W.bufferSubData(a,b,D.subarray(d,d+c))},ub:function(a){W.clear(a)},qa:function(a,b,c,d){W.clearColor(a,b,c,d)},pa:function(a){W.clearDepth(a)},vb:function(a){W.clearStencil(a)},k:function(a,b,c,d){W.colorMask(!!a,!!b,!!c,!!d)},va:function(a){W.compileShader(T[a])},Fa:function(a,b,c,d,e,h,g,m){2<=V.version?W.Vb?W.compressedTexImage2D(a,
b,c,d,e,h,g,m):W.compressedTexImage2D(a,b,c,d,e,h,D,m,g):W.compressedTexImage2D(a,b,c,d,e,h,m?D.subarray(m,m+g):null)},Da:function(a,b,c,d,e,h,g,m,n){W.Vb?W.compressedTexImage3D(a,b,c,d,e,h,g,m,n):W.compressedTexImage3D(a,b,c,d,e,h,g,D,n,m)},Ba:function(){var a=Gb(S),b=W.createProgram();b.name=a;b.ac=b.Zb=b.$b=0;b.dc=1;S[a]=b;return a},xa:function(a){var b=Gb(T);T[b]=W.createShader(a);return b},I:function(a){W.cullFace(a)},Sa:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=xb[d];e&&(W.deleteBuffer(e),
e.name=0,xb[d]=null,d==W.ic&&(W.ic=0),d==W.Vb&&(W.Vb=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=F[b+4*c>>2],e=yb[d];e&&(W.deleteFramebuffer(e),e.name=0,yb[d]=null)}},y:function(a){if(a){var b=S[a];b?(W.deleteProgram(b),b.name=0,S[a]=null):U(1281)}},R:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=zb[d];e&&(W.deleteRenderbuffer(e),e.name=0,zb[d]=null)}},u:function(a){if(a){var b=T[a];b?(W.deleteShader(b),T[a]=null):U(1281)}},Ra:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=Ab[d];
e&&(W.deleteTexture(e),e.name=0,Ab[d]=null)}},Pa:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2];W.deleteVertexArray(Bb[d]);Bb[d]=null}},x:function(a){W.depthFunc(a)},w:function(a){W.depthMask(!!a)},e:function(a){W.disable(a)},P:function(a){W.disableVertexAttribArray(a)},kb:function(a,b,c){W.drawArrays(a,b,c)},lb:function(a,b,c,d){W.drawElements(a,b,c,d)},g:function(a){W.enable(a)},rb:function(a){W.enableVertexAttribArray(a)},J:function(a){W.frontFace(a)},Ka:function(a,b){Lb(a,b,"createBuffer",
xb)},H:function(a,b){Lb(a,b,"createRenderbuffer",zb)},Ha:function(a,b){Lb(a,b,"createTexture",Ab)},Oa:function(a,b){Lb(a,b,"createVertexArray",Bb)},ta:function(a,b){return W.getAttribLocation(S[a],E(b))},d:function(a,b){Mb(a,b)},ya:function(a,b,c,d){a=W.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},C:function(a,b,c){if(c)if(a>=wb)U(1281);else if(a=S[a],35716==b)a=W.getProgramInfoLog(a),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1;else if(35719==
b){if(!a.ac)for(b=0;b<W.getProgramParameter(a,35718);++b)a.ac=Math.max(a.ac,W.getActiveUniform(a,b).name.length+1);F[c>>2]=a.ac}else if(35722==b){if(!a.Zb)for(b=0;b<W.getProgramParameter(a,35721);++b)a.Zb=Math.max(a.Zb,W.getActiveAttrib(a,b).name.length+1);F[c>>2]=a.Zb}else if(35381==b){if(!a.$b)for(b=0;b<W.getProgramParameter(a,35382);++b)a.$b=Math.max(a.$b,W.getActiveUniformBlockName(a,b).length+1);F[c>>2]=a.$b}else F[c>>2]=W.getProgramParameter(a,b);else U(1281)},ua:function(a,b,c,d){a=W.getShaderInfoLog(T[a]);
null===a&&(a="(unknown error)");b=0<b&&d?C(a,D,d,b):0;c&&(F[c>>2]=b)},A:function(a,b,c){c?35716==b?(a=W.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),F[c>>2]=a?a.length+1:0):35720==b?(a=W.getShaderSource(T[a]),F[c>>2]=a?a.length+1:0):F[c>>2]=W.getShaderParameter(T[a],b):U(1281)},Ua:function(a){var b=Db[a];if(!b){switch(a){case 7939:b=W.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=X(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=W.getParameter(a))||
U(1280);b=b&&X(b);break;case 7938:b=W.getParameter(7938);b=2<=V.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=X(b);break;case 35724:b=W.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=X(b);break;default:U(1280)}Db[a]=b}return b},Ta:function(a,b){if(2>V.version)return U(1282),0;var c=Eb[a];if(c)return 0>b||b>=c.length?(U(1281),0):c[b];switch(a){case 7939:return c=W.getSupportedExtensions()||
[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return X(d)}),c=Eb[a]=c,0>b||b>=c.length?(U(1281),0):c[b];default:return U(1280),0}},m:function(a,b){b=E(b);if(a=S[a]){var c=a,d=c.Xb,e=c.wc,h;if(!d)for(c.Xb=d={},c.vc={},h=0;h<W.getProgramParameter(c,35718);++h){var g=W.getActiveUniform(c,h);var m=g.name;g=g.size;var n=Nb(m);n=0<n?m.slice(0,n):m;var p=c.dc;c.dc+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.vc[p++]=n}c=a.Xb;d=0;e=b;h=Nb(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,
h));if((e=a.wc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||W.getUniformLocation(a,b)))return d}else U(1281);return-1},Aa:function(a){a=S[a];W.linkProgram(a);a.Xb=0;a.wc={}},L:function(a,b){W.polygonOffset(a,b)},r:function(a){W.readBuffer(a)},Ia:function(a,b,c,d){W.renderbufferStorage(a,b,c,d)},F:function(a,b,c,d,e){W.renderbufferStorageMultisample(a,b,c,d,e)},s:function(a,b,c,d){W.scissor(a,b,c,d)},wa:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?F[d+4*h>>2]:-1;e+=E(F[c+4*h>>2],0>g?void 0:g)}W.shaderSource(T[a],
e)},Ma:function(a,b,c){W.stencilFunc(a,b,c)},oa:function(a,b,c,d){W.stencilFuncSeparate(a,b,c,d)},v:function(a){W.stencilMask(a)},La:function(a,b,c){W.stencilOp(a,b,c)},na:function(a,b,c,d){W.stencilOpSeparate(a,b,c,d)},Ea:function(a,b,c,d,e,h,g,m,n){if(2<=V.version)if(W.Vb)W.texImage2D(a,b,c,d,e,h,g,m,n);else if(n){var p=Ob(m);W.texImage2D(a,b,c,d,e,h,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else W.texImage2D(a,b,c,d,e,h,g,m,null);else{p=W;var r=p.texImage2D;if(n){var v=Ob(m),P=31-Math.clz32(v.BYTES_PER_ELEMENT);
n=v.subarray(n>>P,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[g-6402]||1)*(1<<P)+4-1&-4)>>P)}else n=null;r.call(p,a,b,c,d,e,h,g,m,n)}},Ca:function(a,b,c,d,e,h,g,m,n,p){if(W.Vb)W.texImage3D(a,b,c,d,e,h,g,m,n,p);else if(p){var r=Ob(n);W.texImage3D(a,b,c,d,e,h,g,m,n,r,p>>31-Math.clz32(r.BYTES_PER_ELEMENT))}else W.texImage3D(a,b,c,d,e,h,g,m,n,null)},E:function(a,b,c){W.texParameterf(a,b,c)},f:function(a,b,c){W.texParameteri(a,b,c)},qb:function(a,b,c){if(2<=V.version)W.uniform1fv(Y(a),
G,c>>2,b);else{if(288>=b)for(var d=Z[b-1],e=0;e<b;++e)d[e]=G[c+4*e>>2];else d=G.subarray(c>>2,c+4*b>>2);W.uniform1fv(Y(a),d)}},B:function(a,b){W.uniform1i(Y(a),b)},pb:function(a,b,c){if(2<=V.version)W.uniform2fv(Y(a),G,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],e=0;e<2*b;e+=2)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2];else d=G.subarray(c>>2,c+8*b>>2);W.uniform2fv(Y(a),d)}},ob:function(a,b,c){if(2<=V.version)W.uniform3fv(Y(a),G,c>>2,3*b);else{if(96>=b)for(var d=Z[3*b-1],e=0;e<3*b;e+=3)d[e]=G[c+4*e>>
2],d[e+1]=G[c+(4*e+4)>>2],d[e+2]=G[c+(4*e+8)>>2];else d=G.subarray(c>>2,c+12*b>>2);W.uniform3fv(Y(a),d)}},nb:function(a,b,c){if(2<=V.version)W.uniform4fv(Y(a),G,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],e=G;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=G.subarray(c>>2,c+16*b>>2);W.uniform4fv(Y(a),d)}},mb:function(a,b,c,d){if(2<=V.version)W.uniformMatrix4fv(Y(a),!!c,G,d>>2,16*b);else{if(18>=b){var e=Z[16*b-1],h=G;d>>=2;for(var g=0;g<16*b;g+=16){var m=
d+g;e[g]=h[m];e[g+1]=h[m+1];e[g+2]=h[m+2];e[g+3]=h[m+3];e[g+4]=h[m+4];e[g+5]=h[m+5];e[g+6]=h[m+6];e[g+7]=h[m+7];e[g+8]=h[m+8];e[g+9]=h[m+9];e[g+10]=h[m+10];e[g+11]=h[m+11];e[g+12]=h[m+12];e[g+13]=h[m+13];e[g+14]=h[m+14];e[g+15]=h[m+15]}}else e=G.subarray(d>>2,d+64*b>>2);W.uniformMatrix4fv(Y(a),!!c,e)}},l:function(a){a=S[a];W.useProgram(a);W.xc=a},sb:function(a,b){W.vertexAttribDivisor(a,b)},tb:function(a,b,c,d,e,h){W.vertexAttribPointer(a,b,c,!!d,e,h)},t:function(a,b,c,d){W.viewport(a,b,c,d)},bb:function(){f.pc=
function(a){0!=Rb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.pc)},ab:function(){f.uc=function(a){a=a.clipboardData.getData("text");na("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.uc)},$a:function(a){f.Oc=[];a=E(a);a=document.getElementById(a);f.qc=function(b){b.stopPropagation();b.preventDefault()};f.rc=function(b){b.stopPropagation();b.preventDefault()};f.sc=function(b){b.stopPropagation();b.preventDefault()};f.tc=function(b){b.stopPropagation();
b.preventDefault();var c=b.dataTransfer.files;f.Pc=c;Sb(c.length);var d;for(d=0;d<c.length;d++)na("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Tb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.qc,!1);a.addEventListener("dragleave",f.rc,!1);a.addEventListener("dragover",f.sc,!1);a.addEventListener("drop",f.tc,!1)},Wa:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},p:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";
a.autocapitalize="none";a.addEventListener("focusout",function(){Ub()});document.body.append(a)},o:function(){document.getElementById("_sokol_app_input_element").focus()},wb:function(a){a=E(a);f.Wb=document.getElementById(a);f.Wb||console.log("sokol_app.h: invalid target:"+a);f.Wb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},_a:function(){window.removeEventListener("beforeunload",f.pc)},Za:function(){window.removeEventListener("paste",f.uc)},Ya:function(a){a=
E(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.qc);a.removeEventListener("dragleave",f.rc);a.removeEventListener("dragover",f.sc);a.removeEventListener("drop",f.tc)},z:function(){f.Wb&&f.Wb.requestPointerLock&&f.Wb.requestPointerLock()},Va:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(D.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";
a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},n:function(){document.getElementById("_sokol_app_input_element").blur()},Xa:function(a){a=E(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");
document.body.removeChild(b)},ka:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){f.asm=e.exports;ka=f.asm.xb;za();Aa=f.asm.Qb;Ca.unshift(f.asm.yb);I--;f.monitorRunDependencies&&f.monitorRunDependencies(I);0==I&&(null!==Ha&&(clearInterval(Ha),Ha=null),J&&(e=J,J=null,e()))}function b(e){a(e.instance)}function c(e){return La().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(e,function(h){z("failed to asynchronously prepare wasm: "+h);y(h)})}var d={a:Vb};I++;f.monitorRunDependencies&&f.monitorRunDependencies(I);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return z("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return A||"function"!==typeof WebAssembly.instantiateStreaming||Ia()||K.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(K,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){z("wasm streaming compile failed: "+h);z("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.yb).apply(null,arguments)};var Q=f._malloc=function(){return(Q=f._malloc=f.asm.zb).apply(null,arguments)},Ub=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Ub=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Ab).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.Bb).apply(null,arguments)};
var Rb=f.__sapp_html5_get_ask_leave_site=function(){return(Rb=f.__sapp_html5_get_ask_leave_site=f.asm.Cb).apply(null,arguments)},Sb=f.__sapp_emsc_begin_drop=function(){return(Sb=f.__sapp_emsc_begin_drop=f.asm.Db).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Eb).apply(null,arguments)};var Tb=f.__sapp_emsc_end_drop=function(){return(Tb=f.__sapp_emsc_end_drop=f.asm.Fb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Gb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Hb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Ib).apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.Jb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Kb).apply(null,arguments)};
f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.Lb).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.Mb).apply(null,arguments)};
var pa=f.stackSave=function(){return(pa=f.stackSave=f.asm.Nb).apply(null,arguments)},qa=f.stackRestore=function(){return(qa=f.stackRestore=f.asm.Ob).apply(null,arguments)},B=f.stackAlloc=function(){return(B=f.stackAlloc=f.asm.Pb).apply(null,arguments)},Wb;function ha(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}J=function Xb(){Wb||Yb();Wb||(J=Xb)};
function Yb(a){function b(){if(!Wb&&(Wb=!0,f.calledRun=!0,!la)){Ma(Ca);Ma(Da);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Zb){var c=a,d=f._main;c=c||[];var e=c.length+1,h=B(4*(e+1));F[h>>2]=ua(ba);for(var g=1;g<e;g++)F[(h>>2)+g]=ua(c[g-1]);F[(h>>2)+e]=0;try{var m=d(e,h);if(!(noExitRuntime||0<ia)){if(f.onExit)f.onExit(m);la=!0}q(m,new ha(m))}catch(n){n instanceof ha||"unwind"==n||q(1,n)}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),
Fa.unshift(c);Ma(Fa)}}a=a||aa;if(!(0<I)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ga();Ma(Ba);0<I||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Yb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Zb=!0;f.noInitialRun&&(Zb=!1);Yb();
