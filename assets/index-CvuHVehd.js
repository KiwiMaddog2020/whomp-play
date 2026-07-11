(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=!1,t=null,n=null,r=0,i=!1,a=20;function o(e,t=4){if(!e)return``;let n=e.split(`
`).map(e=>e.trim()).filter(e=>e.length>0);return(n[0]?.startsWith(`at `)?n:n.slice(1)).slice(0,t).join(`
`)}function s(e){if(e instanceof Error)return{message:e.message||e.name||`Unknown error`,detail:o(e.stack)};if(typeof e==`string`)return{message:e};try{return{message:JSON.stringify(e)}}catch{return{message:String(e)}}}function c(){return n?`WHOMP crash report\n${new Date().toISOString()}\nUA: ${l()}\n\n${n.textContent??``}`:``}function l(){try{return typeof navigator<`u`?navigator.userAgent:`unknown`}catch{return`unknown`}}function u(){if(typeof document>`u`)return null;if(t)return t;let e=document.createElement(`div`);e.setAttribute(`role`,`alert`),e.style.cssText=[`position:fixed`,`inset:0`,`z-index:2147483647`,`background:rgba(13,11,9,0.94)`,`color:#ffe9d6`,`font:16px/1.5 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace`,`padding:6vh 6vw`,`box-sizing:border-box`,`overflow:auto`,`-webkit-user-select:text`,`user-select:text`].join(`;`);let r=document.createElement(`div`);r.textContent=`IT BROKE.`,r.style.cssText=`font-size:min(13vw,64px);font-weight:900;letter-spacing:0.04em;color:#ff5a4d;margin:0 0 12px`;let i=document.createElement(`div`);i.textContent=`Tell Kevin what it says below (hit Copy, paste it to him):`,i.style.cssText=`font-size:18px;font-weight:700;margin:0 0 20px;color:#ffd0a8`;let a=document.createElement(`div`);a.style.cssText=`display:flex;flex-direction:column;gap:14px;max-width:1100px`;let o=document.createElement(`button`);return o.textContent=`Copy report`,o.style.cssText=[`margin:24px 0 0`,`padding:12px 20px`,`font:inherit`,`font-weight:800`,`cursor:pointer`,`background:#ff5a4d`,`color:#1a0d0a`,`border:0`,`border-radius:8px`].join(`;`),o.addEventListener(`click`,()=>{let e=c(),t=()=>{o.textContent=`Copied — paste it to Kevin`};try{navigator?.clipboard?.writeText?navigator.clipboard.writeText(e).then(t,()=>d()):d()}catch{d()}}),e.appendChild(r),e.appendChild(i),e.appendChild(a),e.appendChild(o),(document.body??document.documentElement).appendChild(e),t=e,n=a,e}function d(){if(!(!n||typeof window>`u`))try{let e=document.createRange();e.selectNodeContents(n);let t=window.getSelection();t?.removeAllRanges(),t?.addRange(e)}catch{}}function f(e,t={}){let o=u();if(!o||!n||(o.style.display=`block`,r>=a))return;r++;let s=document.createElement(`div`);s.style.cssText=`background:#1c1512;border-left:5px solid #ff5a4d;padding:12px 16px;border-radius:6px`;let c=document.createElement(`div`);if(c.textContent=e.message,c.style.cssText=`font-weight:800;color:#fff;white-space:pre-wrap;word-break:break-word`,s.appendChild(c),e.detail){let t=document.createElement(`pre`);t.textContent=e.detail,t.style.cssText=`margin:8px 0 0;color:#c7b8ad;font-size:13px;white-space:pre-wrap;word-break:break-word;overflow-x:auto`,s.appendChild(t)}t.fatal&&!i?(i=!0,n.insertBefore(s,n.firstChild)):n.appendChild(s)}function p(e,t){f({message:e,detail:t},{fatal:!0})}function m(){if(!(e||typeof window>`u`)){e=!0,window.addEventListener(`error`,e=>{f(e.error==null?{message:e.message||`Uncaught error`,detail:e.filename?`${e.filename}:${e.lineno}:${e.colno}`:void 0}:s(e.error))}),window.addEventListener(`unhandledrejection`,e=>{let t=s(e.reason);t.message=`Unhandled promise rejection: ${t.message}`,f(t)});try{let e=console.error.bind(console);console.error=(...t)=>{e(...t);try{let e=t.map(e=>e instanceof Error?e.stack??e.message:typeof e==`string`?e:h(e)).join(` `);e.trim().length>0&&f({message:`console.error`,detail:e})}catch{}}}catch{}}}function h(e){try{return JSON.stringify(e)}catch{return String(e)}}var g=1e3,_=1001,v=1002,y=1003,b=1004,x=1005,S=1006,C=1007,w=1008,T=1009,E=1010,D=1011,O=1012,ee=1013,k=1014,te=1015,ne=1016,re=1017,ie=1018,A=1020,ae=35902,oe=35899,se=1021,ce=1022,le=1023,j=1026,ue=1027,de=1028,fe=1029,pe=1030,me=1031,he=1033,ge=33776,_e=33777,ve=33778,ye=33779,be=35840,xe=35841,Se=35842,Ce=35843,we=36196,Te=37492,Ee=37496,De=37488,Oe=37489,ke=37490,Ae=37491,je=37808,Me=37809,Ne=37810,Pe=37811,Fe=37812,Ie=37813,M=37814,Le=37815,Re=37816,ze=37817,N=37818,Be=37819,P=37820,F=37821,Ve=36492,He=36494,Ue=36495,We=36283,Ge=36284,Ke=36285,qe=36286,Je=2300,Ye=2301,Xe=2302,Ze=2303,Qe=2400,$e=2401,et=2402,tt=3200,nt=`srgb`,rt=`srgb-linear`,it=`linear`,at=`srgb`,ot=7680,st=35044,I=35048,ct=2e3;function lt(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ut(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function dt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function ft(){let e=dt(`canvas`);return e.style.display=`block`,e}var pt={};function mt(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function ht(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function L(...e){e=ht(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function R(...e){e=ht(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function gt(...e){let t=e.join(` `);t in pt||(pt[t]=!0,L(...e))}function _t(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var vt={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},yt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},bt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),xt=Math.PI/180,St=180/Math.PI;function Ct(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bt[e&255]+bt[e>>8&255]+bt[e>>16&255]+bt[e>>24&255]+`-`+bt[t&255]+bt[t>>8&255]+`-`+bt[t>>16&15|64]+bt[t>>24&255]+`-`+bt[n&63|128]+bt[n>>8&255]+`-`+bt[n>>16&255]+bt[n>>24&255]+bt[r&255]+bt[r>>8&255]+bt[r>>16&255]+bt[r>>24&255]).toLowerCase()}function z(e,t,n){return Math.max(t,Math.min(n,e))}function wt(e,t){return(e%t+t)%t}function Tt(e,t,n){return(1-n)*e+n*t}function Et(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}function Dt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`THREE.MathUtils: Invalid component type.`)}}var B=class e{static{e.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(z(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ot=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:L(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(z(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},V=class e{static{e.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(At.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(At.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this.z=z(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this.z=z(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kt.copy(this).projectOnVector(e),this.sub(kt)}reflect(e){return this.sub(kt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(z(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},kt=new V,At=new Ot,H=class e{static{e.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return gt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(jt.makeScale(e,t)),this}rotate(e){return gt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(jt.makeRotation(-e)),this}translate(e,t){return gt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(jt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},jt=new H,Mt=new H().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nt=new H().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pt(){let e={enabled:!0,workingColorSpace:rt,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=Ft(e.r),e.g=Ft(e.g),e.b=Ft(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=It(e.r),e.g=It(e.g),e.b=It(e.b)),e)},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?it:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(t,n){return gt(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),e.workingToColorSpace(t,n)},toWorkingColorSpace:function(t,n){return gt(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),e.colorSpaceToWorking(t,n)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[rt]:{primaries:t,whitePoint:r,transfer:it,toXYZ:Mt,fromXYZ:Nt,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:nt},outputColorSpaceConfig:{drawingBufferColorSpace:nt}},[nt]:{primaries:t,whitePoint:r,transfer:at,toXYZ:Mt,fromXYZ:Nt,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:nt}}}),e}var U=Pt();function Ft(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function It(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Lt,Rt=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Lt===void 0&&(Lt=dt(`canvas`)),Lt.width=e.width,Lt.height=e.height;let t=Lt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Lt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=dt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Ft(i[e]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Ft(t[e]/255)*255):t[e]=Ft(t[e]);return{data:t,width:e.width,height:e.height}}else return L(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},zt=0,Bt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zt++}),this.uuid=Ct(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width,t.height,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Vt(r[t].image)):e.push(Vt(r[t]))}else e=Vt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Vt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Rt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(L(`Texture: Unable to serialize Texture.`),{})}var Ht=0,Ut=new V,Wt=class e extends yt{constructor(t=e.DEFAULT_IMAGE,n=e.DEFAULT_MAPPING,r=_,i=_,a=S,o=w,s=le,c=T,l=e.DEFAULT_ANISOTROPY,u=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ht++}),this.uuid=Ct(),this.name=``,this.source=new Bt(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=i,this.magFilter=a,this.minFilter=o,this.anisotropy=l,this.format=s,this.internalFormat=null,this.type=c,this.offset=new B(0,0),this.repeat=new B(1,1),this.center=new B(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new H,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ut).x}get height(){return this.source.getSize(Ut).y}get depth(){return this.source.getSize(Ut).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){L(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){L(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case g:e.x-=Math.floor(e.x);break;case _:e.x=e.x<0?0:1;break;case v:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case g:e.y-=Math.floor(e.y);break;case _:e.y=e.y<0?0:1;break;case v:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null,Wt.DEFAULT_MAPPING=300,Wt.DEFAULT_ANISOTROPY=1;var Gt=class e{static{e.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=z(this.x,e.x,t.x),this.y=z(this.y,e.y,t.y),this.z=z(this.z,e.z,t.z),this.w=z(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=z(this.x,e,t),this.y=z(this.y,e,t),this.z=z(this.z,e,t),this.w=z(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(z(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kt=class extends yt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:S,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t),this.textures=[];let r=new Wt({width:e,height:t,depth:n.depth}),i=n.count;for(let e=0;e<i;e++)this.textures[e]=r.clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:S,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Bt(n)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},qt=class extends Kt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Jt=class extends Wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=y,this.minFilter=y,this.wrapR=_,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Yt=class extends Wt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=y,this.minFilter=y,this.wrapR=_,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},W=class e{static{e.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Xt.setFromMatrixColumn(e,0).length(),i=1/Xt.setFromMatrixColumn(e,1).length(),a=1/Xt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qt,e,$t)}lookAt(e,t,n){let r=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),en.crossVectors(n,nn),en.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),en.crossVectors(n,nn)),en.normalize(),tn.crossVectors(nn,en),r[0]=en.x,r[4]=tn.x,r[8]=nn.x,r[1]=en.y,r[5]=tn.y,r[9]=nn.y,r[2]=en.z,r[6]=tn.z,r[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],ee=r[2],k=r[6],te=r[10],ne=r[14],re=r[3],ie=r[7],A=r[11],ae=r[15];return i[0]=a*x+o*T+s*ee+c*re,i[4]=a*S+o*E+s*k+c*ie,i[8]=a*C+o*D+s*te+c*A,i[12]=a*w+o*O+s*ne+c*ae,i[1]=l*x+u*T+d*ee+f*re,i[5]=l*S+u*E+d*k+f*ie,i[9]=l*C+u*D+d*te+f*A,i[13]=l*w+u*O+d*ne+f*ae,i[2]=p*x+m*T+h*ee+g*re,i[6]=p*S+m*E+h*k+g*ie,i[10]=p*C+m*D+h*te+g*A,i[14]=p*w+m*O+h*ne+g*ae,i[3]=_*x+v*T+y*ee+b*re,i[7]=_*S+v*E+y*k+b*ie,i[11]=_*C+v*D+y*te+b*A,i[15]=_*w+v*O+y*ne+b*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,ee=_*O-v*D+y*E+b*T-x*w+S*C;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/ee;return e[0]=(o*O-s*D+c*E)*k,e[1]=(r*D-n*O-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*O-c*w)*k,e[5]=(t*O-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Xt.set(r[0],r[1],r[2]).length(),o=Xt.set(r[4],r[5],r[6]).length(),s=Xt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Zt.copy(this);let c=1/a,l=1/o,u=1/s;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=l,Zt.elements[5]*=l,Zt.elements[6]*=l,Zt.elements[8]*=u,Zt.elements[9]*=u,Zt.elements[10]*=u,t.setFromRotationMatrix(Zt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=ct,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=ct,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Xt=new V,Zt=new W,Qt=new V(0,0,0),$t=new V(1,1,1),en=new V,tn=new V,nn=new V,rn=new W,an=new Ot,on=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(z(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-z(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(z(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-z(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(z(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-z(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:L(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return an.setFromEuler(this),this.setFromQuaternion(an,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};on.DEFAULT_ORDER=`XYZ`;var sn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!=0}},cn=0,ln=new V,un=new Ot,dn=new W,fn=new V,pn=new V,mn=new V,hn=new Ot,gn=new V(1,0,0),_n=new V(0,1,0),vn=new V(0,0,1),yn={type:`added`},bn={type:`removed`},xn={type:`childadded`,child:null},Sn={type:`childremoved`,child:null},Cn=class e extends yt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cn++}),this.uuid=Ct(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new V,n=new on,r=new Ot,i=new V(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new W},normalMatrix:{value:new H}}),this.matrix=new W,this.matrixWorld=new W,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return un.setFromAxisAngle(e,t),this.quaternion.multiply(un),this}rotateOnWorldAxis(e,t){return un.setFromAxisAngle(e,t),this.quaternion.premultiply(un),this}rotateX(e){return this.rotateOnAxis(gn,e)}rotateY(e){return this.rotateOnAxis(_n,e)}rotateZ(e){return this.rotateOnAxis(vn,e)}translateOnAxis(e,t){return ln.copy(e).applyQuaternion(this.quaternion),this.position.add(ln.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gn,e)}translateY(e){return this.translateOnAxis(_n,e)}translateZ(e){return this.translateOnAxis(vn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fn.copy(e):fn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),pn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(pn,fn,this.up):dn.lookAt(fn,pn,this.up),this.quaternion.setFromRotationMatrix(dn),r&&(dn.extractRotation(r.matrixWorld),un.setFromRotationMatrix(dn),this.quaternion.premultiply(un.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(R(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yn),xn.child=e,this.dispatchEvent(xn),xn.child=null):R(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bn),Sn.child=e,this.dispatchEvent(Sn),Sn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yn),xn.child=e,this.dispatchEvent(xn),xn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pn,e,mn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pn,hn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material);if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Cn.DEFAULT_UP=new V(0,1,0),Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wn=class extends Cn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},Tn={type:`move`},En=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Tn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new wn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Dn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},On={h:0,s:0,l:0},kn={h:0,s:0,l:0};function An(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var G=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,U.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=U.workingColorSpace){return this.r=e,this.g=t,this.b=n,U.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=U.workingColorSpace){if(e=wt(e,1),t=z(t,0,1),n=z(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=An(i,r,e+1/3),this.g=An(i,r,e),this.b=An(i,r,e-1/3)}return U.colorSpaceToWorking(this,r),this}setStyle(e,t=nt){function n(t){t!==void 0&&parseFloat(t)<1&&L(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:L(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);L(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nt){let n=Dn[e.toLowerCase()];return n===void 0?L(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ft(e.r),this.g=Ft(e.g),this.b=Ft(e.b),this}copyLinearToSRGB(e){return this.r=It(e.r),this.g=It(e.g),this.b=It(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nt){return U.workingToColorSpace(jn.copy(this),e),Math.round(z(jn.r*255,0,255))*65536+Math.round(z(jn.g*255,0,255))*256+Math.round(z(jn.b*255,0,255))}getHexString(e=nt){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=U.workingColorSpace){U.workingToColorSpace(jn.copy(this),t);let n=jn.r,r=jn.g,i=jn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4;break}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=U.workingColorSpace){return U.workingToColorSpace(jn.copy(this),t),e.r=jn.r,e.g=jn.g,e.b=jn.b,e}getStyle(e=nt){U.workingToColorSpace(jn.copy(this),e);let t=jn.r,n=jn.g,r=jn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(On),this.setHSL(On.h+e,On.s+t,On.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(On),e.getHSL(kn);let n=Tt(On.h,kn.h,t),r=Tt(On.s,kn.s,t),i=Tt(On.l,kn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jn=new G;G.NAMES=Dn;var Mn=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new G(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},Nn=class extends Cn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Pn=new V,Fn=new V,In=new V,Ln=new V,Rn=new V,zn=new V,Bn=new V,Vn=new V,Hn=new V,Un=new V,Wn=new Gt,Gn=new Gt,Kn=new Gt,qn=class e{constructor(e=new V,t=new V,n=new V){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Pn.subVectors(e,t),r.cross(Pn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Pn.subVectors(r,t),Fn.subVectors(n,t),In.subVectors(e,t);let a=Pn.dot(Pn),o=Pn.dot(Fn),s=Pn.dot(In),c=Fn.dot(Fn),l=Fn.dot(In),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ln)!==null&&Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Ln)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Ln.x),s.addScaledVector(a,Ln.y),s.addScaledVector(o,Ln.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Wn.setScalar(0),Gn.setScalar(0),Kn.setScalar(0),Wn.fromBufferAttribute(e,t),Gn.fromBufferAttribute(e,n),Kn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Wn,i.x),a.addScaledVector(Gn,i.y),a.addScaledVector(Kn,i.z),a}static isFrontFacing(e,t,n,r){return Pn.subVectors(n,t),Fn.subVectors(e,t),Pn.cross(Fn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),Pn.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Rn.subVectors(r,n),zn.subVectors(i,n),Vn.subVectors(e,n);let s=Rn.dot(Vn),c=zn.dot(Vn);if(s<=0&&c<=0)return t.copy(n);Hn.subVectors(e,r);let l=Rn.dot(Hn),u=zn.dot(Hn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Rn,a);Un.subVectors(e,i);let f=Rn.dot(Un),p=zn.dot(Un);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(zn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Bn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Bn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Rn,a).addScaledVector(zn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Jn=class{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Xn):Xn.fromBufferAttribute(r,t),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Zn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Zn.copy(e.boundingBox)),Zn.applyMatrix4(e.matrixWorld),this.union(Zn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),ar.subVectors(this.max,ir),Qn.subVectors(e.a,ir),$n.subVectors(e.b,ir),er.subVectors(e.c,ir),tr.subVectors($n,Qn),nr.subVectors(er,$n),rr.subVectors(Qn,er);let t=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-rr.z,rr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,rr.z,0,-rr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-rr.y,rr.x,0];return!cr(t,Qn,$n,er,ar)||(t=[1,0,0,0,1,0,0,0,1],!cr(t,Qn,$n,er,ar))?!1:(or.crossVectors(tr,nr),t=[or.x,or.y,or.z],cr(t,Qn,$n,er,ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Yn=[new V,new V,new V,new V,new V,new V,new V,new V],Xn=new V,Zn=new Jn,Qn=new V,$n=new V,er=new V,tr=new V,nr=new V,rr=new V,ir=new V,ar=new V,or=new V,sr=new V;function cr(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){sr.fromArray(e,a);let o=i.x*Math.abs(sr.x)+i.y*Math.abs(sr.y)+i.z*Math.abs(sr.z),s=t.dot(sr),c=n.dot(sr),l=r.dot(sr);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var lr=new V,ur=new B,dr=0,fr=class extends yt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=st,this.updateRanges=[],this.gpuType=te,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ur.fromBufferAttribute(this,t),ur.applyMatrix3(e),this.setXY(t,ur.x,ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix4(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyNormalMatrix(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.transformDirection(e),this.setXYZ(t,lr.x,lr.y,lr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Et(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Et(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Et(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Et(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Et(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:`dispose`})}},pr=class extends fr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},mr=class extends fr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},hr=class extends fr{constructor(e,t,n){super(new Float32Array(e),t,n)}},gr=new Jn,_r=new V,vr=new V,yr=class{constructor(e=new V,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?gr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_r.subVectors(e,this.center);let t=_r.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(_r,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_r.copy(e.center).add(vr)),this.expandByPoint(_r.copy(e.center).sub(vr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},br=0,xr=new W,Sr=new Cn,Cr=new V,wr=new Jn,Tr=new Jn,Er=new V,Dr=class e extends yt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:br++}),this.uuid=Ct(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lt(e)?mr:pr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new H().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xr.makeRotationFromQuaternion(e),this.applyMatrix4(xr),this}rotateX(e){return xr.makeRotationX(e),this.applyMatrix4(xr),this}rotateY(e){return xr.makeRotationY(e),this.applyMatrix4(xr),this}rotateZ(e){return xr.makeRotationZ(e),this.applyMatrix4(xr),this}translate(e,t,n){return xr.makeTranslation(e,t,n),this.applyMatrix4(xr),this}scale(e,t,n){return xr.makeScale(e,t,n),this.applyMatrix4(xr),this}lookAt(e){return Sr.lookAt(e),Sr.updateMatrix(),this.applyMatrix4(Sr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new hr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&L(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){R(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];wr.setFromBufferAttribute(n),this.morphTargetsRelative?(Er.addVectors(this.boundingBox.min,wr.min),this.boundingBox.expandByPoint(Er),Er.addVectors(this.boundingBox.max,wr.max),this.boundingBox.expandByPoint(Er)):(this.boundingBox.expandByPoint(wr.min),this.boundingBox.expandByPoint(wr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&R(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){R(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new V,1/0);return}if(e){let n=this.boundingSphere.center;if(wr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Tr.setFromBufferAttribute(n),this.morphTargetsRelative?(Er.addVectors(wr.min,Tr.min),wr.expandByPoint(Er),Er.addVectors(wr.max,Tr.max),wr.expandByPoint(Er)):(wr.expandByPoint(Tr.min),wr.expandByPoint(Tr.max))}wr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Er.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Er));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Er.fromBufferAttribute(a,t),o&&(Cr.fromBufferAttribute(e,t),Er.add(Cr)),r=Math.max(r,n.distanceToSquared(Er))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&R(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){R(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new fr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new V,s[e]=new V;let c=new V,l=new V,u=new V,d=new B,f=new B,p=new B,m=new V,h=new V;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new V,y=new V,b=new V,x=new V;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new fr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new V,i=new V,a=new V,o=new V,s=new V,c=new V,l=new V,u=new V;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Er.fromBufferAttribute(e,t),Er.normalize(),e.setXYZ(t,Er.x,Er.y,Er.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new fr(a,r,i)}if(this.index===null)return L(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},Or=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=st,this.updateRanges=[],this.version=0,this.uuid=Ct()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ct()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ct()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},kr=new V,Ar=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix4(e),this.setXYZ(t,kr.x,kr.y,kr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kr.fromBufferAttribute(this,t),kr.applyNormalMatrix(e),this.setXYZ(t,kr.x,kr.y,kr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kr.fromBufferAttribute(this,t),kr.transformDirection(e),this.setXYZ(t,kr.x,kr.y,kr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Et(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Et(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Et(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Et(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Et(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array),i=Dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){mt(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new fr(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){mt(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},jr=0,Mr=class extends yt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jr++}),this.uuid=Ct(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new G(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ot,this.stencilZFail=ot,this.stencilZPass=ot,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){L(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){L(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new G().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors==`number`?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new B().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new B().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Nr=class extends Mr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new G(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Pr,Fr=new V,Ir=new V,Lr=new V,Rr=new B,zr=new B,Br=new W,Vr=new V,Hr=new V,Ur=new V,Wr=new B,Gr=new B,Kr=new B,qr=class extends Cn{constructor(e=new Nr){if(super(),this.isSprite=!0,this.type=`Sprite`,Pr===void 0){Pr=new Dr;let e=new Or(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Pr.setIndex([0,1,2,0,2,3]),Pr.setAttribute(`position`,new Ar(e,3,0,!1)),Pr.setAttribute(`uv`,new Ar(e,2,3,!1))}this.geometry=Pr,this.material=e,this.center=new B(.5,.5),this.count=1}raycast(e,t){e.camera===null&&R(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Ir.setFromMatrixScale(this.matrixWorld),Br.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Lr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ir.multiplyScalar(-Lr.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Jr(Vr.set(-.5,-.5,0),Lr,a,Ir,r,i),Jr(Hr.set(.5,-.5,0),Lr,a,Ir,r,i),Jr(Ur.set(.5,.5,0),Lr,a,Ir,r,i),Wr.set(0,0),Gr.set(1,0),Kr.set(1,1);let o=e.ray.intersectTriangle(Vr,Hr,Ur,!1,Fr);if(o===null&&(Jr(Hr.set(-.5,.5,0),Lr,a,Ir,r,i),Gr.set(0,1),o=e.ray.intersectTriangle(Vr,Ur,Hr,!1,Fr),o===null))return;let s=e.ray.origin.distanceTo(Fr);s<e.near||s>e.far||t.push({distance:s,point:Fr.clone(),uv:qn.getInterpolation(Fr,Vr,Hr,Ur,Wr,Gr,Kr,new B),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Jr(e,t,n,r,i,a){Rr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?zr.copy(Rr):(zr.x=a*Rr.x-i*Rr.y,zr.y=i*Rr.x+a*Rr.y),e.copy(t),e.x+=zr.x,e.y+=zr.y,e.applyMatrix4(Br)}var Yr=new V,Xr=new V,Zr=new V,Qr=new V,$r=new V,ei=new V,ti=new V,ni=class{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yr.copy(this.origin).addScaledVector(this.direction,t),Yr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Xr.copy(e).add(t).multiplyScalar(.5),Zr.copy(t).sub(e).normalize(),Qr.copy(this.origin).sub(Xr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Zr),o=Qr.dot(this.direction),s=-Qr.dot(Zr),c=Qr.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0)if(u=a*s-o,d=a*o-s,p=i*l,u>=0)if(d>=-p)if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c);else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Xr).addScaledVector(Zr,d),f}intersectSphere(e,t){Yr.subVectors(e.center,this.origin);let n=Yr.dot(this.direction),r=Yr.dot(Yr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Yr)!==null}intersectTriangle(e,t,n,r,i){$r.subVectors(t,e),ei.subVectors(n,e),ti.crossVectors($r,ei);let a=this.direction.dot(ti),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Qr.subVectors(this.origin,e);let s=o*this.direction.dot(ei.crossVectors(Qr,ei));if(s<0)return null;let c=o*this.direction.dot($r.cross(Qr));if(c<0||s+c>a)return null;let l=-o*Qr.dot(ti);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ri=class extends Mr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new G(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ii=new W,ai=new ni,oi=new yr,si=new V,ci=new V,li=new V,ui=new V,di=new V,fi=new V,pi=new V,mi=new V,K=class extends Cn{constructor(e=new Dr,t=new ri){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){fi.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(di.fromBufferAttribute(s,e),a?fi.addScaledVector(di,r):fi.addScaledVector(di.sub(t),r))}t.add(fi)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),oi.copy(n.boundingSphere),oi.applyMatrix4(i),ai.copy(e.ray).recast(e.near),!(oi.containsPoint(ai.origin)===!1&&(ai.intersectSphere(oi,si)===null||ai.origin.distanceToSquared(si)>(e.far-e.near)**2))&&(ii.copy(i).invert(),ai.copy(e.ray).applyMatrix4(ii),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ai)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=gi(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=gi(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}else if(s!==void 0)if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=gi(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=gi(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}};function hi(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;mi.copy(s),mi.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(mi);return l<n.near||l>n.far?null:{distance:l,point:mi.clone(),object:e}}function gi(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,ci),e.getVertexPosition(c,li),e.getVertexPosition(l,ui);let u=hi(e,t,n,r,ci,li,ui,pi);if(u){let e=new V;qn.getBarycoord(pi,ci,li,ui,e),i&&(u.uv=qn.getInterpolatedAttribute(i,s,c,l,e,new B)),a&&(u.uv1=qn.getInterpolatedAttribute(a,s,c,l,e,new B)),o&&(u.normal=qn.getInterpolatedAttribute(o,s,c,l,e,new V),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new V,materialIndex:0};qn.getNormal(ci,li,ui,t.normal),u.face=t,u.barycoord=e}return u}var _i=class extends Wt{constructor(e=null,t=1,n=1,r,i,a,o,s,c=y,l=y,u,d){super(null,a,o,s,c,l,r,i,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},vi=class extends fr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},yi=new W,bi=new W,xi=[],Si=new Jn,Ci=new W,wi=new K,Ti=new yr,Ei=class extends K{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Ci)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yi),Si.copy(e.boundingBox).applyMatrix4(yi),this.boundingBox.union(Si)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new yr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,yi),Ti.copy(e.boundingSphere).applyMatrix4(yi),this.boundingSphere.union(Ti)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(wi.geometry=this.geometry,wi.material=this.material,wi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ti.copy(this.boundingSphere),Ti.applyMatrix4(n),e.ray.intersectsSphere(Ti)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,yi),bi.multiplyMatrices(n,yi),wi.matrixWorld=bi,wi.raycast(e,xi);for(let e=0,n=xi.length;e<n;e++){let n=xi[e];n.instanceId=i,n.object=this,t.push(n)}xi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new vi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new _i(new Float32Array(r*this.count),r,this.count,de,te));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Di=new V,Oi=new V,ki=new H,Ai=class{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=Di.subVectors(n,t).cross(Oi.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(Di),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ki.getNormalMatrix(e),r=this.coplanarPoint(Di).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ji=new yr,Mi=new B(.5,.5),Ni=new V,Pi=class{constructor(e=new Ai,t=new Ai,n=new Ai,r=new Ai,i=new Ai,a=new Ai){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ct,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){return ji.center.set(0,0,0),ji.radius=.7071067811865476+Mi.distanceTo(e.center),ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(Ni.x=r.normal.x>0?e.max.x:e.min.x,Ni.y=r.normal.y>0?e.max.y:e.min.y,Ni.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ni)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Fi=class extends Mr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new G(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ii=new W,Li=new ni,Ri=new yr,zi=new V,Bi=class extends Cn{constructor(e=new Dr,t=new Fi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ri.copy(n.boundingSphere),Ri.applyMatrix4(r),Ri.radius+=i,e.ray.intersectsSphere(Ri)===!1)return;Ii.copy(r).invert(),Li.copy(e.ray).applyMatrix4(Ii);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);zi.fromBufferAttribute(l,n),Vi(zi,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)zi.fromBufferAttribute(l,a),Vi(zi,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Vi(e,t,n,r,i,a,o){let s=Li.distanceSqToPoint(e);if(s<n){let n=new V;Li.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Hi=class extends Wt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ui=class extends Wt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Wi=class extends Wt{constructor(e,t,n=k,r,i,a,o=y,s=y,c,l=j,u=1){if(l!==1026&&l!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:u},r,i,a,o,s,l,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Gi=class extends Wi{constructor(e,t=k,n=301,r,i,a=y,o=y,s,c=j){let l={width:e,height:e,depth:1},u=[l,l,l,l,l,l];super(e,e,t,n,r,i,a,o,s,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ki=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},qi=class e extends Dr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new hr(c,3)),this.setAttribute(`normal`,new hr(l,3)),this.setAttribute(`uv`,new hr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new V;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ji=class e extends Dr{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new V,g=new V;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new hr(o,3)),this.setAttribute(`normal`,new hr(s,3)),this.setAttribute(`uv`,new hr(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Yi=class e extends Dr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new V,l=new B;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new hr(a,3)),this.setAttribute(`normal`,new hr(o,3)),this.setAttribute(`uv`,new hr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Xi=class e extends Dr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new hr(u,3)),this.setAttribute(`normal`,new hr(d,3)),this.setAttribute(`uv`,new hr(f,2));function _(){let a=new V,_=new V,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new B,m=new V,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Zi=class e extends Xi{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Qi=class e extends Dr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new hr(i,3)),this.setAttribute(`normal`,new hr(i.slice(),3)),this.setAttribute(`uv`,new hr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new V,r=new V,i=new V;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new V;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new V;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new V,t=new V,n=new V,r=new V,o=new B,s=new B,c=new B;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},$i=class e extends Qi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ea=class e extends Qi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},ta=class e extends Qi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},na=class e extends Dr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new hr(p,3)),this.setAttribute(`normal`,new hr(m,3)),this.setAttribute(`uv`,new hr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},ra=class e extends Dr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new V,p=new B;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new hr(s,3)),this.setAttribute(`normal`,new hr(c,3)),this.setAttribute(`uv`,new hr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ia=class e extends Dr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new V,d=new V,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new hr(p,3)),this.setAttribute(`normal`,new hr(m,3)),this.setAttribute(`uv`,new hr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},aa=class e extends Qi{constructor(e=1,t=0){super([1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],e,t),this.type=`TetrahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},oa=class e extends Dr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new V,f=new V,p=new V;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new hr(c,3)),this.setAttribute(`normal`,new hr(l,3)),this.setAttribute(`uv`,new hr(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};function sa(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(la(i))i.isRenderTargetTexture?(L(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i))if(la(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice();else t[n][r]=i}}return t}function ca(e){let t={};for(let n=0;n<e.length;n++){let r=sa(e[n]);for(let e in r)t[e]=r[e]}return t}function la(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function ua(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function da(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:U.workingColorSpace}var fa={clone:sa,merge:ca},pa=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ma=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ha=class extends Mr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pa,this.fragmentShader=ma,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sa(e.uniforms),this.uniformsGroups=ua(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new G().setHex(r.value);break;case`v2`:this.uniforms[n].value=new B().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Gt().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new W().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ga=class extends ha{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},q=class extends Mr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new G(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new G(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},_a=class extends Mr{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type=`MeshLambertMaterial`,this.color=new G(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new G(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new B(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=0,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},va=class extends Mr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=tt,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ya=class extends Mr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ba(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}var xa=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},Sa=class extends xa{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qe,endingEnd:Qe}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case $e:i=e,o=2*t-n;break;case et:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case $e:a=e,s=2*n-t;break;case et:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Ca=class extends xa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},wa=class extends xa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ta=class extends xa{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=(n-t)/(r-t),S,C,w,T,E;for(let e=0;e<8;e++){S=x*x,C=S*x,w=1-x,T=w*w,E=T*w;let e=E*t+3*T*x*g+3*w*S*y+C*r-n;if(Math.abs(e)<1e-10)break;let i=3*T*(g-t)+6*w*x*(y-g)+3*S*(r-y);if(Math.abs(i)<1e-10)break;x-=e/i,x=Math.max(0,Math.min(1,x))}i[p]=E*o+3*T*x*_+3*w*S*b+C*m}return i}},Ea=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=ba(t,this.TimeBufferType),this.values=ba(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ba(e.times,Array),values:ba(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new wa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ca(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Sa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Ta(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Je:t=this.InterpolantFactoryMethodDiscrete;break;case Ye:t=this.InterpolantFactoryMethodLinear;break;case Xe:t=this.InterpolantFactoryMethodSmooth;break;case Ze:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t);return L(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Je;case this.InterpolantFactoryMethodLinear:return Ye;case this.InterpolantFactoryMethodSmooth:return Xe;case this.InterpolantFactoryMethodBezier:return Ze}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(R(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(R(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){R(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){R(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&ut(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){R(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Xe,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0]))if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Ea.prototype.ValueTypeName=``,Ea.prototype.TimeBufferType=Float32Array,Ea.prototype.ValueBufferType=Float32Array,Ea.prototype.DefaultInterpolation=Ye;var Da=class extends Ea{constructor(e,t,n){super(e,t,n)}};Da.prototype.ValueTypeName=`bool`,Da.prototype.ValueBufferType=Array,Da.prototype.DefaultInterpolation=Je,Da.prototype.InterpolantFactoryMethodLinear=void 0,Da.prototype.InterpolantFactoryMethodSmooth=void 0;var Oa=class extends Ea{constructor(e,t,n,r){super(e,t,n,r)}};Oa.prototype.ValueTypeName=`color`;var ka=class extends Ea{constructor(e,t,n,r){super(e,t,n,r)}};ka.prototype.ValueTypeName=`number`;var Aa=class extends xa{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Ot.slerpFlat(i,0,a,c-o,a,c,s);return i}},ja=class extends Ea{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Aa(this.times,this.values,this.getValueSize(),e)}};ja.prototype.ValueTypeName=`quaternion`,ja.prototype.InterpolantFactoryMethodSmooth=void 0;var Ma=class extends Ea{constructor(e,t,n){super(e,t,n)}};Ma.prototype.ValueTypeName=`string`,Ma.prototype.ValueBufferType=Array,Ma.prototype.DefaultInterpolation=Je,Ma.prototype.InterpolantFactoryMethodLinear=void 0,Ma.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends Ea{constructor(e,t,n,r){super(e,t,n,r)}};Na.prototype.ValueTypeName=`vector`;var Pa=new class{constructor(e,t,n){let r=this,i=!1,a=0,o=0,s,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(e){o++,i===!1&&r.onStart!==void 0&&r.onStart(e,a,o),i=!0},this.itemEnd=function(e){a++,r.onProgress!==void 0&&r.onProgress(e,a,o),a===o&&(i=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(e){r.onError!==void 0&&r.onError(e)},this.resolveURL=function(e){return e=e.normalize(`NFC`),s?s(e):e},this.setURLModifier=function(e){return s=e,this},this.addHandler=function(e,t){return c.push(e,t),this},this.removeHandler=function(e){let t=c.indexOf(e);return t!==-1&&c.splice(t,2),this},this.getHandler=function(e){for(let t=0,n=c.length;t<n;t+=2){let n=c[t],r=c[t+1];if(n.global&&(n.lastIndex=0),n.test(e))return r}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||=new AbortController,this._abortController}},Fa=class{constructor(e){this.manager=e===void 0?Pa:e,this.crossOrigin=`anonymous`,this.withCredentials=!1,this.path=``,this.resourcePath=``,this.requestHeader={},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,i){n.load(e,r,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Fa.DEFAULT_MATERIAL_NAME=`__DEFAULT`;var Ia=class extends Cn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new G(e),this.intensity=t}dispose(){this.dispatchEvent({type:`dispose`})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},La=class extends Ia{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new G(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ra=new W,za=new V,Ba=new V,Va=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new B(512,512),this.mapType=T,this.map=null,this.mapPass=null,this.matrix=new W,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pi,this._frameExtents=new B(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;za.setFromMatrixPosition(e.matrixWorld),t.position.copy(za),Ba.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ba),t.updateMatrixWorld(),Ra.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ra,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===2001||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ra)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ha=new V,Ua=new Ot,Wa=new V,Ga=class extends Cn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new W,this.projectionMatrix=new W,this.projectionMatrixInverse=new W,this.coordinateSystem=ct,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ha,Ua,Wa),Wa.x===1&&Wa.y===1&&Wa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ha,Ua,Wa.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ha,Ua,Wa),Wa.x===1&&Wa.y===1&&Wa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ha,Ua,Wa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ka=new V,qa=new B,Ja=new B,Ya=class extends Ga{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=St*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return St*2*Math.atan(Math.tan(xt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ka.x,Ka.y).multiplyScalar(-e/Ka.z),Ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ka.x,Ka.y).multiplyScalar(-e/Ka.z)}getViewSize(e,t){return this.getViewBounds(e,qa,Ja),t.subVectors(Ja,qa)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Xa=class extends Ga{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Za=class extends Va{constructor(){super(new Xa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qa=class extends Ia{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new Za}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},$a=-90,eo=1,to=class extends Cn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Ya($a,eo,e,t);r.layers=this.layers,this.add(r);let i=new Ya($a,eo,e,t);i.layers=this.layers,this.add(i);let a=new Ya($a,eo,e,t);a.layers=this.layers,this.add(a);let o=new Ya($a,eo,e,t);o.layers=this.layers,this.add(o);let s=new Ya($a,eo,e,t);s.layers=this.layers,this.add(s);let c=new Ya($a,eo,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},no=class extends Ya{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ro=`\\[\\]\\.:\\/`,io=RegExp(`[\\[\\]\\.:\\/]`,`g`),ao=`[^\\[\\]\\.:\\/]`,oo=`[^`+ro.replace(`\\.`,``)+`]`,so=`((?:WC+[\\/:])*)`.replace(`WC`,ao),co=`(WCOD+)?`.replace(`WCOD`,oo),lo=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,ao),uo=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,ao),fo=RegExp(`^`+so+co+lo+uo+`$`),po=[`material`,`materials`,`bones`,`map`],mo=class{constructor(e,t,n){let r=n||ho.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ho=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(io,``)}static parseTrackName(e){let t=fo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);po.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){L(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){R(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){R(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){R(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){R(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){R(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){R(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;R(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){R(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ho.Composite=mo,ho.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},ho.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},ho.prototype.GetterByBindingType=[ho.prototype._getValue_direct,ho.prototype._getValue_array,ho.prototype._getValue_arrayElement,ho.prototype._getValue_toArray],ho.prototype.SetterByBindingTypeAndVersioning=[[ho.prototype._setValue_direct,ho.prototype._setValue_direct_setNeedsUpdate,ho.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ho.prototype._setValue_array,ho.prototype._setValue_array_setNeedsUpdate,ho.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ho.prototype._setValue_arrayElement,ho.prototype._setValue_arrayElement_setNeedsUpdate,ho.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ho.prototype._setValue_fromArray,ho.prototype._setValue_fromArray_setNeedsUpdate,ho.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class e{static{e.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function go(e,t,n,r){let i=_o(r);switch(n){case se:return e*t;case de:return e*t/i.components*i.byteLength;case fe:return e*t/i.components*i.byteLength;case pe:return e*t*2/i.components*i.byteLength;case me:return e*t*2/i.components*i.byteLength;case ce:return e*t*3/i.components*i.byteLength;case le:return e*t*4/i.components*i.byteLength;case he:return e*t*4/i.components*i.byteLength;case ge:case _e:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ve:case ye:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case xe:case Ce:return Math.max(e,16)*Math.max(t,8)/4;case be:case Se:return Math.max(e,8)*Math.max(t,8)/2;case we:case Te:case De:case Oe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Ee:case ke:case Ae:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case je:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Me:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Ne:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Pe:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Fe:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case Ie:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case M:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Le:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Re:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case ze:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case N:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Be:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case P:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case F:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ve:case He:case Ue:return Math.ceil(e/4)*Math.ceil(t/4)*16;case We:case Ge:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ke:case qe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function _o(e){switch(e){case T:case E:return{byteLength:1,components:1};case O:case D:case ne:return{byteLength:2,components:1};case re:case ie:return{byteLength:2,components:4};case k:case ee:case te:return{byteLength:4,components:1};case ae:case oe:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`185`}})),typeof window<`u`&&(window.__THREE__?L(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`185`);function vo(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function yo(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var J={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},Y={common:{diffuse:{value:new G(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new H}},envmap:{envMap:{value:null},envMapRotation:{value:new H},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new H}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new H}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new H},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new H},normalScale:{value:new B(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new H},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new H}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new H}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new H}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new G(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new G(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0},uvTransform:{value:new H}},sprite:{diffuse:{value:new G(16777215)},opacity:{value:1},center:{value:new B(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new H},alphaMap:{value:null},alphaMapTransform:{value:new H},alphaTest:{value:0}}},bo={basic:{uniforms:ca([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.fog]),vertexShader:J.meshbasic_vert,fragmentShader:J.meshbasic_frag},lambert:{uniforms:ca([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new G(0)},envMapIntensity:{value:1}}]),vertexShader:J.meshlambert_vert,fragmentShader:J.meshlambert_frag},phong:{uniforms:ca([Y.common,Y.specularmap,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,Y.lights,{emissive:{value:new G(0)},specular:{value:new G(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:J.meshphong_vert,fragmentShader:J.meshphong_frag},standard:{uniforms:ca([Y.common,Y.envmap,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.roughnessmap,Y.metalnessmap,Y.fog,Y.lights,{emissive:{value:new G(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag},toon:{uniforms:ca([Y.common,Y.aomap,Y.lightmap,Y.emissivemap,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.gradientmap,Y.fog,Y.lights,{emissive:{value:new G(0)}}]),vertexShader:J.meshtoon_vert,fragmentShader:J.meshtoon_frag},matcap:{uniforms:ca([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,Y.fog,{matcap:{value:null}}]),vertexShader:J.meshmatcap_vert,fragmentShader:J.meshmatcap_frag},points:{uniforms:ca([Y.points,Y.fog]),vertexShader:J.points_vert,fragmentShader:J.points_frag},dashed:{uniforms:ca([Y.common,Y.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:J.linedashed_vert,fragmentShader:J.linedashed_frag},depth:{uniforms:ca([Y.common,Y.displacementmap]),vertexShader:J.depth_vert,fragmentShader:J.depth_frag},normal:{uniforms:ca([Y.common,Y.bumpmap,Y.normalmap,Y.displacementmap,{opacity:{value:1}}]),vertexShader:J.meshnormal_vert,fragmentShader:J.meshnormal_frag},sprite:{uniforms:ca([Y.sprite,Y.fog]),vertexShader:J.sprite_vert,fragmentShader:J.sprite_frag},background:{uniforms:{uvTransform:{value:new H},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:J.background_vert,fragmentShader:J.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new H}},vertexShader:J.backgroundCube_vert,fragmentShader:J.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:J.cube_vert,fragmentShader:J.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:J.equirect_vert,fragmentShader:J.equirect_frag},distance:{uniforms:ca([Y.common,Y.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:J.distance_vert,fragmentShader:J.distance_frag},shadow:{uniforms:ca([Y.lights,Y.fog,{color:{value:new G(0)},opacity:{value:1}}]),vertexShader:J.shadow_vert,fragmentShader:J.shadow_frag}};bo.physical={uniforms:ca([bo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new H},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new H},clearcoatNormalScale:{value:new B(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new H},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new H},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new H},sheen:{value:0},sheenColor:{value:new G(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new H},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new H},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new H},transmissionSamplerSize:{value:new B},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new H},attenuationDistance:{value:0},attenuationColor:{value:new G(0)},specularColor:{value:new G(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new H},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new H},anisotropyVector:{value:new B},anisotropyMap:{value:null},anisotropyMapTransform:{value:new H}}]),vertexShader:J.meshphysical_vert,fragmentShader:J.meshphysical_frag};var xo={r:0,b:0,g:0},So=new W,Co=new H;Co.set(-1,0,0,0,1,0,0,0,1);function wo(e,t,n,r,i,a){let o=new G(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&(i.isCubeTexture||i.mapping===306)?(l===void 0&&(l=new K(new qi(1,1,1),new ha({name:`BackgroundCubeMaterial`,uniforms:sa(bo.backgroundCube.uniforms),vertexShader:bo.backgroundCube.vertexShader,fragmentShader:bo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(So.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isCubeTexture&&i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Co),l.material.toneMapped=U.getTransfer(i.colorSpace)!==at,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new K(new na(2,2),new ha({name:`BackgroundMaterial`,uniforms:sa(bo.background.uniforms),vertexShader:bo.background.vertexShader,fragmentShader:bo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=U.getTransfer(i.colorSpace)!==at,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(xo,da(e)),n.buffers.color.setClear(xo.r,xo.g,xo.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function To(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Eo(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Do(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return!(t!==1023&&r.convert(t)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(L(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);n.reversedDepthBuffer===!0&&f===!1&&L(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Oo(e){let t=this,n=null,r=0,i=!1,a=!1,o=new Ai,s=new H,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var ko=4,Ao=[.125,.215,.35,.446,.526,.582],jo=20,Mo=256,No=new Xa,Po=new G,Fo=null,Io=0,Lo=0,Ro=!1,zo=new V,Bo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=zo}=i;Fo=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s,o),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ko(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fo,Io,Lo),this._renderer.xr.enabled=Ro,e.scissorTest=!1,Uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fo=this._renderer.getRenderTarget(),Io=this._renderer.getActiveCubeFace(),Lo=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:S,minFilter:S,generateMipmaps:!1,type:ne,format:le,colorSpace:rt,depthBuffer:!1},r=Ho(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ho(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Vo(r)),this._blurMaterial=Go(r,e,t),this._ggxMaterial=Wo(r,e,t)}return r}_compileMaterial(e){let t=new K(new Dr,e);this._renderer.compile(t,No)}_sceneToCubeUV(e,t,n,r,i){let a=new Ya(90,1,t,n),o=[1,-1,1,1,1,1],s=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,u=c.toneMapping;c.getClearColor(Po),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(r),c.clearDepth(),c.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new K(new qi,new ri({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1})));let d=this._backgroundBox,f=d.material,p=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,p=!0):(f.color.copy(Po),p=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x+s[t],i.y,i.z)):n===1?(a.up.set(0,0,o[t]),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y+s[t],i.z)):(a.up.set(0,o[t],0),a.position.set(i.x,i.y,i.z),a.lookAt(i.x,i.y,i.z+s[t]));let l=this._cubeSize;Uo(r,n*l,t>2?l:0,l,l),c.setRenderTarget(r),p&&c.render(d,a),c.render(e,a)}c.toneMapping=u,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ko());let i=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Uo(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,No)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodMeshes.length;for(let t=1;t<r;t++)this._applyGGXFilter(e,t-1,t);t.autoClear=n}_applyGGXFilter(e,t,n){let r=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let s=a.uniforms,c=n/(this._lodMeshes.length-1),l=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-l*l)*(0+c*1.25),{_lodMax:d}=this,f=this._sizeLods[n],p=3*f*(n>d-ko?n-d+ko:0),m=4*(this._cubeSize-f);s.envMap.value=e.texture,s.roughness.value=u,s.mipInt.value=d-t,Uo(i,p,m,3*f,2*f),r.setRenderTarget(i),r.render(o,No),s.envMap.value=i.texture,s.roughness.value=0,s.mipInt.value=d-n,Uo(e,p,m,3*f,2*f),r.setRenderTarget(e),r.render(o,No)}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&R(`blur direction must be either latitudinal or longitudinal!`);let l=this._lodMeshes[r];l.material=c;let u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/(2*jo-1),p=i/f,m=isFinite(i)?1+Math.floor(3*p):jo;m>jo&&L(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${jo}`);let h=[],g=0;for(let e=0;e<jo;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Uo(t,3*v*(r>_-ko?r-_+ko:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,No)}};function Vo(e){let t=[],n=[],r=[],i=e,a=e-ko+1+Ao.length;for(let o=0;o<a;o++){let a=2**i;t.push(a);let s=1/a;o>e-ko?s=Ao[o-e+ko-1]:o===0&&(s=0),n.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new Dr;h.setAttribute(`position`,new fr(f,3)),h.setAttribute(`uv`,new fr(p,2)),h.setAttribute(`faceIndex`,new fr(m,1)),r.push(new K(h,null)),i>ko&&i--}return{lodMeshes:r,sizeLods:t,sigmas:n}}function Ho(e,t,n){let r=new qt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Uo(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Wo(e,t,n){return new ha({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:Mo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Go(e,t,n){let r=new Float32Array(jo),i=new V(0,1,0);return new ha({name:`SphericalGaussianBlur`,defines:{n:jo,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ko(){return new ha({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function qo(){return new ha({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Jo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}var Yo=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Hi(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new qi(5,5,5),i=new ha({name:`CubemapFromEquirect`,uniforms:sa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new K(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=S),new to(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}};function Xo(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304)if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}else{let r=n.image;if(r&&r.height>0){let i=new Yo(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}else return null}}return n}function o(t){if(t&&t.isTexture){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Bo(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Bo(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Zo(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&gt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function Qo(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(i===void 0)return;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else{let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}let s=new(i.count>=65535?mr:pr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function $o(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function es(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:R(`WebGLInfo: Unknown draw mode:`,r);break}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function ts(e,t,n){let r=new WeakMap,i=new Gt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),g=new Jt(h,p,m,u);g.type=te,g.needsUpdate=!0;let _=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*_;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:g,size:new B(p,m)},r.set(o,d);function v(){g.dispose(),r.delete(o),o.removeEventListener(`dispose`,v)}o.addEventListener(`dispose`,v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function ns(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var rs={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function is(e,t,n,r,i,a){let o=new qt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,depthTexture:i?new Wi(t,n):void 0}),s=new qt(t,n,{type:ne,depthBuffer:!1,stencilBuffer:!1}),c=new Dr;c.setAttribute(`position`,new hr([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute(`uv`,new hr([0,2,0,0,2,0],2));let l=new ga({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new K(c,l),d=new Xa(-1,1,1,-1,0,1),f=null,p=null,m=!1,h,g=null,_=[],v=!1;this.setSize=function(e,t){o.setSize(e,t),s.setSize(e,t);for(let n=0;n<_.length;n++){let r=_[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){_=e,v=_.length>0&&_[0].isRenderPass===!0;let t=o.width,n=o.height;for(let e=0;e<_.length;e++){let r=_[e];r.setSize&&r.setSize(t,n)}},this.begin=function(e,t){if(m||e.toneMapping===0&&_.length===0)return!1;if(g=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return v===!1&&e.setRenderTarget(o),h=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return v},this.end=function(e,t){e.toneMapping=h,m=!0;let n=o,r=s;for(let i=0;i<_.length;i++){let a=_[i];if(a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1)){let e=n;n=r,r=e}}if(f!==e.outputColorSpace||p!==e.toneMapping){f=e.outputColorSpace,p=e.toneMapping,l.defines={},U.getTransfer(f)===`srgb`&&(l.defines.SRGB_TRANSFER=``);let t=rs[p];t&&(l.defines[t]=``),l.needsUpdate=!0}l.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(g),e.render(u,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),s.dispose(),c.dispose(),l.dispose()}}var as=new Wt,os=new Wi(1,1),ss=new Jt,cs=new Yt,ls=new Hi,us=[],ds=[],fs=new Float32Array(16),ps=new Float32Array(9),ms=new Float32Array(4);function hs(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=us[i];if(a===void 0&&(a=new Float32Array(i),us[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function gs(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function _s(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function vs(e,t){let n=ds[t];n===void 0&&(n=new Int32Array(t),ds[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function ys(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function bs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gs(n,t))return;e.uniform2fv(this.addr,t),_s(n,t)}}function xs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(gs(n,t))return;e.uniform3fv(this.addr,t),_s(n,t)}}function Ss(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gs(n,t))return;e.uniform4fv(this.addr,t),_s(n,t)}}function Cs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(gs(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),_s(n,t)}else{if(gs(n,r))return;ms.set(r),e.uniformMatrix2fv(this.addr,!1,ms),_s(n,r)}}function ws(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(gs(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),_s(n,t)}else{if(gs(n,r))return;ps.set(r),e.uniformMatrix3fv(this.addr,!1,ps),_s(n,r)}}function Ts(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(gs(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),_s(n,t)}else{if(gs(n,r))return;fs.set(r),e.uniformMatrix4fv(this.addr,!1,fs),_s(n,r)}}function Es(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Ds(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gs(n,t))return;e.uniform2iv(this.addr,t),_s(n,t)}}function Os(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(gs(n,t))return;e.uniform3iv(this.addr,t),_s(n,t)}}function ks(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gs(n,t))return;e.uniform4iv(this.addr,t),_s(n,t)}}function As(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function js(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(gs(n,t))return;e.uniform2uiv(this.addr,t),_s(n,t)}}function Ms(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(gs(n,t))return;e.uniform3uiv(this.addr,t),_s(n,t)}}function Ns(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(gs(n,t))return;e.uniform4uiv(this.addr,t),_s(n,t)}}function Ps(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(os.compareFunction=n.isReversedDepthBuffer()?518:515,a=os):a=as,n.setTexture2D(t||a,i)}function Fs(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||cs,i)}function Is(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||ls,i)}function Ls(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||ss,i)}function Rs(e){switch(e){case 5126:return ys;case 35664:return bs;case 35665:return xs;case 35666:return Ss;case 35674:return Cs;case 35675:return ws;case 35676:return Ts;case 5124:case 35670:return Es;case 35667:case 35671:return Ds;case 35668:case 35672:return Os;case 35669:case 35673:return ks;case 5125:return As;case 36294:return js;case 36295:return Ms;case 36296:return Ns;case 35678:case 36198:case 36298:case 36306:case 35682:return Ps;case 35679:case 36299:case 36307:return Fs;case 35680:case 36300:case 36308:case 36293:return Is;case 36289:case 36303:case 36311:case 36292:return Ls}}function zs(e,t){e.uniform1fv(this.addr,t)}function Bs(e,t){let n=hs(t,this.size,2);e.uniform2fv(this.addr,n)}function Vs(e,t){let n=hs(t,this.size,3);e.uniform3fv(this.addr,n)}function Hs(e,t){let n=hs(t,this.size,4);e.uniform4fv(this.addr,n)}function Us(e,t){let n=hs(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ws(e,t){let n=hs(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Gs(e,t){let n=hs(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ks(e,t){e.uniform1iv(this.addr,t)}function qs(e,t){e.uniform2iv(this.addr,t)}function Js(e,t){e.uniform3iv(this.addr,t)}function Ys(e,t){e.uniform4iv(this.addr,t)}function Xs(e,t){e.uniform1uiv(this.addr,t)}function Zs(e,t){e.uniform2uiv(this.addr,t)}function Qs(e,t){e.uniform3uiv(this.addr,t)}function $s(e,t){e.uniform4uiv(this.addr,t)}function ec(e,t,n){let r=this.cache,i=t.length,a=vs(n,i);gs(r,a)||(e.uniform1iv(this.addr,a),_s(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?os:as;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function tc(e,t,n){let r=this.cache,i=t.length,a=vs(n,i);gs(r,a)||(e.uniform1iv(this.addr,a),_s(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||cs,a[e])}function nc(e,t,n){let r=this.cache,i=t.length,a=vs(n,i);gs(r,a)||(e.uniform1iv(this.addr,a),_s(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||ls,a[e])}function rc(e,t,n){let r=this.cache,i=t.length,a=vs(n,i);gs(r,a)||(e.uniform1iv(this.addr,a),_s(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||ss,a[e])}function ic(e){switch(e){case 5126:return zs;case 35664:return Bs;case 35665:return Vs;case 35666:return Hs;case 35674:return Us;case 35675:return Ws;case 35676:return Gs;case 5124:case 35670:return Ks;case 35667:case 35671:return qs;case 35668:case 35672:return Js;case 35669:case 35673:return Ys;case 5125:return Xs;case 36294:return Zs;case 36295:return Qs;case 36296:return $s;case 35678:case 36198:case 36298:case 36306:case 35682:return ec;case 35679:case 36299:case 36307:return tc;case 35680:case 36300:case 36308:case 36293:return nc;case 36289:case 36303:case 36311:case 36292:return rc}}var ac=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Rs(t.type)}},oc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ic(t.type)}},sc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},cc=/(\w+)(\])?(\[|\.)?/g;function lc(e,t){e.seq.push(t),e.map[t.id]=t}function uc(e,t,n){let r=e.name,i=r.length;for(cc.lastIndex=0;;){let a=cc.exec(r),o=cc.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){lc(n,l===void 0?new ac(s,e,t):new oc(s,e,t));break}else{let e=n.map[s];e===void 0&&(e=new sc(s),lc(n,e)),n=e}}}var dc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);uc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function fc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var pc=37297,mc=0;function hc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var gc=new H;function _c(e){U._getMatrix(gc,U.workingColorSpace,e);let t=`mat3( ${gc.elements.map(e=>e.toFixed(4))} )`;switch(U.getTransfer(e)){case it:return[t,`LinearTransferOETF`];case at:return[t,`sRGBTransferOETF`];default:return L(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function vc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+hc(e.getShaderSource(t),r)}else return i}function yc(e,t){let n=_c(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}var bc={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function xc(e,t){let n=bc[t];return n===void 0?(L(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var Sc=new V;function Cc(){return U.getLuminanceCoefficients(Sc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Sc.x.toFixed(4)}, ${Sc.y.toFixed(4)}, ${Sc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function wc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Dc).join(`
`)}function Tc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Ec(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Dc(e){return e!==``}function Oc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kc(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ac=/^[ \t]*#include +<([\w\d./]+)>/gm;function jc(e){return e.replace(Ac,Nc)}var Mc=new Map;function Nc(e,t){let n=J[t];if(n===void 0){let e=Mc.get(t);if(e!==void 0)n=J[e],L(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return jc(n)}var Pc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fc(e){return e.replace(Pc,Ic)}function Ic(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Lc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Rc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function zc(e){return Rc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Bc={301:`ENVMAP_TYPE_CUBE`,302:`ENVMAP_TYPE_CUBE`,306:`ENVMAP_TYPE_CUBE_UV`};function Vc(e){return e.envMap===!1?`ENVMAP_TYPE_CUBE`:Bc[e.envMapMode]||`ENVMAP_TYPE_CUBE`}var Hc={302:`ENVMAP_MODE_REFRACTION`};function Uc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Hc[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Wc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Gc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Wc[e.combine]||`ENVMAP_BLENDING_NONE`}function Kc(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function qc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=zc(n),l=Vc(n),u=Uc(n),d=Gc(n),f=Kc(n),p=wc(n),m=Tc(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Dc).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(Dc).join(`
`),_.length>0&&(_+=`
`)):(g=[Lc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Dc).join(`
`),_=[Lc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:J.tonemapping_pars_fragment,n.toneMapping===0?``:xc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,J.colorspace_pars_fragment,yc(`linearToOutputTexel`,n.outputColorSpace),Cc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Dc).join(`
`)),o=jc(o),o=Oc(o,n),o=kc(o,n),s=jc(s),s=Oc(s,n),s=kc(s,n),o=Fc(o),s=Fc(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=fc(i,i.VERTEX_SHADER,y),S=fc(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h)||``,r=i.getShaderInfoLog(x)||``,a=i.getShaderInfoLog(S)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1)if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=vc(i,x,`vertex`),n=vc(i,S,`fragment`);R(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}else o===``?(s===``||c===``)&&(u=!1):L(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:g},fragmentShader:{log:c,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new dc(i,h),T=Ec(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,pc)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=mc++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Jc=0,Yc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Xc(e),t.set(e,n)),n}},Xc=class{constructor(e){this.id=Jc++,this.code=e,this.usedTimes=0}};function Zc(e){return e===1030||e===37490||e===36285}function Qc(e,t,n,r,i,a){let o=new sn,s=new Yc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f=r.precision,p={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function m(e){return c.add(e),e===0?`uv`:`uv${e}`}function h(i,o,l,u,h,g){let _=u.fog,v=h.geometry,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,b=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,x=t.get(i.envMap||y,b),S=x&&x.mapping===306?x.image.height:null,C=p[i.type];i.precision!==null&&(f=r.getMaxPrecision(i.precision),f!==i.precision&&L(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,f,`instead.`));let w=v.morphAttributes.position||v.morphAttributes.normal||v.morphAttributes.color,T=w===void 0?0:w.length,E=0;v.morphAttributes.position!==void 0&&(E=1),v.morphAttributes.normal!==void 0&&(E=2),v.morphAttributes.color!==void 0&&(E=3);let D,O,ee,k;if(C){let e=bo[C];D=e.vertexShader,O=e.fragmentShader}else{D=i.vertexShader,O=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),ee=e.id,k=t.id}let te=e.getRenderTarget(),ne=e.state.buffers.depth.getReversed(),re=h.isInstancedMesh===!0,ie=h.isBatchedMesh===!0,A=!!i.map,ae=!!i.matcap,oe=!!x,se=!!i.aoMap,ce=!!i.lightMap,le=!!i.bumpMap&&i.wireframe===!1,j=!!i.normalMap,ue=!!i.displacementMap,de=!!i.emissiveMap,fe=!!i.metalnessMap,pe=!!i.roughnessMap,me=i.anisotropy>0,he=i.clearcoat>0,ge=i.dispersion>0,_e=i.iridescence>0,ve=i.sheen>0,ye=i.transmission>0,be=me&&!!i.anisotropyMap,xe=he&&!!i.clearcoatMap,Se=he&&!!i.clearcoatNormalMap,Ce=he&&!!i.clearcoatRoughnessMap,we=_e&&!!i.iridescenceMap,Te=_e&&!!i.iridescenceThicknessMap,Ee=ve&&!!i.sheenColorMap,De=ve&&!!i.sheenRoughnessMap,Oe=!!i.specularMap,ke=!!i.specularColorMap,Ae=!!i.specularIntensityMap,je=ye&&!!i.transmissionMap,Me=ye&&!!i.thicknessMap,Ne=!!i.gradientMap,Pe=!!i.alphaMap,Fe=i.alphaTest>0,Ie=!!i.alphaHash,M=!!i.extensions,Le=0;i.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Le=e.toneMapping);let Re={shaderID:C,shaderType:i.type,shaderName:i.name,vertexShader:D,fragmentShader:O,defines:i.defines,customVertexShaderID:ee,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:f,batching:ie,batchingColor:ie&&h._colorsTexture!==null,instancing:re,instancingColor:re&&h.instanceColor!==null,instancingMorph:re&&h.morphTexture!==null,outputColorSpace:te===null?e.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:U.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:A,matcap:ae,envMap:oe,envMapMode:oe&&x.mapping,envMapCubeUVHeight:S,aoMap:se,lightMap:ce,bumpMap:le,normalMap:j,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:j&&i.normalMapType===1,normalMapTangentSpace:j&&i.normalMapType===0,packedNormalMap:j&&i.normalMapType===0&&Zc(i.normalMap.format),metalnessMap:fe,roughnessMap:pe,anisotropy:me,anisotropyMap:be,clearcoat:he,clearcoatMap:xe,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ce,dispersion:ge,iridescence:_e,iridescenceMap:we,iridescenceThicknessMap:Te,sheen:ve,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:ke,specularIntensityMap:Ae,transmission:ye,transmissionMap:je,thicknessMap:Me,gradientMap:Ne,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Fe,alphaHash:Ie,combine:i.combine,mapUv:A&&m(i.map.channel),aoMapUv:se&&m(i.aoMap.channel),lightMapUv:ce&&m(i.lightMap.channel),bumpMapUv:le&&m(i.bumpMap.channel),normalMapUv:j&&m(i.normalMap.channel),displacementMapUv:ue&&m(i.displacementMap.channel),emissiveMapUv:de&&m(i.emissiveMap.channel),metalnessMapUv:fe&&m(i.metalnessMap.channel),roughnessMapUv:pe&&m(i.roughnessMap.channel),anisotropyMapUv:be&&m(i.anisotropyMap.channel),clearcoatMapUv:xe&&m(i.clearcoatMap.channel),clearcoatNormalMapUv:Se&&m(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&m(i.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&m(i.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&m(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(i.sheenColorMap.channel),sheenRoughnessMapUv:De&&m(i.sheenRoughnessMap.channel),specularMapUv:Oe&&m(i.specularMap.channel),specularColorMapUv:ke&&m(i.specularColorMap.channel),specularIntensityMapUv:Ae&&m(i.specularIntensityMap.channel),transmissionMapUv:je&&m(i.transmissionMap.channel),thicknessMapUv:Me&&m(i.thicknessMap.channel),alphaMapUv:Pe&&m(i.alphaMap.channel),vertexTangents:!!v.attributes.tangent&&(j||me),vertexNormals:!!v.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!v.attributes.color&&v.attributes.color.itemSize===4,pointsUvs:h.isPoints===!0&&!!v.attributes.uv&&(A||Pe),fog:!!_,useFog:i.fog===!0,fogExp2:!!_&&_.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||v.attributes.normal===void 0&&j===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ne,skinning:h.isSkinnedMesh===!0,hasPositionAttribute:v.attributes.position!==void 0,morphTargets:v.morphAttributes.position!==void 0,morphNormals:v.morphAttributes.normal!==void 0,morphColors:v.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:g.length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:A&&i.map.isVideoTexture===!0&&U.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&i.emissiveMap.isVideoTexture===!0&&U.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:M&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(M&&i.extensions.multiDraw===!0||ie)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function g(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(_(n,t),v(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function _(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function v(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function y(e){let t=p[e.type],n;if(t){let e=bo[t];n=fa.clone(e.uniforms)}else n=e.uniforms;return n}function b(t,n){let r=u.get(n);return r===void 0?(r=new qc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function x(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function S(e){s.remove(e)}function C(){s.dispose()}return{getParameters:h,getProgramCacheKey:g,getUniforms:y,acquireProgram:b,releaseProgram:x,releaseShaderCache:S,programs:l,dispose:C}}function $c(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function el(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function tl(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function nl(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t,a){n.length>1&&n.sort(e||el),r.length>1&&r.sort(t||tl),i.length>1&&i.sort(t||tl),a&&(n.reverse(),r.reverse(),i.reverse())}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function rl(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new nl,e.set(t,[i])):n>=r.length?(i=new nl,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function il(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new V,color:new G};break;case`SpotLight`:n={position:new V,direction:new V,color:new G,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new V,color:new G,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new V,skyColor:new G,groundColor:new G};break;case`RectAreaLight`:n={color:new G,position:new V,halfWidth:new V,halfHeight:new V};break}return e[t.id]=n,n}}}function al(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new B,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}var ol=0;function sl(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function cl(e){let t=new il,n=al(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new V);let i=new V,a=new W,o=new W;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(sl);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=null;if(y.shadow&&y.shadow.map&&(C=y.shadow.map.texture.format===1030?y.shadow.map.texture:y.shadow.map.depthTexture||y.shadow.map.texture),y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=Y.LTC_FLOAT_1,r.rectAreaLTC2=Y.LTC_FLOAT_2):(r.rectAreaLTC1=Y.LTC_HALF_1,r.rectAreaLTC2=Y.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=ol++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function ll(e){let t=new cl(e),n=[],r=[],i=[];function a(e){d.camera=e,n.length=0,r.length=0,i.length=0}function o(e){n.push(e)}function s(e){r.push(e)}function c(e){i.push(e)}function l(){t.setup(n)}function u(e){t.setupView(n,e)}let d={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:d,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s,pushLightProbeGrid:c}}function ul(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new ll(e),t.set(n,[a])):r>=i.length?(a=new ll(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var dl=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fl=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,pl=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],ml=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],hl=new W,gl=new V,_l=new V;function vl(e,t,n){let r=new Pi,i=new B,a=new B,o=new Gt,s=new va,c=new ya,l={},u=n.maxTextureSize,d={0:1,1:0,2:2},f=new ha({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new B},radius:{value:4}},vertexShader:dl,fragmentShader:fl}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let m=new Dr;m.setAttribute(`position`,new fr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let h=new K(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let _=this.type;this.render=function(t,n,s){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||t.length===0)return;this.type===2&&(L(`WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead.`),this.type=1);let c=e.getRenderTarget(),l=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),f=e.state;f.setBlending(0),f.buffers.depth.getReversed()===!0?f.buffers.color.setClear(0,0,0,0):f.buffers.color.setClear(1,1,1,1),f.buffers.depth.setTest(!0),f.setScissorTest(!1);let p=_!==this.type;p&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let c=0,l=t.length;c<l;c++){let l=t[c],d=l.shadow;if(d===void 0){L(`WebGLShadowMap:`,l,`has no shadow.`);continue}if(d.autoUpdate===!1&&d.needsUpdate===!1)continue;i.copy(d.mapSize);let m=d.getFrameExtents();i.multiply(m),a.copy(d.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(a.x=Math.floor(u/m.x),i.x=a.x*m.x,d.mapSize.x=a.x),i.y>u&&(a.y=Math.floor(u/m.y),i.y=a.y*m.y,d.mapSize.y=a.y));let h=e.state.buffers.depth.getReversed();if(d.camera._reversedDepth=h,d.map===null||p===!0){if(d.map!==null&&(d.map.depthTexture!==null&&(d.map.depthTexture.dispose(),d.map.depthTexture=null),d.map.dispose()),this.type===3){if(l.isPointLight){L(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}d.map=new qt(i.x,i.y,{format:pe,type:ne,minFilter:S,magFilter:S,generateMipmaps:!1}),d.map.texture.name=l.name+`.shadowMap`,d.map.depthTexture=new Wi(i.x,i.y,te),d.map.depthTexture.name=l.name+`.shadowMapDepth`,d.map.depthTexture.format=j,d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=y,d.map.depthTexture.magFilter=y}else l.isPointLight?(d.map=new Yo(i.x),d.map.depthTexture=new Gi(i.x,k)):(d.map=new qt(i.x,i.y),d.map.depthTexture=new Wi(i.x,i.y,k)),d.map.depthTexture.name=l.name+`.shadowMap`,d.map.depthTexture.format=j,this.type===1?(d.map.depthTexture.compareFunction=h?518:515,d.map.depthTexture.minFilter=S,d.map.depthTexture.magFilter=S):(d.map.depthTexture.compareFunction=null,d.map.depthTexture.minFilter=y,d.map.depthTexture.magFilter=y);d.camera.updateProjectionMatrix()}let g=d.map.isWebGLCubeRenderTarget?6:1;for(let t=0;t<g;t++){if(d.map.isWebGLCubeRenderTarget)e.setRenderTarget(d.map,t),e.clear();else{t===0&&(e.setRenderTarget(d.map),e.clear());let n=d.getViewport(t);o.set(a.x*n.x,a.y*n.y,a.x*n.z,a.y*n.w),f.viewport(o)}if(l.isPointLight){let e=d.camera,n=d.matrix,r=l.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),gl.setFromMatrixPosition(l.matrixWorld),e.position.copy(gl),_l.copy(e.position),_l.add(pl[t]),e.up.copy(ml[t]),e.lookAt(_l),e.updateMatrixWorld(),n.makeTranslation(-gl.x,-gl.y,-gl.z),hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),d._frustum.setFromProjectionMatrix(hl,e.coordinateSystem,e.reversedDepth)}else d.updateMatrices(l);r=d.getFrustum(),x(n,s,d.camera,l,this.type)}d.isPointLightShadow!==!0&&this.type===3&&v(d,s),d.needsUpdate=!1}_=this.type,g.needsUpdate=!1,e.setRenderTarget(c,l,d)};function v(n,r){let a=t.update(h);f.defines.VSM_SAMPLES!==n.blurSamples&&(f.defines.VSM_SAMPLES=n.blurSamples,p.defines.VSM_SAMPLES=n.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new qt(i.x,i.y,{format:pe,type:ne})),f.uniforms.shadow_pass.value=n.map.depthTexture,f.uniforms.resolution.value=n.mapSize,f.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,a,f,h,null),p.uniforms.shadow_pass.value=n.mapPass.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,a,p,h,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?c:s,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=l[e];r===void 0&&(r={},l[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,C)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?d[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,i,a,o,s){if(n.visible===!1)return;if(n.layers.test(i.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||r.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),c=n.material;if(Array.isArray(c)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],i,a,o,s)}function C(e){e.target.removeEventListener(`dispose`,C);for(let t in l){let n=l[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function yl(e,t){function n(){let t=!1,n=new Gt,r=null,i=new Gt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?fe(e.DEPTH_TEST):pe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=vt[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?fe(e.STENCIL_TEST):pe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new G(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,te=null,ne=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,ie=0,A=e.getParameter(e.VERSION);A.indexOf(`WebGL`)===-1?A.indexOf(`OpenGL ES`)!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(A)[1]),re=ie>=2):(ie=parseFloat(/^WebGL (\d)/.exec(A)[1]),re=ie>=1);let ae=null,oe={},se=e.getParameter(e.SCISSOR_BOX),ce=e.getParameter(e.VIEWPORT),le=new Gt().fromArray(se),j=new Gt().fromArray(ce);function ue(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),fe(e.DEPTH_TEST),o.setFunc(3),xe(!1),Se(1),fe(e.CULL_FACE),ye(0);function fe(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function pe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function me(t,n){return f[t]===n?!1:(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function he(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ge(t){return h===t?!1:(e.useProgram(t),h=t,!0)}let _e={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};_e[103]=e.MIN,_e[104]=e.MAX;let ve={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ye(t,n,r,i,a,o,s,c,l,u){if(t===0){g===!0&&(pe(e.BLEND),g=!1);return}if(g===!1&&(fe(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:R(`WebGLState: Invalid blending: `,t);break}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:R(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:R(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:R(`WebGLState: Invalid blending: `,t);break}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}return}a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(_e[n],_e[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(ve[r],ve[i],ve[o],ve[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function be(t,n){t.side===2?pe(e.CULL_FACE):fe(e.CULL_FACE);let r=t.side===1;n&&(r=!r),xe(r),t.blending===1&&t.transparent===!1?ye(0):ye(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),we(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?fe(e.SAMPLE_ALPHA_TO_COVERAGE):pe(e.SAMPLE_ALPHA_TO_COVERAGE)}function xe(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function Se(t){t===0?pe(e.CULL_FACE):(fe(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function Ce(t){t!==ee&&(re&&e.lineWidth(t),ee=t)}function we(t,n,r){t?(fe(e.POLYGON_OFFSET_FILL),(k!==n||te!==r)&&(k=n,te=r,o.getReversed()&&(n=-n),e.polygonOffset(n,r))):pe(e.POLYGON_OFFSET_FILL)}function Te(t){t?fe(e.SCISSOR_TEST):pe(e.SCISSOR_TEST)}function Ee(t){t===void 0&&(t=e.TEXTURE0+ne-1),ae!==t&&(e.activeTexture(t),ae=t)}function De(t,n,r){r===void 0&&(r=ae===null?e.TEXTURE0+ne-1:ae);let i=oe[r];i===void 0&&(i={type:void 0,texture:void 0},oe[r]=i),(i.type!==t||i.texture!==n)&&(ae!==r&&(e.activeTexture(r),ae=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function Oe(){let t=oe[ae];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function ke(){try{e.compressedTexImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ae(){try{e.compressedTexImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function je(){try{e.texSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Me(){try{e.texSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Pe(){try{e.compressedTexSubImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Fe(){try{e.texStorage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Ie(){try{e.texStorage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function M(){try{e.texImage2D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Le(){try{e.texImage3D(...arguments)}catch(e){R(`WebGLState:`,e)}}function Re(t){return d[t]===void 0?e.getParameter(t):d[t]}function ze(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function N(t){le.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),le.copy(t))}function Be(t){j.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),j.copy(t))}function P(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function F(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},ae=null,oe={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new G(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,te=null,le.set(0,0,e.canvas.width,e.canvas.height),j.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:fe,disable:pe,bindFramebuffer:me,drawBuffers:he,useProgram:ge,setBlending:ye,setMaterial:be,setFlipSided:xe,setCullFace:Se,setLineWidth:Ce,setPolygonOffset:we,setScissorTest:Te,activeTexture:Ee,bindTexture:De,unbindTexture:Oe,compressedTexImage2D:ke,compressedTexImage3D:Ae,texImage2D:M,texImage3D:Le,pixelStorei:ze,getParameter:Re,updateUBOMapping:P,uniformBlockBinding:F,texStorage2D:Fe,texStorage3D:Ie,texSubImage2D:je,texSubImage3D:Me,compressedTexSubImage2D:Ne,compressedTexSubImage3D:Pe,scissor:N,viewport:Be,reset:Ve}}function bl(e,t,n,r,i,a,o){let s=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new B,u=new WeakMap,d=new Set,f,p=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function h(e,t){return m?new OffscreenCanvas(e,t):dt(`canvas`)}function T(e,t,n){let r=1,i=Re(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1)if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);f===void 0&&(f=h(n,a));let o=t?h(n,a):f;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),L(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}else return`data`in e&&L(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e;return e}function E(e){return e.generateMipmaps}function D(t){e.generateMipmap(t)}function O(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function ee(n,r,i,a,o,s=!1){if(n!==null){if(e[n]!==void 0)return e[n];L(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+n+`'`)}let c;a&&(c=t.get(`EXT_texture_norm16`),c||L(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let l=r;if(r===e.RED&&(i===e.FLOAT&&(l=e.R32F),i===e.HALF_FLOAT&&(l=e.R16F),i===e.UNSIGNED_BYTE&&(l=e.R8),i===e.UNSIGNED_SHORT&&c&&(l=c.R16_EXT),i===e.SHORT&&c&&(l=c.R16_SNORM_EXT)),r===e.RED_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.R8UI),i===e.UNSIGNED_SHORT&&(l=e.R16UI),i===e.UNSIGNED_INT&&(l=e.R32UI),i===e.BYTE&&(l=e.R8I),i===e.SHORT&&(l=e.R16I),i===e.INT&&(l=e.R32I)),r===e.RG&&(i===e.FLOAT&&(l=e.RG32F),i===e.HALF_FLOAT&&(l=e.RG16F),i===e.UNSIGNED_BYTE&&(l=e.RG8),i===e.UNSIGNED_SHORT&&c&&(l=c.RG16_EXT),i===e.SHORT&&c&&(l=c.RG16_SNORM_EXT)),r===e.RG_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RG8UI),i===e.UNSIGNED_SHORT&&(l=e.RG16UI),i===e.UNSIGNED_INT&&(l=e.RG32UI),i===e.BYTE&&(l=e.RG8I),i===e.SHORT&&(l=e.RG16I),i===e.INT&&(l=e.RG32I)),r===e.RGB_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGB8UI),i===e.UNSIGNED_SHORT&&(l=e.RGB16UI),i===e.UNSIGNED_INT&&(l=e.RGB32UI),i===e.BYTE&&(l=e.RGB8I),i===e.SHORT&&(l=e.RGB16I),i===e.INT&&(l=e.RGB32I)),r===e.RGBA_INTEGER&&(i===e.UNSIGNED_BYTE&&(l=e.RGBA8UI),i===e.UNSIGNED_SHORT&&(l=e.RGBA16UI),i===e.UNSIGNED_INT&&(l=e.RGBA32UI),i===e.BYTE&&(l=e.RGBA8I),i===e.SHORT&&(l=e.RGBA16I),i===e.INT&&(l=e.RGBA32I)),r===e.RGB&&(i===e.UNSIGNED_SHORT&&c&&(l=c.RGB16_EXT),i===e.SHORT&&c&&(l=c.RGB16_SNORM_EXT),i===e.UNSIGNED_INT_5_9_9_9_REV&&(l=e.RGB9_E5),i===e.UNSIGNED_INT_10F_11F_11F_REV&&(l=e.R11F_G11F_B10F)),r===e.RGBA){let t=s?it:U.getTransfer(o);i===e.FLOAT&&(l=e.RGBA32F),i===e.HALF_FLOAT&&(l=e.RGBA16F),i===e.UNSIGNED_BYTE&&(l=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),i===e.UNSIGNED_SHORT&&c&&(l=c.RGBA16_EXT),i===e.SHORT&&c&&(l=c.RGBA16_SNORM_EXT),i===e.UNSIGNED_SHORT_4_4_4_4&&(l=e.RGBA4),i===e.UNSIGNED_SHORT_5_5_5_1&&(l=e.RGB5_A1)}return(l===e.R16F||l===e.R32F||l===e.RG16F||l===e.RG32F||l===e.RGBA16F||l===e.RGBA32F)&&t.get(`EXT_color_buffer_float`),l}function k(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,L(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function te(e,t){return E(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ne(e){let t=e.target;t.removeEventListener(`dispose`,ne),ie(t),t.isVideoTexture&&u.delete(t),t.isHTMLTexture&&d.delete(t)}function re(e){let t=e.target;t.removeEventListener(`dispose`,re),ae(t)}function ie(e){let t=r.get(e);if(t.__webglInit===void 0)return;let n=e.source,i=p.get(n);if(i){let r=i[t.__cacheKey];r.usedTimes--,r.usedTimes===0&&A(e),Object.keys(i).length===0&&p.delete(n)}r.remove(e)}function A(t){let n=r.get(t);e.deleteTexture(n.__webglTexture);let i=t.source,a=p.get(i);delete a[n.__cacheKey],o.memory.textures--}function ae(t){let n=r.get(t);if(t.depthTexture&&(t.depthTexture.dispose(),r.remove(t.depthTexture)),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=r.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),o.memory.textures--),r.remove(i[t])}r.remove(t)}let oe=0;function se(){oe=0}function ce(){return oe}function le(e){oe=e}function j(){let e=oe;return e>=i.maxTextures&&L(`WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+i.maxTextures),oe+=1,e}function de(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function fe(t,i){let a=r.get(t);if(t.isVideoTexture&&M(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&a.__version!==t.version){let e=t.image;if(e===null)L(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)L(`WebGLRenderer: Texture marked for update but image is incomplete`);else{Ce(a,t,i);return}}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,a.__webglTexture,e.TEXTURE0+i)}function pe(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){Ce(a,t,i);return}else t.isExternalTexture&&(a.__webglTexture=t.sourceTexture?t.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,a.__webglTexture,e.TEXTURE0+i)}function me(t,i){let a=r.get(t);if(t.isRenderTargetTexture===!1&&t.version>0&&a.__version!==t.version){Ce(a,t,i);return}n.bindTexture(e.TEXTURE_3D,a.__webglTexture,e.TEXTURE0+i)}function he(t,i){let a=r.get(t);if(t.isCubeDepthTexture!==!0&&t.version>0&&a.__version!==t.version){we(a,t,i);return}n.bindTexture(e.TEXTURE_CUBE_MAP,a.__webglTexture,e.TEXTURE0+i)}let ge={[g]:e.REPEAT,[_]:e.CLAMP_TO_EDGE,[v]:e.MIRRORED_REPEAT},_e={[y]:e.NEAREST,[b]:e.NEAREST_MIPMAP_NEAREST,[x]:e.NEAREST_MIPMAP_LINEAR,[S]:e.LINEAR,[C]:e.LINEAR_MIPMAP_NEAREST,[w]:e.LINEAR_MIPMAP_LINEAR},ve={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function ye(n,a){if(a.type===1015&&t.has(`OES_texture_float_linear`)===!1&&(a.magFilter===1006||a.magFilter===1007||a.magFilter===1005||a.magFilter===1008||a.minFilter===1006||a.minFilter===1007||a.minFilter===1005||a.minFilter===1008)&&L(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(n,e.TEXTURE_WRAP_S,ge[a.wrapS]),e.texParameteri(n,e.TEXTURE_WRAP_T,ge[a.wrapT]),(n===e.TEXTURE_3D||n===e.TEXTURE_2D_ARRAY)&&e.texParameteri(n,e.TEXTURE_WRAP_R,ge[a.wrapR]),e.texParameteri(n,e.TEXTURE_MAG_FILTER,_e[a.magFilter]),e.texParameteri(n,e.TEXTURE_MIN_FILTER,_e[a.minFilter]),a.compareFunction&&(e.texParameteri(n,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(n,e.TEXTURE_COMPARE_FUNC,ve[a.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(a.magFilter===1003||a.minFilter!==1005&&a.minFilter!==1008||a.type===1015&&t.has(`OES_texture_float_linear`)===!1)return;if(a.anisotropy>1||r.get(a).__currentAnisotropy){let o=t.get(`EXT_texture_filter_anisotropic`);e.texParameterf(n,o.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(a.anisotropy,i.getMaxAnisotropy())),r.get(a).__currentAnisotropy=a.anisotropy}}}function be(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ne));let i=n.source,a=p.get(i);a===void 0&&(a={},p.set(i,a));let s=de(n);if(s!==t.__cacheKey){a[s]===void 0&&(a[s]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,r=!0),a[s].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&A(n)),t.__cacheKey=s,t.__webglTexture=a[s].texture}return r}function xe(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Se(t,r,i,a){let o=t.updateRanges;if(o.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,r.width,r.height,i,a,r.data);else{o.sort((e,t)=>e.start-t.start);let s=0;for(let e=1;e<o.length;e++){let t=o[s],n=o[e],i=t.start+t.count,a=xe(n.start,r.width,4),c=xe(t.start,r.width,4);n.start<=i+1&&a===c&&xe(n.start+n.count-1,r.width,4)===a?t.count=Math.max(t.count,n.start+n.count-t.start):(++s,o[s]=n)}o.length=s+1;let c=n.getParameter(e.UNPACK_ROW_LENGTH),l=n.getParameter(e.UNPACK_SKIP_PIXELS),u=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,r.width);for(let t=0,s=o.length;t<s;t++){let s=o[t],c=Math.floor(s.start/4),l=Math.ceil(s.count/4),u=c%r.width,d=Math.floor(c/r.width),f=l;n.pixelStorei(e.UNPACK_SKIP_PIXELS,u),n.pixelStorei(e.UNPACK_SKIP_ROWS,d),n.texSubImage2D(e.TEXTURE_2D,0,u,d,f,1,i,a,r.data)}t.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,c),n.pixelStorei(e.UNPACK_SKIP_PIXELS,l),n.pixelStorei(e.UNPACK_SKIP_ROWS,u)}}function Ce(t,o,s){let c=e.TEXTURE_2D;(o.isDataArrayTexture||o.isCompressedArrayTexture)&&(c=e.TEXTURE_2D_ARRAY),o.isData3DTexture&&(c=e.TEXTURE_3D);let l=be(t,o),u=o.source;n.bindTexture(c,t.__webglTexture,e.TEXTURE0+s);let f=r.get(u);if(u.version!==f.__version||l===!0){if(n.activeTexture(e.TEXTURE0+s),!(typeof ImageBitmap<`u`&&o.image instanceof ImageBitmap)){let t=U.getPrimaries(U.workingColorSpace),r=o.colorSpace===``?null:U.getPrimaries(o.colorSpace),i=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment);let t=T(o.image,!1,i.maxTextureSize);t=Le(o,t);let r=a.convert(o.format,o.colorSpace),p=a.convert(o.type),m=ee(o.internalFormat,r,p,o.normalized,o.colorSpace,o.isVideoTexture);ye(c,o);let h,g=o.mipmaps,_=o.isVideoTexture!==!0,v=f.__version===void 0||l===!0,y=u.dataReady,b=te(o,t);if(o.isDepthTexture)m=k(o.format===ue,o.type),v&&(_?n.texStorage2D(e.TEXTURE_2D,1,m,t.width,t.height):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,null));else if(o.isDataTexture)if(g.length>0){_&&v&&n.texStorage2D(e.TEXTURE_2D,b,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],_?y&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data);o.generateMipmaps=!1}else _?(v&&n.texStorage2D(e.TEXTURE_2D,b,m,t.width,t.height),y&&Se(o,t,r,p)):n.texImage2D(e.TEXTURE_2D,0,m,t.width,t.height,0,r,p,t.data);else if(o.isCompressedTexture)if(o.isCompressedArrayTexture){_&&v&&n.texStorage3D(e.TEXTURE_2D_ARRAY,b,m,g[0].width,g[0].height,t.depth);for(let i=0,a=g.length;i<a;i++)if(h=g[i],o.format!==1023)if(r!==null)if(_){if(y)if(o.layerUpdates.size>0){let t=go(h.width,h.height,o.format,o.type);for(let a of o.layerUpdates){let o=h.data.subarray(a*t/h.data.BYTES_PER_ELEMENT,(a+1)*t/h.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,a,h.width,h.height,1,r,o)}o.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,h.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,h.data,0,0);else L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else _?y&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,i,0,0,0,h.width,h.height,t.depth,r,p,h.data):n.texImage3D(e.TEXTURE_2D_ARRAY,i,m,h.width,h.height,t.depth,0,r,p,h.data)}else{_&&v&&n.texStorage2D(e.TEXTURE_2D,b,m,g[0].width,g[0].height);for(let t=0,i=g.length;t<i;t++)h=g[t],o.format===1023?_?y&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,p,h.data):n.texImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,r,p,h.data):r===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):_?y&&n.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,h.width,h.height,r,h.data):n.compressedTexImage2D(e.TEXTURE_2D,t,m,h.width,h.height,0,h.data)}else if(o.isDataArrayTexture)if(_){if(v&&n.texStorage3D(e.TEXTURE_2D_ARRAY,b,m,t.width,t.height,t.depth),y)if(o.layerUpdates.size>0){let i=go(t.width,t.height,o.format,o.type);for(let a of o.layerUpdates){let o=t.data.subarray(a*i/t.data.BYTES_PER_ELEMENT,(a+1)*i/t.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,a,t.width,t.height,1,r,p,o)}o.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isData3DTexture)_?(v&&n.texStorage3D(e.TEXTURE_3D,b,m,t.width,t.height,t.depth),y&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,r,p,t.data)):n.texImage3D(e.TEXTURE_3D,0,m,t.width,t.height,t.depth,0,r,p,t.data);else if(o.isFramebufferTexture){if(v)if(_)n.texStorage2D(e.TEXTURE_2D,b,m,t.width,t.height);else{let i=t.width,a=t.height;for(let t=0;t<b;t++)n.texImage2D(e.TEXTURE_2D,t,m,i,a,0,r,p,null),i>>=1,a>>=1}}else if(o.isHTMLTexture){if(`texElementImage2D`in e){let n=e.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),t.parentNode!==n){n.appendChild(t),d.add(o),n.onpaint=e=>{let t=e.changedElements;for(let e of d)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(g.length>0){if(_&&v){let t=Re(g[0]);n.texStorage2D(e.TEXTURE_2D,b,m,t.width,t.height)}for(let t=0,i=g.length;t<i;t++)h=g[t],_?y&&n.texSubImage2D(e.TEXTURE_2D,t,0,0,r,p,h):n.texImage2D(e.TEXTURE_2D,t,m,r,p,h);o.generateMipmaps=!1}else if(_){if(v){let r=Re(t);n.texStorage2D(e.TEXTURE_2D,b,m,r.width,r.height)}y&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,r,p,t)}else n.texImage2D(e.TEXTURE_2D,0,m,r,p,t);E(o)&&D(c),f.__version=u.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function we(t,o,s){if(o.image.length!==6)return;let c=be(t,o),l=o.source;n.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+s);let u=r.get(l);if(l.version!==u.__version||c===!0){n.activeTexture(e.TEXTURE0+s);let t=U.getPrimaries(U.workingColorSpace),r=o.colorSpace===``?null:U.getPrimaries(o.colorSpace),d=o.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,o.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,o.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,o.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,d);let f=o.isCompressedTexture||o.image[0].isCompressedTexture,p=o.image[0]&&o.image[0].isDataTexture,m=[];for(let e=0;e<6;e++)!f&&!p?m[e]=T(o.image[e],!0,i.maxCubemapSize):m[e]=p?o.image[e].image:o.image[e],m[e]=Le(o,m[e]);let h=m[0],g=a.convert(o.format,o.colorSpace),_=a.convert(o.type),v=ee(o.internalFormat,g,_,o.normalized,o.colorSpace),y=o.isVideoTexture!==!0,b=u.__version===void 0||c===!0,x=l.dataReady,S=te(o,h);ye(e.TEXTURE_CUBE_MAP,o);let C;if(f){y&&b&&n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=m[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];o.format===1023?y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?L(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=o.mipmaps,y&&b){C.length>0&&S++;let t=Re(m[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(p){y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,m[t].width,m[t].height,g,_,m[t].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,m[t].width,m[t].height,0,g,_,m[t].data);for(let r=0;r<C.length;r++){let i=C[r].image[t].image;y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,i.width,i.height,g,_,i.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,i.width,i.height,0,g,_,i.data)}}else{y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,m[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,m[t]);for(let r=0;r<C.length;r++){let i=C[r];y?x&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,0,0,g,_,i.image[t]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r+1,v,g,_,i.image[t])}}}E(o)&&D(e.TEXTURE_CUBE_MAP),u.__version=l.version,o.onUpdate&&o.onUpdate(o)}t.__version=o.version}function Te(t,i,o,c,l,u){let d=a.convert(o.format,o.colorSpace),f=a.convert(o.type),p=ee(o.internalFormat,d,f,o.normalized,o.colorSpace),m=r.get(i),h=r.get(o);if(h.__renderTarget=i,!m.__hasExternalTextures){let t=Math.max(1,i.width>>u),r=Math.max(1,i.height>>u);l===e.TEXTURE_3D||l===e.TEXTURE_2D_ARRAY?n.texImage3D(l,u,p,t,r,i.depth,0,d,f,null):n.texImage2D(l,u,p,t,r,0,d,f,null)}n.bindFramebuffer(e.FRAMEBUFFER,t),Ie(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,c,l,h.__webglTexture,0,Fe(i)):(l===e.TEXTURE_2D||l>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&l<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,c,l,h.__webglTexture,u),n.bindFramebuffer(e.FRAMEBUFFER,null)}function Ee(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=k(n.stencilBuffer,a),c=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;Ie(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Fe(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Fe(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,c,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let o=t[i],c=a.convert(o.format,o.colorSpace),l=a.convert(o.type),u=ee(o.internalFormat,c,l,o.normalized,o.colorSpace);Ie(n)?s.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,Fe(n),u,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,Fe(n),u,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,u,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function De(t,i,o){let c=i.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,t),!(i.depthTexture&&i.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let l=r.get(i.depthTexture);if(l.__renderTarget=i,(!l.__webglTexture||i.depthTexture.image.width!==i.width||i.depthTexture.image.height!==i.height)&&(i.depthTexture.image.width=i.width,i.depthTexture.image.height=i.height,i.depthTexture.needsUpdate=!0),c){if(l.__webglInit===void 0&&(l.__webglInit=!0,i.depthTexture.addEventListener(`dispose`,ne)),l.__webglTexture===void 0){l.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,l.__webglTexture),ye(e.TEXTURE_CUBE_MAP,i.depthTexture);let t=a.convert(i.depthTexture.format),r=a.convert(i.depthTexture.type),o;i.depthTexture.format===1026?o=e.DEPTH_COMPONENT24:i.depthTexture.format===1027&&(o=e.DEPTH24_STENCIL8);for(let n=0;n<6;n++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0,o,i.width,i.height,0,t,r,null)}}else fe(i.depthTexture,0);let u=l.__webglTexture,d=Fe(i),f=c?e.TEXTURE_CUBE_MAP_POSITIVE_X+o:e.TEXTURE_2D,p=i.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(i.depthTexture.format===1026)Ie(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else if(i.depthTexture.format===1027)Ie(i)?s.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,p,f,u,0,d):e.framebufferTexture2D(e.FRAMEBUFFER,p,f,u,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Oe(t){let i=r.get(t),a=t.isWebGLCubeRenderTarget===!0;if(i.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(i.__depthDisposeCallback&&i.__depthDisposeCallback(),e){let t=()=>{delete i.__boundDepthTexture,delete i.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),i.__depthDisposeCallback=t}i.__boundDepthTexture=e}if(t.depthTexture&&!i.__autoAllocateDepthBuffer)if(a)for(let e=0;e<6;e++)De(i.__webglFramebuffer[e],t,e);else{let e=t.texture.mipmaps;e&&e.length>0?De(i.__webglFramebuffer[0],t,0):De(i.__webglFramebuffer,t,0)}else if(a){i.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[r]),i.__webglDepthbuffer[r]===void 0)i.__webglDepthbuffer[r]=e.createRenderbuffer(),Ee(i.__webglDepthbuffer[r],t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=i.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,a)}}else{let r=t.texture.mipmaps;if(r&&r.length>0?n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,i.__webglFramebuffer),i.__webglDepthbuffer===void 0)i.__webglDepthbuffer=e.createRenderbuffer(),Ee(i.__webglDepthbuffer,t,!1);else{let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,r=i.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,r),e.framebufferRenderbuffer(e.FRAMEBUFFER,n,e.RENDERBUFFER,r)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function ke(t,n,i){let a=r.get(t);n!==void 0&&Te(a.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),i!==void 0&&Oe(t)}function Ae(t){let i=t.texture,s=r.get(t),c=r.get(i);t.addEventListener(`dispose`,re);let l=t.textures,u=t.isWebGLCubeRenderTarget===!0,d=l.length>1;if(d||(c.__webglTexture===void 0&&(c.__webglTexture=e.createTexture()),c.__version=i.version,o.memory.textures++),u){s.__webglFramebuffer=[];for(let t=0;t<6;t++)if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer[t]=[];for(let n=0;n<i.mipmaps.length;n++)s.__webglFramebuffer[t][n]=e.createFramebuffer()}else s.__webglFramebuffer[t]=e.createFramebuffer()}else{if(i.mipmaps&&i.mipmaps.length>0){s.__webglFramebuffer=[];for(let t=0;t<i.mipmaps.length;t++)s.__webglFramebuffer[t]=e.createFramebuffer()}else s.__webglFramebuffer=e.createFramebuffer();if(d)for(let t=0,n=l.length;t<n;t++){let n=r.get(l[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),o.memory.textures++)}if(t.samples>0&&Ie(t)===!1){s.__webglMultisampledFramebuffer=e.createFramebuffer(),s.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer);for(let n=0;n<l.length;n++){let r=l[n];s.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,s.__webglColorRenderbuffer[n]);let i=a.convert(r.format,r.colorSpace),o=a.convert(r.type),c=ee(r.internalFormat,i,o,r.normalized,r.colorSpace,t.isXRRenderTarget===!0),u=Fe(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,u,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,s.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(s.__webglDepthRenderbuffer=e.createRenderbuffer(),Ee(s.__webglDepthRenderbuffer,t,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(u){n.bindTexture(e.TEXTURE_CUBE_MAP,c.__webglTexture),ye(e.TEXTURE_CUBE_MAP,i);for(let n=0;n<6;n++)if(i.mipmaps&&i.mipmaps.length>0)for(let r=0;r<i.mipmaps.length;r++)Te(s.__webglFramebuffer[n][r],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,r);else Te(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+n,0);E(i)&&D(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(d){for(let i=0,a=l.length;i<a;i++){let a=l[i],o=r.get(a),c=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(c=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(c,o.__webglTexture),ye(c,a),Te(s.__webglFramebuffer,t,a,e.COLOR_ATTACHMENT0+i,c,0),E(a)&&D(c)}n.unbindTexture()}else{let r=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(r=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(r,c.__webglTexture),ye(r,i),i.mipmaps&&i.mipmaps.length>0)for(let n=0;n<i.mipmaps.length;n++)Te(s.__webglFramebuffer[n],t,i,e.COLOR_ATTACHMENT0,r,n);else Te(s.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0,r,0);E(i)&&D(r),n.unbindTexture()}t.depthBuffer&&Oe(t)}function je(e){let t=e.textures;for(let i=0,a=t.length;i<a;i++){let a=t[i];if(E(a)){let t=O(e),i=r.get(a).__webglTexture;n.bindTexture(t,i),D(t),n.unbindTexture()}}}let Me=[],Ne=[];function Pe(t){if(t.samples>0){if(Ie(t)===!1){let i=t.textures,a=t.width,o=t.height,s=e.COLOR_BUFFER_BIT,l=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,u=r.get(t),d=i.length>1;if(d)for(let t=0;t<i.length;t++)n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,u.__webglMultisampledFramebuffer);let f=t.texture.mipmaps;f&&f.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglFramebuffer);for(let n=0;n<i.length;n++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(s|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(s|=e.STENCIL_BUFFER_BIT)),d){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,u.__webglColorRenderbuffer[n]);let t=r.get(i[n]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,a,o,0,0,a,o,s,e.NEAREST),c===!0&&(Me.length=0,Ne.length=0,Me.push(e.COLOR_ATTACHMENT0+n),t.depthBuffer&&t.resolveDepthBuffer===!1&&(Me.push(l),Ne.push(l),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,Ne)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Me))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),d)for(let t=0;t<i.length;t++){n.bindFramebuffer(e.FRAMEBUFFER,u.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,u.__webglColorRenderbuffer[t]);let a=r.get(i[t]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,u.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,a,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,u.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.resolveDepthBuffer===!1&&c){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function Fe(e){return Math.min(i.maxSamples,e.samples)}function Ie(e){let n=r.get(e);return e.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&n.__useRenderToTexture!==!1}function M(e){let t=o.render.frame;u.get(e)!==t&&(u.set(e,t),e.update())}function Le(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(U.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&L(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):R(`WebGLTextures: Unsupported texture color space:`,n)),t}function Re(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(l.width=e.naturalWidth||e.width,l.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(l.width=e.displayWidth,l.height=e.displayHeight):(l.width=e.width,l.height=e.height),l}this.allocateTextureUnit=j,this.resetTextureUnits=se,this.getTextureUnits=ce,this.setTextureUnits=le,this.setTexture2D=fe,this.setTexture2DArray=pe,this.setTexture3D=me,this.setTextureCube=he,this.rebindTextures=ke,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Ie,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function xl(e,t){function n(n,r=``){let i,a=U.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779)if(a===`srgb`)if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===35840||n===35841||n===35842||n===35843)if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491)if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821)if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===36492||n===36494||n===36495)if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===36283||n===36284||n===36285||n===36286)if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Sl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cl=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,wl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ki(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ha({vertexShader:Sl,fragmentShader:Cl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new K(new na(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tl=class extends yt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,u=null,d=null,f=null,p=null,m=typeof XRWebGLBinding<`u`,h=new wl,g={},_=t.getContextAttributes(),v=null,y=null,b=[],x=[],S=new B,C=null,w=new Ya;w.viewport=new Gt;let E=new Ya;E.viewport=new Gt;let D=[w,E],O=new no,ee=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=b[e];return t===void 0&&(t=new En,b[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=b[e];return t===void 0&&(t=new En,b[e]=t),t.getGripSpace()},this.getHand=function(e){let t=b[e];return t===void 0&&(t=new En,b[e]=t),t.getHandSpace()};function ne(e){let t=x.indexOf(e.inputSource);if(t===-1)return;let n=b[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function re(){r.removeEventListener(`select`,ne),r.removeEventListener(`selectstart`,ne),r.removeEventListener(`selectend`,ne),r.removeEventListener(`squeeze`,ne),r.removeEventListener(`squeezestart`,ne),r.removeEventListener(`squeezeend`,ne),r.removeEventListener(`end`,re),r.removeEventListener(`inputsourceschange`,ie);for(let e=0;e<b.length;e++){let t=x[e];t!==null&&(x[e]=null,b[e].disconnect(t))}ee=null,te=null,h.reset();for(let e in g)delete g[e];e.setRenderTarget(v),f=null,d=null,u=null,r=null,y=null,me.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&L(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return d===null?f:d},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(r,t)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,ne),r.addEventListener(`selectstart`,ne),r.addEventListener(`selectend`,ne),r.addEventListener(`squeeze`,ne),r.addEventListener(`squeezestart`,ne),r.addEventListener(`squeezeend`,ne),r.addEventListener(`end`,re),r.addEventListener(`inputsourceschange`,ie),_.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(S),m&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?ue:j,a=_.stencil?A:k);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};u=this.getBinding(),d=u.createProjectionLayer(s),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new qt(d.textureWidth,d.textureHeight,{format:le,type:T,depthTexture:new Wi(d.textureWidth,d.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new qt(f.framebufferWidth,f.framebufferHeight,{format:le,type:T,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),me.setContext(r),me.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return h.getDepthTexture()};function ie(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=x.indexOf(n);r>=0&&(x[r]=null,b[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=x.indexOf(n);if(r===-1){for(let e=0;e<b.length;e++)if(e>=x.length){x.push(n),r=e;break}else if(x[e]===null){x[e]=n,r=e;break}if(r===-1)break}let i=b[r];i&&i.connect(n)}}let ae=new V,oe=new V;function se(e,t,n){ae.setFromMatrixPosition(t.matrixWorld),oe.setFromMatrixPosition(n.matrixWorld);let r=ae.distanceTo(oe),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function ce(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;h.texture!==null&&(h.depthNear>0&&(t=h.depthNear),h.depthFar>0&&(n=h.depthFar)),O.near=E.near=w.near=t,O.far=E.far=w.far=n,(ee!==O.near||te!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),ee=O.near,te=O.far),O.layers.mask=e.layers.mask|6,w.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let i=e.parent,a=O.cameras;ce(O,i);for(let e=0;e<a.length;e++)ce(a[e],i);a.length===2?se(O,w,E):O.projectionMatrix.copy(w.projectionMatrix),de(e,O,i)};function de(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=St*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&f===null))return s},this.setFoveation=function(e){s=e,d!==null&&(d.fixedFoveation=e),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=e)},this.hasDepthSensing=function(){return h.texture!==null},this.getDepthSensingMesh=function(){return h.getMesh(O)},this.getCameraTexture=function(e){return g[e]};let fe=null;function pe(t,i){if(l=i.getViewerPose(c||a),p=i,l!==null){let t=l.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let i=!1;t.length!==O.cameras.length&&(O.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(f!==null)a=f.getViewport(r);else{let t=u.getViewSubImage(d,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(y,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(y))}let o=D[n];o===void 0&&(o=new Ya,o.layers.enable(n),o.viewport=new Gt,D[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),i===!0&&O.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&m){u=n.getBinding();let e=u.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&h.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&m){e.state.unbindTexture(),u=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=g[n];e||(e=new Ki,g[n]=e);let t=u.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<b.length;e++){let t=x[e],n=b[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}fe&&fe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),p=null}let me=new vo;me.setAnimationLoop(pe),this.setAnimationLoop=function(e){fe=e},this.dispose=function(){}}},El=new W,Dl=new H;Dl.set(-1,0,0,0,1,0,0,0,1);function Ol(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,da(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(El.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Dl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function kl(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(g(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,v));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return R(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)p(t[n],e,n,a);else p(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(t,n,r,i){if(h(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=_(i);m(i,t.__data,e),typeof i!=`number`&&typeof i!=`boolean`&&!i.isMatrix3&&!ArrayBuffer.isView(i)&&(e+=a.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function m(e,t,n){typeof e==`number`||typeof e==`boolean`?t[0]=e:e.isMatrix3?(t[0]=e.elements[0],t[1]=e.elements[1],t[2]=e.elements[2],t[3]=0,t[4]=e.elements[3],t[5]=e.elements[4],t[6]=e.elements[5],t[7]=0,t[8]=e.elements[6],t[9]=e.elements[7],t[10]=e.elements[8],t[11]=0):ArrayBuffer.isView(e)?t.set(new e.constructor(e.buffer,e.byteOffset,t.length)):e.toArray(t,n)}function h(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return typeof i==`number`||typeof i==`boolean`?r[a]=i:ArrayBuffer.isView(i)?r[a]=i.slice():r[a]=i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(ArrayBuffer.isView(i))return!0;else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function g(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=_(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function _(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?L(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(t.boundary=16,t.storage=e.byteLength):L(`WebGLRenderer: Unsupported uniform value type.`,e),t}function v(t){let n=t.target;n.removeEventListener(`dispose`,v);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function y(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:y}}var Al=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),jl=null;function Ml(){return jl===null&&(jl=new _i(Al,16,16,pe,ne),jl.name=`DFG_LUT`,jl.minFilter=S,jl.magFilter=S,jl.wrapS=_,jl.wrapT=_,jl.generateMipmaps=!1,jl.needsUpdate=!0),jl}var Nl=class{constructor(e={}){let{canvas:t=ft(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:l=`default`,failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=T}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);p=n.getContextAttributes().alpha}else p=a;let m=f,h=new Set([he,me,fe]),g=new Set([T,k,O,A,re,ie]),_=new Uint32Array(4),v=new Int32Array(4),y=new V,b=null,x=null,S=[],C=[],E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let D=this,ee=!1,te=null,ae=null,oe=null,se=null;this._outputColorSpace=nt;let ce=0,le=0,j=null,ue=-1,de=null,pe=new Gt,ge=new Gt,_e=null,ve=new G(0),ye=0,be=t.width,xe=t.height,Se=1,Ce=null,we=null,Te=new Gt(0,0,be,xe),Ee=new Gt(0,0,be,xe),De=!1,Oe=new Pi,ke=!1,Ae=!1,je=new W,Me=new V,Ne=new Gt,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function Ie(){return j===null?Se:1}let M=n;function Le(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:l,failIfMajorPerformanceCaveat:u};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r185`),t.addEventListener(`webglcontextlost`,st,!1),t.addEventListener(`webglcontextrestored`,I,!1),t.addEventListener(`webglcontextcreationerror`,lt,!1),M===null){let t=`webgl2`;if(M=Le(t,e),M===null)throw Le(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}}catch(e){throw R(`WebGLRenderer: `+e.message),e}let Re,ze,N,Be,P,F,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,rt,it;function at(){Re=new Zo(M),Re.init(),tt=new xl(M,Re),ze=new Do(M,Re,e,tt),N=new yl(M,Re),ze.reversedDepthBuffer&&d&&N.buffers.depth.setReversed(!0),ae=M.createFramebuffer(),oe=M.createFramebuffer(),se=M.createFramebuffer(),Be=new es(M),P=new $c,F=new bl(M,Re,N,P,ze,tt,Be),Ve=new Xo(D),He=new yo(M),rt=new To(M,He),Ue=new Qo(M,He,Be,rt),We=new ns(M,Ue,He,rt,Be),Qe=new ts(M,ze,F),Ye=new Oo(P),Ge=new Qc(D,Ve,Re,ze,rt,Ye),Ke=new Ol(D,P),qe=new rl,Je=new ul(Re),Ze=new wo(D,Ve,N,We,p,s),Xe=new vl(D,We,ze),it=new kl(M,Be,ze,N),$e=new Eo(M,Re,Be),et=new $o(M,Re,Be),Be.programs=Ge.programs,D.capabilities=ze,D.extensions=Re,D.properties=P,D.renderLists=qe,D.shadowMap=Xe,D.state=N,D.info=Be}at(),m!==1009&&(E=new is(m,t.width,t.height,o,r,i));let ot=new Tl(D,M);this.xr=ot,this.getContext=function(){return M},this.getContextAttributes=function(){return M.getContextAttributes()},this.forceContextLoss=function(){let e=Re.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Re.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(e){e!==void 0&&(Se=e,this.setSize(be,xe,!1))},this.getSize=function(e){return e.set(be,xe)},this.setSize=function(e,n,r=!0){if(ot.isPresenting){L(`WebGLRenderer: Can't change size while VR device is presenting.`);return}be=e,xe=n,t.width=Math.floor(e*Se),t.height=Math.floor(n*Se),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(be*Se,xe*Se).floor()},this.setDrawingBufferSize=function(e,n,r){be=e,xe=n,Se=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(m===1009){R(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){L(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}E.setEffects(e||[])},this.getCurrentViewport=function(e){return e.copy(pe)},this.getViewport=function(e){return e.copy(Te)},this.setViewport=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),N.viewport(pe.copy(Te).multiplyScalar(Se).round())},this.getScissor=function(e){return e.copy(Ee)},this.setScissor=function(e,t,n,r){e.isVector4?Ee.set(e.x,e.y,e.z,e.w):Ee.set(e,t,n,r),N.scissor(ge.copy(Ee).multiplyScalar(Se).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(e){N.setScissorTest(De=e)},this.setOpaqueSort=function(e){Ce=e},this.setTransparentSort=function(e){we=e},this.getClearColor=function(e){return e.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(j!==null){let t=j.texture.format;e=h.has(t)}if(e){let e=j.texture.type,t=g.has(e),n=Ze.getClearColor(),r=Ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(_[0]=i,_[1]=a,_[2]=o,_[3]=r,M.clearBufferuiv(M.COLOR,0,_)):(v[0]=i,v[1]=a,v[2]=o,v[3]=r,M.clearBufferiv(M.COLOR,0,v))}else r|=M.COLOR_BUFFER_BIT}t&&(r|=M.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=M.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&M.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),te=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,st,!1),t.removeEventListener(`webglcontextrestored`,I,!1),t.removeEventListener(`webglcontextcreationerror`,lt,!1),Ze.dispose(),qe.dispose(),Je.dispose(),P.dispose(),Ve.dispose(),We.dispose(),rt.dispose(),it.dispose(),Ge.dispose(),ot.dispose(),ot.removeEventListener(`sessionstart`,yt),ot.removeEventListener(`sessionend`,bt),xt.stop()};function st(e){e.preventDefault(),mt(`WebGLRenderer: Context Lost.`),ee=!0}function I(){mt(`WebGLRenderer: Context Restored.`),ee=!1;let e=Be.autoReset,t=Xe.enabled,n=Xe.autoUpdate,r=Xe.needsUpdate,i=Xe.type;at(),Be.autoReset=e,Xe.enabled=t,Xe.autoUpdate=n,Xe.needsUpdate=r,Xe.type=i}function lt(e){R(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ut(e){let t=e.target;t.removeEventListener(`dispose`,ut),dt(t)}function dt(e){pt(e),P.remove(e)}function pt(e){let t=P.get(e).programs;t!==void 0&&(t.forEach(function(e){Ge.releaseProgram(e)}),e.isShaderMaterial&&Ge.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Pe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=kt(e,t,n,r,i);N.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ue.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;rt.setup(i,r,s,n,c);let h,g=$e;if(c!==null&&(h=He.get(c),g=et,g.setIndex(h)),i.isMesh)r.wireframe===!0?(N.setLineWidth(r.wireframeLinewidth*Ie()),g.setMode(M.LINES)):g.setMode(M.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),N.setLineWidth(e*Ie()),i.isLineSegments?g.setMode(M.LINES):i.isLineLoop?g.setMode(M.LINE_LOOP):g.setMode(M.LINE_STRIP)}else i.isPoints?g.setMode(M.POINTS):i.isSprite&&g.setMode(M.TRIANGLES);if(i.isBatchedMesh)if(Re.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?He.get(c).bytesPerElement:1,o=P.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(M,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function ht(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Et(e,t,n),e.side=0,e.needsUpdate=!0,Et(e,t,n),e.side=2):Et(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),x=Je.get(n),x.init(t),C.push(x),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(x.pushLight(e),e.castShadow&&x.pushShadow(e))}),x.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t)if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];ht(a,n,e),r.add(a)}else ht(t,n,e),r.add(t)}),x=C.pop(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){P.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Re.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let gt=null;function vt(e){gt&&gt(e)}function yt(){xt.stop()}function bt(){xt.start()}let xt=new vo;xt.setAnimationLoop(vt),typeof self<`u`&&xt.setContext(self),this.setAnimationLoop=function(e){gt=e,ot.setAnimationLoop(e),e===null?xt.stop():xt.start()},ot.addEventListener(`sessionstart`,yt),ot.addEventListener(`sessionend`,bt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){R(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ee===!0)return;te!==null&&te.renderStart(e,t);let n=ot.enabled===!0&&ot.isPresenting===!0,r=E!==null&&(j===null||n)&&E.begin(D,j);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(t),t=ot.getCamera()),e.isScene===!0&&e.onBeforeRender(D,e,t,j),x=Je.get(e,C.length),x.init(t),x.state.textureUnits=F.getTextureUnits(),C.push(x),je.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),Oe.setFromProjectionMatrix(je,ct,t.reversedDepth),Ae=this.localClippingEnabled,ke=Ye.init(this.clippingPlanes,Ae),b=qe.get(e,S.length),b.init(),S.push(b),ot.enabled===!0&&ot.isPresenting===!0){let e=D.xr.getDepthSensingMesh();e!==null&&St(e,t,-1/0,D.sortObjects)}St(e,t,0,D.sortObjects),b.finish(),D.sortObjects===!0&&b.sort(Ce,we,t.reversedDepth),Fe=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Fe&&Ze.addToRenderList(b,e),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ke===!0&&Ye.beginShadows();let i=x.state.shadowsArray;if(Xe.render(i,e,t),ke===!0&&Ye.endShadows(),(r&&E.hasRenderPass())===!1){let n=b.opaque,r=b.transmissive;if(x.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];z(n,r,e,a)}Fe&&Ze.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Ct(b,e,n,n.viewport)}}else r.length>0&&z(n,r,e,t),Fe&&Ze.render(e),Ct(b,e,t)}j!==null&&le===0&&(F.updateMultisampleRenderTarget(j),F.updateRenderTargetMipmap(j)),r&&E.end(D),e.isScene===!0&&e.onAfterRender(D,e,t),rt.resetDefaultState(),ue=-1,de=null,C.pop(),C.length>0?(x=C[C.length-1],F.setTextureUnits(x.state.textureUnits),ke===!0&&Ye.setGlobalState(D.clippingPlanes,x.state.camera)):x=null,S.pop(),b=S.length>0?S[S.length-1]:null,te!==null&&te.renderEnd()};function St(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLightProbeGrid)x.pushLightProbeGrid(e);else if(e.isLight)x.pushLight(e),e.castShadow&&x.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||Oe.intersectsSprite(e)){r&&Ne.setFromMatrixPosition(e.matrixWorld).applyMatrix4(je);let t=We.update(e),i=e.material;i.visible&&b.push(e,t,i,n,Ne.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||Oe.intersectsObject(e))){let t=We.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),Ne.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ne.copy(e.boundingSphere.center)),Ne.applyMatrix4(e.matrixWorld).applyMatrix4(je)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&b.push(e,t,s,n,Ne.z,o)}}else i.visible&&b.push(e,t,i,n,Ne.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)St(i[e],t,n,r)}function Ct(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;x.setupLightsView(n),ke===!0&&Ye.setGlobalState(D.clippingPlanes,n),r&&N.viewport(pe.copy(r)),i.length>0&&wt(i,t,n),a.length>0&&wt(a,t,n),o.length>0&&wt(o,t,n),N.buffers.depth.setTest(!0),N.buffers.depth.setMask(!0),N.buffers.color.setMask(!0),N.setPolygonOffset(!1)}function z(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(x.state.transmissionRenderTarget[r.id]===void 0){let e=Re.has(`EXT_color_buffer_half_float`)||Re.has(`EXT_color_buffer_float`);x.state.transmissionRenderTarget[r.id]=new qt(1,1,{generateMipmaps:!0,type:e?ne:T,minFilter:w,samples:Math.max(4,ze.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:U.workingColorSpace})}let a=x.state.transmissionRenderTarget[r.id],o=r.viewport||pe;a.setSize(o.z*D.transmissionResolutionScale,o.w*D.transmissionResolutionScale);let s=D.getRenderTarget(),c=D.getActiveCubeFace(),l=D.getActiveMipmapLevel();D.setRenderTarget(a),D.getClearColor(ve),ye=D.getClearAlpha(),ye<1&&D.setClearColor(16777215,.5),D.clear(),Fe&&Ze.render(n);let u=D.toneMapping;D.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),x.setupLightsView(r),ke===!0&&Ye.setGlobalState(D.clippingPlanes,r),wt(e,n,r),F.updateMultisampleRenderTarget(a),F.updateRenderTargetMipmap(a),Re.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Tt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(F.updateMultisampleRenderTarget(a),F.updateRenderTargetMipmap(a))}D.setRenderTarget(s,c,l),D.setClearColor(ve,ye),d!==void 0&&(r.viewport=d),D.toneMapping=u}function wt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Tt(o,t,n,s,l,c)}}function Tt(e,t,n,r,i,a){e.onBeforeRender(D,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(D,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,D.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,D.renderBufferDirect(n,t,r,i,e,a),i.side=2):D.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(D,t,n,r,i,a)}function Et(e,t,n){t.isScene!==!0&&(t=Pe);let r=P.get(e),i=x.state.lights,a=x.state.shadowsArray,o=i.state.version,s=Ge.getParameters(e,i.state,a,t,n,x.state.lightProbeGridArray),c=Ge.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ve.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ut),l=new Map,r.programs=l);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return B(e,s),d}else s.uniforms=Ge.getUniforms(e),te!==null&&e.isNodeMaterial&&te.build(e,n,s),e.onBeforeCompile(s,D),d=Ge.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Ye.uniform),B(e,s),r.needsLights=H(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.lightProbeGrid=x.state.lightProbeGridArray.length>0,r.currentProgram=d,r.uniformsList=null,d}function Dt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=dc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function B(e,t){let n=P.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Ot(e,t){if(e.length===0)return null;if(e.length===1)return e[0].texture===null?null:e[0];y.setFromMatrixPosition(t.matrixWorld);for(let t=0,n=e.length;t<n;t++){let n=e[t];if(n.texture!==null&&n.boundingBox.containsPoint(y))return n}return null}function kt(e,t,n,r,i){t.isScene!==!0&&(t=Pe),F.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=j===null?D.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:U.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ve.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(h=D.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=P.get(r),y=x.state.lights;if(ke===!0&&(Ae===!0||e!==de)){let t=e===de&&r.id===ue;Ye.setState(r,e,t)}let b=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version?b=!0:v.outputColorSpace===s?i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Ye.numPlanes||v.numIntersection!==Ye.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.toneMapping===h&&v.morphTargetsCount===_?!!v.lightProbeGrid!=x.state.lightProbeGridArray.length>0&&(b=!0):b=!0:b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;b===!0&&(S=Et(r,t,i),te&&r.isNodeMaterial&&te.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),O=v.uniforms;if(N.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==ue&&(ue=r.id,w=!0),v.needsLights){let e=Ot(x.state.lightProbeGridArray,i);v.lightProbeGrid!==e&&(v.lightProbeGrid=e,w=!0)}if(C||de!==e){N.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(M,`projectionMatrix`,e.projectionMatrix),E.setValue(M,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(M,Me.setFromMatrixPosition(e.matrixWorld)),ze.logarithmicDepthBuffer&&E.setValue(M,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(M,`isOrthographic`,e.isOrthographicCamera===!0),de!==e&&(de=e,w=!0,T=!0)}if(v.needsLights&&(y.state.directionalShadowMap.length>0&&E.setValue(M,`directionalShadowMap`,y.state.directionalShadowMap,F),y.state.spotShadowMap.length>0&&E.setValue(M,`spotShadowMap`,y.state.spotShadowMap,F),y.state.pointShadowMap.length>0&&E.setValue(M,`pointShadowMap`,y.state.pointShadowMap,F)),i.isSkinnedMesh){E.setOptional(M,i,`bindMatrix`),E.setOptional(M,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(M,`boneTexture`,e.boneTexture,F))}i.isBatchedMesh&&(E.setOptional(M,i,`batchingTexture`),E.setValue(M,`batchingTexture`,i._matricesTexture,F),E.setOptional(M,i,`batchingIdTexture`),E.setValue(M,`batchingIdTexture`,i._indirectTexture,F),E.setOptional(M,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(M,`batchingColorTexture`,i._colorsTexture,F));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&Qe.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(M,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=Ml()),w){if(E.setValue(M,`toneMappingExposure`,D.toneMappingExposure),v.needsLights&&At(O,T),a&&r.fog===!0&&Ke.refreshFogUniforms(O,a),Ke.refreshMaterialUniforms(O,r,Se,xe,x.state.transmissionRenderTarget[e.id]),v.needsLights&&v.lightProbeGrid){let e=v.lightProbeGrid;O.probesSH.value=e.texture,O.probesMin.value.copy(e.boundingBox.min),O.probesMax.value.copy(e.boundingBox.max),O.probesResolution.value.copy(e.resolution)}dc.upload(M,Dt(v),O,F)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(dc.upload(M,Dt(v),O,F),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(M,`center`,i.center),E.setValue(M,`modelViewMatrix`,i.modelViewMatrix),E.setValue(M,`normalMatrix`,i.normalMatrix),E.setValue(M,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];it.update(n,S),it.bind(n,S)}}return S}function At(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function H(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(e,t,n){let r=P.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),P.get(e.texture).__webglTexture=t,P.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=P.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){j=e,ce=t,le=n;let r=null,i=!1,a=!1;if(e){let o=P.get(e);if(o.__useDefaultFramebuffer!==void 0){N.bindFramebuffer(M.FRAMEBUFFER,o.__webglFramebuffer),pe.copy(e.viewport),ge.copy(e.scissor),_e=e.scissorTest,N.viewport(pe),N.scissor(ge),N.setScissorTest(_e),ue=-1;return}else if(o.__webglFramebuffer===void 0)F.setupRenderTarget(e);else if(o.__hasExternalTextures)F.rebindTextures(e,P.get(e.texture).__webglTexture,P.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&P.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);F.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=P.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&F.useMultisampledRTT(e)===!1?P.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,pe.copy(e.viewport),ge.copy(e.scissor),_e=e.scissorTest}else pe.copy(Te).multiplyScalar(Se).floor(),ge.copy(Ee).multiplyScalar(Se).floor(),_e=De;if(n!==0&&(r=ae),N.bindFramebuffer(M.FRAMEBUFFER,r)&&N.drawBuffers(e,r),N.viewport(pe),N.scissor(ge),N.setScissorTest(_e),i){let r=P.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=P.get(e.textures[t]);M.framebufferTextureLayer(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=P.get(e.texture);M.framebufferTexture2D(M.FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,t.__webglTexture,n)}ue=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=P.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c){N.bindFramebuffer(M.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;if(e.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+s),!ze.textureFormatReadable(c)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!ze.textureTypeReadable(l)){R(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&M.readPixels(t,n,r,i,tt.convert(c),tt.convert(l),a)}finally{let e=j===null?null:P.get(j).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=P.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o]),c)if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){N.bindFramebuffer(M.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;if(e.textures.length>1&&M.readBuffer(M.COLOR_ATTACHMENT0+s),!ze.textureFormatReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!ze.textureTypeReadable(u))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let d=M.createBuffer();M.bindBuffer(M.PIXEL_PACK_BUFFER,d),M.bufferData(M.PIXEL_PACK_BUFFER,a.byteLength,M.STREAM_READ),M.readPixels(t,n,r,i,tt.convert(l),tt.convert(u),0);let f=j===null?null:P.get(j).__webglFramebuffer;N.bindFramebuffer(M.FRAMEBUFFER,f);let p=M.fenceSync(M.SYNC_GPU_COMMANDS_COMPLETE,0);return M.flush(),await _t(M,p,4),M.bindBuffer(M.PIXEL_PACK_BUFFER,d),M.getBufferSubData(M.PIXEL_PACK_BUFFER,0,a),M.deleteBuffer(d),M.deleteSync(p),a}else throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;F.setTexture2D(e,0),M.copyTexSubImage2D(M.TEXTURE_2D,n,0,0,o,s,i,a),N.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=tt.convert(t.format),_=tt.convert(t.type),v;t.isData3DTexture?(F.setTexture3D(t,0),v=M.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(F.setTexture2DArray(t,0),v=M.TEXTURE_2D_ARRAY):(F.setTexture2D(t,0),v=M.TEXTURE_2D),N.activeTexture(M.TEXTURE0),N.pixelStorei(M.UNPACK_FLIP_Y_WEBGL,t.flipY),N.pixelStorei(M.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),N.pixelStorei(M.UNPACK_ALIGNMENT,t.unpackAlignment);let y=N.getParameter(M.UNPACK_ROW_LENGTH),b=N.getParameter(M.UNPACK_IMAGE_HEIGHT),x=N.getParameter(M.UNPACK_SKIP_PIXELS),S=N.getParameter(M.UNPACK_SKIP_ROWS),C=N.getParameter(M.UNPACK_SKIP_IMAGES);N.pixelStorei(M.UNPACK_ROW_LENGTH,h.width),N.pixelStorei(M.UNPACK_IMAGE_HEIGHT,h.height),N.pixelStorei(M.UNPACK_SKIP_PIXELS,l),N.pixelStorei(M.UNPACK_SKIP_ROWS,u),N.pixelStorei(M.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=P.get(e),r=P.get(t),h=P.get(n.__renderTarget),g=P.get(r.__renderTarget);N.bindFramebuffer(M.READ_FRAMEBUFFER,h.__webglFramebuffer),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,P.get(e).__webglTexture,i,d+n),M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,P.get(t).__webglTexture,a,m+n)),M.blitFramebuffer(l,u,o,s,f,p,o,s,M.DEPTH_BUFFER_BIT,M.NEAREST);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||P.has(e)){let n=P.get(e),r=P.get(t);N.bindFramebuffer(M.READ_FRAMEBUFFER,oe),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,se);for(let e=0;e<c;e++)w?M.framebufferTextureLayer(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):M.framebufferTexture2D(M.READ_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,n.__webglTexture,i),T?M.framebufferTextureLayer(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):M.framebufferTexture2D(M.DRAW_FRAMEBUFFER,M.COLOR_ATTACHMENT0,M.TEXTURE_2D,r.__webglTexture,a),i===0?T?M.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):M.copyTexSubImage2D(v,a,f,p,l,u,o,s):M.blitFramebuffer(l,u,o,s,f,p,o,s,M.COLOR_BUFFER_BIT,M.NEAREST);N.bindFramebuffer(M.READ_FRAMEBUFFER,null),N.bindFramebuffer(M.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?M.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?M.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):M.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?M.texSubImage2D(M.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?M.compressedTexSubImage2D(M.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):M.texSubImage2D(M.TEXTURE_2D,a,f,p,o,s,g,_,h);N.pixelStorei(M.UNPACK_ROW_LENGTH,y),N.pixelStorei(M.UNPACK_IMAGE_HEIGHT,b),N.pixelStorei(M.UNPACK_SKIP_PIXELS,x),N.pixelStorei(M.UNPACK_SKIP_ROWS,S),N.pixelStorei(M.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps&&M.generateMipmap(v),N.unbindTexture()},this.initRenderTarget=function(e){P.get(e).__webglFramebuffer===void 0&&F.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?F.setTextureCube(e,0):e.isData3DTexture?F.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?F.setTexture2DArray(e,0):F.setTexture2D(e,0),N.unbindTexture()},this.resetState=function(){ce=0,le=0,j=null,N.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return ct}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=U._getDrawingBufferColorSpace(e),t.unpackColorSpace=U._getUnpackColorSpace()}},Pl=1/60,Fl=.25,Il=class{cb;accumulator=0;lastTime=0;rafId=0;running=!1;timeScale=1;constructor(e){this.cb=e}start(){if(this.running)return;this.running=!0,this.lastTime=performance.now()/1e3;let e=()=>{if(!this.running)return;let t=performance.now()/1e3,n=Math.min(t-this.lastTime,Fl);for(this.lastTime=t,this.accumulator+=n*this.timeScale;this.accumulator>=Pl;)this.cb.simulate(Pl),this.accumulator-=Pl;this.cb.render(this.accumulator/Pl,n),this.rafId=requestAnimationFrame(e)};this.rafId=requestAnimationFrame(e)}stop(){this.running=!1,cancelAnimationFrame(this.rafId)}stepN(e){for(let t=0;t<e;t++)this.cb.simulate(Pl)}},Ll=class{handlers=new Map;on(e,t){let n=this.handlers.get(e);return n||(n=new Set,this.handlers.set(e,n)),n.add(t),()=>n.delete(t)}emit(e,t){let n=this.handlers.get(e);if(n)for(let e of n)e(t)}clear(){this.handlers.clear()}},X=new Ll,Rl=1,zl=class{source;w=!1;a=!1;s=!1;d=!1;jumpEdge=!1;dashEdge=!1;sigEdge=!1;ultEdge=!1;interactEdge=!1;paused=!1;lookX=0;lookY=0;lockEl=null;locked=!1;onKeyDown=e=>{e.repeat||this.keyDown(e.code)};onKeyUp=e=>this.keyUp(e.code);onMouseMove=e=>{this.locked&&this.look(e.movementX,e.movementY)};onLockChange=()=>{this.locked=this.lockEl!==null&&this.lockEl.ownerDocument.pointerLockElement===this.lockEl};constructor(e){this.source=e,e.addEventListener(`keydown`,this.onKeyDown),e.addEventListener(`keyup`,this.onKeyUp),e.addEventListener(`mousemove`,this.onMouseMove)}keyDown(e){switch(e){case`KeyW`:case`ArrowUp`:this.w=!0;break;case`KeyS`:case`ArrowDown`:this.s=!0;break;case`KeyA`:case`ArrowLeft`:this.a=!0;break;case`KeyD`:case`ArrowRight`:this.d=!0;break;case`Space`:this.jumpEdge=!0;break;case`ShiftLeft`:case`ShiftRight`:this.dashEdge=!0;break;case`KeyR`:this.sigEdge=!0;break;case`KeyQ`:this.ultEdge=!0;break;case`KeyE`:this.interactEdge=!0;break;case`Escape`:this.paused=!this.paused;break}}keyUp(e){switch(e){case`KeyW`:case`ArrowUp`:this.w=!1;break;case`KeyS`:case`ArrowDown`:this.s=!1;break;case`KeyA`:case`ArrowLeft`:this.a=!1;break;case`KeyD`:case`ArrowRight`:this.d=!1;break}}clearPause(){this.paused=!1}look(e,t){this.lookX+=e*Rl,this.lookY+=t*Rl}enablePointerLock(e){this.lockEl=e,e.ownerDocument.addEventListener(`pointerlockchange`,this.onLockChange),e.addEventListener(`click`,()=>{try{let t=e.requestPointerLock();t&&typeof t.catch==`function`&&t.catch(()=>{})}catch{}})}get pointerLocked(){return this.locked}releaseLock(){this.locked&&this.lockEl&&this.lockEl.ownerDocument.exitPointerLock()}sample(e=Bl()){let t=!!this.d-+!!this.a,n=!!this.w-+!!this.s,r=Math.hypot(t,n);return r>1&&(t/=r,n/=r),e.moveX=t,e.moveZ=n,e.jumpPressed=this.jumpEdge,e.dashPressed=this.dashEdge,e.sigPressed=this.sigEdge,e.ultPressed=this.ultEdge,e.interactPressed=this.interactEdge,e.lookDeltaX=this.lookX,e.lookDeltaY=this.lookY,e.paused=this.paused,this.jumpEdge=this.dashEdge=this.sigEdge=this.ultEdge=this.interactEdge=!1,this.lookX=0,this.lookY=0,e}dispose(){this.source.removeEventListener(`keydown`,this.onKeyDown),this.source.removeEventListener(`keyup`,this.onKeyUp),this.source.removeEventListener(`mousemove`,this.onMouseMove),this.lockEl&&this.lockEl.ownerDocument.removeEventListener(`pointerlockchange`,this.onLockChange)}};function Bl(){return{moveX:0,moveZ:0,jumpPressed:!1,dashPressed:!1,sigPressed:!1,ultPressed:!1,interactPressed:!1,lookDeltaX:0,lookDeltaY:0,paused:!1}}var Vl=120,Hl=256,Ul=Vl*2/(Hl-1),Wl=3,Gl=.018,Kl=4,ql=18,Jl=34,Yl=8,Xl=40,Zl=90,Ql=40,$l=90,eu=140,tu=80,nu=[[-8,6],[20,-30],[-40,-10]],ru=[[0,-50],[-50,0],[60,60],[30,30]],iu=[[-55,45,13],[55,-60,15],[-70,-50,11]],au=24,ou=46,su=6,cu=12,lu=2.5,uu=12,du=6,fu=.6,pu=88,mu=70,hu=20,gu=[[42,9],[42,-9],[-42,9],[-42,-9],[9,30],[-9,30],[9,-30],[-9,-30]],_u=[[35,35],[-35,-35],[70,0],[-70,20],[0,-75]],vu=[[0,0],[-38,38],[38,-38]],yu=[[64,60,12],[-66,-58,13],[78,-44,11],[-52,74,10],[-84,10,10],[12,92,11]];function bu(e,t,n){let r=Math.min(1,Math.max(0,(n-e)/(t-e)));return r*r*(3-2*r)}function xu(e){let t=e>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function Su(e,t,n){let r=Math.imul(e,374761393)^Math.imul(t,668265263)^Math.imul(n,1274126177);return r=Math.imul(r^r>>>13,1274126177),r^=r>>>16,(r>>>0)/4294967296}function Cu(e,t,n){let r=Math.floor(e),i=Math.floor(t),a=e-r,o=t-i,s=a*a*(3-2*a),c=o*o*(3-2*o),l=Su(r,i,n),u=Su(r+1,i,n),d=Su(r,i+1,n),f=Su(r+1,i+1,n),p=l+(u-l)*s;return p+(d+(f-d)*s-p)*c}function wu(e,t,n){let r=1,i=Gl,a=0,o=0;for(let s=0;s<Kl;s++)a+=r*(2*Cu(e*i,t*i,n+s*1013)-1),o+=r,r*=.5,i*=2;return a/o}function Tu(e,t,n){let r=wu(e,t,n)*Wl,i=1-bu(ql,Jl,Math.sqrt(e*e+t*t));r*=1-.85*i;let a=bu(Xl,43,e)*(1-bu(Zl,100,e))*(bu(Ql,43,t)*(1-bu($l,100,t)));return r*(1-.8*a)+Yl*a}function Eu(e,t,n){let r=Math.abs(e),i=Math.abs(t),a=r>i?r:i,o=r<du?uu:lu,s=i<du?uu:lu,c=bu(au-o,au+o,a),l=bu(ou-s,ou+s,a),u=su+c*(cu-su)-l*cu;return u+=wu(e,t,n)*fu,u}var Du={meadowfall:{propsKind:`trees`,launchPads:nu,shrines:ru,voidGaps:iu,treeCount:eu,rockCount:tu,spawnClear:Jl,authoredTrees:[],height:Tu},sunkenSteps:{propsKind:`pillars`,launchPads:_u,shrines:vu,voidGaps:yu,treeCount:pu,rockCount:mu,spawnClear:hu,authoredTrees:gu,height:Eu}},Ou=class{bounds={minX:-120,maxX:Vl,minZ:-120,maxZ:Vl};resolution=Hl;cellSize=Ul;seed;levelId;propsKind;trees=[];rocks=[];launchPads=[];shrines=[];grid;voids;config;constructor(e,t=`meadowfall`){this.seed=e>>>0,this.levelId=t;let n=Du[t];this.config=n,this.propsKind=n.propsKind,this.grid=new Float32Array(Hl*Hl);for(let e=0;e<Hl;e++){let t=-120+e*Ul,r=e*Hl;for(let e=0;e<Hl;e++){let i=-120+e*Ul;this.grid[r+e]=n.height(i,t,this.seed)}}this.voids=new Float32Array(n.voidGaps.length*3);for(let e=0;e<n.voidGaps.length;e++){let t=n.voidGaps[e];this.voids[e*3]=t[0],this.voids[e*3+1]=t[1],this.voids[e*3+2]=t[2]}for(let[e,t]of n.launchPads)this.launchPads.push({x:e,y:this.heightAt(e,t),z:t});for(let[e,t]of n.shrines)this.shrines.push({x:e,y:this.heightAt(e,t),z:t});this.scatter()}heightAt(e,t){let n=(e+Vl)/Ul,r=(t+Vl)/Ul;n<0?n=0:n>Hl-1&&(n=Hl-1),r<0?r=0:r>Hl-1&&(r=Hl-1);let i=n|0,a=r|0,o=i<Hl-1?i+1:i,s=a<Hl-1?a+1:a,c=n-i,l=r-a,u=a*Hl,d=s*Hl,f=this.grid[u+i],p=this.grid[u+o],m=this.grid[d+i],h=this.grid[d+o],g=f+(p-f)*c;return g+(m+(h-m)*c-g)*l}normalAt(e,t){let n=Ul,r=(this.heightAt(e+n,t)-this.heightAt(e-n,t))/(2*n),i=(this.heightAt(e,t+n)-this.heightAt(e,t-n))/(2*n),a=1/Math.sqrt(r*r+i*i+1);return{x:-r*a,y:a,z:-i*a}}isOffCliff(e,t){if(e<-120||e>Vl||t<-120||t>Vl)return!0;let n=this.voids;for(let r=0;r<n.length;r+=3){let i=e-n[r],a=t-n[r+1],o=n[r+2];if(i*i+a*a<o*o)return!0}return!1}slopeY(e,t){let n=Ul,r=(this.heightAt(e+n,t)-this.heightAt(e-n,t))/(2*n),i=(this.heightAt(e,t+n)-this.heightAt(e,t-n))/(2*n);return 1/Math.sqrt(r*r+i*i+1)}scatter(){let e=this.config,t=xu(this.seed^2654435769),n=e.spawnClear*e.spawnClear;for(let[n,r]of e.authoredTrees)this.isOffCliff(n,r)||this.trees.push({x:n,y:this.heightAt(n,r),z:r,scale:.9+t()*.8,rotY:t()*Math.PI*2});let r=(e,r,i,a)=>{let o=0;for(;e.length<r&&o<r*40;){o++;let r=(t()*2-1)*(Vl-6),s=(t()*2-1)*(Vl-6);r*r+s*s<n||this.isOffCliff(r,s)||this.slopeY(r,s)<.72||e.push({x:r,y:this.heightAt(r,s),z:s,scale:i+t()*(a-i),rotY:t()*Math.PI*2})}};r(this.trees,this.trees.length+e.treeCount,.8,1.7),r(this.rocks,e.rockCount,.4,1.3)}},ku=5.2,Au=75,ju=90,Mu=30,Nu=12,Pu=22,Fu=Math.sqrt(2*Pu*5),Iu=2,Lu=180,Ru=5/(Lu/1e3),zu=500,Bu=100,Vu=100,Hu=.4,Uu=.6,Wu=22,Gu=18;function Ku(e={}){return{x:0,y:0,z:0,vx:0,vy:0,vz:0,yaw:0,hp:100,maxHp:100,grounded:!0,lastFallHeight:0,dashActiveMs:0,radius:.55,...e}}var qu=class{events;baseSpeedMult;state;speedMult=1;jumpsUsed=0;coyoteMs=Bu;jumpBufferMs=0;dashCooldownMs=0;dashDirX=0;dashDirZ=0;airPeakY=0;constructor(e=Ku(),t=X,n=1){this.events=t,this.baseSpeedMult=n,this.state=e,this.airPeakY=e.y}update(e,t,n,r){let i=n*1e3,a=this.state,o=a.x,s=a.z,c=Math.sin(r),l=Math.cos(r),u=-c*e.moveZ+l*e.moveX,d=-l*e.moveZ-c*e.moveX,f=Math.hypot(u,d);if(f>1&&(u/=f,d/=f,f=1),f>.001){let t=e.moveZ<-.35&&Math.abs(e.moveX)<=Math.abs(e.moveZ),r=t?-u:u,i=t?-d:d;a.yaw=Yu(a.yaw,Math.atan2(-r,-i),Gu*n)}if(e.dashPressed&&a.dashActiveMs<=0&&this.dashCooldownMs<=0&&(f>.001?(this.dashDirX=u/f,this.dashDirZ=d/f):(this.dashDirX=-Math.sin(a.yaw),this.dashDirZ=-Math.cos(a.yaw)),a.dashActiveMs=Lu,this.dashCooldownMs=zu,this.events.emit(`playerDashed`,{})),a.dashActiveMs>0)a.vx=this.dashDirX*Ru,a.vz=this.dashDirZ*Ru;else{let e=ku*this.baseSpeedMult*this.speedMult,t=u*e,r=d*e,i=(f>.001?a.grounded?Au:Mu:a.grounded?ju:Nu)*n;a.vx=Ju(a.vx,t,i),a.vz=Ju(a.vz,r,i)}let p=(a.grounded||this.coyoteMs>0)&&this.jumpsUsed===0;e.jumpPressed?p?this.doJump(!1):!a.grounded&&this.jumpsUsed>=1&&this.jumpsUsed<Iu?this.doJump(!0):this.jumpBufferMs=Vu:this.jumpBufferMs>0&&(a.grounded||this.coyoteMs>0)&&this.jumpsUsed===0&&(this.doJump(!1),this.jumpBufferMs=0),a.grounded||(a.vy-=Pu*n),a.x+=a.vx*n,a.z+=a.vz*n,a.y+=a.vy*n;let m=t.bounds;a.x=Xu(a.x,m.minX,m.maxX),a.z=Xu(a.z,m.minZ,m.maxZ),t.isOffCliff(a.x,a.z)&&(a.x=o,a.z=s,a.vx=0,a.vz=0);let h=t.heightAt(a.x,a.z),g=a.grounded;if(a.vy<=0&&a.y<=h+Hu){let e=t.normalAt(a.x,a.z);e.y>=Uu?(a.y=h,a.vy=0,a.grounded=!0,this.jumpsUsed=0,g||(a.lastFallHeight=Math.max(0,this.airPeakY-a.y),this.events.emit(`playerLanded`,{fallHeight:a.lastFallHeight}))):(a.y=h,a.vy=0,a.grounded=!1,a.vx+=e.x*Wu*n,a.vz+=e.z*Wu*n)}else a.grounded=!1;a.grounded?this.airPeakY=a.y:this.airPeakY=Math.max(this.airPeakY,a.y),a.dashActiveMs=Math.max(0,a.dashActiveMs-i),this.dashCooldownMs=Math.max(0,this.dashCooldownMs-i),this.jumpBufferMs=Math.max(0,this.jumpBufferMs-i),this.coyoteMs=a.grounded?Bu:Math.max(0,this.coyoteMs-i)}doJump(e){let t=this.state;t.vy=Fu,t.grounded=!1,this.jumpsUsed=e?Iu:1,e||(this.coyoteMs=0),this.events.emit(`playerJumped`,{double:e})}applyImpulse(e,t,n){let r=this.state;r.vx+=e,r.vy+=t,r.vz+=n}teleportTo(e,t,n){let r=this.state,i=n.bounds,a=Xu(e,i.minX,i.maxX),o=Xu(t,i.minZ,i.maxZ);return n.isOffCliff(a,o)?!1:(r.x=a,r.z=o,r.y=n.heightAt(a,o),r.vy=0,r.grounded=!0,this.jumpsUsed=0,this.airPeakY=r.y,!0)}grantIFrames(e){this.state.dashActiveMs=Math.max(this.state.dashActiveMs,e)}};function Ju(e,t,n){let r=t-e;return Math.abs(r)<=n?t:e+Math.sign(r)*n}function Yu(e,t,n){let r=Math.atan2(Math.sin(t-e),Math.cos(t-e));return Math.abs(r)<=n?t:e+Math.sign(r)*n}function Xu(e,t,n){return e<t?t:e>n?n:e}var Zu=65536,Qu=1.4,$u=6,ed=class{arrays;maxKindRadius;free;freeTop;high=0;kRadius;kSpeed;kHp;neighbors;constructor(e,t,n=2048){this.kRadius=new Float32Array(e.length),this.kSpeed=new Float32Array(e.length),this.kHp=new Float32Array(e.length);let r=0;for(let t=0;t<e.length;t++)this.kRadius[t]=e[t].radius,this.kSpeed[t]=e[t].speed,this.kHp[t]=e[t].hp,e[t].radius>r&&(r=e[t].radius);this.maxKindRadius=r,this.arrays={capacity:n,count:0,posX:new Float32Array(n),posY:new Float32Array(n),posZ:new Float32Array(n),velX:new Float32Array(n),velZ:new Float32Array(n),hp:new Float32Array(n),maxHp:new Float32Array(n),radius:new Float32Array(n),speed:new Float32Array(n),kindIndex:new Uint16Array(n),state:new Uint8Array(n),stateTimeMs:new Float32Array(n),hitFlash:new Float32Array(n),generation:new Uint16Array(n),dmg:new Float32Array(n),fuseMs:new Float32Array(n),contactCd:new Float32Array(n)},this.free=new Int32Array(n);for(let e=0;e<n;e++)this.free[e]=n-1-e;this.freeTop=n,this.neighbors=new Uint32Array(64)}liveCount(){return this.arrays.capacity-this.freeTop}handleAt(e){return this.arrays.generation[e]*Zu+e}spawn(e,t,n,r,i=1,a=0){if(this.freeTop===0)return-1;let o=this.free[--this.freeTop],s=this.arrays,c=s.generation[o]+1&65535;c===0&&(c=1),s.generation[o]=c,s.kindIndex[o]=e,s.radius[o]=this.kRadius[e],s.speed[o]=this.kSpeed[e]*i;let l=this.kHp[e]*r;return s.hp[o]=l,s.maxHp[o]=l,s.dmg[o]=a,s.posX[o]=t,s.posY[o]=0,s.posZ[o]=n,s.velX[o]=0,s.velZ[o]=0,s.state[o]=1,s.stateTimeMs[o]=0,s.hitFlash[o]=0,s.fuseMs[o]=-1,s.contactCd[o]=0,o>=this.high&&(this.high=o+1),s.count=this.high,c*Zu+o}kill(e){let t=this.arrays;t.state[e]===0||t.state[e]===3||(t.state[e]=3,t.stateTimeMs[e]=0)}evictWeakest(){let e=this.arrays,t=-1,n=1/0;for(let r=0;r<this.high;r++)e.state[r]===2&&e.maxHp[r]<n&&(n=e.maxHp[r],t=r);return t<0?!1:(this.freeSlot(t),!0)}isLive(e){if(e<0)return!1;let t=e%Zu,n=(e-t)/Zu;return this.arrays.state[t]!==0&&this.arrays.generation[t]===n}update(e,t,n,r,i){let a=this.arrays,o=a.posX,s=a.posZ,c=a.posY,l=a.velX,u=a.velZ,d=a.radius,f=a.state,p=a.kindIndex,m=a.stateTimeMs,h=a.hitFlash,g=t.x,_=t.z,v=e*1e3,y=$u*e,{minX:b,maxX:x,minZ:S,maxZ:C}=n.bounds,w=this.high;for(let T=0;T<w;T++){let w=f[T];if(w===0)continue;if(m[T]+=v,w===1)m[T]>=250&&(f[T]=2,m[T]=0);else if(w===3&&m[T]>=300){this.freeSlot(T);continue}if(h[T]>0&&(h[T]-=y,h[T]<0&&(h[T]=0)),c[T]=n.heightAt(o[T],s[T])+d[T],f[T]!==2||(i?i[p[T]](T,a,t,n,r,e):this.chaserSteer(T,g,_,r,e),f[T]!==2))continue;let E=o[T]+l[T]*e,D=s[T]+u[T]*e;E<b?E=b:E>x&&(E=x),D<S?D=S:D>C&&(D=C),o[T]=E,s[T]=D,c[T]=n.heightAt(E,D)+d[T]}}chaserSteer(e,t,n,r,i){let a=this.arrays,o=a.posX[e],s=a.posZ[e],c=a.speed[e],l=this.neighbors,u=t-o,d=n-s,f=Math.sqrt(u*u+d*d),p=0,m=0;f>1e-4&&(p=u/f,m=d/f);let h=a.radius[e]*2.5,g=r.queryCircle(o,s,h,l),_=0,v=0,y=h*h;for(let t=0;t<g;t++){let n=l[t];if(n===e)continue;let r=o-a.posX[n],i=s-a.posZ[n],c=r*r+i*i;if(c>1e-6&&c<y){let e=Math.sqrt(c),t=(h-e)/h;_+=r/e*t,v+=i/e*t}}let b=p*c+_*c*Qu,x=m*c+v*c*Qu,S=b*b+x*x;if(S>c*c){let e=c/Math.sqrt(S);b*=e,x*=e}let C=b-a.velX[e],w=x-a.velZ[e],T=Math.sqrt(C*C+w*w),E=60*i;if(T>E){let e=E/T;C*=e,w*=e}a.velX[e]+=C,a.velZ[e]+=w}freeSlot(e){let t=this.arrays;if(t.state[e]=0,this.free[this.freeTop++]=e,e===this.high-1){let e=this.high;for(;e>0&&t.state[e-1]===0;)e--;this.high=e}t.count=this.high}},td=class{cellSize;cols;rows;minX;minZ;invCell;nCells;cellStart;cursor;entries;cellCache;arrays=null;constructor(e,t,n=2){this.cellSize=n,this.invCell=1/n,this.minX=e.minX,this.minZ=e.minZ,this.cols=Math.max(1,Math.ceil((e.maxX-e.minX)*this.invCell)),this.rows=Math.max(1,Math.ceil((e.maxZ-e.minZ)*this.invCell)),this.nCells=this.cols*this.rows,this.cellStart=new Int32Array(this.nCells+1),this.cursor=new Int32Array(this.nCells),this.entries=new Uint32Array(t),this.cellCache=new Int32Array(t)}rebuild(e){this.arrays=e;let{posX:t,posZ:n,state:r,capacity:i}=e,a=this.cellStart,o=this.cellCache,s=this.nCells;a.fill(0);for(let e=0;e<i;e++){if(r[e]===0){o[e]=-1;continue}let i=this.cellIndexOf(t[e],n[e]);o[e]=i,a[i+1]++}for(let e=0;e<s;e++)a[e+1]+=a[e];let c=this.cursor;for(let e=0;e<s;e++)c[e]=a[e];let l=this.entries;for(let e=0;e<i;e++){let t=o[e];t<0||(l[c[t]++]=e)}}queryCircle(e,t,n,r){let i=this.arrays;if(!i)return 0;let a=i.posX,o=i.posZ,s=this.cols,c=this.rows,l=this.invCell,u=this.cellStart,d=this.entries,f=n*n,p=r.length,m=(e-n-this.minX)*l|0,h=(e+n-this.minX)*l|0,g=(t-n-this.minZ)*l|0,_=(t+n-this.minZ)*l|0;m<0&&(m=0),g<0&&(g=0),h>=s&&(h=s-1),_>=c&&(_=c-1);let v=0;for(let n=g;n<=_;n++){let i=n*s;for(let n=m;n<=h;n++){let s=i+n,c=u[s+1];for(let n=u[s];n<c;n++){let i=d[n],s=a[i]-e,c=o[i]-t;if(s*s+c*c<=f){if(v>=p)return v;r[v++]=i}}}}return v}cellIndexOf(e,t){let n=(e-this.minX)*this.invCell|0,r=(t-this.minZ)*this.invCell|0;return n<0?n=0:n>=this.cols&&(n=this.cols-1),r<0?r=0:r>=this.rows&&(r=this.rows-1),r*this.cols+n}},nd=500,rd=450,id=.45,ad=.5,od=.15,sd=.1,cd=class{horde;hash;terrain;player;kindIds;bus;arrays;scratch;maxEnemyRadius;runTimeSec=0;playerDead=!1;playerIframeMs=0;onHit=null;burnMs;burnDps;stunTimeMs;damageTakenMult=1;dmgPayload={enemyId:0,amount:0,crit:!1,x:0,y:0,z:0};killPayload={enemyId:0,kind:``,x:0,y:0,z:0,byCliff:!1};playerDmgPayload={amount:0,hpAfter:0,dx:void 0,dz:void 0};playerDiedPayload={timeSec:0};constructor(e,t,n,r,i,a){this.horde=e,this.hash=t,this.terrain=n,this.player=r,this.kindIds=i,this.bus=a,this.arrays=e.arrays,this.scratch=new Uint32Array(e.arrays.capacity),this.maxEnemyRadius=e.maxKindRadius,this.burnMs=new Float32Array(e.arrays.capacity),this.burnDps=new Float32Array(e.arrays.capacity),this.stunTimeMs=new Float32Array(e.arrays.capacity),a&&(a.on(`levelUp`,()=>this.healPlayer(id)),a.on(`chestOpened`,()=>this.healPlayer(ad)))}healPlayer(e){let t=this.player;if(this.playerDead||t.hp<=0||t.hp>=t.maxHp)return;let n=t.maxHp*e;t.hp=Math.min(t.maxHp,t.hp+n),this.bus?.emit(`playerHealed`,{amount:n,hpAfter:t.hp})}setOnHit(e){this.onHit=e}damageEnemy(e,t,n,r,i){let a=this.arrays;if(e<0||e>=a.capacity||a.state[e]!==2)return 0;let o=a.hp[e];if(o<=0)return 0;let s=t<o?t:o;a.hp[e]=o-t,a.hitFlash[e]=1;let c=r!==0||i!==0;if(c){let t=a.radius[e],n=1/(t>sd?t:sd);a.velX[e]+=r*n,a.velZ[e]+=i*n}if(this.bus){let r=this.dmgPayload;r.enemyId=this.horde.handleAt(e),r.amount=t,r.crit=n,r.x=a.posX[e],r.y=a.posY[e],r.z=a.posZ[e],this.bus.emit(`enemyDamaged`,r)}if(a.hp[e]<=0)return this.killEnemy(e,!1),s;if(c){let t=a.posX[e]+a.velX[e]*od,n=a.posZ[e]+a.velZ[e]*od;if(this.terrain.isOffCliff(t,n))return this.killEnemy(e,!0),s}return this.rollOnHit(e),s}rollOnHit(e){let t=this.onHit;if(t===null)return;let n=this.arrays;t.burnChance>0&&t.rng()<t.burnChance&&(this.burnMs[e]=t.burnMs,this.burnDps[e]=t.burnDps),t.freezeChance>0&&t.rng()<t.freezeChance&&t.slow?.(e,t.freezeMult,t.freezeMs),t.stunChance>0&&t.rng()<t.stunChance&&(this.stunTimeMs[e]=t.stunMs,n.velX[e]=0,n.velZ[e]=0,t.slow?.(e,t.stunMult,t.stunMs))}damageCircle(e,t,n,r,i,a){let o=this.arrays,s=this.hash.queryCircle(e,t,n,this.scratch),c=0;for(let n=0;n<s;n++){let s=this.scratch[n];if(o.state[s]!==2)continue;let l=0,u=0;if(a!==0){let n=o.posX[s]-e,r=o.posZ[s]-t,i=Math.sqrt(n*n+r*r);i>1e-4?(l=n/i*a,u=r/i*a):l=a}c+=this.damageEnemy(s,r,i,l,u)}return c}damagePlayerCircle(e,t,n,r){let i=this.player;if(this.playerDead||i.hp<=0||i.dashActiveMs>0)return;let a=i.x-e,o=i.z-t,s=n+i.radius;a*a+o*o<=s*s&&this.hurtPlayer(r,e,t)}update(e,t){this.runTimeSec=t;let n=this.arrays,r=n.contactCd,i=e*1e3,a=n.capacity,o=this.burnMs,s=this.burnDps,c=this.stunTimeMs,l=n.state;for(let t=0;t<a;t++)r[t]>0&&(r[t]-=i,r[t]<0&&(r[t]=0)),o[t]>0&&(l[t]===2&&n.hp[t]>0&&this.applyBurn(t,s[t]*e),o[t]-=i,o[t]<0&&(o[t]=0)),c[t]>0&&(c[t]-=i,c[t]<0&&(c[t]=0));this.playerIframeMs>0&&(this.playerIframeMs-=i);let u=this.player;if(this.playerDead||u.hp<=0||u.dashActiveMs>0||this.playerIframeMs>0)return;let d=u.radius+this.maxEnemyRadius,f=this.hash.queryCircle(u.x,u.z,d,this.scratch);for(let e=0;e<f;e++){let t=this.scratch[e];if(n.state[t]!==2||r[t]>0)continue;let i=n.dmg[t];if(i<=0)continue;let a=n.posX[t]-u.x,o=n.posZ[t]-u.z,s=u.radius+n.radius[t];if(!(a*a+o*o>s*s)){r[t]=nd,this.playerIframeMs=rd,this.hurtPlayer(i,n.posX[t],n.posZ[t]);break}}}killEnemy(e,t){let n=this.arrays;if(this.bus){let r=this.killPayload;r.enemyId=this.horde.handleAt(e),r.kind=this.kindIds[n.kindIndex[e]]??``,r.x=n.posX[e],r.y=n.posY[e],r.z=n.posZ[e],r.byCliff=t,this.bus.emit(`enemyKilled`,r)}let r=this.onHit;r!==null&&r.vengefulChance>0&&r.spawnVengeful&&r.rng()<r.vengefulChance&&r.spawnVengeful(n.posX[e],n.posZ[e]),this.horde.kill(e)}applyBurn(e,t){let n=this.arrays,r=n.hp[e];if(!(r<=0)){if(n.hp[e]=r-t,n.hitFlash[e]=1,this.bus){let r=this.dmgPayload;r.enemyId=this.horde.handleAt(e),r.amount=t,r.crit=!1,r.x=n.posX[e],r.y=n.posY[e],r.z=n.posZ[e],this.bus.emit(`enemyDamaged`,r)}n.hp[e]<=0&&this.killEnemy(e,!1)}}hurtPlayer(e,t,n){let r=this.player;if(!(r.hp<=0)){if(e*=this.damageTakenMult,r.hp-=e,r.hp<0&&(r.hp=0),this.bus){let i=this.playerDmgPayload;if(i.amount=e,i.hpAfter=r.hp,i.dx=void 0,i.dz=void 0,t!==void 0&&n!==void 0){let e=t-r.x,a=n-r.z,o=Math.hypot(e,a);o>1e-4&&(i.dx=e/o,i.dz=a/o)}this.bus.emit(`playerDamaged`,i)}r.hp<=0&&!this.playerDead&&(this.playerDead=!0,this.bus&&(this.playerDiedPayload.timeSec=this.runTimeSec,this.bus.emit(`playerDied`,this.playerDiedPayload)))}}},ld=class{player;sink;terrain;capacity;posX;posY;posZ;radius;kind;active;high=0;velX;velZ;damage;aoeR;ttlMs;ageMs;arcMs;arcH;originY;free;freeTop;globs=0;constructor(e,t,n,r=128){this.player=e,this.sink=t,this.terrain=n,this.capacity=r,this.posX=new Float32Array(r),this.posY=new Float32Array(r),this.posZ=new Float32Array(r),this.radius=new Float32Array(r),this.kind=new Uint8Array(r),this.active=new Uint8Array(r),this.velX=new Float32Array(r),this.velZ=new Float32Array(r),this.damage=new Float32Array(r),this.aoeR=new Float32Array(r),this.ttlMs=new Float32Array(r),this.ageMs=new Float32Array(r),this.arcMs=new Float32Array(r),this.arcH=new Float32Array(r),this.originY=new Float32Array(r),this.free=new Int32Array(r);for(let e=0;e<r;e++)this.free[e]=r-1-e;this.freeTop=r}get count(){let e=0;for(let t=0;t<this.high;t++)this.active[t]===1&&e++;return e}get globCount(){return this.globs}lobGlob(e,t,n,r,i,a,o,s){if(this.globs>=6)return!1;let c=this.alloc();if(c<0)return!1;let l=r-e,u=i-n,d=Math.sqrt(l*l+u*u)||.001,f=a>0?a:6;return this.kind[c]=0,this.posX[c]=e,this.posY[c]=t,this.posZ[c]=n,this.originY[c]=t,this.velX[c]=l/d*f,this.velZ[c]=u/d*f,this.arcMs[c]=Math.max(300,d/f*1e3),this.arcH[c]=Math.min(7,Math.max(2,d*.35)),this.aoeR[c]=o,this.damage[c]=s,this.radius[c]=.5,this.ttlMs[c]=this.arcMs[c]+60,this.ageMs[c]=0,this.active[c]=1,this.globs++,c>=this.high&&(this.high=c+1),!0}fireStraight(e,t,n,r,i,a,o,s,c){let l=this.alloc();if(l<0)return!1;let u=Math.sqrt(r*r+i*i)||1;return this.kind[l]=1,this.posX[l]=e,this.posY[l]=t,this.posZ[l]=n,this.originY[l]=t,this.velX[l]=r/u*a,this.velZ[l]=i/u*a,this.radius[l]=o,this.damage[l]=s,this.aoeR[l]=0,this.arcMs[l]=0,this.arcH[l]=0,this.ttlMs[l]=c,this.ageMs[l]=0,this.active[l]=1,l>=this.high&&(this.high=l+1),!0}update(e){let t=e*1e3,n=this.player,{minX:r,maxX:i,minZ:a,maxZ:o}=this.terrain.bounds;for(let s=0;s<this.high;s++){if(this.active[s]===0)continue;if(this.ageMs[s]+=t,this.ttlMs[s]-=t,this.kind[s]===0){this.posX[s]+=this.velX[s]*e,this.posZ[s]+=this.velZ[s]*e;let t=this.arcMs[s]>0?Math.min(1,this.ageMs[s]/this.arcMs[s]):1;this.posY[s]=this.originY[s]+4*this.arcH[s]*t*(1-t),(t>=1||this.ttlMs[s]<=0)&&(this.sink.damagePlayerCircle(this.posX[s],this.posZ[s],this.aoeR[s],this.damage[s]),this.release(s));continue}if(this.ttlMs[s]<=0){this.release(s);continue}if(this.posX[s]+=this.velX[s]*e,this.posZ[s]+=this.velZ[s]*e,this.posX[s]<r||this.posX[s]>i||this.posZ[s]<a||this.posZ[s]>o){this.release(s);continue}let c=n.x-this.posX[s],l=n.z-this.posZ[s],u=this.radius[s]+n.radius;c*c+l*l<=u*u&&(this.sink.damagePlayerCircle(this.posX[s],this.posZ[s],this.radius[s],this.damage[s]),this.release(s))}}alloc(){return this.freeTop===0?-1:this.free[--this.freeTop]}release(e){if(this.kind[e]===0&&this.globs>0&&this.globs--,this.active[e]=0,this.free[this.freeTop++]=e,e===this.high-1){let e=this.high;for(;e>0&&this.active[e-1]===0;)e--;this.high=e}}},ud=1.5,dd=.5,fd=.5,pd=.6,md=.5,hd=2.2,gd=650,_d=13,vd=34,yd=500,bd=.35,xd=320,Sd=3.5,Cd=900,wd=2,Td=1.8,Ed=.45,Dd=6e3,Od=.32,kd=3500,Ad=255,jd=0,Md=1,Nd=2,Pd=0,Fd=1,Id=2,Ld=3,Rd=0,zd=1,Bd=2,Vd=3,Hd=0,Ud=1,Wd=2,Gd=0,Kd=1,qd=new Set([`spitter`,`charger`,`splitter`,`wraith`,`sniper`,`strafer`]),Jd=new Uint32Array(64),Z={x:0,z:0},Yd=new Float32Array,Xd=new Float32Array,Zd=new Float32Array,Qd=new Float32Array,$d,ef=null,tf=null,nf=[],rf=new Float32Array,af=new Float32Array,of=new Map,sf=null,cf=new Uint16Array,Q=new Uint8Array,$=new Float32Array,lf=new Float32Array,uf=new Int32Array,df=new Float32Array,ff=new Float32Array,pf=new Float32Array,mf=new Float32Array,hf=new Uint8Array,gf=new Float32Array,_f=new Float32Array,vf=new Float32Array,yf=new Float32Array,bf=new Int32Array(wd),xf=0,Sf={len:0,list:bf,fromX:gf,fromZ:_f,toX:vf,toZ:yf};function Cf(){return Sf.len=xf,Sf}function wf(e){return pf[e]??0}function Tf(e){return mf[e]??1}var Ef=null;function Df(e){Ef=e}function Of(e,t,n,r,i,a,o,s,c){let l=t.posX[e],u=t.posZ[e],d=t.speed[e]*a*(Ef===null?1:Ef[e]),f=t.kindIndex[e],p=t.radius[e]*2.5,m=p*p,h=n.queryCircle(l,u,p,Jd),g=0,_=0,v=0,y=0,b=0;for(let n=0;n<h;n++){let r=Jd[n];if(r===e)continue;let i=l-t.posX[r],a=u-t.posZ[r],o=i*i+a*a;if(o>1e-6&&o<m){let e=Math.sqrt(o),t=(p-e)/p;g+=i/e*t,_+=a/e*t}s>0&&t.kindIndex[r]===f&&(v+=t.posX[r],y+=t.posZ[r],b++)}let x=r*d+g*d*o,S=i*d+_*d*o;if(s>0&&b>0){let e=v/b-l,t=y/b-u,n=Math.sqrt(e*e+t*t);n>1e-4&&(x+=e/n*d*s,S+=t/n*d*s)}let C=x*x+S*S;if(C>d*d){let e=d/Math.sqrt(C);x*=e,S*=e}let w=x-t.velX[e],T=S-t.velZ[e],E=Math.sqrt(w*w+T*T),D=60*c;if(E>D){let e=D/E;w*=e,T*=e}t.velX[e]+=w,t.velZ[e]+=T}function kf(e,t,n,r){let i=n.x-t.posX[e],a=n.z-t.posZ[e],o=Math.sqrt(i*i+a*a);return o>1e-4?(r.x=i/o,r.z=a/o):(r.x=0,r.z=0),o}function Af(e,t){cf[e]!==t.generation[e]&&(cf[e]=t.generation[e],Q[e]=Ad,$[e]=0,lf[e]=0,uf[e]=0,pf[e]=0,mf[e]=1,If(e))}function jf(e,t){t.velX[e]=0,t.velZ[e]=0}function Mf(e,t,n,r){t.velX[e]=n,t.velZ[e]=r}function Nf(e,t,n){let r=n<0?0:n>1?1:n;pf[e]=r,t.hitFlash[e]=.25+.75*r}function Pf(e,t,n,r,i,a,o,s){r>a?Of(e,t,n,Z.x,Z.z,o,Qu,0,s):r<i?Of(e,t,n,-Z.x,-Z.z,o,Qu,0,s):Of(e,t,n,0,0,o,Qu,0,s)}function Ff(e){hf[e]===1||xf>=wd||(hf[e]=1,bf[xf++]=e)}function If(e){if(hf[e]===1){hf[e]=0;for(let t=0;t<xf;t++)if(bf[t]===e){bf[t]=bf[--xf];break}}}function Lf(e,t,n,r,i){if(ef===null)return;let a=n.x-t.posX[e],o=n.z-t.posZ[e];ef.fireStraight(t.posX[e],t.posY[e],t.posZ[e],a,o,r,Od,i,kd)}var Rf=(e,t,n,r,i,a)=>{kf(e,t,n,Z),Of(e,t,i,Z.x,Z.z,1,Qu,0,a)},zf={chaser:Rf,fast:(e,t,n,r,i,a)=>{let o=kf(e,t,n,Z),s=(e&1?1:-1)*dd*Math.min(1,o/12),c=Math.cos(s),l=Math.sin(s);Of(e,t,i,Z.x*c-Z.z*l,Z.x*l+Z.z*c,1,Qu,0,a)},tank:(e,t,n,r,i,a)=>{kf(e,t,n,Z),Of(e,t,i,Z.x,Z.z,1,fd,0,a)},swarm:(e,t,n,r,i,a)=>{kf(e,t,n,Z),Of(e,t,i,Z.x,Z.z,1,Qu,pd,a)},exploder:(e,t,n,r,i,a)=>{let o=t.kindIndex[e],s=kf(e,t,n,Z);if(t.fuseMs[e]<0){s*s<=Yd[o]&&(t.fuseMs[e]=Xd[o],t.hitFlash[e]=1),Of(e,t,i,Z.x,Z.z,1,Qu,0,a);return}if(t.fuseMs[e]-=a*1e3,t.fuseMs[e]<=0){$d?.damagePlayerCircle(t.posX[e],t.posZ[e],Zd[o],Qd[o]),t.state[e]=3,t.stateTimeMs[e]=0;return}Of(e,t,i,Z.x,Z.z,md,Qu,0,a)},spitter:(e,t,n,r,i,a)=>{Af(e,t);let o=t.kindIndex[e],s=nf[o],c=kf(e,t,n,Z),l=a*1e3,u=s?.standoffMinM??13,d=s?.standoffMaxM??17,f=s?.swellMs??700;if(Q[e]===Ad&&(Q[e]=jd,$[e]=0),Q[e]===jd){Pf(e,t,i,c,u,d,1,a),$[e]>0&&($[e]-=l);let r=c>=u-2&&c<=d+2,o=ef!==null&&ef.globCount<6;r&&$[e]<=0&&o&&(Q[e]=Md,$[e]=f,df[e]=n.x,ff[e]=n.z)}else Q[e]===Md?(jf(e,t),$[e]-=l,Nf(e,t,1-Math.max(0,$[e])/f),$[e]<=0&&(ef?.lobGlob(t.posX[e],t.posY[e],t.posZ[e],df[e],ff[e],s?.globSpeed??6,hd,s?.globDamage??16),t.hitFlash[e]=1,pf[e]=0,Q[e]=Nd,$[e]=gd)):(Pf(e,t,i,c,u,d,1,a),$[e]-=l,$[e]<=0&&(Q[e]=jd,$[e]=0))},charger:(e,t,n,r,i,a)=>{Af(e,t);let o=t.kindIndex[e],s=nf[o],c=kf(e,t,n,Z),l=a*1e3,u=s?.telegraphMs??650,d=s?.lungeMult??3,f=s?.commitDistanceM??1;if(Q[e]===Ad&&(Q[e]=Pd),Q[e]===Pd)Of(e,t,i,Z.x,Z.z,1,Qu,0,a),c<=_d&&(Q[e]=Fd,$[e]=u,df[e]=Z.x,ff[e]=Z.z);else if(Q[e]===Fd)jf(e,t),$[e]-=l,Nf(e,t,1-Math.max(0,$[e])/u),$[e]<=0&&(Q[e]=Id,uf[e]=vd,t.hitFlash[e]=1,pf[e]=0);else if(Q[e]===Id){let n=t.speed[e]*d;Mf(e,t,df[e]*n,ff[e]*n),uf[e]--;let i=r.bounds,a=t.posX[e]<=i.minX||t.posX[e]>=i.maxX||t.posZ[e]<=i.minZ||t.posZ[e]>=i.maxZ;(uf[e]<=0||c<=f||a)&&(Q[e]=Ld,$[e]=yd)}else jf(e,t),$[e]-=l,$[e]<=0&&(Q[e]=Pd)},splitter:(e,t,n,r,i,a)=>{kf(e,t,n,Z),Of(e,t,i,Z.x,Z.z,1,Qu,0,a)},wraith:(e,t,n,r,i,a)=>{Af(e,t);let o=t.kindIndex[e],s=nf[o],c=kf(e,t,n,Z),l=a*1e3,u=s?.intangibleMs??1200,d=s?.shimmerMs??400,f=s?.vulnerableMs??800,p=s?.lungeMult??2.2,m=s?.lungeCommitDistanceM??1;if(Q[e]===Ad&&(Q[e]=Rd,$[e]=u),Q[e]===Rd)mf[e]=bd,Of(e,t,i,Z.x,Z.z,1,Qu,0,a),$[e]-=l,$[e]<=0&&(Q[e]=zd,$[e]=d,df[e]=Z.x,ff[e]=Z.z);else if(Q[e]===zd){jf(e,t),$[e]-=l;let n=1-Math.max(0,$[e])/d;mf[e]=bd+(1-bd)*n,Nf(e,t,n),$[e]<=0&&(Q[e]=Bd,$[e]=xd,mf[e]=1,pf[e]=0,t.hitFlash[e]=1)}else if(Q[e]===Bd){let n=t.speed[e]*p;Mf(e,t,df[e]*n,ff[e]*n),$[e]-=l,($[e]<=0||c<=m)&&(Q[e]=Vd,$[e]=f)}else mf[e]=1,Of(e,t,i,Z.x,Z.z,.6,Qu,0,a),$[e]-=l,$[e]<=0&&(Q[e]=Rd,$[e]=u)},sniper:(e,t,n,r,i,a)=>{Af(e,t);let o=t.kindIndex[e],s=nf[o],c=kf(e,t,n,Z),l=a*1e3,u=s?.holdRangeM??21,d=s?.aimLockMs??1400;Q[e]===Ad&&(Q[e]=Hd,$[e]=0),Q[e]===Hd?(Pf(e,t,i,c,u-2,u+2,1,a),$[e]>0&&($[e]-=l),$[e]<=0&&Math.abs(c-u)<=Sd&&xf<wd&&(Q[e]=Ud,$[e]=d,df[e]=Z.x,ff[e]=Z.z,gf[e]=t.posX[e],_f[e]=t.posZ[e],vf[e]=t.posX[e]+Z.x*u,yf[e]=t.posZ[e]+Z.z*u,Ff(e))):Q[e]===Ud?(jf(e,t),gf[e]=t.posX[e],_f[e]=t.posZ[e],$[e]-=l,Nf(e,t,1-Math.max(0,$[e])/d),$[e]<=0&&(ef?.fireStraight(t.posX[e],t.posY[e],t.posZ[e],df[e],ff[e],s?.orbSpeed??5,Ed,rf[o],Dd),t.hitFlash[e]=1,pf[e]=0,If(e),Q[e]=Wd,$[e]=Cd)):(Pf(e,t,i,c,u-2,u+2,1,a),$[e]-=l,$[e]<=0&&(Q[e]=Hd,$[e]=0))},strafer:(e,t,n,r,i,a)=>{Af(e,t);let o=t.kindIndex[e],s=nf[o],c=kf(e,t,n,Z),l=a*1e3,u=s?.strafeRadiusM??15,d=s?.burstCount??3,f=s?.burstIntervalMs??180,p=s?.boltSpeed??9,m=s?.volleyCooldownMs??1800;Q[e]===Ad&&(Q[e]=Gd,$[e]=m);let h=e&1?1:-1,g=-Z.z*h,_=Z.x*h,v=c-u,y=v>0?1:v<0?-1:0;g+=Z.x*y*.6,_+=Z.z*y*.6;let b=Math.sqrt(g*g+_*_)||1;Of(e,t,i,g/b,_/b,1,Qu,0,a),Q[e]===Gd?($[e]-=l,$[e]<=0&&(Q[e]=Kd,uf[e]=0,lf[e]=0)):(lf[e]-=l,lf[e]<=0&&(Lf(e,t,n,p,af[o]),t.hitFlash[e]=.6,uf[e]++,lf[e]=f,uf[e]>=d&&(Q[e]=Gd,$[e]=m)))}};function Bf(e,t,n,r){let i=t%65536;i>=0&&i<hf.length&&If(i);let a=of.get(e);if(!(a===void 0||tf===null||a.childIndex<0))for(let e=0;e<a.count;e++){let t=e/a.count*Math.PI*2;tf(a.childIndex,n+Math.cos(t)*.5,r+Math.sin(t)*.5)}}function Vf(e,t){let n=`detonator`in t?t:{detonator:t},r=e.length,i=n.capacity??2048;Yd=new Float32Array(r),Xd=new Float32Array(r),Zd=new Float32Array(r),Qd=new Float32Array(r),$d=n.detonator,ef=n.projectiles??null,tf=n.spawnEnemy??null,nf=Array(r),rf=new Float32Array(r),af=new Float32Array(r),of=new Map;let a=new Map;for(let t=0;t<r;t++)a.set(e[t].id,t);cf=new Uint16Array(i),Q=new Uint8Array(i).fill(Ad),$=new Float32Array(i),lf=new Float32Array(i),uf=new Int32Array(i),df=new Float32Array(i),ff=new Float32Array(i),pf=new Float32Array(i),mf=new Float32Array(i).fill(1),hf=new Uint8Array(i),gf=new Float32Array(i),_f=new Float32Array(i),vf=new Float32Array(i),yf=new Float32Array(i),bf=new Int32Array(wd),xf=0,Sf.list=bf,Sf.fromX=gf,Sf.fromZ=_f,Sf.toX=vf,Sf.toZ=yf;let o=Array(r);for(let t=0;t<r;t++){let n=e[t];nf[t]=n.params,rf[t]=n.damage*Td,af[t]=n.damage;let r=zf[n.behavior]??Rf;if(qd.has(n.behavior)&&n.tier!==`special`&&(r=Rf),o[t]=r,n.behavior===`exploder`){let e=n.params??{},r=e.explodeRadius??1.8;Yd[t]=r*ud*(r*ud),Xd[t]=e.telegraphMs??500,Zd[t]=r,Qd[t]=e.explodeDamage??0}if(n.tier===`special`&&n.onDeath?.split){let e=a.get(n.onDeath.split.kindId);of.set(n.id,{childIndex:e??-1,count:n.onDeath.split.count})}}return sf&&=(sf(),null),n.bus&&(sf=n.bus.on(`enemyKilled`,e=>Bf(e.kind,e.enemyId,e.x,e.z))),o}var Hf=60,Uf=90,Wf=20,Gf=4,Kf=25,qf=15,Jf=6,Yf=class{config;level;scaling;bus;rows;kindDamage;acc=0;prevTime=0;rngState;constructor(e,t,n,r,i,a=305441741){this.config=e,this.level=t,this.scaling=n,this.bus=i,this.rngState=a>>>0,this.kindDamage=new Float32Array(r.length);for(let e=0;e<r.length;e++)this.kindDamage[e]=r[e].damage;let o=new Map;for(let e=0;e<r.length;e++)o.set(r[e].id,e);this.rows=[];for(let e of t.spawnTable){let t=o.get(e.kindId);t!==void 0&&this.rows.push({kindIndex:t,weight:e.weight,fromSec:e.fromSec})}}intervalMsAt(e){let t=this.config,n=Hf*t.earlyRatePerSec,r=e<Hf?e*t.earlyRatePerSec:n+(e-Hf)*t.lateRatePerSec,i=t.baseIntervalMs-r;return i>t.intervalFloorMs?i:t.intervalFloorMs}waveCountAt(e){let t=this.config;return t.waveCountBase+Math.floor(e/Uf)*t.waveCountPer90s}isSwarmActive(e){let t=this.config,n=t.minibossEverySec,r=n-t.swarm.leadSec,i=e%n;return i>=r&&i<r+t.swarm.durationSec}pickKind(e,t){let n=0;for(let t of this.rows)t.fromSec<=e&&(n+=t.weight);if(n<=0)return-1;let r=t*n,i=-1;for(let t of this.rows)if(!(t.fromSec>e)&&(i=t.kindIndex,r-=t.weight,r<=0))return t.kindIndex;return i}seedSkip(e){this.prevTime=Math.min(e,this.config.finalHordeAtSec-.001)}update(e,t,n,r,i,a=1){let o=t;this.fireWaveEvents(o);let s=this.intervalMsAt(o)/a,c=this.waveCountAt(o);if(this.isSwarmActive(o)&&(s/=this.config.swarm.intervalDiv,c=Math.ceil(c*this.config.swarm.countMult)),o>=this.config.finalHordeAtSec){let e=this.config.finalHorde,t=(o-this.config.finalHordeAtSec)/60,n=e.intervalHalvingPerMin**+t;s=Math.max(e.floorMs,s*n);let r=Math.floor((o-this.config.finalHordeAtSec)/Wf);c+=r*e.extraPerWavePer20s}for(this.acc+=e*1e3;this.acc>=s;){this.acc-=s;for(let e=0;e<c&&this.spawnOne(o,n,r,i);e++);}}spawnOne(e,t,n,r){if(t.liveCount()>=this.config.maxEnemies)return!1;let i=this.pickKind(e,this.rand());if(i<0)return!1;let a=this.scaling,o=this.level.tuning,s=(1+Math.floor(e/25)*a.hpPer25s)*o.hpMult,c=(1+Math.floor(e/50)*a.speedPer50s)*o.speedMult,l=this.kindDamage[i]*(1+Math.floor(e/30)*a.damagePer30s)*o.dmgMult,u=n.vx*n.vx+n.vz*n.vz>1?Math.atan2(n.vz,n.vx):this.rand()*Math.PI*2,d=r.bounds;for(let e=0;e<Jf;e++){let e=u+(this.rand()-.5)*Gf,a=Kf+this.rand()*qf,o=n.x+Math.cos(e)*a,f=n.z+Math.sin(e)*a;if(o<d.minX?o=d.minX:o>d.maxX&&(o=d.maxX),f<d.minZ?f=d.minZ:f>d.maxZ&&(f=d.maxZ),!r.isOffCliff(o,f))return t.spawn(i,o,f,s,c,l),!0}return!1}fireWaveEvents(e){let t=this.prevTime,n=this.config;this.bus&&(this.isSwarmActive(e)&&!this.isSwarmActive(t)&&this.bus.emit(`waveEvent`,{kind:`swarm`,timeSec:e}),Math.floor(e/n.minibossEverySec)>Math.floor(t/n.minibossEverySec)&&this.bus.emit(`waveEvent`,{kind:`boss`,timeSec:e}),t<n.finalHordeAtSec&&e>=n.finalHordeAtSec&&this.bus.emit(`waveEvent`,{kind:`finalHorde`,timeSec:e})),this.prevTime=e}rand(){let e=this.rngState+1831565813|0;this.rngState=e;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}},Xf=8,Zf=1.5,Qf=9,$f=.4,ep=class{capacity;posX;posY;posZ;radius;rarity;active;high=0;velX;velZ;damage;pierce;ttlMs;ageMs;knockback;rangeM;tgtX;tgtZ;aoeRadius;arcMs;arcH;originY;behavior;crit;phase;hitCount;hits;free;freeTop;q;constructor(e=512){this.capacity=e,this.posX=new Float32Array(e),this.posY=new Float32Array(e),this.posZ=new Float32Array(e),this.velX=new Float32Array(e),this.velZ=new Float32Array(e),this.radius=new Float32Array(e),this.damage=new Float32Array(e),this.pierce=new Int32Array(e),this.ttlMs=new Float32Array(e),this.ageMs=new Float32Array(e),this.knockback=new Float32Array(e),this.rangeM=new Float32Array(e),this.tgtX=new Float32Array(e),this.tgtZ=new Float32Array(e),this.aoeRadius=new Float32Array(e),this.arcMs=new Float32Array(e),this.arcH=new Float32Array(e),this.originY=new Float32Array(e),this.behavior=new Uint8Array(e),this.rarity=new Uint8Array(e),this.crit=new Uint8Array(e),this.phase=new Uint8Array(e),this.active=new Uint8Array(e),this.hitCount=new Int32Array(e),this.hits=new Int32Array(e*Xf),this.free=new Int32Array(e);for(let t=0;t<e;t++)this.free[t]=e-1-t;this.freeTop=e,this.q=new Uint32Array(e)}get count(){let e=0;for(let t=0;t<this.high;t++)this.active[t]===1&&e++;return e}spawn(e){if(this.freeTop===0)return-1;let t=this.free[--this.freeTop];return this.posX[t]=e.x,this.posY[t]=e.y,this.posZ[t]=e.z,this.originY[t]=e.y,this.velX[t]=e.vx,this.velZ[t]=e.vz,this.radius[t]=e.radius,this.damage[t]=e.damage,this.pierce[t]=e.pierce,this.ttlMs[t]=e.ttlMs,this.ageMs[t]=0,this.knockback[t]=e.knockback,this.rangeM[t]=e.rangeM,this.tgtX[t]=e.tgtX,this.tgtZ[t]=e.tgtZ,this.aoeRadius[t]=e.aoeRadius,this.arcMs[t]=e.arcMs,this.arcH[t]=e.arcH,this.behavior[t]=e.behavior,this.rarity[t]=e.rarity,this.crit[t]=+!!e.crit,this.phase[t]=0,this.hitCount[t]=0,this.active[t]=1,t>=this.high&&(this.high=t+1),t}release(e){if(this.active[e]=0,this.free[this.freeTop++]=e,e===this.high-1){let e=this.high;for(;e>0&&this.active[e-1]===0;)e--;this.high=e}}update(e,t,n,r,i){let a=e*1e3,{minX:o,maxX:s,minZ:c,maxZ:l}=i.bounds;for(let i=0;i<this.high;i++){if(this.active[i]===0)continue;this.ageMs[i]+=a,this.ttlMs[i]-=a;let u=this.behavior[i];if(this.ttlMs[i]<=0){u===2&&this.landLob(i,n),this.release(i);continue}if(u===2){this.posX[i]+=this.velX[i]*e,this.posZ[i]+=this.velZ[i]*e;let t=this.arcMs[i]>0?Math.min(1,this.ageMs[i]/this.arcMs[i]):1;this.posY[i]=this.originY[i]+4*this.arcH[i]*t*(1-t),t>=1&&(this.landLob(i,n),this.release(i));continue}if(u===1&&this.steerHoming(i,e,t,r),this.posX[i]+=this.velX[i]*e,this.posZ[i]+=this.velZ[i]*e,this.posX[i]<o||this.posX[i]>s||this.posZ[i]<c||this.posZ[i]>l){this.release(i);continue}if(u===4){this.stepRicochet(i,n,r,t);continue}if(u===3){let e=this.posX[i]-this.tgtX[i],a=this.posZ[i]-this.tgtZ[i],o=Math.sqrt(e*e+a*a);if(this.phase[i]===0)o>=this.rangeM[i]&&(this.phase[i]=1,this.velX[i]=-this.velX[i],this.velZ[i]=-this.velZ[i],this.hitCount[i]=0);else if(o<=$f){this.release(i);continue}this.applyHits(i,n,r,t,!1);continue}this.applyHits(i,n,r,t,!0)}}steerHoming(e,t,n,r){let i=this.posX[e],a=this.posZ[e],o=this.rangeM[e],s=n.queryCircle(i,a,o,this.q),c=-1,l=1/0;for(let e=0;e<s;e++){let t=this.q[e];if(r.state[t]!==2)continue;let n=r.posX[t]-i,o=r.posZ[t]-a,s=n*n+o*o;s<l&&(l=s,c=t)}if(c<0)return;let u=Math.sqrt(this.velX[e]*this.velX[e]+this.velZ[e]*this.velZ[e]);if(u<1e-4)return;let d=Math.sqrt(l)||1,f=(r.posX[c]-i)/d,p=(r.posZ[c]-a)/d,m=Math.min(1,Qf*t),h=this.velX[e]/u+f*m,g=this.velZ[e]/u+p*m,_=Math.sqrt(h*h+g*g)||1;h/=_,g/=_,this.velX[e]=h*u,this.velZ[e]=g*u}landLob(e,t){t.damageCircle(this.posX[e],this.posZ[e],this.aoeRadius[e],this.damage[e],this.crit[e]===1,this.knockback[e])}applyHits(e,t,n,r,i){let a=this.radius[e],o=this.posX[e],s=this.posZ[e],c=r.queryCircle(o,s,a+Zf,this.q),l=this.knockback[e],u=Math.sqrt(this.velX[e]*this.velX[e]+this.velZ[e]*this.velZ[e])||1,d=this.velX[e]/u*l,f=this.velZ[e]/u*l,p=this.crit[e]===1;for(let r=0;r<c;r++){let c=this.q[r];if(n.state[c]!==2)continue;let l=n.posX[c]-o,u=n.posZ[c]-s,m=a+n.radius[c];if(!(l*l+u*u>m*m)&&!this.alreadyHit(e,c)&&(this.registerHit(e,c),t.damageEnemy(c,this.damage[e],p,d,f)>0&&i&&(this.pierce[e]--,this.pierce[e]<0)))return this.release(e),!0}return!1}alreadyHit(e,t){let n=e*Xf,r=this.hitCount[e]<Xf?this.hitCount[e]:Xf;for(let e=0;e<r;e++)if(this.hits[n+e]===t)return!0;return!1}registerHit(e,t){this.hits[e*Xf+this.hitCount[e]%Xf]=t,this.hitCount[e]++}stepRicochet(e,t,n,r){let i=this.radius[e],a=this.posX[e],o=this.posZ[e],s=-1,c=1/0,l=r.queryCircle(a,o,i+Zf,this.q);for(let t=0;t<l;t++){let r=this.q[t];if(n.state[r]!==2||this.alreadyHit(e,r))continue;let l=n.posX[r]-a,u=n.posZ[r]-o,d=i+n.radius[r],f=l*l+u*u;f>d*d||f>=c||(c=f,s=r)}if(s<0)return;if(this.registerHit(e,s),t.damageEnemy(s,this.damage[e],this.crit[e]===1,0,0),--this.pierce[e]<0){this.release(e);return}let u=-1,d=1/0,f=r.queryCircle(a,o,this.rangeM[e],this.q);for(let t=0;t<f;t++){let r=this.q[t];if(n.state[r]!==2||this.alreadyHit(e,r))continue;let i=n.posX[r]-a,s=n.posZ[r]-o,c=i*i+s*s;c<d&&(d=c,u=r)}if(u<0){this.release(e);return}let p=Math.sqrt(this.velX[e]*this.velX[e]+this.velZ[e]*this.velZ[e])||1,m=Math.sqrt(d)||1;this.velX[e]=(n.posX[u]-a)/m*p,this.velZ[e]=(n.posZ[u]-o)/m*p}},tp=class{capacity;posX;posZ;radius;ttlMs;maxTtlMs;rarity;active;high=0;damage;tickMs;tickAccMs;crit;free;freeTop;constructor(e=256){this.capacity=e,this.posX=new Float32Array(e),this.posZ=new Float32Array(e),this.radius=new Float32Array(e),this.ttlMs=new Float32Array(e),this.maxTtlMs=new Float32Array(e),this.rarity=new Uint8Array(e),this.active=new Uint8Array(e),this.damage=new Float32Array(e),this.tickMs=new Float32Array(e),this.tickAccMs=new Float32Array(e),this.crit=new Uint8Array(e),this.free=new Int32Array(e);for(let t=0;t<e;t++)this.free[t]=e-1-t;this.freeTop=e}get count(){let e=0;for(let t=0;t<this.high;t++)this.active[t]===1&&e++;return e}spawn(e,t,n,r,i,a,o,s){if(this.freeTop===0)return-1;let c=this.free[--this.freeTop];return this.posX[c]=e,this.posZ[c]=t,this.radius[c]=n,this.damage[c]=r,this.tickMs[c]=i>0?i:250,this.tickAccMs[c]=this.tickMs[c],this.ttlMs[c]=a,this.maxTtlMs[c]=a,this.crit[c]=+!!o,this.rarity[c]=s,this.active[c]=1,c>=this.high&&(this.high=c+1),c}update(e,t){let n=e*1e3;for(let e=0;e<this.high;e++){if(this.active[e]===0)continue;if(this.ttlMs[e]-=n,this.ttlMs[e]<=0){this.release(e);continue}if(this.damage[e]<=0)continue;this.tickAccMs[e]+=n;let r=this.tickMs[e],i=0;for(;this.tickAccMs[e]>=r&&i++<8;)this.tickAccMs[e]-=r,t.damageCircle(this.posX[e],this.posZ[e],this.radius[e],this.damage[e],this.crit[e]===1,0)}}release(e){if(this.active[e]=0,this.free[this.freeTop++]=e,e===this.high-1){let e=this.high;for(;e>0&&this.active[e-1]===0;)e--;this.high=e}}},np=class{capacity;posX;posZ;radius;damage;fuseMs;crit;active;high=0;free;freeTop;constructor(e=64){this.capacity=e,this.posX=new Float32Array(e),this.posZ=new Float32Array(e),this.radius=new Float32Array(e),this.damage=new Float32Array(e),this.fuseMs=new Float32Array(e),this.crit=new Uint8Array(e),this.active=new Uint8Array(e),this.free=new Int32Array(e);for(let t=0;t<e;t++)this.free[t]=e-1-t;this.freeTop=e}get count(){let e=0;for(let t=0;t<this.high;t++)this.active[t]===1&&e++;return e}spawn(e,t,n,r,i,a){if(this.freeTop===0)return-1;let o=this.free[--this.freeTop];return this.posX[o]=e,this.posZ[o]=t,this.radius[o]=n,this.damage[o]=r,this.fuseMs[o]=i,this.crit[o]=+!!a,this.active[o]=1,o>=this.high&&(this.high=o+1),o}update(e,t){let n=e*1e3;for(let e=0;e<this.high;e++)this.active[e]!==0&&(this.fuseMs[e]-=n,!(this.fuseMs[e]>0)&&(t.damageCircle(this.posX[e],this.posZ[e],this.radius[e],this.damage[e],this.crit[e]===1,0),this.release(e)))}release(e){if(this.active[e]=0,this.free[this.freeTop++]=e,e===this.high-1){let e=this.high;for(;e>0&&this.active[e-1]===0;)e--;this.high=e}}},rp={damagePct:.17,fireRateFactor:.96,sizePct:.07},ip={damagePct:0,fireRateFactor:1,sizePct:0},ap={bonkHammer:{id:`bonkHammer`,name:`Bonk Hammer`,desc:`It's a hammer.`,rarity:`common`,pattern:`orbit`,baseDamage:26,fireRateMs:400,projectileCount:2,projectileSpeed:6,radius:2,knockback:4,maxLevel:8,perLevel:rp,perLevelExtra:{knockback:.3},unlockedFromStart:!0},spiritBolts:{id:`spiritBolts`,name:`Spirit Bolts`,desc:`Finds you. Politely.`,rarity:`common`,pattern:`homing`,baseDamage:10,fireRateMs:550,projectileCount:1,projectileSpeed:9,range:8,maxLevel:8,perLevel:rp,unlockedFromStart:!0},boulderToss:{id:`boulderToss`,name:`Boulder Toss`,desc:`Geology, weaponized.`,rarity:`common`,pattern:`lob`,baseDamage:26,fireRateMs:1100,projectileSpeed:6,radius:1.4,range:7,maxLevel:8,perLevel:rp,params:{arcHeightM:2.5},unlockedFromStart:!0},harpoon:{id:`harpoon`,name:`Harpoon`,desc:`Catch and release. Mostly catch.`,rarity:`common`,pattern:`pierceLine`,baseDamage:15,fireRateMs:650,projectileCount:1,projectileSpeed:12,range:9,knockback:2,maxLevel:8,perLevel:rp,perLevelExtra:{range:.3},unlockedFromStart:!0},windBlades:{id:`windBlades`,name:`Wind Blades`,desc:`What goes around.`,rarity:`common`,pattern:`boomerang`,baseDamage:11,fireRateMs:500,projectileSpeed:10,range:6,radius:.4,maxLevel:8,perLevel:rp,unlockedFromStart:!0},twinSaber:{id:`twinSaber`,name:`Twin Saber`,desc:`Twice the saber, half the mercy.`,rarity:`common`,pattern:`meleeArc`,baseDamage:10,fireRateMs:450,projectileCount:2,range:1.6,radius:.9,maxLevel:8,perLevel:rp,unlockedFromStart:!0},cometStaff:{id:`cometStaff`,name:`Comet Staff`,desc:`Ask and the sky answers. Slowly.`,rarity:`rare`,pattern:`meteor`,baseDamage:56,fireRateMs:1800,radius:1.6,range:8,durationMs:800,maxLevel:8,perLevel:rp,perLevelExtra:{radius:.08},params:{telegraphMs:500},unlockedFromStart:!1},teslaRing:{id:`teslaRing`,name:`Tesla Ring`,desc:`Static cling, weaponized.`,rarity:`uncommon`,pattern:`chain`,baseDamage:16,fireRateMs:700,range:5,projectileCount:3,maxLevel:8,perLevel:rp,perLevelExtra:{projectileCount:.5,range:.2},params:{chainFalloffPct:.15},unlockedFromStart:!1},frostFan:{id:`frostFan`,name:`Frost Fan`,desc:`Cools things down. Permanently, if you're lucky.`,rarity:`uncommon`,pattern:`cone`,baseDamage:8,fireRateMs:400,tickRateMs:400,range:4,maxLevel:8,perLevel:rp,params:{coneAngleDeg:60,slowPct:.3},unlockedFromStart:!0},emberTrail:{id:`emberTrail`,name:`Ember Trail`,desc:`Leaves a mess. The mess is on fire.`,rarity:`uncommon`,pattern:`trail`,baseDamage:7,fireRateMs:0,tickRateMs:250,durationMs:3e3,radius:.6,maxLevel:8,perLevel:rp,unlockedFromStart:!0},thornAura:{id:`thornAura`,name:`Thorn Aura`,desc:`Personal space, enforced.`,rarity:`uncommon`,pattern:`aura`,baseDamage:7,fireRateMs:0,tickRateMs:300,radius:1.5,maxLevel:8,perLevel:rp,unlockedFromStart:!0},ricochetOrb:{id:`ricochetOrb`,name:`Ricochet Orb`,desc:`Bounces until it finds a reason to stop.`,rarity:`rare`,pattern:`ricochet`,baseDamage:20,fireRateMs:750,projectileSpeed:8,range:10,projectileCount:4,maxLevel:8,perLevel:rp,perLevelExtra:{projectileCount:.5},params:{bounceSearchRadiusM:6},unlockedFromStart:!1},beamPrism:{id:`beamPrism`,name:`Beam Prism`,desc:`Stares until something gives.`,rarity:`epic`,pattern:`beam`,baseDamage:8,fireRateMs:0,tickRateMs:250,range:6,maxLevel:8,perLevel:rp,perLevelExtra:{range:.2},params:{rampTimeMs:2e3,rampMaxMult:2.5,beamWidthDeg:12,idleRotDegPerSec:140},unlockedFromStart:!1},quakeBoots:{id:`quakeBoots`,name:`Quake Boots`,desc:`Every landing is a personal earthquake.`,rarity:`rare`,pattern:`landingShockwave`,baseDamage:26,fireRateMs:700,radius:2,knockback:5,maxLevel:8,perLevel:rp,perLevelExtra:{radius:.15,knockback:.4},params:{minFallHeightM:1.5,fallDamageScalePerM:.15},unlockedFromStart:!1},boomstick:{id:`boomstick`,name:`Boomstick`,desc:`Subtle it is not.`,rarity:`common`,pattern:`burstNearest`,baseDamage:22,fireRateMs:1e3,projectileCount:5,range:5,maxLevel:8,perLevel:rp,perLevelExtra:{projectileCount:.5},params:{spreadDeg:30},unlockedFromStart:!0},swarmHive:{id:`swarmHive`,name:`Swarm Hive`,desc:`They do the stinging so you don't have to.`,rarity:`epic`,pattern:`petUnits`,baseDamage:6,fireRateMs:0,tickRateMs:450,projectileCount:3,range:4,durationMs:0,maxLevel:8,perLevel:rp,perLevelExtra:{projectileCount:.34},params:{beeSpeedMps:6,beeContactR:.55},unlockedFromStart:!1},anvilRain:{id:`anvilRain`,name:`Anvil Rain`,desc:`Physics has opinions about where you stand.`,rarity:`rare`,pattern:`randomAoE`,baseDamage:36,fireRateMs:1400,radius:1.3,range:6,durationMs:500,maxLevel:8,perLevel:rp,perLevelExtra:{radius:.05},params:{telegraphMs:400},unlockedFromStart:!1},voidSiphon:{id:`voidSiphon`,name:`Void Siphon`,desc:`Everything's invited. Nothing leaves.`,rarity:`rare`,pattern:`blackHole`,baseDamage:10,fireRateMs:0,tickRateMs:350,radius:2.2,range:7,durationMs:2500,maxLevel:8,perLevel:rp,perLevelExtra:{radius:.1},params:{pullForceMps:3},unlockedFromStart:!1},encore:{id:`encore`,name:`Encore`,desc:`It's you, but it already left.`,rarity:`legendary`,pattern:`pathEcho`,baseDamage:11,fireRateMs:0,tickRateMs:300,radius:1.8,maxLevel:8,perLevel:{damagePct:.05,fireRateFactor:.96,sizePct:0},perLevelExtra:{radius:.1},params:{delayBaseMs:1200,delayTightenPerLvlMs:40,delayMinMs:900,restGateRadius:2,secondGhostAtLevel:7,secondGhostDelayMult:2},unlockedFromStart:!1},megawhomp:{id:`megawhomp`,name:`MEGAWHOMP`,desc:`The hammer got a promotion.`,rarity:`legendary`,pattern:`orbit`,baseDamage:86,fireRateMs:1e3,projectileCount:1,projectileSpeed:3,radius:3,knockback:8,maxLevel:1,perLevel:ip,params:{shockwaveRadiusM:4},unlockedFromStart:!1,evolved:!0},stormcage:{id:`stormcage`,name:`Stormcage`,desc:`The ring became a room.`,rarity:`legendary`,pattern:`aura`,baseDamage:29,fireRateMs:0,tickRateMs:300,radius:2.5,projectileCount:4,maxLevel:1,perLevel:ip,params:{chainFalloffPct:.05},unlockedFromStart:!1,evolved:!0},wildfire:{id:`wildfire`,name:`Wildfire`,desc:`Ember Trail stopped asking permission.`,rarity:`legendary`,pattern:`trail`,baseDamage:28,fireRateMs:0,tickRateMs:250,durationMs:5e3,radius:1.2,maxLevel:1,perLevel:ip,params:{spreadChancePct:.25},unlockedFromStart:!1,evolved:!0},blizzard:{id:`blizzard`,name:`Blizzard`,desc:`The fan grew teeth and started orbiting.`,rarity:`legendary`,pattern:`orbit`,baseDamage:44,fireRateMs:500,projectileCount:3,projectileSpeed:4,radius:1.8,maxLevel:1,perLevel:ip,params:{slowPct:.45},unlockedFromStart:!1,evolved:!0},eventHorizon:{id:`eventHorizon`,name:`Event Horizon`,desc:`It used to stay where you put it.`,rarity:`legendary`,pattern:`blackHole`,baseDamage:36,fireRateMs:0,tickRateMs:300,radius:3,range:10,durationMs:4e3,maxLevel:1,perLevel:ip,params:{pullForceMps:6,roamSpeedMps:1.5},unlockedFromStart:!1,evolved:!0},poltergeistSwarm:{id:`poltergeistSwarm`,name:`Poltergeist Swarm`,desc:`Spirit Bolts learned to multiply.`,rarity:`legendary`,pattern:`homing`,baseDamage:37,fireRateMs:500,projectileCount:3,projectileSpeed:10,range:9,maxLevel:1,perLevel:ip,params:{splitCount:2},unlockedFromStart:!1,evolved:!0},meteorBoots:{id:`meteorBoots`,name:`Meteor Boots`,desc:`Every step is now a small apology to the ground.`,rarity:`legendary`,pattern:`landingShockwave`,baseDamage:95,fireRateMs:600,radius:3,knockback:9,maxLevel:1,perLevel:ip,params:{minFallHeightM:0,fallDamageScalePerM:.15},unlockedFromStart:!1,evolved:!0},sunlance:{id:`sunlance`,name:`Sunlance`,desc:`Beam Prism stopped blinking.`,rarity:`legendary`,pattern:`beam`,baseDamage:28,fireRateMs:0,tickRateMs:200,range:9,maxLevel:1,perLevel:ip,params:{rampTimeMs:1500,rampMaxMult:3,beamWidthDeg:16,idleRotDegPerSec:120},unlockedFromStart:!1,evolved:!0}},op=Math.PI/180,sp=Math.PI*2,cp=1.5,lp=.9,up=3e3,dp=.7,fp=Math.PI*.9,pp=320,mp=14,hp=6,gp=1200,_p=400,vp=16,yp=6,bp=.55,xp=12,Sp=140,Cp=.15,wp=48,Tp=24,Ep=8,Dp=8,Op=140,kp=class{slowMult;remainMs;constructor(e){this.slowMult=new Float32Array(e).fill(1),this.remainMs=new Float32Array(e)}apply(e,t,n){(this.remainMs[e]<=0||t<this.slowMult[e])&&(this.slowMult[e]=t),n>this.remainMs[e]&&(this.remainMs[e]=n)}tick(e){let t=this.remainMs,n=this.slowMult;for(let r=0;r<t.length;r++)t[r]>0&&(t[r]-=e,t[r]<=0&&(t[r]=0,n[r]=1))}},Ap=class{speedDebuff;encoreGhosts=[{x:0,z:0,active:!1},{x:0,z:0,active:!1}];delayedBlasts=new np;render={bees:{x:new Float32Array(wp),z:new Float32Array(wp),count:0},arcs:{x0:new Float32Array(Tp),z0:new Float32Array(Tp),x1:new Float32Array(Tp),z1:new Float32Array(Tp),ageMs:new Float32Array(Tp)},wells:{x:new Float32Array(Ep),z:new Float32Array(Ep),radius:new Float32Array(Ep),life:new Float32Array(Ep),count:0},beams:{x:new Float32Array(Dp),z:new Float32Array(Dp),angle:new Float32Array(Dp),length:new Float32Array(Dp),heat:new Float32Array(Dp),count:0}};arcHead=0;pendingLandFall=-1;owned=[];byId=new Map;rng;scratch;chainHits=new Int32Array(64);chainHitN=0;ps;aimPt={x:0,z:0,lep:!1};constructor(e,t=Math.random){this.speedDebuff=new kp(e),this.rng=t,this.scratch=new Uint32Array(e),this.ps={behavior:0,x:0,y:0,z:0,vx:0,vz:0,radius:0,damage:0,knockback:0,crit:!1,pierce:0,ttlMs:0,rangeM:0,tgtX:0,tgtZ:0,aoeRadius:0,arcMs:0,arcH:0,rarity:0}}notifyLanded(e){e>this.pendingLandFall&&(this.pendingLandFall=e)}list(){return this.owned.map(e=>({id:e.def.id,level:e.level}))}levelOf(e){return this.byId.get(e)?.level??0}addWeapon(e){if(this.byId.get(e))return this.levelUp(e);let t=ap[e];if(!t)return 0;let n={def:t,level:1,cdLeft:0,orbAngle:0,orbCd:new Float32Array(32),sweepMs:0,sweepFrom:0,sweepDir:1,hitSet:new Int32Array(256),hitN:0,trailAcc:0,lastX:0,lastZ:0,primed:!1,shotCount:0,echoHead:0,echoCount:0,beamAngle:0,lockSlot:-1,lockMs:0,wellX:0,wellZ:0,wellLifeMs:0,wellActive:!1,beePrimed:!1};return t.pattern===`pathEcho`&&this.allocEcho(n),t.pattern===`petUnits`&&this.allocPets(n),this.owned.push(n),this.byId.set(e,n),1}levelUp(e){let t=this.byId.get(e);return t?(t.level<t.def.maxLevel&&t.level++,t.level):0}evolve(e,t){let n=this.byId.get(e);if(!n)return!1;let r=ap[t];return r?(this.byId.delete(e),n.def=r,n.level=1,n.cdLeft=0,n.shotCount=0,n.lockSlot=-1,n.lockMs=0,n.wellActive=!1,r.pattern===`pathEcho`&&!n.echoX&&this.allocEcho(n),r.pattern===`petUnits`&&!n.beeX&&this.allocPets(n),this.byId.set(t,n),!0):!1}allocEcho(e){e.echoX=new Float32Array(_p),e.echoY=new Float32Array(_p),e.echoZ=new Float32Array(_p),e.echoHead=0,e.echoCount=0}allocPets(e){e.beeX=new Float32Array(vp),e.beeZ=new Float32Array(vp),e.beeCd=new Float32Array(vp),e.beePrimed=!1}update(e,t){let n=e*1e3;this.speedDebuff.tick(n),this.beginRenderFrame(n);for(let r=0;r<this.owned.length;r++)this.dispatch(this.owned[r],e,n,t);this.delayedBlasts.update(e,t.combat),this.pendingLandFall=-1}beginRenderFrame(e){this.render.bees.count=0,this.render.wells.count=0,this.render.beams.count=0;let t=this.render.arcs.ageMs;for(let n=0;n<t.length;n++)t[n]>0&&(t[n]-=e)}damageOf(e,t,n){let r=e.def.baseDamage*(1+e.def.perLevel.damagePct)**(e.level-1)*t.might;return n?r*t.critMult:r}cadenceOf(e,t){let n=(e.def.fireRateMs>0?e.def.fireRateMs:e.def.tickRateMs??250)*e.def.perLevel.fireRateFactor**(e.level-1)/Math.max(.01,t.attackSpeed);return Math.max(16,n)}sizeMul(e,t){return(1+e.def.perLevel.sizePct)**(e.level-1)*t.area}radiusOf(e,t){let n=(e.def.perLevelExtra?.radius??0)*(e.level-1);return((e.def.radius??0)+n)*this.sizeMul(e,t)}rangeOf(e,t){let n=(e.def.perLevelExtra?.range??0)*(e.level-1);return((e.def.range??0)+n)*this.sizeMul(e,t)}knockOf(e){return(e.def.knockback??0)+(e.def.perLevelExtra?.knockback??0)*(e.level-1)}countOf(e){return(e.def.projectileCount??1)+Math.floor((e.def.perLevelExtra?.projectileCount??0)*(e.level-1))}crit(e){return this.rng()<e.critChance}rarityIndex(e){switch(e.def.rarity){case`uncommon`:return 1;case`rare`:return 2;case`epic`:return 3;case`legendary`:return 4;default:return 0}}nearest(e,t,n,r){let i=r.arrays,a=r.hash.queryCircle(e,t,n,this.scratch),o=-1,s=1/0;for(let n=0;n<a;n++){let r=this.scratch[n];if(i.state[r]!==2)continue;let a=i.posX[r]-e,c=i.posZ[r]-t,l=a*a+c*c;l<s&&(s=l,o=r)}return o}resolveAim(e,t,n,r,i,a,o){e.shotCount++;let s=o.leprechaun,c=this.aimPt;if(s&&s.active&&e.shotCount%3==0){c.x=s.x,c.z=s.z,c.lep=!0;return}let l=this.nearest(t,n,r,o);l>=0?(c.x=o.arrays.posX[l],c.z=o.arrays.posZ[l]):(c.x=t+i*r,c.z=n+a*r),c.lep=!1}hitLep(e,t,n){let r=n.leprechaun;if(!r)return;let i=this.crit(t);r.damage(this.damageOf(e,t,i),i)}dispatch(e,t,n,r){switch(e.def.pattern){case`orbit`:this.updateOrbit(e,t,n,r);break;case`homing`:this.cooldownFire(e,n,r,this.fireHoming);break;case`lob`:this.cooldownFire(e,n,r,this.fireLob);break;case`pierceLine`:this.cooldownFire(e,n,r,this.firePierce);break;case`boomerang`:this.cooldownFire(e,n,r,this.fireBoomerang);break;case`burstNearest`:this.cooldownFire(e,n,r,this.fireBurst);break;case`meleeArc`:this.updateMelee(e,n,r);break;case`cone`:this.cooldownFire(e,n,r,this.doCone);break;case`aura`:this.cooldownFire(e,n,r,this.doAura);break;case`trail`:this.updateTrail(e,r);break;case`pathEcho`:this.updateEncore(e,n,r);break;case`meteor`:this.cooldownFire(e,n,r,this.fireMeteor);break;case`randomAoE`:this.cooldownFire(e,n,r,this.fireAnvil);break;case`chain`:this.cooldownFire(e,n,r,this.fireChain);break;case`ricochet`:this.cooldownFire(e,n,r,this.fireRicochet);break;case`beam`:this.updateBeam(e,t,n,r);break;case`blackHole`:this.updateBlackHole(e,t,n,r);break;case`petUnits`:this.updatePets(e,t,n,r);break;case`landingShockwave`:this.updateLandingShockwave(e,n,r);break;default:break}}cooldownFire(e,t,n,r){e.cdLeft-=t;let i=0;for(;e.cdLeft<=0&&i++<8;)r.call(this,e,n),e.cdLeft+=this.cadenceOf(e,n.stats)}fireHoming(e,t){let n=t.player,r=t.stats,i=this.countOf(e),a=this.rangeOf(e,r)||8,o=e.def.projectileSpeed??8,s=.35*this.sizeMul(e,r),c=Math.sin(t.aimYaw),l=Math.cos(t.aimYaw);this.resolveAim(e,n.x,n.z,a,c,l,t);let u=this.aimPt.x-n.x,d=this.aimPt.z-n.z,f=Math.hypot(u,d)||1;u/=f,d/=f;let p=Math.atan2(d,u);for(let c=0;c<i;c++){let l=p+(i>1?(c/(i-1)-.5)*40*op:0),u=this.crit(r);this.fill(e,1,n.x,n.y+lp,n.z,Math.cos(l)*o,Math.sin(l)*o,s,this.damageOf(e,r,u),this.knockOf(e),u,0,up,a),t.projectiles.spawn(this.ps)}this.aimPt.lep&&this.hitLep(e,r,t)}firePierce(e,t){let n=t.player,r=t.stats,i=this.rangeOf(e,r)||8,a=e.def.projectileSpeed??10,o=.3*this.sizeMul(e,r),s=Math.sin(t.aimYaw),c=Math.cos(t.aimYaw);this.resolveAim(e,n.x,n.z,i,s,c,t);let l=this.aimPt.x-n.x,u=this.aimPt.z-n.z,d=Math.hypot(l,u)||1;l/=d,u/=d;let f=this.crit(r),p=i/a*1e3;this.fill(e,0,n.x,n.y+lp,n.z,l*a,u*a,o,this.damageOf(e,r,f),this.knockOf(e),f,9999,p,0),t.projectiles.spawn(this.ps),this.aimPt.lep&&this.hitLep(e,r,t)}fireLob(e,t){let n=t.player,r=t.stats,i=this.rangeOf(e,r)||7,a=e.def.projectileSpeed??6,o=Math.sin(t.aimYaw),s=Math.cos(t.aimYaw);this.resolveAim(e,n.x,n.z,i,o,s,t);let c=this.aimPt.x,l=this.aimPt.z,u=c-n.x,d=l-n.z,f=Math.max(150,(Math.hypot(u,d)||.01)/a*1e3),p=f/1e3,m=this.crit(r),h=this.ps;h.behavior=2,h.x=n.x,h.y=n.y,h.z=n.z,h.vx=u/p,h.vz=d/p,h.radius=.4*this.sizeMul(e,r),h.damage=this.damageOf(e,r,m),h.knockback=this.knockOf(e),h.crit=m,h.pierce=0,h.ttlMs=f+100,h.rangeM=0,h.tgtX=c,h.tgtZ=l,h.aoeRadius=this.radiusOf(e,r),h.arcMs=f,h.arcH=(e.def.params?.arcHeightM??2.5)*this.sizeMul(e,r),h.rarity=this.rarityIndex(e),t.projectiles.spawn(h),this.aimPt.lep&&this.hitLep(e,r,t)}fireBoomerang(e,t){let n=t.player,r=t.stats,i=this.rangeOf(e,r)||6,a=e.def.projectileSpeed??10,o=(e.def.radius??.4)*this.sizeMul(e,r),s=Math.sin(t.aimYaw),c=Math.cos(t.aimYaw);this.resolveAim(e,n.x,n.z,i,s,c,t);let l=this.aimPt.x-n.x,u=this.aimPt.z-n.z,d=Math.hypot(l,u)||1;l/=d,u/=d;let f=this.crit(r),p=this.ps;p.behavior=3,p.x=n.x,p.y=n.y+lp,p.z=n.z,p.vx=l*a,p.vz=u*a,p.radius=o,p.damage=this.damageOf(e,r,f),p.knockback=this.knockOf(e),p.crit=f,p.pierce=9999,p.ttlMs=i/a*1e3*3+500,p.rangeM=i,p.tgtX=n.x,p.tgtZ=n.z,p.aoeRadius=0,p.arcMs=0,p.arcH=0,p.rarity=this.rarityIndex(e),t.projectiles.spawn(p),this.aimPt.lep&&this.hitLep(e,r,t)}fireBurst(e,t){let n=t.player,r=t.stats,i=this.countOf(e),a=(e.def.params?.spreadDeg??30)*op,o=this.rangeOf(e,r)||5,s=.25*this.sizeMul(e,r),c=this.knockOf(e)||hp,l=o/mp*1e3,u=Math.sin(t.aimYaw),d=Math.cos(t.aimYaw);this.resolveAim(e,n.x,n.z,o,u,d,t);let f=Math.atan2(this.aimPt.z-n.z,this.aimPt.x-n.x);for(let o=0;o<i;o++){let u=f+(i>1?(o/(i-1)-.5)*a:0),d=this.crit(r),p=this.ps;p.behavior=0,p.x=n.x,p.y=n.y+lp,p.z=n.z,p.vx=Math.cos(u)*mp,p.vz=Math.sin(u)*mp,p.radius=s,p.damage=this.damageOf(e,r,d),p.knockback=c,p.crit=d,p.pierce=0,p.ttlMs=l,p.rangeM=0,p.tgtX=0,p.tgtZ=0,p.aoeRadius=0,p.arcMs=0,p.arcH=0,p.rarity=this.rarityIndex(e),t.projectiles.spawn(p)}this.aimPt.lep&&this.hitLep(e,r,t)}fill(e,t,n,r,i,a,o,s,c,l,u,d,f,p){let m=this.ps;m.behavior=t,m.x=n,m.y=r,m.z=i,m.vx=a,m.vz=o,m.radius=s,m.damage=c,m.knockback=l,m.crit=u,m.pierce=d,m.ttlMs=f,m.rangeM=p,m.tgtX=0,m.tgtZ=0,m.aoeRadius=0,m.arcMs=0,m.arcH=0,m.rarity=this.rarityIndex(e)}updateOrbit(e,t,n,r){let i=r.player,a=r.stats,o=r.arrays,s=this.countOf(e),c=this.radiusOf(e,a)||1.2,l=(e.def.projectileSpeed??3)/Math.max(.1,c);e.orbAngle+=l*t;let u=this.cadenceOf(e,a),d=dp*this.sizeMul(e,a),f=this.knockOf(e);for(let t=0;t<s;t++){e.orbCd[t]-=n;let l=e.orbAngle+t*sp/s,p=i.x+Math.cos(l)*c,m=i.z+Math.sin(l)*c;if(e.orbCd[t]>0)continue;let h=r.hash.queryCircle(p,m,d+cp,this.scratch),g=!1,_=this.crit(a),v=this.damageOf(e,a,_);for(let e=0;e<h;e++){let t=this.scratch[e];if(o.state[t]!==2)continue;let n=o.posX[t]-p,i=o.posZ[t]-m,a=d+o.radius[t],s=n*n+i*i;if(s>a*a)continue;let c=Math.sqrt(s)||1;r.combat.damageEnemy(t,v,_,n/c*f,i/c*f),g=!0}g&&(e.orbCd[t]=u)}}updateMelee(e,t,n){if(e.cdLeft-=t,e.sweepMs<=0&&e.cdLeft<=0&&(e.sweepDir=-e.sweepDir,e.sweepFrom=Math.atan2(Math.cos(n.aimYaw),Math.sin(n.aimYaw)),e.sweepMs=pp,e.hitN=0,e.cdLeft+=this.cadenceOf(e,n.stats)),e.sweepMs<=0)return;let r=e.sweepMs;e.sweepMs-=t;let i=1-r/pp,a=1-Math.max(0,e.sweepMs)/pp,o=jp(i),s=jp(a),c=n.player,l=n.stats,u=n.arrays,d=this.rangeOf(e,l)||1.6,f=fp/2,p=this.knockOf(e),m=e.sweepDir,h=n.hash.queryCircle(c.x,c.z,d+cp,this.scratch);for(let t=0;t<h;t++){let r=this.scratch[t];if(u.state[r]!==2)continue;let i=u.posX[r]-c.x,a=u.posZ[r]-c.z,h=d+u.radius[r],g=i*i+a*a;if(g>h*h)continue;let _=Mp(Math.atan2(a,i),e.sweepFrom);if(Math.abs(_)>f)continue;let v=.5+m*_/(2*f);if(v<=o||v>s||this.inHitSet(e,r))continue;this.addHitSet(e,r);let y=this.crit(l),b=Math.sqrt(g)||1;n.combat.damageEnemy(r,this.damageOf(e,l,y),y,i/b*p,a/b*p)}}doCone(e,t){let n=t.player,r=t.stats,i=t.arrays,a=this.rangeOf(e,r)||4,o=(e.def.params?.coneAngleDeg??60)*op/2,s=Math.atan2(Math.cos(t.aimYaw),Math.sin(t.aimYaw)),c=1-(e.def.params?.slowPct??0);t.surfaces?.freeze(n.x+Math.cos(s)*a*.8,n.z+Math.sin(s)*a*.8,a*Math.sin(o));let l=t.hash.queryCircle(n.x,n.z,a+cp,this.scratch);for(let u=0;u<l;u++){let l=this.scratch[u];if(i.state[l]!==2)continue;let d=i.posX[l]-n.x,f=i.posZ[l]-n.z,p=a+i.radius[l];if(d*d+f*f>p*p||Math.abs(Mp(Math.atan2(f,d),s))>o)continue;let m=this.crit(r);t.combat.damageEnemy(l,this.damageOf(e,r,m),m,0,0),c<1&&this.speedDebuff.apply(l,c,gp)}}doAura(e,t){let n=t.player,r=t.stats,i=this.crit(r),a=this.radiusOf(e,r)||1.5,o=this.damageOf(e,r,i);t.combat.damageCircle(n.x,n.z,a,o,i,this.knockOf(e));let s=t.leprechaun;if(s&&s.active){let e=s.x-n.x,t=s.z-n.z,r=a+s.radius;e*e+t*t<=r*r&&s.damage(o,i)}}updateTrail(e,t){let n=t.player,r=t.stats;if(!e.primed){e.lastX=n.x,e.lastZ=n.z,e.primed=!0;return}let i=Math.hypot(n.x-e.lastX,n.z-e.lastZ);e.lastX=n.x,e.lastZ=n.z,e.trailAcc+=i;let a=this.radiusOf(e,r)||.6,o=Math.max(.4,a*.8),s=this.cadenceOf(e,r),c=e.def.durationMs??3e3,l=this.rarityIndex(e),u=0;for(;e.trailAcc>=o&&u++<8;){e.trailAcc-=o;let i=this.crit(r);t.patches.spawn(n.x,n.z,a,this.damageOf(e,r,i),s,c,i,l),t.surfaces?.ignite(n.x,n.z,a)}}updateEncore(e,t,n){if(!e.echoX||!e.echoY||!e.echoZ)return;let r=n.player,i=n.stats,a=e.echoHead;e.echoX[a]=r.x,e.echoY[a]=r.y,e.echoZ[a]=r.z,e.echoHead=(a+1)%_p,e.echoCount<_p&&e.echoCount++;let o=e.def.params??{},s=o.delayBaseMs??1200,c=o.delayTightenPerLvlMs??40,l=o.delayMinMs??900,u=Math.max(l,s-(e.level-1)*c),d=Math.round(u/t),f=this.encoreGhosts[0],p=this.encoreGhosts[1];e.echoCount>d?(this.readEcho(e,d,f),f.active=!0):f.active=!1;let m=o.secondGhostAtLevel??7;if(e.level>=m){let n=Math.round(u*(o.secondGhostDelayMult??2)/t);e.echoCount>n?(this.readEcho(e,n,p),p.active=!0):p.active=!1}else p.active=!1;let h=o.restGateRadius??2,g=this.radiusOf(e,i)||1.8;e.cdLeft-=t;let _=0;for(;e.cdLeft<=0&&_++<8;)this.fireEncoreAura(e,i,n,f,h,g),p.active&&this.fireEncoreAura(e,i,n,p,h,g),e.cdLeft+=this.cadenceOf(e,i)}readEcho(e,t,n){let r=((e.echoHead-1-t)%_p+_p)%_p;n.x=e.echoX[r],n.z=e.echoZ[r]}fireEncoreAura(e,t,n,r,i,a){if(!r.active)return;let o=n.player,s=r.x-o.x,c=r.z-o.z;if(s*s+c*c<i*i)return;let l=this.crit(t),u=this.damageOf(e,t,l);n.combat.damageCircle(r.x,r.z,a,u,l,0);let d=n.leprechaun;if(d&&d.active){let e=d.x-r.x,t=d.z-r.z,n=a+d.radius;e*e+t*t<=n*n&&d.damage(u,l)}}fireMeteor(e,t){let n=t.player,r=t.stats,i=t.arrays,a=this.rangeOf(e,r)||8,o=t.hash.queryCircle(n.x,n.z,a,this.scratch),s=0,c=0,l=0;for(let e=0;e<o;e++){let t=this.scratch[e];i.state[t]===2&&(l++,this.rng()<1/l&&(s=i.posX[t],c=i.posZ[t]))}l===0&&(s=n.x+Math.sin(t.aimYaw)*a,c=n.z+Math.cos(t.aimYaw)*a),this.dropBlast(e,r,t,s,c)}fireAnvil(e,t){let n=t.player,r=t.stats,i=this.rangeOf(e,r)||6,a=this.rng()*sp,o=Math.sqrt(this.rng())*i;this.dropBlast(e,r,t,n.x+Math.cos(a)*o,n.z+Math.sin(a)*o)}dropBlast(e,t,n,r,i){let a=this.radiusOf(e,t),o=e.def.params?.telegraphMs??e.def.durationMs??500,s=this.crit(t),c=this.rarityIndex(e);n.patches.spawn(r,i,a,0,250,o,!1,c),this.delayedBlasts.spawn(r,i,a,this.damageOf(e,t,s),o,s)}fireChain(e,t){let n=t.player,r=t.stats,i=t.arrays,a=this.countOf(e),o=this.rangeOf(e,r)||5,s=e.def.params?.chainFalloffPct??.15,c=this.crit(r),l=this.damageOf(e,r,c);this.chainHitN=0;let u=n.x,d=n.z,f=n.x,p=n.z;for(let e=0;e<a;e++){let e=this.nearestUnchained(u,d,o,t);if(e<0)break;this.chainHits[this.chainHitN++%this.chainHits.length]=e,t.combat.damageEnemy(e,l,c,0,0),this.pushArc(f,p,i.posX[e],i.posZ[e]),f=i.posX[e],p=i.posZ[e],u=f,d=p,l*=1-s}}nearestUnchained(e,t,n,r){let i=r.arrays,a=r.hash.queryCircle(e,t,n,this.scratch),o=-1,s=1/0;for(let n=0;n<a;n++){let r=this.scratch[n];if(i.state[r]!==2||this.inChain(r))continue;let a=i.posX[r]-e,c=i.posZ[r]-t,l=a*a+c*c;l<s&&(s=l,o=r)}return o}inChain(e){let t=this.chainHitN<this.chainHits.length?this.chainHitN:this.chainHits.length;for(let n=0;n<t;n++)if(this.chainHits[n]===e)return!0;return!1}fireRicochet(e,t){let n=t.player,r=t.stats,i=this.rangeOf(e,r)||10,a=e.def.projectileSpeed??8,o=Math.sin(t.aimYaw),s=Math.cos(t.aimYaw);this.resolveAim(e,n.x,n.z,i,o,s,t);let c=this.aimPt.x-n.x,l=this.aimPt.z-n.z,u=Math.hypot(c,l)||1;c/=u,l/=u;let d=this.crit(r),f=this.ps;f.behavior=4,f.x=n.x,f.y=n.y+lp,f.z=n.z,f.vx=c*a,f.vz=l*a,f.radius=.3*this.sizeMul(e,r),f.damage=this.damageOf(e,r,d),f.knockback=0,f.crit=d,f.pierce=this.countOf(e),f.ttlMs=i/a*1e3+300,f.rangeM=e.def.params?.bounceSearchRadiusM??6,f.tgtX=0,f.tgtZ=0,f.aoeRadius=0,f.arcMs=0,f.arcH=0,f.rarity=this.rarityIndex(e),t.projectiles.spawn(f),this.aimPt.lep&&this.hitLep(e,r,t)}updateBeam(e,t,n,r){let i=r.player,a=r.stats,o=r.arrays,s=this.rangeOf(e,a)||6,c=this.nearest(i.x,i.z,s,r);c>=0?(e.beamAngle=Math.atan2(o.posZ[c]-i.z,o.posX[c]-i.x),c===e.lockSlot?e.lockMs+=n:(e.lockSlot=c,e.lockMs=0)):(e.beamAngle+=(e.def.params?.idleRotDegPerSec??Sp)*op*t,e.lockSlot=-1,e.lockMs=0);let l=(e.def.params?.beamWidthDeg??xp)*op/2;e.cdLeft-=n;let u=0;for(;e.cdLeft<=0&&u++<8;)this.beamTick(e,a,r,s,l),e.cdLeft+=this.cadenceOf(e,a);let d=e.def.params?.rampMaxMult??1,f=d>1?(this.beamRamp(e)-1)/(d-1):0;this.pushBeam(i.x,i.z,e.beamAngle,s,f)}beamTick(e,t,n,r,i){let a=n.player,o=n.arrays,s=this.crit(t),c=this.damageOf(e,t,s),l=this.beamRamp(e),u=n.hash.queryCircle(a.x,a.z,r+cp,this.scratch);for(let t=0;t<u;t++){let u=this.scratch[t];if(o.state[u]!==2)continue;let d=o.posX[u]-a.x,f=o.posZ[u]-a.z,p=r+o.radius[u];d*d+f*f>p*p||Math.abs(Mp(Math.atan2(f,d),e.beamAngle))>i||n.combat.damageEnemy(u,u===e.lockSlot?c*l:c,s,0,0)}let d=n.leprechaun;if(d&&d.active){let t=d.x-a.x,n=d.z-a.z,o=r+d.radius;t*t+n*n<=o*o&&Math.abs(Mp(Math.atan2(n,t),e.beamAngle))<=i&&d.damage(c,s)}}beamRamp(e){let t=e.def.params?.rampMaxMult??1;if(t<=1)return 1;let n=e.def.params?.rampTimeMs??2e3,r=Math.min(1,e.lockMs/n);return 1+(t-1)*r**1.8}updateBlackHole(e,t,n,r){let i=r.player,a=r.stats,o=r.arrays,s=e.def.durationMs??2500;if(!e.wellActive){let t=this.rangeOf(e,a)||7,n=this.nearest(i.x,i.z,t,r);n>=0?(e.wellX=o.posX[n],e.wellZ=o.posZ[n]):(e.wellX=i.x+Math.sin(r.aimYaw)*t,e.wellZ=i.z+Math.cos(r.aimYaw)*t),e.wellLifeMs=s,e.wellActive=!0}let c=this.radiusOf(e,a)||2.2,l=e.def.params?.roamSpeedMps??0;if(l>0){let n=this.nearest(e.wellX,e.wellZ,c*3,r);if(n>=0){let r=o.posX[n]-e.wellX,i=o.posZ[n]-e.wellZ,a=Math.hypot(r,i)||1,s=Math.min(a,l*t);e.wellX+=r/a*s,e.wellZ+=i/a*s}}let u=e.def.params?.pullForceMps??3,d=r.hash.queryCircle(e.wellX,e.wellZ,c,this.scratch);for(let t=0;t<d;t++){let n=this.scratch[t];if(o.state[n]!==2)continue;let r=e.wellX-o.posX[n],i=e.wellZ-o.posZ[n],a=Math.hypot(r,i);a>.05&&(o.velX[n]=r/a*u,o.velZ[n]=i/a*u)}e.cdLeft-=n;let f=0;for(;e.cdLeft<=0&&f++<8;){let t=this.crit(a),n=this.damageOf(e,a,t);r.combat.damageCircle(e.wellX,e.wellZ,c,n,t,0);let i=r.leprechaun;if(i&&i.active){let r=i.x-e.wellX,a=i.z-e.wellZ,o=c+i.radius;r*r+a*a<=o*o&&i.damage(n,t)}e.cdLeft+=this.cadenceOf(e,a)}e.wellLifeMs-=n,e.wellLifeMs<=0?e.wellActive=!1:this.pushWell(e.wellX,e.wellZ,c,e.wellLifeMs/s)}updatePets(e,t,n,r){if(!e.beeX||!e.beeZ||!e.beeCd)return;let i=r.player,a=r.stats,o=r.arrays,s=Math.min(vp,this.countOf(e)),c=this.rangeOf(e,a)||4,l=e.def.params?.beeSpeedMps??yp,u=(e.def.params?.beeContactR??bp)*this.sizeMul(e,a),d=this.cadenceOf(e,a),f=c*1.6;if(!e.beePrimed){for(let t=0;t<vp;t++){let n=t/vp*sp;e.beeX[t]=i.x+Math.cos(n)*1.5,e.beeZ[t]=i.z+Math.sin(n)*1.5,e.beeCd[t]=0}e.beePrimed=!0}for(let p=0;p<s;p++){e.beeCd[p]>0&&(e.beeCd[p]-=n);let s=e.beeX[p],m=e.beeZ[p],h=this.nearest(s,m,c,r),g=h>=0?o.posX[h]:i.x,_=h>=0?o.posZ[h]:i.z,v=g-s,y=_-m,b=Math.hypot(v,y);if(b>.001){let e=Math.min(b,l*t);s+=v/b*e,m+=y/b*e}let x=s-i.x,S=m-i.z,C=Math.hypot(x,S);if(C>f&&(s=i.x+x/C*f,m=i.z+S/C*f),e.beeX[p]=s,e.beeZ[p]=m,e.beeCd[p]<=0&&h>=0){let t=o.posX[h]-s,n=o.posZ[h]-m,i=u+o.radius[h];if(t*t+n*n<=i*i){let t=this.crit(a);r.combat.damageEnemy(h,this.damageOf(e,a,t),t,0,0),e.beeCd[p]=d}}let w=r.leprechaun;if(w&&w.active&&e.beeCd[p]<=0){let t=w.x-s,n=w.z-m,r=u+w.radius;if(t*t+n*n<=r*r){let t=this.crit(a);w.damage(this.damageOf(e,a,t),t),e.beeCd[p]=d}}this.pushBee(s,m)}}updateLandingShockwave(e,t,n){e.cdLeft>0&&(e.cdLeft-=t,e.cdLeft<0&&(e.cdLeft=0));let r=this.pendingLandFall;if(r<0)return;let i=e.def.params?.minFallHeightM??1.5;if(r<i||e.cdLeft>0)return;let a=n.player,o=n.stats,s=1+Math.max(0,r-i)*(e.def.params?.fallDamageScalePerM??Cp),c=this.crit(o),l=this.damageOf(e,o,c)*s,u=this.radiusOf(e,o)||2;n.combat.damageCircle(a.x,a.z,u,l,c,this.knockOf(e));let d=n.leprechaun;if(d&&d.active){let e=d.x-a.x,t=d.z-a.z,n=u+d.radius;e*e+t*t<=n*n&&d.damage(l,c)}n.patches.spawn(a.x,a.z,u,0,250,220,!1,this.rarityIndex(e)),e.cdLeft=this.cadenceOf(e,o)}pushBee(e,t){let n=this.render.bees;n.count>=n.x.length||(n.x[n.count]=e,n.z[n.count]=t,n.count++)}pushWell(e,t,n,r){let i=this.render.wells;if(i.count>=i.x.length)return;let a=i.count++;i.x[a]=e,i.z[a]=t,i.radius[a]=n,i.life[a]=r}pushBeam(e,t,n,r,i){let a=this.render.beams;if(a.count>=a.x.length)return;let o=a.count++;a.x[o]=e,a.z[o]=t,a.angle[o]=n,a.length[o]=r,a.heat[o]=i}pushArc(e,t,n,r){let i=this.render.arcs,a=this.arcHead;this.arcHead=(a+1)%i.x0.length,i.x0[a]=e,i.z0[a]=t,i.x1[a]=n,i.z1[a]=r,i.ageMs[a]=Op}inHitSet(e,t){let n=e.hitN<e.hitSet.length?e.hitN:e.hitSet.length;for(let r=0;r<n;r++)if(e.hitSet[r]===t)return!0;return!1}addHitSet(e,t){e.hitN<e.hitSet.length&&(e.hitSet[e.hitN]=t),e.hitN++}};function jp(e){return e<.5?4*e*e*e:1-(-2*e+2)**3/2}function Mp(e,t){return Math.atan2(Math.sin(e-t),Math.cos(e-t))}var Np={hpPer25s:.09,damagePer30s:.07,speedPer50s:.05,xpPer120s:.5},Pp={blob:{id:`blob`,name:`Blob`,tier:`basic`,behavior:`chaser`,radius:.5,speed:4.6,hp:10,damage:11,xp:3,faceStyle:`plain`},sprinter:{id:`sprinter`,name:`Sprinter`,tier:`basic`,behavior:`fast`,radius:.4,speed:5,hp:7,damage:8,xp:3,faceStyle:`happy`},chonker:{id:`chonker`,name:`Chonker`,tier:`basic`,behavior:`tank`,radius:.9,speed:3.2,hp:38,damage:17,xp:7,faceStyle:`serious`},mite:{id:`mite`,name:`Mite`,tier:`basic`,behavior:`swarm`,radius:.3,speed:4.8,hp:4,damage:5,xp:3,faceStyle:`mischief`},popper:{id:`popper`,name:`Popper`,tier:`basic`,behavior:`exploder`,radius:.4,speed:4.4,hp:5,damage:6,xp:4,faceStyle:`angry`,params:{telegraphMs:500,explodeRadius:1.8,explodeDamage:30}},spitter:{id:`spitter`,name:`Spitter`,tier:`special`,behavior:`spitter`,radius:.55,speed:3,hp:22,damage:12,xp:4,faceStyle:`serious`,params:{standoffMinM:13,standoffMaxM:17,swellMs:700,globCap:6,globSpeed:6,globDamage:16}},charger:{id:`charger`,name:`Charger`,tier:`special`,behavior:`charger`,radius:.6,speed:3.2,hp:30,damage:18,xp:5,faceStyle:`angry`,params:{telegraphMs:650,lungeMult:3,commitDistanceM:1,lineWidthM:.4}},splitter:{id:`splitter`,name:`Splitter`,tier:`special`,behavior:`splitter`,radius:.65,speed:2.2,hp:28,damage:14,xp:4,faceStyle:`mischief`,params:{childHpMult:.6,childDamageMult:.6,childSpeedMult:1},onDeath:{split:{kindId:`splitterMite`,count:2}}},splitterMite:{id:`splitterMite`,name:`Splitter Mite`,tier:`special`,behavior:`chaser`,radius:.4,speed:2.4,hp:17,damage:8,xp:2,faceStyle:`mischief`},wraith:{id:`wraith`,name:`Wraith`,tier:`special`,behavior:`wraith`,radius:.5,speed:2.6,hp:26,damage:16,xp:5,faceStyle:`plain`,params:{cycleMs:2400,intangibleMs:1200,shimmerMs:400,vulnerableMs:800,lungeMult:2.2,lungeCommitDistanceM:1}},sniper:{id:`sniper`,name:`Sniper`,tier:`special`,behavior:`sniper`,radius:.5,speed:1.8,hp:20,damage:22,xp:5,faceStyle:`serious`,params:{holdRangeM:21,aimLockMs:1400,globalAimCap:2,orbSpeed:5,slowPct:40}},wisp:{id:`wisp`,name:`Wisp`,tier:`special`,behavior:`strafer`,radius:.4,speed:3.5,hp:16,damage:8,xp:3,faceStyle:`happy`,params:{strafeRadiusM:15,burstCount:3,burstIntervalMs:180,boltSpeed:9,volleyCooldownMs:1800}},bruiser:{id:`bruiser`,name:`Bruiser`,tier:`miniboss`,behavior:`tank`,radius:1.8,speed:4,hp:440,damage:25,xp:60,faceStyle:`angry`,params:{hpPerBossKill:110,hpScalePct:.2,hpScalePeriodSec:75,dmgScalePct:.2,dmgScalePeriodSec:75,speedScalePct:.08,speedScalePeriodSec:150,minionSpawnMs:5e3,minionCountMin:3,minionCountMax:5,minionSpawnRadiusM:3}},warden:{id:`warden`,name:`Warden`,tier:`miniboss`,behavior:`charger`,radius:2.8,speed:2.5,hp:805,damage:40,xp:90,faceStyle:`angry`,params:{hpPerBossKill:161,hpScalePct:.25,hpScalePeriodSec:75,dmgScalePct:.25,dmgScalePeriodSec:75,speedScalePct:.1,speedScalePeriodSec:180,contactDamage:35,chargeSpeedMps:24,commitDistanceM:1,shockwaveRadiusM:5,shockwaveKnockbackM:4,phase2HpPct:66,phase3HpPct:33,chargeAttackChancePct:30,minionAttackChancePct:30,ringAttackChancePct:40,attackCooldownPhase1Ms:4500,attackCooldownPhase2Ms:3500,attackCooldownPhase3Ms:2500}},thistlemaw:{id:`thistlemaw`,name:`Thistlemaw`,tier:`boss`,behavior:`charger`,radius:2.5,speed:1.6,hp:13e3,damage:45,xp:400,faceStyle:`serious`,params:{telegraphMs:900,rootWaveRadiusM:8,rootWaveSpeed:6,rootDamage:35,rootSlowPct:70,rootDurationMs:2e3,phase2HpPct:66,phase3HpPct:33}},ramhorn:{id:`ramhorn`,name:`Ramhorn`,tier:`boss`,behavior:`charger`,radius:3,speed:3.4,hp:42e3,damage:55,xp:900,faceStyle:`angry`,params:{telegraphMs:700,chargeSpeedMps:26,commitDistanceM:1.5,shockwaveRadiusM:6,shockwaveKnockbackM:5,phase2HpPct:66,phase3HpPct:33}},kingbloom:{id:`kingbloom`,name:`King Bloom`,tier:`boss`,behavior:`spitter`,radius:3.5,speed:1.5,hp:96e3,damage:65,xp:1800,faceStyle:`happy`,params:{telegraphMs:800,petalCount:12,petalSpeed:7,petalDamage:30,barrageCooldownMs:3500,phase2HpPct:66,phase3HpPct:33}},tidebound:{id:`tidebound`,name:`Tidebound Colossus`,tier:`boss`,behavior:`tank`,radius:2.5,speed:1.4,hp:13500,damage:45,xp:450,faceStyle:`serious`,params:{telegraphMs:850,slamRadiusM:7,slamDamage:40,slamKnockbackM:6,slamCooldownMs:4e3,phase2HpPct:66,phase3HpPct:33}},oilfather:{id:`oilfather`,name:`Oilfather`,tier:`boss`,behavior:`spitter`,radius:3,speed:1.7,hp:43e3,damage:55,xp:950,faceStyle:`angry`,params:{telegraphMs:750,poolCount:4,poolRadiusM:3,poolDamagePerTick:8,poolTickMs:500,igniteDelayMs:1200,phase2HpPct:66,phase3HpPct:33}},archivist:{id:`archivist`,name:`The Archivist`,tier:`boss`,behavior:`sniper`,radius:3.5,speed:1.3,hp:99e3,damage:65,xp:1900,faceStyle:`plain`,params:{telegraphMs:1e3,beamCount:3,beamLockMs:1200,beamDamagePerTick:12,beamTickMs:200,beamDurationMs:1800,phase2HpPct:66,phase3HpPct:33}},leprechaun:{id:`leprechaun`,name:`Leprechaun`,tier:`special`,behavior:`fast`,radius:.8,speed:6.5,hp:190,damage:10,xp:15,faceStyle:`mischief`,params:{hpScalePct:.25,hpScalePeriodSec:75,speedScalePct:.05,speedScalePeriodSec:110,guardSpeedMult:1.5,aggroRangeM:7.5,knockbackRangeM:4,shoveIntervalMs:2e3,shoveForce:14,potClaimRadiusM:1.25,enrageSpeedMult:1.4,enrageKnockbackCdMs:1200,enrageDamage:20}}},Fp=1024,Ip=.8,Lp=.4,Rp=.35,zp=12,Bp={};for(let e of Object.values(Pp))Bp[e.id]=e.xp;var Vp=class{arrays;free;freeTop;high=0;runTimeSec=0;totalXp=0;xpPayload={amount:0,total:0};bus;unsubscribe;constructor(e,t=Fp){this.bus=e,this.arrays={capacity:t,count:0,posX:new Float32Array(t),posY:new Float32Array(t),posZ:new Float32Array(t),value:new Float32Array(t),state:new Uint8Array(t),magnetT:new Float32Array(t),stateTimeMs:new Float32Array(t)},this.free=new Int32Array(t);for(let e=0;e<t;e++)this.free[e]=t-1-e;this.freeTop=t,e&&(this.unsubscribe=e.on(`enemyKilled`,this.onEnemyKilled))}get liveCount(){return this.arrays.capacity-this.freeTop}onEnemyKilled=e=>{let t=Bp[e.kind];if(t===void 0)return;let n=t*(1+Math.floor(this.runTimeSec/120)*Np.xpPer120s),r=e.x,i=e.y,a=e.z;this.liveCount>900&&this.mergeIntoNearest(r,a,n)||this.spawn(r,i,a,n)};spawn(e,t,n,r){if(this.freeTop===0)return-1;let i=this.free[--this.freeTop],a=this.arrays;return a.posX[i]=e,a.posY[i]=t+Lp,a.posZ[i]=n,a.value[i]=r,a.state[i]=1,a.magnetT[i]=0,a.stateTimeMs[i]=0,i>=this.high&&(this.high=i+1),a.count=this.high,i}mergeIntoNearest(e,t,n){let r=this.arrays,i=-1,a=1/0;for(let n=0;n<this.high;n++){if(r.state[n]!==1)continue;let o=r.posX[n]-e,s=r.posZ[n]-t,c=o*o+s*s;c<a&&(a=c,i=n)}return i<0?!1:(r.value[i]+=n,!0)}update(e,t,n){this.runTimeSec+=e;let r=this.arrays,i=r.posX,a=r.posZ,o=r.value,s=r.state,c=r.magnetT,l=r.stateTimeMs,u=t.x,d=t.z,f=e*1e3,p=e/Rp,m=Ip*Ip,h=n*n,g=this.high;for(let t=0;t<g;t++){if(s[t]!==1)continue;l[t]+=f;let n=u-i[t],r=d-a[t],g=n*n+r*r;if(g<=m){this.totalXp+=o[t],this.xpPayload.amount=o[t],this.xpPayload.total=this.totalXp,this.bus?.emit(`xpGained`,this.xpPayload),this.freeSlot(t);continue}if(g<=h){let o=c[t]+p;c[t]=o<1?o:1;let s=c[t]*c[t],l=Math.sqrt(g),u=Math.min(l,zp*s*e)/l;i[t]+=n*u,a[t]+=r*u}else c[t]!==0&&(c[t]=0)}}freeSlot(e){let t=this.arrays;if(t.state[e]=0,t.magnetT[e]=0,this.free[this.freeTop++]=e,e===this.high-1){let e=this.high;for(;e>0&&t.state[e-1]===0;)e--;this.high=e}t.count=this.high}dispose(){this.unsubscribe?.()}},Hp={might:{id:`might`,name:`Might`,desc:`Hits harder. Math, mostly.`,stat:`might`,perLevel:.06,maxLevel:5,unlockedFromStart:!0},haste:{id:`haste`,name:`Haste`,desc:`Attacks faster. Your trigger finger evolves.`,stat:`haste`,perLevel:.05,maxLevel:5,unlockedFromStart:!0},swift:{id:`swift`,name:`Swift`,desc:`Legs go brr.`,stat:`swift`,perLevel:.04,maxLevel:5,unlockedFromStart:!0},magnet:{id:`magnet`,name:`Magnet`,desc:`Loot flies to you now. You earned that.`,stat:`magnet`,perLevel:.6,maxLevel:5,unlockedFromStart:!0},greed:{id:`greed`,name:`Greed`,desc:`More gold per kill. Somebody’s paying attention.`,stat:`greed`,perLevel:.08,maxLevel:5,unlockedFromStart:!0},vitality:{id:`vitality`,name:`Vitality`,desc:`More max HP. Bigger cushion for bad decisions.`,stat:`vitality`,perLevel:12,maxLevel:5,unlockedFromStart:!0},armor:{id:`armor`,name:`Armor`,desc:`Flat damage reduction. Math you don’t feel.`,stat:`armor`,perLevel:1,maxLevel:5,unlockedFromStart:!0},luck:{id:`luck`,name:`Luck`,desc:`Better odds on everything. Ask it nicely.`,stat:`luck`,perLevel:.15,maxLevel:5,unlockedFromStart:!0},cooldown:{id:`cooldown`,name:`Cooldown`,desc:`Your R and Q recover faster. Push more buttons.`,stat:`cooldown`,perLevel:-.04,maxLevel:5,unlockedFromStart:!1},area:{id:`area`,name:`Area`,desc:`Everything gets bigger. Yes, that too.`,stat:`area`,perLevel:.06,maxLevel:5,unlockedFromStart:!1},bounce:{id:`bounce`,name:`Bounce`,desc:`Jump higher, land harder. Physics owes you one.`,stat:`bounce`,perLevel:.08,maxLevel:5,unlockedFromStart:!1},curse:{id:`curse`,name:`Curse`,desc:`More enemies, better loot. A deal with yourself.`,stat:`curse`,perLevel:.1,maxLevel:5,unlockedFromStart:!1}},Up={attackSpeedKnee:.8,attackSpeedFactor:.5,critKnee:2.6,critFactor:.45},Wp=3,Gp=5,Kp=8,qp=1.3,Jp=5;function Yp(e){if(e<=1)return Wp;if(e===2)return Gp;let t=Kp;for(let n=4;n<=e;n++)t=Math.floor(t*qp)+Jp;return t}function Xp(e,t,n){return e<=t?e:t+(e-t)*n}var Zp=[`common`,`uncommon`,`rare`,`epic`,`legendary`],Qp={common:80,uncommon:12,rare:5,epic:2,legendary:1},$p={common:-40,uncommon:0,rare:0,epic:0,legendary:5},em=.1;function tm(e,t){let n=Qp[e]+$p[e]*t;return n>em?n:em}var nm=.15,rm=.25;function im(e){let t=1-e*nm;return t>rm?t:rm}function am(e,t){let n=0;for(let t of e)n+=t;if(n<=0)return-1;let r=t()*n;for(let t=0;t<e.length;t++){if(r<e[t])return t;r-=e[t]}return e.length-1}function om(e,t){let n=am(Zp.map(t=>tm(t,e)),t);return Zp[n<0?0:n]}function sm(e,t,n){return{id:e.id,kind:`weapon`,name:e.name,desc:e.desc,rarity:e.rarity,newPick:t,levelAfter:n}}function cm(e,t,n,r){return{id:e.id,kind:`passive`,name:e.name,desc:e.desc,rarity:r,newPick:t,levelAfter:n}}function lm(e,t,n,r,i){let a=[],o=n.weaponLevels.size;for(let t of e){if(n.banished.has(t))continue;let e=ap[t];if(!e||e.evolved)continue;let i=n.weaponLevels.get(t),s;if(i!==void 0){if(i>=e.maxLevel)continue;s=sm(e,!1,i+1)}else{if(o>=4)continue;s=sm(e,!0,1)}let c=tm(e.rarity,r)*im(n.offerHistory.get(t)??0);a.push({card:s,weight:c})}let s=n.passiveLevels.size;for(let e of t){if(n.banished.has(e))continue;let t=Hp[e];if(!t)continue;let o=n.passiveLevels.get(e),c=om(r,i),l;if(o!==void 0){if(o>=t.maxLevel)continue;l=cm(t,!1,o+1,c)}else{if(s>=4)continue;l=cm(t,!0,1,c)}let u=tm(c,r)*im(n.offerHistory.get(e)??0);a.push({card:l,weight:u})}return a}function um(e,t,n){let r=e.slice(),i=[];for(;i.length<t&&r.length>0;){let e=am(r.map(e=>e.weight),n);if(e<0)break;i.push(r[e].card),r.splice(e,1)}return i}function dm(){return Object.values(ap).filter(e=>e.unlockedFromStart&&!e.evolved).map(e=>e.id)}function fm(){return Object.values(Hp).filter(e=>e.unlockedFromStart).map(e=>e.id)}var pm=4,mm=.05,hm=1.5,gm={get:()=>0},_m=class{pending=null;rerollsLeft=3;banishesLeft=2;externalLuck=0;xpMult=1;extraCards=0;level=1;xp=0;weaponLevels=new Map;passiveLevels=new Map;offerHistory=new Map;banished=new Set;unlockedWeaponIds;unlockedPassiveIds;bus;onWeaponChosen;rng;unsubscribe;_stats;baseMight;shopBonus;constructor(e={}){this.bus=e.bus,this.onWeaponChosen=e.onWeaponChosen,this.rng=e.rng??Math.random,this.unlockedWeaponIds=e.unlockedWeaponIds??dm(),this.unlockedPassiveIds=e.unlockedPassiveIds??fm(),this.baseMight=e.baseMight??1,this.shopBonus=e.shopBonus??gm,this._stats={might:1,attackSpeed:1,area:1,speed:1,magnet:pm,luck:0,cooldown:1,greed:1,critChance:mm,critMult:hm},this.recomputeStats(),this.bus&&(this.unsubscribe=this.bus.on(`xpGained`,this.onXpGained))}get stats(){return this._stats}get currentLevel(){return this.level}get maxHpBonus(){return this.shopBonus.get(`maxHp`)}passiveLevelOf(e){return this.passiveLevels.get(e)??0}onXpGained=e=>{this.xp+=e.amount*this.xpMult;let t=!1;for(;this.xp>=Yp(this.level);)this.xp-=Yp(this.level),this.level++,t=!0,this.bus?.emit(`levelUp`,{level:this.level});t&&!this.pending&&this.buildOffer()};buildOffer(){let e={weaponLevels:this.weaponLevels,passiveLevels:this.passiveLevels,offerHistory:this.offerHistory,banished:this.banished},t=um(lm(this.unlockedWeaponIds,this.unlockedPassiveIds,e,this._stats.luck,this.rng),Math.min(3+Math.max(0,this.extraCards),4),this.rng);for(let e of t)this.offerHistory.set(e.id,(this.offerHistory.get(e.id)??0)+1);this.pending={cards:t}}choose(e){let t=this.pending;if(!t)return;let n=t.cards[e];n&&(n.kind===`weapon`?(this.weaponLevels.set(n.id,n.levelAfter),this.onWeaponChosen?.(n.id,n.levelAfter)):(this.passiveLevels.set(n.id,n.levelAfter),this.recomputeStats()),this.pending=null,this.bus?.emit(`upgradeChosen`,{id:n.id,kind:n.kind,level:n.levelAfter}))}reroll(){return!this.pending||this.rerollsLeft<=0?!1:(this.rerollsLeft--,this.buildOffer(),!0)}banish(e){if(!this.pending||this.banishesLeft<=0)return!1;let t=this.pending.cards[e];return t?(this.banishesLeft--,this.banished.add(t.id),this.buildOffer(),!0):!1}skip(){this.pending=null}dispose(){this.unsubscribe?.()}refreshStats(){this.recomputeStats()}sumPassiveByStat(e){let t=0;for(let[n,r]of this.passiveLevels){let i=Hp[n];i&&i.stat===e&&(t+=i.perLevel*r)}return t}recomputeStats(){let e=this.sumPassiveByStat(`haste`)+this.shopBonus.get(`attackSpeed`),t=this._stats;t.might=this.baseMight*(1+this.sumPassiveByStat(`might`)+this.shopBonus.get(`damage`)),t.attackSpeed=1+Xp(e,Up.attackSpeedKnee,Up.attackSpeedFactor),t.area=1+this.sumPassiveByStat(`area`),t.speed=1+this.sumPassiveByStat(`swift`)+this.shopBonus.get(`moveSpeed`),t.magnet=(pm+this.sumPassiveByStat(`magnet`))*(1+this.shopBonus.get(`pickup`)),t.luck=this.sumPassiveByStat(`luck`)+this.externalLuck+this.shopBonus.get(`luck`),t.cooldown=1+this.sumPassiveByStat(`cooldown`),t.greed=1+this.sumPassiveByStat(`greed`)+this.shopBonus.get(`goldGain`);let n=mm*hm,r=Xp(n,Up.critKnee,Up.critFactor)/n;t.critChance=mm,t.critMult=hm*r}},vm=.25,ym=600/1e3*vm,bm=1800,xm=class{draft;events;lifecycle=`playing`;runTimeSec=0;kills=0;gold=0;didWin=!1;goldMult=1;winAtBossSec;deadElapsedSec=0;restartCallbacks=[];unsubscribes;constructor(e,t,n={}){this.draft=e,this.events=t,this.winAtBossSec=n.winAtBossSec??bm,this.unsubscribes=[this.events.on(`enemyKilled`,this.onEnemyKilled),this.events.on(`goldGained`,this.onGoldGained),this.events.on(`playerDied`,this.onPlayerDied),this.events.on(`bossKilled`,this.onBossKilled)]}get won(){return this.didWin}get mode(){return(this.lifecycle===`playing`||this.lifecycle===`encore`)&&this.draft.pending!==null?`draft`:this.lifecycle}get desiredTimeScale(){switch(this.mode){case`draft`:return 0;case`dead`:return vm;case`results`:return 0;default:return 1}}markWin(){this.lifecycle===`playing`&&(this.didWin=!0,this.lifecycle=`encore`)}tick(e){this.mode!==`draft`&&(this.lifecycle===`playing`||this.lifecycle===`encore`?this.runTimeSec+=e:this.lifecycle===`dead`&&(this.deadElapsedSec+=e,this.deadElapsedSec>=ym&&(this.lifecycle=`results`)))}onRestart(e){return this.restartCallbacks.push(e),()=>{let t=this.restartCallbacks.indexOf(e);t>=0&&this.restartCallbacks.splice(t,1)}}restart(){this.lifecycle=`playing`,this.runTimeSec=0,this.kills=0,this.gold=0,this.didWin=!1,this.deadElapsedSec=0;for(let e of this.restartCallbacks)e()}dispose(){for(let e of this.unsubscribes)e()}onEnemyKilled=()=>{this.lifecycle===`dead`||this.lifecycle===`results`||this.kills++};onGoldGained=e=>{this.lifecycle===`dead`||this.lifecycle===`results`||(this.gold+=e.amount*this.goldMult)};onPlayerDied=()=>{this.lifecycle===`dead`||this.lifecycle===`results`||(this.lifecycle=`dead`,this.deadElapsedSec=0)};onBossKilled=e=>{e.signatureId!==``&&(this.runTimeSec<this.winAtBossSec||this.markWin())}},Sm=1.5,Cm=0,wm=1,Tm=2,Em=3,Dm=4,Om=5,km=6,Am=7,jm=[`none`,`grass`,`grassBurning`,`grassBurnt`,`water`,`waterFrozen`,`oil`,`oilBurning`],Mm=4e3,Nm=2e4,Pm=6e3,Fm=8e3,Im=900,Lm=.6,Rm=300,zm=.9,Bm=8,Vm=250,Hm=Vm/1e3,Um=4,Wm=Um*Sm/2,Gm=.35,Km=[[-30,-40,7],[35,-25,7],[-45,15,7]],qm=[[0,18,5],[-12,-14,4]],Jm=[[38,8,6],[-36,12,6],[10,40,5],[-14,-40,6],[60,-30,7],[-58,34,6],[44,48,5]];function Ym(e){let t=e>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Xm=class{grid;size;cell=Sm;minX;minZ;timer;active;activeCount=0;activeFlag;spreadBuf;spreadCount=0;regionsPerSide;regionBurn;rng;grassAcc=0;oilAcc=0;fireAcc=0;bus;combat;player;hurtPlayer;surfPayload={kind:`ignite`,cells:0};constructor(e){let t=e.terrain.bounds;this.minX=t.minX,this.minZ=t.minZ,this.size=Math.max(1,Math.round((t.maxX-t.minX)/Sm));let n=this.size*this.size;this.grid=new Uint8Array(n),this.timer=new Float32Array(n),this.active=new Int32Array(n),this.activeFlag=new Uint8Array(n),this.spreadBuf=new Int32Array(n),this.regionsPerSide=Math.ceil(this.size/Um),this.regionBurn=new Uint16Array(this.regionsPerSide*this.regionsPerSide),this.rng=Ym((e.seed??1)^5307086),this.bus=e.bus,this.combat=e.combat,this.player=e.player,this.hurtPlayer=e.hurtPlayer,this.seed(e.terrain,e.levelId??`meadowfall`,e.oilPools)}seed(e,t,n){let r=this.size,i=t===`sunkenSteps`,a=i?Cm:wm;for(let t=0;t<r;t++){let n=this.minZ+(t+.5)*Sm,i=t*r;for(let t=0;t<r;t++){let r=this.minX+(t+.5)*Sm;this.grid[i+t]=e.isOffCliff(r,n)?Cm:a}}let o=i?qm:Km;for(let[t,n,r]of o)this.stampPatch(e,t,n,r,Dm,a);let s=n??(i?Jm:void 0);if(s)for(let[t,n,r]of s)this.stampPatch(e,t,n,r,km,a)}stampPatch(e,t,n,r,i,a){let o=this.size,s=r*r,c=Math.max(0,Math.floor((t-r-this.minX)/Sm)),l=Math.min(o-1,Math.floor((t+r-this.minX)/Sm)),u=Math.max(0,Math.floor((n-r-this.minZ)/Sm)),d=Math.min(o-1,Math.floor((n+r-this.minZ)/Sm));for(let r=u;r<=d;r++){let u=this.minZ+(r+.5)*Sm,d=r*o;for(let r=c;r<=l;r++){let o=this.minX+(r+.5)*Sm,c=o-t,l=u-n;c*c+l*l<=s&&this.grid[d+r]===a&&!e.isOffCliff(o,u)&&(this.grid[d+r]=i)}}}get dirtyCount(){return this.activeCount}kindAt(e,t){let n=Math.floor((e-this.minX)/Sm),r=Math.floor((t-this.minZ)/Sm);return n<0||n>=this.size||r<0||r>=this.size?`none`:jm[this.grid[r*this.size+n]]}ignite(e,t,n){let r=0,i=this.size,a=n*n,o=Math.max(0,Math.floor((e-n-this.minX)/Sm)),s=Math.min(i-1,Math.floor((e+n-this.minX)/Sm)),c=Math.max(0,Math.floor((t-n-this.minZ)/Sm)),l=Math.min(i-1,Math.floor((t+n-this.minZ)/Sm));for(let n=c;n<=l;n++){let c=this.minZ+(n+.5)*Sm,l=n*i;for(let n=o;n<=s;n++){let i=this.minX+(n+.5)*Sm-e,o=c-t;if(i*i+o*o>a)continue;let s=l+n,u=this.grid[s];u===wm?(this.setCell(s,Tm,Mm),this.pushActive(s),r++):u===km&&(this.setCell(s,Am,Pm),this.pushActive(s),r++)}}return r>0&&this.bus&&this.emitSurface(`ignite`,r),r}freeze(e,t,n){let r=0,i=this.size,a=n*n,o=Math.max(0,Math.floor((e-n-this.minX)/Sm)),s=Math.min(i-1,Math.floor((e+n-this.minX)/Sm)),c=Math.max(0,Math.floor((t-n-this.minZ)/Sm)),l=Math.min(i-1,Math.floor((t+n-this.minZ)/Sm));for(let n=c;n<=l;n++){let c=this.minZ+(n+.5)*Sm,l=n*i;for(let n=o;n<=s;n++){let i=this.minX+(n+.5)*Sm-e,o=c-t;if(i*i+o*o>a)continue;let s=l+n;this.grid[s]===Dm&&(this.setCell(s,Om,Fm),this.pushActive(s),r++)}}return r>0&&this.bus&&this.emitSurface(`freeze`,r),r}sample(e,t,n){n.friction=1,n.damagePerSec=0;let r=Math.floor((e-this.minX)/Sm),i=Math.floor((t-this.minZ)/Sm);if(r<0||r>=this.size||i<0||i>=this.size)return;let a=this.grid[i*this.size+r];a===Om?n.friction=Gm:(a===Tm||a===Am)&&(n.damagePerSec=Bm)}update(e){let t=e*1e3,n=!1;this.grassAcc+=t,this.grassAcc>=Im&&(this.grassAcc-=Im,n=!0);let r=!1;this.oilAcc+=t,this.oilAcc>=Rm&&(this.oilAcc-=Rm,r=!0);let i=!1;this.fireAcc+=t,this.fireAcc>=Vm&&(this.fireAcc-=Vm,i=!0);let a=this.grid,o=this.timer,s=this.active,c=this.activeCount;this.spreadCount=0;let l=0,u=0,d=0;for(let e=0;e<c;e++){let i=s[e],c=a[i];n&&c===Tm?this.spreadFrom(i,wm,Tm,Mm,Lm):r&&c===Am&&this.spreadFrom(i,km,Am,Pm,zm),o[i]-=t,o[i]<=0?c===Tm?(this.setCell(i,Em,Nm),u++,s[l++]=i):c===Am?(this.setCell(i,Cm,0),u++,this.activeFlag[i]=0):c===Em?(this.setCell(i,wm,0),this.activeFlag[i]=0):c===Om?(this.setCell(i,Dm,0),d++,this.activeFlag[i]=0):this.activeFlag[i]=0:s[l++]=i}this.activeCount=l;let f=this.spreadCount;for(let e=0;e<f;e++)s[this.activeCount++]=this.spreadBuf[e];i&&this.applyFire(Hm),this.bus&&(f>0&&this.emitSurface(`ignite`,f),u>0&&this.emitSurface(`burnout`,u),d>0&&this.emitSurface(`thaw`,d))}spreadFrom(e,t,n,r,i){let a=this.size,o=e%a,s=(e-o)/a;o>0&&this.tryIgniteNeighbour(e-1,t,n,r,i),o<a-1&&this.tryIgniteNeighbour(e+1,t,n,r,i),s>0&&this.tryIgniteNeighbour(e-a,t,n,r,i),s<a-1&&this.tryIgniteNeighbour(e+a,t,n,r,i)}tryIgniteNeighbour(e,t,n,r,i){this.grid[e]===t&&(this.rng()>=i||(this.setCell(e,n,r),this.activeFlag[e]=1,this.spreadBuf[this.spreadCount++]=e))}setCell(e,t,n){let r=this.grid[e],i=r===Tm||r===Am,a=t===Tm||t===Am;if(i!==a){let t=this.regionOf(e);a?this.regionBurn[t]++:this.regionBurn[t]>0&&this.regionBurn[t]--}this.grid[e]=t,this.timer[e]=n}regionOf(e){let t=this.size,n=e%t;return((e-n)/t/Um|0)*this.regionsPerSide+(n/Um|0)}pushActive(e){this.activeFlag[e]||(this.activeFlag[e]=1,this.active[this.activeCount++]=e)}applyFire(e){let t=Bm*e;if(this.combat){let e=this.regionBurn,n=this.regionsPerSide;for(let r=0;r<n;r++){let i=r*n;for(let a=0;a<n;a++){if(e[i+a]===0)continue;let n=this.minX+(a*Um+Um/2)*Sm,o=this.minZ+(r*Um+Um/2)*Sm;this.combat.damageCircle(n,o,Wm,t,!1,0)}}}if(this.player&&this.hurtPlayer){let e=this.kindAt(this.player.x,this.player.z);(e===`grassBurning`||e===`oilBurning`)&&this.hurtPlayer(t)}}emitSurface(e,t){this.surfPayload.kind=e,this.surfPayload.cells=t,this.bus.emit(`surfaceChanged`,this.surfPayload)}},Zm=2,Qm=2.5,$m=12,eh=1.5,th=1e3,nh=class{pads;player;applyImpulse;bus;cooldownMs;usedPayload={x:0,z:0};constructor(e,t,n,r){this.pads=e,this.player=t,this.applyImpulse=n,this.bus=r,this.cooldownMs=new Float32Array(e.length)}update(e){let t=e*1e3,n=this.player,r=this.pads,i=this.cooldownMs;for(let e=0;e<r.length;e++){if(i[e]>0&&(i[e]-=t,i[e]<0&&(i[e]=0)),i[e]>0)continue;let a=r[e],o=n.x-a.x,s=n.z-a.z;o*o+s*s>Zm*Zm||Math.abs(n.y-a.y)>Qm||(this.applyImpulse(n.vx*eh,$m,n.vz*eh),i[e]=th,this.bus&&(this.usedPayload.x=a.x,this.usedPayload.z=a.z,this.bus.emit(`launchPadUsed`,this.usedPayload)))}}cooldownLeftMs(e){return e>=0&&e<this.cooldownMs.length?this.cooldownMs[e]:0}},rh=3,ih=2,ah=.8,oh=10,sh=8,ch=8,lh=class{player;combat;bus;pending=!1;pendX=0;pendZ=0;pendFall=0;unsub;slamPayload={x:0,z:0,fallHeight:0,radius:0};constructor(e,t,n){this.player=e,this.combat=t,this.bus=n,this.unsub=n.on(`playerLanded`,e=>{e.fallHeight<rh||(this.pending=!0,this.pendX=this.player.x,this.pendZ=this.player.z,this.pendFall=e.fallHeight)})}update(e){if(!this.pending)return;this.pending=!1;let t=this.pendFall,n=ih+t*ah,r=oh+t*sh;this.combat.damageCircle(this.pendX,this.pendZ,n,r,!1,ch);let i=this.slamPayload;i.x=this.pendX,i.z=this.pendZ,i.fallHeight=t,i.radius=n,this.bus.emit(`slamLanded`,i)}dispose(){this.unsub()}},uh=2,dh=class{bus;granted=0;unsub;goldPayload={amount:uh,total:0};constructor(e){this.bus=e,this.unsub=e.on(`enemyKilled`,e=>{e.byCliff&&(this.granted+=uh,this.goldPayload.amount=uh,this.goldPayload.total=this.granted,this.bus.emit(`goldGained`,this.goldPayload))})}dispose(){this.unsub()}},fh=class{launchPads;slam;cliffBonus;constructor(e){this.launchPads=new nh(e.pads,e.player,e.applyImpulse,e.bus),this.slam=new lh(e.player,e.combat,e.bus),this.cliffBonus=new dh(e.bus)}update(e){this.launchPads.update(e),this.slam.update(e)}dispose(){this.slam.dispose(),this.cliffBonus.dispose()}},ph=[`density`,`eliteRate`,`enrage`],mh=[`luck`,`gold`,`xp`],hh=1.35,gh=1.5,_h=1.2,vh=1.25,yh=1.3,bh={density:{label:`Density`,desc:`+35% spawn density. Forever.`},eliteRate:{label:`Elite Rate`,desc:`+50% elite chance. They noticed you.`},enrage:{label:`Enrage`,desc:`Bosses hit 20% harder, move 20% faster.`}},xh={luck:{label:`Luck`,desc:`+1 luck. Better drafts.`},gold:{label:`Gold`,desc:`+25% gold from every kill.`},xp:{label:`XP`,desc:`+30% experience gained.`}},Sh={densityMult:1,eliteRateMult:1,enrageSpeedMult:1,enrageDamageMult:1,luckBonus:0,goldMult:1,xpMult:1};function Ch(e,t){return e[Math.min(e.length-1,Math.max(0,Math.floor(t()*e.length)))]}var wh=class{rng;bus;_shrines;curseStacks={density:0,eliteRate:0,enrage:0};boonStacks={luck:0,gold:0,xp:0};_effects=Sh;_pending=null;_curseTier=0;constructor(e,t,n=Math.random,r){this.rng=n,this.bus=r;let i=Math.max(0,Math.min(t,e.length));this._shrines=[];for(let t=0;t<i;t++){let n=e[t];this._shrines.push({id:t,x:n.x,y:n.y,z:n.z,activated:!1}),this.bus?.emit(`shrineSpawned`,{shrineId:t,x:n.x,z:n.z})}}get shrines(){return this._shrines}get effects(){return this._effects}get pending(){return this._pending}get curseTier(){return this._curseTier}update(e,t,n){if(this._pending||this._curseTier>=3||!n)return;let r=-1,i=9;for(let n of this._shrines){if(n.activated)continue;let a=n.x-e,o=n.z-t,s=a*a+o*o;s<=i&&(i=s,r=n.id)}r<0||(this._pending={shrineId:r,curse:Ch(ph,this.rng),boon:Ch(mh,this.rng),tierAfter:this._curseTier+1})}take(){let e=this._pending;if(!e)return;let t=this._shrines[e.shrineId];t&&(t.activated=!0),this.curseStacks[e.curse]++,this.boonStacks[e.boon]++,this._curseTier++,this.recomputeEffects(),this._pending=null,this.bus?.emit(`shrineActivated`,{shrineId:e.shrineId,curseTier:this._curseTier})}walkAway(){this._pending=null}recomputeEffects(){let e=this.curseStacks,t=this.boonStacks;this._effects={densityMult:hh**e.density,eliteRateMult:gh**e.eliteRate,enrageSpeedMult:_h**e.enrage,enrageDamageMult:_h**e.enrage,luckBonus:1*t.luck,goldMult:vh**t.gold,xpMult:yh**t.xp}}},Th=`whomp-shrine-style`,Eh=[`#ffcf3f`,`#ff8f3f`,`#ff2f7e`],Dh=`
.whomp-shrine-badge{position:fixed;top:14px;left:14px;z-index:500;display:none;
  align-items:center;gap:7px;padding:5px 12px 5px 10px;border-radius:999px;
  background:rgba(12,8,24,0.55);border:2px solid var(--tc,#ffcf3f);
  font-family:'Segoe UI',system-ui,-apple-system,sans-serif;color:#fff;
  font-weight:800;font-size:14px;letter-spacing:0.03em;pointer-events:none;
  text-shadow:0 2px 0 rgba(0,0,0,0.5);box-shadow:0 0 14px -4px var(--tc,#ffcf3f);}
.whomp-shrine-badge__icon{color:var(--tc,#ffcf3f);font-size:15px;line-height:1;}

.whomp-shrine{position:fixed;inset:0;z-index:900;display:none;
  align-items:center;justify-content:center;flex-direction:column;gap:20px;
  background:radial-gradient(ellipse at center,rgba(35,8,20,0.72),rgba(6,4,14,0.92));
  font-family:'Segoe UI',system-ui,-apple-system,sans-serif;color:#fff;}
.whomp-shrine__title{font-size:15px;font-weight:800;letter-spacing:0.22em;
  text-transform:uppercase;color:#ff2f7e;text-shadow:0 0 14px rgba(255,47,126,0.6);}
.whomp-shrine__tier{font-size:12px;font-weight:700;letter-spacing:0.1em;
  text-transform:uppercase;color:rgba(255,255,255,0.6);}

.whomp-shrine__card{display:flex;border-radius:20px;overflow:hidden;
  background:linear-gradient(180deg,rgba(30,20,48,0.95),rgba(14,10,26,0.95));
  box-shadow:0 0 0 1px rgba(255,255,255,0.06) inset,0 10px 28px rgba(0,0,0,0.5);
  transform:scale(0.4) translateY(30px);opacity:0;
  animation:whomp-shrine-in 150ms cubic-bezier(.34,1.56,.64,1) forwards;}
@keyframes whomp-shrine-in{
  0%{transform:scale(0.4) translateY(30px);opacity:0;}
  60%{transform:scale(1.08) translateY(-4px);opacity:1;}
  100%{transform:scale(1) translateY(0);opacity:1;}
}
.whomp-shrine__half{width:190px;padding:20px 16px;display:flex;flex-direction:column;
  align-items:center;text-align:center;gap:8px;}
.whomp-shrine__half--curse{border-right:2px solid rgba(255,255,255,0.08);}
.whomp-shrine__kind{font-size:11px;font-weight:800;letter-spacing:0.16em;text-transform:uppercase;}
.whomp-shrine__half--curse .whomp-shrine__kind{color:#ff2f7e;}
.whomp-shrine__half--boon .whomp-shrine__kind{color:#ffcf3f;}
.whomp-shrine__name{font-size:19px;font-weight:800;}
.whomp-shrine__desc{font-size:13px;line-height:1.4;color:rgba(255,255,255,0.75);}
.whomp-shrine__key{width:22px;height:22px;border-radius:6px;background:rgba(255,255,255,0.1);
  border:1px solid rgba(255,255,255,0.25);display:flex;align-items:center;justify-content:center;
  font-size:12px;font-weight:800;}

.whomp-shrine__controls{display:flex;gap:14px;}
.whomp-shrine__btn{padding:10px 22px;border-radius:12px;border:2px solid rgba(255,255,255,0.2);
  background:rgba(255,255,255,0.06);color:#fff;font-weight:800;font-size:14px;
  letter-spacing:0.03em;cursor:pointer;display:flex;align-items:center;gap:8px;
  transition:transform 90ms ease-out,background 120ms ease-out;}
.whomp-shrine__btn:hover{background:rgba(255,255,255,0.14);transform:translateY(-1px);}
.whomp-shrine__btn--take{background:linear-gradient(90deg,#ff2f7e,#ff6a3f);border-color:transparent;}
.whomp-shrine__btn--take:hover{filter:brightness(1.1);}
`;function Oh(e){if(e.getElementById(Th))return;let t=e.createElement(`style`);t.id=Th,t.textContent=Dh,e.head.appendChild(t)}var kh=class{shrines;badge;badgeIcon;badgeText;cardRoot;lastPending=null;lastTier=-1;keydownHandler;win;constructor(e,t){this.shrines=t;let n=e.ownerDocument;if(!n)throw Error(`ShrineOverlay: parent has no ownerDocument`);Oh(n),this.badge=n.createElement(`div`),this.badge.className=`whomp-shrine-badge`,this.badgeIcon=n.createElement(`span`),this.badgeIcon.className=`whomp-shrine-badge__icon`,this.badgeIcon.textContent=`☠`,this.badgeText=n.createElement(`span`),this.badge.appendChild(this.badgeIcon),this.badge.appendChild(this.badgeText),e.appendChild(this.badge),this.cardRoot=n.createElement(`div`),this.cardRoot.className=`whomp-shrine`,e.appendChild(this.cardRoot),this.win=n.defaultView??void 0,this.keydownHandler=e=>this.onKeydown(e),this.win?.addEventListener(`keydown`,this.keydownHandler)}update(){let e=this.shrines.pending;e!==this.lastPending&&(this.lastPending=e,e?this.renderCard(e):this.hideCard());let t=this.shrines.curseTier;t!==this.lastTier&&(this.lastTier=t,this.writeBadge(t))}dispose(){this.win?.removeEventListener(`keydown`,this.keydownHandler),this.badge.remove(),this.cardRoot.remove()}renderCard(e){let t=this.cardRoot.ownerDocument;this.cardRoot.textContent=``,this.cardRoot.style.display=`flex`;let n=t.createElement(`div`);n.className=`whomp-shrine__title`,n.textContent=`A Shrine Offers a Deal`;let r=t.createElement(`div`);r.className=`whomp-shrine__tier`,r.textContent=`Tier ${e.tierAfter} / 3`;let i=t.createElement(`div`);i.className=`whomp-shrine__card`,i.appendChild(this.buildHalf(t,`curse`,bh[e.curse].label,bh[e.curse].desc)),i.appendChild(this.buildHalf(t,`boon`,xh[e.boon].label,xh[e.boon].desc));let a=t.createElement(`div`);a.className=`whomp-shrine__controls`,a.appendChild(this.buildButton(t,`take`,`1`,`TAKE DEAL`,()=>this.shrines.take())),a.appendChild(this.buildButton(t,`walk`,`2`,`WALK AWAY`,()=>this.shrines.walkAway())),this.cardRoot.appendChild(n),this.cardRoot.appendChild(r),this.cardRoot.appendChild(i),this.cardRoot.appendChild(a)}buildHalf(e,t,n,r){let i=e.createElement(`div`);i.className=`whomp-shrine__half whomp-shrine__half--${t}`;let a=e.createElement(`div`);a.className=`whomp-shrine__kind`,a.textContent=t===`curse`?`Curse`:`Boon`;let o=e.createElement(`div`);o.className=`whomp-shrine__name`,o.textContent=n;let s=e.createElement(`div`);return s.className=`whomp-shrine__desc`,s.textContent=r,i.appendChild(a),i.appendChild(o),i.appendChild(s),i}buildButton(e,t,n,r,i){let a=e.createElement(`button`);a.type=`button`,a.className=`whomp-shrine__btn whomp-shrine__btn--${t}`;let o=e.createElement(`span`);o.className=`whomp-shrine__key`,o.textContent=n;let s=e.createElement(`span`);return s.textContent=r,a.appendChild(o),a.appendChild(s),a.addEventListener(`click`,i),a}hideCard(){this.cardRoot.style.display=`none`,this.cardRoot.textContent=``}writeBadge(e){if(e<=0){this.badge.style.display=`none`;return}this.badge.style.display=`flex`,this.badge.style.setProperty(`--tc`,Eh[Math.min(e,Eh.length)-1]),this.badgeText.textContent=`CURSED ${e}/3`}onKeydown(e){this.shrines.pending&&(e.key===`1`?(e.preventDefault(),this.shrines.take()):(e.key===`2`||e.key===`Escape`)&&(e.preventDefault(),this.shrines.walkAway()))}},Ah={inferno:{id:`inferno`,name:`Inferno`,desc:`Your hits leave a mark. The mark is on fire.`,params:{burnChance:.15,burnDps:6,burnMs:2e3}},frostbite:{id:`frostbite`,name:`Frostbite`,desc:`Sometimes they just stop. Cold feet.`,params:{freezeChance:.12,freezeMs:900}},overcharged:{id:`overcharged`,name:`Overcharged`,desc:`One in ten hits forgets to let go.`,params:{stunChance:.1,stunMs:700}},temporalShield:{id:`temporalShield`,name:`Temporal Shield`,desc:`When it gets bad, the world gets slow.`,params:{hpThreshold:.3,timeScale:.6}},sacredTome:{id:`sacredTome`,name:`Sacred Tome`,desc:`One more option. Always nice.`,params:{extraCards:1}},innerPeace:{id:`innerPeace`,name:`Inner Peace`,desc:`Stand very still. Feel better.`,params:{stillMs:1500,healPerSec:3}},soulHarvest:{id:`soulHarvest`,name:`Soul Harvest`,desc:`A big kill pulls everything to you.`,params:{magnetMs:3e4}},vengefulSpirits:{id:`vengefulSpirits`,name:`Vengeful Spirits`,desc:`Something leaves the body. It is annoyed.`,params:{ghostChance:.08}}},jh=Object.keys(Ah),Mh=class{ownedIds=new Set;stillMs=0;magnetMs=0;has(e){return this.ownedIds.has(e)}get count(){return this.ownedIds.size}get owned(){return this.ownedIds}get full(){return this.ownedIds.size>=4}grant(e){return this.ownedIds.has(e)||this.full?!1:(this.ownedIds.add(e),e===`soulHarvest`&&(this.magnetMs=0),!0)}get burnOnHitChance(){return this.ownedIds.has(`inferno`)?Ah.inferno.params.burnChance:0}get freezeOnHitChance(){return this.ownedIds.has(`frostbite`)?Ah.frostbite.params.freezeChance:0}get shockStunChance(){return this.ownedIds.has(`overcharged`)?Ah.overcharged.params.stunChance:0}get vengefulGhostChance(){return this.ownedIds.has(`vengefulSpirits`)?Ah.vengefulSpirits.params.ghostChance:0}get extraDraftCards(){return this.ownedIds.has(`sacredTome`)?Ah.sacredTome.params.extraCards:0}timeScaleFactor(e){if(!this.ownedIds.has(`temporalShield`))return 1;let t=Ah.temporalShield.params;return e<t.hpThreshold?t.timeScale:1}innerPeaceHealPerSec(){return this.ownedIds.has(`innerPeace`)&&this.stillMs>=Ah.innerPeace.params.stillMs?Ah.innerPeace.params.healPerSec:0}magnetActive(){return this.magnetMs>0}notePlayerMoving(e,t){e?this.stillMs=0:this.stillMs+=t*1e3}onBossKill(){this.ownedIds.has(`soulHarvest`)&&(this.magnetMs=Ah.soulHarvest.params.magnetMs)}update(e){this.magnetMs>0&&(this.magnetMs-=e*1e3,this.magnetMs<0&&(this.magnetMs=0))}reset(){this.ownedIds.clear(),this.stillMs=0,this.magnetMs=0}},Nh=350,Ph=2.2,Fh=class{legendary;rng;bus;arrays;free;freeTop;high=0;openedPayload={rarityRoll:0};droppedPayload={x:0,z:0,fromBoss:!1};legendaryPayload={id:``};constructor(e,t,n,r=16){this.legendary=e,this.rng=t,this.bus=n,this.arrays={capacity:r,count:0,posX:new Float32Array(r),posY:new Float32Array(r),posZ:new Float32Array(r),state:new Uint8Array(r),fromBoss:new Uint8Array(r),bobPhase:new Float32Array(r),stateTimeMs:new Float32Array(r)},this.free=new Int32Array(r);for(let e=0;e<r;e++)this.free[e]=r-1-e;this.freeTop=r}spawn(e,t,n,r){if(this.freeTop===0)return-1;let i=this.free[--this.freeTop],a=this.arrays;return a.posX[i]=e,a.posY[i]=t,a.posZ[i]=n,a.state[i]=1,a.fromBoss[i]=+!!r,a.bobPhase[i]=0,a.stateTimeMs[i]=0,i>=this.high&&(this.high=i+1),a.count=this.high,this.bus&&(this.droppedPayload.x=e,this.droppedPayload.z=n,this.droppedPayload.fromBoss=r,this.bus.emit(`chestDropped`,this.droppedPayload)),i}update(e,t){let n=this.arrays,r=e*1e3,i=t.radius+2,a=i*i,o=this.high;for(let i=0;i<o;i++){let o=n.state[i];if(o!==0)if(n.stateTimeMs[i]+=r,o===1){n.bobPhase[i]+=e*Ph;let r=n.posX[i]-t.x,o=n.posZ[i]-t.z;r*r+o*o<=a&&this.open(i)}else o===2&&n.stateTimeMs[i]>=Nh&&this.freeSlot(i)}}open(e){let t=this.arrays;t.state[e]=2,t.stateTimeMs[e]=0;let n=this.rng(),r=this.rollUnowned(n);r!==null&&(this.legendary.grant(r),this.bus&&(this.legendaryPayload.id=r,this.bus.emit(`legendaryChosen`,this.legendaryPayload))),this.bus&&(this.openedPayload.rarityRoll=n,this.bus.emit(`chestOpened`,this.openedPayload))}rollUnowned(e){if(this.legendary.full)return null;let t=0;for(let e of jh)this.legendary.has(e)||t++;if(t===0)return null;let n=Math.floor(e*t);n>=t&&(n=t-1);for(let e of jh)if(!this.legendary.has(e)){if(n===0)return e;n--}return null}freeSlot(e){let t=this.arrays;if(t.state[e]=0,this.free[this.freeTop++]=e,e===this.high-1){let e=this.high;for(;e>0&&t.state[e-1]===0;)e--;this.high=e}t.count=this.high}},Ih=65536,Lh=[`frenzied`,`shielded`,`vampiric`,`gravityWell`],Rh=0,zh=1,Bh=2,Vh=3,Hh=2.2,Uh=8,Wh=1.3,Gh=1.4,Kh=.1,qh=20,Jh=6,Yh=3.5,Xh=24,Zh=12,Qh=8,$h=class{horde;chests;bus;affix;gen;shieldCap;active;activeCount=0;arrays;basicIndices=[];kindDamage;kindIds;nextSpawnSec;periodSec;eliteCount=0;rngState;unsub;unsubDmg;spawnPayload={slot:0,kindId:``,affix:``};constructor(e,t,n,r,i=1359437342,a={}){this.horde=e,this.chests=t,this.bus=r,this.arrays=e.arrays;let o=this.arrays.capacity;this.affix=new Int8Array(o).fill(-1),this.gen=new Uint16Array(o),this.shieldCap=new Float32Array(o),this.active=new Int32Array(Math.min(o,64)),this.kindDamage=new Float32Array(n.length),this.kindIds=Array(n.length);for(let e=0;e<n.length;e++)this.kindDamage[e]=n[e].damage,this.kindIds[e]=n[e].id,n[e].tier===`basic`&&this.basicIndices.push(e);this.nextSpawnSec=a.firstSec??120,this.periodSec=a.periodSec??90,this.rngState=i>>>0,this.unsub=r?r.on(`enemyKilled`,this.onKilled):()=>{},this.unsubDmg=r?r.on(`enemyDamaged`,this.onDamaged):()=>{}}get liveElites(){return this.activeCount}isElite(e){return this.affix[e]>=0}affixOf(e){let t=this.affix[e];return t>=0?Lh[t]:null}seedSkip(e){for(;this.nextSpawnSec<e;)this.nextSpawnSec+=this.periodSec}update(e,t,n,r){t>=this.nextSpawnSec&&this.basicIndices.length>0&&(this.spawnElite(t,n,r),this.nextSpawnSec+=this.periodSec),this.runAffixes(e,n)}dispose(){this.unsub(),this.unsubDmg()}spawnElite(e,t,n){if(this.activeCount>=this.active.length)return;let r=this.eliteCount%Lh.length,i=this.basicIndices[this.rand()*this.basicIndices.length|0],a=Uh*(1+Math.floor(e/25)*.2),o=(1+Math.floor(e/50)*.05)*(r===Rh?Gh:1),s=this.kindDamage[i]*Wh*(1+Math.floor(e/30)*.15),c=n.bounds,l=t.x,u=t.z,d=!1;for(let e=0;e<Qh;e++){let e=this.rand()*Math.PI*2,r=Xh+this.rand()*Zh;if(l=t.x+Math.cos(e)*r,u=t.z+Math.sin(e)*r,l<c.minX?l=c.minX:l>c.maxX&&(l=c.maxX),u<c.minZ?u=c.minZ:u>c.maxZ&&(u=c.maxZ),!n.isOffCliff(l,u)){d=!0;break}}if(!d)return;let f=this.horde.spawn(i,l,u,a,o,s);if(f<0)return;let p=f%Ih,m=(f-p)/Ih,h=this.arrays;h.radius[p]*=Hh,h.posY[p]=n.heightAt(l,u)+h.radius[p],this.affix[p]=r,this.gen[p]=m,this.shieldCap[p]=h.maxHp[p]*Kh,this.active[this.activeCount++]=p,this.eliteCount++,this.bus&&(this.spawnPayload.slot=p,this.spawnPayload.kindId=this.kindIds[i],this.spawnPayload.affix=Lh[r],this.bus.emit(`eliteSpawned`,this.spawnPayload))}runAffixes(e,t){let n=this.arrays;for(let r=0;r<this.activeCount;){let i=this.active[r],a=n.state[i];if(a===0||n.generation[i]!==this.gen[i]){this.active[r]=this.active[--this.activeCount];continue}if(a!==2){r++;continue}let o=this.affix[i];if(o===Bh){let r=t.radius+n.radius[i],a=n.posX[i]-t.x,o=n.posZ[i]-t.z;if(a*a+o*o<=r*r){let t=n.hp[i]+qh*e;n.hp[i]=t<n.maxHp[i]?t:n.maxHp[i]}}else if(o===Vh){let r=n.posX[i]-t.x,a=n.posZ[i]-t.z,o=r*r+a*a;if(o>1e-4&&o<=Jh*Jh){let n=Math.sqrt(o),i=(1-n/Jh)*Yh*e;t.x+=r/n*i,t.z+=a/n*i}}r++}}onKilled=e=>{let t=e.enemyId%Ih;if(this.affix[t]<0)return;let n=(e.enemyId-t)/Ih;this.gen[t]===n&&(this.affix[t]=-1,this.chests.spawn(e.x,e.y,e.z,!1))};onDamaged=e=>{let t=e.enemyId%Ih;if(this.affix[t]!==zh)return;let n=(e.enemyId-t)/Ih;if(this.gen[t]!==n)return;let r=this.shieldCap[t];e.amount>r&&(this.arrays.hp[t]+=e.amount-r)};rand(){let e=this.rngState+1831565813|0;this.rngState=e;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}},eg=65536,tg={thistlemaw:`rootWave`,ramhorn:`chargeRush`,kingbloom:`petalBarrage`,tidebound:`slamWave`,oilfather:`igniteField`,archivist:`mirrorBeams`},ng=5,rg=2,ig=.5,ag=8,og=256,sg=96,cg=0,lg=1,ug=2,dg=3,fg=0,pg=1,mg=2,hg=3,gg=4,_g=5,vg=6,yg=0,bg=1,xg=260,Sg=520,Cg=6,wg=9,Tg=3,Eg=8,Dg=11,Og=7,kg=1.4,Ag=.6,jg=800,Mg=500,Ng=14,Pg=.55,Fg=2400,Ig=1.15,Lg=15,Rg=8,zg=8,Bg=[1,.78,.58],Vg=[1,1.12,1.25],Hg=class{horde;combat;chests;level;bus;brainCap=ag;brainSlot=new Int32Array(ag).fill(-1);brainGen=new Uint16Array(ag);brainKind=new Uint16Array(ag);brainSignature=new Uint8Array(ag);brainPhase=new Uint8Array(ag);brainState=new Uint8Array(ag);brainTimer=new Float32Array(ag);brainCd=new Float32Array(ag);brainTeleX=new Float32Array(ag);brainTeleZ=new Float32Array(ag);brainLockX=new Float32Array(ag);brainLockZ=new Float32Array(ag);brainChargeDist=new Float32Array(ag);orbActive=new Uint8Array(og);orbX=new Float32Array(og);orbY=new Float32Array(og);orbZ=new Float32Array(og);orbVX=new Float32Array(og);orbVZ=new Float32Array(og);orbTtl=new Float32Array(og);orbDmg=new Float32Array(og);orbCount=0;orbCapacity=og;orbHead=0;strikeActive=new Uint8Array(sg);strikeX=new Float32Array(sg);strikeZ=new Float32Array(sg);strikeR=new Float32Array(sg);strikeDmg=new Float32Array(sg);strikeKb=new Float32Array(sg);strikeDelay=new Float32Array(sg);strikeKind=new Uint8Array(sg);strikeCount=0;strikeHead=0;arrays;profiles;allKindDamage;kindIndexOf=new Map;minionKindIndex;bossSpawned;nextCadenceSec;cadenceSec;minibossCount=0;bossKindCount=0;awardGold;surfaces;rngState;unsub;telePayload={bossId:0,attackId:``,x:0,z:0,r:0,msUntil:0};spawnPayload={bossId:0,kindId:``,signature:!1};phasePayload={bossId:0,phase:0};killPayload={bossId:0,kind:``,signatureId:``};constructor(e,t,n,r,i,a,o,s={}){this.horde=e,this.combat=t,this.chests=n,this.level=i,this.bus=o,this.arrays=e.arrays,this.awardGold=s.awardGold,this.surfaces=s.surfaces,this.rngState=(s.seed??2958424782)>>>0,this.cadenceSec=r.minibossEverySec,this.nextCadenceSec=r.minibossEverySec,this.bossSpawned=i.bosses.map(()=>!1),this.allKindDamage=new Float32Array(a.length);for(let e=0;e<a.length;e++)this.kindIndexOf.set(a[e].id,e),this.allKindDamage[e]=a[e].damage;this.profiles=a.map(e=>Wg(e)),this.minionKindIndex=this.kindIndexOf.get(`mite`)??this.kindIndexOf.get(`blob`)??0,this.unsub=o?o.on(`enemyKilled`,this.onKilled):()=>{}}get liveBossCount(){let e=0;for(let t=0;t<ag;t++)this.brainSlot[t]>=0&&e++;return e}debugSpawn(e,t,n,r,i=0){let a=this.kindIndexOf.get(e);return a===void 0?-1:this.spawnBossAt(a,e,t,n,r,i)}seedSkip(e){for(let t=0;t<this.level.bosses.length;t++)this.level.bosses[t].atSec<e&&(this.bossSpawned[t]=!0);for(;this.nextCadenceSec<e;)this.nextCadenceSec+=this.cadenceSec}update(e,t,n,r){this.schedule(t,n,r);let i=e*1e3;for(let t=0;t<ag;t++)this.brainSlot[t]>=0&&this.tickBrain(t,e,i,n,r);this.tickOrbs(e,i),this.tickStrikes(i)}dispose(){this.unsub()}schedule(e,t,n){for(let r=0;r<this.level.bosses.length;r++){let i=this.level.bosses[r];!this.bossSpawned[r]&&e>=i.atSec&&this.spawnScheduled(i.kindId,t,n,e)>=0&&(this.bossSpawned[r]=!0)}for(;e>=this.nextCadenceSec;){let r=this.nextCadenceSec;if(this.nextCadenceSec+=this.cadenceSec,this.level.bosses.some(e=>e.atSec===r))continue;let i=this.minibossCount%2==0?`bruiser`:`warden`;this.minibossCount++,this.kindIndexOf.has(i)&&this.spawnScheduled(i,t,n,e)}}spawnScheduled(e,t,n,r){let i=this.kindIndexOf.get(e);if(i===void 0)return-1;let a=n.bounds,o=t.x,s=t.z;for(let e=0;e<zg;e++){let e=this.rand()*Math.PI*2,r=Lg+this.rand()*Rg;if(o=t.x+Math.cos(e)*r,s=t.z+Math.sin(e)*r,o<a.minX?o=a.minX:o>a.maxX&&(o=a.maxX),s<a.minZ?s=a.minZ:s>a.maxZ&&(s=a.maxZ),!n.isOffCliff(o,s))break}return this.spawnBossAt(i,e,o,s,n,r)}spawnBossAt(e,t,n,r,i,a){let o=-1;for(let e=0;e<ag;e++)if(this.brainSlot[e]<0){o=e;break}if(o<0)return-1;let s=!Ug(t),c=this.arrays,l=1,u=this.allKindDamage[e];if(!s){let e=this.minibossParams(t),n=this.bossKindCount,r=1+Math.floor(a/75)*.2;l=(1+n*e.hpPerBossKill/e.baseHp)*r,u=e.baseDmg*r}let d=this.horde.spawn(e,n,r,l,1,u);if(d<0&&s&&this.horde.evictWeakest()&&(d=this.horde.spawn(e,n,r,l,1,u)),d<0)return-1;let f=d%eg,p=(d-f)/eg;return c.posY[f]=i.heightAt(n,r)+c.radius[f],this.brainSlot[o]=f,this.brainGen[o]=p,this.brainKind[o]=e,this.brainSignature[o]=+!!s,this.brainPhase[o]=1,this.brainState[o]=cg,this.brainTimer[o]=0,this.brainCd[o]=jg,this.brainChargeDist[o]=0,this.bossKindCount++,this.bus&&(this.spawnPayload.bossId=d,this.spawnPayload.kindId=t,this.spawnPayload.signature=s,this.bus.emit(`bossSpawned`,this.spawnPayload)),f}tickBrain(e,t,n,r,i){let a=this.arrays,o=this.brainSlot[e];if(a.state[o]===0||a.generation[o]!==this.brainGen[e]){this.brainSlot[e]=-1;return}if(a.state[o]!==2)return;this.checkPhase(e,o);let s=this.profiles[this.brainKind[e]];if(s!==null)switch(this.brainState[e]){case cg:this.brainCd[e]-=n,this.brainCd[e]<=0&&this.beginAttack(e,o,s,r);break;case lg:this.brainTimer[e]+=n,this.brainTimer[e]>=s.telegraphMs&&this.executeAttack(e,o,s,i);break;case ug:this.advanceCharge(e,o,s,t,i);break;case dg:this.brainTimer[e]+=n,this.brainTimer[e]>=Mg&&(this.brainState[e]=cg,this.brainCd[e]=s.cooldownMs*Bg[this.brainPhase[e]-1]);break}}checkPhase(e,t){let n=this.arrays,r=n.maxHp[t]>0?n.hp[t]/n.maxHp[t]:1,i=this.brainPhase[e];r<=.33?i=3:r<=.66&&(i=2),i>this.brainPhase[e]&&(this.brainPhase[e]=i,n.speed[t]*=Ig,this.bus&&(this.phasePayload.bossId=this.horde.handleAt(t),this.phasePayload.phase=i,this.bus.emit(`bossPhase`,this.phasePayload)))}beginAttack(e,t,n,r){let i=this.arrays,a=i.posX[t],o=i.posZ[t];if(this.brainTeleX[e]=a,this.brainTeleZ[e]=o,n.type===pg){let t=r.x-a,n=r.z-o,i=Math.sqrt(t*t+n*n);i>1e-4?(t/=i,n/=i):(t=1,n=0),this.brainLockX[e]=t,this.brainLockZ[e]=n}if(this.brainState[e]=lg,this.brainTimer[e]=0,this.bus){let e=this.telePayload;e.bossId=this.horde.handleAt(t),e.attackId=n.attackId,e.x=a,e.z=o,e.r=n.radius,e.msUntil=n.telegraphMs,this.bus.emit(`bossTelegraph`,e)}}executeAttack(e,t,n,r){let i=this.brainPhase[e],a=Vg[i-1],o=this.brainTeleX[e],s=this.brainTeleZ[e];switch(n.type){case fg:{let t=n.damage*a;if(this.combat.damageCircle(o,s,n.radius,t,!1,n.knockback),this.combat.damagePlayerCircle(o,s,n.radius,t),i>=2){let e=n.radius*1.5;this.combat.damageCircle(o,s,e,t*.6,!1,n.knockback),this.combat.damagePlayerCircle(o,s,e,t*.6)}this.enterRecover(e);break}case mg:{let r=i>=3?n.orbCount*2:i>=2?Math.round(n.orbCount*1.5):n.orbCount,c=this.arrays.posY[t];for(let e=0;e<r;e++){let t=e/r*Math.PI*2;this.spawnOrb(o,c,s,Math.cos(t)*n.orbSpeed,Math.sin(t)*n.orbSpeed,n.damage*a)}this.enterRecover(e);break}case hg:{let t=n.minionCount+(i-1);for(let e=0;e<t;e++){let e=this.rand()*Math.PI*2,t=n.minionRadius*(.5+this.rand()),i=o+Math.cos(e)*t,a=s+Math.sin(e)*t;r.isOffCliff(i,a)||this.horde.spawn(this.minionKindIndex,i,a,1,1,this.allKindDamage[this.minionKindIndex])}this.enterRecover(e);break}case pg:this.brainState[e]=ug,this.brainChargeDist[e]=0,this.brainTimer[e]=0;break;case gg:{let c=n.damage*a,l=this.horde.handleAt(t);this.combat.damageCircle(o,s,n.radius,c,!1,n.knockback),this.combat.damagePlayerCircle(o,s,n.radius,c),this.enqueueStrike(l,n.attackId,o,s,n.radius*1.7,c*.7,n.knockback,xg,yg),this.enqueueStrike(l,n.attackId,o,s,n.radius*2.5,c*.5,n.knockback,Sg,yg),i>=3&&this.enqueueStrike(l,n.attackId,o,s,n.radius*3.3,c*.4,n.knockback,780,yg);let u=i>=3?5:i>=2?4:3;for(let e=0;e<u;e++){let e=this.rand()*Math.PI*2,t=Cg+this.rand()*wg,i=o+Math.cos(e)*t,a=s+Math.sin(e)*t;r.isOffCliff(i,a)||this.enqueueStrike(l,`geyser`,i,a,Tg,c*.6,2,n.secondaryDelayMs,yg)}this.enterRecover(e);break}case _g:{let c=n.damage*a,l=this.horde.handleAt(t);this.surfaces?.ignite(o,s,n.radius),this.combat.damageCircle(o,s,n.radius,c*.5,!1,n.knockback),this.combat.damagePlayerCircle(o,s,n.radius,c*.5);let u=i>=3?5:i>=2?4:3;for(let e=0;e<u;e++){let e=this.rand()*Math.PI*2,t=Eg+this.rand()*Dg,i=o+Math.cos(e)*t,a=s+Math.sin(e)*t;r.isOffCliff(i,a)||this.enqueueStrike(l,n.attackId,i,a,n.radius,c*.7,1,n.secondaryDelayMs,bg)}this.enterRecover(e);break}case vg:{let r=n.damage*a,c=this.arrays.posY[t],l=i>=3?n.orbCount:Math.max(i>=2?2:1,n.orbCount-1),u=this.brainChargeDist[e];for(let e=0;e<l;e++){let t=u+e*Math.PI/l;this.spawnBeam(o,c,s,t,n.orbSpeed,r),this.spawnBeam(o,c,s,t+Math.PI,n.orbSpeed,r)}this.brainChargeDist[e]=u+Ag,this.enterRecover(e);break}}}advanceCharge(e,t,n,r,i){let a=this.arrays,o=n.chargeSpeed*r,s=a.posX[t]+this.brainLockX[e]*o,c=a.posZ[t]+this.brainLockZ[e]*o,l=i.bounds,u=!1;if(s<l.minX?(s=l.minX,u=!0):s>l.maxX&&(s=l.maxX,u=!0),c<l.minZ?(c=l.minZ,u=!0):c>l.maxZ&&(c=l.maxZ,u=!0),!u&&i.isOffCliff(s,c)&&(u=!0),u||(a.posX[t]=s,a.posZ[t]=c,a.posY[t]=i.heightAt(s,c)+a.radius[t],a.velX[t]=0,a.velZ[t]=0,this.brainChargeDist[e]+=o),u||this.brainChargeDist[e]>=Ng){let r=n.damage*Vg[this.brainPhase[e]-1];this.combat.damageCircle(a.posX[t],a.posZ[t],n.radius,r,!1,n.knockback),this.combat.damagePlayerCircle(a.posX[t],a.posZ[t],n.radius,r),this.enterRecover(e)}}enterRecover(e){this.brainState[e]=dg,this.brainTimer[e]=0}spawnOrb(e,t,n,r,i,a){let o=this.orbHead;this.orbHead=(this.orbHead+1)%og,o>=this.orbCount&&(this.orbCount=o+1),this.orbActive[o]=1,this.orbX[o]=e,this.orbY[o]=t,this.orbZ[o]=n,this.orbVX[o]=r,this.orbVZ[o]=i,this.orbTtl[o]=Fg,this.orbDmg[o]=a}tickOrbs(e,t){for(let n=0;n<this.orbCount;n++)if(this.orbActive[n]!==0){if(this.orbTtl[n]-=t,this.orbTtl[n]<=0){this.orbActive[n]=0;continue}this.orbX[n]+=this.orbVX[n]*e,this.orbZ[n]+=this.orbVZ[n]*e,this.combat.damagePlayerCircle(this.orbX[n],this.orbZ[n],Pg,this.orbDmg[n])}}spawnBeam(e,t,n,r,i,a){let o=Math.cos(r),s=Math.sin(r),c=o*i,l=s*i;for(let r=0;r<Og;r++){let i=1+r*kg;this.spawnOrb(e+o*i,t,n+s*i,c,l,a)}}enqueueStrike(e,t,n,r,i,a,o,s,c){let l=this.strikeHead;if(this.strikeHead=(this.strikeHead+1)%sg,l>=this.strikeCount&&(this.strikeCount=l+1),this.strikeActive[l]=1,this.strikeX[l]=n,this.strikeZ[l]=r,this.strikeR[l]=i,this.strikeDmg[l]=a,this.strikeKb[l]=o,this.strikeDelay[l]=s,this.strikeKind[l]=c,this.bus){let a=this.telePayload;a.bossId=e,a.attackId=t,a.x=n,a.z=r,a.r=i,a.msUntil=s,this.bus.emit(`bossTelegraph`,a)}}tickStrikes(e){for(let t=0;t<this.strikeCount;t++){if(this.strikeActive[t]===0||(this.strikeDelay[t]-=e,this.strikeDelay[t]>0))continue;this.strikeActive[t]=0;let n=this.strikeX[t],r=this.strikeZ[t],i=this.strikeR[t],a=this.strikeDmg[t];this.strikeKind[t]===bg&&this.surfaces?.ignite(n,r,i),this.combat.damageCircle(n,r,i,a,!1,this.strikeKb[t]),this.combat.damagePlayerCircle(n,r,i,a)}}onKilled=e=>{let t=e.enemyId%eg,n=(e.enemyId-t)/eg;for(let r=0;r<ag;r++){if(this.brainSlot[r]!==t||this.brainGen[r]!==n)continue;let i=this.brainSignature[r]===1;this.brainSlot[r]=-1,i?(this.bus&&(this.killPayload.bossId=e.enemyId,this.killPayload.kind=e.kind,this.killPayload.signatureId=tg[e.kind]??``,this.bus.emit(`bossKilled`,this.killPayload)),this.chests.spawn(e.x,e.y,e.z,!0),this.awardGold?.(ng)):(this.rand()<ig&&this.chests.spawn(e.x,e.y,e.z,!0),this.awardGold?.(rg));return}};minibossParams(e){return e===`bruiser`?{baseHp:440,hpPerBossKill:110,baseDmg:25}:{baseHp:805,hpPerBossKill:161,baseDmg:40}}rand(){let e=this.rngState+1831565813|0;this.rngState=e;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}};function Ug(e){return e===`bruiser`||e===`warden`}function Wg(e){if(e.tier!==`boss`&&e.tier!==`miniboss`)return null;let t=e.params??{},n={type:fg,telegraphMs:t.telegraphMs??800,radius:6,damage:e.damage,knockback:3,cooldownMs:3500,chargeSpeed:t.chargeSpeedMps??24,orbCount:t.petalCount??12,orbSpeed:t.petalSpeed??7,minionCount:t.minionCountMin??3,minionRadius:t.minionSpawnRadiusM??3,secondaryDelayMs:700,attackId:e.id};switch(e.id){case`thistlemaw`:n.type=fg,n.radius=t.rootWaveRadiusM??8,n.damage=t.rootDamage??35,n.knockback=3,n.cooldownMs=3200,n.attackId=`rootWave`;break;case`ramhorn`:n.type=pg,n.radius=t.shockwaveRadiusM??6,n.damage=e.damage,n.knockback=t.shockwaveKnockbackM??5,n.chargeSpeed=t.chargeSpeedMps??26,n.cooldownMs=3500,n.attackId=`chargeRush`;break;case`kingbloom`:n.type=mg,n.radius=3,n.damage=t.petalDamage??30,n.cooldownMs=t.barrageCooldownMs??3500,n.attackId=`petalBarrage`;break;case`tidebound`:n.type=gg,n.radius=t.slamRadiusM??7,n.damage=t.slamDamage??40,n.knockback=t.slamKnockbackM??6,n.cooldownMs=t.slamCooldownMs??4e3,n.secondaryDelayMs=720,n.attackId=`slamWave`;break;case`oilfather`:n.type=_g,n.radius=(t.poolRadiusM??3)*2,n.damage=e.damage,n.knockback=3,n.cooldownMs=3800,n.secondaryDelayMs=t.igniteDelayMs??1200,n.attackId=`oilPools`;break;case`archivist`:n.type=vg,n.radius=5,n.damage=t.beamDamagePerTick??12,n.knockback=2,n.cooldownMs=4200,n.orbCount=t.beamCount??3,n.orbSpeed=11,n.attackId=`mirrorBeams`;break;case`bruiser`:n.type=hg,n.radius=5,n.damage=25,n.knockback=3,n.cooldownMs=t.minionSpawnMs??5e3,n.minionCount=t.minionCountMin??3,n.minionRadius=t.minionSpawnRadiusM??3,n.attackId=`summon`;break;case`warden`:n.type=pg,n.radius=t.shockwaveRadiusM??5,n.damage=t.contactDamage??35,n.knockback=t.shockwaveKnockbackM??4,n.chargeSpeed=t.chargeSpeedMps??24,n.cooldownMs=3500,n.attackId=`wardenCharge`;break}return n}var Gg={megaDash:{id:`megaDash`,name:`Mega-Dash`,desc:`A dash. With opinions.`,cooldownMs:8e3,params:{distanceM:8,damage:45,iframesMs:350}},blink:{id:`blink`,name:`Blink`,desc:`Teleports. Leaves a decoy to take the blame.`,cooldownMs:9e3,params:{rangeM:9,decoyDurationMs:3e3}},groundSlam:{id:`groundSlam`,name:`Ground Slam`,desc:`Falls with purpose.`,cooldownMs:10500,params:{baseRadius:3,baseDamage:55,radiusPerFallM:.4,damagePerFallM:9,maxFallBonusM:12}},grapple:{id:`grapple`,name:`Grapple`,desc:`Point. Click. Arrive.`,cooldownMs:6500,params:{rangeM:13,pullSpeedMps:22,damage:30}},momentumDrift:{id:`momentumDrift`,name:`Momentum Drift`,desc:`Speed becomes damage. Physics, weaponized.`,cooldownMs:12e3,params:{stackRatePerSec:.15,maxStacks:8,dmgConversionPct:.45,durationMs:6e3}},afterimage:{id:`afterimage`,name:`Afterimage`,desc:`You hit it once. Then you hit it again, a second later, from the past.`,cooldownMs:14e3,params:{delayMs:1e3,repeatDamageFactor:.6,durationMs:5e3}}},Kg=class{cooldownMs;cdLeft=0;aimYaw=0;constructor(e){this.cooldownMs=e}get cooldownLeftMs(){return this.cdLeft}get readyFraction(){return this.cooldownMs<=0?1:1-this.cdLeft/this.cooldownMs}setAimYaw(e){this.aimYaw=e}forwardX(){return-Math.sin(this.aimYaw)}forwardZ(){return-Math.cos(this.aimYaw)}tryActivate(){return this.cdLeft>0||!this.onActivate()?!1:(this.cdLeft=this.cooldownMs,!0)}update(e){this.cdLeft>0&&(this.cdLeft-=e*1e3,this.cdLeft<0&&(this.cdLeft=0)),this.onUpdate(e)}},qg=220,Jg=1.3,Yg=3,Xg=4,Zg=class extends Kg{deps;id=`megaDash`;params=Gg.megaDash.params;active=!1;elapsedMs=0;startX=0;startZ=0;dirX=0;dirZ=0;stepsHit=0;constructor(e){super(Gg.megaDash.cooldownMs),this.deps=e}onActivate(){let e=this.deps.player.state;return this.startX=e.x,this.startZ=e.z,this.dirX=this.forwardX(),this.dirZ=this.forwardZ(),this.active=!0,this.elapsedMs=0,this.stepsHit=0,this.deps.player.grantIFrames(this.params.iframesMs),!0}onUpdate(e){if(!this.active)return;this.elapsedMs+=e*1e3;let t=Math.min(1,this.elapsedMs/qg),n=this.params.distanceM*t,r=this.startX+this.dirX*n,i=this.startZ+this.dirZ*n;if(!this.deps.player.teleportTo(r,i,this.deps.terrain)){this.active=!1;return}let a=(this.stepsHit+1)/Yg;this.stepsHit<Yg&&t>=a&&(this.stepsHit++,this.deps.combat.damageCircle(r,i,Jg,this.params.damage,!1,Xg)),t>=1&&(this.active=!1)}},Qg=12,$g=class extends Kg{deps;id=`blink`;params=Gg.blink.params;scratch;decoyX=0;decoyZ=0;decoyActive=!1;decoyMsLeft=0;constructor(e){super(Gg.blink.cooldownMs),this.deps=e,this.scratch=new Uint32Array(e.arrays.capacity)}onActivate(){let e=this.deps.player.state,t=this.forwardX()*this.params.rangeM,n=this.forwardZ()*this.params.rangeM,r=e.x,i=e.z;return this.deps.player.teleportTo(e.x+t,e.z+n,this.deps.terrain)?(this.decoyX=r,this.decoyZ=i,this.decoyActive=!0,this.decoyMsLeft=this.params.decoyDurationMs,!0):!1}onUpdate(e){if(this.decoyActive){if(this.decoyMsLeft-=e*1e3,this.decoyMsLeft<=0){this.decoyActive=!1;return}this.applyTaunt()}}applyTaunt(){let e=this.deps.arrays,t=this.deps.hash.queryCircle(this.decoyX,this.decoyZ,Qg,this.scratch);for(let n=0;n<t;n++){let t=this.scratch[n];if(e.state[t]!==2)continue;let r=this.decoyX-e.posX[t],i=this.decoyZ-e.posZ[t],a=Math.sqrt(r*r+i*i);if(a<1e-4)continue;let o=e.speed[t];e.velX[t]=r/a*o,e.velZ[t]=i/a*o}}},e_=2,t_=6,n_=class extends Kg{deps;id=`groundSlam`;params=Gg.groundSlam.params;unsub;pending=!1;constructor(e){super(Gg.groundSlam.cooldownMs),this.deps=e,this.unsub=e.bus.on(`playerLanded`,e=>{this.pending&&(this.pending=!1,this.resolveSlam(e.fallHeight))})}onActivate(){let e=this.deps.player.state;return e.grounded?!1:(e.vy>-30&&this.deps.player.applyImpulse(0,-30-e.vy,0),this.pending=!0,!0)}onUpdate(e){}resolveSlam(e){let t=this.deps.player.state,n=Math.min(e+e_,this.params.maxFallBonusM),r=this.params.baseRadius+n*this.params.radiusPerFallM,i=this.params.baseDamage+n*this.params.damagePerFallM;this.deps.combat.damageCircle(t.x,t.z,r,i,!1,t_)}dispose(){this.unsub()}},r_=Math.cos(35*Math.PI/180),i_=1.5,a_=1,o_=1.4,s_=5,c_=class extends Kg{deps;id=`grapple`;params=Gg.grapple.params;scratch;active=!1;elapsedMs=0;durationMs=1;startX=0;startZ=0;targetX=0;targetZ=0;arrivalDamage=0;constructor(e){super(Gg.grapple.cooldownMs),this.deps=e,this.scratch=new Uint32Array(e.arrays.capacity)}onActivate(){let e=this.deps.player.state,t=this.forwardX(),n=this.forwardZ(),r=this.params.rangeM,i=e.x+t*r,a=e.z+n*r,o=0,s=this.deps.isPriorityTarget,c=s?this.findConeTarget(e.x,e.z,t,n,r,s):-1;if(c>=0){let r=this.deps.arrays,s=r.posX[c]-e.x,l=r.posZ[c]-e.z,u=Math.sqrt(s*s+l*l),d=Math.max(0,u-(r.radius[c]+e.radius));i=e.x+(u>1e-4?s/u:t)*d,a=e.z+(u>1e-4?l/u:n)*d,o=this.params.damage}else{let o=this.findTerrainRise(e.x,e.z,t,n,r,e.y);o&&(i=o.x,a=o.z)}this.startX=e.x,this.startZ=e.z,this.targetX=i,this.targetZ=a;let l=Math.hypot(i-e.x,a-e.z);return this.durationMs=Math.max(1,l/this.params.pullSpeedMps*1e3),this.arrivalDamage=o,this.elapsedMs=0,this.active=!0,this.deps.player.grantIFrames(this.durationMs),!0}onUpdate(e){if(!this.active)return;this.elapsedMs+=e*1e3;let t=Math.min(1,this.elapsedMs/this.durationMs),n=this.startX+(this.targetX-this.startX)*t,r=this.startZ+(this.targetZ-this.startZ)*t;this.deps.player.teleportTo(n,r,this.deps.terrain),t>=1&&(this.active=!1,this.arrivalDamage>0&&this.deps.combat.damageCircle(this.targetX,this.targetZ,o_,this.arrivalDamage,!1,s_))}findConeTarget(e,t,n,r,i,a){let o=this.deps.arrays,s=this.deps.hash.queryCircle(e,t,i,this.scratch),c=-1,l=1/0;for(let u=0;u<s;u++){let s=this.scratch[u];if(o.state[s]!==2||!a(o.kindIndex[s]))continue;let d=o.posX[s]-e,f=o.posZ[s]-t,p=Math.sqrt(d*d+f*f);p<1e-4||p>i||d/p*n+f/p*r<r_||p<l&&(l=p,c=s)}return c}findTerrainRise(e,t,n,r,i,a){let o=Math.max(1,Math.floor(i/a_));for(let i=1;i<=o;i++){let o=i*a_,s=e+n*o,c=t+r*o;if(this.deps.terrain.heightAt(s,c)-a>i_)return{x:s,z:c}}return null}},l_=class extends Kg{id=`momentumDrift`;params=Gg.momentumDrift.params;unsub;stacks=0;buffMsLeft=0;buffMightMult=1;constructor(e){super(Gg.momentumDrift.cooldownMs),this.unsub=e.bus.on(`playerDamaged`,()=>{this.stacks=0})}get speedMult(){return 1+this.stackFraction()*this.params.dmgConversionPct}get mightMult(){return this.buffMsLeft>0?this.buffMightMult:1}stackFraction(){return this.params.maxStacks>0?this.stacks/this.params.maxStacks:0}onActivate(){return this.stacks<=0?!1:(this.buffMightMult=1+this.stackFraction()*this.params.dmgConversionPct,this.buffMsLeft=this.params.durationMs,this.stacks=0,!0)}onUpdate(e){this.buffMsLeft>0&&(this.buffMsLeft-=e*1e3,this.buffMsLeft<0&&(this.buffMsLeft=0)),this.stacks<this.params.maxStacks&&(this.stacks=Math.min(this.params.maxStacks,this.stacks+this.params.stackRatePerSec*e))}dispose(){this.unsub()}},u_=48,d_=1.2,f_=class extends Kg{deps;id=`afterimage`;params=Gg.afterimage.params;unsub;recordMsLeft=0;qX=new Float32Array(u_);qZ=new Float32Array(u_);qDamage=new Float32Array(u_);qMsLeft=new Float32Array(u_);qActive=new Uint8Array(u_);qHead=0;constructor(e){super(Gg.afterimage.cooldownMs),this.deps=e,this.unsub=e.bus.on(`weaponFired`,e=>this.onWeaponFired(e))}onActivate(){return this.recordMsLeft=this.params.durationMs,!0}onUpdate(e){this.recordMsLeft>0&&(this.recordMsLeft-=e*1e3,this.recordMsLeft<0&&(this.recordMsLeft=0));let t=e*1e3;for(let e=0;e<u_;e++)this.qActive[e]&&(this.qMsLeft[e]-=t,this.qMsLeft[e]<=0&&(this.qActive[e]=0,this.deps.combat.damageCircle(this.qX[e],this.qZ[e],d_,this.qDamage[e],!1,0)))}onWeaponFired(e){if(this.recordMsLeft<=0)return;let t=ap[e.weaponId],n=(t?t.baseDamage:0)*this.params.repeatDamageFactor;if(!(n<=0))for(let t=0;t<u_;t++){let t=this.qHead;if(this.qHead=(this.qHead+1)%u_,!this.qActive[t]){this.qActive[t]=1,this.qX[t]=e.x,this.qZ[t]=e.z,this.qDamage[t]=n,this.qMsLeft[t]=this.params.delayMs;return}}}dispose(){this.unsub()}};function p_(e,t){switch(e){case`megaDash`:return new Zg(t);case`blink`:return new $g(t);case`groundSlam`:return new n_(t);case`grapple`:return new c_(t);case`momentumDrift`:return new l_(t);case`afterimage`:return new f_(t);default:throw Error(`Unknown signature id: ${e}`)}}var m_=class{runtime;constructor(e,t){this.runtime=p_(e,t)}get id(){return this.runtime.id}get cooldownLeftMs(){return this.runtime.cooldownLeftMs}get readyFraction(){return this.runtime.readyFraction}get mightMult(){return this.runtime.mightMult??1}get decoyActive(){return this.runtime.decoyActive??!1}get decoyX(){return this.runtime.decoyX??0}get decoyZ(){return this.runtime.decoyZ??0}update(e,t,n){this.runtime.setAimYaw(n),t&&this.runtime.tryActivate(),this.runtime.update(e)}dispose(){this.runtime.dispose?.()}},h_=[10,20,35,55,80],g_={damage:{id:`damage`,name:`Sharper Rock`,desc:`Everything you own hits 1% harder. Rocks included.`,perRank:.01,ranks:5,lane:`power`},maxHp:{id:`maxHp`,name:`More Meat`,desc:`+2% max HP per rank. More of you to hit.`,perRank:.02,ranks:5,lane:`power`},attackSpeed:{id:`attackSpeed`,name:`Twitchier`,desc:`+1% attack speed per rank. Subject to the usual soft knee.`,perRank:.01,ranks:5,lane:`power`},moveSpeed:{id:`moveSpeed`,name:`Bigger Legs`,desc:`+0.8% move speed per rank. Outrun the leprechaun eventually.`,perRank:.008,ranks:5,lane:`power`},armor:{id:`armor`,name:`Extra Skin`,desc:`+1 flat armor per rank. Ablative, not decorative.`,perRank:1,ranks:5,lane:`power`},regen:{id:`regen`,name:`Stubbornness`,desc:`+0.1 HP/s per rank. You will not be dying to attrition.`,perRank:.1,ranks:5,lane:`power`},pickup:{id:`pickup`,name:`Longer Arms`,desc:`+3% pickup radius per rank. That gold was already yours.`,perRank:.03,ranks:5,lane:`power`},luck:{id:`luck`,name:`Rigged Dice`,desc:`+1 luck per rank. Shifts the rarity table, doesn't fix the dice.`,perRank:1,ranks:5,lane:`power`},goldGain:{id:`goldGain`,name:`Bigger Pockets`,desc:`+2% gold gain per rank. Feeds the rest of this shop.`,perRank:.02,ranks:5,lane:`power`},startGold:{id:`startGold`,name:`Head Start`,desc:`+20 starting gold per rank. Show up already rich-ish.`,perRank:20,ranks:5,lane:`power`},rerolls:{id:`rerolls`,name:`Do-Over`,desc:`+1 level-up reroll per rank, on top of your free one.`,perRank:1,ranks:3,lane:`qol`},banishes:{id:`banishes`,name:`Never Again`,desc:`+1 level-up banish per rank, on top of your free one.`,perRank:1,ranks:3,lane:`qol`},skips:{id:`skips`,name:`Not Interested`,desc:`+1 level-up skip per rank. You start with zero.`,perRank:1,ranks:5,lane:`qol`},weaponBans:{id:`weaponBans`,name:`Blacklist`,desc:`+1 permanent weapon ban per rank. It will never be offered again.`,perRank:1,ranks:3,lane:`qol`},tomeBans:{id:`tomeBans`,name:`Also Blacklist`,desc:`+1 permanent passive ban per rank. Same idea, shorter list.`,perRank:1,ranks:2,lane:`qol`}},__={bonkrat:{id:`bonkrat`,name:`Bonkrat`,desc:`Hits things with a hammer. Effective.`,signatureId:`megaDash`,startWeaponId:`bonkHammer`,baseStats:{maxHp:100,speed:6,might:1},unlockedFromStart:!0},wispmother:{id:`wispmother`,name:`Wispmother`,desc:`Made of glass. Throws bolts anyway.`,signatureId:`blink`,startWeaponId:`spiritBolts`,baseStats:{maxHp:70,speed:6.8,might:1.1},unlockedFromStart:!0},cragjaw:{id:`cragjaw`,name:`Cragjaw`,desc:`Slow. Heavy. Unbothered.`,signatureId:`groundSlam`,startWeaponId:`boulderToss`,baseStats:{maxHp:150,speed:5,might:1.05},unlockedFromStart:!1},hookline:{id:`hookline`,name:`Hookline`,desc:`Goes where the harpoon goes.`,signatureId:`grapple`,startWeaponId:`harpoon`,baseStats:{maxHp:95,speed:6.6,might:.95},unlockedFromStart:!1},slipstream:{id:`slipstream`,name:`Slipstream`,desc:`Never stops moving. Doesn’t know how.`,signatureId:`momentumDrift`,startWeaponId:`windBlades`,baseStats:{maxHp:85,speed:7.2,might:.9},unlockedFromStart:!1},echoKnight:{id:`echoKnight`,name:`Echo Knight`,desc:`Hits you twice. Once now, once later.`,signatureId:`afterimage`,startWeaponId:`twinSaber`,baseStats:{maxHp:100,speed:6,might:.95},unlockedFromStart:!1}},v_={meadowfall:{id:`meadowfall`,name:`Meadowfall`,tagline:`Rolling hills. Cliff edges. Bring a hammer.`,paletteId:`toyMeadow`,tuning:{hpMult:1,dmgMult:1,speedMult:1,spawnRateMult:1},spawnTable:[{kindId:`blob`,weight:35,fromSec:0},{kindId:`sprinter`,weight:20,fromSec:0},{kindId:`chonker`,weight:10,fromSec:0},{kindId:`mite`,weight:25,fromSec:0},{kindId:`popper`,weight:10,fromSec:0},{kindId:`spitter`,weight:15,fromSec:120},{kindId:`charger`,weight:12,fromSec:240},{kindId:`splitter`,weight:10,fromSec:420}],bosses:[{atSec:600,kindId:`thistlemaw`,signature:!0},{atSec:1200,kindId:`ramhorn`,signature:!0},{atSec:1800,kindId:`kingbloom`,signature:!0}],shrineCount:4,launchPads:3,surfaces:{grass:!0,water:!0,oil:!1},unlockedFromStart:!0},sunkenSteps:{id:`sunkenSteps`,name:`The Sunken Steps`,tagline:`Vertical ziggurat ruins. The oil is not water.`,paletteId:`duskArcade`,tuning:{hpMult:1.15,dmgMult:1.1,speedMult:1,spawnRateMult:1.1},spawnTable:[{kindId:`blob`,weight:30,fromSec:0},{kindId:`sprinter`,weight:18,fromSec:0},{kindId:`chonker`,weight:10,fromSec:0},{kindId:`mite`,weight:20,fromSec:0},{kindId:`popper`,weight:8,fromSec:0},{kindId:`wisp`,weight:12,fromSec:120},{kindId:`wraith`,weight:10,fromSec:180},{kindId:`sniper`,weight:8,fromSec:300}],bosses:[{atSec:600,kindId:`tidebound`,signature:!0},{atSec:1200,kindId:`oilfather`,signature:!0},{atSec:1800,kindId:`archivist`,signature:!0}],shrineCount:3,launchPads:5,surfaces:{grass:!1,water:!0,oil:!0},unlockedFromStart:!1}},y_={firstBlood:{id:`firstBlood`,name:`It Moved, Then It Didn't`,desc:`Get your first kill of a run. Statistically insignificant. Emotionally significant.`,kind:`runStat`,stat:`kills`,target:1},hundredKills:{id:`hundredKills`,name:`That Was Rude`,desc:`100 kills, lifetime. You're getting the hang of this.`,kind:`lifetime`,stat:`kills`,target:100},thousandKills:{id:`thousandKills`,name:`It Kept Happening`,desc:`1,000 kills, lifetime.`,kind:`lifetime`,stat:`kills`,target:1e3,unlocks:{weapon:`teslaRing`}},tenThousandKills:{id:`tenThousandKills`,name:`Statistically You Are The Problem`,desc:`10,000 kills, lifetime. The horde has noticed.`,kind:`lifetime`,stat:`kills`,target:1e4},survive10:{id:`survive10`,name:`Ten Minutes, Barely`,desc:`Survive 10 minutes in one run.`,kind:`runStat`,stat:`timeSec`,target:600},survive20:{id:`survive20`,name:`Twenty Minutes In A Blender`,desc:`Survive 20 minutes in one run.`,kind:`runStat`,stat:`timeSec`,target:1200,unlocks:{weapon:`quakeBoots`}},survive30:{id:`survive30`,name:`You Outlasted The Horde`,desc:`Survive the full 30 minutes in one run.`,kind:`runStat`,stat:`timeSec`,target:1800,unlocks:{weapon:`cometStaff`}},goldHoarder:{id:`goldHoarder`,name:`Numbers Go Up`,desc:`5,000 gold banked, lifetime.`,kind:`lifetime`,stat:`gold`,target:5e3},goldBaron:{id:`goldBaron`,name:`Financially Suspicious`,desc:`25,000 gold banked, lifetime.`,kind:`lifetime`,stat:`gold`,target:25e3,unlocks:{weapon:`anvilRain`}},cliffKill1:{id:`cliffKill1`,name:`Gravity Assist`,desc:`Knock one enemy off a cliff. Free real estate.`,kind:`runStat`,stat:`cliffKills`,target:1},cliffKill50:{id:`cliffKill50`,name:`Physics Is A Weapon`,desc:`50 cliff kills, lifetime.`,kind:`lifetime`,stat:`cliffKills`,target:50,unlocks:{weapon:`ricochetOrb`}},cliffKill250:{id:`cliffKill250`,name:`OSHA Has Concerns`,desc:`250 cliff kills, lifetime. None of them were accidents.`,kind:`lifetime`,stat:`cliffKills`,target:250},shrineDabbler:{id:`shrineDabbler`,name:`Read The Fine Print`,desc:`Activate one risk shrine in a run.`,kind:`runStat`,stat:`shrines`,target:1},shrineAddict:{id:`shrineAddict`,name:`You Signed For This`,desc:`25 shrines activated, lifetime.`,kind:`lifetime`,stat:`shrines`,target:25,unlocks:{character:`cragjaw`}},chestOpener:{id:`chestOpener`,name:`It Was Probably Fine`,desc:`Open one chest in a run.`,kind:`runStat`,stat:`chests`,target:1},chestCollector:{id:`chestCollector`,name:`Loot Goblin, Certified`,desc:`50 chests opened, lifetime.`,kind:`lifetime`,stat:`chests`,target:50,unlocks:{weapon:`swarmHive`}},bossFirst:{id:`bossFirst`,name:`Big Thing, Dead Thing`,desc:`Kill one boss in a run.`,kind:`runStat`,stat:`bosses`,target:1},bossSlayer:{id:`bossSlayer`,name:`Professional Big Thing Killer`,desc:`25 bosses killed, lifetime.`,kind:`lifetime`,stat:`bosses`,target:25,unlocks:{character:`hookline`}},meadowfallClear:{id:`meadowfallClear`,name:`Meadow: Mowed`,desc:`Clear Meadowfall — kill the 30:00 boss and survive the Encore.`,kind:`event`,levelId:`meadowfall`,unlocks:{level:`sunkenSteps`}},sunkenStepsClear:{id:`sunkenStepsClear`,name:`Ziggurat: Sunk Further`,desc:`Clear The Sunken Steps — kill the 30:00 boss and survive the Encore.`,kind:`event`,levelId:`sunkenSteps`},deathFirst:{id:`deathFirst`,name:`Phase One: Dying`,desc:`Die once, lifetime. It's a whole system.`,kind:`lifetime`,stat:`deaths`,target:1},deathTen:{id:`deathTen`,name:`Practice, Allegedly`,desc:`Die 10 times, lifetime.`,kind:`lifetime`,stat:`deaths`,target:10,unlocks:{weapon:`voidSiphon`}},deathFifty:{id:`deathFifty`,name:`Ash, Technically`,desc:`Die 50 times, lifetime.`,kind:`lifetime`,stat:`deaths`,target:50,unlocks:{character:`slipstream`}},firstEvolution:{id:`firstEvolution`,name:`It Evolved. You Saw That Coming.`,desc:`Evolve a weapon for the first time.`,kind:`event`,unlocks:{weapon:`beamPrism`}},revenantSlain:{id:`revenantSlain`,name:`Beat Yourself, Technically`,desc:`Defeat your own Echo Revenant — the ghost wearing your last build.`,kind:`event`,unlocks:{character:`echoKnight`}},pathRetraced:{id:`pathRetraced`,name:`Deja Vu, Weaponized`,desc:`Get caught by your own Echo Revenant's trail damage. Rude, in retrospect.`,kind:`event`,unlocks:{weapon:`encore`}},potOfGold:{id:`potOfGold`,name:`Free Money, Angry Leprechaun`,desc:`Loot the pot of gold. He noticed immediately.`,kind:`event`},leprechaunSlayer:{id:`leprechaunSlayer`,name:`Didn't Even Want The Gold`,desc:`Kill the leprechaun outright. Bold strategy.`,kind:`event`},maxLevelRun:{id:`maxLevelRun`,name:`Statistically Overleveled`,desc:`Reach character level 30 in one run.`,kind:`runStat`,stat:`level`,target:30},fullClearAllBosses:{id:`fullClearAllBosses`,name:`Three For Three`,desc:`Kill all three signature bosses of one map in a single run.`,kind:`event`},fiveHundredKills:{id:`fiveHundredKills`,name:`It's A Lifestyle Now`,desc:`500 kills, lifetime. Nobody's counting. You are, obviously.`,kind:`lifetime`,stat:`kills`,target:500,unlocks:{passive:`area`}},levelFifteen:{id:`levelFifteen`,name:`Halfway To Overleveled`,desc:`Reach character level 15 in one run. The other half is greed.`,kind:`runStat`,stat:`level`,target:15,unlocks:{passive:`cooldown`}},serialDefenestrator:{id:`serialDefenestrator`,name:`Serial Defenestrator`,desc:`Knock 10 enemies off a cliff in one run. Momentum is a lifestyle.`,kind:`runStat`,stat:`cliffKills`,target:10,unlocks:{passive:`bounce`}},firstGrand:{id:`firstGrand`,name:`One Thousand, Suspicious`,desc:`1,000 gold banked, lifetime. Where it came from is between you and it.`,kind:`lifetime`,stat:`gold`,target:1e3,unlocks:{passive:`curse`}}},b_=`whomp_meta`,x_={rerolls:1,banishes:1,skips:0};function S_(){return{kills:0,runs:0,bosses:0,chests:0,deaths:0,bestTimeSec:0,gold:0,cliffKills:0,shrines:0,clears:{}}}function C_(){return{v:1,gold:0,lifetime:S_(),shopRanks:{},achievements:[]}}function w_(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function T_(e,t){return typeof e==`number`&&Number.isFinite(e)&&e>=0?e:t}function E_(e){let t={};if(!w_(e))return t;for(let n of Object.keys(v_)){let r=e[n];typeof r==`number`&&Number.isFinite(r)&&r>=0&&(t[n]=Math.floor(r))}return t}function D_(e){let t={};if(!w_(e))return t;for(let[n,r]of Object.entries(g_)){let i=e[n];typeof i==`number`&&Number.isFinite(i)&&i>0&&(t[n]=Math.min(Math.floor(i),r.ranks))}return t}function O_(e){if(!Array.isArray(e))return[];let t=[],n=new Set;for(let r of e)typeof r==`string`&&y_[r]&&!n.has(r)&&(n.add(r),t.push(r));return t}function k_(e){let t=C_();if(!w_(e))return t;let n=w_(e.lifetime)?e.lifetime:{};return{v:1,gold:T_(e.gold,t.gold),lifetime:{kills:T_(n.kills,0),runs:T_(n.runs,0),bosses:T_(n.bosses,0),chests:T_(n.chests,0),deaths:T_(n.deaths,0),bestTimeSec:T_(n.bestTimeSec,0),gold:T_(n.gold,0),cliffKills:T_(n.cliffKills,0),shrines:T_(n.shrines,0),clears:E_(n.clears)},shopRanks:D_(e.shopRanks),achievements:O_(e.achievements)}}function A_(e){return Object.values(e).filter(e=>e.unlockedFromStart&&!e.evolved).map(e=>e.id)}function j_(e){return e?e.weapon?ap[e.weapon]?.name??e.weapon:e.passive?Hp[e.passive]?.name??e.passive:e.character?__[e.character]?.name??e.character:e.level?v_[e.level]?.name??e.level:null:null}function M_(e){let t=j_(e.unlocks);return t?`ACHIEVEMENT: ${e.name} — unlocks ${t}.`:`ACHIEVEMENT: ${e.name}.`}function N_(){try{return typeof localStorage<`u`?localStorage:void 0}catch{return}}function P_(e){if(!e)return!1;let t=`__whomp_meta_probe__`;try{return e.setItem(t,`1`),e.removeItem(t),!0}catch{return!1}}var F_=class{goldBalance=0;lifetimeStats=S_();shopRanks=new Map;unlockedAchievementIds=new Set;unlockedWeaponIds=new Set;unlockedPassiveIds=new Set;unlockedCharacterIds=new Set;unlockedLevelIds=new Set;toastQueue=[];storage;canPersist;constructor(e={}){this.storage=e.storage??N_(),this.canPersist=P_(this.storage),this.load()}get gold(){return this.goldBalance}get unlockedWeapons(){return this.unlockedWeaponIds}get unlockedPassives(){return this.unlockedPassiveIds}get unlockedCharacters(){return this.unlockedCharacterIds}get unlockedLevels(){return this.unlockedLevelIds}shopRank(e){return this.shopRanks.get(e)??0}shopStatBonus(e){let t=g_[e];return t?t.perRank*this.shopRank(e):0}qolCapacity(e){return x_[e]+this.shopStatBonus(e)}buy(e){let t=g_[e];if(!t)return!1;let n=this.shopRank(e);if(n>=t.ranks)return!1;let r=h_[n];return r===void 0||this.goldBalance<r?!1:(this.goldBalance-=r,this.shopRanks.set(e,n+1),this.persist(),!0)}bankRun(e,t){let n=Math.max(0,e);this.goldBalance+=n;let r=this.lifetimeStats;r.gold+=n,r.runs+=1,r.kills+=Math.max(0,t.kills),t.timeSec>r.bestTimeSec&&(r.bestTimeSec=t.timeSec),t.win&&t.levelId&&(r.clears[t.levelId]=(r.clears[t.levelId]??0)+1),t.bosses&&(r.bosses+=t.bosses),t.chests&&(r.chests+=t.chests),t.deaths&&(r.deaths+=t.deaths),t.cliffKills&&(r.cliffKills+=t.cliffKills),t.shrines&&(r.shrines+=t.shrines),this.persist()}drainToasts(){let e=this.toastQueue;return this.toastQueue=[],e}get lifetime(){return this.lifetimeStats}hasAchievement(e){return this.unlockedAchievementIds.has(e)}unlockAchievement(e){if(this.unlockedAchievementIds.has(e))return!1;let t=y_[e];return t?(this.unlockedAchievementIds.add(e),this.applyUnlockPayload(t.unlocks),this.toastQueue.push(M_(t)),this.persist(),!0):!1}applyUnlockPayload(e){e&&(e.weapon&&ap[e.weapon]&&this.unlockedWeaponIds.add(e.weapon),e.passive&&Hp[e.passive]&&this.unlockedPassiveIds.add(e.passive),e.character&&__[e.character]&&this.unlockedCharacterIds.add(e.character),e.level&&v_[e.level]&&this.unlockedLevelIds.add(e.level))}rebuildUnlockedSets(){this.unlockedWeaponIds=new Set(A_(ap)),this.unlockedPassiveIds=new Set(A_(Hp)),this.unlockedCharacterIds=new Set(A_(__)),this.unlockedLevelIds=new Set(A_(v_));for(let e of this.unlockedAchievementIds){let t=y_[e];t&&this.applyUnlockPayload(t.unlocks)}}load(){let e=k_(this.readRaw());this.goldBalance=e.gold,this.lifetimeStats=e.lifetime,this.shopRanks.clear();for(let[t,n]of Object.entries(e.shopRanks))this.shopRanks.set(t,n);this.unlockedAchievementIds.clear();for(let t of e.achievements)this.unlockedAchievementIds.add(t);this.rebuildUnlockedSets(),this.persist()}readRaw(){if(this.storage)try{let e=this.storage.getItem(b_);return e?JSON.parse(e):void 0}catch{return}}persist(){if(!this.canPersist||!this.storage)return;let e={v:1,gold:this.goldBalance,lifetime:this.lifetimeStats,shopRanks:Object.fromEntries(this.shopRanks),achievements:[...this.unlockedAchievementIds]};try{this.storage.setItem(b_,JSON.stringify(e))}catch{this.canPersist=!1}}},I_=.05,L_=1,R_=5,z_=25;function B_(e){let t=new Map;for(let n of Object.values(y_)){if(n.kind!==e||!n.stat||n.target===void 0)continue;let r=t.get(n.stat);r?r.push(n):t.set(n.stat,[n])}return t}var V_=[],H_=class{bus;meta;rng;unsubscribes;runStatByStat;lifetimeByStat;levelClearEvents;runKills=0;runTimeSec=0;runCliffKills=0;runShrines=0;runChests=0;runBosses=0;runLevel=1;runDied=!1;runLevelId=``;runGoldGranted=0;runBossKindsKilled=new Set;eliteOutstanding=new Map;constructor(e){this.bus=e.bus,this.meta=e.meta,this.rng=e.rng??Math.random,this.runStatByStat=B_(`runStat`),this.lifetimeByStat=B_(`lifetime`),this.levelClearEvents=Object.values(y_).filter(e=>e.kind===`event`&&!!e.levelId),this.unsubscribes=[this.bus.on(`runStarted`,this.onRunStarted),this.bus.on(`runEnded`,this.onRunEnded),this.bus.on(`enemyKilled`,this.onEnemyKilled),this.bus.on(`eliteSpawned`,this.onEliteSpawned),this.bus.on(`playerDied`,this.onPlayerDied),this.bus.on(`levelUp`,this.onLevelUp),this.bus.on(`weaponEvolved`,this.onWeaponEvolved),this.bus.on(`shrineActivated`,this.onShrineActivated),this.bus.on(`chestOpened`,this.onChestOpened),this.bus.on(`echoTrailCrossed`,this.onEchoTrailCrossed),this.bus.on(`revenantSlain`,this.onRevenantSlain),this.bus.on(`potLooted`,this.onPotLooted)]}update(e){this.runTimeSec+=e,this.evaluateRunStat(`timeSec`)}dispose(){for(let e of this.unsubscribes)e()}onRunStarted=e=>{this.runKills=0,this.runTimeSec=0,this.runCliffKills=0,this.runShrines=0,this.runChests=0,this.runBosses=0,this.runLevel=1,this.runDied=!1,this.runLevelId=e.levelId,this.runGoldGranted=0,this.runBossKindsKilled.clear(),this.eliteOutstanding.clear()};onRunEnded=e=>{this.evaluateRunStat(`timeSec`),e.win&&this.evaluateLevelClear(),this.meta.bankRun(e.gold,{kills:e.kills,timeSec:e.timeSec,win:e.win,levelId:this.runLevelId,bosses:this.runBosses,chests:this.runChests,deaths:+!!this.runDied,cliffKills:this.runCliffKills,shrines:this.runShrines}),this.evaluateLifetime()};onEnemyKilled=e=>{if(this.runKills++,this.evaluateRunStat(`kills`),e.byCliff){this.runCliffKills++,this.evaluateRunStat(`cliffKills`);return}e.kind===`leprechaun`&&this.unlock(`leprechaunSlayer`);let t=Pp[e.kind]?.tier;if(t===`boss`||t===`miniboss`){this.runBosses++,this.evaluateRunStat(`bosses`),this.emitGold(z_),t===`boss`&&(this.runBossKindsKilled.add(e.kind),this.evaluateFullClearAllBosses());return}let n=this.eliteOutstanding.get(e.kind)??0;if(n>0){this.eliteOutstanding.set(e.kind,n-1),this.emitGold(R_);return}this.rng()<I_&&this.emitGold(L_)};onEliteSpawned=e=>{this.eliteOutstanding.set(e.kindId,(this.eliteOutstanding.get(e.kindId)??0)+1)};onPlayerDied=()=>{this.runDied=!0};onLevelUp=e=>{this.runLevel=e.level,this.evaluateRunStat(`level`)};onWeaponEvolved=()=>{this.unlock(`firstEvolution`)};onShrineActivated=()=>{this.runShrines++,this.evaluateRunStat(`shrines`)};onChestOpened=()=>{this.runChests++,this.evaluateRunStat(`chests`)};onEchoTrailCrossed=()=>{this.unlock(`pathRetraced`)};onRevenantSlain=()=>{this.unlock(`revenantSlain`)};onPotLooted=()=>{this.unlock(`potOfGold`)};emitGold(e){this.runGoldGranted+=e,this.bus.emit(`goldGained`,{amount:e,total:this.runGoldGranted})}statValue(e){switch(e){case`kills`:return this.runKills;case`timeSec`:return this.runTimeSec;case`cliffKills`:return this.runCliffKills;case`shrines`:return this.runShrines;case`chests`:return this.runChests;case`bosses`:return this.runBosses;case`level`:return this.runLevel;default:return 0}}evaluateRunStat(e){let t=this.runStatByStat.get(e)??V_,n=this.statValue(e);for(let e of t)e.target!==void 0&&n>=e.target&&this.unlock(e.id)}lifetimeStatValue(e){let t=this.meta.lifetime;switch(e){case`kills`:return t.kills;case`gold`:return t.gold;case`bosses`:return t.bosses;case`chests`:return t.chests;case`deaths`:return t.deaths;case`cliffKills`:return t.cliffKills;case`shrines`:return t.shrines;default:return}}evaluateLifetime(){for(let[e,t]of this.lifetimeByStat){let n=this.lifetimeStatValue(e);if(n!==void 0)for(let e of t)e.target!==void 0&&n>=e.target&&this.unlock(e.id)}}evaluateLevelClear(){for(let e of this.levelClearEvents)e.levelId===this.runLevelId&&this.unlock(e.id)}evaluateFullClearAllBosses(){let e=v_[this.runLevelId];e&&e.bosses.every(e=>this.runBossKindsKilled.has(e.kindId))&&this.unlock(`fullClearAllBosses`)}unlock(e){this.meta.unlockAchievement(e)&&this.bus.emit(`achievementUnlocked`,{id:e})}},U_=200,W_=.62,G_=1.1,K_=3,q_=.58,J_=.72,Y_=.5,X_=1.6,Z_=3.2,Q_=1.3,$_=2.3,ev=.18;function tv(e,t,n){return n.copy(t).offsetHSL((e()-.5)*.03,0,(e()-.5)*.08),n}function nv(e){let t=e>>>0;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}function rv(e,t){let n=e.bounds.maxX-e.bounds.minX,r=new na(n,n,U_,U_);r.rotateX(-Math.PI/2);let i=r.attributes.position,a=new Float32Array(i.count*3),o=new G(t.groundA),s=new G(t.groundB),c=new G(t.cliff),l=e.cellSize;for(let t=0;t<i.count;t++){let n=i.getX(t),r=i.getZ(t),u=e.heightAt(n,r);i.setY(t,u);let d=(e.heightAt(n+l,r)-e.heightAt(n-l,r))/(2*l),f=(e.heightAt(n,r+l)-e.heightAt(n,r-l))/(2*l),p=1/Math.sqrt(d*d+f*f+1)<W_?c:(Math.floor(n*.7)+Math.floor(r*.7))%2==0?o:s;a[t*3]=p.r,a[t*3+1]=p.g,a[t*3+2]=p.b}r.setAttribute(`color`,new hr(a,3));let u=r.toNonIndexed();r.dispose(),u.computeVertexNormals();let d=new K(u,new q({vertexColors:!0,flatShading:!0,roughness:1}));return d.receiveShadow=!0,d}function iv(e,t,n,r,i,a){let o=new Ei(e,t,n.length),s=new Cn,c=new G;for(let e=0;e<n.length;e++){let t=n[e];s.position.set(t.x,t.y+r*t.scale,t.z),s.scale.setScalar(t.scale),s.rotation.set(0,t.rotY,0),s.updateMatrix(),o.setMatrixAt(e,s.matrix),i&&o.setColorAt(e,tv(a,i,c))}return o.instanceMatrix.needsUpdate=!0,o.instanceColor&&(o.instanceColor.needsUpdate=!0),o.castShadow=!0,o}function av(e,t,n){let r=new Xi(q_,J_,1,8,1);r.translate(0,.5,0);let i=new Xi(Y_,Y_,1,8,1);i.rotateZ(Math.PI/2);let a=new q({color:16777215,flatShading:!0,roughness:.95}),o=new q({color:16777215,flatShading:!0,roughness:.97}),s=new Ei(r,a,e.length),c=new Ei(i,o,e.length),l=new G(t.tree),u=new G(t.rock),d=new Cn,f=new G;for(let t=0;t<e.length;t++){let r=e[t],i=(G_+n()*(K_-G_))*r.scale;d.position.set(r.x,r.y,r.z),d.rotation.set(0,r.rotY,0),d.scale.set(r.scale,i,r.scale),d.updateMatrix(),s.setMatrixAt(t,d.matrix),s.setColorAt(t,tv(n,l,f));let a=n()*Math.PI*2,o=(Q_+n()*($_-Q_))*r.scale,p=r.x+Math.cos(a)*o,m=r.z+Math.sin(a)*o,h=(X_+n()*(Z_-X_))*r.scale;d.position.set(p,r.y+Y_*r.scale*.5,m),d.rotation.set((n()-.5)*ev,a,(n()-.5)*ev),d.scale.set(h,r.scale,r.scale),d.updateMatrix(),c.setMatrixAt(t,d.matrix),c.setColorAt(t,tv(n,u,f))}return s.instanceMatrix.needsUpdate=!0,c.instanceMatrix.needsUpdate=!0,s.instanceColor&&(s.instanceColor.needsUpdate=!0),c.instanceColor&&(c.instanceColor.needsUpdate=!0),s.castShadow=!0,c.castShadow=!0,[s,c]}function ov(e,t,n,r){let i=new Ei(e,t,n.length),a=new Cn;for(let e=0;e<n.length;e++){let t=n[e];a.position.set(t.x,t.y+r,t.z),a.rotation.set(0,0,0),a.scale.setScalar(1),a.updateMatrix(),i.setMatrixAt(e,a.matrix)}return i.instanceMatrix.needsUpdate=!0,i.castShadow=!0,i}function sv(e,t){let n=new wn,r=nv(e.seed^1540483477);if(n.add(rv(e,t)),e.propsKind===`pillars`)for(let i of av(e.trees,t,r))n.add(i);else{let i=new q({color:t.trunk,flatShading:!0,roughness:.9}),a=new q({color:16777215,flatShading:!0,roughness:.9}),o=new G(t.tree);n.add(iv(new Xi(.3,.4,1.4,5),i,e.trees,.7,null,r)),n.add(iv(new Zi(1.5,2.6,6),a,e.trees,2.4,o,r)),n.add(iv(new Zi(1,1.9,6),a,e.trees,3.6,o,r))}let i=new q({color:16777215,flatShading:!0,roughness:.9}),a=new G(t.rock);n.add(iv(new $i(1,0),i,e.rocks,.4,a,r));let o=new q({color:t.gem,emissive:t.gem,emissiveIntensity:.6,flatShading:!0});n.add(ov(new Xi(1.6,1.8,.4,12),o,e.launchPads,.2));let s=new q({color:t.gem,emissive:t.gem,emissiveIntensity:.4,flatShading:!0});return n.add(ov(new ta(.9,0),s,e.shrines,1.2)),n}var cv=11,lv=2.5,uv=.61,dv=-.2,fv=.9,pv=.0025,mv=.09,hv=1.4,gv=.4,_v=8,vv=6,yv=140,bv=2.6,xv=1.5,Sv=4.5,Cv=1100,wv=7,Tv=15,Ev=.9,Dv=8,Ov=class{camera;_yaw=0;_pitch=uv;camX=0;camY=0;camZ=0;velX=0;velY=0;velZ=0;initialized=!1;baseFov;fovKickMag=0;fovKickElapsedMs=0;unsub=null;sensitivityMult=1;invertY=!1;followEnabled=!0;msSinceLook=Cv;targetDist=cv;zoomDist=cv;unsubWheel=null;constructor(e=new Ya(58,1,.1,500),t){if(this.camera=e,this.baseFov=e.fov,t&&(this.unsub=t.on(`playerDashed`,()=>this.dashKick())),typeof window<`u`){let e=e=>this.zoomBy(Math.sign(e.deltaY)*Ev);window.addEventListener(`wheel`,e,{passive:!0}),this.unsubWheel=()=>window.removeEventListener(`wheel`,e)}}get yaw(){return this._yaw}get pitch(){return this._pitch}rotate(e,t){(e!==0||t!==0)&&(this.msSinceLook=0);let n=pv*this.sensitivityMult;this._yaw-=e*n;let r=t*n*(this.invertY?-1:1);this._pitch=jv(this._pitch+r,dv,fv)}setCameraFollow(e){this.followEnabled=e}zoomBy(e){this.targetDist=jv(this.targetDist+e,wv,Tv)}get followDistance(){return this.targetDist}setLookSensitivityMult(e){this.sensitivityMult=jv(e,.1,5)}setInvertY(e){this.invertY=e}dashKick(){this.fovKickMag=vv,this.fovKickElapsedMs=0}get fovKick(){return this.camera.fov-this.baseFov}update(e,t,n,r,i,a=0,o=0){if(this.msSinceLook+=i*1e3,this.followEnabled&&this.msSinceLook>=Cv){let e=Math.hypot(a,o),t=a*-Math.sin(this._yaw)+o*-Math.cos(this._yaw);if(e>xv&&t>-.25*e){let t=Math.atan2(-a,-o)-this._yaw;for(;t>Math.PI;)t-=Math.PI*2;for(;t<-Math.PI;)t+=Math.PI*2;let n=jv((e-xv)/(Sv-xv),0,1);this._yaw+=t*Math.min(1,bv*n*i)}}this.zoomDist+=(this.targetDist-this.zoomDist)*Math.min(1,Dv*i);let s=t+hv,c=Math.cos(this._pitch),l=Math.sin(this._pitch),u=Math.sin(this._yaw)*c,d=l,f=Math.cos(this._yaw)*c,p=this.zoomDist,m=p;for(let t=1;t<=_v;t++){let i=p*t/_v,a=e+u*i,o=s+d*i,c=n+f*i;if(o<r.heightAt(a,c)+gv){m=i-p/_v;break}}m<lv&&(m=lv);let h=e+u*m,g=s+d*m,_=n+f*m;if(!this.initialized)this.camX=h,this.camY=g,this.camZ=_,this.initialized=!0;else{let e=Av(this.camX,h,this.velX,mv,i);this.camX=e.value,this.velX=e.vel;let t=Av(this.camY,g,this.velY,mv,i);this.camY=t.value,this.velY=t.vel;let n=Av(this.camZ,_,this.velZ,mv,i);this.camZ=n.value,this.velZ=n.vel}if(this.camera.position.set(this.camX,this.camY,this.camZ),this.camera.lookAt(e,s,n),this.fovKickMag>0){this.fovKickElapsedMs+=i*1e3;let e=this.fovKickElapsedMs/yv;e>=1?(this.fovKickMag=0,this.camera.fov=this.baseFov):this.camera.fov=this.baseFov+this.fovKickMag*(1-e),this.camera.updateProjectionMatrix()}}dispose(){this.unsub?.(),this.unsubWheel?.()}},kv={value:0,vel:0};function Av(e,t,n,r,i){let a=2/r,o=a*i,s=1/(1+o+.48*o*o+.235*o*o*o),c=e-t,l=(n+a*c)*i;return kv.vel=(n-a*l)*s,kv.value=t+(c+l)*s,kv}function jv(e,t,n){return e<t?t:e>n?n:e}var Mv=6,Nv=.35,Pv=.35,Fv=18,Iv=.08,Lv=class{mesh;material;flash;flashAttr;alpha;alphaAttr;glow;glowAttr;kindColor;kindGlow;skip;skipGen;genRef=null;mtx=new W;uTime={value:0};uGlowColor;uGlowIntensity;uBgColor;constructor(e,t,n,r){let i=new ea(1,1),a=new Float32Array(r);for(let e=0;e<r;e++)a[e]=e*.61803398875%1*Math.PI*2;i.setAttribute(`aPhase`,new vi(a,1)),this.flash=new Float32Array(r),this.flashAttr=new vi(this.flash,1),this.flashAttr.setUsage(I),i.setAttribute(`aFlash`,this.flashAttr),this.alpha=new Float32Array(r).fill(1),this.alphaAttr=new vi(this.alpha,1),this.alphaAttr.setUsage(I),i.setAttribute(`aAlpha`,this.alphaAttr),this.glow=new Float32Array(r),this.glowAttr=new vi(this.glow,1),this.glowAttr.setUsage(I),i.setAttribute(`aGlow`,this.glowAttr),this.uGlowColor={value:new G(t.enemyEmissive)},this.uGlowIntensity={value:t.enemyEmissiveIntensity??0},this.uBgColor={value:new G(t.bg)},this.material=new _a({flatShading:!0}),this.material.onBeforeCompile=e=>{e.uniforms.uTime=this.uTime,e.uniforms.uGlowColor=this.uGlowColor,e.uniforms.uGlowIntensity=this.uGlowIntensity,e.uniforms.uBgColor=this.uBgColor,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aPhase;
attribute float aFlash;
attribute float aAlpha;
attribute float aGlow;
uniform float uTime;
varying float vFlash;
varying float vAlpha;
varying float vGlow;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
float hop = abs(sin(uTime * ${Mv.toFixed(1)} + aPhase));
transformed.xz *= 1.0 - hop * 0.12;
transformed.y *= 1.0 + hop * 0.18;
transformed.y += hop * ${Nv.toFixed(2)};
vFlash = aFlash;
vAlpha = aAlpha;
vGlow = aGlow;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform vec3 uGlowColor;
uniform float uGlowIntensity;
uniform vec3 uBgColor;
varying float vFlash;
varying float vAlpha;
varying float vGlow;`).replace(`#include <dithering_fragment>`,`#include <dithering_fragment>
gl_FragColor.rgb = mix(uBgColor, gl_FragColor.rgb, vAlpha);
gl_FragColor.rgb += vFlash * 0.9;
gl_FragColor.rgb += uGlowColor * (uGlowIntensity * vGlow);`)};let o=new Ei(i,this.material,r);o.frustumCulled=!1,o.count=0,o.instanceMatrix.setUsage(I),o.instanceColor=new vi(new Float32Array(r*3),3),o.instanceColor.setUsage(I),this.mesh=o,e.add(o),this.kindColor=new Float32Array(n*3),Rv(t.enemy,n,this.kindColor),this.kindGlow=new Float32Array(n),zv(n,this.kindGlow),this.skip=new Uint8Array(r),this.skipGen=new Uint16Array(r)}setSkipSlot(e,t){e<0||e>=this.skip.length||(this.skip[e]=+!!t,t&&this.genRef&&(this.skipGen[e]=this.genRef[e]))}update(e,t){this.uTime.value+=t;let n=e.count,r=e.state,i=e.posX,a=e.posY,o=e.posZ,s=e.radius,c=e.stateTimeMs,l=e.kindIndex,u=e.hitFlash,d=e.generation;this.genRef=d;let f=this.skipGen,p=this.mesh,m=this.mtx,h=p.instanceColor.array,g=this.kindColor,_=this.kindGlow,v=this.flash,y=this.alpha,b=this.glow,x=this.uTime.value,S=this.skip;for(let e=0;e<n;e++){let t=r[e];if(t===0){S[e]=0,m.makeScale(0,0,0),p.setMatrixAt(e,m);continue}if(S[e]===1)if(d[e]!==f[e])S[e]=0;else{m.makeScale(0,0,0),p.setMatrixAt(e,m);continue}let n=s[e];if(t===1){let t=c[e]/250;n*=t<1?t*t*(3-2*t):1}else if(t===3){let t=c[e]/300;n*=t<1?1-t*t*(3-2*t):0}let C=wf(e);C>0&&(n*=1+C*Pv+Math.sin(x*Fv+e)*C*Iv),m.makeScale(n,n,n),m.setPosition(i[e],a[e],o[e]),p.setMatrixAt(e,m);let w=l[e]*3,T=e*3;h[T]=g[w],h[T+1]=g[w+1],h[T+2]=g[w+2],v[e]=u[e],y[e]=Tf(e),b[e]=_[l[e]]}p.count=n,p.instanceMatrix.needsUpdate=!0,p.instanceColor.needsUpdate=!0,this.flashAttr.needsUpdate=!0,this.alphaAttr.needsUpdate=!0,this.glowAttr.needsUpdate=!0}dispose(){this.mesh.removeFromParent(),this.mesh.geometry.dispose(),this.material.dispose()}};function Rv(e,t,n){let r=(e>>16&255)/255,i=(e>>8&255)/255,a=(e&255)/255,o=new G,s={h:0,s:0,l:0};for(let e=0;e<t;e++){o.setRGB(r,i,a),o.getHSL(s);let t=e*.61803398875%1;o.setHSL((s.h+(t-.5)*.12+1)%1,Math.min(1,s.s*(.9+.2*t)),Math.min(.95,s.l*(.85+.3*t))),n[e*3]=o.r,n[e*3+1]=o.g,n[e*3+2]=o.b}}function zv(e,t){for(let n=0;n<e;n++)t[n]=.6+(n*.61803398875+.5)%1*.7}var Bv=[[.92,.94,1],[.36,.92,.48],[.34,.62,1],[.72,.42,1],[1,.82,.28]],Vv=.9,Hv=1,Uv=1,Wv=.9,Gv=class{shards;patches;bees;arcs;wells;beams;shardMat;patchMat;beeMat;arcMat;wellMat;beamMat;mtx=new W;quat=new Ot;scaleV=new V;posV=new V;flatQuat;constructor(e,t,n,r=48,i=24,a=8,o=8){let s=new ta(.5,0);this.shardMat=new ri,this.shards=new Ei(s,this.shardMat,t),this.shards.frustumCulled=!1,this.shards.count=0,this.shards.instanceMatrix.setUsage(I),this.shards.instanceColor=new vi(new Float32Array(t*3),3),this.shards.instanceColor.setUsage(I),e.add(this.shards);let c=new na(1,1);this.patchMat=new ri({transparent:!0,opacity:.55,depthWrite:!1,side:2}),this.patches=new Ei(c,this.patchMat,n),this.patches.frustumCulled=!1,this.patches.count=0,this.patches.instanceMatrix.setUsage(I),this.patches.instanceColor=new vi(new Float32Array(n*3),3),this.patches.instanceColor.setUsage(I),e.add(this.patches),this.flatQuat=new Ot().setFromAxisAngle(new V(1,0,0),-Math.PI/2),this.beeMat=new ri({color:16765503}),this.bees=this.makeMesh(e,new ta(.22,0),this.beeMat,r,!1),this.arcMat=new ri({color:9428223,transparent:!0,opacity:.9,depthWrite:!1,blending:2}),this.arcs=this.makeMesh(e,new qi(.12,.12,1),this.arcMat,i,!0),this.wellMat=new ri({color:1182236,transparent:!0,opacity:.85,depthWrite:!1}),this.wells=this.makeMesh(e,new ia(.5,14,12),this.wellMat,a,!1),this.beamMat=new ri({transparent:!0,opacity:.7,depthWrite:!1,blending:2}),this.beams=this.makeMesh(e,new qi(.28,.28,1),this.beamMat,o,!0)}makeMesh(e,t,n,r,i){let a=new Ei(t,n,r);return a.frustumCulled=!1,a.count=0,a.instanceMatrix.setUsage(I),i&&(a.instanceColor=new vi(new Float32Array(r*3),3),a.instanceColor.setUsage(I)),e.add(a),a}update(e,t,n,r){this.drawShards(e,n),this.drawPatches(t),r?this.drawWeaponFx(r):(this.bees.count=0,this.arcs.count=0,this.wells.count=0,this.beams.count=0)}drawWeaponFx(e){let t=e.bees.count;for(let n=0;n<t;n++)this.posV.set(e.bees.x[n],Vv,e.bees.z[n]),this.mtx.compose(this.posV,qv,Jv),this.bees.setMatrixAt(n,this.mtx);this.bees.count=t,this.bees.instanceMatrix.needsUpdate=!0;let n=e.wells.count;for(let t=0;t<n;t++){let n=e.wells.radius[t]*2*(.5+.5*e.wells.life[t]);this.scaleV.set(n,n,n),this.posV.set(e.wells.x[t],Uv,e.wells.z[t]),this.mtx.compose(this.posV,qv,this.scaleV),this.wells.setMatrixAt(t,this.mtx)}this.wells.count=n,this.wells.instanceMatrix.needsUpdate=!0;let r=e.beams.count,i=this.beams.instanceColor.array;for(let t=0;t<r;t++){let n=e.beams.angle[t],r=e.beams.length[t],a=Math.cos(n),o=Math.sin(n);this.orientBox(e.beams.x[t],e.beams.z[t],e.beams.x[t]+a*r,e.beams.z[t]+o*r,Wv,1),this.beams.setMatrixAt(t,this.mtx);let s=e.beams.heat[t],c=t*3;i[c]=.6+.4*s,i[c+1]=.85-.35*s,i[c+2]=1-.7*s}this.beams.count=r,this.beams.instanceMatrix.needsUpdate=!0,this.beams.instanceColor.needsUpdate=!0;let a=e.arcs,o=a.ageMs.length,s=this.arcs.instanceColor.array,c=0;for(let e=0;e<o;e++){if(a.ageMs[e]<=0)continue;this.orientBox(a.x0[e],a.z0[e],a.x1[e],a.z1[e],Hv,1),this.arcs.setMatrixAt(c,this.mtx);let t=Math.min(1,a.ageMs[e]/140),n=c*3;s[n]=.56*t+.3,s[n+1]=.86*t+.1,s[n+2]=1*t,c++}this.arcs.count=c,this.arcs.instanceMatrix.needsUpdate=!0,this.arcs.instanceColor.needsUpdate=!0}orientBox(e,t,n,r,i,a){let o=n-e,s=r-t,c=Math.hypot(o,s)||.001;this.quat.setFromAxisAngle(Kv,Math.atan2(o,s)),this.scaleV.set(a,a,c),this.posV.set((e+n)*.5,i,(t+r)*.5),this.mtx.compose(this.posV,this.quat,this.scaleV)}drawShards(e,t){let n=e.high,r=this.shards.instanceColor.array,i=t*6;for(let t=0;t<n;t++){if(e.active[t]===0){this.mtx.makeScale(0,0,0),this.shards.setMatrixAt(t,this.mtx);continue}let n=e.radius[t]*2;this.scaleV.set(n,n,n),this.quat.setFromAxisAngle(Kv,i+t),this.posV.set(e.posX[t],e.posY[t],e.posZ[t]),this.mtx.compose(this.posV,this.quat,this.scaleV),this.shards.setMatrixAt(t,this.mtx);let a=Bv[e.rarity[t]]??Bv[0],o=t*3;r[o]=a[0],r[o+1]=a[1],r[o+2]=a[2]}this.shards.count=n,this.shards.instanceMatrix.needsUpdate=!0,this.shards.instanceColor.needsUpdate=!0}drawPatches(e){let t=e.high,n=this.patches.instanceColor.array;for(let r=0;r<t;r++){if(e.active[r]===0){this.mtx.makeScale(0,0,0),this.patches.setMatrixAt(r,this.mtx);continue}let t=e.maxTtlMs[r]>0?e.ttlMs[r]/e.maxTtlMs[r]:1,i=t>.85?(1-t)/.15:Math.min(1,t/.3+.7),a=e.radius[r]*2*Math.max(.05,i);this.scaleV.set(a,a,1),this.posV.set(e.posX[r],.05,e.posZ[r]),this.mtx.compose(this.posV,this.flatQuat,this.scaleV),this.patches.setMatrixAt(r,this.mtx);let o=Bv[e.rarity[r]]??Bv[0],s=r*3;n[s]=o[0],n[s+1]=o[1]*.55,n[s+2]=o[2]*.4}this.patches.count=t,this.patches.instanceMatrix.needsUpdate=!0,this.patches.instanceColor.needsUpdate=!0}dispose(){for(let e of[this.shards,this.patches,this.bees,this.arcs,this.wells,this.beams])e.removeFromParent(),e.geometry.dispose();this.shardMat.dispose(),this.patchMat.dispose(),this.beeMat.dispose(),this.arcMat.dispose(),this.wellMat.dispose(),this.beamMat.dispose()}},Kv=new V(0,1,0),qv=new Ot,Jv=new V(1,1,1),Yv=[.72,.24,.95],Xv=[1,.42,.16],Zv=[1,.16,.16],Qv=4,$v=.9,ey=.18,ty=class{globs;bolts;aim;globMat;boltMat;aimMat;mtx=new W;quat=new Ot;scaleV=new V;posV=new V;upY=new V(0,1,0);constructor(e,t){let n=new ea(.5,0);this.globMat=new ri,this.globMat.color.setRGB(Yv[0],Yv[1],Yv[2]),this.globs=new Ei(n,this.globMat,t),this.globs.frustumCulled=!1,this.globs.count=0,this.globs.instanceMatrix.setUsage(I),e.add(this.globs);let r=new ta(.5,0);this.boltMat=new ri,this.boltMat.color.setRGB(Xv[0],Xv[1],Xv[2]),this.bolts=new Ei(r,this.boltMat,t),this.bolts.frustumCulled=!1,this.bolts.count=0,this.bolts.instanceMatrix.setUsage(I),e.add(this.bolts);let i=new qi(1,1,1);this.aimMat=new ri({transparent:!0,opacity:.7,depthWrite:!1,blending:2,toneMapped:!1}),this.aimMat.color.setRGB(Zv[0],Zv[1],Zv[2]),this.aim=new Ei(i,this.aimMat,Qv),this.aim.frustumCulled=!1,this.aim.count=Qv,this.aim.instanceMatrix.setUsage(I);for(let e=0;e<Qv;e++)this.mtx.makeScale(0,0,0),this.aim.setMatrixAt(e,this.mtx);e.add(this.aim)}update(e,t){this.drawProjectiles(e,t),this.drawAim()}drawProjectiles(e,t){let n=e.high,r=t*6;for(let t=0;t<n;t++){let n=e.kind[t]===0;if(e.active[t]===0){this.mtx.makeScale(0,0,0),this.globs.setMatrixAt(t,this.mtx),this.bolts.setMatrixAt(t,this.mtx);continue}let i=e.radius[t]*2;this.scaleV.set(i,i,i),this.quat.setFromAxisAngle(this.upY,r+t),this.posV.set(e.posX[t],e.posY[t],e.posZ[t]),this.mtx.compose(this.posV,this.quat,this.scaleV),n?(this.globs.setMatrixAt(t,this.mtx),this.mtx.makeScale(0,0,0),this.bolts.setMatrixAt(t,this.mtx)):(this.bolts.setMatrixAt(t,this.mtx),this.mtx.makeScale(0,0,0),this.globs.setMatrixAt(t,this.mtx))}this.globs.count=n,this.bolts.count=n,this.globs.instanceMatrix.needsUpdate=!0,this.bolts.instanceMatrix.needsUpdate=!0}drawAim(){let e=Cf(),t=e.len<Qv?e.len:Qv;for(let n=0;n<Qv;n++){if(n>=t){this.mtx.makeScale(0,0,0),this.aim.setMatrixAt(n,this.mtx);continue}let r=e.list[n],i=e.fromX[r],a=e.fromZ[r],o=e.toX[r],s=e.toZ[r],c=o-i,l=s-a,u=Math.sqrt(c*c+l*l)||.001;this.quat.setFromAxisAngle(this.upY,Math.atan2(c,l)),this.scaleV.set(ey,ey,u),this.posV.set((i+o)*.5,$v,(a+s)*.5),this.mtx.compose(this.posV,this.quat,this.scaleV),this.aim.setMatrixAt(n,this.mtx)}this.aim.instanceMatrix.needsUpdate=!0}dispose(){this.globs.removeFromParent(),this.bolts.removeFromParent(),this.aim.removeFromParent(),this.globs.geometry.dispose(),this.bolts.geometry.dispose(),this.aim.geometry.dispose(),this.globMat.dispose(),this.boltMat.dispose(),this.aimMat.dispose()}},ny=220,ry=2.2,iy=2.6,ay=.12,oy=.24,sy=.6,cy=class{mesh;material;mtx=new W;uTime={value:0};constructor(e,t,n){let r=new ta(oy,0),i=new Float32Array(n);for(let e=0;e<n;e++)i[e]=e*.61803398875%1*Math.PI*2;r.setAttribute(`aPhase`,new vi(i,1)),this.material=new q({color:t.gem,emissive:t.gem,emissiveIntensity:.85,flatShading:!0,roughness:.3,metalness:.15}),this.material.onBeforeCompile=e=>{e.uniforms.uTime=this.uTime,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aPhase;
uniform float uTime;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
float spin = uTime * ${ry.toFixed(2)} + aPhase;
float cs = cos(spin), sn = sin(spin);
transformed = vec3(transformed.x * cs - transformed.z * sn, transformed.y, transformed.x * sn + transformed.z * cs);
transformed.y += sin(uTime * ${iy.toFixed(2)} + aPhase) * ${ay.toFixed(2)};`)};let a=new Ei(r,this.material,n);a.frustumCulled=!1,a.count=0,a.instanceMatrix.setUsage(I),this.mesh=a,e.add(a)}update(e,t){this.uTime.value+=t;let n=e.count,r=e.state,i=e.posX,a=e.posY,o=e.posZ,s=e.value,c=e.stateTimeMs,l=this.mesh,u=this.mtx;for(let e=0;e<n;e++){if(r[e]===0){u.makeScale(0,0,0),l.setMatrixAt(e,u);continue}let t=1+Math.min(sy,s[e]*.01),n=c[e]/ny;n<1&&(t*=ly(n)),u.makeScale(t,t,t),u.setPosition(i[e],a[e],o[e]),l.setMatrixAt(e,u)}l.count=n,l.instanceMatrix.needsUpdate=!0}dispose(){this.mesh.removeFromParent(),this.mesh.geometry.dispose(),this.material.dispose()}};function ly(e){let t=e-1;return 1+t*t*(2.70158*t+1.70158)}var uy=2,dy=3,fy=4,py=5,my=6,hy=7,gy=.06,_y=1.02,vy=16738842,yy={[uy]:[1,.36,.08],[hy]:[1,.46,.06],[dy]:[.1,.08,.07],[py]:[.72,.9,1],[fy]:[.16,.46,.74],[my]:[.06,.05,.1]},by=class{mesh;material;field;capacity;cellY;colorArr;emis;emisAttr;mtx=new W;quat;scaleV=new V;posV=new V;uTime=0;lastCount=0;constructor(e,t,n,r=4096){this.field=t,this.capacity=r;let i=t.size*t.size;this.cellY=new Float32Array(i);for(let e=0;e<t.size;e++){let r=t.minZ+(e+.5)*t.cell,i=e*t.size;for(let e=0;e<t.size;e++){let a=t.minX+(e+.5)*t.cell;this.cellY[i+e]=n.heightAt(a,r)}}let a=new na(t.cell*_y,t.cell*_y);this.emis=new Float32Array(r),this.emisAttr=new vi(this.emis,1),this.emisAttr.setUsage(I),a.setAttribute(`aEmis`,this.emisAttr),this.material=new q({emissive:new G(vy),emissiveIntensity:1.5,flatShading:!0,roughness:.45,metalness:.25,side:2}),this.material.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aEmis;
varying float vEmis;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vEmis = aEmis;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vEmis;`).replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
totalEmissiveRadiance *= vEmis;`)};let o=new Ei(a,this.material,r);o.frustumCulled=!1,o.count=0,o.receiveShadow=!0,o.instanceMatrix.setUsage(I),o.instanceColor=new vi(new Float32Array(r*3),3),o.instanceColor.setUsage(I),this.colorArr=o.instanceColor.array,this.mesh=o,this.quat=new Ot().setFromAxisAngle(new V(1,0,0),-Math.PI/2),e.add(o)}update(e){this.uTime+=e;let t=this.field.grid,n=this.field.size*this.field.size,r=this.capacity,i=0;for(let e=0;e<n&&i<r;e++){let n=t[e];(n===uy||n===hy)&&this.write(i++,e,n)}for(let e=0;e<n&&i<r;e++){let n=t[e];(n===dy||n===py||n===fy||n===my)&&this.write(i++,e,n)}for(let e=i;e<this.lastCount;e++)this.mtx.makeScale(0,0,0),this.mesh.setMatrixAt(e,this.mtx);this.lastCount=i,this.mesh.count=i,this.mesh.instanceMatrix.needsUpdate=!0,this.mesh.instanceColor.needsUpdate=!0,this.emisAttr.needsUpdate=!0}write(e,t,n){let r=this.field.size,i=t%r,a=(t-i)/r;this.posV.set(this.field.minX+(i+.5)*this.field.cell,this.cellY[t]+gy,this.field.minZ+(a+.5)*this.field.cell),this.scaleV.set(1,1,1),this.mtx.compose(this.posV,this.quat,this.scaleV),this.mesh.setMatrixAt(e,this.mtx);let o=yy[n]??yy[dy],s=e*3;this.colorArr[s]=o[0],this.colorArr[s+1]=o[1],this.colorArr[s+2]=o[2],this.emis[e]=n===uy||n===hy?.7+.35*Math.sin(this.uTime*9+t):0}dispose(){this.mesh.removeFromParent(),this.mesh.geometry.dispose(),this.material.dispose()}};function xy(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new Dr,l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let e in d.morphAttributes){if(!i.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;o[e]===void 0&&(o[e]=[]),o[e].push(d.morphAttributes[e])}if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Sy(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Sy(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Sy(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new fr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}var Cy=2.2,wy=.55,Ty=.18,Ey=1.35,Dy=.85,Oy=.11,ky=1.6,Ay=.06,jy=16723786;function My(){let e=new Xi(Ty,wy,Cy,4);e.rotateY(Math.PI/4),e.translate(0,Cy/2,0);let t=new oa(Dy,Oy,6,14);t.rotateX(Math.PI/2),t.translate(0,Ey,0);let n=xy([e,t],!1);if(e.dispose(),t.dispose(),!n)throw Error(`ShrineRenderer: geometry merge failed`);return n}var Ny=class{mesh;material;mtx=new W;uTime={value:0};idleColor;activeColor;placed=!1;constructor(e,t,n){let r=My(),i=new Float32Array(n);for(let e=0;e<n;e++)i[e]=e*.61803398875%1*Math.PI*2;r.setAttribute(`aPhase`,new vi(i,1)),this.idleColor=new G(t.gem),this.activeColor=new G(jy),this.material=new q({color:16777215,emissive:16777215,emissiveIntensity:.55,flatShading:!0,roughness:.35,metalness:.15}),this.material.onBeforeCompile=e=>{e.uniforms.uTime=this.uTime,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aPhase;
uniform float uTime;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
float pulse = 1.0 + sin(uTime * ${ky.toFixed(2)} + aPhase) * ${Ay.toFixed(3)};
transformed *= pulse;`),e.fragmentShader=e.fragmentShader.replace(`#include <emissivemap_fragment>`,`#include <emissivemap_fragment>
totalEmissiveRadiance *= vColor.rgb;`)};let a=new Ei(r,this.material,Math.max(1,n));a.frustumCulled=!1,a.count=0,a.castShadow=!0,a.instanceMatrix.setUsage(I),a.instanceColor=new vi(new Float32Array(Math.max(1,n)*3),3),a.instanceColor.setUsage(I),this.mesh=a,e.add(a)}update(e,t){this.uTime.value+=t;let n=this.mesh,r=e.length;if(!this.placed){this.placed=!0;let t=this.mtx;for(let i=0;i<r;i++){let r=e[i];t.identity(),t.setPosition(r.x,r.y,r.z),n.setMatrixAt(i,t)}n.instanceMatrix.needsUpdate=!0,n.count=r}let i=n.instanceColor.array;for(let t=0;t<r;t++){let n=e[t].activated?this.activeColor:this.idleColor,r=t*3;i[r]=n.r,i[r+1]=n.g,i[r+2]=n.b}n.instanceColor.needsUpdate=!0}dispose(){this.mesh.removeFromParent(),this.mesh.geometry.dispose(),this.material.dispose()}},Py=64,Fy=250,Iy=.06,Ly=[1,.32,.2],Ry=class{mesh;material;mtx=new W;flatQuat;scaleV=new V;posV=new V;ageMs=new Float32Array(Py);lifeMs=new Float32Array(Py);active=new Uint8Array(Py);progAttr;alphaAttr;modeAttr;head=0;high=0;unsub;constructor(e,t){let n=new na(1,1);this.progAttr=new vi(new Float32Array(Py),1),this.alphaAttr=new vi(new Float32Array(Py),1),this.modeAttr=new vi(new Float32Array(Py),1),this.progAttr.setUsage(I),this.alphaAttr.setUsage(I),n.setAttribute(`aProgress`,this.progAttr),n.setAttribute(`aAlpha`,this.alphaAttr),n.setAttribute(`aMode`,this.modeAttr),this.material=new ri({transparent:!0,depthWrite:!1,blending:2,side:2,toneMapped:!1}),this.material.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aProgress;
attribute float aAlpha;
attribute float aMode;
varying float vProgress;
varying float vAlpha;
varying float vMode;
varying vec2 vLocal;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vProgress = aProgress;
vAlpha = aAlpha;
vMode = aMode;
vLocal = position.xy;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vProgress;
varying float vAlpha;
varying float vMode;
varying vec2 vLocal;`).replace(`#include <dithering_fragment>`,`#include <dithering_fragment>
float lr = length(vLocal) * 2.0;
if (lr > 1.0) discard;
float ring = smoothstep(0.12, 0.0, abs(lr - 0.9));
float a = 0.0;
if (vMode < 0.5) {          // telegraph: outline + timer fill
  a = max(ring, step(lr, vProgress) * 0.5);
} else if (vMode < 1.5) {   // soft disc pulse
  a = (1.0 - lr) * vProgress;
} else {                    // ring pulse
  a = ring;
}
gl_FragColor = vec4(gl_FragColor.rgb, a * vAlpha);`)};let r=new Ei(n,this.material,Py);r.frustumCulled=!1,r.count=Py,r.instanceMatrix.setUsage(I),r.instanceColor=new vi(new Float32Array(Py*3),3);for(let e=0;e<Py;e++)this.mtx.makeScale(0,0,0),r.setMatrixAt(e,this.mtx);this.mesh=r,e.add(r),this.flatQuat=new Ot().setFromAxisAngle(new V(1,0,0),-Math.PI/2),this.unsub=t?t.on(`bossTelegraph`,this.onTelegraph):()=>{}}onTelegraph=e=>{this.add(e.x,e.z,e.r,e.msUntil,0)};add(e,t,n,r,i=0,a=Ly){let o=this.head;this.head=(this.head+1)%Py,o>=this.high&&(this.high=o+1),this.active[o]=1,this.ageMs[o]=0,this.lifeMs[o]=r>0?r:1,this.modeAttr.array[o]=i,this.progAttr.array[o]=0,this.alphaAttr.array[o]=.4;let s=n*2;this.scaleV.set(s,s,1),this.posV.set(e,Iy,t),this.mtx.compose(this.posV,this.flatQuat,this.scaleV),this.mesh.setMatrixAt(o,this.mtx),this.mesh.instanceMatrix.needsUpdate=!0,this.modeAttr.needsUpdate=!0;let c=this.mesh.instanceColor.array;c[o*3]=a[0],c[o*3+1]=a[1],c[o*3+2]=a[2],this.mesh.instanceColor.needsUpdate=!0}update(e){let t=e*1e3,n=this.progAttr.array,r=this.alphaAttr.array,i=this.high;for(let e=0;e<i;e++){if(this.active[e]===0)continue;let i=this.ageMs[e]+t;this.ageMs[e]=i;let a=this.lifeMs[e];if(i>=a+Fy){this.active[e]=0,r[e]=0,this.mtx.makeScale(0,0,0),this.mesh.setMatrixAt(e,this.mtx);continue}i<a?(n[e]=i/a,r[e]=.4+i/a*.45):(n[e]=1,r[e]=1-(i-a)/Fy)}this.progAttr.needsUpdate=!0,this.alphaAttr.needsUpdate=!0,this.mesh.instanceMatrix.needsUpdate=!0}dispose(){this.unsub(),this.mesh.removeFromParent(),this.mesh.geometry.dispose(),this.material.dispose()}},zy=2.8,By=.34,Vy=.55,Hy=class{meshMap=new Map;bodyMat;hpBar;hpMat;hpFill;hpScale;hpFillAttr;hpScaleAttr;orbs;orbMat;mtx=new W;kindIds;constructor(e,t,n,r){this.bodyMat=new _a({vertexColors:!0,flatShading:!0}),this.kindIds=t.map(e=>e.id);for(let n of t){if(n.tier!==`boss`)continue;let t=new K(Gy(n.id),this.bodyMat);t.castShadow=!0,t.visible=!1,t.frustumCulled=!1,e.add(t),this.meshMap.set(n.id,t)}let i=new na(1,1);this.hpFill=new Float32Array(n),this.hpScale=new Float32Array(n),this.hpFillAttr=new vi(this.hpFill,1),this.hpScaleAttr=new vi(this.hpScale,1),this.hpFillAttr.setUsage(I),this.hpScaleAttr.setUsage(I),i.setAttribute(`aFill`,this.hpFillAttr),i.setAttribute(`aScale`,this.hpScaleAttr),this.hpMat=new ri({transparent:!0,depthTest:!1,depthWrite:!1,toneMapped:!1}),this.hpMat.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aFill;
attribute float aScale;
varying float vFill;
varying vec2 vUv2;`).replace(`#include <project_vertex>`,`vec4 mvPosition = vec4(transformed, 1.0);
#ifdef USE_INSTANCING
mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
mvPosition.xy += position.xy * vec2(${zy.toFixed(2)} * aScale, ${By.toFixed(2)} * aScale);
vFill = aFill;
vUv2 = position.xy + 0.5;
gl_Position = projectionMatrix * mvPosition;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vFill;
varying vec2 vUv2;`).replace(`vec4 diffuseColor = vec4( diffuse, opacity );`,`
float edge = (vUv2.x < 0.03 || vUv2.x > 0.97 || vUv2.y < 0.10 || vUv2.y > 0.90) ? 1.0 : 0.0;
vec3 barCol = (vUv2.x < vFill) ? vec3(1.0, 0.24, 0.32) : vec3(0.09, 0.07, 0.12);
barCol = mix(barCol, vec3(0.02, 0.02, 0.03), edge);
vec4 diffuseColor = vec4(barCol, 1.0);`)},this.hpBar=new Ei(i,this.hpMat,n),this.hpBar.frustumCulled=!1,this.hpBar.renderOrder=999,this.hpBar.count=n,this.hpBar.instanceMatrix.setUsage(I);for(let e=0;e<n;e++)this.mtx.makeScale(0,0,0),this.hpBar.setMatrixAt(e,this.mtx);e.add(this.hpBar);let a=new ea(.5,0);this.orbMat=new ri({color:16748484,toneMapped:!1}),this.orbs=new Ei(a,this.orbMat,r),this.orbs.frustumCulled=!1,this.orbs.count=r,this.orbs.instanceMatrix.setUsage(I);for(let e=0;e<r;e++)this.mtx.makeScale(0,0,0),this.orbs.setMatrixAt(e,this.mtx);e.add(this.orbs)}update(e,t){for(let e of this.meshMap.values())e.visible=!1;for(let n=0;n<t.brainCap;n++){let r=t.brainSlot[n];if(r<0||e.state[r]===0){this.hpScale[n]=0;continue}let i=this.kindIds[t.brainKind[n]],a=this.meshMap.get(i),o=e.posX[r],s=e.posY[r],c=e.posZ[r],l=e.radius[r];if(a){a.visible=!0,a.position.set(o,s,c);let t=l*1.15;a.scale.set(t,t,t);let n=e.velX[r],i=e.velZ[r];n*n+i*i>.04&&(a.rotation.y=Math.atan2(n,i))}this.hpFill[n]=e.maxHp[r]>0?e.hp[r]/e.maxHp[r]:0,this.hpScale[n]=1,this.mtx.makeTranslation(o,s+l*1.4,c),this.hpBar.setMatrixAt(n,this.mtx)}for(let e=0;e<t.brainCap;e++)this.hpScale[e]===0&&(this.mtx.makeScale(0,0,0),this.hpBar.setMatrixAt(e,this.mtx));this.hpBar.instanceMatrix.needsUpdate=!0,this.hpFillAttr.needsUpdate=!0,this.hpScaleAttr.needsUpdate=!0;let n=t.orbCount;for(let e=0;e<n;e++){if(t.orbActive[e]===0){this.mtx.makeScale(0,0,0),this.orbs.setMatrixAt(e,this.mtx);continue}let n=Vy*2;this.mtx.makeScale(n,n,n),this.mtx.setPosition(t.orbX[e],t.orbY[e]+.5,t.orbZ[e]),this.orbs.setMatrixAt(e,this.mtx)}this.orbs.count=n>0?n:0,this.orbs.instanceMatrix.needsUpdate=!0}dispose(){for(let e of this.meshMap.values())e.removeFromParent(),e.geometry.dispose();this.bodyMat.dispose(),this.hpBar.removeFromParent(),this.hpBar.geometry.dispose(),this.hpMat.dispose(),this.orbs.removeFromParent(),this.orbs.geometry.dispose(),this.orbMat.dispose()}};function Uy(e,t,n,r){let i=e.index?e.toNonIndexed():e;i.getAttribute(`normal`)||i.computeVertexNormals();let a=i.getAttribute(`position`).count,o=new Float32Array(a*3);for(let e=0;e<a;e++)o[e*3]=t,o[e*3+1]=n,o[e*3+2]=r;return i.setAttribute(`color`,new fr(o,3)),i}function Wy(e){let t=0;for(let n of e)t+=n.getAttribute(`position`).count;let n=new Float32Array(t*3),r=new Float32Array(t*3),i=new Float32Array(t*3),a=0;for(let t of e)n.set(t.getAttribute(`position`).array,a*3),r.set(t.getAttribute(`normal`).array,a*3),i.set(t.getAttribute(`color`).array,a*3),a+=t.getAttribute(`position`).count;let o=new Dr;return o.setAttribute(`position`,new fr(n,3)),o.setAttribute(`normal`,new fr(r,3)),o.setAttribute(`color`,new fr(i,3)),o}function Gy(e){switch(e){case`thistlemaw`:return Ky();case`ramhorn`:return qy();case`kingbloom`:return Jy();case`tidebound`:return Wy([Uy(new Xi(.8,1,1.8,8),.35,.55,.7)]);case`oilfather`:return Wy([Uy(new ea(1.05,1),.16,.14,.22)]);case`archivist`:return Wy([Uy(new ta(1.1,0),.6,.55,.85)]);default:return Wy([Uy(new ea(1,1),.7,.3,.35)])}}function Ky(){let e=[],t=new ea(1,1),n=t.getAttribute(`position`);for(let e=0;e<n.count;e++){let t=e%3==0?1.45:1;n.setXYZ(e,n.getX(e)*t,n.getY(e)*t,n.getZ(e)*t)}t.computeVertexNormals(),e.push(Uy(t,.36,.6,.32));for(let t=0;t<6;t++){let n=t/6*Math.PI*2,r=new Zi(.18,.9,5);r.rotateX(Math.PI),r.translate(Math.cos(n)*.9,-.55,Math.sin(n)*.9),e.push(Uy(r,.28,.2,.14))}return Wy(e)}function qy(){let e=[],t=new qi(1.6,1.2,2);e.push(Uy(t,.5,.28,.2));for(let t of[-1,1]){let n=new Zi(.22,1,6);n.rotateX(-Math.PI/2.6),n.translate(t*.5,.7,.95),e.push(Uy(n,.9,.86,.7))}return Wy(e)}function Jy(){let e=[];e.push(Uy(new ea(.8,1),.9,.5,.7));for(let t=0;t<8;t++){let n=t/8*Math.PI*2,r=new Zi(.34,.9,4);r.rotateX(-Math.PI/2.2),r.rotateY(n),r.translate(Math.cos(n)*.7,.5,Math.sin(n)*.7),e.push(Uy(r,1,.75,.85))}return Wy(e)}var Yy=240,Xy=.14,Zy=.7,Qy=.55,$y=new G(16765503),eb=new G(13160668),tb=class{mesh;material;mtx=new W;constructor(e,t){let n=new qi(Zy,Zy*.8,Zy);this.material=new q({color:16777215,emissive:16758063,emissiveIntensity:.4,flatShading:!0,roughness:.4,metalness:.35});let r=new Ei(n,this.material,t);r.frustumCulled=!1,r.castShadow=!0,r.count=0,r.instanceMatrix.setUsage(I),r.instanceColor=new vi(new Float32Array(t*3).fill(1),3),this.mesh=r,e.add(r)}update(e,t){let n=e.count,r=e.state,i=e.posX,a=e.posY,o=e.posZ,s=e.bobPhase,c=e.stateTimeMs,l=e.fromBoss,u=this.mesh,d=this.mtx;for(let e=0;e<n;e++){let t=r[e];if(t!==1&&t!==2){d.makeScale(0,0,0),u.setMatrixAt(e,d);continue}let n=1,f=c[e]/Yy;t===1&&f<1&&(n=nb(f));let p=Math.sin(s[e])*Xy;d.makeScale(n,n,n),d.setPosition(i[e],a[e]+Qy+p,o[e]),u.setMatrixAt(e,d);let m=l[e]?$y:eb;u.setColorAt(e,m)}u.count=n,u.instanceMatrix.needsUpdate=!0,u.instanceColor&&(u.instanceColor.needsUpdate=!0)}dispose(){this.mesh.removeFromParent(),this.mesh.geometry.dispose(),this.material.dispose()}};function nb(e){let t=e-1;return 1+t*t*(2.70158*t+1.70158)}var rb=.05,ib=.5,ab=.35/4,ob={magnitude:3.6,ms:160},sb=2,cb=.3,lb=150,ub={magnitude:4,ms:200},db={magnitude:4,ms:260},fb={magnitude:1,ms:100};function pb(e,t){return Math.sin(e*27.3+t)*.5+Math.sin(e*53.9+t*1.7)*.3+Math.sin(e*113.1+t*2.3)*.2}var mb=class{hitstopRemainingMs=0;hitstopFactor=rb;realClockMs=0;lastTrashHitstopAtMs=-1/0;shakeMag=0;shakeElapsedMs=0;shakeDurationMs=0;noiseT=0;_shakeX=0;_shakeY=0;unsubs=[];constructor(e){e&&(this.unsubs.push(e.on(`enemyKilled`,()=>{this.realClockMs-this.lastTrashHitstopAtMs<350||(this.lastTrashHitstopAtMs=this.realClockMs,this.hitstop(40,ib))})),this.unsubs.push(e.on(`bossKilled`,()=>{this.hitstop(220),this.shake(db.magnitude,db.ms)})),this.unsubs.push(e.on(`weaponEvolved`,()=>this.hitstop(350))),this.unsubs.push(e.on(`playerDamaged`,()=>this.shake(ob.magnitude,ob.ms))),this.unsubs.push(e.on(`slamLanded`,e=>{let t=e.fallHeight;this.shake(sb+t*cb,lb)})),this.unsubs.push(e.on(`bossPhase`,()=>this.shake(ub.magnitude,ub.ms))),this.unsubs.push(e.on(`surfaceChanged`,e=>{e.kind===`ignite`&&this.shake(fb.magnitude,fb.ms)})))}get timeScaleFactor(){return this.hitstopRemainingMs>0?this.hitstopFactor:1}get shakeX(){return this._shakeX}get shakeY(){return this._shakeY}hitstop(e,t=rb){if(this.hitstopRemainingMs<=0){this.hitstopFactor=t,this.hitstopRemainingMs=e;return}t<this.hitstopFactor?(this.hitstopFactor=t,this.hitstopRemainingMs=e):t===this.hitstopFactor&&e>this.hitstopRemainingMs&&(this.hitstopRemainingMs=e)}shake(e,t){let n=e<4?e:4;n>=this.currentShakeEnvelope()&&(this.shakeMag=n,this.shakeElapsedMs=0,this.shakeDurationMs=t)}update(e){let t=e*1e3;this.realClockMs+=t,this.hitstopRemainingMs>0&&(this.hitstopRemainingMs-=t,this.hitstopRemainingMs<0&&(this.hitstopRemainingMs=0)),this.shakeElapsedMs+=t,this.noiseT+=e;let n=this.currentShakeEnvelope();n>0?(this._shakeX=pb(this.noiseT,0)*n*ab,this._shakeY=pb(this.noiseT,100)*n*ab):(this._shakeX=0,this._shakeY=0)}get shakeMagnitude(){return this.currentShakeEnvelope()}dispose(){for(let e of this.unsubs)e();this.unsubs.length=0}currentShakeEnvelope(){if(this.shakeDurationMs<=0)return 0;let e=this.shakeElapsedMs/this.shakeDurationMs;return e>=1?0:this.shakeMag*(1-e)}},hb=.55,gb=`whomp-hurt-vignette-style`,_b=`.whomp-hurt-vignette{position:fixed;inset:0;z-index:500;pointer-events:none;opacity:0;}`;function vb(e){if(e.getElementById(gb))return;let t=e.createElement(`style`);t.id=gb,t.textContent=_b,e.head.appendChild(t)}var yb=class{el;elapsedMs=0;durationMs=0;dirX=0;dirZ=0;hasDir=!1;_screenSideFrac=.5;unsub;constructor(e,t){let n=e.ownerDocument;if(!n)throw Error(`HurtVignette: parent has no ownerDocument`);vb(n),this.el=n.createElement(`div`),this.el.className=`whomp-hurt-vignette`,e.appendChild(this.el),this.unsub=t.on(`playerDamaged`,e=>this.trigger(e.dx,e.dz))}trigger(e,t){if(this.elapsedMs=0,this.durationMs=420,this.hasDir=e!==void 0&&t!==void 0,this.hasDir){let n=Math.hypot(e,t);this.dirX=e/n,this.dirZ=t/n}else this.dirX=0,this.dirZ=0}update(e,t){if(this.durationMs<=0)return;this.elapsedMs+=e*1e3;let n=this.elapsedMs/this.durationMs;if(n>=1){this.durationMs=0,this.el.style.cssText=`position:fixed;inset:0;z-index:500;pointer-events:none;opacity:0;`;return}let r=(1-n)*hb,i=this.hasDir?this.dirX*Math.cos(t)-this.dirZ*Math.sin(t):0;this._screenSideFrac=.5+i*.5;let a=(this._screenSideFrac*100).toFixed(1);this.el.style.cssText=`position:fixed;inset:0;z-index:500;pointer-events:none;background:radial-gradient(ellipse 65% 100% at ${a}% 50%,rgba(255,26,52,${r.toFixed(3)}) 0%,rgba(255,26,52,0) 60%);`}get screenSideFrac(){return this._screenSideFrac}get alpha(){if(this.durationMs<=0)return 0;let e=this.elapsedMs/this.durationMs;return e>=1?0:(1-e)*hb}dispose(){this.unsub(),this.el.remove()}},bb=512,xb=128,Sb=48,Cb=.14,wb=.6,Tb=1,Eb=-20,Db=.42,Ob=.72,kb=.35,Ab=4,jb=6,Mb=2.5,Nb=5.5,Pb=3,Fb=6,Ib=40,Lb=4,Rb=9,zb=4,Bb=8.5,Vb=2,Hb=.8,Ub=1.8,Wb=1.4,Gb=2.6,Kb=.9,qb=16777215,Jb=16773792,Yb=4e3,Xb=.4,Zb=.02,Qb=.55,$b=500,ex=.03,tx=.72,nx=.4,rx=2.2,ix=15400959,ax=.3,ox=1.6,sx=13350026,cx=class{terrain;player;kindColors;shardMesh;decalMesh;ringMesh;shardMaterial;decalMaterial;ringMaterial;mtx=new W;uTime={value:0};scratchColor=new G;rgb=[1,1,1];sPosX=new Float32Array(bb);sPosY=new Float32Array(bb);sPosZ=new Float32Array(bb);sVelX=new Float32Array(bb);sVelY=new Float32Array(bb);sVelZ=new Float32Array(bb);sAgeMs=new Float32Array(bb);sLifeMs=new Float32Array(bb);sBounced=new Uint8Array(bb);sAlive=new Uint8Array(bb);sFree=new Int32Array(bb);sFreeTop=bb;sHigh=0;dPosX=new Float32Array(xb);dPosY=new Float32Array(xb);dPosZ=new Float32Array(xb);dAgeMs=new Float32Array(xb);dAlive=new Uint8Array(xb);dFree=new Int32Array(xb);dFreeTop=xb;dHigh=0;dAlphaAttr;rPosX=new Float32Array(Sb);rPosY=new Float32Array(Sb);rPosZ=new Float32Array(Sb);rStartR=new Float32Array(Sb);rEndR=new Float32Array(Sb);rAgeMs=new Float32Array(Sb);rAlive=new Uint8Array(Sb);rFree=new Int32Array(Sb);rFreeTop=Sb;rHigh=0;rAlphaAttr;lastKillX=0;lastKillY=0;lastKillZ=0;reduced=!1;unsubs=[];constructor(e,t,n,r,i){this.terrain=n,this.player=r,this.kindColors=i;for(let e=0;e<bb;e++)this.sFree[e]=bb-1-e;for(let e=0;e<xb;e++)this.dFree[e]=xb-1-e;for(let e=0;e<Sb;e++)this.rFree[e]=Sb-1-e;let a=new aa(Cb,0),o=new Float32Array(bb);for(let e=0;e<bb;e++)o[e]=e*.61803398875%1*Math.PI*2;a.setAttribute(`aPhase`,new vi(o,1)),this.shardMaterial=new _a({flatShading:!0}),this.shardMaterial.onBeforeCompile=e=>{e.uniforms.uTime=this.uTime,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aPhase;
uniform float uTime;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
float spin = uTime * ${Ab.toFixed(2)} + aPhase;
float cs = cos(spin), sn = sin(spin);
transformed = vec3(transformed.x * cs - transformed.z * sn, transformed.y, transformed.x * sn + transformed.z * cs);`)},this.shardMesh=new Ei(a,this.shardMaterial,bb),this.shardMesh.frustumCulled=!1,this.shardMesh.count=0,this.shardMesh.instanceMatrix.setUsage(I),this.shardMesh.instanceColor=new vi(new Float32Array(bb*3),3),this.shardMesh.instanceColor.setUsage(I),e.add(this.shardMesh);let s=new Yi(Xb,10);s.rotateX(-Math.PI/2),this.dAlphaAttr=new vi(new Float32Array(xb),1),this.dAlphaAttr.setUsage(I),s.setAttribute(`aAlpha`,this.dAlphaAttr),this.decalMaterial=new ri({transparent:!0,depthWrite:!1,toneMapped:!1}),this.decalMaterial.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aAlpha;
varying float vAlpha;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vAlpha = aAlpha;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vAlpha;`).replace(`vec4 diffuseColor = vec4( diffuse, opacity );`,`vec4 diffuseColor = vec4( diffuse, opacity * vAlpha );`)},this.decalMesh=new Ei(s,this.decalMaterial,xb),this.decalMesh.frustumCulled=!1,this.decalMesh.count=0,this.decalMesh.instanceMatrix.setUsage(I),this.decalMesh.instanceColor=new vi(new Float32Array(xb*3),3),this.decalMesh.instanceColor.setUsage(I),e.add(this.decalMesh);let c=new ra(tx,1,24);c.rotateX(-Math.PI/2),this.rAlphaAttr=new vi(new Float32Array(Sb),1),this.rAlphaAttr.setUsage(I),c.setAttribute(`aAlpha`,this.rAlphaAttr),this.ringMaterial=new ri({transparent:!0,depthWrite:!1,toneMapped:!1}),this.ringMaterial.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aAlpha;
varying float vAlpha;`).replace(`#include <begin_vertex>`,`#include <begin_vertex>
vAlpha = aAlpha;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying float vAlpha;`).replace(`vec4 diffuseColor = vec4( diffuse, opacity );`,`vec4 diffuseColor = vec4( diffuse, opacity * vAlpha );`)},this.ringMesh=new Ei(c,this.ringMaterial,Sb),this.ringMesh.frustumCulled=!1,this.ringMesh.count=0,this.ringMesh.instanceMatrix.setUsage(I),this.ringMesh.instanceColor=new vi(new Float32Array(Sb*3),3),this.ringMesh.instanceColor.setUsage(I),e.add(this.ringMesh),this.unsubs.push(t.on(`enemyKilled`,this.onEnemyKilled)),this.unsubs.push(t.on(`bossKilled`,this.onBossKilled)),this.unsubs.push(t.on(`xpGained`,this.onXpGained)),this.unsubs.push(t.on(`launchPadUsed`,this.onLaunchPadUsed)),this.unsubs.push(t.on(`slamLanded`,this.onSlamLanded))}update(e){this.uTime.value+=e,this.updateShards(e),this.updateDecals(e),this.updateRings(e)}setReducedParticles(e){this.reduced=e}get shardCount(){return this.shardMesh.count}dispose(){for(let e of this.unsubs)e();this.unsubs.length=0;for(let[e,t]of[[this.shardMesh,this.shardMaterial],[this.decalMesh,this.decalMaterial],[this.ringMesh,this.ringMaterial]])e.removeFromParent(),e.geometry.dispose(),t.dispose()}onEnemyKilled=e=>{let t=e.x,n=e.y,r=e.z,i=e.kind;this.lastKillX=t,this.lastKillY=n,this.lastKillZ=r,this.hexToRgb(this.kindColors[i]??qb);let[a,o,s]=this.rgb,c=jb+Math.floor(Math.random()*5),l=this.halved(c);for(let e=0;e<l;e++)this.spawnShard(t,n,r,a,o,s,Mb,Nb,Pb,Fb);this.spawnDecal(t,this.terrain.heightAt(t,r),r,a*Qb,o*Qb,s*Qb)};onBossKilled=e=>{this.hexToRgb(this.kindColors[e.kind]??qb);let[t,n,r]=this.rgb,i=this.halved(Ib);for(let e=0;e<i;e++)this.spawnShard(this.lastKillX,this.lastKillY,this.lastKillZ,t,n,r,Lb,Rb,zb,Bb)};onXpGained=()=>{this.hexToRgb(Jb);let[e,t,n]=this.rgb,r=this.player,i=this.halved(Vb);for(let a=0;a<i;a++)this.spawnShard(r.x,r.y+Kb,r.z,e,t,n,Hb,Ub,Wb,Gb)};onLaunchPadUsed=e=>{let t=e.x,n=e.z;this.hexToRgb(ix),this.spawnRing(t,this.terrain.heightAt(t,n)+ex,n,nx,rx,this.rgb[0],this.rgb[1],this.rgb[2])};onSlamLanded=e=>{let t=e.x,n=e.z,r=e.radius;this.hexToRgb(sx),this.spawnRing(t,this.terrain.heightAt(t,n)+ex,n,r*ax,r*ox,this.rgb[0],this.rgb[1],this.rgb[2])};spawnShard(e,t,n,r,i,a,o,s,c,l){if(this.sFreeTop===0)return;let u=this.sFree[--this.sFreeTop],d=Math.random()*Math.PI*2,f=o+Math.random()*(s-o);this.sPosX[u]=e,this.sPosY[u]=t,this.sPosZ[u]=n,this.sVelX[u]=Math.cos(d)*f,this.sVelZ[u]=Math.sin(d)*f,this.sVelY[u]=c+Math.random()*(l-c),this.sAgeMs[u]=0,this.sLifeMs[u]=(wb+Math.random()*(Tb-wb))*1e3,this.sBounced[u]=0,this.sAlive[u]=1;let p=this.shardMesh.instanceColor.array;p[u*3]=r,p[u*3+1]=i,p[u*3+2]=a,u>=this.sHigh&&(this.sHigh=u+1)}updateShards(e){let t=this.shardMesh,n=this.mtx;for(let r=0;r<this.sHigh;r++){if(!this.sAlive[r])continue;let i=this.sAgeMs[r]+e*1e3,a=this.sLifeMs[r];if(i>=a){this.sAlive[r]=0,this.sFree[this.sFreeTop++]=r,n.makeScale(0,0,0),t.setMatrixAt(r,n);continue}this.sAgeMs[r]=i,this.sVelY[r]+=Eb*e;let o=this.sPosX[r]+this.sVelX[r]*e,s=this.sPosY[r]+this.sVelY[r]*e,c=this.sPosZ[r]+this.sVelZ[r]*e,l=this.terrain.heightAt(o,c);s<=l&&(this.sBounced[r]?(s=l,this.sVelY[r]=0):(s=l,this.sVelY[r]=-this.sVelY[r]*Db,this.sVelX[r]*=Ob,this.sVelZ[r]*=Ob,this.sBounced[r]=1)),this.sPosX[r]=o,this.sPosY[r]=s,this.sPosZ[r]=c;let u=i/a,d=1;u>1-kb&&(d=1-(u-(1-kb))/kb),n.makeScale(d,d,d),n.setPosition(o,s,c),t.setMatrixAt(r,n)}for(;this.sHigh>0&&!this.sAlive[this.sHigh-1];)this.sHigh--;t.count=this.sHigh,t.instanceMatrix.needsUpdate=!0,t.instanceColor.needsUpdate=!0}spawnDecal(e,t,n,r,i,a){if(this.dFreeTop===0)return;let o=this.dFree[--this.dFreeTop];this.dPosX[o]=e,this.dPosY[o]=t+Zb,this.dPosZ[o]=n,this.dAgeMs[o]=0,this.dAlive[o]=1;let s=this.decalMesh.instanceColor.array;s[o*3]=r,s[o*3+1]=i,s[o*3+2]=a,o>=this.dHigh&&(this.dHigh=o+1)}updateDecals(e){let t=this.decalMesh,n=this.mtx,r=this.dAlphaAttr.array;for(let i=0;i<this.dHigh;i++){if(!this.dAlive[i])continue;let a=this.dAgeMs[i]+e*1e3;if(a>=Yb){this.dAlive[i]=0,this.dFree[this.dFreeTop++]=i,r[i]=0,n.makeScale(0,0,0),t.setMatrixAt(i,n);continue}this.dAgeMs[i]=a,r[i]=1-a/Yb,n.makeScale(1,1,1),n.setPosition(this.dPosX[i],this.dPosY[i],this.dPosZ[i]),t.setMatrixAt(i,n)}for(;this.dHigh>0&&!this.dAlive[this.dHigh-1];)this.dHigh--;t.count=this.dHigh,t.instanceMatrix.needsUpdate=!0,t.instanceColor.needsUpdate=!0,this.dAlphaAttr.needsUpdate=!0}spawnRing(e,t,n,r,i,a,o,s){if(this.rFreeTop===0)return;let c=this.rFree[--this.rFreeTop];this.rPosX[c]=e,this.rPosY[c]=t,this.rPosZ[c]=n,this.rStartR[c]=r,this.rEndR[c]=i,this.rAgeMs[c]=0,this.rAlive[c]=1;let l=this.ringMesh.instanceColor.array;l[c*3]=a,l[c*3+1]=o,l[c*3+2]=s,c>=this.rHigh&&(this.rHigh=c+1)}updateRings(e){let t=this.ringMesh,n=this.mtx,r=this.rAlphaAttr.array;for(let i=0;i<this.rHigh;i++){if(!this.rAlive[i])continue;let a=this.rAgeMs[i]+e*1e3;if(a>=$b){this.rAlive[i]=0,this.rFree[this.rFreeTop++]=i,r[i]=0,n.makeScale(0,0,0),t.setMatrixAt(i,n);continue}this.rAgeMs[i]=a;let o=a/$b,s=1-(1-o)*(1-o),c=this.rStartR[i]+(this.rEndR[i]-this.rStartR[i])*s;r[i]=1-o,n.makeScale(c,c,c),n.setPosition(this.rPosX[i],this.rPosY[i],this.rPosZ[i]),t.setMatrixAt(i,n)}for(;this.rHigh>0&&!this.rAlive[this.rHigh-1];)this.rHigh--;t.count=this.rHigh,t.instanceMatrix.needsUpdate=!0,t.instanceColor.needsUpdate=!0,this.rAlphaAttr.needsUpdate=!0}hexToRgb(e){this.scratchColor.setHex(e),this.rgb[0]=this.scratchColor.r,this.rgb[1]=this.scratchColor.g,this.rgb[2]=this.scratchColor.b}halved(e){return this.reduced?Math.max(1,Math.ceil(e/2)):e}},lx=[{id:`runStart`,text:`GO.`,trigger:`runStart`},{id:`streak50`,text:`WHOMP!`,trigger:`streak50`},{id:`streak100`,text:`WHOMP. WHOMP.`,trigger:`streak100`},{id:`streak250`,text:`UNSTOPPABLE.`,trigger:`streak250`},{id:`evolution`,text:`IT EVOLVED.`,trigger:`evolution`},{id:`bossKill`,text:`BIG THING. DEAD THING.`,trigger:`bossKill`},{id:`finalHorde`,text:`THAT KEEPS HAPPENING.`,trigger:`finalHorde`},{id:`leprechaunEnrage`,text:`HE SAW THAT.`,trigger:`leprechaunEnrage`},{id:`potLooted`,text:`FREE MONEY.`,trigger:`potLooted`},{id:`revenant`,text:`YOU AGAIN.`,trigger:`revenant`},{id:`death`,text:`RUDE.`,trigger:`death`}],ux=.92,dx=14,fx=1024,px={death:2,bossKill:2,evolution:1,finalHorde:1,leprechaunEnrage:1,potLooted:1,revenant:1,runStart:1,streak50:0,streak100:0,streak250:0},mx={50:`streak50`,100:`streak100`,250:`streak250`},hx={};for(let e of lx)hx[e.trigger]=e;var gx=class{lastPlayAtMs=-1/0;lastPriority=-1;attempt(e,t){let n=px[e];return t-this.lastPlayAtMs<1200&&n<=this.lastPriority?!1:(this.lastPlayAtMs=t,this.lastPriority=n,!0)}};function _x(e){let t=new Float32Array(fx);for(let n=0;n<fx;n++){let r=n/(fx-1)*2-1,i=Math.round(r*e)/e;t[n]=Math.tanh(i*1.6)}return t}var vx=_x(dx),yx=class{scheduler=new gx;unsubs=[];ctx=null;masterGain=null;shaper=null;compressor=null;buffers=new Map;doc;fetchFn;audioContextCtor;gestureFired=!1;clockMs=0;onGesture=()=>{this.gestureFired||(this.gestureFired=!0,this.doc?.removeEventListener(`pointerdown`,this.onGesture),this.doc?.removeEventListener(`keydown`,this.onGesture),this.ensureLoaded())};constructor(e,t={}){this.doc=t.doc??(typeof document<`u`?document:void 0),this.fetchFn=t.fetchFn??(typeof fetch<`u`?fetch:void 0),this.audioContextCtor=t.audioContextCtor??(typeof AudioContext<`u`?AudioContext:void 0),this.doc?.addEventListener(`pointerdown`,this.onGesture),this.doc?.addEventListener(`keydown`,this.onGesture),this.unsubs.push(e.on(`killStreak`,e=>{let t=mx[e.count];t&&this.trigger(t)})),this.unsubs.push(e.on(`weaponEvolved`,()=>this.trigger(`evolution`))),this.unsubs.push(e.on(`bossKilled`,()=>this.trigger(`bossKill`))),this.unsubs.push(e.on(`runStarted`,()=>this.trigger(`runStart`))),this.unsubs.push(e.on(`waveEvent`,e=>{e.kind===`finalHorde`&&this.trigger(`finalHorde`)})),this.unsubs.push(e.on(`playerDied`,()=>this.trigger(`death`))),this.unsubs.push(e.on(`leprechaunEnraged`,()=>this.trigger(`leprechaunEnrage`))),this.unsubs.push(e.on(`potLooted`,()=>this.trigger(`potLooted`))),this.unsubs.push(e.on(`revenantSpawned`,()=>this.trigger(`revenant`)))}get volumeNode(){return this.masterGain}update(e){this.clockMs+=e*1e3}dispose(){for(let e of this.unsubs)e();this.unsubs.length=0,this.doc?.removeEventListener(`pointerdown`,this.onGesture),this.doc?.removeEventListener(`keydown`,this.onGesture),this.ctx?.close()}trigger(e){this.scheduler.attempt(e,this.clockMs)&&this.play(e)}ensureLoaded(){if(this.ctx||!this.audioContextCtor)return;let e=new this.audioContextCtor;if(this.ctx=e,this.masterGain=e.createGain(),this.shaper=e.createWaveShaper(),this.shaper.curve=vx,this.shaper.oversample=`2x`,this.compressor=e.createDynamicsCompressor(),this.compressor.threshold.value=-24,this.compressor.knee.value=4,this.compressor.ratio.value=12,this.compressor.attack.value=.003,this.compressor.release.value=.15,this.shaper.connect(this.compressor),this.compressor.connect(this.masterGain),this.masterGain.connect(e.destination),this.fetchFn)for(let t of lx)this.fetchFn(`/audio/barks/${t.id}.wav`).then(e=>e.arrayBuffer()).then(t=>e.decodeAudioData(t)).then(e=>{this.buffers.set(t.id,e)}).catch(()=>{})}play(e){let t=this.ctx,n=this.shaper;if(!t||!n)return;let r=hx[e];if(!r)return;let i=this.buffers.get(r.id);if(!i)return;let a=t.createBufferSource();a.buffer=i,a.playbackRate.value=ux,a.connect(n),a.start()}},bx=4e3,xx=[50,100,250],Sx=1024;function Cx(e){return lx.find(t=>t.trigger===e)?.text??``}var wx={50:Cx(`streak50`),100:Cx(`streak100`),250:Cx(`streak250`)},Tx=class{windowMs;thresholds;times;fired;head=0;tail=0;live=0;constructor(e=bx,t=xx,n=Sx){this.windowMs=e,this.thresholds=t,this.times=new Float32Array(n),this.fired=this.thresholds.map(()=>!1)}get count(){return this.live}tick(e){this.expire(e)}recordKill(e){let t=this.times.length;this.live===t&&(this.tail=(this.tail+1)%t,this.live--),this.times[this.head]=e,this.head=(this.head+1)%t,this.live++,this.expire(e);for(let e=0;e<this.thresholds.length;e++)if(this.live>=this.thresholds[e]&&!this.fired[e])return this.fired[e]=!0,this.thresholds[e];return null}expire(e){let t=this.times.length;for(;this.live>0&&e-this.times[this.tail]>this.windowMs;)this.tail=(this.tail+1)%t,this.live--;for(let e=0;e<this.thresholds.length;e++)this.live<this.thresholds[e]&&(this.fired[e]=!1)}},Ex=`whomp-streak-style`,Dx=900,Ox=320,kx=`
.whomp-streak{position:fixed;top:26%;left:50%;z-index:600;pointer-events:none;
  font-family:'Segoe UI',system-ui,-apple-system,sans-serif;
  font-weight:900;font-size:clamp(30px,5.5vw,60px);letter-spacing:0.04em;
  color:#fff;text-align:center;white-space:nowrap;
  text-shadow:0 3px 0 rgba(0,0,0,0.45),0 0 22px rgba(255,47,126,0.6);
  -webkit-text-stroke:2px rgba(10,6,20,0.55);
  transform:translate(-50%,-50%) scale(0.4);opacity:0;
  transition:transform 260ms cubic-bezier(.2,1.9,.4,1),opacity 140ms ease-out;}
.whomp-streak.whomp-streak--show{opacity:1;transform:translate(-50%,-50%) scale(1);}
.whomp-streak.whomp-streak--out{opacity:0;transform:translate(-50%,-50%) scale(1.18);
  transition:transform ${Ox}ms cubic-bezier(.5,0,1,1),opacity ${Ox}ms ease-in;}
`;function Ax(e){if(e.getElementById(Ex))return;let t=e.createElement(`style`);t.id=Ex,t.textContent=kx,e.head.appendChild(t)}var jx=class{el;hideTimeout;resetTimeout;constructor(e){let t=e.ownerDocument;if(!t)throw Error(`StreakBanner: parent has no ownerDocument`);Ax(t),this.el=t.createElement(`div`),this.el.className=`whomp-streak`,e.appendChild(this.el)}show(e){clearTimeout(this.hideTimeout),clearTimeout(this.resetTimeout),this.el.classList.remove(`whomp-streak--out`),this.el.textContent=e,this.el.offsetWidth,this.el.classList.add(`whomp-streak--show`),this.hideTimeout=setTimeout(()=>{this.el.classList.add(`whomp-streak--out`),this.resetTimeout=setTimeout(()=>{this.el.classList.remove(`whomp-streak--show`,`whomp-streak--out`)},Ox)},Dx)}dispose(){clearTimeout(this.hideTimeout),clearTimeout(this.resetTimeout),this.el.remove()}},Mx=class{bus;window=new Tx;banner;clockMs=0;killStreakPayload={count:0};unsub;constructor(e,t){this.bus=t,this.banner=new jx(e),this.unsub=t.on(`enemyKilled`,this.onEnemyKilled)}onEnemyKilled=()=>{let e=this.window.recordKill(this.clockMs);e!==null&&(this.killStreakPayload.count=e,this.bus.emit(`killStreak`,this.killStreakPayload),this.banner.show(wx[e]??``))};update(e){this.clockMs+=e*1e3,this.window.tick(this.clockMs)}get currentStreak(){return this.window.count}dispose(){this.unsub(),this.banner.dispose()}},Nx={toyMeadow:{bg:9361663,fogDensity:.008,groundA:5617743,groundB:4629060,cliff:9071947,tree:3050319,trunk:8015660,rock:11187389,enemy:16731998,enemyEmissive:0,enemyEmissiveIntensity:0,player:16764735,gem:4190346,hemiSky:12577023,hemiGround:6262618,hemiIntensity:.9,sun:16773839,sunIntensity:1.7,sunPosition:[20,30,10]},duskArcade:{bg:1183782,fogDensity:.012,groundA:2499664,groundB:2039106,cliff:3420254,tree:1521738,trunk:2366778,rock:3815008,enemy:16723838,enemyEmissive:13379176,enemyEmissiveIntensity:1.4,player:15921919,gem:2420991,hemiSky:4868800,hemiGround:1710132,hemiIntensity:1.1,sun:9400319,sunIntensity:1.3,sunPosition:[15,25,15]}},Px={baseIntervalMs:2800,intervalFloorMs:60,earlyRatePerSec:8,lateRatePerSec:1.5,waveCountBase:1,waveCountPer90s:.5,swarm:{leadSec:60,durationSec:30,intervalDiv:1.15,countMult:1.1},minibossEverySec:150,finalHordeAtSec:1800,finalHorde:{intervalHalvingPerMin:.5,floorMs:15,extraPerWavePer20s:12},maxEnemies:2e3},Fx=`position:fixed;left:8px;top:8px;z-index:9999;padding:6px 10px;border-radius:6px;background:rgba(10,10,14,0.6);color:#e8ffe0;font:12px/1.6 Menlo,Consolas,monospace;letter-spacing:0.02em;text-shadow:0 1px 2px rgba(0,0,0,0.9),0 0 1px rgba(0,0,0,0.9);white-space:pre;pointer-events:none;display:none;`,Ix=class{root;content;rendererInfo;visible=!1;frameCount=0;fpsWindowStart=-1;simTimes=new Float32Array(60);simTimeHead=0;simTimeCount=0;stats={fps:0,simMs:{avg:0,max:0},counts:{enemies:0,projectiles:0,enemyProjectiles:0,gems:0,particles:0}};constructor(e,t){this.rendererInfo=t;let n=e.ownerDocument;if(!n)throw Error(`DebugOverlay: parent has no ownerDocument`);this.root=n.createElement(`div`),this.root.style.cssText=Fx,this.content=n.createElement(`div`),this.root.appendChild(this.content),e.appendChild(this.root),typeof window<`u`&&(window.__whompDebug=this.stats,window.addEventListener(`keydown`,e=>{e.key===`F3`&&(e.preventDefault(),this.toggle())}))}toggle(){this.visible=!this.visible,this.root.style.display=this.visible?`block`:`none`}isVisible(){return this.visible}recordSimTime(e){this.simTimes[this.simTimeHead]=e,this.simTimeHead=(this.simTimeHead+1)%60,this.simTimeCount<60&&this.simTimeCount++;let t=0,n=0;for(let e=0;e<this.simTimeCount;e++){let r=this.simTimes[e];t+=r,r>n&&(n=r)}this.stats.simMs.avg=this.simTimeCount>0?t/this.simTimeCount:0,this.stats.simMs.max=n}setCounts(e){this.stats.counts.enemies=e.enemies,this.stats.counts.projectiles=e.projectiles,this.stats.counts.enemyProjectiles=e.enemyProjectiles,this.stats.counts.gems=e.gems,this.stats.counts.particles=e.particles}render(e=performance.now()){this.frameCount++,this.fpsWindowStart<0&&(this.fpsWindowStart=e);let t=e-this.fpsWindowStart;t>=1e3&&(this.stats.fps=Math.round(this.frameCount*1e3/t),this.frameCount=0,this.fpsWindowStart=e),this.visible&&(this.content.textContent=this.composeText())}getFps(){return this.stats.fps}getSimStats(){return this.stats.simMs}getCounts(){return this.stats.counts}composeText(){let{calls:e,triangles:t}=this.rendererInfo.info.render,n=this.stats.counts,r=[`FPS ${this.stats.fps}`,`SIM ${this.stats.simMs.avg.toFixed(2)} / ${this.stats.simMs.max.toFixed(2)}ms`,`ENT ${n.enemies}e ${n.projectiles}p ${n.enemyProjectiles}ep ${n.gems}g ${n.particles}fx`,`DRAW ${e} calls / ${t} tris`],i=performance.memory;return i&&r.push(`MEM ${(i.usedJSHeapSize/1048576).toFixed(0)} / ${(i.totalJSHeapSize/1048576).toFixed(0)}MB`),r.join(`
`)}},Lx=`whomp-hud-style`,Rx=1e3/4,zx=40,Bx=`
.whomp-hud{position:fixed;inset:0;pointer-events:none;z-index:500;
  font-family:'Segoe UI',system-ui,-apple-system,sans-serif;
  color:#fff;text-shadow:0 2px 0 rgba(0,0,0,0.5),0 0 12px rgba(0,0,0,0.35);}

.whomp-hud__xpTrack{position:absolute;top:0;left:0;right:0;height:7px;
  background:rgba(10,8,20,0.55);overflow:hidden;}
.whomp-hud__xpFill{height:100%;width:0%;border-radius:0 3px 3px 0;
  background:linear-gradient(90deg,#ff2f7e,#24f0ff);
  box-shadow:0 0 10px rgba(255,47,126,0.7);
  transition:width 220ms cubic-bezier(.2,.8,.3,1),filter 120ms ease-out;}
.whomp-hud__xpFill.whomp-pulse{filter:brightness(1.7) saturate(1.3);}

.whomp-hud__timer{position:absolute;top:14px;left:50%;transform:translateX(-50%);
  font-size:20px;font-weight:800;letter-spacing:0.06em;font-variant-numeric:tabular-nums;
  padding:4px 14px;border-radius:10px;background:rgba(12,8,24,0.45);
  border:2px solid rgba(255,255,255,0.18);}

.whomp-hud__topRight{position:absolute;top:14px;right:14px;display:flex;
  flex-direction:column;gap:6px;align-items:flex-end;}
.whomp-hud__pill{display:flex;align-items:center;gap:7px;padding:5px 12px 5px 10px;
  border-radius:999px;background:rgba(12,8,24,0.55);
  border:2px solid rgba(255,255,255,0.16);font-weight:800;font-size:17px;
  font-variant-numeric:tabular-nums;transform:scale(1);
  transition:transform 90ms cubic-bezier(.3,1.6,.5,1);}
.whomp-hud__pill.whomp-punch{transform:scale(1.22);}
.whomp-hud__icon{font-size:15px;line-height:1;}
.whomp-hud__pill--kills .whomp-hud__icon{color:#ff2f7e;}
.whomp-hud__pill--gold .whomp-hud__icon{color:#ffd23f;}

.whomp-hud__hp{position:absolute;left:16px;bottom:16px;width:min(46vw,320px);}
.whomp-hud__hpTrack{position:relative;height:26px;border-radius:13px;
  background:rgba(12,8,24,0.6);border:3px solid rgba(255,255,255,0.22);
  overflow:hidden;box-shadow:0 4px 0 rgba(0,0,0,0.35);}
.whomp-hud__hpFill{height:100%;width:100%;border-radius:10px;
  background:linear-gradient(90deg,#24f0ff,#3ff08a);
  transition:width 260ms cubic-bezier(.2,.8,.3,1),background-color 120ms ease-out;}
.whomp-hud__hpTrack.whomp-flash .whomp-hud__hpFill{background:linear-gradient(90deg,#ff2f7e,#ff6a3f);}
.whomp-hud__hpLabel{position:absolute;inset:0;display:flex;align-items:center;
  justify-content:center;font-size:13px;font-weight:800;letter-spacing:0.03em;
  font-variant-numeric:tabular-nums;}
`;function Vx(e){if(e.getElementById(Lx))return;let t=e.createElement(`style`);t.id=Lx,t.textContent=Bx,e.head.appendChild(t)}var Hx=class{root;xpFill;timerEl;killPill;killNum;goldPill;goldNum;hpTrack;hpFill;hpLabel;unsubs=[];hp;maxHp;kills=0;gold=0;xpFillFrac=0;lastHpFrac=-1;lastHpLabel=``;lastTimerText=``;lastXpWidthPct=-1;killDirty=!1;goldDirty=!1;lastCounterFlushMs=-1/0;lastKillWritten=-1;lastGoldWritten=-1;hpFlashTimeout;xpPulseTimeout;killPunchTimeout;goldPunchTimeout;constructor(e,t,n=100){let r=e.ownerDocument;if(!r)throw Error(`Hud: parent has no ownerDocument`);Vx(r),this.maxHp=n,this.hp=n,this.root=r.createElement(`div`),this.root.className=`whomp-hud`;let i=r.createElement(`div`);i.className=`whomp-hud__xpTrack`,this.xpFill=r.createElement(`div`),this.xpFill.className=`whomp-hud__xpFill`,i.appendChild(this.xpFill),this.timerEl=r.createElement(`div`),this.timerEl.className=`whomp-hud__timer`,this.timerEl.textContent=`00:00`;let a=r.createElement(`div`);a.className=`whomp-hud__topRight`;let[o,s]=this.buildPill(r,`kills`,`✕`),[c,l]=this.buildPill(r,`gold`,`●`);this.killPill=o,this.killNum=s,this.goldPill=c,this.goldNum=l,a.appendChild(o),a.appendChild(c);let u=r.createElement(`div`);u.className=`whomp-hud__hp`,this.hpTrack=r.createElement(`div`),this.hpTrack.className=`whomp-hud__hpTrack`,this.hpFill=r.createElement(`div`),this.hpFill.className=`whomp-hud__hpFill`,this.hpLabel=r.createElement(`div`),this.hpLabel.className=`whomp-hud__hpLabel`,this.hpTrack.appendChild(this.hpFill),this.hpTrack.appendChild(this.hpLabel),u.appendChild(this.hpTrack),this.root.appendChild(i),this.root.appendChild(this.timerEl),this.root.appendChild(a),this.root.appendChild(u),e.appendChild(this.root),this.unsubs.push(t.on(`playerDamaged`,this.onPlayerDamaged)),this.unsubs.push(t.on(`xpGained`,this.onXpGained)),this.unsubs.push(t.on(`levelUp`,this.onLevelUp)),this.unsubs.push(t.on(`enemyKilled`,this.onEnemyKilled)),this.unsubs.push(t.on(`goldGained`,this.onGoldGained)),this.writeHp(!0)}buildPill(e,t,n){let r=e.createElement(`div`);r.className=`whomp-hud__pill whomp-hud__pill--${t}`;let i=e.createElement(`span`);i.className=`whomp-hud__icon`,i.textContent=n;let a=e.createElement(`span`);return a.textContent=`0`,r.appendChild(i),r.appendChild(a),[r,a]}update(e,t){let n=Wx(e);n!==this.lastTimerText&&(this.lastTimerText=n,this.timerEl.textContent=n),(this.killDirty||this.goldDirty)&&t-this.lastCounterFlushMs>=Rx&&(this.lastCounterFlushMs=t,this.killDirty&&this.kills!==this.lastKillWritten&&(this.lastKillWritten=this.kills,this.killNum.textContent=String(this.kills)),this.goldDirty&&this.gold!==this.lastGoldWritten&&(this.lastGoldWritten=this.gold,this.goldNum.textContent=String(this.gold)),this.killDirty=!1,this.goldDirty=!1)}dispose(){for(let e of this.unsubs)e();clearTimeout(this.hpFlashTimeout),clearTimeout(this.xpPulseTimeout),clearTimeout(this.killPunchTimeout),clearTimeout(this.goldPunchTimeout),this.root.remove()}onPlayerDamaged=e=>{this.hp=e.hpAfter,this.writeHp(!1),this.hpTrack.classList.add(`whomp-flash`),clearTimeout(this.hpFlashTimeout),this.hpFlashTimeout=setTimeout(()=>this.hpTrack.classList.remove(`whomp-flash`),180)};onXpGained=e=>{this.xpFillFrac=Ux(this.xpFillFrac+e.amount/zx),this.writeXpWidth(),this.pulse(this.xpFill,e=>this.xpPulseTimeout=e,this.xpPulseTimeout)};onLevelUp=()=>{this.xpFillFrac=0,this.writeXpWidth(),this.pulse(this.xpFill,e=>this.xpPulseTimeout=e,this.xpPulseTimeout)};onEnemyKilled=()=>{this.kills++,this.killDirty=!0,this.punch(this.killPill,e=>this.killPunchTimeout=e,this.killPunchTimeout)};onGoldGained=e=>{this.gold+=e.amount,this.goldDirty=!0,this.punch(this.goldPill,e=>this.goldPunchTimeout=e,this.goldPunchTimeout)};setGold(e){e!==this.gold&&(this.gold=e,this.goldDirty=!0)}writeHp(e){let t=this.maxHp>0?Ux(this.hp/this.maxHp):0;(e||t!==this.lastHpFrac)&&(this.lastHpFrac=t,this.hpFill.style.width=`${(t*100).toFixed(1)}%`);let n=`${Math.max(0,Math.round(this.hp))}/${Math.round(this.maxHp)}`;(e||n!==this.lastHpLabel)&&(this.lastHpLabel=n,this.hpLabel.textContent=n)}writeXpWidth(){let e=Math.round(this.xpFillFrac*1e3)/10;e!==this.lastXpWidthPct&&(this.lastXpWidthPct=e,this.xpFill.style.width=`${e}%`)}pulse(e,t,n){e.classList.remove(`whomp-pulse`),e.offsetWidth,e.classList.add(`whomp-pulse`),clearTimeout(n),t(setTimeout(()=>e.classList.remove(`whomp-pulse`),200))}punch(e,t,n){e.classList.remove(`whomp-punch`),e.offsetWidth,e.classList.add(`whomp-punch`),clearTimeout(n),t(setTimeout(()=>e.classList.remove(`whomp-punch`),140))}};function Ux(e){return e<0?0:e>1?1:e}function Wx(e){let t=Math.max(0,Math.floor(e)),n=Math.floor(t/60),r=t%60;return`${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}`}var Gx=`whomp-draft-style`,Kx={common:`#a9b7c9`,uncommon:`#4ce089`,rare:`#24f0ff`,epic:`#b24cff`,legendary:`#ffcf3f`},qx=`
.whomp-draft{position:fixed;inset:0;z-index:900;display:none;
  align-items:center;justify-content:center;flex-direction:column;gap:22px;
  background:radial-gradient(ellipse at center,rgba(20,10,35,0.72),rgba(6,4,14,0.92));
  font-family:'Segoe UI',system-ui,-apple-system,sans-serif;color:#fff;}

.whomp-draft__title{font-size:15px;font-weight:800;letter-spacing:0.22em;
  text-transform:uppercase;color:#24f0ff;text-shadow:0 0 14px rgba(36,240,255,0.6);}

.whomp-draft__cards{display:flex;gap:22px;}

.whomp-draft__card{position:relative;width:200px;min-height:260px;padding:18px 16px 20px;
  border-radius:20px;background:linear-gradient(180deg,rgba(30,20,48,0.95),rgba(14,10,26,0.95));
  border:3px solid var(--rc,#a9b7c9);box-shadow:0 0 0 1px rgba(255,255,255,0.06) inset,
  0 10px 28px rgba(0,0,0,0.5),0 0 22px -4px var(--rc,#a9b7c9);
  display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px;
  cursor:pointer;transform:scale(0.4) translateY(30px);opacity:0;
  animation:whomp-card-in 150ms cubic-bezier(.34,1.56,.64,1) forwards;
  animation-delay:var(--stagger,0ms);transition:box-shadow 120ms ease-out,border-color 120ms ease-out;}
.whomp-draft__card:hover{box-shadow:0 0 0 1px rgba(255,255,255,0.12) inset,
  0 10px 28px rgba(0,0,0,0.55),0 0 34px -2px var(--rc,#a9b7c9);}
.whomp-draft__card.whomp-banish-target{border-color:#ff2f7e;}
.whomp-draft__card.whomp-banish-target:hover{box-shadow:0 0 0 1px rgba(255,255,255,0.12) inset,
  0 10px 28px rgba(0,0,0,0.55),0 0 34px -2px #ff2f7e;}
@keyframes whomp-card-in{
  0%{transform:scale(0.4) translateY(30px);opacity:0;}
  60%{transform:scale(1.08) translateY(-4px);opacity:1;}
  100%{transform:scale(1) translateY(0);opacity:1;}
}

.whomp-draft__rarity{font-size:11px;font-weight:800;letter-spacing:0.16em;
  text-transform:uppercase;color:var(--rc,#a9b7c9);}
.whomp-draft__badge{position:absolute;top:-10px;right:-10px;padding:3px 9px;border-radius:999px;
  font-size:11px;font-weight:800;letter-spacing:0.05em;
  background:linear-gradient(90deg,#ff2f7e,#24f0ff);color:#0a0714;
  box-shadow:0 3px 8px rgba(0,0,0,0.4);}
.whomp-draft__key{position:absolute;top:10px;left:12px;width:22px;height:22px;border-radius:6px;
  background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.25);
  display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;}
.whomp-draft__name{font-size:19px;font-weight:800;margin-top:14px;}
.whomp-draft__desc{font-size:13px;line-height:1.4;color:rgba(255,255,255,0.75);flex:1;}
.whomp-draft__kind{font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;
  color:rgba(255,255,255,0.5);}

.whomp-draft__controls{display:flex;gap:14px;}
.whomp-draft__btn{padding:9px 18px;border-radius:12px;border:2px solid rgba(255,255,255,0.2);
  background:rgba(255,255,255,0.06);color:#fff;font-weight:800;font-size:14px;
  letter-spacing:0.03em;cursor:pointer;transition:transform 90ms ease-out,background 120ms ease-out;}
.whomp-draft__btn:hover:not(:disabled){background:rgba(255,255,255,0.14);transform:translateY(-1px);}
.whomp-draft__btn:disabled{opacity:0.35;cursor:default;}
.whomp-draft__btn.whomp-active{background:linear-gradient(90deg,#ff2f7e,#ff6a3f);
  border-color:transparent;}
`;function Jx(e){if(e.getElementById(Gx))return;let t=e.createElement(`style`);t.id=Gx,t.textContent=qx,e.head.appendChild(t)}var Yx=class{draft;root;cardsEl;rerollBtn;banishBtn;banishMode=!1;lastOffer=null;keydownHandler;win;constructor(e,t){this.draft=t;let n=e.ownerDocument;if(!n)throw Error(`LevelUpDraft: parent has no ownerDocument`);Jx(n),this.root=n.createElement(`div`),this.root.className=`whomp-draft`;let r=n.createElement(`div`);r.className=`whomp-draft__title`,r.textContent=`Choose One`,this.cardsEl=n.createElement(`div`),this.cardsEl.className=`whomp-draft__cards`;let i=n.createElement(`div`);i.className=`whomp-draft__controls`,this.rerollBtn=n.createElement(`button`),this.rerollBtn.className=`whomp-draft__btn`,this.rerollBtn.type=`button`,this.banishBtn=n.createElement(`button`),this.banishBtn.className=`whomp-draft__btn`,this.banishBtn.type=`button`,this.rerollBtn.addEventListener(`click`,()=>this.onRerollClick()),this.banishBtn.addEventListener(`click`,()=>this.onBanishClick()),i.appendChild(this.rerollBtn),i.appendChild(this.banishBtn),this.root.appendChild(r),this.root.appendChild(this.cardsEl),this.root.appendChild(i),e.appendChild(this.root),this.win=n.defaultView??void 0,this.keydownHandler=e=>this.onKeydown(e),this.win?.addEventListener(`keydown`,this.keydownHandler)}update(){let e=this.draft.pending,t=e?e.cards:null;t!==this.lastOffer&&(this.lastOffer=t,this.banishMode=!1,t?this.renderOffer(t):this.hide()),t&&this.syncControls()}dispose(){this.win?.removeEventListener(`keydown`,this.keydownHandler),this.root.remove()}renderOffer(e){this.root.style.display=`flex`,this.cardsEl.textContent=``;let t=this.root.ownerDocument;e.forEach((e,n)=>{let r=this.buildCard(t,e,n);this.cardsEl.appendChild(r)}),this.syncControls()}buildCard(e,t,n){let r=e.createElement(`div`);r.className=`whomp-draft__card`,r.style.setProperty(`--rc`,Kx[t.rarity]),r.style.setProperty(`--stagger`,`${n*60}ms`);let i=e.createElement(`div`);i.className=`whomp-draft__key`,i.textContent=String(n+1);let a=e.createElement(`div`);a.className=`whomp-draft__rarity`,a.textContent=t.rarity;let o=e.createElement(`div`);o.className=`whomp-draft__name`,o.textContent=t.name;let s=e.createElement(`div`);s.className=`whomp-draft__kind`,s.textContent=t.kind===`weapon`?`Weapon`:`Passive`;let c=e.createElement(`div`);if(c.className=`whomp-draft__desc`,c.textContent=t.desc,r.appendChild(i),r.appendChild(a),r.appendChild(o),r.appendChild(s),r.appendChild(c),t.newPick){let t=e.createElement(`div`);t.className=`whomp-draft__badge`,t.textContent=`NEW`,r.appendChild(t)}else{let n=e.createElement(`div`);n.className=`whomp-draft__badge`,n.textContent=`Lv ${t.levelAfter-1} → ${t.levelAfter}`,r.appendChild(n)}return r.addEventListener(`click`,()=>this.onCardClick(n)),r}onCardClick(e){this.banishMode?(this.draft.banish(e),this.banishMode=!1):this.draft.choose(e)}onRerollClick(){this.draft.rerollsLeft<=0||(this.banishMode=!1,this.draft.reroll())}onBanishClick(){this.draft.banishesLeft<=0||(this.banishMode=!this.banishMode,this.syncControls())}onKeydown(e){let t=this.draft.pending;if(!t)return;if(e.key===`Escape`){this.banishMode=!1,this.syncControls();return}let n=Number(e.key);n>=1&&n<=t.cards.length&&(e.preventDefault(),this.draft.choose(n-1))}syncControls(){let e=this.draft.rerollsLeft,t=this.draft.banishesLeft;this.rerollBtn.textContent=`Reroll (${e})`,this.rerollBtn.disabled=e<=0,this.banishBtn.textContent=this.banishMode?`Pick a card to banish...`:`Banish (${t})`,this.banishBtn.disabled=t<=0&&!this.banishMode,this.banishBtn.classList.toggle(`whomp-active`,this.banishMode);let n=this.cardsEl.children;for(let e=0;e<n.length;e++)n[e].classList.toggle(`whomp-banish-target`,this.banishMode)}hide(){this.root.style.display=`none`,this.cardsEl.textContent=``,this.banishMode=!1}},Xx=128,Zx=700,Qx=180,$x=.35,eS=1.6,tS=3,nS=1.3,rS=2,iS=.5,aS=.34,oS=11,sS=10,cS=96,lS=128;function uS(e){let t=e.createElement(`canvas`);t.width=oS*cS,t.height=lS;let n=t.getContext(`2d`);n.textAlign=`center`,n.textBaseline=`middle`,n.fillStyle=`#ffffff`,n.strokeStyle=`rgba(10,6,20,0.7)`,n.lineJoin=`round`,n.lineWidth=9,n.font=`900 92px system-ui, sans-serif`;for(let e=0;e<10;e++){let t=e*cS+cS/2;n.strokeText(String(e),t,68),n.fillText(String(e),t,68)}n.lineWidth=5,n.font=`900 32px system-ui, sans-serif`;let r=1008;n.strokeText(`CRIT!`,r,66),n.fillText(`CRIT!`,r,66);let i=new Ui(t);return i.wrapS=_,i.wrapT=_,i.minFilter=S,i.magFilter=S,i.generateMipmaps=!1,i.needsUpdate=!0,i}var dS=class{object3D;mesh;material;atlas;unsub;mtx=new W;baseX=new Float32Array(Xx);baseY=new Float32Array(Xx);baseZ=new Float32Array(Xx);vy=new Float32Array(Xx);targetScale=new Float32Array(Xx);easeT=new Float32Array(Xx);ageMs=new Float32Array(Xx);cell;cellAttr;scaleAttr;alphaAttr;head=0;highWatermark=0;constructor(e,t=document){this.atlas=uS(t);let n=new na(1,1);this.cell=new Float32Array(Xx),this.cellAttr=new vi(this.cell,1),this.cellAttr.setUsage(I),n.setAttribute(`aCell`,this.cellAttr),this.scaleAttr=new vi(new Float32Array(Xx),1),this.scaleAttr.setUsage(I),n.setAttribute(`aScale`,this.scaleAttr),this.alphaAttr=new vi(new Float32Array(Xx),1),this.alphaAttr.setUsage(I),n.setAttribute(`aAlpha`,this.alphaAttr),this.material=new ri({transparent:!0,depthWrite:!1,toneMapped:!1}),this.material.onBeforeCompile=e=>{e.uniforms.uAtlas={value:this.atlas},e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
attribute float aCell;
attribute float aScale;
attribute float aAlpha;
varying vec2 vGlyphUv;
varying float vAlpha;`).replace(`#include <begin_vertex>`,`vec3 transformed = vec3(0.0);
vAlpha = aAlpha;`).replace(`#include <project_vertex>`,`vec4 mvPosition = vec4(transformed, 1.0);
#ifdef USE_INSTANCING
mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
mvPosition.xy += position.xy * aScale;
vGlyphUv = vec2((position.x + 0.5 + aCell) / ${oS.toFixed(1)}, position.y + 0.5);
gl_Position = projectionMatrix * mvPosition;`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
uniform sampler2D uAtlas;
varying vec2 vGlyphUv;
varying float vAlpha;`).replace(`vec4 diffuseColor = vec4( diffuse, opacity );`,`vec4 glyph = texture2D( uAtlas, vGlyphUv );
vec4 diffuseColor = vec4( diffuse, opacity * vAlpha * glyph.a );`)};let r=new Ei(n,this.material,Xx);r.frustumCulled=!1,r.count=Xx,r.instanceMatrix.setUsage(I),r.instanceColor=new vi(new Float32Array(Xx*3),3),r.instanceColor.setUsage(I);let i=r.instanceColor.array;for(let e=0;e<Xx;e++)i[e*3]=1,i[e*3+1]=1,i[e*3+2]=1,this.mtx.makeScale(0,0,0),r.setMatrixAt(e,this.mtx);this.mesh=r,this.object3D=r,this.unsub=e.on(`enemyDamaged`,this.onDamaged)}onDamaged=e=>{let t=e.amount,n=e.crit,r=e.x,i=e.y,a=e.z;if(n){this.spawnGlyph(sS,r,i,a,0,eS,tS);return}let o=String(Math.max(0,Math.round(t))),s=o.length,c=(s-1)*aS;for(let e=0;e<s;e++){let t=o.charCodeAt(e)-48,n=-c/2+e*aS;this.spawnGlyph(t,r,i,a,n,nS,rS)}};spawnGlyph(e,t,n,r,i,a,o){let s=this.head;this.head=(this.head+1)%Xx,this.highWatermark<Xx&&this.highWatermark++,this.baseX[s]=t+i,this.baseY[s]=n,this.baseZ[s]=r,this.vy[s]=o,this.targetScale[s]=a,this.easeT[s]=0,this.ageMs[s]=0,this.cell[s]=e}update(e,t){let n=e*1e3,r=Math.min(1,$x*e*60),i=this.scaleAttr.array,a=this.alphaAttr.array,o=this.highWatermark;for(let e=0;e<o;e++){let t=this.ageMs[e]+n;if(this.ageMs[e]=t,t>=Zx){i[e]=0,a[e]=0,this.mtx.makeScale(0,0,0),this.mesh.setMatrixAt(e,this.mtx);continue}this.easeT[e]+=(1-this.easeT[e])*r,i[e]=iS*this.targetScale[e]*this.easeT[e],a[e]=t<Zx-Qx?1:Math.max(0,(Zx-t)/Qx);let o=this.baseY[e]+this.vy[e]*(t/1e3);this.mtx.makeTranslation(this.baseX[e],o,this.baseZ[e]),this.mesh.setMatrixAt(e,this.mtx)}this.mesh.instanceMatrix.needsUpdate=!0,this.scaleAttr.needsUpdate=!0,this.alphaAttr.needsUpdate=!0,this.cellAttr.needsUpdate=!0}dispose(){this.unsub(),this.mesh.removeFromParent(),this.mesh.geometry.dispose(),this.material.dispose(),this.atlas.dispose()}},fS=`whomp_lastrun`,pS=.2,mS=9e3,hS=4,gS=class{lastRun;player;storage;unsubs=[];ring=new Float32Array(mS*hS);writeIndex=0;total=0;elapsedSec=0;nextSampleTime=0;characterId=``;weaponLevels=new Map;constructor(e){this.player=e.player,this.storage=e.storage===void 0?typeof localStorage<`u`?localStorage:null:e.storage,this.lastRun=this.load(),this.unsubs.push(e.bus.on(`runStarted`,e=>this.onRunStarted(e))),this.unsubs.push(e.bus.on(`upgradeChosen`,e=>this.onUpgrade(e)))}update(e){for(this.elapsedSec+=e;this.elapsedSec>=this.nextSampleTime;)this.capture(this.nextSampleTime),this.nextSampleTime+=pS}finalize(e){if(!this.storage)return;let t=this.buildRecord();try{this.storage.setItem(fS,JSON.stringify({...t,win:e}))}catch{}}dispose(){for(let e of this.unsubs)e();this.unsubs.length=0}onRunStarted(e){this.characterId=e.characterId,this.weaponLevels.clear(),this.writeIndex=0,this.total=0,this.elapsedSec=0,this.nextSampleTime=0}onUpgrade(e){(e.kind===`weapon`||e.kind===`legendary`)&&this.weaponLevels.set(e.id,e.level)}capture(e){let t=this.player,n=this.writeIndex*hS,r=this.ring;r[n]=e,r[n+1]=t.x,r[n+2]=t.y,r[n+3]=t.z,this.writeIndex=(this.writeIndex+1)%mS,this.total++}buildRecord(){let e=this.total<9e3?this.total:mS,t=this.total>9e3?this.writeIndex:0,n=this.ring,r=Array(e);for(let i=0;i<e;i++){let e=(t+i)%mS*hS;r[i]={t:n[e],x:n[e+1],y:n[e+2],z:n[e+3]}}let i=[];for(let[e,t]of this.weaponLevels)i.push({id:e,level:t});let a=e>0?r[e-1].t:this.elapsedSec;return{samples:r,build:{weapons:i,characterId:this.characterId},timeSec:a}}load(){if(!this.storage)return null;let e;try{e=this.storage.getItem(fS)}catch{return null}if(!e)return null;try{let t=JSON.parse(e);if(!t||!Array.isArray(t.samples)||typeof t.build!=`object`||!t.build)return null;let n=[];for(let e of t.samples)e&&typeof e.t==`number`&&typeof e.x==`number`&&typeof e.y==`number`&&typeof e.z==`number`&&n.push({t:e.t,x:e.x,y:e.y,z:e.z});if(n.length===0)return null;let r=Array.isArray(t.build.weapons)?t.build.weapons:[],i=[];for(let e of r)e&&typeof e.id==`string`&&typeof e.level==`number`&&i.push({id:e.id,level:e.level});let a=typeof t.build.characterId==`string`?t.build.characterId:``,o=typeof t.timeSec==`number`?t.timeSec:n[n.length-1].t;return{samples:n,build:{weapons:i,characterId:a},timeSec:o}}catch{return null}}},_S=3e3,vS=.4,yS=65536,bS={orbit:`radialBurst`,meleeArc:`radialBurst`,cone:`radialBurst`,landingShockwave:`radialBurst`,randomAoE:`radialBurst`,meteor:`radialBurst`,aura:`auraTick`,trail:`auraTick`,blackHole:`auraTick`,pathEcho:`auraTick`,homing:`targetedBolt`,lob:`targetedBolt`,pierceLine:`targetedBolt`,boomerang:`targetedBolt`,chain:`targetedBolt`,ricochet:`targetedBolt`,beam:`targetedBolt`,burstNearest:`targetedBolt`,petUnits:`targetedBolt`};function xS(e){return bS[e]}var SS={radialBurst:2.5,targetedBolt:1.5,auraTick:.4},CS={radialBurst:6,targetedBolt:1.6,auraTick:4};function wS(e,t){let n=t<1?1:t,r=e.baseDamage*(1+e.perLevel.damagePct*(n-1)),i=(e.fireRateMs>0?e.fireRateMs:e.tickRateMs??300)*e.perLevel.fireRateFactor**(n-1);return i>0?r*1e3/i:0}var TS=class{ghostX=0;ghostY=0;ghostZ=0;ghostVisible=!1;revenantActive=!1;revenantX=0;revenantY=0;revenantZ=0;revenantYaw=0;revenantSlot=-1;deps;samples;elapsedSec=0;cursor=0;crossCooldownMs=0;crossCount=0;goldSub=0;xpSub=0;revenantHandle=-1;revenantSpawned=!1;chestDropped=!1;revLastX=0;revLastY=0;revLastZ=0;casters=[];crossPayload={bonus:0};revenantPayload={x:0,z:0};revenantSlainPayload={x:0,z:0};goldPayload={amount:0,total:0};xpPayload={amount:0,total:0};constructor(e){this.deps=e,this.samples=e.lastRun?.samples??[],this.samples.length>0&&(this.ghostVisible=!0,this.ghostX=this.samples[0].x,this.ghostY=this.samples[0].y,this.ghostZ=this.samples[0].z)}seedSkip(e){this.elapsedSec=e}update(e){this.samples.length!==0&&(this.elapsedSec+=e,this.crossCooldownMs>0&&(this.crossCooldownMs-=e*1e3),this.revenantSpawned?this.updateRevenant(e):(this.updateGhost(),this.tryTrailCross(),this.elapsedSec>=900&&this.spawnRevenant()))}updateGhost(){let e=this.samples,t=this.elapsedSec;for(;this.cursor<e.length-1&&e[this.cursor+1].t<=t;)this.cursor++;let n=this.cursor;if(n>=e.length-1){let t=e[e.length-1];this.ghostX=t.x,this.ghostY=t.y,this.ghostZ=t.z;return}let r=e[n],i=e[n+1],a=i.t-r.t,o=a>1e-6?(t-r.t)/a:0;o<0?o=0:o>1&&(o=1),this.ghostX=r.x+(i.x-r.x)*o,this.ghostY=r.y+(i.y-r.y)*o,this.ghostZ=r.z+(i.z-r.z)*o}tryTrailCross(){if(this.crossCooldownMs>0)return;let e=this.deps.player,t=e.x-this.ghostX,n=e.z-this.ghostZ;if(t*t+n*n>2.5*2.5)return;this.crossCooldownMs=_S;let r=(this.crossCount&1)==0;this.crossCount++;let i=this.deps.bus,a;r?(a=2,this.goldSub+=2,this.goldPayload.amount=2,this.goldPayload.total=this.goldSub,i.emit(`goldGained`,this.goldPayload)):(a=3,this.xpSub+=3,this.xpPayload.amount=3,this.xpPayload.total=this.xpSub,i.emit(`xpGained`,this.xpPayload)),this.crossPayload.bonus=a,i.emit(`echoTrailCrossed`,this.crossPayload)}spawnRevenant(){this.revenantSpawned=!0,this.ghostVisible=!1;let e=this.ghostX,t=this.ghostZ;this.revenantHandle=this.deps.horde.spawn(this.deps.wardenKindIndex,e,t,4,1,40),!(this.revenantHandle<0)&&(this.revenantSlot=this.revenantHandle%yS,this.revenantActive=!0,this.revenantX=e,this.revenantZ=t,this.revLastX=e,this.revLastZ=t,this.buildCasters(),this.revenantPayload.x=e,this.revenantPayload.z=t,this.deps.bus.emit(`revenantSpawned`,this.revenantPayload))}buildCasters(){let e=(this.deps.lastRun?.build.weapons??[]).slice().sort((e,t)=>t.level-e.level),t=[];for(let n=0;n<e.length&&t.length<2;n++){let r=ap[e[n].id];if(!r)continue;let i=xS(r.pattern),a=SS[i],o=wS(r,e[n].level)*vS;t.push({archetype:i,periodSec:a,radius:CS[i],perPulse:o*a,timerSec:a*(t.length===0?1:.5)})}this.casters=t}updateRevenant(e){if(this.revenantHandle>=0&&this.deps.horde.isLive(this.revenantHandle)){let t=this.deps.horde.arrays,n=this.revenantSlot;this.revLastX=t.posX[n],this.revLastY=t.posY[n]-t.radius[n],this.revLastZ=t.posZ[n],this.revenantX=this.revLastX,this.revenantY=this.revLastY,this.revenantZ=this.revLastZ;let r=this.deps.player;this.revenantYaw=Math.atan2(r.x-this.revLastX,r.z-this.revLastZ);for(let t=0;t<this.casters.length;t++){let n=this.casters[t];n.timerSec-=e,n.timerSec<=0&&(n.timerSec+=n.periodSec,this.firePulse(n))}}else this.revenantActive&&!this.chestDropped&&(this.revenantActive=!1,this.chestDropped=!0,this.revenantSlot=-1,this.deps.spawnChest(this.revLastX,this.revLastZ,!0),this.revenantSlainPayload.x=this.revLastX,this.revenantSlainPayload.z=this.revLastZ,this.deps.bus.emit(`revenantSlain`,this.revenantSlainPayload))}firePulse(e){if(e.archetype===`targetedBolt`){let t=this.deps.player;this.deps.combat.damagePlayerCircle(t.x,t.z,e.radius,e.perPulse)}else this.deps.combat.damagePlayerCircle(this.revLastX,this.revLastZ,e.radius,e.perPulse)}},ES=1,DS=.55,OS=.9,kS=1.18,AS=16,jS=class{ghostMesh;wisp;revenantMesh;eyes;ghostGeo;revGeo;wispGeo;eyeGeo;ghostMat;wispMat;revMat;eyeMat;mtx=new W;wispPhase=0;constructor(e,t){let n=new G(t);this.ghostGeo=new Ji(DS,OS,3,8),this.ghostMat=new q({color:n,emissive:n,emissiveIntensity:.2,transparent:!0,opacity:.25,depthWrite:!1,flatShading:!0}),this.ghostMesh=new K(this.ghostGeo,this.ghostMat),this.ghostMesh.frustumCulled=!1,this.ghostMesh.visible=!1,e.add(this.ghostMesh),this.wispGeo=new Dr;let r=new Float32Array(AS*3);for(let e=0;e<AS;e++){let t=e/AS*Math.PI*2,n=.35+e%3*.12;r[e*3]=Math.cos(t)*n,r[e*3+1]=e/AS*1.4-.4,r[e*3+2]=Math.sin(t)*n}this.wispGeo.setAttribute(`position`,new fr(r,3)),this.wispMat=new Fi({color:n,size:.18,transparent:!0,opacity:.35,depthWrite:!1,blending:2,sizeAttenuation:!0}),this.wisp=new Bi(this.wispGeo,this.wispMat),this.wisp.frustumCulled=!1,this.wisp.visible=!1,e.add(this.wisp);let i=n.clone().multiplyScalar(.32).lerp(new G(2755856),.35);this.revGeo=new Ji(DS,OS,3,8),this.revMat=new q({color:i,emissive:new G(2228998),emissiveIntensity:.5,roughness:.6,metalness:.1,flatShading:!0}),this.revenantMesh=new K(this.revGeo,this.revMat),this.revenantMesh.castShadow=!0,this.revenantMesh.frustumCulled=!1,this.revenantMesh.visible=!1,e.add(this.revenantMesh),this.eyeGeo=new ia(.09,8,8),this.eyeMat=new ri({color:16722731}),this.eyes=new Ei(this.eyeGeo,this.eyeMat,2),this.eyes.frustumCulled=!1,this.eyes.visible=!1,e.add(this.eyes)}update(e,t){if(this.ghostMesh.visible=e.ghostVisible,this.wisp.visible=e.ghostVisible,e.ghostVisible){let n=e.ghostY+ES;this.ghostMesh.position.set(e.ghostX,n,e.ghostZ),this.wispPhase+=t,this.wisp.position.set(e.ghostX,n+Math.sin(this.wispPhase*2)*.1,e.ghostZ),this.wisp.rotation.y=this.wispPhase*1.5}let n=e.revenantActive;if(this.revenantMesh.visible=n,this.eyes.visible=n,n){let t=e.revenantY+ES*kS;this.revenantMesh.position.set(e.revenantX,t,e.revenantZ),this.revenantMesh.rotation.y=e.revenantYaw,this.revenantMesh.scale.setScalar(kS);let n=e.revenantYaw,r=Math.cos(n),i=Math.sin(n),a=e.revenantY+1.45*kS,o=.4*kS,s=.2*kS;for(let t=0;t<2;t++){let n=t===0?-.236:s,c=e.revenantX+n*r+o*i,l=e.revenantZ-n*i+o*r;this.mtx.makeTranslation(c,a,l),this.eyes.setMatrixAt(t,this.mtx)}this.eyes.instanceMatrix.needsUpdate=!0}}dispose(){for(let e of[this.ghostMesh,this.wisp,this.revenantMesh,this.eyes])e.removeFromParent();this.ghostGeo.dispose(),this.revGeo.dispose(),this.wispGeo.dispose(),this.eyeGeo.dispose(),this.ghostMat.dispose(),this.wispMat.dispose(),this.revMat.dispose(),this.eyeMat.dispose()}},MS=Pp.leprechaun,NS=MS.params??{},PS=MS.hp,FS=MS.speed,IS=MS.radius,LS=MS.damage,RS=NS.hpScalePct??.25,zS=NS.hpScalePeriodSec??75,BS=NS.guardSpeedMult??1.5,VS=NS.knockbackRangeM??4,HS=NS.shoveIntervalMs??2e3,US=NS.shoveForce??14,WS=NS.potClaimRadiusM??1.25,GS=NS.enrageSpeedMult??1.4,KS=NS.enrageKnockbackCdMs??1200,qS=NS.enrageDamage??20,JS=20,YS=10,XS=12,ZS=1.5,QS=8,$S=[{id:`might`,label:`+8% Might`,apply:e=>{e.mightMult*=1.08}},{id:`attackSpeed`,label:`+8% Attack Speed`,apply:e=>{e.attackSpeedMult*=1.08}},{id:`area`,label:`+8% Area`,apply:e=>{e.areaMult*=1.08}},{id:`speed`,label:`+6% Move Speed`,apply:e=>{e.speedMult*=1.06}},{id:`greed`,label:`+6% Greed`,apply:e=>{e.greedMult*=1.06}},{id:`crit`,label:`+5% Crit Chance`,apply:e=>{e.critChanceAdd+=.05}}],eC=3,tC=class{deps;potBuffs={mightMult:1,speedMult:1,attackSpeedMult:1,areaMult:1,greedMult:1,critChanceAdd:0};_lepAlive=!1;_potActive=!1;_looted=!1;_mode=`guard`;_hp=0;_maxHp=0;_hitFlash=0;shoveCdMs=0;lepX=0;lepY=0;lepZ=0;potXv=0;potYv=0;potZv=0;nextSpawnSec=90;lastT=0;period;windowLo;windowWidth;rng;rngState;buffIdx=new Int32Array($S.length);target;constructor(e){this.deps=e,this.rngState=(e.seed??514822311)>>>0,this.rng=e.rng??(()=>this.mulberry());let t=e.swarm??{minibossEverySec:Px.minibossEverySec,leadSec:Px.swarm.leadSec,durationSec:Px.swarm.durationSec};this.period=t.minibossEverySec;let n=t.minibossEverySec-t.leadSec;this.windowLo=n-30,this.windowWidth=t.durationSec+60;for(let e=0;e<$S.length;e++)this.buffIdx[e]=e;let r=this;this.target={get active(){return r._lepAlive},get x(){return r.lepX},get z(){return r.lepZ},get radius(){return IS},damage:(e,t)=>r.damageLeprechaun(e,t)}}get encounterActive(){return this._lepAlive||this._potActive}get lepAlive(){return this._lepAlive}get potActive(){return this._potActive}get looted(){return this._looted}get enraged(){return this._mode===`enraged`}get mode(){return this._mode}get hp(){return this._hp}get maxHp(){return this._maxHp}get hitFlash(){return this._hitFlash}get lepX_(){return this.lepX}get lepY_(){return this.lepY}get lepZ_(){return this.lepZ}get potX(){return this.potXv}get potY(){return this.potYv}get potZ(){return this.potZv}suppressedAt(e){let t=((e%this.period+this.period)%this.period-this.windowLo)%this.period;return t<0&&(t+=this.period),t<this.windowWidth}update(e,t){if(this.lastT=t,this._hitFlash>0&&(this._hitFlash-=e*QS,this._hitFlash<0&&(this._hitFlash=0)),!this.encounterActive){this.maybeSpawn(t);return}this._lepAlive&&(this.move(e),this.tickShove(e)),this._potActive&&!this._looted&&this.checkClaim(t)}debugSpawn(e,t,n){this.place(e,t,n),this.nextSpawnSec=e+120}maybeSpawn(e){if(e<this.nextSpawnSec||this.suppressedAt(e))return;let t=this.deps.player,n=this.deps.terrain,r=n.bounds;for(let i=0;i<XS;i++){let i=this.rand()*Math.PI*2,a=JS+this.rand()*YS,o=t.x+Math.cos(i)*a,s=t.z+Math.sin(i)*a;if(o<r.minX?o=r.minX:o>r.maxX&&(o=r.maxX),s<r.minZ?s=r.minZ:s>r.maxZ&&(s=r.maxZ),!n.isOffCliff(o,s)){this.place(e,o,s),this.nextSpawnSec=e+120;return}}}place(e,t,n){let r=this.deps.terrain;this.potXv=t,this.potZv=n,this.potYv=r.heightAt(t,n);let i=this.deps.player,a=i.x-t,o=i.z-n,s=Math.hypot(a,o);s>1e-4?(a/=s,o/=s):(a=1,o=0),this.lepX=t+a*ZS,this.lepZ=n+o*ZS,this.lepY=r.heightAt(this.lepX,this.lepZ),this._maxHp=PS*(1+Math.floor(e/zS)*RS),this._hp=this._maxHp,this._lepAlive=!0,this._potActive=!0,this._looted=!1,this._mode=`guard`,this.shoveCdMs=0,this._hitFlash=0,this.deps.bus?.emit(`leprechaunSpawned`,{x:t,z:n})}move(e){let t=this.deps.player,n=this.deps.terrain,r,i,a;if(this._mode===`guard`){let e=t.x-this.potXv,n=t.z-this.potZv,o=Math.hypot(e,n);o>1e-4?(e/=o,n/=o):(e=1,n=0),r=this.potXv+e*ZS,i=this.potZv+n*ZS,a=FS*BS}else r=t.x,i=t.z,a=Math.min(FS*GS,5);let o=r-this.lepX,s=i-this.lepZ,c=Math.hypot(o,s);if(c>1e-4){let t=Math.min(c,a*e),r=this.lepX+o/c*t,i=this.lepZ+s/c*t;n.isOffCliff(r,i)||(this.lepX=r,this.lepZ=i)}this.lepY=n.heightAt(this.lepX,this.lepZ)}tickShove(e){if(this.shoveCdMs>0){if(this.shoveCdMs-=e*1e3,this.shoveCdMs>0)return;this.shoveCdMs=0}let t=this.deps.player,n=this._mode===`guard`,r=n?VS:IS+t.radius,i=t.x-this.lepX,a=t.z-this.lepZ,o=i*i+a*a;if(o>r*r)return;let s=Math.sqrt(o),c=i,l=a;s>1e-4?(c/=s,l/=s):(c=1,l=0),this.deps.applyPlayerImpulse(c*US,0,l*US),this.deps.hurtPlayer(n?LS:qS),this.shoveCdMs=n?HS:KS}checkClaim(e){let t=this.deps.player,n=t.x-this.potXv,r=t.z-this.potZv,i=WS+t.radius;n*n+r*r>i*i||this.claim()}claim(){this._looted=!0,this._potActive=!1,this.deps.awardGold(50);let e=[];this.rollBuffs(e),this.deps.grantBuffChoices(e),this.deps.bus?.emit(`potLooted`,{gold:50}),this._lepAlive?this.enrage():this.endEncounter()}rollBuffs(e){let t=this.buffIdx,n=t.length;for(let r=0;r<eC;r++){let i=r+Math.floor(this.rand()*(n-r)),a=t[r];t[r]=t[i],t[i]=a;let o=$S[t[r]];o.apply(this.potBuffs),e.push({id:o.id,label:o.label})}}enrage(){this._mode!==`enraged`&&(this._mode=`enraged`,this.shoveCdMs=0,this.deps.bus?.emit(`leprechaunEnraged`,{}))}damageLeprechaun(e,t){return!this._lepAlive||e<=0?!1:(this._hp-=e,this._hitFlash=1,this._hp<=0&&(this._hp=0,this.kill()),!0)}kill(){this._lepAlive=!1,this.deps.awardGold(25),this._potActive||this.endEncounter()}endEncounter(){this._lepAlive=!1,this._potActive=!1,this.nextSpawnSec=this.lastT+120}rand(){return this.rng()}mulberry(){let e=this.rngState+1831565813|0;this.rngState=e;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}},nC=4177754,rC=1320474,iC=16764735,aC=16769658,oC=16769658,sC=new G(1,.42,.42),cC=new G(1,1,1),lC=[16731469,16753983,16769599,5103722,5082367,12078591],uC=6,dC=.55,fC=.12,pC=8,mC=.12;function hC(e,t){let n=new G(t),r=e.attributes.position.count,i=new Float32Array(r*3);for(let e=0;e<r;e++)i[e*3]=n.r,i[e*3+1]=n.g,i[e*3+2]=n.b;return e.setAttribute(`color`,new fr(i,3)),e}function gC(){let e=new Ji(.35,.5,3,8);e.translate(0,.55,0);let t=new Xi(.44,.44,.08,14);t.translate(0,1,0);let n=new Xi(.28,.31,.5,14);n.translate(0,1.29,0);let r=xy([hC(e,nC),hC(t,rC),hC(n,rC)],!1);if(e.dispose(),t.dispose(),n.dispose(),!r)throw Error(`LeprechaunRenderer: critter merge failed`);return r}function _C(){let e=new Xi(.5,.34,.6,16);e.translate(0,.32,0);let t=new oa(.5,.09,8,18);t.rotateX(Math.PI/2),t.translate(0,.6,0);let n=[hC(e,iC),hC(t,iC)];for(let e=0;e<5;e++){let t=e/5*Math.PI*2,r=new Xi(.13,.13,.05,10);r.rotateX(Math.PI/2*.12),r.translate(Math.cos(t)*.18,.64+e%2*.05,Math.sin(t)*.18),n.push(hC(r,aC))}let r=xy(n,!1);for(let e of n)e.dispose();if(!r)throw Error(`LeprechaunRenderer: pot merge failed`);return r}function vC(){let e=[];for(let t=0;t<lC.length;t++){let n=new oa(uC+t*dC,fC,6,44,Math.PI);e.push(hC(n,lC[t]))}let t=xy(e,!1);for(let t of e)t.dispose();if(!t)throw Error(`LeprechaunRenderer: rainbow merge failed`);return t}function yC(e){let t=e.createElement(`canvas`);t.width=256,t.height=128;let n=t.getContext(`2d`);n.textAlign=`center`,n.textBaseline=`middle`,n.font=`900 84px system-ui, sans-serif`,n.lineJoin=`round`,n.lineWidth=12,n.strokeStyle=`rgba(10,6,20,0.8)`,n.fillStyle=`#ffe27a`,n.strokeText(`LOOT`,128,68),n.fillText(`LOOT`,128,68);let r=new Ui(t);r.minFilter=S,r.magFilter=S,r.generateMipmaps=!1;let i=new qr(new Nr({map:r,transparent:!0,depthWrite:!1,toneMapped:!1}));return i.scale.set(2.4,1.2,1),i}var bC=class{critterGroup;critterMat;buckleMat;potGroup;rainbow;rainbowMat;loot;steam;steamMat;mtx=new W;time=0;constructor(e,t=document){this.critterMat=new q({vertexColors:!0,flatShading:!0,roughness:.5,metalness:.1});let n=new K(gC(),this.critterMat);n.castShadow=!0,this.buckleMat=new q({color:oC,emissive:oC,emissiveIntensity:.7,flatShading:!0,roughness:.3,metalness:.6});let r=new K(new qi(.16,.16,.06),this.buckleMat);r.position.set(0,1.02,.44),this.critterGroup=new wn,this.critterGroup.add(n,r),this.critterGroup.visible=!1,e.add(this.critterGroup);let i=new q({vertexColors:!0,emissive:16758063,emissiveIntensity:.35,flatShading:!0,roughness:.35,metalness:.55}),a=new K(_C(),i);a.castShadow=!0,this.potGroup=new wn,this.potGroup.add(a),this.potGroup.visible=!1,e.add(this.potGroup),this.rainbowMat=new ri({vertexColors:!0,transparent:!0,opacity:.6,depthWrite:!1,toneMapped:!1}),this.rainbow=new K(vC(),this.rainbowMat),this.rainbow.frustumCulled=!1,this.rainbow.visible=!1,e.add(this.rainbow),this.loot=yC(t),this.loot.visible=!1,e.add(this.loot),this.steamMat=new ri({color:14211296,transparent:!0,opacity:.55,depthWrite:!1}),this.steam=new Ei(new ia(mC,6,5),this.steamMat,pC),this.steam.frustumCulled=!1,this.steam.count=0,this.steam.instanceMatrix.setUsage(I),this.steam.visible=!1,e.add(this.steam)}update(e,t){this.time+=t;let n=this.time,r=e.lepAlive;if(this.critterGroup.visible=r,r){let t=Math.abs(Math.sin(n*6))*.06;this.critterGroup.position.set(e.lepX_,e.lepY_+t,e.lepZ_);let r=e.hitFlash;e.enraged?this.critterMat.color.copy(sC):this.critterMat.color.copy(cC),this.critterMat.emissive.setRGB(r,r*.25,r*.25),this.buckleMat.emissiveIntensity=.7+.3*Math.sin(n*4)}let i=e.potActive;if(this.potGroup.visible=i,this.rainbow.visible=i,this.loot.visible=i,i){this.potGroup.position.set(e.potX,e.potY,e.potZ),this.rainbow.position.set(e.potX,e.potY,e.potZ),this.rainbowMat.opacity=.5+.2*Math.sin(n*2.2);let t=Math.sin(n*2.5)*.12;this.loot.position.set(e.potX,e.potY+2.4+t,e.potZ)}let a=r&&e.enraged;if(this.steam.visible=a,a){let t=this.mtx;for(let r=0;r<pC;r++){let i=(n*.9+r/pC)%1,a=r/pC*Math.PI*2+n,o=.35+i*.2,s=Math.sin(i*Math.PI)*1.1+.001;t.makeScale(s,s,s),t.setPosition(e.lepX_+Math.cos(a)*o,e.lepY_+1.35+i*1.1,e.lepZ_+Math.sin(a)*o),this.steam.setMatrixAt(r,t)}this.steam.count=pC,this.steam.instanceMatrix.needsUpdate=!0}}dispose(){for(let e of[this.critterGroup,this.potGroup,this.rainbow,this.loot,this.steam])e.removeFromParent();this.critterGroup.traverse(e=>{e instanceof K&&e.geometry.dispose()}),this.potGroup.traverse(e=>{e instanceof K&&e.geometry.dispose()}),this.rainbow.geometry.dispose(),this.steam.geometry.dispose(),this.critterMat.dispose(),this.buckleMat.dispose(),this.rainbowMat.dispose(),this.steamMat.dispose(),this.loot.material.map?.dispose(),this.loot.material.dispose()}},xC={bonkHammer:{baseId:`bonkHammer`,passiveId:`might`,evolvedId:`megawhomp`},teslaRing:{baseId:`teslaRing`,passiveId:`cooldown`,evolvedId:`stormcage`},emberTrail:{baseId:`emberTrail`,passiveId:`area`,evolvedId:`wildfire`},frostFan:{baseId:`frostFan`,passiveId:`haste`,evolvedId:`blizzard`},voidSiphon:{baseId:`voidSiphon`,passiveId:`magnet`,evolvedId:`eventHorizon`},spiritBolts:{baseId:`spiritBolts`,passiveId:`luck`,evolvedId:`poltergeistSwarm`},quakeBoots:{baseId:`quakeBoots`,passiveId:`bounce`,evolvedId:`meteorBoots`},beamPrism:{baseId:`beamPrism`,passiveId:`might`,evolvedId:`sunlance`}},SC=Object.values(xC),CC=class{pending=null;weapons;passives;bus;onConfirmCb;unsubscribes;confirmed=new Set;bossChestsOutstanding=0;constructor(e){this.weapons=e.weapons,this.passives=e.passives,this.bus=e.bus,this.onConfirmCb=e.onConfirm,this.unsubscribes=[this.bus.on(`chestDropped`,this.onChestDropped),this.bus.on(`chestOpened`,this.onChestOpened)]}dispose(){for(let e of this.unsubscribes)e()}confirm(){let e=this.pending;e&&(this.pending=null,this.confirmed.add(e.baseId),this.onConfirmCb?.(e.baseId,e.evolvedId),this.bus.emit(`weaponEvolved`,{baseId:e.baseId,evolvedId:e.evolvedId}))}decline(){this.pending=null}onChestDropped=e=>{e.fromBoss&&this.bossChestsOutstanding++};onChestOpened=()=>{this.bossChestsOutstanding<=0||(this.bossChestsOutstanding--,!this.pending&&(this.pending=this.findEligible()))};findEligible(){for(let e of SC){if(this.confirmed.has(e.baseId)||this.weapons.has(e.evolvedId))continue;let t=ap[e.baseId];if(!(!t||this.weapons.levelOf(e.baseId)<t.maxLevel)&&!(this.passives.levelOf(e.passiveId)<=0))return{baseId:e.baseId,evolvedId:e.evolvedId}}return null}},wC=Object.values(xC),TC=`position:fixed;left:16px;top:14px;z-index:480;display:none;flex-direction:column;gap:4px;pointer-events:none;font-family:'Segoe UI',system-ui,-apple-system,sans-serif;`,EC=`display:none;padding:3px 10px;border-radius:8px;font-size:12px;font-weight:800;letter-spacing:0.02em;color:#ffe9a8;background:rgba(255,207,63,0.14);border:1px solid rgba(255,207,63,0.55);text-shadow:0 0 8px rgba(255,207,63,0.65);width:max-content;`,DC=class{weapons;passives;root;rows;rootVisible=!1;constructor(e,t,n){this.weapons=t,this.passives=n;let r=e.ownerDocument;if(!r)throw Error(`EvolutionHint: parent has no ownerDocument`);this.root=r.createElement(`div`),this.root.style.cssText=TC,this.rows=wC.map(e=>{let t=r.createElement(`div`);return t.style.cssText=EC,t.textContent=`${ap[e.baseId]?.name??e.baseId} + ${Hp[e.passiveId]?.name??e.passiveId} = ?`,this.root.appendChild(t),{evolvedId:e.evolvedId,baseId:e.baseId,passiveId:e.passiveId,el:t,lastVisible:!1}}),e.appendChild(this.root)}update(){let e=0;for(let t of this.rows){let n=this.isEligible(t);n&&e++,n!==t.lastVisible&&(t.lastVisible=n,t.el.style.display=n?`block`:`none`)}let t=e>0;t!==this.rootVisible&&(this.rootVisible=t,this.root.style.display=t?`flex`:`none`)}dispose(){this.root.remove()}isEligible(e){if(this.weapons.has(e.evolvedId))return!1;let t=ap[e.baseId];return!t||this.weapons.levelOf(e.baseId)<t.maxLevel?!1:this.passives.levelOf(e.passiveId)>0}},OC=`whomp-evolution-style`,kC=`
.whomp-evolution{position:fixed;inset:0;z-index:920;display:none;
  align-items:center;justify-content:center;flex-direction:column;gap:24px;
  background:radial-gradient(ellipse at center,rgba(48,36,4,0.75),rgba(6,4,14,0.94));
  font-family:'Segoe UI',system-ui,-apple-system,sans-serif;color:#fff;text-align:center;}
.whomp-evolution__title{font-size:14px;font-weight:800;letter-spacing:0.24em;
  text-transform:uppercase;color:#ffcf3f;text-shadow:0 0 16px rgba(255,207,63,0.7);}
.whomp-evolution__card{position:relative;padding:30px 40px 26px;border-radius:26px;
  background:linear-gradient(180deg,rgba(46,32,10,0.96),rgba(18,12,4,0.97));
  border:4px solid #ffcf3f;box-shadow:0 0 0 1px rgba(255,255,255,0.08) inset,
  0 14px 34px rgba(0,0,0,0.55),0 0 46px -6px #ffcf3f;
  display:flex;flex-direction:column;align-items:center;gap:12px;
  transform:scale(0.4) translateY(30px);opacity:0;
  animation:whomp-evolution-in 180ms cubic-bezier(.34,1.56,.64,1) forwards;}
@keyframes whomp-evolution-in{
  0%{transform:scale(0.4) translateY(30px);opacity:0;}
  60%{transform:scale(1.1) translateY(-4px);opacity:1;}
  100%{transform:scale(1) translateY(0);opacity:1;}
}
.whomp-evolution__arrow{font-size:15px;font-weight:800;letter-spacing:0.1em;color:rgba(255,255,255,0.5);}
.whomp-evolution__name{font-size:15px;font-weight:800;letter-spacing:0.04em;color:rgba(255,255,255,0.75);}
.whomp-evolution__evolved{font-size:30px;font-weight:900;letter-spacing:0.02em;
  background:linear-gradient(90deg,#ffcf3f,#ff8f3f);-webkit-background-clip:text;
  background-clip:text;color:transparent;text-shadow:0 0 22px rgba(255,207,63,0.5);}
.whomp-evolution__controls{display:flex;gap:16px;margin-top:6px;}
.whomp-evolution__btn{padding:11px 26px;border-radius:14px;border:2px solid rgba(255,255,255,0.22);
  background:rgba(255,255,255,0.06);color:#fff;font-weight:800;font-size:15px;
  letter-spacing:0.04em;cursor:pointer;display:flex;align-items:center;gap:9px;
  transition:transform 90ms ease-out,background 120ms ease-out;}
.whomp-evolution__btn:hover{background:rgba(255,255,255,0.15);transform:translateY(-1px);}
.whomp-evolution__btn--take{background:linear-gradient(90deg,#ffcf3f,#ff8f3f);
  border-color:transparent;color:#1a1204;}
.whomp-evolution__btn--take:hover{filter:brightness(1.08);}
.whomp-evolution__key{width:22px;height:22px;border-radius:6px;background:rgba(255,255,255,0.12);
  border:1px solid rgba(255,255,255,0.28);display:flex;align-items:center;justify-content:center;
  font-size:12px;font-weight:800;}
.whomp-evolution__btn--take .whomp-evolution__key{background:rgba(0,0,0,0.18);border-color:rgba(0,0,0,0.25);}
`;function AC(e){if(e.getElementById(OC))return;let t=e.createElement(`style`);t.id=OC,t.textContent=kC,e.head.appendChild(t)}var jC=class{evolution;root;nameEl;evolvedEl;lastPending=null;keydownHandler;win;constructor(e,t){this.evolution=t;let n=e.ownerDocument;if(!n)throw Error(`EvolutionOffer: parent has no ownerDocument`);AC(n),this.root=n.createElement(`div`),this.root.className=`whomp-evolution`;let r=n.createElement(`div`);r.className=`whomp-evolution__title`,r.textContent=`Evolution Available`;let i=n.createElement(`div`);i.className=`whomp-evolution__card`,this.nameEl=n.createElement(`div`),this.nameEl.className=`whomp-evolution__name`;let a=n.createElement(`div`);a.className=`whomp-evolution__arrow`,a.textContent=`EVOLVES INTO`,this.evolvedEl=n.createElement(`div`),this.evolvedEl.className=`whomp-evolution__evolved`;let o=n.createElement(`div`);o.className=`whomp-evolution__controls`;let s=this.buildBtn(n,`whomp-evolution__btn whomp-evolution__btn--take`,`1`,`TAKE`),c=this.buildBtn(n,`whomp-evolution__btn`,`2`,`LATER`);s.addEventListener(`click`,()=>this.evolution.confirm()),c.addEventListener(`click`,()=>this.evolution.decline()),o.appendChild(s),o.appendChild(c),i.appendChild(this.nameEl),i.appendChild(a),i.appendChild(this.evolvedEl),i.appendChild(o),this.root.appendChild(r),this.root.appendChild(i),e.appendChild(this.root),this.win=n.defaultView??void 0,this.keydownHandler=e=>this.onKeydown(e),this.win?.addEventListener(`keydown`,this.keydownHandler)}update(){let e=this.evolution.pending;e!==this.lastPending&&(this.lastPending=e,e?this.renderOffer(e):this.hide())}dispose(){this.win?.removeEventListener(`keydown`,this.keydownHandler),this.root.remove()}renderOffer(e){let t=ap[e.baseId],n=ap[e.evolvedId];this.nameEl.textContent=t?.name??e.baseId,this.evolvedEl.textContent=(n?.name??e.evolvedId).toUpperCase(),this.root.style.display=`flex`}hide(){this.root.style.display=`none`}buildBtn(e,t,n,r){let i=e.createElement(`button`);i.className=t,i.type=`button`;let a=e.createElement(`span`);a.className=`whomp-evolution__key`,a.textContent=n;let o=e.createElement(`span`);return o.textContent=r,i.appendChild(a),i.appendChild(o),i}onKeydown(e){this.evolution.pending&&(e.key===`1`?(e.preventDefault(),this.evolution.confirm()):e.key===`2`&&(e.preventDefault(),this.evolution.decline()))}},MC=8;180-MC*2;var NC=1e3/4,PC=1e3/10,FC=6,IC=.55,LC=`255,70,70`,RC=48,zC=.6,BC=`#234d27`,VC=`#0f140f`,HC=`#4a8a4f`,UC=`#24f0ff`,WC=`#ffcf3f`,GC=`#ffd23f`,KC=`#e8e4d8`,qC=`#241417`,JC=`#3ff08a`,YC=`#b48cff`,XC=[[0,`#ff3b3b`],[.2,`#ff9d3b`],[.4,`#ffe93b`],[.6,`#3bff6a`],[.8,`#3bb8ff`],[1,`#b83bff`]],ZC=3.5,QC=5,$C=4.5,ew=.35,tw=7,nw=5;function rw(e,t){let n=e=>e<0?0:e>255?255:e,r=n(Math.round((e>>16&255)*t)),i=n(Math.round((e>>8&255)*t)),a=n(Math.round((e&255)*t)),o=e=>e.toString(16).padStart(2,`0`);return`#${o(r)}${o(i)}${o(a)}`}function iw(e,t,n,r){let i=n.maxX-n.minX,a=n.maxZ-n.minZ;return{x:i===0?r/2:(e-n.minX)/i*r,y:a===0?r/2:(t-n.minZ)/a*r}}var aw=`whomp-minimap-style`,ow=`
.whomp-minimap{position:fixed;right:16px;bottom:16px;width:180px;height:180px;
  border-radius:20px;background:rgba(12,8,24,0.6);border:3px solid rgba(255,255,255,0.22);
  box-shadow:0 4px 0 rgba(0,0,0,0.35);overflow:hidden;pointer-events:none;z-index:500;
  padding:${MC}px;box-sizing:border-box;}
.whomp-minimap canvas{display:block;width:100%;height:100%;border-radius:12px;image-rendering:pixelated;}
`;function sw(e){if(e.getElementById(aw))return;let t=e.createElement(`style`);t.id=aw,t.textContent=ow,e.head.appendChild(t)}var cw=class{deps;root;canvas;ctx;staticCanvas;bounds;dpr;heat=new Float32Array(576);lastHeatMs=-1/0;lastRedrawMs=-1/0;constructor(e,t){this.deps=t;let n=e.ownerDocument;if(!n)throw Error(`Minimap: parent has no ownerDocument`);sw(n),this.bounds=t.terrain.bounds,this.dpr=Math.min(n.defaultView?.devicePixelRatio??1,2),this.root=n.createElement(`div`),this.root.className=`whomp-minimap`,this.canvas=n.createElement(`canvas`),this.canvas.width=Math.round(164*this.dpr),this.canvas.height=Math.round(164*this.dpr);let r=this.canvas.getContext(`2d`);if(!r)throw Error(`Minimap: 2d context unavailable`);this.ctx=r,this.ctx.scale(this.dpr,this.dpr),this.root.appendChild(this.canvas),e.appendChild(this.root),this.staticCanvas=this.bakeStaticLayer(n)}update(e){e-this.lastHeatMs>=NC&&(this.lastHeatMs=e,this.rebuildHeat()),e-this.lastRedrawMs>=PC&&(this.lastRedrawMs=e,this.redraw())}dispose(){this.root.remove()}get heatSnapshot(){return this.heat}bakeStaticLayer(e){let t=RC,n=e.createElement(`canvas`);n.width=t,n.height=t;let r=n.getContext(`2d`);if(!r)throw Error(`Minimap: 2d context unavailable for static bake`);let{terrain:i}=this.deps,a=this.bounds,o=a.maxX-a.minX||1,s=a.maxZ-a.minZ||1,c=t*t,l=new Float32Array(c),u=new Uint8Array(c),d=1/0,f=-1/0;for(let e=0;e<t;e++){let n=a.minZ+(e+.5)/t*s;for(let r=0;r<t;r++){let s=a.minX+(r+.5)/t*o,c=e*t+r,p=i.isOffCliff(s,n);u[c]=+!!p;let m=i.heightAt(s,n);l[c]=m,p||(m<d&&(d=m),m>f&&(f=m))}}let p=Number.isFinite(d)&&Number.isFinite(f)&&f>d?d+zC*(f-d):1/0,m=this.deps.palette,h=m?rw(m.groundA,.55):BC,g=m?rw(m.groundA,.95):HC,_=m?rw(m.cliff,.4):VC;for(let e=0;e<t;e++)for(let n=0;n<t;n++){let i=e*t+n;r.fillStyle=u[i]?_:l[i]>=p?g:h,r.fillRect(n,e,1,1)}return n}rebuildHeat(){this.heat.fill(0);let{horde:e}=this.deps,t=this.bounds,n=t.maxX-t.minX||1,r=t.maxZ-t.minZ||1,i=e.posX,a=e.posZ,o=e.state,s=e.count;for(let e=0;e<s;e++){if(o[e]===0)continue;let s=(i[e]-t.minX)/n*24|0,c=(a[e]-t.minZ)/r*24|0;s<0||s>=24||c<0||c>=24||this.heat[c*24+s]++}}redraw(){let e=this.ctx;e.imageSmoothingEnabled=!1,e.clearRect(0,0,164,164),e.drawImage(this.staticCanvas,0,0,RC,RC,0,0,164,164),this.drawHeat(e,164),this.drawShrines(e,164),this.drawChests(e,164),this.drawExtras(e,164),this.drawPlayer(e,164)}drawHeat(e,t){let n=t/24;for(let t=0;t<24;t++)for(let r=0;r<24;r++){let i=this.heat[t*24+r];i<=0||(e.fillStyle=`rgba(${LC},${Math.min(IC,i/FC*IC).toFixed(3)})`,e.fillRect(r*n,t*n,n+.5,n+.5))}}drawShrines(e,t){let n=this.deps.providers.shrines();e.fillStyle=WC;for(let r=0;r<n.length;r++){let i=n[r],a=iw(i.x,i.z,this.bounds,t);e.globalAlpha=i.activated?ew:1,e.beginPath(),e.moveTo(a.x,a.y-$C),e.lineTo(a.x+$C,a.y),e.lineTo(a.x,a.y+$C),e.lineTo(a.x-$C,a.y),e.closePath(),e.fill()}e.globalAlpha=1}drawChests(e,t){let n=this.deps.providers.chests();e.fillStyle=GC;for(let r=0;r<n.length;r++){let i=n[r];if(!i.active)continue;let a=iw(i.x,i.z,this.bounds,t);e.beginPath(),e.arc(a.x,a.y,ZC,0,Math.PI*2),e.fill()}}drawExtras(e,t){let n=this.deps.providers.extra();for(let r=0;r<n.length;r++){let i=n[r],a=iw(i.x,i.z,this.bounds,t);switch(i.kind){case`boss`:this.drawBoss(e,a.x,a.y);break;case`leprechaun`:this.drawDot(e,a.x,a.y,ZC,JC);break;case`pot`:this.drawPot(e,a.x,a.y);break;default:this.drawDot(e,a.x,a.y,ZC,YC);break}}}drawDot(e,t,n,r,i){e.fillStyle=i,e.beginPath(),e.arc(t,n,r,0,Math.PI*2),e.fill()}drawBoss(e,t,n){e.fillStyle=KC,e.beginPath(),e.arc(t,n,QC,0,Math.PI*2),e.fill(),e.fillStyle=qC,e.beginPath(),e.arc(t-QC*.35,n-QC*.15,QC*.22,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(t+QC*.35,n-QC*.15,QC*.22,0,Math.PI*2),e.fill()}drawPot(e,t,n){let r=e.createLinearGradient(t-ZC,n,t+ZC,n);for(let[e,t]of XC)r.addColorStop(e,t);e.fillStyle=r,e.beginPath(),e.arc(t,n,ZC,0,Math.PI*2),e.fill()}drawPlayer(e,t){let{player:n}=this.deps,r=iw(n.x,n.z,this.bounds,t),i=-Math.sin(n.yaw),a=-Math.cos(n.yaw),o=Math.atan2(a,i);e.save(),e.translate(r.x,r.y),e.rotate(o),e.fillStyle=UC,e.beginPath(),e.moveTo(tw,0),e.lineTo(-7*.6,nw*.5),e.lineTo(-7*.6,-5*.5),e.closePath(),e.fill(),e.restore()}},lw={rootWave:{id:`rootWave`,name:`Root Wave`,desc:`The ground remembers being a boss attack.`,cooldownMs:48e3,params:{radius:10,damage:70,snareMs:1500,expandSpeedMps:12}},chargeRush:{id:`chargeRush`,name:`Charge Rush`,desc:`Look, a lock-on. Now look at the wall you hit.`,cooldownMs:52e3,params:{distanceM:10,damage:90,knockback:14,shockwaveRadius:4}},petalBarrage:{id:`petalBarrage`,name:`Petal Barrage`,desc:`Flowers. So many flowers. All of them lethal.`,cooldownMs:45e3,params:{projectileCount:16,damage:25,projectileSpeed:14,spreadDeg:360}},slamWave:{id:`slamWave`,name:`Slam Wave`,desc:`Somebody’s landing on you. It’s you.`,cooldownMs:55e3,params:{radius:12,damage:80,knockback:16,expandSpeedMps:10}},igniteField:{id:`igniteField`,name:`Ignite Field`,desc:`Ground’s on fire now. You did that.`,cooldownMs:5e4,params:{radius:6,damage:15,tickRateMs:500,durationMs:4e3}},mirrorBeams:{id:`mirrorBeams`,name:`Mirror Beams`,desc:`Four beams. One grudge.`,cooldownMs:6e4,params:{beamCount:4,damage:35,tickRateMs:200,durationMs:3e3,rotationSpeedDegPerSec:90}}},uw=8e3,dw=Math.PI*2,fw=320,pw=3,mw=.4,hw=2e3,gw=.9,_w=4,vw=6,yw=1.4,bw=class{deps;_heldId=null;cdLeft=0;cooldownMsForHeld=0;_pendingChoice=null;_lastEquip=null;equipTokenCounter=0;phase=`idle`;windupMsLeft=0;effectCX=0;effectCZ=0;dashElapsedMs=0;dashStartX=0;dashStartZ=0;dashDirX=0;dashDirZ=0;dashStepsHit=0;igniteTickAccMs=0;igniteMsLeft=0;beamsMsLeft=0;beamsTickAccMs=0;beamsRotationDeg=0;ps;usedPayload={signatureId:``};unsub;constructor(e){this.deps=e,this.ps={behavior:0,x:0,y:0,z:0,vx:0,vz:0,radius:mw,damage:0,knockback:0,crit:!1,pierce:0,ttlMs:hw,rangeM:0,tgtX:0,tgtZ:0,aoeRadius:0,arcMs:0,arcH:0,rarity:_w},this.unsub=e.bus.on(`bossKilled`,e=>{e.signatureId&&this.offer(e.signatureId)})}get heldId(){return this._heldId}get cooldownLeftMs(){return this.cdLeft}get readyFraction(){return this._heldId?this.cooldownMsForHeld<=0?1:1-this.cdLeft/this.cooldownMsForHeld:0}get pendingChoice(){return this._pendingChoice}get lastEquip(){return this._lastEquip}offer(e){if(!(!e||!lw[e])&&e!==this._heldId){if(this._heldId===null){this.equip(e);return}this._pendingChoice={currentId:this._heldId,offeredId:e,msLeft:uw}}}tryActivate(){return!this._heldId||this.cdLeft>0||!this.beginEffect(this._heldId)?!1:(this.cooldownMsForHeld=this.scaledCooldown(this._heldId),this.cdLeft=this.cooldownMsForHeld,this.usedPayload.signatureId=this._heldId,this.deps.bus.emit(`ultimateUsed`,this.usedPayload),!0)}update(e){let t=e*1e3;this.cdLeft>0&&(this.cdLeft-=t,this.cdLeft<0&&(this.cdLeft=0)),this._pendingChoice&&(this._pendingChoice.msLeft-=t,this._pendingChoice.msLeft<=0&&(this._pendingChoice=null)),this.tickEffect(e,t)}keep(){this._pendingChoice=null}take(){let e=this._pendingChoice;e&&(this._pendingChoice=null,this.equip(e.offeredId))}dispose(){this.unsub()}equip(e){this._heldId=e,this.cdLeft=0,this.cooldownMsForHeld=this.scaledCooldown(e),this.equipTokenCounter++,this._lastEquip={id:e,token:this.equipTokenCounter}}scaledCooldown(e){return lw[e].cooldownMs*Math.max(.01,this.deps.stats.cooldown)}beginEffect(e){let t=lw[e].params,n=this.deps.player.state;switch(e){case`rootWave`:case`slamWave`:return this.phase=e,this.effectCX=n.x,this.effectCZ=n.z,this.windupMsLeft=t.radius/Math.max(.01,t.expandSpeedMps)*1e3,!0;case`chargeRush`:return this.phase=`chargeRush`,this.dashStartX=n.x,this.dashStartZ=n.z,this.dashDirX=-Math.sin(n.yaw),this.dashDirZ=-Math.cos(n.yaw),this.dashElapsedMs=0,this.dashStepsHit=0,this.deps.player.grantIFrames(fw),!0;case`petalBarrage`:return this.firePetalBarrage(t,n.x,n.y,n.z),this.phase=`idle`,!0;case`igniteField`:return this.phase=`igniteField`,this.effectCX=n.x,this.effectCZ=n.z,this.deps.surfaces?.ignite(n.x,n.z,t.radius),this.deps.combat.damageCircle(n.x,n.z,t.radius,t.damage,!1,0),this.igniteTickAccMs=0,this.igniteMsLeft=t.durationMs,!0;case`mirrorBeams`:return this.phase=`mirrorBeams`,this.beamsMsLeft=t.durationMs,this.beamsTickAccMs=0,this.beamsRotationDeg=0,!0;default:return!1}}tickEffect(e,t){switch(this.phase){case`rootWave`:case`slamWave`:this.tickWindup(t,this.phase);break;case`chargeRush`:this.tickChargeRush(t);break;case`igniteField`:this.tickIgniteField(t);break;case`mirrorBeams`:this.tickMirrorBeams(e,t);break;default:break}}tickWindup(e,t){if(this.windupMsLeft-=e,this.windupMsLeft>0)return;let n=lw[t].params;t===`rootWave`?(this.deps.combat.damageCircle(this.effectCX,this.effectCZ,n.radius,n.damage,!1,0),this.deps.slow(this.effectCX,this.effectCZ,n.radius,0,n.snareMs)):this.deps.combat.damageCircle(this.effectCX,this.effectCZ,n.radius,n.damage,!1,n.knockback),this.phase=`idle`}tickChargeRush(e){let t=lw.chargeRush.params;this.dashElapsedMs+=e;let n=Math.min(1,this.dashElapsedMs/fw),r=t.distanceM*n,i=this.dashStartX+this.dashDirX*r,a=this.dashStartZ+this.dashDirZ*r;if(!this.deps.player.teleportTo(i,a,this.deps.terrain)){this.phase=`idle`;return}let o=(this.dashStepsHit+1)/pw;this.dashStepsHit<pw&&n>=o&&(this.dashStepsHit++,this.deps.combat.damageCircle(i,a,t.shockwaveRadius,t.damage,!1,t.knockback)),n>=1&&(this.phase=`idle`)}firePetalBarrage(e,t,n,r){let i=e.projectileCount,a=e.projectileSpeed,o=this.ps;o.damage=e.damage,o.y=n+gw;for(let e=0;e<i;e++){let n=e/i*dw;o.x=t,o.z=r,o.vx=Math.cos(n)*a,o.vz=Math.sin(n)*a,this.deps.spawnProjectile(o)}}tickIgniteField(e){let t=lw.igniteField.params;this.igniteTickAccMs+=e;let n=0;for(;this.igniteTickAccMs>=t.tickRateMs&&n++<8;)this.igniteTickAccMs-=t.tickRateMs,this.deps.combat.damageCircle(this.effectCX,this.effectCZ,t.radius,t.damage,!1,0);this.igniteMsLeft-=e,this.igniteMsLeft<=0&&(this.phase=`idle`)}tickMirrorBeams(e,t){let n=lw.mirrorBeams.params;this.beamsRotationDeg+=n.rotationSpeedDegPerSec*e,this.beamsTickAccMs+=t;let r=0;for(;this.beamsTickAccMs>=n.tickRateMs&&r++<8;)this.beamsTickAccMs-=n.tickRateMs,this.fireBeamsTick(n);this.beamsMsLeft-=t,this.beamsMsLeft<=0&&(this.phase=`idle`)}fireBeamsTick(e){let t=this.deps.player.state,n=this.beamsRotationDeg*Math.PI/180,r=e.beamCount;for(let i=0;i<r;i++){let a=n+i/r*dw,o=t.x+Math.cos(a)*vw,s=t.z+Math.sin(a)*vw;this.deps.combat.damageCircle(o,s,yw,e.damage,!1,0)}}},xw=`whomp-ultimate-style`,Sw={rootWave:`◎`,chargeRush:`➤`,petalBarrage:`✿`,slamWave:`◉`,igniteField:`♨`,mirrorBeams:`✺`},Cw=`
.whomp-ultimate-chip{position:fixed;left:50%;bottom:16px;transform:translateX(-50%);
  width:60px;height:60px;z-index:500;pointer-events:none;
  font-family:'Segoe UI',system-ui,-apple-system,sans-serif;}
.whomp-ultimate-chip__ring{width:100%;height:100%;border-radius:50%;
  background:conic-gradient(#b48cff var(--frac-deg,360deg),rgba(255,255,255,0.12) 0);
  border:3px solid rgba(255,255,255,0.22);box-shadow:0 4px 0 rgba(0,0,0,0.35);
  display:flex;align-items:center;justify-content:center;
  transition:filter 120ms ease-out;}
.whomp-ultimate-chip--empty .whomp-ultimate-chip__ring{
  background:rgba(12,8,24,0.6);opacity:0.55;}
.whomp-ultimate-chip--ready .whomp-ultimate-chip__ring{filter:brightness(1.3) saturate(1.25);}
.whomp-ultimate-chip__inner{width:74%;height:74%;border-radius:50%;
  background:rgba(12,8,24,0.88);display:flex;align-items:center;justify-content:center;}
.whomp-ultimate-chip__icon{font-size:22px;line-height:1;color:#fff;
  text-shadow:0 0 10px rgba(180,140,255,0.7);}
.whomp-ultimate-chip__key{position:absolute;left:50%;bottom:-8px;transform:translateX(-50%);
  width:18px;height:18px;border-radius:5px;background:rgba(12,8,24,0.9);
  border:1px solid rgba(255,255,255,0.32);font-size:10px;font-weight:800;color:#fff;
  display:flex;align-items:center;justify-content:center;}

.whomp-ultimate-banner{position:fixed;left:50%;top:54px;transform:translateX(-50%) scale(0.6);
  z-index:520;pointer-events:none;padding:8px 20px;border-radius:14px;
  font-family:'Segoe UI',system-ui,-apple-system,sans-serif;font-weight:800;font-size:15px;
  letter-spacing:0.05em;color:#fff;background:linear-gradient(90deg,#7a4fff,#b48cff);
  box-shadow:0 6px 20px rgba(0,0,0,0.4);opacity:0;white-space:nowrap;text-transform:uppercase;
  transition:opacity 160ms ease-out,transform 160ms cubic-bezier(.34,1.56,.64,1);}
.whomp-ultimate-banner--show{opacity:1;transform:translateX(-50%) scale(1);}

.whomp-ultimate-choice{position:fixed;left:50%;top:50px;transform:translateX(-50%);
  z-index:520;display:none;flex-direction:column;align-items:center;gap:9px;
  padding:14px 22px;border-radius:16px;background:rgba(18,12,30,0.93);
  border:2px solid #b48cff;box-shadow:0 8px 24px rgba(0,0,0,0.45),0 0 24px -6px #b48cff;
  font-family:'Segoe UI',system-ui,-apple-system,sans-serif;color:#fff;text-align:center;
  min-width:260px;}
.whomp-ultimate-choice__title{font-size:11px;font-weight:800;letter-spacing:0.16em;
  text-transform:uppercase;color:#b48cff;}
.whomp-ultimate-choice__row{display:flex;gap:12px;align-items:center;}
.whomp-ultimate-choice__btn{padding:8px 16px;border-radius:10px;border:2px solid rgba(255,255,255,0.2);
  background:rgba(255,255,255,0.06);color:#fff;font-weight:800;font-size:13px;
  letter-spacing:0.02em;cursor:pointer;display:flex;align-items:center;gap:7px;
  transition:transform 90ms ease-out,background 120ms ease-out;}
.whomp-ultimate-choice__btn:hover{background:rgba(255,255,255,0.15);transform:translateY(-1px);}
.whomp-ultimate-choice__btn--take{background:linear-gradient(90deg,#7a4fff,#b48cff);border-color:transparent;}
.whomp-ultimate-choice__btn--take:hover{filter:brightness(1.08);}
.whomp-ultimate-choice__key{width:18px;height:18px;border-radius:5px;background:rgba(255,255,255,0.12);
  border:1px solid rgba(255,255,255,0.3);display:flex;align-items:center;justify-content:center;
  font-size:11px;font-weight:800;}
.whomp-ultimate-choice__bar{width:100%;height:4px;border-radius:2px;background:rgba(255,255,255,0.14);
  overflow:hidden;}
.whomp-ultimate-choice__barFill{height:100%;width:100%;
  background:linear-gradient(90deg,#7a4fff,#b48cff);transition:width 80ms linear;}
`;function ww(e){if(e.getElementById(xw))return;let t=e.createElement(`style`);t.id=xw,t.textContent=Cw,e.head.appendChild(t)}function Tw(e){return e<0?0:e>1?1:e}var Ew=class{ultimates;chipRoot;chipRing;chipIcon;bannerRoot;bannerText;choiceRoot;choiceKeepName;choiceTakeName;choiceBarFill;lastHeldId=null;lastReadyState=!1;lastEquipToken=-1;lastPendingRef=null;bannerHideTimeout;keydownHandler;win;constructor(e,t){this.ultimates=t;let n=e.ownerDocument;if(!n)throw Error(`UltimateOffer: parent has no ownerDocument`);ww(n),this.chipRoot=n.createElement(`div`),this.chipRoot.className=`whomp-ultimate-chip whomp-ultimate-chip--empty`,this.chipRing=n.createElement(`div`),this.chipRing.className=`whomp-ultimate-chip__ring`;let r=n.createElement(`div`);r.className=`whomp-ultimate-chip__inner`,this.chipIcon=n.createElement(`span`),this.chipIcon.className=`whomp-ultimate-chip__icon`,this.chipIcon.textContent=`—`,r.appendChild(this.chipIcon),this.chipRing.appendChild(r);let i=n.createElement(`div`);i.className=`whomp-ultimate-chip__key`,i.textContent=`Q`,this.chipRoot.appendChild(this.chipRing),this.chipRoot.appendChild(i),e.appendChild(this.chipRoot),this.bannerRoot=n.createElement(`div`),this.bannerRoot.className=`whomp-ultimate-banner`,this.bannerText=n.createElement(`span`),this.bannerRoot.appendChild(this.bannerText),e.appendChild(this.bannerRoot),this.choiceRoot=n.createElement(`div`),this.choiceRoot.className=`whomp-ultimate-choice`;let a=n.createElement(`div`);a.className=`whomp-ultimate-choice__title`,a.textContent=`New Ultimate Available`;let o=n.createElement(`div`);o.className=`whomp-ultimate-choice__bar`,this.choiceBarFill=n.createElement(`div`),this.choiceBarFill.className=`whomp-ultimate-choice__barFill`,o.appendChild(this.choiceBarFill);let s=n.createElement(`div`);s.className=`whomp-ultimate-choice__row`;let c=n.createElement(`button`);c.type=`button`,c.className=`whomp-ultimate-choice__btn`,this.choiceKeepName=this.buildBtnContents(n,c,`1`,`KEEP`),c.addEventListener(`click`,()=>this.ultimates.keep());let l=n.createElement(`button`);l.type=`button`,l.className=`whomp-ultimate-choice__btn whomp-ultimate-choice__btn--take`,this.choiceTakeName=this.buildBtnContents(n,l,`2`,`TAKE`),l.addEventListener(`click`,()=>this.ultimates.take()),s.appendChild(c),s.appendChild(l),this.choiceRoot.appendChild(a),this.choiceRoot.appendChild(s),this.choiceRoot.appendChild(o),e.appendChild(this.choiceRoot),this.win=n.defaultView??void 0,this.keydownHandler=e=>this.onKeydown(e),this.win?.addEventListener(`keydown`,this.keydownHandler)}update(){this.writeChip(),this.writeBanner(),this.writeChoice()}dispose(){this.win?.removeEventListener(`keydown`,this.keydownHandler),clearTimeout(this.bannerHideTimeout),this.chipRoot.remove(),this.bannerRoot.remove(),this.choiceRoot.remove()}buildBtnContents(e,t,n,r){let i=e.createElement(`span`);i.className=`whomp-ultimate-choice__key`,i.textContent=n;let a=e.createElement(`span`),o=e.createElement(`span`);o.textContent=`${r} `;let s=e.createElement(`span`);return a.appendChild(o),a.appendChild(s),t.appendChild(i),t.appendChild(a),s}writeChip(){let e=this.ultimates.heldId;e!==this.lastHeldId&&(this.lastHeldId=e,this.chipIcon.textContent=e?Sw[e]??`?`:`—`,this.chipRoot.classList.toggle(`whomp-ultimate-chip--empty`,!e));let t=e?Tw(this.ultimates.readyFraction):0;this.chipRing.style.setProperty(`--frac-deg`,`${(t*360).toFixed(1)}deg`);let n=!!e&&t>=1;n!==this.lastReadyState&&(this.lastReadyState=n,this.chipRoot.classList.toggle(`whomp-ultimate-chip--ready`,n))}writeBanner(){let e=this.ultimates.lastEquip;if(!e||e.token===this.lastEquipToken)return;this.lastEquipToken=e.token;let t=lw[e.id]?.name??e.id;this.bannerText.textContent=`Ultimate: ${t}`,this.bannerRoot.classList.remove(`whomp-ultimate-banner--show`),this.bannerRoot.offsetWidth,this.bannerRoot.classList.add(`whomp-ultimate-banner--show`),clearTimeout(this.bannerHideTimeout),this.bannerHideTimeout=setTimeout(()=>this.bannerRoot.classList.remove(`whomp-ultimate-banner--show`),2600)}writeChoice(){let e=this.ultimates.pendingChoice;if(e!==this.lastPendingRef&&(this.lastPendingRef=e,e?(this.choiceKeepName.textContent=lw[e.currentId]?.name??e.currentId,this.choiceTakeName.textContent=lw[e.offeredId]?.name??e.offeredId,this.choiceRoot.style.display=`flex`):this.choiceRoot.style.display=`none`),e){let t=Tw(e.msLeft/uw);this.choiceBarFill.style.width=`${(t*100).toFixed(1)}%`}}onKeydown(e){this.ultimates.pendingChoice&&(e.key===`1`?(e.preventDefault(),this.ultimates.keep()):e.key===`2`&&(e.preventDefault(),this.ultimates.take()))}},Dw=2147483647;function Ow(e){let t=Math.floor(Math.abs(e))%Dw;return t===0?1:t}function kw(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return Ow(t>>>0)}function Aw(e){let t=e.getUTCFullYear(),n=e.getUTCMonth()+1,r=e.getUTCDate();return kw(`${t}-${String(n).padStart(2,`0`)}-${String(r).padStart(2,`0`)}`)}var jw=20260711;function Mw(e,t){let n=new URLSearchParams(e),r=n.get(`seed`);if(r!==null){let e=Number(r);if(Number.isFinite(e))return{seed:Ow(e),daily:!1}}return n.has(`daily`)?{seed:Aw(t),daily:!0}:{seed:jw,daily:!1}}var Nw=18.5,Pw={x:0,z:13},Fw=-13,Iw=[-12.5,-7.5,-2.5,2.5,7.5,12.5],Lw=2.6;function Rw(e,t,n){let r=-1,i=1/0;for(let a=0;a<e.length;a++){let o=e[a],s=o.x-t,c=o.z-n,l=s*s+c*c;l<=o.radius*o.radius&&l<i&&(i=l,r=a)}return r}function zw(e,t){for(let n of Object.values(y_)){let r=n.unlocks;if(r&&(e===`character`&&r.character===t||e===`level`&&r.level===t))return n.desc}return`Locked. Keep playing.`}function Bw(e){let t=[];Object.keys(__).forEach((n,r)=>{let i=__[n],a=!e.unlockedCharacters.has(n);t.push({id:n,kind:`character`,x:Iw[r]??r*5-12.5,z:Fw,radius:Lw,title:i.name,desc:i.desc,locked:a,unlockHint:a?zw(`character`,n):void 0})});let n={meadowfall:{x:-9,z:-3},sunkenSteps:{x:9,z:-3}};for(let r of Object.keys(v_)){let i=v_[r],a=!e.unlockedLevels.has(r),o=n[r]??{x:0,z:-3};t.push({id:r,kind:`portal`,x:o.x,z:o.z,radius:3,title:i.name,desc:i.tagline,locked:a,unlockHint:a?zw(`level`,r):void 0})}return t.push({id:`shop`,kind:`shop`,x:15,z:6,radius:Lw,title:`Shopkeeper`,desc:`Spend gold on permanent upgrades.`,locked:!1}),t.push({id:`dummy`,kind:`dummy`,x:-15,z:6,radius:Lw,title:`Training Dummy`,desc:`Hit it. Watch the numbers.`,locked:!1}),t.push({id:`plaque`,kind:`plaque`,x:0,z:8,radius:Lw,title:`Records`,desc:`Your best time, engraved.`,locked:!1}),t}function Vw(e){e.traverse(e=>{let t=e;t.geometry&&t.geometry.dispose();let n=t.material;if(Array.isArray(n))for(let e of n)e.dispose();else n&&n.dispose()})}function Hw(e){let{palette:t}=e,n=new wn,r=Bw(e),i=new Map,a=new K(new Xi(20,17.5,3,40),new q({color:t.groundA,flatShading:!0,roughness:1}));a.position.y=-1.5,a.receiveShadow=!0,n.add(a);let o=new K(new Xi(7,7,.25,32),new q({color:t.groundB,flatShading:!0,roughness:1}));o.position.y=.12,o.receiveShadow=!0,n.add(o);let s=new q({color:1709602,flatShading:!0,roughness:1});for(let e of r)switch(e.kind){case`character`:{let r=Ww(e,t,s);n.add(r.root),i.set(e.id,r.ring);break}case`portal`:n.add(Gw(e,t,s));break;case`shop`:n.add(Kw(e,t));break;case`dummy`:n.add(qw(e,t));break;case`plaque`:n.add(Jw(e,t));break}return{group:n,interactables:r,statueRings:i,dummyMesh:n.getObjectByName(`hub-dummy`)??n,dispose:()=>Vw(n)}}function Uw(e){let t=new K(new Xi(1.1,1.3,.9,12),new q({color:e.rock,flatShading:!0,roughness:1}));return t.position.y=.45,t.castShadow=!0,t.receiveShadow=!0,t}function Ww(e,t,n){let r=new wn;r.position.set(e.x,0,e.z),r.add(Uw(t));let i=e.locked?n:new q({color:t.player,flatShading:!0,roughness:.8}),a=new K(new Ji(.55,.95,3,8),i);if(a.position.y=2,a.castShadow=!0,r.add(a),!e.locked){let e=new q({color:789012,flatShading:!0});for(let t of[-.22,.22]){let n=new K(new ia(.13,8,8),e);n.position.set(t,2.5,.5),r.add(n)}let n=new K(new qi(.28,1.4,.28),new q({color:t.gem,emissive:t.gem,emissiveIntensity:.25,flatShading:!0}));n.position.set(.6,2.2,0),n.rotation.z=.5,n.castShadow=!0,r.add(n)}let o=new K(new oa(1.5,.12,8,24),new q({color:t.gem,emissive:t.gem,emissiveIntensity:.8,flatShading:!0}));return o.rotation.x=Math.PI/2,o.position.y=.15,o.visible=!1,r.add(o),{root:r,ring:o}}function Gw(e,t,n){let r=new wn;r.position.set(e.x,0,e.z);let i=e.locked?n:new q({color:t.cliff,emissive:e.locked?0:t.gem,emissiveIntensity:.15,flatShading:!0,roughness:.9});for(let e of[-1.3,1.3]){let t=new K(new qi(.7,4.2,.7),i);t.position.set(e,2.1,0),t.castShadow=!0,r.add(t)}let a=new K(new qi(3.3,.7,.7),i);if(a.position.set(0,4.2,0),a.castShadow=!0,r.add(a),!e.locked){let e=new K(new na(2.2,3.6),new ri({color:t.gem,transparent:!0,opacity:.4,side:2,depthWrite:!1}));e.position.set(0,2.1,0),r.add(e)}return r}function Kw(e,t){let n=new wn;n.position.set(e.x,0,e.z);let r=new K(new qi(3,1.1,1.4),new q({color:t.trunk,flatShading:!0,roughness:.9}));r.position.y=.55,r.castShadow=!0,n.add(r);let i=new K(new qi(3.6,.25,2),new q({color:16723838,flatShading:!0,roughness:.8}));i.position.y=2.6,i.rotation.z=.08,i.castShadow=!0,n.add(i);for(let e of[-1.5,1.5]){let r=new K(new Xi(.1,.1,2.6,6),new q({color:t.trunk,flatShading:!0}));r.position.set(e,1.3,.8),n.add(r)}return n}function qw(e,t){let n=new wn;n.name=`hub-dummy`,n.position.set(e.x,0,e.z);let r=new K(new Xi(.12,.12,1.2,8),new q({color:t.trunk,flatShading:!0}));r.position.y=.6,n.add(r);let i=new K(new Ji(.6,1,3,8),new q({color:t.enemy,flatShading:!0,roughness:.8}));i.name=`hub-dummy-body`,i.position.y=1.8,i.castShadow=!0,n.add(i);let a=new q({color:789012,flatShading:!0});for(let e of[-.22,.22]){let t=new K(new ia(.11,8,8),a);t.position.set(e,2.1,.5),n.add(t)}return n}function Jw(e,t){let n=new wn;n.position.set(e.x,0,e.z);let r=new K(new qi(2.4,1.3,.3),new q({color:t.rock,flatShading:!0,roughness:1}));r.position.y=1.1,r.rotation.x=-.35,r.castShadow=!0,n.add(r);let i=new K(new qi(.5,1,.5),new q({color:t.trunk,flatShading:!0}));return i.position.y=.5,n.add(i),n}var Yw={bg:16758123,fogDensity:.006,groundA:6991948,groundB:5610052,cliff:9071947,tree:3050319,trunk:8015660,rock:11575434,enemy:16738895,enemyEmissive:0,player:16764735,gem:16748351,hemiSky:16767392,hemiGround:6969914,hemiIntensity:.95,sun:16765066,sunIntensity:1.5,sunPosition:[-24,18,12]},Xw=6,Zw=130,Qw=1e3,$w=1,eT=`whomp-hub-style`,tT=`
.whomp-hub-layer{position:fixed;inset:0;pointer-events:none;z-index:490;
  font-family:'Segoe UI',system-ui,-apple-system,sans-serif;color:#fff;}
.whomp-hub__banner{position:absolute;top:20px;left:50%;transform:translateX(-50%);
  font-size:15px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;
  padding:6px 16px;border-radius:10px;background:rgba(24,14,8,0.5);
  border:2px solid rgba(255,255,255,0.18);text-shadow:0 2px 0 rgba(0,0,0,0.4);}
.whomp-hub__card{position:absolute;left:50%;bottom:48px;transform:translateX(-50%) translateY(14px);
  min-width:280px;max-width:min(86vw,420px);opacity:0;transition:opacity 120ms ease-out,transform 120ms ease-out;
  padding:14px 18px;border-radius:16px;background:rgba(20,12,26,0.82);
  border:3px solid rgba(255,255,255,0.2);box-shadow:0 8px 0 rgba(0,0,0,0.35);text-align:center;}
.whomp-hub__card.show{opacity:1;transform:translateX(-50%) translateY(0);}
.whomp-hub__cardTitle{font-size:20px;font-weight:800;letter-spacing:0.02em;
  background:linear-gradient(90deg,#ff2f7e,#24f0ff);-webkit-background-clip:text;
  background-clip:text;-webkit-text-fill-color:transparent;}
.whomp-hub__cardDesc{font-size:14px;opacity:0.88;margin-top:4px;line-height:1.5;}
.whomp-hub__cardHint{font-size:13px;font-weight:800;margin-top:8px;letter-spacing:0.03em;}
.whomp-hub__cardHint .k{display:inline-block;min-width:20px;padding:2px 7px;margin-right:6px;
  border-radius:6px;background:#24f0ff;color:#0d0b09;font-weight:900;}
.whomp-hub__cardHint.locked{color:#ffb56b;}`;function nT(e){if(e.getElementById(eT))return;let t=e.createElement(`style`);t.id=eT,t.textContent=tT,e.head.appendChild(t)}var rT=class{bounds={minX:-20,maxX:20,minZ:-20,maxZ:20};heightAt(){return 0}normalAt(){return{x:0,y:1,z:0}}isOffCliff(e,t){return e*e+t*t>Nw*Nw}},iT=class{deps;scene=new Nn;terrain=new rT;hubBus=new Ll;player;playerMesh;playerMat;dmgNumbers;build;interactables;builtLockSig;sun;layer;card;cardTitle;cardDesc;cardHint;selectedCharacterId;nearest=-1;focusedCharacter=null;dummyHitTimer=0;dpsAccum=0;dpsWindowMs=0;dpsShown=0;constructor(e){this.deps=e;let t=e.app.ownerDocument;nT(t),this.selectedCharacterId=e.initialCharacterId??`bonkrat`,this.scene.background=new G(Yw.bg),this.scene.fog=new Mn(Yw.bg,Yw.fogDensity),this.scene.add(new La(Yw.hemiSky,Yw.hemiGround,Yw.hemiIntensity)),this.sun=new Qa(Yw.sun,Yw.sunIntensity),this.sun.position.set(...Yw.sunPosition),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024);let n=this.sun.shadow.camera;n.left=-20,n.right=20,n.top=20,n.bottom=-20,n.far=80,n.updateProjectionMatrix(),this.scene.add(this.sun),this.build=Hw({palette:Yw,unlockedCharacters:e.unlockedCharacters(),unlockedLevels:e.unlockedLevels()}),this.interactables=this.build.interactables,this.builtLockSig=this.lockSignature(),this.scene.add(this.build.group),this.player=new qu(Ku({x:Pw.x,y:0,z:Pw.z}),this.hubBus,1),this.playerMat=new q({color:Yw.player,flatShading:!0}),this.playerMesh=new K(new Ji(.55,.9,3,8),this.playerMat),this.playerMesh.castShadow=!0,this.scene.add(this.playerMesh),this.dmgNumbers=new dS(this.hubBus,t),this.scene.add(this.dmgNumbers.object3D),this.layer=t.createElement(`div`),this.layer.className=`whomp-hub-layer`,this.layer.style.display=`none`;let r=t.createElement(`div`);r.className=`whomp-hub__banner`,r.textContent=`The Hub — walk up, press E`,this.card=t.createElement(`div`),this.card.className=`whomp-hub__card`,this.cardTitle=t.createElement(`div`),this.cardTitle.className=`whomp-hub__cardTitle`,this.cardDesc=t.createElement(`div`),this.cardDesc.className=`whomp-hub__cardDesc`,this.cardHint=t.createElement(`div`),this.cardHint.className=`whomp-hub__cardHint`,this.card.append(this.cardTitle,this.cardDesc,this.cardHint),this.layer.append(r,this.card),e.app.appendChild(this.layer),this.applySelection()}get characterId(){return this.selectedCharacterId}selectCharacter(e){if(!__[e])return;let t=this.interactables.find(t=>t.kind===`character`&&t.id===e);t&&t.locked||(this.selectedCharacterId=e,this.applySelection(),this.deps.onCharacterSelect?.(e))}enter(){this.refreshLocks();let e=this.player.state;e.x=Pw.x,e.z=Pw.z,e.y=0,e.vx=0,e.vy=0,e.vz=0,e.yaw=0,e.grounded=!0,this.layer.style.display=``,this.deps.setMusicMode?.(`hub`)}exit(){this.layer.style.display=`none`,this.hideCard()}simulate(e){let{input:t,frame:n,rig:r}=this.deps;if(t.sample(n),n.paused)return;r.rotate(n.lookDeltaX,n.lookDeltaY);let i=__[this.selectedCharacterId];this.player.speedMult=(i?i.baseStats.speed:6)/6,this.player.update(n,this.terrain,e,r.yaw);let a=this.player.state;this.nearest=Rw(this.interactables,a.x,a.z),n.interactPressed&&this.nearest>=0&&this.interact(this.interactables[this.nearest]),this.updateDummy(e)}render(e,t){let n=this.player.state;this.playerMesh.position.set(n.x,n.y+$w,n.z),this.playerMesh.rotation.y=n.yaw,this.deps.rig.update(n.x,n.y+1.2,n.z,this.terrain,t,n.vx,n.vz),this.dmgNumbers.update(t,this.deps.rig.camera),this.deps.renderer.render(this.scene,this.deps.rig.camera),this.updateCard()}dispose(){this.dmgNumbers.dispose(),this.build.dispose(),this.playerMesh.geometry.dispose(),this.playerMat.dispose(),this.sun.shadow.map?.dispose(),this.layer.remove()}interact(e){switch(e.kind){case`character`:if(e.locked)return;this.selectedCharacterId=e.id,this.applySelection(),this.deps.onCharacterSelect?.(e.id);break;case`portal`:if(e.locked)return;this.deps.onStartRun(e.id,this.selectedCharacterId);break;case`shop`:this.deps.onOpenShop();break;case`plaque`:this.deps.onOpenStats?.();break}}applySelection(){for(let[e,t]of this.build.statueRings)t.visible=e===this.selectedCharacterId;__[this.selectedCharacterId]&&this.playerMat.color.set(Yw.player)}lockSignature(){let e=this.deps.unlockedCharacters(),t=this.deps.unlockedLevels();return[...e].sort().join(`,`)+`|`+[...t].sort().join(`,`)}refreshLocks(){let e=this.lockSignature();if(e!==this.builtLockSig){this.rebuildIsland(e);return}this.deps.unlockedCharacters().has(this.selectedCharacterId)||(this.selectedCharacterId=`bonkrat`,this.applySelection())}rebuildIsland(e){this.scene.remove(this.build.group),this.build.dispose(),this.build=Hw({palette:Yw,unlockedCharacters:this.deps.unlockedCharacters(),unlockedLevels:this.deps.unlockedLevels()}),this.interactables=this.build.interactables,this.builtLockSig=e,this.scene.add(this.build.group),this.deps.unlockedCharacters().has(this.selectedCharacterId)||(this.selectedCharacterId=`bonkrat`),this.applySelection()}updateDummy(e){let t=this.player.state,n=this.interactables.find(e=>e.kind===`dummy`),r=e*1e3;if(this.dpsWindowMs+=r,n){let e=n.x-t.x,i=n.z-t.z,a=e*e+i*i<=Xw*Xw;if(this.dummyHitTimer-=r,a&&this.dummyHitTimer<=0){this.dummyHitTimer=Zw;let e=__[this.selectedCharacterId],t=(this.dpsWindowMs|0)%5==0,r=Math.round((14+(e?e.baseStats.might:1)*10)*(t?1.8:1));this.dpsAccum+=r,this.hubBus.emit(`enemyDamaged`,{enemyId:0,amount:r,crit:t,x:n.x+(Math.random()-.5)*.8,y:2+Math.random()*.6,z:n.z})}}this.dpsWindowMs>=Qw&&(this.dpsShown=Math.round(this.dpsAccum*(1e3/this.dpsWindowMs)),this.dpsAccum=0,this.dpsWindowMs=0)}updateCard(){if(this.nearest<0){this.hideCard();return}let e=this.interactables[this.nearest];this.setCharacterFocus(e.kind===`character`?e.id:null),this.cardTitle.textContent=e.title;let t=e.desc;if(e.kind===`dummy`?t=`DPS: ${this.dpsShown}`:e.kind===`plaque`&&(t=`Best time survived: ${aT(this.deps.bestTimeSec())}`),this.cardDesc.textContent=t,e.locked)this.cardHint.className=`whomp-hub__cardHint locked`,this.cardHint.textContent=e.unlockHint??`Locked.`;else{this.cardHint.className=`whomp-hub__cardHint`;let t=e.kind===`character`?e.id===this.selectedCharacterId?`Selected`:`Choose`:e.kind===`portal`?`Enter`:e.kind===`shop`?`Open shop`:``;this.cardHint.innerHTML=t?`<span class="k">E</span>${t}`:``}this.card.classList.add(`show`)}hideCard(){this.setCharacterFocus(null),this.card.classList.remove(`show`)}setCharacterFocus(e){e!==this.focusedCharacter&&(this.focusedCharacter=e,this.deps.onCharacterFocus?.(e))}};function aT(e){let t=Math.max(0,Math.floor(e));return`${String(Math.floor(t/60)).padStart(2,`0`)}:${String(t%60).padStart(2,`0`)}`}var oT=.55,sT=.9,cT=1,lT=2,uT=.15,dT=.07,fT=.22,pT=lT-.42,mT=-.451,hT=.07,gT=.55,_T=1.6;function vT(e){return Number.isFinite(e)?e<gT?gT:e>_T?_T:e:1}function yT(e,t){let n=new G(t),r=e.attributes.position.count,i=new Float32Array(r*3);for(let e=0;e<r;e++)i[e*3]=n.r,i[e*3+1]=n.g,i[e*3+2]=n.b;if(e.setAttribute(`color`,new fr(i,3)),e.index){let t=e.toNonIndexed();return e.dispose(),t}return e}function bT(e){let t=new Xi(.05,.05,.7,6);t.rotateX(-.32),t.translate(0,lT-.55,.38);let n=new qi(.3,.22,.22);return n.rotateX(-.32),n.translate(0,lT-.14,.6),[yT(t,e.trunk),yT(n,e.rock)]}function xT(e,t){let n=new Zi(oT*.62,.55,8);return n.translate(0,2.16,.02),[yT(n,t.clone().multiplyScalar(.5).getHex())]}function ST(e){let t=[];for(let n of[-1,1]){let r=new $i(.22,0);r.translate(n*.65,lT-.4,0),t.push(yT(r,e.rock))}return t}function CT(e){let t=new Xi(.045,.045,1.05,6);t.rotateX(-.5),t.translate(0,lT-.5,.42);let n=new Zi(.09,.22,6);return n.rotateX(-.5),n.translate(0,lT-.02,.72),[yT(t,e.trunk),yT(n,e.rock)]}function wT(e){let t=[];for(let n of[-1,1]){let r=new Zi(.16,.5,4);r.rotateZ(n*.9),r.rotateX(.3),r.translate(n*.6000000000000001,lT-.6,.12),t.push(yT(r,e.gem))}return t}function TT(e,t){let n=.82,r=new Ji(oT*n,sT*n,3,8);return r.translate(0,cT*n,0),r.translate(.34,0,.3),[yT(r,t.clone().lerp(new G(16777215),.65).getHex())]}var ET={bonkrat:e=>bT(e),wispmother:(e,t)=>xT(e,t),cragjaw:e=>ST(e),hookline:e=>CT(e),slipstream:e=>wT(e),echoKnight:(e,t)=>TT(e,t)};function DT(e,t,n){let r=new Ji(oT,sT,3,8);r.translate(0,cT,0);let i=[yT(r,n.getHex())],a=ET[e];a&&i.push(...a(t,n));let o=xy(i,!1);for(let e of i)e.dispose();if(!o)throw Error(`playerAvatar: body geometry merge failed`);return o}function OT(){let e=new Ei(new ia(uT,10,8),new q({color:16777215,flatShading:!0,roughness:.25}),2),t=new Ei(new ia(dT,8,6),new ri({color:1709088}),2),n=new W;for(let r=0;r<2;r++){let i=r===0?-.22:fT;n.makeTranslation(i,pT,mT),e.setMatrixAt(r,n),n.makeTranslation(i,pT,mT-hT),t.setMatrixAt(r,n)}return e.instanceMatrix.needsUpdate=!0,t.instanceMatrix.needsUpdate=!0,e.castShadow=!0,{whites:e,pupils:t}}function kT(e,t){let n=new wn,r=new K(DT(e,t,new G(t.player)),new q({vertexColors:!0,flatShading:!0,roughness:.75}));r.castShadow=!0,n.add(r);let{whites:i,pupils:a}=OT();return n.add(i,a),n.setSquash=function(e){let t=vT(e),r=1/Math.sqrt(t);n.scale.set(r,t,r)},n}var AT={get:()=>1},jT=`volume.master`,MT=`volume.sfx`,NT=`volume.music`,PT=`volume.voice`,FT=10**(-4/20),IT=.03,LT=.25,RT=900,zT=[`playerDied`,`bossKilled`,`weaponEvolved`,`potLooted`,`leprechaunEnraged`,`revenantSpawned`,`runStarted`],BT=1,VT=class{ctxInternal=null;masterGain=null;sfxGain=null;musicGain=null;voiceGain=null;musicDuck=null;noiseBuffer=null;activeVoices=0;settings;doc;audioContextCtor;bus;unsubs=[];onGesture=()=>{this.unlock()};constructor(e={}){if(this.settings=e.settings??AT,this.doc=e.doc??(typeof document<`u`?document:void 0),this.audioContextCtor=e.audioContextCtor??(typeof AudioContext<`u`?AudioContext:void 0),this.bus=e.bus,this.doc?.addEventListener(`pointerdown`,this.onGesture),this.doc?.addEventListener(`keydown`,this.onGesture),this.bus)for(let e of zT)this.unsubs.push(this.bus.on(e,()=>this.duck(RT)))}get ready(){return this.ctxInternal!==null}get ctx(){return this.ctxInternal}get sfxBus(){return this.sfxGain}get musicBus(){return this.musicGain}get voiceBus(){return this.voiceGain}get masterBus(){return this.masterGain}now(){return this.ctxInternal?this.ctxInternal.currentTime:0}unlock(){if(this.ctxInternal||!this.audioContextCtor)return;this.doc?.removeEventListener(`pointerdown`,this.onGesture),this.doc?.removeEventListener(`keydown`,this.onGesture);let e=new this.audioContextCtor;this.ctxInternal=e,this.masterGain=e.createGain(),this.sfxGain=e.createGain(),this.musicGain=e.createGain(),this.musicDuck=e.createGain(),this.voiceGain=e.createGain(),this.musicDuck.gain.value=1,this.sfxGain.connect(this.masterGain),this.voiceGain.connect(this.masterGain),this.musicGain.connect(this.musicDuck),this.musicDuck.connect(this.masterGain),this.masterGain.connect(e.destination),this.refreshVolumes(),this.noiseBuffer=this.buildNoiseBuffer(e),e.resume?.()}refreshVolumes(){!this.masterGain||!this.sfxGain||!this.musicGain||!this.voiceGain||(this.masterGain.gain.value=HT(this.settings.get(jT)),this.sfxGain.gain.value=HT(this.settings.get(MT)),this.musicGain.gain.value=HT(this.settings.get(NT)),this.voiceGain.gain.value=HT(this.settings.get(PT)))}tone(e){let t=this.ctxInternal;if(!t)return!1;let n=e.bus??this.sfxGain;if(!n)return!1;let r=n===this.sfxGain;if(r&&this.activeVoices>=16)return!1;let i=e.when??t.currentTime,a=e.dur,o=t.createOscillator();o.type=e.type??`sine`,o.frequency.setValueAtTime(e.freq,i),e.freqTo!==void 0&&o.frequency.exponentialRampToValueAtTime(Math.max(1,e.freqTo),i+a),e.detune&&o.detune.setValueAtTime(e.detune,i);let s=t.createGain(),c=e.gain??.3,l=e.attack??.005;s.gain.setValueAtTime(1e-4,i),s.gain.linearRampToValueAtTime(c,i+l),s.gain.exponentialRampToValueAtTime(1e-4,i+a);let u=o;if(e.filter){let n=t.createBiquadFilter();n.type=e.filter.type,n.frequency.setValueAtTime(e.filter.freq,i),e.filter.q!==void 0&&(n.Q.value=e.filter.q),o.connect(n),u=n}return u.connect(s),s.connect(n),o.start(i),o.stop(i+a+.03),r&&this.trackVoice(o),!0}noise(e){let t=this.ctxInternal;if(!t||!this.noiseBuffer)return!1;let n=e.bus??this.sfxGain;if(!n)return!1;let r=n===this.sfxGain;if(r&&this.activeVoices>=16)return!1;let i=e.when??t.currentTime,a=e.dur,o=t.createBufferSource();o.buffer=this.noiseBuffer;let s=o;if(e.filter){let n=t.createBiquadFilter();n.type=e.filter.type,n.frequency.setValueAtTime(e.filter.freq,i),e.filter.freqTo!==void 0&&n.frequency.exponentialRampToValueAtTime(Math.max(1,e.filter.freqTo),i+a),e.filter.q!==void 0&&(n.Q.value=e.filter.q),o.connect(n),s=n}let c=t.createGain(),l=e.gain??.3,u=e.attack??.005;return c.gain.setValueAtTime(1e-4,i),c.gain.linearRampToValueAtTime(l,i+u),c.gain.exponentialRampToValueAtTime(1e-4,i+a),s.connect(c),c.connect(n),o.start(i),o.stop(i+a+.03),r&&this.trackVoice(o),!0}duck(e){let t=this.ctxInternal,n=this.musicDuck;if(!t||!n)return;let r=t.currentTime,i=r+Math.max(0,e)/1e3;n.gain.cancelScheduledValues(r),n.gain.setValueAtTime(n.gain.value,r),n.gain.linearRampToValueAtTime(FT,r+IT),n.gain.setValueAtTime(FT,i),n.gain.linearRampToValueAtTime(1,i+LT)}get voiceCount(){return this.activeVoices}dispose(){for(let e of this.unsubs)e();this.unsubs.length=0,this.doc?.removeEventListener(`pointerdown`,this.onGesture),this.doc?.removeEventListener(`keydown`,this.onGesture),this.ctxInternal?.close?.()}trackVoice(e){this.activeVoices++,e.onended=()=>{this.activeVoices>0&&this.activeVoices--}}buildNoiseBuffer(e){let t=e.sampleRate||44100,n=Math.max(1,Math.floor(t*BT)),r=e.createBuffer(1,n,t),i=r.getChannelData(0);for(let e=0;e<n;e++)i[e]=Math.random()*2-1;return r}};function HT(e){return Number.isFinite(e)?e<0?0:e>1?1:e:1}var UT={enemyKilled:1e3/12,xpGained:55,weaponAura:120,weaponPets:90,weaponBeam:90},WT=class{minIntervalMs;last=-1/0;constructor(e){this.minIntervalMs=e}allow(e){return e-this.last<this.minIntervalMs?!1:(this.last=e,!0)}reset(){this.last=-1/0}};function GT(){let e={};for(let t in ap)e[t]=ap[t].pattern;return e}function KT(){let e={};for(let t in Pp)e[t]=Pp[t].radius;return e}var qT=class{engine;unsubs=[];now;patternOf=GT();radiusOf=KT();tKill=new WT(UT.enemyKilled);tXp=new WT(UT.xpGained);tAura=new WT(UT.weaponAura);tPets=new WT(UT.weaponPets);tBeam=new WT(UT.weaponBeam);constructor(e,t,n={}){this.engine=e,this.now=n.now??(typeof performance<`u`?()=>performance.now():()=>Date.now());let r=(e,n)=>{this.unsubs.push(t.on(e,n))};r(`weaponFired`,e=>this.onWeaponFired(e)),r(`enemyKilled`,e=>this.onEnemyKilled(e)),r(`playerDamaged`,()=>this.onPlayerDamaged()),r(`levelUp`,()=>this.onLevelUp()),r(`xpGained`,()=>this.onXpGained()),r(`chestOpened`,()=>this.onChestOpened()),r(`weaponEvolved`,()=>this.onWeaponEvolved()),r(`bossSpawned`,()=>this.onBossSpawned()),r(`potLooted`,()=>this.onPotLooted()),r(`launchPadUsed`,()=>this.onLaunchPad()),r(`slamLanded`,()=>this.onSlamLanded()),r(`shrineActivated`,()=>this.onShrineActivated()),r(`achievementUnlocked`,()=>this.onAchievement())}dispose(){for(let e of this.unsubs)e();this.unsubs.length=0}onWeaponFired(e){let t=this.patternOf[e.weaponId];if(!t)return;let n=this.now();switch(t){case`orbit`:this.engine.noise({dur:.16,gain:.14,filter:{type:`bandpass`,freq:900,freqTo:1700,q:1.2}});break;case`homing`:this.engine.tone({freq:620,freqTo:1180,dur:.1,type:`square`,gain:.14});break;case`lob`:this.engine.tone({freq:260,freqTo:120,dur:.14,type:`triangle`,gain:.22});break;case`pierceLine`:this.engine.tone({freq:1500,freqTo:520,dur:.09,type:`sawtooth`,gain:.14,filter:{type:`bandpass`,freq:1200,q:2}});break;case`boomerang`:this.engine.tone({freq:380,freqTo:300,dur:.2,type:`sawtooth`,gain:.12,filter:{type:`bandpass`,freq:700,q:4}});break;case`meleeArc`:this.engine.noise({dur:.12,gain:.16,filter:{type:`bandpass`,freq:1600,freqTo:3200,q:.9}});break;case`cone`:this.engine.noise({dur:.22,gain:.12,filter:{type:`highpass`,freq:3e3,q:.6}});break;case`trail`:this.engine.noise({dur:.1,gain:.12,filter:{type:`bandpass`,freq:2400,q:3}});break;case`aura`:this.tAura.allow(n)&&this.engine.tone({freq:220,dur:.06,type:`sine`,gain:.1});break;case`burstNearest`:this.engine.noise({dur:.2,gain:.34,filter:{type:`lowpass`,freq:1800,freqTo:400,q:1}}),this.engine.tone({freq:160,freqTo:50,dur:.14,type:`square`,gain:.2});break;case`meteor`:this.engine.tone({freq:1700,freqTo:500,dur:.34,type:`sine`,gain:.12}),this.engine.noise({dur:.22,gain:.3,when:this.engine.now()+.34,filter:{type:`lowpass`,freq:900,freqTo:200,q:1}});break;case`chain`:this.engine.tone({freq:2200,freqTo:3400,dur:.08,type:`sawtooth`,gain:.13,filter:{type:`highpass`,freq:1500}});break;case`ricochet`:this.engine.tone({freq:1800,dur:.12,type:`sine`,gain:.14,filter:{type:`bandpass`,freq:1800,q:8}});break;case`beam`:this.tBeam.allow(n)&&this.engine.tone({freq:300,dur:.14,type:`sawtooth`,gain:.1,filter:{type:`lowpass`,freq:1400,q:3}});break;case`blackHole`:this.engine.tone({freq:70,freqTo:55,dur:.5,type:`sawtooth`,gain:.16,filter:{type:`lowpass`,freq:300,q:5}});break;case`petUnits`:this.tPets.allow(n)&&this.engine.tone({freq:440,freqTo:520,dur:.07,type:`square`,gain:.08,filter:{type:`bandpass`,freq:900,q:5}});break;case`landingShockwave`:this.engine.tone({freq:120,freqTo:38,dur:.26,type:`sine`,gain:.5}),this.engine.noise({dur:.2,gain:.24,filter:{type:`lowpass`,freq:600,freqTo:140,q:1}});break;case`pathEcho`:this.engine.tone({freq:880,freqTo:1320,dur:.3,type:`sine`,gain:.07,filter:{type:`bandpass`,freq:2200,q:1.5}});break;case`randomAoE`:this.engine.tone({freq:300,freqTo:90,dur:.18,type:`triangle`,gain:.24});break;default:break}}onEnemyKilled(e){if(!this.tKill.allow(this.now()))return;let t=JT(.5/(this.radiusOf[e.kind]??.5),.35,1.6);this.engine.tone({freq:480*t,freqTo:180*t,dur:.09,type:`triangle`,gain:.2})}onPlayerDamaged(){this.engine.tone({freq:180,freqTo:60,dur:.14,type:`sine`,gain:.34}),this.engine.noise({dur:.1,gain:.14,filter:{type:`lowpass`,freq:500,q:1}})}onLevelUp(){let e=[523.25,659.25,783.99,1046.5];for(let t=0;t<e.length;t++)this.engine.tone({freq:e[t],dur:.16,type:`square`,gain:.16,when:this.engine.now()+t*.06})}onXpGained(){this.tXp.allow(this.now())&&this.engine.tone({freq:1200,freqTo:1500,dur:.04,type:`sine`,gain:.06})}onChestOpened(){this.engine.tone({freq:90,freqTo:160,dur:.3,type:`sawtooth`,gain:.12,filter:{type:`lowpass`,freq:700,q:4}}),this.engine.tone({freq:880,freqTo:1760,dur:.2,type:`square`,gain:.14,when:this.engine.now()+.28})}onWeaponEvolved(){this.engine.noise({dur:.55,gain:.16,filter:{type:`bandpass`,freq:400,freqTo:5e3,q:1.2}}),this.engine.tone({freq:300,freqTo:1200,dur:.55,type:`sawtooth`,gain:.14})}onBossSpawned(){this.engine.tone({freq:110,dur:.7,type:`sawtooth`,gain:.2,filter:{type:`lowpass`,freq:700,q:3}}),this.engine.tone({freq:110,detune:12,dur:.7,type:`sawtooth`,gain:.16,filter:{type:`lowpass`,freq:700,q:3}})}onPotLooted(){let e=this.engine.now();for(let t=0;t<6;t++)this.engine.tone({freq:1400+t*130,dur:.09,type:`square`,gain:.1,when:e+t*.05})}onLaunchPad(){this.engine.tone({freq:200,freqTo:900,dur:.22,type:`sine`,gain:.26})}onSlamLanded(){this.engine.tone({freq:90,freqTo:30,dur:.4,type:`sine`,gain:.5}),this.engine.noise({dur:.35,gain:.2,filter:{type:`lowpass`,freq:300,freqTo:90,q:1}})}onShrineActivated(){this.engine.tone({freq:196,dur:1.1,type:`sine`,gain:.18,filter:{type:`lowpass`,freq:1200,q:2}}),this.engine.tone({freq:587,dur:.9,type:`sine`,gain:.08})}onAchievement(){this.engine.tone({freq:987.77,dur:.18,type:`sine`,gain:.14}),this.engine.tone({freq:1318.5,dur:.24,type:`sine`,gain:.14,when:this.engine.now()+.12})}};function JT(e,t,n){return e<t?t:e>n?n:e}var YT=.1,XT=.3,ZT={pad:0,bass:.25,drums:.5,lead:.75};function QT(e,t,n){return 60/e/t/n}function $T(e){return e===`boss`?.5:e===`finalHorde`?2:1}function eE(e,t){if(e===`hub`||e===`menu`)return{pad:!0,bass:!1,drums:!1,lead:!1};if(e===`finalHorde`)return{pad:!0,bass:!0,drums:!0,lead:!0};let n=fE(t);return{pad:n>=ZT.pad,bass:n>=ZT.bass,drums:n>=ZT.drums,lead:n>=ZT.lead}}var tE=class{startTime=0;cursor=0;stepDur;constructor(e){this.stepDur=e}start(e){this.startTime=e,this.cursor=0}retempo(e,t){this.stepDur=e,this.startTime=t,this.cursor=0}timeOf(e){return this.startTime+e*this.stepDur}get duration(){return this.stepDur}pull(e,t){for(;this.timeOf(this.cursor)<e;)t(this.cursor,this.timeOf(this.cursor)),this.cursor++}},nE=110,rE=440;function iE(e){return nE*2**(e/12)}function aE(e){return rE*2**(e/12)}var oE={Am:{root:0,triad:[0,3,7]},F:{root:-4,triad:[0,4,7]},C:{root:3,triad:[0,4,7]},G:{root:-2,triad:[0,4,7]},Dm:{root:5,triad:[0,3,7]},Em:{root:7,triad:[0,3,7]}},sE=[`Am`,`F`,`C`,`G`],cE=[`Am`,`Dm`,`Em`,`F`];function lE(e=Math.random){let t=sE.slice();return e()<.4&&(t[1]=`Dm`),e()<.25&&(t[3]=`Dm`),t}var uE=class{engine;progression;mode=`menu`;intensity=0;clock=null;currentTempoMult=1;started=!1;padGain=null;bassGain=null;drumGain=null;leadGain=null;lastChordBar=-1;constructor(e,t=Math.random){this.engine=e,this.progression=lE(t)}setIntensity(e){this.intensity=fE(e)}setMode(e){if(e===this.mode)return;this.mode=e;let t=$T(e);this.clock&&t!==this.currentTempoMult&&(this.currentTempoMult=t,this.clock.retempo(QT(104,4,t),this.engine.now()),this.lastChordBar=-1)}update(){if(!this.engine.ready)return;this.started||this.begin();let e=this.clock;if(!e)return;let t=this.engine.now()+XT;e.pull(t,(e,t)=>this.scheduleStep(e,t))}begin(){let e=this.engine.ctx,t=this.engine.musicBus;if(!e||!t)return;let n=n=>{let r=e.createGain();return r.gain.value=n,r.connect(t),r};this.padGain=n(.5),this.bassGain=n(0),this.drumGain=n(0),this.leadGain=n(0),this.currentTempoMult=$T(this.mode),this.clock=new tE(QT(104,4,this.currentTempoMult)),this.clock.start(this.engine.now()+YT),this.started=!0}scheduleStep(e,t){let n=eE(this.mode,this.intensity);this.applyLayerGains(n,t);let r=(e%16+16)%16,i=Math.floor(e/16),a=this.mode===`boss`?cE:this.progression,o=oE[a[(i%a.length+a.length)%a.length]];if(n.pad&&i!==this.lastChordBar&&r===0&&(this.lastChordBar=i,this.playPad(o,t)),n.bass&&r%2==0&&this.engine.tone({freq:iE(o.root),type:`sawtooth`,dur:this.clock.duration*1.6,gain:.28,attack:.004,filter:{type:`lowpass`,freq:420,q:6},bus:this.bassGain??void 0,when:t}),n.drums&&(r%4==0&&this.playKick(t),(r===4||r===12)&&this.playSnare(t)),n.lead){let e=o.triad[r%o.triad.length];this.engine.tone({freq:aE(o.root+e),type:`square`,dur:this.clock.duration*.9,gain:.12,attack:.003,filter:{type:`lowpass`,freq:2600,q:2},bus:this.leadGain??void 0,when:t})}}playPad(e,t){let n=this.clock.duration*16*.98;for(let r of e.triad)this.engine.tone({freq:aE(e.root+r-12),type:`triangle`,dur:n,gain:.05,attack:.25,filter:{type:`lowpass`,freq:1800,q:.7},bus:this.padGain??void 0,when:t})}playKick(e){this.engine.tone({freq:150,freqTo:45,dur:.16,type:`sine`,gain:.5,attack:.002,bus:this.drumGain??void 0,when:e})}playSnare(e){this.engine.noise({dur:.14,gain:.28,attack:.002,filter:{type:`highpass`,freq:1400,q:.8},bus:this.drumGain??void 0,when:e})}applyLayerGains(e,t){dE(this.bassGain,+!!e.bass,t),dE(this.drumGain,+!!e.drums,t),dE(this.leadGain,+!!e.lead,t),dE(this.padGain,e.pad?.5:0,t)}};function dE(e,t,n){e&&e.gain.value!==t&&(e.gain.cancelScheduledValues(n),e.gain.setValueAtTime(e.gain.value,n),e.gain.linearRampToValueAtTime(t,n+.12))}function fE(e){return Number.isFinite(e)?e<0?0:e>1?1:e:0}var pE=[`It's a hammer.`,`The horde is a physics object.`,`Nintendo would sweat the details. So did we.`,`Every 30 seconds, a decision. Mostly bad ones.`,`The crowd is never satisfied. Try anyway.`,`Whomp first. Ask questions never.`],mE=`whomp-mainmenu-style`,hE=`
.whomp-mainmenu{position:fixed;inset:0;z-index:950;display:flex;
  align-items:center;justify-content:center;flex-direction:column;gap:26px;
  background:radial-gradient(ellipse at center,rgba(30,14,42,0.98),rgba(6,4,14,1));
  font-family:'Segoe UI',system-ui,-apple-system,sans-serif;color:#fff;text-align:center;}

.whomp-mainmenu__wordmark{font-size:clamp(64px,13vw,168px);font-weight:900;
  letter-spacing:-0.02em;line-height:0.9;margin:0;
  background:linear-gradient(90deg,#ff2f7e,#24f0ff);-webkit-background-clip:text;
  background-clip:text;color:transparent;-webkit-text-stroke:3px rgba(8,6,16,0.85);
  text-shadow:0 10px 0 rgba(0,0,0,0.35),0 0 60px rgba(255,47,126,0.35);
  animation:whomp-wordmark-bounce 2.4s ease-in-out infinite;}
@keyframes whomp-wordmark-bounce{
  0%,100%{transform:translateY(0);}
  50%{transform:translateY(-9px);}
}

.whomp-mainmenu__tagline{font-size:16px;font-weight:700;letter-spacing:0.03em;
  color:rgba(255,255,255,0.72);font-style:italic;}

.whomp-mainmenu__list{display:flex;flex-direction:column;gap:14px;margin-top:8px;
  width:min(320px,80vw);}
.whomp-mainmenu__btn{padding:14px 20px;border-radius:16px;border:3px solid rgba(255,255,255,0.2);
  background:rgba(255,255,255,0.06);color:#fff;font-weight:800;font-size:20px;
  letter-spacing:0.06em;cursor:pointer;transition:transform 100ms ease-out,
  background 120ms ease-out,box-shadow 120ms ease-out;}
.whomp-mainmenu__btn:hover{background:rgba(255,255,255,0.14);}
.whomp-mainmenu__btn.whomp-active{background:linear-gradient(90deg,#ff2f7e,#24f0ff);
  border-color:transparent;color:#0a0714;transform:scale(1.05) translateY(-2px);
  box-shadow:0 8px 22px -4px rgba(255,47,126,0.6);}
`;function gE(e){if(e.getElementById(mE))return;let t=e.createElement(`style`);t.id=mE,t.textContent=hE,e.head.appendChild(t)}var _E=class{tagline;root;itemDefs;itemEls;selected=0;keydownHandler;win;constructor(e,t){let n=e.ownerDocument;if(!n)throw Error(`MainMenu: parent has no ownerDocument`);gE(n);let r=t.rng??Math.random,i=Math.min(pE.length-1,Math.max(0,Math.floor(r()*pE.length)));this.tagline=pE[i],this.itemDefs=[{id:`start`,label:`START`,action:t.onStart},{id:`settings`,label:`SETTINGS`,action:t.onSettings}],this.root=n.createElement(`div`),this.root.className=`whomp-mainmenu`;let a=n.createElement(`div`);a.className=`whomp-mainmenu__wordmark`,a.textContent=`WHOMP`;let o=n.createElement(`div`);o.className=`whomp-mainmenu__tagline`,o.textContent=this.tagline;let s=n.createElement(`div`);s.className=`whomp-mainmenu__list`,this.itemEls=this.itemDefs.map((e,t)=>{let r=n.createElement(`button`);return r.type=`button`,r.className=`whomp-mainmenu__btn`,r.textContent=e.label,r.addEventListener(`click`,()=>this.activate(t)),r.addEventListener(`mouseenter`,()=>{this.selected=t,this.syncSelection()}),s.appendChild(r),r}),this.root.appendChild(a),this.root.appendChild(o),this.root.appendChild(s),e.appendChild(this.root),this.syncSelection(),this.win=n.defaultView??void 0,this.keydownHandler=e=>this.onKeydown(e),this.win?.addEventListener(`keydown`,this.keydownHandler)}get selectedIndex(){return this.selected}get selectedId(){return this.itemDefs[this.selected].id}show(){this.root.style.display=`flex`}hide(){this.root.style.display=`none`}dispose(){this.win?.removeEventListener(`keydown`,this.keydownHandler),this.root.remove()}onKeydown(e){switch(e.key){case`ArrowDown`:case`KeyS`:e.preventDefault(),this.selected=(this.selected+1)%this.itemDefs.length,this.syncSelection();break;case`ArrowUp`:case`KeyW`:e.preventDefault(),this.selected=(this.selected-1+this.itemDefs.length)%this.itemDefs.length,this.syncSelection();break;case`Enter`:case`Space`:e.preventDefault(),this.activate(this.selected);break}}activate(e){this.selected=e,this.syncSelection(),this.itemDefs[e].action()}syncSelection(){this.itemEls.forEach((e,t)=>e.classList.toggle(`whomp-active`,t===this.selected))}},vE=.5,yE=2,bE=1;function xE(){return{masterVolume:1,musicVolume:.8,sfxVolume:1,voiceVolume:1,screenshake:!0,quality:`high`,reducedParticles:!1,lookSensitivity:1,invertY:!1,cameraFollow:!0}}function SE(e,t){return typeof e==`number`&&Number.isFinite(e)?Math.min(1,Math.max(0,e)):t}function CE(e,t,n,r){return typeof e==`number`&&Number.isFinite(e)?Math.min(r,Math.max(n,e)):t}function wE(e,t){return typeof e==`boolean`?e:t}function TE(e,t){return e===`high`||e===`low`?e:t}function EE(e){let t=xE();if(typeof e!=`object`||!e)return t;let n=e,r=typeof n.values==`object`&&n.values!==null?n.values:{};return{masterVolume:SE(r.masterVolume,t.masterVolume),musicVolume:SE(r.musicVolume,t.musicVolume),sfxVolume:SE(r.sfxVolume,t.sfxVolume),voiceVolume:SE(r.voiceVolume,t.voiceVolume),screenshake:wE(r.screenshake,t.screenshake),quality:TE(r.quality,t.quality),reducedParticles:wE(r.reducedParticles,t.reducedParticles),lookSensitivity:CE(r.lookSensitivity,t.lookSensitivity,vE,yE),invertY:wE(r.invertY,t.invertY),cameraFollow:wE(r.cameraFollow,t.cameraFollow)}}var DE=`whomp_settings`;function OE(e){if(!e)return!1;try{let t=`__whomp_settings_probe__`;return e.setItem(t,`1`),e.removeItem(t),!0}catch{return!1}}function kE(){let e;try{e=typeof localStorage<`u`?localStorage:void 0}catch{e=void 0}let t=OE(e);return{get:()=>{if(!(!t||!e))try{return e.getItem(DE)??void 0}catch{return}},set:n=>{if(!(!t||!e))try{e.setItem(DE,n)}catch{}}}}var AE=`whomp-settings-style`,jE=`
.whomp-settings{position:fixed;inset:0;z-index:960;display:none;
  align-items:center;justify-content:center;
  background:rgba(6,4,14,0.72);
  font-family:'Segoe UI',system-ui,-apple-system,sans-serif;color:#fff;}

.whomp-settings__panel{width:min(420px,88vw);padding:26px 28px 22px;border-radius:22px;
  background:linear-gradient(180deg,rgba(30,20,48,0.97),rgba(14,10,26,0.98));
  border:3px solid rgba(255,255,255,0.16);
  box-shadow:0 0 0 1px rgba(255,255,255,0.06) inset,0 16px 40px rgba(0,0,0,0.55);
  display:flex;flex-direction:column;gap:16px;
  transform:scale(0.5) translateY(20px);opacity:0;
  animation:whomp-settings-in 160ms cubic-bezier(.34,1.56,.64,1) forwards;}
@keyframes whomp-settings-in{
  0%{transform:scale(0.5) translateY(20px);opacity:0;}
  60%{transform:scale(1.06) translateY(-2px);opacity:1;}
  100%{transform:scale(1) translateY(0);opacity:1;}
}

.whomp-settings__title{font-size:15px;font-weight:800;letter-spacing:0.22em;
  text-transform:uppercase;color:#24f0ff;text-shadow:0 0 14px rgba(36,240,255,0.6);}

.whomp-settings__row{display:flex;flex-direction:column;gap:6px;}
.whomp-settings__rowLabel{display:flex;justify-content:space-between;font-size:13px;
  font-weight:700;letter-spacing:0.03em;color:rgba(255,255,255,0.85);}
.whomp-settings__rowLabel span:last-child{color:#ffcf3f;font-variant-numeric:tabular-nums;}

.whomp-settings__slider{-webkit-appearance:none;appearance:none;width:100%;height:8px;
  border-radius:999px;background:rgba(255,255,255,0.16);outline:none;cursor:pointer;}
.whomp-settings__slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
  width:20px;height:20px;border-radius:50%;background:linear-gradient(135deg,#ff2f7e,#24f0ff);
  border:2px solid rgba(255,255,255,0.5);cursor:pointer;}
.whomp-settings__slider::-moz-range-thumb{width:20px;height:20px;border-radius:50%;
  background:linear-gradient(135deg,#ff2f7e,#24f0ff);border:2px solid rgba(255,255,255,0.5);cursor:pointer;}

.whomp-settings__toggleRow{display:flex;justify-content:space-between;align-items:center;}
.whomp-settings__label{font-size:13px;font-weight:700;letter-spacing:0.03em;
  color:rgba(255,255,255,0.85);}
.whomp-settings__toggle{padding:6px 16px;border-radius:999px;border:2px solid rgba(255,255,255,0.22);
  background:rgba(255,255,255,0.06);color:#fff;font-weight:800;font-size:12px;
  letter-spacing:0.05em;cursor:pointer;transition:background 120ms ease-out;}
.whomp-settings__toggle.whomp-on{background:linear-gradient(90deg,#3ff08a,#24f0ff);
  border-color:transparent;color:#0a0714;}

.whomp-settings__qualityGroup{display:flex;gap:8px;}
.whomp-settings__qualityBtn{flex:1;padding:8px 0;border-radius:12px;
  border:2px solid rgba(255,255,255,0.22);background:rgba(255,255,255,0.06);
  color:#fff;font-weight:800;font-size:12px;letter-spacing:0.08em;cursor:pointer;
  transition:background 120ms ease-out;}
.whomp-settings__qualityBtn.whomp-on{background:linear-gradient(90deg,#ff2f7e,#ff6a3f);
  border-color:transparent;color:#0a0714;}

.whomp-settings__close{margin-top:6px;padding:11px 0;border-radius:14px;border:none;
  background:linear-gradient(90deg,#ff2f7e,#24f0ff);color:#0a0714;font-weight:800;
  font-size:15px;letter-spacing:0.05em;cursor:pointer;}
.whomp-settings__close:hover{filter:brightness(1.08);}
`;function ME(e){if(e.getElementById(AE))return;let t=e.createElement(`style`);t.id=AE,t.textContent=jE,e.head.appendChild(t)}var NE=class{root;store;callbacks;values;openFlag=!1;sliders;screenshakeBtn;reducedParticlesBtn;qualityBtns;sensitivityInput;sensitivityValueEl;invertYBtn;cameraFollowBtn;constructor(e,t={}){let n=e.ownerDocument;if(!n)throw Error(`SettingsPanel: parent has no ownerDocument`);ME(n),this.store=t.store??kE(),this.callbacks=t.callbacks??{},this.values=this.load(),this.root=n.createElement(`div`),this.root.className=`whomp-settings`;let r=n.createElement(`div`);r.className=`whomp-settings__panel`;let i=n.createElement(`div`);i.className=`whomp-settings__title`,i.textContent=`Settings`,r.appendChild(i),this.sliders=[[`masterVolume`,`Master`],[`musicVolume`,`Music`],[`sfxVolume`,`SFX`],[`voiceVolume`,`Voice`]].map(([e,t])=>this.buildSlider(n,r,e,t));let a=n.createElement(`div`);a.className=`whomp-settings__row`;let o=n.createElement(`div`);o.className=`whomp-settings__rowLabel`;let s=n.createElement(`span`);s.textContent=`Look Sensitivity`,this.sensitivityValueEl=n.createElement(`span`),o.appendChild(s),o.appendChild(this.sensitivityValueEl),this.sensitivityInput=n.createElement(`input`),this.sensitivityInput.type=`range`,this.sensitivityInput.min=`0`,this.sensitivityInput.max=`100`,this.sensitivityInput.className=`whomp-settings__slider`,this.sensitivityInput.addEventListener(`input`,()=>{let e=Number(this.sensitivityInput.value)/100;this.updateValue(`lookSensitivity`,vE+e*(yE-vE))}),a.appendChild(o),a.appendChild(this.sensitivityInput),r.appendChild(a),this.invertYBtn=this.buildToggleRow(n,r,`Invert Y`,()=>this.setInvertY(!this.values.invertY)),this.cameraFollowBtn=this.buildToggleRow(n,r,`Camera Follow`,()=>this.setCameraFollow(!this.values.cameraFollow)),this.screenshakeBtn=this.buildToggleRow(n,r,`Screenshake`,()=>this.setScreenshake(!this.values.screenshake)),this.reducedParticlesBtn=this.buildToggleRow(n,r,`Reduced Particles`,()=>this.setReducedParticles(!this.values.reducedParticles));let c=n.createElement(`div`);c.className=`whomp-settings__row`;let l=n.createElement(`div`);l.className=`whomp-settings__label`,l.textContent=`Quality`;let u=n.createElement(`div`);u.className=`whomp-settings__qualityGroup`;let d=n.createElement(`button`);d.type=`button`,d.className=`whomp-settings__qualityBtn`,d.textContent=`HIGH`,d.addEventListener(`click`,()=>this.setQuality(`high`));let f=n.createElement(`button`);f.type=`button`,f.className=`whomp-settings__qualityBtn`,f.textContent=`LOW`,f.addEventListener(`click`,()=>this.setQuality(`low`)),u.appendChild(d),u.appendChild(f),c.appendChild(l),c.appendChild(u),r.appendChild(c),this.qualityBtns={high:d,low:f};let p=n.createElement(`button`);p.type=`button`,p.className=`whomp-settings__close`,p.textContent=`CLOSE`,p.addEventListener(`click`,()=>this.close()),r.appendChild(p),this.root.appendChild(r),e.appendChild(this.root),this.syncAllControls(),this.applyAll()}get isOpen(){return this.openFlag}get current(){return this.values}open(){this.openFlag||(this.openFlag=!0,this.root.style.display=`flex`)}close(){this.openFlag&&(this.openFlag=!1,this.root.style.display=`none`)}toggle(){this.openFlag?this.close():this.open()}dispose(){this.root.remove()}setMasterVolume(e){this.updateValue(`masterVolume`,SE(e,this.values.masterVolume))}setMusicVolume(e){this.updateValue(`musicVolume`,SE(e,this.values.musicVolume))}setSfxVolume(e){this.updateValue(`sfxVolume`,SE(e,this.values.sfxVolume))}setVoiceVolume(e){this.updateValue(`voiceVolume`,SE(e,this.values.voiceVolume))}setScreenshake(e){this.updateValue(`screenshake`,e)}setReducedParticles(e){this.updateValue(`reducedParticles`,e)}setQuality(e){this.updateValue(`quality`,e)}setLookSensitivity(e){this.updateValue(`lookSensitivity`,CE(e,this.values.lookSensitivity,vE,yE))}setInvertY(e){this.updateValue(`invertY`,e)}setCameraFollow(e){this.updateValue(`cameraFollow`,e)}buildSlider(e,t,n,r){let i=e.createElement(`div`);i.className=`whomp-settings__row`;let a=e.createElement(`div`);a.className=`whomp-settings__rowLabel`;let o=e.createElement(`span`);o.textContent=r;let s=e.createElement(`span`);a.appendChild(o),a.appendChild(s);let c=e.createElement(`input`);return c.type=`range`,c.min=`0`,c.max=`100`,c.className=`whomp-settings__slider`,c.addEventListener(`input`,()=>{this.updateValue(n,SE(Number(c.value)/100,this.values[n]))}),i.appendChild(a),i.appendChild(c),t.appendChild(i),{key:n,input:c,valueEl:s}}buildToggleRow(e,t,n,r){let i=e.createElement(`div`);i.className=`whomp-settings__toggleRow`;let a=e.createElement(`div`);a.className=`whomp-settings__label`,a.textContent=n;let o=e.createElement(`button`);return o.type=`button`,o.className=`whomp-settings__toggle`,o.addEventListener(`click`,r),i.appendChild(a),i.appendChild(o),t.appendChild(i),o}updateValue(e,t){this.values[e]!==t&&(this.values={...this.values,[e]:t},this.persist(),this.syncControl(e),this.fireCallback(e,t))}fireCallback(e,t){switch(e){case`masterVolume`:this.callbacks.onMasterVolume?.(t);break;case`musicVolume`:this.callbacks.onMusicVolume?.(t);break;case`sfxVolume`:this.callbacks.onSfxVolume?.(t);break;case`voiceVolume`:this.callbacks.onVoiceVolume?.(t);break;case`screenshake`:this.callbacks.onScreenshake?.(t);break;case`quality`:this.callbacks.onQuality?.(t);break;case`reducedParticles`:this.callbacks.onReducedParticles?.(t);break;case`lookSensitivity`:this.callbacks.onLookSensitivity?.(t);break;case`invertY`:this.callbacks.onInvertY?.(t);break;case`cameraFollow`:this.callbacks.onCameraFollow?.(t);break}}applyAll(){this.callbacks.onMasterVolume?.(this.values.masterVolume),this.callbacks.onMusicVolume?.(this.values.musicVolume),this.callbacks.onSfxVolume?.(this.values.sfxVolume),this.callbacks.onVoiceVolume?.(this.values.voiceVolume),this.callbacks.onScreenshake?.(this.values.screenshake),this.callbacks.onQuality?.(this.values.quality),this.callbacks.onReducedParticles?.(this.values.reducedParticles),this.callbacks.onLookSensitivity?.(this.values.lookSensitivity),this.callbacks.onInvertY?.(this.values.invertY),this.callbacks.onCameraFollow?.(this.values.cameraFollow)}syncAllControls(){for(let e of this.sliders)this.syncControl(e.key);this.syncControl(`screenshake`),this.syncControl(`reducedParticles`),this.syncControl(`quality`),this.syncControl(`lookSensitivity`),this.syncControl(`invertY`)}syncControl(e){let t=this.sliders.find(t=>t.key===e);if(t){let n=Math.round(this.values[e]*100);t.input.value=String(n),t.valueEl.textContent=`${n}%`;return}if(e===`screenshake`)this.screenshakeBtn.textContent=this.values.screenshake?`ON`:`OFF`,this.screenshakeBtn.classList.toggle(`whomp-on`,this.values.screenshake);else if(e===`reducedParticles`)this.reducedParticlesBtn.textContent=this.values.reducedParticles?`ON`:`OFF`,this.reducedParticlesBtn.classList.toggle(`whomp-on`,this.values.reducedParticles);else if(e===`quality`)this.qualityBtns.high.classList.toggle(`whomp-on`,this.values.quality===`high`),this.qualityBtns.low.classList.toggle(`whomp-on`,this.values.quality===`low`);else if(e===`lookSensitivity`){let e=(this.values.lookSensitivity-vE)/(yE-vE),t=Math.round(e*100);this.sensitivityInput.value=String(t),this.sensitivityValueEl.textContent=`${Math.round(this.values.lookSensitivity*100)}%`}else e===`invertY`&&(this.invertYBtn.textContent=this.values.invertY?`ON`:`OFF`,this.invertYBtn.classList.toggle(`whomp-on`,this.values.invertY),this.cameraFollowBtn.textContent=this.values.cameraFollow?`ON`:`OFF`,this.cameraFollowBtn.classList.toggle(`whomp-on`,this.values.cameraFollow))}load(){let e=this.store.get();if(e===void 0)return xE();try{return EE(JSON.parse(e))}catch{return xE()}}persist(){let e={v:bE,values:this.values};this.store.set(JSON.stringify(e))}},PE=[{id:`resume`,label:`RESUME`},{id:`settings`,label:`SETTINGS`},{id:`abandon`,label:`ABANDON RUN`}],FE=`whomp-pause-style`,IE=`
.whomp-pause{position:fixed;inset:0;z-index:930;display:none;
  align-items:center;justify-content:center;
  background:radial-gradient(ellipse at center,rgba(20,10,35,0.72),rgba(6,4,14,0.92));
  font-family:'Segoe UI',system-ui,-apple-system,sans-serif;color:#fff;text-align:center;}

.whomp-pause__panel{width:min(340px,86vw);padding:28px 26px 24px;border-radius:22px;
  background:linear-gradient(180deg,rgba(30,20,48,0.97),rgba(14,10,26,0.98));
  border:3px solid rgba(255,255,255,0.16);
  box-shadow:0 0 0 1px rgba(255,255,255,0.06) inset,0 16px 40px rgba(0,0,0,0.55);
  display:flex;flex-direction:column;gap:16px;
  transform:scale(0.6) translateY(20px);opacity:0;
  animation:whomp-pause-in 150ms cubic-bezier(.34,1.56,.64,1) forwards;}
@keyframes whomp-pause-in{
  0%{transform:scale(0.6) translateY(20px);opacity:0;}
  60%{transform:scale(1.06) translateY(-2px);opacity:1;}
  100%{transform:scale(1) translateY(0);opacity:1;}
}

.whomp-pause__title{font-size:15px;font-weight:800;letter-spacing:0.24em;
  text-transform:uppercase;color:#24f0ff;text-shadow:0 0 14px rgba(36,240,255,0.6);}

.whomp-pause__list{display:flex;flex-direction:column;gap:12px;}
.whomp-pause__btn{padding:12px 18px;border-radius:14px;border:2px solid rgba(255,255,255,0.2);
  background:rgba(255,255,255,0.06);color:#fff;font-weight:800;font-size:16px;
  letter-spacing:0.04em;cursor:pointer;transition:transform 90ms ease-out,
  background 120ms ease-out,box-shadow 120ms ease-out;}
.whomp-pause__btn:hover{background:rgba(255,255,255,0.14);}
.whomp-pause__btn.whomp-active{background:linear-gradient(90deg,#ff2f7e,#24f0ff);
  border-color:transparent;color:#0a0714;transform:scale(1.03);
  box-shadow:0 8px 20px -4px rgba(255,47,126,0.55);}
.whomp-pause__btn--abandon{border-color:rgba(255,47,126,0.4);color:#ffb3cf;}
.whomp-pause__btn--abandon.whomp-active{background:linear-gradient(90deg,#ff2f7e,#c11a52);
  color:#fff;}

.whomp-pause__confirm{display:none;flex-direction:column;gap:16px;}
.whomp-pause__confirmText{font-size:14px;line-height:1.5;color:rgba(255,255,255,0.85);}
.whomp-pause__confirmRow{display:flex;gap:12px;}
.whomp-pause__confirmBtn{flex:1;padding:11px 0;border-radius:12px;border:2px solid rgba(255,255,255,0.2);
  background:rgba(255,255,255,0.06);color:#fff;font-weight:800;font-size:14px;
  letter-spacing:0.04em;cursor:pointer;transition:transform 90ms ease-out,background 120ms ease-out;}
.whomp-pause__confirmBtn.whomp-active{transform:scale(1.04);}
.whomp-pause__confirmBtn--yes.whomp-active{background:linear-gradient(90deg,#ff2f7e,#c11a52);
  border-color:transparent;}
.whomp-pause__confirmBtn--no.whomp-active{background:linear-gradient(90deg,#3ff08a,#24f0ff);
  border-color:transparent;color:#0a0714;}
`;function LE(e){if(e.getElementById(FE))return;let t=e.createElement(`style`);t.id=FE,t.textContent=IE,e.head.appendChild(t)}var RE=class{deps;root;listEl;confirmEl;itemEls;confirmBtns;openFlag=!1;confirming=!1;selected=0;confirmSelected=1;keydownHandler;win;constructor(e,t){this.deps=t;let n=e.ownerDocument;if(!n)throw Error(`PauseMenu: parent has no ownerDocument`);LE(n),this.root=n.createElement(`div`),this.root.className=`whomp-pause`;let r=n.createElement(`div`);r.className=`whomp-pause__panel`;let i=n.createElement(`div`);i.className=`whomp-pause__title`,i.textContent=`Paused`,this.listEl=n.createElement(`div`),this.listEl.className=`whomp-pause__list`,this.itemEls=PE.map((e,t)=>{let r=n.createElement(`button`);return r.type=`button`,r.className=e.id===`abandon`?`whomp-pause__btn whomp-pause__btn--abandon`:`whomp-pause__btn`,r.textContent=e.label,r.addEventListener(`click`,()=>this.activate(t)),r.addEventListener(`mouseenter`,()=>{this.selected=t,this.syncSelection()}),this.listEl.appendChild(r),r}),this.confirmEl=n.createElement(`div`),this.confirmEl.className=`whomp-pause__confirm`;let a=n.createElement(`div`);a.className=`whomp-pause__confirmText`,a.textContent=`Abandon this run? It banks as a loss.`;let o=n.createElement(`div`);o.className=`whomp-pause__confirmRow`;let s=n.createElement(`button`);s.type=`button`,s.className=`whomp-pause__confirmBtn whomp-pause__confirmBtn--yes`,s.textContent=`YES`,s.addEventListener(`click`,()=>this.activateConfirm(0)),s.addEventListener(`mouseenter`,()=>{this.confirmSelected=0,this.syncConfirmSelection()});let c=n.createElement(`button`);c.type=`button`,c.className=`whomp-pause__confirmBtn whomp-pause__confirmBtn--no`,c.textContent=`NO`,c.addEventListener(`click`,()=>this.activateConfirm(1)),c.addEventListener(`mouseenter`,()=>{this.confirmSelected=1,this.syncConfirmSelection()}),o.appendChild(s),o.appendChild(c),this.confirmEl.appendChild(a),this.confirmEl.appendChild(o),this.confirmBtns=[s,c],r.appendChild(i),r.appendChild(this.listEl),r.appendChild(this.confirmEl),this.root.appendChild(r),e.appendChild(this.root),this.syncSelection(),this.win=n.defaultView??void 0,this.keydownHandler=e=>this.onKeydown(e),this.win?.addEventListener(`keydown`,this.keydownHandler)}get isOpen(){return this.openFlag}get confirmingAbandon(){return this.confirming}get selectedIndex(){return this.selected}get confirmSelectedIndex(){return this.confirmSelected}open(){this.openFlag||(this.deps.canOpen?.()??!0)&&this.openMenu()}close(){this.openFlag&&this.closeMenu()}dispose(){this.win?.removeEventListener(`keydown`,this.keydownHandler),this.root.remove()}onKeydown(e){if(!this.deps.isBlocked?.()){if(e.key===`Escape`){if(e.preventDefault(),this.confirming){this.cancelAbandon();return}if(this.openFlag){this.resume();return}(this.deps.canOpen?.()??!0)&&this.openMenu();return}if(this.openFlag){if(this.confirming){switch(e.key){case`ArrowLeft`:case`ArrowRight`:e.preventDefault(),this.confirmSelected=+(this.confirmSelected===0),this.syncConfirmSelection();break;case`Enter`:case`Space`:e.preventDefault(),this.activateConfirm(this.confirmSelected);break;case`KeyY`:e.preventDefault(),this.activateConfirm(0);break;case`KeyN`:e.preventDefault(),this.activateConfirm(1);break}return}switch(e.key){case`ArrowDown`:case`KeyS`:e.preventDefault(),this.selected=(this.selected+1)%PE.length,this.syncSelection();break;case`ArrowUp`:case`KeyW`:e.preventDefault(),this.selected=(this.selected-1+PE.length)%PE.length,this.syncSelection();break;case`Enter`:case`Space`:e.preventDefault(),this.activate(this.selected);break;case`Digit1`:e.preventDefault(),this.activate(0);break;case`Digit2`:e.preventDefault(),this.activate(1);break;case`Digit3`:e.preventDefault(),this.activate(2);break}}}}activate(e){this.selected=e,this.syncSelection();let t=PE[e];t.id===`resume`?this.resume():t.id===`settings`?this.deps.onSettings():this.startAbandonConfirm()}activateConfirm(e){e===0?(this.confirming=!1,this.closeMenu(),this.deps.onAbandon()):this.cancelAbandon()}resume(){this.closeMenu(),this.deps.onResume()}startAbandonConfirm(){this.confirming=!0,this.confirmSelected=1,this.listEl.style.display=`none`,this.confirmEl.style.display=`flex`,this.syncConfirmSelection()}cancelAbandon(){this.confirming=!1,this.confirmEl.style.display=`none`,this.listEl.style.display=`flex`,this.syncSelection()}openMenu(){this.openFlag=!0,this.confirming=!1,this.selected=0,this.confirmEl.style.display=`none`,this.listEl.style.display=`flex`,this.root.style.display=`flex`,this.syncSelection()}closeMenu(){this.openFlag=!1,this.confirming=!1,this.root.style.display=`none`}syncSelection(){this.itemEls.forEach((e,t)=>e.classList.toggle(`whomp-active`,t===this.selected))}syncConfirmSelection(){this.confirmBtns.forEach((e,t)=>e.classList.toggle(`whomp-active`,t===this.confirmSelected))}},zE=1100,BE=`whomp-results-style`,VE=`
.whomp-results{position:fixed;inset:0;z-index:940;display:none;
  align-items:center;justify-content:center;
  background:radial-gradient(ellipse at center,rgba(20,10,35,0.85),rgba(6,4,14,0.96));
  font-family:'Segoe UI',system-ui,-apple-system,sans-serif;color:#fff;text-align:center;}

.whomp-results__panel{width:min(420px,88vw);padding:32px 30px 26px;border-radius:26px;
  background:linear-gradient(180deg,rgba(30,20,48,0.97),rgba(14,10,26,0.98));
  border:4px solid rgba(255,255,255,0.16);
  box-shadow:0 0 0 1px rgba(255,255,255,0.06) inset,0 18px 44px rgba(0,0,0,0.55);
  display:flex;flex-direction:column;align-items:center;gap:18px;
  transform:scale(0.5) translateY(24px);opacity:0;
  animation:whomp-results-in 200ms cubic-bezier(.34,1.56,.64,1) forwards;}
@keyframes whomp-results-in{
  0%{transform:scale(0.5) translateY(24px);opacity:0;}
  60%{transform:scale(1.06) translateY(-3px);opacity:1;}
  100%{transform:scale(1) translateY(0);opacity:1;}
}

.whomp-results__title{font-size:32px;font-weight:900;letter-spacing:0.02em;line-height:1.1;}
.whomp-results--win .whomp-results__panel{border-color:#ffcf3f;}
.whomp-results--win .whomp-results__title{
  background:linear-gradient(90deg,#ffcf3f,#ff8f3f);-webkit-background-clip:text;
  background-clip:text;color:transparent;text-shadow:0 0 24px rgba(255,207,63,0.5);}
.whomp-results--loss .whomp-results__title{color:#ff6a86;text-shadow:0 0 20px rgba(255,47,126,0.45);}

.whomp-results__subtitle{display:none;font-size:14px;font-weight:800;letter-spacing:0.08em;
  color:#ffcf3f;text-transform:uppercase;}

.whomp-results__stats{width:100%;display:flex;flex-direction:column;gap:8px;margin-top:4px;}
.whomp-results__row{display:none;justify-content:space-between;padding:8px 14px;
  border-radius:10px;background:rgba(255,255,255,0.05);font-size:14px;font-weight:700;}
.whomp-results__row.whomp-show{display:flex;}
.whomp-results__rowLabel{color:rgba(255,255,255,0.6);letter-spacing:0.06em;
  text-transform:uppercase;font-size:11px;align-self:center;}
.whomp-results__rowValue{font-variant-numeric:tabular-nums;color:#24f0ff;}
.whomp-results__row--gold .whomp-results__rowValue{color:#ffcf3f;}

.whomp-results__controls{display:flex;gap:14px;margin-top:6px;width:100%;}
.whomp-results__btn{flex:1;padding:13px 0;border-radius:14px;border:2px solid rgba(255,255,255,0.22);
  background:rgba(255,255,255,0.06);color:#fff;font-weight:800;font-size:15px;
  letter-spacing:0.04em;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;
  transition:transform 90ms ease-out,background 120ms ease-out;}
.whomp-results__btn:hover{background:rgba(255,255,255,0.15);transform:translateY(-1px);}
.whomp-results__btn--primary{background:linear-gradient(90deg,#ff2f7e,#24f0ff);
  border-color:transparent;color:#0a0714;}
.whomp-results__btn--primary:hover{filter:brightness(1.08);}
.whomp-results__key{width:20px;height:20px;border-radius:6px;background:rgba(255,255,255,0.12);
  border:1px solid rgba(255,255,255,0.28);display:flex;align-items:center;justify-content:center;
  font-size:11px;font-weight:800;}
.whomp-results__btn--primary .whomp-results__key{background:rgba(0,0,0,0.18);border-color:rgba(0,0,0,0.25);}
`;function HE(e){if(e.getElementById(BE))return;let t=e.createElement(`style`);t.id=BE,t.textContent=VE,e.head.appendChild(t)}function UE(e){return e<0?0:e>1?1:e}function WE(e){let t=Math.max(0,Math.floor(e)),n=Math.floor(t/60),r=t%60;return`${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}`}var GE=class{deps;root;titleEl;subtitleEl;rows;openFlag=!1;data=null;countStartMs=null;lastWrittenGold=-1;win;keydownHandler;constructor(e,t){this.deps=t;let n=e.ownerDocument;if(!n)throw Error(`ResultsScreen: parent has no ownerDocument`);HE(n),this.root=n.createElement(`div`),this.root.className=`whomp-results`;let r=n.createElement(`div`);r.className=`whomp-results__panel`,this.titleEl=n.createElement(`div`),this.titleEl.className=`whomp-results__title`,this.subtitleEl=n.createElement(`div`),this.subtitleEl.className=`whomp-results__subtitle`;let i=n.createElement(`div`);i.className=`whomp-results__stats`;let a=(e,t,r)=>{let a=n.createElement(`div`);a.className=r?`whomp-results__row ${r}`:`whomp-results__row`;let o=n.createElement(`span`);o.className=`whomp-results__rowLabel`,o.textContent=t;let s=n.createElement(`span`);return s.className=`whomp-results__rowValue`,a.appendChild(o),a.appendChild(s),i.appendChild(a),{key:e,row:a,valueEl:s}};this.rows={time:a(`time`,`Time`),kills:a(`kills`,`Kills`),gold:a(`gold`,`Gold`,`whomp-results__row--gold`),level:a(`level`,`Level`),bestWeapon:a(`bestWeapon`,`Best Weapon`)};let o=n.createElement(`div`);o.className=`whomp-results__controls`;let s=this.buildBtn(n,`whomp-results__btn`,`1`,`RETRY`),c=this.buildBtn(n,`whomp-results__btn whomp-results__btn--primary`,`2`,`GO AGAIN`);s.addEventListener(`click`,()=>this.deps.onRetry()),c.addEventListener(`click`,()=>this.deps.onGoAgain()),o.appendChild(s),o.appendChild(c),r.appendChild(this.titleEl),r.appendChild(this.subtitleEl),r.appendChild(i),r.appendChild(o),this.root.appendChild(r),e.appendChild(this.root),this.win=n.defaultView??void 0,this.keydownHandler=e=>this.onKeydown(e),this.win?.addEventListener(`keydown`,this.keydownHandler)}onKeydown(e){if(!this.openFlag)return;let t=e.key,n=e.code;t===`Digit1`||t===`Numpad1`||n===`Digit1`||n===`Numpad1`?(e.preventDefault(),this.deps.onRetry()):(t===`Digit2`||t===`Numpad2`||t===`Enter`||n===`Digit2`||n===`Numpad2`||n===`Enter`)&&(e.preventDefault(),this.deps.onGoAgain())}get isOpen(){return this.openFlag}show(e){if(this.data=e,this.openFlag=!0,this.countStartMs=null,this.lastWrittenGold=0,this.root.classList.toggle(`whomp-results--win`,e.win),this.root.classList.toggle(`whomp-results--loss`,!e.win),this.titleEl.textContent=e.win?`THE CROWD IS SATISFIED.`:`RUDE.`,e.win){let t=Math.max(0,e.timeSec-Px.finalHordeAtSec);this.subtitleEl.textContent=`ENCORE — survived ${WE(t)}`,this.subtitleEl.style.display=`block`}else this.subtitleEl.style.display=`none`;this.rows.time.valueEl.textContent=WE(e.timeSec),this.rows.kills.valueEl.textContent=String(e.kills),this.rows.gold.valueEl.textContent=`0`,this.setRowVisible(`time`,!0),this.setRowVisible(`kills`,!0),this.setRowVisible(`gold`,!0),e.level===void 0?this.setRowVisible(`level`,!1):(this.rows.level.valueEl.textContent=String(e.level),this.setRowVisible(`level`,!0)),e.bestWeapon?(this.rows.bestWeapon.valueEl.textContent=`${e.bestWeapon.name} (${Math.round(e.bestWeapon.damage)})`,this.setRowVisible(`bestWeapon`,!0)):this.setRowVisible(`bestWeapon`,!1),this.root.style.display=`flex`}hide(){this.openFlag=!1,this.root.style.display=`none`}update(e){if(!this.openFlag||!this.data)return;let t=Math.max(0,Math.round(this.data.gold));if(this.lastWrittenGold===t)return;this.countStartMs===null&&(this.countStartMs=e);let n=UE((e-this.countStartMs)/zE),r=1-(1-n)*(1-n),i=Math.round(t*r);i!==this.lastWrittenGold&&(this.lastWrittenGold=i,this.rows.gold.valueEl.textContent=String(i))}dispose(){this.win?.removeEventListener(`keydown`,this.keydownHandler),this.root.remove()}get titleText(){return this.titleEl.textContent}get subtitleText(){return this.subtitleEl.textContent}get displayedGold(){return this.lastWrittenGold}rowText(e){return this.rows[e].valueEl.textContent}rowVisible(e){return this.rows[e].row.classList.contains(`whomp-show`)}setRowVisible(e,t){this.rows[e].row.classList.toggle(`whomp-show`,t)}buildBtn(e,t,n,r){let i=e.createElement(`button`);i.className=t,i.type=`button`;let a=e.createElement(`span`);a.className=`whomp-results__key`,a.textContent=n;let o=e.createElement(`span`);return o.textContent=r,i.appendChild(a),i.appendChild(o),i}},KE=`whomp-toasts-style`,qE={achievement:3400,pot:2600,evolution:3e3},JE=`
.whomp-toasts{position:fixed;top:100px;right:14px;z-index:510;display:flex;
  flex-direction:column;align-items:flex-end;gap:8px;pointer-events:none;
  font-family:'Segoe UI',system-ui,-apple-system,sans-serif;max-width:300px;}

.whomp-toast{padding:9px 16px;border-radius:12px;font-weight:800;font-size:13px;
  letter-spacing:0.02em;color:#fff;text-align:right;white-space:nowrap;
  box-shadow:0 6px 18px rgba(0,0,0,0.4);border:2px solid rgba(255,255,255,0.18);
  background:rgba(16,10,26,0.88);
  transform:translateX(24px) scale(0.85);opacity:0;
  animation:whomp-toast-in 160ms cubic-bezier(.34,1.56,.64,1) forwards;}
@keyframes whomp-toast-in{
  0%{transform:translateX(24px) scale(0.85);opacity:0;}
  60%{transform:translateX(-3px) scale(1.04);opacity:1;}
  100%{transform:translateX(0) scale(1);opacity:1;}
}
.whomp-toast--achievement{border-color:#ffcf3f;background:linear-gradient(90deg,rgba(255,207,63,0.22),rgba(16,10,26,0.92));
  text-shadow:0 0 10px rgba(255,207,63,0.55);}
.whomp-toast--pot{border-color:#ffd23f;color:#1a1204;
  background:linear-gradient(90deg,#ffcf3f,#ff8f3f);}
.whomp-toast--evolution{border-color:#24f0ff;background:linear-gradient(90deg,rgba(36,240,255,0.2),rgba(16,10,26,0.92));
  text-shadow:0 0 10px rgba(36,240,255,0.5);}
`;function YE(e){if(e.getElementById(KE))return;let t=e.createElement(`style`);t.id=KE,t.textContent=JE,e.head.appendChild(t)}var XE=Object.values(xC);function ZE(e,t,n){if(t.has(e.evolvedId))return!1;let r=ap[e.baseId];return!r||t.levelOf(e.baseId)<r.maxLevel?!1:n.levelOf(e.passiveId)>0}var QE=class{root;doc;bus;meta;evolutionDeps;unsubs=[];arrivals=[];active=[];nextId=0;evoPinged=new Set;constructor(e,t){let n=e.ownerDocument;if(!n)throw Error(`Toasts: parent has no ownerDocument`);this.doc=n,YE(n),this.bus=t.bus,this.meta=t.meta,this.evolutionDeps=t.evolution,this.root=n.createElement(`div`),this.root.className=`whomp-toasts`,e.appendChild(this.root),this.unsubs.push(this.bus.on(`achievementUnlocked`,this.onAchievementUnlocked))}pushPotSequence(e){e.forEach((t,n)=>{this.arrivals.push({text:`POT OF GOLD ${n+1}/${e.length} — ${t.label}`,variant:`pot`,revealDelayMs:n*900})})}update(e){if(this.evolutionDeps&&this.scanEvolutionEligibility(),this.arrivals.length>0){for(let t of this.arrivals){let n=this.buildToastEl(t.text,t.variant);this.active.push({id:this.nextId++,variant:t.variant,revealAtMs:e+t.revealDelayMs,hideAtMs:e+t.revealDelayMs+qE[t.variant],el:n,mounted:!1})}this.arrivals=[]}if(this.active.length!==0){for(let t of this.active)!t.mounted&&e>=t.revealAtMs&&(t.mounted=!0,this.root.appendChild(t.el));for(let t=this.active.length-1;t>=0;t--){let n=this.active[t];n.mounted&&e>=n.hideAtMs&&(n.el.remove(),this.active.splice(t,1))}}}dispose(){for(let e of this.unsubs)e();this.root.remove()}get pendingCount(){return this.arrivals.length+this.active.length}get mountedTexts(){return this.active.filter(e=>e.mounted).map(e=>e.el.textContent)}onAchievementUnlocked=()=>{for(let e of this.meta.drainToasts())this.arrivals.push({text:e,variant:`achievement`,revealDelayMs:0})};scanEvolutionEligibility(){let{weapons:e,passives:t}=this.evolutionDeps;for(let n of XE){if(this.evoPinged.has(n.evolvedId)||!ZE(n,e,t))continue;this.evoPinged.add(n.evolvedId);let r=ap[n.baseId]?.name??n.baseId;this.arrivals.push({text:`EVOLUTION AVAILABLE: ${r}`,variant:`evolution`,revealDelayMs:0})}}buildToastEl(e,t){let n=this.doc.createElement(`div`);return n.className=`whomp-toast whomp-toast--${t}`,n.textContent=e,n}},$E=6,eD=15,tD={lookPrompt:`CLICK TO AIM  ·  MOUSE — LOOK`,movement:`WASD — MOVE  ·  SPACE — JUMP  ·  SHIFT — DASH`,signature:`R — YOUR SIGNATURE`,ultimate:`Q APPEARS WHEN YOU STEAL FROM A BOSS`,shrine:`A SHRINE. RISK FOR REWARD. E TO ACTIVATE.`},nD=[`lookPrompt`,`movement`,`signature`,`ultimate`,`shrine`],rD=`position:fixed;left:50%;bottom:96px;transform:translateX(-50%);z-index:470;display:flex;flex-direction:column;align-items:center;gap:8px;pointer-events:none;font-family:'Segoe UI',system-ui,-apple-system,sans-serif;`,iD=`display:none;padding:8px 18px;border-radius:12px;font-size:13px;font-weight:800;letter-spacing:0.03em;color:#fff;background:rgba(12,8,24,0.72);border:2px solid rgba(255,255,255,0.22);white-space:nowrap;text-align:center;text-shadow:0 2px 0 rgba(0,0,0,0.5);box-shadow:0 6px 16px rgba(0,0,0,0.35);`,aD=class{cards;bus;active;shrines;unsubs=[];shrineNear=!1;constructor(e,t){let n=e.ownerDocument;if(!n)throw Error(`TutorialHints: parent has no ownerDocument`);this.bus=t.bus,this.active=t.isFirstRun,this.shrines=t.shrines;let r=n.createElement(`div`);r.style.cssText=rD,this.cards={};for(let e of nD){let t=n.createElement(`div`);t.style.cssText=iD,t.textContent=tD[e],r.appendChild(t),this.cards[e]={id:e,el:t,shown:!1,dismissed:!1}}e.appendChild(r),this.active&&(this.setShown(`lookPrompt`,!0),this.setShown(`movement`,!0),this.unsubs.push(this.bus.on(`playerDashed`,()=>this.dismiss(`movement`))),this.unsubs.push(this.bus.on(`playerJumped`,()=>this.dismiss(`movement`))),this.unsubs.push(this.bus.on(`signatureUsed`,()=>this.dismiss(`signature`))),this.unsubs.push(this.bus.on(`bossSpawned`,()=>this.setShown(`ultimate`,!0))),this.unsubs.push(this.bus.on(`bossKilled`,()=>this.dismiss(`ultimate`))),this.unsubs.push(this.bus.on(`ultimateUsed`,()=>this.dismiss(`ultimate`))),this.unsubs.push(this.bus.on(`shrineActivated`,()=>this.dismiss(`shrine`))))}notifyMoved(){this.dismiss(`movement`)}update(e,t,n,r=!1){if(!this.active)return;r&&this.dismiss(`lookPrompt`);let i=this.cards.signature;if(!i.dismissed&&!i.shown&&e>=eD&&this.setShown(`signature`,!0),!this.cards.shrine.dismissed){let e=this.isNearAnyShrine(t,n);e!==this.shrineNear&&(this.shrineNear=e,this.setShown(`shrine`,e))}}dispose(){for(let e of this.unsubs)e();for(let e of nD)this.cards[e].el.remove()}isVisible(e){return this.cards[e].shown}isDismissed(e){return this.cards[e].dismissed}isNearAnyShrine(e,t){for(let n of this.shrines){let r=n.x-e,i=n.z-t;if(r*r+i*i<=$E*$E)return!0}return!1}setShown(e,t){let n=this.cards[e];n.dismissed||n.shown===t||(n.shown=t,n.el.style.display=t?`block`:`none`)}dismiss(e){let t=this.cards[e];t.dismissed||(t.dismissed=!0,t.shown&&(t.shown=!1,t.el.style.display=`none`))}},oD=Object.values(g_).filter(e=>e.lane===`power`),sD=Object.values(g_).filter(e=>e.lane===`qol`),cD={rerolls:1,banishes:1};function lD(e){return e===`rerolls`||e===`banishes`||e===`skips`}function uD(e,t){let n=g_[t];if(!n)throw Error(`shopRowSnapshot: unknown stat id "${t}"`);let r=e.shopRank(t),i=r>=n.ranks,a=i?null:h_[r],o=!i&&a!==null&&e.gold>=a;return{id:t,name:n.name,desc:n.desc,rank:r,ranks:n.ranks,maxed:i,nextCost:a,canAfford:o}}function dD(e,t){let n=e.shopRank(t),r=cD[t]??0;return{base:r,bought:n,total:lD(t)?e.qolCapacity(t):r+n}}function fD(e,t,n){let r=h_[e.shopRank(n)],i=e.buy(n);return i&&r!==void 0&&t.emit(`goldSpent`,{amount:r,on:n}),i}var pD=`whomp-shop-style`,mD=`
.whomp-shop{position:fixed;inset:0;z-index:900;display:none;
  align-items:center;justify-content:center;
  background:radial-gradient(ellipse at center,rgba(20,10,35,0.72),rgba(6,4,14,0.92));
  font-family:'Segoe UI',system-ui,-apple-system,sans-serif;color:#fff;}

.whomp-shop__panel{width:min(860px,92vw);max-height:86vh;display:flex;flex-direction:column;
  border-radius:26px;padding:22px 26px 26px;gap:16px;
  background:linear-gradient(180deg,rgba(30,20,48,0.97),rgba(14,10,26,0.97));
  border:3px solid rgba(255,255,255,0.14);
  box-shadow:0 0 0 1px rgba(255,255,255,0.05) inset,0 20px 50px rgba(0,0,0,0.55);}

.whomp-shop__header{display:flex;align-items:flex-start;justify-content:space-between;gap:14px;}
.whomp-shop__titleWrap{display:flex;flex-direction:column;gap:2px;}
.whomp-shop__title{font-size:22px;font-weight:900;letter-spacing:0.06em;text-transform:uppercase;
  background:linear-gradient(90deg,#ff2f7e,#24f0ff);-webkit-background-clip:text;background-clip:text;
  color:transparent;}
.whomp-shop__tagline{font-size:12px;color:rgba(255,255,255,0.55);font-style:italic;}

.whomp-shop__headerRight{display:flex;align-items:center;gap:10px;}
.whomp-shop__gold{display:flex;align-items:center;gap:7px;padding:6px 14px;border-radius:999px;
  background:rgba(12,8,24,0.6);border:2px solid rgba(255,209,63,0.4);font-weight:800;font-size:17px;
  font-variant-numeric:tabular-nums;color:#ffd23f;}
.whomp-shop__close{width:32px;height:32px;border-radius:10px;border:2px solid rgba(255,255,255,0.2);
  background:rgba(255,255,255,0.06);color:#fff;font-weight:800;font-size:15px;cursor:pointer;
  display:flex;align-items:center;justify-content:center;transition:background 120ms ease-out;}
.whomp-shop__close:hover{background:rgba(255,255,255,0.16);}

.whomp-shop__tabs{display:flex;gap:10px;}
.whomp-shop__tab{padding:9px 20px;border-radius:12px;border:2px solid rgba(255,255,255,0.16);
  background:rgba(255,255,255,0.05);color:rgba(255,255,255,0.7);font-weight:800;font-size:13px;
  letter-spacing:0.08em;text-transform:uppercase;cursor:pointer;transition:all 120ms ease-out;}
.whomp-shop__tab:hover{background:rgba(255,255,255,0.1);color:#fff;}
.whomp-shop__tab.whomp-active{background:linear-gradient(90deg,#ff2f7e,#24f0ff);color:#0a0714;
  border-color:transparent;}

.whomp-shop__grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:14px;
  overflow-y:auto;padding-right:4px;}

.whomp-shop__card{position:relative;padding:14px 14px 12px;border-radius:16px;
  background:rgba(255,255,255,0.04);border:2px solid rgba(255,255,255,0.12);
  display:flex;flex-direction:column;gap:8px;
  transform:scale(0.9);opacity:0;animation:whomp-shop-card-in 140ms cubic-bezier(.34,1.56,.64,1) forwards;
  animation-delay:var(--stagger,0ms);}
.whomp-shop__card.whomp-maxed{border-color:rgba(255,207,63,0.5);}
@keyframes whomp-shop-card-in{0%{transform:scale(0.9);opacity:0;}100%{transform:scale(1);opacity:1;}}

.whomp-shop__cardName{font-size:14px;font-weight:800;letter-spacing:0.02em;}
.whomp-shop__cardDesc{font-size:11.5px;line-height:1.4;color:rgba(255,255,255,0.62);flex:1;}
.whomp-shop__qolLine{font-size:11px;font-weight:700;color:rgba(36,240,255,0.85);
  font-variant-numeric:tabular-nums;}

.whomp-shop__pips{display:flex;gap:4px;}
.whomp-shop__pip{width:11px;height:11px;border-radius:3px;background:rgba(255,255,255,0.14);
  border:1px solid rgba(255,255,255,0.2);}
.whomp-shop__pip.whomp-pip-filled{background:linear-gradient(135deg,#ff2f7e,#24f0ff);border-color:transparent;}

.whomp-shop__cardFooter{display:flex;align-items:center;justify-content:space-between;gap:8px;}
.whomp-shop__buyBtn{padding:7px 14px;border-radius:10px;border:none;font-weight:800;font-size:12.5px;
  letter-spacing:0.03em;cursor:pointer;color:#0a0714;
  background:linear-gradient(90deg,#ffd23f,#ff8f3f);transition:transform 90ms ease-out,filter 120ms ease-out;}
.whomp-shop__buyBtn:hover:not(:disabled){filter:brightness(1.08);transform:translateY(-1px);}
.whomp-shop__buyBtn:disabled{opacity:0.35;cursor:default;background:rgba(255,255,255,0.14);color:rgba(255,255,255,0.5);}
.whomp-shop__maxedTag{font-size:11px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;
  color:#ffcf3f;}
`;function hD(e){if(e.getElementById(pD))return;let t=e.createElement(`style`);t.id=pD,t.textContent=mD,e.head.appendChild(t)}var gD=class{meta;bus;doc;root;goldEl;tabButtons;gridEl;open_=!1;tab=`power`;keydownHandler;win;constructor(e,t,n){this.meta=t,this.bus=n;let r=e.ownerDocument;if(!r)throw Error(`ShopPanel: parent has no ownerDocument`);this.doc=r,hD(r),this.root=r.createElement(`div`),this.root.className=`whomp-shop`;let i=r.createElement(`div`);i.className=`whomp-shop__panel`;let a=r.createElement(`div`);a.className=`whomp-shop__header`;let o=r.createElement(`div`);o.className=`whomp-shop__titleWrap`;let s=r.createElement(`div`);s.className=`whomp-shop__title`,s.textContent=`Shopkeeper`;let c=r.createElement(`div`);c.className=`whomp-shop__tagline`,c.textContent=`No refunds. He was very clear about that.`,o.appendChild(s),o.appendChild(c);let l=r.createElement(`div`);l.className=`whomp-shop__headerRight`,this.goldEl=r.createElement(`div`),this.goldEl.className=`whomp-shop__gold`;let u=r.createElement(`button`);u.type=`button`,u.className=`whomp-shop__close`,u.textContent=`✕`,u.addEventListener(`click`,()=>this.close()),l.appendChild(this.goldEl),l.appendChild(u),a.appendChild(o),a.appendChild(l);let d=r.createElement(`div`);d.className=`whomp-shop__tabs`;let f=this.buildTabButton(`power`,`Power`),p=this.buildTabButton(`supplies`,`Supplies`);this.tabButtons={power:f,supplies:p},d.appendChild(f),d.appendChild(p),this.gridEl=r.createElement(`div`),this.gridEl.className=`whomp-shop__grid`,i.appendChild(a),i.appendChild(d),i.appendChild(this.gridEl),this.root.appendChild(i),e.appendChild(this.root),this.win=r.defaultView??void 0,this.keydownHandler=e=>this.onKeydown(e),this.win?.addEventListener(`keydown`,this.keydownHandler),this.syncTabButtons()}get isOpen(){return this.open_}get activeTab(){return this.tab}open(){this.open_||(this.open_=!0,this.root.style.display=`flex`,this.renderHeader(),this.renderGrid())}close(){this.open_&&(this.open_=!1,this.root.style.display=`none`)}toggle(){this.open_?this.close():this.open()}setTab(e){this.tab!==e&&(this.tab=e,this.syncTabButtons(),this.renderGrid())}buy(e){let t=fD(this.meta,this.bus,e);return t&&(this.renderHeader(),this.renderGrid()),t}dispose(){this.win?.removeEventListener(`keydown`,this.keydownHandler),this.root.remove()}buildTabButton(e,t){let n=this.doc.createElement(`button`);return n.type=`button`,n.className=`whomp-shop__tab`,n.textContent=t,n.addEventListener(`click`,()=>this.setTab(e)),n}syncTabButtons(){Object.keys(this.tabButtons).forEach(e=>{this.tabButtons[e].classList.toggle(`whomp-active`,e===this.tab)})}renderHeader(){this.goldEl.textContent=`● ${this.meta.gold}`}renderGrid(){this.gridEl.textContent=``,(this.tab===`power`?oD:sD).forEach((e,t)=>this.gridEl.appendChild(this.buildCard(e,t)))}buildCard(e,t){let n=uD(this.meta,e.id),r=this.doc.createElement(`div`);r.className=`whomp-shop__card`,n.maxed&&r.classList.add(`whomp-maxed`),r.style.setProperty(`--stagger`,`${Math.min(t*30,300)}ms`);let i=this.doc.createElement(`div`);i.className=`whomp-shop__cardName`,i.textContent=e.name;let a=this.doc.createElement(`div`);a.className=`whomp-shop__cardDesc`,a.textContent=e.desc;let o=this.doc.createElement(`div`);o.className=`whomp-shop__pips`;for(let e=0;e<n.ranks;e++){let t=this.doc.createElement(`div`);t.className=e<n.rank?`whomp-shop__pip whomp-pip-filled`:`whomp-shop__pip`,o.appendChild(t)}if(r.appendChild(i),r.appendChild(a),r.appendChild(o),e.lane===`qol`){let t=dD(this.meta,e.id),n=this.doc.createElement(`div`);n.className=`whomp-shop__qolLine`,n.textContent=t.base>0?`${t.base} free + ${t.bought} bought = ${t.total}`:`${t.bought} bought = ${t.total}`,r.appendChild(n)}let s=this.doc.createElement(`div`);if(s.className=`whomp-shop__cardFooter`,n.maxed){let e=this.doc.createElement(`div`);e.className=`whomp-shop__maxedTag`,e.textContent=`Maxed`,s.appendChild(e)}else{let t=this.doc.createElement(`button`);t.type=`button`,t.className=`whomp-shop__buyBtn`,t.textContent=`● ${n.nextCost??0}`,t.disabled=!n.canAfford,t.addEventListener(`click`,()=>this.buy(e.id)),s.appendChild(t)}return r.appendChild(s),r}currentBuyButtons(){return Array.from(this.gridEl.querySelectorAll(`.whomp-shop__buyBtn`))}onKeydown(e){if(!this.open_)return;if(e.key===`Escape`){e.preventDefault(),this.close();return}if(e.key===`1`){e.preventDefault(),this.setTab(`power`);return}if(e.key===`2`){e.preventDefault(),this.setTab(`supplies`);return}let t=this.currentBuyButtons();if(t.length===0)return;let n=this.doc.activeElement,r=t.indexOf(n);e.key===`ArrowRight`||e.key===`ArrowDown`?(e.preventDefault(),t[r<0?0:(r+1)%t.length].focus()):(e.key===`ArrowLeft`||e.key===`ArrowUp`)&&(e.preventDefault(),t[r<0?t.length-1:(r-1+t.length)%t.length].focus())}};function _D(e){let t=e.lifetime,n=Object.values(v_).map(e=>({levelId:e.id,name:e.name,clears:t.clears[e.id]??0}));return{runs:t.runs,kills:t.kills,bosses:t.bosses,chests:t.chests,deaths:t.deaths,bestTimeSec:t.bestTimeSec,goldBanked:t.gold,perLevel:n}}function vD(e){return Object.values(y_).map(t=>({id:t.id,name:t.name,desc:t.desc,unlocked:e.hasAchievement(t.id)}))}function yD(e){let t=Math.max(0,Math.floor(e)),n=Math.floor(t/60),r=t%60;return`${String(n).padStart(2,`0`)}:${String(r).padStart(2,`0`)}`}var bD=`whomp-stats-style`,xD=`
.whomp-stats{position:fixed;inset:0;z-index:900;display:none;
  align-items:center;justify-content:center;
  background:radial-gradient(ellipse at center,rgba(20,10,35,0.72),rgba(6,4,14,0.92));
  font-family:'Segoe UI',system-ui,-apple-system,sans-serif;color:#fff;}

.whomp-stats__panel{width:min(920px,92vw);max-height:88vh;display:flex;flex-direction:column;
  border-radius:26px;padding:22px 26px 26px;gap:16px;overflow-y:auto;
  background:linear-gradient(180deg,rgba(30,20,48,0.97),rgba(14,10,26,0.97));
  border:3px solid rgba(255,255,255,0.14);
  box-shadow:0 0 0 1px rgba(255,255,255,0.05) inset,0 20px 50px rgba(0,0,0,0.55);}

.whomp-stats__header{display:flex;align-items:flex-start;justify-content:space-between;gap:14px;}
.whomp-stats__title{font-size:22px;font-weight:900;letter-spacing:0.06em;text-transform:uppercase;
  background:linear-gradient(90deg,#ff2f7e,#24f0ff);-webkit-background-clip:text;background-clip:text;
  color:transparent;}
.whomp-stats__close{width:32px;height:32px;border-radius:10px;border:2px solid rgba(255,255,255,0.2);
  background:rgba(255,255,255,0.06);color:#fff;font-weight:800;font-size:15px;cursor:pointer;
  display:flex;align-items:center;justify-content:center;transition:background 120ms ease-out;}
.whomp-stats__close:hover{background:rgba(255,255,255,0.16);}

.whomp-stats__sectionTitle{font-size:13px;font-weight:800;letter-spacing:0.16em;
  text-transform:uppercase;color:#24f0ff;margin-top:4px;}

.whomp-stats__tiles{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px;}
.whomp-stats__tile{padding:10px 12px;border-radius:14px;background:rgba(255,255,255,0.04);
  border:2px solid rgba(255,255,255,0.1);display:flex;flex-direction:column;gap:3px;}
.whomp-stats__tileValue{font-size:20px;font-weight:900;font-variant-numeric:tabular-nums;}
.whomp-stats__tileLabel{font-size:10px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;
  color:rgba(255,255,255,0.5);}

.whomp-stats__levels{display:flex;flex-direction:column;gap:6px;}
.whomp-stats__levelRow{display:flex;align-items:center;justify-content:space-between;
  padding:8px 14px;border-radius:12px;background:rgba(255,255,255,0.03);
  border:1px solid rgba(255,255,255,0.08);font-size:13px;}
.whomp-stats__levelName{font-weight:700;}
.whomp-stats__levelClears{font-weight:800;color:#ffd23f;font-variant-numeric:tabular-nums;}

.whomp-stats__achieveGrid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:12px;}
.whomp-stats__achieve{padding:12px 14px;border-radius:14px;display:flex;flex-direction:column;gap:5px;
  border:2px solid rgba(255,255,255,0.12);background:rgba(255,255,255,0.03);}
.whomp-stats__achieve.whomp-lit{border-color:rgba(63,240,138,0.55);background:rgba(63,240,138,0.08);}
.whomp-stats__achieve.whomp-locked{opacity:0.5;filter:grayscale(0.5);}
.whomp-stats__achieveName{font-size:13px;font-weight:800;}
.whomp-stats__achieveDesc{font-size:11px;line-height:1.35;color:rgba(255,255,255,0.62);}
.whomp-stats__achieveTag{font-size:10px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;
  align-self:flex-start;padding:2px 8px;border-radius:999px;}
.whomp-stats__achieve.whomp-lit .whomp-stats__achieveTag{color:#0a0714;background:#3ff08a;}
.whomp-stats__achieve.whomp-locked .whomp-stats__achieveTag{color:rgba(255,255,255,0.5);
  background:rgba(255,255,255,0.08);}
`;function SD(e){if(e.getElementById(bD))return;let t=e.createElement(`style`);t.id=bD,t.textContent=xD,e.head.appendChild(t)}var CD=class{meta;doc;root;bodyEl;open_=!1;keydownHandler;win;constructor(e,t){this.meta=t;let n=e.ownerDocument;if(!n)throw Error(`StatsPage: parent has no ownerDocument`);this.doc=n,SD(n),this.root=n.createElement(`div`),this.root.className=`whomp-stats`;let r=n.createElement(`div`);r.className=`whomp-stats__panel`;let i=n.createElement(`div`);i.className=`whomp-stats__header`;let a=n.createElement(`div`);a.className=`whomp-stats__title`,a.textContent=`Records`;let o=n.createElement(`button`);o.type=`button`,o.className=`whomp-stats__close`,o.textContent=`✕`,o.addEventListener(`click`,()=>this.close()),i.appendChild(a),i.appendChild(o),this.bodyEl=n.createElement(`div`),this.bodyEl.style.display=`contents`,r.appendChild(i),r.appendChild(this.bodyEl),this.root.appendChild(r),e.appendChild(this.root),this.win=n.defaultView??void 0,this.keydownHandler=e=>this.onKeydown(e),this.win?.addEventListener(`keydown`,this.keydownHandler)}get isOpen(){return this.open_}open(){this.open_=!0,this.root.style.display=`flex`,this.render()}close(){this.open_&&(this.open_=!1,this.root.style.display=`none`)}toggle(){this.open_?this.close():this.open()}dispose(){this.win?.removeEventListener(`keydown`,this.keydownHandler),this.root.remove()}onKeydown(e){this.open_&&e.key===`Escape`&&(e.preventDefault(),this.close())}render(){this.bodyEl.textContent=``;let e=_D(this.meta),t=vD(this.meta);this.bodyEl.appendChild(this.buildSectionTitle(`Lifetime`)),this.bodyEl.appendChild(this.buildTiles([{label:`Runs`,value:String(e.runs)},{label:`Kills`,value:String(e.kills)},{label:`Bosses`,value:String(e.bosses)},{label:`Chests`,value:String(e.chests)},{label:`Deaths`,value:String(e.deaths)},{label:`Best Run`,value:yD(e.bestTimeSec)},{label:`Gold Banked`,value:String(e.goldBanked)}])),this.bodyEl.appendChild(this.buildSectionTitle(`Clears By Level`)),this.bodyEl.appendChild(this.buildLevels(e.perLevel)),this.bodyEl.appendChild(this.buildSectionTitle(`Achievements (${t.filter(e=>e.unlocked).length}/${t.length})`)),this.bodyEl.appendChild(this.buildAchievements(t))}buildSectionTitle(e){let t=this.doc.createElement(`div`);return t.className=`whomp-stats__sectionTitle`,t.textContent=e,t}buildTiles(e){let t=this.doc.createElement(`div`);t.className=`whomp-stats__tiles`;for(let n of e){let e=this.doc.createElement(`div`);e.className=`whomp-stats__tile`;let r=this.doc.createElement(`div`);r.className=`whomp-stats__tileValue`,r.textContent=n.value;let i=this.doc.createElement(`div`);i.className=`whomp-stats__tileLabel`,i.textContent=n.label,e.appendChild(r),e.appendChild(i),t.appendChild(e)}return t}buildLevels(e){let t=this.doc.createElement(`div`);t.className=`whomp-stats__levels`;for(let n of e){let e=this.doc.createElement(`div`);e.className=`whomp-stats__levelRow`;let r=this.doc.createElement(`div`);r.className=`whomp-stats__levelName`,r.textContent=n.name;let i=this.doc.createElement(`div`);i.className=`whomp-stats__levelClears`,i.textContent=`${n.clears} clear${n.clears===1?``:`s`}`,e.appendChild(r),e.appendChild(i),t.appendChild(e)}return t}buildAchievements(e){let t=this.doc.createElement(`div`);t.className=`whomp-stats__achieveGrid`;for(let n of e){let e=this.doc.createElement(`div`);e.className=`whomp-stats__achieve ${n.unlocked?`whomp-lit`:`whomp-locked`}`;let r=this.doc.createElement(`div`);r.className=`whomp-stats__achieveName`,r.textContent=n.name;let i=this.doc.createElement(`div`);i.className=`whomp-stats__achieveDesc`,i.textContent=n.desc;let a=this.doc.createElement(`div`);a.className=`whomp-stats__achieveTag`,a.textContent=n.unlocked?`Unlocked`:`Locked`,e.appendChild(r),e.appendChild(i),e.appendChild(a),t.appendChild(e)}return t}},wD=Object.values(__),TD=Math.max(...wD.map(e=>e.baseStats.maxHp)),ED=Math.max(...wD.map(e=>e.baseStats.speed)),DD=Math.max(...wD.map(e=>e.baseStats.might));function OD(e){return{hpFrac:TD>0?e.baseStats.maxHp/TD:0,speedFrac:ED>0?e.baseStats.speed/ED:0,mightFrac:DD>0?e.baseStats.might/DD:0}}function kD(e,t){if(e.unlockedFromStart||t.has(e.id))return{locked:!1,unlockHint:null};let n=Object.values(y_).find(t=>t.unlocks?.character===e.id);return{locked:!0,unlockHint:n?n.desc:`Locked.`}}var AD=68,jD=56;function MD(e){let t=0;for(let n=0;n<e.length;n++)t=t*31+e.charCodeAt(n)>>>0;return`hsl(${t%360}, ${AD}%, ${jD}%)`}var ND=`whomp-charcard-style`,PD=`
.whomp-charcard{width:220px;padding:16px;border-radius:20px;
  background:linear-gradient(180deg,rgba(30,20,48,0.95),rgba(14,10,26,0.95));
  border:3px solid rgba(255,255,255,0.14);display:flex;flex-direction:column;gap:10px;
  font-family:'Segoe UI',system-ui,-apple-system,sans-serif;color:#fff;
  box-shadow:0 10px 26px rgba(0,0,0,0.4);transition:opacity 150ms ease-out,filter 150ms ease-out;}
.whomp-charcard.whomp-locked{opacity:0.55;filter:grayscale(0.6);}

.whomp-charcard__swatch{width:100%;height:90px;border-radius:14px;
  border:2px solid rgba(255,255,255,0.18);box-shadow:0 4px 0 rgba(0,0,0,0.3) inset;}

.whomp-charcard__name{font-size:17px;font-weight:900;letter-spacing:0.02em;}
.whomp-charcard__desc{font-size:12px;color:rgba(255,255,255,0.7);line-height:1.35;}

.whomp-charcard__section{display:flex;flex-direction:column;gap:2px;}
.whomp-charcard__label{font-size:10px;font-weight:800;letter-spacing:0.1em;text-transform:uppercase;
  color:#24f0ff;}
.whomp-charcard__value{font-size:12.5px;font-weight:700;}
.whomp-charcard__sub{font-size:11px;color:rgba(255,255,255,0.55);}

.whomp-charcard__bars{display:flex;flex-direction:column;gap:5px;margin-top:2px;}
.whomp-charcard__barRow{display:flex;align-items:center;gap:7px;}
.whomp-charcard__barLabel{font-size:10px;font-weight:800;width:26px;color:rgba(255,255,255,0.55);}
.whomp-charcard__barTrack{flex:1;height:7px;border-radius:4px;background:rgba(255,255,255,0.1);
  overflow:hidden;}
.whomp-charcard__barFill{height:100%;border-radius:4px;background:linear-gradient(90deg,#ff2f7e,#24f0ff);}

.whomp-charcard__action{margin-top:4px;}
.whomp-charcard__selectBtn{width:100%;padding:9px;border-radius:12px;border:none;font-weight:900;
  font-size:13px;letter-spacing:0.06em;text-transform:uppercase;cursor:pointer;color:#0a0714;
  background:linear-gradient(90deg,#ff2f7e,#24f0ff);transition:transform 90ms ease-out,filter 120ms ease-out;}
.whomp-charcard__selectBtn:hover{filter:brightness(1.08);transform:translateY(-1px);}
.whomp-charcard__lockedTag{padding:9px;border-radius:12px;border:2px solid rgba(255,255,255,0.16);
  text-align:center;font-weight:800;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;
  color:rgba(255,255,255,0.5);}
.whomp-charcard__lockedHint{font-size:10.5px;color:rgba(255,255,255,0.45);margin-top:5px;line-height:1.3;
  text-align:center;}
`;function FD(e){if(e.getElementById(ND))return;let t=e.createElement(`style`);t.id=ND,t.textContent=PD,e.head.appendChild(t)}var ID=class{character;meta;onSelect;doc;root;actionEl;constructor(e,t,n,r){this.character=t,this.meta=n,this.onSelect=r;let i=e.ownerDocument;if(!i)throw Error(`CharacterCard: parent has no ownerDocument`);this.doc=i,FD(i),this.root=i.createElement(`div`),this.root.className=`whomp-charcard`;let a=i.createElement(`div`);a.className=`whomp-charcard__swatch`,a.style.background=MD(t.id);let o=i.createElement(`div`);o.className=`whomp-charcard__name`,o.textContent=t.name;let s=i.createElement(`div`);s.className=`whomp-charcard__desc`,s.textContent=t.desc;let c=Gg[t.signatureId],l=this.buildSection(`R — Signature`,c?c.name:t.signatureId,c?c.desc:void 0),u=ap[t.startWeaponId],d=this.buildSection(`Start Weapon`,u?u.name:t.startWeaponId,u?u.desc:void 0),f=this.buildBars(t);this.actionEl=i.createElement(`div`),this.actionEl.className=`whomp-charcard__action`,this.root.appendChild(a),this.root.appendChild(o),this.root.appendChild(s),this.root.appendChild(l),this.root.appendChild(d),this.root.appendChild(f),this.root.appendChild(this.actionEl),e.appendChild(this.root),this.refresh()}get locked(){return kD(this.character,this.meta.unlockedCharacters).locked}refresh(){let e=kD(this.character,this.meta.unlockedCharacters);if(this.root.classList.toggle(`whomp-locked`,e.locked),this.actionEl.textContent=``,e.locked){let t=this.doc.createElement(`div`);t.className=`whomp-charcard__lockedTag`,t.textContent=`Locked`;let n=this.doc.createElement(`div`);n.className=`whomp-charcard__lockedHint`,n.textContent=e.unlockHint??``,this.actionEl.appendChild(t),this.actionEl.appendChild(n)}else{let e=this.doc.createElement(`button`);e.type=`button`,e.className=`whomp-charcard__selectBtn`,e.textContent=`Select`,e.addEventListener(`click`,()=>this.onSelect?.(this.character.id)),this.actionEl.appendChild(e)}}dispose(){this.root.remove()}buildSection(e,t,n){let r=this.doc.createElement(`div`);r.className=`whomp-charcard__section`;let i=this.doc.createElement(`div`);i.className=`whomp-charcard__label`,i.textContent=e;let a=this.doc.createElement(`div`);if(a.className=`whomp-charcard__value`,a.textContent=t,r.appendChild(i),r.appendChild(a),n){let e=this.doc.createElement(`div`);e.className=`whomp-charcard__sub`,e.textContent=n,r.appendChild(e)}return r}buildBars(e){let t=OD(e),n=this.doc.createElement(`div`);return n.className=`whomp-charcard__bars`,n.appendChild(this.buildBarRow(`HP`,t.hpFrac)),n.appendChild(this.buildBarRow(`SPD`,t.speedFrac)),n.appendChild(this.buildBarRow(`MGT`,t.mightFrac)),n}buildBarRow(e,t){let n=this.doc.createElement(`div`);n.className=`whomp-charcard__barRow`;let r=this.doc.createElement(`div`);r.className=`whomp-charcard__barLabel`,r.textContent=e;let i=this.doc.createElement(`div`);i.className=`whomp-charcard__barTrack`;let a=this.doc.createElement(`div`);return a.className=`whomp-charcard__barFill`,a.style.width=`${Math.round(Math.max(0,Math.min(1,t))*100)}%`,i.appendChild(a),n.appendChild(r),n.appendChild(i),n}},LD=`modulepreload`,RD=function(e,t){return new URL(e,t).href},zD={},BD=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=RD(t,n),t=s(t),t in zD)return;zD[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:LD,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};m();var VD=document.getElementById(`app`),HD=UD();HD.setPixelRatio(Math.min(devicePixelRatio,2)),HD.shadowMap.enabled=!0,HD.shadowMap.type=2,VD.appendChild(HD.domElement);function UD(){let e=document.createElement(`canvas`);if(!e.getContext(`webgl2`)){let t=!!(e.getContext(`webgl`)||e.getContext(`experimental-webgl`));throw p(t?`WHOMP needs WebGL2, and this browser only has WebGL1. Update your browser, or turn on hardware acceleration in Settings, then reload.`:`WHOMP cannot start WebGL at all. Turn on hardware acceleration (or update your graphics driver / browser) and reload.`,`webgl2=false webgl1=${t} ua=${navigator.userAgent}`),Error(`WebGL2 unavailable`)}try{return new Nl({antialias:!0})}catch(e){throw p(`WHOMP could not create its graphics context. Turn on hardware acceleration (or update your graphics driver / browser) and reload.`,e instanceof Error?e.stack??e.message:String(e)),e}}var WD=new zl(window);WD.enablePointerLock(HD.domElement);var GD=new Ov(new Ya(58,1,.1,500),X),KD=new F_,qD=Bl(),JD=new Ix(VD,HD),YD=1,XD=null,ZD=null,QD=new NE(VD,{callbacks:{onMasterVolume:()=>XD?.refreshVolumes(),onMusicVolume:()=>XD?.refreshVolumes(),onSfxVolume:()=>XD?.refreshVolumes(),onVoiceVolume:()=>XD?.refreshVolumes(),onScreenshake:e=>{YD=+!!e},onQuality:e=>{HD.setPixelRatio(e===`low`?1:Math.min(devicePixelRatio,2))},onReducedParticles:e=>{ZD?.setReducedParticles(e)},onLookSensitivity:e=>{GD.setLookSensitivityMult(e)},onInvertY:e=>{GD.setInvertY(e)},onCameraFollow:e=>{GD.setCameraFollow(e)}}}),$D=new VT({settings:{get:e=>e===`volume.master`?QD.current.masterVolume:e===`volume.sfx`?QD.current.sfxVolume:e===`volume.music`?QD.current.musicVolume:e===`volume.voice`?QD.current.voiceVolume:1},bus:X});XD=$D,new qT($D,X);var eO=new uE($D),tO=e=>{eO.setMode(e===`play`?`run`:e)},nO=`meadowfall`,rO=`bonkrat`,iO=new _E(VD,{onStart:()=>mO(),onSettings:()=>QD.open()}),aO=new GE(VD,{onGoAgain:()=>mO(),onRetry:()=>hO(nO,rO)}),oO=new gD(VD,KD,X),sO=new CD(VD,KD),cO=DO(),lO=`menu`,uO=null,dO=null,fO=SO(VD);function pO(){lO=`menu`,aO.hide(),TO(),cO.focus(null),iO.show(),tO(`menu`)}function mO(){gO(),aO.hide(),TO(),iO.hide(),lO=`hub`,WD.clearPause(),dO||=_O(),cO.refresh(),dO.enter()}function hO(e,t){nO=e,rO=t,dO&&dO.exit(),iO.hide(),aO.hide(),TO(),cO.focus(null),gO(),uO=xO(e,t,vO()),lO=`run`,tO(`play`)}function gO(){uO&&=(uO.dispose(),null)}function _O(){return new iT({app:VD,renderer:HD,rig:GD,input:WD,frame:qD,initialCharacterId:`bonkrat`,bestTimeSec:()=>KD.lifetime.bestTimeSec,unlockedCharacters:()=>KD.unlockedCharacters,unlockedLevels:()=>KD.unlockedLevels,onStartRun:(e,t)=>hO(e,t),onOpenShop:()=>oO.open(),onOpenStats:()=>sO.open(),onCharacterFocus:e=>cO.focus(e),onCharacterSelect:()=>cO.refresh(),setMusicMode:tO})}function vO(){let e=location.search,t=new URLSearchParams(e),n=Mw(e,new Date);return t.has(`seed`)||n.daily?n.seed:1+Math.floor(Math.random()*2147483645)}var yO=new Il({simulate(e){lO===`run`&&uO?uO.simulate(e):lO===`hub`&&dO&&dO.simulate(e)},render(e,t){bO(),lO===`run`&&uO?uO.render(e,t):lO===`hub`&&dO?(yO.timeScale=1,dO.render(e,t),eO.setIntensity(0)):(yO.timeScale=0,eO.setIntensity(0)),eO.update()}});function bO(){let e=Math.max(VD.clientWidth,1),t=Math.max(VD.clientHeight,1),n=new B;HD.getSize(n),(n.x!==e||n.y!==t)&&(HD.setSize(e,t,!0),GD.camera.aspect=e/t,GD.camera.updateProjectionMatrix())}{let e=new URLSearchParams(location.search),t=e.get(`level`)===`sunkenSteps`?`sunkenSteps`:`meadowfall`;e.has(`bot`)?hO(t,`bonkrat`):pO(),yO.start()}function xO(e,t,n){let r=v_[e]??v_.meadowfall,i=r.id===`sunkenSteps`?`sunkenSteps`:`meadowfall`,a=Nx[r.paletteId],o=__[t]??__.bonkrat,s=[],c=[],l=(e,t)=>{s.push(X.on(e,t))},u=new Nn;u.background=new G(a.bg),u.fog=new Mn(a.bg,a.fogDensity);let d=n,f=new Ou(d,i),p=sv(f,a);u.add(p),u.add(new La(a.hemiSky,a.hemiGround,a.hemiIntensity));let m=new Qa(a.sun,a.sunIntensity);m.position.set(...a.sunPosition),m.castShadow=!0,m.shadow.mapSize.set(2048,2048);let h=m.shadow.camera;h.left=-90,h.right=90,h.top=90,h.bottom=-90,h.far=200,h.updateProjectionMatrix(),u.add(m);let g=o.baseStats.speed/6,_=new qu(Ku({x:0,y:f.heightAt(0,0),z:0,maxHp:o.baseStats.maxHp,hp:o.baseStats.maxHp}),X,g),v=kT(o.id,a);u.add(v);let y=1,b=Object.values(Pp),x=b.map(e=>e.id),S=new ed(b.map(e=>({radius:e.radius,speed:e.speed,hp:e.hp})),X,2048),C=new td(f.bounds,S.arrays.capacity),w=new cd(S,C,f,_.state,x,X),T=new Yf(Px,r,Np,b,X,d),E=new Lv(u,a,b.length,S.arrays.capacity),D=()=>((d=d*16807%2147483647)-1)/2147483646,O=new ep,ee=new tp,k=new Ap(S.arrays.capacity,D),te=new Gv(u,O.capacity,ee.capacity);Df(k.speedDebuff.slowMult);let ne=new Vp(X),re=new cy(u,a,ne.arrays.capacity),ie=new _m({bus:X,rng:D,baseMight:o.baseStats.might,shopBonus:{get:e=>KD.shopStatBonus(e)},unlockedWeaponIds:[...KD.unlockedWeapons],unlockedPassiveIds:[...KD.unlockedPassives],onWeaponChosen:(e,t)=>{t===1?k.addWeapon(e):k.levelUp(e)}});_.state.maxHp*=1+ie.maxHpBonus,_.state.hp=_.state.maxHp,k.addWeapon(o.startWeaponId),l(`playerLanded`,({fallHeight:e})=>{k.notifyLanded(e),y=1-Math.min(.35,e*.04)});let A=new xm(ie,X,{winAtBossSec:Px.finalHordeAtSec}),ae=!1,oe=!1;l(`bossSpawned`,()=>{ae=!0}),l(`bossKilled`,()=>{ae=!1}),l(`waveEvent`,({kind:e})=>{e===`finalHorde`&&(oe=!0)});let se=new ld(_.state,w,f),ce=new ty(u,se.capacity),le=Vf(b,{detonator:w,bus:X,projectiles:se,spawnEnemy:(e,t,n)=>{let i=A.runTimeSec,a=Np,o=r.tuning,s=(1+Math.floor(i/25)*a.hpPer25s)*o.hpMult,c=(1+Math.floor(i/50)*a.speedPer50s)*o.speedMult,l=b[e].damage*(1+Math.floor(i/30)*a.damagePer30s)*o.dmgMult;return S.spawn(e,t,n,s,c,l)},capacity:S.arrays.capacity}),j=new Xm({terrain:f,levelId:i,seed:d,bus:X,combat:w,player:_.state,hurtPlayer:e=>{let t=_.state;t.hp<=0||(t.hp=Math.max(0,t.hp-e),X.emit(`playerDamaged`,{amount:e,hpAfter:t.hp}),t.hp<=0&&X.emit(`playerDied`,{timeSec:A.runTimeSec}))}}),ue=new by(u,j,f),de=new fh({pads:f.launchPads,player:_.state,combat:w,bus:X,applyImpulse:(e,t,n)=>{let r=_.state;r.vx=e,r.vy=t,r.vz=n,r.grounded=!1}}),fe=new wh(f.shrines,r.shrineCount,D,X),pe=new Ny(u,a,fe.shrines.length),me=new kh(VD,fe),he=new Mh,ge=new Fh(he,D,X),_e=new $h(S,ge,b,X),ve=new Hg(S,w,ge,Px,r,b,X,{awardGold:e=>{X.emit(`goldGained`,{amount:e,total:A.gold+e})},surfaces:j,seed:(d^2958424782)>>>0}),ye=new Ry(u,X),be=new Hy(u,b,ve.brainCap,ve.orbCapacity),xe=new tb(u,ge.arrays.capacity);l(`bossKilled`,()=>he.onBossKill());let Se=new gS({bus:X,player:_.state}),Ce=x.indexOf(`warden`),we=new TS({lastRun:Se.lastRun,wardenKindIndex:Ce,spawnChest:(e,t,n)=>ge.spawn(e,f.heightAt(e,t),t,n),horde:S,combat:w,bus:X,player:_.state}),Te=new jS(u,a.player);l(`revenantSpawned`,()=>E.setSkipSlot(we.revenantSlot,!0)),l(`bossSpawned`,({bossId:e})=>E.setSkipSlot(e%65536,!0));let Ee=new tC({player:_.state,terrain:f,bus:X,hurtPlayer:e=>{let t=_.state;t.hp<=0||(t.hp=Math.max(0,t.hp-e),X.emit(`playerDamaged`,{amount:e,hpAfter:t.hp}),t.hp<=0&&X.emit(`playerDied`,{timeSec:A.runTimeSec}))},applyPlayerImpulse:(e,t,n)=>_.applyImpulse(e,t,n),awardGold:e=>{X.emit(`goldGained`,{amount:e,total:A.gold+e})},grantBuffChoices:e=>je.pushPotSequence(e),rng:D,seed:d^7855}),De=new bC(u),Oe={levelOf:e=>k.levelOf(e),has:e=>k.levelOf(e)>0},ke={levelOf:e=>ie.passiveLevelOf(e)},Ae=new CC({weapons:Oe,passives:ke,bus:X});l(`weaponEvolved`,({baseId:e,evolvedId:t})=>k.evolve(e,t)),l(`legendaryChosen`,()=>{ie.extraCards=he.extraDraftCards});let je=new QE(VD,{bus:X,meta:KD,evolution:{weapons:Oe,passives:ke}}),Me=new aD(VD,{bus:X,isFirstRun:KD.lifetime.runs===0,shrines:f.shrines}),Ne=new RE(VD,{onResume:()=>{},onSettings:()=>QD.open(),onAbandon:()=>{(A.mode===`playing`||A.mode===`encore`)&&X.emit(`playerDied`,{timeSec:A.runTimeSec})},canOpen:()=>(A.mode===`playing`||A.mode===`encore`)&&!Ae.pending,isBlocked:()=>QD.isOpen}),Pe={behavior:1,x:0,y:0,z:0,vx:0,vz:10,radius:.35,damage:12,knockback:0,crit:!1,pierce:0,ttlMs:3e3,rangeM:9,tgtX:0,tgtZ:0,aoeRadius:0,arcMs:0,arcH:0,rarity:4},Fe=()=>{w.setOnHit({rng:D,burnChance:he.burnOnHitChance,burnDps:Ah.inferno.params.burnDps,burnMs:Ah.inferno.params.burnMs,freezeChance:he.freezeOnHitChance,freezeMs:Ah.frostbite.params.freezeMs,freezeMult:.05,stunChance:he.shockStunChance,stunMs:Ah.overcharged.params.stunMs,stunMult:0,vengefulChance:he.vengefulGhostChance,slow:(e,t,n)=>k.speedDebuff.apply(e,t,n),spawnVengeful:(e,t)=>{Pe.x=e,Pe.y=f.heightAt(e,t)+.9,Pe.z=t,O.spawn(Pe)}})};Fe(),l(`legendaryChosen`,Fe);let Ie=[0,1].map(()=>{let e=new K(new ia(.5,12,10),new ri({color:a.player,transparent:!0,opacity:.4,depthWrite:!1,blending:2}));return e.frustumCulled=!1,e.visible=!1,u.add(e),e}),M=new mb(X),Le=OO(a.enemy,x),Re=new cx(u,X,f,_.state,Le);Re.setReducedParticles(QD.current.reducedParticles),ZD=Re;let ze=new yb(VD,X),N=new yx(X),Be=new Mx(VD,X),P={player:_,terrain:f,combat:w,hash:C,arrays:S.arrays,bus:X,isPriorityTarget:e=>{let t=b[e].tier;return t===`elite`||t===`miniboss`||t===`boss`}},F=new m_(o.signatureId,P),Ve={...ie.stats},He=new Uint32Array(S.arrays.capacity),Ue=new bw({combat:w,player:_,terrain:f,bus:X,stats:Ve,surfaces:j,slow:(e,t,n,r,i)=>{let a=C.queryCircle(e,t,n,He);for(let e=0;e<a;e++)k.speedDebuff.apply(He[e],r,i)},spawnProjectile:e=>O.spawn(e)}),We=new H_({bus:X,meta:KD});l(`shrineActivated`,()=>{ie.externalLuck=fe.effects.luckBonus,ie.refreshStats(),ie.xpMult=fe.effects.xpMult,A.goldMult=fe.effects.goldMult});let Ge=new Hx(VD,X,_.state.maxHp),Ke=new Yx(VD,ie),qe=new dS(X);u.add(qe.object3D);let Je=new DC(VD,Oe,ke),Ye=new jC(VD,Ae),Xe=new Ew(VD,Ue),Ze=new cw(VD,{terrain:f,palette:a,player:_.state,horde:S.arrays,providers:{shrines:()=>fe.shrines.map(e=>({x:e.x,z:e.z,activated:e.activated})),chests:()=>{let e=ge.arrays,t=[];for(let n=0;n<e.count;n++)e.state[n]!==0&&t.push({x:e.posX[n],z:e.posZ[n],active:e.state[n]===1});return t},extra:()=>{let e=[],t=S.arrays;for(let n=0;n<t.count;n++)t.state[n]!==0&&b[t.kindIndex[n]].tier===`boss`&&e.push({x:t.posX[n],z:t.posZ[n],kind:`boss`});return Ee.lepAlive&&e.push({x:Ee.lepX_,z:Ee.lepZ_,kind:`leprechaun`}),Ee.potActive&&e.push({x:Ee.potX,z:Ee.potZ,kind:`pot`}),we.revenantActive&&e.push({x:we.revenantX,z:we.revenantZ,kind:`revenant`}),e}}});window.__whomp={player:_.state,horde:S.arrays,flow:A,progression:ie,chests:ge.arrays,meta:KD,surfaces:j,leprechaun:Ee,echo:we,evolution:Ae,ultimates:Ue,weapons:k,combat:w,bus:X},new URLSearchParams(location.search).has(`bot`)&&BD(async()=>{let{startKiteBot:e}=await import(`./kiteBot-DEwkEIbt.js`);return{startKiteBot:e}},[],import.meta.url).then(({startKiteBot:e})=>e(_.state,S.arrays,A)),X.emit(`runStarted`,{characterId:o.id,levelId:r.id,seed:d});{let e=Number(new URLSearchParams(location.search).get(`stress`)??0);if(Number.isFinite(e)&&e>0){let t=Math.max(0,x.indexOf(`blob`)),n=Math.min(Math.floor(e),S.arrays.capacity-S.liveCount());for(let e=0;e<n;e++){let r=e/Math.max(1,n)*Math.PI*2,i=12+e%40*.9;S.spawn(t,Math.cos(r)*i,Math.sin(r)*i,1,1,b[t].damage)}}}let Qe={player:_.state,stats:ie.stats,combat:w,projectiles:O,patches:ee,hash:C,arrays:S.arrays,terrain:f,aimYaw:0,surfaces:j,leprechaun:Ee.target,legendary:he},$e={friction:1,damagePerSec:0},et=0,tt=0,nt=!1,rt=!1;c.push(E,te,ce,re,ue,pe,ye,be,xe,Te,De,qe,ne,ie,A,de,_e,ve,Se,Ae,Ue,F,We,M,Re,ze,N,Be,Ge,Ke,Je,Ye,Xe,Ze,me,je,Me,Ne);function it(e){let t=performance.now();if(WD.sample(qD),A.tick(e),(A.mode===`playing`||A.mode===`encore`)&&!Ae.pending){Se.update(e),GD.rotate(qD.lookDeltaX,qD.lookDeltaY),_.speedMult=Ve.speed,_.update(qD,f,e,GD.yaw);let t=_.state;if(j.sample(t.x,t.z,$e),$e.friction<1){let e=$e.friction;t.vx=t.vx*e+et*(1-e),t.vz=t.vz*e+tt*(1-e)}et=t.vx,tt=t.vz,C.rebuild(S.arrays),T.update(e,A.runTimeSec,S,_.state,f,fe.effects.densityMult),w.update(e,A.runTimeSec),_e.update(e,A.runTimeSec,_.state,f),Qe.aimYaw=GD.yaw;let n=ie.stats;Ve.might=n.might,Ve.attackSpeed=n.attackSpeed,Ve.area=n.area,Ve.speed=n.speed,Ve.magnet=n.magnet,Ve.luck=n.luck,Ve.cooldown=n.cooldown,Ve.greed=n.greed,Ve.critChance=n.critChance,Ve.critMult=n.critMult;let r=Ee.potBuffs;Ve.might*=r.mightMult,Ve.attackSpeed*=r.attackSpeedMult,Ve.area*=r.areaMult,Ve.speed*=r.speedMult,Ve.greed*=r.greedMult,Ve.critChance+=r.critChanceAdd,Ve.might*=F.mightMult,Qe.stats=Ve,k.update(e,Qe),O.update(e,C,w,S.arrays,f),ee.update(e,w),j.update(e),de.update(e),S.update(e,_.state,f,C,le),se.update(e),ve.update(e,A.runTimeSec,_.state,f),F.update(e,qD.sigPressed,GD.yaw),qD.ultPressed&&Ue.tryActivate(),Ue.update(e),ge.update(e,_.state),Ee.update(e,A.runTimeSec),we.update(e);let i=t.vx*t.vx+t.vz*t.vz;he.notePlayerMoving(i>.25,e),he.update(e);let a=he.innerPeaceHealPerSec();a>0&&t.hp<t.maxHp&&(t.hp=Math.min(t.maxHp,t.hp+a*e),X.emit(`playerHealed`,{amount:a*e,hpAfter:t.hp})),fe.update(t.x,t.z,qD.interactPressed);let o=ie.stats.magnet*(he.magnetActive()?5:1);ne.update(e,_.state,o),Be.update(e),We.update(e),(qD.moveX!==0||qD.moveZ!==0)&&Me.notifyMoved(),Me.update(A.runTimeSec,t.x,t.z,WD.pointerLocked),je.update(performance.now())}JD.recordSimTime(performance.now()-t)}function at(e,t){M.update(t),ze.update(t,GD.yaw),WD.pointerLocked&&(A.mode===`results`||A.mode===`draft`||Ne.isOpen)&&WD.releaseLock(),yO.timeScale=A.desiredTimeScale*M.timeScaleFactor*he.timeScaleFactor(_.state.hp/_.state.maxHp)*+!Ae.pending*!Ne.isOpen;let n=_.state,r=n.vy>.05?1.25:1;y+=(r-y)*Math.min(1,t*10),v.position.set(n.x,n.y,n.z),v.rotation.y=n.yaw,v.setSquash(y),GD.update(n.x,n.y+1.2,n.z,f,t,n.vx,n.vz),GD.camera.position.x+=M.shakeX*YD,GD.camera.position.y+=M.shakeY*YD,eO.setIntensity(Math.min(1,S.arrays.count/400)),eO.setMode(oe?`finalHorde`:ae?`boss`:`run`),E.update(S.arrays,t),te.update(O,ee,performance.now()/1e3,k.render),ce.update(se,performance.now()/1e3),re.update(ne.arrays,t),ue.update(t),ye.update(t),be.update(S.arrays,ve),pe.update(fe.shrines,t),xe.update(ge.arrays,t),De.update(Ee,t),Te.update(we,t);for(let e=0;e<Ie.length;e++){let t=k.encoreGhosts[e],n=Ie[e];n.visible=t.active,t.active&&n.position.set(t.x,f.heightAt(t.x,t.z)+1,t.z)}if(Re.update(t),N.update(t),qe.update(t,GD.camera),HD.render(u,GD.camera),Ge.setGold(A.gold),Ge.update(A.runTimeSec,performance.now()),Ke.update(),Je.update(),Ye.update(),Xe.update(),Ze.update(performance.now()),me.update(),aO.update(performance.now()),A.mode===`encore`&&!rt&&(rt=!0,wO()),A.mode===`results`&&!nt){nt=!0;let e=A.won;X.emit(`runEnded`,{win:e,timeSec:A.runTimeSec,kills:A.kills,gold:A.gold}),Se.finalize(e),TO(),aO.show({win:e,timeSec:A.runTimeSec,kills:A.kills,gold:A.gold,level:ie.currentLevel})}JD.setCounts({enemies:S.arrays.count,projectiles:O.count,enemyProjectiles:se.count,gems:ne.arrays.count,particles:0}),JD.render()}function ot(){ZD=null;for(let e of s)e();for(let e of c)e.dispose();EO(v);for(let e of Ie)e.geometry.dispose(),e.material.dispose();EO(p),m.shadow.map?.dispose(),u.clear(),window.__whomp&&delete window.__whomp}return{simulate:it,render:at,dispose:ot}}function SO(e){let t=e.ownerDocument.createElement(`div`);return t.style.cssText=`position:fixed;top:20%;left:50%;transform:translateX(-50%) scale(0.6);opacity:0;z-index:45;pointer-events:none;font-family:system-ui;font-weight:900;font-size:64px;letter-spacing:8px;background:linear-gradient(135deg,#ff2f7e,#24f0ff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;transition:opacity 220ms ease-out,transform 260ms cubic-bezier(.34,1.56,.64,1);`,t.textContent=`ENCORE!`,e.appendChild(t),t}var CO;function wO(){fO.style.opacity=`1`,fO.style.transform=`translateX(-50%) scale(1)`,clearTimeout(CO),CO=setTimeout(TO,2400)}function TO(){fO.style.opacity=`0`,fO.style.transform=`translateX(-50%) scale(0.6)`}function EO(e){e.traverse(e=>{let t=e;t.geometry&&t.geometry.dispose();let n=t.material;if(Array.isArray(n))for(let e of n)e.dispose();else n&&n.dispose()})}function DO(){let e=VD.ownerDocument.createElement(`div`);e.style.cssText=`position:fixed;left:20px;top:50%;transform:translateY(-50%);z-index:495;pointer-events:none;display:none;`,VD.appendChild(e);let t=new Map;for(let n of Object.values(__)){let r=new ID(e,n,KD,e=>{dO?.selectCharacter(e),r.refresh()});r.root.style.display=`none`,r.root.style.pointerEvents=`auto`,t.set(n.id,r)}let n=null;return{focus(r){if(r===n)return;if(n){let e=t.get(n);e&&(e.root.style.display=`none`)}n=r;let i=r?t.get(r):void 0;i?(i.refresh(),i.root.style.display=``,e.style.display=``):e.style.display=`none`},refresh(){for(let e of t.values())e.refresh()}}}function OO(e,t){let n=(e>>16&255)/255,r=(e>>8&255)/255,i=(e&255)/255,a=new G,o={h:0,s:0,l:0},s={};for(let e=0;e<t.length;e++){a.setRGB(n,r,i),a.getHSL(o);let c=e*.61803398875%1;a.setHSL((o.h+(c-.5)*.12+1)%1,Math.min(1,o.s*(.9+.2*c)),Math.min(.95,o.l*(.85+.3*c))),s[t[e]]=a.getHex()}return s}