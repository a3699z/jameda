import{j as e,a as P,r as h,W as g}from"./app-yjDTrfVK.js";import{N as z}from"./index-qBXMzZiu.js";import{p as I}from"./profile-L6iVzvPW.js";import{v as B}from"./videoIcon-D-ZnD6W4.js";import{c as w}from"./calendarIcon-DTKKvkUL.js";import{u as T}from"./index-DYyK79sN.js";import"./ResponsiveNavLink-D7rCTwUK.js";import"./transition-DVNeP1iG.js";const S="_container_np1aw_1",k="_content_np1aw_11",A="_profilePhotoContainer_np1aw_27",F="_profilePhoto_np1aw_27",D="_infoContainer_np1aw_49",E="_name_np1aw_59",M="_email_np1aw_75",u={container:S,content:k,profilePhotoContainer:A,profilePhoto:F,infoContainer:D,name:E,email:M},U=({auth:n})=>{const a="images/"+n.user.profile_image;return e.jsx("div",{className:u.container,children:e.jsxs("div",{className:u.content,children:[e.jsx("div",{className:u.profilePhotoContainer,children:e.jsx("img",{src:a,className:u.profilePhoto,alt:""})}),e.jsxs("div",{className:u.infoContainer,children:[e.jsx("h6",{className:u.name,children:n.user.username}),e.jsx("p",{className:u.email,children:n.user.email})]})]})})},R="_container_5ogd9_1",V="_menu_5ogd9_21",Z="_menuItem_5ogd9_31",H="_active_5ogd9_61",x={container:R,menu:V,menuItem:Z,active:H},L=({tabs:n,activeTab:a,changeTab:p})=>e.jsx("div",{className:x.container,children:e.jsx("div",{className:x.menu,children:n.map(t=>e.jsx("button",{onClick:()=>p(t.id),to:t.path,className:[x.menuItem,t.id==a?x.active:null].join(" "),children:t.label},t.id))})}),W="_container_fh1h0_1",O="_contentContainer_fh1h0_11",q="_content_fh1h0_11",j={container:W,contentContainer:O,content:q},J="_container_c0lzu_1",K="_title_c0lzu_15",Q="_visitContainer_c0lzu_33",X="_showMoreBtn_c0lzu_55",N={container:J,title:K,visitContainer:Q,showMoreBtn:X},Y="_container_23nnc_1",ee="_profilePhoto_23nnc_17",ne="_appointmentInfo_23nnc_25",se="_doctorInfo_23nnc_35",te="_info_23nnc_59",ae="_appointmentType_23nnc_71",ie="_doctorName_23nnc_95",re="_profession_23nnc_109",oe="_dateInfo_23nnc_123",ce="_date_23nnc_123",le="_time_23nnc_147",me="_btnGroup_23nnc_161",pe="_btn_23nnc_161",l={container:Y,profilePhoto:ee,appointmentInfo:ne,doctorInfo:se,info:te,appointmentType:ae,doctorName:ie,profession:re,dateInfo:oe,date:ce,time:le,btnGroup:me,btn:pe},_e=({visitType:n,patientName:a,date:p,time:t,visitId:f,profile_image:d=""})=>e.jsxs("div",{className:l.container,children:[e.jsxs("div",{className:l.appointmentInfo,children:[e.jsxs("div",{className:l.doctorInfo,children:[e.jsx("img",{src:d?"/images/"+d:I,alt:"",className:l.profilePhoto}),e.jsxs("div",{className:l.info,children:[e.jsxs("h4",{className:l.appointmentType,children:[e.jsx("img",{src:B,alt:""}),n]}),e.jsx("h5",{className:l.doctorName,children:a})]})]}),e.jsxs("div",{className:l.dateInfo,children:[e.jsx("div",{className:l.date,children:p}),e.jsx("div",{className:l.time,children:t})]})]}),e.jsx("div",{className:l.btnGroup,children:e.jsxs(P,{className:l.btn,href:route("visit",f),children:[e.jsx("img",{src:w,alt:""}),"Termindetails"]})})]}),de=({reservations:n})=>(h.useState(n),e.jsxs("div",{className:N.container,children:[e.jsx("h5",{className:N.title,children:"Abgeschlossene Besuche"}),e.jsx("div",{className:N.visitContainer,children:n.map(a=>e.jsx(_e,{visitType:a.is_online?"Videosprechstunde Termin":"Vor-Ort-Termin",patientName:a.patient.name,date:a.date,time:a.hour,visitId:a.key,profile_image:a.patient.profile_image?a.patient.profile_image:""},a.key))})]})),ue="_container_m6r9z_1",fe="_titleContainer_m6r9z_7",he="_title_m6r9z_7",xe="_info_m6r9z_23",je="_formContainer_m6r9z_33",Ne="_formTitle_m6r9z_37",ve="_btnGroup_m6r9z_45",be="_cancelBtn_m6r9z_51",ge="_saveBtn_m6r9z_67",Ce="_formGroup_m6r9z_84",ye="_label_m6r9z_91",$e="_input_m6r9z_97",i={container:ue,titleContainer:fe,title:he,info:xe,formContainer:je,formTitle:Ne,btnGroup:ve,cancelBtn:be,saveBtn:ge,formGroup:Ce,label:ye,input:$e},Ge=({auth:n})=>{const[a,p]=h.useState(null),[t,f]=n.user.profile_image?h.useState("/images/"+n.user.profile_image):h.useState("https://via.placeholder.com/150"),{data:d,setData:_,errors:C,post:v,reset:b,processing:r,recentlySuccessful:nn}=g({profileImage:null,userName:n.user.username?n.user.username:"",name:n.user.name?n.user.name:"",email:n.user.email?n.user.email:""}),y=o=>{const m=o.target.files[0];m.type.match(/image\/(png|jpg|jpeg)/)?(p(m),_("profileImage",m),$(m),console.log(m)):console.error("Unsupported file type")},$=o=>{const m=new FileReader;console.log(m),m.addEventListener("load",()=>{f(m.result)}),m.readAsDataURL(o)},G=o=>{o.preventDefault(),v(route("profile.update"))};return e.jsxs("div",{className:i.container,children:[e.jsxs("div",{className:i.titleContainer,children:[e.jsx("h4",{className:i.title,children:"Persönliche Daten"}),e.jsx("p",{className:i.info,children:"Hier können Sie Ihre persönlichen Daten aktualisieren."})]}),e.jsxs("div",{className:i.formContainer,children:[e.jsxs("form",{children:[e.jsxs("div",{className:i.imageContainer,children:[e.jsx("img",{src:t,alt:"profile",className:i.image}),e.jsx("div",{className:i.uploadBtn,onClick:()=>{document.getElementById("image").click()},role:"div",children:"Bild hochladen"}),e.jsx("input",{type:"file",id:"image",style:{display:"none"},onChange:o=>{y(o)}})]}),e.jsxs("div",{className:i.formGroup,children:[e.jsx("label",{htmlFor:"userName",className:i.label,children:"Benutzername"}),e.jsx("input",{type:"text",name:"userName",id:"userName",className:i.input,placeholder:"ritaaagreiner",onChange:o=>_("userName",o.target.value),value:n.user.username})]}),e.jsxs("div",{className:i.formGroup,children:[e.jsx("label",{htmlFor:"name",className:i.label,children:"Name"}),e.jsx("input",{type:"text",name:"name",id:"name",className:i.input,placeholder:"Rita Greiner",onChange:o=>_("name",o.target.value),value:n.user.name})]}),e.jsxs("div",{className:i.formGroup,children:[e.jsx("label",{htmlFor:"email",className:i.label,children:"E-mail"}),e.jsx("input",{type:"email",name:"email",id:"email",className:i.input,placeholder:"ritagreiner@gmail.com",onChange:o=>_("email",o.target.value),value:n.user.email})]})]}),e.jsx("div",{className:i.btnGroup,children:e.jsx("button",{className:i.saveBtn,onClick:o=>{G(o)},children:"Speichern"})})]})]})},Pe="_container_eps51_1",ze={container:Pe},Ie="_container_1p208_1",Be="_titleContainer_1p208_6",we="_title_1p208_6",Te="_info_1p208_22",Se="_formContainer_1p208_31",ke="_formTitle_1p208_34",Ae="_submitBtn_1p208_42",Fe="_formGroup_1p208_56",De="_label_1p208_63",Ee="_input_1p208_69",c={container:Ie,titleContainer:Be,title:we,info:Te,formContainer:Se,formTitle:ke,submitBtn:Ae,formGroup:Fe,label:De,input:Ee},Me=()=>{const n=()=>{};return e.jsxs("div",{className:c.container,children:[e.jsxs("div",{className:c.titleContainer,children:[e.jsx("h4",{className:c.title,children:"Passwort Andern"}),e.jsx("p",{className:c.info,children:"Sie können Ihr Passwort in diesem Bereich aktualisieren und Ihre Mitgliedschaft fortsetzen."})]}),e.jsxs("div",{className:c.formContainer,children:[e.jsxs("form",{children:[e.jsxs("div",{class:c.formGroup,children:[e.jsx("label",{for:"password",class:c.label,children:"Passwort"}),e.jsx("input",{type:"text",name:"password",id:"password",class:c.input,placeholder:"Altes Passwort",onChange:n})]}),e.jsxs("div",{class:c.formGroup,children:[e.jsx("label",{for:"name",class:c.label,children:"Neues Passwort"}),e.jsx("input",{type:"text",name:"name",id:"name",class:c.input,placeholder:"Neues Passwort",onChange:n})]}),e.jsxs("div",{class:c.formGroup,children:[e.jsx("label",{for:"email",class:c.label,children:"Neues Passwort (Nochmals)"}),e.jsx("input",{type:"mail",name:"email",id:"email",class:c.input,placeholder:"Neues Passwort (Nochmals)",onChange:n})]})]}),e.jsx("button",{className:c.submitBtn,children:"Passwort zurücksetzen"})]})]})},Ue="_container_h34ms_1",Re="_titleContainer_h34ms_7",Ve="_title_h34ms_7",Ze="_info_h34ms_23",He="_formContainer_h34ms_33",Le="_formTitle_h34ms_37",We="_btnGroup_h34ms_45",Oe="_cancelBtn_h34ms_51",qe="_saveBtn_h34ms_67",Je="_formGroup_h34ms_82",Ke="_label_h34ms_89",Qe="_input_h34ms_95",Xe="_textArea_h34ms_114",s={container:Ue,titleContainer:Re,title:Ve,info:Ze,formContainer:He,formTitle:Le,btnGroup:We,cancelBtn:Oe,saveBtn:qe,formGroup:Je,label:Ke,input:Qe,textArea:Xe},Ye=({auth:n,flash:a})=>{const{data:p,setData:t,errors:f,post:d,reset:_,processing:C,recentlySuccessful:v}=g({summary:n.user.summary?n.user.summary:"",university:n.user.university?n.user.university:"",department:n.user.department?n.user.department:"",certificate_source:n.user.certificate_source?n.user.certificate_source:"",certificate:n.user.certificate?n.user.certificate:"",specializations:n.user.specializations?n.user.specializations:"",profession:n.user.profession?n.user.profession:""}),b=r=>{r.preventDefault(),d(route("profile.update_employee"))};return e.jsxs("div",{className:s.container,children:[e.jsxs("div",{className:s.titleContainer,children:[e.jsx("h4",{className:s.title,children:"Persönliche Daten"}),e.jsx("p",{className:s.info,children:"Hier können Sie Ihre persönlichen Daten aktualisieren."})]}),e.jsxs("div",{className:s.formContainer,children:[e.jsxs("form",{children:[e.jsxs("div",{className:s.formGroup,children:[e.jsx("label",{className:s.label,children:"Zusammenfassung"}),e.jsx("textarea",{className:s.textArea,name:"summary",value:n.user.summary?n.user.summary:"",onChange:r=>t("summary",r.target.value)})]}),e.jsxs("div",{className:s.formGroup,children:[e.jsx("label",{className:s.label,children:"Universität"}),e.jsx("input",{type:"text",name:"university",className:s.input,value:n.user.university?n.user.university:"",onChange:r=>t("university",r.target.value)})]}),e.jsxs("div",{className:s.formGroup,children:[e.jsx("label",{className:s.label,children:"Fachbereich"}),e.jsx("input",{type:"text",name:"department",className:s.input,value:n.user.department?n.user.department:"",onChange:r=>t("department",r.target.value)})]}),e.jsxs("div",{className:s.formGroup,children:[e.jsx("label",{className:s.label,children:"Zertifikat Universität"}),e.jsx("input",{type:"text",name:"certificate_source",className:s.input,value:n.user.certificate_source?n.user.certificate_source:"",onChange:r=>t("certificate_source",r.target.value)})]}),e.jsxs("div",{className:s.formGroup,children:[e.jsx("label",{className:s.label,children:"Zertifikat"}),e.jsx("input",{type:"text",name:"certificate",className:s.input,value:n.user.certificate?n.user.certificate:"",onChange:r=>t("certificate",r.target.value)})]}),e.jsxs("div",{className:s.formGroup,children:[e.jsx("label",{className:s.label,children:"Beruf"}),e.jsx("input",{type:"text",name:"profession",className:s.input,value:n.user.profession?n.user.profession:"",onChange:r=>t("profession",r.target.value)})]}),e.jsxs("div",{className:s.formGroup,children:[e.jsx("label",{className:s.label,children:"Spezialisierung"}),e.jsx("textarea",{className:s.textArea,name:"specializations",value:n.user.specializations?n.user.specializations:"",onChange:r=>t("specializations",r.target.value)}),e.jsx("span",{className:s.info,children:"Write your specializations separated by comma ','"})]})]}),e.jsx("div",{className:s.btnGroup,children:e.jsx("button",{className:s.saveBtn,onClick:r=>{b(r)},children:"Speichern"})})]})]})},en=({auth:n})=>e.jsxs("div",{className:ze.container,children:[e.jsx(Ge,{auth:n}),e.jsx(Me,{}),e.jsx(Ye,{auth:n})]}),pn=({auth:n,reservations:a})=>{const p=[{id:"profile",label:"Meine Termine",component:e.jsx(de,{reservations:a})},{id:"accountSettings",label:"Account Einstellungen",component:e.jsx(en,{auth:n})}];console.log(a),T();const[t,f]=h.useState("profile"),d=_=>{f(_)};return e.jsxs(e.Fragment,{children:[e.jsx(z,{user:n.user}),e.jsxs("div",{className:j.container,children:[e.jsx(U,{auth:n}),e.jsxs("div",{className:j.contentContainer,children:[e.jsx(L,{tabs:p,activeTab:t,changeTab:d}),e.jsx("div",{className:j.content,children:p.find(_=>_.id===t).component})]})]})]})};export{pn as default};