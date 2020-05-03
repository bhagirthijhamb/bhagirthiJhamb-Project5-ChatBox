(this["webpackJsonpchat-box"]=this["webpackJsonpchat-box"]||[]).push([[0],{20:function(e,t,a){e.exports=a(37)},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),o=a(15),r=a.n(o),l=a(19),c=a(5),u=a(6),i=a(8),m=a(7),p=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=(new Date).getHours();return e<12?"morning":e>=12&&e<17?"afternoon":"night",s.a.createElement("div",null,s.a.createElement("div",{className:"header"},s.a.createElement("div",{className:"info"},s.a.createElement("h1",{className:"title"}," Chat Box  ",s.a.createElement("span",{className:"chatBoxEmoji"},"\ud83d\udc67\ud83c\udffb"),s.a.createElement("span",{className:"chatBoxEmoji"},"\ud83d\udc66\ud83c\udffb")),s.a.createElement("p",null,"A chat app that connects you with your friends in real time"),s.a.createElement("p",null,s.a.createElement("span",{className:"mainFeatures"},"Main features")," - Click or [tab] to"),s.a.createElement("ul",{className:"infoList"},s.a.createElement("li",null,s.a.createElement("span",null,"\ud83d\udc49\ud83c\udffb "),s.a.createElement("span",{className:"infoButton infoInput"},"Input")," box to type your message"),s.a.createElement("li",null,s.a.createElement("span",{className:"tabLi"},s.a.createElement("span",null," - "),s.a.createElement("span",{className:"infoButton"},"Send")," button or hit enter to send your message")),s.a.createElement("li",null,s.a.createElement("span",{className:"tabLi"},s.a.createElement("span",null," - "),s.a.createElement("span",{className:"infoButton infoButtonDelete"},"x")," to delete a message")),s.a.createElement("li",null,s.a.createElement("span",null,"\ud83d\udc49\ud83c\udffb "),s.a.createElement("span",{className:"infoButton"},"User")," button to enter your user name"),s.a.createElement("li",null,s.a.createElement("span",null,"\ud83d\udc49\ud83c\udffb "),s.a.createElement("span",{className:"infoButton"},"Group")," button to create or change group"),s.a.createElement("li",null,s.a.createElement("span",{className:"tabLi"},s.a.createElement("span",null,"- "),s.a.createElement("span",{className:"infoButton"},"Submit")," button to select or create a group")),s.a.createElement("li",null,s.a.createElement("span",{className:"tabLi"},s.a.createElement("span",null,"- "),s.a.createElement("span",{className:"infoButton"},"Delete")," button to delete a group"))))))}}]),a}(n.Component),g=a(13),h={position:"fixed",top:0,bottom:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.3)",padding:50},d=Object(g.a)({position:"absolute",top:"30%",left:0,backgroundColor:"#fff",borderRadius:8,maxWidth:250,minHeight:150,margin:"0 auto",padding:10},"position","relative"),f={position:"absolute",bottom:10},E=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).sendUser=function(){e.props.getLoginUser(e.state.user)},e.onclose=function(t){e.props.onClose&&e.props.onClose(t)},e.handleChange=function(t){e.setState({user:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.state.user&&e.sendUser()},e.state={user:""},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this;return this.props.show?s.a.createElement("div",{className:"loginBox",style:h},s.a.createElement("div",{style:d},s.a.createElement("h2",{className:"modalHeader"},"Enter username"),this.props.children,s.a.createElement("form",{onSubmit:this.handleSubmit,action:""},s.a.createElement("input",{className:"input loginInput",onChange:this.handleChange,value:this.state.user,type:"text",placeholder:"Username"}),s.a.createElement("div",{style:f},s.a.createElement("button",{className:"submit"},"Submit"),s.a.createElement("button",{className:"close",onClick:function(t){e.props.onClose(t)}},"Close"))))):null}}]),a}(n.Component),b=a(16),v=a.n(b);a(25);v.a.initializeApp({apiKey:"AIzaSyDciUjGJwEk-pas3FAtthvcGXJT8QTwOhQ",authDomain:"to-do-app-32054.firebaseapp.com",databaseURL:"https://to-do-app-32054.firebaseio.com",projectId:"to-do-app-32054",storageBucket:"to-do-app-32054.appspot.com",messagingSenderId:"552462434673",appId:"1:552462434673:web:456137243376262d4576d0"});var N=v.a;var S=function(e){var t="message";return e.currentUser===e.user&&(t="myMessage"),s.a.createElement("div",{className:t},s.a.createElement("div",{className:"message-top"},s.a.createElement("div",{className:"message-time"},e.time),s.a.createElement("div",{className:"message-username"},e.user)),s.a.createElement("div",{className:"message-text"},e.message,s.a.createElement("span",null)),s.a.createElement("div",{className:"delete",onClick:function(){e.message.key,N.database().ref("/".concat(e.currentGroup)).child(e.messageKey).remove()}},s.a.createElement("i",{className:"fas fa-times deleteIcon"})))},C=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(e){var t=this;return s.a.createElement("div",{className:"message-list"},this.props.messages.map((function(e,a){return s.a.createElement("div",null,s.a.createElement(S,{key:a,currentUser:t.props.currentUser,messageKey:e.key,message:e.message,time:e.time,user:e.user,currentGroup:t.props.currentGroup}))})))}}]),a}(n.Component),y=a(9),k=a.n(y),w={position:"fixed",top:0,bottom:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.3)",padding:50},j=Object(g.a)({position:"absolute",top:"20%",left:0,backgroundColor:"#fff",borderRadius:8,maxWidth:250,minHeight:150,margin:"0 auto",padding:10},"position","relative"),O={position:"absolute",bottom:10},G=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).sendGroupName=function(){e.state.group?e.props.getGroupName(e.state.group):alert("Select a group")},e.onclose=function(t){e.props.onClose&&e.props.onClose(t)},e.handleChange=function(t){e.setState({group:t.target.value})},e.handleSubmit=function(t){(t.preventDefault(),e.state.group)&&(-1===e.state.groups.indexOf(e.state.group)&&k.a.database().ref("/".concat(e.state.group)).push({message:"Welcome to the group !",time:k.a.database.ServerValue.TIMESTAMP,user:e.props.currentUser}))},e.handleDeleteGroup=function(){e.state.group?e.state.group&&e.state.group!==e.props.currentGroup?k.a.database().ref("".concat(e.state.group)).remove():alert("Cannot delete the current group"):alert("Select a group")},e.handleLiClick=function(t){var a=t.target.innerText;e.setState({group:"".concat(a)},(function(){}))},e.state={group:"",groups:[],selectedGroup:""},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;k.a.database().ref().on("value",(function(t){var a=t.val(),n=[];for(var s in a)n.push(s);e.setState({groups:n})}))}},{key:"render",value:function(){var e=this;return this.props.show?s.a.createElement("div",{className:"loginBox",style:w},s.a.createElement("div",{style:j},this.props.children,s.a.createElement("div",{className:"group-list"},s.a.createElement("ul",{className:"groups"},this.state.groups.map((function(t,a){return s.a.createElement("li",{className:"group",key:"index",onClick:function(t){return e.handleLiClick(t)}},t)})))),s.a.createElement("form",{onSubmit:this.handleSubmit,action:""},s.a.createElement("input",{className:"input",onChange:this.handleChange,value:this.state.group,type:"text",placeholder:"Group name"}),s.a.createElement("div",{style:O},s.a.createElement("button",{className:"submit",onClick:function(){return e.sendGroupName()}},"Submit"))),s.a.createElement("button",{className:"deleteGroup",onClick:function(){e.handleDeleteGroup()}},"Delete"),s.a.createElement("button",{className:"close",onClick:function(t){e.props.onClose(t)}},"Close"))):null}}]),a}(n.Component),x=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState({message:t.target.value})},e.handleSubmit=function(t){t.preventDefault();var a={message:e.state.message,time:k.a.database.ServerValue.TIMESTAMP,user:e.props.user};""!==e.state.message&&(k.a.database().ref("/".concat(e.props.group)).push(a),e.setState({message:""}))},e.handleUserInput=function(t){e.setState({message:t.target.value})},e.handleDelete=function(e){e.preventDefault()},e.state={message:""},e}return Object(u.a)(a,[{key:"render",value:function(){return s.a.createElement("form",{onSubmit:this.handleSubmit,className:"send-message-form",action:""},s.a.createElement("input",{onChange:this.handleChange,value:this.state.message,type:"text",placeholder:"Type your message and hit ENTER",required:!0}),s.a.createElement("button",{onClick:this.handleSubmit,className:"send-message"},"Send"))}}]),a}(n.Component);var M=function(){return s.a.createElement("div",{className:"footer"},s.a.createElement("p",null,"\xa9 Bhagirthi Jhamb 2020"))},U=(a(36),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).showUserModal=function(){e.setState({userShow:!e.state.userShow})},e.showGroupModal=function(){e.setState({groupShow:!e.state.groupShow})},e.onclose=function(t){e.props.onClose&&e.props.onClose(t)},e.getLoginUser=function(t){e.setState({user:t}),localStorage.setItem("user",t)},e.getGroupName=function(t){localStorage.setItem("group",t),e.setState({group:t},(function(){e.loadMessages()}))},e.loadMessages=function(){N.database().ref("/".concat(e.state.group)).on("value",(function(t){var a=t.val();e.setState({messages:[]},(function(){var t=Object(l.a)(e.state.messages);for(var n in a){var s=a[n],o=s.user,r=s.message,c=s.time,u=new Date(c),i={time:"".concat(u.getHours(),":").concat(u.getMinutes(),":").concat(u.getSeconds()),user:o,message:r,key:n};t.push(i),e.setState({message:r,messages:t})}}))}))},e.scrollToBottom=function(){var e=document.querySelector(".screen");e.scrollTop=e.scrollHeight-e.clientHeight},e.state={userShow:!1,groupShow:!1,time:"",user:"".concat(localStorage.getItem("user")?localStorage.getItem("user"):"user"),message:"",messages:[],group:"".concat(localStorage.getItem("group")?localStorage.getItem("group"):"Messages"),groups:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.loadMessages()}},{key:"componentDidUpdate",value:function(){this.scrollToBottom()}},{key:"render",value:function(){return s.a.createElement("div",{className:"wrapper"},s.a.createElement("a",{class:"skip-main",href:"#main"},"Skip to main content"),s.a.createElement(p,{className:"information"}),s.a.createElement("div",{className:"chatBox"},s.a.createElement("div",{className:"mobile"},s.a.createElement("div",{className:"top"}),s.a.createElement("div",{className:"bottom"}),s.a.createElement("div",{className:"topBar"}),s.a.createElement("div",{className:"screen"},s.a.createElement(C,{currentUser:this.state.user,messages:this.state.messages,currentGroup:this.state.group})),s.a.createElement("button",{onClick:this.showUserModal,className:"create-user"},"User"),s.a.createElement("div",{className:"current-group"},this.state.group),s.a.createElement("button",{id:"main",onClick:this.showGroupModal,className:"create-group"},"Group"),s.a.createElement(E,{getLoginUser:this.getLoginUser,onClose:this.showUserModal,show:this.state.userShow}),s.a.createElement(G,{currentUser:this.state.user,currentGroup:this.state.group,getGroupName:this.getGroupName,onClose:this.showGroupModal,show:this.state.groupShow},s.a.createElement("h2",{className:"modalHeader"},"Group Name")),s.a.createElement(x,{user:this.state.user,group:this.state.group,getMessage:this.getMessage}))),s.a.createElement(M,null))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.1e5e7cd4.chunk.js.map