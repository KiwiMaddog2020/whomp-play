import{r as e}from"./a11y-BzYmzXK2.js";import{a as t}from"./whompOfferTheme-vcaMxanP.js";import{Ri as n,ps as r,wa as i}from"./index-BVFnsagk.js";import{$ as a,B as o,Q as s,et as c,s as l,t as u,z as d}from"./evolutions-BQHm9x8l.js";var f=Object.freeze({bolt:`Bolt`,beam:`Beam`,aoeBurst:`Burst`,groundPatch:`Ground`,aura:`Aura`,orbit:`Orbit`,homing:`Homing`,pet:`Pet`,sentry:`Sentry`,railgun:`Railgun`,melee:`Melee`});function p(e){return`#${e.toString(16).padStart(6,`0`)}`}function m(e){return p(e.params?.fxColor??c[e.element])}function h(e){return n[e]?.name??e}function g(e){if(r[e]?.evolved){let t=Object.values(u).find(t=>t.evolvedId===e);return t?`Evolved from ${r[t.baseId]?.name??t.baseId} with ${h(t.passiveId)}.`:`Evolved form.`}let t=Object.values(u).filter(t=>t.baseId===e);return t.length===0?`No evolution line.`:`Evolves into ${t.map(e=>`${r[e.evolvedId]?.name??e.evolvedId} (${h(e.passiveId)})`).join(`, `)} at max level.`}function _(e){let t=r[e],n=s(t),i=a(t);return{id:e,name:t.name,desc:t.desc,evolved:t.evolved===!0,cadence:n,cadenceLabel:d[n],cadenceNote:o[n],weaponClass:i,classLabel:f[i],element:t.element,line:g(e),color:m(t),jumpHref:`?fxGallery=${encodeURIComponent(e)}`}}function v(){return Object.keys(r).map(_)}function y(){return Object.values(i).map(e=>({id:e.id,name:e.name,desc:e.desc,feel:e.feel,cadenceLabel:e.cadence.toUpperCase(),cadenceNote:`${e.cadenceLabel.toLowerCase()} — ${e.feel}`,donorName:r[e.donorWeaponId]?.name??e.donorWeaponId,color:p(e.color)}))}var b=`whomp-codex-style`,x=`
.whomp-codex{position:fixed;inset:0;z-index:965;display:flex;
  align-items:flex-start;justify-content:center;overflow-y:auto;
  background:rgba(6,4,14,0.93);
  font-family:${t};color:#fff;}

.whomp-codex__panel{width:min(1080px,94vw);margin:28px 0 40px;
  display:flex;flex-direction:column;gap:18px;text-align:left;}

.whomp-codex__title{font-size:15px;font-weight:800;letter-spacing:0.24em;
  text-transform:uppercase;color:#24f0ff;text-shadow:0 0 16px rgba(36,240,255,0.55);
  text-align:center;}
.whomp-codex__sub{font-size:12px;font-weight:600;color:rgba(255,255,255,0.5);
  text-align:center;margin-top:-10px;}

.whomp-codex__sectionHead{display:flex;align-items:baseline;gap:10px;
  margin-top:8px;padding-bottom:6px;border-bottom:2px solid rgba(255,255,255,0.12);}
.whomp-codex__sectionName{font-size:12px;font-weight:800;letter-spacing:0.18em;
  text-transform:uppercase;color:rgba(255,255,255,0.82);}
.whomp-codex__sectionCount{font-size:11px;font-weight:700;color:#24f0ff;
  font-variant-numeric:tabular-nums;}
.whomp-codex__sectionBlurb{flex:1;font-size:11px;color:rgba(255,255,255,0.42);
  text-align:right;}

.whomp-codex__grid{display:grid;gap:10px;
  grid-template-columns:repeat(auto-fill,minmax(300px,1fr));}

.whomp-codex__card{display:flex;flex-direction:column;gap:8px;
  padding:12px 14px;border-radius:14px;
  background:linear-gradient(180deg,rgba(30,20,48,0.95),rgba(14,10,26,0.97));
  border:2px solid rgba(255,255,255,0.1);
  border-left-width:5px;}
.whomp-codex__cardHead{display:flex;align-items:center;gap:10px;}
.whomp-codex__cardIcon{flex:0 0 auto;width:44px;height:44px;}
.whomp-codex__cardText{flex:1;min-width:0;}
.whomp-codex__cardName{font-size:14px;font-weight:800;letter-spacing:0.06em;}
.whomp-codex__cardDesc{font-size:11px;color:rgba(255,255,255,0.52);
  line-height:1.35;margin-top:2px;}

.whomp-codex__facts{display:flex;flex-direction:column;gap:3px;}
.whomp-codex__fact{display:flex;align-items:baseline;gap:8px;font-size:11px;}
.whomp-codex__factKey{flex:0 0 62px;font-weight:800;letter-spacing:0.12em;
  text-transform:uppercase;color:rgba(255,255,255,0.38);}
.whomp-codex__factValue{flex:1;color:rgba(255,255,255,0.86);line-height:1.35;
  font-variant-numeric:tabular-nums;}

.whomp-codex__jump{display:inline-block;align-self:flex-start;margin-top:2px;
  padding:6px 11px;border-radius:9px;text-decoration:none;
  font-size:10px;font-weight:800;letter-spacing:0.12em;
  border:2px solid rgba(36,240,255,0.3);background:rgba(36,240,255,0.08);
  color:#24f0ff;cursor:pointer;}
.whomp-codex__jump:hover{background:rgba(36,240,255,0.18);}
.whomp-codex__jump:focus-visible{outline:3px solid #24f0ff;outline-offset:2px;}
.whomp-codex__jump--inert{opacity:0.4;cursor:default;
  border-color:rgba(255,255,255,0.16);background:rgba(255,255,255,0.04);
  color:rgba(255,255,255,0.6);}
.whomp-codex__jump--inert:hover{background:rgba(255,255,255,0.04);}

.whomp-codex__backBtn{margin-top:6px;padding:12px 0;border-radius:14px;border:none;
  background:linear-gradient(90deg,#ff2f7e,#24f0ff);color:#0a0714;font-weight:800;
  font-size:15px;letter-spacing:0.05em;cursor:pointer;font-family:inherit;}
.whomp-codex__backBtn:hover{filter:brightness(1.08);}
.whomp-codex__backBtn:focus-visible{outline:3px solid #fff;outline-offset:3px;}
`;function S(e){if(e.getElementById(b))return;let t=e.createElement(`style`);t.id=b,t.textContent=x,e.head.appendChild(t)}function C(){return!1}var w=class{doc;root;dev;win;keydownHandler;closedFlag=!1;onClose=null;cards=new Map;constructor(t,n={}){let r=t.ownerDocument;if(!r)throw Error(`WeaponCodex: parent has no ownerDocument`);this.doc=r,this.dev=n.dev??C(),S(r),this.root=r.createElement(`div`),this.root.className=`whomp-codex`,e(this.root,`role`,`dialog`),e(this.root,`aria-modal`,`true`),e(this.root,`aria-label`,`Weapon Codex`);let i=r.createElement(`div`);i.className=`whomp-codex__panel`;let a=r.createElement(`div`);a.className=`whomp-codex__title`,a.textContent=`Weapon Codex`;let o=r.createElement(`div`);o.className=`whomp-codex__sub`,o.textContent=`The whole roster, straight out of the registry the sim runs on.`,i.appendChild(a),i.appendChild(o);let s=v(),c=s.filter(e=>!e.evolved),l=s.filter(e=>e.evolved);this.buildSection(i,`Base Weapons`,c.length,`Draftable. Every one of them can be a starting pick.`),this.buildGrid(i,c),this.buildSection(i,`Evolved Forms`,l.length,`Boss-chest only: base at max level, plus the paired tome.`),this.buildGrid(i,l);let u=y();this.buildSection(i,`The Core`,u.length,`The fifth slot. Aimed by hand, never offered by the draft.`),this.buildCoreGrid(i,u);let d=r.createElement(`button`);d.type=`button`,d.className=`whomp-codex__backBtn`,d.textContent=`BACK`,d.addEventListener(`click`,()=>this.close()),i.appendChild(d),this.root.appendChild(i),t.appendChild(this.root),this.win=r.defaultView??void 0,this.keydownHandler=e=>{this.closedFlag||(e.code||e.key)===`Escape`&&(e.preventDefault(),e.stopImmediatePropagation?.(),this.close())},this.win?.addEventListener(`keydown`,this.keydownHandler,!0)}get isClosed(){return this.closedFlag}setOnClose(e){this.onClose=e}close(){if(this.closedFlag)return;this.closedFlag=!0,this.win?.removeEventListener(`keydown`,this.keydownHandler,!0),this.root.remove();let e=this.onClose;this.onClose=null,e?.()}buildSection(e,t,n,r){let i=this.doc,a=i.createElement(`div`);a.className=`whomp-codex__sectionHead`;let o=i.createElement(`div`);o.className=`whomp-codex__sectionName`,o.textContent=t;let s=i.createElement(`div`);s.className=`whomp-codex__sectionCount`,s.textContent=String(n);let c=i.createElement(`div`);c.className=`whomp-codex__sectionBlurb`,c.textContent=r,a.appendChild(o),a.appendChild(s),a.appendChild(c),e.appendChild(a)}buildGrid(e,t){let n=this.doc.createElement(`div`);n.className=`whomp-codex__grid`;for(let e of t)this.buildCard(n,e);e.appendChild(n)}buildCard(e,t){let n=this.doc,i=n.createElement(`div`);i.className=`whomp-codex__card`,i.style.borderLeftColor=t.color;let a=n.createElement(`div`);a.className=`whomp-codex__cardHead`;let o=l(n,t.id,r[t.id]?.rarity??null,!1);o.className=`${o.className} whomp-codex__cardIcon`;let s=n.createElement(`div`);s.className=`whomp-codex__cardText`;let c=n.createElement(`div`);c.className=`whomp-codex__cardName`,c.textContent=t.name,c.style.color=t.color;let u=n.createElement(`div`);u.className=`whomp-codex__cardDesc`,u.textContent=t.desc,s.appendChild(c),s.appendChild(u),a.appendChild(o),a.appendChild(s),i.appendChild(a);let d=n.createElement(`div`);d.className=`whomp-codex__facts`,this.buildFact(d,`Class`,`${t.classLabel} · ${t.element}`),this.buildFact(d,`Cadence`,`${t.cadenceLabel} — ${t.cadenceNote}`),this.buildFact(d,`Line`,t.line),i.appendChild(d),this.buildJump(i,t.jumpHref),e.appendChild(i),this.cards.set(t.id,i)}buildCoreGrid(e,t){let n=this.doc,r=n.createElement(`div`);r.className=`whomp-codex__grid`;for(let e of t){let t=n.createElement(`div`);t.className=`whomp-codex__card`,t.style.borderLeftColor=e.color;let i=n.createElement(`div`);i.className=`whomp-codex__cardHead`;let a=n.createElement(`div`);a.className=`whomp-codex__cardText`;let o=n.createElement(`div`);o.className=`whomp-codex__cardName`,o.textContent=e.name,o.style.color=e.color;let s=n.createElement(`div`);s.className=`whomp-codex__cardDesc`,s.textContent=e.desc,a.appendChild(o),a.appendChild(s),i.appendChild(a),t.appendChild(i);let c=n.createElement(`div`);c.className=`whomp-codex__facts`,this.buildFact(c,`Cadence`,`${e.cadenceLabel} — ${e.cadenceNote}`),this.buildFact(c,`Anchor`,`Balance anchored to ${e.donorName}.`),t.appendChild(c),r.appendChild(t),this.cards.set(e.id,t)}e.appendChild(r)}buildFact(e,t,n){let r=this.doc,i=r.createElement(`div`);i.className=`whomp-codex__fact`;let a=r.createElement(`div`);a.className=`whomp-codex__factKey`,a.textContent=t;let o=r.createElement(`div`);o.className=`whomp-codex__factValue`,o.textContent=n,i.appendChild(a),i.appendChild(o),e.appendChild(i)}buildJump(e,t){let n=this.doc;if(this.dev){let r=n.createElement(`a`);r.className=`whomp-codex__jump`,r.href=t,r.textContent=`SEE IT FIRE`,e.appendChild(r);return}let r=n.createElement(`button`);r.type=`button`,r.className=`whomp-codex__jump whomp-codex__jump--inert`,r.disabled=!0,r.textContent=`SEE IT FIRE — DEV BUILD`,e.appendChild(r)}};function T(e,t={}){return new Promise(n=>{new w(e,t).setOnClose(n)})}export{T as openWeaponCodex};