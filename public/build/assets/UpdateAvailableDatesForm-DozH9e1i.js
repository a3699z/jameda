import{j as e,q as N,W as $}from"./app-BACc9fFJ.js";import{I as x}from"./InputError-Bjq8RDYc.js";import{I as g}from"./InputLabel-h9B-wlVY.js";import{P as C}from"./PrimaryButton-CI2eF_qd.js";function H({day:m,index:l,onChange:i}){return e.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:`days.${l}.date`,type:"date",placeholder:"Date",value:m.date,onChange:u=>i(l,u.target.value)})}function k({hour:m,index:l,dateIndex:i,onChange:u}){return e.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:`hours.${i}${l}.hour`,type:"time",placeholder:"Hour",value:m,onChange:a=>u(l,a.target.value)})}function _({mustVerifyEmail:m,status:l,className:i=""}){const u=N().props.auth.user;console.log(u.available_dates);const{data:a,setData:d,patch:y,errors:b,processing:j,recentlySuccessful:A}=$({dates:u.available_dates?u.available_dates.map(o=>({date:o.date,hours:o.hours?o.hours.map(t=>t):[]})):[{date:"",hours:[]}]}),v=o=>{o.preventDefault(),y(route("dates.update"))};return e.jsxs("section",{className:i,children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Available Dates"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Update your available dates."})]}),e.jsxs("form",{onSubmit:v,className:"mt-6 space-y-6",children:[a.dates.map((o,t)=>e.jsxs("div",{className:"flex items-center space-x-4",children:[e.jsxs("div",{children:[e.jsx(g,{htmlFor:`dates.${t}.date`,value:"Date"}),e.jsx(H,{day:o,index:t,onChange:(c,s)=>{const r=a.dates.map((n,h)=>t===h?{...n,date:s}:n);d("dates",r)}}),e.jsx(x,{className:"mt-2",message:b[`dates.${t}.date`]})]}),o.hours.map((c,s)=>e.jsxs("div",{children:[e.jsx(g,{htmlFor:`dates.${t}.hours.${s}.hour`,value:"Hour"}),e.jsx(k,{hour:c,index:s,dateIndex:t,onChange:(r,n)=>{const h=a.dates.map((p,f)=>t===f?{...p,hours:p.hours.map((w,D)=>s===D?n:w)}:p);d("dates",h)}}),e.jsx(x,{className:"mt-2",message:b[`dates.${t}.hours.${s}.hour`]}),e.jsx("button",{type:"button",onClick:()=>{const r=a.dates.map((n,h)=>t===h?{...n,hours:n.hours.filter((p,f)=>f!==s)}:n);d("dates",r)},className:"mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Delete Hour"})]},s)),e.jsx("button",{type:"button",onClick:()=>{const c=a.dates.map((s,r)=>t===r?{...s,hours:[...s.hours,{hour:""}]}:s);d("dates",c)},className:"mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Add Hour"}),e.jsx("button",{type:"button",onClick:()=>{const c=a.dates.filter((s,r)=>t!==r);d("dates",c)},className:"mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Delete Day"})]},t)),e.jsx("button",{type:"button",onClick:()=>{d("dates",[...a.dates,{date:"",hours:[{hour:""}]}])},className:"mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",children:"Add Day"}),e.jsx("div",{className:"flex justify-end",children:e.jsx(C,{className:"ml-4",processing:j,children:"Update"})})]})]})}export{_ as default};
