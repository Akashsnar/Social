(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[894],{802:function(e,t,n){"use strict";n.d(t,{Z:function(){return O}});var r=n(5893),a=n(7294),s=n(8341),c=n.n(s),o=n(381),l=n.n(o),i=n(1940),u=n(6902),d={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},p=n(65),m=function(e,t){return a.createElement(p.Z,Object.assign({},e,{ref:t,icon:d}))};m.displayName="EditOutlined";var f=a.forwardRef(m),h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"},x=function(e,t){return a.createElement(p.Z,Object.assign({},e,{ref:t,icon:h}))};x.displayName="DeleteOutlined";var v=a.forwardRef(x),g=n(7569),j=n(7206),b=n(6928),w=n(2807),y=n(1163),k=n(4317),N=n(1664),O=function(e){var t=e.post,n=e.handleDelete,s=e.handleLike,o=e.handleUnlike,d=e.handleComment,p=e.commentsCount,m=void 0===p?10:p,h=e.removeComment,x=(0,a.useContext)(w.S)[0],O=(0,y.useRouter)();return(0,r.jsx)(r.Fragment,{children:t&&t.postedBy&&(0,r.jsxs)("div",{className:"card mb-5",children:[(0,r.jsxs)("div",{className:"card-header",children:[(0,r.jsx)(i.C,{size:40,src:(0,k.d)(t.postedBy)}),(0,r.jsx)("span",{className:"pt-2 ml-3",style:{marginLeft:"1rem"},children:t.postedBy.name}),(0,r.jsx)("span",{className:"pt-2 ml-3",style:{marginLeft:"1rem"},children:l()(t.createdAt).fromNow()})]}),(0,r.jsx)("div",{className:"card-body",children:c()(t.content)}),(0,r.jsxs)("div",{className:"card-footer",children:[t.image&&(0,r.jsx)(u.Z,{url:t.image.url}),(0,r.jsxs)("div",{className:"d-flex pt-2",children:[x&&x.user&&t.likes&&t.likes.includes(x.user._id)?(0,r.jsx)(g.Z,{onClick:function(){return o(t._id)},className:"text-danger pt-2 h5 px-2"}):(0,r.jsx)(j.Z,{onClick:function(){return s(t._id)},className:"text-danger pt-2 h5 px-2"}),(0,r.jsxs)("div",{className:"pt-2 pl-3",style:{marginRight:"1rem"},children:[t.likes.length," likes"]}),(0,r.jsx)(b.Z,{onClick:function(){return d(t)},className:"text-danger pt-2 h5 px-2"}),(0,r.jsx)("div",{className:"pt-2 pl-3",children:(0,r.jsx)(N.default,{href:"/post/".concat(t._id),children:(0,r.jsxs)("a",{children:[t.comments.length," comments"]})})}),x&&x.user&&x.user._id===t.postedBy._id&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f,{onClick:function(){return O.push("/user/post/".concat(t._id))},className:"text-danger pt-2 h5 px-2 mx-auto"}),(0,r.jsx)(v,{onClick:function(){return n(t)},className:"text-danger pt-2 h5 px-2"})]})]})]}),t.comments&&t.comments.length>0&&(0,r.jsx)("ol",{className:"list-group",style:{maxHeight:"125px",overflow:"scroll"},children:t.comments.slice(0,m).map((function(e){return(0,r.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-start",children:[(0,r.jsxs)("div",{className:"ms-2 me-auto",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(i.C,{size:20,className:"mb-1 mr-3",src:(0,k.d)(e.postedBy)}),"\xa0",e.postedBy.name]}),(0,r.jsx)("i",{className:"text-muted",children:e.text})]}),(0,r.jsxs)("span",{className:"badge rounded-pill text-muted",children:[l()(e.created).fromNow(),x&&x.user&&x.user._id===e.postedBy._id&&(0,r.jsx)("div",{className:"ml-auto mt-1",children:(0,r.jsx)(v,{onClick:function(){return h(t._id,e)},className:"pl-2 text-danger"})})]})]},e._id)}))})]},t._id)})}},6902:function(e,t,n){"use strict";var r=n(5893);t.Z=function(e){var t=e.url;return(0,r.jsx)("div",{style:{backgroundImage:"url("+t+")",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundSize:"cover",height:"300px"}})}},4317:function(e,t,n){"use strict";n.d(t,{d:function(){return r}});var r=function(e){return e.image?e.image.url:"/images/logo.png"}},3275:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return E}});var r=n(5893),a=n(6156),s=n(7757),c=n.n(s),o=n(2137),l=n(7294),i=n(2807),u=n(694),d=n(8113),p=n(1163),m=n(9669),f=n.n(m),h=n(9249),x=(n(8341),n(381),n(6902),n(1664)),v=n(802),g=function(e){var t=e.posts,n=e.handleDelete,a=e.handleLike,s=e.handleUnlike,c=e.handleComment,o=e.removeComment;(0,l.useContext)(i.S)[0],(0,p.useRouter)();return(0,r.jsx)(r.Fragment,{children:t&&t.map((function(e){return(0,r.jsx)(v.Z,{post:e,handleDelete:n,handleLike:a,handleUnlike:s,handleComment:c,removeComment:o},e._id)}))})},j=n(8848),b=n(1940),w=n(4317),y=function(e){var t=e.people,n=e.handleFollow,a=e.handleUnfollow,s=(0,l.useContext)(i.S)[0];(0,p.useRouter)();return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(j.ZP,{itemLayout:"horizontal",dataSource:t,renderItem:function(e){return(0,r.jsx)(j.ZP.Item,{children:(0,r.jsx)(j.ZP.Item.Meta,{avatar:(0,r.jsx)(b.C,{src:(0,w.d)(e)}),title:(0,r.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,r.jsx)(x.default,{href:"/user/".concat(e.username),children:(0,r.jsx)("a",{children:e.username})}),s&&s.user&&e.followers&&e.followers.includes(s.user._id)?(0,r.jsx)("span",{onClick:function(){return a(e)},className:"text-primary pointer",children:"Unfollow"}):(0,r.jsx)("span",{onClick:function(){return n(e)},className:"text-primary pointer",children:"Follow"})]})})})}})})},k=n(5812),N=n(5531),O=function(e){var t=e.addComment,n=e.comment,a=e.setComment;return(0,r.jsxs)("form",{onSubmit:t,children:[(0,r.jsx)("input",{type:"text",className:"form-control",placeholder:"Write something...",value:n,onChange:function(e){return a(e.target.value)}}),(0,r.jsx)("button",{className:"btn btn-primary btn-sm btn-block mt-3",children:"Submit"})]})};function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var C=function(){var e=(0,l.useContext)(i.S),t=e[0],n=e[1],a=(0,l.useState)(""),s=a[0],u=a[1],d=(0,l.useState)([]),p=d[0],m=d[1],x=function(){var e=(0,o.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,f().get("/search-user/".concat(s));case 4:n=e.sent,r=n.data,m(r),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,o.Z)(c().mark((function e(r){var a,s,o,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f().put("/user-follow",{_id:r._id});case 3:a=e.sent,s=a.data,(o=JSON.parse(localStorage.getItem("auth"))).user=s,localStorage.setItem("auth",JSON.stringify(o)),n(S(S({},t),{},{user:s})),l=p.filter((function(e){return e._id!==r._id})),m(l),h.Am.success("Following ".concat(r.name)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=(0,o.Z)(c().mark((function e(r){var a,s,o,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f().put("/user-unfollow",{_id:r._id});case 3:a=e.sent,s=a.data,(o=JSON.parse(localStorage.getItem("auth"))).user=s,localStorage.setItem("auth",JSON.stringify(o)),n(S(S({},t),{},{user:s})),l=p.filter((function(e){return e._id!==r._id})),m(l),h.Am.error("Unfollowed ".concat(r.name)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("form",{className:"form-inline row",onSubmit:x,children:[(0,r.jsx)("div",{className:"col-8",children:(0,r.jsx)("input",{onChange:function(e){u(e.target.value),m([])},value:s,className:"form-control",type:"search",placeholder:"Search"})}),(0,r.jsx)("div",{className:"col-4",children:(0,r.jsx)("button",{className:"btn btn-outline-primary col-12",type:"submit",children:"Search"})})]}),p&&p.map((function(e){return(0,r.jsx)(y,{people:p,handleFollow:v,handleUnfollow:g},e._id)}))]})};function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=(0,n(5615).ZP)("http://localhost:8000",{reconnection:!0}),E=function(){var e=(0,l.useContext)(i.S),t=e[0],n=e[1],a=(0,l.useState)(""),s=a[0],m=a[1],v=(0,l.useState)({}),j=v[0],b=v[1],w=(0,l.useState)(!1),_=w[0],S=w[1],Z=(0,l.useState)([]),E=Z[0],F=Z[1],I=(0,l.useState)([]),L=I[0],z=I[1],A=(0,l.useState)(""),B=A[0],R=A[1],U=(0,l.useState)(!1),H=U[0],J=U[1],M=(0,l.useState)({}),T=M[0],X=M[1],W=(0,l.useState)(0),q=W[0],G=W[1],K=(0,l.useState)(1),Q=K[0],V=K[1];(0,p.useRouter)();(0,l.useEffect)((function(){t&&t.token&&(Y(),$())}),[t&&t.token,Q]),(0,l.useEffect)((function(){try{f().get("/total-posts").then((function(e){var t=e.data;return G(t)}))}catch(e){console.log(e)}}),[]);var Y=function(){var e=(0,o.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f().get("/news-feed/".concat(Q));case 3:t=e.sent,n=t.data,F(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=(0,o.Z)(c().mark((function e(){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f().get("/find-people");case 3:t=e.sent,n=t.data,z(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=(0,o.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,f().post("/create-post",{content:s,image:j});case 4:n=e.sent,r=n.data,console.log("create post response => ",r),r.error?h.Am.error(r.error):(V(1),Y(),h.Am.success("Post created"),m(""),b({}),D.emit("new-post",r)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=(0,o.Z)(c().mark((function e(t){var n,r,a,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target.files[0],(r=new FormData).append("image",n),S(!0),e.prev=4,e.next=7,f().post("/upload-image",r);case 7:a=e.sent,s=a.data,b({url:s.url,public_id:s.public_id}),S(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0),S(!1);case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=(0,o.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,window.confirm("Are you sure?")){e.next=4;break}return e.abrupt("return");case 4:return e.next=6,f().delete("/delete-post/".concat(t._id));case 6:n=e.sent,n.data,h.Am.error("Post deleted"),Y(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=(0,o.Z)(c().mark((function e(r){var a,s,o,l;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f().put("/user-follow",{_id:r._id});case 3:a=e.sent,s=a.data,(o=JSON.parse(localStorage.getItem("auth"))).user=s,localStorage.setItem("auth",JSON.stringify(o)),n(P(P({},t),{},{user:s})),l=L.filter((function(e){return e._id!==r._id})),z(l),Y(),h.Am.success("Following ".concat(r.name)),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),ae=function(){var e=(0,o.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f().put("/like-post",{_id:t});case 3:n=e.sent,n.data,Y(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=(0,o.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f().put("/unlike-post",{_id:t});case 3:n=e.sent,n.data,Y(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),ce=function(){var e=(0,o.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,f().put("/add-comment",{postId:T._id,comment:B});case 4:n=e.sent,r=n.data,console.log("add comment",r),R(""),J(!1),Y(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=(0,o.Z)(c().mark((function e(t,n){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.confirm("Are you sure?")){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,e.next=6,f().put("/remove-comment",{postId:t,comment:n});case 6:r=e.sent,a=r.data,console.log("comment removed",a),Y(),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(3),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t,n){return e.apply(this,arguments)}}();return(0,r.jsx)(u.Z,{children:(0,r.jsxs)("div",{className:"container-fluid",children:[(0,r.jsx)("div",{className:"row py-5 text-light bg-default-image",children:(0,r.jsx)("div",{className:"col text-center",children:(0,r.jsx)("h1",{children:"Newsfeed"})})}),(0,r.jsxs)("div",{className:"row py-3",children:[(0,r.jsxs)("div",{className:"col-md-8",children:[(0,r.jsx)(d.Z,{content:s,setContent:m,postSubmit:ee,handleImage:te,uploading:_,image:j}),(0,r.jsx)("br",{}),(0,r.jsx)(g,{posts:E,handleDelete:ne,handleLike:ae,handleUnlike:se,handleComment:function(e){X(e),J(!0)},removeComment:oe}),(0,r.jsx)(k.Z,{current:Q,total:q/3*10,onChange:function(e){return V(e)},className:"pb-5"})]}),(0,r.jsxs)("div",{className:"col-md-4",children:[(0,r.jsx)(C,{}),(0,r.jsx)("br",{}),t&&t.user&&t.user.following&&(0,r.jsx)(x.default,{href:"/user/following",children:(0,r.jsxs)("a",{className:"h6",children:[t.user.following.length," Following"]})}),(0,r.jsx)(y,{people:L,handleFollow:re})]})]}),(0,r.jsx)(N.Z,{visible:H,onCancel:function(){return J(!1)},title:"Comment",footer:null,children:(0,r.jsx)(O,{comment:B,setComment:R,addComment:ce})})]})})}},4665:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/dashboard",function(){return n(3275)}])},2361:function(){},4616:function(){}},function(e){e.O(0,[774,885,65,764,341,90,798,848,950,7,703,888,179],(function(){return t=4665,e(e.s=t);var t}));var t=e.O();_N_E=t}]);