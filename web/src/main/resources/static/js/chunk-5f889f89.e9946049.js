(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f889f89"],{"202d":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-form",{ref:"queryForm",attrs:{model:e.queryParams,inline:!0,"label-width":"68px"}},[i("el-form-item",{attrs:{label:"公告标题",prop:"noticeTitle"}},[i("el-input",{attrs:{placeholder:"请输入公告标题",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.noticeTitle,callback:function(t){e.$set(e.queryParams,"noticeTitle",t)},expression:"queryParams.noticeTitle"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"操作人员",prop:"createBy"}},[i("el-input",{attrs:{placeholder:"请输入操作人员",clearable:"",size:"small"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleQuery(t)}},model:{value:e.queryParams.createBy,callback:function(t){e.$set(e.queryParams,"createBy",t)},expression:"queryParams.createBy"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"类型",prop:"noticeType"}},[i("el-select",{attrs:{placeholder:"公告类型",clearable:"",size:"small"},model:{value:e.queryParams.noticeType,callback:function(t){e.$set(e.queryParams,"noticeType",t)},expression:"queryParams.noticeType"}},e._l(e.typeOptions,(function(e){return i("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1),e._v(" "),i("el-form-item",[i("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:e.handleQuery}},[e._v("搜索")]),e._v(" "),i("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:e.resetQuery}},[e._v("重置")])],1)],1),e._v(" "),i("el-row",{staticClass:"mb8",attrs:{gutter:10}},[i("el-col",{attrs:{span:1.5}},[i("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:notice:add"],expression:"['system:notice:add']"}],attrs:{type:"primary",icon:"el-icon-plus",size:"mini"},on:{click:e.handleAdd}},[e._v("新增")])],1),e._v(" "),i("el-col",{attrs:{span:1.5}},[i("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:notice:edit"],expression:"['system:notice:edit']"}],attrs:{type:"success",icon:"el-icon-edit",size:"mini",disabled:e.single},on:{click:e.handleUpdate}},[e._v("修改")])],1),e._v(" "),i("el-col",{attrs:{span:1.5}},[i("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:notice:remove"],expression:"['system:notice:remove']"}],attrs:{type:"danger",icon:"el-icon-delete",size:"mini",disabled:e.multiple},on:{click:e.handleDelete}},[e._v("删除")])],1)],1),e._v(" "),i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{data:e.noticeList},on:{"selection-change":e.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"55",align:"center"}}),e._v(" "),i("el-table-column",{attrs:{label:"序号",align:"center",prop:"noticeId",width:"100"}}),e._v(" "),i("el-table-column",{attrs:{label:"公告标题",align:"center",prop:"noticeTitle","show-overflow-tooltip":!0}}),e._v(" "),i("el-table-column",{attrs:{label:"公告类型",align:"center",prop:"noticeType",formatter:e.typeFormat,width:"100"}}),e._v(" "),i("el-table-column",{attrs:{label:"状态",align:"center",prop:"status",formatter:e.statusFormat,width:"100"}}),e._v(" "),i("el-table-column",{attrs:{label:"创建者",align:"center",prop:"createBy",width:"100"}}),e._v(" "),i("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createTime",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(e.parseTime(t.row.createTime,"{y}-{m}-{d}")))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"操作",align:"center","class-name":"small-padding fixed-width"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:notice:edit"],expression:"['system:notice:edit']"}],attrs:{size:"mini",type:"text",icon:"el-icon-edit"},on:{click:function(i){return e.handleUpdate(t.row)}}},[e._v("修改")]),e._v(" "),i("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["system:notice:remove"],expression:"['system:notice:remove']"}],attrs:{size:"mini",type:"text",icon:"el-icon-delete"},on:{click:function(i){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),i("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.queryParams.pageNum,limit:e.queryParams.pageSize},on:{"update:page":function(t){return e.$set(e.queryParams,"pageNum",t)},"update:limit":function(t){return e.$set(e.queryParams,"pageSize",t)},pagination:e.getList}}),e._v(" "),i("el-dialog",{attrs:{title:e.title,visible:e.open,width:"780px"},on:{"update:visible":function(t){e.open=t}}},[i("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[i("el-row",[i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"公告标题",prop:"noticeTitle"}},[i("el-input",{attrs:{placeholder:"请输入公告标题"},model:{value:e.form.noticeTitle,callback:function(t){e.$set(e.form,"noticeTitle",t)},expression:"form.noticeTitle"}})],1)],1),e._v(" "),i("el-col",{attrs:{span:12}},[i("el-form-item",{attrs:{label:"公告类型",prop:"noticeType"}},[i("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.noticeType,callback:function(t){e.$set(e.form,"noticeType",t)},expression:"form.noticeType"}},e._l(e.typeOptions,(function(e){return i("el-option",{key:e.dictValue,attrs:{label:e.dictLabel,value:e.dictValue}})})),1)],1)],1),e._v(" "),i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"状态"}},[i("el-radio-group",{model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}},e._l(e.statusOptions,(function(t){return i("el-radio",{key:t.dictValue,attrs:{label:t.dictValue}},[e._v(e._s(t.dictLabel))])})),1)],1)],1),e._v(" "),i("el-col",{attrs:{span:24}},[i("el-form-item",{attrs:{label:"内容"}},[i("Editor",{model:{value:e.form.noticeContent,callback:function(t){e.$set(e.form,"noticeContent",t)},expression:"form.noticeContent"}})],1)],1)],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",staticStyle:{"padding-top":"20px"},attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:e.submitForm}},[e._v("确 定")]),e._v(" "),i("el-button",{on:{click:e.cancel}},[e._v("取 消")])],1)],1)],1)},o=[],a=i("b775");function r(e){return Object(a["a"])({url:"/system/notice/list",method:"get",params:e})}function l(e){return Object(a["a"])({url:"/system/notice/"+e,method:"get"})}function s(e){return Object(a["a"])({url:"/system/notice",method:"post",data:e})}function c(e){return Object(a["a"])({url:"/system/notice",method:"put",data:e})}function u(e){return Object(a["a"])({url:"/system/notice/"+e,method:"delete"})}var m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("el-upload",{staticClass:"avatar-uploader quill-img",attrs:{action:e.uploadImgUrl,name:"file",headers:e.headers,"show-file-list":!1,"on-success":e.quillImgSuccess,"on-error":e.uploadError,"before-upload":e.quillImgBefore,accept:".jpg,.jpeg,.png,.gif"}}),e._v(" "),i("quill-editor",{ref:"quillEditor",staticClass:"editor",attrs:{options:e.editorOption},on:{blur:function(t){return e.onEditorBlur(t)},focus:function(t){return e.onEditorFocus(t)},change:function(t){return e.onEditorChange(t)}},model:{value:e.content,callback:function(t){e.content=t},expression:"content"}})],1)},d=[],p=i("bd86"),f=(i("c5f6"),i("5f87")),h=i("953d"),v=(i("a7539"),i("8096"),i("14e1"),[["bold","italic","underline","strike"],["blockquote","code-block"],[{list:"ordered"},{list:"bullet"}],[{indent:"-1"},{indent:"+1"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{align:[]}],["clean"],["link","image","video"]]),y={props:{value:{type:String},maxSize:{type:Number,default:4e3}},components:{quillEditor:h["quillEditor"]},data:function(){var e,t;return t={content:this.value,uploadImgUrl:"",editorOption:(e={placeholder:"",theme:"snow"},Object(p["a"])(e,"placeholder","请输入内容"),Object(p["a"])(e,"modules",{toolbar:{container:v,handlers:{image:function(e){e?document.querySelector(".quill-img input").click():this.quill.format("image",!1)}}}}),e)},Object(p["a"])(t,"uploadImgUrl","/prod-api/common/upload"),Object(p["a"])(t,"headers",{Authorization:"Bearer "+Object(f["a"])()}),t},watch:{value:function(){this.content=this.value}},methods:{onEditorBlur:function(){},onEditorFocus:function(){},onEditorChange:function(){this.$emit("input",this.content)},quillImgBefore:function(e){var t=e.type;return"image/jpeg"===t||"image/png"===t||(this.$message.error("请插入图片类型文件(jpg/jpeg/png)"),!1)},quillImgSuccess:function(e,t){var i=this.$refs.quillEditor.quill;if(200==e.code){var n=i.getSelection().index;i.insertEmbed(n,"image",e.url),i.setSelection(n+1)}else this.$message.error("图片插入失败")},uploadError:function(){this.$message.error("图片插入失败")}}},g=y,b=(i("4ff4"),i("2877")),_=Object(b["a"])(g,m,d,!1,null,null,null),k=_.exports,w={name:"Notice",components:{Editor:k},data:function(){return{loading:!0,ids:[],single:!0,multiple:!0,total:0,noticeList:[],title:"",open:!1,statusOptions:[],typeOptions:[],queryParams:{pageNum:1,pageSize:10,noticeTitle:void 0,createBy:void 0,status:void 0},form:{},rules:{noticeTitle:[{required:!0,message:"公告标题不能为空",trigger:"blur"}],noticeType:[{required:!0,message:"公告类型不能为空",trigger:"blur"}]}}},created:function(){var e=this;this.getList(),this.getDicts("sys_notice_status","sys_notice_type").then((function(t){e.statusOptions=t.data["sys_notice_status"],e.typeOptions=t.data["sys_notice_type"]}))},methods:{getList:function(){var e=this;this.loading=!0,r(this.queryParams).then((function(t){e.noticeList=t.rows,e.total=t.total,e.loading=!1}))},statusFormat:function(e,t){return this.selectDictLabel(this.statusOptions,e.status)},typeFormat:function(e,t){return this.selectDictLabel(this.typeOptions,e.noticeType)},cancel:function(){this.open=!1,this.reset()},reset:function(){this.form={noticeId:void 0,noticeTitle:void 0,noticeType:void 0,noticeContent:void 0,status:"0"},this.resetForm("form")},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleSelectionChange:function(e){this.ids=e.map((function(e){return e.noticeId})),this.single=1!=e.length,this.multiple=!e.length},handleAdd:function(){this.reset(),this.open=!0,this.title="添加公告"},handleUpdate:function(e){var t=this;this.reset();var i=e.noticeId||this.ids;l(i).then((function(e){t.form=e.data,t.open=!0,t.title="修改公告"}))},submitForm:function(){var e=this;this.$refs["form"].validate((function(t){t&&(void 0!=e.form.noticeId?c(e.form).then((function(t){200===t.code?(e.msgSuccess("修改成功"),e.open=!1,e.getList()):e.msgError(t.msg)})):s(e.form).then((function(t){200===t.code?(e.msgSuccess("新增成功"),e.open=!1,e.getList()):e.msgError(t.msg)})))}))},handleDelete:function(e){var t=this,i=e.noticeId||this.ids;this.$confirm('是否确认删除公告编号为"'+i+'"的数据项?',"警告",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){return u(i)})).then((function(){t.getList(),t.msgSuccess("删除成功")})).catch((function(){}))}}},q=w,x=Object(b["a"])(q,n,o,!1,null,null,null);t["default"]=x.exports},"3bcd":function(e,t,i){},"4ff4":function(e,t,i){"use strict";var n=i("3bcd"),o=i.n(n);o.a}}]);