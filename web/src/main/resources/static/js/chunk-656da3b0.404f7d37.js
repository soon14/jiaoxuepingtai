(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-656da3b0"],{"0e6c":function(t,e,a){"use strict";var s=a("1835"),i=a.n(s);i.a},1835:function(t,e,a){},c47f:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"example-full"},[a("button",{staticClass:"btn btn-danger float-right btn-is-option",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.isOption=!t.isOption}}},[a("i",{staticClass:"fa fa-cog",attrs:{"aria-hidden":"true"}}),t._v("\n    Options\n  ")]),t._v(" "),a("h1",{staticClass:"example-title",attrs:{id:"example-title"}},[t._v("Full Example")]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.$refs.upload&&t.$refs.upload.dropActive,expression:"$refs.upload && $refs.upload.dropActive"}],staticClass:"drop-active"},[a("h3",[t._v("Drop files to upload")])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isOption,expression:"!isOption"}],staticClass:"upload"},[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table table-hover"},[t._m(0),t._v(" "),a("tbody",[t.files.length?t._e():a("tr",[a("td",{attrs:{colspan:"7"}},[a("div",{staticClass:"text-center p-5"},[t._m(1),t._v(" "),a("label",{staticClass:"btn btn-lg btn-primary",attrs:{for:t.name}},[t._v("Select Files")])])])]),t._v(" "),t._l(t.files,(function(e,s){return a("tr",{key:e.id},[a("td",[t._v(t._s(s))]),t._v(" "),a("td",[e.thumb?a("img",{attrs:{src:e.thumb,width:"40",height:"auto"}}):a("span",[t._v("No Image")])]),t._v(" "),a("td",[a("div",{staticClass:"filename"},[t._v("\n              "+t._s(e.name)+"\n            ")]),t._v(" "),e.active||"0.00"!==e.progress?a("div",{staticClass:"progress"},[a("div",{class:{"progress-bar":!0,"progress-bar-striped":!0,"bg-danger":e.error,"progress-bar-animated":e.active},style:{width:e.progress+"%"},attrs:{role:"progressbar"}},[t._v(t._s(e.progress)+"%")])]):t._e()]),t._v(" "),a("td",[t._v(t._s(t._f("formatSize")(e.size)))]),t._v(" "),a("td",[t._v(t._s(t._f("formatSize")(e.speed)))]),t._v(" "),e.error?a("td",[t._v(t._s(e.error))]):e.success?a("td",[t._v("success")]):e.active?a("td",[t._v("active")]):a("td"),t._v(" "),a("td",[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-secondary btn-sm dropdown-toggle",attrs:{type:"button"}},[t._v("\n                Action\n              ")]),t._v(" "),a("div",{staticClass:"dropdown-menu"},[a("a",{class:{"dropdown-item":!0,disabled:e.active||e.success||"compressing"===e.error},attrs:{href:"#"},on:{click:function(a){a.preventDefault(),!e.active&&!e.success&&"compressing"!==e.error&&t.onEditFileShow(e)}}},[t._v("Edit")]),t._v(" "),a("a",{class:{"dropdown-item":!0,disabled:!e.active},attrs:{href:"#"},on:{click:function(a){a.preventDefault(),e.active&&t.$refs.upload.update(e,{error:"cancel"})}}},[t._v("Cancel")]),t._v(" "),e.active?a("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.$refs.upload.update(e,{active:!1})}}},[t._v("Abort")]):e.error&&"compressing"!==e.error&&t.$refs.upload.features.html5?a("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.$refs.upload.update(e,{active:!0,error:"",progress:"0.00"})}}},[t._v("Retry upload")]):a("a",{class:{"dropdown-item":!0,disabled:e.success||"compressing"===e.error},attrs:{href:"#"},on:{click:function(a){a.preventDefault(),!e.success&&"compressing"!==e.error&&t.$refs.upload.update(e,{active:!0})}}},[t._v("Upload")]),t._v(" "),a("div",{staticClass:"dropdown-divider"}),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.$refs.upload.remove(e)}}},[t._v("Remove")])])])])])}))],2)])]),t._v(" "),a("div",{staticClass:"example-foorer"},[a("div",{staticClass:"footer-status float-right"},[t._v("\n        Drop: "+t._s(!!t.$refs.upload&&t.$refs.upload.drop)+",\n        Active: "+t._s(!!t.$refs.upload&&t.$refs.upload.active)+",\n        Uploaded: "+t._s(!t.$refs.upload||t.$refs.upload.uploaded)+",\n        Drop active: "+t._s(!!t.$refs.upload&&t.$refs.upload.dropActive)+"\n      ")]),t._v(" "),a("div",{staticClass:"btn-group"},[a("file-upload",{ref:"upload",staticClass:"btn btn-primary dropdown-toggle",attrs:{"post-action":t.postAction,"put-action":t.putAction,extensions:t.extensions,accept:t.accept,multiple:t.multiple,directory:t.directory,size:t.size||0,thread:t.thread<1?1:t.thread>5?5:t.thread,headers:t.headers,data:t.data,drop:t.drop,"drop-directory":t.dropDirectory,"add-index":t.addIndex},on:{"input-filter":t.inputFilter,"input-file":t.inputFile},model:{value:t.files,callback:function(e){t.files=e},expression:"files"}},[a("i",{staticClass:"fa fa-plus"}),t._v("\n          Select\n        ")]),t._v(" "),a("div",{staticClass:"dropdown-menu"},[a("label",{staticClass:"dropdown-item",attrs:{for:t.name}},[t._v("Add files")]),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:t.onAddFolader}},[t._v("Add folder")]),t._v(" "),a("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.addData.show=!0}}},[t._v("Add data")])])],1),t._v(" "),t.$refs.upload&&t.$refs.upload.active?a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.$refs.upload.active=!1}}},[a("i",{staticClass:"fa fa-stop",attrs:{"aria-hidden":"true"}}),t._v("\n        Stop Upload\n      ")]):a("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.$refs.upload.active=!0}}},[a("i",{staticClass:"fa fa-arrow-up",attrs:{"aria-hidden":"true"}}),t._v("\n        Start Upload\n      ")])])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isOption,expression:"isOption"}],staticClass:"option"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"accept"}},[t._v("Accept:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.accept,expression:"accept"}],staticClass:"form-control",attrs:{type:"text",id:"accept"},domProps:{value:t.accept},on:{input:function(e){e.target.composing||(t.accept=e.target.value)}}}),t._v(" "),a("small",{staticClass:"form-text text-muted"},[t._v("Allow upload mime type")])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"extensions"}},[t._v("Extensions:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.extensions,expression:"extensions"}],staticClass:"form-control",attrs:{type:"text",id:"extensions"},domProps:{value:t.extensions},on:{input:function(e){e.target.composing||(t.extensions=e.target.value)}}}),t._v(" "),a("small",{staticClass:"form-text text-muted"},[t._v("Allow upload file extension")])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",[t._v("PUT Upload:")]),t._v(" "),a("div",{staticClass:"form-check"},[a("label",{staticClass:"form-check-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.putAction,expression:"putAction"}],staticClass:"form-check-input",attrs:{type:"radio",name:"put-action",id:"put-action",value:""},domProps:{checked:t._q(t.putAction,"")},on:{change:function(e){t.putAction=""}}}),t._v(" Off\n        ")])]),t._v(" "),a("div",{staticClass:"form-check"},[a("label",{staticClass:"form-check-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.putAction,expression:"putAction"}],staticClass:"form-check-input",attrs:{type:"radio",name:"put-action",id:"put-action",value:"/upload/put"},domProps:{checked:t._q(t.putAction,"/upload/put")},on:{change:function(e){t.putAction="/upload/put"}}}),t._v(" On\n        ")])]),t._v(" "),a("small",{staticClass:"form-text text-muted"},[t._v("After the shutdown, use the POST method to upload")])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"thread"}},[t._v("Thread:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.thread,expression:"thread",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",max:"5",min:"1",id:"thread"},domProps:{value:t.thread},on:{input:function(e){e.target.composing||(t.thread=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),a("small",{staticClass:"form-text text-muted"},[t._v("Also upload the number of files at the same time (number of threads)")])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"size"}},[t._v("Max size:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.size,expression:"size",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",min:"0",id:"size"},domProps:{value:t.size},on:{input:function(e){e.target.composing||(t.size=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"minSize"}},[t._v("Min size:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.minSize,expression:"minSize",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",min:"0",id:"minSize"},domProps:{value:t.minSize},on:{input:function(e){e.target.composing||(t.minSize=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"autoCompress"}},[t._v("Automatically compress:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.autoCompress,expression:"autoCompress",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",min:"0",id:"autoCompress"},domProps:{value:t.autoCompress},on:{input:function(e){e.target.composing||(t.autoCompress=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),t.autoCompress>0?a("small",{staticClass:"form-text text-muted"},[t._v("More than "+t._s(t._f("formatSize")(t.autoCompress))+" files are automatically compressed")]):a("small",{staticClass:"form-text text-muted"},[t._v("Set up automatic compression")])]),t._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("label",{staticClass:"form-check-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.addIndex,expression:"addIndex"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"add-index"},domProps:{checked:Array.isArray(t.addIndex)?t._i(t.addIndex,null)>-1:t.addIndex},on:{change:function(e){var a=t.addIndex,s=e.target,i=!!s.checked;if(Array.isArray(a)){var o=null,r=t._i(a,o);s.checked?r<0&&(t.addIndex=a.concat([o])):r>-1&&(t.addIndex=a.slice(0,r).concat(a.slice(r+1)))}else t.addIndex=i}}}),t._v(" Start position to add\n        ")])]),t._v(" "),a("small",{staticClass:"form-text text-muted"},[t._v("Add a file list to start the location to add")])]),t._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("label",{staticClass:"form-check-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.drop,expression:"drop"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"drop"},domProps:{checked:Array.isArray(t.drop)?t._i(t.drop,null)>-1:t.drop},on:{change:function(e){var a=t.drop,s=e.target,i=!!s.checked;if(Array.isArray(a)){var o=null,r=t._i(a,o);s.checked?r<0&&(t.drop=a.concat([o])):r>-1&&(t.drop=a.slice(0,r).concat(a.slice(r+1)))}else t.drop=i}}}),t._v(" Drop\n        ")])]),t._v(" "),a("small",{staticClass:"form-text text-muted"},[t._v("Drag and drop upload")])]),t._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("label",{staticClass:"form-check-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.dropDirectory,expression:"dropDirectory"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"drop-directory"},domProps:{checked:Array.isArray(t.dropDirectory)?t._i(t.dropDirectory,null)>-1:t.dropDirectory},on:{change:function(e){var a=t.dropDirectory,s=e.target,i=!!s.checked;if(Array.isArray(a)){var o=null,r=t._i(a,o);s.checked?r<0&&(t.dropDirectory=a.concat([o])):r>-1&&(t.dropDirectory=a.slice(0,r).concat(a.slice(r+1)))}else t.dropDirectory=i}}}),t._v(" Drop directory\n        ")])]),t._v(" "),a("small",{staticClass:"form-text text-muted"},[t._v("Not checked, filter the dragged folder")])]),t._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"form-check"},[a("label",{staticClass:"form-check-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.uploadAuto,expression:"uploadAuto"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"upload-auto"},domProps:{checked:Array.isArray(t.uploadAuto)?t._i(t.uploadAuto,null)>-1:t.uploadAuto},on:{change:function(e){var a=t.uploadAuto,s=e.target,i=!!s.checked;if(Array.isArray(a)){var o=null,r=t._i(a,o);s.checked?r<0&&(t.uploadAuto=a.concat([o])):r>-1&&(t.uploadAuto=a.slice(0,r).concat(a.slice(r+1)))}else t.uploadAuto=i}}}),t._v(" Auto start\n        ")])]),t._v(" "),a("small",{staticClass:"form-text text-muted"},[t._v("Automatically activate upload")])]),t._v(" "),a("div",{staticClass:"form-group"},[a("button",{staticClass:"btn btn-primary btn-lg btn-block",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.isOption=!t.isOption}}},[t._v("Confirm")])])]),t._v(" "),a("div",{class:{"modal-backdrop":!0,fade:!0,show:t.addData.show}}),t._v(" "),a("div",{class:{modal:!0,fade:!0,show:t.addData.show},attrs:{id:"modal-add-data",tabindex:"-1",role:"dialog"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("Add data")]),t._v(" "),a("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.addData.show=!1}}},[a("span",[t._v("×")])])]),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.onAddData(e)}}},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("Name:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.addData.name,expression:"addData.name"}],staticClass:"form-control",attrs:{type:"text",required:"",id:"name",placeholder:"Please enter a file name"},domProps:{value:t.addData.name},on:{input:function(e){e.target.composing||t.$set(t.addData,"name",e.target.value)}}}),t._v(" "),t._m(2)]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"type"}},[t._v("Type:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.addData.type,expression:"addData.type"}],staticClass:"form-control",attrs:{type:"text",required:"",id:"type",placeholder:"Please enter the MIME type"},domProps:{value:t.addData.type},on:{input:function(e){e.target.composing||t.$set(t.addData,"type",e.target.value)}}}),t._v(" "),t._m(3)]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"content"}},[t._v("Content:")]),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.addData.content,expression:"addData.content"}],staticClass:"form-control",attrs:{required:"",id:"content",rows:"3",placeholder:"Please enter the file contents"},domProps:{value:t.addData.content},on:{input:function(e){e.target.composing||t.$set(t.addData,"content",e.target.value)}}})])]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.addData.show=!1}}},[t._v("Close")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Save")])])])])])]),t._v(" "),a("div",{class:{"modal-backdrop":!0,fade:!0,show:t.editFile.show}}),t._v(" "),a("div",{class:{modal:!0,fade:!0,show:t.editFile.show},attrs:{id:"modal-edit-file",tabindex:"-1",role:"dialog"}},[a("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title"},[t._v("Edit file")]),t._v(" "),a("button",{staticClass:"close",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.editFile.show=!1}}},[a("span",[t._v("×")])])]),t._v(" "),a("form",{on:{submit:function(e){return e.preventDefault(),t.onEditorFile(e)}}},[a("div",{staticClass:"modal-body"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"name"}},[t._v("Name:")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.editFile.name,expression:"editFile.name"}],staticClass:"form-control",attrs:{type:"text",required:"",id:"name",placeholder:"Please enter a file name"},domProps:{value:t.editFile.name},on:{input:function(e){e.target.composing||t.$set(t.editFile,"name",e.target.value)}}})]),t._v(" "),t.editFile.show&&t.editFile.blob&&t.editFile.type&&"image/"===t.editFile.type.substr(0,6)?a("div",{staticClass:"form-group"},[a("label",[t._v("Image: ")]),t._v(" "),a("div",{staticClass:"edit-image"},[a("img",{ref:"editImage",attrs:{src:t.editFile.blob}})]),t._v(" "),a("div",{staticClass:"edit-image-tool"},[a("div",{staticClass:"btn-group",attrs:{role:"group"}},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button",title:"cropper.rotate(-90)"},on:{click:function(e){return t.editFile.cropper.rotate(-90)}}},[a("i",{staticClass:"fa fa-undo",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button",title:"cropper.rotate(90)"},on:{click:function(e){return t.editFile.cropper.rotate(90)}}},[a("i",{staticClass:"fa fa-repeat",attrs:{"aria-hidden":"true"}})])]),t._v(" "),a("div",{staticClass:"btn-group",attrs:{role:"group"}},[a("button",{staticClass:"btn btn-primary",attrs:{type:"button",title:"cropper.crop()"},on:{click:function(e){return t.editFile.cropper.crop()}}},[a("i",{staticClass:"fa fa-check",attrs:{"aria-hidden":"true"}})]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"button",title:"cropper.clear()"},on:{click:function(e){return t.editFile.cropper.clear()}}},[a("i",{staticClass:"fa fa-remove",attrs:{"aria-hidden":"true"}})])])])]):t._e()]),t._v(" "),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){e.preventDefault(),t.editFile.show=!1}}},[t._v("Close")]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Save")])])])])])]),t._v(" "),t._m(4)])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("#")]),t._v(" "),a("th",[t._v("Thumb")]),t._v(" "),a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Size")]),t._v(" "),a("th",[t._v("Speed")]),t._v(" "),a("th",[t._v("Status")]),t._v(" "),a("th",[t._v("Action")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h4",[t._v("Drop files anywhere to upload"),a("br"),t._v("or")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("small",{staticClass:"form-text text-muted"},[t._v("Such as "),a("code",[t._v("filename.txt")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("small",{staticClass:"form-text text-muted"},[t._v("Such as "),a("code",[t._v("text/plain")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pt-5"},[t._v("\n    Source code: "),a("a",{attrs:{href:"https://github.com/lian-yue/vue-upload-component/blob/master/docs/views/examples/Full.vue"}},[t._v("/docs/views/examples/Full.vue")])])}],o=(a("34ef"),a("28a5"),a("6b54"),a("7f7f"),a("db72")),r=a("c364"),n=a.n(r),l=a("1b4b"),d=a.n(l),c=a("0b34"),p=a.n(c),u={components:{FileUpload:p.a},data:function(){return{files:[],accept:"image/png,image/gif,image/jpeg,image/webp",extensions:"gif,jpg,jpeg,png,webp",minSize:1024,size:10485760,multiple:!0,directory:!1,drop:!0,dropDirectory:!0,addIndex:!1,thread:3,name:"file",postAction:"/upload/post",putAction:"/upload/put",headers:{"X-Csrf-Token":"xxxx"},data:{_csrf_token:"xxxxxx"},autoCompress:1048576,uploadAuto:!1,isOption:!1,addData:{show:!1,name:"",type:"",content:""},editFile:{show:!1,name:""}}},watch:{"editFile.show":function(t,e){!t&&e&&this.$refs.upload.update(this.editFile.id,{error:this.editFile.error||""}),t&&this.$nextTick((function(){if(this.$refs.editImage){var t=new n.a(this.$refs.editImage,{autoCrop:!1});this.editFile=Object(o["a"])({},this.editFile,{cropper:t})}}))},"addData.show":function(t){t&&(this.addData.name="",this.addData.type="",this.addData.content="")}},methods:{inputFilter:function(t,e,a){var s=this;if(t&&!e){if(/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(t.name))return a();if(/\.(php5?|html?|jsx?)$/i.test(t.name))return a();if(t.file&&"image/"===t.type.substr(0,6)&&this.autoCompress>0&&this.autoCompress<t.size){t.error="compressing";var i=new d.a(null,{convertSize:1/0,maxWidth:512,maxHeight:512});i.compress(t.file).then((function(e){s.$refs.upload.update(t,{error:"",file:e,size:e.size,type:e.type})})).catch((function(e){s.$refs.upload.update(t,{error:e.message||"compress"})}))}}if(t&&(!e||t.file!==e.file)){t.blob="";var o=window.URL||window.webkitURL;o&&o.createObjectURL&&(t.blob=o.createObjectURL(t.file)),t.thumb="",t.blob&&"image/"===t.type.substr(0,6)&&(t.thumb=t.blob)}},inputFile:function(t,e){t&&e&&(t.active&&!e.active&&t.size>=0&&this.minSize>0&&t.size<this.minSize&&this.$refs.upload.update(t,{error:"size"}),t.progress,e.progress,t.error&&e.error,t.success&&e.success),!t&&e&&e.success&&e.response.id,Boolean(t)===Boolean(e)&&e.error===t.error||this.uploadAuto&&!this.$refs.upload.active&&(this.$refs.upload.active=!0)},alert:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){alert(t)})),onEditFileShow:function(t){this.editFile=Object(o["a"])({},t,{show:!0}),this.$refs.upload.update(t,{error:"edit"})},onEditorFile:function(){if(!this.$refs.upload.features.html5)return this.alert("Your browser does not support"),void(this.editFile.show=!1);var t={name:this.editFile.name};if(this.editFile.cropper){for(var e=atob(this.editFile.cropper.getCroppedCanvas().toDataURL(this.editFile.type).split(",")[1]),a=new Uint8Array(e.length),s=0;s<e.length;s++)a[s]=e.charCodeAt(s);t.file=new File([a],t.name,{type:this.editFile.type}),t.size=t.file.size}this.$refs.upload.update(this.editFile.id,t),this.editFile.error="",this.editFile.show=!1},onAddFolader:function(){var t=this;if(this.$refs.upload.features.directory){var e=this.$refs.upload.$el.querySelector("input");e.directory=!0,e.webkitdirectory=!0,this.directory=!0,e.onclick=null,e.click(),e.onclick=function(a){t.directory=!1,e.directory=!1,e.webkitdirectory=!1}}else this.alert("Your browser does not support")},onAddData:function(){if(this.addData.show=!1,this.$refs.upload.features.html5){var t=new window.File([this.addData.content],this.addData.name,{type:this.addData.type});this.$refs.upload.add(t)}else this.alert("Your browser does not support")}}},v=u,m=(a("0e6c"),a("2877")),f=Object(m["a"])(v,s,i,!1,null,null,null);e["default"]=f.exports}}]);