var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},f),ba=[],ca="./this.program",h=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,q="",fa,t,u;
if(ea){var fs=require("fs"),ha=require("path");q=l?ha.dirname(q)+"/":__dirname+"/";fa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};u=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};t=(a,b,c,d=!0)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);fs.readFile(a,d?void 0:"utf8",(e,k)=>{e?c(e):b(d?k.buffer:k)})};!f.thisProgram&&1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&
(module.exports=f);process.on("uncaughtException",a=>{if(!("unwind"===a||a instanceof v||a.context instanceof v))throw a;});if(15>process.versions.node.split(".")[0])process.on("unhandledRejection",a=>{throw a;});h=(a,b)=>{process.exitCode=a;throw b;};f.inspect=()=>"[Emscripten Module object]"}else if(da||l)l?q=self.location.href:"undefined"!=typeof document&&document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=
a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(u=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),t=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};f.print||console.log.bind(console);var x=f.printErr||console.warn.bind(console);Object.assign(f,aa);
aa=null;f.arguments&&(ba=f.arguments);f.thisProgram&&(ca=f.thisProgram);f.quit&&(h=f.quit);var y;f.wasmBinary&&(y=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!=typeof WebAssembly&&z("no native wasm support detected");var ia,ja=!1,ka,A,la,ma,B,na,C,D;
function oa(){var a=ia.buffer;f.HEAP8=ka=new Int8Array(a);f.HEAP16=la=new Int16Array(a);f.HEAP32=B=new Int32Array(a);f.HEAPU8=A=new Uint8Array(a);f.HEAPU16=ma=new Uint16Array(a);f.HEAPU32=na=new Uint32Array(a);f.HEAPF32=C=new Float32Array(a);f.HEAPF64=D=new Float64Array(a)}var pa,qa=[],ra=[],sa=[],ta=[],ua=[];function va(){var a=f.preRun.shift();qa.unshift(a)}var E=0,wa=null,F=null;
function z(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";x(a);ja=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function xa(a){return a.startsWith("data:application/octet-stream;base64,")}var G;G="sgl-lines-sapp.wasm";if(!xa(G)){var ya=G;G=f.locateFile?f.locateFile(ya,q):q+ya}function za(a){try{if(a==G&&y)return new Uint8Array(y);if(u)return u(a);throw"both async and sync fetching of the wasm failed";}catch(b){z(b)}}
function Aa(a){if(!y&&(da||l)){if("function"==typeof fetch&&!a.startsWith("file://"))return fetch(a,{credentials:"same-origin"}).then(b=>{if(!b.ok)throw"failed to load wasm binary file at '"+a+"'";return b.arrayBuffer()}).catch(()=>za(a));if(t)return new Promise((b,c)=>{t(a,d=>b(new Uint8Array(d)),c)})}return Promise.resolve().then(()=>za(a))}function Ba(a,b,c){return Aa(a).then(d=>WebAssembly.instantiate(d,b)).then(d=>d).then(c,d=>{x("failed to asynchronously prepare wasm: "+d);z(d)})}
function Ca(a,b){var c=G;y||"function"!=typeof WebAssembly.instantiateStreaming||xa(c)||c.startsWith("file://")||ea||"function"!=typeof fetch?Ba(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(e){x("wasm streaming compile failed: "+e);x("falling back to ArrayBuffer instantiation");return Ba(c,a,b)}))}function v(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function Da(a){for(;0<a.length;)a.shift()(f)}function Ea(a){var b=Fa();a();Ga(b)}var Ha=0;function Ia(){for(var a=H.length-1;0<=a;--a)Ja(a);H=[];Ka=[]}var Ka=[];function La(){if(Ha&&Ma.Rb)for(var a=0;a<Ka.length;++a){var b=Ka[a];Ka.splice(a,1);--a;b.Ec.apply(null,b.tc)}}var H=[];function Ja(a){var b=H[a];b.target.removeEventListener(b.Kb,b.pc,b.Lb);H.splice(a,1)}
function I(a){function b(d){++Ha;Ma=a;La();a.Nb(d);La();--Ha}if(a.Mb)a.pc=b,a.target.addEventListener(a.Kb,b,a.Lb),H.push(a),Na||(ta.push(Ia),Na=!0);else for(var c=0;c<H.length;++c)H[c].target==a.target&&H[c].Kb==a.Kb&&Ja(c--)}function Oa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Na,Ma,Pa,Qa,Ra,Sa,Ta,Ua,Va,Wa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function J(a,b){if(a){var c=A,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.buffer&&Wa)a=Wa.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var k=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var g=c[a++]&63;e=224==(e&240)?(e&15)<<12|k<<6|g:(e&7)<<18|k<<12|g<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
var Xa=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];function K(a){a=2<a?J(a):a;return Xa[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function Ya(a){return 0>Xa.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var Za=[];function L(a){var b=Za[a];b||(a>=Za.length&&(Za.length=a+1),Za[a]=b=pa.get(a));return b}
function M(a,b,c){var d=A;if(!(0<c))return 0;var e=b;c=b+c-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0;return b-e}
function $a(a,b,c,d,e,k){Pa||(Pa=O(256));a={target:K(a),Kb:k,Mb:d,Nb:function(g=event){var m=g.target.id?g.target.id:"",n=Pa;M(Oa(g.target),n+0,128);M(m,n+128,128);L(d)(e,n,b)&&g.preventDefault()},Lb:c};I(a)}
function ab(a,b,c,d,e,k){Qa||(Qa=O(176));a={target:K(a),Rb:!0,Kb:k,Mb:d,Nb:function(g){var m=Qa;D[m>>3]=g.timeStamp;var n=m>>2;B[n+2]=g.location;B[n+3]=g.ctrlKey;B[n+4]=g.shiftKey;B[n+5]=g.altKey;B[n+6]=g.metaKey;B[n+7]=g.repeat;B[n+8]=g.charCode;B[n+9]=g.keyCode;B[n+10]=g.which;M(g.key||"",m+44,32);M(g.code||"",m+76,32);M(g.char||"",m+108,32);M(g.locale||"",m+140,32);L(d)(e,m,b)&&g.preventDefault()},Lb:c};I(a)}
function bb(a,b,c){D[a>>3]=b.timeStamp;a>>=2;B[a+2]=b.screenX;B[a+3]=b.screenY;B[a+4]=b.clientX;B[a+5]=b.clientY;B[a+6]=b.ctrlKey;B[a+7]=b.shiftKey;B[a+8]=b.altKey;B[a+9]=b.metaKey;la[2*a+20]=b.button;la[2*a+21]=b.buttons;B[a+11]=b.movementX;B[a+12]=b.movementY;c=Ya(c);B[a+13]=b.clientX-c.left;B[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,k){Ra||(Ra=O(72));a=K(a);I({target:a,Rb:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Kb:k,Mb:d,Nb:function(g=event){bb(Ra,g,a);L(d)(e,Ra,b)&&g.preventDefault()},Lb:c})}function cb(a,b,c,d,e){Sa||(Sa=O(260));I({target:a,Kb:e,Mb:d,Nb:function(k=event){var g=Sa,m=document.pointerLockElement||document.Ob||document.Zb||document.Yb;B[g>>2]=!!m;var n=m&&m.id?m.id:"";M(Oa(m),g+4,128);M(n,g+132,128);L(d)(20,g,b)&&k.preventDefault()},Lb:c})}
function db(a,b,c,d,e){I({target:a,Kb:e,Mb:d,Nb:function(k=event){L(d)(38,0,b)&&k.preventDefault()},Lb:c})}function eb(a,b,c,d){Ta||(Ta=O(36));a=K(a);I({target:a,Kb:"resize",Mb:d,Nb:function(e=event){if(e.target==a){var k=document.body;if(k){var g=Ta;B[g>>2]=e.detail;B[g+4>>2]=k.clientWidth;B[g+8>>2]=k.clientHeight;B[g+12>>2]=innerWidth;B[g+16>>2]=innerHeight;B[g+20>>2]=outerWidth;B[g+24>>2]=outerHeight;B[g+28>>2]=pageXOffset;B[g+32>>2]=pageYOffset;L(d)(10,g,b)&&e.preventDefault()}}},Lb:c})}
function fb(a,b,c,d,e,k){Ua||(Ua=O(1696));a=K(a);I({target:a,Rb:"touchstart"==k||"touchend"==k,Kb:k,Mb:d,Nb:function(g){for(var m,n={},p=g.touches,w=0;w<p.length;++w)m=p[w],m.cc=m.ec=0,n[m.identifier]=m;for(w=0;w<g.changedTouches.length;++w)m=g.changedTouches[w],m.cc=1,n[m.identifier]=m;for(w=0;w<g.targetTouches.length;++w)n[g.targetTouches[w].identifier].ec=1;p=Ua;D[p>>3]=g.timeStamp;var r=p>>2;B[r+3]=g.ctrlKey;B[r+4]=g.shiftKey;B[r+5]=g.altKey;B[r+6]=g.metaKey;r+=7;var N=Ya(a),T=0;for(w in n)if(m=
n[w],B[r]=m.identifier,B[r+1]=m.screenX,B[r+2]=m.screenY,B[r+3]=m.clientX,B[r+4]=m.clientY,B[r+5]=m.pageX,B[r+6]=m.pageY,B[r+7]=m.cc,B[r+8]=m.ec,B[r+9]=m.clientX-N.left,B[r+10]=m.clientY-N.top,r+=13,31<++T)break;B[p+8>>2]=T;L(d)(e,p,b)&&g.preventDefault()},Lb:c})}
function gb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,g){b.drawElementsInstancedANGLE(c,d,e,k,g)})}
function hb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function ib(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function jb(a){a.vc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function kb(a){a.xc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function lb(a){a.zc=a.getExtension("WEBGL_multi_draw")}var mb=1,nb=[],Q=[],ob=[],pb=[],qb=[],R=[],rb=[],sb=[],tb={},ub=4;function S(a){vb||(vb=a)}function wb(a){for(var b=mb++,c=a.length;c<b;c++)a[c]=null;return b}
function xb(a,b){a.Ob||(a.Ob=a.getContext,a.getContext=function(d,e){e=a.Ob(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.dc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?yb(c,b):0}function yb(a,b){var c=wb(sb),d={wc:c,attributes:b,version:b.dc,Wb:a};a.canvas&&(a.canvas.sc=d);sb[c]=d;("undefined"==typeof b.bc||b.bc)&&zb(d);return c}
function zb(a){a||(a=U);if(!a.rc){a.rc=!0;var b=a.Wb;gb(b);hb(b);ib(b);jb(b);kb(b);2<=a.version&&(b.ac=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.ac)b.ac=b.getExtension("EXT_disjoint_timer_query");lb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var vb,U;function Ab(a,b,c,d,e,k){a={target:K(a),Kb:k,Mb:d,Nb:(g=event)=>{L(d)(e,0,b)&&g.preventDefault()},Lb:c};I(a)}
function Bb(a,b,c,d){Va||(Va=O(104));I({target:a,Rb:!0,Kb:"wheel",Mb:d,Nb:function(e=event){var k=Va;bb(k,e,a);D[k+72>>3]=e.deltaX;D[k+80>>3]=e.deltaY;D[k+88>>3]=e.deltaZ;B[k+96>>2]=e.deltaMode;L(d)(9,k,b)&&e.preventDefault()},Lb:c})}var Cb=["default","low-power","high-performance"];function Db(a,b,c,d){for(var e=0;e<a;e++){var k=V[c](),g=k&&wb(d);k?(k.name=g,d[g]=k):S(1282);B[b+4*e>>2]=g}}
function Eb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=V.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>U.version){S(1282);return}c=2*(V.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>U.version){S(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=V.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":S(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:S(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)B[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){S(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:S(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}B[b>>2]=c}else S(1281)}
function Fb(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}function Gb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}var Hb=[];function Ib(a){a-=5120;return 0==a?ka:1==a?A:2==a?la:4==a?B:6==a?C:5==a||28922==a||28520==a||30779==a||30782==a?na:ma}function W(a){var b=V.oc;if(b){var c=b.Qb[a];"number"==typeof c&&(b.Qb[a]=c=V.getUniformLocation(b,b.mc[a]+(0<c?"["+c+"]":"")));return c}S(1282)}var X=[],Y=[];
function Jb(a){if(!noExitRuntime){if(f.onExit)f.onExit(a);ja=!0}h(a,new v(a))}function Kb(a){var b=Fb(a)+1,c=Lb(b);M(a,c,b);return c}for(var V,Z=0;32>Z;++Z)Hb.push(Array(Z));var Mb=new Float32Array(288);for(Z=0;288>Z;++Z)X[Z]=Mb.subarray(0,Z+1);var Nb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Nb.subarray(0,Z+1);
var Ub={i:function(){z("")},ha:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},ia:function(a,b,c){a=K(a);if(!a)return-4;a=Ya(a);D[b>>3]=a.width;D[c>>3]=a.height;return 0},Ua:function(a,b,c){A.copyWithin(a,b,b+c)},Ra:function(a,b){function c(d){L(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Va:function(a){var b=A.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math,k=e.min;d=Math.max(a,d);
d+=(65536-d%65536)%65536;a:{var g=ia.buffer;try{ia.grow(k.call(e,2147483648,d)-g.byteLength+65535>>>16);oa();var m=1;break a}catch(n){}m=void 0}if(m)return!0}return!1},R:function(a,b,c,d){$a(a,b,c,d,12,"blur");return 0},ga:function(a,b,c){a=K(a);if(!a)return-4;a.width=b;a.height=c;return 0},S:function(a,b,c,d){$a(a,b,c,d,13,"focus");return 0},$:function(a,b,c,d){ab(a,b,c,d,2,"keydown");return 0},Z:function(a,b,c,d){ab(a,b,c,d,1,"keypress");return 0},_:function(a,b,c,d){ab(a,b,c,d,3,"keyup");return 0},
fa:function(a,b,c,d){P(a,b,c,d,5,"mousedown");return 0},ca:function(a,b,c,d){P(a,b,c,d,33,"mouseenter");return 0},ba:function(a,b,c,d){P(a,b,c,d,34,"mouseleave");return 0},da:function(a,b,c,d){P(a,b,c,d,8,"mousemove");return 0},ea:function(a,b,c,d){P(a,b,c,d,6,"mouseup");return 0},U:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.Ob||document.body.Zb||document.body.Yb))return-1;a=K(a);if(!a)return-4;cb(a,b,c,d,"pointerlockchange");cb(a,b,c,d,"mozpointerlockchange");
cb(a,b,c,d,"webkitpointerlockchange");cb(a,b,c,d,"mspointerlockchange");return 0},T:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.Ob||document.body.Zb||document.body.Yb))return-1;a=K(a);if(!a)return-4;db(a,b,c,d,"pointerlockerror");db(a,b,c,d,"mozpointerlockerror");db(a,b,c,d,"webkitpointerlockerror");db(a,b,c,d,"mspointerlockerror");return 0},Sa:function(a,b,c,d){eb(a,b,c,d);return 0},V:function(a,b,c,d){fb(a,b,c,d,25,"touchcancel");return 0},W:function(a,b,c,
d){fb(a,b,c,d,23,"touchend");return 0},X:function(a,b,c,d){fb(a,b,c,d,24,"touchmove");return 0},Y:function(a,b,c,d){fb(a,b,c,d,22,"touchstart");return 0},Q:function(a,b,c,d){Ab(a,b,c,d,31,"webglcontextlost");return 0},P:function(a,b,c,d){Ab(a,b,c,d,32,"webglcontextrestored");return 0},aa:function(a,b,c,d){a=K(a);return"undefined"!=typeof a.onwheel?(Bb(a,b,c,d),0):-1},Pa:function(a,b){b>>=2;b={alpha:!!B[b],depth:!!B[b+1],stencil:!!B[b+2],antialias:!!B[b+3],premultipliedAlpha:!!B[b+4],preserveDrawingBuffer:!!B[b+
5],powerPreference:Cb[B[b+6]],failIfMajorPerformanceCaveat:!!B[b+7],dc:B[b+8],yc:B[b+9],bc:B[b+10],qc:B[b+11],Ac:B[b+12],Bc:B[b+13]};a=K(a);return!a||b.qc?0:xb(a,b)},Na:function(a,b){a=sb[a];b=J(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&gb(V);"OES_vertex_array_object"==b&&hb(V);"WEBGL_draw_buffers"==b&&ib(V);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&jb(V);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&kb(V);"WEBGL_multi_draw"==b&&lb(V);return!!a.Wb.getExtension(b)},
Qa:function(a){a>>=2;for(var b=0;14>b;++b)B[a+b]=0;B[a]=B[a+1]=B[a+3]=B[a+4]=B[a+8]=B[a+10]=1},Oa:function(a){U=sb[a];f.uc=V=U&&U.Wb;return!a||V?0:-5},g:function(a){V.activeTexture(a)},D:function(a,b){V.attachShader(Q[a],R[b])},b:function(a,b){35051==a?V.$b=b:35052==a&&(V.Sb=b);V.bindBuffer(a,nb[b])},l:function(a,b){V.bindFramebuffer(a,ob[b])},a:function(a,b){V.bindTexture(a,qb[b])},M:function(a){V.bindVertexArray(rb[a])},I:function(a,b,c,d){V.blendColor(a,b,c,d)},J:function(a,b){V.blendEquationSeparate(a,
b)},K:function(a,b,c,d){V.blendFuncSeparate(a,b,c,d)},Xa:function(a,b,c,d,e,k,g,m,n,p){V.blitFramebuffer(a,b,c,d,e,k,g,m,n,p)},Aa:function(a,b,c,d){2<=U.version?c&&b?V.bufferData(a,A,d,c,b):V.bufferData(a,b,d):V.bufferData(a,c?A.subarray(c,c+b):b,d)},n:function(a,b,c,d){2<=U.version?c&&V.bufferSubData(a,b,A,d,c):V.bufferSubData(a,b,A.subarray(d,d+c))},ma:function(a,b,c,d){V.clearBufferfi(a,b,c,d)},x:function(a,b,c){V.clearBufferfv(a,b,C,c>>2)},ob:function(a,b,c){V.clearBufferiv(a,b,B,c>>2)},j:function(a,
b,c,d){V.colorMask(!!a,!!b,!!c,!!d)},pa:function(a){V.compileShader(R[a])},va:function(){var a=wb(Q),b=V.createProgram();b.name=a;b.Vb=b.Tb=b.Ub=0;b.Xb=1;Q[a]=b;return a},sa:function(a){var b=wb(R);R[b]=V.createShader(a);return b},F:function(a){V.cullFace(a)},Ka:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2],e=nb[d];e&&(V.deleteBuffer(e),e.name=0,nb[d]=null,d==V.$b&&(V.$b=0),d==V.Sb&&(V.Sb=0))}},h:function(a,b){for(var c=0;c<a;++c){var d=B[b+4*c>>2],e=ob[d];e&&(V.deleteFramebuffer(e),e.name=
0,ob[d]=null)}},v:function(a){if(a){var b=Q[a];b?(V.deleteProgram(b),b.name=0,Q[a]=null):S(1281)}},N:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2],e=pb[d];e&&(V.deleteRenderbuffer(e),e.name=0,pb[d]=null)}},r:function(a){if(a){var b=R[a];b?(V.deleteShader(b),R[a]=null):S(1281)}},O:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2],e=qb[d];e&&(V.deleteTexture(e),e.name=0,qb[d]=null)}},Ia:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2];V.deleteVertexArray(rb[d]);rb[d]=null}},u:function(a){V.depthFunc(a)},
t:function(a){V.depthMask(!!a)},d:function(a){V.disable(a)},L:function(a){V.disableVertexAttribArray(a)},_a:function(a,b,c){V.drawArrays(a,b,c)},$a:function(a,b,c,d){V.drawArraysInstanced(a,b,c,d)},ab:function(a,b,c,d){V.drawElements(a,b,c,d)},bb:function(a,b,c,d,e){V.drawElementsInstanced(a,b,c,d,e)},f:function(a){V.enable(a)},lb:function(a){V.enableVertexAttribArray(a)},G:function(a){V.frontFace(a)},Ba:function(a,b){Db(a,b,"createBuffer",nb)},za:function(a,b){Db(a,b,"createTexture",qb)},Ha:function(a,
b){Db(a,b,"createVertexArray",rb)},na:function(a,b){return V.getAttribLocation(Q[a],J(b))},c:function(a,b){Eb(a,b)},ta:function(a,b,c,d){a=V.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?M(a,d,b):0;c&&(B[c>>2]=b)},C:function(a,b,c){if(c)if(a>=mb)S(1281);else if(a=Q[a],35716==b)a=V.getProgramInfoLog(a),null===a&&(a="(unknown error)"),B[c>>2]=a.length+1;else if(35719==b){if(!a.Vb)for(b=0;b<V.getProgramParameter(a,35718);++b)a.Vb=Math.max(a.Vb,V.getActiveUniform(a,b).name.length+1);
B[c>>2]=a.Vb}else if(35722==b){if(!a.Tb)for(b=0;b<V.getProgramParameter(a,35721);++b)a.Tb=Math.max(a.Tb,V.getActiveAttrib(a,b).name.length+1);B[c>>2]=a.Tb}else if(35381==b){if(!a.Ub)for(b=0;b<V.getProgramParameter(a,35382);++b)a.Ub=Math.max(a.Ub,V.getActiveUniformBlockName(a,b).length+1);B[c>>2]=a.Ub}else B[c>>2]=V.getProgramParameter(a,b);else S(1281)},oa:function(a,b,c,d){a=V.getShaderInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?M(a,d,b):0;c&&(B[c>>2]=b)},A:function(a,b,c){c?35716==b?
(a=V.getShaderInfoLog(R[a]),null===a&&(a="(unknown error)"),B[c>>2]=a?a.length+1:0):35720==b?(a=V.getShaderSource(R[a]),B[c>>2]=a?a.length+1:0):B[c>>2]=V.getShaderParameter(R[a],b):S(1281)},La:function(a,b){if(2>U.version)return S(1282),0;var c=tb[a];if(c)return 0>b||b>=c.length?(S(1281),0):c[b];switch(a){case 7939:return c=V.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){var e=Fb(d)+1,k=O(e);k&&M(d,k,e);return k}),c=tb[a]=c,0>b||b>=c.length?(S(1281),
0):c[b];default:return S(1280),0}},m:function(a,b){b=J(b);if(a=Q[a]){var c=a,d=c.Qb,e=c.nc,k;if(!d)for(c.Qb=d={},c.mc={},k=0;k<V.getProgramParameter(c,35718);++k){var g=V.getActiveUniform(c,k);var m=g.name;g=g.size;var n=Gb(m);n=0<n?m.slice(0,n):m;var p=c.Xb;c.Xb+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.mc[p++]=n}c=a.Qb;d=0;e=b;k=Gb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.nc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||V.getUniformLocation(a,b)))return d}else S(1281);return-1},Wa:function(a,
b,c){for(var d=Hb[b],e=0;e<b;e++)d[e]=B[c+4*e>>2];V.invalidateFramebuffer(a,d)},ua:function(a){a=Q[a];V.linkProgram(a);a.Qb=0;a.nc={}},Ga:function(a,b){3317==a&&(ub=b);V.pixelStorei(a,b)},H:function(a,b){V.polygonOffset(a,b)},Za:function(a){V.readBuffer(a)},y:function(a,b,c,d){V.scissor(a,b,c,d)},qa:function(a,b,c,d){for(var e="",k=0;k<b;++k){var g=d?B[d+4*k>>2]:-1;e+=J(B[c+4*k>>2],0>g?void 0:g)}V.shaderSource(R[a],e)},Ea:function(a,b,c){V.stencilFunc(a,b,c)},la:function(a,b,c,d){V.stencilFuncSeparate(a,
b,c,d)},s:function(a){V.stencilMask(a)},Da:function(a,b,c){V.stencilOp(a,b,c)},ka:function(a,b,c,d){V.stencilOpSeparate(a,b,c,d)},ya:function(a,b,c,d,e,k,g,m,n){if(2<=U.version)if(V.Sb)V.texImage2D(a,b,c,d,e,k,g,m,n);else if(n){var p=Ib(m);V.texImage2D(a,b,c,d,e,k,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else V.texImage2D(a,b,c,d,e,k,g,m,null);else{p=V;var w=p.texImage2D;if(n){var r=Ib(m),N=31-Math.clz32(r.BYTES_PER_ELEMENT),T=ub;n=r.subarray(n>>N,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,
26918:2,29846:3,29847:4}[g-6402]||1)*(1<<N)+T-1&-T)>>N)}else n=null;w.call(p,a,b,c,d,e,k,g,m,n)}},wa:function(a,b,c,d,e,k,g,m,n,p){if(V.Sb)V.texImage3D(a,b,c,d,e,k,g,m,n,p);else if(p){var w=Ib(n);V.texImage3D(a,b,c,d,e,k,g,m,n,w,p>>31-Math.clz32(w.BYTES_PER_ELEMENT))}else V.texImage3D(a,b,c,d,e,k,g,m,n,null)},E:function(a,b,c){V.texParameterf(a,b,c)},e:function(a,b,c){V.texParameteri(a,b,c)},kb:function(a,b,c){if(2<=U.version)b&&V.uniform1fv(W(a),C,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=
C[c+4*e>>2];else d=C.subarray(c>>2,c+4*b>>2);V.uniform1fv(W(a),d)}},B:function(a,b){V.uniform1i(W(a),b)},gb:function(a,b,c){if(2<=U.version)b&&V.uniform1iv(W(a),B,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=B[c+4*e>>2];else d=B.subarray(c>>2,c+4*b>>2);V.uniform1iv(W(a),d)}},jb:function(a,b,c){if(2<=U.version)b&&V.uniform2fv(W(a),C,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2];else d=C.subarray(c>>2,c+8*b>>2);V.uniform2fv(W(a),d)}},
fb:function(a,b,c){if(2<=U.version)b&&V.uniform2iv(W(a),B,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=B[c+4*e>>2],d[e+1]=B[c+(4*e+4)>>2];else d=B.subarray(c>>2,c+8*b>>2);V.uniform2iv(W(a),d)}},ib:function(a,b,c){if(2<=U.version)b&&V.uniform3fv(W(a),C,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2];else d=C.subarray(c>>2,c+12*b>>2);V.uniform3fv(W(a),d)}},eb:function(a,b,c){if(2<=U.version)b&&V.uniform3iv(W(a),
B,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=B[c+4*e>>2],d[e+1]=B[c+(4*e+4)>>2],d[e+2]=B[c+(4*e+8)>>2];else d=B.subarray(c>>2,c+12*b>>2);V.uniform3iv(W(a),d)}},hb:function(a,b,c){if(2<=U.version)b&&V.uniform4fv(W(a),C,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=C;c>>=2;for(var k=0;k<4*b;k+=4){var g=c+k;d[k]=e[g];d[k+1]=e[g+1];d[k+2]=e[g+2];d[k+3]=e[g+3]}}else d=C.subarray(c>>2,c+16*b>>2);V.uniform4fv(W(a),d)}},db:function(a,b,c){if(2<=U.version)b&&V.uniform4iv(W(a),B,c>>2,4*b);else{if(72>=
b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=B[c+4*e>>2],d[e+1]=B[c+(4*e+4)>>2],d[e+2]=B[c+(4*e+8)>>2],d[e+3]=B[c+(4*e+12)>>2];else d=B.subarray(c>>2,c+16*b>>2);V.uniform4iv(W(a),d)}},cb:function(a,b,c,d){if(2<=U.version)b&&V.uniformMatrix4fv(W(a),!!c,C,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],k=C;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=k[m];e[g+1]=k[m+1];e[g+2]=k[m+2];e[g+3]=k[m+3];e[g+4]=k[m+4];e[g+5]=k[m+5];e[g+6]=k[m+6];e[g+7]=k[m+7];e[g+8]=k[m+8];e[g+9]=k[m+9];e[g+10]=k[m+10];e[g+11]=k[m+
11];e[g+12]=k[m+12];e[g+13]=k[m+13];e[g+14]=k[m+14];e[g+15]=k[m+15]}}else e=C.subarray(d>>2,d+64*b>>2);V.uniformMatrix4fv(W(a),!!c,e)}},k:function(a){a=Q[a];V.useProgram(a);V.oc=a},mb:function(a,b){V.vertexAttribDivisor(a,b)},nb:function(a,b,c,d,e,k){V.vertexAttribPointer(a,b,c,!!d,e,k)},z:function(a,b,c,d){V.viewport(a,b,c,d)},Ma:function(){f.fc=a=>{0!=Ob()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.fc)},Fa:function(){f.lc=a=>{const b=a.clipboardData.getData("text");
Ea(()=>{const c=Kb(b);Pb(c)})};window.addEventListener("paste",f.lc)},xa:function(a){f.Cc=[];a=J(a);a=document.getElementById(a);f.hc=b=>{b.stopPropagation();b.preventDefault()};f.ic=b=>{b.stopPropagation();b.preventDefault()};f.jc=b=>{b.stopPropagation();b.preventDefault()};f.kc=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;f.Dc=c;Qb(c.length);for(let d=0;d<c.length;d++)Ea(()=>{const e=Kb(c[d].name);Rb(d,e)});Sb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.hc,
!1);a.addEventListener("dragleave",f.ic,!1);a.addEventListener("dragover",f.jc,!1);a.addEventListener("drop",f.kc,!1)},Ya:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},q:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Tb()});document.body.append(a)},p:function(){document.getElementById("_sokol_app_input_element").focus()},pb:function(a){a=
J(a);f.Pb=document.getElementById(a);f.Pb||console.log("sokol_app.h: invalid target:"+a);f.Pb.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ja:function(){window.removeEventListener("beforeunload",f.fc)},Ca:function(){window.removeEventListener("paste",f.lc)},ra:function(a){a=J(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.hc);a.removeEventListener("dragleave",f.ic);a.removeEventListener("dragover",f.jc);a.removeEventListener("drop",
f.kc)},w:function(){f.Pb&&f.Pb.requestPointerLock&&f.Pb.requestPointerLock()},Ta:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(A.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},o:function(){document.getElementById("_sokol_app_input_element").blur()},ja:function(a,b){b=J(b);switch(a){case 0:console.error(b);
break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}};
(function(){function a(c){c=c.exports;f.asm=c;ia=f.asm.qb;oa();pa=f.asm.Gb;ra.unshift(f.asm.rb);E--;f.monitorRunDependencies&&f.monitorRunDependencies(E);if(0==E&&(null!==wa&&(clearInterval(wa),wa=null),F)){var d=F;F=null;d()}return c}var b={a:Ub};E++;f.monitorRunDependencies&&f.monitorRunDependencies(E);if(f.instantiateWasm)try{return f.instantiateWasm(b,a)}catch(c){return x("Module.instantiateWasm callback failed with error: "+c),!1}Ca(b,function(c){a(c.instance)});return{}})();
function O(){return(O=f.asm.sb).apply(null,arguments)}
var Tb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Tb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.tb).apply(null,arguments)},Pb=f.__sapp_emsc_onpaste=function(){return(Pb=f.__sapp_emsc_onpaste=f.asm.ub).apply(null,arguments)},Ob=f.__sapp_html5_get_ask_leave_site=function(){return(Ob=f.__sapp_html5_get_ask_leave_site=f.asm.vb).apply(null,arguments)},Qb=f.__sapp_emsc_begin_drop=function(){return(Qb=f.__sapp_emsc_begin_drop=f.asm.wb).apply(null,arguments)},Rb=f.__sapp_emsc_drop=function(){return(Rb=
f.__sapp_emsc_drop=f.asm.xb).apply(null,arguments)},Sb=f.__sapp_emsc_end_drop=function(){return(Sb=f.__sapp_emsc_end_drop=f.asm.yb).apply(null,arguments)};f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.zb).apply(null,arguments)};var Vb=f._main=function(){return(Vb=f._main=f.asm.Ab).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Bb).apply(null,arguments)};
f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.Cb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Db).apply(null,arguments)};f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.Eb).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.Fb).apply(null,arguments)};
function Fa(){return(Fa=f.asm.Hb).apply(null,arguments)}function Ga(){return(Ga=f.asm.Ib).apply(null,arguments)}function Lb(){return(Lb=f.asm.Jb).apply(null,arguments)}f.___start_em_js=7420;f.___stop_em_js=16939;var Wb;F=function Xb(){Wb||Yb();Wb||(F=Xb)};function Zb(a=[]){var b=Vb;a.unshift(ca);var c=a.length,d=Lb(4*(c+1)),e=d>>2;a.forEach(g=>{B[e++]=Kb(g)});B[e]=0;try{var k=b(c,d);Jb(k)}catch(g){g instanceof v||"unwind"==g||h(1,g)}}
function Yb(){var a=ba;function b(){if(!Wb&&(Wb=!0,f.calledRun=!0,!ja)){Da(ra);Da(sa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();$b&&Zb(a);if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var c=f.postRun.shift();ua.unshift(c)}Da(ua)}}if(!(0<E)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)va();Da(qa);0<E||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},
1)):b())}}if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var $b=!0;f.noInitialRun&&($b=!1);Yb();
