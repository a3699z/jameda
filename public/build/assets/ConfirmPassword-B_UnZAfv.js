import{W as p,r as d,j as s,Y as l}from"./app-oot0dapQ.js";import{G as c}from"./GuestLayout-CzGte1-J.js";import{I as u}from"./InputError-BKxu4qoX.js";import{I as f}from"./InputLabel-CNv3jV7W.js";import{P as x}from"./PrimaryButton-Dyytmgqm.js";import{T as w}from"./TextInput-Dj0MBtuT.js";import"./index-CG9GhI4h.js";import"./ResponsiveNavLink-Cbu_pjMk.js";import"./transition-DqOP3wb-.js";function C(){const{data:e,setData:t,post:a,processing:o,errors:m,reset:i}=p({password:""});d.useEffect(()=>()=>{i("password")},[]);const n=r=>{r.preventDefault(),a(route("password.confirm"))};return s.jsxs(c,{children:[s.jsx(l,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(f,{htmlFor:"password",value:"Password"}),s.jsx(w,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>t("password",r.target.value)}),s.jsx(u,{message:m.password,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(x,{className:"ms-4",disabled:o,children:"Confirm"})})]})]})}export{C as default};