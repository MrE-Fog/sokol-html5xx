
var e;e||(e=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},e),ba=[],ca="./this.program",g=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,q="",fa,r,v;
if(ea){var fs=require("fs"),ha=require("path");q=l?ha.dirname(q)+"/":__dirname+"/";fa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};v=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};r=(a,b,c)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);fs.readFile(a,function(d,f){d?c(d):b(f.buffer)})};1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=e);process.on("uncaughtException",
function(a){if(!(a instanceof w))throw a;});process.on("unhandledRejection",function(a){throw a;});g=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof w||x("exiting due to exception: "+b);process.exit(a)};e.inspect=function(){return"[Emscripten Module object]"}}else if(da||l)l?q=self.location.href:"undefined"!=typeof document&&document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=a=>{var b=new XMLHttpRequest;
b.open("GET",a,!1);b.send(null);return b.responseText},l&&(v=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),r=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};e.print||console.log.bind(console);var x=e.printErr||console.warn.bind(console);Object.assign(e,aa);aa=null;e.arguments&&(ba=e.arguments);
e.thisProgram&&(ca=e.thisProgram);e.quit&&(g=e.quit);var y;e.wasmBinary&&(y=e.wasmBinary);var noExitRuntime=e.noExitRuntime||!0;"object"!=typeof WebAssembly&&ia("no native wasm support detected");var z,ja=!1,ka="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function A(a){if(a){for(var b=B,c=a+NaN,d=a;b[d]&&!(d>=c);)++d;if(16<d-a&&b.buffer&&ka)a=ka.decode(b.subarray(a,d));else{for(c="";a<d;){var f=b[a++];if(f&128){var k=b[a++]&63;if(192==(f&224))c+=String.fromCharCode((f&31)<<6|k);else{var h=b[a++]&63;f=224==(f&240)?(f&15)<<12|k<<6|h:(f&7)<<18|k<<12|h<<6|b[a++]&63;65536>f?c+=String.fromCharCode(f):(f-=65536,c+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else c+=String.fromCharCode(f)}a=c}}else a="";return a}
function C(a,b,c,d){if(0<d){d=c+d-1;for(var f=0;f<a.length;++f){var k=a.charCodeAt(f);if(55296<=k&&57343>=k){var h=a.charCodeAt(++f);k=65536+((k&1023)<<10)|h&1023}if(127>=k){if(c>=d)break;b[c++]=k}else{if(2047>=k){if(c+1>=d)break;b[c++]=192|k>>6}else{if(65535>=k){if(c+2>=d)break;b[c++]=224|k>>12}else{if(c+3>=d)break;b[c++]=240|k>>18;b[c++]=128|k>>12&63}b[c++]=128|k>>6&63}b[c++]=128|k&63}}b[c]=0}}
function la(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}var ma,B,na,D,oa,E;function pa(){var a=z.buffer;e.HEAP8=ma=new Int8Array(a);e.HEAP16=na=new Int16Array(a);e.HEAP32=D=new Int32Array(a);e.HEAPU8=B=new Uint8Array(a);e.HEAPU16=new Uint16Array(a);e.HEAPU32=new Uint32Array(a);e.HEAPF32=oa=new Float32Array(a);e.HEAPF64=E=new Float64Array(a)}var qa,ra=[],sa=[],ta=[],ua=[],va=[];
function wa(){var a=e.preRun.shift();ra.unshift(a)}var F=0,xa=null,G=null;function ia(a){if(e.onAbort)e.onAbort(a);a="Aborted("+a+")";x(a);ja=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function ya(){return H.startsWith("data:application/octet-stream;base64,")}var H;H="saudio-sapp.wasm";if(!ya()){var za=H;H=e.locateFile?e.locateFile(za,q):q+za}
function Aa(){var a=H;try{if(a==H&&y)return new Uint8Array(y);if(v)return v(a);throw"both async and sync fetching of the wasm failed";}catch(b){ia(b)}}
function Ba(){if(!y&&(da||l)){if("function"==typeof fetch&&!H.startsWith("file://"))return fetch(H,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+H+"'";return a.arrayBuffer()}).catch(function(){return Aa()});if(r)return new Promise(function(a,b){r(H,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Aa()})}function w(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function I(a){for(;0<a.length;)a.shift()(e)}function Ca(a){var b=Da();a();Ea(b)}var Fa=0;function Ga(){for(var a=J.length-1;0<=a;--a)Ha(a);J=[];K=[]}var K=[];function Ia(){if(Fa&&Ja.ib)for(var a=0;a<K.length;++a){var b=K[a];K.splice(a,1);--a;b.Pb.apply(null,b.Db)}}var J=[];function Ha(a){var b=J[a];b.target.removeEventListener(b.ab,b.zb,b.bb);J.splice(a,1)}
function L(a){function b(d){++Fa;Ja=a;Ia();a.eb(d);Ia();--Fa}if(a.cb)a.zb=b,a.target.addEventListener(a.ab,b,a.bb),J.push(a),Ka||(ua.push(Ga),Ka=!0);else for(var c=0;c<J.length;++c)J[c].target==a.target&&J[c].ab==a.ab&&Ha(c--)}function La(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Ka,Ja,Ma,Na,M,Oa,Pa,Qa,Ra,Sa=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function N(a){a=2<a?A(a):a;return Sa[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function Ta(a){return 0>Sa.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var O=[];function P(a){var b=O[a];b||(a>=O.length&&(O.length=a+1),O[a]=b=qa.get(a));return b}function Ua(a,b,c,d,f,k){Ma||(Ma=Q(256));a={target:N(a),ab:k,cb:d,eb:function(h){h=h||event;var m=h.target.id?h.target.id:"",n=Ma;C(La(h.target),B,n+0,128);C(m,B,n+128,128);P(d)(f,n,b)&&h.preventDefault()},bb:c};L(a)}
function Va(a,b,c,d,f,k){Na||(Na=Q(176));a={target:N(a),ib:!0,ab:k,cb:d,eb:function(h){var m=Na;E[m>>3]=h.timeStamp;var n=m>>2;D[n+2]=h.location;D[n+3]=h.ctrlKey;D[n+4]=h.shiftKey;D[n+5]=h.altKey;D[n+6]=h.metaKey;D[n+7]=h.repeat;D[n+8]=h.charCode;D[n+9]=h.keyCode;D[n+10]=h.which;C(h.key||"",B,m+44,32);C(h.code||"",B,m+76,32);C(h.char||"",B,m+108,32);C(h.locale||"",B,m+140,32);P(d)(f,m,b)&&h.preventDefault()},bb:c};L(a)}
function Wa(a,b,c){E[a>>3]=b.timeStamp;a>>=2;D[a+2]=b.screenX;D[a+3]=b.screenY;D[a+4]=b.clientX;D[a+5]=b.clientY;D[a+6]=b.ctrlKey;D[a+7]=b.shiftKey;D[a+8]=b.altKey;D[a+9]=b.metaKey;na[2*a+20]=b.button;na[2*a+21]=b.buttons;D[a+11]=b.movementX;D[a+12]=b.movementY;c=Ta(c);D[a+13]=b.clientX-c.left;D[a+14]=b.clientY-c.top}
function R(a,b,c,d,f,k){M||(M=Q(72));a=N(a);L({target:a,ib:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,ab:k,cb:d,eb:function(h){h=h||event;Wa(M,h,a);P(d)(f,M,b)&&h.preventDefault()},bb:c})}function S(a,b,c,d,f){Oa||(Oa=Q(260));L({target:a,ab:f,cb:d,eb:function(k){k=k||event;var h=Oa,m=document.pointerLockElement||document.gb||document.lb||document.kb;D[h>>2]=!!m;var n=m&&m.id?m.id:"";C(La(m),B,h+4,128);C(n,B,h+132,128);P(d)(20,h,b)&&k.preventDefault()},bb:c})}
function T(a,b,c,d,f){L({target:a,ab:f,cb:d,eb:function(k){k=k||event;P(d)(38,0,b)&&k.preventDefault()},bb:c})}
function Xa(a,b,c,d){Pa||(Pa=Q(36));a=N(a);L({target:a,ab:"resize",cb:d,eb:function(f){f=f||event;if(f.target==a){var k=document.body;if(k){var h=Pa;D[h>>2]=f.detail;D[h+4>>2]=k.clientWidth;D[h+8>>2]=k.clientHeight;D[h+12>>2]=innerWidth;D[h+16>>2]=innerHeight;D[h+20>>2]=outerWidth;D[h+24>>2]=outerHeight;D[h+28>>2]=pageXOffset;D[h+32>>2]=pageYOffset;P(d)(10,h,b)&&f.preventDefault()}}},bb:c})}
function U(a,b,c,d,f,k){Qa||(Qa=Q(1696));a=N(a);L({target:a,ib:"touchstart"==k||"touchend"==k,ab:k,cb:d,eb:function(h){for(var m,n={},t=h.touches,u=0;u<t.length;++u)m=t[u],m.qb=m.sb=0,n[m.identifier]=m;for(u=0;u<h.changedTouches.length;++u)m=h.changedTouches[u],m.qb=1,n[m.identifier]=m;for(u=0;u<h.targetTouches.length;++u)n[h.targetTouches[u].identifier].sb=1;t=Qa;E[t>>3]=h.timeStamp;var p=t>>2;D[p+3]=h.ctrlKey;D[p+4]=h.shiftKey;D[p+5]=h.altKey;D[p+6]=h.metaKey;p+=7;var $a=Ta(a),ab=0;for(u in n)if(m=
n[u],D[p]=m.identifier,D[p+1]=m.screenX,D[p+2]=m.screenY,D[p+3]=m.clientX,D[p+4]=m.clientY,D[p+5]=m.pageX,D[p+6]=m.pageY,D[p+7]=m.qb,D[p+8]=m.sb,D[p+9]=m.clientX-$a.left,D[p+10]=m.clientY-$a.top,p+=13,31<++ab)break;D[t+8>>2]=ab;P(d)(f,t,b)&&h.preventDefault()},bb:c})}function Ya(a,b,c,d,f,k){a={target:N(a),ab:k,cb:d,eb:function(h){h=h||event;P(d)(f,0,b)&&h.preventDefault()},bb:c};L(a)}
function Za(a,b,c,d){Ra||(Ra=Q(104));L({target:a,ib:!0,ab:"wheel",cb:d,eb:function(f){f=f||event;var k=Ra;Wa(k,f,a);E[k+72>>3]=f.deltaX;E[k+80>>3]=f.deltaY;E[k+88>>3]=f.deltaZ;D[k+96>>2]=f.deltaMode;P(d)(9,k,b)&&f.preventDefault()},bb:c})}
function bb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,k){b.drawArraysInstancedANGLE(c,d,f,k)},a.drawElementsInstanced=function(c,d,f,k,h){b.drawElementsInstancedANGLE(c,d,f,k,h)})}
function cb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function db(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function eb(a){a.Gb=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function fb(a){a.Ib=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function gb(a){a.Kb=a.getExtension("WEBGL_multi_draw")}var hb=1,ib=[],jb=[],kb=[],lb=[],mb=[],V=[],nb=[],ob={},pb={};function W(a){qb||(qb=a)}function rb(a){for(var b=hb++,c=a.length;c<b;c++)a[c]=null;return b}
function sb(a,b){a.gb||(a.gb=a.getContext,a.getContext=function(d,f){f=a.gb(d,f);return"webgl"==d==f instanceof WebGLRenderingContext?f:null});var c=1<b.rb?a.getContext("webgl2",b):a.getContext("webgl",b);return c?tb(c,b):0}function tb(a,b){var c=rb(nb),d={Hb:c,attributes:b,version:b.rb,jb:a};a.canvas&&(a.canvas.Cb=d);nb[c]=d;("undefined"==typeof b.pb||b.pb)&&ub(d);return c}
function ub(a){a||(a=X);if(!a.Bb){a.Bb=!0;var b=a.jb;bb(b);cb(b);db(b);eb(b);fb(b);2<=a.version&&(b.ob=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.ob)b.ob=b.getExtension("EXT_disjoint_timer_query");gb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var qb,X,vb=["default","low-power","high-performance"];
function wb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Y.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>X.version){W(1282);return}c=2*(Y.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>X.version){W(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Y.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":W(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:W(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)D[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){W(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:W(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}D[b>>2]=c}else W(1281)}
function Z(a){var b=la(a)+1,c=Q(b);C(a,B,c,b);return c}function xb(a){if(!noExitRuntime){if(e.onExit)e.onExit(a);ja=!0}g(a,new w(a))}function yb(a){var b=la(a)+1,c=zb(b);C(a,ma,c,b);return c}
var Y,Hb={B:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},T:function(a,b,c){a=N(a);if(!a)return-4;a=Ta(a);E[b>>3]=a.width;E[c>>3]=a.height;return 0},W:function(a,b,c){B.copyWithin(a,b,b+c)},sa:function(a,b){function c(d){P(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},V:function(a){var b=B.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var f=Math,k=f.min;d=Math.max(a,d);d+=(65536-d%65536)%65536;
a:{var h=z.buffer;try{z.grow(k.call(f,2147483648,d)-h.byteLength+65535>>>16);pa();var m=1;break a}catch(n){}m=void 0}if(m)return!0}return!1},C:function(a,b,c,d){Ua(a,b,c,d,12,"blur");return 0},y:function(a,b,c){a=N(a);if(!a)return-4;a.width=b;a.height=c;return 0},D:function(a,b,c,d){Ua(a,b,c,d,13,"focus");return 0},M:function(a,b,c,d){Va(a,b,c,d,2,"keydown");return 0},K:function(a,b,c,d){Va(a,b,c,d,1,"keypress");return 0},L:function(a,b,c,d){Va(a,b,c,d,3,"keyup");return 0},S:function(a,b,c,d){R(a,
b,c,d,5,"mousedown");return 0},P:function(a,b,c,d){R(a,b,c,d,33,"mouseenter");return 0},O:function(a,b,c,d){R(a,b,c,d,34,"mouseleave");return 0},Q:function(a,b,c,d){R(a,b,c,d,8,"mousemove");return 0},R:function(a,b,c,d){R(a,b,c,d,6,"mouseup");return 0},F:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.gb||document.body.lb||document.body.kb))return-1;a=N(a);if(!a)return-4;S(a,b,c,d,"pointerlockchange");S(a,b,c,d,"mozpointerlockchange");S(a,b,c,d,"webkitpointerlockchange");
S(a,b,c,d,"mspointerlockchange");return 0},E:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.gb||document.body.lb||document.body.kb))return-1;a=N(a);if(!a)return-4;T(a,b,c,d,"pointerlockerror");T(a,b,c,d,"mozpointerlockerror");T(a,b,c,d,"webkitpointerlockerror");T(a,b,c,d,"mspointerlockerror");return 0},Fa:function(a,b,c,d){Xa(a,b,c,d);return 0},G:function(a,b,c,d){U(a,b,c,d,25,"touchcancel");return 0},H:function(a,b,c,d){U(a,b,c,d,23,"touchend");return 0},I:function(a,
b,c,d){U(a,b,c,d,24,"touchmove");return 0},J:function(a,b,c,d){U(a,b,c,d,22,"touchstart");return 0},A:function(a,b,c,d){Ya(a,b,c,d,31,"webglcontextlost");return 0},z:function(a,b,c,d){Ya(a,b,c,d,32,"webglcontextrestored");return 0},N:function(a,b,c,d){a=N(a);return"undefined"!=typeof a.onwheel?(Za(a,b,c,d),0):-1},s:function(a,b){b>>=2;b={alpha:!!D[b],depth:!!D[b+1],stencil:!!D[b+2],antialias:!!D[b+3],premultipliedAlpha:!!D[b+4],preserveDrawingBuffer:!!D[b+5],powerPreference:vb[D[b+6]],failIfMajorPerformanceCaveat:!!D[b+
7],rb:D[b+8],Jb:D[b+9],pb:D[b+10],Ab:D[b+11],Lb:D[b+12],Mb:D[b+13]};a=N(a);return!a||b.Ab?0:sb(a,b)},U:function(a,b){a=nb[a];b=A(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&bb(Y);"OES_vertex_array_object"==b&&cb(Y);"WEBGL_draw_buffers"==b&&db(Y);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&eb(Y);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&fb(Y);"WEBGL_multi_draw"==b&&gb(Y);return!!a.jb.getExtension(b)},la:function(a){a>>=2;for(var b=0;14>b;++b)D[a+b]=
0;D[a]=D[a+1]=D[a+3]=D[a+4]=D[a+8]=D[a+10]=1},_:function(a){X=nb[a];e.Eb=Y=X&&X.jb;return!a||Y?0:-5},b:function(a){Y.activeTexture(a)},g:function(a,b){35051==a?Y.mb=b:35052==a&&(Y.nb=b);Y.bindBuffer(a,ib[b])},d:function(a,b){Y.bindFramebuffer(a,kb[b])},a:function(a,b){Y.bindTexture(a,mb[b])},w:function(a){Y.bindVertexArray(V[a])},ga:function(a,b,c,d){Y.blendColor(a,b,c,d)},ha:function(a,b){Y.blendEquationSeparate(a,b)},ia:function(a,b,c,d){Y.blendFuncSeparate(a,b,c,d)},h:function(a,b,c,d,f,k,h,m,
n,t){Y.blitFramebuffer(a,b,c,d,f,k,h,m,n,t)},$:function(a){Y.clear(a)},r:function(a,b,c,d){Y.clearColor(a,b,c,d)},n:function(a){Y.clearDepth(a)},aa:function(a){Y.clearStencil(a)},j:function(a,b,c,d){Y.colorMask(!!a,!!b,!!c,!!d)},da:function(a){Y.cullFace(a)},ua:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],f=ib[d];f&&(Y.deleteBuffer(f),f.name=0,ib[d]=null,d==Y.mb&&(Y.mb=0),d==Y.nb&&(Y.nb=0))}},f:function(a,b){for(var c=0;c<a;++c){var d=D[b+4*c>>2],f=kb[d];f&&(Y.deleteFramebuffer(f),f.name=
0,kb[d]=null)}},ra:function(a){if(a){var b=jb[a];b?(Y.deleteProgram(b),b.name=0,jb[a]=null):W(1281)}},x:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],f=lb[d];f&&(Y.deleteRenderbuffer(f),f.name=0,lb[d]=null)}},ta:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],f=mb[d];f&&(Y.deleteTexture(f),f.name=0,mb[d]=null)}},pa:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2];Y.deleteVertexArray(V[d]);V[d]=null}},v:function(a){Y.depthFunc(a)},u:function(a){Y.depthMask(!!a)},e:function(a){Y.disable(a)},
ma:function(a){Y.disableVertexAttribArray(a)},o:function(a){Y.enable(a)},ea:function(a){Y.frontFace(a)},oa:function(a,b){for(var c=0;c<a;c++){var d=Y.createVertexArray(),f=d&&rb(V);d?(d.name=f,V[f]=d):W(1282);D[b+4*c>>2]=f}},c:function(a,b){wb(a,b)},wa:function(a){var b=ob[a];if(!b){switch(a){case 7939:b=Y.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Z(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=Y.getParameter(a))||W(1280);b=b&&Z(b);break;case 7938:b=
Y.getParameter(7938);b=2<=X.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Z(b);break;case 35724:b=Y.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Z(b);break;default:W(1280)}ob[a]=b}return b},va:function(a,b){if(2>X.version)return W(1282),0;var c=pb[a];if(c)return 0>b||b>=c.length?(W(1281),0):c[b];switch(a){case 7939:return c=Y.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+
d})),c=c.map(function(d){return Z(d)}),c=pb[a]=c,0>b||b>=c.length?(W(1281),0):c[b];default:return W(1280),0}},na:function(a,b){Y.pixelStorei(a,b)},fa:function(a,b){Y.polygonOffset(a,b)},i:function(a){Y.readBuffer(a)},ba:function(a,b,c,d){Y.scissor(a,b,c,d)},ka:function(a,b,c){Y.stencilFunc(a,b,c)},t:function(a){Y.stencilMask(a)},ja:function(a,b,c){Y.stencilOp(a,b,c)},qa:function(a){a=jb[a];Y.useProgram(a);Y.Fb=a},ca:function(a,b,c,d){Y.viewport(a,b,c,d)},Ea:function(){e.tb=a=>{0!=Ab()&&(a.preventDefault(),
a.returnValue=" ")};window.addEventListener("beforeunload",e.tb)},Da:function(){e.yb=a=>{const b=a.clipboardData.getData("text");Ca(()=>{const c=yb(b);Bb(c)})};window.addEventListener("paste",e.yb)},Ca:function(a){e.Nb=[];a=A(a);a=document.getElementById(a);e.ub=b=>{b.stopPropagation();b.preventDefault()};e.vb=b=>{b.stopPropagation();b.preventDefault()};e.wb=b=>{b.stopPropagation();b.preventDefault()};e.xb=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;e.Ob=c;Cb(c.length);
for(let d=0;d<c.length;d++)Ca(()=>{const f=yb(c[d].name);Db(d,f)});Eb(b.clientX,b.clientY)};a.addEventListener("dragenter",e.ub,!1);a.addEventListener("dragleave",e.vb,!1);a.addEventListener("dragover",e.wb,!1);a.addEventListener("drop",e.xb,!1)},ya:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},m:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Fb()});
document.body.append(a)},l:function(){document.getElementById("_sokol_app_input_element").focus()},Ga:function(a){a=A(a);e.hb=document.getElementById(a);e.hb||console.log("sokol_app.h: invalid target:"+a);e.hb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ba:function(){window.removeEventListener("beforeunload",e.tb)},Aa:function(){window.removeEventListener("paste",e.yb)},za:function(a){a=A(a);a=document.getElementById(a);a.removeEventListener("dragenter",
e.ub);a.removeEventListener("dragleave",e.vb);a.removeEventListener("dragover",e.wb);a.removeEventListener("drop",e.xb)},p:function(){e.hb&&e.hb.requestPointerLock&&e.hb.requestPointerLock()},xa:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const f=d.getContext("2d"),k=f.createImageData(a,b);k.data.set(B.subarray(c,c+a*b*4));f.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},
k:function(){document.getElementById("_sokol_app_input_element").blur()},X:function(){return e.fb?e.fb.bufferSize:0},Z:function(a,b,c){e.$a=null;e.fb=null;"undefined"!==typeof AudioContext?e.$a=new AudioContext({sampleRate:a,latencyHint:"interactive"}):(e.$a=null,console.log("sokol_audio.h: no WebAudio support"));return e.$a?(console.log("sokol_audio.h: sample rate ",e.$a.sampleRate),e.fb=e.$a.createScriptProcessor(c,0,b),e.fb.onaudioprocess=d=>{const f=d.outputBuffer.length,k=Gb(f);if(k){const h=
d.outputBuffer.numberOfChannels;for(let m=0;m<h;m++){const n=d.outputBuffer.getChannelData(m);for(let t=0;t<f;t++)n[t]=oa[(k>>2)+(h*t+m)]}}},e.fb.connect(e.$a.destination),a=()=>{e.$a&&"suspended"===e.$a.state&&e.$a.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchstart",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},Y:function(){return e.$a?e.$a.sampleRate:0},q:function(){const a=e.$a;null!==a&&(e.fb&&e.fb.disconnect(),a.close(),e.$a=null,
e.fb=null)}};
(function(){function a(f){e.asm=f.exports;z=e.asm.Ha;pa();qa=e.asm.Xa;sa.unshift(e.asm.Ia);F--;e.monitorRunDependencies&&e.monitorRunDependencies(F);0==F&&(null!==xa&&(clearInterval(xa),xa=null),G&&(f=G,G=null,f()))}function b(f){a(f.instance)}function c(f){return Ba().then(function(k){return WebAssembly.instantiate(k,d)}).then(function(k){return k}).then(f,function(k){x("failed to asynchronously prepare wasm: "+k);ia(k)})}var d={a:Hb};F++;e.monitorRunDependencies&&e.monitorRunDependencies(F);if(e.instantiateWasm)try{return e.instantiateWasm(d,
a)}catch(f){return x("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return y||"function"!=typeof WebAssembly.instantiateStreaming||ya()||H.startsWith("file://")||ea||"function"!=typeof fetch?c(b):fetch(H,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(b,function(k){x("wasm streaming compile failed: "+k);x("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.Ia).apply(null,arguments)};
var Fb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Fb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.Ja).apply(null,arguments)},Bb=e.__sapp_emsc_onpaste=function(){return(Bb=e.__sapp_emsc_onpaste=e.asm.Ka).apply(null,arguments)},Ab=e.__sapp_html5_get_ask_leave_site=function(){return(Ab=e.__sapp_html5_get_ask_leave_site=e.asm.La).apply(null,arguments)},Cb=e.__sapp_emsc_begin_drop=function(){return(Cb=e.__sapp_emsc_begin_drop=e.asm.Ma).apply(null,arguments)},Db=e.__sapp_emsc_drop=function(){return(Db=
e.__sapp_emsc_drop=e.asm.Na).apply(null,arguments)},Eb=e.__sapp_emsc_end_drop=function(){return(Eb=e.__sapp_emsc_end_drop=e.asm.Oa).apply(null,arguments)};e.__sapp_emsc_invoke_fetch_cb=function(){return(e.__sapp_emsc_invoke_fetch_cb=e.asm.Pa).apply(null,arguments)};e._main=function(){return(e._main=e.asm.Qa).apply(null,arguments)};var Gb=e.__saudio_emsc_pull=function(){return(Gb=e.__saudio_emsc_pull=e.asm.Ra).apply(null,arguments)};
e.__sfetch_emsc_head_response=function(){return(e.__sfetch_emsc_head_response=e.asm.Sa).apply(null,arguments)};e.__sfetch_emsc_get_response=function(){return(e.__sfetch_emsc_get_response=e.asm.Ta).apply(null,arguments)};e.__sfetch_emsc_failed_http_status=function(){return(e.__sfetch_emsc_failed_http_status=e.asm.Ua).apply(null,arguments)};e.__sfetch_emsc_failed_buffer_too_small=function(){return(e.__sfetch_emsc_failed_buffer_too_small=e.asm.Va).apply(null,arguments)};
var Q=e._malloc=function(){return(Q=e._malloc=e.asm.Wa).apply(null,arguments)},Da=e.stackSave=function(){return(Da=e.stackSave=e.asm.Ya).apply(null,arguments)},Ea=e.stackRestore=function(){return(Ea=e.stackRestore=e.asm.Za).apply(null,arguments)},zb=e.stackAlloc=function(){return(zb=e.stackAlloc=e.asm._a).apply(null,arguments)};e.___start_em_js=3140;e.___stop_em_js=12427;var Ib;G=function Jb(){Ib||Kb();Ib||(G=Jb)};
function Lb(a){var b=e._main;a=a||[];a.unshift(ca);var c=a.length,d=zb(4*(c+1)),f=d>>2;a.forEach(h=>{D[f++]=yb(h)});D[f]=0;try{var k=b(c,d);xb(k)}catch(h){h instanceof w||"unwind"==h||g(1,h)}}
function Kb(){function a(){if(!Ib&&(Ib=!0,e.calledRun=!0,!ja)){I(sa);I(ta);if(e.onRuntimeInitialized)e.onRuntimeInitialized();Mb&&Lb(b);if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var c=e.postRun.shift();va.unshift(c)}I(va)}}var b=b||ba;if(!(0<F)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)wa();I(ra);0<F||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);a()},
1)):a())}}if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Mb=!0;e.noInitialRun&&(Mb=!1);Kb();
