/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 11
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const setCookie = (name, value) => {
  const updatedCookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)};path=/;max-age=31536000;`;
  document.cookie = updatedCookie;
};
const getCookie = (name) => {
  const matches = document.cookie.match(new RegExp(`(?:^|; )${name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1")}=([^;]*)`));
  return matches ? decodeURIComponent(matches[1]) : void 0;
};
const showMessage = () => {
  window.Corners5ProjectLayout.summonPopUp("#cookie", false);
  const closeCookie = document.querySelector(".cookie__close");
  closeCookie.addEventListener("click", () => {
    setCookie("agreeCookie", true);
  });
};
const cookie = () => {
  const result = getCookie("agreeCookie");
  if (result === void 0) {
    showMessage();
  }
};
cookie();


/***/ },

/***/ 61
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 147
(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./accordion/accordion.js": 5097,
	"./alarm/alarm.js": 5405,
	"./alert-wrapper/alert-wrapper.js": 3937,
	"./alert/alert.js": 4009,
	"./article-action/article-action.js": 7153,
	"./article-banner/article-banner.js": 4277,
	"./article-title/article-title.js": 1769,
	"./article/article.js": 1217,
	"./back-nav/back-nav.js": 4745,
	"./back/back.js": 2137,
	"./banner/banner.js": 1179,
	"./bottom-nav/bottom-nav.js": 7977,
	"./breadcrumbs/breadcrumbs.js": 4073,
	"./button/button.js": 2271,
	"./checkbox/checkbox.js": 7945,
	"./club-card-new/club-card-new.js": 3945,
	"./club-card/club-card.js": 4329,
	"./components.js": 2820,
	"./contacts-map/contacts-map.js": 9035,
	"./contacts/contacts.js": 9961,
	"./cookie/cookie.js": 11,
	"./department/department.js": 1475,
	"./direction-tabs/direction-tabs.js": 3283,
	"./empty/empty.js": 1865,
	"./equipment/equipment.js": 8481,
	"./field/field.js": 4205,
	"./food-card/food-card.js": 3949,
	"./footer/footer.js": 8413,
	"./gallery/gallery.js": 5377,
	"./h2/h2.js": 8275,
	"./header-dropdown/header-dropdown.js": 7025,
	"./header/header.js": 6689,
	"./help/help.js": 4605,
	"./job-benefits/job-benefits.js": 5479,
	"./layout-header/layout-header.js": 5853,
	"./layout/layout.js": 1995,
	"./loading/loading.js": 3037,
	"./main-about/main-about.js": 8625,
	"./main-cards/main-cards.js": 8621,
	"./main-news/main-news.js": 9585,
	"./main-questions/main-questions.js": 5177,
	"./main-services/main-services.js": 5909,
	"./main-trainers/main-trainers.js": 2153,
	"./main-why/main-why.js": 3467,
	"./map/map.js": 1413,
	"./menu/menu.js": 3081,
	"./modal/modal.js": 1421,
	"./move-card/move-card.js": 8065,
	"./moving/moving.js": 2307,
	"./news-card/news-card.js": 5401,
	"./not-found/not-found.js": 265,
	"./outdated-browsers/outdated-browsers.js": 9453,
	"./pagination/pagination.js": 1015,
	"./plug/plug.js": 4999,
	"./politics/politics.js": 5569,
	"./popUp/popUp.js": 9417,
	"./question/question.js": 4227,
	"./request-wrapper/request-wrapper.js": 4473,
	"./request/request.js": 5745,
	"./review-card/review-card.js": 8693,
	"./service-card/service-card.js": 8043,
	"./slider/slider.js": 5073,
	"./socials/socials.js": 4741,
	"./start/start.js": 6285,
	"./tabs/tabs.js": 3519,
	"./title/title.js": 61,
	"./trainer-card/trainer-card.js": 8595,
	"./trainer/trainer.js": 837,
	"./up/up.js": 5057,
	"./vacancy-card/vacancy-card.js": 7599,
	"./validator/validator.js": 4489,
	"./video/video.js": 2305,
	"./widget/widget.js": 2079,
	"./window/window.js": 6919,
	"./workout-card/workout-card.js": 5155,
	"./zone-card/zone-card.js": 1945,
	"components/accordion/accordion.js": 5097,
	"components/alarm/alarm.js": 5405,
	"components/alert-wrapper/alert-wrapper.js": 3937,
	"components/alert/alert.js": 4009,
	"components/article-action/article-action.js": 7153,
	"components/article-banner/article-banner.js": 4277,
	"components/article-title/article-title.js": 1769,
	"components/article/article.js": 1217,
	"components/back-nav/back-nav.js": 4745,
	"components/back/back.js": 2137,
	"components/banner/banner.js": 1179,
	"components/bottom-nav/bottom-nav.js": 7977,
	"components/breadcrumbs/breadcrumbs.js": 4073,
	"components/button/button.js": 2271,
	"components/checkbox/checkbox.js": 7945,
	"components/club-card-new/club-card-new.js": 3945,
	"components/club-card/club-card.js": 4329,
	"components/components.js": 2820,
	"components/contacts-map/contacts-map.js": 9035,
	"components/contacts/contacts.js": 9961,
	"components/cookie/cookie.js": 11,
	"components/department/department.js": 1475,
	"components/direction-tabs/direction-tabs.js": 3283,
	"components/empty/empty.js": 1865,
	"components/equipment/equipment.js": 8481,
	"components/field/field.js": 4205,
	"components/food-card/food-card.js": 3949,
	"components/footer/footer.js": 8413,
	"components/gallery/gallery.js": 5377,
	"components/h2/h2.js": 8275,
	"components/header-dropdown/header-dropdown.js": 7025,
	"components/header/header.js": 6689,
	"components/help/help.js": 4605,
	"components/job-benefits/job-benefits.js": 5479,
	"components/layout-header/layout-header.js": 5853,
	"components/layout/layout.js": 1995,
	"components/loading/loading.js": 3037,
	"components/main-about/main-about.js": 8625,
	"components/main-cards/main-cards.js": 8621,
	"components/main-news/main-news.js": 9585,
	"components/main-questions/main-questions.js": 5177,
	"components/main-services/main-services.js": 5909,
	"components/main-trainers/main-trainers.js": 2153,
	"components/main-why/main-why.js": 3467,
	"components/map/map.js": 1413,
	"components/menu/menu.js": 3081,
	"components/modal/modal.js": 1421,
	"components/move-card/move-card.js": 8065,
	"components/moving/moving.js": 2307,
	"components/news-card/news-card.js": 5401,
	"components/not-found/not-found.js": 265,
	"components/outdated-browsers/outdated-browsers.js": 9453,
	"components/pagination/pagination.js": 1015,
	"components/plug/plug.js": 4999,
	"components/politics/politics.js": 5569,
	"components/popUp/popUp.js": 9417,
	"components/question/question.js": 4227,
	"components/request-wrapper/request-wrapper.js": 4473,
	"components/request/request.js": 5745,
	"components/review-card/review-card.js": 8693,
	"components/service-card/service-card.js": 8043,
	"components/slider/slider.js": 5073,
	"components/socials/socials.js": 4741,
	"components/start/start.js": 6285,
	"components/tabs/tabs.js": 3519,
	"components/title/title.js": 61,
	"components/trainer-card/trainer-card.js": 8595,
	"components/trainer/trainer.js": 837,
	"components/up/up.js": 5057,
	"components/vacancy-card/vacancy-card.js": 7599,
	"components/validator/validator.js": 4489,
	"components/video/video.js": 2305,
	"components/widget/widget.js": 2079,
	"components/window/window.js": 6919,
	"components/workout-card/workout-card.js": 5155,
	"components/zone-card/zone-card.js": 1945
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 147;

/***/ },

/***/ 265
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 375
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4848);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7425);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(844);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_2__);




const InputPhone = ({
  name,
  value,
  onChange,
  onBlur,
  className,
  label,
  placeholder,
  isRequired,
  isDisabled
}) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: `InputPhone${className ? ` ${className}` : ""}`, children: [
  label ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: isRequired ? "InputPhone__label InputPhone__label--required" : "InputPhone__label", children: label }) : null,
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    (react_input_mask__WEBPACK_IMPORTED_MODULE_2___default()),
    {
      mask: "+7 (999) 999-99-99",
      maskPlaceholder: null,
      value,
      onChange,
      onBlur,
      disabled: isDisabled,
      children: /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
        formik__WEBPACK_IMPORTED_MODULE_1__/* .Field */ .D0,
        {
          minLength: "10",
          autoComplete: "off",
          autoCapitalize: "off",
          className: "InputPhone__field",
          type: "tel",
          name,
          placeholder
        }
      )
    }
  )
] });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InputPhone);


/***/ },

/***/ 837
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 996
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
;// ./src/react/components/Modal/Modal.js



const Modal = ({ children, show, closeModal }) => {
  const [active, setActive] = (0,react.useState)(false);
  const [animateIn, setAnimateIn] = (0,react.useState)(false);
  const [animateOut, setAnimateOut] = (0,react.useState)(false);
  const check = () => {
    if (animateIn) {
      return "Modal__container--in";
    }
    if (animateOut) {
      return "Modal__container--out";
    }
    return "";
  };
  (0,react.useEffect)(() => {
    if (show) {
      setActive(true);
      setAnimateIn(true);
    } else {
      setActive(false);
    }
  }, [show]);
  const onModalEscPress = (evt) => {
    if (evt.code === "Escape") {
      evt.preventDefault();
      setAnimateOut(true);
    }
  };
  (0,react.useEffect)(() => {
    document.addEventListener("keydown", onModalEscPress);
    return () => {
      document.removeEventListener("keydown", onModalEscPress);
    };
  }, []);
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("section", { className: `Modal ${active ? "Modal--active" : ""}`, children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      "div",
      {
        className: "Modal__overlay",
        onClick: () => {
          setAnimateOut(true);
        }
      }
    ),
    /* @__PURE__ */ (0,jsx_runtime.jsxs)(
      "section",
      {
        className: `Modal__container ${check()}`,
        onAnimationEnd: () => {
          if (animateIn) {
            setAnimateIn(false);
          }
          if (animateOut) {
            setAnimateOut(false);
            closeModal();
          }
        },
        children: [
          /* @__PURE__ */ (0,jsx_runtime.jsx)(
            "button",
            {
              className: "Modal__close",
              onClick: () => {
                setAnimateOut(true);
              },
              children: /* @__PURE__ */ (0,jsx_runtime.jsx)("span", {})
            }
          ),
          children
        ]
      }
    )
  ] });
};
/* harmony default export */ const Modal_Modal = (Modal);

// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(7425);
// EXTERNAL MODULE: ./node_modules/yup/index.esm.js
var index_esm = __webpack_require__(2664);
// EXTERNAL MODULE: ./src/react/components/Input/Input.js
var Input = __webpack_require__(4541);
// EXTERNAL MODULE: ./src/react/components/InputPhone/InputPhone.js
var InputPhone = __webpack_require__(375);
// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__(3670);
;// ./src/react/components/RequestModal/RequestModal.js








const RequestModal = ({ submitHandler, type, id }) => {
  const validationSchema = index_esm/* object */.Ik().shape({
    fio: index_esm/* string */.Yj().required(),
    phone: index_esm/* string */.Yj().matches(utils/* phoneRegExp */.Kh).required()
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: type !== "" && id !== "" && /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "RequestModal", children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "RequestModal__title", children: "\u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443" }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      formik_esm/* Formik */.l1,
      {
        initialValues: {
          type,
          id,
          fio: "",
          phone: ""
        },
        validationSchema,
        onSubmit: (values) => {
          submitHandler(values);
        },
        children: ({
          values,
          errors,
          touched,
          handleChange,
          handleBlur
        }) => /* @__PURE__ */ (0,jsx_runtime.jsxs)(
          formik_esm/* Form */.lV,
          {
            className: "RequestModal__form",
            action: "#",
            method: "post",
            noValidate: true,
            children: [
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestModal__field", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Input/* default */.A,
                {
                  type: "text",
                  name: "fio",
                  label: "\u0418\u043C\u044F",
                  isRequired: true,
                  placeholder: "\u0418\u043C\u044F",
                  className: errors.fio && touched.fio ? "Input--error" : null
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestModal__field", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                InputPhone/* default */.A,
                {
                  name: "phone",
                  label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                  value: values.phone,
                  isRequired: true,
                  placeholder: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                  onChange: handleChange,
                  onBlur: handleBlur,
                  className: errors.phone && touched.phone ? "InputPhone--error" : null
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestModal__field", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("button", { className: "RequestModal__submit button", type: "submit", children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C" }) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestModal__field", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("p", { className: "RequestModal__legal", children: [
                "\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 \xAB\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C\xBB \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u0441 ",
                /* @__PURE__ */ (0,jsx_runtime.jsx)("a", { href: "/privacy-policy/", target: "_blank", children: "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438" }),
                " \u0438 ",
                /* @__PURE__ */ (0,jsx_runtime.jsx)("a", { href: "/terms-of-use/", target: "_blank", children: "\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435\u043C" }),
                "."
              ] }) })
            ]
          }
        )
      }
    )
  ] }) });
};
/* harmony default export */ const RequestModal_RequestModal = (RequestModal);

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(1083);
// EXTERNAL MODULE: ./src/components/loading/loading.js
var loading = __webpack_require__(3037);
// EXTERNAL MODULE: ./src/components/alert/alert.js
var alert_alert = __webpack_require__(4009);
;// ./src/api/RequestModalApi.js



const requestModalApi = axios/* default */.A.create({
  baseURL: "/local/ajax",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 5e3
});
const setStatus = (status) => {
  switch (status) {
    case "success":
      return "alert--green";
    case "error":
      return "alert--red";
    default:
      return "";
  }
};
const sendRequestModal = (values) => {
  (0,loading.addLoading)(".Modal__container");
  return requestModalApi.post("/form.php", values).then((response) => {
    if (response.status === 200) {
      const alert = document.querySelector("#alert--request").content.querySelector(".alert");
      alert.classList.add(setStatus(response.data.status));
      const container = document.querySelector("#alert--request").content.querySelector(".alert__container");
      container.innerHTML = response.data.text;
      (0,loading.removeLoading)();
      (0,alert_alert.summonAlert)("#alert--request");
      window.RequestModalProvider.setShow(false);
      window.RequestModalProvider.setType("");
      window.RequestModalProvider.setId("");
    }
  }).catch((error) => {
    console.log(error);
    (0,loading.removeLoading)();
    (0,alert_alert.summonAlert)("#alert--error");
  });
};

;// ./src/react/providers/common/RequestModalProvider/RequestModalProvider.js







const RequestModalProvider = () => {
  const [show, setShow] = (0,react.useState)(false);
  const [type, setType] = (0,react.useState)("");
  const [id, setId] = (0,react.useState)("");
  (0,react.useEffect)(() => {
    if (show) {
      (0,utils/* getPaddingOnBody */.rP)();
    } else {
      (0,utils/* getPaddingFromBody */.iW)();
    }
  }, [show]);
  window.RequestModalProvider = { setShow, setType, setId };
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: show && /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Modal_Modal,
    {
      show,
      closeModal: () => {
        setShow(false);
        setType("");
        setId("");
      },
      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(RequestModal_RequestModal, { submitHandler: sendRequestModal, type, id })
    }
  ) });
};
const requestModalProviderContainer = document.querySelector("#RequestModalProvider");
if (RequestModalProvider) {
  (0,client/* createRoot */.H)(requestModalProviderContainer).render(/* @__PURE__ */ (0,jsx_runtime.jsx)(RequestModalProvider, {}));
}


/***/ },

/***/ 1015
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 1179
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 1217
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 1366
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-copy",
  "use": "icon-copy-usage",
  "viewBox": "0 0 34 34",
  "content": "<symbol viewBox=\"0 0 34 34\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-copy\">\n<path d=\"M19.8337 9.91406V7.66406C19.8337 6.72125 19.8337 6.24985 19.5408 5.95696C19.2479 5.66406 18.7765 5.66406 17.8337 5.66406H7.66699C6.72418 5.66406 6.25278 5.66406 5.95989 5.95696C5.66699 6.24985 5.66699 6.72125 5.66699 7.66406V17.8307C5.66699 18.7735 5.66699 19.2449 5.95989 19.5378C6.25278 19.8307 6.72418 19.8307 7.66699 19.8307H9.91699\" stroke-width=\"1.2\" />\n<rect x=\"14.167\" y=\"14.1641\" width=\"14.1667\" height=\"14.1667\" rx=\"1\" stroke-width=\"1.2\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 1413
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const map = document.querySelectorAll(".map");
if (map.length > 0) {
  const tag = document.createElement("script");
  tag.src = "https://api-maps.yandex.ru/2.1/?load=package.full&lang=ru-RU";
  const firstScriptTag = document.querySelector("script");
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  if (tag) {
    tag.addEventListener("load", () => {
      console.log("load");
      map.forEach((el) => {
        const coorinateX = parseFloat(el.getAttribute("data-coordinatex"));
        const coorinateY = parseFloat(el.getAttribute("data-coordinatey"));
        const mapName = el.getAttribute("data-name");
        const mapHint = el.getAttribute("data-hint");
        const ymap = el.querySelector(".map__ymap");
        ymaps.ready(() => {
          const myMap = new ymaps.Map(ymap, {
            center: [coorinateX, coorinateY],
            zoom: 16,
            controls: ["zoomControl"]
          }, {
            searchControlProvider: "yandex#search"
          });
          myMap.behaviors.disable("scrollZoom");
          let placemark;
          let MyBalloonLayout;
          let MyBalloonContentLayout;
          if (window.innerWidth >= 488) {
            MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
              '<div class="map__balloon"><a class="map__balloon-close" href="#"><span></span></a><div class="map__balloon-arrow"></div><div class="map__balloon-inner">$[[options.contentLayout observeSize minWidth=235 maxWidth=300 maxHeight=350]]</div></div>',
              {
                /**
                 * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
                 * @function
                 * @name build
                 */
                build: function() {
                  this.constructor.superclass.build.call(this);
                  this._$element = $(".map__balloon", this.getParentElement());
                  this.applyElementOffset();
                  this._$element.find(".map__balloon-close").on("click", $.proxy(this.onCloseClick, this));
                },
                /**
                 * Удаляет содержимое макета из DOM.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
                 * @function
                 * @name clear
                 */
                clear: function() {
                  this._$element.find(".map__balloon-close").off("click");
                  this.constructor.superclass.clear.call(this);
                },
                /**
                 * Метод будет вызван системой шаблонов АПИ при изменении размеров вложенного макета.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name onSublayoutSizeChange
                 */
                onSublayoutSizeChange: function() {
                  MyBalloonLayout.superclass.onSublayoutSizeChange.apply(this, arguments);
                  if (!this._isElement(this._$element)) {
                    return;
                  }
                  this.applyElementOffset();
                  this.events.fire("shapechange");
                },
                /**
                 * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name applyElementOffset
                 */
                applyElementOffset: function() {
                  this._$element.css({
                    left: -(this._$element[0].offsetWidth / 2),
                    top: -(this._$element[0].offsetHeight + 20 + this._$element.find(".map__balloon-arrow")[0].offsetHeight)
                  });
                },
                /**
                 * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name onCloseClick
                 */
                onCloseClick: function(e) {
                  e.preventDefault();
                  this.events.fire("userclose");
                },
                onSubmitClick: function(e) {
                  e.preventDefault();
                  window.Corners5ProjectLayout.summonPopUp("#modal--contact", true);
                  validatedForm = window.Corners5ProjectLayout.validation.validateForm("#where-2");
                  window.Corners5ProjectLayout.validation.maskPhone("#where-2");
                  window.Corners5ProjectLayout.setTextareaAutoHeight("#where-2 textarea.validator__texarea");
                  const form = document.querySelector("#where-2");
                  form.addEventListener("bouncerFormValid", () => {
                    func();
                    validatedForm.destroy();
                    validatedForm = void 0;
                  });
                  this.events.fire("userclose");
                },
                /**
                 * Используется для автопозиционирования (balloonAutoPan).
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/ILayout.xml#getClientBounds
                 * @function
                 * @name getClientBounds
                 * @returns {Number[][]} Координаты левого верхнего и правого нижнего углов шаблона относительно точки привязки.
                 */
                getShape: function() {
                  if (!this._isElement(this._$element)) {
                    return MyBalloonLayout.superclass.getShape.call(this);
                  }
                  var position = this._$element.position();
                  return new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                    [position.left, position.top],
                    [
                      position.left + this._$element[0].offsetWidth,
                      position.top + this._$element[0].offsetHeight + this._$element.find(".map__balloon-arrow")[0].offsetHeight
                    ]
                  ]));
                },
                /**
                 * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
                 * @function
                 * @private
                 * @name _isElement
                 * @param {jQuery} [element] Элемент.
                 * @returns {Boolean} Флаг наличия.
                 */
                _isElement: function(element) {
                  return element && element[0] && element.find(".map__balloon-arrow")[0];
                }
              }
            );
            MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
              '<p class="map__balloon-title">$[properties.balloonHeader]</p><p class="map__balloon-city">$[properties.balloonContent]</p>'
            );
          } else {
            MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
              '<p class="map__balloon-title">$[properties.balloonHeader]</p><p class="map__balloon-city">$[properties.balloonContent]</p>',
              {}
            );
          }
          const myCollection = new ymaps.GeoObjectCollection({}, {
            iconLayout: "default#image",
            iconImageHref: "/local/templates/sokfit/assets/images/map-pin.svg",
            iconImageSize: [50, 50],
            iconImageOffset: [-25, -25]
          });
          if (window.innerWidth >= 488) {
            placemark = new ymaps.Placemark([coorinateX, coorinateY], {
              balloonHeader: `${mapName}`,
              balloonContent: `${mapHint}`
            }, {
              balloonShadow: false,
              balloonLayout: MyBalloonLayout,
              balloonContentLayout: MyBalloonContentLayout
              // balloonPanelMaxMapArea: 0,
            });
          } else {
            placemark = new ymaps.Placemark([coorinateX, coorinateY], {
              balloonHeader: `${mapName}`,
              balloonContent: `${mapHint}`
            }, {
              balloonContentLayout: MyBalloonContentLayout
              // balloonPanelMaxMapArea: 0,
            });
          }
          myCollection.add(placemark);
          placemark.events.add("balloonopen", (evt) => {
            evt.get("target").options.set("preset", {
              iconImageHref: "/local/templates/sokfit/assets/images/map-pin--active.svg"
            });
          });
          placemark.events.add("balloonclose", (evt) => {
            evt.get("target").options.unset("preset");
          });
          myMap.geoObjects.add(myCollection);
        });
      });
    });
  }
}


/***/ },

/***/ 1421
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 1475
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 1769
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 1865
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 1926
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-social__link",
  "use": "icon-social__link-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" stroke=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-social__link\">\r\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8 4C5.79086 4 4 5.79086 4 8V32C4 34.2091 5.79086 36 8 36H32C34.2091 36 36 34.2091 36 32V8C36 5.79086 34.2091 4 32 4H8ZM10.25 20C10.25 18.067 11.817 16.5 13.75 16.5H17.5001C18.3285 16.5 19.0001 15.8284 19.0001 15C19.0001 14.1716 18.3285 13.5 17.5001 13.5H13.75C10.1602 13.5 7.25 16.4102 7.25 20C7.25 23.5899 10.1602 26.5001 13.75 26.5001H17.5001C18.3285 26.5001 19.0001 25.8285 19.0001 25.0001C19.0001 24.1717 18.3285 23.5001 17.5001 23.5001H13.75C11.817 23.5001 10.25 21.9331 10.25 20ZM13.5002 20C13.5002 19.1716 14.1717 18.5 15.0002 18.5H25.0003C25.8287 18.5 26.5003 19.1716 26.5003 20C26.5003 20.8284 25.8287 21.5 25.0003 21.5H15.0002C14.1717 21.5 13.5002 20.8284 13.5002 20ZM29.7502 20C29.7502 18.067 28.1832 16.5 26.2501 16.5H22.5001C21.6717 16.5 21.0001 15.8284 21.0001 15C21.0001 14.1716 21.6717 13.5 22.5001 13.5H26.2501C29.84 13.5 32.7502 16.4102 32.7502 20C32.7502 23.5899 29.84 26.5001 26.2501 26.5001H22.5001C21.6717 26.5001 21.0001 25.8285 21.0001 25.0001C21.0001 24.1717 21.6717 23.5001 22.5001 23.5001H26.2501C28.1832 23.5001 29.7502 21.9331 29.7502 20Z\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 1945
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popUp_popUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9417);


const cards = document.querySelectorAll(".zone-card");
cards.forEach((card) => {
  const toggle = card.querySelector(".zone-card__more");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const template = card.cloneNode(true);
      (0,_popUp_popUp__WEBPACK_IMPORTED_MODULE_0__.summonPopUp)({
        template: "#modal--more",
        blockScroll: true,
        overlay: {
          use: true,
          closeOnClick: true
        },
        esc: {
          closeOnEsc: true
        }
      });
      const modal = document.querySelector(".modal");
      if (!modal) return;
      const wrapper = modal.querySelector(".modal__wrapper");
      wrapper.appendChild(template);
    });
  }
});


/***/ },

/***/ 1995
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1236);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1708);



const layoutSliders = document.querySelectorAll(".layout--slider");
layoutSliders.forEach((layoutSlider, index) => {
  layoutSlider.id = `layout-${index}`;
  const id = `layout-${index}`;
  const slider = layoutSlider.querySelector(".swiper");
  const layoutNolint = new swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(slider, {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Navigation */ .Vx, swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Pagination */ .dK, swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Scrollbar */ .Ze],
    // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: false,
    touchEventsTarget: "container",
    // Pagination bullets
    pagination: {
      el: `#${id} .layout__slider-pagination`,
      type: "bullets",
      clickable: true,
      bulletClass: "layout__slider-bullet",
      bulletActiveClass: "layout__slider-bullet--active"
    },
    // Navigation arrows
    navigation: {
      prevEl: `#${id} .layout__slider-button--prev`,
      nextEl: `#${id} .layout__slider-button--next`,
      disabledClass: "layout__slider-button--disabled"
    },
    // Scrollbar
    scrollbar: {
      el: ".layout__scrollbar",
      dragClass: "layout__scrollbar-drag",
      draggable: true
    },
    // Responsive breakpoints
    breakpoints: {
      320: {
        spaceBetween: 12
      },
      767: {
        spaceBetween: 12
      },
      768: {
        spaceBetween: 20
      }
    }
  });
});


/***/ },

/***/ 2079
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const widget = document.querySelector(".widget");
if (widget) {
  const widgetClose = widget.querySelector(".widget__close");
  const widgetOverlay = widget.querySelector(".widget__overlay");
  const body = document.querySelector("body");
  const getWidgetWork = () => {
    const isActive = widget.classList.contains("widget--active");
    if (!isActive) {
      widget.classList.add("widget--active");
      widgetClose.classList.add("widget__close--active");
      body.classList.add("fixed");
    } else {
      widget.classList.remove("widget--active");
      widgetClose.classList.remove("widget__close--active");
      body.classList.remove("fixed");
    }
  };
  widgetClose.addEventListener("click", () => {
    getWidgetWork();
  });
  widgetOverlay.addEventListener("click", () => {
    getWidgetWork();
  });
  const currentPage = window.location.pathname.split("/").pop();
  const links = widget.querySelectorAll("li a");
  links.forEach((link) => {
    const page = link.href.split("/").pop();
    if (page === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}


/***/ },

/***/ 2137
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 2153
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1236);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1708);



const mainTrainers = document.querySelector(".main-trainers");
if (mainTrainers) {
  const slider = mainTrainers.querySelector(".swiper");
  const layoutNolint = new swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(slider, {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Navigation */ .Vx, swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Pagination */ .dK, swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Scrollbar */ .Ze],
    // Optional parameters
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: false,
    touchEventsTarget: "container",
    // Scrollbar
    scrollbar: {
      el: ".main-trainers__scrollbar",
      dragClass: "main-trainers__scrollbar-drag",
      draggable: true
    },
    // Responsive breakpoints
    breakpoints: {
      320: {
        spaceBetween: 12
      },
      767: {
        spaceBetween: 12
      },
      768: {
        spaceBetween: 20
      }
    }
  });
}


/***/ },

/***/ 2181
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-add-file",
  "use": "icon-add-file-usage",
  "viewBox": "0 0 32 32",
  "content": "<symbol viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-add-file\">\n<path d=\"M23.771 9.10457C24.5418 9.87532 24.9272 10.2607 25.1302 10.7507C25.3332 11.2408 25.3332 11.7858 25.3332 12.8758V22.6667C25.3332 25.1808 25.3332 26.4379 24.5521 27.2189C23.771 28 22.514 28 19.9998 28H11.9998C9.48568 28 8.2286 28 7.44756 27.2189C6.6665 26.4379 6.6665 25.1808 6.6665 22.6667V9.33333C6.6665 6.81917 6.6665 5.56209 7.44756 4.78105C8.2286 4 9.48568 4 11.9998 4H16.4573C17.5473 4 18.0924 4 18.5824 4.20299C19.0725 4.40597 19.4578 4.79135 20.2286 5.56209L23.771 9.10457Z\" stroke=\"#7A7A7A\" stroke-width=\"2\" stroke-linejoin=\"round\" />\n<path d=\"M16 14.6641V21.3307\" stroke=\"#7A7A7A\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M19.3332 18H12.6665\" stroke=\"#7A7A7A\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 2271
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 2305
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const generateURL = (id) => {
  const query = "?rel=0&showinfo=0&autoplay=1";
  return `https://www.youtube.com/embed/${id}${query}`;
};
const createIframe = (id) => {
  const iframe = document.createElement("iframe");
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("allow", "autoplay");
  iframe.setAttribute("src", generateURL(id));
  iframe.classList.add("video__media");
  return iframe;
};
const parseMediaURL = (video) => {
  const regexp = /https:\/\/youtu\.be\/([a-zA-Z0-9_-]+)/i;
  const url = video.href;
  const match = url.match(regexp);
  return match[1];
};
const setupVideo = (video) => {
  const link = video.querySelector(".video__link");
  const button = video.querySelector(".video__button");
  const source = video.querySelector("source");
  const media = video.querySelector(".video__media");
  const id = parseMediaURL(link);
  source.setAttribute("srcset", `https://i.ytimg.com/vi_webp/${id}/maxresdefault.webp`);
  media.setAttribute("src", `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`);
  video.addEventListener("click", () => {
    const iframe = createIframe(id);
    link.remove();
    button.remove();
    video.appendChild(iframe);
  });
  link.removeAttribute("href");
  video.classList.add("video--enabled");
};
const findVideos = () => {
  document.querySelectorAll(".video__wrapper").forEach((el) => {
    setupVideo(el);
  });
};
findVideos();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (findVideos);


/***/ },

/***/ 2307
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 2546
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "pagination-arrow-right",
  "use": "pagination-arrow-right-usage",
  "viewBox": "0 0 38 38",
  "content": "<symbol viewBox=\"0 0 38 38\" xmlns=\"http://www.w3.org/2000/svg\" id=\"pagination-arrow-right\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M17.5607 6.41839C16.9749 5.86054 16.0251 5.86054 15.4393 6.41839C14.8536 6.97625 14.8536 7.88083 15.4393 8.43868L23.3787 16L15.4393 23.5613C14.8536 24.1192 14.8536 25.0237 15.4393 25.5816C16.0251 26.1395 16.9749 26.1395 17.5607 25.5816L26.5607 17.0101C27.1464 16.4522 27.1464 15.5477 26.5607 14.9898L17.5607 6.41839Z\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 2640
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-5corners",
  "use": "icon-5corners-usage",
  "viewBox": "0 0 77 21",
  "content": "<symbol viewBox=\"0 0 77 21\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-5corners\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.44033 17.4466L8.41152 17.3883L0 12L2.99588 9.78641L5.47325 0L8.46914 2.21359L18.465 1.57282L17.3128 5.12621L21 14.534H17.284L17.2551 14.5631L9.56379 21L8.44033 17.4466Z\" />\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.44054 17.3546V17.4129L14.2595 14.5002L15.3541 14.5294H17.2553H17.2842L17.1689 13.6556L16.3623 8.03423L17.313 5.15073H17.2842L17.1977 5.12161L10.9179 4.01481L8.46934 2.20898V2.23811L7.72037 3.63617L5.44465 8.0051L3.11132 9.72355L2.99609 9.81093L7.51873 14.5002L8.44054 17.3546Z\" fill=\"#ffffff\" />\n<path d=\"M29.8022 14.6193C29.2681 14.6193 28.788 14.517 28.3619 14.3125C27.9386 14.1051 27.6005 13.821 27.3477 13.4602C27.0948 13.0994 26.9599 12.6875 26.9428 12.2244H28.2212C28.2525 12.5994 28.4187 12.9077 28.7198 13.1491C29.021 13.3906 29.3817 13.5114 29.8022 13.5114C30.1374 13.5114 30.4343 13.4347 30.6928 13.2812C30.9542 13.125 31.1587 12.9105 31.3065 12.6378C31.457 12.3651 31.5323 12.054 31.5323 11.7045C31.5323 11.3494 31.4556 11.0327 31.3022 10.7543C31.1488 10.4759 30.9371 10.2571 30.6673 10.098C30.4002 9.93892 30.0934 9.85795 29.7468 9.85511C29.4826 9.85511 29.217 9.90057 28.9499 9.99148C28.6829 10.0824 28.467 10.2017 28.3022 10.3494L27.0962 10.1705L27.5863 5.77273H32.3846V6.90199H28.6815L28.4045 9.34375H28.4556C28.6261 9.17898 28.8519 9.04119 29.1332 8.9304C29.4173 8.8196 29.7212 8.7642 30.0451 8.7642C30.5763 8.7642 31.0494 8.89062 31.4641 9.14347C31.8817 9.39631 32.2099 9.74148 32.4485 10.179C32.69 10.6136 32.8093 11.1136 32.8065 11.679C32.8093 12.2443 32.6815 12.7486 32.4229 13.1918C32.1673 13.6349 31.8121 13.9844 31.3576 14.2401C30.9059 14.4929 30.3874 14.6193 29.8022 14.6193ZM38.2759 14.6193V13.4602H38.8001C39.0188 13.4602 39.1992 13.4233 39.3413 13.3494C39.4862 13.2756 39.604 13.1761 39.695 13.0511C39.7887 12.9233 39.8668 12.7841 39.9293 12.6335L40.0529 12.3224L36.9847 5.77273H38.3825L40.6708 10.8182L42.7077 5.77273H44.0884L41.0714 12.9872C40.9435 13.277 40.7958 13.5455 40.6282 13.7926C40.4634 14.0398 40.2433 14.2401 39.9677 14.3935C39.6921 14.544 39.3271 14.6193 38.8725 14.6193H38.2759ZM50.7756 5.77273V6.90625H46.6506V14.5H45.3338V5.77273H50.7756ZM51.5991 14.5V13.358L51.8548 13.3494C52.2013 13.3409 52.4741 13.223 52.6729 12.9957C52.8746 12.7685 53.021 12.402 53.1119 11.8963C53.2056 11.3906 53.2681 10.7159 53.2994 9.87216L53.4485 5.77273H58.967V14.5H57.6673V6.8892H54.6886L54.5522 10.2216C54.5153 11.1562 54.4215 11.9418 54.271 12.5781C54.1204 13.2116 53.8647 13.6903 53.5039 14.0142C53.146 14.3381 52.636 14.5 51.9741 14.5H51.5991ZM68.4656 10.1364C68.4656 11.0682 68.2951 11.8693 67.9542 12.5398C67.6133 13.2074 67.146 13.7216 66.5522 14.0824C65.9613 14.4403 65.2894 14.6193 64.5366 14.6193C63.7809 14.6193 63.1062 14.4403 62.5124 14.0824C61.9215 13.7216 61.4556 13.206 61.1147 12.5355C60.7738 11.8651 60.6033 11.0653 60.6033 10.1364C60.6033 9.20455 60.7738 8.40483 61.1147 7.73722C61.4556 7.06676 61.9215 6.55256 62.5124 6.1946C63.1062 5.83381 63.7809 5.65341 64.5366 5.65341C65.2894 5.65341 65.9613 5.83381 66.5522 6.1946C67.146 6.55256 67.6133 7.06676 67.9542 7.73722C68.2951 8.40483 68.4656 9.20455 68.4656 10.1364ZM67.1616 10.1364C67.1616 9.42614 67.0465 8.82812 66.8164 8.34233C66.5891 7.85369 66.2766 7.48438 65.8789 7.23438C65.484 6.98153 65.0366 6.85511 64.5366 6.85511C64.0337 6.85511 63.5849 6.98153 63.19 7.23438C62.7951 7.48438 62.4826 7.85369 62.2525 8.34233C62.0252 8.82812 61.9116 9.42614 61.9116 10.1364C61.9116 10.8466 62.0252 11.446 62.2525 11.9347C62.4826 12.4205 62.7951 12.7898 63.19 13.0426C63.5849 13.2926 64.0337 13.4176 64.5366 13.4176C65.0366 13.4176 65.484 13.2926 65.8789 13.0426C66.2766 12.7898 66.5891 12.4205 66.8164 11.9347C67.0465 11.446 67.1616 10.8466 67.1616 10.1364ZM70.1072 14.5V5.77273H73.3033C73.9226 5.77273 74.4354 5.875 74.8416 6.07955C75.2479 6.28125 75.5518 6.5554 75.7536 6.90199C75.9553 7.24574 76.0561 7.63352 76.0561 8.06534C76.0561 8.42898 75.9893 8.7358 75.8558 8.9858C75.7223 9.23295 75.5433 9.43182 75.3189 9.58239C75.0973 9.73011 74.853 9.83807 74.5859 9.90625V9.99148C74.8757 10.0057 75.1584 10.0994 75.4339 10.2727C75.7124 10.4432 75.9425 10.6861 76.1243 11.0014C76.3061 11.3168 76.397 11.7003 76.397 12.152C76.397 12.598 76.2919 12.9986 76.0817 13.3537C75.8743 13.706 75.5533 13.9858 75.1186 14.1932C74.6839 14.3977 74.1286 14.5 73.4524 14.5H70.1072ZM71.424 13.3707H73.3246C73.9553 13.3707 74.407 13.2486 74.6797 13.0043C74.9524 12.7599 75.0888 12.4545 75.0888 12.0881C75.0888 11.8125 75.0192 11.5597 74.88 11.3295C74.7408 11.0994 74.5419 10.9162 74.2834 10.7798C74.0277 10.6435 73.7237 10.5753 73.3714 10.5753H71.424V13.3707ZM71.424 9.5483H73.1882C73.4837 9.5483 73.7493 9.49148 73.9851 9.37784C74.2237 9.2642 74.4126 9.10511 74.5518 8.90057C74.6939 8.69318 74.7649 8.44886 74.7649 8.16761C74.7649 7.80682 74.6385 7.50426 74.3857 7.25994C74.1328 7.01562 73.745 6.89347 73.2223 6.89347H71.424V9.5483Z\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 2820
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

function importAll(r) {
  const keys = r.keys();
  const firstFile = "./window/window.js";
  const filteredKeys = keys.filter((key) => key !== firstFile).sort();
  if (keys.includes(firstFile)) {
    r(firstFile);
  }
  filteredKeys.forEach(r);
}
importAll(__webpack_require__(147));


/***/ },

/***/ 3037
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLoading: () => (/* binding */ addLoading),
/* harmony export */   removeLoading: () => (/* binding */ removeLoading)
/* harmony export */ });

const addLoading = (container) => {
  const template = '<div class="loading"><div class="loading__spin"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="15" cy="15" r="15" fill="#EEEFF0"/><path d="M22.8949 13.9986C22.6536 12.262 21.848 10.6529 20.6022 9.41917C19.3563 8.18546 17.7394 7.39558 16.0005 7.1712C14.2616 6.94683 12.4972 7.30041 10.979 8.17748C9.46084 9.05455 8.27315 10.4064 7.59889 12.0249M7.10547 8.07757V12.0249H11.0528" stroke="#7F8899" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.10547 15.9727C7.34681 17.7093 8.15244 19.3184 9.39826 20.5521C10.6441 21.7858 12.261 22.5757 13.9999 22.8001C15.7388 23.0244 17.5032 22.6709 19.0214 21.7938C20.5396 20.9167 21.7273 19.5648 22.4015 17.9463M22.8949 21.8937V17.9463H18.9476" stroke="#7F8899" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>';
  const div = document.createElement("div");
  div.innerHTML = template;
  const block = document.querySelector(container);
  if (block) {
    block.appendChild(div.firstChild);
    const button = block.querySelector('button[type="submit"]');
    if (button) {
      button.focus();
      button.blur();
    }
  }
};
const removeLoading = () => {
  document.querySelectorAll(".loading").forEach((el) => {
    el.remove();
  });
};



/***/ },

/***/ 3081
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 3228
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-profile",
  "use": "icon-profile-usage",
  "viewBox": "0 0 30 30",
  "content": "<symbol viewBox=\"0 0 30 30\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-profile\">\n<path d=\"M20.8327 10.1668C20.8327 13.3885 18.221 16.0002 14.9993 16.0002C11.7777 16.0002 9.16602 13.3885 9.16602 10.1668C9.16602 6.94517 11.7777 4.3335 14.9993 4.3335C18.221 4.3335 20.8327 6.94517 20.8327 10.1668Z\" stroke-width=\"1.5\" />\n<path d=\"M4.5 25.6667C5.61683 22.0777 8.48998 21 15 21C21.51 21 24.3831 22.0777 25.5 25.6667\" stroke-width=\"1.5\" stroke-linecap=\"round\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 3283
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 3467
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5880);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6575);



gsap__WEBPACK_IMPORTED_MODULE_0__/* .gsap */ .os.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__/* .ScrollTrigger */ .u);
const markers = document.querySelectorAll(".main-why__item");
markers.forEach((marker) => {
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__/* .ScrollTrigger */ .u.create({
    trigger: marker,
    start: "top 80%",
    end: "bottom top",
    duration: 2,
    onEnter: () => {
      marker.classList.add("main-why__item--show");
    }
  });
});


/***/ },

/***/ 3519
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 3670
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $W: () => (/* binding */ createFormData),
/* harmony export */   Gv: () => (/* binding */ isObject),
/* harmony export */   Kh: () => (/* binding */ phoneRegExp),
/* harmony export */   Qs: () => (/* binding */ activateRequestButtons),
/* harmony export */   XJ: () => (/* binding */ getScrollbarWidth),
/* harmony export */   iW: () => (/* binding */ getPaddingFromBody),
/* harmony export */   rP: () => (/* binding */ getPaddingOnBody)
/* harmony export */ });
/* unused harmony exports shuffle, numberSplitter */
/* harmony import */ var _components_popUp_popUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9417);
/* harmony import */ var _components_validator_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4489);




const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){11,14}(\s*)?$/;
const body = document.querySelector("body");
const header = document.querySelector(".header__fixed");
const promoFixed = document.querySelector(".promo__fixed");
const getScrollbarWidth = () => window.innerWidth - document.documentElement.clientWidth;
let checker = false;
const getPaddingOnBody = () => {
  document.addEventListener("resize", () => {
    getScrollbarWidth();
  });
  if (!checker) {
    body.style.paddingRight = `${getScrollbarWidth()}px`;
    if (header) {
      header.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    if (promoFixed) {
      promoFixed.style.paddingRight = `${getScrollbarWidth()}px`;
    }
    body.classList.add("static");
    checker = true;
  }
};
const getPaddingFromBody = () => {
  if (checker) {
    body.style.paddingRight = "";
    body.style.paddingRight = `${getScrollbarWidth()}px`;
    if (header) {
      header.style.paddingRight = "";
    }
    if (promoFixed) {
      promoFixed.style.paddingRight = "";
    }
    body.classList.remove("static");
    checker = false;
  }
};
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
const numberSplitter = (num) => {
  const n = num.toString();
  return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1 ");
};
function OnInput() {
  this.style.height = "auto";
  this.style.height = `${this.scrollHeight}px`;
}
const setTextareaAutoHeight = (area) => {
  const textareas = document.querySelectorAll(`${area}`);
  textareas.forEach((element) => {
    element.setAttribute("style", `height:${element.scrollHeight}px; overflow-y: hidden;`);
    element.addEventListener("input", OnInput);
  });
};
const isObject = (object) => {
  const type = typeof object;
  return type === "function" || type === "object";
};
const createFormData = (values) => {
  const data = new FormData();
  for (const key in values) {
    if (isObject(values[key])) {
      values[key].forEach((file, index) => {
        data.append(`${key}-${index}`, file);
      });
    } else {
      data.append(key, values[key]);
    }
  }
  return data;
};
const debounce = (cb, delay = 500) => {
  let timeoutId;
  return function(...args) {
    const context = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      cb.apply(context, args);
    }, delay);
  };
};
const activateRequestButtons = ({
  submitForm
} = {}) => {
  const buttons = document.querySelectorAll(".button-request:not(.button-request--js)");
  buttons.forEach((button) => {
    button.classList.add("button-request--js");
    button.addEventListener("click", (evt) => {
      evt.preventDefault();
      const { type } = button.dataset;
      const info = button.dataset;
      if (!type) {
        console.warn("\u0423 \u043A\u043D\u043E\u043F\u043A\u0438 \u043D\u0435 \u0443\u043A\u0430\u0437\u0430\u043D data-type, \u043C\u043E\u0434\u0430\u043B\u043A\u0430 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u0432\u044B\u0437\u0432\u0430\u043D\u0430");
        return;
      }
      const modalSelector = `#modal--${type}`;
      const modalClass = `.modal--${type}`;
      (0,_components_popUp_popUp__WEBPACK_IMPORTED_MODULE_0__.summonPopUp)({
        template: modalSelector,
        blockScroll: true,
        overlay: {
          use: true,
          closeOnClick: true
        },
        esc: {
          closeOnEsc: true
        }
      });
      const modal = document.querySelector(modalClass);
      if (!modal) {
        console.log(`\u041C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0435 \u043E\u043A\u043D\u043E ${modalSelector} \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E`);
        return;
      }
      const form = modal.querySelector("form");
      if (form) {
        for (const key in info) {
          form.insertAdjacentHTML("beforeend", `<input type="hidden" name="${key}" value="${info[key]}">`);
        }
        const validatedForm = (0,_components_validator_validator__WEBPACK_IMPORTED_MODULE_1__.validateForm)(`${modalClass} form`);
        (0,_components_validator_validator__WEBPACK_IMPORTED_MODULE_1__.maskPhone)(`${modalClass} form`);
        setTextareaAutoHeight(`${modalClass} textarea`);
        const fetch = async () => {
          const answer = await submitForm(form);
          if (answer) {
            if (answer.status === "success") {
              validatedForm.destroy();
              (0,_components_popUp_popUp__WEBPACK_IMPORTED_MODULE_0__.removePopUp)(modalClass, true);
            }
          }
        };
        form.addEventListener("bouncerFormValid", debounce(() => {
          if (submitForm) {
            fetch();
          }
        }));
      }
    });
  });
};



/***/ },

/***/ 3749
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-social__youtube",
  "use": "icon-social__youtube-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" stroke=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-social__youtube\">\r\n<path d=\"M38.7746 12.1676C38.7746 12.1676 38.3927 9.46693 37.2149 8.28186C35.7238 6.72215 34.0539 6.71236 33.29 6.62176C27.8126 6.22266 19.5856 6.22266 19.5856 6.22266H19.571C19.571 6.22266 11.3464 6.22266 5.86663 6.62176C5.10025 6.71481 3.43281 6.72215 1.94167 8.28186C0.763936 9.46693 0.389313 12.1676 0.389313 12.1676C0.389313 12.1676 0 15.336 0 18.5117V21.4818C0 24.6502 0.389313 27.8259 0.389313 27.8259C0.389313 27.8259 0.771281 30.5266 1.94167 31.7141C3.43281 33.2738 5.39162 33.2224 6.26574 33.3889C9.40229 33.6876 19.5881 33.7782 19.5881 33.7782C19.5881 33.7782 27.8224 33.7635 33.2998 33.3718C34.0661 33.2812 35.7336 33.2714 37.2247 31.7117C38.4025 30.5266 38.7844 27.8234 38.7844 27.8234C38.7844 27.8234 39.1737 24.6551 39.1737 21.4793V18.5093C39.1664 15.3409 38.7771 12.1652 38.7771 12.1652L38.7746 12.1676ZM15.5285 25.0835V14.0726L26.1109 19.5964L15.5285 25.0835Z\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 3937
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 3945
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 3949
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 4009
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeAlert: () => (/* binding */ removeAlert),
/* harmony export */   summonAlert: () => (/* binding */ summonAlert)
/* harmony export */ });

const body = document.querySelector(".alert-wrapper");
const removeAlert = ({
  template
}) => {
  const templateContent = document.querySelector(`${template}`);
  templateContent.remove();
};
const summonAlert = (input) => {
  let template;
  let text;
  if (typeof input === "string") {
    template = input;
  } else if (typeof input === "object" && input !== null) {
    template = input.template;
    text = input.text;
  } else {
    console.log("\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0442\u0438\u043F \u0434\u0430\u043D\u043D\u044B\u0445 \u0434\u043B\u044F summonAlert. \u041E\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044F \u0441\u0442\u0440\u043E\u043A\u0430 (template) \u0438\u043B\u0438 \u043E\u0431\u044A\u0435\u043A\u0442 { template, text }.");
    return;
  }
  if (typeof template !== "string" || !template.startsWith("#")) {
    console.log('\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0448\u0430\u0431\u043B\u043E\u043D. \u041E\u0436\u0438\u0434\u0430\u0435\u0442\u0441\u044F \u0441\u0442\u0440\u043E\u043A\u0430, \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0430\u044F\u0441\u044F \u0441 "#", \u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 "#alert--request".');
    return;
  }
  const alertName = template.slice(1);
  const alertTemplate = document.querySelector(`#${alertName}`);
  if (!alertTemplate) {
    console.log(`#${alertName} \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u043E\u0433\u043E \u043E\u043A\u043D\u0430 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442.`);
    return;
  }
  const oldAlert = document.querySelector(`.${alertName}`);
  if (oldAlert) {
  }
  const templateContent = alertTemplate.content.cloneNode(true);
  const alert = templateContent.querySelector(`.${alertName}`);
  if (!alert) {
    console.log(`\u0412 \u0448\u0430\u0431\u043B\u043E\u043D\u0435 #${alertName} \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043A\u043E\u0440\u043D\u0435\u0432\u043E\u0439 \u044D\u043B\u0435\u043C\u0435\u043D\u0442 .${alertName}`);
    return;
  }
  const close = alert.querySelector(".alert__close");
  const textContainer = alert.querySelector(".alert__container");
  if (text && textContainer) {
    textContainer.innerHTML = text;
  }
  const closeAlert = () => {
    alert.remove();
  };
  if (close) {
    close.addEventListener("click", closeAlert);
  }
  body.append(templateContent);
  alert.classList.add("alert--bounce");
};



/***/ },

/***/ 4063
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-social__twitter",
  "use": "icon-social__twitter-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" stroke=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-social__twitter\">\n<path d=\"M36.3576 9.38532C35.1513 9.91985 33.8554 10.281 32.4931 10.4443C33.8987 9.60317 34.9504 8.27937 35.4518 6.71989C34.1311 7.50433 32.6857 8.0565 31.1784 8.35238C30.1648 7.27012 28.8222 6.55278 27.3591 6.31173C25.8961 6.07068 24.3943 6.31941 23.0871 7.0193C21.7799 7.71919 20.7403 8.83109 20.1297 10.1824C19.5192 11.5336 19.3718 13.0487 19.7105 14.4923C17.0345 14.3579 14.4167 13.6624 12.0269 12.4508C9.63711 11.2392 7.52877 9.53869 5.83873 7.45956C5.26085 8.45639 4.92858 9.61214 4.92858 10.843C4.92793 11.9511 5.2008 13.0422 5.72298 14.0195C6.24515 14.9968 7.00048 15.8301 7.92195 16.4455C6.85329 16.4115 5.8082 16.1227 4.87368 15.6032V15.6899C4.87357 17.244 5.41115 18.7503 6.39519 19.9532C7.37924 21.156 8.74914 21.9814 10.2724 22.2892C9.28109 22.5575 8.24172 22.597 7.23284 22.4048C7.66263 23.742 8.49982 24.9113 9.62721 25.7491C10.7546 26.5869 12.1157 27.0511 13.5201 27.0769C11.1361 28.9483 8.19195 29.9635 5.16117 29.959C4.6243 29.9592 4.08788 29.9278 3.55469 29.8651C6.6311 31.8431 10.2123 32.8929 13.8697 32.8888C26.2506 32.8888 33.0189 22.6345 33.0189 13.741C33.0189 13.4521 33.0117 13.1603 32.9987 12.8713C34.3152 11.9193 35.4516 10.7403 36.3547 9.38966L36.3576 9.38532Z\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 4073
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const breadcrumbs = document.querySelector(".breadcrumbs");
if (breadcrumbs) {
  breadcrumbs.querySelector(".breadcrumbs__list").scrollTo(3e3, 0);
}


/***/ },

/***/ 4078
(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./icon-5corners.svg": 2640,
	"./icon-add-file.svg": 2181,
	"./icon-copy.svg": 1366,
	"./icon-profile.svg": 3228,
	"./icon-social__link.svg": 1926,
	"./icon-social__telegram.svg": 6879,
	"./icon-social__twitter.svg": 4063,
	"./icon-social__vk.svg": 6703,
	"./icon-social__whatsapp.svg": 9520,
	"./icon-social__youtube.svg": 3749,
	"./icon-up.svg": 7730,
	"./pagination-arrow-left.svg": 4775,
	"./pagination-arrow-right.svg": 2546,
	"assets/icons/icon-5corners.svg": 2640,
	"assets/icons/icon-add-file.svg": 2181,
	"assets/icons/icon-copy.svg": 1366,
	"assets/icons/icon-profile.svg": 3228,
	"assets/icons/icon-social__link.svg": 1926,
	"assets/icons/icon-social__telegram.svg": 6879,
	"assets/icons/icon-social__twitter.svg": 4063,
	"assets/icons/icon-social__vk.svg": 6703,
	"assets/icons/icon-social__whatsapp.svg": 9520,
	"assets/icons/icon-social__youtube.svg": 3749,
	"assets/icons/icon-up.svg": 7730,
	"assets/icons/pagination-arrow-left.svg": 4775,
	"assets/icons/pagination-arrow-right.svg": 2546
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 4078;

/***/ },

/***/ 4205
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8019);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_0__);


const initFieldSelect = (func) => {
  const selects = document.querySelectorAll(".field__input--select");
  if (selects.length > 0) {
    selects.forEach((select) => {
      const field = select.closest(".field");
      const description = field.querySelector(".validator__description");
      const choicesNolint = new (choices_js__WEBPACK_IMPORTED_MODULE_0___default())(select, {
        searchEnabled: "search" in select.dataset,
        shouldSort: false,
        classNames: {
          containerOuter: "choices field__choices",
          input: "field__input"
        },
        noResultsText: "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",
        noChoicesText: "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u043E",
        itemSelectText: ""
      });
      const customSelect = field.querySelector(".choices__inner");
      select.addEventListener("hideDropdown", () => {
        document.querySelector(".field__choices").querySelectorAll(".is-highlighted").forEach((el) => {
          el.classList.remove("is-highlighted");
        });
      });
      select.addEventListener("addItem", (event) => {
        if (customSelect.classList.contains("validator__input--error")) {
          customSelect.classList.remove("validator__input--error");
          description.classList.remove("validator__description--error");
          description.classList.add("validator__description--valid");
        }
        if (func) {
          func(event);
        }
      });
      select.choicesInstance = choicesNolint;
    });
  }
};
initFieldSelect();


/***/ },

/***/ 4227
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 4277
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 4329
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 4473
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 4489
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initPasswordEye: () => (/* binding */ initPasswordEye),
/* harmony export */   maskInternationalPhone: () => (/* binding */ maskInternationalPhone),
/* harmony export */   maskPhone: () => (/* binding */ maskPhone),
/* harmony export */   validateForm: () => (/* binding */ validateForm)
/* harmony export */ });
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1660);
/* harmony import */ var inputmask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(inputmask__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formbouncerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4891);
/* harmony import */ var formbouncerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(formbouncerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8019);
/* harmony import */ var choices_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(choices_js__WEBPACK_IMPORTED_MODULE_2__);





const validationMessages = {
  missingValue: {
    default: "\u041F\u043E\u043B\u0435 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F!",
    file: "\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u0438\u043D \u0444\u0430\u0439\u043B!",
    tel: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430!"
  },
  patternMismatch: {
    default: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u043F\u043E\u043B\u044F \u043D\u0435 \u0443\u0434\u043E\u0432\u043B\u0435\u0442\u0432\u043E\u0440\u044F\u0435\u0442 \u0442\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F\u043C!",
    email: "\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 email."
  },
  wrongLength: {
    over: "\u041F\u0440\u0435\u0432\u044B\u0448\u0435\u043D\u0430 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430.",
    under: "\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430."
  },
  outOfRange: {
    over: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435.",
    under: "\u0417\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435."
  },
  text: "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435.",
  textarea: "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435.",
  number: "\u0414\u043E\u043F\u0443\u0441\u043A\u0430\u044E\u0442\u0441\u044F \u0442\u043E\u043B\u044C\u043A\u043E \u0446\u0438\u0444\u0440\u044B.",
  ruPhone: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430.",
  intPhone: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 \u043F\u043E\u043B\u043D\u043E\u0441\u0442\u044C\u044E.",
  password: "\u041C\u0438\u043D\u0438\u043C\u0443\u043C 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432.",
  passwordMatch: "\u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442.",
  required: "\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043F\u043E\u043B\u0435.",
  fallback: "\u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0437\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u044C \u043F\u043E\u043B\u0435."
};
const getDescription = (field) => {
  if (!field || !field.parentElement) return null;
  return field.parentElement.querySelector(".validator__description");
};
const setState = (field, isValid) => {
  const description = getDescription(field);
  field.classList.toggle("validator__input--valid", isValid);
  field.classList.toggle("validator__input--error", !isValid);
  field.setAttribute("aria-invalid", String(!isValid));
  if (!description) return;
  description.classList.toggle("validator__description--valid", isValid);
  description.classList.toggle("validator__description--error", !isValid);
};
const validateByRegexp = (field, regexp, min = 0, max = 225) => {
  const value = field.value;
  const isValid = regexp.test(value) && value.length >= min && value.length <= max;
  setState(field, isValid);
  return !isValid;
};
const validateForm = (form) => {
  const formEl = document.querySelector(form);
  let validator = new (formbouncerjs__WEBPACK_IMPORTED_MODULE_1___default())(form, {
    fieldClass: "validator__input--error",
    errorClass: "validator__error",
    disableSubmit: true,
    emitEvents: true,
    customValidations: {
      // Проверка обязательного поля.
      required(field) {
        if (!field.classList.contains("validator__required")) return false;
        const isValid = Boolean(field.value);
        setState(field, isValid);
        return !isValid;
      },
      // Валидация текстового поля (ФИО, название и т.п.).
      text(field) {
        if (!field.classList.contains("validator__text")) return false;
        return validateByRegexp(
          field,
          /^([a-zA-ZА-Яа-яЁё.-]+\s?)*$/,
          2,
          225
        );
      },
      // Валидация textarea с расширенным набором символов.
      textarea(field) {
        if (!field.classList.contains("validator__textarea")) return false;
        return validateByRegexp(
          field,
          /^([a-zA-ZА-Яа-яЁё0-9\-!$%^&*()_+|~=`{}\[\]:;'",.@#№«»“”‘’…\/\\\s]*)$/,
          4,
          225
        );
      },
      // Проверка числового значения (без проверки диапазона).
      number(field) {
        if (!field.classList.contains("validator__number")) return false;
        const isValid = field.value.length >= 1 && field.value.length <= 225;
        setState(field, isValid);
        return !isValid;
      },
      // Проверка длины значения по minlength / maxlength.
      minmax(field) {
        if (!field.classList.contains("validator__minmax")) return false;
        const min = Number(field.getAttribute("minlength")) || 0;
        const max = Number(field.getAttribute("maxlength")) || 225;
        const isValid = field.value.length >= min && field.value.length <= max;
        setState(field, isValid);
        return !isValid;
      },
      // Валидация email.
      email(field) {
        if (!field.classList.contains("validator__mail")) return false;
        return validateByRegexp(
          field,
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        );
      },
      // Валидация российского телефона (10–11 цифр).
      ruPhone(field) {
        if (!field.classList.contains("validator__phone")) return false;
        const raw = field.inputmask ? field.inputmask.unmaskedvalue() : field.value.replace(/\D/g, "");
        const isValid = raw.length === 10 || raw.length === 11;
        setState(field, isValid);
        return !isValid;
      },
      // Валидация международного телефона по длине маски.
      intPhone(field) {
        var _a;
        if (!field.classList.contains("validator__country-phone")) return false;
        const maskLength = ((_a = field.getAttribute("data-mask")) == null ? void 0 : _a.length) || 0;
        const isValid = field.value.length === maskLength;
        setState(field, isValid);
        return !isValid;
      },
      // Базовая проверка пароля по длине.
      password(field) {
        if (!field.classList.contains("validator__password")) return false;
        const isValid = field.value.length >= 6 && field.value.length <= 225;
        setState(field, isValid);
        return !isValid;
      },
      // Проверка совпадения паролей.
      passwordMatch(field) {
        const selector = field.getAttribute("data-bouncer-match");
        if (!selector) return false;
        const other = field.form.querySelector(selector);
        if (!other) return false;
        const isValid = field.value === other.value;
        setState(field, isValid);
        return !isValid;
      },
      // Проверка стандартного select.
      select(field) {
        if (!field.classList.contains("validator__select")) return false;
        const isValid = field.options[field.selectedIndex].value !== "";
        field.parentElement.classList.toggle("validator__input--error", !isValid);
        return !isValid;
      },
      // Проверка кастомного select (Choices.js).
      choices(field) {
        var _a;
        if (!field.classList.contains("validator__choices")) return false;
        const isValid = field.hasAttribute("multiple") ? field.selectedIndex !== -1 : field.value !== "";
        const container = field.parentElement;
        const description = (_a = container.closest(".validator__field")) == null ? void 0 : _a.querySelector(".validator__description");
        container.classList.toggle("validator__input--error", !isValid);
        description == null ? void 0 : description.classList.toggle("validator__description--error", !isValid);
        description == null ? void 0 : description.classList.toggle("validator__description--valid", isValid);
        return !isValid;
      }
    },
    // Кастомные сообщения ошибок.
    messages: validationMessages
  });
  formEl.addEventListener("reset", () => {
    validator.destroy();
    validator = validateForm(form);
    formEl.querySelectorAll(
      ".validator__input--valid, .validator__input--error, .validator__description--valid, .validator__description--error"
    ).forEach(
      (el) => el.classList.remove(
        "validator__input--valid",
        "validator__input--error",
        "validator__description--valid",
        "validator__description--error"
      )
    );
  });
  return validator;
};
const maskPhone = (form) => {
  const mask = new (inputmask__WEBPACK_IMPORTED_MODULE_0___default())("+7 [(999) 999-99-99]", {
    autoUnmask: true,
    showMaskOnHover: false,
    showMaskOnFocus: false,
    placeholder: ""
  });
  document.querySelector(form).querySelectorAll(".validator__phone").forEach((field) => mask.mask(field));
};
const maskInternationalPhone = (form) => {
  const hashContainer = document.querySelector(`${form}`);
  const countryPhone = hashContainer.querySelector(".validator__country-phone");
  const firstPhoneMask = hashContainer.querySelector(".validator__country-mask").getAttribute("data-mask");
  countryPhone.setAttribute("data-mask", firstPhoneMask.replace(/[^9]/g, ""));
  let phoneMask = new (inputmask__WEBPACK_IMPORTED_MODULE_0___default())(firstPhoneMask, {
    autoUnmask: true
  });
  phoneMask.mask(countryPhone);
  const options = [];
  const optionsData = hashContainer.querySelectorAll(".validator__country-mask");
  optionsData.forEach((option, index) => {
    options.push({
      value: option.getAttribute("data-value"),
      label: option.getAttribute("data-country"),
      id: index + 1,
      customProperties: {
        mask: option.getAttribute("data-mask"),
        flag: option.getAttribute("data-flag")
      }
    });
  });
  const choicesSelect = hashContainer.querySelector(".validator__country-select");
  const choicesNolint = new (choices_js__WEBPACK_IMPORTED_MODULE_2___default())(choicesSelect, {
    searchEnabled: false,
    itemSelectText: "",
    shouldSort: false,
    choices: options,
    // searchEnabled: true,
    classNames: {
      containerOuter: "choices validator__countries"
    },
    callbackOnCreateTemplates(template) {
      return {
        item(classNames, data) {
          return template(`
            <div class="${classNames.item} ${data.highlighted ? classNames.highlightedState : classNames.itemSelectable} 
            ${data.placeholder ? classNames.placeholder : ""}" 
            data-item data-id="${data.id}" data-value="${data.value}" ${data.active ? 'aria-selected="true"' : ""} 
            ${data.disabled ? 'aria-disabled="true"' : ""}> 
            <p class='choices__flag' style='background-image: url(${options[data.choiceId - 1].customProperties.flag})'></p>
            ${data.label}
            </div>
          `);
        },
        choice(classNames, data) {
          return template(`
            <div class="${classNames.item} ${classNames.itemChoice} 
            ${data.disabled ? classNames.itemDisabled : classNames.itemSelectable}"
            data-select-text="${this.config.itemSelectText}" data-choice 
            ${data.disabled ? 'data-choice-disabled aria-disabled="true"' : "data-choice-selectable"} 
            data-id="${data.id}" data-value="${data.value}" 
            ${data.groupId > 0 ? 'role="treeitem"' : 'role="option"'}>
            <p class='choices__flag' style='background-image: url(${options[data.id - 1].customProperties.flag})'></p>
            ${data.label}
            </div>
          `);
        }
      };
    }
  });
  choicesSelect.addEventListener("choice", (evt) => {
    countryPhone.setAttribute("data-mask", evt.detail.choice.customProperties.mask.replace(/[^9]/g, ""));
    countryPhone.inputmask.remove();
    countryPhone.value = "";
    countryPhone.focus();
    countryPhone.blur();
    phoneMask = new (inputmask__WEBPACK_IMPORTED_MODULE_0___default())(evt.detail.choice.customProperties.mask, {
      autoUnmask: true
    });
    phoneMask.mask(countryPhone);
  });
};
const initPasswordEye = (formSelector) => {
  const form = document.querySelector(formSelector);
  if (!form) return;
  const eyes = form.querySelectorAll(".validator__eye");
  eyes.forEach((eye) => {
    const container = eye.parentElement;
    if (!container) return;
    const input = container.querySelector(".validator__password");
    if (!input) return;
    eye.addEventListener("click", () => {
      const isPassword = input.type === "password";
      input.type = isPassword ? "text" : "password";
      eye.classList.toggle("validator__eye--open", isPassword);
    });
  });
};



/***/ },

/***/ 4541
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4848);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7425);



const Input = ({
  type,
  name,
  className,
  label,
  isRequired,
  isDisabled,
  placeholder
}) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: `Input${className ? ` ${className}` : ""}`, children: [
  label ? /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { className: isRequired ? "Input__label Input__label--required" : "Input__label", children: label }) : null,
  /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(
    formik__WEBPACK_IMPORTED_MODULE_1__/* .Field */ .D0,
    {
      autoComplete: "off",
      autoCapitalize: "off",
      disabled: isDisabled,
      className: "Input__field",
      type,
      name,
      placeholder
    }
  )
] });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);


/***/ },

/***/ 4605
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 4741
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4009);


const copy = document.querySelector(".socials__link--copy");
if (copy) {
  copy.addEventListener("click", (evt) => {
    evt.preventDefault();
    const link = window.location.href;
    const textarea = document.createElement("textarea");
    textarea.value = link;
    copy.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    (0,_alert_alert__WEBPACK_IMPORTED_MODULE_0__.summonAlert)("#alert--copy");
  });
}


/***/ },

/***/ 4745
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 4775
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "pagination-arrow-left",
  "use": "pagination-arrow-left-usage",
  "viewBox": "0 0 38 38",
  "content": "<symbol viewBox=\"0 0 38 38\" xmlns=\"http://www.w3.org/2000/svg\" id=\"pagination-arrow-left\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M20.4393 25.5816C21.0251 26.1395 21.9749 26.1395 22.5607 25.5816C23.1464 25.0237 23.1464 24.1192 22.5607 23.5613L14.6213 16L22.5607 8.43873C23.1464 7.88083 23.1464 6.97631 22.5607 6.41842C21.9749 5.86053 21.0251 5.86053 20.4393 6.41842L11.4393 14.9899C10.8536 15.5478 10.8536 16.4523 11.4393 17.0102L20.4393 25.5816Z\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 4999
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 5057
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const up = document.querySelector(".up");
const scrollableHeight = 300;
if (up) {
  let scrollPosition = 0;
  up.addEventListener("click", () => {
    window.scroll(0, 0);
  });
  window.addEventListener("scroll", () => {
    if (window.pageYOffset <= scrollPosition && window.pageYOffset >= scrollableHeight) {
      up.classList.add("up--visible");
      scrollPosition = window.pageYOffset;
    } else {
      up.classList.remove("up--visible");
      scrollPosition = window.pageYOffset;
    }
  });
}


/***/ },

/***/ 5073
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1236);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1708);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));



const sliderInit = (container) => {
  if (!container) return;
  const slider = container;
  const swiper = slider.querySelector(".swiper");
  if (!swiper) return;
  if (swiper.swiperInstance) return;
  const buttonPrev = slider.querySelector(".slider__button--prev");
  const buttonNext = slider.querySelector(".slider__button--next");
  const scrollbar = slider.querySelector(".slider__scrollbar");
  const type = slider.dataset.slider;
  const autoplayAttr = slider.dataset.autoplay;
  const isCarousel = type === "carousel";
  const modeConfig = isCarousel ? {
    slidesPerView: "auto",
    spaceBetween: 0
  } : {
    slidesPerView: 1,
    effect: "fade",
    fadeEffect: {
      crossFade: true
    }
  };
  const autoplayConfig = autoplayAttr ? {
    autoplay: {
      delay: 5e3,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    }
  } : {};
  const swiperNolint = new swiper__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(swiper, __spreadProps(__spreadValues(__spreadValues({
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Navigation */ .Vx, swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Scrollbar */ .Ze, swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .EffectFade */ ._R, swiper_modules__WEBPACK_IMPORTED_MODULE_1__/* .Autoplay */ .Ij],
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: false
  }, modeConfig), autoplayConfig), {
    // touchEventsTarget: 'container',
    scrollbar: {
      el: scrollbar,
      dragClass: "slider__scrollbar-drag",
      draggable: true
    },
    navigation: {
      prevEl: buttonPrev,
      nextEl: buttonNext,
      disabledClass: "slider__button--disabled"
    },
    breakpoints: {}
  }));
  swiper.swiperInstance = swiperNolint;
};
const sliders = document.querySelectorAll(".slider");
sliders.forEach((el) => {
  sliderInit(el);
});


/***/ },

/***/ 5097
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const accordions = document.querySelectorAll(".accordion");
if (accordions) {
  accordions.forEach((accordion) => {
    const header = document.querySelector("header");
    const accordionPosition = accordion.getBoundingClientRect();
    const accordionPositionY = accordionPosition.y;
    const button = accordion.querySelector(".accordion__header");
    const inner = accordion.querySelector(".accordion__inner");
    const getHeaderHeight = () => {
      if (header) {
        return header.offsetHeight;
      }
      return "0";
    };
    button.addEventListener("click", () => {
      if (accordion.classList.contains("accordion--active")) {
        accordion.classList.remove("accordion--active");
        inner.style.maxHeight = "";
      } else {
        document.querySelectorAll(".accordion--active").forEach((item) => {
          const activeAccordion = item;
          activeAccordion.classList.remove("accordion--active");
          item.querySelector(".accordion__inner").style.maxHeight = "";
        });
        accordion.classList.add("accordion--active");
        inner.style.maxHeight = `${inner.scrollHeight}px`;
      }
    });
  });
}
window.addEventListener("load", () => {
  const activeAccordions = document.querySelectorAll(".accordion--active");
  if (activeAccordions) {
    activeAccordions.forEach((accordion) => {
      const inner = accordion.querySelector(".accordion__inner");
      inner.style.maxHeight = `${inner.scrollHeight}px`;
    });
  }
});


/***/ },

/***/ 5155
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 5177
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 5244
(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./RequestModalProvider/RequestModalProvider.js": 996,
	"react/providers/common/RequestModalProvider/RequestModalProvider.js": 996
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 5244;

/***/ },

/***/ 5313
(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./vacancy/RequestVacancieProvider/RequestVacancieProvider.js": 7878,
	"react/providers/pages/vacancy/RequestVacancieProvider/RequestVacancieProvider.js": 7878
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 5313;

/***/ },

/***/ 5377
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var viewerjs_dist_viewer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3891);
/* harmony import */ var viewerjs_dist_viewer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(viewerjs_dist_viewer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3670);



const gallery = document.querySelector(".gallery");
if (gallery) {
  const viewer = new (viewerjs_dist_viewer__WEBPACK_IMPORTED_MODULE_0___default())(gallery, {
    url: "data-original",
    className: "viewerjs__zoom",
    toolbar: {
      zoomIn: {
        show: true,
        size: "large"
      },
      zoomOut: {
        show: true,
        size: "large"
      },
      oneToOne: false,
      reset: false,
      prev: {
        show: true,
        size: "large"
      },
      play: false,
      next: {
        show: true,
        size: "large"
      },
      rotateLeft: {
        show: true,
        size: "large"
      },
      rotateRight: {
        show: true,
        size: "large"
      },
      flipHorizontal: false,
      flipVertical: false
    },
    navbar: false,
    // movable: false,
    keyboard: false,
    title() {
      return `(${this.index + 1}/${this.length})`;
    },
    // slideOnTouch: false,
    transition: false,
    show() {
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__/* .getPaddingOnBody */ .rP)();
    },
    hide() {
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_1__/* .getPaddingFromBody */ .iW)();
    }
  });
}


/***/ },

/***/ 5401
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 5405
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 5479
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5880);
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6575);



gsap__WEBPACK_IMPORTED_MODULE_0__/* .gsap */ .os.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__/* .ScrollTrigger */ .u);
const markers = document.querySelectorAll(".job-benefits__item");
markers.forEach((marker) => {
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__/* .ScrollTrigger */ .u.create({
    trigger: marker,
    start: "top 80%",
    end: "bottom top",
    duration: 2,
    onEnter: () => {
      marker.classList.add("job-benefits__item--show");
    }
  });
});


/***/ },

/***/ 5569
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 5745
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validator_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4489);


const form = document.querySelector(".request__form");
if (form) {
  (0,_validator_validator__WEBPACK_IMPORTED_MODULE_0__.validateForm)(".request__form");
}


/***/ },

/***/ 5853
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 5909
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 5910
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

function importAll(r) {
  r.keys().forEach(r);
}
importAll(__webpack_require__(5244));
importAll(__webpack_require__(5313));


/***/ },

/***/ 6153
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3670);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4947);
/* harmony import */ var tippy_js_animations_scale_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6730);
/* harmony import */ var tippy_js_animations_scale_subtle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(814);
/* harmony import */ var tippy_js_animations_scale_extreme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5309);
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2820);
/* harmony import */ var _components_components_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_components_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _react_providers_providers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5910);
/* harmony import */ var _react_providers_providers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_react_providers_providers__WEBPACK_IMPORTED_MODULE_6__);
const import_meta = {};
function requireAll(r) {
  r.keys().forEach(r);
}
requireAll(__webpack_require__(4078));











let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);
window.addEventListener("resize", () => {
  vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});


if (false) // removed by dead control flow
{}
if (import_meta.webpackHot) {
  import_meta.webpackHot.accept();
}


/***/ },

/***/ 6285
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

const startTitle = document.querySelectorAll(".start__title");
window.addEventListener("load", () => {
  startTitle.forEach((title) => {
    title.classList.add("start__title--ready");
  });
});
startTitle.forEach((title) => {
  const titleArray = title.textContent.split("");
  title.textContent = "";
  titleArray.forEach((letter) => {
    if (letter === " ") {
      const span = document.createElement("span");
      span.textContent = "\xA0";
      title.append(span);
    } else {
      const span = document.createElement("span");
      span.textContent = letter;
      title.append(span);
    }
  });
});


/***/ },

/***/ 6689
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3670);


const header = document.querySelector("header");
if (header) {
  const headerDropdown = header.querySelector(".header-dropdown");
  const burger = header.querySelector(".header__burger");
  const burger2 = header.querySelector(".header-dropdown__burger");
  const overlay = header.querySelector(".header__overlay");
  const animateIn = () => {
    console.log("animateIn");
    headerDropdown.classList.remove("header-dropdown--in");
    headerDropdown.removeEventListener("animationend", animateIn);
  };
  const animateOut = () => {
    console.log("animateOut");
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingFromBody */ .iW)();
    header.classList.remove("header--dropdown");
    headerDropdown.classList.remove("header-dropdown--out");
    headerDropdown.removeEventListener("animationend", animateOut);
  };
  burger.addEventListener("click", () => {
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingOnBody */ .rP)();
    headerDropdown.addEventListener("animationend", animateIn);
    header.classList.add("header--dropdown");
    headerDropdown.classList.add("header-dropdown--in");
  });
  burger2.addEventListener("click", () => {
    headerDropdown.addEventListener("animationend", animateOut);
    headerDropdown.classList.add("header-dropdown--out");
  });
  overlay.addEventListener("click", () => {
    headerDropdown.addEventListener("animationend", animateOut);
    headerDropdown.classList.add("header-dropdown--out");
  });
  const onModalEscPress = (evt) => {
    if (evt.code === "Escape") {
      evt.preventDefault();
      headerDropdown.addEventListener("animationend", animateOut);
      headerDropdown.classList.add("header-dropdown--out");
    }
  };
  document.addEventListener("keydown", onModalEscPress);
  const hideHeaderOnMove = () => {
    let scrollPosition = 0;
    let hideChecker = 0;
    let showChecker = 0;
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= scrollPosition && window.pageYOffset >= header.offsetHeight) {
        showChecker = 0;
        hideChecker += window.pageYOffset - scrollPosition;
        scrollPosition = window.pageYOffset;
      } else {
        showChecker += scrollPosition - window.pageYOffset;
        hideChecker = 0;
        scrollPosition = window.pageYOffset;
      }
      if (showChecker >= 300) {
        header.classList.remove("header--hidden");
        hideChecker = 0;
      } else if (hideChecker >= 300) {
        header.classList.add("header--hidden");
      }
    });
  };
  hideHeaderOnMove();
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 0 && !header.classList.contains("header--fixed")) {
      header.classList.add("header--fixed");
    } else if (window.pageYOffset === 0) {
      header.classList.remove("header--fixed");
    }
  });
}


/***/ },

/***/ 6703
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-social__vk",
  "use": "icon-social__vk-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" stroke=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-social__vk\">\r\n<path d=\"M35.5564 32.0987V7.90113C35.5564 5.99989 33.9957 4.44434 32.091 4.44434H7.91074C5.92309 4.44434 4.44531 5.91866 4.44531 7.90113V32.0987C4.44531 34.0829 5.92309 35.5554 7.91074 35.5554H32.091C33.0082 35.5541 33.8875 35.1897 34.5369 34.542C35.1862 33.8943 35.5528 33.0158 35.5564 32.0987ZM28.9609 22.7774C28.9609 22.7774 30.9174 24.708 31.3996 25.6033C31.4135 25.6224 31.4186 25.6396 31.4238 25.6466C31.6191 25.975 31.6693 26.2342 31.5707 26.4243C31.4083 26.7406 30.8552 26.8996 30.6668 26.9135H27.2117C26.9698 26.9135 26.4685 26.8512 25.8601 26.4312C25.3935 26.1063 24.932 25.5688 24.4826 25.0451C23.812 24.2673 23.2312 23.5932 22.647 23.5932C22.5729 23.593 22.4993 23.6053 22.4293 23.6295C21.9851 23.7712 21.4216 24.4021 21.4216 26.0873C21.4216 26.6145 21.0068 26.9152 20.713 26.9152H19.1298C18.5905 26.9152 15.7819 26.7268 13.2947 24.1014C10.2423 20.8866 7.50111 14.4379 7.47692 14.3809C7.30408 13.9643 7.66186 13.7379 8.05074 13.7379H11.5421C12.0105 13.7379 12.1609 14.0214 12.268 14.2754C12.389 14.5641 12.8453 15.729 13.592 17.0392C14.807 19.1703 15.5554 20.0379 16.1517 20.0379C16.2632 20.0373 16.3727 20.0081 16.4698 19.9532C17.2493 19.5229 17.1041 16.7436 17.0695 16.1698C17.0695 16.0609 17.0678 14.9271 16.6703 14.3826C16.3833 13.9885 15.8977 13.8382 15.6038 13.7811C15.7236 13.616 15.8813 13.4821 16.0636 13.3905C16.5977 13.1243 17.5604 13.0863 18.5179 13.0863H19.0503C20.089 13.1001 20.3586 13.1675 20.7337 13.2626C21.4925 13.4441 21.508 13.9367 21.4406 15.6132C21.4216 16.0903 21.4009 16.6313 21.4009 17.2656C21.4009 17.4021 21.3957 17.5525 21.3957 17.708C21.3715 18.5653 21.3438 19.535 21.9488 19.9325C22.0271 19.9815 22.1174 20.0078 22.2098 20.0085C22.4206 20.0085 23.0515 20.0085 24.7609 17.0754C25.5127 15.7809 26.0917 14.253 26.1315 14.1389C26.1919 14.0156 26.2793 13.9075 26.3873 13.8226C26.4758 13.7766 26.5744 13.7535 26.6742 13.7552H30.7791C31.2285 13.7552 31.5327 13.8226 31.5898 13.9937C31.6883 14.2685 31.5707 15.1068 29.6954 17.6406L28.8606 18.7468C27.1599 20.973 27.1599 21.0871 28.9609 22.7774Z\" />\r\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 6879
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-social__telegram",
  "use": "icon-social__telegram-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" stroke=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-social__telegram\">\n<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M36.6673 20.0002C36.6673 29.2043 29.2048 36.6668 20.0007 36.6668C10.7965 36.6668 3.33398 29.2043 3.33398 20.0002C3.33398 10.796 10.7965 3.3335 20.0007 3.3335C29.2048 3.3335 36.6673 10.796 36.6673 20.0002ZM20.5979 15.6377C18.977 16.3113 15.7368 17.7071 10.8784 19.8238C10.0895 20.1377 9.67565 20.4446 9.63815 20.7446C9.57426 21.2529 10.2104 21.4529 11.0743 21.7238C11.1923 21.7613 11.3145 21.7988 11.4395 21.8404C12.2909 22.1168 13.4354 22.4404 14.0298 22.4529C14.5701 22.4641 15.1729 22.2418 15.8382 21.7863C20.377 18.721 22.7201 17.1724 22.8673 17.1391C22.9715 17.1154 23.1159 17.0849 23.2132 17.1724C23.3104 17.2585 23.3007 17.4224 23.2909 17.4668C23.227 17.7349 20.7354 20.0529 19.4437 21.2529C19.0409 21.6266 18.7562 21.8918 18.6979 21.9529C18.5673 22.0877 18.434 22.2168 18.3062 22.3404C17.5145 23.1016 16.9229 23.6738 18.3395 24.6071C19.0201 25.0557 19.5645 25.4266 20.1076 25.796C20.7006 26.2002 21.2923 26.6029 22.059 27.1057C22.2534 27.2335 22.4395 27.3654 22.6215 27.4946C23.3118 27.9877 23.9326 28.4293 24.6993 28.3599C25.1437 28.3182 25.6048 27.9002 25.8381 26.6516C26.3895 23.6988 27.4756 17.3043 27.727 14.6682C27.7423 14.4493 27.733 14.2295 27.6993 14.0127C27.6791 13.8376 27.5938 13.6765 27.4604 13.5613C27.2618 13.3988 26.9534 13.3641 26.8145 13.3668C26.1882 13.3779 25.227 13.7127 20.5979 15.6377Z\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 6919
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validator_validator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4489);
/* harmony import */ var _popUp_popUp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9417);
/* harmony import */ var _video_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2305);
/* harmony import */ var _alert_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4009);
/* harmony import */ var _loading_loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3037);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3670);






window.Corners5ProjectLayout = {
  findVideos: _video_video__WEBPACK_IMPORTED_MODULE_2__["default"],
  summonAlert: _alert_alert__WEBPACK_IMPORTED_MODULE_3__.summonAlert,
  removeAlert: _alert_alert__WEBPACK_IMPORTED_MODULE_3__.removeAlert,
  getPaddingOnBody: _utils_utils__WEBPACK_IMPORTED_MODULE_5__/* .getPaddingOnBody */ .rP,
  getPaddingFromBody: _utils_utils__WEBPACK_IMPORTED_MODULE_5__/* .getPaddingFromBody */ .iW,
  getScrollbarWidth: _utils_utils__WEBPACK_IMPORTED_MODULE_5__/* .getScrollbarWidth */ .XJ,
  activateRequestButtons: _utils_utils__WEBPACK_IMPORTED_MODULE_5__/* .activateRequestButtons */ .Qs,
  isObject: _utils_utils__WEBPACK_IMPORTED_MODULE_5__/* .isObject */ .Gv,
  validation: {
    validateForm: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.validateForm,
    maskPhone: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.maskPhone,
    maskInternationalPhone: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.maskInternationalPhone,
    initPasswordEye: _validator_validator__WEBPACK_IMPORTED_MODULE_0__.initPasswordEye
  },
  summonPopUp: _popUp_popUp__WEBPACK_IMPORTED_MODULE_1__.summonPopUp,
  removePopUp: _popUp_popUp__WEBPACK_IMPORTED_MODULE_1__.removePopUp,
  addLoading: _loading_loading__WEBPACK_IMPORTED_MODULE_4__.addLoading,
  removeLoading: _loading_loading__WEBPACK_IMPORTED_MODULE_4__.removeLoading
};


/***/ },

/***/ 7025
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 7153
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 7599
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 7730
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-up",
  "use": "icon-up-usage",
  "viewBox": "0 0 59 59",
  "content": "<symbol viewBox=\"0 0 59 59\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-up\">\n<circle cx=\"29.8107\" cy=\"29.1891\" r=\"26.5676\" fill=\"none\" stroke-width=\"2\" />\n<path d=\"M30.5177 15.509C30.1271 15.1185 29.494 15.1185 29.1034 15.509L22.7395 21.8729C22.349 22.2635 22.349 22.8966 22.7395 23.2872C23.13 23.6777 23.7632 23.6777 24.1537 23.2872L29.8105 17.6303L35.4674 23.2872C35.8579 23.6777 36.4911 23.6777 36.8816 23.2872C37.2721 22.8966 37.2721 22.2635 36.8816 21.8729L30.5177 15.509ZM30.8105 45.4053L30.8105 16.2161L28.8105 16.2161L28.8105 45.4053L30.8105 45.4053Z\" stroke=\"none\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 7878
(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/formik/dist/formik.esm.js + 121 modules
var formik_esm = __webpack_require__(7425);
// EXTERNAL MODULE: ./node_modules/react-dropzone/dist/es/index.js + 5 modules
var es = __webpack_require__(6386);
// EXTERNAL MODULE: ./node_modules/yup/index.esm.js
var index_esm = __webpack_require__(2664);
// EXTERNAL MODULE: ./src/react/components/Input/Input.js
var Input = __webpack_require__(4541);
// EXTERNAL MODULE: ./src/react/components/InputPhone/InputPhone.js
var InputPhone = __webpack_require__(375);
;// ./src/react/components/Textarea/Textarea.js



const Textarea = ({
  name,
  className,
  label,
  isRequired,
  isDisabled,
  placeholder
}) => /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: `Textarea${className ? ` ${className}` : ""}`, children: [
  label ? /* @__PURE__ */ (0,jsx_runtime.jsx)("label", { className: isRequired ? "Textarea__label Textarea__label--required" : "Textarea__label", children: label }) : null,
  /* @__PURE__ */ (0,jsx_runtime.jsx)(
    formik_esm/* Field */.D0,
    {
      as: "textarea",
      autoComplete: "off",
      autoCapitalize: "off",
      disabled: isDisabled,
      className: "Textarea__field",
      name,
      placeholder
    }
  )
] });
/* harmony default export */ const Textarea_Textarea = (Textarea);

// EXTERNAL MODULE: ./src/utils/utils.js
var utils = __webpack_require__(3670);
;// ./src/react/components/RequestVacancie/RequestVacancie.js
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));










const RequestVacancie = ({ submitHandler, id }) => {
  const MAX_SIZE = 1024e4;
  const MAX_FILES = 3;
  const FILE_TYPES = [".jpg", ".jpeg", ".gif", ".png", ".pdf", ".doc", ".docx"];
  const validationSchema = index_esm/* object */.Ik().shape({
    name: index_esm/* string */.Yj().required(),
    phone: index_esm/* string */.Yj().matches(utils/* phoneRegExp */.Kh).required(),
    email: index_esm/* string */.Yj().email().required(),
    text: index_esm/* string */.Yj().required()
  });
  const [isVisibleFileWarning, setVisibleFileWarning] = (0,react.useState)(true);
  const [myFiles, setMyFiles] = (0,react.useState)([]);
  const [myFilesSize, setMyFilesSize] = (0,react.useState)(0);
  let totalSize = myFilesSize;
  (0,react.useEffect)(() => {
    if (myFiles.length > 0) {
      setVisibleFileWarning(false);
    } else {
      setVisibleFileWarning(true);
    }
  }, [myFiles, myFiles.length]);
  const RequestVacancieDecorator = () => {
    setMyFiles([]);
    setMyFilesSize(0);
  };
  function fileValidator(file) {
    const fileName = file.name.toLowerCase();
    if (!FILE_TYPES.some((type) => fileName.endsWith(type))) {
      window.Corners5ProjectLayout.summonAlert("#alert--wrongtypefile");
      return {
        code: "wrong-type",
        message: "\u041D\u0435\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B\u0439 \u0444\u0430\u0439\u043B!"
      };
    }
    return null;
  }
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "RequestVacancie", children: [
    /* @__PURE__ */ (0,jsx_runtime.jsx)("h2", { className: "RequestVacancie__title", children: "\u041E\u0442\u043A\u043B\u0438\u043A\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0432\u0430\u043A\u0430\u043D\u0441\u0438\u044E" }),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      formik_esm/* Formik */.l1,
      {
        initialValues: {
          id,
          name: "",
          phone: "",
          email: "",
          text: "",
          files: []
        },
        validationSchema,
        onSubmit: (values, actions) => {
          submitHandler(values, actions.resetForm, RequestVacancieDecorator);
        },
        children: ({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          setFieldValue
        }) => /* @__PURE__ */ (0,jsx_runtime.jsxs)(
          formik_esm/* Form */.lV,
          {
            className: "RequestVacancie__form",
            action: "#",
            method: "post",
            noValidate: true,
            autoComplete: "off",
            children: [
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestVacancie__field", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Input/* default */.A,
                {
                  type: "text",
                  name: "name",
                  label: "\u0418\u043C\u044F",
                  isRequired: true,
                  placeholder: "\u0418\u043C\u044F",
                  className: errors.name && touched.name ? "Input--error" : null
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestVacancie__field", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                InputPhone/* default */.A,
                {
                  name: "phone",
                  label: "\u0422\u0435\u043B\u0435\u0444\u043E\u043D",
                  value: values.phone,
                  isRequired: true,
                  placeholder: "+7 (999) 999-99-99",
                  onChange: handleChange,
                  onBlur: handleBlur,
                  className: errors.phone && touched.phone ? "InputPhone--error" : null
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestVacancie__field", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Input/* default */.A,
                {
                  type: "email",
                  name: "email",
                  label: "E-mail",
                  isRequired: true,
                  placeholder: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430",
                  className: errors.email && touched.email ? "Input--error" : null
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestVacancie__field RequestVacancie__field--wide", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                Textarea_Textarea,
                {
                  name: "text",
                  label: "\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
                  isRequired: true,
                  placeholder: "\u0412\u0430\u0448\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435",
                  className: errors.text && touched.text ? "Textarea--error" : null
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestVacancie__field RequestVacancie__field--wide", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
                es/* default */.Ay,
                {
                  validator: fileValidator,
                  accept: { "image/jpeg": [".jpg", ".jpeg", ".gif", ".png", ".pdf", ".doc", ".docx"] },
                  onDrop: (acceptedFiles) => {
                    acceptedFiles.forEach((file) => {
                      if (myFiles.findIndex((item) => item.name === file.name) === -1) {
                        if (totalSize + file.size < MAX_SIZE) {
                          totalSize += file.size;
                          setMyFilesSize(totalSize);
                          myFiles.push(file);
                        } else {
                          window.Corners5ProjectLayout.summonAlert("#alert--wrongcountfile");
                        }
                      }
                    });
                    if (myFiles.length > MAX_FILES) {
                      window.Corners5ProjectLayout.summonAlert("#alert--wrongcountfile");
                    }
                    setMyFiles(myFiles.slice(0, MAX_FILES));
                    setFieldValue("files", myFiles.slice(0, MAX_FILES));
                  },
                  children: ({ getRootProps, getInputProps }) => /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
                    /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", __spreadProps(__spreadValues({}, getRootProps({ className: "RequestVacancie__dropzone" })), { children: [
                      /* @__PURE__ */ (0,jsx_runtime.jsx)("input", __spreadValues({}, getInputProps())),
                      /* @__PURE__ */ (0,jsx_runtime.jsxs)(
                        "button",
                        {
                          className: "RequestVacancie__dropzone-button",
                          type: "button",
                          children: [
                            /* @__PURE__ */ (0,jsx_runtime.jsx)("i", {}),
                            /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { children: "\u041F\u0440\u0438\u043A\u0440\u0435\u043F\u0438\u0442\u044C \u0444\u0430\u0439\u043B\u044B" })
                          ]
                        }
                      )
                    ] })),
                    isVisibleFileWarning && /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "RequestVacancie__file-warning", children: "\u0414\u043E\u043F\u0443\u0441\u043A\u0430\u0435\u0442\u0441\u044F \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 3-\u0445 \u0444\u0430\u0439\u043B\u043E\u0432 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 jpeg, gif, png, pdf, doc, docx. \u0420\u0430\u0437\u043C\u0435\u0440 \u043D\u0435 \u0431\u043E\u043B\u0435\u0435 10 MB." }),
                    /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestVacancie__files", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("ul", { className: "RequestVacancie__files-list", children: myFiles.map((file) => /* @__PURE__ */ (0,jsx_runtime.jsxs)("li", { className: "RequestVacancie__files-item", children: [
                      /* @__PURE__ */ (0,jsx_runtime.jsxs)("div", { className: "RequestVacancie__files-info", children: [
                        /* @__PURE__ */ (0,jsx_runtime.jsx)("p", { className: "RequestVacancie__files-name", children: file.path }),
                        /* @__PURE__ */ (0,jsx_runtime.jsxs)("p", { className: "RequestVacancie__files-size", children: [
                          file.size,
                          " KB"
                        ] })
                      ] }),
                      /* @__PURE__ */ (0,jsx_runtime.jsx)(
                        "button",
                        {
                          type: "button",
                          className: "RequestVacancie__files-delete",
                          onClick: () => {
                            totalSize -= file.size;
                            setMyFilesSize(totalSize);
                            myFiles.splice(myFiles.indexOf(file), 1);
                            setFieldValue("files", myFiles);
                          },
                          children: /* @__PURE__ */ (0,jsx_runtime.jsx)("span", {})
                        }
                      )
                    ] }, file.path)) }) })
                  ] })
                }
              ) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestVacancie__field RequestVacancie__field--wide", children: /* @__PURE__ */ (0,jsx_runtime.jsx)("button", { className: "RequestVacancie__submit button", type: "submit", children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C" }) }),
              /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "RequestVacancie__field RequestVacancie__field--wide", children: /* @__PURE__ */ (0,jsx_runtime.jsxs)("p", { className: "RequestVacancie__legal", children: [
                "\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 \xAB\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C\xBB \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u0441 ",
                /* @__PURE__ */ (0,jsx_runtime.jsx)("a", { href: "#", target: "_blank", children: "\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438" }),
                " \u0438 ",
                /* @__PURE__ */ (0,jsx_runtime.jsx)("a", { href: "#", target: "_blank", children: "\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u043C \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435\u043C" }),
                "."
              ] }) })
            ]
          }
        )
      }
    )
  ] });
};
/* harmony default export */ const RequestVacancie_RequestVacancie = (RequestVacancie);

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 48 modules
var axios = __webpack_require__(1083);
// EXTERNAL MODULE: ./src/components/loading/loading.js
var loading = __webpack_require__(3037);
// EXTERNAL MODULE: ./src/components/alert/alert.js
var alert_alert = __webpack_require__(4009);
;// ./src/api/RequestVacancieApi.js




const requestVacancieApi = axios/* default */.A.create({
  baseURL: "/local/ajax",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 5e3
});
const setStatus = (status) => {
  switch (status) {
    case "success":
      return "alert--green";
    case "error":
      return "alert--red";
    default:
      return "";
  }
};
const sendRequestVacancie = (values, reset, requestVacancieDecorator) => {
  const data = (0,utils/* createFormData */.$W)(values);
  (0,loading.addLoading)("#RequestVacancieProvider");
  return requestVacancieApi.post("/vacancy.php", data).then((response) => {
    if (response.status === 200) {
      const alert = document.querySelector("#alert--request").content.querySelector(".alert");
      alert.classList.add(setStatus(response.data.status));
      const container = document.querySelector("#alert--request").content.querySelector(".alert__container");
      container.innerHTML = response.data.text;
      (0,loading.removeLoading)();
      (0,alert_alert.summonAlert)("#alert--request");
      reset();
      requestVacancieDecorator();
    }
  }).catch((error) => {
    console.log(error);
    (0,loading.removeLoading)();
    (0,alert_alert.summonAlert)("#alert--error");
  });
};

;// ./src/react/providers/pages/vacancy/RequestVacancieProvider/RequestVacancieProvider.js





const requestVacancieProvider = document.querySelector("#RequestVacancieProvider");
if (requestVacancieProvider) {
  const { id } = requestVacancieProvider.dataset;
  const RequestVacancieProvider = () => /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { className: "container", children: /* @__PURE__ */ (0,jsx_runtime.jsx)(RequestVacancie_RequestVacancie, { submitHandler: sendRequestVacancie, id }) }) });
  (0,client/* createRoot */.H)(requestVacancieProvider).render(/* @__PURE__ */ (0,jsx_runtime.jsx)(RequestVacancieProvider, {}));
}


/***/ },

/***/ 7945
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 7977
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 8043
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 8065
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4571);
/* harmony import */ var vanilla_tilt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vanilla_tilt__WEBPACK_IMPORTED_MODULE_0__);


const items = document.querySelectorAll(".move-card");
items.forEach((item) => {
  let checker;
  const tiltInit = () => {
    vanilla_tilt__WEBPACK_IMPORTED_MODULE_0___default().init(item, {
      reverse: true,
      max: 5,
      speed: 300,
      glare: true,
      "max-glare": "0.3"
    });
    checker = true;
  };
  if (window.innerWidth > 991) {
    tiltInit();
  }
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 991 && checker) {
      item.vanillaTilt.destroy();
      checker = void 0;
    } else if (window.innerWidth > 991 && !checker) {
      tiltInit();
    }
  });
});


/***/ },

/***/ 8275
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 8413
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 8481
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var viewerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3891);
/* harmony import */ var viewerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(viewerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1236);
/* harmony import */ var swiper_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1708);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3670);





const slider = document.querySelector(".equipment__gallery");
if (slider) {
  const layoutNolint = new swiper__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A(slider, {
    modules: [swiper_modules__WEBPACK_IMPORTED_MODULE_2__/* .Navigation */ .Vx, swiper_modules__WEBPACK_IMPORTED_MODULE_2__/* .Scrollbar */ .Ze, swiper_modules__WEBPACK_IMPORTED_MODULE_2__/* .EffectFade */ ._R],
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    effect: "fade",
    // If we need effect
    fadeEffect: {
      crossFade: true
    },
    touchEventsTarget: "container",
    // If we need scrollbar
    scrollbar: {
      el: ".equipment__scrollbar",
      dragClass: "equipment__scrollbar-drag",
      draggable: true
    },
    // If we need navigation
    navigation: {
      nextEl: ".equipment__button--next",
      prevEl: ".equipment__button--prev"
    },
    // If we need events
    on: {
      slideChange: () => {
        console.log(layoutNolint.activeIndex);
      }
    }
  });
  const viewer = new (viewerjs__WEBPACK_IMPORTED_MODULE_0___default())(slider, {
    url: "data-original",
    className: "viewerjs__zoom",
    loop: false,
    toolbar: {
      zoomIn: {
        show: true,
        size: "large"
      },
      zoomOut: {
        show: true,
        size: "large"
      },
      oneToOne: false,
      reset: false,
      prev: {
        show: true,
        size: "large"
      },
      play: false,
      next: {
        show: true,
        size: "large"
      },
      rotateLeft: {
        show: true,
        size: "large"
      },
      rotateRight: {
        show: true,
        size: "large"
      },
      flipHorizontal: false,
      flipVertical: false
    },
    navbar: false,
    // movable: false,
    keyboard: false,
    title() {
      return `(${this.index + 1}/${this.length})`;
    },
    // slideOnTouch: false,
    transition: false,
    show() {
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__/* .getPaddingOnBody */ .rP)();
    },
    hide() {
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_3__/* .getPaddingFromBody */ .iW)();
    },
    view(event) {
      console.log(event.detail.index);
      layoutNolint.slideTo(event.detail.index, 0, false);
    }
  });
}


/***/ },

/***/ 8595
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 8621
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 8625
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 8693
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popUp_popUp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9417);


const cards = document.querySelectorAll(".review-card");
cards.forEach((card) => {
  const toggle = card.querySelector(".review-card__more");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const template = card.cloneNode(true);
      (0,_popUp_popUp__WEBPACK_IMPORTED_MODULE_0__.summonPopUp)({
        template: "#modal--more",
        blockScroll: true,
        overlay: {
          use: true,
          closeOnClick: true
        },
        esc: {
          closeOnEsc: true
        }
      });
      const modal = document.querySelector(".modal");
      if (!modal) return;
      const wrapper = modal.querySelector(".modal__wrapper");
      wrapper.appendChild(template);
    });
  }
});


/***/ },

/***/ 9035
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4009);


const copy = document.querySelector(".contacts-map__copy");
if (copy) {
  copy.addEventListener("click", (evt) => {
    evt.preventDefault();
    const link = window.location.href;
    const textarea = document.createElement("textarea");
    textarea.value = link;
    copy.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    (0,_alert_alert__WEBPACK_IMPORTED_MODULE_0__.summonAlert)("#alert--copy");
  });
}


/***/ },

/***/ 9417
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removePopUp: () => (/* binding */ removePopUp),
/* harmony export */   summonPopUp: () => (/* binding */ summonPopUp)
/* harmony export */ });
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3670);


const POPUP_IGNORE_CLASSES = ["cookie", "modal-zone-info"];
const body = document.querySelector("body");
const openPopup = (options) => {
  const {
    template,
    blockScroll = true,
    redirect,
    overlay = {
      use: true,
      closeOnClick: true
    },
    esc = {
      closeOnEsc: true
    }
  } = options;
  const popUpName = template.replace(/^[#.]/, "");
  const templateElement = document.querySelector(`#${popUpName}`);
  if (!templateElement) {
    console.warn(`#${popUpName} \u043C\u043E\u0434\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043E\u043A\u043D\u0430 \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442.`);
    return;
  }
  if (document.querySelector(`.${popUpName}`)) {
    console.warn(`\u041C\u043E\u0434\u0430\u043B\u043A\u0430 ${popUpName} \u0443\u0436\u0435 \u043E\u0442\u043A\u0440\u044B\u0442\u0430.`);
    return;
  }
  const templateContent = templateElement.content.cloneNode(true);
  const popup = templateContent.querySelector(`.${popUpName}`);
  if (!popup) {
    console.error(`\u0412 \u0448\u0430\u0431\u043B\u043E\u043D\u0435 #${popUpName} \u043D\u0435\u0442 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430 \u0441 \u043A\u043B\u0430\u0441\u0441\u043E\u043C .${popUpName}`);
    return;
  }
  body.append(popup);
  const overlayEl = popup.querySelector(".popUp__overlay");
  const closes = popup.querySelectorAll(".popUp__close");
  function buildPopupSelector() {
    const exclude = POPUP_IGNORE_CLASSES.map((cls) => `:not(.${cls})`).join("");
    return `.popUp${exclude}`;
  }
  function closePopup() {
    popup.remove();
    if (blockScroll && !document.querySelector(buildPopupSelector())) {
      (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingFromBody */ .iW)();
    }
    document.removeEventListener("keydown", onPopupEscPress);
    if (redirect) {
      setTimeout(() => {
        window.location.href = redirect;
      }, 300);
    }
  }
  function onPopupEscPress(evt) {
    if (!esc.closeOnEsc) return;
    if (evt.code !== "Escape") return;
    evt.preventDefault();
    closePopup();
  }
  if (blockScroll) (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingOnBody */ .rP)();
  if (overlayEl) {
    if (overlay.use && overlay.closeOnClick) {
      overlayEl.addEventListener("click", closePopup);
    } else if (!overlay.use) {
      overlayEl.remove();
    }
  }
  closes.forEach((close) => close.addEventListener("click", closePopup));
  if (esc.closeOnEsc) {
    document.addEventListener("keydown", onPopupEscPress);
  }
};
const summonPopUp = (arg1, arg2, arg3) => {
  if (typeof arg1 === "object" && arg1 !== null) {
    const {
      template,
      blockScroll = true,
      redirect,
      overlay = {
        use: true,
        closeOnClick: true
      },
      esc = {
        closeOnEsc: true
      }
    } = arg1;
    if (!template) {
      console.warn("\u041D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u043D template \u0434\u043B\u044F \u043C\u043E\u0434\u0430\u043B\u043A\u0438");
      return;
    }
    openPopup({
      template,
      blockScroll,
      redirect,
      overlay,
      esc
    });
  } else if (typeof arg1 === "string") {
    const template = arg1;
    const blockScroll = arg2 !== void 0 ? arg2 : true;
    const redirect = arg3;
    openPopup({
      template,
      blockScroll,
      redirect,
      overlay: {
        use: true,
        closeOnClick: true
      },
      esc: {
        closeOnEsc: true
      }
    });
  } else {
    console.warn("\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0430\u0440\u0433\u0443\u043C\u0435\u043D\u0442\u044B \u0434\u043B\u044F summonPopUp");
  }
};
const removePopUp = (arg, forceBlockScroll = true) => {
  if (!arg) return;
  let popup = null;
  let blockScroll = forceBlockScroll;
  let redirect;
  if (typeof arg === "string") {
    const popUpName = arg.replace(/^[#.]/, "");
    popup = document.querySelector(`.${popUpName}`);
  } else if (typeof arg === "object" && arg !== null) {
    if (arg.template) {
      const popUpName = arg.template.replace(/^[#.]/, "");
      popup = document.querySelector(`.${popUpName}`);
    }
    if (arg.blockScroll !== void 0) blockScroll = arg.blockScroll;
    if (arg.redirect) redirect = arg.redirect;
  }
  if (!popup) return;
  popup.remove();
  if (blockScroll) {
    (0,_utils_utils__WEBPACK_IMPORTED_MODULE_0__/* .getPaddingFromBody */ .iW)();
  }
  if (redirect) {
    setTimeout(() => {
      window.location.href = redirect;
    }, 300);
  }
};



/***/ },

/***/ 9453
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 9520
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2897);
/* harmony import */ var _node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5042);
/* harmony import */ var _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1__);


var symbol = new (_node_modules_svg_baker_runtime_browser_symbol_js__WEBPACK_IMPORTED_MODULE_0___default())({
  "id": "icon-social__whatsapp",
  "use": "icon-social__whatsapp-usage",
  "viewBox": "0 0 40 40",
  "content": "<symbol viewBox=\"0 0 40 40\" stroke=\"none\" xmlns=\"http://www.w3.org/2000/svg\" id=\"icon-social__whatsapp\">\n<path d=\"M33.6005 11.3998C28.8005 3.99976 19.0005 1.79976 11.4005 6.39976C4.00054 10.9998 1.60054 20.9998 6.40054 28.3998L6.80054 28.9998L5.20054 34.9998L11.2005 33.3998L11.8005 33.7998C14.4005 35.1998 17.2005 35.9998 20.0005 35.9998C23.0005 35.9998 26.0005 35.1998 28.6005 33.5998C36.0005 28.7998 38.2005 18.9998 33.6005 11.3998ZM29.4005 26.7998C28.6005 27.9998 27.6005 28.7998 26.2005 28.9998C25.4005 28.9998 24.4005 29.3998 20.4005 27.7998C17.0005 26.1998 14.2005 23.5998 12.2005 20.5998C11.0005 19.1998 10.4005 17.3998 10.2005 15.5998C10.2005 13.9998 10.8005 12.5998 11.8005 11.5998C12.2005 11.1998 12.6005 10.9998 13.0005 10.9998H14.0005C14.4005 10.9998 14.8005 10.9998 15.0005 11.7998C15.4005 12.7998 16.4005 15.1998 16.4005 15.3998C16.6005 15.5998 16.6005 15.9998 16.4005 16.1998C16.6005 16.5998 16.4005 16.9998 16.2005 17.1998C16.0005 17.3998 15.8005 17.7998 15.6005 17.9998C15.2005 18.1998 15.0005 18.5998 15.2005 18.9998C16.0005 20.1998 17.0005 21.3998 18.0005 22.3998C19.2005 23.3998 20.4005 24.1998 21.8005 24.7998C22.2005 24.9998 22.6005 24.9998 22.8005 24.5998C23.0005 24.1998 24.0005 23.1998 24.4005 22.7998C24.8005 22.3998 25.0005 22.3998 25.4005 22.5998L28.6005 24.1998C29.0005 24.3998 29.4005 24.5998 29.6005 24.7998C29.8005 25.3998 29.8005 26.1998 29.4005 26.7998Z\" />\n</symbol>"
});
var result = _node_modules_svg_sprite_loader_runtime_browser_sprite_build_js__WEBPACK_IMPORTED_MODULE_1___default().add(symbol);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#" + symbol.id);

/***/ },

/***/ 9585
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ },

/***/ 9961
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			23: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_pug_esbuild_starter"] = self["webpackChunkwebpack_pug_esbuild_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [96], () => (__webpack_require__(6153)))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;