(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4315:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./context/index.js
var context = __webpack_require__(2807);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(953);
;// CONCATENATED MODULE: ./components/Nav.js









const Nav = () => {
  const {
    0: current,
    1: setCurrent
  } = (0,external_react_.useState)("");
  const {
    0: state,
    1: setState
  } = (0,external_react_.useContext)(context/* UserContext */.S);
  (0,external_react_.useEffect)(() => {
     false && 0;
  }, [ false && 0]);
  const router = (0,router_.useRouter)();

  const logout = () => {
    window.localStorage.removeItem("auth");
    setState(null);
    router.push("/login");
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
    className: "nav d-flex justify-content-between",
    style: {
      backgroundColor: "blue"
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
        className: `nav-link text-light logo ${current === "/" && "active"}`,
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_antd_.Avatar, {
          src: "/images/logo.png"
        }), " MERNCAMP"]
      })
    }), state !== null ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "dropdown",
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "btn dropdown-toggle text-light",
          role: "button",
          id: "dropdownMenuLink",
          "data-bs-toggle": "dropdown",
          "aria-expanded": "false",
          children: state && state.user && state.user.name
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
          className: "dropdown-menu",
          "aria-labelledby": "dropdownMenuLink",
          children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/user/dashboard",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `nav-link dropdown-item ${current === "/user/dashboard" && "active"}`,
                children: "Dashboard"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/user/profile/update",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `nav-link dropdown-item ${current === "/user/profile/update" && "active"}`,
                children: "Profile"
              })
            })
          }), state.user.role === "Admin" && /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/admin",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `nav-link dropdown-item ${current === "/admin" && "active"}`,
                children: "Admin"
              })
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              onClick: logout,
              className: "nav-link",
              children: "Logout"
            })
          })]
        })]
      })
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/login",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: `nav-link text-light ${current === "/login" && "active"}`,
          children: "Login"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/register",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: `nav-link text-light ${current === "/register" && "active"}`,
          children: "Register"
        })
      })]
    })]
  });
};

/* harmony default export */ var components_Nav = (Nav);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(8819);
// EXTERNAL MODULE: ./node_modules/antd/dist/antd.css
var antd = __webpack_require__(4722);
;// CONCATENATED MODULE: ./pages/_app.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(context/* UserProvider */.d, {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "stylesheet",
        href: "/css/styles.css"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(components_Nav, {}), /*#__PURE__*/jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {
      position: "top-center"
    }), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
  });
}

/* harmony default export */ var _app = (MyApp);

/***/ }),

/***/ 4722:
/***/ (function() {



/***/ }),

/***/ 8819:
/***/ (function() {



/***/ }),

/***/ 953:
/***/ (function(module) {

"use strict";
module.exports = require("antd");;

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 2034:
/***/ (function(module) {

"use strict";
module.exports = require("react-toastify");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,807], function() { return __webpack_exec__(4315); });
module.exports = __webpack_exports__;

})();