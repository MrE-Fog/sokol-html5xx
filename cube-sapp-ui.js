
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},f),ba=[],ca="./this.program",h=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,q="",fa,t,u;
if(ea){var fs=require("fs"),ha=require("path");q=l?ha.dirname(q)+"/":__dirname+"/";fa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};u=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};t=(a,b,c)=>{a=a.startsWith("file://")?new URL(a):ha.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})};1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=typeof module&&(module.exports=f);process.on("uncaughtException",
function(a){if(!(a instanceof ia))throw a;});process.on("unhandledRejection",function(a){throw a;});h=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof ia||v("exiting due to exception: "+b);process.exit(a)};f.inspect=function(){return"[Emscripten Module object]"}}else if(da||l)l?q=self.location.href:"undefined"!=typeof document&&document.currentScript&&(q=document.currentScript.src),q=0!==q.indexOf("blob:")?q.substr(0,q.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=a=>{var b=new XMLHttpRequest;
b.open("GET",a,!1);b.send(null);return b.responseText},l&&(u=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),t=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ja=f.print||console.log.bind(console),v=f.printErr||console.warn.bind(console);Object.assign(f,aa);aa=null;f.arguments&&(ba=f.arguments);
f.thisProgram&&(ca=f.thisProgram);f.quit&&(h=f.quit);var x;f.wasmBinary&&(x=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!=typeof WebAssembly&&ka("no native wasm support detected");var la,ma=!1,na="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function oa(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&na)return na.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var k=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|k<<6|g:(e&7)<<18|k<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function y(a,b){return a?oa(z,a,b):""}
function A(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function pa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}var qa,z,ra,sa,B,C,D,E;function ta(){var a=la.buffer;f.HEAP8=qa=new Int8Array(a);f.HEAP16=ra=new Int16Array(a);f.HEAP32=B=new Int32Array(a);f.HEAPU8=z=new Uint8Array(a);f.HEAPU16=sa=new Uint16Array(a);f.HEAPU32=C=new Uint32Array(a);f.HEAPF32=D=new Float32Array(a);f.HEAPF64=E=new Float64Array(a)}var ua,va=[],wa=[],xa=[],ya=[],za=[];
function Aa(){var a=f.preRun.shift();va.unshift(a)}var F=0,Ba=null,G=null;function ka(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";v(a);ma=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Ca(){return H.startsWith("data:application/octet-stream;base64,")}var H;H="cube-sapp-ui.wasm";if(!Ca()){var Da=H;H=f.locateFile?f.locateFile(Da,q):q+Da}
function Ea(){var a=H;try{if(a==H&&x)return new Uint8Array(x);if(u)return u(a);throw"both async and sync fetching of the wasm failed";}catch(b){ka(b)}}
function Fa(){if(!x&&(da||l)){if("function"==typeof fetch&&!H.startsWith("file://"))return fetch(H,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+H+"'";return a.arrayBuffer()}).catch(function(){return Ea()});if(t)return new Promise(function(a,b){t(H,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ea()})}function ia(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function Ga(a){for(;0<a.length;)a.shift()(f)}function Ha(a){var b=Ia();a();Ja(b)}var Ka=0;function La(){for(var a=I.length-1;0<=a;--a)Ma(a);I=[];Na=[]}var Na=[];function Oa(){if(Ka&&Pa.hc)for(var a=0;a<Na.length;++a){var b=Na[a];Na.splice(a,1);--a;b.Tc.apply(null,b.Ic)}}var I=[];function Ma(a){var b=I[a];b.target.removeEventListener(b.Zb,b.Ec,b.$b);I.splice(a,1)}
function J(a){function b(d){++Ka;Pa=a;Oa();a.bc(d);Oa();--Ka}if(a.ac)a.Ec=b,a.target.addEventListener(a.Zb,b,a.$b),I.push(a),Qa||(ya.push(La),Qa=!0);else for(var c=0;c<I.length;++c)I[c].target==a.target&&I[c].Zb==a.Zb&&Ma(c--)}function Ra(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Qa,Pa,Sa,Ta,Ua,Va,Wa,Xa,Ya,Za=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function K(a){a=2<a?y(a):a;return Za[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function $a(a){return 0>Za.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var ab=[];function L(a){var b=ab[a];b||(a>=ab.length&&(ab.length=a+1),ab[a]=b=ua.get(a));return b}function bb(a,b,c,d,e,k){Sa||(Sa=M(256));a={target:K(a),Zb:k,ac:d,bc:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Sa;A(Ra(g.target),z,n+0,128);A(m,z,n+128,128);L(d)(e,n,b)&&g.preventDefault()},$b:c};J(a)}
function cb(a,b,c,d,e,k){Ta||(Ta=M(176));a={target:K(a),hc:!0,Zb:k,ac:d,bc:function(g){var m=Ta;E[m>>3]=g.timeStamp;var n=m>>2;B[n+2]=g.location;B[n+3]=g.ctrlKey;B[n+4]=g.shiftKey;B[n+5]=g.altKey;B[n+6]=g.metaKey;B[n+7]=g.repeat;B[n+8]=g.charCode;B[n+9]=g.keyCode;B[n+10]=g.which;A(g.key||"",z,m+44,32);A(g.code||"",z,m+76,32);A(g.char||"",z,m+108,32);A(g.locale||"",z,m+140,32);L(d)(e,m,b)&&g.preventDefault()},$b:c};J(a)}
function db(a,b,c){E[a>>3]=b.timeStamp;a>>=2;B[a+2]=b.screenX;B[a+3]=b.screenY;B[a+4]=b.clientX;B[a+5]=b.clientY;B[a+6]=b.ctrlKey;B[a+7]=b.shiftKey;B[a+8]=b.altKey;B[a+9]=b.metaKey;ra[2*a+20]=b.button;ra[2*a+21]=b.buttons;B[a+11]=b.movementX;B[a+12]=b.movementY;c=$a(c);B[a+13]=b.clientX-c.left;B[a+14]=b.clientY-c.top}
function O(a,b,c,d,e,k){Ua||(Ua=M(72));a=K(a);J({target:a,hc:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,Zb:k,ac:d,bc:function(g){g=g||event;db(Ua,g,a);L(d)(e,Ua,b)&&g.preventDefault()},$b:c})}function eb(a,b,c,d,e){Va||(Va=M(260));J({target:a,Zb:e,ac:d,bc:function(k){k=k||event;var g=Va,m=document.pointerLockElement||document.ec||document.oc||document.nc;B[g>>2]=!!m;var n=m&&m.id?m.id:"";A(Ra(m),z,g+4,128);A(n,z,g+132,128);L(d)(20,g,b)&&k.preventDefault()},$b:c})}
function fb(a,b,c,d,e){J({target:a,Zb:e,ac:d,bc:function(k){k=k||event;L(d)(38,0,b)&&k.preventDefault()},$b:c})}
function gb(a,b,c,d){Wa||(Wa=M(36));a=K(a);J({target:a,Zb:"resize",ac:d,bc:function(e){e=e||event;if(e.target==a){var k=document.body;if(k){var g=Wa;B[g>>2]=e.detail;B[g+4>>2]=k.clientWidth;B[g+8>>2]=k.clientHeight;B[g+12>>2]=innerWidth;B[g+16>>2]=innerHeight;B[g+20>>2]=outerWidth;B[g+24>>2]=outerHeight;B[g+28>>2]=pageXOffset;B[g+32>>2]=pageYOffset;L(d)(10,g,b)&&e.preventDefault()}}},$b:c})}
function hb(a,b,c,d,e,k){Xa||(Xa=M(1696));a=K(a);J({target:a,hc:"touchstart"==k||"touchend"==k,Zb:k,ac:d,bc:function(g){for(var m,n={},p=g.touches,r=0;r<p.length;++r)m=p[r],m.sc=m.uc=0,n[m.identifier]=m;for(r=0;r<g.changedTouches.length;++r)m=g.changedTouches[r],m.sc=1,n[m.identifier]=m;for(r=0;r<g.targetTouches.length;++r)n[g.targetTouches[r].identifier].uc=1;p=Xa;E[p>>3]=g.timeStamp;var w=p>>2;B[w+3]=g.ctrlKey;B[w+4]=g.shiftKey;B[w+5]=g.altKey;B[w+6]=g.metaKey;w+=7;var N=$a(a),U=0;for(r in n)if(m=
n[r],B[w]=m.identifier,B[w+1]=m.screenX,B[w+2]=m.screenY,B[w+3]=m.clientX,B[w+4]=m.clientY,B[w+5]=m.pageX,B[w+6]=m.pageY,B[w+7]=m.sc,B[w+8]=m.uc,B[w+9]=m.clientX-N.left,B[w+10]=m.clientY-N.top,w+=13,31<++U)break;B[p+8>>2]=U;L(d)(e,p,b)&&g.preventDefault()},$b:c})}function ib(a,b,c,d,e,k){a={target:K(a),Zb:k,ac:d,bc:function(g){g=g||event;L(d)(e,0,b)&&g.preventDefault()},$b:c};J(a)}
function jb(a,b,c,d){Ya||(Ya=M(104));J({target:a,hc:!0,Zb:"wheel",ac:d,bc:function(e){e=e||event;var k=Ya;db(k,e,a);E[k+72>>3]=e.deltaX;E[k+80>>3]=e.deltaY;E[k+88>>3]=e.deltaZ;B[k+96>>2]=e.deltaMode;L(d)(9,k,b)&&e.preventDefault()},$b:c})}
function kb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,g){b.drawElementsInstancedANGLE(c,d,e,k,g)})}
function lb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function mb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function nb(a){a.Kc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function ob(a){a.Mc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function pb(a){a.Oc=a.getExtension("WEBGL_multi_draw")}var qb=1,rb=[],P=[],sb=[],tb=[],ub=[],Q=[],vb=[],wb=[],xb={},yb={},zb=4;function R(a){Ab||(Ab=a)}function Bb(a){for(var b=qb++,c=a.length;c<b;c++)a[c]=null;return b}
function Cb(a,b){a.ec||(a.ec=a.getContext,a.getContext=function(d,e){e=a.ec(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.tc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Db(c,b):0}function Db(a,b){var c=Bb(wb),d={Lc:c,attributes:b,version:b.tc,lc:a};a.canvas&&(a.canvas.Hc=d);wb[c]=d;("undefined"==typeof b.rc||b.rc)&&Eb(d);return c}
function Eb(a){a||(a=S);if(!a.Gc){a.Gc=!0;var b=a.lc;kb(b);lb(b);mb(b);nb(b);ob(b);2<=a.version&&(b.qc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.qc)b.qc=b.getExtension("EXT_disjoint_timer_query");pb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Ab,S,Fb=["default","low-power","high-performance"],Gb=[null,[],[]];
function Hb(a,b,c,d){for(var e=0;e<a;e++){var k=T[c](),g=k&&Bb(d);k?(k.name=g,d[g]=k):R(1282);B[b+4*e>>2]=g}}
function Ib(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=T.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>S.version){R(1282);return}c=2*(T.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>S.version){R(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=T.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":R(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:R(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)B[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){R(1280);v("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:R(1280);v("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}B[b>>2]=c}else R(1281)}
function V(a){var b=pa(a)+1,c=M(b);A(a,z,c,b);return c}function Jb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Kb(a){a-=5120;return 0==a?qa:1==a?z:2==a?ra:4==a?B:6==a?D:5==a||28922==a||28520==a||30779==a||30782==a?C:sa}function W(a){var b=T.Dc;if(b){var c=b.fc[a];"number"==typeof c&&(b.fc[a]=c=T.getUniformLocation(b,b.Bc[a]+(0<c?"["+c+"]":"")));return c}R(1282)}var X=[],Y=[];function Lb(a){if(!noExitRuntime){if(f.onExit)f.onExit(a);ma=!0}h(a,new ia(a))}
function Mb(a){var b=pa(a)+1,c=Nb(b);A(a,qa,c,b);return c}for(var T,Ob=new Float32Array(288),Z=0;288>Z;++Z)X[Z]=Ob.subarray(0,Z+1);var Pb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Pb.subarray(0,Z+1);
var Wb={fa:function(){return 0},gb:function(){return 0},hb:function(){},S:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},na:function(a,b,c){a=K(a);if(!a)return-4;a=$a(a);E[b>>3]=a.width;E[c>>3]=a.height;return 0},db:function(a,b,c){z.copyWithin(a,b,b+c)},Na:function(a,b){function c(d){L(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},cb:function(a){var b=z.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);
var e=Math,k=e.min;d=Math.max(a,d);d+=(65536-d%65536)%65536;a:{var g=la.buffer;try{la.grow(k.call(e,2147483648,d)-g.byteLength+65535>>>16);ta();var m=1;break a}catch(n){}m=void 0}if(m)return!0}return!1},T:function(a,b,c,d){bb(a,b,c,d,12,"blur");return 0},P:function(a,b,c){a=K(a);if(!a)return-4;a.width=b;a.height=c;return 0},U:function(a,b,c,d){bb(a,b,c,d,13,"focus");return 0},ba:function(a,b,c,d){cb(a,b,c,d,2,"keydown");return 0},$:function(a,b,c,d){cb(a,b,c,d,1,"keypress");return 0},aa:function(a,
b,c,d){cb(a,b,c,d,3,"keyup");return 0},ma:function(a,b,c,d){O(a,b,c,d,5,"mousedown");return 0},ga:function(a,b,c,d){O(a,b,c,d,33,"mouseenter");return 0},da:function(a,b,c,d){O(a,b,c,d,34,"mouseleave");return 0},ia:function(a,b,c,d){O(a,b,c,d,8,"mousemove");return 0},ka:function(a,b,c,d){O(a,b,c,d,6,"mouseup");return 0},W:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.ec||document.body.oc||document.body.nc))return-1;a=K(a);if(!a)return-4;eb(a,b,c,
d,"pointerlockchange");eb(a,b,c,d,"mozpointerlockchange");eb(a,b,c,d,"webkitpointerlockchange");eb(a,b,c,d,"mspointerlockchange");return 0},V:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.ec||document.body.oc||document.body.nc))return-1;a=K(a);if(!a)return-4;fb(a,b,c,d,"pointerlockerror");fb(a,b,c,d,"mozpointerlockerror");fb(a,b,c,d,"webkitpointerlockerror");fb(a,b,c,d,"mspointerlockerror");return 0},ab:function(a,b,c,d){gb(a,b,c,d);return 0},X:function(a,b,c,d){hb(a,
b,c,d,25,"touchcancel");return 0},Y:function(a,b,c,d){hb(a,b,c,d,23,"touchend");return 0},Z:function(a,b,c,d){hb(a,b,c,d,24,"touchmove");return 0},_:function(a,b,c,d){hb(a,b,c,d,22,"touchstart");return 0},R:function(a,b,c,d){ib(a,b,c,d,31,"webglcontextlost");return 0},Q:function(a,b,c,d){ib(a,b,c,d,32,"webglcontextrestored");return 0},ca:function(a,b,c,d){a=K(a);return"undefined"!=typeof a.onwheel?(jb(a,b,c,d),0):-1},I:function(a,b){b>>=2;b={alpha:!!B[b],depth:!!B[b+1],stencil:!!B[b+2],antialias:!!B[b+
3],premultipliedAlpha:!!B[b+4],preserveDrawingBuffer:!!B[b+5],powerPreference:Fb[B[b+6]],failIfMajorPerformanceCaveat:!!B[b+7],tc:B[b+8],Nc:B[b+9],rc:B[b+10],Fc:B[b+11],Pc:B[b+12],Qc:B[b+13]};a=K(a);return!a||b.Fc?0:Cb(a,b)},ta:function(a,b){a=wb[a];b=y(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&kb(T);"OES_vertex_array_object"==b&&lb(T);"WEBGL_draw_buffers"==b&&mb(T);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&nb(T);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==
b&&ob(T);"WEBGL_multi_draw"==b&&pb(T);return!!a.lc.getExtension(b)},Ja:function(a){a>>=2;for(var b=0;14>b;++b)B[a+b]=0;B[a]=B[a+1]=B[a+3]=B[a+4]=B[a+8]=B[a+10]=1},Ba:function(a){S=wb[a];f.Jc=T=S&&S.lc;return!a||T?0:-5},ea:function(){return 52},fb:function(){return 52},bb:function(){return 70},eb:function(a,b,c,d){for(var e=0,k=0;k<c;k++){var g=C[b>>2],m=C[b+4>>2];b+=8;for(var n=0;n<m;n++){var p=z[g+n],r=Gb[a];0===p||10===p?((1===a?ja:v)(oa(r,0)),r.length=0):r.push(p)}e+=m}C[d>>2]=e;return 0},b:function(a){T.activeTexture(a)},
D:function(a,b){T.attachShader(P[a],Q[b])},c:function(a,b){35051==a?T.pc=b:35052==a&&(T.dc=b);T.bindBuffer(a,rb[b])},h:function(a,b){T.bindFramebuffer(a,sb[b])},Da:function(a,b){T.bindRenderbuffer(a,tb[b])},a:function(a,b){T.bindTexture(a,ub[b])},N:function(a){T.bindVertexArray(vb[a])},J:function(a,b,c,d){T.blendColor(a,b,c,d)},K:function(a,b){T.blendEquationSeparate(a,b)},L:function(a,b,c,d){T.blendFuncSeparate(a,b,c,d)},q:function(a,b,c,d,e,k,g,m,n,p){T.blitFramebuffer(a,b,c,d,e,k,g,m,n,p)},Fa:function(a,
b,c,d){2<=S.version?c&&b?T.bufferData(a,z,d,c,b):T.bufferData(a,b,d):T.bufferData(a,c?z.subarray(c,c+b):b,d)},l:function(a,b,c,d){2<=S.version?c&&T.bufferSubData(a,b,z,d,c):T.bufferSubData(a,b,z.subarray(d,d+c))},yb:function(a){T.clear(a)},Bb:function(a,b,c,d){T.clearColor(a,b,c,d)},Ab:function(a){T.clearDepth(a)},zb:function(a){T.clearStencil(a)},m:function(a,b,c,d){T.colorMask(!!a,!!b,!!c,!!d)},oa:function(a){T.compileShader(Q[a])},ya:function(a,b,c,d,e,k,g,m){2<=S.version?T.dc||!g?T.compressedTexImage2D(a,
b,c,d,e,k,g,m):T.compressedTexImage2D(a,b,c,d,e,k,z,m,g):T.compressedTexImage2D(a,b,c,d,e,k,m?z.subarray(m,m+g):null)},wa:function(a,b,c,d,e,k,g,m,n){T.dc?T.compressedTexImage3D(a,b,c,d,e,k,g,m,n):T.compressedTexImage3D(a,b,c,d,e,k,g,z,n,m)},ua:function(){var a=Bb(P),b=T.createProgram();b.name=a;b.kc=b.ic=b.jc=0;b.mc=1;P[a]=b;return a},qa:function(a){var b=Bb(Q);Q[b]=T.createShader(a);return b},F:function(a){T.cullFace(a)},Pa:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2],e=rb[d];e&&(T.deleteBuffer(e),
e.name=0,rb[d]=null,d==T.pc&&(T.pc=0),d==T.dc&&(T.dc=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=B[b+4*c>>2],e=sb[d];e&&(T.deleteFramebuffer(e),e.name=0,sb[d]=null)}},y:function(a){if(a){var b=P[a];b?(T.deleteProgram(b),b.name=0,P[a]=null):R(1281)}},O:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2],e=tb[d];e&&(T.deleteRenderbuffer(e),e.name=0,tb[d]=null)}},u:function(a){if(a){var b=Q[a];b?(T.deleteShader(b),Q[a]=null):R(1281)}},Oa:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2],e=ub[d];
e&&(T.deleteTexture(e),e.name=0,ub[d]=null)}},Ma:function(a,b){for(var c=0;c<a;c++){var d=B[b+4*c>>2];T.deleteVertexArray(vb[d]);vb[d]=null}},x:function(a){T.depthFunc(a)},w:function(a){T.depthMask(!!a)},e:function(a){T.disable(a)},M:function(a){T.disableVertexAttribArray(a)},ib:function(a,b,c){T.drawArrays(a,b,c)},jb:function(a,b,c,d){T.drawArraysInstanced(a,b,c,d)},kb:function(a,b,c,d){T.drawElements(a,b,c,d)},lb:function(a,b,c,d,e){T.drawElementsInstanced(a,b,c,d,e)},g:function(a){T.enable(a)},
vb:function(a){T.enableVertexAttribArray(a)},G:function(a){T.frontFace(a)},Ga:function(a,b){Hb(a,b,"createBuffer",rb)},Ea:function(a,b){Hb(a,b,"createRenderbuffer",tb)},za:function(a,b){Hb(a,b,"createTexture",ub)},La:function(a,b){Hb(a,b,"createVertexArray",vb)},Cb:function(a,b){return T.getAttribLocation(P[a],y(b))},d:function(a,b){Ib(a,b)},ra:function(a,b,c,d){a=T.getProgramInfoLog(P[a]);null===a&&(a="(unknown error)");b=0<b&&d?A(a,z,d,b):0;c&&(B[c>>2]=b)},C:function(a,b,c){if(c)if(a>=qb)R(1281);
else if(a=P[a],35716==b)a=T.getProgramInfoLog(a),null===a&&(a="(unknown error)"),B[c>>2]=a.length+1;else if(35719==b){if(!a.kc)for(b=0;b<T.getProgramParameter(a,35718);++b)a.kc=Math.max(a.kc,T.getActiveUniform(a,b).name.length+1);B[c>>2]=a.kc}else if(35722==b){if(!a.ic)for(b=0;b<T.getProgramParameter(a,35721);++b)a.ic=Math.max(a.ic,T.getActiveAttrib(a,b).name.length+1);B[c>>2]=a.ic}else if(35381==b){if(!a.jc)for(b=0;b<T.getProgramParameter(a,35382);++b)a.jc=Math.max(a.jc,T.getActiveUniformBlockName(a,
b).length+1);B[c>>2]=a.jc}else B[c>>2]=T.getProgramParameter(a,b);else R(1281)},Db:function(a,b,c,d){a=T.getShaderInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?A(a,z,d,b):0;c&&(B[c>>2]=b)},A:function(a,b,c){c?35716==b?(a=T.getShaderInfoLog(Q[a]),null===a&&(a="(unknown error)"),B[c>>2]=a?a.length+1:0):35720==b?(a=T.getShaderSource(Q[a]),B[c>>2]=a?a.length+1:0):B[c>>2]=T.getShaderParameter(Q[a],b):R(1281)},Ra:function(a){var b=xb[a];if(!b){switch(a){case 7939:b=T.getSupportedExtensions()||
[];b=b.concat(b.map(function(d){return"GL_"+d}));b=V(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=T.getParameter(a))||R(1280);b=b&&V(b);break;case 7938:b=T.getParameter(7938);b=2<=S.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=V(b);break;case 35724:b=T.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=V(b);break;default:R(1280)}xb[a]=b}return b},Qa:function(a,
b){if(2>S.version)return R(1282),0;var c=yb[a];if(c)return 0>b||b>=c.length?(R(1281),0):c[b];switch(a){case 7939:return c=T.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return V(d)}),c=yb[a]=c,0>b||b>=c.length?(R(1281),0):c[b];default:return R(1280),0}},k:function(a,b){b=y(b);if(a=P[a]){var c=a,d=c.fc,e=c.Cc,k;if(!d)for(c.fc=d={},c.Bc={},k=0;k<T.getProgramParameter(c,35718);++k){var g=T.getActiveUniform(c,k);var m=g.name;g=g.size;var n=Jb(m);n=0<n?
m.slice(0,n):m;var p=c.mc;c.mc+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.Bc[p++]=n}c=a.fc;d=0;e=b;k=Jb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.Cc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||T.getUniformLocation(a,b)))return d}else R(1281);return-1},sa:function(a){a=P[a];T.linkProgram(a);a.fc=0;a.Cc={}},Ka:function(a,b){3317==a&&(zb=b);T.pixelStorei(a,b)},H:function(a,b){T.polygonOffset(a,b)},r:function(a){T.readBuffer(a)},Aa:function(a,b,c,d){T.renderbufferStorage(a,b,c,d)},Ca:function(a,
b,c,d,e){T.renderbufferStorageMultisample(a,b,c,d,e)},s:function(a,b,c,d){T.scissor(a,b,c,d)},pa:function(a,b,c,d){for(var e="",k=0;k<b;++k){var g=d?B[d+4*k>>2]:-1;e+=y(B[c+4*k>>2],0>g?void 0:g)}T.shaderSource(Q[a],e)},Ia:function(a,b,c){T.stencilFunc(a,b,c)},la:function(a,b,c,d){T.stencilFuncSeparate(a,b,c,d)},v:function(a){T.stencilMask(a)},Ha:function(a,b,c){T.stencilOp(a,b,c)},ja:function(a,b,c,d){T.stencilOpSeparate(a,b,c,d)},xa:function(a,b,c,d,e,k,g,m,n){if(2<=S.version)if(T.dc)T.texImage2D(a,
b,c,d,e,k,g,m,n);else if(n){var p=Kb(m);T.texImage2D(a,b,c,d,e,k,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else T.texImage2D(a,b,c,d,e,k,g,m,null);else{p=T;var r=p.texImage2D;if(n){var w=Kb(m),N=31-Math.clz32(w.BYTES_PER_ELEMENT),U=zb;n=w.subarray(n>>N,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[g-6402]||1)*(1<<N)+U-1&-U)>>N)}else n=null;r.call(p,a,b,c,d,e,k,g,m,n)}},va:function(a,b,c,d,e,k,g,m,n,p){if(T.dc)T.texImage3D(a,b,c,d,e,k,g,m,n,p);else if(p){var r=Kb(n);T.texImage3D(a,
b,c,d,e,k,g,m,n,r,p>>31-Math.clz32(r.BYTES_PER_ELEMENT))}else T.texImage3D(a,b,c,d,e,k,g,m,n,null)},E:function(a,b,c){T.texParameterf(a,b,c)},f:function(a,b,c){T.texParameteri(a,b,c)},ub:function(a,b,c){if(2<=S.version)b&&T.uniform1fv(W(a),D,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=D[c+4*e>>2];else d=D.subarray(c>>2,c+4*b>>2);T.uniform1fv(W(a),d)}},B:function(a,b){T.uniform1i(W(a),b)},qb:function(a,b,c){if(2<=S.version)b&&T.uniform1iv(W(a),B,c>>2,b);else{if(288>=b)for(var d=Y[b-1],
e=0;e<b;++e)d[e]=B[c+4*e>>2];else d=B.subarray(c>>2,c+4*b>>2);T.uniform1iv(W(a),d)}},tb:function(a,b,c){if(2<=S.version)b&&T.uniform2fv(W(a),D,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2];else d=D.subarray(c>>2,c+8*b>>2);T.uniform2fv(W(a),d)}},pb:function(a,b,c){if(2<=S.version)b&&T.uniform2iv(W(a),B,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=B[c+4*e>>2],d[e+1]=B[c+(4*e+4)>>2];else d=B.subarray(c>>2,c+8*b>>2);T.uniform2iv(W(a),
d)}},sb:function(a,b,c){if(2<=S.version)b&&T.uniform3fv(W(a),D,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2],d[e+2]=D[c+(4*e+8)>>2];else d=D.subarray(c>>2,c+12*b>>2);T.uniform3fv(W(a),d)}},ob:function(a,b,c){if(2<=S.version)b&&T.uniform3iv(W(a),B,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=B[c+4*e>>2],d[e+1]=B[c+(4*e+4)>>2],d[e+2]=B[c+(4*e+8)>>2];else d=B.subarray(c>>2,c+12*b>>2);T.uniform3iv(W(a),d)}},rb:function(a,b,c){if(2<=
S.version)b&&T.uniform4fv(W(a),D,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=D;c>>=2;for(var k=0;k<4*b;k+=4){var g=c+k;d[k]=e[g];d[k+1]=e[g+1];d[k+2]=e[g+2];d[k+3]=e[g+3]}}else d=D.subarray(c>>2,c+16*b>>2);T.uniform4fv(W(a),d)}},nb:function(a,b,c){if(2<=S.version)b&&T.uniform4iv(W(a),B,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=B[c+4*e>>2],d[e+1]=B[c+(4*e+4)>>2],d[e+2]=B[c+(4*e+8)>>2],d[e+3]=B[c+(4*e+12)>>2];else d=B.subarray(c>>2,c+16*b>>2);T.uniform4iv(W(a),d)}},mb:function(a,
b,c,d){if(2<=S.version)b&&T.uniformMatrix4fv(W(a),!!c,D,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],k=D;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=k[m];e[g+1]=k[m+1];e[g+2]=k[m+2];e[g+3]=k[m+3];e[g+4]=k[m+4];e[g+5]=k[m+5];e[g+6]=k[m+6];e[g+7]=k[m+7];e[g+8]=k[m+8];e[g+9]=k[m+9];e[g+10]=k[m+10];e[g+11]=k[m+11];e[g+12]=k[m+12];e[g+13]=k[m+13];e[g+14]=k[m+14];e[g+15]=k[m+15]}}else e=D.subarray(d>>2,d+64*b>>2);T.uniformMatrix4fv(W(a),!!c,e)}},j:function(a){a=P[a];T.useProgram(a);T.Dc=a},wb:function(a,
b){T.vertexAttribDivisor(a,b)},xb:function(a,b,c,d,e,k){T.vertexAttribPointer(a,b,c,!!d,e,k)},t:function(a,b,c,d){T.viewport(a,b,c,d)},$a:function(){f.vc=a=>{0!=Qb()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",f.vc)},_a:function(){f.Ac=a=>{const b=a.clipboardData.getData("text");Ha(()=>{const c=Mb(b);Rb(c)})};window.addEventListener("paste",f.Ac)},Za:function(a){f.Rc=[];a=y(a);a=document.getElementById(a);f.wc=b=>{b.stopPropagation();b.preventDefault()};f.xc=b=>
{b.stopPropagation();b.preventDefault()};f.yc=b=>{b.stopPropagation();b.preventDefault()};f.zc=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;f.Sc=c;Sb(c.length);for(let d=0;d<c.length;d++)Ha(()=>{const e=Mb(c[d].name);Tb(d,e)});Ub(b.clientX,b.clientY)};a.addEventListener("dragenter",f.wc,!1);a.addEventListener("dragleave",f.xc,!1);a.addEventListener("dragover",f.yc,!1);a.addEventListener("drop",f.zc,!1)},Ta:function(){const a=document.getElementById("sokol-app-favicon");
a&&document.head.removeChild(a)},p:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Vb()});document.body.append(a)},o:function(){document.getElementById("_sokol_app_input_element").focus()},Eb:function(a){a=y(a);f.cc=document.getElementById(a);f.cc||console.log("sokol_app.h: invalid target:"+a);f.cc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+
a)},Ya:function(){window.removeEventListener("beforeunload",f.vc)},Xa:function(){window.removeEventListener("paste",f.Ac)},Wa:function(a){a=y(a);a=document.getElementById(a);a.removeEventListener("dragenter",f.wc);a.removeEventListener("dragleave",f.xc);a.removeEventListener("dragover",f.yc);a.removeEventListener("drop",f.zc)},z:function(){f.cc&&f.cc.requestPointerLock&&f.cc.requestPointerLock()},Va:function(a,b){if(f.cc){if(0===b)a="none";else switch(a){case 0:a="auto";break;case 1:a="default";break;
case 2:a="text";break;case 3:a="crosshair";break;case 4:a="pointer";break;case 5:a="ew-resize";break;case 6:a="ns-resize";break;case 7:a="nwse-resize";break;case 8:a="nesw-resize";break;case 9:a="all-scroll";break;case 10:a="not-allowed";break;default:a="auto"}f.cc.style.cursor=a}},Sa:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(z.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");
a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},n:function(){document.getElementById("_sokol_app_input_element").blur()},Ua:function(a){a=y(a);const b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();
document.execCommand("copy");document.body.removeChild(b)},ha:function(){return navigator.userAgent.includes("Macintosh")?1:0}};
(function(){function a(e){f.asm=e.exports;la=f.asm.Fb;ta();ua=f.asm.Vb;wa.unshift(f.asm.Gb);F--;f.monitorRunDependencies&&f.monitorRunDependencies(F);0==F&&(null!==Ba&&(clearInterval(Ba),Ba=null),G&&(e=G,G=null,e()))}function b(e){a(e.instance)}function c(e){return Fa().then(function(k){return WebAssembly.instantiate(k,d)}).then(function(k){return k}).then(e,function(k){v("failed to asynchronously prepare wasm: "+k);ka(k)})}var d={a:Wb};F++;f.monitorRunDependencies&&f.monitorRunDependencies(F);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return v("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return x||"function"!=typeof WebAssembly.instantiateStreaming||Ca()||H.startsWith("file://")||ea||"function"!=typeof fetch?c(b):fetch(H,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(k){v("wasm streaming compile failed: "+k);v("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.Gb).apply(null,arguments)};
var Vb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Vb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Hb).apply(null,arguments)},Rb=f.__sapp_emsc_onpaste=function(){return(Rb=f.__sapp_emsc_onpaste=f.asm.Ib).apply(null,arguments)},Qb=f.__sapp_html5_get_ask_leave_site=function(){return(Qb=f.__sapp_html5_get_ask_leave_site=f.asm.Jb).apply(null,arguments)},Sb=f.__sapp_emsc_begin_drop=function(){return(Sb=f.__sapp_emsc_begin_drop=f.asm.Kb).apply(null,arguments)},Tb=f.__sapp_emsc_drop=function(){return(Tb=
f.__sapp_emsc_drop=f.asm.Lb).apply(null,arguments)},Ub=f.__sapp_emsc_end_drop=function(){return(Ub=f.__sapp_emsc_end_drop=f.asm.Mb).apply(null,arguments)};f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Nb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.Ob).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Pb).apply(null,arguments)};
f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.Qb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Rb).apply(null,arguments)};f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.Sb).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.Tb).apply(null,arguments)};
var M=f._malloc=function(){return(M=f._malloc=f.asm.Ub).apply(null,arguments)},Ia=f.stackSave=function(){return(Ia=f.stackSave=f.asm.Wb).apply(null,arguments)},Ja=f.stackRestore=function(){return(Ja=f.stackRestore=f.asm.Xb).apply(null,arguments)},Nb=f.stackAlloc=function(){return(Nb=f.stackAlloc=f.asm.Yb).apply(null,arguments)};f.___start_em_js=42056;f.___stop_em_js=51437;var Xb;G=function Yb(){Xb||Zb();Xb||(G=Yb)};
function $b(a){var b=f._main;a=a||[];a.unshift(ca);var c=a.length,d=Nb(4*(c+1)),e=d>>2;a.forEach(g=>{B[e++]=Mb(g)});B[e]=0;try{var k=b(c,d);Lb(k)}catch(g){g instanceof ia||"unwind"==g||h(1,g)}}
function Zb(){function a(){if(!Xb&&(Xb=!0,f.calledRun=!0,!ma)){Ga(wa);Ga(xa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();ac&&$b(b);if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var c=f.postRun.shift();za.unshift(c)}Ga(za)}}var b=b||ba;if(!(0<F)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Aa();Ga(va);0<F||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);
a()},1)):a())}}if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var ac=!0;f.noInitialRun&&(ac=!1);Zb();
