
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var h={},l;for(l in e)e.hasOwnProperty(l)&&(h[l]=e[l]);var aa=[],t="./this.program";function u(a,b){throw b;}var ba="object"===typeof window,v="function"===typeof importScripts,ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node,w="",da,x,y,z,A;
if(ca)w=v?require("path").dirname(w)+"/":__dirname+"/",da=function(a,b){z||(z=require("fs"));A||(A=require("path"));a=A.normalize(a);return z.readFileSync(a,b?null:"utf8")},y=function(a){a=da(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||B("Assertion failed: undefined");return a},x=function(a,b,c){z||(z=require("fs"));A||(A=require("path"));a=A.normalize(a);z.readFile(a,function(d,f){d?c(d):b(f.buffer)})},1<process.argv.length&&(t=process.argv[1].replace(/\\/g,"/")),aa=process.argv.slice(2),"undefined"!==
typeof module&&(module.exports=e),process.on("uncaughtException",function(a){if(!(a instanceof C))throw a;}),process.on("unhandledRejection",function(a){throw a;}),u=function(a,b){if(noExitRuntime||0<ea)throw process.exitCode=a,b;b instanceof C||D("exiting due to exception: "+b);process.exit(a)},e.inspect=function(){return"[Emscripten Module object]"};else if(ba||v)v?w=self.location.href:"undefined"!==typeof document&&document.currentScript&&(w=document.currentScript.src),w=0!==w.indexOf("blob:")?
w.substr(0,w.replace(/[?#].*/,"").lastIndexOf("/")+1):"",da=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},v&&(y=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),x=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};
var fa=e.print||console.log.bind(console),D=e.printErr||console.warn.bind(console);for(l in h)h.hasOwnProperty(l)&&(e[l]=h[l]);h=null;e.arguments&&(aa=e.arguments);e.thisProgram&&(t=e.thisProgram);e.quit&&(u=e.quit);var E;e.wasmBinary&&(E=e.wasmBinary);var noExitRuntime=e.noExitRuntime||!0;"object"!==typeof WebAssembly&&B("no native wasm support detected");var ha,ia=!1;function ja(a){var b=e["_"+a];b||B("Assertion failed: Cannot call unknown function "+(a+", make sure it is exported"));return b}
function ka(a,b,c){var d={string:function(n){var p=0;if(null!==n&&void 0!==n&&0!==n){var q=(n.length<<2)+1;p=F(q);G(n,H,p,q)}return p},array:function(n){var p=F(n.length);I.set(n,p);return p}};a=ja(a);var f=[],g=0;if(c)for(var k=0;k<c.length;k++){var m=d[b[k]];m?(0===g&&(g=la()),f[k]=m(c[k])):f[k]=c[k]}b=a.apply(null,f);b=function(n){0!==g&&ma(g);return n}(b)}var na="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function oa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&na)return na.decode(a.subarray(b,c));for(d="";b<c;){var f=a[b++];if(f&128){var g=a[b++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|g);else{var k=a[b++]&63;f=224==(f&240)?(f&15)<<12|g<<6|k:(f&7)<<18|g<<12|k<<6|a[b++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}return d}function J(a){return a?oa(H,a,void 0):""}
function G(a,b,c,d){if(0<d){d=c+d-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var k=a.charCodeAt(++f);g=65536+((g&1023)<<10)|k&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0}}
function pa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function qa(a){var b=pa(a)+1,c=F(b);G(a,I,c,b);return c}var ra,I,H,sa,K,ta,L;
function ua(){var a=ha.buffer;ra=a;e.HEAP8=I=new Int8Array(a);e.HEAP16=sa=new Int16Array(a);e.HEAP32=K=new Int32Array(a);e.HEAPU8=H=new Uint8Array(a);e.HEAPU16=new Uint16Array(a);e.HEAPU32=new Uint32Array(a);e.HEAPF32=ta=new Float32Array(a);e.HEAPF64=L=new Float64Array(a)}var va,wa=[],xa=[],ya=[],za=[],Aa=[],ea=0;function Ba(){var a=e.preRun.shift();wa.unshift(a)}var M=0,Ca=null,N=null;e.preloadedImages={};e.preloadedAudios={};
function B(a){if(e.onAbort)e.onAbort(a);a="Aborted("+a+")";D(a);ia=!0;throw new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS=1 for more info.");}function Da(){return O.startsWith("data:application/octet-stream;base64,")}var O;O="modplay-sapp.wasm";if(!Da()){var Ea=O;O=e.locateFile?e.locateFile(Ea,w):w+Ea}function Fa(){var a=O;try{if(a==O&&E)return new Uint8Array(E);if(y)return y(a);throw"both async and sync fetching of the wasm failed";}catch(b){B(b)}}
function Ga(){if(!E&&(ba||v)){if("function"===typeof fetch&&!O.startsWith("file://"))return fetch(O,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+O+"'";return a.arrayBuffer()}).catch(function(){return Fa()});if(x)return new Promise(function(a,b){x(O,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Fa()})}
function Ha(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(e);else{var c=b.Ub;"number"===typeof c?void 0===b.tb?P(c)():P(c)(b.tb):c(void 0===b.tb?null:b.tb)}}}var Ia=[];function P(a){var b=Ia[a];b||(a>=Ia.length&&(Ia.length=a+1),Ia[a]=b=va.get(a));return b}var Ja=[null,[],[]],Ka={},La=0;function Ma(){for(var a=Q.length-1;0<=a;--a)Na(a);Q=[];Oa=[]}var Oa=[];function Pa(){if(La&&Qa.rb)for(var a=0;a<Oa.length;++a){var b=Oa[a];Oa.splice(a,1);--a;b.dc.apply(null,b.Pb)}}var Q=[];
function Na(a){var b=Q[a];b.target.removeEventListener(b.lb,b.Lb,b.mb);Q.splice(a,1)}function R(a){function b(d){++La;Qa=a;Pa();a.ob(d);Pa();--La}if(a.nb)a.Lb=b,a.target.addEventListener(a.lb,b,a.mb),Q.push(a),Ra||(za.push(Ma),Ra=!0);else for(var c=0;c<Q.length;++c)Q[c].target==a.target&&Q[c].lb==a.lb&&Na(c--)}function Sa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Ra,Qa,Ta,Ua,Va,Wa,Xa,Ya,Za,$a=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function S(a){a=2<a?J(a):a;return $a[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function ab(a){return 0>$a.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function bb(a,b,c,d,f,g){Ta||(Ta=T(256));a={target:S(a),lb:g,nb:d,ob:function(k){k=k||event;var m=k.target.id?k.target.id:"",n=Ta;G(Sa(k.target),H,n+0,128);G(m,H,n+128,128);P(d)(f,n,b)&&k.preventDefault()},mb:c};R(a)}
function cb(a,b,c,d,f,g){Ua||(Ua=T(176));a={target:S(a),rb:!0,lb:g,nb:d,ob:function(k){var m=Ua;L[m>>3]=k.timeStamp;var n=m>>2;K[n+2]=k.location;K[n+3]=k.ctrlKey;K[n+4]=k.shiftKey;K[n+5]=k.altKey;K[n+6]=k.metaKey;K[n+7]=k.repeat;K[n+8]=k.charCode;K[n+9]=k.keyCode;K[n+10]=k.which;G(k.key||"",H,m+44,32);G(k.code||"",H,m+76,32);G(k.char||"",H,m+108,32);G(k.locale||"",H,m+140,32);P(d)(f,m,b)&&k.preventDefault()},mb:c};R(a)}
function db(a,b,c){L[a>>3]=b.timeStamp;a>>=2;K[a+2]=b.screenX;K[a+3]=b.screenY;K[a+4]=b.clientX;K[a+5]=b.clientY;K[a+6]=b.ctrlKey;K[a+7]=b.shiftKey;K[a+8]=b.altKey;K[a+9]=b.metaKey;sa[2*a+20]=b.button;sa[2*a+21]=b.buttons;K[a+11]=b.movementX;K[a+12]=b.movementY;c=ab(c);K[a+13]=b.clientX-c.left;K[a+14]=b.clientY-c.top}
function U(a,b,c,d,f,g){Va||(Va=T(72));a=S(a);R({target:a,rb:"mousemove"!=g&&"mouseenter"!=g&&"mouseleave"!=g,lb:g,nb:d,ob:function(k){k=k||event;db(Va,k,a);P(d)(f,Va,b)&&k.preventDefault()},mb:c})}function eb(a,b,c,d,f){Wa||(Wa=T(260));R({target:a,lb:f,nb:d,ob:function(g){g=g||event;var k=Wa,m=document.pointerLockElement||document.Ab||document.Db||document.Bb;K[k>>2]=!!m;var n=m&&m.id?m.id:"";G(Sa(m),H,k+4,128);G(n,H,k+132,128);P(d)(20,k,b)&&g.preventDefault()},mb:c})}
function fb(a,b,c,d,f){R({target:a,lb:f,nb:d,ob:function(g){g=g||event;P(d)(38,0,b)&&g.preventDefault()},mb:c})}
function gb(a,b,c,d){Xa||(Xa=T(36));a=S(a);R({target:a,lb:"resize",nb:d,ob:function(f){f=f||event;if(f.target==a){var g=document.body;if(g){var k=Xa;K[k>>2]=f.detail;K[k+4>>2]=g.clientWidth;K[k+8>>2]=g.clientHeight;K[k+12>>2]=innerWidth;K[k+16>>2]=innerHeight;K[k+20>>2]=outerWidth;K[k+24>>2]=outerHeight;K[k+28>>2]=pageXOffset;K[k+32>>2]=pageYOffset;P(d)(10,k,b)&&f.preventDefault()}}},mb:c})}
function hb(a,b,c,d,f,g){Ya||(Ya=T(1696));a=S(a);R({target:a,rb:"touchstart"==g||"touchend"==g,lb:g,nb:d,ob:function(k){for(var m,n={},p=k.touches,q=0;q<p.length;++q)m=p[q],m.zb=m.Eb=0,n[m.identifier]=m;for(q=0;q<k.changedTouches.length;++q)m=k.changedTouches[q],m.zb=1,n[m.identifier]=m;for(q=0;q<k.targetTouches.length;++q)n[k.targetTouches[q].identifier].Eb=1;p=Ya;L[p>>3]=k.timeStamp;var r=p>>2;K[r+3]=k.ctrlKey;K[r+4]=k.shiftKey;K[r+5]=k.altKey;K[r+6]=k.metaKey;r+=7;var ib=ab(a),jb=0;for(q in n)if(m=
n[q],K[r]=m.identifier,K[r+1]=m.screenX,K[r+2]=m.screenY,K[r+3]=m.clientX,K[r+4]=m.clientY,K[r+5]=m.pageX,K[r+6]=m.pageY,K[r+7]=m.zb,K[r+8]=m.Eb,K[r+9]=m.clientX-ib.left,K[r+10]=m.clientY-ib.top,r+=13,31<++jb)break;K[p+8>>2]=jb;P(d)(f,p,b)&&k.preventDefault()},mb:c})}function kb(a,b,c,d,f,g){a={target:S(a),lb:g,nb:d,ob:function(k){k=k||event;P(d)(f,0,b)&&k.preventDefault()},mb:c};R(a)}
function lb(a,b,c,d){Za||(Za=T(104));R({target:a,rb:!0,lb:"wheel",nb:d,ob:function(f){f=f||event;var g=Za;db(g,f,a);L[g+72>>3]=f.deltaX;L[g+80>>3]=f.deltaY;L[g+88>>3]=f.deltaZ;K[g+96>>2]=f.deltaMode;P(d)(9,g,b)&&f.preventDefault()},mb:c})}
function mb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,g){b.drawArraysInstancedANGLE(c,d,f,g)},a.drawElementsInstanced=function(c,d,f,g,k){b.drawElementsInstancedANGLE(c,d,f,g,k)})}
function nb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function ob(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function pb(a){a.Sb=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function qb(a){a.Xb=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function rb(a){a.Zb=a.getExtension("WEBGL_multi_draw")}var sb=1,tb=[],ub=[],vb=[],wb=[],xb=[],V=[],yb=[],zb={},Ab={};function W(a){Bb||(Bb=a)}function Cb(a){for(var b=sb++,c=a.length;c<b;c++)a[c]=null;return b}
function Db(a,b){a.yb||(a.yb=a.getContext,a.getContext=function(d,f){f=a.yb(d,f);return"webgl"==d==f instanceof WebGLRenderingContext?f:null});var c=1<b.Cb?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Eb(c,b):0}function Eb(a,b){var c=Cb(yb),d={Wb:c,attributes:b,version:b.Cb,sb:a};a.canvas&&(a.canvas.Ob=d);yb[c]=d;("undefined"===typeof b.xb||b.xb)&&Fb(d);return c}
function Fb(a){a||(a=X);if(!a.Nb){a.Nb=!0;var b=a.sb;mb(b);nb(b);ob(b);pb(b);qb(b);2<=a.version&&(b.wb=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.wb)b.wb=b.getExtension("EXT_disjoint_timer_query");rb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Bb,X,Gb=["default","low-power","high-performance"],Hb={};
function Ib(){if(!Jb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:t||"./this.program"},b;for(b in Hb)void 0===Hb[b]?delete a[b]:a[b]=Hb[b];var c=[];for(b in a)c.push(b+"="+a[b]);Jb=c}return Jb}var Jb;
function Kb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>X.version){W(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>X.version){W(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)K[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){W(1280);D("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:W(1280);D("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}K[b>>2]=c}else W(1281)}
function Z(a){var b=pa(a)+1,c=T(b);G(a,H,c,b);return c}
var Y,Qb={q:function(){return 0},ba:function(){return 0},da:function(){},Y:function(){B("")},C:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},U:function(a,b,c){a=S(a);if(!a)return-4;a=ab(a);L[b>>3]=a.width;L[c>>3]=a.height;return 0},p:ca?function(){var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:function(){return performance.now()},W:function(a,b,c){H.copyWithin(a,b,b+c)},Da:function(a,b){function c(d){P(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},
X:function(a){var b=H.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ha.grow(Math.min(2147483648,d)-ra.byteLength+65535>>>16);ua();var f=1;break a}catch(g){}f=void 0}if(f)return!0}return!1},D:function(a,b,c,d){bb(a,b,c,d,12,"blur");return 0},z:function(a,b,c){a=S(a);if(!a)return-4;a.width=b;a.height=c;return 0},E:function(a,b,c,d){bb(a,b,c,d,13,"focus");return 0},N:function(a,b,c,d){cb(a,
b,c,d,2,"keydown");return 0},L:function(a,b,c,d){cb(a,b,c,d,1,"keypress");return 0},M:function(a,b,c,d){cb(a,b,c,d,3,"keyup");return 0},T:function(a,b,c,d){U(a,b,c,d,5,"mousedown");return 0},Q:function(a,b,c,d){U(a,b,c,d,33,"mouseenter");return 0},P:function(a,b,c,d){U(a,b,c,d,34,"mouseleave");return 0},R:function(a,b,c,d){U(a,b,c,d,8,"mousemove");return 0},S:function(a,b,c,d){U(a,b,c,d,6,"mouseup");return 0},G:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Ab||
document.body.Db||document.body.Bb))return-1;a=S(a);if(!a)return-4;eb(a,b,c,d,"pointerlockchange");eb(a,b,c,d,"mozpointerlockchange");eb(a,b,c,d,"webkitpointerlockchange");eb(a,b,c,d,"mspointerlockchange");return 0},F:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Ab||document.body.Db||document.body.Bb))return-1;a=S(a);if(!a)return-4;fb(a,b,c,d,"pointerlockerror");fb(a,b,c,d,"mozpointerlockerror");fb(a,b,c,d,"webkitpointerlockerror");fb(a,b,c,d,"mspointerlockerror");
return 0},Qa:function(a,b,c,d){gb(a,b,c,d);return 0},H:function(a,b,c,d){hb(a,b,c,d,25,"touchcancel");return 0},I:function(a,b,c,d){hb(a,b,c,d,23,"touchend");return 0},J:function(a,b,c,d){hb(a,b,c,d,24,"touchmove");return 0},K:function(a,b,c,d){hb(a,b,c,d,22,"touchstart");return 0},B:function(a,b,c,d){kb(a,b,c,d,31,"webglcontextlost");return 0},A:function(a,b,c,d){kb(a,b,c,d,32,"webglcontextrestored");return 0},O:function(a,b,c,d){a=S(a);return"undefined"!==typeof a.onwheel?(lb(a,b,c,d),0):-1},t:function(a,
b){b>>=2;b={alpha:!!K[b],depth:!!K[b+1],stencil:!!K[b+2],antialias:!!K[b+3],premultipliedAlpha:!!K[b+4],preserveDrawingBuffer:!!K[b+5],powerPreference:Gb[K[b+6]],failIfMajorPerformanceCaveat:!!K[b+7],Cb:K[b+8],Yb:K[b+9],xb:K[b+10],Mb:K[b+11],$b:K[b+12],ac:K[b+13]};a=S(a);return!a||b.Mb?0:Db(a,b)},aa:function(a,b){a=yb[a];b=J(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&mb(Y);"OES_vertex_array_object"==b&&nb(Y);"WEBGL_draw_buffers"==b&&ob(Y);"WEBGL_draw_instanced_base_vertex_base_instance"==
b&&pb(Y);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&qb(Y);"WEBGL_multi_draw"==b&&rb(Y);return!!a.sb.getExtension(b)},xa:function(a){a>>=2;for(var b=0;14>b;++b)K[a+b]=0;K[a]=K[a+1]=K[a+3]=K[a+4]=K[a+8]=K[a+10]=1},ia:function(a){X=yb[a];e.Qb=Y=X&&X.sb;return!a||Y?0:-5},Z:function(a,b){var c=0;Ib().forEach(function(d,f){var g=b+c;f=K[a+4*f>>2]=g;for(g=0;g<d.length;++g)I[f++>>0]=d.charCodeAt(g);I[f>>0]=0;c+=d.length+1});return 0},_:function(a,b){var c=Ib();K[a>>2]=c.length;var d=0;c.forEach(function(f){d+=
f.length+1});K[b>>2]=d;return 0},r:function(){return 0},$:function(a,b,c,d){a=Ka.Vb(a);b=Ka.Tb(a,b,c);K[d>>2]=b;return 0},V:function(){},ca:function(a,b,c,d){for(var f=0,g=0;g<c;g++){var k=K[b>>2],m=K[b+4>>2];b+=8;for(var n=0;n<m;n++){var p=H[k+n],q=Ja[a];0===p||10===p?((1===a?fa:D)(oa(q,0)),q.length=0):q.push(p)}f+=m}K[d>>2]=f;return 0},b:function(a){Y.activeTexture(a)},g:function(a,b){35051==a?Y.ub=b:35052==a&&(Y.vb=b);Y.bindBuffer(a,tb[b])},d:function(a,b){Y.bindFramebuffer(a,vb[b])},a:function(a,
b){Y.bindTexture(a,xb[b])},x:function(a){Y.bindVertexArray(V[a])},sa:function(a,b,c,d){Y.blendColor(a,b,c,d)},ta:function(a,b){Y.blendEquationSeparate(a,b)},ua:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},h:function(a,b,c,d,f,g,k,m,n,p){Y.blitFramebuffer(a,b,c,d,f,g,k,m,n,p)},ja:function(a){Y.clear(a)},ma:function(a,b,c,d){Y.clearColor(a,b,c,d)},la:function(a){Y.clearDepth(a)},ka:function(a){Y.clearStencil(a)},m:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},pa:function(a){Y.cullFace(a)},Fa:function(a,
b){for(var c=0;c<a;c++){var d=K[b+4*c>>2],f=tb[d];f&&(Y.deleteBuffer(f),f.name=0,tb[d]=null,d==Y.ub&&(Y.ub=0),d==Y.vb&&(Y.vb=0))}},f:function(a,b){for(var c=0;c<a;++c){var d=K[b+4*c>>2],f=vb[d];f&&(Y.deleteFramebuffer(f),f.name=0,vb[d]=null)}},Ca:function(a){if(a){var b=ub[a];b?(Y.deleteProgram(b),b.name=0,ub[a]=null):W(1281)}},y:function(a,b){for(var c=0;c<a;c++){var d=K[b+4*c>>2],f=wb[d];f&&(Y.deleteRenderbuffer(f),f.name=0,wb[d]=null)}},Ea:function(a,b){for(var c=0;c<a;c++){var d=K[b+4*c>>2],f=
xb[d];f&&(Y.deleteTexture(f),f.name=0,xb[d]=null)}},Aa:function(a,b){for(var c=0;c<a;c++){var d=K[b+4*c>>2];Y.deleteVertexArray(V[d]);V[d]=null}},w:function(a){Y.depthFunc(a)},v:function(a){Y.depthMask(!!a)},e:function(a){Y.disable(a)},ya:function(a){Y.disableVertexAttribArray(a)},n:function(a){Y.enable(a)},qa:function(a){Y.frontFace(a)},za:function(a,b){for(var c=0;c<a;c++){var d=Y.createVertexArray(),f=d&&Cb(V);d?(d.name=f,V[f]=d):W(1282);K[b+4*c>>2]=f}},c:function(a,b){Kb(a,b)},Ha:function(a){var b=
zb[a];if(!b){switch(a){case 7939:b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Z(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||W(1280);b=b&&Z(b);break;case 7938:b=Y.getParameter(7938);b=2<=X.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Z(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+
b+")");b=Z(b);break;default:W(1280)}zb[a]=b}return b},Ga:function(a,b){if(2>X.version)return W(1282),0;var c=Ab[a];if(c)return 0>b||b>=c.length?(W(1281),0):c[b];switch(a){case 7939:return c=Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Z(d)}),c=Ab[a]=c,0>b||b>=c.length?(W(1281),0):c[b];default:return W(1280),0}},ra:function(a,b){Y.polygonOffset(a,b)},i:function(a){Y.readBuffer(a)},na:function(a,b,c,d){Y.scissor(a,b,c,d)},wa:function(a,b,c){Y.stencilFunc(a,
b,c)},u:function(a){Y.stencilMask(a)},va:function(a,b,c){Y.stencilOp(a,b,c)},Ba:function(a){a=ub[a];Y.useProgram(a);Y.Rb=a},oa:function(a,b,c,d){Y.viewport(a,b,c,d)},Pa:function(){e.Fb=function(a){0!=Lb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.Fb)},Oa:function(){e.Kb=function(a){a=a.clipboardData.getData("text");ka("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",e.Kb)},Na:function(a){e.bc=[];a=J(a);a=document.getElementById(a);e.Gb=
function(b){b.stopPropagation();b.preventDefault()};e.Hb=function(b){b.stopPropagation();b.preventDefault()};e.Ib=function(b){b.stopPropagation();b.preventDefault()};e.Jb=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;e.cc=c;Mb(c.length);var d;for(d=0;d<c.length;d++)ka("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Nb(b.clientX,b.clientY)};a.addEventListener("dragenter",e.Gb,!1);a.addEventListener("dragleave",e.Hb,!1);a.addEventListener("dragover",e.Ib,!1);a.addEventListener("drop",
e.Jb,!1)},Ja:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},l:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Ob()});document.body.append(a)},k:function(){document.getElementById("_sokol_app_input_element").focus()},Ra:function(a){a=J(a);e.qb=document.getElementById(a);e.qb||console.log("sokol_app.h: invalid target:"+a);e.qb.requestPointerLock||
console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ma:function(){window.removeEventListener("beforeunload",e.Fb)},La:function(){window.removeEventListener("paste",e.Kb)},Ka:function(a){a=J(a);a=document.getElementById(a);a.removeEventListener("dragenter",e.Gb);a.removeEventListener("dragleave",e.Hb);a.removeEventListener("dragover",e.Ib);a.removeEventListener("drop",e.Jb)},o:function(){e.qb&&e.qb.requestPointerLock&&e.qb.requestPointerLock()},Ia:function(a,b,c){var d=document.createElement("canvas");
d.width=a;d.height=b;var f=d.getContext("2d"),g=f.createImageData(a,b);g.data.set(H.subarray(c,c+a*b*4));f.putImageData(g,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},j:function(){document.getElementById("_sokol_app_input_element").blur()},fa:function(){return e.pb?e.pb.bufferSize:0},ha:function(a,b,c){e.kb=null;e.pb=null;"undefined"!==typeof AudioContext?e.kb=new AudioContext({sampleRate:a,latencyHint:"interactive"}):
"undefined"!==typeof webkitAudioContext?e.kb=new webkitAudioContext({sampleRate:a,latencyHint:"interactive"}):(e.kb=null,console.log("sokol_audio.h: no WebAudio support"));return e.kb?(console.log("sokol_audio.h: sample rate ",e.kb.sampleRate),e.pb=e.kb.createScriptProcessor(c,0,b),e.pb.onaudioprocess=function(d){var f=d.outputBuffer.length,g=Pb(f);if(g)for(var k=d.outputBuffer.numberOfChannels,m=0;m<k;m++)for(var n=d.outputBuffer.getChannelData(m),p=0;p<f;p++)n[p]=ta[(g>>2)+(k*p+m)]},e.pb.connect(e.kb.destination),
a=function(){e.kb&&"suspended"===e.kb.state&&e.kb.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},ga:function(){return e.kb?e.kb.sampleRate:0},s:function(){null!==e.kb&&(e.pb&&e.pb.disconnect(),e.kb.close(),e.kb=null,e.pb=null)},ea:function(a){var b=Date.now()/1E3|0;a&&(K[a>>2]=b);return b}};
(function(){function a(f){e.asm=f.exports;ha=e.asm.Sa;ua();va=e.asm.jb;xa.unshift(e.asm.Ta);M--;e.monitorRunDependencies&&e.monitorRunDependencies(M);0==M&&(null!==Ca&&(clearInterval(Ca),Ca=null),N&&(f=N,N=null,f()))}function b(f){a(f.instance)}function c(f){return Ga().then(function(g){return WebAssembly.instantiate(g,d)}).then(function(g){return g}).then(f,function(g){D("failed to asynchronously prepare wasm: "+g);B(g)})}var d={a:Qb};M++;e.monitorRunDependencies&&e.monitorRunDependencies(M);if(e.instantiateWasm)try{return e.instantiateWasm(d,
a)}catch(f){return D("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return E||"function"!==typeof WebAssembly.instantiateStreaming||Da()||O.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(O,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(g){D("wasm streaming compile failed: "+g);D("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.Ta).apply(null,arguments)};var Ob=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Ob=e.__sapp_emsc_notify_keyboard_hidden=e.asm.Ua).apply(null,arguments)};e.__sapp_emsc_onpaste=function(){return(e.__sapp_emsc_onpaste=e.asm.Va).apply(null,arguments)};
var Lb=e.__sapp_html5_get_ask_leave_site=function(){return(Lb=e.__sapp_html5_get_ask_leave_site=e.asm.Wa).apply(null,arguments)},Mb=e.__sapp_emsc_begin_drop=function(){return(Mb=e.__sapp_emsc_begin_drop=e.asm.Xa).apply(null,arguments)};e.__sapp_emsc_drop=function(){return(e.__sapp_emsc_drop=e.asm.Ya).apply(null,arguments)};var Nb=e.__sapp_emsc_end_drop=function(){return(Nb=e.__sapp_emsc_end_drop=e.asm.Za).apply(null,arguments)};
e.__sapp_emsc_invoke_fetch_cb=function(){return(e.__sapp_emsc_invoke_fetch_cb=e.asm._a).apply(null,arguments)};e._main=function(){return(e._main=e.asm.$a).apply(null,arguments)};var Pb=e.__saudio_emsc_pull=function(){return(Pb=e.__saudio_emsc_pull=e.asm.ab).apply(null,arguments)};e.__sfetch_emsc_head_response=function(){return(e.__sfetch_emsc_head_response=e.asm.bb).apply(null,arguments)};e.__sfetch_emsc_get_response=function(){return(e.__sfetch_emsc_get_response=e.asm.cb).apply(null,arguments)};
e.__sfetch_emsc_failed_http_status=function(){return(e.__sfetch_emsc_failed_http_status=e.asm.db).apply(null,arguments)};e.__sfetch_emsc_failed_buffer_too_small=function(){return(e.__sfetch_emsc_failed_buffer_too_small=e.asm.eb).apply(null,arguments)};
var T=e._malloc=function(){return(T=e._malloc=e.asm.fb).apply(null,arguments)},la=e.stackSave=function(){return(la=e.stackSave=e.asm.gb).apply(null,arguments)},ma=e.stackRestore=function(){return(ma=e.stackRestore=e.asm.hb).apply(null,arguments)},F=e.stackAlloc=function(){return(F=e.stackAlloc=e.asm.ib).apply(null,arguments)},Rb;function C(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}N=function Sb(){Rb||Tb();Rb||(N=Sb)};
function Tb(a){function b(){if(!Rb&&(Rb=!0,e.calledRun=!0,!ia)){Ha(xa);Ha(ya);if(e.onRuntimeInitialized)e.onRuntimeInitialized();if(Ub){var c=a,d=e._main;c=c||[];var f=c.length+1,g=F(4*(f+1));K[g>>2]=qa(t);for(var k=1;k<f;k++)K[(g>>2)+k]=qa(c[k-1]);K[(g>>2)+f]=0;try{var m=d(f,g);if(!(noExitRuntime||0<ea)){if(e.onExit)e.onExit(m);ia=!0}u(m,new C(m))}catch(n){n instanceof C||"unwind"==n||u(1,n)}finally{}}if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;)c=e.postRun.shift(),
Aa.unshift(c);Ha(Aa)}}a=a||aa;if(!(0<M)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)Ba();Ha(wa);0<M||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):b())}}e.run=Tb;if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Ub=!0;e.noInitialRun&&(Ub=!1);Tb();
