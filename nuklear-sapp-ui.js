var g;g||(g=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},g),ba=[],ca="./this.program",h=(a,b)=>{throw b;},da="object"==typeof window,k="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,r="",fa,u,v;
if(ea){var fs=require("fs"),ha=require("path");r=k?ha.dirname(r)+"/":__dirname+"/";fa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};v=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};u=(a,b,c,d=!0)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);fs.readFile(a,d?void 0:"utf8",(e,l)=>{e?c(e):b(d?l.buffer:l)})};!g.thisProgram&&1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&
(module.exports=g);process.on("uncaughtException",a=>{if(!("unwind"===a||a instanceof w||a.context instanceof w))throw a;});if(15>process.versions.node.split(".")[0])process.on("unhandledRejection",a=>{throw a;});h=(a,b)=>{process.exitCode=a;throw b;};g.inspect=()=>"[Emscripten Module object]"}else if(da||k)k?r=self.location.href:"undefined"!=typeof document&&document.currentScript&&(r=document.currentScript.src),r=0!==r.indexOf("blob:")?r.substr(0,r.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=
a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},k&&(v=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),u=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ia=g.print||console.log.bind(console),x=g.printErr||console.error.bind(console);Object.assign(g,aa);
aa=null;g.arguments&&(ba=g.arguments);g.thisProgram&&(ca=g.thisProgram);g.quit&&(h=g.quit);var y;g.wasmBinary&&(y=g.wasmBinary);var noExitRuntime=g.noExitRuntime||!0;"object"!=typeof WebAssembly&&ja("no native wasm support detected");var ka,la=!1,ma,z,na,oa,A,B,C,D;
function pa(){var a=ka.buffer;g.HEAP8=ma=new Int8Array(a);g.HEAP16=na=new Int16Array(a);g.HEAP32=A=new Int32Array(a);g.HEAPU8=z=new Uint8Array(a);g.HEAPU16=oa=new Uint16Array(a);g.HEAPU32=B=new Uint32Array(a);g.HEAPF32=C=new Float32Array(a);g.HEAPF64=D=new Float64Array(a)}var qa,ra=[],sa=[],ta=[],ua=[],va=[];function wa(){var a=g.preRun.shift();ra.unshift(a)}var E=0,xa=null,F=null;
function ja(a){if(g.onAbort)g.onAbort(a);a="Aborted("+a+")";x(a);la=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function ya(a){return a.startsWith("data:application/octet-stream;base64,")}var G;G="nuklear-sapp-ui.wasm";if(!ya(G)){var za=G;G=g.locateFile?g.locateFile(za,r):r+za}function Aa(a){try{if(a==G&&y)return new Uint8Array(y);if(v)return v(a);throw"both async and sync fetching of the wasm failed";}catch(b){ja(b)}}
function Ba(a){if(!y&&(da||k)){if("function"==typeof fetch&&!a.startsWith("file://"))return fetch(a,{credentials:"same-origin"}).then(b=>{if(!b.ok)throw"failed to load wasm binary file at '"+a+"'";return b.arrayBuffer()}).catch(()=>Aa(a));if(u)return new Promise((b,c)=>{u(a,d=>b(new Uint8Array(d)),c)})}return Promise.resolve().then(()=>Aa(a))}function Ca(a,b,c){return Ba(a).then(d=>WebAssembly.instantiate(d,b)).then(d=>d).then(c,d=>{x("failed to asynchronously prepare wasm: "+d);ja(d)})}
function Da(a,b){var c=G;y||"function"!=typeof WebAssembly.instantiateStreaming||ya(c)||c.startsWith("file://")||ea||"function"!=typeof fetch?Ca(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(e){x("wasm streaming compile failed: "+e);x("falling back to ArrayBuffer instantiation");return Ca(c,a,b)}))}function w(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function Ea(a){for(;0<a.length;)a.shift()(g)}var Fa="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function Ga(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&Fa)return Fa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var l=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|l);else{var f=a[b++]&63;e=224==(e&240)?(e&15)<<12|l<<6|f:(e&7)<<18|l<<12|f<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function H(a,b){return a?Ga(z,a,b):""}
var Ha=[0,31,60,91,121,152,182,213,244,274,305,335],Ia=[0,31,59,90,120,151,181,212,243,273,304,334];function Ja(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}
function I(a,b,c){var d=z;if(!(0<c))return 0;var e=b;c=b+c-1;for(var l=0;l<a.length;++l){var f=a.charCodeAt(l);if(55296<=f&&57343>=f){var m=a.charCodeAt(++l);f=65536+((f&1023)<<10)|m&1023}if(127>=f){if(b>=c)break;d[b++]=f}else{if(2047>=f){if(b+1>=c)break;d[b++]=192|f>>6}else{if(65535>=f){if(b+2>=c)break;d[b++]=224|f>>12}else{if(b+3>=c)break;d[b++]=240|f>>18;d[b++]=128|f>>12&63}d[b++]=128|f>>6&63}d[b++]=128|f&63}}d[b]=0;return b-e}function Ka(a){var b=Ja(a)+1,c=J(b);c&&I(a,c,b);return c}
function La(a){var b=Ma();a();Na(b)}var Oa=0;function Pa(){for(var a=K.length-1;0<=a;--a)Qa(a);K=[];Ra=[]}var Ra=[];function Sa(){if(Oa&&Ta.kc)for(var a=0;a<Ra.length;++a){var b=Ra[a];Ra.splice(a,1);--a;b.Wc.apply(null,b.Lc)}}var K=[];function Qa(a){var b=K[a];b.target.removeEventListener(b.bc,b.Hc,b.cc);K.splice(a,1)}
function L(a){function b(d){++Oa;Ta=a;Sa();a.ec(d);Sa();--Oa}if(!a.target)return-4;if(a.dc)a.Hc=b,a.target.addEventListener(a.bc,b,a.cc),K.push(a),Ua||(ua.push(Pa),Ua=!0);else for(var c=0;c<K.length;++c)K[c].target==a.target&&K[c].bc==a.bc&&Qa(c--);return 0}function Va(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Ua,Ta,Wa,Xa,Ya,Za,$a,ab,bb,cb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function M(a){a=2<a?H(a):a;return cb[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function db(a){return 0>cb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var eb=[];function N(a){var b=eb[a];b||(a>=eb.length&&(eb.length=a+1),eb[a]=b=qa.get(a));return b}function fb(a,b,c,d,e,l){Wa||(Wa=J(256));a={target:M(a),bc:l,dc:d,ec:function(f=event){var m=f.target.id?f.target.id:"",n=Wa;I(Va(f.target),n+0,128);I(m,n+128,128);N(d)(e,n,b)&&f.preventDefault()},cc:c};return L(a)}
function gb(a,b,c,d,e,l){Xa||(Xa=J(176));a={target:M(a),kc:!0,bc:l,dc:d,ec:function(f){var m=Xa;D[m>>3]=f.timeStamp;var n=m>>2;A[n+2]=f.location;A[n+3]=f.ctrlKey;A[n+4]=f.shiftKey;A[n+5]=f.altKey;A[n+6]=f.metaKey;A[n+7]=f.repeat;A[n+8]=f.charCode;A[n+9]=f.keyCode;A[n+10]=f.which;I(f.key||"",m+44,32);I(f.code||"",m+76,32);I(f.char||"",m+108,32);I(f.locale||"",m+140,32);N(d)(e,m,b)&&f.preventDefault()},cc:c};return L(a)}
function hb(a,b,c){D[a>>3]=b.timeStamp;a>>=2;A[a+2]=b.screenX;A[a+3]=b.screenY;A[a+4]=b.clientX;A[a+5]=b.clientY;A[a+6]=b.ctrlKey;A[a+7]=b.shiftKey;A[a+8]=b.altKey;A[a+9]=b.metaKey;na[2*a+20]=b.button;na[2*a+21]=b.buttons;A[a+11]=b.movementX;A[a+12]=b.movementY;c=db(c);A[a+13]=b.clientX-c.left;A[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,l){Ya||(Ya=J(72));a=M(a);return L({target:a,kc:"mousemove"!=l&&"mouseenter"!=l&&"mouseleave"!=l,bc:l,dc:d,ec:function(f=event){hb(Ya,f,a);N(d)(e,Ya,b)&&f.preventDefault()},cc:c})}function ib(a,b,c,d,e){Za||(Za=J(260));return L({target:a,bc:e,dc:d,ec:function(l=event){var f=Za,m=document.pointerLockElement||document.ic||document.sc||document.qc;A[f>>2]=!!m;var n=m&&m.id?m.id:"";I(Va(m),f+4,128);I(n,f+132,128);N(d)(20,f,b)&&l.preventDefault()},cc:c})}
function jb(a,b,c,d,e){return L({target:a,bc:e,dc:d,ec:function(l=event){N(d)(38,0,b)&&l.preventDefault()},cc:c})}
function kb(a,b,c,d){$a||($a=J(36));a=M(a);return L({target:a,bc:"resize",dc:d,ec:function(e=event){if(e.target==a){var l=document.body;if(l){var f=$a;A[f>>2]=e.detail;A[f+4>>2]=l.clientWidth;A[f+8>>2]=l.clientHeight;A[f+12>>2]=innerWidth;A[f+16>>2]=innerHeight;A[f+20>>2]=outerWidth;A[f+24>>2]=outerHeight;A[f+28>>2]=pageXOffset;A[f+32>>2]=pageYOffset;N(d)(10,f,b)&&e.preventDefault()}}},cc:c})}
function lb(a,b,c,d,e,l){ab||(ab=J(1696));a=M(a);return L({target:a,kc:"touchstart"==l||"touchend"==l,bc:l,dc:d,ec:function(f){for(var m,n={},p=f.touches,q=0;q<p.length;++q)m=p[q],m.vc=m.xc=0,n[m.identifier]=m;for(q=0;q<f.changedTouches.length;++q)m=f.changedTouches[q],m.vc=1,n[m.identifier]=m;for(q=0;q<f.targetTouches.length;++q)n[f.targetTouches[q].identifier].xc=1;p=ab;D[p>>3]=f.timeStamp;var t=p>>2;A[t+3]=f.ctrlKey;A[t+4]=f.shiftKey;A[t+5]=f.altKey;A[t+6]=f.metaKey;t+=7;var O=db(a),U=0;for(q in n)if(m=
n[q],A[t]=m.identifier,A[t+1]=m.screenX,A[t+2]=m.screenY,A[t+3]=m.clientX,A[t+4]=m.clientY,A[t+5]=m.pageX,A[t+6]=m.pageY,A[t+7]=m.vc,A[t+8]=m.xc,A[t+9]=m.clientX-O.left,A[t+10]=m.clientY-O.top,t+=13,31<++U)break;A[p+8>>2]=U;N(d)(e,p,b)&&f.preventDefault()},cc:c})}
function mb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,l){b.drawArraysInstancedANGLE(c,d,e,l)},a.drawElementsInstanced=function(c,d,e,l,f){b.drawElementsInstancedANGLE(c,d,e,l,f)})}
function nb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function ob(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function pb(a){a.Nc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function qb(a){a.Pc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function rb(a){a.Rc=a.getExtension("WEBGL_multi_draw")}var sb=1,tb=[],Q=[],ub=[],vb=[],wb=[],R=[],xb=[],yb=[],zb={},Ab=4;function S(a){Bb||(Bb=a)}function Cb(a){for(var b=sb++,c=a.length;c<b;c++)a[c]=null;return b}
function Db(a,b){a.ic||(a.ic=a.getContext,a.getContext=function(d,e){e=a.ic(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.wc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Eb(c,b):0}function Eb(a,b){var c=Cb(yb),d={Oc:c,attributes:b,version:b.wc,oc:a};a.canvas&&(a.canvas.Kc=d);yb[c]=d;("undefined"==typeof b.uc||b.uc)&&Fb(d);return c}
function Fb(a){a||(a=T);if(!a.Jc){a.Jc=!0;var b=a.oc;mb(b);nb(b);ob(b);pb(b);qb(b);2<=a.version&&(b.tc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.tc)b.tc=b.getExtension("EXT_disjoint_timer_query");rb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Bb,T;function Gb(a,b,c,d,e,l){a={target:M(a),bc:l,dc:d,ec:(f=event)=>{N(d)(e,0,b)&&f.preventDefault()},cc:c};L(a)}
function Hb(a,b,c,d){bb||(bb=J(104));return L({target:a,kc:!0,bc:"wheel",dc:d,ec:function(e=event){var l=bb;hb(l,e,a);D[l+72>>3]=e.deltaX;D[l+80>>3]=e.deltaY;D[l+88>>3]=e.deltaZ;A[l+96>>2]=e.deltaMode;N(d)(9,l,b)&&e.preventDefault()},cc:c})}var Ib=["default","low-power","high-performance"],Jb=[null,[],[]];function Kb(a,b,c,d){for(var e=0;e<a;e++){var l=V[c](),f=l&&Cb(d);l?(l.name=f,d[f]=l):S(1282);A[b+4*e>>2]=f}}
function Lb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=V.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>T.version){S(1282);return}c=2*(V.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>T.version){S(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=V.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":S(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:S(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)A[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){S(1280);x("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:S(1280);x("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}A[b>>2]=c}else S(1281)}
function Mb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}var Nb=[];function Ob(a){a-=5120;return 0==a?ma:1==a?z:2==a?na:4==a?A:6==a?C:5==a||28922==a||28520==a||30779==a||30782==a?B:oa}function W(a){var b=V.Gc;if(b){var c=b.jc[a];"number"==typeof c&&(b.jc[a]=c=V.getUniformLocation(b,b.Ec[a]+(0<c?"["+c+"]":"")));return c}S(1282)}var X=[],Y=[];function Pb(a){if(!noExitRuntime){if(g.onExit)g.onExit(a);la=!0}h(a,new w(a))}function Qb(a){var b=Ja(a)+1,c=Rb(b);I(a,c,b);return c}for(var V,Z=0;32>Z;++Z)Nb.push(Array(Z));
var Sb=new Float32Array(288);for(Z=0;288>Z;++Z)X[Z]=Sb.subarray(0,Z+1);var Tb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Tb.subarray(0,Z+1);
var $b={ja:function(){return 0},fb:function(){return 0},gb:function(){},bb:function(a,b){a=new Date(1E3*(B[a>>2]+4294967296*A[a+4>>2]));A[b>>2]=a.getSeconds();A[b+4>>2]=a.getMinutes();A[b+8>>2]=a.getHours();A[b+12>>2]=a.getDate();A[b+16>>2]=a.getMonth();A[b+20>>2]=a.getFullYear()-1900;A[b+24>>2]=a.getDay();var c=a.getFullYear();A[b+28>>2]=(0!==c%4||0===c%100&&0!==c%400?Ia:Ha)[a.getMonth()]+a.getDate()-1|0;A[b+36>>2]=-(60*a.getTimezoneOffset());c=(new Date(a.getFullYear(),6,1)).getTimezoneOffset();
var d=(new Date(a.getFullYear(),0,1)).getTimezoneOffset();A[b+32>>2]=(c!=d&&a.getTimezoneOffset()==Math.min(d,c))|0},$a:function(a,b,c){function d(n){return(n=n.toTimeString().match(/\(([A-Za-z ]+)\)$/))?n[1]:"GMT"}var e=(new Date).getFullYear(),l=new Date(e,0,1),f=new Date(e,6,1);e=l.getTimezoneOffset();var m=f.getTimezoneOffset();B[a>>2]=60*Math.max(e,m);A[b>>2]=Number(e!=m);a=d(l);b=d(f);a=Ka(a);b=Ka(b);m<e?(B[c>>2]=a,B[c+4>>2]=b):(B[c>>2]=b,B[c+4>>2]=a)},i:function(){ja("")},hb:function(){return Date.now()},
fa:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},ga:function(a,b,c){a=M(a);if(!a)return-4;a=db(a);D[b>>3]=a.width;D[c>>3]=a.height;return 0},cb:function(a,b,c){z.copyWithin(a,b,b+c)},Wa:function(a,b){function c(d){N(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},_a:function(a){var b=z.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);var e=Math,l=e.min;d=Math.max(a,d);d+=(65536-d%65536)%65536;a:{var f=
ka.buffer;try{ka.grow(l.call(e,2147483648,d)-f.byteLength+65535>>>16);pa();var m=1;break a}catch(n){}m=void 0}if(m)return!0}return!1},P:function(a,b,c,d){return fb(a,b,c,d,12,"blur")},ea:function(a,b,c){a=M(a);if(!a)return-4;a.width=b;a.height=c;return 0},Q:function(a,b,c,d){return fb(a,b,c,d,13,"focus")},Z:function(a,b,c,d){return gb(a,b,c,d,2,"keydown")},X:function(a,b,c,d){return gb(a,b,c,d,1,"keypress")},Y:function(a,b,c,d){return gb(a,b,c,d,3,"keyup")},da:function(a,b,c,d){return P(a,b,c,d,5,
"mousedown")},aa:function(a,b,c,d){return P(a,b,c,d,33,"mouseenter")},$:function(a,b,c,d){return P(a,b,c,d,34,"mouseleave")},ba:function(a,b,c,d){return P(a,b,c,d,8,"mousemove")},ca:function(a,b,c,d){return P(a,b,c,d,6,"mouseup")},S:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.ic||document.body.sc||document.body.qc))return-1;a=M(a);if(!a)return-4;ib(a,b,c,d,"mozpointerlockchange");ib(a,b,c,d,"webkitpointerlockchange");ib(a,b,c,d,"mspointerlockchange");
return ib(a,b,c,d,"pointerlockchange")},R:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.ic||document.body.sc||document.body.qc))return-1;a=M(a);if(!a)return-4;jb(a,b,c,d,"mozpointerlockerror");jb(a,b,c,d,"webkitpointerlockerror");jb(a,b,c,d,"mspointerlockerror");return jb(a,b,c,d,"pointerlockerror")},Xa:function(a,b,c,d){return kb(a,b,c,d)},T:function(a,b,c,d){return lb(a,b,c,d,25,"touchcancel")},U:function(a,b,c,d){return lb(a,b,c,d,23,"touchend")},V:function(a,
b,c,d){return lb(a,b,c,d,24,"touchmove")},W:function(a,b,c,d){return lb(a,b,c,d,22,"touchstart")},O:function(a,b,c,d){Gb(a,b,c,d,31,"webglcontextlost");return 0},N:function(a,b,c,d){Gb(a,b,c,d,32,"webglcontextrestored");return 0},_:function(a,b,c,d){return(a=M(a))?"undefined"!=typeof a.onwheel?Hb(a,b,c,d):-1:-4},Ua:function(a,b){b>>=2;b={alpha:!!A[b],depth:!!A[b+1],stencil:!!A[b+2],antialias:!!A[b+3],premultipliedAlpha:!!A[b+4],preserveDrawingBuffer:!!A[b+5],powerPreference:Ib[A[b+6]],failIfMajorPerformanceCaveat:!!A[b+
7],wc:A[b+8],Qc:A[b+9],uc:A[b+10],Ic:A[b+11],Sc:A[b+12],Tc:A[b+13]};a=M(a);return!a||b.Ic?0:Db(a,b)},Sa:function(a,b){a=yb[a];b=H(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&mb(V);"OES_vertex_array_object"==b&&nb(V);"WEBGL_draw_buffers"==b&&ob(V);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&pb(V);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&qb(V);"WEBGL_multi_draw"==b&&rb(V);return!!a.oc.getExtension(b)},Va:function(a){a>>=2;for(var b=0;14>b;++b)A[a+
b]=0;A[a]=A[a+1]=A[a+3]=A[a+4]=A[a+8]=A[a+10]=1},Ta:function(a){T=yb[a];g.Mc=V=T&&T.oc;return!a||V?0:-5},ia:function(){return 52},eb:function(){return 52},Za:function(){return 70},db:function(a,b,c,d){for(var e=0,l=0;l<c;l++){var f=B[b>>2],m=B[b+4>>2];b+=8;for(var n=0;n<m;n++){var p=z[f+n],q=Jb[a];0===p||10===p?((1===a?ia:x)(Ga(q,0)),q.length=0):q.push(p)}e+=m}B[d>>2]=e;return 0},g:function(a){V.activeTexture(a)},B:function(a,b){V.attachShader(Q[a],R[b])},b:function(a,b){35051==a?V.rc=b:35052==a&&
(V.hc=b);V.bindBuffer(a,tb[b])},r:function(a,b){V.bindFramebuffer(a,ub[b])},Ca:function(a,b){V.bindRenderbuffer(a,vb[b])},a:function(a,b){V.bindTexture(a,wb[b])},K:function(a){V.bindVertexArray(xb[a])},G:function(a,b,c,d){V.blendColor(a,b,c,d)},H:function(a,b){V.blendEquationSeparate(a,b)},I:function(a,b,c,d){V.blendFuncSeparate(a,b,c,d)},kb:function(a,b,c,d,e,l,f,m,n,p){V.blitFramebuffer(a,b,c,d,e,l,f,m,n,p)},Fa:function(a,b,c,d){2<=T.version?c&&b?V.bufferData(a,z,d,c,b):V.bufferData(a,b,d):V.bufferData(a,
c?z.subarray(c,c+b):b,d)},o:function(a,b,c,d){2<=T.version?c&&V.bufferSubData(a,b,z,d,c):V.bufferSubData(a,b,z.subarray(d,d+c))},Eb:function(a,b,c,d){V.clearBufferfi(a,b,c,d)},na:function(a,b,c){V.clearBufferfv(a,b,C,c>>2)},Db:function(a,b,c){V.clearBufferiv(a,b,A,c>>2)},j:function(a,b,c,d){V.colorMask(!!a,!!b,!!c,!!d)},pa:function(a){V.compileShader(R[a])},za:function(a,b,c,d,e,l,f,m){2<=T.version?V.hc||!f?V.compressedTexImage2D(a,b,c,d,e,l,f,m):V.compressedTexImage2D(a,b,c,d,e,l,z,m,f):V.compressedTexImage2D(a,
b,c,d,e,l,m?z.subarray(m,m+f):null)},xa:function(a,b,c,d,e,l,f,m,n){V.hc?V.compressedTexImage3D(a,b,c,d,e,l,f,m,n):V.compressedTexImage3D(a,b,c,d,e,l,f,z,n,m)},va:function(){var a=Cb(Q),b=V.createProgram();b.name=a;b.nc=b.lc=b.mc=0;b.pc=1;Q[a]=b;return a},ra:function(a){var b=Cb(R);R[b]=V.createShader(a);return b},D:function(a){V.cullFace(a)},Pa:function(a,b){for(var c=0;c<a;c++){var d=A[b+4*c>>2],e=tb[d];e&&(V.deleteBuffer(e),e.name=0,tb[d]=null,d==V.rc&&(V.rc=0),d==V.hc&&(V.hc=0))}},k:function(a,
b){for(var c=0;c<a;++c){var d=A[b+4*c>>2],e=ub[d];e&&(V.deleteFramebuffer(e),e.name=0,ub[d]=null)}},x:function(a){if(a){var b=Q[a];b?(V.deleteProgram(b),b.name=0,Q[a]=null):S(1281)}},L:function(a,b){for(var c=0;c<a;c++){var d=A[b+4*c>>2],e=vb[d];e&&(V.deleteRenderbuffer(e),e.name=0,vb[d]=null)}},t:function(a){if(a){var b=R[a];b?(V.deleteShader(b),R[a]=null):S(1281)}},M:function(a,b){for(var c=0;c<a;c++){var d=A[b+4*c>>2],e=wb[d];e&&(V.deleteTexture(e),e.name=0,wb[d]=null)}},Na:function(a,b){for(var c=
0;c<a;c++){var d=A[b+4*c>>2];V.deleteVertexArray(xb[d]);xb[d]=null}},w:function(a){V.depthFunc(a)},v:function(a){V.depthMask(!!a)},d:function(a){V.disable(a)},J:function(a){V.disableVertexAttribArray(a)},mb:function(a,b,c){V.drawArrays(a,b,c)},nb:function(a,b,c,d){V.drawArraysInstanced(a,b,c,d)},ob:function(a,b,c,d){V.drawElements(a,b,c,d)},pb:function(a,b,c,d,e){V.drawElementsInstanced(a,b,c,d,e)},f:function(a){V.enable(a)},zb:function(a){V.enableVertexAttribArray(a)},E:function(a){V.frontFace(a)},
Ga:function(a,b){Kb(a,b,"createBuffer",tb)},Ea:function(a,b){Kb(a,b,"createRenderbuffer",vb)},Aa:function(a,b){Kb(a,b,"createTexture",wb)},Ma:function(a,b){Kb(a,b,"createVertexArray",xb)},Fb:function(a,b){return V.getAttribLocation(Q[a],H(b))},c:function(a,b){Lb(a,b)},sa:function(a,b,c,d){a=V.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?I(a,d,b):0;c&&(A[c>>2]=b)},A:function(a,b,c){if(c)if(a>=sb)S(1281);else if(a=Q[a],35716==b)a=V.getProgramInfoLog(a),null===a&&(a="(unknown error)"),
A[c>>2]=a.length+1;else if(35719==b){if(!a.nc)for(b=0;b<V.getProgramParameter(a,35718);++b)a.nc=Math.max(a.nc,V.getActiveUniform(a,b).name.length+1);A[c>>2]=a.nc}else if(35722==b){if(!a.lc)for(b=0;b<V.getProgramParameter(a,35721);++b)a.lc=Math.max(a.lc,V.getActiveAttrib(a,b).name.length+1);A[c>>2]=a.lc}else if(35381==b){if(!a.mc)for(b=0;b<V.getProgramParameter(a,35382);++b)a.mc=Math.max(a.mc,V.getActiveUniformBlockName(a,b).length+1);A[c>>2]=a.mc}else A[c>>2]=V.getProgramParameter(a,b);else S(1281)},
Gb:function(a,b,c,d){a=V.getShaderInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?I(a,d,b):0;c&&(A[c>>2]=b)},oa:function(a,b,c){c?35716==b?(a=V.getShaderInfoLog(R[a]),null===a&&(a="(unknown error)"),A[c>>2]=a?a.length+1:0):35720==b?(a=V.getShaderSource(R[a]),A[c>>2]=a?a.length+1:0):A[c>>2]=V.getShaderParameter(R[a],b):S(1281)},Qa:function(a,b){if(2>T.version)return S(1282),0;var c=zb[a];if(c)return 0>b||b>=c.length?(S(1281),0):c[b];switch(a){case 7939:return c=V.getSupportedExtensions()||[],
c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Ka(d)}),c=zb[a]=c,0>b||b>=c.length?(S(1281),0):c[b];default:return S(1280),0}},n:function(a,b){b=H(b);if(a=Q[a]){var c=a,d=c.jc,e=c.Fc,l;if(!d)for(c.jc=d={},c.Ec={},l=0;l<V.getProgramParameter(c,35718);++l){var f=V.getActiveUniform(c,l);var m=f.name;f=f.size;var n=Mb(m);n=0<n?m.slice(0,n):m;var p=c.pc;c.pc+=f;e[n]=[f,p];for(m=0;m<f;++m)d[p]=m,c.Ec[p++]=n}c=a.jc;d=0;e=b;l=Mb(b);0<l&&(d=parseInt(b.slice(l+1))>>>0,e=b.slice(0,l));
if((e=a.Fc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||V.getUniformLocation(a,b)))return d}else S(1281);return-1},jb:function(a,b,c){for(var d=Nb[b],e=0;e<b;e++)d[e]=A[c+4*e>>2];V.invalidateFramebuffer(a,d)},ta:function(a){a=Q[a];V.linkProgram(a);a.jc=0;a.Fc={}},Ka:function(a,b){3317==a&&(Ab=b);V.pixelStorei(a,b)},F:function(a,b){V.polygonOffset(a,b)},lb:function(a){V.readBuffer(a)},Ba:function(a,b,c,d,e){V.renderbufferStorageMultisample(a,b,c,d,e)},h:function(a,b,c,d){V.scissor(a,b,c,d)},qa:function(a,b,c,
d){for(var e="",l=0;l<b;++l){var f=d?A[d+4*l>>2]:-1;e+=H(A[c+4*l>>2],0>f?void 0:f)}V.shaderSource(R[a],e)},Ja:function(a,b,c){V.stencilFunc(a,b,c)},ma:function(a,b,c,d){V.stencilFuncSeparate(a,b,c,d)},u:function(a){V.stencilMask(a)},Ia:function(a,b,c){V.stencilOp(a,b,c)},la:function(a,b,c,d){V.stencilOpSeparate(a,b,c,d)},ya:function(a,b,c,d,e,l,f,m,n){if(2<=T.version)if(V.hc)V.texImage2D(a,b,c,d,e,l,f,m,n);else if(n){var p=Ob(m);V.texImage2D(a,b,c,d,e,l,f,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else V.texImage2D(a,
b,c,d,e,l,f,m,null);else{p=V;var q=p.texImage2D;if(n){var t=Ob(m),O=31-Math.clz32(t.BYTES_PER_ELEMENT),U=Ab;n=t.subarray(n>>O,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[f-6402]||1)*(1<<O)+U-1&-U)>>O)}else n=null;q.call(p,a,b,c,d,e,l,f,m,n)}},wa:function(a,b,c,d,e,l,f,m,n,p){if(V.hc)V.texImage3D(a,b,c,d,e,l,f,m,n,p);else if(p){var q=Ob(n);V.texImage3D(a,b,c,d,e,l,f,m,n,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else V.texImage3D(a,b,c,d,e,l,f,m,n,null)},C:function(a,b,c){V.texParameterf(a,
b,c)},e:function(a,b,c){V.texParameteri(a,b,c)},yb:function(a,b,c){if(2<=T.version)b&&V.uniform1fv(W(a),C,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=C[c+4*e>>2];else d=C.subarray(c>>2,c+4*b>>2);V.uniform1fv(W(a),d)}},z:function(a,b){V.uniform1i(W(a),b)},ub:function(a,b,c){if(2<=T.version)b&&V.uniform1iv(W(a),A,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=A[c+4*e>>2];else d=A.subarray(c>>2,c+4*b>>2);V.uniform1iv(W(a),d)}},xb:function(a,b,c){if(2<=T.version)b&&V.uniform2fv(W(a),
C,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=C[c+4*e>>2],d[e+1]=C[c+(4*e+4)>>2];else d=C.subarray(c>>2,c+8*b>>2);V.uniform2fv(W(a),d)}},tb:function(a,b,c){if(2<=T.version)b&&V.uniform2iv(W(a),A,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2];else d=A.subarray(c>>2,c+8*b>>2);V.uniform2iv(W(a),d)}},wb:function(a,b,c){if(2<=T.version)b&&V.uniform3fv(W(a),C,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=C[c+4*e>>2],
d[e+1]=C[c+(4*e+4)>>2],d[e+2]=C[c+(4*e+8)>>2];else d=C.subarray(c>>2,c+12*b>>2);V.uniform3fv(W(a),d)}},sb:function(a,b,c){if(2<=T.version)b&&V.uniform3iv(W(a),A,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2],d[e+2]=A[c+(4*e+8)>>2];else d=A.subarray(c>>2,c+12*b>>2);V.uniform3iv(W(a),d)}},vb:function(a,b,c){if(2<=T.version)b&&V.uniform4fv(W(a),C,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=C;c>>=2;for(var l=0;l<4*b;l+=4){var f=c+l;d[l]=e[f];d[l+1]=e[f+
1];d[l+2]=e[f+2];d[l+3]=e[f+3]}}else d=C.subarray(c>>2,c+16*b>>2);V.uniform4fv(W(a),d)}},rb:function(a,b,c){if(2<=T.version)b&&V.uniform4iv(W(a),A,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=A[c+4*e>>2],d[e+1]=A[c+(4*e+4)>>2],d[e+2]=A[c+(4*e+8)>>2],d[e+3]=A[c+(4*e+12)>>2];else d=A.subarray(c>>2,c+16*b>>2);V.uniform4iv(W(a),d)}},qb:function(a,b,c,d){if(2<=T.version)b&&V.uniformMatrix4fv(W(a),!!c,C,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],l=C;d>>=2;for(var f=0;f<16*b;f+=16){var m=
d+f;e[f]=l[m];e[f+1]=l[m+1];e[f+2]=l[m+2];e[f+3]=l[m+3];e[f+4]=l[m+4];e[f+5]=l[m+5];e[f+6]=l[m+6];e[f+7]=l[m+7];e[f+8]=l[m+8];e[f+9]=l[m+9];e[f+10]=l[m+10];e[f+11]=l[m+11];e[f+12]=l[m+12];e[f+13]=l[m+13];e[f+14]=l[m+14];e[f+15]=l[m+15]}}else e=C.subarray(d>>2,d+64*b>>2);V.uniformMatrix4fv(W(a),!!c,e)}},l:function(a){a=Q[a];V.useProgram(a);V.Gc=a},Ab:function(a,b){V.vertexAttribDivisor(a,b)},Bb:function(a,b,c,d,e,l){V.vertexAttribPointer(a,b,c,!!d,e,l)},m:function(a,b,c,d){V.viewport(a,b,c,d)},Ra:function(){g.yc=
a=>{0!=Ub()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",g.yc)},La:function(){g.Dc=a=>{const b=a.clipboardData.getData("text");La(()=>{const c=Qb(b);Vb(c)})};window.addEventListener("paste",g.Dc)},ua:function(a){g.Uc=[];a=H(a);a=document.getElementById(a);g.zc=b=>{b.stopPropagation();b.preventDefault()};g.Ac=b=>{b.stopPropagation();b.preventDefault()};g.Bc=b=>{b.stopPropagation();b.preventDefault()};g.Cc=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;
g.Vc=c;Wb(c.length);for(let d=0;d<c.length;d++)La(()=>{const e=Qb(c[d].name);Xb(d,e)});Yb(b.clientX,b.clientY)};a.addEventListener("dragenter",g.zc,!1);a.addEventListener("dragleave",g.Ac,!1);a.addEventListener("dragover",g.Bc,!1);a.addEventListener("drop",g.Cc,!1)},ab:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},s:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",
function(){Zb()});document.body.append(a)},q:function(){document.getElementById("_sokol_app_input_element").focus()},Cb:function(a){a=H(a);g.fc=document.getElementById(a);g.fc||console.log("sokol_app.h: invalid target:"+a);g.fc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Oa:function(){window.removeEventListener("beforeunload",g.yc)},Ha:function(){window.removeEventListener("paste",g.Dc)},Hb:function(a){a=H(a);a=document.getElementById(a);a.removeEventListener("dragenter",
g.zc);a.removeEventListener("dragleave",g.Ac);a.removeEventListener("dragover",g.Bc);a.removeEventListener("drop",g.Cc)},y:function(){g.fc&&g.fc.requestPointerLock&&g.fc.requestPointerLock()},ib:function(a,b){if(g.fc){if(0===b)a="none";else switch(a){case 0:a="auto";break;case 1:a="default";break;case 2:a="text";break;case 3:a="crosshair";break;case 4:a="pointer";break;case 5:a="ew-resize";break;case 6:a="ns-resize";break;case 7:a="nwse-resize";break;case 8:a="nesw-resize";break;case 9:a="all-scroll";
break;case 10:a="not-allowed";break;default:a="auto"}g.fc.style.cursor=a}},Ya:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),l=e.createImageData(a,b);l.data.set(z.subarray(c,c+a*b*4));e.putImageData(l,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},p:function(){document.getElementById("_sokol_app_input_element").blur()},Da:function(a){a=H(a);const b=document.createElement("textarea");
b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},ka:function(){return navigator.userAgent.includes("Macintosh")?1:0},ha:function(a,b){b=H(b);switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);
break;default:console.info(b)}},Ib:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(c){c=c.exports;g.asm=c;ka=g.asm.Jb;pa();qa=g.asm.Zb;sa.unshift(g.asm.Kb);E--;g.monitorRunDependencies&&g.monitorRunDependencies(E);if(0==E&&(null!==xa&&(clearInterval(xa),xa=null),F)){var d=F;F=null;d()}return c}var b={a:$b};E++;g.monitorRunDependencies&&g.monitorRunDependencies(E);if(g.instantiateWasm)try{return g.instantiateWasm(b,a)}catch(c){return x("Module.instantiateWasm callback failed with error: "+c),!1}Da(b,function(c){a(c.instance)});return{}})();
var Zb=g.__sapp_emsc_notify_keyboard_hidden=function(){return(Zb=g.__sapp_emsc_notify_keyboard_hidden=g.asm.Lb).apply(null,arguments)},Vb=g.__sapp_emsc_onpaste=function(){return(Vb=g.__sapp_emsc_onpaste=g.asm.Mb).apply(null,arguments)},Ub=g.__sapp_html5_get_ask_leave_site=function(){return(Ub=g.__sapp_html5_get_ask_leave_site=g.asm.Nb).apply(null,arguments)},Wb=g.__sapp_emsc_begin_drop=function(){return(Wb=g.__sapp_emsc_begin_drop=g.asm.Ob).apply(null,arguments)},Xb=g.__sapp_emsc_drop=function(){return(Xb=
g.__sapp_emsc_drop=g.asm.Pb).apply(null,arguments)},Yb=g.__sapp_emsc_end_drop=function(){return(Yb=g.__sapp_emsc_end_drop=g.asm.Qb).apply(null,arguments)};g.__sapp_emsc_invoke_fetch_cb=function(){return(g.__sapp_emsc_invoke_fetch_cb=g.asm.Rb).apply(null,arguments)};var ac=g._main=function(){return(ac=g._main=g.asm.Sb).apply(null,arguments)};g.__saudio_emsc_pull=function(){return(g.__saudio_emsc_pull=g.asm.Tb).apply(null,arguments)};
g.__sfetch_emsc_head_response=function(){return(g.__sfetch_emsc_head_response=g.asm.Ub).apply(null,arguments)};g.__sfetch_emsc_get_response=function(){return(g.__sfetch_emsc_get_response=g.asm.Vb).apply(null,arguments)};g.__sfetch_emsc_failed_http_status=function(){return(g.__sfetch_emsc_failed_http_status=g.asm.Wb).apply(null,arguments)};g.__sfetch_emsc_failed_buffer_too_small=function(){return(g.__sfetch_emsc_failed_buffer_too_small=g.asm.Xb).apply(null,arguments)};
function J(){return(J=g.asm.Yb).apply(null,arguments)}function Ma(){return(Ma=g.asm._b).apply(null,arguments)}function Na(){return(Na=g.asm.$b).apply(null,arguments)}function Rb(){return(Rb=g.asm.ac).apply(null,arguments)}g.___start_em_js=61852;g.___stop_em_js=71559;var bc;F=function cc(){bc||dc();bc||(F=cc)};function ec(a=[]){var b=ac;a.unshift(ca);var c=a.length,d=Rb(4*(c+1)),e=d>>2;a.forEach(f=>{A[e++]=Qb(f)});A[e]=0;try{var l=b(c,d);Pb(l)}catch(f){f instanceof w||"unwind"==f||h(1,f)}}
function dc(){var a=ba;function b(){if(!bc&&(bc=!0,g.calledRun=!0,!la)){Ea(sa);Ea(ta);if(g.onRuntimeInitialized)g.onRuntimeInitialized();fc&&ec(a);if(g.postRun)for("function"==typeof g.postRun&&(g.postRun=[g.postRun]);g.postRun.length;){var c=g.postRun.shift();va.unshift(c)}Ea(va)}}if(!(0<E)){if(g.preRun)for("function"==typeof g.preRun&&(g.preRun=[g.preRun]);g.preRun.length;)wa();Ea(ra);0<E||(g.setStatus?(g.setStatus("Running..."),setTimeout(function(){setTimeout(function(){g.setStatus("")},1);b()},
1)):b())}}if(g.preInit)for("function"==typeof g.preInit&&(g.preInit=[g.preInit]);0<g.preInit.length;)g.preInit.pop()();var fc=!0;g.noInitialRun&&(fc=!1);dc();
