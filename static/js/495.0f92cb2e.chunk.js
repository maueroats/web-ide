"use strict";(self.webpackChunk_nand2tetris_web=self.webpackChunk_nand2tetris_web||[]).push([[495],{2657:(t,e,s)=>{s.r(e),s.d(e,{Chip:()=>oe,default:()=>le});var i=s(5072),n=s(1058),a=s(6845),r=s(864),o=s(5524),l=s(7239),c=s(2201);class u extends o.tI{width;_memory;_nextData=0;_address=0;get memory(){return this._memory}get address(){return this._address}constructor(t,e){super(["in[16]","load",`address[${t}]`],["out[16]"],e),this.width=t,this._memory=new c.zp(Math.pow(2,this.width))}tick(){const t=this.in("load").voltage();this._address=this.in("address").busVoltage,t&&(this._nextData=this.in().busVoltage,this._memory.set(this._address,this._nextData))}tock(){this.out().busVoltage=this._memory?.get(this._address)??0}eval(){const t=this.in("address").busVoltage;this.out().busVoltage=this._memory?.get(t)??0}at(t){return(0,l.hu)(t<this._memory.size,(()=>`Request out of bounds (${t} >= ${this._memory.size})`)),new d(`${this.name}[${t}]`,t,this._memory)}reset(){this._memory.reset(),super.reset()}}class d extends o.Gc{index;ram;constructor(t,e,s){super(t),this.index=e,this.ram=s}get busVoltage(){return this.ram.get(this.index)}set busVoltage(t){this.ram.set(this.index,t)}}class h extends u{constructor(t){super(3,t)}}class p extends u{constructor(t){super(14,t)}}var g=s(2369),m=s(5150),b=s(9415);class f extends u{constructor(){super(16,"ROM")}async load(t,e){try{(await(0,b.zD)(t,e)).map(((t,e)=>this.at(e).busVoltage=t))}catch(s){throw new Error(`ROM32K Failed to load file ${e}`)}}}class x extends u{static SIZE=c.yJ;static OFFSET=c.GD;constructor(){super(13,"Screen")}}class v extends o.Af{static OFFSET=c.eu;constructor(){super([],["out[16]"],"Keyboard")}getKey(){return this.out().busVoltage}setKey(t){this.out().busVoltage=65535&t}clearKey(){this.out().busVoltage=0}}class y extends o.tI{ram=new p;screen=new x;keyboard=new v;address=0;constructor(){super(["in[16]","load","address[15])"],["out[16]"],"Memory"),this.parts.add(this.keyboard),this.parts.add(this.screen),this.parts.add(this.ram)}tick(){const t=this.in("load").voltage();if(this.address=this.in("address").busVoltage,t){const t=this.in().busVoltage;this.address>=v.OFFSET||(this.address>=x.OFFSET?this.screen.at(this.address-x.OFFSET).busVoltage=t:this.ram.at(this.address).busVoltage=t)}}tock(){this.eval()}eval(){if(!this.ram)return;this.address=this.in("address").busVoltage;let t=0;t=this.address>=v.OFFSET?this.keyboard?.out().busVoltage??0:this.address>=x.OFFSET?this.screen?.at(this.address-x.OFFSET).busVoltage??0:this.ram?.at(this.address).busVoltage??0,this.out().busVoltage=t}in(t){if(t?.startsWith("RAM16K")){const e=(0,m.o5)(t.match(/\[(?<idx>\d+)]/)?.groups?.idx??"0");return this.ram.at(e)}if(t?.startsWith("Screen")){const e=(0,m.o5)(t.match(/\[(?<idx>\d+)]/)?.groups?.idx??"0");return this.screen.at(e)}return super.in(t)}get(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return t.startsWith("RAM16K")?this.at(16383&e):t.startsWith("Screen")?this.at(e&8191+x.OFFSET):t.startsWith("Keyboard")?this.at(v.OFFSET):t.startsWith("Memory")?this.at(e):super.get(t,e)}at(t){return t>=v.OFFSET?this.keyboard.out():t>=x.OFFSET?this.screen.at(t-x.OFFSET):this.ram.at(t)}reset(){this.address=0,this.ram.reset(),this.screen.reset(),super.reset()}}class j extends o.tI{_state=(0,g.Zu)();get state(){return this._state}constructor(){super(["inM[16]","instruction[16]","reset"],["outM[16]","writeM","addressM[15]","pc[15]"])}tick(){const[t,e]=(0,g.aL)(this.cpuInput(),this._state);this._state=t,this.out("writeM").pull(e?o.lj:o.yE),this.out("outM").busVoltage=this._state.ALU??0}tock(){if(!this._state)return;const[t,e]=(0,g.Ff)(this.cpuInput(),this._state);this._state=e,this.out("addressM").busVoltage=t.addressM??0,this.out("outM").busVoltage=t.outM??0,this.out("writeM").pull(t.writeM?o.lj:o.yE),this.out("pc").busVoltage=this._state?.PC??0}cpuInput(){return{inM:this.in("inM").busVoltage,instruction:this.in("instruction").busVoltage,reset:1===this.in("reset").busVoltage}}get(t,e){return t?.startsWith("ARegister")?new o.qP("ARegister",this._state.A):t?.startsWith("DRegister")?new o.qP("DRegister",this._state.D):t?.startsWith("PC")?new o.qP("PC",this._state.PC):super.get(t,e)}reset(){this._state=(0,g.Zu)(),this._state.PC=-1,super.reset()}}class C extends o.Af{#t=new j;#e=new y;#s=new f;constructor(){super(["reset"],[]),this.wire(this.#t,[{from:{name:"reset",start:0},to:{name:"reset",start:0}},{from:{name:"instruction",start:0},to:{name:"instruction",start:0}},{from:{name:"oldOutM",start:0},to:{name:"inM",start:0}},{from:{name:"writeM",start:0},to:{name:"writeM",start:0}},{from:{name:"addressM",start:0},to:{name:"addressM",start:0}},{from:{name:"newInM",start:0},to:{name:"outM",start:0}},{from:{name:"pc",start:0},to:{name:"pc",start:0}}]),this.wire(this.#s,[{from:{name:"pc",start:0},to:{name:"address",start:0}},{from:{name:"instruction",start:0},to:{name:"out",start:0}}]),this.wire(this.#e,[{from:{name:"newInM",start:0},to:{name:"in",start:0}},{from:{name:"writeM",start:0},to:{name:"load",start:0}},{from:{name:"addressM",start:0},to:{name:"address",start:0}},{from:{name:"oldOutM",start:0},to:{name:"out",start:0}}])}eval(){super.eval()}get(t,e){return t.startsWith("PC")||t.startsWith("ARegister")||t.startsWith("DRegister")?this.#t.get(t):t.startsWith("RAM16K")?this.#e.get(t,e):super.get(t,e)}async load(t,e){return await this.#s.load(t,e)}}var w=s(7054);class P extends o.Af{constructor(){super(["a","b"],["out"])}eval(){const t=this.in("a").voltage(),e=this.in("b").voltage(),[s]=function(t,e){return[1===t&&1===e?o.lj:o.yE]}(t,e);this.out().pull(s)}}class V extends o.Af{constructor(){super(["a[16]","b[16]"],["out[16]"])}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage,[s]=function(t,e){return[t&e&65535]}(t,e);this.out().busVoltage=s}}class S extends o.Af{constructor(){super(["in","sel"],["a","b"])}eval(){const t=this.in("in").voltage(),e=this.in("sel").voltage(),[s,i]=function(t,e){return[e===o.yE&&t===o.lj?o.lj:o.yE,e===o.lj&&t===o.lj?o.lj:o.yE]}(t,e);this.out("a").pull(s),this.out("b").pull(i)}}class k extends o.Af{constructor(){super(["in","sel[2]"],["a","b","c","d"])}eval(){const t=this.in("in").voltage(),e=this.in("sel").busVoltage,[s,i,n,a]=function(t,e){return[0===e&&t===o.lj?o.lj:o.yE,1===e&&t===o.lj?o.lj:o.yE,2===e&&t===o.lj?o.lj:o.yE,3===e&&t===o.lj?o.lj:o.yE]}(t,e);this.out("a").pull(s),this.out("b").pull(i),this.out("c").pull(n),this.out("d").pull(a)}}class A extends o.Af{constructor(){super(["in","sel[3]"],["a","b","c","d","e","f","g","h"])}eval(){const t=this.in("in").voltage(),e=this.in("sel").busVoltage,[s,i,n,a,r,l,c,u]=function(t,e){return[0===e&&t===o.lj?o.lj:o.yE,1===e&&t===o.lj?o.lj:o.yE,2===e&&t===o.lj?o.lj:o.yE,3===e&&t===o.lj?o.lj:o.yE,4===e&&t===o.lj?o.lj:o.yE,5===e&&t===o.lj?o.lj:o.yE,6===e&&t===o.lj?o.lj:o.yE,7===e&&t===o.lj?o.lj:o.yE]}(t,e);this.out("a").pull(s),this.out("b").pull(i),this.out("c").pull(n),this.out("d").pull(a),this.out("e").pull(r),this.out("f").pull(l),this.out("g").pull(c),this.out("h").pull(u)}}function E(t,e,s){return[s===o.yE?t:e]}function M(t,e,s,i,n){const a=1&n;return 0===(2&n)?E(t,e,a):E(s,i,a)}class F extends o.Af{constructor(){super(["a","b","sel"],["out"])}eval(){const t=this.in("a").voltage(),e=this.in("b").voltage(),s=this.in("sel").voltage(),[i]=function(t,e,s){return[s===o.yE?t:e]}(t,e,s);this.out().pull(i)}}class I extends o.Af{constructor(){super(["a[16]","b[16]","sel"],["out[16]"])}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage,s=this.in("sel").voltage(),[i]=E(t,e,s);this.out().busVoltage=i}}class O extends o.Af{constructor(){super(["a[16]","b[16]","c[16]","d[16]","sel[2]"],["out[16]"])}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage,s=this.in("c").busVoltage,i=this.in("d").busVoltage,n=this.in("sel").busVoltage,[a]=M(t,e,s,i,n);this.out().busVoltage=a}}class _ extends o.Af{constructor(){super(["a[16]","b[16]","c[16]","d[16]","e[16]","f[16]","g[16]","h[16]","sel[3]"],["out[16]"])}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage,s=this.in("c").busVoltage,i=this.in("d").busVoltage,n=this.in("e").busVoltage,a=this.in("f").busVoltage,r=this.in("g").busVoltage,o=this.in("h").busVoltage,l=this.in("sel").busVoltage,[c]=function(t,e,s,i,n,a,r,o,l){const c=3&l;return 0===(4&l)?M(t,e,s,i,c):M(n,a,r,o,c)}(t,e,s,i,n,a,r,o,l);this.out().busVoltage=c}}class T extends o.Af{constructor(){super(["a","b"],["out"])}eval(){const t=this.in("a").voltage(),e=this.in("b").voltage(),[s]=function(t,e){return[1===t&&1===e?o.yE:o.lj]}(t,e);this.out().pull(s)}}class U extends o.Af{constructor(){super(["a[16]","b[16]"],["out[16]"])}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage;this.out().busVoltage=(0,m.C2)(t,e)}}class R extends o.Af{constructor(){super(["in"],["out"])}eval(){const t=this.in("in").voltage(),[e]=[t===o.yE?o.lj:o.yE];this.out().pull(e)}}class N extends o.Af{constructor(){super(["in[16]"],["out[16]"])}eval(){const[t]=[65535&~this.in().busVoltage];this.out().busVoltage=t}}function L(t,e){return[1===t||1===e?o.lj:o.yE]}class W extends o.Af{constructor(){super(["a","b"],["out"])}eval(){const t=this.in("a").voltage(),e=this.in("b").voltage(),[s]=L(t,e);this.out().pull(s)}}class $ extends o.Af{constructor(){super(["a[16]","b[16]"],["out[16]"])}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage,[s]=function(t,e){return[65535&(t|e)]}(t,e);this.out().busVoltage=s}}class D extends o.Af{constructor(){super(["in[8]"],["out"],"Or8way")}eval(){const t=this.in().busVoltage,[e]=[0===(255&t)?o.yE:o.lj];this.out().pull(e)}}class B extends o.Af{constructor(){super(["a","b"],["out"])}eval(){const t=this.in("a").voltage(),e=this.in("b").voltage(),[s]=function(t,e){return[t===o.lj&&e===o.yE||t===o.yE&&e===o.lj?o.lj:o.yE]}(t,e);this.out().pull(s)}}class z extends o.Af{constructor(){super(["a[16]","b[16]"],["out[16]"])}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage,[s]=function(t,e){return[65535&(t^e)]}(t,e);this.out().busVoltage=s}}function G(t,e){return[t+e&65535]}class H extends o.Af{constructor(){super(["a[16]","b[16]"],["out[16]"],"Add16")}eval(){const t=this.in("a").busVoltage,e=this.in("b").busVoltage,[s]=G(t,e);this.out().busVoltage=s}}var K=s(137);class Z extends o.Af{constructor(){super(["x[16]","y[16]","zx","nx","zy","ny","f","no"],["out[16]"],"ALU")}eval(){const t=this.in("x").busVoltage,e=this.in("y").busVoltage,s=(this.in("zx").busVoltage<<5)+(this.in("nx").busVoltage<<4)+(this.in("zy").busVoltage<<3)+(this.in("ny").busVoltage<<2)+(this.in("f").busVoltage<<1)+(this.in("no").busVoltage<<0),[i]=(0,K.Bb)(s,t,e);this.out().busVoltage=i}}class J extends o.Af{constructor(){super(["x[16]","y[16]","zx","nx","zy","ny","f","no"],["out[16]","zr","ng"],"ALU")}eval(){const t=this.in("x").busVoltage,e=this.in("y").busVoltage,s=(this.in("zx").busVoltage<<5)+(this.in("nx").busVoltage<<4)+(this.in("zy").busVoltage<<3)+(this.in("ny").busVoltage<<2)+(this.in("f").busVoltage<<1)+(this.in("no").busVoltage<<0),[i,n]=(0,K.Bb)(s,t,e),a=n===K.vU.Negative?o.lj:o.yE,r=n===K.vU.Zero?o.lj:o.yE;this.out("out").busVoltage=i,this.out("ng").pull(a),this.out("zr").pull(r)}op(){return(this.in("zx").busVoltage<<5)+(this.in("nx").busVoltage<<4)+(this.in("zy").busVoltage<<3)+(this.in("ny").busVoltage<<2)+(this.in("f").busVoltage<<1)+(this.in("no").busVoltage<<0)}}function q(t,e){return[1===t&&0===e||0===t&&1===e?o.lj:o.yE,1===t&&1===e?o.lj:o.yE]}class X extends o.Af{constructor(){super(["a","b"],["sum","carry"])}eval(){const t=this.in("a").voltage(),e=this.in("b").voltage(),[s,i]=q(t,e);this.out("sum").pull(s),this.out("carry").pull(i)}}class Y extends o.Af{constructor(){super(["a","b","c"],["sum","carry"])}eval(){const t=this.in("a").voltage(),e=this.in("b").voltage(),s=this.in("c").voltage(),[i,n]=function(t,e,s){const[i,n]=q(t,e),[a,r]=q(i,s),[o]=L(n,r);return[a,o]}(t,e,s);this.out("sum").pull(i),this.out("carry").pull(n)}}class Q extends o.Af{constructor(){super(["in[16]"],["out[16]"],"Inc16")}eval(){const t=this.in().busVoltage,[e]=G(t,1);this.out().busVoltage=e}}class tt extends o.tI{bit=o.yE;constructor(t){super(["in","load"],["out"],t)}tick(){this.in("load").voltage()===o.lj&&(this.bit=this.in().voltage())}tock(){this.out().pull(this.bit??0)}reset(){this.bit=o.yE,super.reset()}}class et extends o.tI{bits=0;constructor(t){super(["in[16]","load"],["out[16]"],t)}tick(){this.in("load").voltage()===o.lj&&(this.bits=65535&this.in().busVoltage)}tock(){this.out().busVoltage=65535&this.bits}get(t,e){return t===this.name?this.out():super.get(t,e)}reset(){this.bits=0,super.reset()}}class st extends et{}class it extends o.tI{bits=0;constructor(t){super(["in[16]","load","inc","reset"],["out[16]"],t)}tick(){this.in("reset").voltage()===o.lj?this.bits=0:this.in("load").voltage()===o.lj?this.bits=65535&this.in().busVoltage:this.in("inc").voltage()===o.lj&&(this.bits+=1)}tock(){this.out().busVoltage=65535&this.bits}get(t,e){return t===this.name?this.out():super.get(t,e)}reset(){this.bits=0,super.reset()}}class nt extends o.tI{constructor(t){super(["in"],["out"],t,["t"])}tick(){const t=this.in().voltage();this.pin("t").pull(t)}tock(){const t=this.pin("t").voltage();this.out().pull(t)}}const at=new Map([["Nand",T],["Nand16",U],["Not",R],["Not16",N],["And",P],["And16",V],["Or",W],["Or16",$],["Or8Way",D],["XOr",B],["XOr16",z],["Xor",B],["Xor16",z],["Mux",F],["Mux16",I],["Mux4Way16",O],["Mux8Way16",_],["DMux",S],["DMux4Way",k],["DMux8Way",A],["HalfAdder",X],["FullAdder",Y],["Add16",H],["Inc16",Q],["ALU",J],["ALUNoStat",Z],["DFF",nt],["Bit",tt],["Register",et],["ARegister",et],["DRegister",et],["PC",it],["RAM8",h],["RAM64",class extends u{constructor(t){super(6,t)}}],["RAM512",class extends u{constructor(t){super(9,t)}}],["RAM4K",class extends u{constructor(t){super(12,t)}}],["RAM16K",p],["ROM32K",f],["Screen",x],["Keyboard",v],["CPU",j],["Computer",C],["Memory",y],["ARegister",st],["DRegister",st]].map((t=>{let[e,s]=t;return[e,()=>{const t=new s;return t.name=e,t}]})));function rt(t){const e=at.get(t);return e?(0,w.Ok)(e()):(0,w.UG)(new Error(`Chip ${t} not in builtin registry`))}const ot=t=>{let{A:e,op:s,D:i,out:n,flag:a}=t;return(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{children:"ALU"}),(0,r.jsx)("svg",{width:"250",height:"250",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsxs)("g",{children:[(0,r.jsx)("rect",{x:"1",y:"20",height:"85",width:"70",fill:"black"}),(0,r.jsx)("rect",{x:"1",y:"145",height:"85",width:"70",fill:"black"}),(0,r.jsx)("rect",{x:"180",y:"95",height:"60",width:"70",fill:"black"}),(0,r.jsx)("polygon",{points:"70,10 180,85 180,165 70,240 70,135 90,125 70,115",stroke:"#000",fill:"#6D97AB"}),(0,r.jsx)("text",{xmlSpace:"preserve",textAnchor:"middle",fontFamily:"Noto Sans JP",fontSize:"14",strokeWidth:"0",id:"svg_9",y:"63",x:"35",stroke:"white",fill:"#ffffff",children:e}),(0,r.jsx)("text",{xmlSpace:"preserve",textAnchor:"middle",fontFamily:"Noto Sans JP",fontSize:"14",id:"svg_10",y:"188",x:"35",strokeWidth:"0",stroke:"white",fill:"#ffffff",children:i}),(0,r.jsx)("text",{xmlSpace:"preserve",textAnchor:"middle",fontFamily:"Noto Sans JP",fontSize:"14",id:"svg_11",y:"125",x:"215",strokeWidth:"0",stroke:"white",fill:"#ffffff",children:n}),(0,r.jsx)("text",{xmlSpace:"preserve",textAnchor:"middle",fontFamily:"Noto Sans JP",fontSize:"14",id:"svg_13",y:"125",x:"135",strokeWidth:"0",stroke:"white",fill:"#ffffff",children:K.NM.op[s]??"(??)"})]})})]})};var lt=s(3478),ct=s(1062),ut=s(2869),dt=s(8963);function ht(t,e){if(t instanceof J)return(0,r.jsx)(ot,{A:t.in("x").busVoltage,op:t.op(),D:t.in("y").busVoltage,out:t.out().busVoltage,flag:t.out("zr").voltage()===o.lj?K.vU.Zero:t.out("ng").voltage()===o.lj?K.vU.Negative:K.vU.Positive});if(t instanceof et)return(0,r.jsx)(ut.y,{name:t.name??`Chip ${t.id}`,bits:t.bits});if(t instanceof it)return(0,r.jsx)(ut.y,{name:"PC",bits:t.bits});if(t instanceof v)return(0,r.jsx)(lt.N,{keyboard:t,update:e});if(t instanceof x)return(0,r.jsx)(dt.l,{memory:t.memory});if(t instanceof u)return(0,r.jsx)(ct.zp,{name:t.name,memory:t.memory,format:t instanceof f?"asm":"dec",highlight:t.address});if(t instanceof h)return(0,r.jsxs)("span",{children:["RAM ",t.width]});if(t instanceof j){const e=(0,g.Jx)(t.in("instruction").busVoltage);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(ut.y,{name:"A",bits:t.state.A}),(0,r.jsx)(ut.y,{name:"D",bits:t.state.D}),(0,r.jsx)(ut.y,{name:"PC",bits:t.state.PC}),(0,r.jsx)(ot,{A:e.am?t.in("inM").busVoltage:t.state.A,D:t.state.D,out:t.state.ALU,op:e.op,flag:t.state.flag})]})}const s=[...t.parts].map((t=>ht(t,e))).filter((t=>void 0!==t));return s.length>0?(0,r.jsx)(r.Fragment,{children:s}):void 0}var pt=s(5554),gt=s(1965),mt=s(8177);class bt{signBehaviors=new Map;constructor(t,e){if(at.has(t)){const s=rt(t);if((0,w.IY)(s)){const t=Array.from((0,w.Ok)(s).ins.entries()).concat(Array.from((0,w.Ok)(s).outs.entries()));for(const s of t)this.signBehaviors.set(s.name,!e||!e.includes(s.name))}}}isSigned(t){return this.signBehaviors.get(t)}}const ft=new Map([["Mux4Way16",["sel"]],["Mux8Way16",["sel"]],["DMux4Way",["sel"]],["DMux8Way",["sel"]],["RAM8",["address"]],["RAM64",["address"]],["RAM512",["address"]],["RAM4K",["address"]],["RAM16K",["address"]],["Screen",["address"]],["Memory",["address"]],["CPU",["addressM","pc"]]]),xt=(0,a.createContext)({});function vt(t){return{pin:t,bits:(0,mt.w)(0,t.width).map((e=>[e,t.voltage(e)])).reverse()}}function yt(t){return[...t.entries()].map(vt)}const jt=t=>{const{inPins:e,outPins:s,internalPins:i}=t.sim,n=(a=t.sim.chip[0].name??"",new bt(a,ft.get(a)));var a;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:"\n        table.pinout th {\n          font-weight: bold;\n        }\n\n        table.pinout tbody td:first-child {\n          text-align: right;\n          --font-size: 1rem;\n          width: 0;\n          white-space: nowrap;\n          border-right: var(--border-width) solid var(--table-border-color);\n        }\n\n        table.pinout tbody button {\n          --font-size: 0.875em;\n          font-family: var(--font-family-monospace);\n          max-width: 2em;\n        }\n        "}),(0,r.jsx)("table",{className:"pinout",children:(0,r.jsxs)("tbody",{children:[(0,r.jsx)(Ct,{pins:e,header:"Input pins",toggle:t.toggle,setInputValid:t.setInputValid,displayInfo:n}),(0,r.jsx)(Ct,{pins:s,header:"Output pins",disabled:t.sim.pending,enableEdit:!1,displayInfo:n}),!t.hideInternal&&(0,r.jsx)(Ct,{pins:i,header:"Internal pins",disabled:t.sim.pending,enableEdit:!1,displayInfo:n})]})})]})},Ct=t=>(0,r.jsxs)(r.Fragment,{children:[t.pins.length>0&&(0,r.jsx)("tr",{children:(0,r.jsx)("th",{colSpan:2,children:t.header})}),[...t.pins].map((e=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:e.pin.name}),(0,r.jsx)("td",{children:(0,r.jsx)(wt,{pin:e,toggle:t.toggle,disabled:t.disabled,enableEdit:t.enableEdit,signed:t.displayInfo.isSigned(e.pin.name),setInputValid:t.setInputValid,internal:"Internal pins"===t.header})})]},e.pin.name)))]}),wt=t=>{let{pin:e,toggle:s,disabled:i=!1,enableEdit:n=!0,signed:o=!0,setInputValid:l,internal:c=!1}=t;const[u,d]=(0,a.useState)(!0);let h=!0;const[p,g]=(0,a.useState)(""),m=(0,a.useContext)(xt);m instanceof Pt&&m.registerCallback((()=>{d(!0)}));const b=t=>{h=t,l?.(t)},f=t=>{for(let i=0;i<e.bits.length;i++)e.bits[e.bits.length-i-1][1]!==(t>>i&1)&&s?.(e.pin,i)};return(0,a.useEffect)((()=>{if(!u&&h){let t=0;if(o&&e.bits[0][1]){for(const[s,i]of e.bits)s<e.bits.length-1&&!i&&(t+=2**s);t=-t-1}else{const s=o?e.bits.length-1:e.bits.length;for(const[i,n]of e.bits)i<s&&n&&(t+=2**i)}g(t.toString())}}),[e,u]),(0,r.jsxs)("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"},children:[(0,r.jsx)("fieldset",{role:"group",style:{width:`${e.bits.length}rem`},children:u?e.bits.map((t=>{let[n,a]=t;return(0,r.jsx)("button",{disabled:i,style:c?{backgroundColor:"grey"}:{},onClick:()=>s?.(e.pin,n),"data-testid":`pin-${n}`,children:a},n)})):(0,r.jsx)("input",{className:"colored",value:p,onChange:t=>{(t=>{const s=t.replace(/[^\d]/g,""),i=o&&"-"===t[0]?`-${s}`:s;if(g(i),isNaN(parseInt(i)))b(!1);else{const t=parseInt(i);!o&&t>=Math.pow(2,e.bits.length)||o&&(t>=Math.pow(2,e.bits.length-1)||t<-Math.pow(2,e.bits.length-1))?b(!1):(f(t),b(!0))}})(t.target.value)},disabled:!n})}),e.bits.length>1&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{style:{width:"1em"}}),(0,r.jsx)("button",{style:{maxWidth:"3em",margin:0},onClick:()=>{d(!u)},children:u?"dec":"bin"})]})]})};class Pt{callbacks=[];registerCallback(t){this.callbacks.push(t)}reset(){for(const t of this.callbacks)t()}}var Vt=s(6604),St=s(6791),kt=s(5692),At=s(554),Et=s(168),Mt=s(9814),Ft=s(3484);const It='\nHdl <: Base{\n  Root := Chip\n  Chip = "CHIP" Name OpenBrace ChipBody CloseBrace\n  ChipBody = InList? OutList? PartList ClockedList?\n  InList = "IN" PinList Semi\n  OutList = "OUT" PinList Semi\n  PartList = BuiltinPart | Parts\n  PinList = List<PinDecl, Comma>\n  PinDecl = Name PinWidth?\n  PinWidth = OpenSquare decNumber CloseSquare\n  BuiltinPart = "BUILTIN" Semi\n  Parts = "PARTS:" Part*\n  Part = Name "(" Wires ")" Semi\n  Wires = List<Wire, Comma>\n  Wire = WireSide Equal (WireSide | True | False) \n  WireSide = Name SubBus? \n  SubBus = OpenSquare decNumber subBusRest? CloseSquare\n  subBusRest = ".." decNumber\n  ClockedList = "CLOCKED" SimplePinList Semi\n  SimplePinList = List<Name, Comma>\n}',Ot=Mt.Z.grammar(It,Ft.y1),_t=Ot.extendSemantics(Ft.rJ);_t.addAttribute("SubBus",{SubBus(t,e,s,i){const n=e.value;return{start:n,end:s.child(0)?.child(1)?.value??n}}}),_t.addAttribute("WireSide",{WireSide(t,e){let{name:s}=t;const{start:i,end:n}=e.child(0)?.SubBus??{start:void 0,end:void 0};return{pin:s,start:i,end:n,span:(0,Ft.yP)(this.source)}}}),_t.addAttribute("Wire",{Wire(t,e,s){const i=s.isTerminal()?{pin:s.sourceString}:s.WireSide;return{lhs:t.WireSide,rhs:i}}}),_t.addAttribute("Wires",{Wires:t=>t.asIteration().children.map((t=>t.Wire))}),_t.addAttribute("Part",{Part(t,e,s,i,n){let{name:a}=t,{Wires:r}=s;return{name:a,wires:r,span:(0,Ft.yP)(this.source)}}}),_t.addAttribute("Parts",{Parts:(t,e)=>e.children.map((t=>t.Part)),BuiltinPart:(t,e)=>"BUILTIN"}),_t.addAttribute("PartList",{PartList:t=>t.Parts}),_t.addAttribute("Clocked",{ClockedList:(t,e,s)=>e.asIteration().children.map((t=>{let{sourceString:e}=t;return e}))??[]}),_t.addAttribute("PinDecl",{PinDecl(t,e){let{name:s}=t;return{pin:s,width:e.child(0)?.child(1)?.value??1}}}),_t.addAttribute("PinList",{PinList:t=>t.asIteration().children.map((t=>t.PinDecl))}),_t.addAttribute("Chip",{Chip:(t,e,s,i,n)=>({name:{value:e.sourceString,span:(0,Ft.yP)(e.source)},ins:i.child(0).child(0)?.child(1)?.PinList??[],outs:i.child(1).child(0)?.child(1)?.PinList??[],parts:i.child(2).PartList??[],clocked:i.child(3).child(0)?.Clocked})}),_t.addAttribute("Root",{Root:t=>t.child(0)?.Chip});const Tt={parser:Ot,grammar:It,semantics:_t,parse:(0,Ft.Pz)(Ot,_t,(t=>t.Chip))};function Ut(t,e){if(void 0!==e){if(e>=t)return e-t+1;if(t>0&&0===e)return 1;throw new Error(`Bus specification has start > end (${t} > ${e})`)}}async function Rt(t,e){if(function(t){return at.has(t)}(t)||void 0===e)return rt(t);try{const s=await e.readFile(`${t}.hdl`),i=Tt.parse(s);let n;if((0,w.IY)(i)){const t=await Bt((0,w.Ok)(i),e);n=(0,w.dZ)(t)?(0,w.UG)(new Error((0,w.UG)(t).message)):t}else n=(0,w.UG)(new Error("HDL Was not parsed"));return n}catch(s){return(0,w.UG)(new Error(`Could not load chip ${t}.hdl`))}}function Nt(t){return"false"===t.toLowerCase()||"true"===t.toLowerCase()||"0"===t||"1"===t}function Lt(t){if(void 0!=t.start&&void 0!=t.end){const e=[];for(let s=t.start;s<=t.end;s++)e.push(s);return e}return[-1]}function Wt(t,e){let s=null;const i=e.get(t.pin);if(i)if(i.has(-1))s=t.start??-1;else if(void 0!==t.start&&void 0!==t.end)for(const n of Lt(t))i.has(n)&&(s=n),i.add(n);else i.add(-1);else e.set(t.pin,new Set(Lt(t)));return null!=s?(0,w.UG)({message:`Cannot write to pin ${t.pin}${-1!=s?`[${s}]`:""} multiple times`,span:t.span}):(0,w.Ok)(!0)}function $t(t,e){return e.isOutPin(t.pin)?(0,w.UG)({message:"Cannot use output pin as input",span:t.span}):e.isInPin(t.pin)||void 0==t.start?(0,w.Ok)(!0):(0,w.UG)({message:Nt(t.pin)?"Cannot use sub bus of constant bus":`Cannot use sub bus of internal pin ${t.pin} as input`,span:t.span})}function Dt(t,e){return e.isInPin(t.pin)?(0,w.UG)({message:`Cannot write to input pin ${t.pin}`,span:t.span}):Nt(t.pin)?(0,w.UG)({message:"Cannot write to constant bus",span:t.span}):(0,w.Ok)(!0)}async function Bt(t,e,s){if(s&&t.name.value!=s)return(0,w.UG)({message:"Wrong chip name",span:t.name.span});if("BUILTIN"===t.parts)return rt(t.name.value);const i=new o.Af(t.ins.map((t=>{let{pin:e,width:s}=t;return{pin:e.toString(),width:s}})),t.outs.map((t=>{let{pin:e,width:s}=t;return{pin:e.toString(),width:s}})),t.name.value,[],t.clocked),n=new Map,a=new Map;for(const o of t.parts){const t=await Rt(o.name,e);if((0,w.dZ)(t))return(0,w.UG)({message:`Undefined chip name: ${o.name}`,span:o.span});const s=(0,w.Ok)(t);if(s.name==i.name)return(0,w.UG)({message:`Cannot use chip ${s.name} to implement itself`,span:o.span});const l=[],c=new Map;for(const{lhs:e,rhs:r}of o.wires){const t=!(i.isInPin(r.pin)||i.isOutPin(r.pin)||Nt(r.pin));if(s.isInPin(e.pin)){let s=Wt(e,c);if((0,w.dZ)(s))return s;if(s=$t(r,i),(0,w.dZ)(s))return s;if(t){const t=n.get(r.pin);void 0==t?n.set(r.pin,{isDefined:!1,firstUse:r.span}):t.firstUse=t.firstUse.start<r.span.start?t.firstUse:r.span}}else{if(!s.isOutPin(e.pin))return(0,w.UG)({message:`Undefined input/output pin name: ${e.pin}`,span:e.span});{const t=Dt(r,i);if((0,w.dZ)(t))return t;if(i.isOutPin(r.pin)){const t=Wt(r,a);if((0,w.dZ)(t))return t}else{if(void 0!==r.start||void 0!==r.end)return(0,w.UG)({message:`Cannot write to sub bus of internal pin ${r.pin}`,span:r.span});const t=n.get(r.pin);if(void 0==t)n.set(r.pin,{isDefined:!0,firstUse:r.span});else{if(t.isDefined)return(0,w.UG)({message:i.isOutPin(r.pin)?`Cannot write to output pin ${r.pin} multiple times`:`Internal pin ${r.pin} already defined`,span:r.span});t.isDefined=!0}}}}l.push({to:{name:e.pin.toString(),start:e.start??0,width:Ut(e.start??0,e.end)},from:{name:r.pin.toString(),start:r.start??0,width:Ut(r.start??0,r.end)}})}try{i.wire(s,l)}catch(r){return(0,w.UG)(r)}}for(const[o,l]of n)if(!l.isDefined)return(0,w.UG)({message:`Undefined internal pin name: ${o}`,span:l.firstUse});return(0,w.Ok)(i)}var zt=s(5424),Gt=s(4430),Ht=s(2836),Kt=s(4913);const Zt=[["01","Project 1"],["02","Project 2"],["03","Project 3"],["05","Project 5"]];function Jt(t){return t in Et.CHIP_ORDER?Et.CHIP_ORDER[t]:Et.BUILTIN_CHIP_PROJECTS[t].concat(Et.CHIP_PROJECTS[t])}function qt(t){return Object.values(Et.BUILTIN_CHIP_PROJECTS).flat().includes(t)}function Xt(t,e){const s=function(t,e){return qt(e)?Et.ChipProjects[t].BUILTIN_CHIPS[e]:Et.ChipProjects[t].CHIPS[e][`${e}.hdl`]}(t,e);if(qt(e))return s;const i="//// Replace this comment with your code.",n=`BUILTIN ${e};`;return s.includes(i)?s.replace(i,n):s.replace("PARTS:",`PARTS:\n    ${n}`)}function Yt(t){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return{clocked:t.clocked,inPins:yt(t.ins),outPins:yt(t.outs),internalPins:yt(t.pins),chip:[t],pending:e,invalid:s}}const Qt=zt.S.get();function te(t,e,s,i){const n=function(t){const e=t["/chip/project"]??"01";return{project:e,chips:Jt(e),chipName:t["/chip/chip"]??Et.CHIP_PROJECTS[e][0]}}(s);let{project:a,chipName:r}=n;const{chips:c}=n;let u=new o.P9,d=new Ht.l1,h=!1,p=!1;const g={setFiles(t,e){let{hdl:s=t.files.hdl,tst:i=t.files.tst,cmp:n=t.files.cmp,out:a=""}=e;t.files.hdl=s,t.files.tst=i,t.files.cmp=n,t.files.out=a},updateChip(t,e){t.sim=Yt(u,e?.pending??t.sim.pending,e?.invalid??t.sim.invalid),t.controls.error=t.sim.invalid?e?.error??t.controls.error:void 0},setProject(t,e){const s=Jt(e),i=t.controls.chipName&&s.includes(t.controls.chipName)?t.controls.chipName:s[0];t.controls.project=e,t.controls.chips=s,this.setChip(t,i)},setChip(t,e){t.controls.chipName=e,t.controls.hasBuiltin=at.has(e),t.controls.builtinOnly=qt(e)},testRunning(t){t.controls.runningTest=!0},testFinished(t){t.controls.runningTest=!1;const s=(0,Kt.q)(t.files.cmp.trim(),t.files.out.trim());e(s?"Simulation successful: The output file is identical to the compare file":"Simulation error: The output file differs from the compare file")},updateTestStep(t){if(t.files.out=d?.log()??"",d?.currentStep?.span)t.controls.span=d.currentStep.span;else if(d.done){const e=t.files.tst.length;t.controls.span={start:e-1,end:e,line:t.files.tst.split("\n").length}}this.updateChip(t,{pending:t.sim.pending,invalid:t.sim.invalid})}},m={setProject(t){a=s["/chip/project"]=t,i.current({action:"setProject",payload:a}),this.setChip(Et.CHIP_PROJECTS[a][0])},async setChip(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:s["/chip/project"]??"01";if(r=s["/chip/chip"]=t,i.current({action:"setChip",payload:r}),p=qt(r),p)return i.current({action:"setFiles",payload:{hdl:"",tst:"",cmp:""}}),void this.useBuiltin();await this.loadChip(e,r),h&&this.useBuiltin()},reset(){zt.S.get().reset(),u.reset(),d.reset(),i.current({action:"setFiles",payload:{}}),i.current({action:"updateChip"})},async updateFiles(t){let{hdl:s,tst:n,cmp:a}=t;i.current({action:"setFiles",payload:{hdl:s,tst:n,cmp:a}});try{s&&await this.compileChip(s),n&&this.compileTest(n)}catch(r){e((0,At.j)(r))}},async compileChip(t){u.remove();const s=await async function(t,e){const s=Tt.parse(t.toString());return(0,w.dZ)(s)?(0,w.UG)(function(t){if(!t.message)return{message:"HDL statement has a syntax error",span:t.span};const e=t.message.match(/Line \d+, col \d+: (?<message>.*)/);return void 0!==e?.groups?.message?{message:e.groups.message,span:t.span}:{message:t.message,span:t.span}}((0,w.UG)(s))):Bt((0,w.Ok)(s),void 0,e)}(t,r);if((0,w.dZ)(s)){const t=(0,w.UG)(s);return e(`${void 0!=t.span?.line?`Line ${t.span.line}: `:""}${(0,w.UG)(s).message}`),void i.current({action:"updateChip",payload:{invalid:!0,error:t}})}e("HDL code: No syntax errors"),this.replaceChip((0,w.Ok)(s))},replaceChip(t){const e=u.ins;for(const[s,{busVoltage:i}]of e){const e=t.ins.get(s);e&&(e.busVoltage=i)}Qt.reset(),t.eval(),u=t,u.reset(),d=d.with(u).reset(),i.current({action:"updateChip",payload:{invalid:!1}}),i.current({action:"updateTestStep"})},async loadChip(e,n){s["/chip/chip"]=n;const a=t=>`/projects/${e}/${n}/${n}.${t}`,[r,o,l]=await Promise.all([t.readFile(a("hdl")).catch((()=>function(t){return`CHIP ${t} {\n  IN in;\n  OUT out;\n  PARTS:\n}`}(n))),t.readFile(a("tst")).catch((t=>"repeat 10 {\n  tick,\n  tock;\n}")),t.readFile(a("cmp")).catch((()=>"| in|out|"))]);i.current({action:"setFiles",payload:{hdl:r,tst:o,cmp:l}}),await this.compileChip(r),this.compileTest(o)},async saveChip(s){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:r;i.current({action:"setFiles",payload:{hdl:s}});const l=`/projects/${n}/${o}/${o}.hdl`;await t.writeFile(l,s),e(`Saved ${l}`)},toggle(t,e){void 0!==e?t.busVoltage=t.busVoltage^1<<e:1===t.width?t.toggle():t.busVoltage+=1,i.current({action:"updateChip",payload:{pending:!0}})},eval(){u.eval(),i.current({action:"updateChip",payload:{pending:!1}})},clock(){Qt.toggle(),Qt.isLow&&Qt.frame(),i.current({action:"updateChip"})},async useBuiltin(){let t=arguments.length>1?arguments[1]:void 0;if(!(!(arguments.length>0&&void 0!==arguments[0])||arguments[0]))return p||(h=!1),void await this.loadChip(a,r);p||(h=!0);const s=r,n=rt(s);if((0,w.dZ)(n))return void e(`Failed to load builtin ${s}: ${(0,At.j)((0,w.UG)(n))}`);t&&await this.saveChip(t,a,r);const o=Xt(a,s);i.current({action:"setFiles",payload:{hdl:o}}),this.replaceChip((0,w.Ok)(n))},async initialize(){await this.setChip(r,a)},compileTest(s){i.current({action:"setFiles",payload:{tst:s}});const n=Gt.qH.parse(s);return(0,w.dZ)(n)?(e("Failed to parse test"),!1):(d=Ht.l1.from((0,w.Ok)(n)).with(u).reset(),d.setFileSystem(t),i.current({action:"updateTestStep"}),!0)},async runTest(e){this.compileTest(e)&&(i.current({action:"testRunning"}),t.pushd("/samples"),await d.run(),t.popd(),i.current({action:"updateTestStep"}),i.current({action:"testFinished"}))},tick(){return this.stepTest()},stepTest(){(0,l.hu)(d.chipId===u.id,"Test and chip out of sync");const t=d.step();return i.current({action:"updateTestStep"}),t&&i.current({action:"testFinished"}),t},resetFile(){const t=Et.ChipProjects[a].CHIPS[r][`${r}.hdl`];i.current({action:"setFiles",payload:{hdl:t}})}};return{initialState:(()=>{const t={project:a,chips:c,chipName:r,hasBuiltin:at.has(r),builtinOnly:qt(r),runningTest:!1,error:void 0},s=rt(t.chipName);(0,w.dZ)(s)?(e((0,At.j)((0,w.UG)(s))),u=new o.P9):u=(0,w.Ok)(s);return{controls:t,files:{hdl:"",cmp:"",tst:"",out:""},sim:Yt(u)}})(),reducers:g,actions:m}}var ee=s(7880),se=s(4619),ie=s(8722),ne=s(3847),ae=s(9200),re=s(8398);const oe=()=>{const{fs:t,setStatus:e}=(0,a.useContext)(kt.r),{filePicker:s,tracking:o}=(0,a.useContext)(ie.Il),{state:l,actions:c,dispatch:u}=function(){const{fs:t,setStatus:e,storage:s}=(0,a.useContext)(kt.r),i=(0,a.useRef)((()=>{})),{initialState:n,reducers:r,actions:o}=(0,a.useMemo)((()=>te(t,e,s,i)),[t,e,s,i]),[l,c]=(0,Vt.C)(r,n);return i.current=c,{state:l,dispatch:i,actions:o}}(),[d,h]=(0,Vt.i)(l.files.hdl),[p,g]=(0,Vt.i)(l.files.tst),[m,b]=(0,Vt.i)(l.files.cmp),[f]=(0,Vt.i)(l.files.out);(0,a.useEffect)((()=>{c.initialize()}),[c]),(0,a.useEffect)((()=>{o.trackPage("/chip")}),[o]),(0,a.useEffect)((()=>{o.trackEvent("action","setProject",l.controls.project),o.trackEvent("action","setChip",l.controls.chipName)}),[]);const x=(0,a.useCallback)((t=>{c.setProject(t),o.trackEvent("action","setProject",t)}),[c,o]),v=(0,a.useCallback)((t=>{c.setChip(t),o.trackEvent("action","setChip",t),U.reset()}),[c,o]),y=(0,a.useCallback)((()=>{c.eval(),o.trackEvent("action","eval")}),[c,o]),j=(0,a.useRef)((()=>{}));j.current=async function(){var t,e;let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};await c.updateFiles({hdl:s.hdl,tst:null!==(t=s.tst)&&void 0!==t?t:p,cmp:null!==(e=s.cmp)&&void 0!==e?e:m})};const C=(0,a.useCallback)((async()=>{try{const e=await s.select(),i=await t.readFile(e);await j.current({tst:i})}catch(i){console.error(i),e("Failed to load into memory")}}),[s,e,t,j]),w=(0,a.useRef)();(0,a.useEffect)((()=>(w.current=new class extends se.B{async reset(){await j.current(),await c.reset()}finishFrame(){super.finishFrame(),u.current({action:"updateTestStep"})}async tick(){return await c.stepTest()}toggle(){u.current({action:"updateTestStep"})}},()=>{var t;null===(t=w.current)||void 0===t||t.stop()})),[j,c,u]);const P=(0,a.useMemo)((()=>({toggle(){c.clock(),o.trackEvent("action","toggleClock")},reset(){o.trackEvent("action","resetClock"),c.reset()}})),[c]),[V,S]=(0,a.useState)(!1),k=(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("fieldset",{role:"group",children:[(0,r.jsx)("select",{value:l.controls.project,onChange:t=>{let{target:{value:e}}=t;x(e)},"data-testid":"project-picker",children:Zt.map((t=>{let[e,s]=t;return(0,r.jsx)("option",{value:e,children:s},e)}))}),(0,r.jsx)("select",{value:l.controls.chipName,onChange:t=>{let{target:{value:e}}=t;v(e)},"data-testid":"chip-picker",children:l.controls.chips.map((t=>(0,r.jsx)("option",{value:t,style:qt(t)?{color:"rgb(170, 170, 170)"}:{},children:`${t} ${qt(t)?"(given)":""}`},t)))}),!V&&!l.controls.builtinOnly&&(0,r.jsx)("button",{className:"flex-0",onClick:c.resetFile,children:(0,r.jsx)(i.cC,{id:"Reset"})})]})}),A=(0,r.jsx)(re.s,{className:"_hdl_panel",header:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{tabIndex:0,children:"HDL"}),(0,r.jsx)("fieldset",{children:l.controls.hasBuiltin&&!l.controls.builtinOnly&&(0,r.jsxs)("label",{children:[(0,r.jsx)("input",{type:"checkbox",role:"switch",checked:V,onChange:()=>{V?(S(!1),c.useBuiltin(!1)):(S(!0),c.useBuiltin(!0,d)),U.reset()}}),(0,r.jsx)(i.cC,{id:"Builtin"})]})}),k]}),children:(0,r.jsx)(ae.M,{className:"flex-1",value:d,error:l.controls.error,onChange:async t=>{h(t),V||await c.saveChip(t),j.current(V||l.controls.builtinOnly?{}:{hdl:t})},grammar:Tt.parser,language:"hdl",disabled:V||l.controls.builtinOnly})}),[E,M]=(0,a.useState)(!0),F=()=>{e(n.ag._("Cannot test a chip that has syntax errors"))},I=()=>{j.current(V||l.controls.builtinOnly?{}:{hdl:d})},O=()=>{l.sim.invalid?F():y()},_=(0,r.jsxs)("fieldset",{role:"group",children:[(0,r.jsx)("button",{onClick:O,onKeyDown:O,onBlur:I,disabled:!l.sim.pending||!E,children:(0,r.jsx)(i.cC,{id:"Eval"})}),(0,r.jsxs)("button",{onClick:()=>{l.sim.invalid?F():P.toggle()},onBlur:I,style:{maxWidth:"initial"},disabled:!l.sim.clocked,children:[(0,r.jsx)(i.cC,{id:"Clock"}),":","\xa0",(0,r.jsx)(pt.uY,{})]}),(0,r.jsx)("button",{onClick:()=>{l.sim.invalid?F():P.reset()},onBlur:I,style:{maxWidth:"initial"},disabled:!l.sim.clocked,children:(0,r.jsx)(i.cC,{id:"Reset"})})]}),T=function(t,e){return[...t.parts].map(((t,s)=>[`${t.id}_${s}`,ht(t,e)])).filter((t=>{let[e,s]=t;return void 0!==s}))}({parts:l.sim.chip},(()=>{u.current({action:"updateChip"})})),U=new Pt,R=(0,r.jsx)(re.s,{className:"_parts_panel",header:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(i.cC,{id:"Chip"})," ",l.controls.chipName]}),_]}),children:l.sim.invalid?(0,r.jsx)(i.cC,{id:"Syntax errors in the HDL code"}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(xt.Provider,{value:U,children:(0,r.jsx)(jt,{sim:l.sim,toggle:c.toggle,setInputValid:M,hideInternal:l.controls.builtinOnly||V})}),T.length>0&&(0,r.jsx)(re.G,{summary:(0,r.jsx)(i.cC,{id:"Visualization"}),open:!0,children:(0,r.jsx)("main",{children:T.map((t=>{let[e,s]=t;return s}))})})]})}),[N,L]=(0,a.useState)("tst"),W=(0,a.useCallback)((t=>{L(t),o.trackEvent("tab","change",t)}),[o]),$=(0,r.jsx)(re.s,{className:"_test_panel",header:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"flex-1",children:(0,r.jsx)(i.cC,{id:"Test"})}),(0,r.jsx)("div",{className:"flex-2",children:w.current&&(0,r.jsx)(St.D,{runner:w.current,disabled:l.sim.invalid})}),(0,r.jsx)("div",{children:(0,r.jsxs)("button",{onClick:C,children:[(0,r.jsx)(ne.J,{name:"upload_file"})," "]})})]}),children:(0,r.jsxs)("div",{role:"tablist",style:{"--tab-count":"3"},children:[(0,r.jsx)("div",{role:"tab",id:"test-tab-tst","aria-controls":"test-tabpanel-tst","aria-selected":"tst"===N,children:(0,r.jsxs)("label",{children:[(0,r.jsx)("input",{type:"radio",name:"test-tabs","aria-controls":"test-tabpanel-tst",value:"tst",checked:"tst"===N,onChange:()=>W("tst")}),"Test Script"]})}),(0,r.jsx)("div",{role:"tabpanel","aria-labelledby":"test-tab-tst",id:"test-tabpanel-tst",children:(0,r.jsx)(ae.M,{value:p,onChange:g,grammar:Gt.qH.parser,language:"tst",highlight:l.controls.span,disabled:l.controls.builtinOnly})}),(0,r.jsx)("div",{role:"tab",id:"test-tab-cmp","aria-controls":"test-tablpanel-cmp","aria-selected":"cmp"===N,children:(0,r.jsxs)("label",{children:[(0,r.jsx)("input",{type:"radio",name:"test-tabs","aria-controls":"test-tabpanel-cmp",value:"cmp",checked:"cmp"===N,onChange:()=>W("cmp")}),"Compare File"]})}),(0,r.jsx)("div",{role:"tabpanel","aria-labelledby":"test-tab-cmp",id:"test-tabpanel-cmp",style:{position:"relative"},children:(0,r.jsx)(ae.M,{value:m,onChange:b,grammar:ee.lA.parser,language:"cmp",disabled:l.controls.builtinOnly})}),(0,r.jsx)("div",{role:"tab",id:"test-tab-out","aria-controls":"test-tabpanel-out","aria-selected":"out"===N,children:(0,r.jsxs)("label",{children:[(0,r.jsx)("input",{type:"radio",name:"test-tabs","aria-controls":"test-tabpanel-out",value:"out",checked:"out"===N,onChange:()=>W("out")}),"Output File"]})}),(0,r.jsx)("div",{role:"tabpanel",id:"test-tabpanel-out","aria-labelledby":"test-tab-out",children:(0,r.jsx)(gt.M,{cmp:m,out:f})})]})});return(0,r.jsxs)("div",{className:"Page ChipPage grid",children:[A,R,$]})},le=oe}}]);