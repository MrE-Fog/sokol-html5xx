var g;g||(g=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},g),ba=[],ca="./this.program",h=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,r="",fa,t,v;
if(ea){var fs=require("fs"),ha=require("path");r=l?ha.dirname(r)+"/":__dirname+"/";fa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};v=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};t=(a,b,c,d=!0)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);fs.readFile(a,d?void 0:"utf8",(e,k)=>{e?c(e):b(d?k.buffer:k)})};!g.thisProgram&&1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&
(module.exports=g);process.on("uncaughtException",a=>{if(!("unwind"===a||a instanceof w||a.context instanceof w))throw a;});if(15>process.versions.node.split(".")[0])process.on("unhandledRejection",a=>{throw a;});h=(a,b)=>{process.exitCode=a;throw b;};g.inspect=()=>"[Emscripten Module object]"}else if(da||l)l?r=self.location.href:"undefined"!=typeof document&&document.currentScript&&(r=document.currentScript.src),r=0!==r.indexOf("blob:")?r.substr(0,r.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=
a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(v=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),t=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ia=g.print||console.log.bind(console),x=g.printErr||console.error.bind(console);Object.assign(g,aa);
aa=null;g.arguments&&(ba=g.arguments);g.thisProgram&&(ca=g.thisProgram);g.quit&&(h=g.quit);var y;g.wasmBinary&&(y=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!0;"object"!=typeof WebAssembly&&ja("no native wasm support detected");var ka,la=!1,ma,z,na,oa,A,B,C,D;
function pa(){var a=ka.buffer;g.HEAP8=ma=new Int8Array(a);g.HEAP16=na=new Int16Array(a);g.HEAP32=A=new Int32Array(a);g.HEAPU8=z=new Uint8Array(a);g.HEAPU16=oa=new Uint16Array(a);g.HEAPU32=B=new Uint32Array(a);g.HEAPF32=C=new Float32Array(a);g.HEAPF64=D=new Float64Array(a)}var qa,ra=[],sa=[],ta=[],ua=[],va=[];function wa(){var a=g.preRun.shift();ra.unshift(a)}var E=0,xa=null,F=null;
function ja(a){if(g.onAbort)g.onAbort(a);a="Aborted("+a+")";x(a);la=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function ya(a){return a.startsWith("data:application/octet-stream;base64,")}var G;G="plmpeg-sapp-ui.wasm";if(!ya(G)){var za=G;G=g.locateFile?g.locateFile(za,r):r+za}function Aa(a){try{if(a==G&&y)return new Uint8Array(y);if(v)return v(a);throw"both async and sync fetching of the wasm failed";}catch(b){ja(b)}}
function Ba(a){if(!y&&(da||l)){if("function"==typeof fetch&&!a.startsWith("file://"))return fetch(a,{credentials:"same-origin"}).then(b=>{if(!b.ok)throw"failed to load wasm binary file at '"+a+"'";return b.arrayBuffer()}).catch(()=>Aa(a));if(t)return new Promise((b,c)=>{t(a,d=>b(new Uint8Array(d)),c)})}return Promise.resolve().then(()=>Aa(a))}function Ca(a,b,c){return Ba(a).then(d=>WebAssembly.instantiate(d,b)).then(d=>d).then(c,d=>{x("failed to asynchronously prepare wasm: "+d);ja(d)})}
function Da(a,b){var c=G;y||"function"!=typeof WebAssembly.instantiateStreaming||ya(c)||c.startsWith("file://")||ea||"function"!=typeof fetch?Ca(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(e){x("wasm streaming compile failed: "+e);x("falling back to ArrayBuffer instantiation");return Ca(c,a,b)}))}function w(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function Ea(a){for(;0<a.length;)a.shift()(g)}var Fa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function Ga(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&Fa)return Fa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var k=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var f=a[b++]&63;e=224==(e&240)?(e&15)<<12|k<<6|f:(e&7)<<18|k<<12|f<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function H(a,b){return a?Ga(z,a,b):""}
function Ha(a){var b=Ia();a();Ja(b)}var Ka=0;function La(){for(var a=I.length-1;0<=a;--a)Ma(a);I=[];Na=[]}var Na=[];function Oa(){if(Ka&&Pa.qc)for(var a=0;a<Na.length;++a){var b=Na[a];Na.splice(a,1);--a;b.bd.apply(null,b.Rc)}}var I=[];function Ma(a){var b=I[a];b.target.removeEventListener(b.hc,b.Nc,b.ic);I.splice(a,1)}
function J(a){function b(d){++Ka;Pa=a;Oa();a.kc(d);Oa();--Ka}if(!a.target)return-4;if(a.jc)a.Nc=b,a.target.addEventListener(a.hc,b,a.ic),I.push(a),Qa||(ua.push(La),Qa=!0);else for(var c=0;c<I.length;++c)I[c].target==a.target&&I[c].hc==a.hc&&Ma(c--);return 0}function Ra(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Qa,Pa,Sa,Ta,Ua,Va,Wa,Xa,Ya,Za=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function K(a){a=2<a?H(a):a;return Za[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function $a(a){return 0>Za.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var ab=[];function L(a){var b=ab[a];b||(a>=ab.length&&(ab.length=a+1),ab[a]=b=qa.get(a));return b}
function M(a,b,c){var d=z;if(!(0<c))return 0;var e=b;c=b+c-1;for(var k=0;k<a.length;++k){var f=a.charCodeAt(k);if(55296<=f&&57343>=f){var m=a.charCodeAt(++k);f=65536+((f&1023)<<10)|m&1023}if(127>=f){if(b>=c)break;d[b++]=f}else{if(2047>=f){if(b+1>=c)break;d[b++]=192|f>>6}else{if(65535>=f){if(b+2>=c)break;d[b++]=224|f>>12}else{if(b+3>=c)break;d[b++]=240|f>>18;d[b++]=128|f>>12&63}d[b++]=128|f>>6&63}d[b++]=128|f&63}}d[b]=0;return b-e}
function bb(a,b,c,d,e,k){Sa||(Sa=N(256));a={target:K(a),hc:k,jc:d,kc:function(f=event){var m=f.target.id?f.target.id:"",n=Sa;M(Ra(f.target),n+0,128);M(m,n+128,128);L(d)(e,n,b)&&f.preventDefault()},ic:c};return J(a)}
function cb(a,b,c,d,e,k){Ta||(Ta=N(176));a={target:K(a),qc:!0,hc:k,jc:d,kc:function(f){var m=Ta;D[m>>3]=f.timeStamp;var n=m>>2;A[n+2]=f.location;A[n+3]=f.ctrlKey;A[n+4]=f.shiftKey;A[n+5]=f.altKey;A[n+6]=f.metaKey;A[n+7]=f.repeat;A[n+8]=f.charCode;A[n+9]=f.keyCode;A[n+10]=f.which;M(f.key||"",m+44,32);M(f.code||"",m+76,32);M(f.char||"",m+108,32);M(f.locale||"",m+140,32);L(d)(e,m,b)&&f.preventDefault()},ic:c};return J(a)}
function db(a,b,c){D[a>>3]=b.timeStamp;a>>=2;A[a+2]=b.screenX;A[a+3]=b.screenY;A[a+4]=b.clientX;A[a+5]=b.clientY;A[a+6]=b.ctrlKey;A[a+7]=b.shiftKey;A[a+8]=b.altKey;A[a+9]=b.metaKey;na[2*a+20]=b.button;na[2*a+21]=b.buttons;A[a+11]=b.movementX;A[a+12]=b.movementY;c=$a(c);A[a+13]=b.clientX-c.left;A[a+14]=b.clientY-c.top}
function O(a,b,c,d,e,k){Ua||(Ua=N(72));a=K(a);return J({target:a,qc:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,hc:k,jc:d,kc:function(f=event){db(Ua,f,a);L(d)(e,Ua,b)&&f.preventDefault()},ic:c})}function eb(a,b,c,d,e){Va||(Va=N(260));return J({target:a,hc:e,jc:d,kc:function(k=event){var f=Va,m=document.pointerLockElement||document.oc||document.Ac||document.zc;A[f>>2]=!!m;var n=m&&m.id?m.id:"";M(Ra(m),f+4,128);M(n,f+132,128);L(d)(20,f,b)&&k.preventDefault()},ic:c})}
function fb(a,b,c,d,e){return J({target:a,hc:e,jc:d,kc:function(k=event){L(d)(38,0,b)&&k.preventDefault()},ic:c})}
function gb(a,b,c,d){Wa||(Wa=N(36));a=K(a);return J({target:a,hc:"resize",jc:d,kc:function(e=event){if(e.target==a){var k=document.body;if(k){var f=Wa;A[f>>2]=e.detail;A[f+4>>2]=k.clientWidth;A[f+8>>2]=k.clientHeight;A[f+12>>2]=innerWidth;A[f+16>>2]=innerHeight;A[f+20>>2]=outerWidth;A[f+24>>2]=outerHeight;A[f+28>>2]=pageXOffset;A[f+32>>2]=pageYOffset;L(d)(10,f,b)&&e.preventDefault()}}},ic:c})}
function hb(a,b,c,d,e,k){Xa||(Xa=N(1696));a=K(a);return J({target:a,qc:"touchstart"==k||"touchend"==k,hc:k,jc:d,kc:function(f){for(var m,n={},p=f.touches,q=0;q<p.length;++q)m=p[q],m.Bc=m.Dc=0,n[m.identifier]=m;for(q=0;q<f.changedTouches.length;++q)m=f.changedTouches[q],m.Bc=1,n[m.identifier]=m;for(q=0;q<f.targetTouches.length;++q)n[f.targetTouches[q].identifier].Dc=1;p=Xa;D[p>>3]=f.timeStamp;var u=p>>2;A[u+3]=f.ctrlKey;A[u+4]=f.shiftKey;A[u+5]=f.altKey;A[u+6]=f.metaKey;u+=7;var mb=$a(a),nb=0;for(q in n)if(m=
n[q],A[u]=m.identifier,A[u+1]=m.screenX,A[u+2]=m.screenY,A[u+3]=m.clientX,A[u+4]=m.clientY,A[u+5]=m.pageX,A[u+6]=m.pageY,A[u+7]=m.Bc,A[u+8]=m.Dc,A[u+9]=m.clientX-mb.left,A[u+10]=m.clientY-mb.top,u+=13,31<++nb)break;A[p+8>>2]=nb;L(d)(e,p,b)&&f.preventDefault()},ic:c})}
function ib(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,f){b.drawElementsInstancedANGLE(c,d,e,k,f)})}
function jb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function kb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function lb(a){a.Tc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function ob(a){a.Vc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function pb(a){a.Xc=a.getExtension("WEBGL_multi_draw")}var qb=1,rb=[],P=[],sb=[],tb=[],ub=[],Q=[],vb=[],wb=[],xb={},yb=4;function R(a){zb||(zb=a)}function Ab(a){for(var b=qb++,c=a.length;c<b;c++)a[c]=null;return b}
function Bb(a,b){a.oc||(a.oc=a.getContext,a.getContext=function(d,e){e=a.oc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Cc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Cb(c,b):0}function Cb(a,b){var c=Ab(wb),d={Uc:c,attributes:b,version:b.Cc,uc:a};a.canvas&&(a.canvas.Qc=d);wb[c]=d;("undefined"==typeof b.yc||b.yc)&&Db(d);return c}
function Db(a){a||(a=S);if(!a.Pc){a.Pc=!0;var b=a.uc;ib(b);jb(b);kb(b);lb(b);ob(b);2<=a.version&&(b.xc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.xc)b.xc=b.getExtension("EXT_disjoint_timer_query");pb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var zb,S;function Eb(a,b,c,d,e,k){a={target:K(a),hc:k,jc:d,kc:(f=event)=>{L(d)(e,0,b)&&f.preventDefault()},ic:c};J(a)}
function Fb(a,b,c,d){Ya||(Ya=N(104));return J({target:a,qc:!0,hc:"wheel",jc:d,kc:function(e=event){var k=Ya;db(k,e,a);D[k+72>>3]=e.deltaX;D[k+80>>3]=e.deltaY;D[k+88>>3]=e.deltaZ;A[k+96>>2]=e.deltaMode;L(d)(9,k,b)&&e.preventDefault()},ic:c})}var Gb=["default","low-power","high-performance"],Hb=[null,[],[]];function Ib(a,b,c,d){for(var e=0;e<a;e++){var k=T[c](),f=k&&Ab(d);k?(k.name=f,d[f]=k):R(1282);A[b+4*e>>2]=f}}
function Jb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=T.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>S.version){R(1282);return}c=2*(T.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>S.version){R(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=T.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":R(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:R(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)A[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){R(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:R(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}A[b>>2]=c}else R(1281)}
function Kb(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}function Lb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}var Mb=[];function U(a){a-=5120;return 0==a?ma:1==a?z:2==a?na:4==a?A:6==a?C:5==a||28922==a||28520==a||30779==a||30782==a?B:oa}function V(a){return 31-Math.clz32(a.BYTES_PER_ELEMENT)}
function Nb(a,b,c,d,e){a=U(a);var k=V(a),f=yb;return a.subarray(e>>k,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<k)+f-1&-f)>>k)}function W(a){var b=T.Mc;if(b){var c=b.pc[a];"number"==typeof c&&(b.pc[a]=c=T.getUniformLocation(b,b.Kc[a]+(0<c?"["+c+"]":"")));return c}R(1282)}var X=[],Y=[];function Ob(a){if(!noExitRuntime){if(g.onExit)g.onExit(a);la=!0}h(a,new w(a))}function Pb(a){var b=Kb(a)+1,c=Qb(b);M(a,c,b);return c}for(var T,Z=0;32>Z;++Z)Mb.push(Array(Z));
var Rb=new Float32Array(288);for(Z=0;288>Z;++Z)X[Z]=Rb.subarray(0,Z+1);var Sb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Sb.subarray(0,Z+1);
var dc={ka:function(){return 0},fb:function(){return 0},hb:function(){},h:function(){ja("")},fa:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},ga:function(a,b,c){a=K(a);if(!a)return-4;a=$a(a);D[b>>3]=a.width;D[c>>3]=a.height;return 0},cb:function(a,b,c){z.copyWithin(a,b,b+c)},Wa:function(a,b){function c(d){L(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},bb:function(a){var b=z.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/
c);d=Math.min(d,a+100663296);var e=Math,k=e.min;d=Math.max(a,d);d+=(65536-d%65536)%65536;a:{var f=ka.buffer;try{ka.grow(k.call(e,2147483648,d)-f.byteLength+65535>>>16);pa();var m=1;break a}catch(n){}m=void 0}if(m)return!0}return!1},P:function(a,b,c,d){return bb(a,b,c,d,12,"blur")},ea:function(a,b,c){a=K(a);if(!a)return-4;a.width=b;a.height=c;return 0},Q:function(a,b,c,d){return bb(a,b,c,d,13,"focus")},Z:function(a,b,c,d){return cb(a,b,c,d,2,"keydown")},X:function(a,b,c,d){return cb(a,b,c,d,1,"keypress")},
Y:function(a,b,c,d){return cb(a,b,c,d,3,"keyup")},da:function(a,b,c,d){return O(a,b,c,d,5,"mousedown")},aa:function(a,b,c,d){return O(a,b,c,d,33,"mouseenter")},$:function(a,b,c,d){return O(a,b,c,d,34,"mouseleave")},ba:function(a,b,c,d){return O(a,b,c,d,8,"mousemove")},ca:function(a,b,c,d){return O(a,b,c,d,6,"mouseup")},S:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.oc||document.body.Ac||document.body.zc))return-1;a=K(a);if(!a)return-4;eb(a,b,c,
d,"mozpointerlockchange");eb(a,b,c,d,"webkitpointerlockchange");eb(a,b,c,d,"mspointerlockchange");return eb(a,b,c,d,"pointerlockchange")},R:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.oc||document.body.Ac||document.body.zc))return-1;a=K(a);if(!a)return-4;fb(a,b,c,d,"mozpointerlockerror");fb(a,b,c,d,"webkitpointerlockerror");fb(a,b,c,d,"mspointerlockerror");return fb(a,b,c,d,"pointerlockerror")},Xa:function(a,b,c,d){return gb(a,b,c,d)},T:function(a,b,c,d){return hb(a,
b,c,d,25,"touchcancel")},U:function(a,b,c,d){return hb(a,b,c,d,23,"touchend")},V:function(a,b,c,d){return hb(a,b,c,d,24,"touchmove")},W:function(a,b,c,d){return hb(a,b,c,d,22,"touchstart")},O:function(a,b,c,d){Eb(a,b,c,d,31,"webglcontextlost");return 0},N:function(a,b,c,d){Eb(a,b,c,d,32,"webglcontextrestored");return 0},_:function(a,b,c,d){return(a=K(a))?"undefined"!=typeof a.onwheel?Fb(a,b,c,d):-1:-4},Ua:function(a,b){b>>=2;b={alpha:!!A[b],depth:!!A[b+1],stencil:!!A[b+2],antialias:!!A[b+3],premultipliedAlpha:!!A[b+
4],preserveDrawingBuffer:!!A[b+5],powerPreference:Gb[A[b+6]],failIfMajorPerformanceCaveat:!!A[b+7],Cc:A[b+8],Wc:A[b+9],yc:A[b+10],Oc:A[b+11],Yc:A[b+12],Zc:A[b+13]};a=K(a);return!a||b.Oc?0:Bb(a,b)},Ra:function(a,b){a=wb[a];b=H(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&ib(T);"OES_vertex_array_object"==b&&jb(T);"WEBGL_draw_buffers"==b&&kb(T);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&lb(T);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&ob(T);"WEBGL_multi_draw"==
b&&pb(T);return!!a.uc.getExtension(b)},Va:function(a){a>>=2;for(var b=0;14>b;++b)A[a+b]=0;A[a]=A[a+1]=A[a+3]=A[a+4]=A[a+8]=A[a+10]=1},Sa:function(a){S=wb[a];g.Sc=T=S&&S.uc;return!a||T?0:-5},ja:function(){return 52},eb:function(){return 52},ab:function(){return 70},db:function(a,b,c,d){for(var e=0,k=0;k<c;k++){var f=B[b>>2],m=B[b+4>>2];b+=8;for(var n=0;n<m;n++){var p=z[f+n],q=Hb[a];0===p||10===p?((1===a?ia:x)(Ga(q,0)),q.length=0):q.push(p)}e+=m}B[d>>2]=e;return 0},e:function(a){T.activeTexture(a)},
B:function(a,b){T.attachShader(P[a],Q[b])},b:function(a,b){35051==a?T.wc=b:35052==a&&(T.mc=b);T.bindBuffer(a,rb[b])},p:function(a,b){T.bindFramebuffer(a,sb[b])},Ba:function(a,b){T.bindRenderbuffer(a,tb[b])},a:function(a,b){T.bindTexture(a,ub[b])},K:function(a){T.bindVertexArray(vb[a])},G:function(a,b,c,d){T.blendColor(a,b,c,d)},H:function(a,b){T.blendEquationSeparate(a,b)},I:function(a,b,c,d){T.blendFuncSeparate(a,b,c,d)},lb:function(a,b,c,d,e,k,f,m,n,p){T.blitFramebuffer(a,b,c,d,e,k,f,m,n,p)},Da:function(a,
b,c,d){2<=S.version?c&&b?T.bufferData(a,z,d,c,b):T.bufferData(a,b,d):T.bufferData(a,c?z.subarray(c,c+b):b,d)},l:function(a,b,c,d){2<=S.version?c&&T.bufferSubData(a,b,z,d,c):T.bufferSubData(a,b,z.subarray(d,d+c))},Gb:function(a,b,c,d){T.clearBufferfi(a,b,c,d)},oa:function(a,b,c){T.clearBufferfv(a,b,C,c>>2)},Fb:function(a,b,c){T.clearBufferiv(a,b,A,c>>2)},i:function(a,b,c,d){T.colorMask(!!a,!!b,!!c,!!d)},Jb:function(a){T.compileShader(Q[a])},xa:function(a,b,c,d,e,k,f,m){2<=S.version?T.mc||!f?T.compressedTexImage2D(a,
b,c,d,e,k,f,m):T.compressedTexImage2D(a,b,c,d,e,k,z,m,f):T.compressedTexImage2D(a,b,c,d,e,k,m?z.subarray(m,m+f):null)},va:function(a,b,c,d,e,k,f,m,n){T.mc?T.compressedTexImage3D(a,b,c,d,e,k,f,m,n):T.compressedTexImage3D(a,b,c,d,e,k,f,z,n,m)},ta:function(){var a=Ab(P),b=T.createProgram();b.name=a;b.tc=b.rc=b.sc=0;b.vc=1;P[a]=b;return a},Lb:function(a){var b=Ab(Q);Q[b]=T.createShader(a);return b},D:function(a){T.cullFace(a)},Na:function(a,b){for(var c=0;c<a;c++){var d=A[b+4*c>>2],e=rb[d];e&&(T.deleteBuffer(e),
e.name=0,rb[d]=null,d==T.wc&&(T.wc=0),d==T.mc&&(T.mc=0))}},j:function(a,b){for(var c=0;c<a;++c){var d=A[b+4*c>>2],e=sb[d];e&&(T.deleteFramebuffer(e),e.name=0,sb[d]=null)}},x:function(a){if(a){var b=P[a];b?(T.deleteProgram(b),b.name=0,P[a]=null):R(1281)}},L:function(a,b){for(var c=0;c<a;c++){var d=A[b+4*c>>2],e=tb[d];e&&(T.deleteRenderbuffer(e),e.name=0,tb[d]=null)}},t:function(a){if(a){var b=Q[a];b?(T.deleteShader(b),Q[a]=null):R(1281)}},M:function(a,b){for(var c=0;c<a;c++){var d=A[b+4*c>>2],e=ub[d];
e&&(T.deleteTexture(e),e.name=0,ub[d]=null)}},La:function(a,b){for(var c=0;c<a;c++){var d=A[b+4*c>>2];T.deleteVertexArray(vb[d]);vb[d]=null}},w:function(a){T.depthFunc(a)},v:function(a){T.depthMask(!!a)},d:function(a){T.disable(a)},J:function(a){T.disableVertexAttribArray(a)},nb:function(a,b,c){T.drawArrays(a,b,c)},ob:function(a,b,c,d){T.drawArraysInstanced(a,b,c,d)},qb:function(a,b,c,d){T.drawElements(a,b,c,d)},rb:function(a,b,c,d,e){T.drawElementsInstanced(a,b,c,d,e)},g:function(a){T.enable(a)},
Cb:function(a){T.enableVertexAttribArray(a)},E:function(a){T.frontFace(a)},Ea:function(a,b){Ib(a,b,"createBuffer",rb)},Ca:function(a,b){Ib(a,b,"createRenderbuffer",tb)},za:function(a,b){Ib(a,b,"createTexture",ub)},Ka:function(a,b){Ib(a,b,"createVertexArray",vb)},Hb:function(a,b){return T.getAttribLocation(P[a],H(b))},c:function(a,b){Jb(a,b)},ra:function(a,b,c,d){a=T.getProgramInfoLog(P[a]);null===a&&(a="(unknown error)");b=0<b&&d?M(a,d,b):0;c&&(A[c>>2]=b)},A:function(a,b,c){if(c)if(a>=qb)R(1281);
else if(a=P[a],35716==b)a=T.getProgramInfoLog(a),null===a&&(a="(unknown error)"),A[c>>2]=a.length+1;else if(35719==b){if(!a.tc)for(b=0;b<T.getProgramParameter(a,35718);++b)a.tc=Math.max(a.tc,T.getActiveUniform(a,b).name.length+1);A[c>>2]=a.tc}else if(35722==b){if(!a.rc)for(b=0;b<T.getProgramParameter(a,35721);++b)a.rc=Math.max(a.rc,T.getActiveAttrib(a,b).name.length+1);A[c>>2]=a.rc}else if(35381==b){if(!a.sc)for(b=0;b<T.getProgramParameter(a,35382);++b)a.sc=Math.max(a.sc,T.getActiveUniformBlockName(a,
b).length+1);A[c>>2]=a.sc}else A[c>>2]=T.getProgramParameter(a,b);else R(1281)},Ib:function(a,b,c,d){a=T.getShaderInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?M(a,d,b):0;c&&(A[c>>2]=b)},pa:function(a,b,c){c?35716==b?(a=T.getShaderInfoLog(Q[a]),null===a&&(a="(unknown error)"),A[c>>2]=a?a.length+1:0):35720==b?(a=T.getShaderSource(Q[a]),A[c>>2]=a?a.length+1:0):A[c>>2]=T.getShaderParameter(Q[a],b):R(1281)},Oa:function(a,b){if(2>S.version)return R(1282),0;var c=xb[a];if(c)return 0>b||b>=c.length?
(R(1281),0):c[b];switch(a){case 7939:return c=T.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){var e=Kb(d)+1,k=N(e);k&&M(d,k,e);return k}),c=xb[a]=c,0>b||b>=c.length?(R(1281),0):c[b];default:return R(1280),0}},q:function(a,b){b=H(b);if(a=P[a]){var c=a,d=c.pc,e=c.Lc,k;if(!d)for(c.pc=d={},c.Kc={},k=0;k<T.getProgramParameter(c,35718);++k){var f=T.getActiveUniform(c,k);var m=f.name;f=f.size;var n=Lb(m);n=0<n?m.slice(0,n):m;var p=c.vc;c.vc+=f;e[n]=[f,p];
for(m=0;m<f;++m)d[p]=m,c.Kc[p++]=n}c=a.pc;d=0;e=b;k=Lb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.Lc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||T.getUniformLocation(a,b)))return d}else R(1281);return-1},kb:function(a,b,c){for(var d=Mb[b],e=0;e<b;e++)d[e]=A[c+4*e>>2];T.invalidateFramebuffer(a,d)},sa:function(a){a=P[a];T.linkProgram(a);a.pc=0;a.Lc={}},Ja:function(a,b){3317==a&&(yb=b);T.pixelStorei(a,b)},F:function(a,b){T.polygonOffset(a,b)},mb:function(a){T.readBuffer(a)},Aa:function(a,b,c,
d,e){T.renderbufferStorageMultisample(a,b,c,d,e)},n:function(a,b,c,d){T.scissor(a,b,c,d)},Kb:function(a,b,c,d){for(var e="",k=0;k<b;++k){var f=d?A[d+4*k>>2]:-1;e+=H(A[c+4*k>>2],0>f?void 0:f)}T.shaderSource(Q[a],e)},Ha:function(a,b,c){T.stencilFunc(a,b,c)},na:function(a,b,c,d){T.stencilFuncSeparate(a,b,c,d)},u:function(a){T.stencilMask(a)},Ga:function(a,b,c){T.stencilOp(a,b,c)},ma:function(a,b,c,d){T.stencilOpSeparate(a,b,c,d)},wa:function(a,b,c,d,e,k,f,m,n){if(2<=S.version)if(T.mc)T.texImage2D(a,
b,c,d,e,k,f,m,n);else if(n){var p=U(m);T.texImage2D(a,b,c,d,e,k,f,m,p,n>>V(p))}else T.texImage2D(a,b,c,d,e,k,f,m,null);else T.texImage2D(a,b,c,d,e,k,f,m,n?Nb(m,f,d,e,n):null)},ua:function(a,b,c,d,e,k,f,m,n,p){if(T.mc)T.texImage3D(a,b,c,d,e,k,f,m,n,p);else if(p){var q=U(n);T.texImage3D(a,b,c,d,e,k,f,m,n,q,p>>V(q))}else T.texImage3D(a,b,c,d,e,k,f,m,n,null)},C:function(a,b,c){T.texParameterf(a,b,c)},f:function(a,b,c){T.texParameteri(a,b,c)},jb:function(a,b,c,d,e,k,f,m,n){if(2<=S.version)if(T.mc)T.texSubImage2D(a,
b,c,d,e,k,f,m,n);else if(n){var p=U(m);T.texSubImage2D(a,b,c,d,e,k,f,m,p,n>>V(p))}else T.texSubImage2D(a,b,c,d,e,k,f,m,null);else p=null,n&&(p=Nb(m,f,e,k,n)),T.texSubImage2D(a,b,c,d,e,k,f,m,p)},ib:function(a,b,c,d,e,k,f,m,n,p,q){if(T.mc)T.texSubImage3D(a,b,c,d,e,k,f,m,n,p,q);else if(q){var u=U(p);T.texSubImage3D(a,b,c,d,e,k,f,m,n,p,u,q>>V(u))}else T.texSubImage3D(a,b,c,d,e,k,f,m,n,p,null)},Bb:function(a,b,c){if(2<=S.version)b&&T.uniform1fv(W(a),C,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=
C[c+4*e>>2];else d=C.subarray(c>>2,c+4*b>>2);T.uniform1fv(W(a),d)}},qa:function(a,b){T.uniform1i(W(a),b)},wb:function(a,b,c){if(2<=S.version)b&&T.uniform1iv(W(a),A,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=A[c+4*e>>2];else d=A.subarray(c>>2,c+4*b>>2);T.uniform1iv(W(a),d)}},zb:function(a,b,c){if(2<=S.version)b&&T.uniform2fv(W(a),C,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2];else d=C.subarray(c>>2,c+8*b>>2);T.uniform2fv(W(a),d)}},
vb:function(a,b,c){if(2<=S.version)b&&T.uniform2iv(W(a),A,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2];else d=A.subarray(c>>2,c+8*b>>2);T.uniform2iv(W(a),d)}},yb:function(a,b,c){if(2<=S.version)b&&T.uniform3fv(W(a),C,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2];else d=C.subarray(c>>2,c+12*b>>2);T.uniform3fv(W(a),d)}},ub:function(a,b,c){if(2<=S.version)b&&T.uniform3iv(W(a),
A,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2],d[e+2]=A[c+(4*e+8)>>2];else d=A.subarray(c>>2,c+12*b>>2);T.uniform3iv(W(a),d)}},xb:function(a,b,c){if(2<=S.version)b&&T.uniform4fv(W(a),C,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=C;c>>=2;for(var k=0;k<4*b;k+=4){var f=c+k;d[k]=e[f];d[k+1]=e[f+1];d[k+2]=e[f+2];d[k+3]=e[f+3]}}else d=C.subarray(c>>2,c+16*b>>2);T.uniform4fv(W(a),d)}},tb:function(a,b,c){if(2<=S.version)b&&T.uniform4iv(W(a),A,c>>2,4*b);else{if(72>=
b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2],d[e+2]=A[c+(4*e+8)>>2],d[e+3]=A[c+(4*e+12)>>2];else d=A.subarray(c>>2,c+16*b>>2);T.uniform4iv(W(a),d)}},sb:function(a,b,c,d){if(2<=S.version)b&&T.uniformMatrix4fv(W(a),!!c,C,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],k=C;d>>=2;for(var f=0;f<16*b;f+=16){var m=d+f;e[f]=k[m];e[f+1]=k[m+1];e[f+2]=k[m+2];e[f+3]=k[m+3];e[f+4]=k[m+4];e[f+5]=k[m+5];e[f+6]=k[m+6];e[f+7]=k[m+7];e[f+8]=k[m+8];e[f+9]=k[m+9];e[f+10]=k[m+10];e[f+11]=k[m+
11];e[f+12]=k[m+12];e[f+13]=k[m+13];e[f+14]=k[m+14];e[f+15]=k[m+15]}}else e=C.subarray(d>>2,d+64*b>>2);T.uniformMatrix4fv(W(a),!!c,e)}},k:function(a){a=P[a];T.useProgram(a);T.Mc=a},Db:function(a,b){T.vertexAttribDivisor(a,b)},Eb:function(a,b,c,d,e,k){T.vertexAttribPointer(a,b,c,!!d,e,k)},o:function(a,b,c,d){T.viewport(a,b,c,d)},Ta:function(){g.Ec=a=>{0!=Tb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",g.Ec)},Pa:function(){g.Jc=a=>{const b=a.clipboardData.getData("text");
Ha(()=>{const c=Pb(b);Ub(c)})};window.addEventListener("paste",g.Jc)},Fa:function(a){g.$c=[];a=H(a);a=document.getElementById(a);g.Fc=b=>{b.stopPropagation();b.preventDefault()};g.Gc=b=>{b.stopPropagation();b.preventDefault()};g.Hc=b=>{b.stopPropagation();b.preventDefault()};g.Ic=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;g.ad=c;Vb(c.length);for(let d=0;d<c.length;d++)Ha(()=>{const e=Pb(c[d].name);Wb(d,e)});Xb(b.clientX,b.clientY)};a.addEventListener("dragenter",g.Fc,
!1);a.addEventListener("dragleave",g.Gc,!1);a.addEventListener("dragover",g.Hc,!1);a.addEventListener("drop",g.Ic,!1)},pb:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},s:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Yb()});document.body.append(a)},r:function(){document.getElementById("_sokol_app_input_element").focus()},Mb:function(a){a=
H(a);g.nc=document.getElementById(a);g.nc||console.log("sokol_app.h: invalid target:"+a);g.nc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Qa:function(){window.removeEventListener("beforeunload",g.Ec)},Ma:function(){window.removeEventListener("paste",g.Jc)},ya:function(a){a=H(a);a=document.getElementById(a);a.removeEventListener("dragenter",g.Fc);a.removeEventListener("dragleave",g.Gc);a.removeEventListener("dragover",g.Hc);a.removeEventListener("drop",
g.Ic)},z:function(){g.nc&&g.nc.requestPointerLock&&g.nc.requestPointerLock()},Ab:function(a,b){if(g.nc){if(0===b)a="none";else switch(a){case 0:a="auto";break;case 1:a="default";break;case 2:a="text";break;case 3:a="crosshair";break;case 4:a="pointer";break;case 5:a="ew-resize";break;case 6:a="ns-resize";break;case 7:a="nwse-resize";break;case 8:a="nesw-resize";break;case 9:a="all-scroll";break;case 10:a="not-allowed";break;default:a="auto"}g.nc.style.cursor=a}},gb:function(a,b,c){const d=document.createElement("canvas");
d.width=a;d.height=b;const e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(z.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},m:function(){document.getElementById("_sokol_app_input_element").blur()},Ia:function(a){a=H(a);const b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize",
"off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},Ya:function(){return g.lc?g.lc.bufferSize:0},$a:function(a,b,c){g.fc=null;g.lc=null;"undefined"!==typeof AudioContext?g.fc=new AudioContext({sampleRate:a,latencyHint:"interactive"}):(g.fc=null,console.log("sokol_audio.h: no WebAudio support"));return g.fc?(console.log("sokol_audio.h: sample rate ",
g.fc.sampleRate),g.lc=g.fc.createScriptProcessor(c,0,b),g.lc.onaudioprocess=d=>{const e=d.outputBuffer.length,k=Zb(e);if(k){const f=d.outputBuffer.numberOfChannels;for(let m=0;m<f;m++){const n=d.outputBuffer.getChannelData(m);for(let p=0;p<e;p++)n[p]=C[(k>>2)+(f*p+m)]}}},g.lc.connect(g.fc.destination),a=()=>{g.fc&&"suspended"===g.fc.state&&g.fc.resume()},document.addEventListener("click",a,{once:!0}),document.addEventListener("touchend",a,{once:!0}),document.addEventListener("keydown",a,{once:!0}),
1):0},Za:function(){return g.fc?g.fc.sampleRate:0},_a:function(){const a=g.fc;null!==a&&(g.lc&&g.lc.disconnect(),a.close(),g.fc=null,g.lc=null)},y:function(a,b,c,d,e,k){b=H(b);const f=new XMLHttpRequest;f.open("GET",b);f.responseType="arraybuffer";const m=0<d;m&&f.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));f.onreadystatechange=function(){if(f.readyState==XMLHttpRequest.DONE)if(206==f.status||200==f.status&&!m){const n=new Uint8Array(f.response),p=n.length;p<=k?(z.set(n,e),$b(a,d,p)):ac(a)}else bc(a,
f.status)};f.send()},ia:function(a,b){b=H(b);const c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(c.readyState==XMLHttpRequest.DONE)if(200==c.status){const d=c.getResponseHeader("Content-Length");cc(a,d)}else bc(a,c.status)};c.send()},la:function(){return navigator.userAgent.includes("Macintosh")?1:0},ha:function(a,b){b=H(b);switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}};
(function(){function a(c){c=c.exports;g.asm=c;ka=g.asm.Nb;pa();qa=g.asm.bc;sa.unshift(g.asm.Ob);E--;g.monitorRunDependencies&&g.monitorRunDependencies(E);if(0==E&&(null!==xa&&(clearInterval(xa),xa=null),F)){var d=F;F=null;d()}return c}var b={a:dc};E++;g.monitorRunDependencies&&g.monitorRunDependencies(E);if(g.instantiateWasm)try{return g.instantiateWasm(b,a)}catch(c){return x("Module.instantiateWasm callback failed with error: "+c),!1}Da(b,function(c){a(c.instance)});return{}})();
function N(){return(N=g.asm.Pb).apply(null,arguments)}
var Yb=g.__sapp_emsc_notify_keyboard_hidden=function(){return(Yb=g.__sapp_emsc_notify_keyboard_hidden=g.asm.Qb).apply(null,arguments)},Ub=g.__sapp_emsc_onpaste=function(){return(Ub=g.__sapp_emsc_onpaste=g.asm.Rb).apply(null,arguments)},Tb=g.__sapp_html5_get_ask_leave_site=function(){return(Tb=g.__sapp_html5_get_ask_leave_site=g.asm.Sb).apply(null,arguments)},Vb=g.__sapp_emsc_begin_drop=function(){return(Vb=g.__sapp_emsc_begin_drop=g.asm.Tb).apply(null,arguments)},Wb=g.__sapp_emsc_drop=function(){return(Wb=
g.__sapp_emsc_drop=g.asm.Ub).apply(null,arguments)},Xb=g.__sapp_emsc_end_drop=function(){return(Xb=g.__sapp_emsc_end_drop=g.asm.Vb).apply(null,arguments)};g.__sapp_emsc_invoke_fetch_cb=function(){return(g.__sapp_emsc_invoke_fetch_cb=g.asm.Wb).apply(null,arguments)};
var ec=g._main=function(){return(ec=g._main=g.asm.Xb).apply(null,arguments)},Zb=g.__saudio_emsc_pull=function(){return(Zb=g.__saudio_emsc_pull=g.asm.Yb).apply(null,arguments)},cc=g.__sfetch_emsc_head_response=function(){return(cc=g.__sfetch_emsc_head_response=g.asm.Zb).apply(null,arguments)},$b=g.__sfetch_emsc_get_response=function(){return($b=g.__sfetch_emsc_get_response=g.asm._b).apply(null,arguments)},bc=g.__sfetch_emsc_failed_http_status=function(){return(bc=g.__sfetch_emsc_failed_http_status=
g.asm.$b).apply(null,arguments)},ac=g.__sfetch_emsc_failed_buffer_too_small=function(){return(ac=g.__sfetch_emsc_failed_buffer_too_small=g.asm.ac).apply(null,arguments)};function Ia(){return(Ia=g.asm.cc).apply(null,arguments)}function Ja(){return(Ja=g.asm.dc).apply(null,arguments)}function Qb(){return(Qb=g.asm.ec).apply(null,arguments)}g.___start_em_js=47736;g.___stop_em_js=57349;var fc;F=function gc(){fc||hc();fc||(F=gc)};
function ic(a=[]){var b=ec;a.unshift(ca);var c=a.length,d=Qb(4*(c+1)),e=d>>2;a.forEach(f=>{A[e++]=Pb(f)});A[e]=0;try{var k=b(c,d);Ob(k)}catch(f){f instanceof w||"unwind"==f||h(1,f)}}
function hc(){var a=ba;function b(){if(!fc&&(fc=!0,g.calledRun=!0,!la)){Ea(sa);Ea(ta);if(g.onRuntimeInitialized)g.onRuntimeInitialized();jc&&ic(a);if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var c=g.postRun.shift();va.unshift(c)}Ea(va)}}if(!(0<E)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)wa();Ea(ra);0<E||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);b()},
1)):b())}}if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var jc=!0;g.noInitialRun&&(jc=!1);hc();
