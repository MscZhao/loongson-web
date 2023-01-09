import{r as a,j as o,S as z,i as O,s as V,a as F,R as G,b as U,c as u,F as v,M as H,D as j,d as f,I as R,B as K,m as M,e as $,L as q,u as S,f as B,g as Q,h as W,k as Y,O as J,l as Z,n as X,o as ee}from"./vendor.acb31058.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function s(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(i){if(i.ep)return;i.ep=!0;const n=s(i);fetch(i.href,n)}})();var w=(e=>(e.STUDENT="1",e.TEACHER="2",e.VISITOR="3",e.TUTOR="4",e.ADMIN="5",e.PARENT="6",e))(w||{});const te="https://ssl.cdn.maodouketang.com/Fn2y9zZHL6Cp7tLDsUq5b1kF7S88",x=btoa("rcore-user-info"),Be={[w.STUDENT]:"student",[w.TEACHER]:"teacher",[w.TUTOR]:"ta",[w.ADMIN]:"admin",[w.VISITOR]:"visitor",[w.PARENT]:"parent"},oe=(e,t)=>{switch(t.type){case"LOGIN":return{...e,currentUser:t.payload};case"LOGOUT":return{...e,currentUser:void 0};case"UPDATE_MY_COURSES":return{...e,myRegisters:t.payload};case"UPDATE_LOGIN_DIALOG_VISIBLE":return{...e,loginDialogVisible:t.payload};default:throw new Error(`[count-context] Unhandled action type: ${t.type}`)}},E={currentUser:{phone:localStorage.getItem(x)},myRegisters:[],loginDialogVisible:!1},ne=()=>E,N=a.exports.createContext({state:E,dispatch:ne});function se(e){const[t,s]=a.exports.useReducer(oe,E);return o(N.Provider,{value:{state:t,dispatch:s},...e})}const C=()=>{const e=a.exports.useContext(N);if(e===void 0)throw new Error("useCount must be used with a CountProvider");return e};const ie=e=>o("div",{className:"loading-container",children:o(z,{tip:"\u6570\u636E\u52A0\u8F7D\u4E2D...",size:"small",...e})}),re="modulepreload",le=function(e){return"/course/"+e},L={},I=function(t,s,r){if(!s||s.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(s.map(n=>{if(n=le(n),n in L)return;L[n]=!0;const c=n.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(!!r)for(let p=i.length-1;p>=0;p--){const y=i[p];if(y.href===n&&(!c||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${d}`))return;const l=document.createElement("link");if(l.rel=c?"stylesheet":re,c||(l.as="script",l.crossOrigin=""),l.href=n,document.head.appendChild(l),c)return new Promise((p,y)=>{l.addEventListener("load",p),l.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())};const ae=(e,t)=>{if(O(t[0]))return V(t,s=>{const[r,i]=F(s);return e>=r&&e<=i});{const[s,r]=F(t);return e>=s&&e<=r}},ce=(e,t,s)=>{let r=~~(Math.random()*(e-t+1)+t);if(s)for(;ae(r,s);)r=~~(Math.random()*(e-t+1)+t);return r},b=(e,t,s,r)=>{let i=[];for(let n=0;n<s;n++)i=i.concat(ce(e,t,r));return i},k=4,ue=e=>{const[t,s,r]=e;return`rgb(${t}, ${s}, ${r})`},T=()=>({nums:b(122,48,k,[[58,64],[91,96]]),rotate:b(50,-50,k),fontSize:b(12,20,k),color:[b(100,255,3),b(100,255,3),b(100,255,3),b(100,255,3)]}),de=a.exports.forwardRef((e,t)=>{const[s,r]=a.exports.useState(T());return a.exports.useImperativeHandle(t,()=>({getCodes:()=>s.nums,getCodesAsString:i=>{const n=s.nums.map(c=>String.fromCharCode(c)).join("");return i?n.toLowerCase():n}}),[s]),o("div",{className:"verification-code-box",onClick:()=>r(T()),children:s.nums.map((i,n)=>o("span",{style:{color:ue(s.color[n]),fontSize:s.fontSize[n],transform:`rotate(${s.rotate[n]}deg)`},children:String.fromCharCode(i)},n))})}),A=G.forwardRef((e,t)=>{const{children:s,symbol:r,className:i="",...n}=e;return o("svg",{...n,className:`icon ${i}`,"aria-hidden":"true",ref:t,children:o("use",{xlinkHref:`#${r}`})})}),he="",h=U.create({baseURL:he});h.interceptors.response.use(function(e){return e.data},function(e){return Promise.reject(e)});h.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)});const m=466,_=2e3;async function Le(){return(await h("/seller/api/homepages",{params:{clientId:m}}))[0]}async function Te(e){const t=e?`/seller/api/coursesget/getAllCoursesByConditionsWithTotal?page=0&size=18&clientId=${m}&tag=hot&isDelete=1&sort=courseIndex,asc`:`/seller/api/coursesget/getAllCoursesByConditionsWithTotal?page=0&size=100&isDelete=1&clientId=${m}&sort=courseIndex,asc`;return await h(t)}async function Se(e,t=0){return await h("/seller/api/students/getAllCourseByStudentWithTotal",{params:{page:t,phone:e,size:20,sort:"id,desc"}})}async function Ne(e){return(await h("/seller/api/courses",{params:{clientId:m,courseId:e}}))[0]}async function _e(){return await h(`/seller/api/teachers/getAllTeachersByConditionsWithTotal?page=0&size=6&clientId=${m}`)}async function De(e){return await h("/seller/api/students",{params:{clientId:m,courseId:e,size:_}})}async function Pe(e){return await h("/seller/api/course-classes",{params:{clientId:m,courseId:e,size:_,sort:"startAt,desc"}})}async function ze(e){return await h("/seller/api/students",{method:"POST",data:e})}async function me(e){return await h("/seller/api/students",{params:{clientId:m,phone:e}})}async function Oe(e){const{roomId:t,startTime:s,endTime:r}=e;return await h("/analysis/api/room-actions/getRoomActionsWithTotalNumByConditionsTime",{params:{roomId:t,startTime:new Date(s).toJSON(),endTime:new Date(r).toJSON(),clientId:m,page:0,size:200,actionType:"CHAT"}})}const pe=()=>{const{state:{currentUser:e},dispatch:t}=C(),s=a.exports.useCallback(async()=>{if(e!=null&&e.phone){const r=await me(e==null?void 0:e.phone);t({type:"UPDATE_MY_COURSES",payload:r})}},[e==null?void 0:e.phone]);a.exports.useEffect(()=>{s()},[s])};function ge(){const e=navigator.userAgent||navigator.vendor||window.opera;return{mobile:()=>/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4))}}const be=()=>{const[e,t]=a.exports.useState();return a.exports.useEffect(()=>{const s=ge();t(s)},[]),e},D=e=>{const[t,s]=a.exports.useState(!1),[r,i]=a.exports.useState(),{state:{currentUser:n},dispatch:c}=C(),d=l=>{s(!0),i(l),c({type:"LOGIN",payload:{phone:l}})},g=a.exports.useCallback(()=>{const l=localStorage.getItem(x);l&&d(l)},[]);return a.exports.useEffect(()=>{g()},[g]),a.exports.useEffect(()=>{n!=null&&n.phone?(s(!0),i(n.phone)):t&&(s(!1),i(void 0))},[t,n==null?void 0:n.phone]),e?[t,r]:[t]},we=()=>{const{dispatch:e}=C();return a.exports.useCallback(()=>{localStorage.removeItem(x),e({type:"LOGOUT"})},[])},fe=/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[0-9])\d{8}$/,xe=e=>{const t=a.exports.useRef(),[s,r]=a.exports.useState(!0),[i]=f.useForm();return u(f,{form:i,className:"normal-form",onFinish:c=>{var d;c.code.length===k&&c.code.toLowerCase()===((d=t.current)==null?void 0:d.getCodesAsString(!0))?e.onSubmit(c.phone):r(!1)},autoComplete:"off",size:"large",children:[o("h3",{children:"\u8BF7\u4F7F\u7528\u624B\u673A\u53F7\u767B\u5F55"}),o(f.Item,{name:"phone",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},{pattern:fe,message:"\u8BF7\u8F93\u5165\u6B63\u786E\u624B\u673A\u53F7"}],children:o(R,{placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"})}),o(f.Item,{name:"code",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801"}],help:s?void 0:"\u9A8C\u8BC1\u7801\u8F93\u5165\u9519\u8BEF",validateStatus:s?void 0:"error",children:o(R,{placeholder:"\u8BF7\u8F93\u5165\u9A8C\u8BC1\u7801",addonAfter:o(de,{ref:t})})}),o(f.Item,{children:o(K,{style:{width:"100%"},type:"primary",htmlType:"submit",children:"\u767B\u5F55"})}),u("span",{children:["\u767B\u5F55\u5373\u4EE3\u8868\u9605\u8BFB\u5E76\u540C\u610F ",o("span",{style:{color:"#3db477"},children:"\u300A\u670D\u52A1\u534F\u8BAE\u548C\u9690\u79C1\u653F\u7B56\u300B"})]})]})},P=({isMobile:e})=>{const{state:{currentUser:t,loginDialogVisible:s},dispatch:r}=C();D();const i=l=>{r({type:"UPDATE_LOGIN_DIALOG_VISIBLE",payload:l})},n=l=>{r({type:"LOGIN",payload:{phone:l}})},c=()=>{r({type:"LOGOUT"})},d=l=>{localStorage.setItem(x,l),M.success("\u767B\u5F55\u6210\u529F\uFF0C\u6B22\u8FCE\u56DE\u6765!"),i(!1),n(l)};return t!=null&&t.phone?o(j,{overlayClassName:"user-dropdown-menus",overlay:o($,{onClick:({key:l})=>{l==="logout"&&(localStorage.removeItem(x),c())},items:[{key:"myCourse",label:o(q,{to:"/myCourse",children:"\u6211\u7684\u8BFE\u7A0B"})},{key:"logout",label:o("span",{children:"\u9000\u51FA\u767B\u5F55"})}]}),placement:"bottomRight",arrow:!0,children:e?o(A,{symbol:"icon-user"}):u("span",{className:"user-info not-link",children:[t.phone,o("img",{width:30,src:te,alt:"avatar"})]})}):u(v,{children:[e?o(A,{symbol:"icon-user",onClick:()=>i(!0)}):o("span",{className:"nav-link",onClick:()=>i(!0),children:"\u767B\u5F55"}),o(H,{width:350,open:s,footer:null,onCancel:()=>i(!1),maskClosable:!1,children:o(xe,{onSubmit:d})})]})},ye=({isMobile:e})=>{const t=S();return o("header",{className:"main-header",children:u("div",{className:"header-content content",children:[u("a",{href:"/homepage/",children:[o("img",{src:"https://ssl.cdn.maodouketang.com/FsELfTn2KhwjVxKpABQGhyoR-IbH",alt:"logo"}),o("span",{className:"action-item",children:"\u793E\u533A"})]}),u("span",{onClick:()=>t("//"),children:[o(A,{symbol:"icon-home"}),"\u9996\u9875"]}),u("span",{children:[o(P,{isMobile:e}),"\u6211\u7684"]})]})})},ke=()=>o("footer",{children:u("div",{className:"content",children:[u("div",{className:"footer-info",children:[u("section",{children:[o("div",{className:"sub-title",children:"\u9F99\u82AF\u76F4\u64AD\u8BFE\u5802"}),o("div",{className:"sub-items",children:o("span",{children:"\u4FC3\u8FDB\u9F99\u82AF\u5F00\u6E90\u6280\u672F\u7684\u6559\u5B66\u3001\u7814\u7A76\u4E0E\u4EA7\u4E1A\u7684\u53D1\u5C55"})})]}),u("section",{children:[o("div",{className:"sub-title",children:"\u8D44\u6E90\u94FE\u63A5"}),o("div",{className:"sub-items",children:B([{text:"\u4E0B\u8F7D\u4E2D\u5FC3",link:"https://www.loongson.cn/download/index"},{text:"\u9F99\u82AF\u5B9E\u9A8C\u5BA4",link:"https://www.loongson.cn/application/list?id=38"},{text:"\u9F99\u82AF\u5F00\u6E90\u793E\u533A",link:"http://www.loongnix.cn/zh/"},{text:"\u9F99\u82AF\u5F00\u6E90\u6280\u672F\u5F00\u53D1\u8005\u793E\u533A",link:"https://github.com/loongsonedu/loongsonedu.github.io"}],({text:e,link:t})=>o("div",{children:o("a",{href:t,children:e})},t))})]}),u("section",{children:[o("div",{className:"sub-title",children:"\u8054\u7CFB\u6211\u4EEC"}),o("div",{className:"sub-items",children:B([{label:"\u8BFE\u7A0B\u54A8\u8BE2",text:"13691584139"},{label:"\u5BA2\u670D\u70ED\u7EBF",text:"010-62546668"},{label:"\u5730\u5740",text:"\u5317\u4EAC\u5E02\u6D77\u6DC0\u533A\u5730\u9526\u8DEF7\u53F7\u96624\u53F7\u697C1\u5C42101"}],({label:e,text:t})=>u("div",{children:[u("span",{children:[e,"\uFF1A"]}),t]},e))})]})]}),o("a",{className:"record-number",href:"https://beian.miit.gov.cn/#/Integrated/index",children:"\u5317\u4EAC\u6E05\u534E\u5927\u5B66\xB7\u4EACICP\u590716045052\u53F7-11"})]})});const Ce=()=>{const e=Q(),t=S(),s=e.pathname==="/",r=!0,[i,n]=D(r),c=we(),d=be(),g=!!(d!=null&&d.mobile());pe();const l=u("div",{className:"custom-course-nav",children:[o("span",{className:"nav-common-link nav-link",onClick:()=>t("/"),children:"\u8BFE\u7A0B\u57F9\u8BAD"}),o("span",{className:"nav-common-link nav-link",onClick:()=>window.open("https://github.com/loongsonedu"),children:"GitHub"})]});let p={customRender:u(v,{children:[l,o(P,{})]})};return i&&(p={customRender:l,userInfo:{phone:n},dropMenu:[{key:"myCourse",title:"\u6211\u7684\u8BFE\u7A0B",onClick(){t("/myCourse")}},{key:"logout",title:"\u9000\u51FA\u767B\u5F55",onClick(){c()}}]}),o(W,{headerProps:{title:"\u9F99\u82AF\u76F4\u64AD\u8BFE\u5802",logo:"https://ssl.cdn.maodouketang.com/FsELfTn2KhwjVxKpABQGhyoR-IbH",extra:p},className:`container ${g?"container-mobile":""}`,children:u(v,{children:[g&&o(ye,{isMobile:!0}),o(Y,{children:o(J,{})}),s&&o(ke,{})]})})},Ie=a.exports.lazy(()=>I(()=>import("./index.115398c7.js"),["assets/index.115398c7.js","assets/vendor.acb31058.js","assets/vendor.f6b978a6.css","assets/index.82a25bb0.js","assets/index.b2d9a3f8.css","assets/index.e0d76449.css"])),ve=a.exports.lazy(()=>I(()=>import("./index.a2790731.js"),["assets/index.a2790731.js","assets/vendor.acb31058.js","assets/vendor.f6b978a6.css","assets/index.bbdb3a23.css"])),Ae=a.exports.lazy(()=>I(()=>import("./index.09613f11.js"),["assets/index.09613f11.js","assets/vendor.acb31058.js","assets/vendor.f6b978a6.css","assets/index.82a25bb0.js","assets/index.b2d9a3f8.css","assets/index.7ade5cd7.css"])),Ee=a.exports.lazy(()=>I(()=>import("./index.cf7ae4f7.js"),["assets/index.cf7ae4f7.js","assets/vendor.acb31058.js","assets/vendor.f6b978a6.css","assets/index.45bb8373.css"])),Fe=Z([{path:"/",element:o(Ce,{}),children:[{index:!0,element:o(Ie,{})},{path:"/:id",element:o(ve,{})},{path:"/:id/replay/:replayId",element:o(Ee,{})},{path:"myCourse",element:o(Ae,{})}]}],{basename:"/course"});X.createRoot(document.getElementById("root")).render(o(se,{children:o(a.exports.Suspense,{fallback:o("div",{style:{display:"flex",width:"100vw",height:"100vh"},children:o(ie,{size:"large",tip:"\u9875\u9762\u52A0\u8F7D\u4E2D...",delay:500})}),children:o(ee,{router:Fe})})}));export{he as B,w as E,A as I,ie as L,Be as R,x as U,_e as a,Te as b,be as c,Ne as d,De as e,Pe as f,Le as g,Se as h,Oe as i,ze as r,C as u};
