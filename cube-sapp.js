var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},f),ba=[],ca="./this.program",h=(a,b)=>{throw b;},da="object"==typeof window,k="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,p="",fa,q,r;
if(ea){var fs=require("fs"),ha=require("path");p=k?ha.dirname(p)+"/":__dirname+"/";fa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};r=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};q=(a,b,c,d=!0)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);fs.readFile(a,d?void 0:"utf8",(e,l)=>{e?c(e):b(d?l.buffer:l)})};!f.thisProgram&&1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&
(module.exports=f);process.on("uncaughtException",a=>{if(!("unwind"===a||a instanceof t||a.context instanceof t))throw a;});if(15>process.versions.node.split(".")[0])process.on("unhandledRejection",a=>{throw a;});h=(a,b)=>{process.exitCode=a;throw b;};f.inspect=()=>"[Emscripten Module object]"}else if(da||k)k?p=self.location.href:"undefined"!=typeof document&&document.currentScript&&(p=document.currentScript.src),p=0!==p.indexOf("blob:")?p.substr(0,p.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=
a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},k&&(r=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),q=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};f.print||console.log.bind(console);var x=f.printErr||console.error.bind(console);Object.assign(f,aa);
aa=null;f.arguments&&(ba=f.arguments);f.thisProgram&&(ca=f.thisProgram);f.quit&&(h=f.quit);var y;f.wasmBinary&&(y=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!=typeof WebAssembly&&z("no native wasm support detected");var A,ia=!1,B,ja,C,D,E;
function ka(){var a=A.buffer;f.HEAP8=new Int8Array(a);f.HEAP16=ja=new Int16Array(a);f.HEAP32=C=new Int32Array(a);f.HEAPU8=B=new Uint8Array(a);f.HEAPU16=new Uint16Array(a);f.HEAPU32=new Uint32Array(a);f.HEAPF32=D=new Float32Array(a);f.HEAPF64=E=new Float64Array(a)}var la,ma=[],na=[],oa=[],pa=[],qa=[];function ra(){var a=f.preRun.shift();ma.unshift(a)}var F=0,sa=null,G=null;
function z(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";x(a);ia=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function ta(a){return a.startsWith("data:application/octet-stream;base64,")}var H;H="cube-sapp.wasm";if(!ta(H)){var ua=H;H=f.locateFile?f.locateFile(ua,p):p+ua}function va(a){try{if(a==H&&y)return new Uint8Array(y);if(r)return r(a);throw"both async and sync fetching of the wasm failed";}catch(b){z(b)}}
function wa(a){if(!y&&(da||k)){if("function"==typeof fetch&&!a.startsWith("file://"))return fetch(a,{credentials:"same-origin"}).then(b=>{if(!b.ok)throw"failed to load wasm binary file at '"+a+"'";return b.arrayBuffer()}).catch(()=>va(a));if(q)return new Promise((b,c)=>{q(a,d=>b(new Uint8Array(d)),c)})}return Promise.resolve().then(()=>va(a))}function xa(a,b,c){return wa(a).then(d=>WebAssembly.instantiate(d,b)).then(d=>d).then(c,d=>{x("failed to asynchronously prepare wasm: "+d);z(d)})}
function ya(a,b){var c=H;y||"function"!=typeof WebAssembly.instantiateStreaming||ta(c)||c.startsWith("file://")||ea||"function"!=typeof fetch?xa(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(e){x("wasm streaming compile failed: "+e);x("falling back to ArrayBuffer instantiation");return xa(c,a,b)}))}function t(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function I(a){for(;0<a.length;)a.shift()(f)}function za(a){var b=Aa();a();Ba(b)}var Ca=0;function Da(){for(var a=J.length-1;0<=a;--a)Ea(a);J=[];Fa=[]}var Fa=[];function Ga(){if(Ca&&Ha.Mb)for(var a=0;a<Fa.length;++a){var b=Fa[a];Fa.splice(a,1);--a;b.zc.apply(null,b.oc)}}var J=[];function Ea(a){var b=J[a];b.target.removeEventListener(b.Fb,b.kc,b.Gb);J.splice(a,1)}
function K(a){function b(d){++Ca;Ha=a;Ga();a.Ib(d);Ga();--Ca}if(!a.target)return-4;if(a.Hb)a.kc=b,a.target.addEventListener(a.Fb,b,a.Gb),J.push(a),Ia||(pa.push(Da),Ia=!0);else for(var c=0;c<J.length;++c)J[c].target==a.target&&J[c].Fb==a.Fb&&Ea(c--);return 0}function Ja(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Ia,Ha,Ka,La,Ma,Na,Oa,Pa,Qa,Ra="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function L(a,b){if(a){var c=B,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&Ra)a=Ra.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var l=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|l);else{var g=c[a++]&63;e=224==(e&240)?(e&15)<<12|l<<6|g:(e&7)<<18|l<<12|g<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
var Sa=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];function M(a){a=2<a?L(a):a;return Sa[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function Ta(a){return 0>Sa.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var Ua=[];function N(a){var b=Ua[a];b||(a>=Ua.length&&(Ua.length=a+1),Ua[a]=b=la.get(a));return b}
function O(a,b,c){var d=B;if(!(0<c))return 0;var e=b;c=b+c-1;for(var l=0;l<a.length;++l){var g=a.charCodeAt(l);if(55296<=g&&57343>=g){var m=a.charCodeAt(++l);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0;return b-e}
function Va(a,b,c,d,e,l){Ka||(Ka=P(256));a={target:M(a),Fb:l,Hb:d,Ib:function(g=event){var m=g.target.id?g.target.id:"",n=Ka;O(Ja(g.target),n+0,128);O(m,n+128,128);N(d)(e,n,b)&&g.preventDefault()},Gb:c};return K(a)}
function Wa(a,b,c,d,e,l){La||(La=P(176));a={target:M(a),Mb:!0,Fb:l,Hb:d,Ib:function(g){var m=La;E[m>>3]=g.timeStamp;var n=m>>2;C[n+2]=g.location;C[n+3]=g.ctrlKey;C[n+4]=g.shiftKey;C[n+5]=g.altKey;C[n+6]=g.metaKey;C[n+7]=g.repeat;C[n+8]=g.charCode;C[n+9]=g.keyCode;C[n+10]=g.which;O(g.key||"",m+44,32);O(g.code||"",m+76,32);O(g.char||"",m+108,32);O(g.locale||"",m+140,32);N(d)(e,m,b)&&g.preventDefault()},Gb:c};return K(a)}
function Xa(a,b,c){E[a>>3]=b.timeStamp;a>>=2;C[a+2]=b.screenX;C[a+3]=b.screenY;C[a+4]=b.clientX;C[a+5]=b.clientY;C[a+6]=b.ctrlKey;C[a+7]=b.shiftKey;C[a+8]=b.altKey;C[a+9]=b.metaKey;ja[2*a+20]=b.button;ja[2*a+21]=b.buttons;C[a+11]=b.movementX;C[a+12]=b.movementY;c=Ta(c);C[a+13]=b.clientX-c.left;C[a+14]=b.clientY-c.top}
function Q(a,b,c,d,e,l){Ma||(Ma=P(72));a=M(a);return K({target:a,Mb:"mousemove"!=l&&"mouseenter"!=l&&"mouseleave"!=l,Fb:l,Hb:d,Ib:function(g=event){Xa(Ma,g,a);N(d)(e,Ma,b)&&g.preventDefault()},Gb:c})}function Ya(a,b,c,d,e){Na||(Na=P(260));return K({target:a,Fb:e,Hb:d,Ib:function(l=event){var g=Na,m=document.pointerLockElement||document.Jb||document.Tb||document.Sb;C[g>>2]=!!m;var n=m&&m.id?m.id:"";O(Ja(m),g+4,128);O(n,g+132,128);N(d)(20,g,b)&&l.preventDefault()},Gb:c})}
function Za(a,b,c,d,e){return K({target:a,Fb:e,Hb:d,Ib:function(l=event){N(d)(38,0,b)&&l.preventDefault()},Gb:c})}
function $a(a,b,c,d){Oa||(Oa=P(36));a=M(a);return K({target:a,Fb:"resize",Hb:d,Ib:function(e=event){if(e.target==a){var l=document.body;if(l){var g=Oa;C[g>>2]=e.detail;C[g+4>>2]=l.clientWidth;C[g+8>>2]=l.clientHeight;C[g+12>>2]=innerWidth;C[g+16>>2]=innerHeight;C[g+20>>2]=outerWidth;C[g+24>>2]=outerHeight;C[g+28>>2]=pageXOffset;C[g+32>>2]=pageYOffset;N(d)(10,g,b)&&e.preventDefault()}}},Gb:c})}
function ab(a,b,c,d,e,l){Pa||(Pa=P(1696));a=M(a);return K({target:a,Mb:"touchstart"==l||"touchend"==l,Fb:l,Hb:d,Ib:function(g){for(var m,n={},v=g.touches,w=0;w<v.length;++w)m=v[w],m.Yb=m.$b=0,n[m.identifier]=m;for(w=0;w<g.changedTouches.length;++w)m=g.changedTouches[w],m.Yb=1,n[m.identifier]=m;for(w=0;w<g.targetTouches.length;++w)n[g.targetTouches[w].identifier].$b=1;v=Pa;E[v>>3]=g.timeStamp;var u=v>>2;C[u+3]=g.ctrlKey;C[u+4]=g.shiftKey;C[u+5]=g.altKey;C[u+6]=g.metaKey;u+=7;var db=Ta(a),eb=0;for(w in n)if(m=
n[w],C[u]=m.identifier,C[u+1]=m.screenX,C[u+2]=m.screenY,C[u+3]=m.clientX,C[u+4]=m.clientY,C[u+5]=m.pageX,C[u+6]=m.pageY,C[u+7]=m.Yb,C[u+8]=m.$b,C[u+9]=m.clientX-db.left,C[u+10]=m.clientY-db.top,u+=13,31<++eb)break;C[v+8>>2]=eb;N(d)(e,v,b)&&g.preventDefault()},Gb:c})}
function bb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,l){b.drawArraysInstancedANGLE(c,d,e,l)},a.drawElementsInstanced=function(c,d,e,l,g){b.drawElementsInstancedANGLE(c,d,e,l,g)})}
function cb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function fb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function gb(a){a.qc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function hb(a){a.sc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function ib(a){a.uc=a.getExtension("WEBGL_multi_draw")}var jb=1,kb=[],R=[],lb=[],mb=[],nb=[],S=[],ob=[],pb=[],qb={};function T(a){rb||(rb=a)}function sb(a){for(var b=jb++,c=a.length;c<b;c++)a[c]=null;return b}
function tb(a,b){a.Jb||(a.Jb=a.getContext,a.getContext=function(d,e){e=a.Jb(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Zb?a.getContext("webgl2",b):a.getContext("webgl",b);return c?ub(c,b):0}function ub(a,b){var c=sb(pb),d={rc:c,attributes:b,version:b.Zb,Qb:a};a.canvas&&(a.canvas.nc=d);pb[c]=d;("undefined"==typeof b.Xb||b.Xb)&&vb(d);return c}
function vb(a){a||(a=U);if(!a.mc){a.mc=!0;var b=a.Qb;bb(b);cb(b);fb(b);gb(b);hb(b);2<=a.version&&(b.Wb=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Wb)b.Wb=b.getExtension("EXT_disjoint_timer_query");ib(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var rb,U;function wb(a,b,c,d,e,l){a={target:M(a),Fb:l,Hb:d,Ib:(g=event)=>{N(d)(e,0,b)&&g.preventDefault()},Gb:c};K(a)}
function xb(a,b,c,d){Qa||(Qa=P(104));return K({target:a,Mb:!0,Fb:"wheel",Hb:d,Ib:function(e=event){var l=Qa;Xa(l,e,a);E[l+72>>3]=e.deltaX;E[l+80>>3]=e.deltaY;E[l+88>>3]=e.deltaZ;C[l+96>>2]=e.deltaMode;N(d)(9,l,b)&&e.preventDefault()},Gb:c})}var yb=["default","low-power","high-performance"];function zb(a,b,c,d){for(var e=0;e<a;e++){var l=V[c](),g=l&&sb(d);l?(l.name=g,d[g]=l):T(1282);C[b+4*e>>2]=g}}
function Ab(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=V.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>U.version){T(1282);return}c=2*(V.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>U.version){T(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=V.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":T(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:T(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)C[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){T(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:T(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}C[b>>2]=c}else T(1281)}
function Bb(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}function Cb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}var Db=[];function W(a){var b=V.jc;if(b){var c=b.Lb[a];"number"==typeof c&&(b.Lb[a]=c=V.getUniformLocation(b,b.hc[a]+(0<c?"["+c+"]":"")));return c}T(1282)}var X=[],Y=[];function Eb(a){if(!noExitRuntime){if(f.onExit)f.onExit(a);ia=!0}h(a,new t(a))}function Fb(a){var b=Bb(a)+1,c=Gb(b);O(a,c,b);return c}
for(var V,Z=0;32>Z;++Z)Db.push(Array(Z));var Hb=new Float32Array(288);for(Z=0;288>Z;++Z)X[Z]=Hb.subarray(0,Z+1);var Ib=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Ib.subarray(0,Z+1);
var Pb={i:function(){z("")},ca:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},da:function(a,b,c){a=M(a);if(!a)return-4;a=Ta(a);E[b>>3]=a.width;E[c>>3]=a.height;return 0},Ta:function(a,b,c){B.copyWithin(a,b,b+c)},Qa:function(a,b){function c(d){N(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Ua:function(a){var b=B.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math,l=e.min;d=Math.max(a,d);
d+=(65536-d%65536)%65536;a:{var g=A.buffer;try{A.grow(l.call(e,2147483648,d)-g.byteLength+65535>>>16);ka();var m=1;break a}catch(n){}m=void 0}if(m)return!0}return!1},M:function(a,b,c,d){return Va(a,b,c,d,12,"blur")},ba:function(a,b,c){a=M(a);if(!a)return-4;a.width=b;a.height=c;return 0},N:function(a,b,c,d){return Va(a,b,c,d,13,"focus")},W:function(a,b,c,d){return Wa(a,b,c,d,2,"keydown")},U:function(a,b,c,d){return Wa(a,b,c,d,1,"keypress")},V:function(a,b,c,d){return Wa(a,b,c,d,3,"keyup")},aa:function(a,
b,c,d){return Q(a,b,c,d,5,"mousedown")},Z:function(a,b,c,d){return Q(a,b,c,d,33,"mouseenter")},Y:function(a,b,c,d){return Q(a,b,c,d,34,"mouseleave")},_:function(a,b,c,d){return Q(a,b,c,d,8,"mousemove")},$:function(a,b,c,d){return Q(a,b,c,d,6,"mouseup")},P:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Jb||document.body.Tb||document.body.Sb))return-1;a=M(a);if(!a)return-4;Ya(a,b,c,d,"mozpointerlockchange");Ya(a,b,c,d,"webkitpointerlockchange");Ya(a,
b,c,d,"mspointerlockchange");return Ya(a,b,c,d,"pointerlockchange")},O:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Jb||document.body.Tb||document.body.Sb))return-1;a=M(a);if(!a)return-4;Za(a,b,c,d,"mozpointerlockerror");Za(a,b,c,d,"webkitpointerlockerror");Za(a,b,c,d,"mspointerlockerror");return Za(a,b,c,d,"pointerlockerror")},Ra:function(a,b,c,d){return $a(a,b,c,d)},Q:function(a,b,c,d){return ab(a,b,c,d,25,"touchcancel")},R:function(a,b,c,d){return ab(a,b,c,
d,23,"touchend")},S:function(a,b,c,d){return ab(a,b,c,d,24,"touchmove")},T:function(a,b,c,d){return ab(a,b,c,d,22,"touchstart")},L:function(a,b,c,d){wb(a,b,c,d,31,"webglcontextlost");return 0},K:function(a,b,c,d){wb(a,b,c,d,32,"webglcontextrestored");return 0},X:function(a,b,c,d){return(a=M(a))?"undefined"!=typeof a.onwheel?xb(a,b,c,d):-1:-4},Oa:function(a,b){b>>=2;b={alpha:!!C[b],depth:!!C[b+1],stencil:!!C[b+2],antialias:!!C[b+3],premultipliedAlpha:!!C[b+4],preserveDrawingBuffer:!!C[b+5],powerPreference:yb[C[b+
6]],failIfMajorPerformanceCaveat:!!C[b+7],Zb:C[b+8],tc:C[b+9],Xb:C[b+10],lc:C[b+11],vc:C[b+12],wc:C[b+13]};a=M(a);return!a||b.lc?0:tb(a,b)},Ma:function(a,b){a=pb[a];b=L(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&bb(V);"OES_vertex_array_object"==b&&cb(V);"WEBGL_draw_buffers"==b&&fb(V);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&gb(V);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&hb(V);"WEBGL_multi_draw"==b&&ib(V);return!!a.Qb.getExtension(b)},Pa:function(a){a>>=
2;for(var b=0;14>b;++b)C[a+b]=0;C[a]=C[a+1]=C[a+3]=C[a+4]=C[a+8]=C[a+10]=1},Na:function(a){U=pb[a];f.pc=V=U&&U.Qb;return!a||V?0:-5},h:function(a){V.activeTexture(a)},A:function(a,b){V.attachShader(R[a],S[b])},d:function(a,b){35051==a?V.Ub=b:35052==a&&(V.Vb=b);V.bindBuffer(a,kb[b])},j:function(a,b){V.bindFramebuffer(a,lb[b])},a:function(a,b){V.bindTexture(a,nb[b])},I:function(a){V.bindVertexArray(ob[a])},E:function(a,b,c,d){V.blendColor(a,b,c,d)},F:function(a,b){V.blendEquationSeparate(a,b)},G:function(a,
b,c,d){V.blendFuncSeparate(a,b,c,d)},Wa:function(a,b,c,d,e,l,g,m,n,v){V.blitFramebuffer(a,b,c,d,e,l,g,m,n,v)},wa:function(a,b,c,d){2<=U.version?c&&b?V.bufferData(a,B,d,c,b):V.bufferData(a,b,d):V.bufferData(a,c?B.subarray(c,c+b):b,d)},va:function(a,b,c,d){2<=U.version?c&&V.bufferSubData(a,b,B,d,c):V.bufferSubData(a,b,B.subarray(d,d+c))},ia:function(a,b,c,d){V.clearBufferfi(a,b,c,d)},w:function(a,b,c){V.clearBufferfv(a,b,D,c>>2)},ha:function(a,b,c){V.clearBufferiv(a,b,C,c>>2)},f:function(a,b,c,d){V.colorMask(!!a,
!!b,!!c,!!d)},oa:function(a){V.compileShader(S[a])},ua:function(){var a=sb(R),b=V.createProgram();b.name=a;b.Pb=b.Nb=b.Ob=0;b.Rb=1;R[a]=b;return a},qa:function(a){var b=sb(S);S[b]=V.createShader(a);return b},B:function(a){V.cullFace(a)},Ia:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=kb[d];e&&(V.deleteBuffer(e),e.name=0,kb[d]=null,d==V.Ub&&(V.Ub=0),d==V.Vb&&(V.Vb=0))}},g:function(a,b){for(var c=0;c<a;++c){var d=C[b+4*c>>2],e=lb[d];e&&(V.deleteFramebuffer(e),e.name=0,lb[d]=null)}},J:function(a){if(a){var b=
R[a];b?(V.deleteProgram(b),b.name=0,R[a]=null):T(1281)}},Ga:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=mb[d];e&&(V.deleteRenderbuffer(e),e.name=0,mb[d]=null)}},p:function(a){if(a){var b=S[a];b?(V.deleteShader(b),S[a]=null):T(1281)}},Ha:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],e=nb[d];e&&(V.deleteTexture(e),e.name=0,nb[d]=null)}},Ea:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2];V.deleteVertexArray(ob[d]);ob[d]=null}},s:function(a){V.depthFunc(a)},r:function(a){V.depthMask(!!a)},
c:function(a){V.disable(a)},H:function(a){V.disableVertexAttribArray(a)},Ya:function(a,b,c){V.drawArrays(a,b,c)},Za:function(a,b,c,d){V.drawArraysInstanced(a,b,c,d)},_a:function(a,b,c,d){V.drawElements(a,b,c,d)},$a:function(a,b,c,d,e){V.drawElementsInstanced(a,b,c,d,e)},e:function(a){V.enable(a)},kb:function(a){V.enableVertexAttribArray(a)},C:function(a){V.frontFace(a)},xa:function(a,b){zb(a,b,"createBuffer",kb)},Da:function(a,b){zb(a,b,"createVertexArray",ob)},ma:function(a,b){return V.getAttribLocation(R[a],
L(b))},b:function(a,b){Ab(a,b)},ra:function(a,b,c,d){a=V.getProgramInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?O(a,d,b):0;c&&(C[c>>2]=b)},z:function(a,b,c){if(c)if(a>=jb)T(1281);else if(a=R[a],35716==b)a=V.getProgramInfoLog(a),null===a&&(a="(unknown error)"),C[c>>2]=a.length+1;else if(35719==b){if(!a.Pb)for(b=0;b<V.getProgramParameter(a,35718);++b)a.Pb=Math.max(a.Pb,V.getActiveUniform(a,b).name.length+1);C[c>>2]=a.Pb}else if(35722==b){if(!a.Nb)for(b=0;b<V.getProgramParameter(a,35721);++b)a.Nb=
Math.max(a.Nb,V.getActiveAttrib(a,b).name.length+1);C[c>>2]=a.Nb}else if(35381==b){if(!a.Ob)for(b=0;b<V.getProgramParameter(a,35382);++b)a.Ob=Math.max(a.Ob,V.getActiveUniformBlockName(a,b).length+1);C[c>>2]=a.Ob}else C[c>>2]=V.getProgramParameter(a,b);else T(1281)},na:function(a,b,c,d){a=V.getShaderInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?O(a,d,b):0;c&&(C[c>>2]=b)},x:function(a,b,c){c?35716==b?(a=V.getShaderInfoLog(S[a]),null===a&&(a="(unknown error)"),C[c>>2]=a?a.length+1:0):35720==
b?(a=V.getShaderSource(S[a]),C[c>>2]=a?a.length+1:0):C[c>>2]=V.getShaderParameter(S[a],b):T(1281)},Ja:function(a,b){if(2>U.version)return T(1282),0;var c=qb[a];if(c)return 0>b||b>=c.length?(T(1281),0):c[b];switch(a){case 7939:return c=V.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){var e=Bb(d)+1,l=P(e);l&&O(d,l,e);return l}),c=qb[a]=c,0>b||b>=c.length?(T(1281),0):c[b];default:return T(1280),0}},k:function(a,b){b=L(b);if(a=R[a]){var c=a,d=c.Lb,e=c.ic,
l;if(!d)for(c.Lb=d={},c.hc={},l=0;l<V.getProgramParameter(c,35718);++l){var g=V.getActiveUniform(c,l);var m=g.name;g=g.size;var n=Cb(m);n=0<n?m.slice(0,n):m;var v=c.Rb;c.Rb+=g;e[n]=[g,v];for(m=0;m<g;++m)d[v]=m,c.hc[v++]=n}c=a.Lb;d=0;e=b;l=Cb(b);0<l&&(d=parseInt(b.slice(l+1))>>>0,e=b.slice(0,l));if((e=a.ic[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||V.getUniformLocation(a,b)))return d}else T(1281);return-1},Va:function(a,b,c){for(var d=Db[b],e=0;e<b;e++)d[e]=C[c+4*e>>2];V.invalidateFramebuffer(a,d)},ta:function(a){a=
R[a];V.linkProgram(a);a.Lb=0;a.ic={}},Ca:function(a,b){V.pixelStorei(a,b)},D:function(a,b){V.polygonOffset(a,b)},Xa:function(a){V.readBuffer(a)},ja:function(a,b,c,d){V.scissor(a,b,c,d)},pa:function(a,b,c,d){for(var e="",l=0;l<b;++l){var g=d?C[d+4*l>>2]:-1;e+=L(C[c+4*l>>2],0>g?void 0:g)}V.shaderSource(S[a],e)},Aa:function(a,b,c){V.stencilFunc(a,b,c)},v:function(a,b,c,d){V.stencilFuncSeparate(a,b,c,d)},q:function(a){V.stencilMask(a)},za:function(a,b,c){V.stencilOp(a,b,c)},u:function(a,b,c,d){V.stencilOpSeparate(a,
b,c,d)},jb:function(a,b,c){if(2<=U.version)b&&V.uniform1fv(W(a),D,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=D[c+4*e>>2];else d=D.subarray(c>>2,c+4*b>>2);V.uniform1fv(W(a),d)}},y:function(a,b){V.uniform1i(W(a),b)},fb:function(a,b,c){if(2<=U.version)b&&V.uniform1iv(W(a),C,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=C[c+4*e>>2];else d=C.subarray(c>>2,c+4*b>>2);V.uniform1iv(W(a),d)}},ib:function(a,b,c){if(2<=U.version)b&&V.uniform2fv(W(a),D,c>>2,2*b);else{if(144>=b)for(var d=
X[2*b-1],e=0;e<2*b;e+=2)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2];else d=D.subarray(c>>2,c+8*b>>2);V.uniform2fv(W(a),d)}},eb:function(a,b,c){if(2<=U.version)b&&V.uniform2iv(W(a),C,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2];else d=C.subarray(c>>2,c+8*b>>2);V.uniform2iv(W(a),d)}},hb:function(a,b,c){if(2<=U.version)b&&V.uniform3fv(W(a),D,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2],d[e+2]=D[c+(4*
e+8)>>2];else d=D.subarray(c>>2,c+12*b>>2);V.uniform3fv(W(a),d)}},db:function(a,b,c){if(2<=U.version)b&&V.uniform3iv(W(a),C,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2];else d=C.subarray(c>>2,c+12*b>>2);V.uniform3iv(W(a),d)}},gb:function(a,b,c){if(2<=U.version)b&&V.uniform4fv(W(a),D,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=D;c>>=2;for(var l=0;l<4*b;l+=4){var g=c+l;d[l]=e[g];d[l+1]=e[g+1];d[l+2]=e[g+2];d[l+3]=e[g+3]}}else d=
D.subarray(c>>2,c+16*b>>2);V.uniform4fv(W(a),d)}},cb:function(a,b,c){if(2<=U.version)b&&V.uniform4iv(W(a),C,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2],d[e+3]=C[c+(4*e+12)>>2];else d=C.subarray(c>>2,c+16*b>>2);V.uniform4iv(W(a),d)}},bb:function(a,b,c,d){if(2<=U.version)b&&V.uniformMatrix4fv(W(a),!!c,D,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],l=D;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=l[m];e[g+1]=l[m+1];e[g+2]=l[m+
2];e[g+3]=l[m+3];e[g+4]=l[m+4];e[g+5]=l[m+5];e[g+6]=l[m+6];e[g+7]=l[m+7];e[g+8]=l[m+8];e[g+9]=l[m+9];e[g+10]=l[m+10];e[g+11]=l[m+11];e[g+12]=l[m+12];e[g+13]=l[m+13];e[g+14]=l[m+14];e[g+15]=l[m+15]}}else e=D.subarray(d>>2,d+64*b>>2);V.uniformMatrix4fv(W(a),!!c,e)}},l:function(a){a=R[a];V.useProgram(a);V.jc=a},fa:function(a,b){V.vertexAttribDivisor(a,b)},ga:function(a,b,c,d,e,l){V.vertexAttribPointer(a,b,c,!!d,e,l)},ka:function(a,b,c,d){V.viewport(a,b,c,d)},La:function(){f.ac=a=>{0!=Jb()&&(a.preventDefault(),
a.returnValue=" ")};window.addEventListener("beforeunload",f.ac)},Fa:function(){f.fc=a=>{const b=a.clipboardData.getData("text");za(()=>{const c=Fb(b);Kb(c)})};window.addEventListener("paste",f.fc)},ya:function(a){f.xc=[];a=L(a);a=document.getElementById(a);f.bc=b=>{b.stopPropagation();b.preventDefault()};f.cc=b=>{b.stopPropagation();b.preventDefault()};f.dc=b=>{b.stopPropagation();b.preventDefault()};f.ec=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;f.yc=c;Lb(c.length);
for(let d=0;d<c.length;d++)za(()=>{const e=Fb(c[d].name);Mb(d,e)});Nb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.bc,!1);a.addEventListener("dragleave",f.cc,!1);a.addEventListener("dragover",f.dc,!1);a.addEventListener("drop",f.ec,!1)},ab:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},o:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Ob()});
document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},la:function(a){a=L(a);f.Kb=document.getElementById(a);f.Kb||console.log("sokol_app.h: invalid target:"+a);f.Kb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ka:function(){window.removeEventListener("beforeunload",f.ac)},Ba:function(){window.removeEventListener("paste",f.fc)},sa:function(a){a=L(a);a=document.getElementById(a);a.removeEventListener("dragenter",
f.bc);a.removeEventListener("dragleave",f.cc);a.removeEventListener("dragover",f.dc);a.removeEventListener("drop",f.ec)},t:function(){f.Kb&&f.Kb.requestPointerLock&&f.Kb.requestPointerLock()},Sa:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),l=e.createImageData(a,b);l.data.set(B.subarray(c,c+a*b*4));e.putImageData(l,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},
m:function(){document.getElementById("_sokol_app_input_element").blur()},ea:function(a,b){b=L(b);switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}};
(function(){function a(c){c=c.exports;f.asm=c;A=f.asm.lb;ka();la=f.asm.Bb;na.unshift(f.asm.mb);F--;f.monitorRunDependencies&&f.monitorRunDependencies(F);if(0==F&&(null!==sa&&(clearInterval(sa),sa=null),G)){var d=G;G=null;d()}return c}var b={a:Pb};F++;f.monitorRunDependencies&&f.monitorRunDependencies(F);if(f.instantiateWasm)try{return f.instantiateWasm(b,a)}catch(c){return x("Module.instantiateWasm callback failed with error: "+c),!1}ya(b,function(c){a(c.instance)});return{}})();
var Ob=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Ob=f.__sapp_emsc_notify_keyboard_hidden=f.asm.nb).apply(null,arguments)},Kb=f.__sapp_emsc_onpaste=function(){return(Kb=f.__sapp_emsc_onpaste=f.asm.ob).apply(null,arguments)},Jb=f.__sapp_html5_get_ask_leave_site=function(){return(Jb=f.__sapp_html5_get_ask_leave_site=f.asm.pb).apply(null,arguments)},Lb=f.__sapp_emsc_begin_drop=function(){return(Lb=f.__sapp_emsc_begin_drop=f.asm.qb).apply(null,arguments)},Mb=f.__sapp_emsc_drop=function(){return(Mb=
f.__sapp_emsc_drop=f.asm.rb).apply(null,arguments)},Nb=f.__sapp_emsc_end_drop=function(){return(Nb=f.__sapp_emsc_end_drop=f.asm.sb).apply(null,arguments)};f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.tb).apply(null,arguments)};var Qb=f._main=function(){return(Qb=f._main=f.asm.ub).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.vb).apply(null,arguments)};
f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.wb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.xb).apply(null,arguments)};f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.yb).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.zb).apply(null,arguments)};
function P(){return(P=f.asm.Ab).apply(null,arguments)}function Aa(){return(Aa=f.asm.Cb).apply(null,arguments)}function Ba(){return(Ba=f.asm.Db).apply(null,arguments)}function Gb(){return(Gb=f.asm.Eb).apply(null,arguments)}f.___start_em_js=7640;f.___stop_em_js=17159;var Rb;G=function Sb(){Rb||Tb();Rb||(G=Sb)};function Ub(a=[]){var b=Qb;a.unshift(ca);var c=a.length,d=Gb(4*(c+1)),e=d>>2;a.forEach(g=>{C[e++]=Fb(g)});C[e]=0;try{var l=b(c,d);Eb(l)}catch(g){g instanceof t||"unwind"==g||h(1,g)}}
function Tb(){var a=ba;function b(){if(!Rb&&(Rb=!0,f.calledRun=!0,!ia)){I(na);I(oa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();Vb&&Ub(a);if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var c=f.postRun.shift();qa.unshift(c)}I(qa)}}if(!(0<F)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)ra();I(ma);0<F||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):
b())}}if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Vb=!0;f.noInitialRun&&(Vb=!1);Tb();
