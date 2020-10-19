(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4aebf114"],{"1f34":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:20,xs:24,sm:24}},[a("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0,"label-width":"68px"}},[a("el-form-item",{attrs:{label:"登录账号",prop:"loginCode"}},[a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入登录账号",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.loginCode,callback:function(t){e.$set(e.queryParams,"loginCode",t)},expression:"queryParams.loginCode"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"用户名称",prop:"userName"}},[a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入用户名称",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.userName,callback:function(t){e.$set(e.queryParams,"userName",t)},expression:"queryParams.userName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"用户状态",clearable:"",size:"small"},model:{value:e.queryParams.status,callback:function(t){e.$set(e.queryParams,"status",t)},expression:"queryParams.status"}},e._l(e.statusOptions,(function(e){return a("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),e._v(" "),a("el-form-item",{attrs:{label:"用户类型",prop:"userType"}},[a("el-select",{staticStyle:{width:"150px"},attrs:{placeholder:"用户状态",clearable:"",size:"small"},model:{value:e.queryParams.userType,callback:function(t){e.$set(e.queryParams,"userType",t)},expression:"queryParams.userType"}},e._l(e.userTypeOptions,(function(e){return a("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),e._v(" "),a("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),e._v(" "),a("el-row",{staticClass:"mb8 pull-right",attrs:{gutter:10}},[a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:user:add"],expression:"['system:user:add']"}],attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.userList},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"40",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"序号",align:"center",type:"index"}}),e._v(" "),a("el-table-column",{attrs:{label:"用户编号",align:"center",prop:"userCode"}}),e._v(" "),a("el-table-column",{attrs:{label:"登录账号",align:"center",prop:"loginCode"}}),e._v(" "),a("el-table-column",{attrs:{label:"用户名称",align:"center",prop:"userName"}}),e._v(" "),a("el-table-column",{attrs:{label:"密码",align:"center",prop:"password"}}),e._v(" "),a("el-table-column",{attrs:{label:"用户类型",align:"center",prop:"userType",formatter:e.userTypeFormat}}),e._v(" "),a("el-table-column",{attrs:{label:"状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-value":"0","inactive-value":"2"},on:{change:function(a){return e.handleStatusChange(t.row)}},model:{value:t.row.status,callback:function(a){e.$set(t.row,"status",a)},expression:"scope.row.status"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"更新时间",align:"center",prop:"updateDate",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(e.parseTime(t.row.updateDate)))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center",width:"180","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:user:edit"],expression:"['system:user:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(a){return e.handleUpdate(t.row)}}},[e._v("修改")]),e._v(" "),1!==t.row.userCode?a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:user:remove"],expression:"['system:user:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-del"},on:{click:function(a){return e.handledel(t.row)}}},[e._v("删除")]):e._e(),e._v(" "),a("el-button",{attrs:{size:"mini",type:"text",icon:"el-icon-key"},on:{click:function(a){return e.handleResetPwd(t.row)}}},[e._v("重置")])]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNo,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNo",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.findPage}})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:e.title,visible:e.open,width:"600px"},on:{"update:visible":function(t){e.open=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"用户id",prop:"userCode"}},[a("el-input",{attrs:{disabled:!0,placeholder:"用户id"},model:{value:e.form.userCode,callback:function(t){e.$set(e.form,"userCode",t)},expression:"form.userCode"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"登录账号",prop:"loginCode"}},[a("el-input",{attrs:{disabled:null!=e.form.userCode,placeholder:"登录账号",maxlength:"11"},model:{value:e.form.loginCode,callback:function(t){e.$set(e.form,"loginCode",t)},expression:"form.loginCode"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"用户名称",prop:"userName"}},[a("el-input",{attrs:{placeholder:"请输入用户名称"},model:{value:e.form.userName,callback:function(t){e.$set(e.form,"userName",t)},expression:"form.userName"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"用户类型",prop:"userType"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.userType,callback:function(t){e.$set(e.form,"userType",t)},expression:"form.userType"}},e._l(e.userTypeOptions,(function(e){return a("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"用户性别"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.sex,callback:function(t){e.$set(e.form,"sex",t)},expression:"form.sex"}},e._l(e.sexOptions,(function(e){return a("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"状态"}},[a("el-radio-group",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(e.statusOptions,(function(t){return a("el-radio",{key:t.dictValue,attrs:{label:t.dictValue}},[e._v(e._s(t.dictLabel))])})),1)],1)],1),e._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入内容"},model:{value:e.form.remarks,callback:function(t){e.$set(e.form,"remarks",t)},expression:"form.remarks"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),e._v(" "),a("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:e.upload.title,visible:e.upload.open,width:"400px"},on:{"update:visible":function(t){return e.$set(e.upload,"open",t)}}},[a("el-upload",{ref:"upload",attrs:{limit:1,accept:".xlsx, .xls",headers:e.upload.headers,action:e.upload.url+"?updateSupport="+e.upload.updateSupport,disabled:e.upload.isUploading,"on-progress":e.handleFileUploadProgress,"on-success":e.handleFileSuccess,"auto-upload":!1,drag:""}},[a("i",{staticClass:"el-icon-upload"}),e._v(" "),a("div",{staticClass:"el-upload__text"},[e._v("\n        将文件拖到此处，或\n        "),a("em",[e._v("点击上传")])]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[a("el-checkbox",{model:{value:e.upload.updateSupport,callback:function(t){e.$set(e.upload,"updateSupport",t)},expression:"upload.updateSupport"}}),e._v("是否更新已经存在的用户数据\n        "),a("el-link",{staticStyle:{"font-size":"12px"},attrs:{type:"info"},on:{click:e.importTemplate}},[e._v("下载模板")])],1),e._v(" "),a("div",{staticClass:"el-upload__tip",staticStyle:{color:"red"},attrs:{slot:"tip"},slot:"tip"},[e._v("提示：仅允许导入“xls”或“xlsx”格式文件！")])]),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.submitFileForm}},[e._v("确 定")]),e._v(" "),a("el-button",{on:{click:function(t){e.upload.open=!1}}},[e._v("取 消")])],1)],1)],1)},s=[],n=a("c0c7"),o=a("5f87"),l={name:"User",components:{},data:function(){return{loading:!0,ids:[],single:!0,multiple:!0,total:0,userList:null,title:"",deptOptions:void 0,open:!1,deptName:void 0,dateRange:[],statusOptions:[],userTypeOptions:[],sexOptions:[],form:{},defaultProps:{children:"children",label:"label"},upload:{open:!1,title:"",isUploading:!1,updateSupport:0,headers:{Authorization:"Bearer "+Object(o["a"])()},url:"/prod-api/system/user/importData"},queryParams:{pageNo:1,pageSize:10,userName:void 0,loginCode:void 0,userType:void 0},rules:{loginCode:[{required:!0,message:"登录账号不能为空",trigger:"blur"}],userName:[{required:!0,message:"用户名称不能为空",trigger:"blur"}],userType:[{required:!0,message:"用户类型不能为空",trigger:"blur"}]}}},watch:{deptName:function(e){this.$refs.tree.filter(e)}},created:function(){var e=this;this.findPage(),this.getDicts("sys_normal_disable,sys_user_type,sys_user_sex").then((function(t){e.statusOptions=t.data["sys_normal_disable"],e.userTypeOptions=t.data["sys_user_type"],e.sexOptions=t.data["sys_user_sex"]}))},methods:{findPage:function(){var e=this;this.loading=!0,Object(n["e"])(this.addDateRange(this.queryParams,this.dateRange)).then((function(t){t.success?(e.userList=t.data.list,e.total=t.data.count,e.loading=!1):e.msg(t.errDesc)}))},userTypeFormat:function(e,t){return this.selectDictLabel(this.userTypeOptions,e.userType)},handleStatusChange:function(e){var t=this,a="0"===e.status?"启用":"停用";this.$confirm('确认要"'+a+'""'+e.userName+'"用户吗?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return"0"===e.status?Object(n["c"])(e.userCode):Object(n["b"])(e.userCode)})).then((function(){t.findPage(),t.msgSuccess(a+"成功")})).catch((function(){}))},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={userCode:void 0,userName:void 0,nickName:void 0,email:void 0,sex:void 0,status:"0",remarks:void 0},this.resetForm("form")},handleQuery:function(){this.findPage()},resetQuery:function(){this.dateRange=[],this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.userCode})),this.single=1!=e.length,this.multiple=!e.length},handleAdd:function(){var e=this;this.reset(),Object(n["f"])().then((function(t){e.open=!0,e.title="添加用户"}))},handleUpdate:function(e){var t=this;this.reset();var a=e.userCode||this.ids;Object(n["f"])(a).then((function(e){t.form=e.data,t.open=!0,t.title="修改用户"}))},handleResetPwd:function(e){var t=this;this.$confirm('确定是否重置"'+e.userName+'"的密码吗',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(n["i"])(e.userCode).then((function(e){e.success||t.msgError(e.errDesc)})).then((function(){t.findPage(),t.msgSuccess("密码重置成功！")}))})).catch((function(){}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&Object(n["j"])(e.form).then((function(t){t.success?(e.msgSuccess("操作成功"),e.open=!1,e.findPage()):e.msgError(t.errDesc)}))}))},handledel:function(e){var t=this,a=e.userCode||this.ids;this.$confirm('是否确认删除用户编号为"'+a+'"的数据项?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var e={userCode:a};Object(n["a"])(e).then((function(e){e.success?(t.findPage(),t.msgSuccess("删除用户成功！")):t.msgError(e.errDesc)}))})).catch((function(){}))},handleExport:function(){var e=this,t=this.queryParams;this.$confirm("是否确认导出所有用户数据项?","警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return Object(n["d"])(t)})).then((function(t){e.download(t.errDesc)})).catch((function(){}))},handleImport:function(){this.upload.title="用户导入",this.upload.open=!0},importTemplate:function(){var e=this;Object(n["h"])().then((function(t){e.download(t.errDesc)}))},handleFileUploadProgress:function(e,t,a){this.upload.isUploading=!0},handleFileSuccess:function(e,t,a){this.upload.open=!1,this.upload.isUploading=!1,this.$refs.upload.clearFiles(),this.$alert(e.errDesc,"导入结果",{dangerouslyUseHTMLString:!0}),this.findPage()},submitFileForm:function(){this.$refs.upload.submit()}}},i=l,u=a("2877"),c=Object(u["a"])(i,r,s,!1,null,null,null);t["default"]=c.exports},c0c7:function(e,t,a){"use strict";a.d(t,"e",(function(){return n})),a.d(t,"f",(function(){return o})),a.d(t,"j",(function(){return l})),a.d(t,"a",(function(){return i})),a.d(t,"d",(function(){return u})),a.d(t,"i",(function(){return c})),a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return p})),a.d(t,"g",(function(){return m})),a.d(t,"l",(function(){return f})),a.d(t,"m",(function(){return h})),a.d(t,"h",(function(){return v}));var r=a("b775"),s=a("c38a");function n(e){return Object(r["a"])({url:"/admin/user/findPage",method:"post",data:e})}function o(e){return Object(r["a"])({url:"/admin/user/get?id="+Object(s["d"])(e),method:"get"})}function l(e){return Object(r["a"])({url:"/admin/user/save",method:"post",data:e})}function i(e){return Object(r["a"])({url:"/admin/user/delete",method:"post",data:e})}function u(e){return Object(r["a"])({url:"/system/user/export",method:"get",params:e})}function c(e){var t={userCode:e};return Object(r["a"])({url:"/admin/user/repeatPassword",method:"post",data:t})}function d(e){var t={id:e};return Object(r["a"])({url:"/admin/user/enable",method:"post",data:t})}function p(e){var t={id:e};return Object(r["a"])({url:"/admin/user/disable",method:"post",data:t})}function m(){return Object(r["a"])({url:"/system/user/profile",method:"get"})}function f(e,t,a){var s={originalPassword:e,newPassword:t,confirmPassword:a};return Object(r["a"])({url:"/api/user/updatePassword",method:"post",params:s})}function h(e){return Object(r["a"])({url:"/system/user/profile/avatar",method:"post",data:e})}function v(){return Object(r["a"])({url:"/system/user/importTemplate",method:"get"})}}}]);