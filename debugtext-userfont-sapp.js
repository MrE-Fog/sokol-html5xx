var e;e||(e=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},e),ba=[],ca="./this.program",h=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,r="",fa,u,v;
if(ea){var fs=require("fs"),ha=require("path");r=l?ha.dirname(r)+"/":__dirname+"/";fa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};v=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};u=(a,b,c,d=!0)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);fs.readFile(a,d?void 0:"utf8",(f,k)=>{f?c(f):b(d?k.buffer:k)})};!e.thisProgram&&1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&
(module.exports=e);process.on("uncaughtException",a=>{if(!("unwind"===a||a instanceof w||a.context instanceof w))throw a;});if(15>process.versions.node.split(".")[0])process.on("unhandledRejection",a=>{throw a;});h=(a,b)=>{process.exitCode=a;throw b;};e.inspect=()=>"[Emscripten Module object]"}else if(da||l)l?r=self.location.href:"undefined"!=typeof document&&document.currentScript&&(r=document.currentScript.src),r=0!==r.indexOf("blob:")?r.substr(0,r.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=
a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(v=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),u=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};e.print||console.log.bind(console);var x=e.printErr||console.error.bind(console);Object.assign(e,aa);
aa=null;e.arguments&&(ba=e.arguments);e.thisProgram&&(ca=e.thisProgram);e.quit&&(h=e.quit);var y;e.wasmBinary&&(y=e.wasmBinary);var noExitRuntime=e.noExitRuntime||!0;"object"!=typeof WebAssembly&&z("no native wasm support detected");var A,ia=!1,ja,B,C,ka,D,la,ma,E;
function na(){var a=A.buffer;e.HEAP8=ja=new Int8Array(a);e.HEAP16=C=new Int16Array(a);e.HEAP32=D=new Int32Array(a);e.HEAPU8=B=new Uint8Array(a);e.HEAPU16=ka=new Uint16Array(a);e.HEAPU32=la=new Uint32Array(a);e.HEAPF32=ma=new Float32Array(a);e.HEAPF64=E=new Float64Array(a)}var oa,pa=[],qa=[],ra=[],sa=[],ta=[];function ua(){var a=e.preRun.shift();pa.unshift(a)}var F=0,va=null,G=null;
function z(a){if(e.onAbort)e.onAbort(a);a="Aborted("+a+")";x(a);ia=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function wa(a){return a.startsWith("data:application/octet-stream;base64,")}var H;H="debugtext-userfont-sapp.wasm";if(!wa(H)){var xa=H;H=e.locateFile?e.locateFile(xa,r):r+xa}function ya(a){try{if(a==H&&y)return new Uint8Array(y);if(v)return v(a);throw"both async and sync fetching of the wasm failed";}catch(b){z(b)}}
function za(a){if(!y&&(da||l)){if("function"==typeof fetch&&!a.startsWith("file://"))return fetch(a,{credentials:"same-origin"}).then(b=>{if(!b.ok)throw"failed to load wasm binary file at '"+a+"'";return b.arrayBuffer()}).catch(()=>ya(a));if(u)return new Promise((b,c)=>{u(a,d=>b(new Uint8Array(d)),c)})}return Promise.resolve().then(()=>ya(a))}function Aa(a,b,c){return za(a).then(d=>WebAssembly.instantiate(d,b)).then(d=>d).then(c,d=>{x("failed to asynchronously prepare wasm: "+d);z(d)})}
function Ba(a,b){var c=H;y||"function"!=typeof WebAssembly.instantiateStreaming||wa(c)||c.startsWith("file://")||ea||"function"!=typeof fetch?Aa(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(f){x("wasm streaming compile failed: "+f);x("falling back to ArrayBuffer instantiation");return Aa(c,a,b)}))}function w(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function I(a){for(;0<a.length;)a.shift()(e)}function Ca(a){var b=Da();a();Ea(b)}var Fa=0;function Ga(){for(var a=J.length-1;0<=a;--a)Ha(a);J=[];L=[]}var L=[];function Ia(){if(Fa&&Ja.Hb)for(var a=0;a<L.length;++a){var b=L[a];L.splice(a,1);--a;b.uc.apply(null,b.jc)}}var J=[];function Ha(a){var b=J[a];b.target.removeEventListener(b.Ab,b.ec,b.Bb);J.splice(a,1)}
function M(a){function b(d){++Fa;Ja=a;Ia();a.Db(d);Ia();--Fa}if(!a.target)return-4;if(a.Cb)a.ec=b,a.target.addEventListener(a.Ab,b,a.Bb),J.push(a),Ka||(sa.push(Ga),Ka=!0);else for(var c=0;c<J.length;++c)J[c].target==a.target&&J[c].Ab==a.Ab&&Ha(c--);return 0}function La(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Ka,Ja,Ma,Na,N,Oa,Pa,Qa,Ra,Sa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function O(a,b){if(a){var c=B,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&Sa)a=Sa.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var k=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|k);else{var g=c[a++]&63;f=224==(f&240)?(f&15)<<12|k<<6|g:(f&7)<<18|k<<12|g<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
var Ta=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];function Q(a){a=2<a?O(a):a;return Ta[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function Ua(a){return 0>Ta.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var Va=[];function R(a){var b=Va[a];b||(a>=Va.length&&(Va.length=a+1),Va[a]=b=oa.get(a));return b}
function S(a,b,c){var d=B;if(!(0<c))return 0;var f=b;c=b+c-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0;return b-f}
function Wa(a,b,c,d,f,k){Ma||(Ma=T(256));a={target:Q(a),Ab:k,Cb:d,Db:function(g=event){var m=g.target.id?g.target.id:"",n=Ma;S(La(g.target),n+0,128);S(m,n+128,128);R(d)(f,n,b)&&g.preventDefault()},Bb:c};return M(a)}
function Xa(a,b,c,d,f,k){Na||(Na=T(176));a={target:Q(a),Hb:!0,Ab:k,Cb:d,Db:function(g){var m=Na;E[m>>3]=g.timeStamp;var n=m>>2;D[n+2]=g.location;D[n+3]=g.ctrlKey;D[n+4]=g.shiftKey;D[n+5]=g.altKey;D[n+6]=g.metaKey;D[n+7]=g.repeat;D[n+8]=g.charCode;D[n+9]=g.keyCode;D[n+10]=g.which;S(g.key||"",m+44,32);S(g.code||"",m+76,32);S(g.char||"",m+108,32);S(g.locale||"",m+140,32);R(d)(f,m,b)&&g.preventDefault()},Bb:c};return M(a)}
function Ya(a,b,c){E[a>>3]=b.timeStamp;a>>=2;D[a+2]=b.screenX;D[a+3]=b.screenY;D[a+4]=b.clientX;D[a+5]=b.clientY;D[a+6]=b.ctrlKey;D[a+7]=b.shiftKey;D[a+8]=b.altKey;D[a+9]=b.metaKey;C[2*a+20]=b.button;C[2*a+21]=b.buttons;D[a+11]=b.movementX;D[a+12]=b.movementY;c=Ua(c);D[a+13]=b.clientX-c.left;D[a+14]=b.clientY-c.top}
function U(a,b,c,d,f,k){N||(N=T(72));a=Q(a);return M({target:a,Hb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Ab:k,Cb:d,Db:function(g=event){Ya(N,g,a);R(d)(f,N,b)&&g.preventDefault()},Bb:c})}function Za(a,b,c,d,f){Oa||(Oa=T(260));return M({target:a,Ab:f,Cb:d,Db:function(k=event){var g=Oa,m=document.pointerLockElement||document.Eb||document.Pb||document.Ob;D[g>>2]=!!m;var n=m&&m.id?m.id:"";S(La(m),g+4,128);S(n,g+132,128);R(d)(20,g,b)&&k.preventDefault()},Bb:c})}
function $a(a,b,c,d,f){return M({target:a,Ab:f,Cb:d,Db:function(k=event){R(d)(38,0,b)&&k.preventDefault()},Bb:c})}
function ab(a,b,c,d){Pa||(Pa=T(36));a=Q(a);return M({target:a,Ab:"resize",Cb:d,Db:function(f=event){if(f.target==a){var k=document.body;if(k){var g=Pa;D[g>>2]=f.detail;D[g+4>>2]=k.clientWidth;D[g+8>>2]=k.clientHeight;D[g+12>>2]=innerWidth;D[g+16>>2]=innerHeight;D[g+20>>2]=outerWidth;D[g+24>>2]=outerHeight;D[g+28>>2]=pageXOffset;D[g+32>>2]=pageYOffset;R(d)(10,g,b)&&f.preventDefault()}}},Bb:c})}
function bb(a,b,c,d,f,k){Qa||(Qa=T(1696));a=Q(a);return M({target:a,Hb:"touchstart"==k||"touchend"==k,Ab:k,Cb:d,Db:function(g){for(var m,n={},p=g.touches,t=0;t<p.length;++t)m=p[t],m.Tb=m.Vb=0,n[m.identifier]=m;for(t=0;t<g.changedTouches.length;++t)m=g.changedTouches[t],m.Tb=1,n[m.identifier]=m;for(t=0;t<g.targetTouches.length;++t)n[g.targetTouches[t].identifier].Vb=1;p=Qa;E[p>>3]=g.timeStamp;var q=p>>2;D[q+3]=g.ctrlKey;D[q+4]=g.shiftKey;D[q+5]=g.altKey;D[q+6]=g.metaKey;q+=7;var K=Ua(a),P=0;for(t in n)if(m=
n[t],D[q]=m.identifier,D[q+1]=m.screenX,D[q+2]=m.screenY,D[q+3]=m.clientX,D[q+4]=m.clientY,D[q+5]=m.pageX,D[q+6]=m.pageY,D[q+7]=m.Tb,D[q+8]=m.Vb,D[q+9]=m.clientX-K.left,D[q+10]=m.clientY-K.top,q+=13,31<++P)break;D[p+8>>2]=P;R(d)(f,p,b)&&g.preventDefault()},Bb:c})}
function cb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,k){b.drawArraysInstancedANGLE(c,d,f,k)},a.drawElementsInstanced=function(c,d,f,k,g){b.drawElementsInstancedANGLE(c,d,f,k,g)})}
function db(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function eb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function fb(a){a.lc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function gb(a){a.nc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function hb(a){a.pc=a.getExtension("WEBGL_multi_draw")}var ib=1,jb=[],V=[],kb=[],lb=[],mb=[],W=[],nb=[],ob=[],pb={},qb=4;function X(a){rb||(rb=a)}function sb(a){for(var b=ib++,c=a.length;c<b;c++)a[c]=null;return b}
function tb(a,b){a.Eb||(a.Eb=a.getContext,a.getContext=function(d,f){f=a.Eb(d,f);return"webgl"==d==f instanceof WebGLRenderingContext?f:null});var c=1<b.Ub?a.getContext("webgl2",b):a.getContext("webgl",b);return c?ub(c,b):0}function ub(a,b){var c=sb(ob),d={mc:c,attributes:b,version:b.Ub,Mb:a};a.canvas&&(a.canvas.ic=d);ob[c]=d;("undefined"==typeof b.Sb||b.Sb)&&vb(d);return c}
function vb(a){a||(a=Y);if(!a.hc){a.hc=!0;var b=a.Mb;cb(b);db(b);eb(b);fb(b);gb(b);2<=a.version&&(b.Rb=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Rb)b.Rb=b.getExtension("EXT_disjoint_timer_query");hb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var rb,Y;function wb(a,b,c,d,f,k){a={target:Q(a),Ab:k,Cb:d,Db:(g=event)=>{R(d)(f,0,b)&&g.preventDefault()},Bb:c};M(a)}
function xb(a,b,c,d){Ra||(Ra=T(104));return M({target:a,Hb:!0,Ab:"wheel",Cb:d,Db:function(f=event){var k=Ra;Ya(k,f,a);E[k+72>>3]=f.deltaX;E[k+80>>3]=f.deltaY;E[k+88>>3]=f.deltaZ;D[k+96>>2]=f.deltaMode;R(d)(9,k,b)&&f.preventDefault()},Bb:c})}var yb=["default","low-power","high-performance"];function zb(a,b,c,d){for(var f=0;f<a;f++){var k=Z[c](),g=k&&sb(d);k?(k.name=g,d[g]=k):X(1282);D[b+4*f>>2]=g}}
function Ab(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>Y.version){X(1282);return}c=2*(Z.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>Y.version){X(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)D[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){X(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:X(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}D[b>>2]=c}else X(1281)}
function Bb(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}function Cb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}var Db=[];function Eb(a){a-=5120;return 0==a?ja:1==a?B:2==a?C:4==a?D:6==a?ma:5==a||28922==a||28520==a||30779==a||30782==a?la:ka}function Fb(a){if(!noExitRuntime){if(e.onExit)e.onExit(a);ia=!0}h(a,new w(a))}function Gb(a){var b=Bb(a)+1,c=Hb(b);S(a,c,b);return c}for(var Z,Ib=0;32>Ib;++Ib)Db.push(Array(Ib));
var Pb={h:function(){z("")},ea:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},fa:function(a,b,c){a=Q(a);if(!a)return-4;a=Ua(a);E[b>>3]=a.width;E[c>>3]=a.height;return 0},Wa:function(a,b,c){B.copyWithin(a,b,b+c)},Ra:function(a,b){function c(d){R(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Va:function(a){var b=B.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var f=Math,k=f.min;d=Math.max(a,d);
d+=(65536-d%65536)%65536;a:{var g=A.buffer;try{A.grow(k.call(f,2147483648,d)-g.byteLength+65535>>>16);na();var m=1;break a}catch(n){}m=void 0}if(m)return!0}return!1},O:function(a,b,c,d){return Wa(a,b,c,d,12,"blur")},da:function(a,b,c){a=Q(a);if(!a)return-4;a.width=b;a.height=c;return 0},P:function(a,b,c,d){return Wa(a,b,c,d,13,"focus")},Y:function(a,b,c,d){return Xa(a,b,c,d,2,"keydown")},W:function(a,b,c,d){return Xa(a,b,c,d,1,"keypress")},X:function(a,b,c,d){return Xa(a,b,c,d,3,"keyup")},ca:function(a,
b,c,d){return U(a,b,c,d,5,"mousedown")},$:function(a,b,c,d){return U(a,b,c,d,33,"mouseenter")},_:function(a,b,c,d){return U(a,b,c,d,34,"mouseleave")},aa:function(a,b,c,d){return U(a,b,c,d,8,"mousemove")},ba:function(a,b,c,d){return U(a,b,c,d,6,"mouseup")},R:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Eb||document.body.Pb||document.body.Ob))return-1;a=Q(a);if(!a)return-4;Za(a,b,c,d,"mozpointerlockchange");Za(a,b,c,d,"webkitpointerlockchange");Za(a,
b,c,d,"mspointerlockchange");return Za(a,b,c,d,"pointerlockchange")},Q:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Eb||document.body.Pb||document.body.Ob))return-1;a=Q(a);if(!a)return-4;$a(a,b,c,d,"mozpointerlockerror");$a(a,b,c,d,"webkitpointerlockerror");$a(a,b,c,d,"mspointerlockerror");return $a(a,b,c,d,"pointerlockerror")},Sa:function(a,b,c,d){return ab(a,b,c,d)},S:function(a,b,c,d){return bb(a,b,c,d,25,"touchcancel")},T:function(a,b,c,d){return bb(a,b,c,
d,23,"touchend")},U:function(a,b,c,d){return bb(a,b,c,d,24,"touchmove")},V:function(a,b,c,d){return bb(a,b,c,d,22,"touchstart")},N:function(a,b,c,d){wb(a,b,c,d,31,"webglcontextlost");return 0},M:function(a,b,c,d){wb(a,b,c,d,32,"webglcontextrestored");return 0},Z:function(a,b,c,d){return(a=Q(a))?"undefined"!=typeof a.onwheel?xb(a,b,c,d):-1:-4},Pa:function(a,b){b>>=2;b={alpha:!!D[b],depth:!!D[b+1],stencil:!!D[b+2],antialias:!!D[b+3],premultipliedAlpha:!!D[b+4],preserveDrawingBuffer:!!D[b+5],powerPreference:yb[D[b+
6]],failIfMajorPerformanceCaveat:!!D[b+7],Ub:D[b+8],oc:D[b+9],Sb:D[b+10],fc:D[b+11],qc:D[b+12],rc:D[b+13]};a=Q(a);return!a||b.fc?0:tb(a,b)},Na:function(a,b){a=ob[a];b=O(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&cb(Z);"OES_vertex_array_object"==b&&db(Z);"WEBGL_draw_buffers"==b&&eb(Z);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&fb(Z);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&gb(Z);"WEBGL_multi_draw"==b&&hb(Z);return!!a.Mb.getExtension(b)},Qa:function(a){a>>=
2;for(var b=0;14>b;++b)D[a+b]=0;D[a]=D[a+1]=D[a+3]=D[a+4]=D[a+8]=D[a+10]=1},Oa:function(a){Y=ob[a];e.kc=Z=Y&&Y.Mb;return!a||Z?0:-5},g:function(a){Z.activeTexture(a)},A:function(a,b){Z.attachShader(V[a],W[b])},b:function(a,b){35051==a?Z.Qb=b:35052==a&&(Z.Ib=b);Z.bindBuffer(a,jb[b])},k:function(a,b){Z.bindFramebuffer(a,kb[b])},a:function(a,b){Z.bindTexture(a,mb[b])},J:function(a){Z.bindVertexArray(nb[a])},F:function(a,b,c,d){Z.blendColor(a,b,c,d)},G:function(a,b){Z.blendEquationSeparate(a,b)},H:function(a,
b,c,d){Z.blendFuncSeparate(a,b,c,d)},Ya:function(a,b,c,d,f,k,g,m,n,p){Z.blitFramebuffer(a,b,c,d,f,k,g,m,n,p)},Aa:function(a,b,c,d){2<=Y.version?c&&b?Z.bufferData(a,B,d,c,b):Z.bufferData(a,b,d):Z.bufferData(a,c?B.subarray(c,c+b):b,d)},m:function(a,b,c,d){2<=Y.version?c&&Z.bufferSubData(a,b,B,d,c):Z.bufferSubData(a,b,B.subarray(d,d+c))},ja:function(a,b,c,d){Z.clearBufferfi(a,b,c,d)},ka:function(a,b,c){Z.clearBufferfv(a,b,ma,c>>2)},n:function(a,b,c,d){Z.colorMask(!!a,!!b,!!c,!!d)},pa:function(a){Z.compileShader(W[a])},
va:function(){var a=sb(V),b=Z.createProgram();b.name=a;b.Lb=b.Jb=b.Kb=0;b.Nb=1;V[a]=b;return a},sa:function(a){var b=sb(W);W[b]=Z.createShader(a);return b},C:function(a){Z.cullFace(a)},Ka:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],f=jb[d];f&&(Z.deleteBuffer(f),f.name=0,jb[d]=null,d==Z.Qb&&(Z.Qb=0),d==Z.Ib&&(Z.Ib=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=D[b+4*c>>2],f=kb[d];f&&(Z.deleteFramebuffer(f),f.name=0,kb[d]=null)}},v:function(a){if(a){var b=V[a];b?(Z.deleteProgram(b),b.name=
0,V[a]=null):X(1281)}},K:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],f=lb[d];f&&(Z.deleteRenderbuffer(f),f.name=0,lb[d]=null)}},r:function(a){if(a){var b=W[a];b?(Z.deleteShader(b),W[a]=null):X(1281)}},L:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],f=mb[d];f&&(Z.deleteTexture(f),f.name=0,mb[d]=null)}},Ia:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2];Z.deleteVertexArray(nb[d]);nb[d]=null}},u:function(a){Z.depthFunc(a)},t:function(a){Z.depthMask(!!a)},d:function(a){Z.disable(a)},
I:function(a){Z.disableVertexAttribArray(a)},_a:function(a,b,c){Z.drawArrays(a,b,c)},$a:function(a,b,c,d){Z.drawArraysInstanced(a,b,c,d)},ab:function(a,b,c,d){Z.drawElements(a,b,c,d)},bb:function(a,b,c,d,f){Z.drawElementsInstanced(a,b,c,d,f)},f:function(a){Z.enable(a)},cb:function(a){Z.enableVertexAttribArray(a)},D:function(a){Z.frontFace(a)},Ba:function(a,b){zb(a,b,"createBuffer",jb)},za:function(a,b){zb(a,b,"createTexture",mb)},Ha:function(a,b){zb(a,b,"createVertexArray",nb)},na:function(a,b){return Z.getAttribLocation(V[a],
O(b))},c:function(a,b){Ab(a,b)},ta:function(a,b,c,d){a=Z.getProgramInfoLog(V[a]);null===a&&(a="(unknown error)");b=0<b&&d?S(a,d,b):0;c&&(D[c>>2]=b)},z:function(a,b,c){if(c)if(a>=ib)X(1281);else if(a=V[a],35716==b)a=Z.getProgramInfoLog(a),null===a&&(a="(unknown error)"),D[c>>2]=a.length+1;else if(35719==b){if(!a.Lb)for(b=0;b<Z.getProgramParameter(a,35718);++b)a.Lb=Math.max(a.Lb,Z.getActiveUniform(a,b).name.length+1);D[c>>2]=a.Lb}else if(35722==b){if(!a.Jb)for(b=0;b<Z.getProgramParameter(a,35721);++b)a.Jb=
Math.max(a.Jb,Z.getActiveAttrib(a,b).name.length+1);D[c>>2]=a.Jb}else if(35381==b){if(!a.Kb)for(b=0;b<Z.getProgramParameter(a,35382);++b)a.Kb=Math.max(a.Kb,Z.getActiveUniformBlockName(a,b).length+1);D[c>>2]=a.Kb}else D[c>>2]=Z.getProgramParameter(a,b);else X(1281)},oa:function(a,b,c,d){a=Z.getShaderInfoLog(W[a]);null===a&&(a="(unknown error)");b=0<b&&d?S(a,d,b):0;c&&(D[c>>2]=b)},x:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(W[a]),null===a&&(a="(unknown error)"),D[c>>2]=a?a.length+1:0):35720==
b?(a=Z.getShaderSource(W[a]),D[c>>2]=a?a.length+1:0):D[c>>2]=Z.getShaderParameter(W[a],b):X(1281)},La:function(a,b){if(2>Y.version)return X(1282),0;var c=pb[a];if(c)return 0>b||b>=c.length?(X(1281),0):c[b];switch(a){case 7939:return c=Z.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){var f=Bb(d)+1,k=T(f);k&&S(d,k,f);return k}),c=pb[a]=c,0>b||b>=c.length?(X(1281),0):c[b];default:return X(1280),0}},l:function(a,b){b=O(b);if(a=V[a]){var c=a,d=c.Gb,f=c.cc,
k;if(!d)for(c.Gb=d={},c.bc={},k=0;k<Z.getProgramParameter(c,35718);++k){var g=Z.getActiveUniform(c,k);var m=g.name;g=g.size;var n=Cb(m);n=0<n?m.slice(0,n):m;var p=c.Nb;c.Nb+=g;f[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.bc[p++]=n}c=a.Gb;d=0;f=b;k=Cb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,f=b.slice(0,k));if((f=a.cc[f])&&d<f[0]&&(d+=f[1],c[d]=c[d]||Z.getUniformLocation(a,b)))return d}else X(1281);return-1},Xa:function(a,b,c){for(var d=Db[b],f=0;f<b;f++)d[f]=D[c+4*f>>2];Z.invalidateFramebuffer(a,d)},ua:function(a){a=
V[a];Z.linkProgram(a);a.Gb=0;a.cc={}},Ga:function(a,b){3317==a&&(qb=b);Z.pixelStorei(a,b)},E:function(a,b){Z.polygonOffset(a,b)},Za:function(a){Z.readBuffer(a)},la:function(a,b,c,d){Z.scissor(a,b,c,d)},qa:function(a,b,c,d){for(var f="",k=0;k<b;++k){var g=d?D[d+4*k>>2]:-1;f+=O(D[c+4*k>>2],0>g?void 0:g)}Z.shaderSource(W[a],f)},Ea:function(a,b,c){Z.stencilFunc(a,b,c)},ia:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},s:function(a){Z.stencilMask(a)},Da:function(a,b,c){Z.stencilOp(a,b,c)},ha:function(a,
b,c,d){Z.stencilOpSeparate(a,b,c,d)},ya:function(a,b,c,d,f,k,g,m,n){if(2<=Y.version)if(Z.Ib)Z.texImage2D(a,b,c,d,f,k,g,m,n);else if(n){var p=Eb(m);Z.texImage2D(a,b,c,d,f,k,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else Z.texImage2D(a,b,c,d,f,k,g,m,null);else{p=Z;var t=p.texImage2D;if(n){var q=Eb(m),K=31-Math.clz32(q.BYTES_PER_ELEMENT),P=qb;n=q.subarray(n>>K,n+f*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[g-6402]||1)*(1<<K)+P-1&-P)>>K)}else n=null;t.call(p,a,b,c,d,f,k,g,m,
n)}},wa:function(a,b,c,d,f,k,g,m,n,p){if(Z.Ib)Z.texImage3D(a,b,c,d,f,k,g,m,n,p);else if(p){var t=Eb(n);Z.texImage3D(a,b,c,d,f,k,g,m,n,t,p>>31-Math.clz32(t.BYTES_PER_ELEMENT))}else Z.texImage3D(a,b,c,d,f,k,g,m,n,null)},B:function(a,b,c){Z.texParameterf(a,b,c)},e:function(a,b,c){Z.texParameteri(a,b,c)},y:function(a,b){var c=Z,d=c.uniform1i;var f=Z.dc;if(f){var k=f.Gb[a];"number"==typeof k&&(f.Gb[a]=k=Z.getUniformLocation(f,f.bc[a]+(0<k?"["+k+"]":"")));a=k}else X(1282),a=void 0;d.call(c,a,b)},j:function(a){a=
V[a];Z.useProgram(a);Z.dc=a},db:function(a,b){Z.vertexAttribDivisor(a,b)},eb:function(a,b,c,d,f,k){Z.vertexAttribPointer(a,b,c,!!d,f,k)},ma:function(a,b,c,d){Z.viewport(a,b,c,d)},Ma:function(){e.Wb=a=>{0!=Jb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",e.Wb)},Fa:function(){e.ac=a=>{const b=a.clipboardData.getData("text");Ca(()=>{const c=Gb(b);Kb(c)})};window.addEventListener("paste",e.ac)},xa:function(a){e.sc=[];a=O(a);a=document.getElementById(a);e.Xb=b=>{b.stopPropagation();
b.preventDefault()};e.Yb=b=>{b.stopPropagation();b.preventDefault()};e.Zb=b=>{b.stopPropagation();b.preventDefault()};e.$b=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;e.tc=c;Lb(c.length);for(let d=0;d<c.length;d++)Ca(()=>{const f=Gb(c[d].name);Mb(d,f)});Nb(b.clientX,b.clientY)};a.addEventListener("dragenter",e.Xb,!1);a.addEventListener("dragleave",e.Yb,!1);a.addEventListener("dragover",e.Zb,!1);a.addEventListener("drop",e.$b,!1)},Ua:function(){const a=document.getElementById("sokol-app-favicon");
a&&document.head.removeChild(a)},q:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Ob()});document.body.append(a)},p:function(){document.getElementById("_sokol_app_input_element").focus()},fb:function(a){a=O(a);e.Fb=document.getElementById(a);e.Fb||console.log("sokol_app.h: invalid target:"+a);e.Fb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+
a)},Ja:function(){window.removeEventListener("beforeunload",e.Wb)},Ca:function(){window.removeEventListener("paste",e.ac)},ra:function(a){a=O(a);a=document.getElementById(a);a.removeEventListener("dragenter",e.Xb);a.removeEventListener("dragleave",e.Yb);a.removeEventListener("dragover",e.Zb);a.removeEventListener("drop",e.$b)},w:function(){e.Fb&&e.Fb.requestPointerLock&&e.Fb.requestPointerLock()},Ta:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const f=d.getContext("2d"),
k=f.createImageData(a,b);k.data.set(B.subarray(c,c+a*b*4));f.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},o:function(){document.getElementById("_sokol_app_input_element").blur()},ga:function(a,b){b=O(b);switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}};
(function(){function a(c){c=c.exports;e.asm=c;A=e.asm.gb;na();oa=e.asm.wb;qa.unshift(e.asm.hb);F--;e.monitorRunDependencies&&e.monitorRunDependencies(F);if(0==F&&(null!==va&&(clearInterval(va),va=null),G)){var d=G;G=null;d()}return c}var b={a:Pb};F++;e.monitorRunDependencies&&e.monitorRunDependencies(F);if(e.instantiateWasm)try{return e.instantiateWasm(b,a)}catch(c){return x("Module.instantiateWasm callback failed with error: "+c),!1}Ba(b,function(c){a(c.instance)});return{}})();
function T(){return(T=e.asm.ib).apply(null,arguments)}
var Ob=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Ob=e.__sapp_emsc_notify_keyboard_hidden=e.asm.jb).apply(null,arguments)},Kb=e.__sapp_emsc_onpaste=function(){return(Kb=e.__sapp_emsc_onpaste=e.asm.kb).apply(null,arguments)},Jb=e.__sapp_html5_get_ask_leave_site=function(){return(Jb=e.__sapp_html5_get_ask_leave_site=e.asm.lb).apply(null,arguments)},Lb=e.__sapp_emsc_begin_drop=function(){return(Lb=e.__sapp_emsc_begin_drop=e.asm.mb).apply(null,arguments)},Mb=e.__sapp_emsc_drop=function(){return(Mb=
e.__sapp_emsc_drop=e.asm.nb).apply(null,arguments)},Nb=e.__sapp_emsc_end_drop=function(){return(Nb=e.__sapp_emsc_end_drop=e.asm.ob).apply(null,arguments)};e.__sapp_emsc_invoke_fetch_cb=function(){return(e.__sapp_emsc_invoke_fetch_cb=e.asm.pb).apply(null,arguments)};var Qb=e._main=function(){return(Qb=e._main=e.asm.qb).apply(null,arguments)};e.__saudio_emsc_pull=function(){return(e.__saudio_emsc_pull=e.asm.rb).apply(null,arguments)};
e.__sfetch_emsc_head_response=function(){return(e.__sfetch_emsc_head_response=e.asm.sb).apply(null,arguments)};e.__sfetch_emsc_get_response=function(){return(e.__sfetch_emsc_get_response=e.asm.tb).apply(null,arguments)};e.__sfetch_emsc_failed_http_status=function(){return(e.__sfetch_emsc_failed_http_status=e.asm.ub).apply(null,arguments)};e.__sfetch_emsc_failed_buffer_too_small=function(){return(e.__sfetch_emsc_failed_buffer_too_small=e.asm.vb).apply(null,arguments)};
function Da(){return(Da=e.asm.xb).apply(null,arguments)}function Ea(){return(Ea=e.asm.yb).apply(null,arguments)}function Hb(){return(Hb=e.asm.zb).apply(null,arguments)}e.___start_em_js=5604;e.___stop_em_js=15123;var Rb;G=function Sb(){Rb||Tb();Rb||(G=Sb)};function Ub(a=[]){var b=Qb;a.unshift(ca);var c=a.length,d=Hb(4*(c+1)),f=d>>2;a.forEach(g=>{D[f++]=Gb(g)});D[f]=0;try{var k=b(c,d);Fb(k)}catch(g){g instanceof w||"unwind"==g||h(1,g)}}
function Tb(){var a=ba;function b(){if(!Rb&&(Rb=!0,e.calledRun=!0,!ia)){I(qa);I(ra);if(e.onRuntimeInitialized)e.onRuntimeInitialized();Vb&&Ub(a);if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var c=e.postRun.shift();ta.unshift(c)}I(ta)}}if(!(0<F)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)ua();I(pa);0<F||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):
b())}}if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Vb=!0;e.noInitialRun&&(Vb=!1);Tb();
