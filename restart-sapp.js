
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var k={},m;for(m in f)f.hasOwnProperty(m)&&(k[m]=f[m]);var aa=[],ba="./this.program";function ca(a,b){throw b;}var da="object"===typeof window,q="function"===typeof importScripts,ea="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node,t="",fa,ha,ia,u,w;
if(ea)t=q?require("path").dirname(t)+"/":__dirname+"/",fa=function(a,b){u||(u=require("fs"));w||(w=require("path"));a=w.normalize(a);return u.readFileSync(a,b?null:"utf8")},ia=function(a){a=fa(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||x("Assertion failed: undefined");return a},ha=function(a,b,c){u||(u=require("fs"));w||(w=require("path"));a=w.normalize(a);u.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(ba=process.argv[1].replace(/\\/g,"/")),aa=process.argv.slice(2),
"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof ja))throw a;}),process.on("unhandledRejection",function(a){throw a;}),ca=function(a,b){if(noExitRuntime||0<ka)throw process.exitCode=a,b;b instanceof ja||y("exiting due to exception: "+b);process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(da||q)q?t=self.location.href:"undefined"!==typeof document&&document.currentScript&&(t=document.currentScript.src),t=0!==t.indexOf("blob:")?
t.substr(0,t.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},q&&(ia=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ha=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};
var la=f.print||console.log.bind(console),y=f.printErr||console.warn.bind(console);for(m in k)k.hasOwnProperty(m)&&(f[m]=k[m]);k=null;f.arguments&&(aa=f.arguments);f.thisProgram&&(ba=f.thisProgram);f.quit&&(ca=f.quit);var z;f.wasmBinary&&(z=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!==typeof WebAssembly&&x("no native wasm support detected");var ma,na=!1;
function oa(a){var b=f["_"+a];b||x("Assertion failed: Cannot call unknown function "+(a+", make sure it is exported"));return b}function pa(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var r=(n.length<<2)+1;p=A(r);B(n,C,p,r)}return p},array:function(n){var p=A(n.length);D.set(n,p);return p}};a=oa(a);var e=[],h=0;if(c)for(var g=0;g<c.length;g++){var l=d[b[g]];l?(0===h&&(h=qa()),e[g]=l(c[g])):e[g]=c[g]}b=a.apply(null,e);b=function(n){0!==h&&ra(h);return n}(b)}
var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ta(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&sa)return sa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var h=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function E(a,b){return a?ta(C,a,b):""}
function B(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var l=a.charCodeAt(++h);g=65536+((g&1023)<<10)|l&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function ua(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function va(a){var b=ua(a)+1,c=A(b);B(a,D,c,b);return c}var wa,D,C,xa,ya,F,za,G,H;
function Aa(){var a=ma.buffer;wa=a;f.HEAP8=D=new Int8Array(a);f.HEAP16=xa=new Int16Array(a);f.HEAP32=F=new Int32Array(a);f.HEAPU8=C=new Uint8Array(a);f.HEAPU16=ya=new Uint16Array(a);f.HEAPU32=za=new Uint32Array(a);f.HEAPF32=G=new Float32Array(a);f.HEAPF64=H=new Float64Array(a)}var Ba,Ca=[],Da=[],Ea=[],Fa=[],Ga=[],ka=0;function Ha(){var a=f.preRun.shift();Ca.unshift(a)}var I=0,Ia=null,J=null;f.preloadedImages={};f.preloadedAudios={};
function x(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";y(a);na=!0;throw new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS=1 for more info.");}function Ja(){return K.startsWith("data:application/octet-stream;base64,")}var K;K="restart-sapp.wasm";if(!Ja()){var Ka=K;K=f.locateFile?f.locateFile(Ka,t):t+Ka}function La(){var a=K;try{if(a==K&&z)return new Uint8Array(z);if(ia)return ia(a);throw"both async and sync fetching of the wasm failed";}catch(b){x(b)}}
function Ma(){if(!z&&(da||q)){if("function"===typeof fetch&&!K.startsWith("file://"))return fetch(K,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+K+"'";return a.arrayBuffer()}).catch(function(){return La()});if(ha)return new Promise(function(a,b){ha(K,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return La()})}
function Na(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.Rc;"number"===typeof c?void 0===b.oc?L(c)():L(c)(b.oc):c(void 0===b.oc?null:b.oc)}}}var Oa=[];function L(a){var b=Oa[a];b||(a>=Oa.length&&(Oa.length=a+1),Oa[a]=b=Ba.get(a));return b}var Pa=[null,[],[]],Qa={},Ra=0;function Sa(){for(var a=M.length-1;0<=a;--a)Ta(a);M=[];Ua=[]}var Ua=[];function Va(){if(Ra&&Wa.jc)for(var a=0;a<Ua.length;++a){var b=Ua[a];Ua.splice(a,1);--a;b.ad.apply(null,b.Nc)}}var M=[];
function Ta(a){var b=M[a];b.target.removeEventListener(b.ac,b.Jc,b.bc);M.splice(a,1)}function N(a){function b(d){++Ra;Wa=a;Va();a.dc(d);Va();--Ra}if(a.cc)a.Jc=b,a.target.addEventListener(a.ac,b,a.bc),M.push(a),Xa||(Fa.push(Sa),Xa=!0);else for(var c=0;c<M.length;++c)M[c].target==a.target&&M[c].ac==a.ac&&Ta(c--)}function Ya(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Xa,Wa,Za,$a,ab,bb,cb,db,eb,fb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function O(a){a=2<a?E(a):a;return fb[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function gb(a){return 0>fb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var hb;hb=ea?function(){var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:function(){return performance.now()};
function ib(a,b,c,d,e,h){Za||(Za=P(256));a={target:O(a),ac:h,cc:d,dc:function(g){g=g||event;var l=g.target.id?g.target.id:"",n=Za;B(Ya(g.target),C,n+0,128);B(l,C,n+128,128);L(d)(e,n,b)&&g.preventDefault()},bc:c};N(a)}
function jb(a,b,c,d,e,h){$a||($a=P(176));a={target:O(a),jc:!0,ac:h,cc:d,dc:function(g){var l=$a;H[l>>3]=g.timeStamp;var n=l>>2;F[n+2]=g.location;F[n+3]=g.ctrlKey;F[n+4]=g.shiftKey;F[n+5]=g.altKey;F[n+6]=g.metaKey;F[n+7]=g.repeat;F[n+8]=g.charCode;F[n+9]=g.keyCode;F[n+10]=g.which;B(g.key||"",C,l+44,32);B(g.code||"",C,l+76,32);B(g.char||"",C,l+108,32);B(g.locale||"",C,l+140,32);L(d)(e,l,b)&&g.preventDefault()},bc:c};N(a)}
function kb(a,b,c){H[a>>3]=b.timeStamp;a>>=2;F[a+2]=b.screenX;F[a+3]=b.screenY;F[a+4]=b.clientX;F[a+5]=b.clientY;F[a+6]=b.ctrlKey;F[a+7]=b.shiftKey;F[a+8]=b.altKey;F[a+9]=b.metaKey;xa[2*a+20]=b.button;xa[2*a+21]=b.buttons;F[a+11]=b.movementX;F[a+12]=b.movementY;c=gb(c);F[a+13]=b.clientX-c.left;F[a+14]=b.clientY-c.top}
function Q(a,b,c,d,e,h){ab||(ab=P(72));a=O(a);N({target:a,jc:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,ac:h,cc:d,dc:function(g){g=g||event;kb(ab,g,a);L(d)(e,ab,b)&&g.preventDefault()},bc:c})}function lb(a,b,c,d,e){bb||(bb=P(260));N({target:a,ac:e,cc:d,dc:function(h){h=h||event;var g=bb,l=document.pointerLockElement||document.qc||document.sc||document.rc;F[g>>2]=!!l;var n=l&&l.id?l.id:"";B(Ya(l),C,g+4,128);B(n,C,g+132,128);L(d)(20,g,b)&&h.preventDefault()},bc:c})}
function mb(a,b,c,d,e){N({target:a,ac:e,cc:d,dc:function(h){h=h||event;L(d)(38,0,b)&&h.preventDefault()},bc:c})}
function nb(a,b,c,d){cb||(cb=P(36));a=O(a);N({target:a,ac:"resize",cc:d,dc:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=cb;F[g>>2]=e.detail;F[g+4>>2]=h.clientWidth;F[g+8>>2]=h.clientHeight;F[g+12>>2]=innerWidth;F[g+16>>2]=innerHeight;F[g+20>>2]=outerWidth;F[g+24>>2]=outerHeight;F[g+28>>2]=pageXOffset;F[g+32>>2]=pageYOffset;L(d)(10,g,b)&&e.preventDefault()}}},bc:c})}
function ob(a,b,c,d,e,h){db||(db=P(1696));a=O(a);N({target:a,jc:"touchstart"==h||"touchend"==h,ac:h,cc:d,dc:function(g){for(var l,n={},p=g.touches,r=0;r<p.length;++r)l=p[r],l.xc=l.zc=0,n[l.identifier]=l;for(r=0;r<g.changedTouches.length;++r)l=g.changedTouches[r],l.xc=1,n[l.identifier]=l;for(r=0;r<g.targetTouches.length;++r)n[g.targetTouches[r].identifier].zc=1;p=db;H[p>>3]=g.timeStamp;var v=p>>2;F[v+3]=g.ctrlKey;F[v+4]=g.shiftKey;F[v+5]=g.altKey;F[v+6]=g.metaKey;v+=7;var R=gb(a),vb=0;for(r in n)if(l=
n[r],F[v]=l.identifier,F[v+1]=l.screenX,F[v+2]=l.screenY,F[v+3]=l.clientX,F[v+4]=l.clientY,F[v+5]=l.pageX,F[v+6]=l.pageY,F[v+7]=l.xc,F[v+8]=l.zc,F[v+9]=l.clientX-R.left,F[v+10]=l.clientY-R.top,v+=13,31<++vb)break;F[p+8>>2]=vb;L(d)(e,p,b)&&g.preventDefault()},bc:c})}function pb(a,b,c,d,e,h){a={target:O(a),ac:h,cc:d,dc:function(g){g=g||event;L(d)(e,0,b)&&g.preventDefault()},bc:c};N(a)}
function qb(a,b,c,d){eb||(eb=P(104));N({target:a,jc:!0,ac:"wheel",cc:d,dc:function(e){e=e||event;var h=eb;kb(h,e,a);H[h+72>>3]=e.deltaX;H[h+80>>3]=e.deltaY;H[h+88>>3]=e.deltaZ;F[h+96>>2]=e.deltaMode;L(d)(9,h,b)&&e.preventDefault()},bc:c})}
function rb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function sb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function tb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function ub(a){a.Pc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function wb(a){a.Uc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function xb(a){a.Wc=a.getExtension("WEBGL_multi_draw")}var yb=1,zb=[],S=[],Ab=[],Bb=[],Cb=[],T=[],Db=[],Eb=[],Fb={},Gb={};function U(a){Hb||(Hb=a)}function Ib(a){for(var b=yb++,c=a.length;c<b;c++)a[c]=null;return b}
function Jb(a,b){a.wc||(a.wc=a.getContext,a.getContext=function(d,e){e=a.wc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.yc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Kb(c,b):0}function Kb(a,b){var c=Ib(Eb),d={Tc:c,attributes:b,version:b.yc,nc:a};a.canvas&&(a.canvas.Mc=d);Eb[c]=d;("undefined"===typeof b.vc||b.vc)&&Lb(d);return c}
function Lb(a){a||(a=V);if(!a.Lc){a.Lc=!0;var b=a.nc;rb(b);sb(b);tb(b);ub(b);wb(b);2<=a.version&&(b.uc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.uc)b.uc=b.getExtension("EXT_disjoint_timer_query");xb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Hb,V,Mb=["default","low-power","high-performance"],Nb={};
function Ob(){if(!Pb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ba||"./this.program"},b;for(b in Nb)void 0===Nb[b]?delete a[b]:a[b]=Nb[b];var c=[];for(b in a)c.push(b+"="+a[b]);Pb=c}return Pb}var Pb;function Qb(a,b,c,d){for(var e=0;e<a;e++){var h=W[c](),g=h&&Ib(d);h?(h.name=g,d[g]=h):U(1282);F[b+4*e>>2]=g}}
function Rb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=W.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>V.version){U(1282);return}c=2*(W.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>V.version){U(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=W.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":U(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:U(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)F[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){U(1280);y("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:U(1280);y("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}F[b>>2]=c}else U(1281)}
function X(a){var b=ua(a)+1,c=P(b);B(a,C,c,b);return c}function Sb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Tb(a){a-=5120;return 0==a?D:1==a?C:2==a?xa:4==a?F:6==a?G:5==a||28922==a||28520==a||30779==a||30782==a?za:ya}function Y(a){var b=W.Ic;if(b){var c=b.ic[a];"number"===typeof c&&(b.ic[a]=c=W.getUniformLocation(b,b.Gc[a]+(0<c?"["+c+"]":"")));return c}U(1282)}for(var Z=[],W,Ub=new Float32Array(288),Vb=0;288>Vb;++Vb)Z[Vb]=Ub.subarray(0,Vb+1);
var ec={ka:function(){return 0},lb:function(){return 0},nb:function(){},hb:function(){x("")},T:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ca:function(a,b,c){a=O(a);if(!a)return-4;a=gb(a);H[b>>3]=a.width;H[c>>3]=a.height;return 0},ja:hb,fb:function(a,b,c){C.copyWithin(a,b,b+c)},Qa:function(a,b){function c(d){L(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},gb:function(a){var b=C.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*
(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ma.grow(Math.min(2147483648,d)-wa.byteLength+65535>>>16);Aa();var e=1;break a}catch(h){}e=void 0}if(e)return!0}return!1},W:function(a,b,c,d){ib(a,b,c,d,12,"blur");return 0},R:function(a,b,c){a=O(a);if(!a)return-4;a.width=b;a.height=c;return 0},X:function(a,b,c,d){ib(a,b,c,d,13,"focus");return 0},fa:function(a,b,c,d){jb(a,b,c,d,2,"keydown");return 0},da:function(a,b,c,d){jb(a,b,c,d,1,"keypress");return 0},ea:function(a,
b,c,d){jb(a,b,c,d,3,"keyup");return 0},pa:function(a,b,c,d){Q(a,b,c,d,5,"mousedown");return 0},ia:function(a,b,c,d){Q(a,b,c,d,33,"mouseenter");return 0},ha:function(a,b,c,d){Q(a,b,c,d,34,"mouseleave");return 0},la:function(a,b,c,d){Q(a,b,c,d,8,"mousemove");return 0},oa:function(a,b,c,d){Q(a,b,c,d,6,"mouseup");return 0},Z:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.qc||document.body.sc||document.body.rc))return-1;a=O(a);if(!a)return-4;lb(a,b,c,
d,"pointerlockchange");lb(a,b,c,d,"mozpointerlockchange");lb(a,b,c,d,"webkitpointerlockchange");lb(a,b,c,d,"mspointerlockchange");return 0},Y:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.qc||document.body.sc||document.body.rc))return-1;a=O(a);if(!a)return-4;mb(a,b,c,d,"pointerlockerror");mb(a,b,c,d,"mozpointerlockerror");mb(a,b,c,d,"webkitpointerlockerror");mb(a,b,c,d,"mspointerlockerror");return 0},bb:function(a,b,c,d){nb(a,b,c,d);return 0},_:function(a,b,c,d){ob(a,
b,c,d,25,"touchcancel");return 0},$:function(a,b,c,d){ob(a,b,c,d,23,"touchend");return 0},aa:function(a,b,c,d){ob(a,b,c,d,24,"touchmove");return 0},ba:function(a,b,c,d){ob(a,b,c,d,22,"touchstart");return 0},V:function(a,b,c,d){pb(a,b,c,d,31,"webglcontextlost");return 0},U:function(a,b,c,d){pb(a,b,c,d,32,"webglcontextrestored");return 0},ga:function(a,b,c,d){a=O(a);return"undefined"!==typeof a.onwheel?(qb(a,b,c,d),0):-1},F:function(a,b){b>>=2;b={alpha:!!F[b],depth:!!F[b+1],stencil:!!F[b+2],antialias:!!F[b+
3],premultipliedAlpha:!!F[b+4],preserveDrawingBuffer:!!F[b+5],powerPreference:Mb[F[b+6]],failIfMajorPerformanceCaveat:!!F[b+7],yc:F[b+8],Vc:F[b+9],vc:F[b+10],Kc:F[b+11],Xc:F[b+12],Yc:F[b+13]};a=O(a);return!a||b.Kc?0:Jb(a,b)},Eb:function(a,b){a=Eb[a];b=E(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&rb(W);"OES_vertex_array_object"==b&&sb(W);"WEBGL_draw_buffers"==b&&tb(W);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&ub(W);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==
b&&wb(W);"WEBGL_multi_draw"==b&&xb(W);return!!a.nc.getExtension(b)},Na:function(a){a>>=2;for(var b=0;14>b;++b)F[a+b]=0;F[a]=F[a+1]=F[a+3]=F[a+4]=F[a+8]=F[a+10]=1},Ca:function(a){V=Eb[a];f.Oc=W=V&&V.nc;return!a||W?0:-5},ib:function(a,b){var c=0;Ob().forEach(function(d,e){var h=b+c;e=F[a+4*e>>2]=h;for(h=0;h<d.length;++h)D[e++>>0]=d.charCodeAt(h);D[e>>0]=0;c+=d.length+1});return 0},jb:function(a,b){var c=Ob();F[a>>2]=c.length;var d=0;c.forEach(function(e){d+=e.length+1});F[b>>2]=d;return 0},ma:function(){return 0},
kb:function(a,b,c,d){a=Qa.Sc(a);b=Qa.Qc(a,b,c);F[d>>2]=b;return 0},eb:function(){},mb:function(a,b,c,d){for(var e=0,h=0;h<c;h++){var g=F[b>>2],l=F[b+4>>2];b+=8;for(var n=0;n<l;n++){var p=C[g+n],r=Pa[a];0===p||10===p?((1===a?la:y)(ta(r,0)),r.length=0):r.push(p)}e+=l}F[d>>2]=e;return 0},b:function(a){W.activeTexture(a)},D:function(a,b){W.attachShader(S[a],T[b])},c:function(a,b){35051==a?W.tc=b:35052==a&&(W.fc=b);W.bindBuffer(a,zb[b])},h:function(a,b){W.bindFramebuffer(a,Ab[b])},H:function(a,b){W.bindRenderbuffer(a,
Bb[b])},a:function(a,b){W.bindTexture(a,Cb[b])},Q:function(a){W.bindVertexArray(Db[a])},M:function(a,b,c,d){W.blendColor(a,b,c,d)},N:function(a,b){W.blendEquationSeparate(a,b)},O:function(a,b,c,d){W.blendFuncSeparate(a,b,c,d)},q:function(a,b,c,d,e,h,g,l,n,p){W.blitFramebuffer(a,b,c,d,e,h,g,l,n,p)},La:function(a,b,c,d){2<=V.version?c?W.bufferData(a,C,d,c,b):W.bufferData(a,b,d):W.bufferData(a,c?C.subarray(c,c+b):b,d)},j:function(a,b,c,d){2<=V.version?W.bufferSubData(a,b,C,d,c):W.bufferSubData(a,b,C.subarray(d,
d+c))},Cb:function(a){W.clear(a)},ta:function(a,b,c,d){W.clearColor(a,b,c,d)},sa:function(a){W.clearDepth(a)},Db:function(a){W.clearStencil(a)},k:function(a,b,c,d){W.colorMask(!!a,!!b,!!c,!!d)},ya:function(a){W.compileShader(T[a])},Ia:function(a,b,c,d,e,h,g,l){2<=V.version?W.fc?W.compressedTexImage2D(a,b,c,d,e,h,g,l):W.compressedTexImage2D(a,b,c,d,e,h,C,l,g):W.compressedTexImage2D(a,b,c,d,e,h,l?C.subarray(l,l+g):null)},Ga:function(a,b,c,d,e,h,g,l,n){W.fc?W.compressedTexImage3D(a,b,c,d,e,h,g,l,n):
W.compressedTexImage3D(a,b,c,d,e,h,g,C,n,l)},Ea:function(){var a=Ib(S),b=W.createProgram();b.name=a;b.mc=b.kc=b.lc=0;b.pc=1;S[a]=b;return a},Aa:function(a){var b=Ib(T);T[b]=W.createShader(a);return b},J:function(a){W.cullFace(a)},Ua:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=zb[d];e&&(W.deleteBuffer(e),e.name=0,zb[d]=null,d==W.tc&&(W.tc=0),d==W.fc&&(W.fc=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=F[b+4*c>>2],e=Ab[d];e&&(W.deleteFramebuffer(e),e.name=0,Ab[d]=null)}},w:function(a){if(a){var b=
S[a];b?(W.deleteProgram(b),b.name=0,S[a]=null):U(1281)}},S:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=Bb[d];e&&(W.deleteRenderbuffer(e),e.name=0,Bb[d]=null)}},s:function(a){if(a){var b=T[a];b?(W.deleteShader(b),T[a]=null):U(1281)}},Ta:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2],e=Cb[d];e&&(W.deleteTexture(e),e.name=0,Cb[d]=null)}},Sa:function(a,b){for(var c=0;c<a;c++){var d=F[b+4*c>>2];W.deleteVertexArray(Db[d]);Db[d]=null}},v:function(a){W.depthFunc(a)},u:function(a){W.depthMask(!!a)},
e:function(a){W.disable(a)},P:function(a){W.disableVertexAttribArray(a)},sb:function(a,b,c){W.drawArrays(a,b,c)},tb:function(a,b,c,d){W.drawElements(a,b,c,d)},g:function(a){W.enable(a)},zb:function(a){W.enableVertexAttribArray(a)},K:function(a){W.frontFace(a)},Ma:function(a,b){Qb(a,b,"createBuffer",zb)},I:function(a,b){Qb(a,b,"createRenderbuffer",Bb)},Ja:function(a,b){Qb(a,b,"createTexture",Cb)},Ra:function(a,b){Qb(a,b,"createVertexArray",Db)},wa:function(a,b){return W.getAttribLocation(S[a],E(b))},
d:function(a,b){Rb(a,b)},Ba:function(a,b,c,d){a=W.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,C,d,b):0;c&&(F[c>>2]=b)},C:function(a,b,c){if(c)if(a>=yb)U(1281);else if(a=S[a],35716==b)a=W.getProgramInfoLog(a),null===a&&(a="(unknown error)"),F[c>>2]=a.length+1;else if(35719==b){if(!a.mc)for(b=0;b<W.getProgramParameter(a,35718);++b)a.mc=Math.max(a.mc,W.getActiveUniform(a,b).name.length+1);F[c>>2]=a.mc}else if(35722==b){if(!a.kc)for(b=0;b<W.getProgramParameter(a,35721);++b)a.kc=
Math.max(a.kc,W.getActiveAttrib(a,b).name.length+1);F[c>>2]=a.kc}else if(35381==b){if(!a.lc)for(b=0;b<W.getProgramParameter(a,35382);++b)a.lc=Math.max(a.lc,W.getActiveUniformBlockName(a,b).length+1);F[c>>2]=a.lc}else F[c>>2]=W.getProgramParameter(a,b);else U(1281)},xa:function(a,b,c,d){a=W.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?B(a,C,d,b):0;c&&(F[c>>2]=b)},A:function(a,b,c){c?35716==b?(a=W.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),F[c>>2]=a?a.length+1:0):35720==
b?(a=W.getShaderSource(T[a]),F[c>>2]=a?a.length+1:0):F[c>>2]=W.getShaderParameter(T[a],b):U(1281)},Wa:function(a){var b=Fb[a];if(!b){switch(a){case 7939:b=W.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=X(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=W.getParameter(a))||U(1280);b=b&&X(b);break;case 7938:b=W.getParameter(7938);b=2<=V.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=X(b);break;case 35724:b=W.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=X(b);break;default:U(1280)}Fb[a]=b}return b},Va:function(a,b){if(2>V.version)return U(1282),0;var c=Gb[a];if(c)return 0>b||b>=c.length?(U(1281),0):c[b];switch(a){case 7939:return c=W.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return X(d)}),c=Gb[a]=c,0>b||b>=c.length?(U(1281),0):c[b];default:return U(1280),0}},m:function(a,b){b=E(b);if(a=S[a]){var c=a,d=c.ic,e=c.Hc,h;
if(!d)for(c.ic=d={},c.Gc={},h=0;h<W.getProgramParameter(c,35718);++h){var g=W.getActiveUniform(c,h);var l=g.name;g=g.size;var n=Sb(l);n=0<n?l.slice(0,n):l;var p=c.pc;c.pc+=g;e[n]=[g,p];for(l=0;l<g;++l)d[p]=l,c.Gc[p++]=n}c=a.ic;d=0;e=b;h=Sb(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.Hc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||W.getUniformLocation(a,b)))return d}else U(1281);return-1},Da:function(a){a=S[a];W.linkProgram(a);a.ic=0;a.Hc={}},L:function(a,b){W.polygonOffset(a,b)},r:function(a){W.readBuffer(a)},
Ka:function(a,b,c,d){W.renderbufferStorage(a,b,c,d)},G:function(a,b,c,d,e){W.renderbufferStorageMultisample(a,b,c,d,e)},ua:function(a,b,c,d){W.scissor(a,b,c,d)},za:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?F[d+4*h>>2]:-1;e+=E(F[c+4*h>>2],0>g?void 0:g)}W.shaderSource(T[a],e)},Pa:function(a,b,c){W.stencilFunc(a,b,c)},ra:function(a,b,c,d){W.stencilFuncSeparate(a,b,c,d)},t:function(a){W.stencilMask(a)},Oa:function(a,b,c){W.stencilOp(a,b,c)},qa:function(a,b,c,d){W.stencilOpSeparate(a,b,c,d)},
Ha:function(a,b,c,d,e,h,g,l,n){if(2<=V.version)if(W.fc)W.texImage2D(a,b,c,d,e,h,g,l,n);else if(n){var p=Tb(l);W.texImage2D(a,b,c,d,e,h,g,l,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else W.texImage2D(a,b,c,d,e,h,g,l,null);else{p=W;var r=p.texImage2D;if(n){var v=Tb(l),R=31-Math.clz32(v.BYTES_PER_ELEMENT);n=v.subarray(n>>R,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[g-6402]||1)*(1<<R)+4-1&-4)>>R)}else n=null;r.call(p,a,b,c,d,e,h,g,l,n)}},Fa:function(a,b,c,d,e,h,g,l,n,p){if(W.fc)W.texImage3D(a,
b,c,d,e,h,g,l,n,p);else if(p){var r=Tb(n);W.texImage3D(a,b,c,d,e,h,g,l,n,r,p>>31-Math.clz32(r.BYTES_PER_ELEMENT))}else W.texImage3D(a,b,c,d,e,h,g,l,n,null)},E:function(a,b,c){W.texParameterf(a,b,c)},f:function(a,b,c){W.texParameteri(a,b,c)},yb:function(a,b,c){if(2<=V.version)W.uniform1fv(Y(a),G,c>>2,b);else{if(288>=b)for(var d=Z[b-1],e=0;e<b;++e)d[e]=G[c+4*e>>2];else d=G.subarray(c>>2,c+4*b>>2);W.uniform1fv(Y(a),d)}},B:function(a,b){W.uniform1i(Y(a),b)},xb:function(a,b,c){if(2<=V.version)W.uniform2fv(Y(a),
G,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],e=0;e<2*b;e+=2)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2];else d=G.subarray(c>>2,c+8*b>>2);W.uniform2fv(Y(a),d)}},wb:function(a,b,c){if(2<=V.version)W.uniform3fv(Y(a),G,c>>2,3*b);else{if(96>=b)for(var d=Z[3*b-1],e=0;e<3*b;e+=3)d[e]=G[c+4*e>>2],d[e+1]=G[c+(4*e+4)>>2],d[e+2]=G[c+(4*e+8)>>2];else d=G.subarray(c>>2,c+12*b>>2);W.uniform3fv(Y(a),d)}},vb:function(a,b,c){if(2<=V.version)W.uniform4fv(Y(a),G,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],e=G;c>>=2;for(var h=
0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=G.subarray(c>>2,c+16*b>>2);W.uniform4fv(Y(a),d)}},ub:function(a,b,c,d){if(2<=V.version)W.uniformMatrix4fv(Y(a),!!c,G,d>>2,16*b);else{if(18>=b){var e=Z[16*b-1],h=G;d>>=2;for(var g=0;g<16*b;g+=16){var l=d+g;e[g]=h[l];e[g+1]=h[l+1];e[g+2]=h[l+2];e[g+3]=h[l+3];e[g+4]=h[l+4];e[g+5]=h[l+5];e[g+6]=h[l+6];e[g+7]=h[l+7];e[g+8]=h[l+8];e[g+9]=h[l+9];e[g+10]=h[l+10];e[g+11]=h[l+11];e[g+12]=h[l+12];e[g+13]=h[l+13];e[g+14]=h[l+
14];e[g+15]=h[l+15]}}else e=G.subarray(d>>2,d+64*b>>2);W.uniformMatrix4fv(Y(a),!!c,e)}},l:function(a){a=S[a];W.useProgram(a);W.Ic=a},Ab:function(a,b){W.vertexAttribDivisor(a,b)},Bb:function(a,b,c,d,e,h){W.vertexAttribPointer(a,b,c,!!d,e,h)},va:function(a,b,c,d){W.viewport(a,b,c,d)},db:function(){f.Ac=function(a){0!=Wb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.Ac)},cb:function(){f.Fc=function(a){a=a.clipboardData.getData("text");pa("_sapp_emsc_onpaste",["string"],
[a])};window.addEventListener("paste",f.Fc)},ab:function(a){f.Zc=[];a=E(a);a=document.getElementById(a);f.Bc=function(b){b.stopPropagation();b.preventDefault()};f.Cc=function(b){b.stopPropagation();b.preventDefault()};f.Dc=function(b){b.stopPropagation();b.preventDefault()};f.Ec=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;f.$c=c;Xb(c.length);var d;for(d=0;d<c.length;d++)pa("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Yb(b.clientX,b.clientY)};a.addEventListener("dragenter",
f.Bc,!1);a.addEventListener("dragleave",f.Cc,!1);a.addEventListener("dragover",f.Dc,!1);a.addEventListener("drop",f.Ec,!1)},Ya:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},p:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Zb()});document.body.append(a)},o:function(){document.getElementById("_sokol_app_input_element").focus()},Fb:function(a){a=
E(a);f.hc=document.getElementById(a);f.hc||console.log("sokol_app.h: invalid target:"+a);f.hc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},$a:function(){window.removeEventListener("beforeunload",f.Ac)},_a:function(){window.removeEventListener("paste",f.Fc)},Za:function(a){a=E(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.Bc);a.removeEventListener("dragleave",f.Cc);a.removeEventListener("dragover",f.Dc);a.removeEventListener("drop",
f.Ec)},x:function(){f.hc&&f.hc.requestPointerLock&&f.hc.requestPointerLock()},Xa:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(C.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},n:function(){document.getElementById("_sokol_app_input_element").blur()},pb:function(){return f.ec?f.ec.bufferSize:
0},rb:function(a,b,c){f.$b=null;f.ec=null;"undefined"!==typeof AudioContext?f.$b=new AudioContext({sampleRate:a,latencyHint:"interactive"}):"undefined"!==typeof webkitAudioContext?f.$b=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}):(f.$b=null,console.log("sokol_audio.h: no WebAudio support"));return f.$b?(console.log("sokol_audio.h: sample rate ",f.$b.sampleRate),f.ec=f.$b.createScriptProcessor(c,0,b),f.ec.onaudioprocess=function(d){var e=d.outputBuffer.length,h=$b(e);if(h)for(var g=
d.outputBuffer.numberOfChannels,l=0;l<g;l++)for(var n=d.outputBuffer.getChannelData(l),p=0;p<e;p++)n[p]=G[(h>>2)+(g*p+l)]},f.ec.connect(f.$b.destination),a=function(){f.$b&&"suspended"===f.$b.state&&f.$b.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},qb:function(){return f.$b?f.$b.sampleRate:0},y:function(){null!==f.$b&&(f.ec&&f.ec.disconnect(),f.$b.close(),f.$b=null,f.ec=null)},z:function(a,
b,c,d,e,h){b=E(b);var g=new XMLHttpRequest;g.open("GET",b);g.responseType="arraybuffer";var l=0<d;l&&g.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));g.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!l){var n=new Uint8Array(g.response),p=n.length;p<=h?(C.set(n,e),ac(a,d,p)):bc(a)}else cc(a,this.status)};g.send()},na:function(a,b){b=E(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==
this.status){var d=this.getResponseHeader("Content-Length");dc(a,d)}else cc(a,this.status)};c.send()},ob:function(a){var b=Date.now()/1E3|0;a&&(F[a>>2]=b);return b}};
(function(){function a(e){f.asm=e.exports;ma=f.asm.Gb;Aa();Ba=f.asm.Zb;Da.unshift(f.asm.Hb);I--;f.monitorRunDependencies&&f.monitorRunDependencies(I);0==I&&(null!==Ia&&(clearInterval(Ia),Ia=null),J&&(e=J,J=null,e()))}function b(e){a(e.instance)}function c(e){return Ma().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(e,function(h){y("failed to asynchronously prepare wasm: "+h);x(h)})}var d={a:ec};I++;f.monitorRunDependencies&&f.monitorRunDependencies(I);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return y("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return z||"function"!==typeof WebAssembly.instantiateStreaming||Ja()||K.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(K,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){y("wasm streaming compile failed: "+h);y("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.Hb).apply(null,arguments)};var Zb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Zb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Ib).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.Jb).apply(null,arguments)};
var Wb=f.__sapp_html5_get_ask_leave_site=function(){return(Wb=f.__sapp_html5_get_ask_leave_site=f.asm.Kb).apply(null,arguments)},Xb=f.__sapp_emsc_begin_drop=function(){return(Xb=f.__sapp_emsc_begin_drop=f.asm.Lb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.Mb).apply(null,arguments)};var Yb=f.__sapp_emsc_end_drop=function(){return(Yb=f.__sapp_emsc_end_drop=f.asm.Nb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Ob).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Pb).apply(null,arguments)};
var $b=f.__saudio_emsc_pull=function(){return($b=f.__saudio_emsc_pull=f.asm.Qb).apply(null,arguments)},dc=f.__sfetch_emsc_head_response=function(){return(dc=f.__sfetch_emsc_head_response=f.asm.Rb).apply(null,arguments)},ac=f.__sfetch_emsc_get_response=function(){return(ac=f.__sfetch_emsc_get_response=f.asm.Sb).apply(null,arguments)},cc=f.__sfetch_emsc_failed_http_status=function(){return(cc=f.__sfetch_emsc_failed_http_status=f.asm.Tb).apply(null,arguments)},bc=f.__sfetch_emsc_failed_buffer_too_small=
function(){return(bc=f.__sfetch_emsc_failed_buffer_too_small=f.asm.Ub).apply(null,arguments)},P=f._malloc=function(){return(P=f._malloc=f.asm.Vb).apply(null,arguments)},qa=f.stackSave=function(){return(qa=f.stackSave=f.asm.Wb).apply(null,arguments)},ra=f.stackRestore=function(){return(ra=f.stackRestore=f.asm.Xb).apply(null,arguments)},A=f.stackAlloc=function(){return(A=f.stackAlloc=f.asm.Yb).apply(null,arguments)},fc;
function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}J=function gc(){fc||hc();fc||(J=gc)};
function hc(a){function b(){if(!fc&&(fc=!0,f.calledRun=!0,!na)){Na(Da);Na(Ea);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(ic){var c=a,d=f._main;c=c||[];var e=c.length+1,h=A(4*(e+1));F[h>>2]=va(ba);for(var g=1;g<e;g++)F[(h>>2)+g]=va(c[g-1]);F[(h>>2)+e]=0;try{var l=d(e,h);if(!(noExitRuntime||0<ka)){if(f.onExit)f.onExit(l);na=!0}ca(l,new ja(l))}catch(n){n instanceof ja||"unwind"==n||ca(1,n)}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=
f.postRun.shift(),Ga.unshift(c);Na(Ga)}}a=a||aa;if(!(0<I)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ha();Na(Ca);0<I||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=hc;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var ic=!0;f.noInitialRun&&(ic=!1);hc();
