
var h;h||(h=typeof Module !== 'undefined' ? Module : {});var k={},n;for(n in h)h.hasOwnProperty(n)&&(k[n]=h[n]);var aa=[],ba="./this.program";function da(a,b){throw b;}var ea="object"===typeof window,u="function"===typeof importScripts,w="",fa,ha,ia,x,z;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)w=u?require("path").dirname(w)+"/":__dirname+"/",fa=function(a,b){x||(x=require("fs"));z||(z=require("path"));a=z.normalize(a);return x.readFileSync(a,b?null:"utf8")},ia=function(a){a=fa(a,!0);a.buffer||(a=new Uint8Array(a));a.buffer||A("Assertion failed: undefined");return a},ha=function(a,b,c){x||(x=require("fs"));z||(z=require("path"));a=z.normalize(a);x.readFile(a,function(d,e){d?c(d):b(e.buffer)})},
1<process.argv.length&&(ba=process.argv[1].replace(/\\/g,"/")),aa=process.argv.slice(2),"undefined"!==typeof module&&(module.exports=h),process.on("uncaughtException",function(a){if(!(a instanceof ja))throw a;}),process.on("unhandledRejection",function(a){throw a;}),da=function(a,b){if(noExitRuntime||0<ka)throw process.exitCode=a,b;b instanceof ja||B("exiting due to exception: "+b);process.exit(a)},h.inspect=function(){return"[Emscripten Module object]"};else if(ea||u)u?w=self.location.href:"undefined"!==
typeof document&&document.currentScript&&(w=document.currentScript.src),w=0!==w.indexOf("blob:")?w.substr(0,w.replace(/[?#].*/,"").lastIndexOf("/")+1):"",fa=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.send(null);return b.responseText},u&&(ia=function(a){var b=new XMLHttpRequest;b.open("GET",a,!1);b.responseType="arraybuffer";b.send(null);return new Uint8Array(b.response)}),ha=function(a,b,c){var d=new XMLHttpRequest;d.open("GET",a,!0);d.responseType="arraybuffer";d.onload=function(){200==
d.status||0==d.status&&d.response?b(d.response):c()};d.onerror=c;d.send(null)};var la=h.print||console.log.bind(console),B=h.printErr||console.warn.bind(console);for(n in k)k.hasOwnProperty(n)&&(h[n]=k[n]);k=null;h.arguments&&(aa=h.arguments);h.thisProgram&&(ba=h.thisProgram);h.quit&&(da=h.quit);var C;h.wasmBinary&&(C=h.wasmBinary);var noExitRuntime=h.noExitRuntime||!0;"object"!==typeof WebAssembly&&A("no native wasm support detected");var ma,na=!1;
function oa(a){var b=h["_"+a];b||A("Assertion failed: Cannot call unknown function "+(a+", make sure it is exported"));return b}function pa(a,b,c){var d={string:function(p){var q=0;if(null!==p&&void 0!==p&&0!==p){var r=(p.length<<2)+1;q=D(r);E(p,F,q,r)}return q},array:function(p){var q=D(p.length);G.set(p,q);return q}};a=oa(a);var e=[],g=0;if(c)for(var f=0;f<c.length;f++){var m=d[b[f]];m?(0===g&&(g=qa()),e[f]=m(c[f])):e[f]=c[f]}b=a.apply(null,e);b=function(p){0!==g&&ra(g);return p}(b)}
var sa="undefined"!==typeof TextDecoder?new TextDecoder("utf8"):void 0;
function ta(a,b,c){var d=b+c;for(c=b;a[c]&&!(c>=d);)++c;if(16<c-b&&a.subarray&&sa)return sa.decode(a.subarray(b,c));for(d="";b<c;){var e=a[b++];if(e&128){var g=a[b++]&63;if(192==(e&224))d+=String.fromCharCode((e&31)<<6|g);else{var f=a[b++]&63;e=224==(e&240)?(e&15)<<12|g<<6|f:(e&7)<<18|g<<12|f<<6|a[b++]&63;65536>e?d+=String.fromCharCode(e):(e-=65536,d+=String.fromCharCode(55296|e>>10,56320|e&1023))}}else d+=String.fromCharCode(e)}return d}function H(a,b){return a?ta(F,a,b):""}
function E(a,b,c,d){if(!(0<d))return 0;var e=c;d=c+d-1;for(var g=0;g<a.length;++g){var f=a.charCodeAt(g);if(55296<=f&&57343>=f){var m=a.charCodeAt(++g);f=65536+((f&1023)<<10)|m&1023}if(127>=f){if(c>=d)break;b[c++]=f}else{if(2047>=f){if(c+1>=d)break;b[c++]=192|f>>6}else{if(65535>=f){if(c+2>=d)break;b[c++]=224|f>>12}else{if(c+3>=d)break;b[c++]=240|f>>18;b[c++]=128|f>>12&63}b[c++]=128|f>>6&63}b[c++]=128|f&63}}b[c]=0;return c-e}
function ua(a){for(var b=0,c=0;c<a.length;++c){var d=a.charCodeAt(c);55296<=d&&57343>=d&&(d=65536+((d&1023)<<10)|a.charCodeAt(++c)&1023);127>=d?++b:b=2047>=d?b+2:65535>=d?b+3:b+4}return b}function va(a){var b=ua(a)+1,c=D(b);E(a,G,c,b);return c}var wa,G,F,xa,ya,I,za,J,K;
function Aa(){var a=ma.buffer;wa=a;h.HEAP8=G=new Int8Array(a);h.HEAP16=xa=new Int16Array(a);h.HEAP32=I=new Int32Array(a);h.HEAPU8=F=new Uint8Array(a);h.HEAPU16=ya=new Uint16Array(a);h.HEAPU32=za=new Uint32Array(a);h.HEAPF32=J=new Float32Array(a);h.HEAPF64=K=new Float64Array(a)}var Ba,Ca=[],Da=[],Ea=[],Fa=[],Ga=[],ka=0;function Ha(){var a=h.preRun.shift();Ca.unshift(a)}var L=0,Ia=null,Ja=null;h.preloadedImages={};h.preloadedAudios={};
function A(a){if(h.onAbort)h.onAbort(a);a="Aborted("+a+")";B(a);na=!0;throw new WebAssembly.RuntimeError(a+". Build with -s ASSERTIONS=1 for more info.");}function Ka(){return M.startsWith("data:application/octet-stream;base64,")}var M;M="ozz-skin-sapp.wasm";if(!Ka()){var La=M;M=h.locateFile?h.locateFile(La,w):w+La}function Ma(){var a=M;try{if(a==M&&C)return new Uint8Array(C);if(ia)return ia(a);throw"both async and sync fetching of the wasm failed";}catch(b){A(b)}}
function Na(){if(!C&&(ea||u)){if("function"===typeof fetch&&!M.startsWith("file://"))return fetch(M,{credentials:"same-origin"}).then(function(a){if(!a.ok)throw"failed to load wasm binary file at '"+M+"'";return a.arrayBuffer()}).catch(function(){return Ma()});if(ha)return new Promise(function(a,b){ha(M,function(c){a(new Uint8Array(c))},b)})}return Promise.resolve().then(function(){return Ma()})}
function Oa(a){for(;0<a.length;){var b=a.shift();if("function"==typeof b)b(h);else{var c=b.ad;"number"===typeof c?void 0===b.uc?N(c)():N(c)(b.uc):c(void 0===b.uc?null:b.uc)}}}var Pa=[];function N(a){var b=Pa[a];b||(a>=Pa.length&&(Pa.length=a+1),Pa[a]=b=Ba.get(a));return b}var Qa=[null,[],[]],Ra={},Sa=0;function Ta(){for(var a=O.length-1;0<=a;--a)Ua(a);O=[];Va=[]}var Va=[];function Wa(){if(Sa&&Xa.mc)for(var a=0;a<Va.length;++a){var b=Va[a];Va.splice(a,1);--a;b.md.apply(null,b.Xc)}}var O=[];
function Ua(a){var b=O[a];b.target.removeEventListener(b.cc,b.Pc,b.dc);O.splice(a,1)}function P(a){function b(d){++Sa;Xa=a;Wa();a.fc(d);Wa();--Sa}if(a.ec)a.Pc=b,a.target.addEventListener(a.cc,b,a.dc),O.push(a),Ya||(Fa.push(Ta),Ya=!0);else for(var c=0;c<O.length;++c)O[c].target==a.target&&O[c].cc==a.cc&&Ua(c--)}function Za(a){return a?a==window?"#window":a==screen?"#screen":a&&a.nodeName?a.nodeName:"":""}
var Ya,Xa,$a,ab,bb,cb,db,eb,fb,gb=[0,"undefined"!==typeof document?document:0,"undefined"!==typeof window?window:0];function Q(a){a=2<a?H(a):a;return gb[a]||("undefined"!==typeof document?document.querySelector(a):void 0)}function hb(a){return 0>gb.indexOf(a)?a.getBoundingClientRect():{left:0,top:0}}
function ib(a,b,c,d,e,g){$a||($a=S(256));a={target:Q(a),cc:g,ec:d,fc:function(f){f=f||event;var m=f.target.id?f.target.id:"",p=$a;E(Za(f.target),F,p+0,128);E(m,F,p+128,128);N(d)(e,p,b)&&f.preventDefault()},dc:c};P(a)}
function jb(a,b,c,d,e,g){ab||(ab=S(176));a={target:Q(a),mc:!0,cc:g,ec:d,fc:function(f){var m=ab;K[m>>3]=f.timeStamp;var p=m>>2;I[p+2]=f.location;I[p+3]=f.ctrlKey;I[p+4]=f.shiftKey;I[p+5]=f.altKey;I[p+6]=f.metaKey;I[p+7]=f.repeat;I[p+8]=f.charCode;I[p+9]=f.keyCode;I[p+10]=f.which;E(f.key||"",F,m+44,32);E(f.code||"",F,m+76,32);E(f.char||"",F,m+108,32);E(f.locale||"",F,m+140,32);N(d)(e,m,b)&&f.preventDefault()},dc:c};P(a)}
function kb(a,b,c){K[a>>3]=b.timeStamp;a>>=2;I[a+2]=b.screenX;I[a+3]=b.screenY;I[a+4]=b.clientX;I[a+5]=b.clientY;I[a+6]=b.ctrlKey;I[a+7]=b.shiftKey;I[a+8]=b.altKey;I[a+9]=b.metaKey;xa[2*a+20]=b.button;xa[2*a+21]=b.buttons;I[a+11]=b.movementX;I[a+12]=b.movementY;c=hb(c);I[a+13]=b.clientX-c.left;I[a+14]=b.clientY-c.top}
function lb(a,b,c,d,e,g){bb||(bb=S(72));a=Q(a);P({target:a,mc:"mousemove"!=g&&"mouseenter"!=g&&"mouseleave"!=g,cc:g,ec:d,fc:function(f){f=f||event;kb(bb,f,a);N(d)(e,bb,b)&&f.preventDefault()},dc:c})}function mb(a,b,c,d,e){cb||(cb=S(260));P({target:a,cc:e,ec:d,fc:function(g){g=g||event;var f=cb,m=document.pointerLockElement||document.wc||document.zc||document.xc;I[f>>2]=!!m;var p=m&&m.id?m.id:"";E(Za(m),F,f+4,128);E(p,F,f+132,128);N(d)(20,f,b)&&g.preventDefault()},dc:c})}
function nb(a,b,c,d,e){P({target:a,cc:e,ec:d,fc:function(g){g=g||event;N(d)(38,0,b)&&g.preventDefault()},dc:c})}
function ob(a,b,c,d){db||(db=S(36));a=Q(a);P({target:a,cc:"resize",ec:d,fc:function(e){e=e||event;if(e.target==a){var g=document.body;if(g){var f=db;I[f>>2]=e.detail;I[f+4>>2]=g.clientWidth;I[f+8>>2]=g.clientHeight;I[f+12>>2]=innerWidth;I[f+16>>2]=innerHeight;I[f+20>>2]=outerWidth;I[f+24>>2]=outerHeight;I[f+28>>2]=pageXOffset;I[f+32>>2]=pageYOffset;N(d)(10,f,b)&&e.preventDefault()}}},dc:c})}
function pb(a,b,c,d,e,g){eb||(eb=S(1696));a=Q(a);P({target:a,mc:"touchstart"==g||"touchend"==g,cc:g,ec:d,fc:function(f){for(var m,p={},q=f.touches,r=0;r<q.length;++r)m=q[r],m.Dc=m.Fc=0,p[m.identifier]=m;for(r=0;r<f.changedTouches.length;++r)m=f.changedTouches[r],m.Dc=1,p[m.identifier]=m;for(r=0;r<f.targetTouches.length;++r)p[f.targetTouches[r].identifier].Fc=1;q=eb;K[q>>3]=f.timeStamp;var v=q>>2;I[v+3]=f.ctrlKey;I[v+4]=f.shiftKey;I[v+5]=f.altKey;I[v+6]=f.metaKey;v+=7;var ca=hb(a),l=0;for(r in p)if(m=
p[r],I[v]=m.identifier,I[v+1]=m.screenX,I[v+2]=m.screenY,I[v+3]=m.clientX,I[v+4]=m.clientY,I[v+5]=m.pageX,I[v+6]=m.pageY,I[v+7]=m.Dc,I[v+8]=m.Fc,I[v+9]=m.clientX-ca.left,I[v+10]=m.clientY-ca.top,v+=13,31<++l)break;I[q+8>>2]=l;N(d)(e,q,b)&&f.preventDefault()},dc:c})}function qb(a,b,c,d,e,g){a={target:Q(a),cc:g,ec:d,fc:function(f){f=f||event;N(d)(e,0,b)&&f.preventDefault()},dc:c};P(a)}
function rb(a,b,c,d){fb||(fb=S(104));P({target:a,mc:!0,cc:"wheel",ec:d,fc:function(e){e=e||event;var g=fb;kb(g,e,a);K[g+72>>3]=e.deltaX;K[g+80>>3]=e.deltaY;K[g+88>>3]=e.deltaZ;I[g+96>>2]=e.deltaMode;N(d)(9,g,b)&&e.preventDefault()},dc:c})}
function sb(a){var b=a.getExtension("ANGLE_instanced_arrays");b&&(a.vertexAttribDivisor=function(c,d){b.vertexAttribDivisorANGLE(c,d)},a.drawArraysInstanced=function(c,d,e,g){b.drawArraysInstancedANGLE(c,d,e,g)},a.drawElementsInstanced=function(c,d,e,g,f){b.drawElementsInstancedANGLE(c,d,e,g,f)})}
function tb(a){var b=a.getExtension("OES_vertex_array_object");b&&(a.createVertexArray=function(){return b.createVertexArrayOES()},a.deleteVertexArray=function(c){b.deleteVertexArrayOES(c)},a.bindVertexArray=function(c){b.bindVertexArrayOES(c)},a.isVertexArray=function(c){return b.isVertexArrayOES(c)})}function ub(a){var b=a.getExtension("WEBGL_draw_buffers");b&&(a.drawBuffers=function(c,d){b.drawBuffersWEBGL(c,d)})}
function vb(a){a.Zc=a.getExtension("WEBGL_draw_instanced_base_vertex_base_instance")}function wb(a){a.dd=a.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")}function xb(a){a.gd=a.getExtension("WEBGL_multi_draw")}var yb=1,zb=[],T=[],Ab=[],Bb=[],Cb=[],U=[],Db=[],Eb=[],Fb={},Gb={};function V(a){Hb||(Hb=a)}function Ib(a){for(var b=yb++,c=a.length;c<b;c++)a[c]=null;return b}
function Jb(a,b){a.Cc||(a.Cc=a.getContext,a.getContext=function(d,e){e=a.Cc(d,e);return"webgl"==d==e instanceof WebGLRenderingContext?e:null});var c=1<b.Ec?a.getContext("webgl2",b):a.getContext("webgl",b);return c?Kb(c,b):0}function Kb(a,b){var c=Ib(Eb),d={cd:c,attributes:b,version:b.Ec,tc:a};a.canvas&&(a.canvas.Wc=d);Eb[c]=d;("undefined"===typeof b.Bc||b.Bc)&&Lb(d);return c}
function Lb(a){a||(a=W);if(!a.Rc){a.Rc=!0;var b=a.tc;sb(b);tb(b);ub(b);vb(b);wb(b);2<=a.version&&(b.Ac=b.getExtension("EXT_disjoint_timer_query_webgl2"));if(2>a.version||!b.Ac)b.Ac=b.getExtension("EXT_disjoint_timer_query");xb(b);(b.getSupportedExtensions()||[]).forEach(function(c){c.includes("lose_context")||c.includes("debug")||b.getExtension(c)})}}var Hb,W,Mb=["default","low-power","high-performance"],Nb={};
function Ob(){if(!Pb){var a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"===typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:ba||"./this.program"},b;for(b in Nb)void 0===Nb[b]?delete a[b]:a[b]=Nb[b];var c=[];for(b in a)c.push(b+"="+a[b]);Pb=c}return Pb}var Pb;function Qb(a,b,c,d){for(var e=0;e<a;e++){var g=X[c](),f=g&&Ib(d);g?(g.name=f,d[f]=g):V(1282);I[b+4*e>>2]=f}}
function Sb(a,b){if(b){var c=void 0;switch(a){case 36346:c=1;break;case 36344:return;case 34814:case 36345:c=0;break;case 34466:var d=X.getParameter(34467);c=d?d.length:0;break;case 33309:if(2>W.version){V(1282);return}c=2*(X.getSupportedExtensions()||[]).length;break;case 33307:case 33308:if(2>W.version){V(1280);return}c=33307==a?3:0}if(void 0===c)switch(d=X.getParameter(a),typeof d){case "number":c=d;break;case "boolean":c=d?1:0;break;case "string":V(1280);return;case "object":if(null===d)switch(a){case 34964:case 35725:case 34965:case 36006:case 36007:case 32873:case 34229:case 36662:case 36663:case 35053:case 35055:case 36010:case 35097:case 35869:case 32874:case 36389:case 35983:case 35368:case 34068:c=
0;break;default:V(1280);return}else{if(d instanceof Float32Array||d instanceof Uint32Array||d instanceof Int32Array||d instanceof Array){for(a=0;a<d.length;++a)I[b+4*a>>2]=d[a];return}try{c=d.name|0}catch(e){V(1280);B("GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter("+a+")! (error: "+e+")");return}}break;default:V(1280);B("GL_INVALID_ENUM in glGet0v: Native code calling glGet0v("+a+") and it returns "+d+" of type "+typeof d+"!");return}I[b>>2]=c}else V(1281)}
function Tb(a){var b=ua(a)+1,c=S(b);E(a,F,c,b);return c}function Ub(a){return"]"==a.slice(-1)&&a.lastIndexOf("[")}function Vb(a){a-=5120;return 0==a?G:1==a?F:2==a?xa:4==a?I:6==a?J:5==a||28922==a||28520==a||30779==a||30782==a?za:ya}function Wb(a){return 31-Math.clz32(a.BYTES_PER_ELEMENT)}function Xb(a,b,c,d,e){a=Vb(a);var g=Wb(a);return a.subarray(e>>g,e+d*(c*({5:3,6:4,8:2,29502:3,29504:4,26917:2,26918:2,29846:3,29847:4}[b-6402]||1)*(1<<g)+4-1&-4)>>g)}
function Y(a){var b=X.Oc;if(b){var c=b.lc[a];"number"===typeof c&&(b.lc[a]=c=X.getUniformLocation(b,b.Mc[a]+(0<c?"["+c+"]":"")));return c}V(1282)}var Z=[];function Yb(a){return 0===a%4&&(0!==a%100||0===a%400)}function Zb(a,b){for(var c=0,d=0;d<=b;c+=a[d++]);return c}var $b=[31,29,31,30,31,30,31,31,30,31,30,31],ac=[31,28,31,30,31,30,31,31,30,31,30,31];
function bc(a,b){for(a=new Date(a.getTime());0<b;){var c=a.getMonth(),d=(Yb(a.getFullYear())?$b:ac)[c];if(b>d-a.getDate())b-=d-a.getDate()+1,a.setDate(1),11>c?a.setMonth(c+1):(a.setMonth(0),a.setFullYear(a.getFullYear()+1));else{a.setDate(a.getDate()+b);break}}return a}
function cc(a,b,c,d){function e(l,t,y){for(l="number"===typeof l?l.toString():l||"";l.length<t;)l=y[0]+l;return l}function g(l,t){return e(l,t,"0")}function f(l,t){function y(Rb){return 0>Rb?-1:0<Rb?1:0}var R;0===(R=y(l.getFullYear()-t.getFullYear()))&&0===(R=y(l.getMonth()-t.getMonth()))&&(R=y(l.getDate()-t.getDate()));return R}function m(l){switch(l.getDay()){case 0:return new Date(l.getFullYear()-1,11,29);case 1:return l;case 2:return new Date(l.getFullYear(),0,3);case 3:return new Date(l.getFullYear(),
0,2);case 4:return new Date(l.getFullYear(),0,1);case 5:return new Date(l.getFullYear()-1,11,31);case 6:return new Date(l.getFullYear()-1,11,30)}}function p(l){l=bc(new Date(l.bc+1900,0,1),l.sc);var t=new Date(l.getFullYear()+1,0,4),y=m(new Date(l.getFullYear(),0,4));t=m(t);return 0>=f(y,l)?0>=f(t,l)?l.getFullYear()+1:l.getFullYear():l.getFullYear()-1}var q=I[d+40>>2];d={Uc:I[d>>2],Tc:I[d+4>>2],qc:I[d+8>>2],kc:I[d+12>>2],ic:I[d+16>>2],bc:I[d+20>>2],rc:I[d+24>>2],sc:I[d+28>>2],nd:I[d+32>>2],Sc:I[d+
36>>2],Vc:q?H(q):""};c=H(c);q={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var r in q)c=c.replace(new RegExp(r,"g"),q[r]);var v="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
ca="January February March April May June July August September October November December".split(" ");q={"%a":function(l){return v[l.rc].substring(0,3)},"%A":function(l){return v[l.rc]},"%b":function(l){return ca[l.ic].substring(0,3)},"%B":function(l){return ca[l.ic]},"%C":function(l){return g((l.bc+1900)/100|0,2)},"%d":function(l){return g(l.kc,2)},"%e":function(l){return e(l.kc,2," ")},"%g":function(l){return p(l).toString().substring(2)},"%G":function(l){return p(l)},"%H":function(l){return g(l.qc,
2)},"%I":function(l){l=l.qc;0==l?l=12:12<l&&(l-=12);return g(l,2)},"%j":function(l){return g(l.kc+Zb(Yb(l.bc+1900)?$b:ac,l.ic-1),3)},"%m":function(l){return g(l.ic+1,2)},"%M":function(l){return g(l.Tc,2)},"%n":function(){return"\n"},"%p":function(l){return 0<=l.qc&&12>l.qc?"AM":"PM"},"%S":function(l){return g(l.Uc,2)},"%t":function(){return"\t"},"%u":function(l){return l.rc||7},"%U":function(l){var t=new Date(l.bc+1900,0,1),y=0===t.getDay()?t:bc(t,7-t.getDay());l=new Date(l.bc+1900,l.ic,l.kc);return 0>
f(y,l)?g(Math.ceil((31-y.getDate()+(Zb(Yb(l.getFullYear())?$b:ac,l.getMonth()-1)-31)+l.getDate())/7),2):0===f(y,t)?"01":"00"},"%V":function(l){var t=new Date(l.bc+1901,0,4),y=m(new Date(l.bc+1900,0,4));t=m(t);var R=bc(new Date(l.bc+1900,0,1),l.sc);return 0>f(R,y)?"53":0>=f(t,R)?"01":g(Math.ceil((y.getFullYear()<l.bc+1900?l.sc+32-y.getDate():l.sc+1-y.getDate())/7),2)},"%w":function(l){return l.rc},"%W":function(l){var t=new Date(l.bc,0,1),y=1===t.getDay()?t:bc(t,0===t.getDay()?1:7-t.getDay()+1);l=
new Date(l.bc+1900,l.ic,l.kc);return 0>f(y,l)?g(Math.ceil((31-y.getDate()+(Zb(Yb(l.getFullYear())?$b:ac,l.getMonth()-1)-31)+l.getDate())/7),2):0===f(y,t)?"01":"00"},"%y":function(l){return(l.bc+1900).toString().substring(2)},"%Y":function(l){return l.bc+1900},"%z":function(l){l=l.Sc;var t=0<=l;l=Math.abs(l)/60;return(t?"+":"-")+String("0000"+(l/60*100+l%60)).slice(-4)},"%Z":function(l){return l.Vc},"%%":function(){return"%"}};for(r in q)c.includes(r)&&(c=c.replace(new RegExp(r,"g"),q[r](d)));r=dc(c);
if(r.length>b)return 0;G.set(r,a);return r.length-1}for(var X,ec=new Float32Array(288),fc=0;288>fc;++fc)Z[fc]=ec.subarray(0,fc+1);function dc(a){var b=Array(ua(a)+1);E(a,b,0,b.length);return b}
var oc={ma:function(){return 0},lb:function(){return 0},nb:function(){},la:function(){A("")},S:function(){return"number"===typeof devicePixelRatio&&devicePixelRatio||1},U:function(a,b,c){a=Q(a);if(!a)return-4;a=hb(a);K[b>>3]=a.width;K[c>>3]=a.height;return 0},fb:function(a,b,c){F.copyWithin(a,b,b+c)},Ja:function(a,b){function c(d){N(a)(d,b)&&requestAnimationFrame(c)}return requestAnimationFrame(c)},gb:function(a){var b=F.length;a>>>=0;if(2147483648<a)return!1;for(var c=1;4>=c;c*=2){var d=b*(1+.2/
c);d=Math.min(d,a+100663296);d=Math.max(a,d);0<d%65536&&(d+=65536-d%65536);a:{try{ma.grow(Math.min(2147483648,d)-wa.byteLength+65535>>>16);Aa();var e=1;break a}catch(g){}e=void 0}if(e)return!0}return!1},X:function(a,b,c,d){ib(a,b,c,d,12,"blur");return 0},O:function(a,b,c){a=Q(a);if(!a)return-4;a.width=b;a.height=c;return 0},Y:function(a,b,c,d){ib(a,b,c,d,13,"focus");return 0},fa:function(a,b,c,d){jb(a,b,c,d,2,"keydown");return 0},da:function(a,b,c,d){jb(a,b,c,d,1,"keypress");return 0},ea:function(a,
b,c,d){jb(a,b,c,d,3,"keyup");return 0},oa:function(a,b,c,d){lb(a,b,c,d,5,"mousedown");return 0},ia:function(a,b,c,d){lb(a,b,c,d,33,"mouseenter");return 0},ha:function(a,b,c,d){lb(a,b,c,d,34,"mouseleave");return 0},ja:function(a,b,c,d){lb(a,b,c,d,8,"mousemove");return 0},ka:function(a,b,c,d){lb(a,b,c,d,6,"mouseup");return 0},_:function(a,b,c,d){if(!document||!document.body||!(document.body.requestPointerLock||document.body.wc||document.body.zc||document.body.xc))return-1;a=Q(a);if(!a)return-4;mb(a,
b,c,d,"pointerlockchange");mb(a,b,c,d,"mozpointerlockchange");mb(a,b,c,d,"webkitpointerlockchange");mb(a,b,c,d,"mspointerlockchange");return 0},Z:function(a,b,c,d){if(!document||!(document.body.requestPointerLock||document.body.wc||document.body.zc||document.body.xc))return-1;a=Q(a);if(!a)return-4;nb(a,b,c,d,"pointerlockerror");nb(a,b,c,d,"mozpointerlockerror");nb(a,b,c,d,"webkitpointerlockerror");nb(a,b,c,d,"mspointerlockerror");return 0},Ra:function(a,b,c,d){ob(a,b,c,d);return 0},$:function(a,b,
c,d){pb(a,b,c,d,25,"touchcancel");return 0},aa:function(a,b,c,d){pb(a,b,c,d,23,"touchend");return 0},ba:function(a,b,c,d){pb(a,b,c,d,24,"touchmove");return 0},ca:function(a,b,c,d){pb(a,b,c,d,22,"touchstart");return 0},W:function(a,b,c,d){qb(a,b,c,d,31,"webglcontextlost");return 0},V:function(a,b,c,d){qb(a,b,c,d,32,"webglcontextrestored");return 0},ga:function(a,b,c,d){a=Q(a);return"undefined"!==typeof a.onwheel?(rb(a,b,c,d),0):-1},va:function(a,b){b>>=2;b={alpha:!!I[b],depth:!!I[b+1],stencil:!!I[b+
2],antialias:!!I[b+3],premultipliedAlpha:!!I[b+4],preserveDrawingBuffer:!!I[b+5],powerPreference:Mb[I[b+6]],failIfMajorPerformanceCaveat:!!I[b+7],Ec:I[b+8],ed:I[b+9],Bc:I[b+10],Qc:I[b+11],hd:I[b+12],jd:I[b+13]};a=Q(a);return!a||b.Qc?0:Jb(a,b)},vb:function(a,b){a=Eb[a];b=H(b);b.startsWith("GL_")&&(b=b.substr(3));"ANGLE_instanced_arrays"==b&&sb(X);"OES_vertex_array_object"==b&&tb(X);"WEBGL_draw_buffers"==b&&ub(X);"WEBGL_draw_instanced_base_vertex_base_instance"==b&&vb(X);"WEBGL_multi_draw_instanced_base_vertex_base_instance"==
b&&wb(X);"WEBGL_multi_draw"==b&&xb(X);return!!a.tc.getExtension(b)},Ca:function(a){a>>=2;for(var b=0;14>b;++b)I[a+b]=0;I[a]=I[a+1]=I[a+3]=I[a+4]=I[a+8]=I[a+10]=1},Eb:function(a){W=Eb[a];h.Yc=X=W&&W.tc;return!a||X?0:-5},ib:function(a,b){var c=0;Ob().forEach(function(d,e){var g=b+c;e=I[a+4*e>>2]=g;for(g=0;g<d.length;++g)G[e++>>0]=d.charCodeAt(g);G[e>>0]=0;c+=d.length+1});return 0},jb:function(a,b){var c=Ob();I[a>>2]=c.length;var d=0;c.forEach(function(e){d+=e.length+1});I[b>>2]=d;return 0},na:function(){return 0},
kb:function(a,b,c,d){a=Ra.bd(a);b=Ra.$c(a,b,c);I[d>>2]=b;return 0},eb:function(){},mb:function(a,b,c,d){for(var e=0,g=0;g<c;g++){var f=I[b>>2],m=I[b+4>>2];b+=8;for(var p=0;p<m;p++){var q=F[f+p],r=Qa[a];0===q||10===q?((1===a?la:B)(ta(r,0)),r.length=0):r.push(q)}e+=m}I[d>>2]=e;return 0},b:function(a){X.activeTexture(a)},E:function(a,b){X.attachShader(T[a],U[b])},c:function(a,b){35051==a?X.yc=b:35052==a&&(X.hc=b);X.bindBuffer(a,zb[b])},h:function(a,b){X.bindFramebuffer(a,Ab[b])},H:function(a,b){X.bindRenderbuffer(a,
Bb[b])},a:function(a,b){X.bindTexture(a,Cb[b])},R:function(a){X.bindVertexArray(Db[a])},M:function(a,b,c,d){X.blendColor(a,b,c,d)},N:function(a,b){X.blendEquationSeparate(a,b)},P:function(a,b,c,d){X.blendFuncSeparate(a,b,c,d)},q:function(a,b,c,d,e,g,f,m,p,q){X.blitFramebuffer(a,b,c,d,e,g,f,m,p,q)},Ka:function(a,b,c,d){2<=W.version?c?X.bufferData(a,F,d,c,b):X.bufferData(a,b,d):X.bufferData(a,c?F.subarray(c,c+b):b,d)},m:function(a,b,c,d){2<=W.version?X.bufferSubData(a,b,F,d,c):X.bufferSubData(a,b,F.subarray(d,
d+c))},Db:function(a){X.clear(a)},ta:function(a,b,c,d){X.clearColor(a,b,c,d)},sa:function(a){X.clearDepth(a)},Fb:function(a){X.clearStencil(a)},j:function(a,b,c,d){X.colorMask(!!a,!!b,!!c,!!d)},Ib:function(a){X.compileShader(U[a])},Ga:function(a,b,c,d,e,g,f,m){2<=W.version?X.hc?X.compressedTexImage2D(a,b,c,d,e,g,f,m):X.compressedTexImage2D(a,b,c,d,e,g,F,m,f):X.compressedTexImage2D(a,b,c,d,e,g,m?F.subarray(m,m+f):null)},Ea:function(a,b,c,d,e,g,f,m,p){X.hc?X.compressedTexImage3D(a,b,c,d,e,g,f,m,p):
X.compressedTexImage3D(a,b,c,d,e,g,f,F,p,m)},Ba:function(){var a=Ib(T),b=X.createProgram();b.name=a;b.pc=b.nc=b.oc=0;b.vc=1;T[a]=b;return a},ya:function(a){var b=Ib(U);U[b]=X.createShader(a);return b},J:function(a){X.cullFace(a)},Sa:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],e=zb[d];e&&(X.deleteBuffer(e),e.name=0,zb[d]=null,d==X.yc&&(X.yc=0),d==X.hc&&(X.hc=0))}},i:function(a,b){for(var c=0;c<a;++c){var d=I[b+4*c>>2],e=Ab[d];e&&(X.deleteFramebuffer(e),e.name=0,Ab[d]=null)}},z:function(a){if(a){var b=
T[a];b?(X.deleteProgram(b),b.name=0,T[a]=null):V(1281)}},T:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],e=Bb[d];e&&(X.deleteRenderbuffer(e),e.name=0,Bb[d]=null)}},v:function(a){if(a){var b=U[a];b?(X.deleteShader(b),U[a]=null):V(1281)}},Qa:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2],e=Cb[d];e&&(X.deleteTexture(e),e.name=0,Cb[d]=null)}},Pa:function(a,b){for(var c=0;c<a;c++){var d=I[b+4*c>>2];X.deleteVertexArray(Db[d]);Db[d]=null}},y:function(a){X.depthFunc(a)},x:function(a){X.depthMask(!!a)},
e:function(a){X.disable(a)},Q:function(a){X.disableVertexAttribArray(a)},rb:function(a,b,c){X.drawArrays(a,b,c)},qb:function(a,b,c,d){X.drawArraysInstanced(a,b,c,d)},tb:function(a,b,c,d){X.drawElements(a,b,c,d)},sb:function(a,b,c,d,e){X.drawElementsInstanced(a,b,c,d,e)},g:function(a){X.enable(a)},Ab:function(a){X.enableVertexAttribArray(a)},K:function(a){X.frontFace(a)},La:function(a,b){Qb(a,b,"createBuffer",zb)},I:function(a,b){Qb(a,b,"createRenderbuffer",Bb)},Ha:function(a,b){Qb(a,b,"createTexture",
Cb)},Oa:function(a,b){Qb(a,b,"createVertexArray",Db)},Gb:function(a,b){return X.getAttribLocation(T[a],H(b))},d:function(a,b){Sb(a,b)},za:function(a,b,c,d){a=X.getProgramInfoLog(T[a]);null===a&&(a="(unknown error)");b=0<b&&d?E(a,F,d,b):0;c&&(I[c>>2]=b)},D:function(a,b,c){if(c)if(a>=yb)V(1281);else if(a=T[a],35716==b)a=X.getProgramInfoLog(a),null===a&&(a="(unknown error)"),I[c>>2]=a.length+1;else if(35719==b){if(!a.pc)for(b=0;b<X.getProgramParameter(a,35718);++b)a.pc=Math.max(a.pc,X.getActiveUniform(a,
b).name.length+1);I[c>>2]=a.pc}else if(35722==b){if(!a.nc)for(b=0;b<X.getProgramParameter(a,35721);++b)a.nc=Math.max(a.nc,X.getActiveAttrib(a,b).name.length+1);I[c>>2]=a.nc}else if(35381==b){if(!a.oc)for(b=0;b<X.getProgramParameter(a,35382);++b)a.oc=Math.max(a.oc,X.getActiveUniformBlockName(a,b).length+1);I[c>>2]=a.oc}else I[c>>2]=X.getProgramParameter(a,b);else V(1281)},Hb:function(a,b,c,d){a=X.getShaderInfoLog(U[a]);null===a&&(a="(unknown error)");b=0<b&&d?E(a,F,d,b):0;c&&(I[c>>2]=b)},ua:function(a,
b,c){c?35716==b?(a=X.getShaderInfoLog(U[a]),null===a&&(a="(unknown error)"),I[c>>2]=a?a.length+1:0):35720==b?(a=X.getShaderSource(U[a]),I[c>>2]=a?a.length+1:0):I[c>>2]=X.getShaderParameter(U[a],b):V(1281)},Ua:function(a){var b=Fb[a];if(!b){switch(a){case 7939:b=X.getSupportedExtensions()||[];b=b.concat(b.map(function(d){return"GL_"+d}));b=Tb(b.join(" "));break;case 7936:case 7937:case 37445:case 37446:(b=X.getParameter(a))||V(1280);b=b&&Tb(b);break;case 7938:b=X.getParameter(7938);b=2<=W.version?
"OpenGL ES 3.0 ("+b+")":"OpenGL ES 2.0 ("+b+")";b=Tb(b);break;case 35724:b=X.getParameter(35724);var c=b.match(/^WebGL GLSL ES ([0-9]\.[0-9][0-9]?)(?:$| .*)/);null!==c&&(3==c[1].length&&(c[1]+="0"),b="OpenGL ES GLSL ES "+c[1]+" ("+b+")");b=Tb(b);break;default:V(1280)}Fb[a]=b}return b},Ta:function(a,b){if(2>W.version)return V(1282),0;var c=Gb[a];if(c)return 0>b||b>=c.length?(V(1281),0):c[b];switch(a){case 7939:return c=X.getSupportedExtensions()||[],c=c.concat(c.map(function(d){return"GL_"+d})),c=
c.map(function(d){return Tb(d)}),c=Gb[a]=c,0>b||b>=c.length?(V(1281),0):c[b];default:return V(1280),0}},l:function(a,b){b=H(b);if(a=T[a]){var c=a,d=c.lc,e=c.Nc,g;if(!d)for(c.lc=d={},c.Mc={},g=0;g<X.getProgramParameter(c,35718);++g){var f=X.getActiveUniform(c,g);var m=f.name;f=f.size;var p=Ub(m);p=0<p?m.slice(0,p):m;var q=c.vc;c.vc+=f;e[p]=[f,q];for(m=0;m<f;++m)d[q]=m,c.Mc[q++]=p}c=a.lc;d=0;e=b;g=Ub(b);0<g&&(d=parseInt(b.slice(g+1))>>>0,e=b.slice(0,g));if((e=a.Nc[e])&&d<e[0]&&(d+=e[1],c[d]=c[d]||X.getUniformLocation(a,
b)))return d}else V(1281);return-1},Aa:function(a){a=T[a];X.linkProgram(a);a.lc=0;a.Nc={}},L:function(a,b){X.polygonOffset(a,b)},r:function(a){X.readBuffer(a)},Ia:function(a,b,c,d){X.renderbufferStorage(a,b,c,d)},G:function(a,b,c,d,e){X.renderbufferStorageMultisample(a,b,c,d,e)},s:function(a,b,c,d){X.scissor(a,b,c,d)},xa:function(a,b,c,d){for(var e="",g=0;g<b;++g){var f=d?I[d+4*g>>2]:-1;e+=H(I[c+4*g>>2],0>f?void 0:f)}X.shaderSource(U[a],e)},Na:function(a,b,c){X.stencilFunc(a,b,c)},ra:function(a,b,
c,d){X.stencilFuncSeparate(a,b,c,d)},w:function(a){X.stencilMask(a)},Ma:function(a,b,c){X.stencilOp(a,b,c)},qa:function(a,b,c,d){X.stencilOpSeparate(a,b,c,d)},Fa:function(a,b,c,d,e,g,f,m,p){if(2<=W.version)if(X.hc)X.texImage2D(a,b,c,d,e,g,f,m,p);else if(p){var q=Vb(m);X.texImage2D(a,b,c,d,e,g,f,m,q,p>>Wb(q))}else X.texImage2D(a,b,c,d,e,g,f,m,null);else X.texImage2D(a,b,c,d,e,g,f,m,p?Xb(m,f,d,e,p):null)},Da:function(a,b,c,d,e,g,f,m,p,q){if(X.hc)X.texImage3D(a,b,c,d,e,g,f,m,p,q);else if(q){var r=Vb(p);
X.texImage3D(a,b,c,d,e,g,f,m,p,r,q>>Wb(r))}else X.texImage3D(a,b,c,d,e,g,f,m,p,null)},F:function(a,b,c){X.texParameterf(a,b,c)},f:function(a,b,c){X.texParameteri(a,b,c)},pb:function(a,b,c,d,e,g,f,m,p){if(2<=W.version)if(X.hc)X.texSubImage2D(a,b,c,d,e,g,f,m,p);else if(p){var q=Vb(m);X.texSubImage2D(a,b,c,d,e,g,f,m,q,p>>Wb(q))}else X.texSubImage2D(a,b,c,d,e,g,f,m,null);else q=null,p&&(q=Xb(m,f,e,g,p)),X.texSubImage2D(a,b,c,d,e,g,f,m,q)},ob:function(a,b,c,d,e,g,f,m,p,q,r){if(X.hc)X.texSubImage3D(a,b,
c,d,e,g,f,m,p,q,r);else if(r){var v=Vb(q);X.texSubImage3D(a,b,c,d,e,g,f,m,p,q,v,r>>Wb(v))}else X.texSubImage3D(a,b,c,d,e,g,f,m,p,q,null)},zb:function(a,b,c){if(2<=W.version)X.uniform1fv(Y(a),J,c>>2,b);else{if(288>=b)for(var d=Z[b-1],e=0;e<b;++e)d[e]=J[c+4*e>>2];else d=J.subarray(c>>2,c+4*b>>2);X.uniform1fv(Y(a),d)}},C:function(a,b){X.uniform1i(Y(a),b)},yb:function(a,b,c){if(2<=W.version)X.uniform2fv(Y(a),J,c>>2,2*b);else{if(144>=b)for(var d=Z[2*b-1],e=0;e<2*b;e+=2)d[e]=J[c+4*e>>2],d[e+1]=J[c+(4*e+
4)>>2];else d=J.subarray(c>>2,c+8*b>>2);X.uniform2fv(Y(a),d)}},xb:function(a,b,c){if(2<=W.version)X.uniform3fv(Y(a),J,c>>2,3*b);else{if(96>=b)for(var d=Z[3*b-1],e=0;e<3*b;e+=3)d[e]=J[c+4*e>>2],d[e+1]=J[c+(4*e+4)>>2],d[e+2]=J[c+(4*e+8)>>2];else d=J.subarray(c>>2,c+12*b>>2);X.uniform3fv(Y(a),d)}},wb:function(a,b,c){if(2<=W.version)X.uniform4fv(Y(a),J,c>>2,4*b);else{if(72>=b){var d=Z[4*b-1],e=J;c>>=2;for(var g=0;g<4*b;g+=4){var f=c+g;d[g]=e[f];d[g+1]=e[f+1];d[g+2]=e[f+2];d[g+3]=e[f+3]}}else d=J.subarray(c>>
2,c+16*b>>2);X.uniform4fv(Y(a),d)}},ub:function(a,b,c,d){if(2<=W.version)X.uniformMatrix4fv(Y(a),!!c,J,d>>2,16*b);else{if(18>=b){var e=Z[16*b-1],g=J;d>>=2;for(var f=0;f<16*b;f+=16){var m=d+f;e[f]=g[m];e[f+1]=g[m+1];e[f+2]=g[m+2];e[f+3]=g[m+3];e[f+4]=g[m+4];e[f+5]=g[m+5];e[f+6]=g[m+6];e[f+7]=g[m+7];e[f+8]=g[m+8];e[f+9]=g[m+9];e[f+10]=g[m+10];e[f+11]=g[m+11];e[f+12]=g[m+12];e[f+13]=g[m+13];e[f+14]=g[m+14];e[f+15]=g[m+15]}}else e=J.subarray(d>>2,d+64*b>>2);X.uniformMatrix4fv(Y(a),!!c,e)}},k:function(a){a=
T[a];X.useProgram(a);X.Oc=a},Bb:function(a,b){X.vertexAttribDivisor(a,b)},Cb:function(a,b,c,d,e,g){X.vertexAttribPointer(a,b,c,!!d,e,g)},t:function(a,b,c,d){X.viewport(a,b,c,d)},cb:function(){h.Gc=function(a){0!=gc()&&(a.preventDefault(),a.returnValue=" ")};window.addEventListener("beforeunload",h.Gc)},bb:function(){h.Lc=function(a){a=a.clipboardData.getData("text");pa("_sapp_emsc_onpaste",["string"],[a])};window.addEventListener("paste",h.Lc)},ab:function(a){h.kd=[];a=H(a);a=document.getElementById(a);
h.Hc=function(b){b.stopPropagation();b.preventDefault()};h.Ic=function(b){b.stopPropagation();b.preventDefault()};h.Jc=function(b){b.stopPropagation();b.preventDefault()};h.Kc=function(b){b.stopPropagation();b.preventDefault();var c=b.dataTransfer.files;h.ld=c;hc(c.length);var d;for(d=0;d<c.length;d++)pa("_sapp_emsc_drop",["number","string"],[d,c[d].name]);ic(b.clientX,b.clientY)};a.addEventListener("dragenter",h.Hc,!1);a.addEventListener("dragleave",h.Ic,!1);a.addEventListener("dragover",h.Jc,!1);
a.addEventListener("drop",h.Kc,!1)},Wa:function(){var a=document.getElementById("sokol-app-favicon");a&&document.head.removeChild(a)},p:function(){var a=document.createElement("input");a.type="text";a.id="_sokol_app_input_element";a.autocapitalize="none";a.addEventListener("focusout",function(){jc()});document.body.append(a)},Ya:function(){document.exitPointerLock&&document.exitPointerLock()},o:function(){document.getElementById("_sokol_app_input_element").focus()},db:function(a){a=H(a);h.jc=document.getElementById(a);
h.jc||console.log("sokol_app.h: invalid target:"+a);h.jc.requestPointerLock||console.log("sokol_app.h: target doesn't support requestPointerLock:"+a)},$a:function(){window.removeEventListener("beforeunload",h.Gc)},_a:function(){window.removeEventListener("paste",h.Lc)},Za:function(a){a=H(a);a=document.getElementById(a);a.removeEventListener("dragenter",h.Hc);a.removeEventListener("dragleave",h.Ic);a.removeEventListener("dragover",h.Jc);a.removeEventListener("drop",h.Kc)},A:function(){h.jc&&h.jc.requestPointerLock&&
h.jc.requestPointerLock()},Va:function(a,b,c){var d=document.createElement("canvas");d.width=a;d.height=b;var e=d.getContext("2d"),g=e.createImageData(a,b);g.data.set(F.subarray(c,c+a*b*4));e.putImageData(g,0,0);a=document.createElement("link");a.id="sokol-app-favicon";a.rel="shortcut icon";a.href=d.toDataURL();document.head.appendChild(a)},n:function(){document.getElementById("_sokol_app_input_element").blur()},Xa:function(a){a=H(a);var b=document.createElement("textarea");b.setAttribute("autocomplete",
"off");b.setAttribute("autocorrect","off");b.setAttribute("autocapitalize","off");b.setAttribute("spellcheck","false");b.style.left="-100px";b.style.top="-100px";b.style.height=1;b.style.width=1;b.value=a;document.body.appendChild(b);b.select();document.execCommand("copy");document.body.removeChild(b)},B:function(a,b,c,d,e,g){b=H(b);var f=new XMLHttpRequest;f.open("GET",b);f.responseType="arraybuffer";var m=0<d;m&&f.setRequestHeader("Range","bytes="+c+"-"+(c+d-1));f.onreadystatechange=function(){if(this.readyState==
this.DONE)if(206==this.status||200==this.status&&!m){var p=new Uint8Array(f.response),q=p.length;q<=g?(F.set(p,e),kc(a,d,q)):lc(a)}else mc(a,this.status)};f.send()},pa:function(a,b){b=H(b);var c=new XMLHttpRequest;c.open("HEAD",b);c.onreadystatechange=function(){if(this.readyState==this.DONE)if(200==this.status){var d=this.getResponseHeader("Content-Length");nc(a,d)}else mc(a,this.status)};c.send()},wa:function(){return navigator.userAgent.includes("Macintosh")?1:0},u:function(){return performance.now()},
hb:function(a,b,c,d){return cc(a,b,c,d)}};
(function(){function a(e){h.asm=e.exports;ma=h.asm.Jb;Aa();Ba=h.asm.ac;Da.unshift(h.asm.Kb);L--;h.monitorRunDependencies&&h.monitorRunDependencies(L);0==L&&(null!==Ia&&(clearInterval(Ia),Ia=null),Ja&&(e=Ja,Ja=null,e()))}function b(e){a(e.instance)}function c(e){return Na().then(function(g){return WebAssembly.instantiate(g,d)}).then(function(g){return g}).then(e,function(g){B("failed to asynchronously prepare wasm: "+g);A(g)})}var d={a:oc};L++;h.monitorRunDependencies&&h.monitorRunDependencies(L);
if(h.instantiateWasm)try{return h.instantiateWasm(d,a)}catch(e){return B("Module.instantiateWasm callback failed with error: "+e),!1}(function(){return C||"function"!==typeof WebAssembly.instantiateStreaming||Ka()||M.startsWith("file://")||"function"!==typeof fetch?c(b):fetch(M,{credentials:"same-origin"}).then(function(e){return WebAssembly.instantiateStreaming(e,d).then(b,function(g){B("wasm streaming compile failed: "+g);B("falling back to ArrayBuffer instantiation");return c(b)})})})();return{}})();
h.___wasm_call_ctors=function(){return(h.___wasm_call_ctors=h.asm.Kb).apply(null,arguments)};var S=h._malloc=function(){return(S=h._malloc=h.asm.Lb).apply(null,arguments)},jc=h.__sapp_emsc_notify_keyboard_hidden=function(){return(jc=h.__sapp_emsc_notify_keyboard_hidden=h.asm.Mb).apply(null,arguments)};h.__sapp_emsc_onpaste=function(){return(h.__sapp_emsc_onpaste=h.asm.Nb).apply(null,arguments)};
var gc=h.__sapp_html5_get_ask_leave_site=function(){return(gc=h.__sapp_html5_get_ask_leave_site=h.asm.Ob).apply(null,arguments)},hc=h.__sapp_emsc_begin_drop=function(){return(hc=h.__sapp_emsc_begin_drop=h.asm.Pb).apply(null,arguments)};h.__sapp_emsc_drop=function(){return(h.__sapp_emsc_drop=h.asm.Qb).apply(null,arguments)};var ic=h.__sapp_emsc_end_drop=function(){return(ic=h.__sapp_emsc_end_drop=h.asm.Rb).apply(null,arguments)};
h.__sapp_emsc_invoke_fetch_cb=function(){return(h.__sapp_emsc_invoke_fetch_cb=h.asm.Sb).apply(null,arguments)};h._main=function(){return(h._main=h.asm.Tb).apply(null,arguments)};h.__saudio_emsc_pull=function(){return(h.__saudio_emsc_pull=h.asm.Ub).apply(null,arguments)};
var nc=h.__sfetch_emsc_head_response=function(){return(nc=h.__sfetch_emsc_head_response=h.asm.Vb).apply(null,arguments)},kc=h.__sfetch_emsc_get_response=function(){return(kc=h.__sfetch_emsc_get_response=h.asm.Wb).apply(null,arguments)},mc=h.__sfetch_emsc_failed_http_status=function(){return(mc=h.__sfetch_emsc_failed_http_status=h.asm.Xb).apply(null,arguments)},lc=h.__sfetch_emsc_failed_buffer_too_small=function(){return(lc=h.__sfetch_emsc_failed_buffer_too_small=h.asm.Yb).apply(null,arguments)},qa=
h.stackSave=function(){return(qa=h.stackSave=h.asm.Zb).apply(null,arguments)},ra=h.stackRestore=function(){return(ra=h.stackRestore=h.asm._b).apply(null,arguments)},D=h.stackAlloc=function(){return(D=h.stackAlloc=h.asm.$b).apply(null,arguments)},pc;function ja(a){this.name="ExitStatus";this.message="Program terminated with exit("+a+")";this.status=a}Ja=function qc(){pc||rc();pc||(Ja=qc)};
function rc(a){function b(){if(!pc&&(pc=!0,h.calledRun=!0,!na)){Oa(Da);Oa(Ea);if(h.onRuntimeInitialized)h.onRuntimeInitialized();if(sc){var c=a,d=h._main;c=c||[];var e=c.length+1,g=D(4*(e+1));I[g>>2]=va(ba);for(var f=1;f<e;f++)I[(g>>2)+f]=va(c[f-1]);I[(g>>2)+e]=0;try{var m=d(e,g);if(!(noExitRuntime||0<ka)){if(h.onExit)h.onExit(m);na=!0}da(m,new ja(m))}catch(p){p instanceof ja||"unwind"==p||da(1,p)}finally{}}if(h.postRun)for("function"==typeof h.postRun&&(h.postRun=[h.postRun]);h.postRun.length;)c=
h.postRun.shift(),Ga.unshift(c);Oa(Ga)}}a=a||aa;if(!(0<L)){if(h.preRun)for("function"==typeof h.preRun&&(h.preRun=[h.preRun]);h.preRun.length;)Ha();Oa(Ca);0<L||(h.setStatus?(h.setStatus("Running..."),setTimeout(function(){setTimeout(function(){h.setStatus("")},1);b()},1)):b())}}h.run=rc;if(h.preInit)for("function"==typeof h.preInit&&(h.preInit=[h.preInit]);0<h.preInit.length;)h.preInit.pop()();var sc=!0;h.noInitialRun&&(sc=!1);rc();
