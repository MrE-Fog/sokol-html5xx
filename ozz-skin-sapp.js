
var h;h||(h=typeof Module !== 'undefined' ? Module : {});var k={},m;for(m in h)h.hasOwnProperty(m)&&(k[m]=h[m]);var u=[],aa="./this.program";function v(a,b){throw b;}var ba=!1,x=!1,ca=!1,da=!1;ba="object"===typeof window;x="function"===typeof importScripts;ca="object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node;da=!ba&&!ca&&!x;var y="",ea,fa,A,ha,ia;
if(ca)y=x?require("path").dirname(y)+"/":__dirname+"/",ea=function(a,b){ha||(ha=require("fs"));ia||(ia=require("path"));a=ia.normalize(a);return ha.readFileSync(a,b?null:"utf8")},A=function(a){a=ea(a,!0);a.buffer||(a=new Uint8Array(a));assert(a.buffer);return a},1<process.argv.length&&(aa=process.argv[1].replace(/\\/g,"/")),u=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=h),process.on("uncaughtException",function(a){if(!(a instanceof ja))throw a;}),process.on("unhandledRejection",
B),v=function(a){process.exit(a)},h.inspect=function(){return"[Emscripten Module object]"};else if(da)"undefined"!=typeof read&&(ea=function(a){return read(a)}),A=function(a){if("function"===typeof readbuffer)return new Uint8Array(readbuffer(a));a=read(a,"binary");assert("object"===typeof a);return a},"undefined"!=typeof scriptArgs?u=scriptArgs:"undefined"!=typeof arguments&&(u=arguments),"function"===typeof quit&&(v=function(a){quit(a)}),"undefined"!==typeof print&&("undefined"===typeof console&&
(console={}),console.log=print,console.warn=console.error="undefined"!==typeof printErr?printErr:print);else if(ba||x)x?y=self.location.href:"undefined"!==typeof document&&document.currentScript&&(y=document.currentScript.src),y=0!==y.indexOf("blob:")?y.substr(0,y.lastIndexOf("/")+1):"",ea=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},x&&(A=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),
fa=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var ka=h.print||console.log.bind(console),C=h.printErr||console.warn.bind(console);for(m in k)k.hasOwnProperty(m)&&(h[m]=k[m]);k=null;h.arguments&&(u=h.arguments);h.thisProgram&&(aa=h.thisProgram);h.quit&&(v=h.quit);var la;h.wasmBinary&&(la=h.wasmBinary);var noExitRuntime=h.noExitRuntime||!0;
"object"!==typeof WebAssembly&&B("no native wasm support detected");var ma,na=!1;function assert(a,b){a||B("Assertion failed: "+b)}function oa(a){var b=h["_"+a];assert(b,"Cannot call unknown function "+a+", make sure it is exported");return b}
function pa(a,b,c){var d={string:function(p){var q=0;if(null!==p&&void 0!==p&&0!==p){var r=(p.length<<2)+1;q=qa(r);D(p,E,q,r)}return q},array:function(p){var q=qa(p.length);F.set(p,q);return q}};a=oa(a);var e=[],g=0;if(c)for(var f=0;f<c.length;f++){var n=d[b[f]];n?(0===g&&(g=ra()),e[f]=n(c[f])):e[f]=c[f]}a.apply(null,e);0!==g&&sa(g)}var ta="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ua(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&ta)return ta.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var g=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|g);else{var f=a[b++]&63;e=224==(e&240)?(e&15)<<12|g<<6|f:(e&7)<<18|g<<12|f<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function G(a,b){return a?ua(E,a,b):""}
function D(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var g=0;g<a.length;++g){var f=a.charCodeAt(g);if(55296<=f&&57343>=f){var n=a.charCodeAt(++g);f=65536+((f&1023)<<10)|n&1023}if(127>=f){if(c>=d)break;b[c++]=f}else{if(2047>=f){if(c+1>=d)break;b[c++]=192|f>>6}else{if(65535>=f){if(c+2>=d)break;b[c++]=224|f>>12}else{if(c+3>=d)break;b[c++]=240|f>>18;b[c++]=128|f>>12&63}b[c++]=128|f>>6&63}b[c++]=128|f&63}}b[c]=0;return c-e}
function va(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function wa(a){var b=va(a)+1,c=qa(b);D(a,F,c,b);return c}var xa,F,E,ya,za,H,Aa,I,J;
function Ba(){var a=ma.buffer;xa=a;h.HEAP8=F=new Int8Array(a);h.HEAP16=ya=new Int16Array(a);h.HEAP32=H=new Int32Array(a);h.HEAPU8=E=new Uint8Array(a);h.HEAPU16=za=new Uint16Array(a);h.HEAPU32=Aa=new Uint32Array(a);h.HEAPF32=I=new Float32Array(a);h.HEAPF64=J=new Float64Array(a)}var L,Ca=[],Da=[],Ea=[],Fa=[],Ga=[];function Ha(){var a=h.preRun.shift();Ca.unshift(a)}var M=0,Ia=null,Ja=null;h.preloadedImages={};h.preloadedAudios={};
function B(a){if(h.onAbort)h.onAbort(a);C(a);na=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ka(){return N.startsWith("data:application/octet-stream;base64,")}var N="ozz-skin-sapp.wasm";if(!Ka()){var La=N;N=h.locateFile?h.locateFile(La,y):y+La}function Ma(){var a=N;try{if(a==N&&la)return new Uint8Array(la);if(A)return A(a);throw"both async and sync fetching of the wasm failed";}catch(b){B(b)}}
function Na(){if(!la&&(ba||x)){if("function"===typeof fetch&&!N.startsWith("file://"))return fetch(N,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+N+"'";return a.arrayBuffer()}).catch(function(){return Ma()});if(fa)return new Promise(function(a,b){fa(N,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ma()})}
function Oa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(h);else{var c=b.Zc;"number"===typeof c?void 0===b.sc?L.get(c)():L.get(c)(b.sc):c(void 0===b.sc?null:b.sc)}}}var Pa=[null,[],[]],Qa={},Ra=0;function Sa(){for(var a=O.length-1;0<=a;--a)Ta(a);O=[];Ua=[]}var Ua=[];function Va(){if(Ra&&Wa.jc)for(var a=0;a<Ua.length;++a){var b=Ua[a];Ua.splice(a,1);--a;b.kd.apply(null,b.Vc)}}var O=[];function Ta(a){var b=O[a];b.target.removeEventListener(b.ac,b.Kc,b.bc);O.splice(a,1)}
function P(a){function b(d){++Ra;Wa=a;Va();a.ec(d);Va();--Ra}if(a.cc)a.Kc=b,a.target.addEventListener(a.ac,b,a.bc),O.push(a),Xa||(Fa.push(Sa),Xa=!0);else for(var c=0;c<O.length;++c)O[c].target==a.target&&O[c].ac==a.ac&&Ta(c--)}var Xa,Wa,Ya,Za,$a,ab,bb,cb,db=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function Q(a){a=2<a?G(a):a;return db[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function eb(a){return 0>db.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function fb(a,b,c,d,e,g){Ya||(Ya=R(164));a={target:Q(a),jc:!0,ac:g,cc:d,ec:function(f){var n=Ya,p=n>>2;H[p]=f.location;H[p+1]=f.ctrlKey;H[p+2]=f.shiftKey;H[p+3]=f.altKey;H[p+4]=f.metaKey;H[p+5]=f.repeat;H[p+6]=f.charCode;H[p+7]=f.keyCode;H[p+8]=f.which;D(f.key||"",E,n+36,32);D(f.code||"",E,n+68,32);D(f.char||"",E,n+100,32);D(f.locale||"",E,n+132,32);L.get(d)(e,n,b)&&f.preventDefault()},bc:c};P(a)}
function gb(a,b,c){a>>=2;H[a]=b.screenX;H[a+1]=b.screenY;H[a+2]=b.clientX;H[a+3]=b.clientY;H[a+4]=b.ctrlKey;H[a+5]=b.shiftKey;H[a+6]=b.altKey;H[a+7]=b.metaKey;ya[2*a+16]=b.button;ya[2*a+17]=b.buttons;H[a+9]=b.movementX;H[a+10]=b.movementY;c=eb(c);H[a+11]=b.clientX-c.left;H[a+12]=b.clientY-c.top}function hb(a,b,c,d,e,g){Za||(Za=R(64));a=Q(a);P({target:a,jc:"mousemove"!=g&&"mouseenter"!=g&&"mouseleave"!=g,ac:g,cc:d,ec:function(f){f=f||event;gb(Za,f,a);L.get(d)(e,Za,b)&&f.preventDefault()},bc:c})}
function ib(a,b,c,d,e){$a||($a=R(260));P({target:a,ac:e,cc:d,ec:function(g){g=g||event;var f=$a,n=document.pointerLockElement||document.uc||document.wc||document.vc;H[f>>2]=!!n;var p=n&&n.id?n.id:"";D(n?n==window?"#window":n==screen?"#screen":n&&n.nodeName?n.nodeName:"":"",E,f+4,128);D(p,E,f+132,128);L.get(d)(20,f,b)&&g.preventDefault()},bc:c})}function jb(a,b,c,d,e){P({target:a,ac:e,cc:d,ec:function(g){g=g||event;L.get(d)(38,0,b)&&g.preventDefault()},bc:c})}
function kb(a,b,c,d){ab||(ab=R(36));a=Q(a);P({target:a,ac:"resize",cc:d,ec:function(e){e=e||event;if(e.target==a){var g=document.body;if(g){var f=ab;H[f>>2]=e.detail;H[f+4>>2]=g.clientWidth;H[f+8>>2]=g.clientHeight;H[f+12>>2]=innerWidth;H[f+16>>2]=innerHeight;H[f+20>>2]=outerWidth;H[f+24>>2]=outerHeight;H[f+28>>2]=pageXOffset;H[f+32>>2]=pageYOffset;L.get(d)(10,f,b)&&e.preventDefault()}}},bc:c})}
function lb(a,b,c,d,e,g){bb||(bb=R(1684));a=Q(a);P({target:a,jc:"touchstart"==g||"touchend"==g,ac:g,cc:d,ec:function(f){for(var n={},p=f.touches,q=0;q<p.length;++q){var r=p[q];n[r.identifier]=r}p=f.changedTouches;for(q=0;q<p.length;++q)r=p[q],r.Nc=1,n[r.identifier]=r;p=f.targetTouches;for(q=0;q<p.length;++q)n[p[q].identifier].Oc=1;p=bb;r=p>>2;H[r+1]=f.ctrlKey;H[r+2]=f.shiftKey;H[r+3]=f.altKey;H[r+4]=f.metaKey;r+=5;var z=eb(a),K=0;for(q in n){var l=n[q];H[r]=l.identifier;H[r+1]=l.screenX;H[r+2]=l.screenY;
H[r+3]=l.clientX;H[r+4]=l.clientY;H[r+5]=l.pageX;H[r+6]=l.pageY;H[r+7]=l.Nc;H[r+8]=l.Oc;H[r+9]=l.clientX-z.left;H[r+10]=l.clientY-z.top;r+=13;if(31<++K)break}H[p>>2]=K;L.get(d)(e,p,b)&&f.preventDefault()},bc:c})}function mb(a,b,c,d,e,g){a={target:Q(a),ac:g,cc:d,ec:function(f){f=f||event;L.get(d)(e,0,b)&&f.preventDefault()},bc:c};P(a)}
function nb(a,b,c,d){cb||(cb=R(96));P({target:a,jc:!0,ac:"wheel",cc:d,ec:function(e){e=e||event;var g=cb;gb(g,e,a);J[g+64>>3]=e.deltaX;J[g+72>>3]=e.deltaY;J[g+80>>3]=e.deltaZ;H[g+88>>2]=e.deltaMode;L.get(d)(9,g,b)&&e.preventDefault()},bc:c})}
function ob(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,g){b.drawArraysInstancedANGLE(c,d,e,g)},a.drawElementsInstanced=function(c,d,e,g,f){b.drawElementsInstancedANGLE(c,d,e,g,f)})}
function pb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function qb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function rb(a){a.Xc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function sb(a){a.bd=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function tb(a){a.dd=a.getExtension("WEBGL_multi_draw")}var ub=1,vb=[],T=[],wb=[],xb=[],yb=[],U=[],zb=[],Ab=[],Bb={},Cb={};function V(a){Db||(Db=a)}function Eb(a){for(var b=ub++,c=a.length;c<b;c++)a[c]=null;return b}
function Fb(a,b){a.Ac||(a.Ac=a.getContext,a.getContext=function(d,e){e=a.Ac(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Bc?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Gb(c,b):0}function Gb(a,b){var c=Eb(Ab),d={ad:c,attributes:b,version:b.Bc,rc:a};a.canvas&&(a.canvas.Uc=d);Ab[c]=d;("undefined"===typeof b.zc||b.zc)&&Hb(d);return c}
function Hb(a){a||(a=W);if(!a.Mc){a.Mc=!0;var b=a.rc;ob(b);pb(b);qb(b);rb(b);sb(b);2<=a.version&&(b.yc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.yc)b.yc=b.getExtension("EXT_disjoint_timer_query");tb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Db,W,Ib=["default","low-power","high-performance"],Jb={};
function Kb(){if(!Lb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:aa||"./this.program"},b;for(b in Jb)a[b]=Jb[b];var c=[];for(b in a)c.push(b+"="+a[b]);Lb=c}return Lb}var Lb;function Nb(a,b,c,d){for(var e=0;e<a;e++){var g=X[c](),f=g&&Eb(d);g?(g.name=f,d[f]=g):V(1282);H[b+4*e>>2]=f}}
function Ob(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=X.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){V(1282);return}c=2*(X.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>W.version){V(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=X.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)H[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){V(1280);C("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:V(1280);C("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}H[b>>2]=c}else V(1281)}
function Pb(a){var b=va(a)+1,c=R(b);D(a,E,c,b);return c}function Qb(a){a-=5120;return 0==a?F:1==a?E:2==a?ya:4==a?H:6==a?I:5==a||28922==a||28520==a||30779==a||30782==a?Aa:za}function Rb(a){return 31-Math.clz32(a.BYTES_PER_ELEMENT)}function Sb(a,b,c,d,e){a=Qb(a);var g=Rb(a);return a.subarray(e>>g,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<g)+4-1&-4)>>g)}
function Y(a){var b=X.Jc,c=b.qc[a];0<=c&&(b.qc[a]=c=X.getUniformLocation(b,b.Ic[a]+(0<c?"["+c+"]":"")));return c}var Z=[];function Tb(a){return 0===a%4&&(0!==a%100||0===a%400)}function Ub(a,b){for(var c=0,d=0;d<=b;c+=a[d++]);return c}var Vb=[31,29,31,30,31,30,31,31,30,31,30,31],Wb=[31,28,31,30,31,30,31,31,30,31,30,31];
function Xb(a,b){for(a=new Date(a.getTime());0<b;){var c=a.getMonth(),d=(Tb(a.getFullYear())?Vb:Wb)[c];if(b>d-a.getDate())b-=d-a.getDate()+1,a.setDate(1),11>c?a.setMonth(c+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}
function Yb(a,b,c,d){function e(l,t,w){for(l="number"===typeof l?l.toString():l||"";l.length<t;)l=w[0]+l;return l}function g(l,t){return e(l,t,"0")}function f(l,t){function w(Mb){return 0>Mb?-1:0<Mb?1:0}var S;0===(S=w(l.getFullYear()-t.getFullYear()))&&0===(S=w(l.getMonth()-t.getMonth()))&&(S=w(l.getDate()-t.getDate()));return S}function n(l){switch(l.getDay()){case 0:return new Date(l.getFullYear()-1,11,29);case 1:return l;case 2:return new Date(l.getFullYear(),0,3);case 3:return new Date(l.getFullYear(),
0,2);case 4:return new Date(l.getFullYear(),0,1);case 5:return new Date(l.getFullYear()-1,11,31);case 6:return new Date(l.getFullYear()-1,11,30)}}function p(l){l=Xb(new Date(l.$b+1900,0,1),l.pc);var t=new Date(l.getFullYear()+1,0,4),w=n(new Date(l.getFullYear(),0,4));t=n(t);return 0>=f(w,l)?0>=f(t,l)?l.getFullYear()+1:l.getFullYear():l.getFullYear()-1}var q=H[d+40>>2];d={Rc:H[d>>2],Qc:H[d+4>>2],nc:H[d+8>>2],ic:H[d+12>>2],fc:H[d+16>>2],$b:H[d+20>>2],oc:H[d+24>>2],pc:H[d+28>>2],ld:H[d+32>>2],Pc:H[d+
36>>2],Sc:q?G(q):""};c=G(c);q={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var r in q)c=c.replace(new RegExp(r,"g"),q[r]);var z="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
K="January February March April May June July August September October November December".split(" ");q={"%a":function(l){return z[l.oc].substring(0,3)},"%A":function(l){return z[l.oc]},"%b":function(l){return K[l.fc].substring(0,3)},"%B":function(l){return K[l.fc]},"%C":function(l){return g((l.$b+1900)/100|0,2)},"%d":function(l){return g(l.ic,2)},"%e":function(l){return e(l.ic,2," ")},"%g":function(l){return p(l).toString().substring(2)},"%G":function(l){return p(l)},"%H":function(l){return g(l.nc,
2)},"%I":function(l){l=l.nc;0==l?l=12:12<l&&(l-=12);return g(l,2)},"%j":function(l){return g(l.ic+Ub(Tb(l.$b+1900)?Vb:Wb,l.fc-1),3)},"%m":function(l){return g(l.fc+1,2)},"%M":function(l){return g(l.Qc,2)},"%n":function(){return"\n"},"%p":function(l){return 0<=l.nc&&12>l.nc?"AM":"PM"},"%S":function(l){return g(l.Rc,2)},"%t":function(){return"\t"},"%u":function(l){return l.oc||7},"%U":function(l){var t=new Date(l.$b+1900,0,1),w=0===t.getDay()?t:Xb(t,7-t.getDay());l=new Date(l.$b+1900,l.fc,l.ic);return 0>
f(w,l)?g(Math.ceil((31-w.getDate()+(Ub(Tb(l.getFullYear())?Vb:Wb,l.getMonth()-1)-31)+l.getDate())/7),2):0===f(w,t)?"01":"00"},"%V":function(l){var t=new Date(l.$b+1901,0,4),w=n(new Date(l.$b+1900,0,4));t=n(t);var S=Xb(new Date(l.$b+1900,0,1),l.pc);return 0>f(S,w)?"53":0>=f(t,S)?"01":g(Math.ceil((w.getFullYear()<l.$b+1900?l.pc+32-w.getDate():l.pc+1-w.getDate())/7),2)},"%w":function(l){return l.oc},"%W":function(l){var t=new Date(l.$b,0,1),w=1===t.getDay()?t:Xb(t,0===t.getDay()?1:7-t.getDay()+1);l=
new Date(l.$b+1900,l.fc,l.ic);return 0>f(w,l)?g(Math.ceil((31-w.getDate()+(Ub(Tb(l.getFullYear())?Vb:Wb,l.getMonth()-1)-31)+l.getDate())/7),2):0===f(w,t)?"01":"00"},"%y":function(l){return(l.$b+1900).toString().substring(2)},"%Y":function(l){return l.$b+1900},"%z":function(l){l=l.Pc;var t=0<=l;l=Math.abs(l)/60;return(t?"+":"-")+String("0000"+(l/60*100+l%60)).slice(-4)},"%Z":function(l){return l.Sc},"%%":function(){return"%"}};for(r in q)c.includes(r)&&(c=c.replace(new RegExp(r,"g"),q[r](d)));r=Zb(c);
if(r.length>b)return 0;F.set(r,a);return r.length-1}for(var X,$b=new Float32Array(288),ac=0;288>ac;++ac)Z[ac]=$b.subarray(0,ac+1);function Zb(a){var b=Array(va(a)+1);D(a,b,0,b.length);return b}
var kc={la:function(){return 0},jb:function(){return 0},lb:function(){},ka:function(){B()},R:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},V:function(a,b,c){a=Q(a);if(!a)return-4;a=eb(a);J[b>>3]=a.width;J[c>>3]=a.height;return 0},db:function(a,b,c){E.copyWithin(a,b,b+c)},Ha:function(a,b){function c(d){L.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},eb:function(a){var b=E.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/
c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ma.grow(Math.min(2147483648,d)-xa.byteLength+65535>>>16);Ba();var e=1;break a}catch(g){}e=void 0}if(e)return!0}return!1},N:function(a,b,c){a=Q(a);if(!a)return-4;a.width=b;a.height=c;return 0},ea:function(a,b,c,d){fb(a,b,c,d,2,"keydown");return 0},ca:function(a,b,c,d){fb(a,b,c,d,1,"keypress");return 0},da:function(a,b,c,d){fb(a,b,c,d,3,"keyup");return 0},ma:function(a,b,c,d){hb(a,b,c,d,5,"mousedown");return 0},ha:function(a,
b,c,d){hb(a,b,c,d,33,"mouseenter");return 0},ga:function(a,b,c,d){hb(a,b,c,d,34,"mouseleave");return 0},ia:function(a,b,c,d){hb(a,b,c,d,8,"mousemove");return 0},ja:function(a,b,c,d){hb(a,b,c,d,6,"mouseup");return 0},Z:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.uc||document.body.wc||document.body.vc))return-1;a=Q(a);if(!a)return-4;ib(a,b,c,d,"pointerlockchange");ib(a,b,c,d,"mozpointerlockchange");ib(a,b,c,d,"webkitpointerlockchange");ib(a,b,c,
d,"mspointerlockchange");return 0},Y:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.uc||document.body.wc||document.body.vc))return-1;a=Q(a);if(!a)return-4;jb(a,b,c,d,"pointerlockerror");jb(a,b,c,d,"mozpointerlockerror");jb(a,b,c,d,"webkitpointerlockerror");jb(a,b,c,d,"mspointerlockerror");return 0},Oa:function(a,b,c,d){kb(a,b,c,d);return 0},_:function(a,b,c,d){lb(a,b,c,d,25,"touchcancel");return 0},$:function(a,b,c,d){lb(a,b,c,d,23,"touchend");return 0},aa:function(a,
b,c,d){lb(a,b,c,d,24,"touchmove");return 0},ba:function(a,b,c,d){lb(a,b,c,d,22,"touchstart");return 0},X:function(a,b,c,d){mb(a,b,c,d,31,"webglcontextlost");return 0},W:function(a,b,c,d){mb(a,b,c,d,32,"webglcontextrestored");return 0},fa:function(a,b,c,d){a=Q(a);return"undefined"!==typeof a.onwheel?(nb(a,b,c,d),0):-1},sa:function(a,b){b>>=2;b={alpha:!!H[b],depth:!!H[b+1],stencil:!!H[b+2],antialias:!!H[b+3],premultipliedAlpha:!!H[b+4],preserveDrawingBuffer:!!H[b+5],powerPreference:Ib[H[b+6]],failIfMajorPerformanceCaveat:!!H[b+
7],Bc:H[b+8],cd:H[b+9],zc:H[b+10],Lc:H[b+11],ed:H[b+12],gd:H[b+13]};a=Q(a);return!a||b.Lc?0:Fb(a,b)},rb:function(a,b){a=Ab[a];b=G(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&ob(X);"OES_vertex_array_object"==b&&pb(X);"WEBGL_draw_buffers"==b&&qb(X);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&rb(X);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&sb(X);"WEBGL_multi_draw"==b&&tb(X);return!!a.rc.getExtension(b)},za:function(a){a>>=2;for(var b=0;14>b;++b)H[a+
b]=0;H[a]=H[a+1]=H[a+3]=H[a+4]=H[a+8]=H[a+10]=1},Bb:function(a){W=Ab[a];h.Wc=X=W&&W.rc;return!a||X?0:-5},gb:function(a,b){var c=0;Kb().forEach(function(d,e){var g=b+c;e=H[a+4*e>>2]=g;for(g=0;g<d.length;++g)F[e++>>0]=d.charCodeAt(g);F[e>>0]=0;c+=d.length+1});return 0},hb:function(a,b){var c=Kb();H[a>>2]=c.length;var d=0;c.forEach(function(e){d+=e.length+1});H[b>>2]=d;return 0},na:function(){return 0},ib:function(a,b,c,d){a=Qa.$c(a);b=Qa.Yc(a,b,c);H[d>>2]=b;return 0},cb:function(){},kb:function(a,b,
c,d){for(var e=0,g=0;g<c;g++){for(var f=H[b+8*g>>2],n=H[b+(8*g+4)>>2],p=0;p<n;p++){var q=E[f+p],r=Pa[a];0===q||10===q?((1===a?ka:C)(ua(r,0)),r.length=0):r.push(q)}e+=n}H[d>>2]=e;return 0},b:function(a){X.activeTexture(a)},E:function(a,b){X.attachShader(T[a],U[b])},c:function(a,b){35051==a?X.xc=b:35052==a&&(X.dc=b);X.bindBuffer(a,vb[b])},h:function(a,b){X.bindFramebuffer(a,wb[b])},H:function(a,b){X.bindRenderbuffer(a,xb[b])},a:function(a,b){X.bindTexture(a,yb[b])},T:function(a){X.bindVertexArray(zb[a])},
O:function(a,b,c,d){X.blendColor(a,b,c,d)},P:function(a,b){X.blendEquationSeparate(a,b)},Q:function(a,b,c,d){X.blendFuncSeparate(a,b,c,d)},p:function(a,b,c,d,e,g,f,n,p,q){X.blitFramebuffer(a,b,c,d,e,g,f,n,p,q)},Ia:function(a,b,c,d){2<=W.version?c?X.bufferData(a,E,d,c,b):X.bufferData(a,b,d):X.bufferData(a,c?E.subarray(c,c+b):b,d)},J:function(a,b,c,d){2<=W.version?X.bufferSubData(a,b,E,d,c):X.bufferSubData(a,b,E.subarray(d,d+c))},Cb:function(a){X.clear(a)},ra:function(a,b,c,d){X.clearColor(a,b,c,d)},
Eb:function(a){X.clearDepth(a)},Db:function(a){X.clearStencil(a)},j:function(a,b,c,d){X.colorMask(!!a,!!b,!!c,!!d)},ua:function(a){X.compileShader(U[a])},Ea:function(a,b,c,d,e,g,f,n){2<=W.version?X.dc?X.compressedTexImage2D(a,b,c,d,e,g,f,n):X.compressedTexImage2D(a,b,c,d,e,g,E,n,f):X.compressedTexImage2D(a,b,c,d,e,g,n?E.subarray(n,n+f):null)},Ca:function(a,b,c,d,e,g,f,n,p){X.dc?X.compressedTexImage3D(a,b,c,d,e,g,f,n,p):X.compressedTexImage3D(a,b,c,d,e,g,f,E,p,n)},Aa:function(){var a=Eb(T),b=X.createProgram();
b.name=a;b.mc=b.kc=b.lc=0;b.tc=1;T[a]=b;return a},wa:function(a){var b=Eb(U);U[b]=X.createShader(a);return b},K:function(a){X.cullFace(a)},Qa:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=vb[d];e&&(X.deleteBuffer(e),e.name=0,vb[d]=null,d==X.xc&&(X.xc=0),d==X.dc&&(X.dc=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=H[b+4*c>>2],e=wb[d];e&&(X.deleteFramebuffer(e),e.name=0,wb[d]=null)}},y:function(a){if(a){var b=T[a];b?(X.deleteProgram(b),b.name=0,T[a]=null):V(1281)}},U:function(a,b){for(var c=
0;c<a;c++){var d=H[b+4*c>>2],e=xb[d];e&&(X.deleteRenderbuffer(e),e.name=0,xb[d]=null)}},u:function(a){if(a){var b=U[a];b?(X.deleteShader(b),U[a]=null):V(1281)}},Pa:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=yb[d];e&&(X.deleteTexture(e),e.name=0,yb[d]=null)}},Na:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2];X.deleteVertexArray(zb[d]);zb[d]=null}},x:function(a){X.depthFunc(a)},w:function(a){X.depthMask(!!a)},e:function(a){X.disable(a)},S:function(a){X.disableVertexAttribArray(a)},
pb:function(a,b,c){X.drawArrays(a,b,c)},ob:function(a,b,c,d){X.drawArraysInstanced(a,b,c,d)},sb:function(a,b,c,d){X.drawElements(a,b,c,d)},qb:function(a,b,c,d,e){X.drawElementsInstanced(a,b,c,d,e)},g:function(a){X.enable(a)},yb:function(a){X.enableVertexAttribArray(a)},L:function(a){X.frontFace(a)},Ja:function(a,b){Nb(a,b,"createBuffer",vb)},I:function(a,b){Nb(a,b,"createRenderbuffer",xb)},Fa:function(a,b){Nb(a,b,"createTexture",yb)},Ma:function(a,b){Nb(a,b,"createVertexArray",zb)},Fb:function(a,
b){return X.getAttribLocation(T[a],G(b))},d:function(a,b){Ob(a,b)},xa:function(a,b,c,d){a=X.getProgramInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(H[c>>2]=b)},D:function(a,b,c){if(c)if(a>=ub)V(1281);else if(a=T[a],35716==b)a=X.getProgramInfoLog(a),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1;else if(35719==b){if(!a.mc)for(b=0;b<X.getProgramParameter(a,35718);++b)a.mc=Math.max(a.mc,X.getActiveUniform(a,b).name.length+1);H[c>>2]=a.mc}else if(35722==b){if(!a.kc)for(b=
0;b<X.getProgramParameter(a,35721);++b)a.kc=Math.max(a.kc,X.getActiveAttrib(a,b).name.length+1);H[c>>2]=a.kc}else if(35381==b){if(!a.lc)for(b=0;b<X.getProgramParameter(a,35382);++b)a.lc=Math.max(a.lc,X.getActiveUniformBlockName(a,b).length+1);H[c>>2]=a.lc}else H[c>>2]=X.getProgramParameter(a,b);else V(1281)},Gb:function(a,b,c,d){a=X.getShaderInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(H[c>>2]=b)},B:function(a,b,c){c?35716==b?(a=X.getShaderInfoLog(U[a]),null===a&&(a="(unknown error)"),
H[c>>2]=a?a.length+1:0):35720==b?(a=X.getShaderSource(U[a]),H[c>>2]=a?a.length+1:0):H[c>>2]=X.getShaderParameter(U[a],b):V(1281)},Sa:function(a){var b=Bb[a];if(!b){switch(a){case 7939:b=X.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Pb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=X.getParameter(a))||V(1280);b=b&&Pb(b);break;case 7938:b=X.getParameter(7938);b=2<=W.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Pb(b);break;case 35724:b=X.getParameter(35724);
var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Pb(b);break;default:V(1280)}Bb[a]=b}return b},Ra:function(a,b){if(2>W.version)return V(1282),0;var c=Cb[a];if(c)return 0>b||b>=c.length?(V(1281),0):c[b];switch(a){case 7939:return c=X.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Pb(d)}),c=Cb[a]=c,0>b||b>=c.length?(V(1281),0):c[b];default:return V(1280),
0}},l:function(a,b){function c(l){return"]"==l.slice(-1)&&l.lastIndexOf("[")}b=G(b);a=T[a];var d=a.qc,e=a.Tc,g,f=0,n=b,p=c(b);if(!d)for(a.qc=d={},a.Ic={},g=0;g<X.getProgramParameter(a,35718);++g){var q=X.getActiveUniform(a,g);var r=q.name;q=q.size;var z=c(r);z=0<z?r.slice(0,z):r;var K=a.tc;a.tc+=q;e[z]=[q,K];for(r=0;r<q;++r)d[K]=r,a.Ic[K++]=z}0<p&&(f=parseInt(b.slice(p+1))>>>0,n=b.slice(0,p));return(e=e[n])&&f<e[0]&&(f+=e[1],d[f]=d[f]||X.getUniformLocation(a,b))?f:-1},ya:function(a){a=T[a];X.linkProgram(a);
a.qc=0;a.Tc={}},M:function(a,b){X.polygonOffset(a,b)},q:function(a){X.readBuffer(a)},Ga:function(a,b,c,d){X.renderbufferStorage(a,b,c,d)},G:function(a,b,c,d,e){X.renderbufferStorageMultisample(a,b,c,d,e)},r:function(a,b,c,d){X.scissor(a,b,c,d)},va:function(a,b,c,d){for(var e="",g=0;g<b;++g){var f=d?H[d+4*g>>2]:-1;e+=G(H[c+4*g>>2],0>f?void 0:f)}X.shaderSource(U[a],e)},La:function(a,b,c){X.stencilFunc(a,b,c)},qa:function(a,b,c,d){X.stencilFuncSeparate(a,b,c,d)},v:function(a){X.stencilMask(a)},Ka:function(a,
b,c){X.stencilOp(a,b,c)},pa:function(a,b,c,d){X.stencilOpSeparate(a,b,c,d)},Da:function(a,b,c,d,e,g,f,n,p){if(2<=W.version)if(X.dc)X.texImage2D(a,b,c,d,e,g,f,n,p);else if(p){var q=Qb(n);X.texImage2D(a,b,c,d,e,g,f,n,q,p>>Rb(q))}else X.texImage2D(a,b,c,d,e,g,f,n,null);else X.texImage2D(a,b,c,d,e,g,f,n,p?Sb(n,f,d,e,p):null)},Ba:function(a,b,c,d,e,g,f,n,p,q){if(X.dc)X.texImage3D(a,b,c,d,e,g,f,n,p,q);else if(q){var r=Qb(p);X.texImage3D(a,b,c,d,e,g,f,n,p,r,q>>Rb(r))}else X.texImage3D(a,b,c,d,e,g,f,n,p,
null)},F:function(a,b,c){X.texParameterf(a,b,c)},f:function(a,b,c){X.texParameteri(a,b,c)},nb:function(a,b,c,d,e,g,f,n,p){if(2<=W.version)if(X.dc)X.texSubImage2D(a,b,c,d,e,g,f,n,p);else if(p){var q=Qb(n);X.texSubImage2D(a,b,c,d,e,g,f,n,q,p>>Rb(q))}else X.texSubImage2D(a,b,c,d,e,g,f,n,null);else q=null,p&&(q=Sb(n,f,e,g,p)),X.texSubImage2D(a,b,c,d,e,g,f,n,q)},mb:function(a,b,c,d,e,g,f,n,p,q,r){if(X.dc)X.texSubImage3D(a,b,c,d,e,g,f,n,p,q,r);else if(r){var z=Qb(q);X.texSubImage3D(a,b,c,d,e,g,f,n,p,q,
z,r>>Rb(z))}else X.texSubImage3D(a,b,c,d,e,g,f,n,p,q,null)},xb:function(a,b,c){if(2<=W.version)X.uniform1fv(Y(a),I,c>>2,b);else{if(288>=b)for(var d=Z[b-1],e=0;e<b;++e)d[e]=I[c+4*e>>2];else d=I.subarray(c>>2,c+4*b>>2);X.uniform1fv(Y(a),d)}},C:function(a,b){X.uniform1i(Y(a),b)},wb:function(a,b,c){if(2<=W.version)X.uniform2fv(Y(a),I,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],e=0;e<2*b;e+=2)d[e]=I[c+4*e>>2],d[e+1]=I[c+(4*e+4)>>2];else d=I.subarray(c>>2,c+8*b>>2);X.uniform2fv(Y(a),d)}},vb:function(a,
b,c){if(2<=W.version)X.uniform3fv(Y(a),I,c>>2,3*b);else{if(96>=b)for(var d=Z[3*b-1],e=0;e<3*b;e+=3)d[e]=I[c+4*e>>2],d[e+1]=I[c+(4*e+4)>>2],d[e+2]=I[c+(4*e+8)>>2];else d=I.subarray(c>>2,c+12*b>>2);X.uniform3fv(Y(a),d)}},ub:function(a,b,c){if(2<=W.version)X.uniform4fv(Y(a),I,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],e=I;c>>=2;for(var g=0;g<4*b;g+=4){var f=c+g;d[g]=e[f];d[g+1]=e[f+1];d[g+2]=e[f+2];d[g+3]=e[f+3]}}else d=I.subarray(c>>2,c+16*b>>2);X.uniform4fv(Y(a),d)}},tb:function(a,b,c,d){if(2<=W.version)X.uniformMatrix4fv(Y(a),
!!c,I,d>>2,16*b);else{if(18>=b){var e=Z[16*b-1],g=I;d>>=2;for(var f=0;f<16*b;f+=16){var n=d+f;e[f]=g[n];e[f+1]=g[n+1];e[f+2]=g[n+2];e[f+3]=g[n+3];e[f+4]=g[n+4];e[f+5]=g[n+5];e[f+6]=g[n+6];e[f+7]=g[n+7];e[f+8]=g[n+8];e[f+9]=g[n+9];e[f+10]=g[n+10];e[f+11]=g[n+11];e[f+12]=g[n+12];e[f+13]=g[n+13];e[f+14]=g[n+14];e[f+15]=g[n+15]}}else e=I.subarray(d>>2,d+64*b>>2);X.uniformMatrix4fv(Y(a),!!c,e)}},k:function(a){a=T[a];X.useProgram(a);X.Jc=a},zb:function(a,b){X.vertexAttribDivisor(a,b)},Ab:function(a,b,c,
d,e,g){X.vertexAttribPointer(a,b,c,!!d,e,g)},s:function(a,b,c,d){X.viewport(a,b,c,d)},bb:function(){h.Cc=function(a){0!=bc()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",h.Cc)},ab:function(){h.Hc=function(a){a=a.clipboardData.getData("text");pa("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",h.Hc)},_a:function(a){h.hd=[];a=G(a);a=document.getElementById(a);h.Dc=function(b){b.stopPropagation();b.preventDefault()};h.Ec=function(b){b.stopPropagation();
b.preventDefault()};h.Fc=function(b){b.stopPropagation();b.preventDefault()};h.Gc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;h.jd=c;cc(c.length);var d;for(d=0;d<c.length;d++)pa("_sapp_emsc_drop",["number","string"],[d,c[d].name]);dc(b.clientX,b.clientY)};a.addEventListener("dragenter",h.Dc,!1);a.addEventListener("dragleave",h.Ec,!1);a.addEventListener("dragover",h.Fc,!1);a.addEventListener("drop",h.Gc,!1)},Ua:function(){var a=document.getElementById("sokol-app-favicon");
a&&document.head.removeChild(a)},o:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){ec()});document.body.append(a)},Wa:function(){document.exitPointerLock&&document.exitPointerLock()},n:function(){document.getElementById("_sokol_app_input_element").focus()},$a:function(a){a=G(a);h.hc=document.getElementById(a);h.hc||console.log("sokol_app.h: invalid target:"+a);h.hc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+
a)},Za:function(){window.removeEventListener("beforeunload",h.Cc)},Ya:function(){window.removeEventListener("paste",h.Hc)},Xa:function(a){a=G(a);a=document.getElementById(a);a.removeEventListener("dragenter",h.Dc);a.removeEventListener("dragleave",h.Ec);a.removeEventListener("dragover",h.Fc);a.removeEventListener("drop",h.Gc)},z:function(){h.hc&&h.hc.requestPointerLock&&h.hc.requestPointerLock()},Ta:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),
g=e.createImageData(a,b);g.data.set(E.subarray(c,c+a*b*4));e.putImageData(g,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},m:function(){document.getElementById("_sokol_app_input_element").blur()},Va:function(a){a=G(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left=
"-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},A:function(a,b,c,d,e,g){b=G(b);var f=new XMLHttpRequest;f.open("GET",b);f.responseType="arraybuffer";var n=0<d;n&&f.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));f.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!n){var p=new Uint8Array(f.response),q=p.length;q<=g?(E.set(p,e),
fc(a,d,q)):hc(a)}else ic(a,this.status)};f.send()},oa:function(a,b){b=G(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var d=this.getResponseHeader("Content-Length");jc(a,d)}else ic(a,this.status)};c.send()},ta:function(){return navigator.userAgent.includes("Macintosh")?1:0},t:function(){return performance.now()},fb:function(a,b,c,d){return Yb(a,b,c,d)}};
(function(){function a(e){h.asm=e.exports;ma=h.asm.Hb;Ba();L=h.asm._b;Da.unshift(h.asm.Ib);M--;h.monitorRunDependencies&&h.monitorRunDependencies(M);0==M&&(null!==Ia&&(clearInterval(Ia),Ia=null),Ja&&(e=Ja,Ja=null,e()))}function b(e){a(e.instance)}function c(e){return Na().then(function(g){return WebAssembly.instantiate(g,d)}).then(e,function(g){C("failed to asynchronously prepare wasm: "+g);B(g)})}var d={a:kc};M++;h.monitorRunDependencies&&h.monitorRunDependencies(M);if(h.instantiateWasm)try{return h.instantiateWasm(d,
a)}catch(e){return C("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return la||"function"!==typeof WebAssembly.instantiateStreaming||Ka()||N.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(N,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(g){C("wasm streaming compile failed: "+g);C("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
h.___wasm_call_ctors=function(){return(h.___wasm_call_ctors=h.asm.Ib).apply(null,arguments)};var R=h._malloc=function(){return(R=h._malloc=h.asm.Jb).apply(null,arguments)},ec=h.__sapp_emsc_notify_keyboard_hidden=function(){return(ec=h.__sapp_emsc_notify_keyboard_hidden=h.asm.Kb).apply(null,arguments)};h.__sapp_emsc_onpaste=function(){return(h.__sapp_emsc_onpaste=h.asm.Lb).apply(null,arguments)};
var bc=h.__sapp_html5_get_ask_leave_site=function(){return(bc=h.__sapp_html5_get_ask_leave_site=h.asm.Mb).apply(null,arguments)},cc=h.__sapp_emsc_begin_drop=function(){return(cc=h.__sapp_emsc_begin_drop=h.asm.Nb).apply(null,arguments)};h.__sapp_emsc_drop=function(){return(h.__sapp_emsc_drop=h.asm.Ob).apply(null,arguments)};var dc=h.__sapp_emsc_end_drop=function(){return(dc=h.__sapp_emsc_end_drop=h.asm.Pb).apply(null,arguments)};
h.__sapp_emsc_invoke_fetch_cb=function(){return(h.__sapp_emsc_invoke_fetch_cb=h.asm.Qb).apply(null,arguments)};h._main=function(){return(h._main=h.asm.Rb).apply(null,arguments)};h.__saudio_emsc_pull=function(){return(h.__saudio_emsc_pull=h.asm.Sb).apply(null,arguments)};
var jc=h.__sfetch_emsc_head_response=function(){return(jc=h.__sfetch_emsc_head_response=h.asm.Tb).apply(null,arguments)},fc=h.__sfetch_emsc_get_response=function(){return(fc=h.__sfetch_emsc_get_response=h.asm.Ub).apply(null,arguments)},ic=h.__sfetch_emsc_failed_http_status=function(){return(ic=h.__sfetch_emsc_failed_http_status=h.asm.Vb).apply(null,arguments)},hc=h.__sfetch_emsc_failed_buffer_too_small=function(){return(hc=h.__sfetch_emsc_failed_buffer_too_small=h.asm.Wb).apply(null,arguments)},ra=
h.stackSave=function(){return(ra=h.stackSave=h.asm.Xb).apply(null,arguments)},sa=h.stackRestore=function(){return(sa=h.stackRestore=h.asm.Yb).apply(null,arguments)},qa=h.stackAlloc=function(){return(qa=h.stackAlloc=h.asm.Zb).apply(null,arguments)},lc;function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Ja=function mc(){lc||nc();lc||(Ja=mc)};
function nc(a){function b(){if(!lc&&(lc=!0,h.calledRun=!0,!na)){Oa(Da);Oa(Ea);if(h.onRuntimeInitialized)h.onRuntimeInitialized();if(oc){var c=a,d=h._main;c=c||[];var e=c.length+1,g=qa(4*(e+1));H[g>>2]=wa(aa);for(var f=1;f<e;f++)H[(g>>2)+f]=wa(c[f-1]);H[(g>>2)+e]=0;try{var n=d(e,g);if(!noExitRuntime||0!==n){if(!noExitRuntime){if(h.onExit)h.onExit(n);na=!0}v(n,new ja(n))}}catch(p){p instanceof ja||"unwind"==p||((c=p)&&"object"===typeof p&&p.stack&&(c=[p,p.stack]),C("exception thrown: "+c),v(1,p))}finally{}}if(h.postRun)for("function"==
typeof h.postRun&&(h.postRun=[h.postRun]);h.postRun.length;)c=h.postRun.shift(),Ga.unshift(c);Oa(Ga)}}a=a||u;if(!(0<M)){if(h.preRun)for("function"==typeof h.preRun&&(h.preRun=[h.preRun]);h.preRun.length;)Ha();Oa(Ca);0<M||(h.setStatus?(h.setStatus("Running..."),setTimeout(function(){setTimeout(function(){h.setStatus("")},1);b()},1)):b())}}h.run=nc;if(h.preInit)for("function"==typeof h.preInit&&(h.preInit=[h.preInit]);0<h.preInit.length;)h.preInit.pop()();var oc=!0;h.noInitialRun&&(oc=!1);nc();
