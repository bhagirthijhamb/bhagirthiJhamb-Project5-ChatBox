(this["webpackJsonpchat-box"]=this["webpackJsonpchat-box"]||[]).push([[0],{20:function(e,t,a){e.exports=a(37)},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),o=a(18),r=a.n(o),c=a(19),u=a(5),l=a(6),i=a(8),m=a(7),p=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e,t=(new Date).getHours();return e=t<12?"morning":t>=12&&t<17?"afternoon":"night",n.a.createElement("header",null,n.a.createElement("h2",null,"Good ",e," to you, sir or madam!"),n.a.createElement("p",null,"Chat Box is a chat app that has groups and youcan chat with people in real time"))}}]),a}(s.Component),g=a(13),h={position:"fixed",top:0,bottom:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.3)",padding:50},d=Object(g.a)({position:"absolute",top:"30%",left:0,backgroundColor:"#fff",borderRadius:8,maxWidth:250,minHeight:150,margin:"0 auto",padding:10},"position","relative"),f={position:"absolute",bottom:10},b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).sendUser=function(){e.props.getLoginUser(e.state.user)},e.onclose=function(t){e.props.onClose&&e.props.onClose(t)},e.handleChange=function(t){e.setState({user:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.sendUser()},e.state={user:""},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return this.props.show?n.a.createElement("div",{className:"loginBox",style:h},n.a.createElement("div",{style:d},n.a.createElement("h2",{className:"modalHeader"},"Enter username"),this.props.children,n.a.createElement("form",{onSubmit:this.handleSubmit,action:""},n.a.createElement("input",{className:"input loginInput",onChange:this.handleChange,value:this.state.user,type:"text",placeholder:"Username"}),n.a.createElement("div",{style:f},n.a.createElement("button",{className:"submit"},"Submit"),n.a.createElement("button",{className:"close",onClick:function(t){e.props.onClose(t)}},"Close"))))):null}}]),a}(s.Component),v=a(15),E=a.n(v);a(25);E.a.initializeApp({apiKey:"AIzaSyDciUjGJwEk-pas3FAtthvcGXJT8QTwOhQ",authDomain:"to-do-app-32054.firebaseapp.com",databaseURL:"https://to-do-app-32054.firebaseio.com",projectId:"to-do-app-32054",storageBucket:"to-do-app-32054.appspot.com",messagingSenderId:"552462434673",appId:"1:552462434673:web:456137243376262d4576d0"});var S=E.a;var C=function(e){var t="message";return e.currentUser===e.user&&(t="myMessage"),n.a.createElement("div",{className:t},n.a.createElement("div",{className:"message-top"},n.a.createElement("div",{className:"message-time"},e.time),n.a.createElement("div",{className:"message-username"},e.user)),n.a.createElement("div",{className:"message-text"},e.message,n.a.createElement("span",null)),n.a.createElement("button",{className:"delete",onClick:function(){e.message.key,S.database().ref("/".concat(e.currentGroup)).child(e.messageKey).remove()}},n.a.createElement("i",{className:"fas fa-times deleteIcon"})))},N=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(e){var t=this;return n.a.createElement("div",{className:"message-list"},this.props.messages.map((function(e,a){return n.a.createElement(C,{key:a,currentUser:t.props.currentUser,messageKey:e.key,message:e.message,time:e.time,user:e.user,currentGroup:t.props.currentGroup})})))}}]),a}(s.Component),y=a(9),k=a.n(y),w={position:"fixed",top:0,bottom:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.3)",padding:50},j=Object(g.a)({position:"absolute",top:"20%",left:0,backgroundColor:"#fff",borderRadius:8,maxWidth:250,minHeight:150,margin:"0 auto",padding:10},"position","relative"),O={position:"absolute",bottom:10},G=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).sendGroupName=function(){e.props.getGroupName(e.state.group)},e.onclose=function(t){e.props.onClose&&e.props.onClose(t)},e.handleChange=function(t){e.setState({group:t.target.value})},e.handleSubmit=function(t){(t.preventDefault(),-1===e.state.groups.indexOf(e.state.group))&&k.a.database().ref("/".concat(e.state.group)).push({message:"Welcome to the group",time:k.a.database.ServerValue.TIMESTAMP,user:e.props.user})},e.handleSendGroupName=function(){e.sendGroupName()},e.handleDeleteGroup=function(){e.state.group!==e.props.currentGroup?k.a.database().ref("".concat(e.state.group)).remove():alert("Cannot delete the current group")},e.handleLiClick=function(t){var a=t.target.innerText;e.setState({group:"".concat(a)},(function(){}))},e.state={group:"",groups:[],selectedGroup:""},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;k.a.database().ref().on("value",(function(t){var a=t.val(),s=[];for(var n in a)s.push(n);e.setState({groups:s})}))}},{key:"render",value:function(){var e=this;return this.props.show?n.a.createElement("div",{className:"loginBox",style:w},n.a.createElement("div",{style:j},this.props.children,n.a.createElement("div",{className:"group-list"},n.a.createElement("ul",{className:"groups"},this.state.groups.map((function(t,a){return n.a.createElement("li",{className:"group",key:"index",onClick:function(t){return e.handleLiClick(t)}},t)})))),n.a.createElement("form",{onSubmit:this.handleSubmit,action:""},n.a.createElement("input",{className:"input",onChange:this.handleChange,value:this.state.group,type:"text",placeholder:"Group name"}),n.a.createElement("div",{style:O},n.a.createElement("button",{className:"submit",onClick:this.handleSendGroupName()},"Submit"),n.a.createElement("button",{className:"close",onClick:function(t){e.props.onClose(t)}},"Close"))),n.a.createElement("button",{className:"close",onClick:function(){e.handleDeleteGroup()}},"Delete"))):null}}]),a}(s.Component),M=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({message:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var a={message:e.state.message,time:k.a.database.ServerValue.TIMESTAMP,user:e.props.user};""!==e.state.message&&(k.a.database().ref("/".concat(e.props.group)).push(a),e.setState({message:""}))},e.handleUserInput=function(t){e.setState({message:t.target.value})},e.handleDelete=function(e){e.preventDefault()},e.state={message:""},e}return Object(l.a)(a,[{key:"render",value:function(){return n.a.createElement("form",{onSubmit:this.handleSubmit,className:"send-message-form",action:""},n.a.createElement("input",{onChange:this.handleChange,value:this.state.message,type:"text",placeholder:"Type your message and hit ENTER"}),n.a.createElement("button",{onClick:this.handleSubmit,className:"send-message"},"Send"))}}]),a}(s.Component),x=(a(36),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).showUserModal=function(){e.setState({userShow:!e.state.userShow})},e.showGroupModal=function(){e.setState({groupShow:!e.state.groupShow})},e.onclose=function(t){e.props.onClose&&e.props.onClose(t)},e.getLoginUser=function(t){e.setState({user:t}),localStorage.setItem("user",t)},e.getGroupName=function(t){localStorage.setItem("group",t),e.setState({group:t},(function(){e.loadMessages()}))},e.loadMessages=function(){S.database().ref("/".concat(e.state.group)).on("value",(function(t){var a=t.val();e.setState({messages:[]},(function(){var t=Object(c.a)(e.state.messages);for(var s in a){var n=a[s],o=n.user,r=n.message,u=n.time,l=new Date(u),i="".concat(l.getHours(),":").concat(l.getMinutes(),":").concat(l.getSeconds()),m={time:i,user:o,message:r,key:s};t.push(m),e.setState({time:i,user:o,message:r,messages:t})}}))}))},e.state={userShow:!1,groupShow:!1,time:"",user:"".concat(localStorage.getItem("user")?localStorage.getItem("user"):"user"),message:"",messages:[],group:"".concat(localStorage.getItem("group")?localStorage.getItem("group"):"Messages"),groups:[]},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.loadMessages()}},{key:"render",value:function(){return n.a.createElement("div",{className:"wrapper"},n.a.createElement(p,null),n.a.createElement("h1",null,"Chat Box"),n.a.createElement("div",{className:"mobile"},n.a.createElement("div",{className:"top"}),n.a.createElement("div",{className:"bottom"}),n.a.createElement("div",{className:"topBar"}),n.a.createElement("div",{className:"screen"},n.a.createElement(N,{currentUser:this.state.user,messages:this.state.messages,currentGroup:this.state.group})),n.a.createElement("button",{onClick:this.showUserModal,className:"create-user"},"Create User"),n.a.createElement("button",{className:"current-group"},this.state.group),n.a.createElement("button",{onClick:this.showGroupModal,className:"create-group"},"New Group"),n.a.createElement(b,{getLoginUser:this.getLoginUser,onClose:this.showUserModal,show:this.state.userShow}),n.a.createElement(G,{user:this.state.user,currentGroup:this.state.group,getGroupName:this.getGroupName,onClose:this.showGroupModal,show:this.state.groupShow},n.a.createElement("h2",{className:"modalHeader"},"Group Name")),n.a.createElement(M,{user:this.state.user,group:this.state.group,getMessage:this.getMessage})))}}]),a}(s.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.19049fe3.chunk.js.map