var g;g||(g=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},g),ba=[],ca="./this.program",h=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,r="",fa,u,v;
if(ea){var fs=require("fs"),ha=require("path");r=l?ha.dirname(r)+"/":__dirname+"/";fa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};v=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};u=(a,b,c,d=!0)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);fs.readFile(a,d?void 0:"utf8",(e,k)=>{e?c(e):b(d?k.buffer:k)})};!g.thisProgram&&1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&
(module.exports=g);process.on("uncaughtException",a=>{if(!("unwind"===a||a instanceof w||a.context instanceof w))throw a;});if(15>process.versions.node.split(".")[0])process.on("unhandledRejection",a=>{throw a;});h=(a,b)=>{process.exitCode=a;throw b;};g.inspect=()=>"[Emscripten Module object]"}else if(da||l)l?r=self.location.href:"undefined"!=typeof document&&document.currentScript&&(r=document.currentScript.src),r=0!==r.indexOf("blob:")?r.substr(0,r.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=
a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(v=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),u=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ia=g.print||console.log.bind(console),x=g.printErr||console.error.bind(console);Object.assign(g,aa);
aa=null;g.arguments&&(ba=g.arguments);g.thisProgram&&(ca=g.thisProgram);g.quit&&(h=g.quit);var y;g.wasmBinary&&(y=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!0;"object"!=typeof WebAssembly&&ja("no native wasm support detected");var ka,la=!1,ma,z,na,oa,A,B,C,D;
function pa(){var a=ka.buffer;g.HEAP8=ma=new Int8Array(a);g.HEAP16=na=new Int16Array(a);g.HEAP32=A=new Int32Array(a);g.HEAPU8=z=new Uint8Array(a);g.HEAPU16=oa=new Uint16Array(a);g.HEAPU32=B=new Uint32Array(a);g.HEAPF32=C=new Float32Array(a);g.HEAPF64=D=new Float64Array(a)}var qa,ra=[],sa=[],ta=[],ua=[],va=[];function wa(){var a=g.preRun.shift();ra.unshift(a)}var E=0,xa=null,F=null;
function ja(a){if(g.onAbort)g.onAbort(a);a="Aborted("+a+")";x(a);la=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function ya(a){return a.startsWith("data:application/octet-stream;base64,")}var G;G="spine-skinsets-sapp-ui.wasm";if(!ya(G)){var za=G;G=g.locateFile?g.locateFile(za,r):r+za}function Aa(a){try{if(a==G&&y)return new Uint8Array(y);if(v)return v(a);throw"both async and sync fetching of the wasm failed";}catch(b){ja(b)}}
function Ba(a){if(!y&&(da||l)){if("function"==typeof fetch&&!a.startsWith("file://"))return fetch(a,{credentials:"same-origin"}).then(b=>{if(!b.ok)throw"failed to load wasm binary file at '"+a+"'";return b.arrayBuffer()}).catch(()=>Aa(a));if(u)return new Promise((b,c)=>{u(a,d=>b(new Uint8Array(d)),c)})}return Promise.resolve().then(()=>Aa(a))}function Ca(a,b,c){return Ba(a).then(d=>WebAssembly.instantiate(d,b)).then(d=>d).then(c,d=>{x("failed to asynchronously prepare wasm: "+d);ja(d)})}
function Da(a,b){var c=G;y||"function"!=typeof WebAssembly.instantiateStreaming||ya(c)||c.startsWith("file://")||ea||"function"!=typeof fetch?Ca(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(e){x("wasm streaming compile failed: "+e);x("falling back to ArrayBuffer instantiation");return Ca(c,a,b)}))}function w(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function Ea(a){for(;0<a.length;)a.shift()(g)}var Fa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function Ga(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&Fa)return Fa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var k=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var f=a[b++]&63;e=224==(e&240)?(e&15)<<12|k<<6|f:(e&7)<<18|k<<12|f<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function H(a,b){return a?Ga(z,a,b):""}
function Ha(a){var b=Ia();a();Ja(b)}var Ka=0;function La(){for(var a=I.length-1;0<=a;--a)Ma(a);I=[];Na=[]}var Na=[];function Oa(){if(Ka&&Pa.jc)for(var a=0;a<Na.length;++a){var b=Na[a];Na.splice(a,1);--a;b.Vc.apply(null,b.Kc)}}var I=[];function Ma(a){var b=I[a];b.target.removeEventListener(b.ac,b.Gc,b.bc);I.splice(a,1)}
function J(a){function b(d){++Ka;Pa=a;Oa();a.dc(d);Oa();--Ka}if(!a.target)return-4;if(a.cc)a.Gc=b,a.target.addEventListener(a.ac,b,a.bc),I.push(a),Qa||(ua.push(La),Qa=!0);else for(var c=0;c<I.length;++c)I[c].target==a.target&&I[c].ac==a.ac&&Ma(c--);return 0}function Ra(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Qa,Pa,Sa,Ta,Ua,Va,Wa,Xa,Ya,Za=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function K(a){a=2<a?H(a):a;return Za[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function $a(a){return 0>Za.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var ab;ab=ea?()=>{var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:()=>performance.now();var bb=[];function L(a){var b=bb[a];b||(a>=bb.length&&(bb.length=a+1),bb[a]=b=qa.get(a));return b}
function M(a,b,c){var d=z;if(!(0<c))return 0;var e=b;c=b+c-1;for(var k=0;k<a.length;++k){var f=a.charCodeAt(k);if(55296<=f&&57343>=f){var m=a.charCodeAt(++k);f=65536+((f&1023)<<10)|m&1023}if(127>=f){if(b>=c)break;d[b++]=f}else{if(2047>=f){if(b+1>=c)break;d[b++]=192|f>>6}else{if(65535>=f){if(b+2>=c)break;d[b++]=224|f>>12}else{if(b+3>=c)break;d[b++]=240|f>>18;d[b++]=128|f>>12&63}d[b++]=128|f>>6&63}d[b++]=128|f&63}}d[b]=0;return b-e}
function cb(a,b,c,d,e,k){Sa||(Sa=O(256));a={target:K(a),ac:k,cc:d,dc:function(f=event){var m=f.target.id?f.target.id:"",n=Sa;M(Ra(f.target),n+0,128);M(m,n+128,128);L(d)(e,n,b)&&f.preventDefault()},bc:c};return J(a)}
function db(a,b,c,d,e,k){Ta||(Ta=O(176));a={target:K(a),jc:!0,ac:k,cc:d,dc:function(f){var m=Ta;D[m>>3]=f.timeStamp;var n=m>>2;A[n+2]=f.location;A[n+3]=f.ctrlKey;A[n+4]=f.shiftKey;A[n+5]=f.altKey;A[n+6]=f.metaKey;A[n+7]=f.repeat;A[n+8]=f.charCode;A[n+9]=f.keyCode;A[n+10]=f.which;M(f.key||"",m+44,32);M(f.code||"",m+76,32);M(f.char||"",m+108,32);M(f.locale||"",m+140,32);L(d)(e,m,b)&&f.preventDefault()},bc:c};return J(a)}
function eb(a,b,c){D[a>>3]=b.timeStamp;a>>=2;A[a+2]=b.screenX;A[a+3]=b.screenY;A[a+4]=b.clientX;A[a+5]=b.clientY;A[a+6]=b.ctrlKey;A[a+7]=b.shiftKey;A[a+8]=b.altKey;A[a+9]=b.metaKey;na[2*a+20]=b.button;na[2*a+21]=b.buttons;A[a+11]=b.movementX;A[a+12]=b.movementY;c=$a(c);A[a+13]=b.clientX-c.left;A[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,k){Ua||(Ua=O(72));a=K(a);return J({target:a,jc:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,ac:k,cc:d,dc:function(f=event){eb(Ua,f,a);L(d)(e,Ua,b)&&f.preventDefault()},bc:c})}function fb(a,b,c,d,e){Va||(Va=O(260));return J({target:a,ac:e,cc:d,dc:function(k=event){var f=Va,m=document.pointerLockElement||document.hc||document.qc||document.pc;A[f>>2]=!!m;var n=m&&m.id?m.id:"";M(Ra(m),f+4,128);M(n,f+132,128);L(d)(20,f,b)&&k.preventDefault()},bc:c})}
function gb(a,b,c,d,e){return J({target:a,ac:e,cc:d,dc:function(k=event){L(d)(38,0,b)&&k.preventDefault()},bc:c})}
function hb(a,b,c,d){Wa||(Wa=O(36));a=K(a);return J({target:a,ac:"resize",cc:d,dc:function(e=event){if(e.target==a){var k=document.body;if(k){var f=Wa;A[f>>2]=e.detail;A[f+4>>2]=k.clientWidth;A[f+8>>2]=k.clientHeight;A[f+12>>2]=innerWidth;A[f+16>>2]=innerHeight;A[f+20>>2]=outerWidth;A[f+24>>2]=outerHeight;A[f+28>>2]=pageXOffset;A[f+32>>2]=pageYOffset;L(d)(10,f,b)&&e.preventDefault()}}},bc:c})}
function ib(a,b,c,d,e,k){Xa||(Xa=O(1696));a=K(a);return J({target:a,jc:"touchstart"==k||"touchend"==k,ac:k,cc:d,dc:function(f){for(var m,n={},p=f.touches,q=0;q<p.length;++q)m=p[q],m.uc=m.wc=0,n[m.identifier]=m;for(q=0;q<f.changedTouches.length;++q)m=f.changedTouches[q],m.uc=1,n[m.identifier]=m;for(q=0;q<f.targetTouches.length;++q)n[f.targetTouches[q].identifier].wc=1;p=Xa;D[p>>3]=f.timeStamp;var t=p>>2;A[t+3]=f.ctrlKey;A[t+4]=f.shiftKey;A[t+5]=f.altKey;A[t+6]=f.metaKey;t+=7;var N=$a(a),U=0;for(q in n)if(m=
n[q],A[t]=m.identifier,A[t+1]=m.screenX,A[t+2]=m.screenY,A[t+3]=m.clientX,A[t+4]=m.clientY,A[t+5]=m.pageX,A[t+6]=m.pageY,A[t+7]=m.uc,A[t+8]=m.wc,A[t+9]=m.clientX-N.left,A[t+10]=m.clientY-N.top,t+=13,31<++U)break;A[p+8>>2]=U;L(d)(e,p,b)&&f.preventDefault()},bc:c})}
function jb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,f){b.drawElementsInstancedANGLE(c,d,e,k,f)})}
function kb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function lb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function mb(a){a.Mc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function nb(a){a.Oc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function ob(a){a.Qc=a.getExtension("WEBGL_multi_draw")}var pb=1,qb=[],Q=[],rb=[],sb=[],tb=[],R=[],ub=[],vb=[],wb={},xb=4;function S(a){yb||(yb=a)}function zb(a){for(var b=pb++,c=a.length;c<b;c++)a[c]=null;return b}
function Ab(a,b){a.hc||(a.hc=a.getContext,a.getContext=function(d,e){e=a.hc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.vc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Bb(c,b):0}function Bb(a,b){var c=zb(vb),d={Nc:c,attributes:b,version:b.vc,nc:a};a.canvas&&(a.canvas.Jc=d);vb[c]=d;("undefined"==typeof b.tc||b.tc)&&Cb(d);return c}
function Cb(a){a||(a=T);if(!a.Ic){a.Ic=!0;var b=a.nc;jb(b);kb(b);lb(b);mb(b);nb(b);2<=a.version&&(b.sc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.sc)b.sc=b.getExtension("EXT_disjoint_timer_query");ob(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var yb,T;function Db(a,b,c,d,e,k){a={target:K(a),ac:k,cc:d,dc:(f=event)=>{L(d)(e,0,b)&&f.preventDefault()},bc:c};J(a)}
function Eb(a,b,c,d){Ya||(Ya=O(104));return J({target:a,jc:!0,ac:"wheel",cc:d,dc:function(e=event){var k=Ya;eb(k,e,a);D[k+72>>3]=e.deltaX;D[k+80>>3]=e.deltaY;D[k+88>>3]=e.deltaZ;A[k+96>>2]=e.deltaMode;L(d)(9,k,b)&&e.preventDefault()},bc:c})}var Fb=["default","low-power","high-performance"],Gb=[null,[],[]];function Hb(a,b,c,d){for(var e=0;e<a;e++){var k=V[c](),f=k&&zb(d);k?(k.name=f,d[f]=k):S(1282);A[b+4*e>>2]=f}}
function Ib(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=V.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>T.version){S(1282);return}c=2*(V.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>T.version){S(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=V.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":S(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:S(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)A[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){S(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:S(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}A[b>>2]=c}else S(1281)}
function Jb(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}function Kb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}var Lb=[];function Mb(a){a-=5120;return 0==a?ma:1==a?z:2==a?na:4==a?A:6==a?C:5==a||28922==a||28520==a||30779==a||30782==a?B:oa}function W(a){var b=V.Fc;if(b){var c=b.ic[a];"number"==typeof c&&(b.ic[a]=c=V.getUniformLocation(b,b.Dc[a]+(0<c?"["+c+"]":"")));return c}S(1282)}var X=[],Y=[];
function Nb(a){if(!noExitRuntime){if(g.onExit)g.onExit(a);la=!0}h(a,new w(a))}function Ob(a){var b=Jb(a)+1,c=Pb(b);M(a,c,b);return c}for(var V,Z=0;32>Z;++Z)Lb.push(Array(Z));var Qb=new Float32Array(288);for(Z=0;288>Z;++Z)X[Z]=Qb.subarray(0,Z+1);var Rb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Rb.subarray(0,Z+1);
var bc={ma:function(){return 0},eb:function(){return 0},fb:function(){},h:function(){ja("")},ha:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},ia:function(a,b,c){a=K(a);if(!a)return-4;a=$a(a);D[b>>3]=a.width;D[c>>3]=a.height;return 0},z:ab,bb:function(a,b,c){z.copyWithin(a,b,b+c)},Xa:function(a,b){function c(d){L(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},$a:function(a){var b=z.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*
(1+.2/c);d=Math.min(d,a+100663296);var e=Math,k=e.min;d=Math.max(a,d);d+=(65536-d%65536)%65536;a:{var f=ka.buffer;try{ka.grow(k.call(e,2147483648,d)-f.byteLength+65535>>>16);pa();var m=1;break a}catch(n){}m=void 0}if(m)return!0}return!1},R:function(a,b,c,d){return cb(a,b,c,d,12,"blur")},ga:function(a,b,c){a=K(a);if(!a)return-4;a.width=b;a.height=c;return 0},S:function(a,b,c,d){return cb(a,b,c,d,13,"focus")},$:function(a,b,c,d){return db(a,b,c,d,2,"keydown")},Z:function(a,b,c,d){return db(a,b,c,d,
1,"keypress")},_:function(a,b,c,d){return db(a,b,c,d,3,"keyup")},fa:function(a,b,c,d){return P(a,b,c,d,5,"mousedown")},ca:function(a,b,c,d){return P(a,b,c,d,33,"mouseenter")},ba:function(a,b,c,d){return P(a,b,c,d,34,"mouseleave")},da:function(a,b,c,d){return P(a,b,c,d,8,"mousemove")},ea:function(a,b,c,d){return P(a,b,c,d,6,"mouseup")},U:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.hc||document.body.qc||document.body.pc))return-1;a=K(a);if(!a)return-4;
fb(a,b,c,d,"mozpointerlockchange");fb(a,b,c,d,"webkitpointerlockchange");fb(a,b,c,d,"mspointerlockchange");return fb(a,b,c,d,"pointerlockchange")},T:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.hc||document.body.qc||document.body.pc))return-1;a=K(a);if(!a)return-4;gb(a,b,c,d,"mozpointerlockerror");gb(a,b,c,d,"webkitpointerlockerror");gb(a,b,c,d,"mspointerlockerror");return gb(a,b,c,d,"pointerlockerror")},Ya:function(a,b,c,d){return hb(a,b,c,d)},V:function(a,b,
c,d){return ib(a,b,c,d,25,"touchcancel")},W:function(a,b,c,d){return ib(a,b,c,d,23,"touchend")},X:function(a,b,c,d){return ib(a,b,c,d,24,"touchmove")},Y:function(a,b,c,d){return ib(a,b,c,d,22,"touchstart")},Q:function(a,b,c,d){Db(a,b,c,d,31,"webglcontextlost");return 0},P:function(a,b,c,d){Db(a,b,c,d,32,"webglcontextrestored");return 0},aa:function(a,b,c,d){return(a=K(a))?"undefined"!=typeof a.onwheel?Eb(a,b,c,d):-1:-4},Va:function(a,b){b>>=2;b={alpha:!!A[b],depth:!!A[b+1],stencil:!!A[b+2],antialias:!!A[b+
3],premultipliedAlpha:!!A[b+4],preserveDrawingBuffer:!!A[b+5],powerPreference:Fb[A[b+6]],failIfMajorPerformanceCaveat:!!A[b+7],vc:A[b+8],Pc:A[b+9],tc:A[b+10],Hc:A[b+11],Rc:A[b+12],Sc:A[b+13]};a=K(a);return!a||b.Hc?0:Ab(a,b)},Ta:function(a,b){a=vb[a];b=H(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&jb(V);"OES_vertex_array_object"==b&&kb(V);"WEBGL_draw_buffers"==b&&lb(V);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&mb(V);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==
b&&nb(V);"WEBGL_multi_draw"==b&&ob(V);return!!a.nc.getExtension(b)},Wa:function(a){a>>=2;for(var b=0;14>b;++b)A[a+b]=0;A[a]=A[a+1]=A[a+3]=A[a+4]=A[a+8]=A[a+10]=1},Ua:function(a){T=vb[a];g.Lc=V=T&&T.nc;return!a||V?0:-5},la:function(){return 52},db:function(){return 52},_a:function(){return 70},cb:function(a,b,c,d){for(var e=0,k=0;k<c;k++){var f=B[b>>2],m=B[b+4>>2];b+=8;for(var n=0;n<m;n++){var p=z[f+n],q=Gb[a];0===p||10===p?((1===a?ia:x)(Ga(q,0)),q.length=0):q.push(p)}e+=m}B[d>>2]=e;return 0},g:function(a){V.activeTexture(a)},
D:function(a,b){V.attachShader(Q[a],R[b])},b:function(a,b){35051==a?V.rc=b:35052==a&&(V.fc=b);V.bindBuffer(a,qb[b])},r:function(a,b){V.bindFramebuffer(a,rb[b])},Da:function(a,b){V.bindRenderbuffer(a,sb[b])},a:function(a,b){V.bindTexture(a,tb[b])},M:function(a){V.bindVertexArray(ub[a])},I:function(a,b,c,d){V.blendColor(a,b,c,d)},J:function(a,b){V.blendEquationSeparate(a,b)},K:function(a,b,c,d){V.blendFuncSeparate(a,b,c,d)},hb:function(a,b,c,d,e,k,f,m,n,p){V.blitFramebuffer(a,b,c,d,e,k,f,m,n,p)},Ga:function(a,
b,c,d){2<=T.version?c&&b?V.bufferData(a,z,d,c,b):V.bufferData(a,b,d):V.bufferData(a,c?z.subarray(c,c+b):b,d)},m:function(a,b,c,d){2<=T.version?c&&V.bufferSubData(a,b,z,d,c):V.bufferSubData(a,b,z.subarray(d,d+c))},Cb:function(a,b,c,d){V.clearBufferfi(a,b,c,d)},qa:function(a,b,c){V.clearBufferfv(a,b,C,c>>2)},Ab:function(a,b,c){V.clearBufferiv(a,b,A,c>>2)},i:function(a,b,c,d){V.colorMask(!!a,!!b,!!c,!!d)},Fb:function(a){V.compileShader(R[a])},Aa:function(a,b,c,d,e,k,f,m){2<=T.version?V.fc||!f?V.compressedTexImage2D(a,
b,c,d,e,k,f,m):V.compressedTexImage2D(a,b,c,d,e,k,z,m,f):V.compressedTexImage2D(a,b,c,d,e,k,m?z.subarray(m,m+f):null)},ya:function(a,b,c,d,e,k,f,m,n){V.fc?V.compressedTexImage3D(a,b,c,d,e,k,f,m,n):V.compressedTexImage3D(a,b,c,d,e,k,f,z,n,m)},va:function(){var a=zb(Q),b=V.createProgram();b.name=a;b.mc=b.kc=b.lc=0;b.oc=1;Q[a]=b;return a},sa:function(a){var b=zb(R);R[b]=V.createShader(a);return b},F:function(a){V.cullFace(a)},Pa:function(a,b){for(var c=0;c<a;c++){var d=A[b+4*c>>2],e=qb[d];e&&(V.deleteBuffer(e),
e.name=0,qb[d]=null,d==V.rc&&(V.rc=0),d==V.fc&&(V.fc=0))}},j:function(a,b){for(var c=0;c<a;++c){var d=A[b+4*c>>2],e=rb[d];e&&(V.deleteFramebuffer(e),e.name=0,rb[d]=null)}},x:function(a){if(a){var b=Q[a];b?(V.deleteProgram(b),b.name=0,Q[a]=null):S(1281)}},N:function(a,b){for(var c=0;c<a;c++){var d=A[b+4*c>>2],e=sb[d];e&&(V.deleteRenderbuffer(e),e.name=0,sb[d]=null)}},t:function(a){if(a){var b=R[a];b?(V.deleteShader(b),R[a]=null):S(1281)}},O:function(a,b){for(var c=0;c<a;c++){var d=A[b+4*c>>2],e=tb[d];
e&&(V.deleteTexture(e),e.name=0,tb[d]=null)}},Oa:function(a,b){for(var c=0;c<a;c++){var d=A[b+4*c>>2];V.deleteVertexArray(ub[d]);ub[d]=null}},w:function(a){V.depthFunc(a)},v:function(a){V.depthMask(!!a)},d:function(a){V.disable(a)},L:function(a){V.disableVertexAttribArray(a)},kb:function(a,b,c){V.drawArrays(a,b,c)},lb:function(a,b,c,d){V.drawArraysInstanced(a,b,c,d)},mb:function(a,b,c,d){V.drawElements(a,b,c,d)},nb:function(a,b,c,d,e){V.drawElementsInstanced(a,b,c,d,e)},f:function(a){V.enable(a)},
xb:function(a){V.enableVertexAttribArray(a)},G:function(a){V.frontFace(a)},Ha:function(a,b){Hb(a,b,"createBuffer",qb)},Ea:function(a,b){Hb(a,b,"createRenderbuffer",sb)},Ba:function(a,b){Hb(a,b,"createTexture",tb)},Ma:function(a,b){Hb(a,b,"createVertexArray",ub)},Db:function(a,b){return V.getAttribLocation(Q[a],H(b))},c:function(a,b){Ib(a,b)},ta:function(a,b,c,d){a=V.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?M(a,d,b):0;c&&(A[c>>2]=b)},C:function(a,b,c){if(c)if(a>=pb)S(1281);
else if(a=Q[a],35716==b)a=V.getProgramInfoLog(a),null===a&&(a="(unknown error)"),A[c>>2]=a.length+1;else if(35719==b){if(!a.mc)for(b=0;b<V.getProgramParameter(a,35718);++b)a.mc=Math.max(a.mc,V.getActiveUniform(a,b).name.length+1);A[c>>2]=a.mc}else if(35722==b){if(!a.kc)for(b=0;b<V.getProgramParameter(a,35721);++b)a.kc=Math.max(a.kc,V.getActiveAttrib(a,b).name.length+1);A[c>>2]=a.kc}else if(35381==b){if(!a.lc)for(b=0;b<V.getProgramParameter(a,35382);++b)a.lc=Math.max(a.lc,V.getActiveUniformBlockName(a,
b).length+1);A[c>>2]=a.lc}else A[c>>2]=V.getProgramParameter(a,b);else S(1281)},Eb:function(a,b,c,d){a=V.getShaderInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?M(a,d,b):0;c&&(A[c>>2]=b)},ra:function(a,b,c){c?35716==b?(a=V.getShaderInfoLog(R[a]),null===a&&(a="(unknown error)"),A[c>>2]=a?a.length+1:0):35720==b?(a=V.getShaderSource(R[a]),A[c>>2]=a?a.length+1:0):A[c>>2]=V.getShaderParameter(R[a],b):S(1281)},Ra:function(a,b){if(2>T.version)return S(1282),0;var c=wb[a];if(c)return 0>b||b>=c.length?
(S(1281),0):c[b];switch(a){case 7939:return c=V.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){var e=Jb(d)+1,k=O(e);k&&M(d,k,e);return k}),c=wb[a]=c,0>b||b>=c.length?(S(1281),0):c[b];default:return S(1280),0}},l:function(a,b){b=H(b);if(a=Q[a]){var c=a,d=c.ic,e=c.Ec,k;if(!d)for(c.ic=d={},c.Dc={},k=0;k<V.getProgramParameter(c,35718);++k){var f=V.getActiveUniform(c,k);var m=f.name;f=f.size;var n=Kb(m);n=0<n?m.slice(0,n):m;var p=c.oc;c.oc+=f;e[n]=[f,p];
for(m=0;m<f;++m)d[p]=m,c.Dc[p++]=n}c=a.ic;d=0;e=b;k=Kb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.Ec[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||V.getUniformLocation(a,b)))return d}else S(1281);return-1},gb:function(a,b,c){for(var d=Lb[b],e=0;e<b;e++)d[e]=A[c+4*e>>2];V.invalidateFramebuffer(a,d)},ua:function(a){a=Q[a];V.linkProgram(a);a.ic=0;a.Ec={}},La:function(a,b){3317==a&&(xb=b);V.pixelStorei(a,b)},H:function(a,b){V.polygonOffset(a,b)},jb:function(a){V.readBuffer(a)},Ca:function(a,b,c,
d,e){V.renderbufferStorageMultisample(a,b,c,d,e)},p:function(a,b,c,d){V.scissor(a,b,c,d)},Gb:function(a,b,c,d){for(var e="",k=0;k<b;++k){var f=d?A[d+4*k>>2]:-1;e+=H(A[c+4*k>>2],0>f?void 0:f)}V.shaderSource(R[a],e)},Ka:function(a,b,c){V.stencilFunc(a,b,c)},pa:function(a,b,c,d){V.stencilFuncSeparate(a,b,c,d)},u:function(a){V.stencilMask(a)},Ja:function(a,b,c){V.stencilOp(a,b,c)},oa:function(a,b,c,d){V.stencilOpSeparate(a,b,c,d)},za:function(a,b,c,d,e,k,f,m,n){if(2<=T.version)if(V.fc)V.texImage2D(a,
b,c,d,e,k,f,m,n);else if(n){var p=Mb(m);V.texImage2D(a,b,c,d,e,k,f,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else V.texImage2D(a,b,c,d,e,k,f,m,null);else{p=V;var q=p.texImage2D;if(n){var t=Mb(m),N=31-Math.clz32(t.BYTES_PER_ELEMENT),U=xb;n=t.subarray(n>>N,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[f-6402]||1)*(1<<N)+U-1&-U)>>N)}else n=null;q.call(p,a,b,c,d,e,k,f,m,n)}},wa:function(a,b,c,d,e,k,f,m,n,p){if(V.fc)V.texImage3D(a,b,c,d,e,k,f,m,n,p);else if(p){var q=Mb(n);V.texImage3D(a,
b,c,d,e,k,f,m,n,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else V.texImage3D(a,b,c,d,e,k,f,m,n,null)},E:function(a,b,c){V.texParameterf(a,b,c)},e:function(a,b,c){V.texParameteri(a,b,c)},wb:function(a,b,c){if(2<=T.version)b&&V.uniform1fv(W(a),C,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=C[c+4*e>>2];else d=C.subarray(c>>2,c+4*b>>2);V.uniform1fv(W(a),d)}},B:function(a,b){V.uniform1i(W(a),b)},sb:function(a,b,c){if(2<=T.version)b&&V.uniform1iv(W(a),A,c>>2,b);else{if(288>=b)for(var d=Y[b-1],
e=0;e<b;++e)d[e]=A[c+4*e>>2];else d=A.subarray(c>>2,c+4*b>>2);V.uniform1iv(W(a),d)}},vb:function(a,b,c){if(2<=T.version)b&&V.uniform2fv(W(a),C,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2];else d=C.subarray(c>>2,c+8*b>>2);V.uniform2fv(W(a),d)}},rb:function(a,b,c){if(2<=T.version)b&&V.uniform2iv(W(a),A,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2];else d=A.subarray(c>>2,c+8*b>>2);V.uniform2iv(W(a),
d)}},ub:function(a,b,c){if(2<=T.version)b&&V.uniform3fv(W(a),C,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2];else d=C.subarray(c>>2,c+12*b>>2);V.uniform3fv(W(a),d)}},qb:function(a,b,c){if(2<=T.version)b&&V.uniform3iv(W(a),A,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2],d[e+2]=A[c+(4*e+8)>>2];else d=A.subarray(c>>2,c+12*b>>2);V.uniform3iv(W(a),d)}},tb:function(a,b,c){if(2<=
T.version)b&&V.uniform4fv(W(a),C,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=C;c>>=2;for(var k=0;k<4*b;k+=4){var f=c+k;d[k]=e[f];d[k+1]=e[f+1];d[k+2]=e[f+2];d[k+3]=e[f+3]}}else d=C.subarray(c>>2,c+16*b>>2);V.uniform4fv(W(a),d)}},pb:function(a,b,c){if(2<=T.version)b&&V.uniform4iv(W(a),A,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2],d[e+2]=A[c+(4*e+8)>>2],d[e+3]=A[c+(4*e+12)>>2];else d=A.subarray(c>>2,c+16*b>>2);V.uniform4iv(W(a),d)}},ob:function(a,
b,c,d){if(2<=T.version)b&&V.uniformMatrix4fv(W(a),!!c,C,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],k=C;d>>=2;for(var f=0;f<16*b;f+=16){var m=d+f;e[f]=k[m];e[f+1]=k[m+1];e[f+2]=k[m+2];e[f+3]=k[m+3];e[f+4]=k[m+4];e[f+5]=k[m+5];e[f+6]=k[m+6];e[f+7]=k[m+7];e[f+8]=k[m+8];e[f+9]=k[m+9];e[f+10]=k[m+10];e[f+11]=k[m+11];e[f+12]=k[m+12];e[f+13]=k[m+13];e[f+14]=k[m+14];e[f+15]=k[m+15]}}else e=C.subarray(d>>2,d+64*b>>2);V.uniformMatrix4fv(W(a),!!c,e)}},k:function(a){a=Q[a];V.useProgram(a);V.Fc=a},yb:function(a,
b){V.vertexAttribDivisor(a,b)},zb:function(a,b,c,d,e,k){V.vertexAttribPointer(a,b,c,!!d,e,k)},q:function(a,b,c,d){V.viewport(a,b,c,d)},Sa:function(){g.xc=a=>{0!=Sb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",g.xc)},Na:function(){g.Cc=a=>{const b=a.clipboardData.getData("text");Ha(()=>{const c=Ob(b);Tb(c)})};window.addEventListener("paste",g.Cc)},xa:function(a){g.Tc=[];a=H(a);a=document.getElementById(a);g.yc=b=>{b.stopPropagation();b.preventDefault()};g.zc=b=>
{b.stopPropagation();b.preventDefault()};g.Ac=b=>{b.stopPropagation();b.preventDefault()};g.Bc=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;g.Uc=c;Ub(c.length);for(let d=0;d<c.length;d++)Ha(()=>{const e=Ob(c[d].name);Vb(d,e)});Wb(b.clientX,b.clientY)};a.addEventListener("dragenter",g.yc,!1);a.addEventListener("dragleave",g.zc,!1);a.addEventListener("dragover",g.Ac,!1);a.addEventListener("drop",g.Bc,!1)},ab:function(){const a=document.getElementById("sokol-app-favicon");
a&&document.head.removeChild(a)},s:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Xb()});document.body.append(a)},o:function(){document.getElementById("_sokol_app_input_element").focus()},Bb:function(a){a=H(a);g.ec=document.getElementById(a);g.ec||console.log("sokol_app.h: invalid target:"+a);g.ec.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+
a)},Qa:function(){window.removeEventListener("beforeunload",g.xc)},Ia:function(){window.removeEventListener("paste",g.Cc)},Hb:function(a){a=H(a);a=document.getElementById(a);a.removeEventListener("dragenter",g.yc);a.removeEventListener("dragleave",g.zc);a.removeEventListener("dragover",g.Ac);a.removeEventListener("drop",g.Bc)},A:function(){g.ec&&g.ec.requestPointerLock&&g.ec.requestPointerLock()},ib:function(a,b){if(g.ec){if(0===b)a="none";else switch(a){case 0:a="auto";break;case 1:a="default";break;
case 2:a="text";break;case 3:a="crosshair";break;case 4:a="pointer";break;case 5:a="ew-resize";break;case 6:a="ns-resize";break;case 7:a="nwse-resize";break;case 8:a="nesw-resize";break;case 9:a="all-scroll";break;case 10:a="not-allowed";break;default:a="auto"}g.ec.style.cursor=a}},Za:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(z.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");
a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},n:function(){document.getElementById("_sokol_app_input_element").blur()},Fa:function(a){a=H(a);const b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();
document.execCommand("copy");document.body.removeChild(b)},y:function(a,b,c,d,e,k){b=H(b);const f=new XMLHttpRequest;f.open("GET",b);f.responseType="arraybuffer";const m=0<d;m&&f.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));f.onreadystatechange=function(){if(f.readyState==XMLHttpRequest.DONE)if(206==f.status||200==f.status&&!m){const n=new Uint8Array(f.response),p=n.length;p<=k?(z.set(n,e),Yb(a,d,p)):Zb(a)}else $b(a,f.status)};f.send()},ka:function(a,b){b=H(b);const c=new XMLHttpRequest;c.open("HEAD",
b);c.onreadystatechange=function(){if(c.readyState==XMLHttpRequest.DONE)if(200==c.status){const d=c.getResponseHeader("Content-Length");ac(a,d)}else $b(a,c.status)};c.send()},na:function(){return navigator.userAgent.includes("Macintosh")?1:0},ja:function(a,b){b=H(b);switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);break;default:console.info(b)}}};
(function(){function a(c){c=c.exports;g.asm=c;ka=g.asm.Ib;pa();qa=g.asm.Yb;sa.unshift(g.asm.Jb);E--;g.monitorRunDependencies&&g.monitorRunDependencies(E);if(0==E&&(null!==xa&&(clearInterval(xa),xa=null),F)){var d=F;F=null;d()}return c}var b={a:bc};E++;g.monitorRunDependencies&&g.monitorRunDependencies(E);if(g.instantiateWasm)try{return g.instantiateWasm(b,a)}catch(c){return x("Module.instantiateWasm callback failed with error: "+c),!1}Da(b,function(c){a(c.instance)});return{}})();
function O(){return(O=g.asm.Kb).apply(null,arguments)}
var Xb=g.__sapp_emsc_notify_keyboard_hidden=function(){return(Xb=g.__sapp_emsc_notify_keyboard_hidden=g.asm.Lb).apply(null,arguments)},Tb=g.__sapp_emsc_onpaste=function(){return(Tb=g.__sapp_emsc_onpaste=g.asm.Mb).apply(null,arguments)},Sb=g.__sapp_html5_get_ask_leave_site=function(){return(Sb=g.__sapp_html5_get_ask_leave_site=g.asm.Nb).apply(null,arguments)},Ub=g.__sapp_emsc_begin_drop=function(){return(Ub=g.__sapp_emsc_begin_drop=g.asm.Ob).apply(null,arguments)},Vb=g.__sapp_emsc_drop=function(){return(Vb=
g.__sapp_emsc_drop=g.asm.Pb).apply(null,arguments)},Wb=g.__sapp_emsc_end_drop=function(){return(Wb=g.__sapp_emsc_end_drop=g.asm.Qb).apply(null,arguments)};g.__sapp_emsc_invoke_fetch_cb=function(){return(g.__sapp_emsc_invoke_fetch_cb=g.asm.Rb).apply(null,arguments)};var cc=g._main=function(){return(cc=g._main=g.asm.Sb).apply(null,arguments)};g.__saudio_emsc_pull=function(){return(g.__saudio_emsc_pull=g.asm.Tb).apply(null,arguments)};
var ac=g.__sfetch_emsc_head_response=function(){return(ac=g.__sfetch_emsc_head_response=g.asm.Ub).apply(null,arguments)},Yb=g.__sfetch_emsc_get_response=function(){return(Yb=g.__sfetch_emsc_get_response=g.asm.Vb).apply(null,arguments)},$b=g.__sfetch_emsc_failed_http_status=function(){return($b=g.__sfetch_emsc_failed_http_status=g.asm.Wb).apply(null,arguments)},Zb=g.__sfetch_emsc_failed_buffer_too_small=function(){return(Zb=g.__sfetch_emsc_failed_buffer_too_small=g.asm.Xb).apply(null,arguments)};
function Ia(){return(Ia=g.asm.Zb).apply(null,arguments)}function Ja(){return(Ja=g.asm._b).apply(null,arguments)}function Pb(){return(Pb=g.asm.$b).apply(null,arguments)}g.___start_em_js=53912;g.___stop_em_js=63525;var dc;F=function ec(){dc||fc();dc||(F=ec)};function gc(a=[]){var b=cc;a.unshift(ca);var c=a.length,d=Pb(4*(c+1)),e=d>>2;a.forEach(f=>{A[e++]=Ob(f)});A[e]=0;try{var k=b(c,d);Nb(k)}catch(f){f instanceof w||"unwind"==f||h(1,f)}}
function fc(){var a=ba;function b(){if(!dc&&(dc=!0,g.calledRun=!0,!la)){Ea(sa);Ea(ta);if(g.onRuntimeInitialized)g.onRuntimeInitialized();hc&&gc(a);if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var c=g.postRun.shift();va.unshift(c)}Ea(va)}}if(!(0<E)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)wa();Ea(ra);0<E||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);b()},
1)):b())}}if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var hc=!0;g.noInitialRun&&(hc=!1);fc();
