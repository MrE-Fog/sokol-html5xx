var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},f),ba=[],ca="./this.program",h=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,q="",fa,u,v;
if(ea){var fs=require("fs"),ha=require("path");q=l?ha.dirname(q)+"/":__dirname+"/";fa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};v=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};u=(a,b,c,d=!0)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);fs.readFile(a,d?void 0:"utf8",(e,k)=>{e?c(e):b(d?k.buffer:k)})};!f.thisProgram&&1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&
(module.exports=f);process.on("uncaughtException",a=>{if(!("unwind"===a||a instanceof w||a.context instanceof w))throw a;});if(15>process.versions.node.split(".")[0])process.on("unhandledRejection",a=>{throw a;});h=(a,b)=>{process.exitCode=a;throw b;};f.inspect=()=>"[Emscripten Module object]"}else if(da||l)l?q=self.location.href:"undefined"!=typeof document&&document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=
a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(v=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),u=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};f.print||console.log.bind(console);var x=f.printErr||console.error.bind(console);Object.assign(f,aa);
aa=null;f.arguments&&(ba=f.arguments);f.thisProgram&&(ca=f.thisProgram);f.quit&&(h=f.quit);var y;f.wasmBinary&&(y=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!=typeof WebAssembly&&z("no native wasm support detected");var ia,ja=!1,ka,A,la,ma,B,na,C,D;
function oa(){var a=ia.buffer;f.HEAP8=ka=new Int8Array(a);f.HEAP16=la=new Int16Array(a);f.HEAP32=B=new Int32Array(a);f.HEAPU8=A=new Uint8Array(a);f.HEAPU16=ma=new Uint16Array(a);f.HEAPU32=na=new Uint32Array(a);f.HEAPF32=C=new Float32Array(a);f.HEAPF64=D=new Float64Array(a)}var pa,qa=[],ra=[],sa=[],ta=[],ua=[];function va(){var a=f.preRun.shift();qa.unshift(a)}var E=0,wa=null,F=null;
function z(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";x(a);ja=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function xa(a){return a.startsWith("data:application/octet-stream;base64,")}var G;G="plmpeg-sapp.wasm";if(!xa(G)){var ya=G;G=f.locateFile?f.locateFile(ya,q):q+ya}function za(a){try{if(a==G&&y)return new Uint8Array(y);if(v)return v(a);throw"both async and sync fetching of the wasm failed";}catch(b){z(b)}}
function Aa(a){if(!y&&(da||l)){if("function"==typeof fetch&&!a.startsWith("file://"))return fetch(a,{credentials:"same-origin"}).then(b=>{if(!b.ok)throw"failed to load wasm binary file at '"+a+"'";return b.arrayBuffer()}).catch(()=>za(a));if(u)return new Promise((b,c)=>{u(a,d=>b(new Uint8Array(d)),c)})}return Promise.resolve().then(()=>za(a))}function Ba(a,b,c){return Aa(a).then(d=>WebAssembly.instantiate(d,b)).then(d=>d).then(c,d=>{x("failed to asynchronously prepare wasm: "+d);z(d)})}
function Ca(a,b){var c=G;y||"function"!=typeof WebAssembly.instantiateStreaming||xa(c)||c.startsWith("file://")||ea||"function"!=typeof fetch?Ba(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(e){x("wasm streaming compile failed: "+e);x("falling back to ArrayBuffer instantiation");return Ba(c,a,b)}))}function w(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function Da(a){for(;0<a.length;)a.shift()(f)}function Ea(a){var b=Fa();a();Ga(b)}var Ha=0;function Ia(){for(var a=H.length-1;0<=a;--a)Ja(a);H=[];Ka=[]}var Ka=[];function La(){if(Ha&&Ma.bc)for(var a=0;a<Ka.length;++a){var b=Ka[a];Ka.splice(a,1);--a;b.Oc.apply(null,b.Dc)}}var H=[];function Ja(a){var b=H[a];b.target.removeEventListener(b.Tb,b.zc,b.Ub);H.splice(a,1)}
function I(a){function b(d){++Ha;Ma=a;La();a.Wb(d);La();--Ha}if(!a.target)return-4;if(a.Vb)a.zc=b,a.target.addEventListener(a.Tb,b,a.Ub),H.push(a),Na||(ta.push(Ia),Na=!0);else for(var c=0;c<H.length;++c)H[c].target==a.target&&H[c].Tb==a.Tb&&Ja(c--);return 0}function Oa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Na,Ma,Pa,Qa,Ra,Sa,Ta,Ua,Va,Wa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function J(a,b){if(a){var c=A,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&Wa)a=Wa.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var k=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var g=c[a++]&63;e=224==(e&240)?(e&15)<<12|k<<6|g:(e&7)<<18|k<<12|g<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
var Xa=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];function K(a){a=2<a?J(a):a;return Xa[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function Ya(a){return 0>Xa.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var Za=[];function L(a){var b=Za[a];b||(a>=Za.length&&(Za.length=a+1),Za[a]=b=pa.get(a));return b}
function M(a,b,c){var d=A;if(!(0<c))return 0;var e=b;c=b+c-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0;return b-e}
function $a(a,b,c,d,e,k){Pa||(Pa=N(256));a={target:K(a),Tb:k,Vb:d,Wb:function(g=event){var m=g.target.id?g.target.id:"",n=Pa;M(Oa(g.target),n+0,128);M(m,n+128,128);L(d)(e,n,b)&&g.preventDefault()},Ub:c};return I(a)}
function ab(a,b,c,d,e,k){Qa||(Qa=N(176));a={target:K(a),bc:!0,Tb:k,Vb:d,Wb:function(g){var m=Qa;D[m>>3]=g.timeStamp;var n=m>>2;B[n+2]=g.location;B[n+3]=g.ctrlKey;B[n+4]=g.shiftKey;B[n+5]=g.altKey;B[n+6]=g.metaKey;B[n+7]=g.repeat;B[n+8]=g.charCode;B[n+9]=g.keyCode;B[n+10]=g.which;M(g.key||"",m+44,32);M(g.code||"",m+76,32);M(g.char||"",m+108,32);M(g.locale||"",m+140,32);L(d)(e,m,b)&&g.preventDefault()},Ub:c};return I(a)}
function bb(a,b,c){D[a>>3]=b.timeStamp;a>>=2;B[a+2]=b.screenX;B[a+3]=b.screenY;B[a+4]=b.clientX;B[a+5]=b.clientY;B[a+6]=b.ctrlKey;B[a+7]=b.shiftKey;B[a+8]=b.altKey;B[a+9]=b.metaKey;la[2*a+20]=b.button;la[2*a+21]=b.buttons;B[a+11]=b.movementX;B[a+12]=b.movementY;c=Ya(c);B[a+13]=b.clientX-c.left;B[a+14]=b.clientY-c.top}
function O(a,b,c,d,e,k){Ra||(Ra=N(72));a=K(a);return I({target:a,bc:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Tb:k,Vb:d,Wb:function(g=event){bb(Ra,g,a);L(d)(e,Ra,b)&&g.preventDefault()},Ub:c})}function cb(a,b,c,d,e){Sa||(Sa=N(260));return I({target:a,Tb:e,Vb:d,Wb:function(k=event){var g=Sa,m=document.pointerLockElement||document.Zb||document.jc||document.ic;B[g>>2]=!!m;var n=m&&m.id?m.id:"";M(Oa(m),g+4,128);M(n,g+132,128);L(d)(20,g,b)&&k.preventDefault()},Ub:c})}
function db(a,b,c,d,e){return I({target:a,Tb:e,Vb:d,Wb:function(k=event){L(d)(38,0,b)&&k.preventDefault()},Ub:c})}
function eb(a,b,c,d){Ta||(Ta=N(36));a=K(a);return I({target:a,Tb:"resize",Vb:d,Wb:function(e=event){if(e.target==a){var k=document.body;if(k){var g=Ta;B[g>>2]=e.detail;B[g+4>>2]=k.clientWidth;B[g+8>>2]=k.clientHeight;B[g+12>>2]=innerWidth;B[g+16>>2]=innerHeight;B[g+20>>2]=outerWidth;B[g+24>>2]=outerHeight;B[g+28>>2]=pageXOffset;B[g+32>>2]=pageYOffset;L(d)(10,g,b)&&e.preventDefault()}}},Ub:c})}
function fb(a,b,c,d,e,k){Ua||(Ua=N(1696));a=K(a);return I({target:a,bc:"touchstart"==k||"touchend"==k,Tb:k,Vb:d,Wb:function(g){for(var m,n={},p=g.touches,r=0;r<p.length;++r)m=p[r],m.nc=m.pc=0,n[m.identifier]=m;for(r=0;r<g.changedTouches.length;++r)m=g.changedTouches[r],m.nc=1,n[m.identifier]=m;for(r=0;r<g.targetTouches.length;++r)n[g.targetTouches[r].identifier].pc=1;p=Ua;D[p>>3]=g.timeStamp;var t=p>>2;B[t+3]=g.ctrlKey;B[t+4]=g.shiftKey;B[t+5]=g.altKey;B[t+6]=g.metaKey;t+=7;var kb=Ya(a),lb=0;for(r in n)if(m=
n[r],B[t]=m.identifier,B[t+1]=m.screenX,B[t+2]=m.screenY,B[t+3]=m.clientX,B[t+4]=m.clientY,B[t+5]=m.pageX,B[t+6]=m.pageY,B[t+7]=m.nc,B[t+8]=m.pc,B[t+9]=m.clientX-kb.left,B[t+10]=m.clientY-kb.top,t+=13,31<++lb)break;B[p+8>>2]=lb;L(d)(e,p,b)&&g.preventDefault()},Ub:c})}
function gb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,g){b.drawElementsInstancedANGLE(c,d,e,k,g)})}
function hb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function ib(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function jb(a){a.Fc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function mb(a){a.Hc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function nb(a){a.Jc=a.getExtension("WEBGL_multi_draw")}var ob=1,pb=[],P=[],qb=[],rb=[],sb=[],Q=[],tb=[],ub=[],vb={},wb=4;function R(a){xb||(xb=a)}function yb(a){for(var b=ob++,c=a.length;c<b;c++)a[c]=null;return b}
function zb(a,b){a.Zb||(a.Zb=a.getContext,a.getContext=function(d,e){e=a.Zb(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.oc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Ab(c,b):0}function Ab(a,b){var c=yb(ub),d={Gc:c,attributes:b,version:b.oc,fc:a};a.canvas&&(a.canvas.Cc=d);ub[c]=d;("undefined"==typeof b.mc||b.mc)&&Bb(d);return c}
function Bb(a){a||(a=S);if(!a.Bc){a.Bc=!0;var b=a.fc;gb(b);hb(b);ib(b);jb(b);mb(b);2<=a.version&&(b.lc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.lc)b.lc=b.getExtension("EXT_disjoint_timer_query");nb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var xb,S;function Cb(a,b,c,d,e,k){a={target:K(a),Tb:k,Vb:d,Wb:(g=event)=>{L(d)(e,0,b)&&g.preventDefault()},Ub:c};I(a)}
function Db(a,b,c,d){Va||(Va=N(104));return I({target:a,bc:!0,Tb:"wheel",Vb:d,Wb:function(e=event){var k=Va;bb(k,e,a);D[k+72>>3]=e.deltaX;D[k+80>>3]=e.deltaY;D[k+88>>3]=e.deltaZ;B[k+96>>2]=e.deltaMode;L(d)(9,k,b)&&e.preventDefault()},Ub:c})}var Eb=["default","low-power","high-performance"];function Fb(a,b,c,d){for(var e=0;e<a;e++){var k=T[c](),g=k&&yb(d);k?(k.name=g,d[g]=k):R(1282);B[b+4*e>>2]=g}}
function Gb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=T.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>S.version){R(1282);return}c=2*(T.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>S.version){R(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=T.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":R(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:R(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)B[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){R(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:R(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}B[b>>2]=c}else R(1281)}
function Hb(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}function Ib(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}var Jb=[];function U(a){a-=5120;return 0==a?ka:1==a?A:2==a?la:4==a?B:6==a?C:5==a||28922==a||28520==a||30779==a||30782==a?na:ma}function V(a){return 31-Math.clz32(a.BYTES_PER_ELEMENT)}
function Kb(a,b,c,d,e){a=U(a);var k=V(a),g=wb;return a.subarray(e>>k,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<k)+g-1&-g)>>k)}function W(a){var b=T.yc;if(b){var c=b.ac[a];"number"==typeof c&&(b.ac[a]=c=T.getUniformLocation(b,b.wc[a]+(0<c?"["+c+"]":"")));return c}R(1282)}var X=[],Y=[];function Lb(a){if(!noExitRuntime){if(f.onExit)f.onExit(a);ja=!0}h(a,new w(a))}function Mb(a){var b=Hb(a)+1,c=Nb(b);M(a,c,b);return c}for(var T,Z=0;32>Z;++Z)Jb.push(Array(Z));
var Ob=new Float32Array(288);for(Z=0;288>Z;++Z)X[Z]=Ob.subarray(0,Z+1);var Pb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Pb.subarray(0,Z+1);
var ac={h:function(){z("")},ea:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},fa:function(a,b,c){a=K(a);if(!a)return-4;a=Ya(a);D[b>>3]=a.width;D[c>>3]=a.height;return 0},Wa:function(a,b,c){A.copyWithin(a,b,b+c)},Qa:function(a,b){function c(d){L(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Va:function(a){var b=A.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math,k=e.min;d=Math.max(a,d);
d+=(65536-d%65536)%65536;a:{var g=ia.buffer;try{ia.grow(k.call(e,2147483648,d)-g.byteLength+65535>>>16);oa();var m=1;break a}catch(n){}m=void 0}if(m)return!0}return!1},O:function(a,b,c,d){return $a(a,b,c,d,12,"blur")},da:function(a,b,c){a=K(a);if(!a)return-4;a.width=b;a.height=c;return 0},P:function(a,b,c,d){return $a(a,b,c,d,13,"focus")},Y:function(a,b,c,d){return ab(a,b,c,d,2,"keydown")},W:function(a,b,c,d){return ab(a,b,c,d,1,"keypress")},X:function(a,b,c,d){return ab(a,b,c,d,3,"keyup")},ca:function(a,
b,c,d){return O(a,b,c,d,5,"mousedown")},$:function(a,b,c,d){return O(a,b,c,d,33,"mouseenter")},_:function(a,b,c,d){return O(a,b,c,d,34,"mouseleave")},aa:function(a,b,c,d){return O(a,b,c,d,8,"mousemove")},ba:function(a,b,c,d){return O(a,b,c,d,6,"mouseup")},R:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Zb||document.body.jc||document.body.ic))return-1;a=K(a);if(!a)return-4;cb(a,b,c,d,"mozpointerlockchange");cb(a,b,c,d,"webkitpointerlockchange");cb(a,
b,c,d,"mspointerlockchange");return cb(a,b,c,d,"pointerlockchange")},Q:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Zb||document.body.jc||document.body.ic))return-1;a=K(a);if(!a)return-4;db(a,b,c,d,"mozpointerlockerror");db(a,b,c,d,"webkitpointerlockerror");db(a,b,c,d,"mspointerlockerror");return db(a,b,c,d,"pointerlockerror")},Ra:function(a,b,c,d){return eb(a,b,c,d)},S:function(a,b,c,d){return fb(a,b,c,d,25,"touchcancel")},T:function(a,b,c,d){return fb(a,b,c,
d,23,"touchend")},U:function(a,b,c,d){return fb(a,b,c,d,24,"touchmove")},V:function(a,b,c,d){return fb(a,b,c,d,22,"touchstart")},N:function(a,b,c,d){Cb(a,b,c,d,31,"webglcontextlost");return 0},M:function(a,b,c,d){Cb(a,b,c,d,32,"webglcontextrestored");return 0},Z:function(a,b,c,d){return(a=K(a))?"undefined"!=typeof a.onwheel?Db(a,b,c,d):-1:-4},Oa:function(a,b){b>>=2;b={alpha:!!B[b],depth:!!B[b+1],stencil:!!B[b+2],antialias:!!B[b+3],premultipliedAlpha:!!B[b+4],preserveDrawingBuffer:!!B[b+5],powerPreference:Eb[B[b+
6]],failIfMajorPerformanceCaveat:!!B[b+7],oc:B[b+8],Ic:B[b+9],mc:B[b+10],Ac:B[b+11],Kc:B[b+12],Lc:B[b+13]};a=K(a);return!a||b.Ac?0:zb(a,b)},Ma:function(a,b){a=ub[a];b=J(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&gb(T);"OES_vertex_array_object"==b&&hb(T);"WEBGL_draw_buffers"==b&&ib(T);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&jb(T);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&mb(T);"WEBGL_multi_draw"==b&&nb(T);return!!a.fc.getExtension(b)},Pa:function(a){a>>=
2;for(var b=0;14>b;++b)B[a+b]=0;B[a]=B[a+1]=B[a+3]=B[a+4]=B[a+8]=B[a+10]=1},Na:function(a){S=ub[a];f.Ec=T=S&&S.fc;return!a||T?0:-5},e:function(a){T.activeTexture(a)},z:function(a,b){T.attachShader(P[a],Q[b])},d:function(a,b){35051==a?T.kc=b:35052==a&&(T.Yb=b);T.bindBuffer(a,pb[b])},n:function(a,b){T.bindFramebuffer(a,qb[b])},a:function(a,b){T.bindTexture(a,sb[b])},I:function(a){T.bindVertexArray(tb[a])},E:function(a,b,c,d){T.blendColor(a,b,c,d)},F:function(a,b){T.blendEquationSeparate(a,b)},G:function(a,
b,c,d){T.blendFuncSeparate(a,b,c,d)},$a:function(a,b,c,d,e,k,g,m,n,p){T.blitFramebuffer(a,b,c,d,e,k,g,m,n,p)},xa:function(a,b,c,d){2<=S.version?c&&b?T.bufferData(a,A,d,c,b):T.bufferData(a,b,d):T.bufferData(a,c?A.subarray(c,c+b):b,d)},wa:function(a,b,c,d){2<=S.version?c&&T.bufferSubData(a,b,A,d,c):T.bufferSubData(a,b,A.subarray(d,d+c))},ub:function(a,b,c,d){T.clearBufferfi(a,b,c,d)},ka:function(a,b,c){T.clearBufferfv(a,b,C,c>>2)},tb:function(a,b,c){T.clearBufferiv(a,b,B,c>>2)},i:function(a,b,c,d){T.colorMask(!!a,
!!b,!!c,!!d)},ma:function(a){T.compileShader(Q[a])},sa:function(){var a=yb(P),b=T.createProgram();b.name=a;b.ec=b.cc=b.dc=0;b.hc=1;P[a]=b;return a},oa:function(a){var b=yb(Q);Q[b]=T.createShader(a);return b},B:function(a){T.cullFace(a)},Ha:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2],e=pb[d];e&&(T.deleteBuffer(e),e.name=0,pb[d]=null,d==T.kc&&(T.kc=0),d==T.Yb&&(T.Yb=0))}},j:function(a,b){for(var c=0;c<a;++c){var d=B[b+4*c>>2],e=qb[d];e&&(T.deleteFramebuffer(e),e.name=0,qb[d]=null)}},J:function(a){if(a){var b=
P[a];b?(T.deleteProgram(b),b.name=0,P[a]=null):R(1281)}},K:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2],e=rb[d];e&&(T.deleteRenderbuffer(e),e.name=0,rb[d]=null)}},q:function(a){if(a){var b=Q[a];b?(T.deleteShader(b),Q[a]=null):R(1281)}},L:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2],e=sb[d];e&&(T.deleteTexture(e),e.name=0,sb[d]=null)}},Fa:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2];T.deleteVertexArray(tb[d]);tb[d]=null}},t:function(a){T.depthFunc(a)},s:function(a){T.depthMask(!!a)},
c:function(a){T.disable(a)},H:function(a){T.disableVertexAttribArray(a)},bb:function(a,b,c){T.drawArrays(a,b,c)},cb:function(a,b,c,d){T.drawArraysInstanced(a,b,c,d)},db:function(a,b,c,d){T.drawElements(a,b,c,d)},eb:function(a,b,c,d,e){T.drawElementsInstanced(a,b,c,d,e)},g:function(a){T.enable(a)},pb:function(a){T.enableVertexAttribArray(a)},C:function(a){T.frontFace(a)},za:function(a,b){Fb(a,b,"createBuffer",pb)},va:function(a,b){Fb(a,b,"createTexture",sb)},Ea:function(a,b){Fb(a,b,"createVertexArray",
tb)},xb:function(a,b){return T.getAttribLocation(P[a],J(b))},b:function(a,b){Gb(a,b)},pa:function(a,b,c,d){a=T.getProgramInfoLog(P[a]);null===a&&(a="(unknown error)");b=0<b&&d?M(a,d,b):0;c&&(B[c>>2]=b)},y:function(a,b,c){if(c)if(a>=ob)R(1281);else if(a=P[a],35716==b)a=T.getProgramInfoLog(a),null===a&&(a="(unknown error)"),B[c>>2]=a.length+1;else if(35719==b){if(!a.ec)for(b=0;b<T.getProgramParameter(a,35718);++b)a.ec=Math.max(a.ec,T.getActiveUniform(a,b).name.length+1);B[c>>2]=a.ec}else if(35722==
b){if(!a.cc)for(b=0;b<T.getProgramParameter(a,35721);++b)a.cc=Math.max(a.cc,T.getActiveAttrib(a,b).name.length+1);B[c>>2]=a.cc}else if(35381==b){if(!a.dc)for(b=0;b<T.getProgramParameter(a,35382);++b)a.dc=Math.max(a.dc,T.getActiveUniformBlockName(a,b).length+1);B[c>>2]=a.dc}else B[c>>2]=T.getProgramParameter(a,b);else R(1281)},la:function(a,b,c,d){a=T.getShaderInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?M(a,d,b):0;c&&(B[c>>2]=b)},w:function(a,b,c){c?35716==b?(a=T.getShaderInfoLog(Q[a]),
null===a&&(a="(unknown error)"),B[c>>2]=a?a.length+1:0):35720==b?(a=T.getShaderSource(Q[a]),B[c>>2]=a?a.length+1:0):B[c>>2]=T.getShaderParameter(Q[a],b):R(1281)},Ia:function(a,b){if(2>S.version)return R(1282),0;var c=vb[a];if(c)return 0>b||b>=c.length?(R(1281),0):c[b];switch(a){case 7939:return c=T.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){var e=Hb(d)+1,k=N(e);k&&M(d,k,e);return k}),c=vb[a]=c,0>b||b>=c.length?(R(1281),0):c[b];default:return R(1280),
0}},k:function(a,b){b=J(b);if(a=P[a]){var c=a,d=c.ac,e=c.xc,k;if(!d)for(c.ac=d={},c.wc={},k=0;k<T.getProgramParameter(c,35718);++k){var g=T.getActiveUniform(c,k);var m=g.name;g=g.size;var n=Ib(m);n=0<n?m.slice(0,n):m;var p=c.hc;c.hc+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.wc[p++]=n}c=a.ac;d=0;e=b;k=Ib(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.xc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||T.getUniformLocation(a,b)))return d}else R(1281);return-1},_a:function(a,b,c){for(var d=Jb[b],e=0;e<b;e++)d[e]=
B[c+4*e>>2];T.invalidateFramebuffer(a,d)},ra:function(a){a=P[a];T.linkProgram(a);a.ac=0;a.xc={}},Da:function(a,b){3317==a&&(wb=b);T.pixelStorei(a,b)},D:function(a,b){T.polygonOffset(a,b)},ab:function(a){T.readBuffer(a)},vb:function(a,b,c,d){T.scissor(a,b,c,d)},na:function(a,b,c,d){for(var e="",k=0;k<b;++k){var g=d?B[d+4*k>>2]:-1;e+=J(B[c+4*k>>2],0>g?void 0:g)}T.shaderSource(Q[a],e)},Ca:function(a,b,c){T.stencilFunc(a,b,c)},ja:function(a,b,c,d){T.stencilFuncSeparate(a,b,c,d)},r:function(a){T.stencilMask(a)},
Aa:function(a,b,c){T.stencilOp(a,b,c)},ia:function(a,b,c,d){T.stencilOpSeparate(a,b,c,d)},ua:function(a,b,c,d,e,k,g,m,n){if(2<=S.version)if(T.Yb)T.texImage2D(a,b,c,d,e,k,g,m,n);else if(n){var p=U(m);T.texImage2D(a,b,c,d,e,k,g,m,p,n>>V(p))}else T.texImage2D(a,b,c,d,e,k,g,m,null);else T.texImage2D(a,b,c,d,e,k,g,m,n?Kb(m,g,d,e,n):null)},ta:function(a,b,c,d,e,k,g,m,n,p){if(T.Yb)T.texImage3D(a,b,c,d,e,k,g,m,n,p);else if(p){var r=U(n);T.texImage3D(a,b,c,d,e,k,g,m,n,r,p>>V(r))}else T.texImage3D(a,b,c,d,
e,k,g,m,n,null)},A:function(a,b,c){T.texParameterf(a,b,c)},f:function(a,b,c){T.texParameteri(a,b,c)},Za:function(a,b,c,d,e,k,g,m,n){if(2<=S.version)if(T.Yb)T.texSubImage2D(a,b,c,d,e,k,g,m,n);else if(n){var p=U(m);T.texSubImage2D(a,b,c,d,e,k,g,m,p,n>>V(p))}else T.texSubImage2D(a,b,c,d,e,k,g,m,null);else p=null,n&&(p=Kb(m,g,e,k,n)),T.texSubImage2D(a,b,c,d,e,k,g,m,p)},Ya:function(a,b,c,d,e,k,g,m,n,p,r){if(T.Yb)T.texSubImage3D(a,b,c,d,e,k,g,m,n,p,r);else if(r){var t=U(p);T.texSubImage3D(a,b,c,d,e,k,g,
m,n,p,t,r>>V(t))}else T.texSubImage3D(a,b,c,d,e,k,g,m,n,p,null)},ob:function(a,b,c){if(2<=S.version)b&&T.uniform1fv(W(a),C,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=C[c+4*e>>2];else d=C.subarray(c>>2,c+4*b>>2);T.uniform1fv(W(a),d)}},x:function(a,b){T.uniform1i(W(a),b)},kb:function(a,b,c){if(2<=S.version)b&&T.uniform1iv(W(a),B,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=B[c+4*e>>2];else d=B.subarray(c>>2,c+4*b>>2);T.uniform1iv(W(a),d)}},nb:function(a,b,c){if(2<=S.version)b&&
T.uniform2fv(W(a),C,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2];else d=C.subarray(c>>2,c+8*b>>2);T.uniform2fv(W(a),d)}},jb:function(a,b,c){if(2<=S.version)b&&T.uniform2iv(W(a),B,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=B[c+4*e>>2],d[e+1]=B[c+(4*e+4)>>2];else d=B.subarray(c>>2,c+8*b>>2);T.uniform2iv(W(a),d)}},mb:function(a,b,c){if(2<=S.version)b&&T.uniform3fv(W(a),C,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=
3)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2];else d=C.subarray(c>>2,c+12*b>>2);T.uniform3fv(W(a),d)}},ib:function(a,b,c){if(2<=S.version)b&&T.uniform3iv(W(a),B,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=B[c+4*e>>2],d[e+1]=B[c+(4*e+4)>>2],d[e+2]=B[c+(4*e+8)>>2];else d=B.subarray(c>>2,c+12*b>>2);T.uniform3iv(W(a),d)}},lb:function(a,b,c){if(2<=S.version)b&&T.uniform4fv(W(a),C,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=C;c>>=2;for(var k=0;k<4*b;k+=4){var g=c+k;d[k]=
e[g];d[k+1]=e[g+1];d[k+2]=e[g+2];d[k+3]=e[g+3]}}else d=C.subarray(c>>2,c+16*b>>2);T.uniform4fv(W(a),d)}},hb:function(a,b,c){if(2<=S.version)b&&T.uniform4iv(W(a),B,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=B[c+4*e>>2],d[e+1]=B[c+(4*e+4)>>2],d[e+2]=B[c+(4*e+8)>>2],d[e+3]=B[c+(4*e+12)>>2];else d=B.subarray(c>>2,c+16*b>>2);T.uniform4iv(W(a),d)}},fb:function(a,b,c,d){if(2<=S.version)b&&T.uniformMatrix4fv(W(a),!!c,C,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],k=C;d>>=2;for(var g=0;g<
16*b;g+=16){var m=d+g;e[g]=k[m];e[g+1]=k[m+1];e[g+2]=k[m+2];e[g+3]=k[m+3];e[g+4]=k[m+4];e[g+5]=k[m+5];e[g+6]=k[m+6];e[g+7]=k[m+7];e[g+8]=k[m+8];e[g+9]=k[m+9];e[g+10]=k[m+10];e[g+11]=k[m+11];e[g+12]=k[m+12];e[g+13]=k[m+13];e[g+14]=k[m+14];e[g+15]=k[m+15]}}else e=C.subarray(d>>2,d+64*b>>2);T.uniformMatrix4fv(W(a),!!c,e)}},l:function(a){a=P[a];T.useProgram(a);T.yc=a},qb:function(a,b){T.vertexAttribDivisor(a,b)},sb:function(a,b,c,d,e,k){T.vertexAttribPointer(a,b,c,!!d,e,k)},wb:function(a,b,c,d){T.viewport(a,
b,c,d)},La:function(){f.qc=a=>{0!=Qb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.qc)},Ja:function(){f.vc=a=>{const b=a.clipboardData.getData("text");Ea(()=>{const c=Mb(b);Rb(c)})};window.addEventListener("paste",f.vc)},Ba:function(a){f.Mc=[];a=J(a);a=document.getElementById(a);f.rc=b=>{b.stopPropagation();b.preventDefault()};f.sc=b=>{b.stopPropagation();b.preventDefault()};f.tc=b=>{b.stopPropagation();b.preventDefault()};f.uc=b=>{b.stopPropagation();b.preventDefault();
const c=b.dataTransfer.files;f.Nc=c;Sb(c.length);for(let d=0;d<c.length;d++)Ea(()=>{const e=Mb(c[d].name);Tb(d,e)});Ub(b.clientX,b.clientY)};a.addEventListener("dragenter",f.rc,!1);a.addEventListener("dragleave",f.sc,!1);a.addEventListener("dragover",f.tc,!1);a.addEventListener("drop",f.uc,!1)},rb:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},p:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize=
"none";a.addEventListener("focusout",function(){Vb()});document.body.append(a)},o:function(){document.getElementById("_sokol_app_input_element").focus()},qa:function(a){a=J(a);f.$b=document.getElementById(a);f.$b||console.log("sokol_app.h: invalid target:"+a);f.$b.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ka:function(){window.removeEventListener("beforeunload",f.qc)},Ga:function(){window.removeEventListener("paste",f.vc)},ya:function(a){a=J(a);a=
document.getElementById(a);a.removeEventListener("dragenter",f.rc);a.removeEventListener("dragleave",f.sc);a.removeEventListener("dragover",f.tc);a.removeEventListener("drop",f.uc)},v:function(){f.$b&&f.$b.requestPointerLock&&f.$b.requestPointerLock()},gb:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(A.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel=
"shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},m:function(){document.getElementById("_sokol_app_input_element").blur()},Sa:function(){return f.Xb?f.Xb.bufferSize:0},Xa:function(a,b,c){f.Sb=null;f.Xb=null;"undefined"!==typeof AudioContext?f.Sb=new AudioContext({sampleRate:a,latencyHint:"interactive"}):(f.Sb=null,console.log("sokol_audio.h: no WebAudio support"));return f.Sb?(console.log("sokol_audio.h: sample rate ",f.Sb.sampleRate),f.Xb=f.Sb.createScriptProcessor(c,0,b),f.Xb.onaudioprocess=
d=>{const e=d.outputBuffer.length,k=Wb(e);if(k){const g=d.outputBuffer.numberOfChannels;for(let m=0;m<g;m++){const n=d.outputBuffer.getChannelData(m);for(let p=0;p<e;p++)n[p]=C[(k>>2)+(g*p+m)]}}},f.Xb.connect(f.Sb.destination),a=()=>{f.Sb&&"suspended"===f.Sb.state&&f.Sb.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchend",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),1):0},Ta:function(){return f.Sb?f.Sb.sampleRate:0},Ua:function(){const a=f.Sb;
null!==a&&(f.Xb&&f.Xb.disconnect(),a.close(),f.Sb=null,f.Xb=null)},u:function(a,b,c,d,e,k){b=J(b);const g=new XMLHttpRequest;g.open("GET",b);g.responseType="arraybuffer";const m=0<d;m&&g.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));g.onreadystatechange=function(){if(g.readyState==XMLHttpRequest.DONE)if(206==g.status||200==g.status&&!m){const n=new Uint8Array(g.response),p=n.length;p<=k?(A.set(n,e),Xb(a,d,p)):Yb(a)}else Zb(a,g.status)};g.send()},ha:function(a,b){b=J(b);const c=new XMLHttpRequest;
c.open("HEAD",b);c.onreadystatechange=function(){if(c.readyState==XMLHttpRequest.DONE)if(200==c.status){const d=c.getResponseHeader("Content-Length");$b(a,d)}else Zb(a,c.status)};c.send()},ga:function(a,b){b=J(b);switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}};
(function(){function a(c){c=c.exports;f.asm=c;ia=f.asm.yb;oa();pa=f.asm.Ob;ra.unshift(f.asm.zb);E--;f.monitorRunDependencies&&f.monitorRunDependencies(E);if(0==E&&(null!==wa&&(clearInterval(wa),wa=null),F)){var d=F;F=null;d()}return c}var b={a:ac};E++;f.monitorRunDependencies&&f.monitorRunDependencies(E);if(f.instantiateWasm)try{return f.instantiateWasm(b,a)}catch(c){return x("Module.instantiateWasm callback failed with error: "+c),!1}Ca(b,function(c){a(c.instance)});return{}})();
function N(){return(N=f.asm.Ab).apply(null,arguments)}
var Vb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Vb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Bb).apply(null,arguments)},Rb=f.__sapp_emsc_onpaste=function(){return(Rb=f.__sapp_emsc_onpaste=f.asm.Cb).apply(null,arguments)},Qb=f.__sapp_html5_get_ask_leave_site=function(){return(Qb=f.__sapp_html5_get_ask_leave_site=f.asm.Db).apply(null,arguments)},Sb=f.__sapp_emsc_begin_drop=function(){return(Sb=f.__sapp_emsc_begin_drop=f.asm.Eb).apply(null,arguments)},Tb=f.__sapp_emsc_drop=function(){return(Tb=
f.__sapp_emsc_drop=f.asm.Fb).apply(null,arguments)},Ub=f.__sapp_emsc_end_drop=function(){return(Ub=f.__sapp_emsc_end_drop=f.asm.Gb).apply(null,arguments)};f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Hb).apply(null,arguments)};
var bc=f._main=function(){return(bc=f._main=f.asm.Ib).apply(null,arguments)},Wb=f.__saudio_emsc_pull=function(){return(Wb=f.__saudio_emsc_pull=f.asm.Jb).apply(null,arguments)},$b=f.__sfetch_emsc_head_response=function(){return($b=f.__sfetch_emsc_head_response=f.asm.Kb).apply(null,arguments)},Xb=f.__sfetch_emsc_get_response=function(){return(Xb=f.__sfetch_emsc_get_response=f.asm.Lb).apply(null,arguments)},Zb=f.__sfetch_emsc_failed_http_status=function(){return(Zb=f.__sfetch_emsc_failed_http_status=
f.asm.Mb).apply(null,arguments)},Yb=f.__sfetch_emsc_failed_buffer_too_small=function(){return(Yb=f.__sfetch_emsc_failed_buffer_too_small=f.asm.Nb).apply(null,arguments)};function Fa(){return(Fa=f.asm.Pb).apply(null,arguments)}function Ga(){return(Ga=f.asm.Qb).apply(null,arguments)}function Nb(){return(Nb=f.asm.Rb).apply(null,arguments)}f.___start_em_js=14456;f.___stop_em_js=23975;var cc;F=function dc(){cc||ec();cc||(F=dc)};
function fc(a=[]){var b=bc;a.unshift(ca);var c=a.length,d=Nb(4*(c+1)),e=d>>2;a.forEach(g=>{B[e++]=Mb(g)});B[e]=0;try{var k=b(c,d);Lb(k)}catch(g){g instanceof w||"unwind"==g||h(1,g)}}
function ec(){var a=ba;function b(){if(!cc&&(cc=!0,f.calledRun=!0,!ja)){Da(ra);Da(sa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();gc&&fc(a);if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var c=f.postRun.shift();ua.unshift(c)}Da(ua)}}if(!(0<E)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)va();Da(qa);0<E||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},
1)):b())}}if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var gc=!0;f.noInitialRun&&(gc=!1);ec();
