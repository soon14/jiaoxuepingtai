(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3b0424d2"],{"5cfa":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container"},[r("el-form",{attrs:{inline:!0}},[r("el-form-item",{attrs:{label:"部门名称"}},[r("el-input",{attrs:{placeholder:"请输入部门名称",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.deptName,callback:function(t){e.$set(e.queryParams,"deptName",t)},expression:"queryParams.deptName"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"状态"}},[r("el-select",{attrs:{placeholder:"部门状态",clearable:"",size:"small"},model:{value:e.queryParams.status,callback:function(t){e.$set(e.queryParams,"status",t)},expression:"queryParams.status"}},e._l(e.statusOptions,(function(e){return r("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),e._v(" "),r("el-form-item",[r("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),e._v(" "),r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:dept:add"],expression:"['system:dept:add']"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1)],1),e._v(" "),r("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.deptList,"row-key":"deptId","default-expand-all":"","tree-props":{children:"children",hasChildren:"hasChildren"}}},[r("el-table-column",{attrs:{prop:"deptName",label:"部门名称",width:"200"}}),e._v(" "),r("el-table-column",{attrs:{prop:"orderNum",label:"排序",width:"200"}}),e._v(" "),r("el-table-column",{attrs:{prop:"status",label:"状态",formatter:e.statusFormat,width:"100"}}),e._v(" "),r("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",[e._v(e._s(e.parseTime(t.row.createTime)))])]}}])}),e._v(" "),r("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:dept:edit"],expression:"['system:dept:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(r){return e.handleUpdate(t.row)}}},[e._v("修改")]),e._v(" "),r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:dept:add"],expression:"['system:dept:add']"}],attrs:{size:"mini",type:"text",icon:"el-icon-plus"},on:{click:function(r){return e.handleAdd(t.row)}}},[e._v("新增")]),e._v(" "),0!=t.row.parentId?r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:dept:remove"],expression:"['system:dept:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(r){return e.handleDelete(t.row)}}},[e._v("删除")]):e._e()]}}])})],1),e._v(" "),r("el-dialog",{attrs:{title:e.title,visible:e.open,width:"600px"},on:{"update:visible":function(t){e.open=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[r("el-row",[0!==e.form.parentId?r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"上级部门",prop:"parentId"}},[r("treeselect",{attrs:{options:e.deptOptions,placeholder:"选择上级部门"},model:{value:e.form.parentId,callback:function(t){e.$set(e.form,"parentId",t)},expression:"form.parentId"}})],1)],1):e._e(),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"部门名称",prop:"deptName"}},[r("el-input",{attrs:{placeholder:"请输入部门名称"},model:{value:e.form.deptName,callback:function(t){e.$set(e.form,"deptName",t)},expression:"form.deptName"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"显示排序",prop:"orderNum"}},[r("el-input-number",{attrs:{"controls-position":"right",min:0},model:{value:e.form.orderNum,callback:function(t){e.$set(e.form,"orderNum",t)},expression:"form.orderNum"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"负责人",prop:"leader"}},[r("el-input",{attrs:{placeholder:"请输入负责人",maxlength:"20"},model:{value:e.form.leader,callback:function(t){e.$set(e.form,"leader",t)},expression:"form.leader"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"联系电话",prop:"phone"}},[r("el-input",{attrs:{placeholder:"请输入联系电话",maxlength:"11"},model:{value:e.form.phone,callback:function(t){e.$set(e.form,"phone",t)},expression:"form.phone"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[r("el-input",{attrs:{placeholder:"请输入邮箱",maxlength:"50"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1)],1),e._v(" "),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"部门状态"}},[r("el-radio-group",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(e.statusOptions,(function(t){return r("el-radio",{key:t.dictValue,attrs:{label:t.dictValue}},[e._v(e._s(t.dictLabel))])})),1)],1)],1)],1)],1),e._v(" "),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),e._v(" "),r("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},s=[],n=r("fcb7"),l=r("ca17"),o=r.n(l),i=(r("542c"),{name:"Dept",components:{Treeselect:o.a},data:function(){return{loading:!0,deptList:[],deptOptions:void 0,title:"",open:!1,statusOptions:[],queryParams:{deptName:void 0,status:void 0},form:{},rules:{parentId:[{required:!0,message:"上级部门不能为空",trigger:"blur"}],deptName:[{required:!0,message:"部门名称不能为空",trigger:"blur"}],orderNum:[{required:!0,message:"菜单顺序不能为空",trigger:"blur"}],email:[{type:"email",message:"'请输入正确的邮箱地址",trigger:["blur","change"]}],phone:[{pattern:/^1[3|4|5|6|7|8|9][0-9]\d{8}$/,message:"请输入正确的手机号码",trigger:"blur"}]}}},created:function(){var e=this;this.getList(),this.getDicts("sys_normal_disable").then((function(t){e.statusOptions=t.data["sys_normal_disable"]}))},methods:{getList:function(){var e=this;this.loading=!0,Object(n["d"])(this.queryParams).then((function(t){e.deptList=t.data,e.loading=!1}))},getTreeselect:function(){var e=this;Object(n["f"])().then((function(t){e.deptOptions=t.data}))},statusFormat:function(e,t){return this.selectDictLabel(this.statusOptions,e.status)},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={deptId:void 0,parentId:100,deptName:void 0,orderNum:void 0,leader:void 0,phone:void 0,email:void 0,status:"0"},this.resetForm("form")},handleQuery:function(){this.getList()},handleAdd:function(e){this.reset(),this.getTreeselect(),void 0!=e&&(this.form.parentId=e.deptId),this.open=!0,this.title="添加部门"},handleUpdate:function(e){var t=this;this.reset(),this.getTreeselect(),Object(n["c"])(e.deptId).then((function(e){t.form=e.data,t.open=!0,t.title="修改部门"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(void 0!=e.form.deptId?Object(n["g"])(e.form).then((function(t){200===t.code?(e.msgSuccess("修改成功"),e.open=!1,e.getList()):e.msgError(t.msg)})):Object(n["a"])(e.form).then((function(t){200===t.code?(e.msgSuccess("新增成功"),e.open=!1,e.getList()):e.msgError(t.msg)})))}))},handleDelete:function(e){var t=this;this.$confirm('是否确认删除名称为"'+e.deptName+'"的数据项?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return Object(n["b"])(e.deptId)})).then((function(){t.getList(),t.msgSuccess("删除成功")})).catch((function(){}))}}}),d=i,c=r("2877"),u=Object(c["a"])(d,a,s,!1,null,null,null);t["default"]=u.exports},fcb7:function(e,t,r){"use strict";r.d(t,"d",(function(){return s})),r.d(t,"c",(function(){return n})),r.d(t,"f",(function(){return l})),r.d(t,"e",(function(){return o})),r.d(t,"a",(function(){return i})),r.d(t,"g",(function(){return d})),r.d(t,"b",(function(){return c}));var a=r("b775");function s(e){return Object(a["a"])({url:"/system/dept/list",method:"get",params:e})}function n(e){return Object(a["a"])({url:"/system/dept/"+e,method:"get"})}function l(){return Object(a["a"])({url:"/system/dept/treeselect",method:"get"})}function o(e){return Object(a["a"])({url:"/system/dept/roleDeptTreeselect/"+e,method:"get"})}function i(e){return Object(a["a"])({url:"/system/dept",method:"post",data:e})}function d(e){return Object(a["a"])({url:"/system/dept",method:"put",data:e})}function c(e){return Object(a["a"])({url:"/system/dept/"+e,method:"delete"})}}}]);