import{d as f,ax as d,v as x,H as c,b as _,c as z,a0 as S,L as o,k as I}from"./entry.PpbKgRNX.js";const y=f({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(l){var r;d(s=>({e5c0faf0:o(m)}));const e=x();(r=e==null?void 0:e.nuxtIcon)!=null&&r.aliases;const n=l,p=c(()=>{var s;return(((s=e==null?void 0:e.nuxtIcon)==null?void 0:s.aliases)||{})[n.name]||n.name}),m=c(()=>`url('https://api.iconify.design/${p.value.replace(":","/")}.svg')`),a=c(()=>{var t,i,u;if(!n.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const s=n.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(s))===s?`${s}px`:s});return(s,t)=>(_(),z("span",{style:S({width:o(a),height:o(a)})},null,4))}}),v=I(y,[["__scopeId","data-v-cc8e71f7"]]);export{v as default};
