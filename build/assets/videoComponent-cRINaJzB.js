import{r as o,j as t,L as u}from"./index-DzAqv1iV.js";const c=({src:r,className:n})=>{const d=o.useRef(null),[s,i]=o.useState(!1);return o.useEffect(()=>{const a=()=>i(!0),e=d.current;return e&&e.addEventListener("loadeddata",a),()=>{e&&e.removeEventListener("loadeddata",a)}},[]),t.jsxs(t.Fragment,{children:[!s&&t.jsx(u,{}),t.jsx("video",{ref:d,src:r,autoPlay:!0,loop:!0,muted:!0,className:`${n} ${s?"block":"hidden"}`})]})};export{c as default};