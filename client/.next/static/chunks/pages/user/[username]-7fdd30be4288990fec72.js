(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[293],{7728:function(e,n,s){"use strict";s.r(n);var t=s(5893),r=s(7757),a=s.n(r),c=s(2137),o=s(7294),u=s(4525),l=s(381),i=s.n(l),f=s(1163),d=s(2807),m=s(9669),h=s.n(m),p=s(1075),x=s(1664),w=u.Z.Meta;n.default=function(){var e=(0,o.useContext)(d.S),n=(e[0],e[1],(0,o.useState)({})),s=n[0],r=n[1],l=(0,f.useRouter)();(0,o.useEffect)((function(){l.query.username&&m()}),[l.query.username]);var m=function(){var e=(0,c.Z)(a().mark((function e(){var n,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h().get("/user/".concat(l.query.username));case 3:n=e.sent,s=n.data,r(s),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,t.jsx)("div",{className:"row col-md-6 offset-md-3",children:(0,t.jsxs)("div",{className:"pt-5 pb-5",children:[(0,t.jsxs)(u.Z,{hoverable:!0,cover:(0,t.jsx)("img",{src:function(e){return e.image?e.image.url:"/images/logo.png"}(s),alt:s.name}),children:[(0,t.jsx)(w,{title:s.name,description:s.about}),(0,t.jsxs)("p",{className:"pt-2 text-muted",children:["Joined ",i()(s.createdAt).fromNow()]}),(0,t.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,t.jsxs)("span",{className:"btn btn-sm",children:[s.followers&&s.followers.length," Followers"]}),(0,t.jsxs)("span",{className:"btn btn-sm",children:[s.following&&s.following.length," Following"]})]})]}),(0,t.jsx)(x.default,{href:"/user/dashboard",children:(0,t.jsx)("a",{className:"d-flex justify-content-center pt-5",children:(0,t.jsx)(p.Z,{})})})]})})}},104:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/[username]",function(){return s(7728)}])}},function(e){e.O(0,[885,65,798,267,774,888,179],(function(){return n=104,e(e.s=n);var n}));var n=e.O();_N_E=n}]);