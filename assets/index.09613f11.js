import{r as n,u as N,c as s,j as e,f,z as L}from"./vendor.acb31058.js";import{u as C,h as k,L as R,I as B,R as S}from"./index.7423e050.js";import{l as h,E as l}from"./index.82a25bb0.js";const T=()=>{const[p,g]=n.exports.useState([]),[c,y]=n.exports.useState(),[r,x]=n.exports.useState(localStorage.getItem(h)||l.LIST),{state:{currentUser:o,myRegisters:I}}=C(),u=N(),d=n.exports.useCallback(async()=>{if(o!=null&&o.phone){const{courseList:t,totalNum:a}=await k(o==null?void 0:o.phone);g(t),y(a)}},[o==null?void 0:o.phone]);if(n.exports.useEffect(()=>{d()},[d]),!(o!=null&&o.phone))return u("/"),null;const v=t=>{const a=L(I,({courseId:w})=>w===t.courseId),i=a.status,b=`https://room.loongsonedu.cn?username=${a.name}&userId=${o.phone}&role=${S[i]||"student"}&roomId=${t.roomId}&video=${t.ishd||"480p"}`;window.open(b)},m=r===l.GRID;return s("div",{className:"mycourse-list-wrapper",children:[s("header",{children:[e("div",{className:"title",children:"\u6211\u7684\u8BFE\u7A0B"}),s("div",{className:"totol-register-count",children:["\u5171\u62A5\u540D\u8BFE\u7A0B: ",e("strong",{children:c})]})]}),c===void 0?e(R,{}):s("div",{className:`mycourse-list ${m?"mycourse-list-layout-grid":"mycourse-list-layout-list"}`,children:[e("span",{className:"layout-icon",onClick:()=>{const t=m?l.LIST:l.GRID;x(t),localStorage.setItem(h,t)},children:e(B,{symbol:r===l.GRID?"icon-listgrid":"icon-list"})}),f(p,(t,a)=>s("div",{className:"course-item",onClick:()=>u(`/${t.courseId}`),children:[e("img",{className:"course-item-cover",src:t.coverUrl,alt:"cover"}),s("div",{className:"course-item-content",children:[s("div",{children:[e("h3",{children:t.title}),e("div",{className:"summary",children:t.summary})]}),s("div",{className:"room",children:[s("span",{children:[" \u6559\u5BA4\u53F7: ",t.roomId," "]}),e("button",{className:"btn enter-class-btn",onClick:i=>{i.stopPropagation(),v(t)},children:"\u8FDB\u5165\u8BFE\u5802"})]})]})]},t.id+t.courseIndex+t.title+a))]})]})};export{T as default};
