var f;f||(f=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},f),ba=[],ca="./this.program",h=(a,b)=>{throw b;},da="object"==typeof window,l="function"==typeof importScripts,ea="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,r="",fa,ha,ia;
if(ea){var fs=require("fs"),ja=require("path");r=l?ja.dirname(r)+"/":__dirname+"/";fa=(a,b)=>{a=a.startsWith("file://")?new URL(a):ja.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")};ia=a=>{a=fa(a,!0);a.buffer||(a=new Uint8Array(a));return a};ha=(a,b,c,d=!0)=>{a=a.startsWith("file://")?new URL(a):ja.normalize(a);fs.readFile(a,d?void 0:"utf8",(e,k)=>{e?c(e):b(d?k.buffer:k)})};!f.thisProgram&&1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/"));ba=process.argv.slice(2);"undefined"!=
typeof module&&(module.exports=f);process.on("uncaughtException",a=>{if(!("unwind"===a||a instanceof ka||a.context instanceof ka))throw a;});if(15>process.versions.node.split(".")[0])process.on("unhandledRejection",a=>{throw a;});h=(a,b)=>{process.exitCode=a;throw b;};f.inspect=()=>"[Emscripten Module object]"}else if(da||l)l?r=self.location.href:"undefined"!=typeof document&&document.currentScript&&(r=document.currentScript.src),r=0!==r.indexOf("blob:")?r.substr(0,r.replace(/[?#].*/,"").lastIndexOf("/")+
1):"",fa=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},l&&(ia=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ha=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var la=f.print||console.log.bind(console),u=f.printErr||console.warn.bind(console);
Object.assign(f,aa);aa=null;f.arguments&&(ba=f.arguments);f.thisProgram&&(ca=f.thisProgram);f.quit&&(h=f.quit);var v;f.wasmBinary&&(v=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!=typeof WebAssembly&&ma("no native wasm support detected");var na,oa=!1,pa,w,qa,ra,x,y,z,A;
function sa(){var a=na.buffer;f.HEAP8=pa=new Int8Array(a);f.HEAP16=qa=new Int16Array(a);f.HEAP32=x=new Int32Array(a);f.HEAPU8=w=new Uint8Array(a);f.HEAPU16=ra=new Uint16Array(a);f.HEAPU32=y=new Uint32Array(a);f.HEAPF32=z=new Float32Array(a);f.HEAPF64=A=new Float64Array(a)}var ta,ua=[],va=[],wa=[],xa=[],ya=[];function za(){var a=f.preRun.shift();ua.unshift(a)}var B=0,Aa=null,C=null;
function ma(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";u(a);oa=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Ba(a){return a.startsWith("data:application/octet-stream;base64,")}var D;D="debugtext-context-sapp-ui.wasm";if(!Ba(D)){var Ca=D;D=f.locateFile?f.locateFile(Ca,r):r+Ca}function Da(a){try{if(a==D&&v)return new Uint8Array(v);if(ia)return ia(a);throw"both async and sync fetching of the wasm failed";}catch(b){ma(b)}}
function Ea(a){if(!v&&(da||l)){if("function"==typeof fetch&&!a.startsWith("file://"))return fetch(a,{credentials:"same-origin"}).then(b=>{if(!b.ok)throw"failed to load wasm binary file at '"+a+"'";return b.arrayBuffer()}).catch(()=>Da(a));if(ha)return new Promise((b,c)=>{ha(a,d=>b(new Uint8Array(d)),c)})}return Promise.resolve().then(()=>Da(a))}function Fa(a,b,c){return Ea(a).then(d=>WebAssembly.instantiate(d,b)).then(d=>d).then(c,d=>{u("failed to asynchronously prepare wasm: "+d);ma(d)})}
function Ga(a,b){var c=D;v||"function"!=typeof WebAssembly.instantiateStreaming||Ba(c)||c.startsWith("file://")||ea||"function"!=typeof fetch?Fa(c,a,b):fetch(c,{credentials:"same-origin"}).then(d=>WebAssembly.instantiateStreaming(d,a).then(b,function(e){u("wasm streaming compile failed: "+e);u("falling back to ArrayBuffer instantiation");return Fa(c,a,b)}))}function ka(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}
function Ha(a){for(;0<a.length;)a.shift()(f)}var Ia="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function Ja(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&Ia)return Ia.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var k=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|k);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|k<<6|g:(e&7)<<18|k<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function E(a,b){return a?Ja(w,a,b):""}
function Ka(a){var b=La();a();Ma(b)}var Na=0;function Oa(){for(var a=F.length-1;0<=a;--a)Pa(a);F=[];Qa=[]}var Qa=[];function Ra(){if(Na&&Sa.mc)for(var a=0;a<Qa.length;++a){var b=Qa[a];Qa.splice(a,1);--a;b.Yc.apply(null,b.Nc)}}var F=[];function Pa(a){var b=F[a];b.target.removeEventListener(b.dc,b.Jc,b.ec);F.splice(a,1)}
function G(a){function b(d){++Na;Sa=a;Ra();a.hc(d);Ra();--Na}if(a.fc)a.Jc=b,a.target.addEventListener(a.dc,b,a.ec),F.push(a),Ta||(xa.push(Oa),Ta=!0);else for(var c=0;c<F.length;++c)F[c].target==a.target&&F[c].dc==a.dc&&Pa(c--)}function Ua(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}var Ta,Sa,Va,Wa,Xa,Ya,Za,$a,ab,bb=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];
function H(a){a=2<a?E(a):a;return bb[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function cb(a){return 0>bb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var db=[];function I(a){var b=db[a];b||(a>=db.length&&(db.length=a+1),db[a]=b=ta.get(a));return b}
function J(a,b,c){var d=w;if(!(0<c))return 0;var e=b;c=b+c-1;for(var k=0;k<a.length;++k){var g=a.charCodeAt(k);if(55296<=g&&57343>=g){var m=a.charCodeAt(++k);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(b>=c)break;d[b++]=g}else{if(2047>=g){if(b+1>=c)break;d[b++]=192|g>>6}else{if(65535>=g){if(b+2>=c)break;d[b++]=224|g>>12}else{if(b+3>=c)break;d[b++]=240|g>>18;d[b++]=128|g>>12&63}d[b++]=128|g>>6&63}d[b++]=128|g&63}}d[b]=0;return b-e}
function eb(a,b,c,d,e,k){Va||(Va=K(256));a={target:H(a),dc:k,fc:d,hc:function(g=event){var m=g.target.id?g.target.id:"",n=Va;J(Ua(g.target),n+0,128);J(m,n+128,128);I(d)(e,n,b)&&g.preventDefault()},ec:c};G(a)}
function fb(a,b,c,d,e,k){Wa||(Wa=K(176));a={target:H(a),mc:!0,dc:k,fc:d,hc:function(g){var m=Wa;A[m>>3]=g.timeStamp;var n=m>>2;x[n+2]=g.location;x[n+3]=g.ctrlKey;x[n+4]=g.shiftKey;x[n+5]=g.altKey;x[n+6]=g.metaKey;x[n+7]=g.repeat;x[n+8]=g.charCode;x[n+9]=g.keyCode;x[n+10]=g.which;J(g.key||"",m+44,32);J(g.code||"",m+76,32);J(g.char||"",m+108,32);J(g.locale||"",m+140,32);I(d)(e,m,b)&&g.preventDefault()},ec:c};G(a)}
function gb(a,b,c){A[a>>3]=b.timeStamp;a>>=2;x[a+2]=b.screenX;x[a+3]=b.screenY;x[a+4]=b.clientX;x[a+5]=b.clientY;x[a+6]=b.ctrlKey;x[a+7]=b.shiftKey;x[a+8]=b.altKey;x[a+9]=b.metaKey;qa[2*a+20]=b.button;qa[2*a+21]=b.buttons;x[a+11]=b.movementX;x[a+12]=b.movementY;c=cb(c);x[a+13]=b.clientX-c.left;x[a+14]=b.clientY-c.top}
function L(a,b,c,d,e,k){Xa||(Xa=K(72));a=H(a);G({target:a,mc:"mousemove"!=k&&"mouseenter"!=k&&"mouseleave"!=k,dc:k,fc:d,hc:function(g=event){gb(Xa,g,a);I(d)(e,Xa,b)&&g.preventDefault()},ec:c})}function hb(a,b,c,d,e){Ya||(Ya=K(260));G({target:a,dc:e,fc:d,hc:function(k=event){var g=Ya,m=document.pointerLockElement||document.kc||document.wc||document.uc;x[g>>2]=!!m;var n=m&&m.id?m.id:"";J(Ua(m),g+4,128);J(n,g+132,128);I(d)(20,g,b)&&k.preventDefault()},ec:c})}
function ib(a,b,c,d,e){G({target:a,dc:e,fc:d,hc:function(k=event){I(d)(38,0,b)&&k.preventDefault()},ec:c})}function jb(a,b,c,d){Za||(Za=K(36));a=H(a);G({target:a,dc:"resize",fc:d,hc:function(e=event){if(e.target==a){var k=document.body;if(k){var g=Za;x[g>>2]=e.detail;x[g+4>>2]=k.clientWidth;x[g+8>>2]=k.clientHeight;x[g+12>>2]=innerWidth;x[g+16>>2]=innerHeight;x[g+20>>2]=outerWidth;x[g+24>>2]=outerHeight;x[g+28>>2]=pageXOffset;x[g+32>>2]=pageYOffset;I(d)(10,g,b)&&e.preventDefault()}}},ec:c})}
function kb(a,b,c,d,e,k){$a||($a=K(1696));a=H(a);G({target:a,mc:"touchstart"==k||"touchend"==k,dc:k,fc:d,hc:function(g){for(var m,n={},p=g.touches,q=0;q<p.length;++q)m=p[q],m.xc=m.zc=0,n[m.identifier]=m;for(q=0;q<g.changedTouches.length;++q)m=g.changedTouches[q],m.xc=1,n[m.identifier]=m;for(q=0;q<g.targetTouches.length;++q)n[g.targetTouches[q].identifier].zc=1;p=$a;A[p>>3]=g.timeStamp;var t=p>>2;x[t+3]=g.ctrlKey;x[t+4]=g.shiftKey;x[t+5]=g.altKey;x[t+6]=g.metaKey;t+=7;var N=cb(a),V=0;for(q in n)if(m=
n[q],x[t]=m.identifier,x[t+1]=m.screenX,x[t+2]=m.screenY,x[t+3]=m.clientX,x[t+4]=m.clientY,x[t+5]=m.pageX,x[t+6]=m.pageY,x[t+7]=m.xc,x[t+8]=m.zc,x[t+9]=m.clientX-N.left,x[t+10]=m.clientY-N.top,t+=13,31<++V)break;x[p+8>>2]=V;I(d)(e,p,b)&&g.preventDefault()},ec:c})}
function lb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,k){b.drawArraysInstancedANGLE(c,d,e,k)},a.drawElementsInstanced=function(c,d,e,k,g){b.drawElementsInstancedANGLE(c,d,e,k,g)})}
function mb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function nb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function ob(a){a.Pc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function pb(a){a.Rc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function qb(a){a.Tc=a.getExtension("WEBGL_multi_draw")}var rb=1,sb=[],M=[],tb=[],O=[],P=[],Q=[],ub=[],vb=[],wb={},xb=4;function R(a){yb||(yb=a)}function zb(a){for(var b=rb++,c=a.length;c<b;c++)a[c]=null;return b}
function Ab(a,b){a.kc||(a.kc=a.getContext,a.getContext=function(d,e){e=a.kc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.yc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Bb(c,b):0}function Bb(a,b){var c=zb(vb),d={Qc:c,attributes:b,version:b.yc,qc:a};a.canvas&&(a.canvas.Mc=d);vb[c]=d;("undefined"==typeof b.vc||b.vc)&&Cb(d);return c}
function Cb(a){a||(a=S);if(!a.Lc){a.Lc=!0;var b=a.qc;lb(b);mb(b);nb(b);ob(b);pb(b);2<=a.version&&(b.tc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.tc)b.tc=b.getExtension("EXT_disjoint_timer_query");qb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var yb,S;function Db(a,b,c,d,e,k){a={target:H(a),dc:k,fc:d,hc:(g=event)=>{I(d)(e,0,b)&&g.preventDefault()},ec:c};G(a)}
function Eb(a,b,c,d){ab||(ab=K(104));G({target:a,mc:!0,dc:"wheel",fc:d,hc:function(e=event){var k=ab;gb(k,e,a);A[k+72>>3]=e.deltaX;A[k+80>>3]=e.deltaY;A[k+88>>3]=e.deltaZ;x[k+96>>2]=e.deltaMode;I(d)(9,k,b)&&e.preventDefault()},ec:c})}var Fb=["default","low-power","high-performance"],Gb=[null,[],[]],Hb=[];function T(a,b,c,d){for(var e=0;e<a;e++){var k=U[c](),g=k&&zb(d);k?(k.name=g,d[g]=k):R(1282);x[b+4*e>>2]=g}}
function Ib(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=U.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>S.version){R(1282);return}c=2*(U.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>S.version){R(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=U.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":R(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:R(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)x[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){R(1280);u("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:R(1280);u("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}x[b>>2]=c}else R(1281)}
function Jb(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);127>=d?b++:2047>=d?b+=2:55296<=d&&57343>=d?(b+=4,++c):b+=3}return b}function Kb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Lb(a){a-=5120;return 0==a?pa:1==a?w:2==a?qa:4==a?x:6==a?z:5==a||28922==a||28520==a||30779==a||30782==a?y:ra}function W(a){var b=U.Ic;if(b){var c=b.lc[a];"number"==typeof c&&(b.lc[a]=c=U.getUniformLocation(b,b.Gc[a]+(0<c?"["+c+"]":"")));return c}R(1282)}var X=[],Y=[];
function Mb(a){if(!noExitRuntime){if(f.onExit)f.onExit(a);oa=!0}h(a,new ka(a))}function Nb(a){var b=Jb(a)+1,c=Ob(b);J(a,c,b);return c}for(var U,Z=0;32>Z;++Z)Hb.push(Array(Z));var Pb=new Float32Array(288);for(Z=0;288>Z;++Z)X[Z]=Pb.subarray(0,Z+1);var Qb=new Int32Array(288);for(Z=0;288>Z;++Z)Y[Z]=Qb.subarray(0,Z+1);
var Xb={ma:function(){return 0},jb:function(){return 0},kb:function(){},i:function(){ma("")},ia:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},ja:function(a,b,c){a=H(a);if(!a)return-4;a=cb(a);A[b>>3]=a.width;A[c>>3]=a.height;return 0},fb:function(a,b,c){w.copyWithin(a,b,b+c)},ab:function(a,b){function c(d){I(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},eb:function(a){var b=w.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/
c);d=Math.min(d,a+100663296);var e=Math,k=e.min;d=Math.max(a,d);d+=(65536-d%65536)%65536;a:{var g=na.buffer;try{na.grow(k.call(e,2147483648,d)-g.byteLength+65535>>>16);sa();var m=1;break a}catch(n){}m=void 0}if(m)return!0}return!1},S:function(a,b,c,d){eb(a,b,c,d,12,"blur");return 0},ha:function(a,b,c){a=H(a);if(!a)return-4;a.width=b;a.height=c;return 0},T:function(a,b,c,d){eb(a,b,c,d,13,"focus");return 0},aa:function(a,b,c,d){fb(a,b,c,d,2,"keydown");return 0},_:function(a,b,c,d){fb(a,b,c,d,1,"keypress");
return 0},$:function(a,b,c,d){fb(a,b,c,d,3,"keyup");return 0},ga:function(a,b,c,d){L(a,b,c,d,5,"mousedown");return 0},da:function(a,b,c,d){L(a,b,c,d,33,"mouseenter");return 0},ca:function(a,b,c,d){L(a,b,c,d,34,"mouseleave");return 0},ea:function(a,b,c,d){L(a,b,c,d,8,"mousemove");return 0},fa:function(a,b,c,d){L(a,b,c,d,6,"mouseup");return 0},V:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.kc||document.body.wc||document.body.uc))return-1;a=H(a);if(!a)return-4;
hb(a,b,c,d,"pointerlockchange");hb(a,b,c,d,"mozpointerlockchange");hb(a,b,c,d,"webkitpointerlockchange");hb(a,b,c,d,"mspointerlockchange");return 0},U:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.kc||document.body.wc||document.body.uc))return-1;a=H(a);if(!a)return-4;ib(a,b,c,d,"pointerlockerror");ib(a,b,c,d,"mozpointerlockerror");ib(a,b,c,d,"webkitpointerlockerror");ib(a,b,c,d,"mspointerlockerror");return 0},bb:function(a,b,c,d){jb(a,b,c,d);return 0},W:function(a,
b,c,d){kb(a,b,c,d,25,"touchcancel");return 0},X:function(a,b,c,d){kb(a,b,c,d,23,"touchend");return 0},Y:function(a,b,c,d){kb(a,b,c,d,24,"touchmove");return 0},Z:function(a,b,c,d){kb(a,b,c,d,22,"touchstart");return 0},R:function(a,b,c,d){Db(a,b,c,d,31,"webglcontextlost");return 0},Q:function(a,b,c,d){Db(a,b,c,d,32,"webglcontextrestored");return 0},ba:function(a,b,c,d){a=H(a);return"undefined"!=typeof a.onwheel?(Eb(a,b,c,d),0):-1},_a:function(a,b){b>>=2;b={alpha:!!x[b],depth:!!x[b+1],stencil:!!x[b+
2],antialias:!!x[b+3],premultipliedAlpha:!!x[b+4],preserveDrawingBuffer:!!x[b+5],powerPreference:Fb[x[b+6]],failIfMajorPerformanceCaveat:!!x[b+7],yc:x[b+8],Sc:x[b+9],vc:x[b+10],Kc:x[b+11],Uc:x[b+12],Vc:x[b+13]};a=H(a);return!a||b.Kc?0:Ab(a,b)},Ya:function(a,b){a=vb[a];b=E(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&lb(U);"OES_vertex_array_object"==b&&mb(U);"WEBGL_draw_buffers"==b&&nb(U);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&ob(U);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==
b&&pb(U);"WEBGL_multi_draw"==b&&qb(U);return!!a.qc.getExtension(b)},$a:function(a){a>>=2;for(var b=0;14>b;++b)x[a+b]=0;x[a]=x[a+1]=x[a+3]=x[a+4]=x[a+8]=x[a+10]=1},Za:function(a){S=vb[a];f.Oc=U=S&&S.qc;return!a||U?0:-5},la:function(){return 52},ib:function(){return 52},db:function(){return 70},gb:function(a,b,c,d){for(var e=0,k=0;k<c;k++){var g=y[b>>2],m=y[b+4>>2];b+=8;for(var n=0;n<m;n++){var p=w[g+n],q=Gb[a];0===p||10===p?((1===a?la:u)(Ja(q,0)),q.length=0):q.push(p)}e+=m}y[d>>2]=e;return 0},g:function(a){U.activeTexture(a)},
E:function(a,b){U.attachShader(M[a],Q[b])},b:function(a,b){35051==a?U.sc=b:35052==a&&(U.jc=b);U.bindBuffer(a,sb[b])},h:function(a,b){U.bindFramebuffer(a,tb[b])},Ja:function(a,b){U.bindRenderbuffer(a,O[b])},a:function(a,b){U.bindTexture(a,P[b])},N:function(a){U.bindVertexArray(ub[a])},J:function(a,b,c,d){U.blendColor(a,b,c,d)},K:function(a,b){U.blendEquationSeparate(a,b)},L:function(a,b,c,d){U.blendFuncSeparate(a,b,c,d)},mb:function(a,b,c,d,e,k,g,m,n,p){U.blitFramebuffer(a,b,c,d,e,k,g,m,n,p)},La:function(a,
b,c,d){2<=S.version?c&&b?U.bufferData(a,w,d,c,b):U.bufferData(a,b,d):U.bufferData(a,c?w.subarray(c,c+b):b,d)},o:function(a,b,c,d){2<=S.version?c&&U.bufferSubData(a,b,w,d,c):U.bufferSubData(a,b,w.subarray(d,d+c))},sa:function(a){return U.checkFramebufferStatus(a)},Gb:function(a,b,c,d){U.clearBufferfi(a,b,c,d)},qa:function(a,b,c){U.clearBufferfv(a,b,z,c>>2)},Fb:function(a,b,c){U.clearBufferiv(a,b,x,c>>2)},l:function(a,b,c,d){U.colorMask(!!a,!!b,!!c,!!d)},va:function(a){U.compileShader(Q[a])},Fa:function(a,
b,c,d,e,k,g,m){2<=S.version?U.jc||!g?U.compressedTexImage2D(a,b,c,d,e,k,g,m):U.compressedTexImage2D(a,b,c,d,e,k,w,m,g):U.compressedTexImage2D(a,b,c,d,e,k,m?w.subarray(m,m+g):null)},Da:function(a,b,c,d,e,k,g,m,n){U.jc?U.compressedTexImage3D(a,b,c,d,e,k,g,m,n):U.compressedTexImage3D(a,b,c,d,e,k,g,w,n,m)},Ba:function(){var a=zb(M),b=U.createProgram();b.name=a;b.pc=b.nc=b.oc=0;b.rc=1;M[a]=b;return a},xa:function(a){var b=zb(Q);Q[b]=U.createShader(a);return b},G:function(a){U.cullFace(a)},Va:function(a,
b){for(var c=0;c<a;c++){var d=x[b+4*c>>2],e=sb[d];e&&(U.deleteBuffer(e),e.name=0,sb[d]=null,d==U.sc&&(U.sc=0),d==U.jc&&(U.jc=0))}},j:function(a,b){for(var c=0;c<a;++c){var d=x[b+4*c>>2],e=tb[d];e&&(U.deleteFramebuffer(e),e.name=0,tb[d]=null)}},y:function(a){if(a){var b=M[a];b?(U.deleteProgram(b),b.name=0,M[a]=null):R(1281)}},O:function(a,b){for(var c=0;c<a;c++){var d=x[b+4*c>>2],e=O[d];e&&(U.deleteRenderbuffer(e),e.name=0,O[d]=null)}},u:function(a){if(a){var b=Q[a];b?(U.deleteShader(b),Q[a]=null):
R(1281)}},P:function(a,b){for(var c=0;c<a;c++){var d=x[b+4*c>>2],e=P[d];e&&(U.deleteTexture(e),e.name=0,P[d]=null)}},Ta:function(a,b){for(var c=0;c<a;c++){var d=x[b+4*c>>2];U.deleteVertexArray(ub[d]);ub[d]=null}},x:function(a){U.depthFunc(a)},w:function(a){U.depthMask(!!a)},d:function(a){U.disable(a)},M:function(a){U.disableVertexAttribArray(a)},ob:function(a,b,c){U.drawArrays(a,b,c)},pb:function(a,b,c,d){U.drawArraysInstanced(a,b,c,d)},ra:function(a,b){for(var c=Hb[a],d=0;d<a;d++)c[d]=x[b+4*d>>2];
U.drawBuffers(c)},rb:function(a,b,c,d){U.drawElements(a,b,c,d)},sb:function(a,b,c,d,e){U.drawElementsInstanced(a,b,c,d,e)},f:function(a){U.enable(a)},Cb:function(a){U.enableVertexAttribArray(a)},ta:function(a,b,c,d){U.framebufferRenderbuffer(a,b,c,O[d])},k:function(a,b,c,d,e){U.framebufferTexture2D(a,b,c,P[d],e)},A:function(a,b,c,d,e){U.framebufferTextureLayer(a,b,P[c],d,e)},H:function(a){U.frontFace(a)},Ma:function(a,b){T(a,b,"createBuffer",sb)},ua:function(a,b){T(a,b,"createFramebuffer",tb)},Ka:function(a,
b){T(a,b,"createRenderbuffer",O)},Ga:function(a,b){T(a,b,"createTexture",P)},Sa:function(a,b){T(a,b,"createVertexArray",ub)},Ib:function(a,b){return U.getAttribLocation(M[a],E(b))},c:function(a,b){Ib(a,b)},ya:function(a,b,c,d){a=U.getProgramInfoLog(M[a]);null===a&&(a="(unknown error)");b=0<b&&d?J(a,d,b):0;c&&(x[c>>2]=b)},D:function(a,b,c){if(c)if(a>=rb)R(1281);else if(a=M[a],35716==b)a=U.getProgramInfoLog(a),null===a&&(a="(unknown error)"),x[c>>2]=a.length+1;else if(35719==b){if(!a.pc)for(b=0;b<U.getProgramParameter(a,
35718);++b)a.pc=Math.max(a.pc,U.getActiveUniform(a,b).name.length+1);x[c>>2]=a.pc}else if(35722==b){if(!a.nc)for(b=0;b<U.getProgramParameter(a,35721);++b)a.nc=Math.max(a.nc,U.getActiveAttrib(a,b).name.length+1);x[c>>2]=a.nc}else if(35381==b){if(!a.oc)for(b=0;b<U.getProgramParameter(a,35382);++b)a.oc=Math.max(a.oc,U.getActiveUniformBlockName(a,b).length+1);x[c>>2]=a.oc}else x[c>>2]=U.getProgramParameter(a,b);else R(1281)},Jb:function(a,b,c,d){a=U.getShaderInfoLog(Q[a]);null===a&&(a="(unknown error)");
b=0<b&&d?J(a,d,b):0;c&&(x[c>>2]=b)},B:function(a,b,c){c?35716==b?(a=U.getShaderInfoLog(Q[a]),null===a&&(a="(unknown error)"),x[c>>2]=a?a.length+1:0):35720==b?(a=U.getShaderSource(Q[a]),x[c>>2]=a?a.length+1:0):x[c>>2]=U.getShaderParameter(Q[a],b):R(1281)},Wa:function(a,b){if(2>S.version)return R(1282),0;var c=wb[a];if(c)return 0>b||b>=c.length?(R(1281),0):c[b];switch(a){case 7939:return c=U.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){var e=Jb(d)+1,
k=K(e);k&&J(d,k,e);return k}),c=wb[a]=c,0>b||b>=c.length?(R(1281),0):c[b];default:return R(1280),0}},n:function(a,b){b=E(b);if(a=M[a]){var c=a,d=c.lc,e=c.Hc,k;if(!d)for(c.lc=d={},c.Gc={},k=0;k<U.getProgramParameter(c,35718);++k){var g=U.getActiveUniform(c,k);var m=g.name;g=g.size;var n=Kb(m);n=0<n?m.slice(0,n):m;var p=c.rc;c.rc+=g;e[n]=[g,p];for(m=0;m<g;++m)d[p]=m,c.Gc[p++]=n}c=a.lc;d=0;e=b;k=Kb(b);0<k&&(d=parseInt(b.slice(k+1))>>>0,e=b.slice(0,k));if((e=a.Hc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||U.getUniformLocation(a,
b)))return d}else R(1281);return-1},lb:function(a,b,c){for(var d=Hb[b],e=0;e<b;e++)d[e]=x[c+4*e>>2];U.invalidateFramebuffer(a,d)},za:function(a){a=M[a];U.linkProgram(a);a.lc=0;a.Hc={}},Ra:function(a,b){3317==a&&(xb=b);U.pixelStorei(a,b)},I:function(a,b){U.polygonOffset(a,b)},nb:function(a){U.readBuffer(a)},Ha:function(a,b,c,d,e){U.renderbufferStorageMultisample(a,b,c,d,e)},r:function(a,b,c,d){U.scissor(a,b,c,d)},wa:function(a,b,c,d){for(var e="",k=0;k<b;++k){var g=d?x[d+4*k>>2]:-1;e+=E(x[c+4*k>>2],
0>g?void 0:g)}U.shaderSource(Q[a],e)},Pa:function(a,b,c){U.stencilFunc(a,b,c)},pa:function(a,b,c,d){U.stencilFuncSeparate(a,b,c,d)},v:function(a){U.stencilMask(a)},Oa:function(a,b,c){U.stencilOp(a,b,c)},oa:function(a,b,c,d){U.stencilOpSeparate(a,b,c,d)},Ea:function(a,b,c,d,e,k,g,m,n){if(2<=S.version)if(U.jc)U.texImage2D(a,b,c,d,e,k,g,m,n);else if(n){var p=Lb(m);U.texImage2D(a,b,c,d,e,k,g,m,p,n>>31-Math.clz32(p.BYTES_PER_ELEMENT))}else U.texImage2D(a,b,c,d,e,k,g,m,null);else{p=U;var q=p.texImage2D;
if(n){var t=Lb(m),N=31-Math.clz32(t.BYTES_PER_ELEMENT),V=xb;n=t.subarray(n>>N,n+e*(d*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[g-6402]||1)*(1<<N)+V-1&-V)>>N)}else n=null;q.call(p,a,b,c,d,e,k,g,m,n)}},Ca:function(a,b,c,d,e,k,g,m,n,p){if(U.jc)U.texImage3D(a,b,c,d,e,k,g,m,n,p);else if(p){var q=Lb(n);U.texImage3D(a,b,c,d,e,k,g,m,n,q,p>>31-Math.clz32(q.BYTES_PER_ELEMENT))}else U.texImage3D(a,b,c,d,e,k,g,m,n,null)},F:function(a,b,c){U.texParameterf(a,b,c)},e:function(a,b,c){U.texParameteri(a,
b,c)},Bb:function(a,b,c){if(2<=S.version)b&&U.uniform1fv(W(a),z,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=z[c+4*e>>2];else d=z.subarray(c>>2,c+4*b>>2);U.uniform1fv(W(a),d)}},C:function(a,b){U.uniform1i(W(a),b)},xb:function(a,b,c){if(2<=S.version)b&&U.uniform1iv(W(a),x,c>>2,b);else{if(288>=b)for(var d=Y[b-1],e=0;e<b;++e)d[e]=x[c+4*e>>2];else d=x.subarray(c>>2,c+4*b>>2);U.uniform1iv(W(a),d)}},Ab:function(a,b,c){if(2<=S.version)b&&U.uniform2fv(W(a),z,c>>2,2*b);else{if(144>=b)for(var d=
X[2*b-1],e=0;e<2*b;e+=2)d[e]=z[c+4*e>>2],d[e+1]=z[c+(4*e+4)>>2];else d=z.subarray(c>>2,c+8*b>>2);U.uniform2fv(W(a),d)}},wb:function(a,b,c){if(2<=S.version)b&&U.uniform2iv(W(a),x,c>>2,2*b);else{if(144>=b)for(var d=Y[2*b-1],e=0;e<2*b;e+=2)d[e]=x[c+4*e>>2],d[e+1]=x[c+(4*e+4)>>2];else d=x.subarray(c>>2,c+8*b>>2);U.uniform2iv(W(a),d)}},zb:function(a,b,c){if(2<=S.version)b&&U.uniform3fv(W(a),z,c>>2,3*b);else{if(96>=b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=z[c+4*e>>2],d[e+1]=z[c+(4*e+4)>>2],d[e+2]=z[c+(4*
e+8)>>2];else d=z.subarray(c>>2,c+12*b>>2);U.uniform3fv(W(a),d)}},vb:function(a,b,c){if(2<=S.version)b&&U.uniform3iv(W(a),x,c>>2,3*b);else{if(96>=b)for(var d=Y[3*b-1],e=0;e<3*b;e+=3)d[e]=x[c+4*e>>2],d[e+1]=x[c+(4*e+4)>>2],d[e+2]=x[c+(4*e+8)>>2];else d=x.subarray(c>>2,c+12*b>>2);U.uniform3iv(W(a),d)}},yb:function(a,b,c){if(2<=S.version)b&&U.uniform4fv(W(a),z,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=z;c>>=2;for(var k=0;k<4*b;k+=4){var g=c+k;d[k]=e[g];d[k+1]=e[g+1];d[k+2]=e[g+2];d[k+3]=e[g+3]}}else d=
z.subarray(c>>2,c+16*b>>2);U.uniform4fv(W(a),d)}},ub:function(a,b,c){if(2<=S.version)b&&U.uniform4iv(W(a),x,c>>2,4*b);else{if(72>=b)for(var d=Y[4*b-1],e=0;e<4*b;e+=4)d[e]=x[c+4*e>>2],d[e+1]=x[c+(4*e+4)>>2],d[e+2]=x[c+(4*e+8)>>2],d[e+3]=x[c+(4*e+12)>>2];else d=x.subarray(c>>2,c+16*b>>2);U.uniform4iv(W(a),d)}},tb:function(a,b,c,d){if(2<=S.version)b&&U.uniformMatrix4fv(W(a),!!c,z,d>>2,16*b);else{if(18>=b){var e=X[16*b-1],k=z;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=k[m];e[g+1]=k[m+1];e[g+2]=k[m+
2];e[g+3]=k[m+3];e[g+4]=k[m+4];e[g+5]=k[m+5];e[g+6]=k[m+6];e[g+7]=k[m+7];e[g+8]=k[m+8];e[g+9]=k[m+9];e[g+10]=k[m+10];e[g+11]=k[m+11];e[g+12]=k[m+12];e[g+13]=k[m+13];e[g+14]=k[m+14];e[g+15]=k[m+15]}}else e=z.subarray(d>>2,d+64*b>>2);U.uniformMatrix4fv(W(a),!!c,e)}},m:function(a){a=M[a];U.useProgram(a);U.Ic=a},Db:function(a,b){U.vertexAttribDivisor(a,b)},Eb:function(a,b,c,d,e,k){U.vertexAttribPointer(a,b,c,!!d,e,k)},s:function(a,b,c,d){U.viewport(a,b,c,d)},Xa:function(){f.Ac=a=>{0!=Rb()&&(a.preventDefault(),
a.returnValue=" ")};window.addEventListener("beforeunload",f.Ac)},Qa:function(){f.Fc=a=>{const b=a.clipboardData.getData("text");Ka(()=>{const c=Nb(b);Sb(c)})};window.addEventListener("paste",f.Fc)},Aa:function(a){f.Wc=[];a=E(a);a=document.getElementById(a);f.Bc=b=>{b.stopPropagation();b.preventDefault()};f.Cc=b=>{b.stopPropagation();b.preventDefault()};f.Dc=b=>{b.stopPropagation();b.preventDefault()};f.Ec=b=>{b.stopPropagation();b.preventDefault();const c=b.dataTransfer.files;f.Xc=c;Tb(c.length);
for(let d=0;d<c.length;d++)Ka(()=>{const e=Nb(c[d].name);Ub(d,e)});Vb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.Bc,!1);a.addEventListener("dragleave",f.Cc,!1);a.addEventListener("dragover",f.Dc,!1);a.addEventListener("drop",f.Ec,!1)},hb:function(){const a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},t:function(){const a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){Wb()});
document.body.append(a)},q:function(){document.getElementById("_sokol_app_input_element").focus()},Hb:function(a){a=E(a);f.ic=document.getElementById(a);f.ic||console.log("sokol_app.h: invalid target:"+a);f.ic.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Ua:function(){window.removeEventListener("beforeunload",f.Ac)},Na:function(){window.removeEventListener("paste",f.Fc)},Kb:function(a){a=E(a);a=document.getElementById(a);a.removeEventListener("dragenter",
f.Bc);a.removeEventListener("dragleave",f.Cc);a.removeEventListener("dragover",f.Dc);a.removeEventListener("drop",f.Ec)},z:function(){f.ic&&f.ic.requestPointerLock&&f.ic.requestPointerLock()},qb:function(a,b){if(f.ic){if(0===b)a="none";else switch(a){case 0:a="auto";break;case 1:a="default";break;case 2:a="text";break;case 3:a="crosshair";break;case 4:a="pointer";break;case 5:a="ew-resize";break;case 6:a="ns-resize";break;case 7:a="nwse-resize";break;case 8:a="nesw-resize";break;case 9:a="all-scroll";
break;case 10:a="not-allowed";break;default:a="auto"}f.ic.style.cursor=a}},cb:function(a,b,c){const d=document.createElement("canvas");d.width=a;d.height=b;const e=d.getContext("2d"),k=e.createImageData(a,b);k.data.set(w.subarray(c,c+a*b*4));e.putImageData(k,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},p:function(){document.getElementById("_sokol_app_input_element").blur()},Ia:function(a){a=E(a);const b=document.createElement("textarea");
b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},na:function(){return navigator.userAgent.includes("Macintosh")?1:0},ka:function(a,b){b=E(b);switch(a){case 0:console.error(b);break;case 1:console.error(b);break;case 2:console.warn(b);
break;default:console.info(b)}}};
(function(){function a(c){c=c.exports;f.asm=c;na=f.asm.Lb;sa();ta=f.asm.$b;va.unshift(f.asm.Mb);B--;f.monitorRunDependencies&&f.monitorRunDependencies(B);if(0==B&&(null!==Aa&&(clearInterval(Aa),Aa=null),C)){var d=C;C=null;d()}return c}var b={a:Xb};B++;f.monitorRunDependencies&&f.monitorRunDependencies(B);if(f.instantiateWasm)try{return f.instantiateWasm(b,a)}catch(c){return u("Module.instantiateWasm callback failed with error: "+c),!1}Ga(b,function(c){a(c.instance)});return{}})();
function K(){return(K=f.asm.Nb).apply(null,arguments)}
var Wb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Wb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.Ob).apply(null,arguments)},Sb=f.__sapp_emsc_onpaste=function(){return(Sb=f.__sapp_emsc_onpaste=f.asm.Pb).apply(null,arguments)},Rb=f.__sapp_html5_get_ask_leave_site=function(){return(Rb=f.__sapp_html5_get_ask_leave_site=f.asm.Qb).apply(null,arguments)},Tb=f.__sapp_emsc_begin_drop=function(){return(Tb=f.__sapp_emsc_begin_drop=f.asm.Rb).apply(null,arguments)},Ub=f.__sapp_emsc_drop=function(){return(Ub=
f.__sapp_emsc_drop=f.asm.Sb).apply(null,arguments)},Vb=f.__sapp_emsc_end_drop=function(){return(Vb=f.__sapp_emsc_end_drop=f.asm.Tb).apply(null,arguments)};f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.Ub).apply(null,arguments)};var Yb=f._main=function(){return(Yb=f._main=f.asm.Vb).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.Wb).apply(null,arguments)};
f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.Xb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.Yb).apply(null,arguments)};f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.Zb).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm._b).apply(null,arguments)};
function La(){return(La=f.asm.ac).apply(null,arguments)}function Ma(){return(Ma=f.asm.bc).apply(null,arguments)}function Ob(){return(Ob=f.asm.cc).apply(null,arguments)}f.___start_em_js=54920;f.___stop_em_js=64533;var Zb;C=function $b(){Zb||ac();Zb||(C=$b)};function bc(a=[]){var b=Yb;a.unshift(ca);var c=a.length,d=Ob(4*(c+1)),e=d>>2;a.forEach(g=>{x[e++]=Nb(g)});x[e]=0;try{var k=b(c,d);Mb(k)}catch(g){g instanceof ka||"unwind"==g||h(1,g)}}
function ac(){var a=ba;function b(){if(!Zb&&(Zb=!0,f.calledRun=!0,!oa)){Ha(va);Ha(wa);if(f.onRuntimeInitialized)f.onRuntimeInitialized();cc&&bc(a);if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;){var c=f.postRun.shift();ya.unshift(c)}Ha(ya)}}if(!(0<B)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)za();Ha(ua);0<B||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},
1)):b())}}if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var cc=!0;f.noInitialRun&&(cc=!1);ac();
