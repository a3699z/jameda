import{j as e,Y as i,a,b as c}from"./app-N2NmC3U8.js";import{A as x}from"./AdminLayout-DSG5-TJ8.js";import"./ApplicationLogo-BJwf4ivb.js";import"./ResponsiveNavLink-DINRjonf.js";import"./transition-fE2civ6P.js";function j({auth:l,reservations:t}){console.log(t);const r=s=>{c.post("/admin/reservation/delete",{key:s}).then(d=>{console.log(d.data)})};return e.jsxs(x,{user:l.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Dashboard"}),children:[e.jsx(i,{title:"Dashboard"}),e.jsxs("div",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2",children:"Patient"}),e.jsx("th",{className:"px-4 py-2",children:"Doctor"}),e.jsx("th",{className:"px-4 py-2",children:"Date"}),e.jsx("th",{className:"px-4 py-2",children:"Time"}),e.jsx("th",{className:"px-4 py-2",children:"Actions"})]})}),e.jsx("tbody",{children:t.map(s=>e.jsxs("tr",{children:[e.jsx("td",{className:"border px-4 py-2",children:e.jsx(a,{href:`/admin/user/show/${s.patient.uid}`,children:s.patient.name})}),e.jsx("td",{className:"border px-4 py-2",children:e.jsx(a,{href:`/admin/user/show/${s.employee.uid}`,children:s.employee.name})}),e.jsx("td",{className:"border px-4 py-2",children:s.date}),e.jsx("td",{className:"border px-4 py-2",children:s.time}),e.jsx("td",{className:"border px-4 py-2",children:e.jsx("button",{onClick:d=>{r(s.key)},children:"Delete"})})]},s.key))})]})]})}export{j as default};
