
var f;f||(f=typeof Module !== 'undefined' ? Module : {});var k={},l;for(l in f)f.hasOwnProperty(l)&&(k[l]=f[l]);var aa=[],ba="./this.program";function p(a,b){throw b;}var ca="object"===typeof window,q="function"===typeof importScripts,t="",da,w,ea,x,y;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)t=q?require("path").dirname(t)+"/":__dirname+"/",da=function(a,b){x||(x=require("fs"));y||(y=require("path"));a=y.normalize(a);return x.readFileSync(a,b?null:"utf8")},ea=function(a){a=da(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||z("Assertion failed: undefined");return a},w=function(a,b,c){x||(x=require("fs"));y||(y=require("path"));a=y.normalize(a);x.readFile(a,function(d,e){d?c(d):b(e.buffer)})},
1<process.argv.length&&(ba=process.argv[1].replace(/\\/g,"/")),aa=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=f),process.on("uncaughtException",function(a){if(!(a instanceof fa))throw a;}),process.on("unhandledRejection",function(a){throw a;}),p=function(a,b){if(noExitRuntime||0<ha)throw process.exitCode=a,b;b instanceof fa||A("exiting due to exception: "+b);process.exit(a)},f.inspect=function(){return"[Emscripten Module object]"};else if(ca||q)q?t=self.location.href:"undefined"!==
typeof document&&document.currentScript&&(t=document.currentScript.src),t=0!==t.indexOf("blob:")?t.substr(0,t.replace(/[?#].*/,"").lastIndexOf("/")+1):"",da=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},q&&(ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),w=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==
d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};f.print||console.log.bind(console);var A=f.printErr||console.warn.bind(console);for(l in k)k.hasOwnProperty(l)&&(f[l]=k[l]);k=null;f.arguments&&(aa=f.arguments);f.thisProgram&&(ba=f.thisProgram);f.quit&&(p=f.quit);var B;f.wasmBinary&&(B=f.wasmBinary);var noExitRuntime=f.noExitRuntime||!0;"object"!==typeof WebAssembly&&z("no native wasm support detected");var ia,ja=!1;
function ka(a){var b=f["_"+a];b||z("Assertion failed: Cannot call unknown function "+(a+", make sure it is exported"));return b}function la(a,b,c){var d={string:function(n){var r=0;if(null!==n&&void 0!==n&&0!==n){var v=(n.length<<2)+1;r=C(v);D(n,E,r,v)}return r},array:function(n){var r=C(n.length);ma.set(n,r);return r}};a=ka(a);var e=[],h=0;if(c)for(var g=0;g<c.length;g++){var m=d[b[g]];m?(0===h&&(h=na()),e[g]=m(c[g])):e[g]=c[g]}b=a.apply(null,e);b=function(n){0!==h&&oa(h);return n}(b)}
var pa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function F(a,b){if(a){var c=E,d=a+b;for(b=a;c[b]&&!(b>=d);)++b;if(16<b-a&&c.subarray&&pa)a=pa.decode(c.subarray(a,b));else{for(d="";a<b;){var e=c[a++];if(e&128){var h=c[a++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|h);else{var g=c[a++]&63;e=224==(e&240)?(e&15)<<12|h<<6|g:(e&7)<<18|h<<12|g<<6|c[a++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}a=d}}else a="";return a}
function D(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var h=0;h<a.length;++h){var g=a.charCodeAt(h);if(55296<=g&&57343>=g){var m=a.charCodeAt(++h);g=65536+((g&1023)<<10)|m&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function qa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function ra(a){var b=qa(a)+1,c=C(b);D(a,ma,c,b);return c}var sa,ma,E,ta,G,H,I;
function ua(){var a=ia.buffer;sa=a;f.HEAP8=ma=new Int8Array(a);f.HEAP16=ta=new Int16Array(a);f.HEAP32=G=new Int32Array(a);f.HEAPU8=E=new Uint8Array(a);f.HEAPU16=new Uint16Array(a);f.HEAPU32=new Uint32Array(a);f.HEAPF32=H=new Float32Array(a);f.HEAPF64=I=new Float64Array(a)}var va,wa=[],xa=[],ya=[],za=[],Aa=[],ha=0;function Ba(){var a=f.preRun.shift();wa.unshift(a)}var J=0,Ca=null,K=null;f.preloadedImages={};f.preloadedAudios={};
function z(a){if(f.onAbort)f.onAbort(a);a="Aborted("+a+")";A(a);ja=!0;throw new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS=1 for more info.");}function Da(){return L.startsWith("data:application/octet-stream;base64,")}var L;L="instancing-sapp.wasm";if(!Da()){var Ea=L;L=f.locateFile?f.locateFile(Ea,t):t+Ea}function Fa(){var a=L;try{if(a==L&&B)return new Uint8Array(B);if(ea)return ea(a);throw"both async and sync fetching of the wasm failed";}catch(b){z(b)}}
function Ga(){if(!B&&(ca||q)){if("function"===typeof fetch&&!L.startsWith("file://"))return fetch(L,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+L+"'";return a.arrayBuffer()}).catch(function(){return Fa()});if(w)return new Promise(function(a,b){w(L,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Fa()})}
function Ha(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(f);else{var c=b.nc;"number"===typeof c?void 0===b.Kb?M(c)():M(c)(b.Kb):c(void 0===b.Kb?null:b.Kb)}}}var Ia=[];function M(a){var b=Ia[a];b||(a>=Ia.length&&(Ia.length=a+1),Ia[a]=b=va.get(a));return b}var Ja=0;function Ka(){for(var a=N.length-1;0<=a;--a)La(a);N=[];Ma=[]}var Ma=[];function Na(){if(Ja&&Oa.Fb)for(var a=0;a<Ma.length;++a){var b=Ma[a];Ma.splice(a,1);--a;b.wc.apply(null,b.kc)}}var N=[];
function La(a){var b=N[a];b.target.removeEventListener(b.zb,b.fc,b.Ab);N.splice(a,1)}function O(a){function b(d){++Ja;Oa=a;Na();a.Cb(d);Na();--Ja}if(a.Bb)a.fc=b,a.target.addEventListener(a.zb,b,a.Ab),N.push(a),Pa||(za.push(Ka),Pa=!0);else for(var c=0;c<N.length;++c)N[c].target==a.target&&N[c].zb==a.zb&&La(c--)}function Qa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Pa,Oa,Ra,Sa,Ta,Ua,Va,Wa,Xa,Ya=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function P(a){a=2<a?F(a):a;return Ya[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function Za(a){return 0>Ya.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function $a(a,b,c,d,e,h){Ra||(Ra=Q(256));a={target:P(a),zb:h,Bb:d,Cb:function(g){g=g||event;var m=g.target.id?g.target.id:"",n=Ra;D(Qa(g.target),E,n+0,128);D(m,E,n+128,128);M(d)(e,n,b)&&g.preventDefault()},Ab:c};O(a)}
function ab(a,b,c,d,e,h){Sa||(Sa=Q(176));a={target:P(a),Fb:!0,zb:h,Bb:d,Cb:function(g){var m=Sa;I[m>>3]=g.timeStamp;var n=m>>2;G[n+2]=g.location;G[n+3]=g.ctrlKey;G[n+4]=g.shiftKey;G[n+5]=g.altKey;G[n+6]=g.metaKey;G[n+7]=g.repeat;G[n+8]=g.charCode;G[n+9]=g.keyCode;G[n+10]=g.which;D(g.key||"",E,m+44,32);D(g.code||"",E,m+76,32);D(g.char||"",E,m+108,32);D(g.locale||"",E,m+140,32);M(d)(e,m,b)&&g.preventDefault()},Ab:c};O(a)}
function bb(a,b,c){I[a>>3]=b.timeStamp;a>>=2;G[a+2]=b.screenX;G[a+3]=b.screenY;G[a+4]=b.clientX;G[a+5]=b.clientY;G[a+6]=b.ctrlKey;G[a+7]=b.shiftKey;G[a+8]=b.altKey;G[a+9]=b.metaKey;ta[2*a+20]=b.button;ta[2*a+21]=b.buttons;G[a+11]=b.movementX;G[a+12]=b.movementY;c=Za(c);G[a+13]=b.clientX-c.left;G[a+14]=b.clientY-c.top}
function R(a,b,c,d,e,h){Ta||(Ta=Q(72));a=P(a);O({target:a,Fb:"mousemove"!=h&&"mouseenter"!=h&&"mouseleave"!=h,zb:h,Bb:d,Cb:function(g){g=g||event;bb(Ta,g,a);M(d)(e,Ta,b)&&g.preventDefault()},Ab:c})}function cb(a,b,c,d,e){Ua||(Ua=Q(260));O({target:a,zb:e,Bb:d,Cb:function(h){h=h||event;var g=Ua,m=document.pointerLockElement||document.dc||document.Nb||document.Mb;G[g>>2]=!!m;var n=m&&m.id?m.id:"";D(Qa(m),E,g+4,128);D(n,E,g+132,128);M(d)(20,g,b)&&h.preventDefault()},Ab:c})}
function db(a,b,c,d,e){O({target:a,zb:e,Bb:d,Cb:function(h){h=h||event;M(d)(38,0,b)&&h.preventDefault()},Ab:c})}
function eb(a,b,c,d){Va||(Va=Q(36));a=P(a);O({target:a,zb:"resize",Bb:d,Cb:function(e){e=e||event;if(e.target==a){var h=document.body;if(h){var g=Va;G[g>>2]=e.detail;G[g+4>>2]=h.clientWidth;G[g+8>>2]=h.clientHeight;G[g+12>>2]=innerWidth;G[g+16>>2]=innerHeight;G[g+20>>2]=outerWidth;G[g+24>>2]=outerHeight;G[g+28>>2]=pageXOffset;G[g+32>>2]=pageYOffset;M(d)(10,g,b)&&e.preventDefault()}}},Ab:c})}
function fb(a,b,c,d,e,h){Wa||(Wa=Q(1696));a=P(a);O({target:a,Fb:"touchstart"==h||"touchend"==h,zb:h,Bb:d,Cb:function(g){for(var m,n={},r=g.touches,v=0;v<r.length;++v)m=r[v],m.Tb=m.Vb=0,n[m.identifier]=m;for(v=0;v<g.changedTouches.length;++v)m=g.changedTouches[v],m.Tb=1,n[m.identifier]=m;for(v=0;v<g.targetTouches.length;++v)n[g.targetTouches[v].identifier].Vb=1;r=Wa;I[r>>3]=g.timeStamp;var u=r>>2;G[u+3]=g.ctrlKey;G[u+4]=g.shiftKey;G[u+5]=g.altKey;G[u+6]=g.metaKey;u+=7;var ib=Za(a),jb=0;for(v in n)if(m=
n[v],G[u]=m.identifier,G[u+1]=m.screenX,G[u+2]=m.screenY,G[u+3]=m.clientX,G[u+4]=m.clientY,G[u+5]=m.pageX,G[u+6]=m.pageY,G[u+7]=m.Tb,G[u+8]=m.Vb,G[u+9]=m.clientX-ib.left,G[u+10]=m.clientY-ib.top,u+=13,31<++jb)break;G[r+8>>2]=jb;M(d)(e,r,b)&&g.preventDefault()},Ab:c})}function gb(a,b,c,d,e,h){a={target:P(a),zb:h,Bb:d,Cb:function(g){g=g||event;M(d)(e,0,b)&&g.preventDefault()},Ab:c};O(a)}
function hb(a,b,c,d){Xa||(Xa=Q(104));O({target:a,Fb:!0,zb:"wheel",Bb:d,Cb:function(e){e=e||event;var h=Xa;bb(h,e,a);I[h+72>>3]=e.deltaX;I[h+80>>3]=e.deltaY;I[h+88>>3]=e.deltaZ;G[h+96>>2]=e.deltaMode;M(d)(9,h,b)&&e.preventDefault()},Ab:c})}
function kb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,h){b.drawArraysInstancedANGLE(c,d,e,h)},a.drawElementsInstanced=function(c,d,e,h,g){b.drawElementsInstancedANGLE(c,d,e,h,g)})}
function lb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function mb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function nb(a){a.mc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function ob(a){a.pc=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function pb(a){a.rc=a.getExtension("WEBGL_multi_draw")}var qb=1,rb=[],S=[],sb=[],tb=[],ub=[],T=[],vb=[],wb=[],xb={},yb={};function U(a){zb||(zb=a)}function Ab(a){for(var b=qb++,c=a.length;c<b;c++)a[c]=null;return b}
function Bb(a,b){a.Sb||(a.Sb=a.getContext,a.getContext=function(d,e){e=a.Sb(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Ub?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Cb(c,b):0}function Cb(a,b){var c=Ab(wb),d={oc:c,attributes:b,version:b.Ub,Jb:a};a.canvas&&(a.canvas.jc=d);wb[c]=d;("undefined"===typeof b.Rb||b.Rb)&&Db(d);return c}
function Db(a){a||(a=V);if(!a.ic){a.ic=!0;var b=a.Jb;kb(b);lb(b);mb(b);nb(b);ob(b);2<=a.version&&(b.Qb=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Qb)b.Qb=b.getExtension("EXT_disjoint_timer_query");pb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var zb,V,Eb=["default","low-power","high-performance"];
function Fb(a,b,c,d){for(var e=0;e<a;e++){var h=W[c](),g=h&&Ab(d);h?(h.name=g,d[g]=h):U(1282);G[b+4*e>>2]=g}}
function Gb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=W.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>V.version){U(1282);return}c=2*(W.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>V.version){U(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=W.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":U(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:U(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)G[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){U(1280);A("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:U(1280);A("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}G[b>>2]=c}else U(1281)}
function X(a){var b=qa(a)+1,c=Q(b);D(a,E,c,b);return c}function Hb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Y(a){var b=W.ec;if(b){var c=b.Eb[a];"number"===typeof c&&(b.Eb[a]=c=W.getUniformLocation(b,b.bc[a]+(0<c?"["+c+"]":"")));return c}U(1282)}for(var Z=[],W,Ib=new Float32Array(288),Jb=0;288>Jb;++Jb)Z[Jb]=Ib.subarray(0,Jb+1);
var Ob={S:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},ia:function(a,b,c){a=P(a);if(!a)return-4;a=Za(a);I[b>>3]=a.width;I[c>>3]=a.height;return 0},Va:function(a,b,c){E.copyWithin(a,b,b+c)},Ha:function(a,b){function c(d){M(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},Wa:function(a){var b=E.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ia.grow(Math.min(2147483648,
d)-sa.byteLength+65535>>>16);ua();var e=1;break a}catch(h){}e=void 0}if(e)return!0}return!1},T:function(a,b,c,d){$a(a,b,c,d,12,"blur");return 0},P:function(a,b,c){a=P(a);if(!a)return-4;a.width=b;a.height=c;return 0},U:function(a,b,c,d){$a(a,b,c,d,13,"focus");return 0},ba:function(a,b,c,d){ab(a,b,c,d,2,"keydown");return 0},$:function(a,b,c,d){ab(a,b,c,d,1,"keypress");return 0},aa:function(a,b,c,d){ab(a,b,c,d,3,"keyup");return 0},ha:function(a,b,c,d){R(a,b,c,d,5,"mousedown");return 0},ea:function(a,
b,c,d){R(a,b,c,d,33,"mouseenter");return 0},da:function(a,b,c,d){R(a,b,c,d,34,"mouseleave");return 0},fa:function(a,b,c,d){R(a,b,c,d,8,"mousemove");return 0},ga:function(a,b,c,d){R(a,b,c,d,6,"mouseup");return 0},W:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.dc||document.body.Nb||document.body.Mb))return-1;a=P(a);if(!a)return-4;cb(a,b,c,d,"pointerlockchange");cb(a,b,c,d,"mozpointerlockchange");cb(a,b,c,d,"webkitpointerlockchange");cb(a,b,c,d,"mspointerlockchange");
return 0},V:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.dc||document.body.Nb||document.body.Mb))return-1;a=P(a);if(!a)return-4;db(a,b,c,d,"pointerlockerror");db(a,b,c,d,"mozpointerlockerror");db(a,b,c,d,"webkitpointerlockerror");db(a,b,c,d,"mspointerlockerror");return 0},Ua:function(a,b,c,d){eb(a,b,c,d);return 0},X:function(a,b,c,d){fb(a,b,c,d,25,"touchcancel");return 0},Y:function(a,b,c,d){fb(a,b,c,d,23,"touchend");return 0},Z:function(a,b,c,d){fb(a,b,c,d,24,
"touchmove");return 0},_:function(a,b,c,d){fb(a,b,c,d,22,"touchstart");return 0},R:function(a,b,c,d){gb(a,b,c,d,31,"webglcontextlost");return 0},Q:function(a,b,c,d){gb(a,b,c,d,32,"webglcontextrestored");return 0},ca:function(a,b,c,d){a=P(a);return"undefined"!==typeof a.onwheel?(hb(a,b,c,d),0):-1},F:function(a,b){b>>=2;b={alpha:!!G[b],depth:!!G[b+1],stencil:!!G[b+2],antialias:!!G[b+3],premultipliedAlpha:!!G[b+4],preserveDrawingBuffer:!!G[b+5],powerPreference:Eb[G[b+6]],failIfMajorPerformanceCaveat:!!G[b+
7],Ub:G[b+8],qc:G[b+9],Rb:G[b+10],hc:G[b+11],sc:G[b+12],tc:G[b+13]};a=P(a);return!a||b.hc?0:Bb(a,b)},pa:function(a,b){a=wb[a];b=F(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&kb(W);"OES_vertex_array_object"==b&&lb(W);"WEBGL_draw_buffers"==b&&mb(W);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&nb(W);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&ob(W);"WEBGL_multi_draw"==b&&pb(W);return!!a.Jb.getExtension(b)},Ea:function(a){a>>=2;for(var b=0;14>b;++b)G[a+
b]=0;G[a]=G[a+1]=G[a+3]=G[a+4]=G[a+8]=G[a+10]=1},wa:function(a){V=wb[a];f.lc=W=V&&V.Jb;return!a||W?0:-5},b:function(a){W.activeTexture(a)},D:function(a,b){W.attachShader(S[a],T[b])},c:function(a,b){35051==a?W.Ob=b:35052==a&&(W.Pb=b);W.bindBuffer(a,rb[b])},g:function(a,b){W.bindFramebuffer(a,sb[b])},a:function(a,b){W.bindTexture(a,ub[b])},M:function(a){W.bindVertexArray(vb[a])},I:function(a,b,c,d){W.blendColor(a,b,c,d)},J:function(a,b){W.blendEquationSeparate(a,b)},K:function(a,b,c,d){W.blendFuncSeparate(a,
b,c,d)},p:function(a,b,c,d,e,h,g,m,n,r){W.blitFramebuffer(a,b,c,d,e,h,g,m,n,r)},Aa:function(a,b,c,d){2<=V.version?c?W.bufferData(a,E,d,c,b):W.bufferData(a,b,d):W.bufferData(a,c?E.subarray(c,c+b):b,d)},k:function(a,b,c,d){2<=V.version?W.bufferSubData(a,b,E,d,c):W.bufferSubData(a,b,E.subarray(d,d+c))},ma:function(a){W.clear(a)},z:function(a,b,c,d){W.clearColor(a,b,c,d)},y:function(a){W.clearDepth(a)},na:function(a){W.clearStencil(a)},i:function(a,b,c,d){W.colorMask(!!a,!!b,!!c,!!d)},ta:function(a){W.compileShader(T[a])},
za:function(){var a=Ab(S),b=W.createProgram();b.name=a;b.Ib=b.Gb=b.Hb=0;b.Lb=1;S[a]=b;return a},va:function(a){var b=Ab(T);T[b]=W.createShader(a);return b},E:function(a){W.cullFace(a)},Ja:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],e=rb[d];e&&(W.deleteBuffer(e),e.name=0,rb[d]=null,d==W.Ob&&(W.Ob=0),d==W.Pb&&(W.Pb=0))}},h:function(a,b){for(var c=0;c<a;++c){var d=G[b+4*c>>2],e=sb[d];e&&(W.deleteFramebuffer(e),e.name=0,sb[d]=null)}},N:function(a){if(a){var b=S[a];b?(W.deleteProgram(b),b.name=
0,S[a]=null):U(1281)}},O:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],e=tb[d];e&&(W.deleteRenderbuffer(e),e.name=0,tb[d]=null)}},r:function(a){if(a){var b=T[a];b?(W.deleteShader(b),T[a]=null):U(1281)}},Ia:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2],e=ub[d];e&&(W.deleteTexture(e),e.name=0,ub[d]=null)}},Ga:function(a,b){for(var c=0;c<a;c++){var d=G[b+4*c>>2];W.deleteVertexArray(vb[d]);vb[d]=null}},u:function(a){W.depthFunc(a)},t:function(a){W.depthMask(!!a)},e:function(a){W.disable(a)},
L:function(a){W.disableVertexAttribArray(a)},Ya:function(a,b,c){W.drawArrays(a,b,c)},Xa:function(a,b,c,d){W.drawArraysInstanced(a,b,c,d)},_a:function(a,b,c,d){W.drawElements(a,b,c,d)},Za:function(a,b,c,d,e){W.drawElementsInstanced(a,b,c,d,e)},f:function(a){W.enable(a)},ja:function(a){W.enableVertexAttribArray(a)},G:function(a){W.frontFace(a)},Ba:function(a,b){Fb(a,b,"createBuffer",rb)},Fa:function(a,b){Fb(a,b,"createVertexArray",vb)},ra:function(a,b){return W.getAttribLocation(S[a],F(b))},d:function(a,
b){Gb(a,b)},xa:function(a,b,c,d){a=W.getProgramInfoLog(S[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(G[c>>2]=b)},C:function(a,b,c){if(c)if(a>=qb)U(1281);else if(a=S[a],35716==b)a=W.getProgramInfoLog(a),null===a&&(a="(unknown error)"),G[c>>2]=a.length+1;else if(35719==b){if(!a.Ib)for(b=0;b<W.getProgramParameter(a,35718);++b)a.Ib=Math.max(a.Ib,W.getActiveUniform(a,b).name.length+1);G[c>>2]=a.Ib}else if(35722==b){if(!a.Gb)for(b=0;b<W.getProgramParameter(a,35721);++b)a.Gb=Math.max(a.Gb,
W.getActiveAttrib(a,b).name.length+1);G[c>>2]=a.Gb}else if(35381==b){if(!a.Hb)for(b=0;b<W.getProgramParameter(a,35382);++b)a.Hb=Math.max(a.Hb,W.getActiveUniformBlockName(a,b).length+1);G[c>>2]=a.Hb}else G[c>>2]=W.getProgramParameter(a,b);else U(1281)},sa:function(a,b,c,d){a=W.getShaderInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(G[c>>2]=b)},A:function(a,b,c){c?35716==b?(a=W.getShaderInfoLog(T[a]),null===a&&(a="(unknown error)"),G[c>>2]=a?a.length+1:0):35720==b?(a=W.getShaderSource(T[a]),
G[c>>2]=a?a.length+1:0):G[c>>2]=W.getShaderParameter(T[a],b):U(1281)},La:function(a){var b=xb[a];if(!b){switch(a){case 7939:b=W.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=X(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=W.getParameter(a))||U(1280);b=b&&X(b);break;case 7938:b=W.getParameter(7938);b=2<=V.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=X(b);break;case 35724:b=W.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);
null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=X(b);break;default:U(1280)}xb[a]=b}return b},Ka:function(a,b){if(2>V.version)return U(1282),0;var c=yb[a];if(c)return 0>b||b>=c.length?(U(1281),0):c[b];switch(a){case 7939:return c=W.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return X(d)}),c=yb[a]=c,0>b||b>=c.length?(U(1281),0):c[b];default:return U(1280),0}},j:function(a,b){b=F(b);if(a=S[a]){var c=a,d=c.Eb,e=c.cc,h;
if(!d)for(c.Eb=d={},c.bc={},h=0;h<W.getProgramParameter(c,35718);++h){var g=W.getActiveUniform(c,h);var m=g.name;g=g.size;var n=Hb(m);n=0<n?m.slice(0,n):m;var r=c.Lb;c.Lb+=g;e[n]=[g,r];for(m=0;m<g;++m)d[r]=m,c.bc[r++]=n}c=a.Eb;d=0;e=b;h=Hb(b);0<h&&(d=parseInt(b.slice(h+1))>>>0,e=b.slice(0,h));if((e=a.cc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||W.getUniformLocation(a,b)))return d}else U(1281);return-1},ya:function(a){a=S[a];W.linkProgram(a);a.Eb=0;a.cc={}},H:function(a,b){W.polygonOffset(a,b)},q:function(a){W.readBuffer(a)},
oa:function(a,b,c,d){W.scissor(a,b,c,d)},ua:function(a,b,c,d){for(var e="",h=0;h<b;++h){var g=d?G[d+4*h>>2]:-1;e+=F(G[c+4*h>>2],0>g?void 0:g)}W.shaderSource(T[a],e)},Da:function(a,b,c){W.stencilFunc(a,b,c)},x:function(a,b,c,d){W.stencilFuncSeparate(a,b,c,d)},s:function(a){W.stencilMask(a)},Ca:function(a,b,c){W.stencilOp(a,b,c)},w:function(a,b,c,d){W.stencilOpSeparate(a,b,c,d)},db:function(a,b,c){if(2<=V.version)W.uniform1fv(Y(a),H,c>>2,b);else{if(288>=b)for(var d=Z[b-1],e=0;e<b;++e)d[e]=H[c+4*e>>
2];else d=H.subarray(c>>2,c+4*b>>2);W.uniform1fv(Y(a),d)}},B:function(a,b){W.uniform1i(Y(a),b)},cb:function(a,b,c){if(2<=V.version)W.uniform2fv(Y(a),H,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],e=0;e<2*b;e+=2)d[e]=H[c+4*e>>2],d[e+1]=H[c+(4*e+4)>>2];else d=H.subarray(c>>2,c+8*b>>2);W.uniform2fv(Y(a),d)}},bb:function(a,b,c){if(2<=V.version)W.uniform3fv(Y(a),H,c>>2,3*b);else{if(96>=b)for(var d=Z[3*b-1],e=0;e<3*b;e+=3)d[e]=H[c+4*e>>2],d[e+1]=H[c+(4*e+4)>>2],d[e+2]=H[c+(4*e+8)>>2];else d=H.subarray(c>>
2,c+12*b>>2);W.uniform3fv(Y(a),d)}},ab:function(a,b,c){if(2<=V.version)W.uniform4fv(Y(a),H,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],e=H;c>>=2;for(var h=0;h<4*b;h+=4){var g=c+h;d[h]=e[g];d[h+1]=e[g+1];d[h+2]=e[g+2];d[h+3]=e[g+3]}}else d=H.subarray(c>>2,c+16*b>>2);W.uniform4fv(Y(a),d)}},$a:function(a,b,c,d){if(2<=V.version)W.uniformMatrix4fv(Y(a),!!c,H,d>>2,16*b);else{if(18>=b){var e=Z[16*b-1],h=H;d>>=2;for(var g=0;g<16*b;g+=16){var m=d+g;e[g]=h[m];e[g+1]=h[m+1];e[g+2]=h[m+2];e[g+3]=h[m+3];e[g+4]=h[m+
4];e[g+5]=h[m+5];e[g+6]=h[m+6];e[g+7]=h[m+7];e[g+8]=h[m+8];e[g+9]=h[m+9];e[g+10]=h[m+10];e[g+11]=h[m+11];e[g+12]=h[m+12];e[g+13]=h[m+13];e[g+14]=h[m+14];e[g+15]=h[m+15]}}else e=H.subarray(d>>2,d+64*b>>2);W.uniformMatrix4fv(Y(a),!!c,e)}},l:function(a){a=S[a];W.useProgram(a);W.ec=a},ka:function(a,b){W.vertexAttribDivisor(a,b)},la:function(a,b,c,d,e,h){W.vertexAttribPointer(a,b,c,!!d,e,h)},qa:function(a,b,c,d){W.viewport(a,b,c,d)},Ta:function(){f.Wb=function(a){0!=Kb()&&(a.preventDefault(),a.returnValue=
" ")};window.addEventListener("beforeunload",f.Wb)},Sa:function(){f.ac=function(a){a=a.clipboardData.getData("text");la("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",f.ac)},Ra:function(a){f.uc=[];a=F(a);a=document.getElementById(a);f.Xb=function(b){b.stopPropagation();b.preventDefault()};f.Yb=function(b){b.stopPropagation();b.preventDefault()};f.Zb=function(b){b.stopPropagation();b.preventDefault()};f.$b=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;
f.vc=c;Lb(c.length);var d;for(d=0;d<c.length;d++)la("_sapp_emsc_drop",["number","string"],[d,c[d].name]);Mb(b.clientX,b.clientY)};a.addEventListener("dragenter",f.Xb,!1);a.addEventListener("dragleave",f.Yb,!1);a.addEventListener("dragover",f.Zb,!1);a.addEventListener("drop",f.$b,!1)},Na:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},o:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";
a.addEventListener("focusout",function(){Nb()});document.body.append(a)},n:function(){document.getElementById("_sokol_app_input_element").focus()},eb:function(a){a=F(a);f.Db=document.getElementById(a);f.Db||console.log("sokol_app.h: invalid target:"+a);f.Db.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Qa:function(){window.removeEventListener("beforeunload",f.Wb)},Pa:function(){window.removeEventListener("paste",f.ac)},Oa:function(a){a=F(a);a=document.getElementById(a);
a.removeEventListener("dragenter",f.Xb);a.removeEventListener("dragleave",f.Yb);a.removeEventListener("dragover",f.Zb);a.removeEventListener("drop",f.$b)},v:function(){f.Db&&f.Db.requestPointerLock&&f.Db.requestPointerLock()},Ma:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),h=e.createImageData(a,b);h.data.set(E.subarray(c,c+a*b*4));e.putImageData(h,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();
document.head.appendChild(a)},m:function(){document.getElementById("_sokol_app_input_element").blur()}};
(function(){function a(e){f.asm=e.exports;ia=f.asm.fb;ua();va=f.asm.yb;xa.unshift(f.asm.gb);J--;f.monitorRunDependencies&&f.monitorRunDependencies(J);0==J&&(null!==Ca&&(clearInterval(Ca),Ca=null),K&&(e=K,K=null,e()))}function b(e){a(e.instance)}function c(e){return Ga().then(function(h){return WebAssembly.instantiate(h,d)}).then(function(h){return h}).then(e,function(h){A("failed to asynchronously prepare wasm: "+h);z(h)})}var d={a:Ob};J++;f.monitorRunDependencies&&f.monitorRunDependencies(J);if(f.instantiateWasm)try{return f.instantiateWasm(d,
a)}catch(e){return A("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return B||"function"!==typeof WebAssembly.instantiateStreaming||Da()||L.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(L,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(h){A("wasm streaming compile failed: "+h);A("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
f.___wasm_call_ctors=function(){return(f.___wasm_call_ctors=f.asm.gb).apply(null,arguments)};var Nb=f.__sapp_emsc_notify_keyboard_hidden=function(){return(Nb=f.__sapp_emsc_notify_keyboard_hidden=f.asm.hb).apply(null,arguments)};f.__sapp_emsc_onpaste=function(){return(f.__sapp_emsc_onpaste=f.asm.ib).apply(null,arguments)};
var Kb=f.__sapp_html5_get_ask_leave_site=function(){return(Kb=f.__sapp_html5_get_ask_leave_site=f.asm.jb).apply(null,arguments)},Lb=f.__sapp_emsc_begin_drop=function(){return(Lb=f.__sapp_emsc_begin_drop=f.asm.kb).apply(null,arguments)};f.__sapp_emsc_drop=function(){return(f.__sapp_emsc_drop=f.asm.lb).apply(null,arguments)};var Mb=f.__sapp_emsc_end_drop=function(){return(Mb=f.__sapp_emsc_end_drop=f.asm.mb).apply(null,arguments)};
f.__sapp_emsc_invoke_fetch_cb=function(){return(f.__sapp_emsc_invoke_fetch_cb=f.asm.nb).apply(null,arguments)};f._main=function(){return(f._main=f.asm.ob).apply(null,arguments)};f.__saudio_emsc_pull=function(){return(f.__saudio_emsc_pull=f.asm.pb).apply(null,arguments)};f.__sfetch_emsc_head_response=function(){return(f.__sfetch_emsc_head_response=f.asm.qb).apply(null,arguments)};f.__sfetch_emsc_get_response=function(){return(f.__sfetch_emsc_get_response=f.asm.rb).apply(null,arguments)};
f.__sfetch_emsc_failed_http_status=function(){return(f.__sfetch_emsc_failed_http_status=f.asm.sb).apply(null,arguments)};f.__sfetch_emsc_failed_buffer_too_small=function(){return(f.__sfetch_emsc_failed_buffer_too_small=f.asm.tb).apply(null,arguments)};
var Q=f._malloc=function(){return(Q=f._malloc=f.asm.ub).apply(null,arguments)},na=f.stackSave=function(){return(na=f.stackSave=f.asm.vb).apply(null,arguments)},oa=f.stackRestore=function(){return(oa=f.stackRestore=f.asm.wb).apply(null,arguments)},C=f.stackAlloc=function(){return(C=f.stackAlloc=f.asm.xb).apply(null,arguments)},Pb;function fa(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}K=function Qb(){Pb||Rb();Pb||(K=Qb)};
function Rb(a){function b(){if(!Pb&&(Pb=!0,f.calledRun=!0,!ja)){Ha(xa);Ha(ya);if(f.onRuntimeInitialized)f.onRuntimeInitialized();if(Sb){var c=a,d=f._main;c=c||[];var e=c.length+1,h=C(4*(e+1));G[h>>2]=ra(ba);for(var g=1;g<e;g++)G[(h>>2)+g]=ra(c[g-1]);G[(h>>2)+e]=0;try{var m=d(e,h);if(!(noExitRuntime||0<ha)){if(f.onExit)f.onExit(m);ja=!0}p(m,new fa(m))}catch(n){n instanceof fa||"unwind"==n||p(1,n)}finally{}}if(f.postRun)for("function"==typeof f.postRun&&(f.postRun=[f.postRun]);f.postRun.length;)c=f.postRun.shift(),
Aa.unshift(c);Ha(Aa)}}a=a||aa;if(!(0<J)){if(f.preRun)for("function"==typeof f.preRun&&(f.preRun=[f.preRun]);f.preRun.length;)Ba();Ha(wa);0<J||(f.setStatus?(f.setStatus("Running..."),setTimeout(function(){setTimeout(function(){f.setStatus("")},1);b()},1)):b())}}f.run=Rb;if(f.preInit)for("function"==typeof f.preInit&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();var Sb=!0;f.noInitialRun&&(Sb=!1);Rb();
