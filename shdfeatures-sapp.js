
var h;h||(h=typeof Module !== 'undefined' ? Module : {});var k={},m;for(m in h)h.hasOwnProperty(m)&&(k[m]=h[m]);var aa=[],ba="./this.program";function da(a,b){throw b;}var ea="object"===typeof window,u="function"===typeof importScripts,v="",fa,ha,ia,w,y;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)v=u?require("path").dirname(v)+"/":__dirname+"/",fa=function(a,b){w||(w=require("fs"));y||(y=require("path"));a=y.normalize(a);return w.readFileSync(a,b?null:"utf8")},ia=function(a){a=fa(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||z("Assertion failed: undefined");return a},ha=function(a,b,c){w||(w=require("fs"));y||(y=require("path"));a=y.normalize(a);w.readFile(a,function(d,e){d?c(d):b(e.buffer)})},
1<process.argv.length&&(ba=process.argv[1].replace(/\\/g,"/")),aa=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=h),process.on("uncaughtException",function(a){if(!(a instanceof ja))throw a;}),process.on("unhandledRejection",z),da=function(a,b){if(noExitRuntime||0<ka)throw process.exitCode=a,b;process.exit(a)},h.inspect=function(){return"[Emscripten Module object]"};else if(ea||u)u?v=self.location.href:"undefined"!==typeof document&&document.currentScript&&(v=document.currentScript.src),
v=0!==v.indexOf("blob:")?v.substr(0,v.lastIndexOf("/")+1):"",fa=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(ia=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ha=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};
var la=h.print||console.log.bind(console),A=h.printErr||console.warn.bind(console);for(m in k)k.hasOwnProperty(m)&&(h[m]=k[m]);k=null;h.arguments&&(aa=h.arguments);h.thisProgram&&(ba=h.thisProgram);h.quit&&(da=h.quit);var B;h.wasmBinary&&(B=h.wasmBinary);var noExitRuntime=h.noExitRuntime||!0;"object"!==typeof WebAssembly&&z("no native wasm support detected");var ma,na=!1;
function oa(a){var b=h["_"+a];b||z("Assertion failed: Cannot call unknown function "+(a+", make sure it is exported"));return b}function pa(a,b,c){var d={string:function(p){var q=0;if(null!==p&&void 0!==p&&0!==p){var r=(p.length<<2)+1;q=C(r);D(p,E,q,r)}return q},array:function(p){var q=C(p.length);F.set(p,q);return q}};a=oa(a);var e=[],f=0;if(c)for(var g=0;g<c.length;g++){var n=d[b[g]];n?(0===f&&(f=qa()),e[g]=n(c[g])):e[g]=c[g]}a.apply(null,e);0!==f&&ra(f)}
var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ta(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&sa)return sa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var f=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|f);else{var g=a[b++]&63;e=224==(e&240)?(e&15)<<12|f<<6|g:(e&7)<<18|f<<12|g<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function G(a,b){return a?ta(E,a,b):""}
function D(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var f=0;f<a.length;++f){var g=a.charCodeAt(f);if(55296<=g&&57343>=g){var n=a.charCodeAt(++f);g=65536+((g&1023)<<10)|n&1023}if(127>=g){if(c>=d)break;b[c++]=g}else{if(2047>=g){if(c+1>=d)break;b[c++]=192|g>>6}else{if(65535>=g){if(c+2>=d)break;b[c++]=224|g>>12}else{if(c+3>=d)break;b[c++]=240|g>>18;b[c++]=128|g>>12&63}b[c++]=128|g>>6&63}b[c++]=128|g&63}}b[c]=0;return c-e}
function ua(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function va(a){var b=ua(a)+1,c=C(b);D(a,F,c,b);return c}var wa,F,E,xa,ya,H,za,I,J;
function Aa(){var a=ma.buffer;wa=a;h.HEAP8=F=new Int8Array(a);h.HEAP16=xa=new Int16Array(a);h.HEAP32=H=new Int32Array(a);h.HEAPU8=E=new Uint8Array(a);h.HEAPU16=ya=new Uint16Array(a);h.HEAPU32=za=new Uint32Array(a);h.HEAPF32=I=new Float32Array(a);h.HEAPF64=J=new Float64Array(a)}var K,Ba=[],Ca=[],Da=[],Ea=[],Fa=[],ka=0;function Ga(){var a=h.preRun.shift();Ba.unshift(a)}var L=0,Ha=null,Ia=null;h.preloadedImages={};h.preloadedAudios={};
function z(a){if(h.onAbort)h.onAbort(a);A(a);na=!0;throw new WebAssembly.RuntimeError("abort("+a+"). Build with -s ASSERTIONS=1 for more info.");}function Ja(){return M.startsWith("data:application/octet-stream;base64,")}var M;M="shdfeatures-sapp.wasm";if(!Ja()){var Ka=M;M=h.locateFile?h.locateFile(Ka,v):v+Ka}function La(){var a=M;try{if(a==M&&B)return new Uint8Array(B);if(ia)return ia(a);throw"both async and sync fetching of the wasm failed";}catch(b){z(b)}}
function Ma(){if(!B&&(ea||u)){if("function"===typeof fetch&&!M.startsWith("file://"))return fetch(M,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+M+"'";return a.arrayBuffer()}).catch(function(){return La()});if(ha)return new Promise(function(a,b){ha(M,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return La()})}
function Na(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(h);else{var c=b.Yc;"number"===typeof c?void 0===b.rc?K.get(c)():K.get(c)(b.rc):c(void 0===b.rc?null:b.rc)}}}var Oa=[null,[],[]],Pa={},Qa=0;function Ra(){for(var a=O.length-1;0<=a;--a)Sa(a);O=[];Ta=[]}var Ta=[];function Ua(){if(Qa&&Va.jc)for(var a=0;a<Ta.length;++a){var b=Ta[a];Ta.splice(a,1);--a;b.jd.apply(null,b.Uc)}}var O=[];function Sa(a){var b=O[a];b.target.removeEventListener(b.$b,b.Kc,b.ac);O.splice(a,1)}
function P(a){function b(d){++Qa;Va=a;Ua();a.dc(d);Ua();--Qa}if(a.bc)a.Kc=b,a.target.addEventListener(a.$b,b,a.ac),O.push(a),Wa||(Ea.push(Ra),Wa=!0);else for(var c=0;c<O.length;++c)O[c].target==a.target&&O[c].$b==a.$b&&Sa(c--)}var Wa,Va,Xa,Ya,Za,$a,ab,bb,cb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function Q(a){a=2<a?G(a):a;return cb[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}
function db(a){return 0>cb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}function eb(a,b,c,d,e,f){Xa||(Xa=S(164));a={target:Q(a),jc:!0,$b:f,bc:d,dc:function(g){var n=Xa,p=n>>2;H[p]=g.location;H[p+1]=g.ctrlKey;H[p+2]=g.shiftKey;H[p+3]=g.altKey;H[p+4]=g.metaKey;H[p+5]=g.repeat;H[p+6]=g.charCode;H[p+7]=g.keyCode;H[p+8]=g.which;D(g.key||"",E,n+36,32);D(g.code||"",E,n+68,32);D(g.char||"",E,n+100,32);D(g.locale||"",E,n+132,32);K.get(d)(e,n,b)&&g.preventDefault()},ac:c};P(a)}
function fb(a,b,c){a>>=2;H[a]=b.screenX;H[a+1]=b.screenY;H[a+2]=b.clientX;H[a+3]=b.clientY;H[a+4]=b.ctrlKey;H[a+5]=b.shiftKey;H[a+6]=b.altKey;H[a+7]=b.metaKey;xa[2*a+16]=b.button;xa[2*a+17]=b.buttons;H[a+9]=b.movementX;H[a+10]=b.movementY;c=db(c);H[a+11]=b.clientX-c.left;H[a+12]=b.clientY-c.top}function gb(a,b,c,d,e,f){Ya||(Ya=S(64));a=Q(a);P({target:a,jc:"mousemove"!=f&&"mouseenter"!=f&&"mouseleave"!=f,$b:f,bc:d,dc:function(g){g=g||event;fb(Ya,g,a);K.get(d)(e,Ya,b)&&g.preventDefault()},ac:c})}
function hb(a,b,c,d,e){Za||(Za=S(260));P({target:a,$b:e,bc:d,dc:function(f){f=f||event;var g=Za,n=document.pointerLockElement||document.uc||document.vc||document.tc;H[g>>2]=!!n;var p=n&&n.id?n.id:"";D(n?n==window?"#window":n==screen?"#screen":n&&n.nodeName?n.nodeName:"":"",E,g+4,128);D(p,E,g+132,128);K.get(d)(20,g,b)&&f.preventDefault()},ac:c})}function ib(a,b,c,d,e){P({target:a,$b:e,bc:d,dc:function(f){f=f||event;K.get(d)(38,0,b)&&f.preventDefault()},ac:c})}
function jb(a,b,c,d){$a||($a=S(36));a=Q(a);P({target:a,$b:"resize",bc:d,dc:function(e){e=e||event;if(e.target==a){var f=document.body;if(f){var g=$a;H[g>>2]=e.detail;H[g+4>>2]=f.clientWidth;H[g+8>>2]=f.clientHeight;H[g+12>>2]=innerWidth;H[g+16>>2]=innerHeight;H[g+20>>2]=outerWidth;H[g+24>>2]=outerHeight;H[g+28>>2]=pageXOffset;H[g+32>>2]=pageYOffset;K.get(d)(10,g,b)&&e.preventDefault()}}},ac:c})}
function kb(a,b,c,d,e,f){ab||(ab=S(1684));a=Q(a);P({target:a,jc:"touchstart"==f||"touchend"==f,$b:f,bc:d,dc:function(g){for(var n={},p=g.touches,q=0;q<p.length;++q){var r=p[q];n[r.identifier]=r}p=g.changedTouches;for(q=0;q<p.length;++q)r=p[q],r.Nc=1,n[r.identifier]=r;p=g.targetTouches;for(q=0;q<p.length;++q)n[p[q].identifier].Oc=1;p=ab;r=p>>2;H[r+1]=g.ctrlKey;H[r+2]=g.shiftKey;H[r+3]=g.altKey;H[r+4]=g.metaKey;r+=5;var N=db(a),ca=0;for(q in n){var l=n[q];H[r]=l.identifier;H[r+1]=l.screenX;H[r+2]=l.screenY;
H[r+3]=l.clientX;H[r+4]=l.clientY;H[r+5]=l.pageX;H[r+6]=l.pageY;H[r+7]=l.Nc;H[r+8]=l.Oc;H[r+9]=l.clientX-N.left;H[r+10]=l.clientY-N.top;r+=13;if(31<++ca)break}H[p>>2]=ca;K.get(d)(e,p,b)&&g.preventDefault()},ac:c})}function lb(a,b,c,d,e,f){a={target:Q(a),$b:f,bc:d,dc:function(g){g=g||event;K.get(d)(e,0,b)&&g.preventDefault()},ac:c};P(a)}
function mb(a,b,c,d){bb||(bb=S(96));P({target:a,jc:!0,$b:"wheel",bc:d,dc:function(e){e=e||event;var f=bb;fb(f,e,a);J[f+64>>3]=e.deltaX;J[f+72>>3]=e.deltaY;J[f+80>>3]=e.deltaZ;H[f+88>>2]=e.deltaMode;K.get(d)(9,f,b)&&e.preventDefault()},ac:c})}
function nb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,f){b.drawArraysInstancedANGLE(c,d,e,f)},a.drawElementsInstanced=function(c,d,e,f,g){b.drawElementsInstancedANGLE(c,d,e,f,g)})}
function ob(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function pb(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function qb(a){a.Wc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function rb(a){a.ad=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function sb(a){a.cd=a.getExtension("WEBGL_multi_draw")}var tb=1,ub=[],T=[],vb=[],wb=[],xb=[],U=[],yb=[],zb=[],Ab={},Bb={};function V(a){Cb||(Cb=a)}function Db(a){for(var b=tb++,c=a.length;c<b;c++)a[c]=null;return b}
function Eb(a,b){a.zc||(a.zc=a.getContext,a.getContext=function(d,e){e=a.zc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Ac?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Fb(c,b):0}function Fb(a,b){var c=Db(zb),d={$c:c,attributes:b,version:b.Ac,qc:a};a.canvas&&(a.canvas.Tc=d);zb[c]=d;("undefined"===typeof b.yc||b.yc)&&Gb(d);return c}
function Gb(a){a||(a=W);if(!a.Mc){a.Mc=!0;var b=a.qc;nb(b);ob(b);pb(b);qb(b);rb(b);2<=a.version&&(b.xc=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.xc)b.xc=b.getExtension("EXT_disjoint_timer_query");sb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Cb,W,Hb=["default","low-power","high-performance"],Ib={};
function Jb(){if(!Kb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ba||"./this.program"},b;for(b in Ib)void 0===Ib[b]?delete a[b]:a[b]=Ib[b];var c=[];for(b in a)c.push(b+"="+a[b]);Kb=c}return Kb}var Kb;function Lb(a,b,c,d){for(var e=0;e<a;e++){var f=X[c](),g=f&&Db(d);f?(f.name=g,d[g]=f):V(1282);H[b+4*e>>2]=g}}
function Nb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=X.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){V(1282);return}c=2*(X.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>W.version){V(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=X.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)H[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){V(1280);A("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:V(1280);A("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}H[b>>2]=c}else V(1281)}
function Ob(a){var b=ua(a)+1,c=S(b);D(a,E,c,b);return c}function Pb(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Qb(a){a-=5120;return 0==a?F:1==a?E:2==a?xa:4==a?H:6==a?I:5==a||28922==a||28520==a||30779==a||30782==a?za:ya}function Rb(a){return 31-Math.clz32(a.BYTES_PER_ELEMENT)}function Sb(a,b,c,d,e){a=Qb(a);var f=Rb(a);return a.subarray(e>>f,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<f)+4-1&-4)>>f)}
function Y(a){var b=X.Jc;if(b){var c=b.ic[a];"number"===typeof c&&(b.ic[a]=c=X.getUniformLocation(b,b.Hc[a]+(0<c?"["+c+"]":"")));return c}V(1282)}var Z=[];function Tb(a){return 0===a%4&&(0!==a%100||0===a%400)}function Ub(a,b){for(var c=0,d=0;d<=b;c+=a[d++]);return c}var Vb=[31,29,31,30,31,30,31,31,30,31,30,31],Wb=[31,28,31,30,31,30,31,31,30,31,30,31];
function Xb(a,b){for(a=new Date(a.getTime());0<b;){var c=a.getMonth(),d=(Tb(a.getFullYear())?Vb:Wb)[c];if(b>d-a.getDate())b-=d-a.getDate()+1,a.setDate(1),11>c?a.setMonth(c+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}
function Yb(a,b,c,d){function e(l,t,x){for(l="number"===typeof l?l.toString():l||"";l.length<t;)l=x[0]+l;return l}function f(l,t){return e(l,t,"0")}function g(l,t){function x(Mb){return 0>Mb?-1:0<Mb?1:0}var R;0===(R=x(l.getFullYear()-t.getFullYear()))&&0===(R=x(l.getMonth()-t.getMonth()))&&(R=x(l.getDate()-t.getDate()));return R}function n(l){switch(l.getDay()){case 0:return new Date(l.getFullYear()-1,11,29);case 1:return l;case 2:return new Date(l.getFullYear(),0,3);case 3:return new Date(l.getFullYear(),
0,2);case 4:return new Date(l.getFullYear(),0,1);case 5:return new Date(l.getFullYear()-1,11,31);case 6:return new Date(l.getFullYear()-1,11,30)}}function p(l){l=Xb(new Date(l.Zb+1900,0,1),l.pc);var t=new Date(l.getFullYear()+1,0,4),x=n(new Date(l.getFullYear(),0,4));t=n(t);return 0>=g(x,l)?0>=g(t,l)?l.getFullYear()+1:l.getFullYear():l.getFullYear()-1}var q=H[d+40>>2];d={Rc:H[d>>2],Qc:H[d+4>>2],nc:H[d+8>>2],hc:H[d+12>>2],ec:H[d+16>>2],Zb:H[d+20>>2],oc:H[d+24>>2],pc:H[d+28>>2],kd:H[d+32>>2],Pc:H[d+
36>>2],Sc:q?G(q):""};c=G(c);q={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var r in q)c=c.replace(new RegExp(r,"g"),q[r]);var N="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
ca="January February March April May June July August September October November December".split(" ");q={"%a":function(l){return N[l.oc].substring(0,3)},"%A":function(l){return N[l.oc]},"%b":function(l){return ca[l.ec].substring(0,3)},"%B":function(l){return ca[l.ec]},"%C":function(l){return f((l.Zb+1900)/100|0,2)},"%d":function(l){return f(l.hc,2)},"%e":function(l){return e(l.hc,2," ")},"%g":function(l){return p(l).toString().substring(2)},"%G":function(l){return p(l)},"%H":function(l){return f(l.nc,
2)},"%I":function(l){l=l.nc;0==l?l=12:12<l&&(l-=12);return f(l,2)},"%j":function(l){return f(l.hc+Ub(Tb(l.Zb+1900)?Vb:Wb,l.ec-1),3)},"%m":function(l){return f(l.ec+1,2)},"%M":function(l){return f(l.Qc,2)},"%n":function(){return"\n"},"%p":function(l){return 0<=l.nc&&12>l.nc?"AM":"PM"},"%S":function(l){return f(l.Rc,2)},"%t":function(){return"\t"},"%u":function(l){return l.oc||7},"%U":function(l){var t=new Date(l.Zb+1900,0,1),x=0===t.getDay()?t:Xb(t,7-t.getDay());l=new Date(l.Zb+1900,l.ec,l.hc);return 0>
g(x,l)?f(Math.ceil((31-x.getDate()+(Ub(Tb(l.getFullYear())?Vb:Wb,l.getMonth()-1)-31)+l.getDate())/7),2):0===g(x,t)?"01":"00"},"%V":function(l){var t=new Date(l.Zb+1901,0,4),x=n(new Date(l.Zb+1900,0,4));t=n(t);var R=Xb(new Date(l.Zb+1900,0,1),l.pc);return 0>g(R,x)?"53":0>=g(t,R)?"01":f(Math.ceil((x.getFullYear()<l.Zb+1900?l.pc+32-x.getDate():l.pc+1-x.getDate())/7),2)},"%w":function(l){return l.oc},"%W":function(l){var t=new Date(l.Zb,0,1),x=1===t.getDay()?t:Xb(t,0===t.getDay()?1:7-t.getDay()+1);l=
new Date(l.Zb+1900,l.ec,l.hc);return 0>g(x,l)?f(Math.ceil((31-x.getDate()+(Ub(Tb(l.getFullYear())?Vb:Wb,l.getMonth()-1)-31)+l.getDate())/7),2):0===g(x,t)?"01":"00"},"%y":function(l){return(l.Zb+1900).toString().substring(2)},"%Y":function(l){return l.Zb+1900},"%z":function(l){l=l.Pc;var t=0<=l;l=Math.abs(l)/60;return(t?"+":"-")+String("0000"+(l/60*100+l%60)).slice(-4)},"%Z":function(l){return l.Sc},"%%":function(){return"%"}};for(r in q)c.includes(r)&&(c=c.replace(new RegExp(r,"g"),q[r](d)));r=Zb(c);
if(r.length>b)return 0;F.set(r,a);return r.length-1}for(var X,$b=new Float32Array(288),ac=0;288>ac;++ac)Z[ac]=$b.subarray(0,ac+1);function Zb(a){var b=Array(ua(a)+1);D(a,b,0,b.length);return b}
var jc={la:function(){return 0},jb:function(){return 0},lb:function(){},ja:function(){z()},Q:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},U:function(a,b,c){a=Q(a);if(!a)return-4;a=db(a);J[b>>3]=a.width;J[c>>3]=a.height;return 0},db:function(a,b,c){E.copyWithin(a,b,b+c)},Ha:function(a,b){function c(d){K.get(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},eb:function(a){var b=E.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/
c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ma.grow(Math.min(2147483648,d)-wa.byteLength+65535>>>16);Aa();var e=1;break a}catch(f){}e=void 0}if(e)return!0}return!1},M:function(a,b,c){a=Q(a);if(!a)return-4;a.width=b;a.height=c;return 0},da:function(a,b,c,d){eb(a,b,c,d,2,"keydown");return 0},ba:function(a,b,c,d){eb(a,b,c,d,1,"keypress");return 0},ca:function(a,b,c,d){eb(a,b,c,d,3,"keyup");return 0},ka:function(a,b,c,d){gb(a,b,c,d,5,"mousedown");return 0},ga:function(a,
b,c,d){gb(a,b,c,d,33,"mouseenter");return 0},fa:function(a,b,c,d){gb(a,b,c,d,34,"mouseleave");return 0},ha:function(a,b,c,d){gb(a,b,c,d,8,"mousemove");return 0},ia:function(a,b,c,d){gb(a,b,c,d,6,"mouseup");return 0},Y:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.uc||document.body.vc||document.body.tc))return-1;a=Q(a);if(!a)return-4;hb(a,b,c,d,"pointerlockchange");hb(a,b,c,d,"mozpointerlockchange");hb(a,b,c,d,"webkitpointerlockchange");hb(a,b,c,
d,"mspointerlockchange");return 0},X:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.uc||document.body.vc||document.body.tc))return-1;a=Q(a);if(!a)return-4;ib(a,b,c,d,"pointerlockerror");ib(a,b,c,d,"mozpointerlockerror");ib(a,b,c,d,"webkitpointerlockerror");ib(a,b,c,d,"mspointerlockerror");return 0},Oa:function(a,b,c,d){jb(a,b,c,d);return 0},Z:function(a,b,c,d){kb(a,b,c,d,25,"touchcancel");return 0},_:function(a,b,c,d){kb(a,b,c,d,23,"touchend");return 0},$:function(a,
b,c,d){kb(a,b,c,d,24,"touchmove");return 0},aa:function(a,b,c,d){kb(a,b,c,d,22,"touchstart");return 0},W:function(a,b,c,d){lb(a,b,c,d,31,"webglcontextlost");return 0},V:function(a,b,c,d){lb(a,b,c,d,32,"webglcontextrestored");return 0},ea:function(a,b,c,d){a=Q(a);return"undefined"!==typeof a.onwheel?(mb(a,b,c,d),0):-1},ra:function(a,b){b>>=2;b={alpha:!!H[b],depth:!!H[b+1],stencil:!!H[b+2],antialias:!!H[b+3],premultipliedAlpha:!!H[b+4],preserveDrawingBuffer:!!H[b+5],powerPreference:Hb[H[b+6]],failIfMajorPerformanceCaveat:!!H[b+
7],Ac:H[b+8],bd:H[b+9],yc:H[b+10],Lc:H[b+11],dd:H[b+12],ed:H[b+13]};a=Q(a);return!a||b.Lc?0:Eb(a,b)},pb:function(a,b){a=zb[a];b=G(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&nb(X);"OES_vertex_array_object"==b&&ob(X);"WEBGL_draw_buffers"==b&&pb(X);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&qb(X);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==b&&rb(X);"WEBGL_multi_draw"==b&&sb(X);return!!a.qc.getExtension(b)},za:function(a){a>>=2;for(var b=0;14>b;++b)H[a+
b]=0;H[a]=H[a+1]=H[a+3]=H[a+4]=H[a+8]=H[a+10]=1},zb:function(a){W=zb[a];h.Vc=X=W&&W.qc;return!a||X?0:-5},gb:function(a,b){var c=0;Jb().forEach(function(d,e){var f=b+c;e=H[a+4*e>>2]=f;for(f=0;f<d.length;++f)F[e++>>0]=d.charCodeAt(f);F[e>>0]=0;c+=d.length+1});return 0},hb:function(a,b){var c=Jb();H[a>>2]=c.length;var d=0;c.forEach(function(e){d+=e.length+1});H[b>>2]=d;return 0},ma:function(){return 0},ib:function(a,b,c,d){a=Pa.Zc(a);b=Pa.Xc(a,b,c);H[d>>2]=b;return 0},cb:function(){},kb:function(a,b,
c,d){for(var e=0,f=0;f<c;f++){for(var g=H[b+8*f>>2],n=H[b+(8*f+4)>>2],p=0;p<n;p++){var q=E[g+p],r=Oa[a];0===q||10===q?((1===a?la:A)(ta(r,0)),r.length=0):r.push(q)}e+=n}H[d>>2]=e;return 0},b:function(a){X.activeTexture(a)},D:function(a,b){X.attachShader(T[a],U[b])},c:function(a,b){35051==a?X.wc=b:35052==a&&(X.cc=b);X.bindBuffer(a,ub[b])},h:function(a,b){X.bindFramebuffer(a,vb[b])},G:function(a,b){X.bindRenderbuffer(a,wb[b])},a:function(a,b){X.bindTexture(a,xb[b])},S:function(a){X.bindVertexArray(yb[a])},
N:function(a,b,c,d){X.blendColor(a,b,c,d)},O:function(a,b){X.blendEquationSeparate(a,b)},P:function(a,b,c,d){X.blendFuncSeparate(a,b,c,d)},r:function(a,b,c,d,e,f,g,n,p,q){X.blitFramebuffer(a,b,c,d,e,f,g,n,p,q)},Ia:function(a,b,c,d){2<=W.version?c?X.bufferData(a,E,d,c,b):X.bufferData(a,b,d):X.bufferData(a,c?E.subarray(c,c+b):b,d)},I:function(a,b,c,d){2<=W.version?X.bufferSubData(a,b,E,d,c):X.bufferSubData(a,b,E.subarray(d,d+c))},Ab:function(a){X.clear(a)},qa:function(a,b,c,d){X.clearColor(a,b,c,d)},
Cb:function(a){X.clearDepth(a)},Bb:function(a){X.clearStencil(a)},k:function(a,b,c,d){X.colorMask(!!a,!!b,!!c,!!d)},ua:function(a){X.compileShader(U[a])},Ea:function(a,b,c,d,e,f,g,n){2<=W.version?X.cc?X.compressedTexImage2D(a,b,c,d,e,f,g,n):X.compressedTexImage2D(a,b,c,d,e,f,E,n,g):X.compressedTexImage2D(a,b,c,d,e,f,n?E.subarray(n,n+g):null)},Ca:function(a,b,c,d,e,f,g,n,p){X.cc?X.compressedTexImage3D(a,b,c,d,e,f,g,n,p):X.compressedTexImage3D(a,b,c,d,e,f,g,E,p,n)},Aa:function(){var a=Db(T),b=X.createProgram();
b.name=a;b.mc=b.kc=b.lc=0;b.sc=1;T[a]=b;return a},wa:function(a){var b=Db(U);U[b]=X.createShader(a);return b},J:function(a){X.cullFace(a)},Qa:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=ub[d];e&&(X.deleteBuffer(e),e.name=0,ub[d]=null,d==X.wc&&(X.wc=0),d==X.cc&&(X.cc=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=H[b+4*c>>2],e=vb[d];e&&(X.deleteFramebuffer(e),e.name=0,vb[d]=null)}},x:function(a){if(a){var b=T[a];b?(X.deleteProgram(b),b.name=0,T[a]=null):V(1281)}},T:function(a,b){for(var c=
0;c<a;c++){var d=H[b+4*c>>2],e=wb[d];e&&(X.deleteRenderbuffer(e),e.name=0,wb[d]=null)}},t:function(a){if(a){var b=U[a];b?(X.deleteShader(b),U[a]=null):V(1281)}},Pa:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2],e=xb[d];e&&(X.deleteTexture(e),e.name=0,xb[d]=null)}},Na:function(a,b){for(var c=0;c<a;c++){var d=H[b+4*c>>2];X.deleteVertexArray(yb[d]);yb[d]=null}},w:function(a){X.depthFunc(a)},v:function(a){X.depthMask(!!a)},e:function(a){X.disable(a)},R:function(a){X.disableVertexAttribArray(a)},
ob:function(a,b,c){X.drawArrays(a,b,c)},qb:function(a,b,c,d){X.drawElements(a,b,c,d)},g:function(a){X.enable(a)},wb:function(a){X.enableVertexAttribArray(a)},K:function(a){X.frontFace(a)},Ja:function(a,b){Lb(a,b,"createBuffer",ub)},H:function(a,b){Lb(a,b,"createRenderbuffer",wb)},Fa:function(a,b){Lb(a,b,"createTexture",xb)},Ma:function(a,b){Lb(a,b,"createVertexArray",yb)},Db:function(a,b){return X.getAttribLocation(T[a],G(b))},d:function(a,b){Nb(a,b)},xa:function(a,b,c,d){a=X.getProgramInfoLog(T[a]);
null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(H[c>>2]=b)},C:function(a,b,c){if(c)if(a>=tb)V(1281);else if(a=T[a],35716==b)a=X.getProgramInfoLog(a),null===a&&(a="(unknown error)"),H[c>>2]=a.length+1;else if(35719==b){if(!a.mc)for(b=0;b<X.getProgramParameter(a,35718);++b)a.mc=Math.max(a.mc,X.getActiveUniform(a,b).name.length+1);H[c>>2]=a.mc}else if(35722==b){if(!a.kc)for(b=0;b<X.getProgramParameter(a,35721);++b)a.kc=Math.max(a.kc,X.getActiveAttrib(a,b).name.length+1);H[c>>2]=a.kc}else if(35381==
b){if(!a.lc)for(b=0;b<X.getProgramParameter(a,35382);++b)a.lc=Math.max(a.lc,X.getActiveUniformBlockName(a,b).length+1);H[c>>2]=a.lc}else H[c>>2]=X.getProgramParameter(a,b);else V(1281)},Eb:function(a,b,c,d){a=X.getShaderInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?D(a,E,d,b):0;c&&(H[c>>2]=b)},A:function(a,b,c){c?35716==b?(a=X.getShaderInfoLog(U[a]),null===a&&(a="(unknown error)"),H[c>>2]=a?a.length+1:0):35720==b?(a=X.getShaderSource(U[a]),H[c>>2]=a?a.length+1:0):H[c>>2]=X.getShaderParameter(U[a],
b):V(1281)},Sa:function(a){var b=Ab[a];if(!b){switch(a){case 7939:b=X.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Ob(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=X.getParameter(a))||V(1280);b=b&&Ob(b);break;case 7938:b=X.getParameter(7938);b=2<=W.version?"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Ob(b);break;case 35724:b=X.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),
b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Ob(b);break;default:V(1280)}Ab[a]=b}return b},Ra:function(a,b){if(2>W.version)return V(1282),0;var c=Bb[a];if(c)return 0>b||b>=c.length?(V(1281),0):c[b];switch(a){case 7939:return c=X.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=c.map(function(d){return Ob(d)}),c=Bb[a]=c,0>b||b>=c.length?(V(1281),0):c[b];default:return V(1280),0}},n:function(a,b){b=G(b);if(a=T[a]){var c=a,d=c.ic,e=c.Ic,f;if(!d)for(c.ic=d={},c.Hc={},f=0;f<X.getProgramParameter(c,
35718);++f){var g=X.getActiveUniform(c,f);var n=g.name;g=g.size;var p=Pb(n);p=0<p?n.slice(0,p):n;var q=c.sc;c.sc+=g;e[p]=[g,q];for(n=0;n<g;++n)d[q]=n,c.Hc[q++]=p}c=a.ic;d=0;e=b;f=Pb(b);0<f&&(d=parseInt(b.slice(f+1))>>>0,e=b.slice(0,f));if((e=a.Ic[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||X.getUniformLocation(a,b)))return d}else V(1281);return-1},ya:function(a){a=T[a];X.linkProgram(a);a.ic=0;a.Ic={}},L:function(a,b){X.polygonOffset(a,b)},s:function(a){X.readBuffer(a)},Ga:function(a,b,c,d){X.renderbufferStorage(a,
b,c,d)},F:function(a,b,c,d,e){X.renderbufferStorageMultisample(a,b,c,d,e)},m:function(a,b,c,d){X.scissor(a,b,c,d)},va:function(a,b,c,d){for(var e="",f=0;f<b;++f){var g=d?H[d+4*f>>2]:-1;e+=G(H[c+4*f>>2],0>g?void 0:g)}X.shaderSource(U[a],e)},La:function(a,b,c){X.stencilFunc(a,b,c)},pa:function(a,b,c,d){X.stencilFuncSeparate(a,b,c,d)},u:function(a){X.stencilMask(a)},Ka:function(a,b,c){X.stencilOp(a,b,c)},oa:function(a,b,c,d){X.stencilOpSeparate(a,b,c,d)},Da:function(a,b,c,d,e,f,g,n,p){if(2<=W.version)if(X.cc)X.texImage2D(a,
b,c,d,e,f,g,n,p);else if(p){var q=Qb(n);X.texImage2D(a,b,c,d,e,f,g,n,q,p>>Rb(q))}else X.texImage2D(a,b,c,d,e,f,g,n,null);else X.texImage2D(a,b,c,d,e,f,g,n,p?Sb(n,g,d,e,p):null)},Ba:function(a,b,c,d,e,f,g,n,p,q){if(X.cc)X.texImage3D(a,b,c,d,e,f,g,n,p,q);else if(q){var r=Qb(p);X.texImage3D(a,b,c,d,e,f,g,n,p,r,q>>Rb(r))}else X.texImage3D(a,b,c,d,e,f,g,n,p,null)},E:function(a,b,c){X.texParameterf(a,b,c)},f:function(a,b,c){X.texParameteri(a,b,c)},nb:function(a,b,c,d,e,f,g,n,p){if(2<=W.version)if(X.cc)X.texSubImage2D(a,
b,c,d,e,f,g,n,p);else if(p){var q=Qb(n);X.texSubImage2D(a,b,c,d,e,f,g,n,q,p>>Rb(q))}else X.texSubImage2D(a,b,c,d,e,f,g,n,null);else q=null,p&&(q=Sb(n,g,e,f,p)),X.texSubImage2D(a,b,c,d,e,f,g,n,q)},mb:function(a,b,c,d,e,f,g,n,p,q,r){if(X.cc)X.texSubImage3D(a,b,c,d,e,f,g,n,p,q,r);else if(r){var N=Qb(q);X.texSubImage3D(a,b,c,d,e,f,g,n,p,q,N,r>>Rb(N))}else X.texSubImage3D(a,b,c,d,e,f,g,n,p,q,null)},vb:function(a,b,c){if(2<=W.version)X.uniform1fv(Y(a),I,c>>2,b);else{if(288>=b)for(var d=Z[b-1],e=0;e<b;++e)d[e]=
I[c+4*e>>2];else d=I.subarray(c>>2,c+4*b>>2);X.uniform1fv(Y(a),d)}},B:function(a,b){X.uniform1i(Y(a),b)},ub:function(a,b,c){if(2<=W.version)X.uniform2fv(Y(a),I,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],e=0;e<2*b;e+=2)d[e]=I[c+4*e>>2],d[e+1]=I[c+(4*e+4)>>2];else d=I.subarray(c>>2,c+8*b>>2);X.uniform2fv(Y(a),d)}},tb:function(a,b,c){if(2<=W.version)X.uniform3fv(Y(a),I,c>>2,3*b);else{if(96>=b)for(var d=Z[3*b-1],e=0;e<3*b;e+=3)d[e]=I[c+4*e>>2],d[e+1]=I[c+(4*e+4)>>2],d[e+2]=I[c+(4*e+8)>>2];else d=I.subarray(c>>
2,c+12*b>>2);X.uniform3fv(Y(a),d)}},sb:function(a,b,c){if(2<=W.version)X.uniform4fv(Y(a),I,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],e=I;c>>=2;for(var f=0;f<4*b;f+=4){var g=c+f;d[f]=e[g];d[f+1]=e[g+1];d[f+2]=e[g+2];d[f+3]=e[g+3]}}else d=I.subarray(c>>2,c+16*b>>2);X.uniform4fv(Y(a),d)}},rb:function(a,b,c,d){if(2<=W.version)X.uniformMatrix4fv(Y(a),!!c,I,d>>2,16*b);else{if(18>=b){var e=Z[16*b-1],f=I;d>>=2;for(var g=0;g<16*b;g+=16){var n=d+g;e[g]=f[n];e[g+1]=f[n+1];e[g+2]=f[n+2];e[g+3]=f[n+3];e[g+4]=f[n+
4];e[g+5]=f[n+5];e[g+6]=f[n+6];e[g+7]=f[n+7];e[g+8]=f[n+8];e[g+9]=f[n+9];e[g+10]=f[n+10];e[g+11]=f[n+11];e[g+12]=f[n+12];e[g+13]=f[n+13];e[g+14]=f[n+14];e[g+15]=f[n+15]}}else e=I.subarray(d>>2,d+64*b>>2);X.uniformMatrix4fv(Y(a),!!c,e)}},l:function(a){a=T[a];X.useProgram(a);X.Jc=a},xb:function(a,b){X.vertexAttribDivisor(a,b)},yb:function(a,b,c,d,e,f){X.vertexAttribPointer(a,b,c,!!d,e,f)},j:function(a,b,c,d){X.viewport(a,b,c,d)},bb:function(){h.Bc=function(a){0!=bc()&&(a.preventDefault(),a.returnValue=
" ")};window.addEventListener("beforeunload",h.Bc)},ab:function(){h.Gc=function(a){a=a.clipboardData.getData("text");pa("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",h.Gc)},_a:function(a){h.gd=[];a=G(a);a=document.getElementById(a);h.Cc=function(b){b.stopPropagation();b.preventDefault()};h.Dc=function(b){b.stopPropagation();b.preventDefault()};h.Ec=function(b){b.stopPropagation();b.preventDefault()};h.Fc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;
h.hd=c;cc(c.length);var d;for(d=0;d<c.length;d++)pa("_sapp_emsc_drop",["number","string"],[d,c[d].name]);dc(b.clientX,b.clientY)};a.addEventListener("dragenter",h.Cc,!1);a.addEventListener("dragleave",h.Dc,!1);a.addEventListener("dragover",h.Ec,!1);a.addEventListener("drop",h.Fc,!1)},Ua:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},q:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";
a.addEventListener("focusout",function(){ec()});document.body.append(a)},Wa:function(){document.exitPointerLock&&document.exitPointerLock()},p:function(){document.getElementById("_sokol_app_input_element").focus()},$a:function(a){a=G(a);h.fc=document.getElementById(a);h.fc||console.log("sokol_app.h: invalid target:"+a);h.fc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},Za:function(){window.removeEventListener("beforeunload",h.Bc)},Ya:function(){window.removeEventListener("paste",
h.Gc)},Xa:function(a){a=G(a);a=document.getElementById(a);a.removeEventListener("dragenter",h.Cc);a.removeEventListener("dragleave",h.Dc);a.removeEventListener("dragover",h.Ec);a.removeEventListener("drop",h.Fc)},y:function(){h.fc&&h.fc.requestPointerLock&&h.fc.requestPointerLock()},Ta:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),f=e.createImageData(a,b);f.data.set(E.subarray(c,c+a*b*4));e.putImageData(f,0,0);a=document.createElement("link");
a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},o:function(){document.getElementById("_sokol_app_input_element").blur()},Va:function(a){a=G(a);var b=document.createElement("textarea");b.setAttribute("autocomplete","off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();
document.execCommand("copy");document.body.removeChild(b)},z:function(a,b,c,d,e,f){b=G(b);var g=new XMLHttpRequest;g.open("GET",b);g.responseType="arraybuffer";var n=0<d;n&&g.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));g.onreadystatechange=function(){if(this.readyState==this.DONE)if(206==this.status||200==this.status&&!n){var p=new Uint8Array(g.response),q=p.length;q<=f?(E.set(p,e),fc(a,d,q)):gc(a)}else hc(a,this.status)};g.send()},na:function(a,b){b=G(b);var c=new XMLHttpRequest;c.open("HEAD",
b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var d=this.getResponseHeader("Content-Length");ic(a,d)}else hc(a,this.status)};c.send()},ta:function(){return navigator.userAgent.includes("Macintosh")?1:0},sa:function(){return performance.now()},fb:function(a,b,c,d){return Yb(a,b,c,d)}};
(function(){function a(e){h.asm=e.exports;ma=h.asm.Fb;Aa();K=h.asm.Yb;Ca.unshift(h.asm.Gb);L--;h.monitorRunDependencies&&h.monitorRunDependencies(L);0==L&&(null!==Ha&&(clearInterval(Ha),Ha=null),Ia&&(e=Ia,Ia=null,e()))}function b(e){a(e.instance)}function c(e){return Ma().then(function(f){return WebAssembly.instantiate(f,d)}).then(e,function(f){A("failed to asynchronously prepare wasm: "+f);z(f)})}var d={a:jc};L++;h.monitorRunDependencies&&h.monitorRunDependencies(L);if(h.instantiateWasm)try{return h.instantiateWasm(d,
a)}catch(e){return A("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return B||"function"!==typeof WebAssembly.instantiateStreaming||Ja()||M.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(M,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(f){A("wasm streaming compile failed: "+f);A("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
h.___wasm_call_ctors=function(){return(h.___wasm_call_ctors=h.asm.Gb).apply(null,arguments)};var S=h._malloc=function(){return(S=h._malloc=h.asm.Hb).apply(null,arguments)},ec=h.__sapp_emsc_notify_keyboard_hidden=function(){return(ec=h.__sapp_emsc_notify_keyboard_hidden=h.asm.Ib).apply(null,arguments)};h.__sapp_emsc_onpaste=function(){return(h.__sapp_emsc_onpaste=h.asm.Jb).apply(null,arguments)};
var bc=h.__sapp_html5_get_ask_leave_site=function(){return(bc=h.__sapp_html5_get_ask_leave_site=h.asm.Kb).apply(null,arguments)},cc=h.__sapp_emsc_begin_drop=function(){return(cc=h.__sapp_emsc_begin_drop=h.asm.Lb).apply(null,arguments)};h.__sapp_emsc_drop=function(){return(h.__sapp_emsc_drop=h.asm.Mb).apply(null,arguments)};var dc=h.__sapp_emsc_end_drop=function(){return(dc=h.__sapp_emsc_end_drop=h.asm.Nb).apply(null,arguments)};
h.__sapp_emsc_invoke_fetch_cb=function(){return(h.__sapp_emsc_invoke_fetch_cb=h.asm.Ob).apply(null,arguments)};h._main=function(){return(h._main=h.asm.Pb).apply(null,arguments)};h.__saudio_emsc_pull=function(){return(h.__saudio_emsc_pull=h.asm.Qb).apply(null,arguments)};
var ic=h.__sfetch_emsc_head_response=function(){return(ic=h.__sfetch_emsc_head_response=h.asm.Rb).apply(null,arguments)},fc=h.__sfetch_emsc_get_response=function(){return(fc=h.__sfetch_emsc_get_response=h.asm.Sb).apply(null,arguments)},hc=h.__sfetch_emsc_failed_http_status=function(){return(hc=h.__sfetch_emsc_failed_http_status=h.asm.Tb).apply(null,arguments)},gc=h.__sfetch_emsc_failed_buffer_too_small=function(){return(gc=h.__sfetch_emsc_failed_buffer_too_small=h.asm.Ub).apply(null,arguments)},qa=
h.stackSave=function(){return(qa=h.stackSave=h.asm.Vb).apply(null,arguments)},ra=h.stackRestore=function(){return(ra=h.stackRestore=h.asm.Wb).apply(null,arguments)},C=h.stackAlloc=function(){return(C=h.stackAlloc=h.asm.Xb).apply(null,arguments)},kc;function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Ia=function lc(){kc||mc();kc||(Ia=lc)};
function mc(a){function b(){if(!kc&&(kc=!0,h.calledRun=!0,!na)){Na(Ca);Na(Da);if(h.onRuntimeInitialized)h.onRuntimeInitialized();if(nc){var c=a,d=h._main;c=c||[];var e=c.length+1,f=C(4*(e+1));H[f>>2]=va(ba);for(var g=1;g<e;g++)H[(f>>2)+g]=va(c[g-1]);H[(f>>2)+e]=0;try{var n=d(e,f);if(!(noExitRuntime||0<ka)){if(h.onExit)h.onExit(n);na=!0}da(n,new ja(n))}catch(p){p instanceof ja||"unwind"==p||((c=p)&&"object"===typeof p&&p.stack&&(c=[p,p.stack]),A("exception thrown: "+c),da(1,p))}finally{}}if(h.postRun)for("function"==
typeof h.postRun&&(h.postRun=[h.postRun]);h.postRun.length;)c=h.postRun.shift(),Fa.unshift(c);Na(Fa)}}a=a||aa;if(!(0<L)){if(h.preRun)for("function"==typeof h.preRun&&(h.preRun=[h.preRun]);h.preRun.length;)Ga();Na(Ba);0<L||(h.setStatus?(h.setStatus("Running..."),setTimeout(function(){setTimeout(function(){h.setStatus("")},1);b()},1)):b())}}h.run=mc;if(h.preInit)for("function"==typeof h.preInit&&(h.preInit=[h.preInit]);0<h.preInit.length;)h.preInit.pop()();var nc=!0;h.noInitialRun&&(nc=!1);mc();
