(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"0eea":function(a,t,e){},"56b4":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("q-page",{attrs:{padding:""}},[e("transition",{attrs:{appear:"","enter-active-class":"animated zoomIn","leave-active-class":"animated zoomOut"}},[e("div",[e("q-card",{staticClass:"bg-white my-card q-pt-md",attrs:{bordered:""}},[e("q-card-section",[e("div",{staticClass:"text-h6 text-center"},[a._v("Register")])]),e("q-separator",{staticClass:"q-mb-md",attrs:{inset:""}}),e("q-form",{on:{submit:a.onSubmit}},[e("div",{staticClass:"row q-pa-sm"},[e("div",{staticClass:"col"},[e("q-input",{attrs:{rounded:"",outlined:"",label:"Full name",hint:"first name and surname","lazy-rules":"",clearable:"",rules:[function(a){return!!a||"Field is Required"}]},model:{value:a.formData.name,callback:function(t){a.$set(a.formData,"name",t)},expression:"formData.name"}})],1)]),e("div",{staticClass:"row q-pa-sm"},[e("div",{staticClass:"col"},[e("q-input",{attrs:{rounded:"",outlined:"",label:"Email",hint:"email you registered with","lazy-rules":"",rules:[a.isValidEmailAddress]},model:{value:a.formData.email,callback:function(t){a.$set(a.formData,"email",t)},expression:"formData.email"}})],1)]),e("div",{staticClass:"row q-pa-sm"},[e("div",{staticClass:"col"},[e("q-input",{attrs:{rounded:"",outlined:"",type:"password",label:"Password","lazy-rules":"",rules:[function(a){return a.length>=8||"please your password must be atleast 8 characters"}]},model:{value:a.formData.password,callback:function(t){a.$set(a.formData,"password",t)},expression:"formData.password"}})],1)]),e("div",{staticClass:"row q-pa-sm"},[e("div",{staticClass:"col"},[e("q-input",{attrs:{rounded:"",outlined:"",type:"password",label:"Confirm Password","lazy-rules":"",rules:[function(t){return t===a.formData.password||"passwords dont match"}]},model:{value:a.formData.confirmPassword,callback:function(t){a.$set(a.formData,"confirmPassword",t)},expression:"formData.confirmPassword"}})],1)]),e("div",{staticClass:"row justify-center"},[e("q-toggle",{staticClass:"col-12-sm q-px-sm",attrs:{label:"I accept the license and terms"},model:{value:a.accept,callback:function(t){a.accept=t},expression:"accept"}}),e("div",{staticClass:"text-center"},[e("q-btn",{staticClass:"col-12-sm q-px-sm",attrs:{label:"view License",flat:"",color:"primary"},on:{click:function(t){a.terms=!0}}})],1)],1),e("div",{staticClass:"text-center q-pa-sm"},[e("q-btn",{attrs:{label:"Register",type:"submit",color:"primary"}})],1),e("div",{staticClass:"text-center q-pt-sm"},[e("span",[a._v("already have an account?\r\n              "),e("q-btn",{attrs:{flat:"",to:"/",color:"primary",size:"md",label:"Login"}})],1)])])],1),e("q-dialog",{model:{value:a.terms,callback:function(t){a.terms=t},expression:"terms"}},[e("q-card",[e("q-card-section",{staticClass:"text-center"},[e("div",{staticClass:"text-h6"},[a._v("License and Terms")])]),e("q-separator"),e("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"50vh"}},a._l(15,(function(t){return e("p",{key:t},[a._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.")])})),0),e("q-separator"),e("q-card-actions",{staticClass:"bg-white text-red",attrs:{align:"right"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Close"}})],1)],1)],1)],1)])],1)},r=[],i=(e("e6cf"),e("ded3")),o=e.n(i),n=e("2f62"),l={data(){return{formData:{name:"",email:"",password:"",confirmPassword:""},accept:!1,terms:!1}},methods:o()(o()({},Object(n["b"])("auth",["signup"])),{},{async onSubmit(){if(!0!==this.accept)this.$q.notify({color:"red-5",textColor:"white",icon:"warning",message:"You need to accept the license and terms first"});else{const a={name:this.formData.name,email:this.formData.email,password:this.formData.password,confirmPassword:this.formData.confirmPassword};this.signup(a)}},isValidEmailAddress(a){const t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return t.test(String(a).toLowerCase())}})},c=l,m=(e("ac59"),e("2877")),d=e("9989"),u=e("f09f"),p=e("a370"),f=e("eb85"),v=e("0378"),b=e("27f9"),w=e("9564"),q=e("9c40"),h=e("24e8"),C=e("4b7e"),g=e("7f67"),x=e("eebe"),y=e.n(x),D=Object(m["a"])(c,s,r,!1,null,null,null);t["default"]=D.exports;y()(D,"components",{QPage:d["a"],QCard:u["a"],QCardSection:p["a"],QSeparator:f["a"],QForm:v["a"],QInput:b["a"],QToggle:w["a"],QBtn:q["a"],QDialog:h["a"],QCardActions:C["a"]}),y()(D,"directives",{ClosePopup:g["a"]})},ac59:function(a,t,e){"use strict";var s=e("0eea"),r=e.n(s);r.a}}]);