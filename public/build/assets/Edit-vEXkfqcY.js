import{j as s,Y as a}from"./app-WEg4vPm3.js";import{A as o}from"./AuthenticatedLayout-D0divAYA.js";import i from"./DeleteUserForm-Buefz0HM.js";import l from"./UpdatePasswordForm-GU8aWjZp.js";import t from"./UpdateProfileInformationForm-C7IEE4R_.js";import d from"./UpdateAvailableDatesForm-CW8Yj2T_.js";import x from"./ContactsInsuranceForm-jSTZCF3t.js";import p from"./ProfessionalDateForm-gotGm1Xl.js";import n from"./OtherPatientInfo-Bneo1h1B.js";import"./ResponsiveNavLink-BNTbqkZm.js";import"./transition-BiwUlMm4.js";import"./index-BDTbLU_q.js";import"./InputError-CGcZVB9J.js";import"./InputLabel-BQlSDdYb.js";import"./TextInput-D-z3eLAp.js";import"./PrimaryButton-DTz9lTN5.js";function D({auth:e,mustVerifyEmail:m,status:r}){return console.log(e.user),s.jsxs(o,{user:e.user,header:s.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Profile"}),children:[s.jsx(a,{title:"Profile"}),s.jsx("div",{className:"py-12",children:s.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6",children:[s.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:s.jsx(t,{mustVerifyEmail:m,status:r,className:"max-w-xl"})}),s.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:s.jsx(l,{className:"max-w-xl"})}),s.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:s.jsx(x,{className:"max-w-xl"})}),e.user.user_type==="employee"&&s.jsxs("div",{children:[s.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:s.jsx(d,{className:"max-w-xl"})}),s.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:s.jsx(p,{className:"max-w-xl"})})]}),e.user.user_type==="patient"&&s.jsx("div",{children:s.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:s.jsx(n,{className:"max-w-xl"})})}),s.jsx("div",{className:"p-4 sm:p-8 bg-white shadow sm:rounded-lg",children:s.jsx(i,{className:"max-w-xl"})})]})})]})}export{D as default};