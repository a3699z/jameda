import{W as n,r as m,j as e,Y as i}from"./app-BACc9fFJ.js";import{A as d}from"./AdminLayout-BzweGtWt.js";import"./ApplicationLogo-S94SrLs6.js";import"./Dropdown-Bo8Rbs60.js";import"./transition-vVAUK3FW.js";import"./ResponsiveNavLink-Dl17lHuB.js";function y({auth:s}){const{data:a,setData:o,post:r,processing:c,errors:x,reset:u}=n({name:""});m.useEffect(()=>()=>{},[]);const l=t=>{console.log("hello"),console.log(a),t.preventDefault(),r(route("admin.team.store"))};return e.jsxs(d,{user:s.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Create Employe"}),children:[e.jsx(i,{title:"Create Employee"}),e.jsx("div",{className:"py-12",children:e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsx("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 text-gray-900",children:"Create Team"})}),e.jsxs("form",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",onSubmit:l,children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",htmlFor:"name",children:"Name"}),e.jsx("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",id:"name",type:"text",placeholder:"Name",onChange:t=>{o("name",t.target.value)}})]}),e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"submit",children:"Create"})})]})]})})]})}export{y as default};
