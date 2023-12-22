exports.id = 807;
exports.ids = [807];
exports.modules = {

/***/ 2807:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": function() { return /* binding */ UserContext; },
/* harmony export */   "d": function() { return /* binding */ UserProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




const UserContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();

const UserProvider = ({
  children
}) => {
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    user: {},
    token: ""
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setState(JSON.parse(window.localStorage.getItem("auth")));
  }, []);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const token = state && state.token ? state.token : "";
  (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.baseURL) = "http://localhost:8000/api";
  (axios__WEBPACK_IMPORTED_MODULE_2___default().defaults.headers.common.Authorization) = `Bearer ${token}`;
  axios__WEBPACK_IMPORTED_MODULE_2___default().interceptors.response.use(function (response) {
    // Do something before request is sent
    return response;
  }, function (error) {
    // Do something with request error
    let res = error.response;

    if (res.status === 401 && res.config && !res.config.__isRetryRequest) {
      setState(null);
      window.localStorage.removeItem("auth");
      router.push("/login");
    }
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(UserContext.Provider, {
    value: [state, setState],
    children: children
  });
};



/***/ })

};
;