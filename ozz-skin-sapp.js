
var h;h||(h=typeof Module !== 'undefined' ? Module : {});var aa=Object.assign({},h),ba=[],ca="./this.program",da=(a,b)=>{throw b;},ea="object"==typeof window,k="function"==typeof importScripts,fa="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,m="",ha,ia,ja,fs,ka,la;
if(fa)m=k?require("path").dirname(m)+"/":__dirname+"/",la=()=>{ka||(fs=require("fs"),ka=require("path"))},ha=function(a,b){la();a=ka.normalize(a);return fs.readFileSync(a,b?void 0:"utf8")},ja=a=>{a=ha(a,!0);a.buffer||(a=new Uint8Array(a));return a},ia=(a,b,c)=>{la();a=ka.normalize(a);fs.readFile(a,function(d,e){d?c(d):b(e.buffer)})},1<process.argv.length&&(ca=process.argv[1].replace(/\\/g,"/")),ba=process.argv.slice(2),"undefined"!=typeof module&&(module.exports=h),process.on("uncaughtException",
function(a){if(!(a instanceof ma))throw a;}),process.on("unhandledRejection",function(a){throw a;}),da=(a,b)=>{if(noExitRuntime)throw process.exitCode=a,b;b instanceof ma||t("exiting due to exception: "+b);process.exit(a)},h.inspect=function(){return"[Emscripten Module object]"};else if(ea||k)k?m=self.location.href:"undefined"!=typeof document&&document.currentScript&&(m=document.currentScript.src),m=0!==m.indexOf("blob:")?m.substr(0,m.replace(/[?#].*/,"").lastIndexOf("/")+1):"",ha=a=>{var b=new XMLHttpRequest;
b.open("GET",a,!1);b.send(null);return b.responseText},k&&(ja=a=>{var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ia=(a,b,c)=>{var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=()=>{200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var na=h.print||console.log.bind(console),t=h.printErr||console.warn.bind(console);Object.assign(h,aa);aa=null;h.arguments&&(ba=h.arguments);
h.thisProgram&&(ca=h.thisProgram);h.quit&&(da=h.quit);var w;h.wasmBinary&&(w=h.wasmBinary);var noExitRuntime=h.noExitRuntime||!0;"object"!=typeof WebAssembly&&oa("no native wasm support detected");var pa,qa=!1;
function ra(a,b,c){var d={string:function(p){var q=0;if(null!==p&&void 0!==p&&0!==p){var r=(p.length<<2)+1;q=y(r);z(p,A,q,r)}return q},array:function(p){var q=y(p.length);B.set(p,q);return q}};a=h["_"+a];var e=[],g=0;if(c)for(var f=0;f<c.length;f++){var n=d[b[f]];n?(0===g&&(g=sa()),e[f]=n(c[f])):e[f]=c[f]}b=a.apply(null,e);b=function(p){0!==g&&ta(g);return p}(b)}var ua="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;
function va(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.buffer&&ua)return ua.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var g=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|g);else{var f=a[b++]&63;e=224==(e&240)?(e&15)<<12|g<<6|f:(e&7)<<18|g<<12|f<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function C(a,b){return a?va(A,a,b):""}
function z(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var g=0;g<a.length;++g){var f=a.charCodeAt(g);if(55296<=f&&57343>=f){var n=a.charCodeAt(++g);f=65536+((f&1023)<<10)|n&1023}if(127>=f){if(c>=d)break;b[c++]=f}else{if(2047>=f){if(c+1>=d)break;b[c++]=192|f>>6}else{if(65535>=f){if(c+2>=d)break;b[c++]=224|f>>12}else{if(c+3>=d)break;b[c++]=240|f>>18;b[c++]=128|f>>12&63}b[c++]=128|f>>6&63}b[c++]=128|f&63}}b[c]=0;return c-e}
function wa(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}var xa,B,A,ya,za,D,E,F,G;function Aa(){var a=pa.buffer;xa=a;h.HEAP8=B=new Int8Array(a);h.HEAP16=ya=new Int16Array(a);h.HEAP32=D=new Int32Array(a);h.HEAPU8=A=new Uint8Array(a);h.HEAPU16=za=new Uint16Array(a);h.HEAPU32=E=new Uint32Array(a);h.HEAPF32=F=new Float32Array(a);h.HEAPF64=G=new Float64Array(a)}
var Ba,Ca=[],Da=[],Ea=[],Fa=[],Ga=[];function Ha(){var a=h.preRun.shift();Ca.unshift(a)}var H=0,Ia=null,I=null;function oa(a){if(h.onAbort)h.onAbort(a);a="Aborted("+a+")";t(a);qa=!0;throw new WebAssembly.RuntimeError(a+". Build with -sASSERTIONS for more info.");}function Ja(){return J.startsWith("data:application/octet-stream;base64,")}var J;J="ozz-skin-sapp.wasm";if(!Ja()){var Ka=J;J=h.locateFile?h.locateFile(Ka,m):m+Ka}
function La(){var a=J;try{if(a==J&&w)return new Uint8Array(w);if(ja)return ja(a);throw"both async and sync fetching of the wasm failed";}catch(b){oa(b)}}
function Ma(){if(!w&&(ea||k)){if("function"==typeof fetch&&!J.startsWith("file://"))return fetch(J,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+J+"'";return a.arrayBuffer()}).catch(function(){return La()});if(ia)return new Promise(function(a,b){ia(J,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return La()})}
function Na(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(h);else{var c=b.cd;"number"==typeof c?void 0===b.yc?K(c)():K(c)(b.yc):c(void 0===b.yc?null:b.yc)}}}var Oa=[];function K(a){var b=Oa[a];b||(a>=Oa.length&&(Oa.length=a+1),Oa[a]=b=Ba.get(a));return b}var Pa=0;function Qa(){for(var a=L.length-1;0<=a;--a)Ra(a);L=[];Sa=[]}var Sa=[];function Ta(){if(Pa&&Ua.rc)for(var a=0;a<Sa.length;++a){var b=Sa[a];Sa.splice(a,1);--a;b.nd.apply(null,b.$c)}}var L=[];
function Ra(a){var b=L[a];b.target.removeEventListener(b.fc,b.Sc,b.ic);L.splice(a,1)}function M(a){function b(d){++Pa;Ua=a;Ta();a.kc(d);Ta();--Pa}if(a.jc)a.Sc=b,a.target.addEventListener(a.fc,b,a.ic),L.push(a),Va||(Fa.push(Qa),Va=!0);else for(var c=0;c<L.length;++c)L[c].target==a.target&&L[c].fc==a.fc&&Ra(c--)}function Wa(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Va,Ua,Xa,Ya,Za,$a,ab,bb,cb,db=[0,"undefined"!=typeof document?document:0,"undefined"!=typeof window?window:0];function N(a){a=2<a?C(a):a;return db[a]||("undefined"!=typeof document?document.querySelector(a):void 0)}function eb(a){return 0>db.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}var fb;fb=fa?()=>{var a=process.hrtime();return 1E3*a[0]+a[1]/1E6}:()=>performance.now();
function gb(a,b,c,d,e,g){Xa||(Xa=O(256));a={target:N(a),fc:g,jc:d,kc:function(f){f=f||event;var n=f.target.id?f.target.id:"",p=Xa;z(Wa(f.target),A,p+0,128);z(n,A,p+128,128);K(d)(e,p,b)&&f.preventDefault()},ic:c};M(a)}
function hb(a,b,c,d,e,g){Ya||(Ya=O(176));a={target:N(a),rc:!0,fc:g,jc:d,kc:function(f){var n=Ya;G[n>>3]=f.timeStamp;var p=n>>2;D[p+2]=f.location;D[p+3]=f.ctrlKey;D[p+4]=f.shiftKey;D[p+5]=f.altKey;D[p+6]=f.metaKey;D[p+7]=f.repeat;D[p+8]=f.charCode;D[p+9]=f.keyCode;D[p+10]=f.which;z(f.key||"",A,n+44,32);z(f.code||"",A,n+76,32);z(f.char||"",A,n+108,32);z(f.locale||"",A,n+140,32);K(d)(e,n,b)&&f.preventDefault()},ic:c};M(a)}
function ib(a,b,c){G[a>>3]=b.timeStamp;a>>=2;D[a+2]=b.screenX;D[a+3]=b.screenY;D[a+4]=b.clientX;D[a+5]=b.clientY;D[a+6]=b.ctrlKey;D[a+7]=b.shiftKey;D[a+8]=b.altKey;D[a+9]=b.metaKey;ya[2*a+20]=b.button;ya[2*a+21]=b.buttons;D[a+11]=b.movementX;D[a+12]=b.movementY;c=eb(c);D[a+13]=b.clientX-c.left;D[a+14]=b.clientY-c.top}
function P(a,b,c,d,e,g){Za||(Za=O(72));a=N(a);M({target:a,rc:"mousemove"!=g&&"mouseenter"!=g&&"mouseleave"!=g,fc:g,jc:d,kc:function(f){f=f||event;ib(Za,f,a);K(d)(e,Za,b)&&f.preventDefault()},ic:c})}function jb(a,b,c,d,e){$a||($a=O(260));M({target:a,fc:e,jc:d,kc:function(g){g=g||event;var f=$a,n=document.pointerLockElement||document.oc||document.Fc||document.Ec;D[f>>2]=!!n;var p=n&&n.id?n.id:"";z(Wa(n),A,f+4,128);z(p,A,f+132,128);K(d)(20,f,b)&&g.preventDefault()},ic:c})}
function kb(a,b,c,d,e){M({target:a,fc:e,jc:d,kc:function(g){g=g||event;K(d)(38,0,b)&&g.preventDefault()},ic:c})}
function lb(a,b,c,d){ab||(ab=O(36));a=N(a);M({target:a,fc:"resize",jc:d,kc:function(e){e=e||event;if(e.target==a){var g=document.body;if(g){var f=ab;D[f>>2]=e.detail;D[f+4>>2]=g.clientWidth;D[f+8>>2]=g.clientHeight;D[f+12>>2]=innerWidth;D[f+16>>2]=innerHeight;D[f+20>>2]=outerWidth;D[f+24>>2]=outerHeight;D[f+28>>2]=pageXOffset;D[f+32>>2]=pageYOffset;K(d)(10,f,b)&&e.preventDefault()}}},ic:c})}
function mb(a,b,c,d,e,g){bb||(bb=O(1696));a=N(a);M({target:a,rc:"touchstart"==g||"touchend"==g,fc:g,jc:d,kc:function(f){for(var n,p={},q=f.touches,r=0;r<q.length;++r)n=q[r],n.Gc=n.Ic=0,p[n.identifier]=n;for(r=0;r<f.changedTouches.length;++r)n=f.changedTouches[r],n.Gc=1,p[n.identifier]=n;for(r=0;r<f.targetTouches.length;++r)p[f.targetTouches[r].identifier].Ic=1;q=bb;G[q>>3]=f.timeStamp;var v=q>>2;D[v+3]=f.ctrlKey;D[v+4]=f.shiftKey;D[v+5]=f.altKey;D[v+6]=f.metaKey;v+=7;var Z=eb(a),l=0;for(r in p)if(n=
p[r],D[v]=n.identifier,D[v+1]=n.screenX,D[v+2]=n.screenY,D[v+3]=n.clientX,D[v+4]=n.clientY,D[v+5]=n.pageX,D[v+6]=n.pageY,D[v+7]=n.Gc,D[v+8]=n.Ic,D[v+9]=n.clientX-Z.left,D[v+10]=n.clientY-Z.top,v+=13,31<++l)break;D[q+8>>2]=l;K(d)(e,q,b)&&f.preventDefault()},ic:c})}function nb(a,b,c,d,e,g){a={target:N(a),fc:g,jc:d,kc:function(f){f=f||event;K(d)(e,0,b)&&f.preventDefault()},ic:c};M(a)}
function ob(a,b,c,d){cb||(cb=O(104));M({target:a,rc:!0,fc:"wheel",jc:d,kc:function(e){e=e||event;var g=cb;ib(g,e,a);G[g+72>>3]=e.deltaX;G[g+80>>3]=e.deltaY;G[g+88>>3]=e.deltaZ;D[g+96>>2]=e.deltaMode;K(d)(9,g,b)&&e.preventDefault()},ic:c})}
function pb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,g){b.drawArraysInstancedANGLE(c,d,e,g)},a.drawElementsInstanced=function(c,d,e,g,f){b.drawElementsInstancedANGLE(c,d,e,g,f)})}
function qb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function rb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function sb(a){a.bd=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function tb(a){a.ed=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function ub(a){a.hd=a.getExtension("WEBGL_multi_draw")}var vb=1,wb=[],Q=[],xb=[],yb=[],zb=[],R=[],Ab=[],Bb=[],Cb={},Db={};function T(a){Eb||(Eb=a)}function Fb(a){for(var b=vb++,c=a.length;c<b;c++)a[c]=null;return b}
function Gb(a,b){a.oc||(a.oc=a.getContext,a.getContext=function(d,e){e=a.oc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Hc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Hb(c,b):0}function Hb(a,b){var c=Fb(Bb),d={dd:c,attributes:b,version:b.Hc,xc:a};a.canvas&&(a.canvas.Zc=d);Bb[c]=d;("undefined"==typeof b.Dc||b.Dc)&&Ib(d);return c}
function Ib(a){a||(a=U);if(!a.Uc){a.Uc=!0;var b=a.xc;pb(b);qb(b);rb(b);sb(b);tb(b);2<=a.version&&(b.Cc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Cc)b.Cc=b.getExtension("EXT_disjoint_timer_query");ub(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Eb,U,Jb=["default","low-power","high-performance"],Kb={};
function Lb(){if(!Mb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ca||"./this.program"},b;for(b in Kb)void 0===Kb[b]?delete a[b]:a[b]=Kb[b];var c=[];for(b in a)c.push(b+"="+a[b]);Mb=c}return Mb}var Mb,Nb=[null,[],[]];function Pb(a,b,c,d){for(var e=0;e<a;e++){var g=V[c](),f=g&&Fb(d);g?(g.name=f,d[f]=g):T(1282);D[b+4*e>>2]=f}}
function Qb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=V.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>U.version){T(1282);return}c=2*(V.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>U.version){T(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=V.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":T(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:T(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)D[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){T(1280);t("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:T(1280);t("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}D[b>>2]=c}else T(1281)}
function Rb(a){var b=wa(a)+1,c=O(b);z(a,A,c,b);return c}function Sb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Tb(a){a-=5120;return 0==a?B:1==a?A:2==a?ya:4==a?D:6==a?F:5==a||28922==a||28520==a||30779==a||30782==a?E:za}function Ub(a){return 31-Math.clz32(a.BYTES_PER_ELEMENT)}function Vb(a,b,c,d,e){a=Tb(a);var g=Ub(a);return a.subarray(e>>g,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<g)+4-1&-4)>>g)}
function W(a){var b=V.Rc;if(b){var c=b.qc[a];"number"==typeof c&&(b.qc[a]=c=V.getUniformLocation(b,b.Pc[a]+(0<c?"["+c+"]":"")));return c}T(1282)}var X=[],Wb=[];function Xb(a){return 0===a%4&&(0!==a%100||0===a%400)}var Yb=[31,29,31,30,31,30,31,31,30,31,30,31],Zb=[31,28,31,30,31,30,31,31,30,31,30,31];
function $b(a,b,c,d){function e(l,u,x){for(l="number"==typeof l?l.toString():l||"";l.length<u;)l=x[0]+l;return l}function g(l,u){return e(l,u,"0")}function f(l,u){function x(Ob){return 0>Ob?-1:0<Ob?1:0}var S;0===(S=x(l.getFullYear()-u.getFullYear()))&&0===(S=x(l.getMonth()-u.getMonth()))&&(S=x(l.getDate()-u.getDate()));return S}function n(l){switch(l.getDay()){case 0:return new Date(l.getFullYear()-1,11,29);case 1:return l;case 2:return new Date(l.getFullYear(),0,3);case 3:return new Date(l.getFullYear(),
0,2);case 4:return new Date(l.getFullYear(),0,1);case 5:return new Date(l.getFullYear()-1,11,31);case 6:return new Date(l.getFullYear()-1,11,30)}}function p(l){var u=l.mc;for(l=new Date((new Date(l.nc+1900,0,1)).getTime());0<u;){var x=l.getMonth(),S=(Xb(l.getFullYear())?Yb:Zb)[x];if(u>S-l.getDate())u-=S-l.getDate()+1,l.setDate(1),11>x?l.setMonth(x+1):(l.setMonth(0),l.setFullYear(l.getFullYear()+1));else{l.setDate(l.getDate()+u);break}}x=new Date(l.getFullYear()+1,0,4);u=n(new Date(l.getFullYear(),
0,4));x=n(x);return 0>=f(u,l)?0>=f(x,l)?l.getFullYear()+1:l.getFullYear():l.getFullYear()-1}var q=D[d+40>>2];d={Xc:D[d>>2],Wc:D[d+4>>2],vc:D[d+8>>2],zc:D[d+12>>2],wc:D[d+16>>2],nc:D[d+20>>2],hc:D[d+24>>2],mc:D[d+28>>2],od:D[d+32>>2],Vc:D[d+36>>2],Yc:q?C(q):""};c=C(c);q={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d",
"%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var r in q)c=c.replace(new RegExp(r,"g"),q[r]);var v="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),Z="January February March April May June July August September October November December".split(" ");q={"%a":function(l){return v[l.hc].substring(0,3)},"%A":function(l){return v[l.hc]},"%b":function(l){return Z[l.wc].substring(0,3)},"%B":function(l){return Z[l.wc]},
"%C":function(l){return g((l.nc+1900)/100|0,2)},"%d":function(l){return g(l.zc,2)},"%e":function(l){return e(l.zc,2," ")},"%g":function(l){return p(l).toString().substring(2)},"%G":function(l){return p(l)},"%H":function(l){return g(l.vc,2)},"%I":function(l){l=l.vc;0==l?l=12:12<l&&(l-=12);return g(l,2)},"%j":function(l){for(var u=0,x=0;x<=l.wc-1;u+=(Xb(l.nc+1900)?Yb:Zb)[x++]);return g(l.zc+u,3)},"%m":function(l){return g(l.wc+1,2)},"%M":function(l){return g(l.Wc,2)},"%n":function(){return"\n"},"%p":function(l){return 0<=
l.vc&&12>l.vc?"AM":"PM"},"%S":function(l){return g(l.Xc,2)},"%t":function(){return"\t"},"%u":function(l){return l.hc||7},"%U":function(l){return g(Math.floor((l.mc+7-l.hc)/7),2)},"%V":function(l){var u=Math.floor((l.mc+7-(l.hc+6)%7)/7);2>=(l.hc+371-l.mc-2)%7&&u++;if(u)53==u&&(x=(l.hc+371-l.mc)%7,4==x||3==x&&Xb(l.nc)||(u=1));else{u=52;var x=(l.hc+7-l.mc-1)%7;(4==x||5==x&&Xb(l.nc%400-1))&&u++}return g(u,2)},"%w":function(l){return l.hc},"%W":function(l){return g(Math.floor((l.mc+7-(l.hc+6)%7)/7),2)},
"%y":function(l){return(l.nc+1900).toString().substring(2)},"%Y":function(l){return l.nc+1900},"%z":function(l){l=l.Vc;var u=0<=l;l=Math.abs(l)/60;return(u?"+":"-")+String("0000"+(l/60*100+l%60)).slice(-4)},"%Z":function(l){return l.Yc},"%%":function(){return"%"}};c=c.replace(/%%/g,"\x00\x00");for(r in q)c.includes(r)&&(c=c.replace(new RegExp(r,"g"),q[r](d)));c=c.replace(/\0\0/g,"%");r=ac(c);if(r.length>b)return 0;B.set(r,a);return r.length-1}
for(var V,bc=new Float32Array(288),Y=0;288>Y;++Y)X[Y]=bc.subarray(0,Y+1);var cc=new Int32Array(288);for(Y=0;288>Y;++Y)Wb[Y]=cc.subarray(0,Y+1);function ac(a){var b=Array(wa(a)+1);z(a,b,0,b.length);return b}
var lc={pa:function(){return 0},kb:function(){return 0},lb:function(){},i:function(){oa("")},S:function(){return"number"==typeof devicePixelRatio&&devicePixelRatio||1},W:function(a,b,c){a=N(a);if(!a)return-4;a=eb(a);G[b>>3]=a.width;G[c>>3]=a.height;return 0},C:fb,hb:function(a,b,c){A.copyWithin(a,b,b+c)},Ca:function(a,b){function c(d){K(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},gb:function(a){var b=A.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+
.2/c);d=Math.min(d,a+100663296);var e=Math;d=Math.max(a,d);e=e.min.call(e,2147483648,d+(65536-d%65536)%65536);a:{try{pa.grow(e-xa.byteLength+65535>>>16);Aa();var g=1;break a}catch(f){}g=void 0}if(g)return!0}return!1},Z:function(a,b,c,d){gb(a,b,c,d,12,"blur");return 0},L:function(a,b,c){a=N(a);if(!a)return-4;a.width=b;a.height=c;return 0},_:function(a,b,c,d){gb(a,b,c,d,13,"focus");return 0},ha:function(a,b,c,d){hb(a,b,c,d,2,"keydown");return 0},fa:function(a,b,c,d){hb(a,b,c,d,1,"keypress");return 0},
ga:function(a,b,c,d){hb(a,b,c,d,3,"keyup");return 0},oa:function(a,b,c,d){P(a,b,c,d,5,"mousedown");return 0},ka:function(a,b,c,d){P(a,b,c,d,33,"mouseenter");return 0},ja:function(a,b,c,d){P(a,b,c,d,34,"mouseleave");return 0},la:function(a,b,c,d){P(a,b,c,d,8,"mousemove");return 0},ma:function(a,b,c,d){P(a,b,c,d,6,"mouseup");return 0},aa:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.oc||document.body.Fc||document.body.Ec))return-1;a=N(a);if(!a)return-4;
jb(a,b,c,d,"pointerlockchange");jb(a,b,c,d,"mozpointerlockchange");jb(a,b,c,d,"webkitpointerlockchange");jb(a,b,c,d,"mspointerlockchange");return 0},$:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.oc||document.body.Fc||document.body.Ec))return-1;a=N(a);if(!a)return-4;kb(a,b,c,d,"pointerlockerror");kb(a,b,c,d,"mozpointerlockerror");kb(a,b,c,d,"webkitpointerlockerror");kb(a,b,c,d,"mspointerlockerror");return 0},Na:function(a,b,c,d){lb(a,b,c,d);return 0},ba:function(a,
b,c,d){mb(a,b,c,d,25,"touchcancel");return 0},ca:function(a,b,c,d){mb(a,b,c,d,23,"touchend");return 0},da:function(a,b,c,d){mb(a,b,c,d,24,"touchmove");return 0},ea:function(a,b,c,d){mb(a,b,c,d,22,"touchstart");return 0},Y:function(a,b,c,d){nb(a,b,c,d,31,"webglcontextlost");return 0},X:function(a,b,c,d){nb(a,b,c,d,32,"webglcontextrestored");return 0},ia:function(a,b,c,d){a=N(a);return"undefined"!=typeof a.onwheel?(ob(a,b,c,d),0):-1},ta:function(a,b){b>>=2;b={alpha:!!D[b],depth:!!D[b+1],stencil:!!D[b+
2],antialias:!!D[b+3],premultipliedAlpha:!!D[b+4],preserveDrawingBuffer:!!D[b+5],powerPreference:Jb[D[b+6]],failIfMajorPerformanceCaveat:!!D[b+7],Hc:D[b+8],gd:D[b+9],Dc:D[b+10],Tc:D[b+11],jd:D[b+12],kd:D[b+13]};a=N(a);return!a||b.Tc?0:Gb(a,b)},ob:function(a,b){a=Bb[a];b=C(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&pb(V);"OES_vertex_array_object"==b&&qb(V);"WEBGL_draw_buffers"==b&&rb(V);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&sb(V);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==
b&&tb(V);"WEBGL_multi_draw"==b&&ub(V);return!!a.xc.getExtension(b)},Mb:function(a){a>>=2;for(var b=0;14>b;++b)D[a+b]=0;D[a]=D[a+1]=D[a+3]=D[a+4]=D[a+8]=D[a+10]=1},zb:function(a){U=Bb[a];h.ad=V=U&&U.xc;return!a||V?0:-5},eb:function(a,b){var c=0;Lb().forEach(function(d,e){var g=b+c;e=E[a+4*e>>2]=g;for(g=0;g<d.length;++g)B[e++>>0]=d.charCodeAt(g);B[e>>0]=0;c+=d.length+1});return 0},fb:function(a,b){var c=Lb();E[a>>2]=c.length;var d=0;c.forEach(function(e){d+=e.length+1});E[b>>2]=d;return 0},na:function(){return 52},
jb:function(){return 52},cb:function(){return 70},ib:function(a,b,c,d){for(var e=0,g=0;g<c;g++){var f=E[b>>2],n=E[b+4>>2];b+=8;for(var p=0;p<n;p++){var q=A[f+p],r=Nb[a];0===q||10===q?((1===a?na:t)(va(r,0)),r.length=0):r.push(q)}e+=n}E[d>>2]=e;return 0},b:function(a){V.activeTexture(a)},G:function(a,b){V.attachShader(Q[a],R[b])},c:function(a,b){35051==a?V.Bc=b:35052==a&&(V.lc=b);V.bindBuffer(a,wb[b])},h:function(a,b){V.bindFramebuffer(a,xb[b])},J:function(a,b){V.bindRenderbuffer(a,yb[b])},a:function(a,
b){V.bindTexture(a,zb[b])},U:function(a){V.bindVertexArray(Ab[a])},P:function(a,b,c,d){V.blendColor(a,b,c,d)},Q:function(a,b){V.blendEquationSeparate(a,b)},R:function(a,b,c,d){V.blendFuncSeparate(a,b,c,d)},q:function(a,b,c,d,e,g,f,n,p,q){V.blitFramebuffer(a,b,c,d,e,g,f,n,p,q)},Ia:function(a,b,c,d){2<=U.version?c&&b?V.bufferData(a,A,d,c,b):V.bufferData(a,b,d):V.bufferData(a,c?A.subarray(c,c+b):b,d)},v:function(a,b,c,d){2<=U.version?c&&V.bufferSubData(a,b,A,d,c):V.bufferSubData(a,b,A.subarray(d,d+c))},
Gb:function(a){V.clear(a)},ua:function(a,b,c,d){V.clearColor(a,b,c,d)},D:function(a){V.clearDepth(a)},Hb:function(a){V.clearStencil(a)},k:function(a,b,c,d){V.colorMask(!!a,!!b,!!c,!!d)},Kb:function(a){V.compileShader(R[a])},Fa:function(a,b,c,d,e,g,f,n){2<=U.version?V.lc||!f?V.compressedTexImage2D(a,b,c,d,e,g,f,n):V.compressedTexImage2D(a,b,c,d,e,g,A,n,f):V.compressedTexImage2D(a,b,c,d,e,g,n?A.subarray(n,n+f):null)},Da:function(a,b,c,d,e,g,f,n,p){V.lc?V.compressedTexImage3D(a,b,c,d,e,g,f,n,p):V.compressedTexImage3D(a,
b,c,d,e,g,f,A,p,n)},Aa:function(){var a=Fb(Q),b=V.createProgram();b.name=a;b.uc=b.sc=b.tc=0;b.Ac=1;Q[a]=b;return a},xa:function(a){var b=Fb(R);R[b]=V.createShader(a);return b},M:function(a){V.cullFace(a)},Qa:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],e=wb[d];e&&(V.deleteBuffer(e),e.name=0,wb[d]=null,d==V.Bc&&(V.Bc=0),d==V.lc&&(V.lc=0))}},j:function(a,b){for(var c=0;c<a;++c){var d=D[b+4*c>>2],e=xb[d];e&&(V.deleteFramebuffer(e),e.name=0,xb[d]=null)}},z:function(a){if(a){var b=Q[a];b?(V.deleteProgram(b),
b.name=0,Q[a]=null):T(1281)}},V:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],e=yb[d];e&&(V.deleteRenderbuffer(e),e.name=0,yb[d]=null)}},u:function(a){if(a){var b=R[a];b?(V.deleteShader(b),R[a]=null):T(1281)}},Pa:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2],e=zb[d];e&&(V.deleteTexture(e),e.name=0,zb[d]=null)}},Oa:function(a,b){for(var c=0;c<a;c++){var d=D[b+4*c>>2];V.deleteVertexArray(Ab[d]);Ab[d]=null}},y:function(a){V.depthFunc(a)},x:function(a){V.depthMask(!!a)},e:function(a){V.disable(a)},
T:function(a){V.disableVertexAttribArray(a)},pb:function(a,b,c){V.drawArrays(a,b,c)},qb:function(a,b,c,d){V.drawArraysInstanced(a,b,c,d)},rb:function(a,b,c,d){V.drawElements(a,b,c,d)},sb:function(a,b,c,d,e){V.drawElementsInstanced(a,b,c,d,e)},g:function(a){V.enable(a)},Db:function(a){V.enableVertexAttribArray(a)},N:function(a){V.frontFace(a)},Ja:function(a,b){Pb(a,b,"createBuffer",wb)},K:function(a,b){Pb(a,b,"createRenderbuffer",yb)},Ga:function(a,b){Pb(a,b,"createTexture",zb)},Ma:function(a,b){Pb(a,
b,"createVertexArray",Ab)},Ib:function(a,b){return V.getAttribLocation(Q[a],C(b))},d:function(a,b){Qb(a,b)},ya:function(a,b,c,d){a=V.getProgramInfoLog(Q[a]);null===a&&(a="(unknown error)");b=0<b&&d?z(a,A,d,b):0;c&&(D[c>>2]=b)},F:function(a,b,c){if(c)if(a>=vb)T(1281);else if(a=Q[a],35716==b)a=V.getProgramInfoLog(a),null===a&&(a="(unknown error)"),D[c>>2]=a.length+1;else if(35719==b){if(!a.uc)for(b=0;b<V.getProgramParameter(a,35718);++b)a.uc=Math.max(a.uc,V.getActiveUniform(a,b).name.length+1);D[c>>
2]=a.uc}else if(35722==b){if(!a.sc)for(b=0;b<V.getProgramParameter(a,35721);++b)a.sc=Math.max(a.sc,V.getActiveAttrib(a,b).name.length+1);D[c>>2]=a.sc}else if(35381==b){if(!a.tc)for(b=0;b<V.getProgramParameter(a,35382);++b)a.tc=Math.max(a.tc,V.getActiveUniformBlockName(a,b).length+1);D[c>>2]=a.tc}else D[c>>2]=V.getProgramParameter(a,b);else T(1281)},Jb:function(a,b,c,d){a=V.getShaderInfoLog(R[a]);null===a&&(a="(unknown error)");b=0<b&&d?z(a,A,d,b):0;c&&(D[c>>2]=b)},va:function(a,b,c){c?35716==b?(a=
V.getShaderInfoLog(R[a]),null===a&&(a="(unknown error)"),D[c>>2]=a?a.length+1:0):35720==b?(a=V.getShaderSource(R[a]),D[c>>2]=a?a.length+1:0):D[c>>2]=V.getShaderParameter(R[a],b):T(1281)},Sa:function(a){var b=Cb[a];if(!b){switch(a){case 7939:b=V.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Rb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=V.getParameter(a))||T(1280);b=b&&Rb(b);break;case 7938:b=V.getParameter(7938);b=2<=U.version?"OpenGL ES 3.0 ("+b+
")":"OpenGL ES 2.0 ("+b+")";b=Rb(b);break;case 35724:b=V.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Rb(b);break;default:T(1280)}Cb[a]=b}return b},Ra:function(a,b){if(2>U.version)return T(1282),0;var c=Db[a];if(c)return 0>b||b>=c.length?(T(1281),0):c[b];switch(a){case 7939:return c=V.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Rb(d)}),
c=Db[a]=c,0>b||b>=c.length?(T(1281),0):c[b];default:return T(1280),0}},m:function(a,b){b=C(b);if(a=Q[a]){var c=a,d=c.qc,e=c.Qc,g;if(!d)for(c.qc=d={},c.Pc={},g=0;g<V.getProgramParameter(c,35718);++g){var f=V.getActiveUniform(c,g);var n=f.name;f=f.size;var p=Sb(n);p=0<p?n.slice(0,p):n;var q=c.Ac;c.Ac+=f;e[p]=[f,q];for(n=0;n<f;++n)d[q]=n,c.Pc[q++]=p}c=a.qc;d=0;e=b;g=Sb(b);0<g&&(d=parseInt(b.slice(g+1))>>>0,e=b.slice(0,g));if((e=a.Qc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||V.getUniformLocation(a,b)))return d}else T(1281);
return-1},za:function(a){a=Q[a];V.linkProgram(a);a.qc=0;a.Qc={}},O:function(a,b){V.polygonOffset(a,b)},r:function(a){V.readBuffer(a)},Ha:function(a,b,c,d){V.renderbufferStorage(a,b,c,d)},I:function(a,b,c,d,e){V.renderbufferStorageMultisample(a,b,c,d,e)},s:function(a,b,c,d){V.scissor(a,b,c,d)},Lb:function(a,b,c,d){for(var e="",g=0;g<b;++g){var f=d?D[d+4*g>>2]:-1;e+=C(D[c+4*g>>2],0>f?void 0:f)}V.shaderSource(R[a],e)},La:function(a,b,c){V.stencilFunc(a,b,c)},sa:function(a,b,c,d){V.stencilFuncSeparate(a,
b,c,d)},w:function(a){V.stencilMask(a)},Ka:function(a,b,c){V.stencilOp(a,b,c)},ra:function(a,b,c,d){V.stencilOpSeparate(a,b,c,d)},Ea:function(a,b,c,d,e,g,f,n,p){if(2<=U.version)if(V.lc)V.texImage2D(a,b,c,d,e,g,f,n,p);else if(p){var q=Tb(n);V.texImage2D(a,b,c,d,e,g,f,n,q,p>>Ub(q))}else V.texImage2D(a,b,c,d,e,g,f,n,null);else V.texImage2D(a,b,c,d,e,g,f,n,p?Vb(n,f,d,e,p):null)},Ba:function(a,b,c,d,e,g,f,n,p,q){if(V.lc)V.texImage3D(a,b,c,d,e,g,f,n,p,q);else if(q){var r=Tb(p);V.texImage3D(a,b,c,d,e,g,
f,n,p,r,q>>Ub(r))}else V.texImage3D(a,b,c,d,e,g,f,n,p,null)},H:function(a,b,c){V.texParameterf(a,b,c)},f:function(a,b,c){V.texParameteri(a,b,c)},nb:function(a,b,c,d,e,g,f,n,p){if(2<=U.version)if(V.lc)V.texSubImage2D(a,b,c,d,e,g,f,n,p);else if(p){var q=Tb(n);V.texSubImage2D(a,b,c,d,e,g,f,n,q,p>>Ub(q))}else V.texSubImage2D(a,b,c,d,e,g,f,n,null);else q=null,p&&(q=Vb(n,f,e,g,p)),V.texSubImage2D(a,b,c,d,e,g,f,n,q)},mb:function(a,b,c,d,e,g,f,n,p,q,r){if(V.lc)V.texSubImage3D(a,b,c,d,e,g,f,n,p,q,r);else if(r){var v=
Tb(q);V.texSubImage3D(a,b,c,d,e,g,f,n,p,q,v,r>>Ub(v))}else V.texSubImage3D(a,b,c,d,e,g,f,n,p,q,null)},Cb:function(a,b,c){if(2<=U.version)b&&V.uniform1fv(W(a),F,c>>2,b);else{if(288>=b)for(var d=X[b-1],e=0;e<b;++e)d[e]=F[c+4*e>>2];else d=F.subarray(c>>2,c+4*b>>2);V.uniform1fv(W(a),d)}},E:function(a,b){V.uniform1i(W(a),b)},xb:function(a,b,c){if(2<=U.version)b&&V.uniform1iv(W(a),D,c>>2,b);else{if(288>=b)for(var d=Wb[b-1],e=0;e<b;++e)d[e]=D[c+4*e>>2];else d=D.subarray(c>>2,c+4*b>>2);V.uniform1iv(W(a),
d)}},Bb:function(a,b,c){if(2<=U.version)b&&V.uniform2fv(W(a),F,c>>2,2*b);else{if(144>=b)for(var d=X[2*b-1],e=0;e<2*b;e+=2)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2];else d=F.subarray(c>>2,c+8*b>>2);V.uniform2fv(W(a),d)}},wb:function(a,b,c){if(2<=U.version)b&&V.uniform2iv(W(a),D,c>>2,2*b);else{if(144>=b)for(var d=Wb[2*b-1],e=0;e<2*b;e+=2)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2];else d=D.subarray(c>>2,c+8*b>>2);V.uniform2iv(W(a),d)}},Ab:function(a,b,c){if(2<=U.version)b&&V.uniform3fv(W(a),F,c>>2,3*b);else{if(96>=
b)for(var d=X[3*b-1],e=0;e<3*b;e+=3)d[e]=F[c+4*e>>2],d[e+1]=F[c+(4*e+4)>>2],d[e+2]=F[c+(4*e+8)>>2];else d=F.subarray(c>>2,c+12*b>>2);V.uniform3fv(W(a),d)}},vb:function(a,b,c){if(2<=U.version)b&&V.uniform3iv(W(a),D,c>>2,3*b);else{if(96>=b)for(var d=Wb[3*b-1],e=0;e<3*b;e+=3)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2],d[e+2]=D[c+(4*e+8)>>2];else d=D.subarray(c>>2,c+12*b>>2);V.uniform3iv(W(a),d)}},yb:function(a,b,c){if(2<=U.version)b&&V.uniform4fv(W(a),F,c>>2,4*b);else{if(72>=b){var d=X[4*b-1],e=F;c>>=2;
for(var g=0;g<4*b;g+=4){var f=c+g;d[g]=e[f];d[g+1]=e[f+1];d[g+2]=e[f+2];d[g+3]=e[f+3]}}else d=F.subarray(c>>2,c+16*b>>2);V.uniform4fv(W(a),d)}},ub:function(a,b,c){if(2<=U.version)b&&V.uniform4iv(W(a),D,c>>2,4*b);else{if(72>=b)for(var d=Wb[4*b-1],e=0;e<4*b;e+=4)d[e]=D[c+4*e>>2],d[e+1]=D[c+(4*e+4)>>2],d[e+2]=D[c+(4*e+8)>>2],d[e+3]=D[c+(4*e+12)>>2];else d=D.subarray(c>>2,c+16*b>>2);V.uniform4iv(W(a),d)}},tb:function(a,b,c,d){if(2<=U.version)b&&V.uniformMatrix4fv(W(a),!!c,F,d>>2,16*b);else{if(18>=b){var e=
X[16*b-1],g=F;d>>=2;for(var f=0;f<16*b;f+=16){var n=d+f;e[f]=g[n];e[f+1]=g[n+1];e[f+2]=g[n+2];e[f+3]=g[n+3];e[f+4]=g[n+4];e[f+5]=g[n+5];e[f+6]=g[n+6];e[f+7]=g[n+7];e[f+8]=g[n+8];e[f+9]=g[n+9];e[f+10]=g[n+10];e[f+11]=g[n+11];e[f+12]=g[n+12];e[f+13]=g[n+13];e[f+14]=g[n+14];e[f+15]=g[n+15]}}else e=F.subarray(d>>2,d+64*b>>2);V.uniformMatrix4fv(W(a),!!c,e)}},l:function(a){a=Q[a];V.useProgram(a);V.Rc=a},Eb:function(a,b){V.vertexAttribDivisor(a,b)},Fb:function(a,b,c,d,e,g){V.vertexAttribPointer(a,b,c,!!d,
e,g)},t:function(a,b,c,d){V.viewport(a,b,c,d)},bb:function(){h.Jc=function(a){0!=dc()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",h.Jc)},ab:function(){h.Oc=function(a){a=a.clipboardData.getData("text");ra("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",h.Oc)},$a:function(a){h.ld=[];a=C(a);a=document.getElementById(a);h.Kc=function(b){b.stopPropagation();b.preventDefault()};h.Lc=function(b){b.stopPropagation();b.preventDefault()};h.Mc=function(b){b.stopPropagation();
b.preventDefault()};h.Nc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;h.md=c;ec(c.length);var d;for(d=0;d<c.length;d++)ra("_sapp_emsc_drop",["number","string"],[d,c[d].name]);fc(b.clientX,b.clientY)};a.addEventListener("dragenter",h.Kc,!1);a.addEventListener("dragleave",h.Lc,!1);a.addEventListener("dragover",h.Mc,!1);a.addEventListener("drop",h.Nc,!1)},Ua:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},p:function(){var a=
document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){gc()});document.body.append(a)},Wa:function(){document.exitPointerLock&&document.exitPointerLock()},o:function(){document.getElementById("_sokol_app_input_element").focus()},_a:function(a){a=C(a);h.pc=document.getElementById(a);h.pc||console.log("sokol_app.h: invalid target:"+a);h.pc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+
a)},Za:function(){window.removeEventListener("beforeunload",h.Jc)},Ya:function(){window.removeEventListener("paste",h.Oc)},Xa:function(a){a=C(a);a=document.getElementById(a);a.removeEventListener("dragenter",h.Kc);a.removeEventListener("dragleave",h.Lc);a.removeEventListener("dragover",h.Mc);a.removeEventListener("drop",h.Nc)},A:function(){h.pc&&h.pc.requestPointerLock&&h.pc.requestPointerLock()},Ta:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),
g=e.createImageData(a,b);g.data.set(A.subarray(c,c+a*b*4));e.putImageData(g,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},n:function(){document.getElementById("_sokol_app_input_element").blur()},Va:function(a){a=C(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left=
"-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},B:function(a,b,c,d,e,g){b=C(b);var f=new XMLHttpRequest;f.open("GET",b);f.responseType="arraybuffer";var n=0<d;n&&f.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));f.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!n){var p=new Uint8Array(f.response),q=p.length;q<=g?(A.set(p,e),
hc(a,d,q)):ic(a)}else jc(a,this.status)};f.send()},qa:function(a,b){b=C(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var d=this.getResponseHeader("Content-Length");kc(a,d)}else jc(a,this.status)};c.send()},wa:function(){return navigator.userAgent.includes("Macintosh")?1:0},db:function(a,b,c,d){return $b(a,b,c,d)}};
(function(){function a(e){h.asm=e.exports;pa=h.asm.Nb;Aa();Ba=h.asm.bc;Da.unshift(h.asm.Ob);H--;h.monitorRunDependencies&&h.monitorRunDependencies(H);0==H&&(null!==Ia&&(clearInterval(Ia),Ia=null),I&&(e=I,I=null,e()))}function b(e){a(e.instance)}function c(e){return Ma().then(function(g){return WebAssembly.instantiate(g,d)}).then(function(g){return g}).then(e,function(g){t("failed to asynchronously prepare wasm: "+g);oa(g)})}var d={a:lc};H++;h.monitorRunDependencies&&h.monitorRunDependencies(H);if(h.instantiateWasm)try{return h.instantiateWasm(d,
a)}catch(e){return t("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return w||"function"!=typeof WebAssembly.instantiateStreaming||Ja()||J.startsWith("file://")||fa||"function"!=typeof fetch?c(b):fetch(J,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(g){t("wasm streaming compile failed: "+g);t("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
h.___wasm_call_ctors=function(){return(h.___wasm_call_ctors=h.asm.Ob).apply(null,arguments)};var O=h._malloc=function(){return(O=h._malloc=h.asm.Pb).apply(null,arguments)},gc=h.__sapp_emsc_notify_keyboard_hidden=function(){return(gc=h.__sapp_emsc_notify_keyboard_hidden=h.asm.Qb).apply(null,arguments)};h.__sapp_emsc_onpaste=function(){return(h.__sapp_emsc_onpaste=h.asm.Rb).apply(null,arguments)};
var dc=h.__sapp_html5_get_ask_leave_site=function(){return(dc=h.__sapp_html5_get_ask_leave_site=h.asm.Sb).apply(null,arguments)},ec=h.__sapp_emsc_begin_drop=function(){return(ec=h.__sapp_emsc_begin_drop=h.asm.Tb).apply(null,arguments)};h.__sapp_emsc_drop=function(){return(h.__sapp_emsc_drop=h.asm.Ub).apply(null,arguments)};var fc=h.__sapp_emsc_end_drop=function(){return(fc=h.__sapp_emsc_end_drop=h.asm.Vb).apply(null,arguments)};
h.__sapp_emsc_invoke_fetch_cb=function(){return(h.__sapp_emsc_invoke_fetch_cb=h.asm.Wb).apply(null,arguments)};h._main=function(){return(h._main=h.asm.Xb).apply(null,arguments)};h.__saudio_emsc_pull=function(){return(h.__saudio_emsc_pull=h.asm.Yb).apply(null,arguments)};
var kc=h.__sfetch_emsc_head_response=function(){return(kc=h.__sfetch_emsc_head_response=h.asm.Zb).apply(null,arguments)},hc=h.__sfetch_emsc_get_response=function(){return(hc=h.__sfetch_emsc_get_response=h.asm._b).apply(null,arguments)},jc=h.__sfetch_emsc_failed_http_status=function(){return(jc=h.__sfetch_emsc_failed_http_status=h.asm.$b).apply(null,arguments)},ic=h.__sfetch_emsc_failed_buffer_too_small=function(){return(ic=h.__sfetch_emsc_failed_buffer_too_small=h.asm.ac).apply(null,arguments)},sa=
h.stackSave=function(){return(sa=h.stackSave=h.asm.cc).apply(null,arguments)},ta=h.stackRestore=function(){return(ta=h.stackRestore=h.asm.dc).apply(null,arguments)},y=h.stackAlloc=function(){return(y=h.stackAlloc=h.asm.ec).apply(null,arguments)},mc;function ma(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}I=function nc(){mc||oc();mc||(I=nc)};
function pc(a){var b=h._main;a=a||[];a.unshift(ca);var c=a.length,d=y(4*(c+1)),e=d>>2;a.forEach(f=>{var n=D,p=e++,q=wa(f)+1,r=y(q);z(f,B,r,q);n[p]=r});D[e]=0;try{var g=b(c,d);qc(g)}catch(f){f instanceof ma||"unwind"==f||da(1,f)}finally{}}
function oc(a){function b(){if(!mc&&(mc=!0,h.calledRun=!0,!qa)){Na(Da);Na(Ea);if(h.onRuntimeInitialized)h.onRuntimeInitialized();rc&&pc(a);if(h.postRun)for("function"==typeof h.postRun&&(h.postRun=[h.postRun]);h.postRun.length;){var c=h.postRun.shift();Ga.unshift(c)}Na(Ga)}}a=a||ba;if(!(0<H)){if(h.preRun)for("function"==typeof h.preRun&&(h.preRun=[h.preRun]);h.preRun.length;)Ha();Na(Ca);0<H||(h.setStatus?(h.setStatus("Running..."),setTimeout(function(){setTimeout(function(){h.setStatus("")},1);b()},
1)):b())}}h.run=oc;function qc(a){if(!noExitRuntime){if(h.onExit)h.onExit(a);qa=!0}da(a,new ma(a))}if(h.preInit)for("function"==typeof h.preInit&&(h.preInit=[h.preInit]);0<h.preInit.length;)h.preInit.pop()();var rc=!0;h.noInitialRun&&(rc=!1);oc();
