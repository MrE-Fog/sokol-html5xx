var e;e||(e=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},e),ba=[],ca="./this.program",h=(a,b)=>{throw b;},da="object"==typeof window,k="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,p="",fa,u,v;
if(ea){var fs=require("fs"),ha=require("path");p=k?ha.dirname(p)+"/":__dirname+"/";fa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};v=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};u=(a,b,c,d=!0)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);fs.readFile(a,d?void 0:"utf8",(f,l)=>{f?c(f):b(d?l.buffer:l)})};!e.thisProgram&&1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&
(module.exports=e);process.on("uncaughtException",a=>{if(!("unwind"===a||a instanceof w||a.context instanceof w))throw a;});if(15>process.versions.node.split(".")[0])process.on("unhandledRejection",a=>{throw a;});h=(a,b)=>{process.exitCode=a;throw b;};e.inspect=()=>"[Emscripten Module object]"}else if(da||k)k?p=self.location.href:"undefined"!=typeof document&&document.currentScript&&(p=document.currentScript.src),p=0!==p.indexOf("blob:")?p.substr(0,p.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=
a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},k&&(v=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),u=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};e.print||console.log.bind(console);var x=e.printErr||console.error.bind(console);Object.assign(e,aa);
aa=null;e.arguments&&(ba=e.arguments);e.thisProgram&&(ca=e.thisProgram);e.quit&&(h=e.quit);var y;e.wasmBinary&&(y=e.wasmBinary);var noExitRuntime=e.noExitRuntime||!0;"object"!=typeof WebAssembly&&z("no native wasm support detected");var A,ia=!1,B,ja,C,ka,D;
function la(){var a=A.buffer;e.HEAP8=new Int8Array(a);e.HEAP16=ja=new Int16Array(a);e.HEAP32=C=new Int32Array(a);e.HEAPU8=B=new Uint8Array(a);e.HEAPU16=new Uint16Array(a);e.HEAPU32=new Uint32Array(a);e.HEAPF32=ka=new Float32Array(a);e.HEAPF64=D=new Float64Array(a)}var ma,na=[],oa=[],pa=[],qa=[],ra=[];function sa(){var a=e.preRun.shift();na.unshift(a)}var E=0,ta=null,F=null;
function z(a){if(e.onAbort)e.onAbort(a);a="Aborted("+a+")";x(a);ia=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function ua(a){return a.startsWith("data:application/octet-stream;base64,")}var G;G="quad-sapp.wasm";if(!ua(G)){var va=G;G=e.locateFile?e.locateFile(va,p):p+va}function wa(a){try{if(a==G&&y)return new Uint8Array(y);if(v)return v(a);throw"both async and sync fetching of the wasm failed";}catch(b){z(b)}}
function xa(a){if(!y&&(da||k)){if("function"==typeof fetch&&!a.startsWith("file://"))return fetch(a,{credentials:"same-origin"}).then(b=>{if(!b.ok)throw"failed to load wasm binary file at '"+a+"'";return b.arrayBuffer()}).catch(()=>wa(a));if(u)return new Promise((b,c)=>{u(a,d=>b(new Uint8Array(d)),c)})}return Promise.resolve().then(()=>wa(a))}function ya(a,b,c){return xa(a).then(d=>WebAssembly.instantiate(d,b)).then(d=>d).then(c,d=>{x("failed to asynchronously prepare wasm: "+d);z(d)})}
function za(a,b){var c=G;y||"function"!=typeof WebAssembly.instantiateStreaming||ua(c)||c.startsWith("file://")||ea||"function"!=typeof fetch?ya(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(f){x("wasm streaming compile failed: "+f);x("falling back to ArrayBuffer instantiation");return ya(c,a,b)}))}function w(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function H(a){for(;0<a.length;)a.shift()(e)}function Aa(a){var b=Ba();a();Ca(b)}var Da=0;function Ea(){for(var a=I.length-1;0<=a;--a)Fa(a);I=[];J=[]}var J=[];function Ga(){if(Da&&Ha.Db)for(var a=0;a<J.length;++a){var b=J[a];J.splice(a,1);--a;b.qc.apply(null,b.ec)}}var I=[];function Fa(a){var b=I[a];b.target.removeEventListener(b.wb,b.ac,b.xb);I.splice(a,1)}
function K(a){function b(d){++Da;Ha=a;Ga();a.zb(d);Ga();--Da}if(!a.target)return-4;if(a.yb)a.ac=b,a.target.addEventListener(a.wb,b,a.xb),I.push(a),Ia||(qa.push(Ea),Ia=!0);else for(var c=0;c<I.length;++c)I[c].target==a.target&&I[c].wb==a.wb&&Fa(c--);return 0}function Ja(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Ia,Ha,Ka,La,L,Ma,Na,Oa,Pa,Qa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function M(a,b){if(a){var c=B,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&Qa)a=Qa.decode(c.subarray(a,b));else{for(d="";a<b;){var f=c[a++];if(f&128){var l=c[a++]&63;if(192==(f&224))d+=String.fromCharCode((f&31)<<6|l);else{var g=c[a++]&63;f=224==(f&240)?(f&15)<<12|l<<6|g:(f&7)<<18|l<<12|g<<6|c[a++]&63;65536>f?d+=String.fromCharCode(f):(f-=65536,d+=String.fromCharCode(55296|f>>10,56320|f&1023))}}else d+=String.fromCharCode(f)}a=d}}else a="";return a}
var Ra=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];function N(a){a=2<a?M(a):a;return Ra[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function Sa(a){return 0>Ra.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var O=[];function P(a){var b=O[a];b||(a>=O.length&&(O.length=a+1),O[a]=b=ma.get(a));return b}
function Q(a,b,c){var d=B;if(!(0<c))return 0;var f=b;c=b+c-1;for(var l=0;l<a.length;++l){var g=a.charCodeAt(l);if(55296<=g&&57343>=g){var m=a.charCodeAt(++l);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0;return b-f}
function Ta(a,b,c,d,f,l){Ka||(Ka=R(256));a={target:N(a),wb:l,yb:d,zb:function(g=event){var m=g.target.id?g.target.id:"",n=Ka;Q(Ja(g.target),n+0,128);Q(m,n+128,128);P(d)(f,n,b)&&g.preventDefault()},xb:c};return K(a)}
function Ua(a,b,c,d,f,l){La||(La=R(176));a={target:N(a),Db:!0,wb:l,yb:d,zb:function(g){var m=La;D[m>>3]=g.timeStamp;var n=m>>2;C[n+2]=g.location;C[n+3]=g.ctrlKey;C[n+4]=g.shiftKey;C[n+5]=g.altKey;C[n+6]=g.metaKey;C[n+7]=g.repeat;C[n+8]=g.charCode;C[n+9]=g.keyCode;C[n+10]=g.which;Q(g.key||"",m+44,32);Q(g.code||"",m+76,32);Q(g.char||"",m+108,32);Q(g.locale||"",m+140,32);P(d)(f,m,b)&&g.preventDefault()},xb:c};return K(a)}
function Va(a,b,c){D[a>>3]=b.timeStamp;a>>=2;C[a+2]=b.screenX;C[a+3]=b.screenY;C[a+4]=b.clientX;C[a+5]=b.clientY;C[a+6]=b.ctrlKey;C[a+7]=b.shiftKey;C[a+8]=b.altKey;C[a+9]=b.metaKey;ja[2*a+20]=b.button;ja[2*a+21]=b.buttons;C[a+11]=b.movementX;C[a+12]=b.movementY;c=Sa(c);C[a+13]=b.clientX-c.left;C[a+14]=b.clientY-c.top}
function S(a,b,c,d,f,l){L||(L=R(72));a=N(a);return K({target:a,Db:"mousemove"!=l&&"mouseenter"!=l&&"mouseleave"!=l,wb:l,yb:d,zb:function(g=event){Va(L,g,a);P(d)(f,L,b)&&g.preventDefault()},xb:c})}function T(a,b,c,d,f){Ma||(Ma=R(260));return K({target:a,wb:f,yb:d,zb:function(l=event){var g=Ma,m=document.pointerLockElement||document.Cb||document.Zb||document.Yb;C[g>>2]=!!m;var n=m&&m.id?m.id:"";Q(Ja(m),g+4,128);Q(n,g+132,128);P(d)(20,g,b)&&l.preventDefault()},xb:c})}
function U(a,b,c,d,f){return K({target:a,wb:f,yb:d,zb:function(l=event){P(d)(38,0,b)&&l.preventDefault()},xb:c})}
function Wa(a,b,c,d){Na||(Na=R(36));a=N(a);return K({target:a,wb:"resize",yb:d,zb:function(f=event){if(f.target==a){var l=document.body;if(l){var g=Na;C[g>>2]=f.detail;C[g+4>>2]=l.clientWidth;C[g+8>>2]=l.clientHeight;C[g+12>>2]=innerWidth;C[g+16>>2]=innerHeight;C[g+20>>2]=outerWidth;C[g+24>>2]=outerHeight;C[g+28>>2]=pageXOffset;C[g+32>>2]=pageYOffset;P(d)(10,g,b)&&f.preventDefault()}}},xb:c})}
function Xa(a,b,c,d,f,l){Oa||(Oa=R(1696));a=N(a);return K({target:a,Db:"touchstart"==l||"touchend"==l,wb:l,yb:d,zb:function(g){for(var m,n={},r=g.touches,t=0;t<r.length;++t)m=r[t],m.Nb=m.Pb=0,n[m.identifier]=m;for(t=0;t<g.changedTouches.length;++t)m=g.changedTouches[t],m.Nb=1,n[m.identifier]=m;for(t=0;t<g.targetTouches.length;++t)n[g.targetTouches[t].identifier].Pb=1;r=Oa;D[r>>3]=g.timeStamp;var q=r>>2;C[q+3]=g.ctrlKey;C[q+4]=g.shiftKey;C[q+5]=g.altKey;C[q+6]=g.metaKey;q+=7;var ab=Sa(a),bb=0;for(t in n)if(m=
n[t],C[q]=m.identifier,C[q+1]=m.screenX,C[q+2]=m.screenY,C[q+3]=m.clientX,C[q+4]=m.clientY,C[q+5]=m.pageX,C[q+6]=m.pageY,C[q+7]=m.Nb,C[q+8]=m.Pb,C[q+9]=m.clientX-ab.left,C[q+10]=m.clientY-ab.top,q+=13,31<++bb)break;C[r+8>>2]=bb;P(d)(f,r,b)&&g.preventDefault()},xb:c})}
function Ya(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,f,l){b.drawArraysInstancedANGLE(c,d,f,l)},a.drawElementsInstanced=function(c,d,f,l,g){b.drawElementsInstancedANGLE(c,d,f,l,g)})}
function Za(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function $a(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function cb(a){a.hc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function db(a){a.jc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function eb(a){a.lc=a.getExtension("WEBGL_multi_draw")}var fb=1,gb=[],V=[],hb=[],ib=[],jb=[],W=[],kb=[],lb=[],mb={};function X(a){nb||(nb=a)}function ob(a){for(var b=fb++,c=a.length;c<b;c++)a[c]=null;return b}
function pb(a,b){a.Cb||(a.Cb=a.getContext,a.getContext=function(d,f){f=a.Cb(d,f);return"webgl"==d==f instanceof WebGLRenderingContext?f:null});var c=1<b.Ob?a.getContext("webgl2",b):a.getContext("webgl",b);return c?qb(c,b):0}function qb(a,b){var c=ob(lb),d={ic:c,attributes:b,version:b.Ob,Hb:a};a.canvas&&(a.canvas.dc=d);lb[c]=d;("undefined"==typeof b.Mb||b.Mb)&&rb(d);return c}
function rb(a){a||(a=Y);if(!a.cc){a.cc=!0;var b=a.Hb;Ya(b);Za(b);$a(b);cb(b);db(b);2<=a.version&&(b.Lb=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Lb)b.Lb=b.getExtension("EXT_disjoint_timer_query");eb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var nb,Y;function sb(a,b,c,d,f,l){a={target:N(a),wb:l,yb:d,zb:(g=event)=>{P(d)(f,0,b)&&g.preventDefault()},xb:c};K(a)}
function tb(a,b,c,d){Pa||(Pa=R(104));return K({target:a,Db:!0,wb:"wheel",yb:d,zb:function(f=event){var l=Pa;Va(l,f,a);D[l+72>>3]=f.deltaX;D[l+80>>3]=f.deltaY;D[l+88>>3]=f.deltaZ;C[l+96>>2]=f.deltaMode;P(d)(9,l,b)&&f.preventDefault()},xb:c})}var ub=["default","low-power","high-performance"];function vb(a,b,c,d){for(var f=0;f<a;f++){var l=Z[c](),g=l&&ob(d);l?(l.name=g,d[g]=l):X(1282);C[b+4*f>>2]=g}}
function wb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=Z.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>Y.version){X(1282);return}c=2*(Z.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>Y.version){X(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=Z.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":X(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:X(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)C[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(f){X(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+f+")");return}}break;default:X(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}C[b>>2]=c}else X(1281)}
function xb(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}function yb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}var zb=[];function Ab(a){if(!noExitRuntime){if(e.onExit)e.onExit(a);ia=!0}h(a,new w(a))}function Bb(a){var b=xb(a)+1,c=Cb(b);Q(a,c,b);return c}for(var Z,Db=0;32>Db;++Db)zb.push(Array(Db));
var Kb={i:function(){z("")},ca:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},da:function(a,b,c){a=N(a);if(!a)return-4;a=Sa(a);D[b>>3]=a.width;D[c>>3]=a.height;return 0},Ua:function(a,b,c){B.copyWithin(a,b,b+c)},Qa:function(a,b){function c(d){P(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Va:function(a){var b=B.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var f=Math,l=f.min;d=Math.max(a,d);
d+=(65536-d%65536)%65536;a:{var g=A.buffer;try{A.grow(l.call(f,2147483648,d)-g.byteLength+65535>>>16);la();var m=1;break a}catch(n){}m=void 0}if(m)return!0}return!1},M:function(a,b,c,d){return Ta(a,b,c,d,12,"blur")},ba:function(a,b,c){a=N(a);if(!a)return-4;a.width=b;a.height=c;return 0},N:function(a,b,c,d){return Ta(a,b,c,d,13,"focus")},W:function(a,b,c,d){return Ua(a,b,c,d,2,"keydown")},U:function(a,b,c,d){return Ua(a,b,c,d,1,"keypress")},V:function(a,b,c,d){return Ua(a,b,c,d,3,"keyup")},aa:function(a,
b,c,d){return S(a,b,c,d,5,"mousedown")},Z:function(a,b,c,d){return S(a,b,c,d,33,"mouseenter")},Y:function(a,b,c,d){return S(a,b,c,d,34,"mouseleave")},_:function(a,b,c,d){return S(a,b,c,d,8,"mousemove")},$:function(a,b,c,d){return S(a,b,c,d,6,"mouseup")},P:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Cb||document.body.Zb||document.body.Yb))return-1;a=N(a);if(!a)return-4;T(a,b,c,d,"mozpointerlockchange");T(a,b,c,d,"webkitpointerlockchange");T(a,b,
c,d,"mspointerlockchange");return T(a,b,c,d,"pointerlockchange")},O:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Cb||document.body.Zb||document.body.Yb))return-1;a=N(a);if(!a)return-4;U(a,b,c,d,"mozpointerlockerror");U(a,b,c,d,"webkitpointerlockerror");U(a,b,c,d,"mspointerlockerror");return U(a,b,c,d,"pointerlockerror")},Ra:function(a,b,c,d){return Wa(a,b,c,d)},Q:function(a,b,c,d){return Xa(a,b,c,d,25,"touchcancel")},R:function(a,b,c,d){return Xa(a,b,c,d,23,"touchend")},
S:function(a,b,c,d){return Xa(a,b,c,d,24,"touchmove")},T:function(a,b,c,d){return Xa(a,b,c,d,22,"touchstart")},L:function(a,b,c,d){sb(a,b,c,d,31,"webglcontextlost");return 0},K:function(a,b,c,d){sb(a,b,c,d,32,"webglcontextrestored");return 0},X:function(a,b,c,d){return(a=N(a))?"undefined"!=typeof a.onwheel?tb(a,b,c,d):-1:-4},Oa:function(a,b){b>>=2;b={alpha:!!C[b],depth:!!C[b+1],stencil:!!C[b+2],antialias:!!C[b+3],premultipliedAlpha:!!C[b+4],preserveDrawingBuffer:!!C[b+5],powerPreference:ub[C[b+6]],
failIfMajorPerformanceCaveat:!!C[b+7],Ob:C[b+8],kc:C[b+9],Mb:C[b+10],bc:C[b+11],mc:C[b+12],nc:C[b+13]};a=N(a);return!a||b.bc?0:pb(a,b)},Ma:function(a,b){a=lb[a];b=M(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&Ya(Z);"OES_vertex_array_object"==b&&Za(Z);"WEBGL_draw_buffers"==b&&$a(Z);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&cb(Z);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&db(Z);"WEBGL_multi_draw"==b&&eb(Z);return!!a.Hb.getExtension(b)},Pa:function(a){a>>=
2;for(var b=0;14>b;++b)C[a+b]=0;C[a]=C[a+1]=C[a+3]=C[a+4]=C[a+8]=C[a+10]=1},Na:function(a){Y=lb[a];e.fc=Z=Y&&Y.Hb;return!a||Z?0:-5},h:function(a){Z.activeTexture(a)},A:function(a,b){Z.attachShader(V[a],W[b])},d:function(a,b){35051==a?Z.Jb=b:35052==a&&(Z.Kb=b);Z.bindBuffer(a,gb[b])},j:function(a,b){Z.bindFramebuffer(a,hb[b])},a:function(a,b){Z.bindTexture(a,jb[b])},I:function(a){Z.bindVertexArray(kb[a])},E:function(a,b,c,d){Z.blendColor(a,b,c,d)},F:function(a,b){Z.blendEquationSeparate(a,b)},G:function(a,
b,c,d){Z.blendFuncSeparate(a,b,c,d)},Xa:function(a,b,c,d,f,l,g,m,n,r){Z.blitFramebuffer(a,b,c,d,f,l,g,m,n,r)},wa:function(a,b,c,d){2<=Y.version?c&&b?Z.bufferData(a,B,d,c,b):Z.bufferData(a,b,d):Z.bufferData(a,c?B.subarray(c,c+b):b,d)},va:function(a,b,c,d){2<=Y.version?c&&Z.bufferSubData(a,b,B,d,c):Z.bufferSubData(a,b,B.subarray(d,d+c))},ia:function(a,b,c,d){Z.clearBufferfi(a,b,c,d)},w:function(a,b,c){Z.clearBufferfv(a,b,ka,c>>2)},ha:function(a,b,c){Z.clearBufferiv(a,b,C,c>>2)},f:function(a,b,c,d){Z.colorMask(!!a,
!!b,!!c,!!d)},oa:function(a){Z.compileShader(W[a])},ua:function(){var a=ob(V),b=Z.createProgram();b.name=a;b.Gb=b.Eb=b.Fb=0;b.Ib=1;V[a]=b;return a},qa:function(a){var b=ob(W);W[b]=Z.createShader(a);return b},B:function(a){Z.cullFace(a)},Ia:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],f=gb[d];f&&(Z.deleteBuffer(f),f.name=0,gb[d]=null,d==Z.Jb&&(Z.Jb=0),d==Z.Kb&&(Z.Kb=0))}},g:function(a,b){for(var c=0;c<a;++c){var d=C[b+4*c>>2],f=hb[d];f&&(Z.deleteFramebuffer(f),f.name=0,hb[d]=null)}},J:function(a){if(a){var b=
V[a];b?(Z.deleteProgram(b),b.name=0,V[a]=null):X(1281)}},Ga:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],f=ib[d];f&&(Z.deleteRenderbuffer(f),f.name=0,ib[d]=null)}},p:function(a){if(a){var b=W[a];b?(Z.deleteShader(b),W[a]=null):X(1281)}},Ha:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2],f=jb[d];f&&(Z.deleteTexture(f),f.name=0,jb[d]=null)}},Ea:function(a,b){for(var c=0;c<a;c++){var d=C[b+4*c>>2];Z.deleteVertexArray(kb[d]);kb[d]=null}},s:function(a){Z.depthFunc(a)},r:function(a){Z.depthMask(!!a)},
c:function(a){Z.disable(a)},H:function(a){Z.disableVertexAttribArray(a)},Za:function(a,b,c){Z.drawArrays(a,b,c)},_a:function(a,b,c,d){Z.drawArraysInstanced(a,b,c,d)},$a:function(a,b,c,d){Z.drawElements(a,b,c,d)},ab:function(a,b,c,d,f){Z.drawElementsInstanced(a,b,c,d,f)},e:function(a){Z.enable(a)},bb:function(a){Z.enableVertexAttribArray(a)},C:function(a){Z.frontFace(a)},xa:function(a,b){vb(a,b,"createBuffer",gb)},Da:function(a,b){vb(a,b,"createVertexArray",kb)},ma:function(a,b){return Z.getAttribLocation(V[a],
M(b))},b:function(a,b){wb(a,b)},ra:function(a,b,c,d){a=Z.getProgramInfoLog(V[a]);null===a&&(a="(unknown error)");b=0<b&&d?Q(a,d,b):0;c&&(C[c>>2]=b)},z:function(a,b,c){if(c)if(a>=fb)X(1281);else if(a=V[a],35716==b)a=Z.getProgramInfoLog(a),null===a&&(a="(unknown error)"),C[c>>2]=a.length+1;else if(35719==b){if(!a.Gb)for(b=0;b<Z.getProgramParameter(a,35718);++b)a.Gb=Math.max(a.Gb,Z.getActiveUniform(a,b).name.length+1);C[c>>2]=a.Gb}else if(35722==b){if(!a.Eb)for(b=0;b<Z.getProgramParameter(a,35721);++b)a.Eb=
Math.max(a.Eb,Z.getActiveAttrib(a,b).name.length+1);C[c>>2]=a.Eb}else if(35381==b){if(!a.Fb)for(b=0;b<Z.getProgramParameter(a,35382);++b)a.Fb=Math.max(a.Fb,Z.getActiveUniformBlockName(a,b).length+1);C[c>>2]=a.Fb}else C[c>>2]=Z.getProgramParameter(a,b);else X(1281)},na:function(a,b,c,d){a=Z.getShaderInfoLog(W[a]);null===a&&(a="(unknown error)");b=0<b&&d?Q(a,d,b):0;c&&(C[c>>2]=b)},x:function(a,b,c){c?35716==b?(a=Z.getShaderInfoLog(W[a]),null===a&&(a="(unknown error)"),C[c>>2]=a?a.length+1:0):35720==
b?(a=Z.getShaderSource(W[a]),C[c>>2]=a?a.length+1:0):C[c>>2]=Z.getShaderParameter(W[a],b):X(1281)},Ja:function(a,b){if(2>Y.version)return X(1282),0;var c=mb[a];if(c)return 0>b||b>=c.length?(X(1281),0):c[b];switch(a){case 7939:return c=Z.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){var f=xb(d)+1,l=R(f);l&&Q(d,l,f);return l}),c=mb[a]=c,0>b||b>=c.length?(X(1281),0):c[b];default:return X(1280),0}},k:function(a,b){b=M(b);if(a=V[a]){var c=a,d=c.Bb,f=c.Xb,
l;if(!d)for(c.Bb=d={},c.Wb={},l=0;l<Z.getProgramParameter(c,35718);++l){var g=Z.getActiveUniform(c,l);var m=g.name;g=g.size;var n=yb(m);n=0<n?m.slice(0,n):m;var r=c.Ib;c.Ib+=g;f[n]=[g,r];for(m=0;m<g;++m)d[r]=m,c.Wb[r++]=n}c=a.Bb;d=0;f=b;l=yb(b);0<l&&(d=parseInt(b.slice(l+1))>>>0,f=b.slice(0,l));if((f=a.Xb[f])&&d<f[0]&&(d+=f[1],c[d]=c[d]||Z.getUniformLocation(a,b)))return d}else X(1281);return-1},Wa:function(a,b,c){for(var d=zb[b],f=0;f<b;f++)d[f]=C[c+4*f>>2];Z.invalidateFramebuffer(a,d)},ta:function(a){a=
V[a];Z.linkProgram(a);a.Bb=0;a.Xb={}},Ca:function(a,b){Z.pixelStorei(a,b)},D:function(a,b){Z.polygonOffset(a,b)},Ya:function(a){Z.readBuffer(a)},ja:function(a,b,c,d){Z.scissor(a,b,c,d)},pa:function(a,b,c,d){for(var f="",l=0;l<b;++l){var g=d?C[d+4*l>>2]:-1;f+=M(C[c+4*l>>2],0>g?void 0:g)}Z.shaderSource(W[a],f)},Aa:function(a,b,c){Z.stencilFunc(a,b,c)},v:function(a,b,c,d){Z.stencilFuncSeparate(a,b,c,d)},q:function(a){Z.stencilMask(a)},za:function(a,b,c){Z.stencilOp(a,b,c)},u:function(a,b,c,d){Z.stencilOpSeparate(a,
b,c,d)},y:function(a,b){var c=Z,d=c.uniform1i;var f=Z.$b;if(f){var l=f.Bb[a];"number"==typeof l&&(f.Bb[a]=l=Z.getUniformLocation(f,f.Wb[a]+(0<l?"["+l+"]":"")));a=l}else X(1282),a=void 0;d.call(c,a,b)},l:function(a){a=V[a];Z.useProgram(a);Z.$b=a},fa:function(a,b){Z.vertexAttribDivisor(a,b)},ga:function(a,b,c,d,f,l){Z.vertexAttribPointer(a,b,c,!!d,f,l)},ka:function(a,b,c,d){Z.viewport(a,b,c,d)},La:function(){e.Qb=a=>{0!=Eb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",
e.Qb)},Fa:function(){e.Vb=a=>{const b=a.clipboardData.getData("text");Aa(()=>{const c=Bb(b);Fb(c)})};window.addEventListener("paste",e.Vb)},ya:function(a){e.oc=[];a=M(a);a=document.getElementById(a);e.Rb=b=>{b.stopPropagation();b.preventDefault()};e.Sb=b=>{b.stopPropagation();b.preventDefault()};e.Tb=b=>{b.stopPropagation();b.preventDefault()};e.Ub=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;e.pc=c;Gb(c.length);for(let d=0;d<c.length;d++)Aa(()=>{const f=Bb(c[d].name);Hb(d,
f)});Ib(b.clientX,b.clientY)};a.addEventListener("dragenter",e.Rb,!1);a.addEventListener("dragleave",e.Sb,!1);a.addEventListener("dragover",e.Tb,!1);a.addEventListener("drop",e.Ub,!1)},Ta:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},o:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Jb()});document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},
la:function(a){a=M(a);e.Ab=document.getElementById(a);e.Ab||console.log("sokol_app.h: invalid target:"+a);e.Ab.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ka:function(){window.removeEventListener("beforeunload",e.Qb)},Ba:function(){window.removeEventListener("paste",e.Vb)},sa:function(a){a=M(a);a=document.getElementById(a);a.removeEventListener("dragenter",e.Rb);a.removeEventListener("dragleave",e.Sb);a.removeEventListener("dragover",e.Tb);a.removeEventListener("drop",
e.Ub)},t:function(){e.Ab&&e.Ab.requestPointerLock&&e.Ab.requestPointerLock()},Sa:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const f=d.getContext("2d"),l=f.createImageData(a,b);l.data.set(B.subarray(c,c+a*b*4));f.putImageData(l,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},m:function(){document.getElementById("_sokol_app_input_element").blur()},ea:function(a,b){b=M(b);switch(a){case 0:console.error(b);
break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}};
(function(){function a(c){c=c.exports;e.asm=c;A=e.asm.cb;la();ma=e.asm.sb;oa.unshift(e.asm.db);E--;e.monitorRunDependencies&&e.monitorRunDependencies(E);if(0==E&&(null!==ta&&(clearInterval(ta),ta=null),F)){var d=F;F=null;d()}return c}var b={a:Kb};E++;e.monitorRunDependencies&&e.monitorRunDependencies(E);if(e.instantiateWasm)try{return e.instantiateWasm(b,a)}catch(c){return x("Module.instantiateWasm callback failed with error: "+c),!1}za(b,function(c){a(c.instance)});return{}})();
var Jb=e.__sapp_emsc_notify_keyboard_hidden=function(){return(Jb=e.__sapp_emsc_notify_keyboard_hidden=e.asm.eb).apply(null,arguments)},Fb=e.__sapp_emsc_onpaste=function(){return(Fb=e.__sapp_emsc_onpaste=e.asm.fb).apply(null,arguments)},Eb=e.__sapp_html5_get_ask_leave_site=function(){return(Eb=e.__sapp_html5_get_ask_leave_site=e.asm.gb).apply(null,arguments)},Gb=e.__sapp_emsc_begin_drop=function(){return(Gb=e.__sapp_emsc_begin_drop=e.asm.hb).apply(null,arguments)},Hb=e.__sapp_emsc_drop=function(){return(Hb=
e.__sapp_emsc_drop=e.asm.ib).apply(null,arguments)},Ib=e.__sapp_emsc_end_drop=function(){return(Ib=e.__sapp_emsc_end_drop=e.asm.jb).apply(null,arguments)};e.__sapp_emsc_invoke_fetch_cb=function(){return(e.__sapp_emsc_invoke_fetch_cb=e.asm.kb).apply(null,arguments)};var Lb=e._main=function(){return(Lb=e._main=e.asm.lb).apply(null,arguments)};e.__saudio_emsc_pull=function(){return(e.__saudio_emsc_pull=e.asm.mb).apply(null,arguments)};
e.__sfetch_emsc_head_response=function(){return(e.__sfetch_emsc_head_response=e.asm.nb).apply(null,arguments)};e.__sfetch_emsc_get_response=function(){return(e.__sfetch_emsc_get_response=e.asm.ob).apply(null,arguments)};e.__sfetch_emsc_failed_http_status=function(){return(e.__sfetch_emsc_failed_http_status=e.asm.pb).apply(null,arguments)};e.__sfetch_emsc_failed_buffer_too_small=function(){return(e.__sfetch_emsc_failed_buffer_too_small=e.asm.qb).apply(null,arguments)};
function R(){return(R=e.asm.rb).apply(null,arguments)}function Ba(){return(Ba=e.asm.tb).apply(null,arguments)}function Ca(){return(Ca=e.asm.ub).apply(null,arguments)}function Cb(){return(Cb=e.asm.vb).apply(null,arguments)}e.___start_em_js=4144;e.___stop_em_js=13663;var Mb;F=function Nb(){Mb||Ob();Mb||(F=Nb)};function Pb(a=[]){var b=Lb;a.unshift(ca);var c=a.length,d=Cb(4*(c+1)),f=d>>2;a.forEach(g=>{C[f++]=Bb(g)});C[f]=0;try{var l=b(c,d);Ab(l)}catch(g){g instanceof w||"unwind"==g||h(1,g)}}
function Ob(){var a=ba;function b(){if(!Mb&&(Mb=!0,e.calledRun=!0,!ia)){H(oa);H(pa);if(e.onRuntimeInitialized)e.onRuntimeInitialized();Qb&&Pb(a);if(e.postRun)for("function"==typeof e.postRun&&(e.postRun=[e.postRun]);e.postRun.length;){var c=e.postRun.shift();ra.unshift(c)}H(ra)}}if(!(0<E)){if(e.preRun)for("function"==typeof e.preRun&&(e.preRun=[e.preRun]);e.preRun.length;)sa();H(na);0<E||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1);b()},1)):
b())}}if(e.preInit)for("function"==typeof e.preInit&&(e.preInit=[e.preInit]);0<e.preInit.length;)e.preInit.pop()();var Qb=!0;e.noInitialRun&&(Qb=!1);Ob();
