import{j as s,Y as a}from"./app-DAcVjhCz.js";import{A as o}from"./AuthenticatedLayout-ZD1EWqKH.js";import i from"./DeleteUserForm-B17kDugI.js";import l from"./UpdatePasswordForm-Dp3W42It.js";import t from"./UpdateProfileInformationForm-CTES0c_q.js";import d from"./UpdateAvailableDatesForm-D4nMv_QD.js";import x from"./ContactsInsuranceForm-rurKCwmB.js";import p from"./ProfessionalDateForm-w5HGTemu.js";import n from"./OtherPatientInfo-D7mhQHlH.js";import"./ResponsiveNavLink-CZnH5TDj.js";import"./transition-Bis1IJZo.js";import"./index-FUIWOrOh.js";import"./InputError-C02p4y2P.js";import"./InputLabel-P464kAsN.js";import"./TextInput-B4j1qjOo.js";import"./PrimaryButton-Cl-AWz67.js";function D({auth:e,mustVerifyEmail:m,status:r}){return console.log(e.user),s.jsxs(o,{user:e.user,header:s.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Profile"}),children:[s.jsx(a,{title:"Profile"}),s.jsx("div",{className:"py-12",children:s.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6",children:[s.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:s.jsx(t,{mustVerifyEmail:m,status:r,className:"max-w-xl"})}),s.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:s.jsx(l,{className:"max-w-xl"})}),s.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:s.jsx(x,{className:"max-w-xl"})}),e.user.user_type==="employee"&&s.jsxs("div",{children:[s.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:s.jsx(d,{className:"max-w-xl"})}),s.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:s.jsx(p,{className:"max-w-xl"})})]}),e.user.user_type==="patient"&&s.jsx("div",{children:s.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:s.jsx(n,{className:"max-w-xl"})})}),s.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:s.jsx(i,{className:"max-w-xl"})})]})})]})}export{D as default};