(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7fa21b9b","chunk-005cb0c7"],{"4b72":function(e,t,a){"use strict";a.d(t,"e",(function(){return i})),a.d(t,"d",(function(){return l})),a.d(t,"b",(function(){return r})),a.d(t,"g",(function(){return o})),a.d(t,"c",(function(){return s})),a.d(t,"f",(function(){return u})),a.d(t,"a",(function(){return c}));var n=a("b775");function i(e){return Object(n["a"])({url:"/admin/dev/gen/page",method:"post",params:e})}function l(e){return Object(n["a"])({url:"/admin/dev/gen/db/page",method:"post",params:e})}function r(e){return Object(n["a"])({url:"/admin/dev/gen/"+e,method:"get"})}function o(e){return Object(n["a"])({url:"/admin/dev/gen/save",method:"post",data:e,paramsType:"json"})}function s(e){return Object(n["a"])({url:"/admin/dev/gen/importTable",method:"post",params:e})}function u(e){return Object(n["a"])({url:"/admin/dev/gen/preview/"+e,method:"get"})}function c(e){return Object(n["a"])({url:"/admin/dev/gen/"+e,method:"delete"})}},"6f72":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"导入表",visible:e.visible,width:"800px",top:"5vh"},on:{"update:visible":function(t){e.visible=t}}},[a("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0}},[a("el-form-item",{attrs:{label:"表名称",prop:"tableName"}},[a("el-input",{attrs:{placeholder:"请输入表名称",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.tableName,callback:function(t){e.$set(e.queryParams,"tableName",t)},expression:"queryParams.tableName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"表描述",prop:"tableComment"}},[a("el-input",{attrs:{placeholder:"请输入表描述",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.tableComment,callback:function(t){e.$set(e.queryParams,"tableComment",t)},expression:"queryParams.tableComment"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),e._v(" "),a("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),e._v(" "),a("el-row",[a("el-table",{attrs:{data:e.dbTableList,height:"260px"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"tableName",label:"表名称"}}),e._v(" "),a("el-table-column",{attrs:{prop:"tableComment",label:"表描述"}}),e._v(" "),a("el-table-column",{attrs:{prop:"updateTime",label:"更新时间"}})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}})],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.handleImportTable}},[e._v("确 定")]),e._v(" "),a("el-button",{on:{click:function(t){e.visible=!1}}},[e._v("取 消")])],1)],1)},i=[],l=a("4b72"),r={data:function(){return{visible:!1,tables:[],total:0,dbTableList:[],queryParams:{pageNum:1,pageSize:10,tableName:void 0,tableComment:void 0}}},methods:{show:function(){this.getList(),this.visible=!0},handleSelectionChange:function(e){this.tables=e.map((function(e){return e.tableName}))},getList:function(){var e=this;Object(l["d"])(this.queryParams).then((function(t){t.success&&(e.dbTableList=t.data.list,e.total=t.data.count)}))},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleImportTable:function(){var e=this;Object(l["c"])({tables:this.tables.join(",")}).then((function(t){t.success?(e.msgSuccess(t.msg),e.visible=!1,e.$emit("ok")):e.msgError(t.errDesc)}))}}},o=r,s=a("2877"),u=Object(s["a"])(o,n,i,!1,null,null,null);t["default"]=u.exports},"82c8":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0,"label-width":"68px"}},[a("el-form-item",{attrs:{label:"表名称",prop:"tableName"}},[a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入表名称",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.tableName,callback:function(t){e.$set(e.queryParams,"tableName",t)},expression:"queryParams.tableName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"表描述",prop:"tableComment"}},[a("el-input",{staticStyle:{width:"150px"},attrs:{placeholder:"请输入表描述",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.tableComment,callback:function(t){e.$set(e.queryParams,"tableComment",t)},expression:"queryParams.tableComment"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),e._v(" "),a("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),e._v(" "),a("el-row",{staticClass:"mb8",attrs:{gutter:10}},[a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["tool:gen:code"],expression:"['tool:gen:code']"}],attrs:{type:"primary",icon:"el-icon-download",size:"mini"},on:{click:e.handleGenTable}},[e._v("生成")])],1),e._v(" "),a("el-col",{attrs:{span:1.5}},[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["tool:gen:import"],expression:"['tool:gen:import']"}],attrs:{type:"success",icon:"el-icon-upload",size:"mini"},on:{click:e.openImportTable}},[e._v("导入")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.tableList},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{label:"序号",align:"center",prop:"tableId",width:"50px"}}),e._v(" "),a("el-table-column",{attrs:{label:"表名称",align:"center",prop:"tableName","show-overflow-tooltip":!0,width:"130"}}),e._v(" "),a("el-table-column",{attrs:{label:"表描述",align:"center",prop:"tableComment","show-overflow-tooltip":!0,width:"130"}}),e._v(" "),a("el-table-column",{attrs:{label:"实体",align:"center",prop:"className","show-overflow-tooltip":!0,width:"130"}}),e._v(" "),a("el-table-column",{attrs:{label:"更新时间",align:"center",prop:"updateTime",width:"160"}}),e._v(" "),a("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["tool:gen:preview"],expression:"['tool:gen:preview']"}],attrs:{type:"text",size:"small",icon:"el-icon-view"},on:{click:function(a){return e.handlePreview(t.row)}}},[e._v("预览")]),e._v(" "),a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["tool:gen:edit"],expression:"['tool:gen:edit']"}],attrs:{type:"text",size:"small",icon:"el-icon-edit"},on:{click:function(a){return e.handleEditTable(t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["tool:gen:remove"],expression:"['tool:gen:remove']"}],attrs:{type:"text",size:"small",icon:"el-icon-delete"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")]),e._v(" "),a("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["tool:gen:code"],expression:"['tool:gen:code']"}],attrs:{type:"text",size:"small",icon:"el-icon-download"},on:{click:function(a){return e.handleGenTable(t.row)}}},[e._v("生成代码")])]}}])})],1),e._v(" "),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),e._v(" "),a("el-dialog",{attrs:{title:e.preview.title,visible:e.preview.open,width:"80%",top:"5vh"},on:{"update:visible":function(t){return e.$set(e.preview,"open",t)}}},[a("el-tabs",{model:{value:e.preview.activeName,callback:function(t){e.$set(e.preview,"activeName",t)},expression:"preview.activeName"}},e._l(e.preview.data,(function(t,n){return a("el-tab-pane",{key:n,attrs:{label:n.substring(n.lastIndexOf("/")+1,n.indexOf(".vm")),name:n.substring(n.lastIndexOf("/")+1,n.indexOf(".vm"))}},[a("pre",[e._v(e._s(t))])])})),1)],1),e._v(" "),a("import-table",{ref:"import",on:{ok:e.handleQuery}})],1)},i=[],l=a("4b72"),r=a("6f72"),o=(a("a481"),a("3b2b"),a("bc3a")),s=a.n(o),u=a("5f87"),c={xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",zip:"application/zip"},m="/prod-api";function d(e,t){var a=m+e;s()({method:"get",url:a,responseType:"blob",headers:{Authorization:"Bearer "+Object(u["a"])()}}).then((function(e){p(e,c.zip)}))}function p(e,t){var a=document.createElement("a"),n=new Blob([e.data],{type:t}),i=new RegExp("filename=([^;]+\\.[^\\.;]+);*"),l=decodeURI(e.headers["content-disposition"]),r=i.exec(l),o=r[1];o=o.replace(/\"/g,""),a.href=URL.createObjectURL(n),a.setAttribute("download",o),document.body.appendChild(a),a.click(),document.body.appendChild(a)}var b={name:"Gen",components:{importTable:r["default"]},data:function(){return{loading:!0,uniqueId:"",ids:[],tableNames:[],single:!0,multiple:!0,total:0,tableList:[],dateRange:"",queryParams:{pageNum:1,pageSize:10,tableName:void 0,tableComment:void 0},preview:{open:!1,title:"代码预览",data:{},activeName:"entity.java"}}},created:function(){this.getList()},activated:function(){var e=this.$route.query.t;null!=e&&e!=this.uniqueId&&(this.uniqueId=e,this.resetQuery())},methods:{getList:function(){var e=this;this.loading=!0,Object(l["e"])(this.addDateRange(this.queryParams,this.dateRange)).then((function(t){t.success&&(e.tableList=t.data.list,e.total=t.data.count),e.loading=!1}))},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},handleGenTable:function(e){var t=e.tableName||this.tableNames;""!=t?d("/admin/dev/gen/batchGenCode?tables="+t,"ruoyi"):this.msgError("请选择要生成的数据")},openImportTable:function(){this.$refs.import.show()},resetQuery:function(){this.dateRange=[],this.resetForm("queryForm"),this.handleQuery()},handlePreview:function(e){var t=this;Object(l["f"])(e.tableId).then((function(e){t.preview.data=e.data,t.preview.open=!0}))},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.tableId})),this.tableNames=e.map((function(e){return e.tableName})),this.single=1!=e.length,this.multiple=!e.length},handleEditTable:function(e){var t=e.tableId||this.ids[0];this.$router.push({path:"/gen/edit",query:{tableId:t}})},handleDelete:function(e){var t=this,a=e.tableId||this.ids;this.$confirm('是否确认删除表编号为"'+a+'"的数据项?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return Object(l["a"])(a)})).then((function(){t.getList(),t.msgSuccess("删除成功")})).catch((function(){}))}}},h=b,v=a("2877"),f=Object(v["a"])(h,n,i,!1,null,null,null);t["default"]=f.exports}}]);