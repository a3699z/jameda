import{j as e,r as v,W as q,b as P,Y as A}from"./app-57DyRIWn.js";import"./TextInput-C3TM-1wA.js";import{N as L}from"./index-CJBMZnrz.js";import{I as $}from"./InputError-BQ4deN7m.js";import{F as z}from"./index-CkxTJK6l.js";import"./ResponsiveNavLink-Dg3ckYNT.js";import"./transition-Ry04kjaf.js";const E="_tagContainer_1mie5_1",H="_tagsTitle_1mie5_6",R="_tags_1mie5_6",V="_tag_1mie5_1",x={tagContainer:E,tagsTitle:H,tags:R,tag:V},I="https://crm.vip-vitalisten.de/build/assets/hashtagIcon-Vdnil8Te.svg",W=({tags:a})=>e.jsxs("div",{className:x.tagContainer,children:[e.jsx("h6",{className:x.tagsTitle,children:"Spezialisierungen"}),e.jsx("div",{className:x.tags,children:a.map((s,r)=>e.jsxs("span",{children:[e.jsxs("p",{className:x.tag,children:[e.jsx("img",{src:I,alt:""}),s]}),(r+1)%3===0&&e.jsx("br",{})]}))})]}),M=W,F="_container_1pect_1",K="_title_1pect_9",Y="_tabMenu_1pect_15",G="_tabBtn_1pect_39",J="_active_1pect_51",O="_appointmentDateContainer_1pect_55",Q="_divider_1pect_59",U="_submitBtn_1pect_66",Z="_dateTitle_1pect_78",X="_dateSelect_1pect_84",ee="_scrollBtn_1pect_90",te="_inactive_1pect_101",se="_dateSelectContainer_1pect_105",ne="_dateBoxContainer_1pect_109",ie="_dateBox_1pect_109",oe="_selectedDateBox_1pect_128",ae="_dateBoxTitle_1pect_131",ce="_dateBoxDayInfo_1pect_138",re="_timeSelectContainer_1pect_148",le="_timeSelect_1pect_148",de="_timeBox_1pect_159",_e="_timeBoxSelected_1pect_168",me="_timeBoxDisabled_1pect_171",t={container:F,title:K,tabMenu:Y,tabBtn:G,active:J,appointmentDateContainer:O,divider:Q,submitBtn:U,dateTitle:Z,dateSelect:X,scrollBtn:ee,inactive:te,dateSelectContainer:se,dateBoxContainer:ne,dateBox:ie,selectedDateBox:oe,dateBoxTitle:ae,dateBoxDayInfo:ce,timeSelectContainer:re,timeSelect:le,timeBox:de,timeBoxSelected:_e,timeBoxDisabled:me},xe="https://crm.vip-vitalisten.de/build/assets/rightArrowIcon-BVDLVS9k.svg",he="https://crm.vip-vitalisten.de/build/assets/leftArrowIcon-BpHQHzcZ.svg",pe=({dates:a,employeeUID:s})=>{const[r,b]=v.useState([]),[p,y]=v.useState("online"),{data:zt,setData:u,post:D,get:Et,processing:Ht,errors:j,reset:Rt}=q({date:a[0].date,hour:null,online:1,employeeUID:s}),N=n=>{P.get("/reservation/get_hours?date="+n+"&employeeUID="+s,{date:n,employeeUID:s}).then(i=>{u("date",n),b(i.data.hours),document.querySelectorAll(`.${t.dateBox}`).forEach(w=>{w.classList.remove(t.selectedDateBox)}),document.querySelector(`.${t.dateBox}[data-date="${n}"]`).classList.add(t.selectedDateBox)})},k=n=>{const i=n.target.getAttribute("data-hour");u("hour",i),document.querySelectorAll(`.${t.timeBox}`).forEach(m=>{m.classList.remove(t.timeBoxSelected)}),n.target.classList.add(t.timeBoxSelected)},C=n=>{y(n),u("online",n==="online"?1:0)};v.useEffect(()=>{N(a[0].date)},[]);const T=()=>{D(route("reservation.check"))},B=n=>{const i=document.querySelector(`.${t.dateBoxContainer}`),_=200,m=n==="left"?-_:_;i.scrollBy({top:0,left:m,behavior:"smooth"}),document.querySelector(`.${t.scrollBtn}`).classList.remove(t.inactive),i.addEventListener("scroll",()=>{i.scrollLeft===0&&document.querySelector(`.${t.scrollBtn}.left`).classList.add(t.inactive),i.scrollLeft===i.scrollWidth-i.clientWidth&&document.querySelector(`.${t.scrollBtn}.right`).classList.add(t.inactive),i.scrollLeft!==i.scrollWidth-i.clientWidth&&document.querySelector(`.${t.scrollBtn}.right`).classList.remove(t.inactive)})};return e.jsxs("div",{className:t.container,children:[e.jsx("h6",{className:t.title,children:"Speed Termin"}),e.jsxs("div",{className:t.tabMenu,"aria-valuenow":p==="online"?"0":"1",children:[e.jsx("button",{className:[t.tabBtn,p=="online"&&t.active].join(" "),onClick:()=>C("online"),children:"Videosprechstunde"}),e.jsx("button",{className:[t.tabBtn,p=="onsite"&&t.active].join(" "),onClick:()=>C("onsite"),children:"Vor-Ort-Termin"})]}),e.jsxs("div",{className:t.appointmentDateContainer,children:[e.jsxs("div",{className:t.dateSelectContainer,children:[e.jsx("h5",{className:t.dateTitle,children:"Datum wählen"}),e.jsxs("div",{className:t.dateSelect,children:[e.jsx("button",{className:[t.scrollBtn,t.inactive].join(" "),onClick:()=>B("left"),children:e.jsx("img",{src:he,alt:""})}),e.jsx("div",{className:t.dateBoxContainer,children:a.map((n,i)=>e.jsxs("div",{className:t.dateBox,onClick:()=>N(n.date),"data-date":n.date,children:[e.jsx("h6",{className:t.dateBoxTitle,children:n.day}),e.jsx("p",{className:t.dateBoxDayInfo,children:n.weekday})]},i))}),e.jsx("button",{className:t.scrollBtn,onClick:()=>B("right"),children:e.jsx("img",{src:xe,alt:""})})]}),e.jsx($,{message:j.date})]}),e.jsx("div",{className:t.divider}),e.jsxs("div",{className:t.timeSelectContainer,children:[e.jsx("h5",{className:t.dateTitle,children:"Verfügbare Stunden"}),e.jsx("div",{className:t.timeSelect,children:r.map((n,i)=>e.jsx("div",{className:[t.timeBox].join(" "),onClick:()=>k(event),"data-hour":n,children:n},i))}),e.jsx($,{message:j.hour})]}),e.jsx("button",{className:t.submitBtn,onClick:()=>T(),children:"Termin vereinbaren"})]})]})},ue=pe,ve="_container_1kfyu_1",ge="_title_1kfyu_11",fe="_paragraph_1kfyu_18",je="_link_1kfyu_26",g={container:ve,title:ge,paragraph:fe,link:je},Ne=({summary:a})=>e.jsxs("div",{className:g.container,children:[e.jsx("h5",{className:g.title,children:"Resume"}),e.jsx("p",{className:g.paragraph,children:a})]}),Ce=Ne,Be="_container_agd8q_1",we="_title_agd8q_10",$e="_schoolContainer_agd8q_17",Se="_schoolName_agd8q_21",Ie="_schoolDepartment_agd8q_27",d={container:Be,title:we,schoolContainer:$e,schoolName:Se,schoolDepartment:Ie};function be({university:a,department:s}){return e.jsxs("div",{className:d.container,children:[e.jsx("h5",{className:d.title,children:"Education"}),e.jsxs("div",{className:d.schoolContainer,children:[e.jsx("h6",{className:d.schoolName,children:a}),e.jsx("p",{className:d.schoolDepartment,children:s})]})]})}const ye="_container_1o0tx_1",De="_title_1o0tx_10",ke="_certificaConatiner_1o0tx_16",Te="_certifica_1o0tx_16",qe="_certifier_1o0tx_26",Pe="_certificaName_1o0tx_32",l={container:ye,title:De,certificaConatiner:ke,certifica:Te,certifier:qe,certificaName:Pe},Ae=({certificate_source:a,certificate:s})=>e.jsxs("div",{className:l.container,children:[e.jsx("h5",{className:l.title,children:"Certificates"}),e.jsx("div",{className:l.certificaConatiner,children:e.jsxs("div",{className:l.certifica,children:[e.jsx("h6",{className:l.certifier,children:a}),e.jsx("p",{className:l.certificaName,children:s})]})})]}),Le=Ae,ze="_container_3n0hu_1",Ee="_title_3n0hu_11",He="_tags_3n0hu_18",Re="_tag_3n0hu_18",h={container:ze,title:Ee,tags:He,tag:Re},Ve=({tags:a})=>e.jsxs("div",{className:h.container,children:[e.jsx("h5",{className:h.title,children:"Specializations"}),e.jsx("div",{className:h.tags,children:a.map((s,r)=>e.jsxs("span",{children:[e.jsxs("p",{className:h.tag,children:[e.jsx("img",{src:I,alt:""}),s]}),(r+1)%3===0&&e.jsx("br",{})]}))})]}),We=Ve,Me="_container_2t2m9_1",Fe="_content_2t2m9_5",Ke="_left_2t2m9_11",Ye="_imgContainer_2t2m9_16",Ge="_profileImg_2t2m9_20",Je="_doctorInfoContainer_2t2m9_25",Oe="_right_2t2m9_29",Qe="_doctorName_2t2m9_33",Ue="_doctorProfession_2t2m9_39",c={container:Me,content:Fe,left:Ke,imgContainer:Ye,profileImg:Ge,doctorInfoContainer:Je,right:Oe,doctorName:Qe,doctorProfession:Ue},Ze="https://crm.vip-vitalisten.de/build/assets/profile-C1Etldha.png",Xe="_review_1skru_1",et="_profileImg_1skru_8",tt="_reviewContainer_1skru_18",st="_reviewInfoContainer_1skru_22",nt="_patientContainer_1skru_28",it="_reviewerName_1skru_33",ot="_reviewDate_1skru_39",at="_reviewScore_1skru_45",ct="_comment_1skru_51",rt="_replyContainer_1skru_58",lt="_reply_1skru_58",dt="_doctorInfoContainer_1skru_71",_t="_doctorName_1skru_77",mt="_doctorProfession_1skru_83",xt="_replyText_1skru_89",o={review:Xe,profileImg:et,reviewContainer:tt,reviewInfoContainer:st,patientContainer:nt,reviewerName:it,reviewDate:ot,reviewScore:at,comment:ct,replyContainer:rt,reply:lt,doctorInfoContainer:dt,doctorName:_t,doctorProfession:mt,replyText:xt},ht="https://crm.vip-vitalisten.de/build/assets/patientProfile-pVM45eYJ.png",pt="https://crm.vip-vitalisten.de/build/assets/startIcon-zkKY3UPT.svg",ut="https://crm.vip-vitalisten.de/build/assets/doctorProfile-CS2KSf4D.png",S=()=>e.jsxs("div",{className:o.review,children:[e.jsxs("div",{className:o.reviewContainer,children:[e.jsx("img",{src:ht,alt:"",className:o.profileImg}),e.jsxs("div",{className:o.reviewInfoContainer,children:[e.jsxs("div",{className:o.patientContainer,children:[e.jsx("h6",{className:o.reviewerName,children:"Guy Hawkins"}),e.jsx("p",{className:o.reviewDate,children:"18 Dez, 2023"}),e.jsx("img",{src:pt,alt:"",className:o.starIcon}),e.jsx("p",{className:o.reviewScore,children:"4,5"})]}),e.jsx("div",{className:o.comment,children:"Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."})]})]}),e.jsxs("div",{className:o.replyContainer,children:[e.jsx("img",{src:ut,className:o.profileImg,alt:""}),e.jsxs("div",{className:o.reply,children:[e.jsxs("div",{className:o.doctorInfoContainer,children:[e.jsx("h6",{className:o.doctorName,children:"Spezialist, Leslie Alexander"}),e.jsx("p",{className:o.doctorProfession,children:"Krankenpfleger"})]}),e.jsx("div",{className:o.replyText,children:"Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim."})]})]})]}),vt="_container_260g7_1",gt="_title_260g7_11",ft="_reviewsContainer_260g7_19",jt="_review_260g7_19",Nt="_profileImg_260g7_32",Ct="_reviewContainer_260g7_41",Bt="_reviewInfoContainer_260g7_45",wt="_patientContainer_260g7_51",$t="_reviewerName_260g7_56",St="_reviewDate_260g7_62",It="_reviewScore_260g7_68",bt="_comment_260g7_74",yt="_replyContainer_260g7_81",Dt="_reply_260g7_81",kt="_doctorInfoContainer_260g7_94",Tt="_doctorName_260g7_100",qt="_doctorProfession_260g7_106",Pt="_replyText_260g7_112",f={container:vt,title:gt,reviewsContainer:ft,review:jt,profileImg:Nt,reviewContainer:Ct,reviewInfoContainer:Bt,patientContainer:wt,reviewerName:$t,reviewDate:St,reviewScore:It,comment:bt,replyContainer:yt,reply:Dt,doctorInfoContainer:kt,doctorName:Tt,doctorProfession:qt,replyText:Pt},At=()=>e.jsxs("div",{className:f.container,children:[e.jsx("h5",{className:f.title,children:"32 Bewertungen"}),e.jsxs("div",{className:f.reviewsContainer,children:[e.jsx(S,{}),e.jsx(S,{})]})]}),Lt=At;function Jt({auth:a,employee:s,dates:r}){return console.log(s),e.jsxs(e.Fragment,{children:[e.jsx(L,{user:a.user}),e.jsx(A,{title:"Welcome"}),e.jsxs("div",{className:c.container,children:[e.jsxs("div",{className:c.content,children:[e.jsxs("div",{className:c.left,children:[e.jsx("div",{className:c.imgContainer,children:e.jsx("img",{src:s.profile_image?"/images/"+s.profile_image:Ze,alt:"",className:c.profileImg})}),e.jsxs("div",{className:c.doctorInfoContainer,children:[e.jsx(Ce,{summary:s.summary?s.summary:""}),e.jsx(be,{university:s.university?s.university:"",department:s.department?s.department:""}),e.jsx(Le,{cerfiticate_source:s.certificate_source?s.certificate_source:"",certificate:s.certificate?s.certificate:""}),e.jsx(We,{tags:s.specializations?s.specializations:[]}),e.jsx(Lt,{})]})]}),e.jsxs("div",{className:c.right,children:[e.jsxs("div",{children:[e.jsxs("h5",{className:c.doctorName,children:["Spezialist, ",s.name]}),s.profession?e.jsx("p",{className:c.doctorProfession,children:s.profession}):""]}),e.jsx(M,{tags:s.specializations?s.specializations:[]}),e.jsx(ue,{dates:r,employeeUID:s.uid})]})]}),e.jsx(z,{})]})]})}export{Jt as default};