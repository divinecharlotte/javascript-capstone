(self["webpackChunkjavascript_capstone"] = self["webpackChunkjavascript_capstone"] || []).push([["path"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Courgette&family=Patrick+Hand&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --text-color-1: #f0f9cf;\n  --text-color-2: #23832b;\n  --text-color-3: #9cb445;\n  --bg-color: #f0f9cf;\n  --popup-blur: 20px;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  background-color: var(--bg-color);\n}\n\nnav .openMenu {\n  display: flex;\n  flex-direction: row-reverse;\n  font-size: 1.5rem;\n  margin: 20px;\n  cursor: pointer;\n  color: #236128;\n}\n\nnav .nav-items {\n  display: none;\n  position: fixed;\n  height: 100vh;\n  flex-direction: column;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 10;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  list-style: none;\n  background: rgba(235, 255, 161, 0.9);\n}\n\nnav .closeMenu {\n  font-size: 1.7rem;\n}\n\nnav .nav-items .closeMenu {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}\n\n.item a {\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\n.nav-link {\n  text-decoration: none;\n  position: relative;\n  display: inline-block;\n  margin: 0 0.75rem;\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n  color: rgb(49, 49, 49);\n  font-weight: 500;\n  opacity: 0.9;\n  transition: 0.3s;\n}\n\n.nav-link::after {\n  content: \"\";\n  position: absolute;\n  width: 50%;\n  height: 7px;\n  border-radius: 5px;\n  background-color: var(--text-color-3);\n  bottom: -10px;\n  left: 0;\n  z-index: -1;\n  opacity: 0;\n  transition: 0.3s;\n}\n\n.nav-link:hover {\n  color: var(--text-color-2);\n}\n\n.nav-link:hover::after {\n  width: 100%;\n  opacity: 1;\n}\n\n.tagline h2 {\n  text-align: center;\n  color: var(--text-color-2);\n  font-size: 2.5rem;\n  margin-top: 5%;\n  letter-spacing: 2px;\n  font-weight: 500;\n  font-family: \"Courgette\", cursive;\n}\n\n.recipe-cards {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  margin-top: 2rem;\n}\n\n.card {\n  position: relative;\n  width: 300px;\n  height: auto;\n  margin: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 1rem 1rem;\n  border: 1px solid #fff;\n  border-radius: 25px;\n  background: #fff;\n  box-shadow:\n    rgb(50 50 93 / 25%) 0 6px 12px -2px,\n    rgb(0 0 0 / 30%) 0 3px 7px -3px;\n}\n\n.card-img img {\n  width: 100%;\n  border-radius: 20px;\n}\n\n.card-info {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  width: 100%;\n}\n\n.card-info h2,\n#reservationPopup h2 {\n  font-family: \"Patrick Hand\", cursive;\n  color: var(--text-color-3);\n  font-size: 2rem;\n  letter-spacing: 2px;\n}\n\n.card-info ul {\n  display: flex;\n  margin-top: 5%;\n  justify-content: space-between;\n  list-style: none;\n}\n\n.comment-btn,\n.reservation-btn {\n  padding: 3% 7%;\n  font-family: \"Patrick Hand\", cursive;\n  font-size: 1.3rem;\n  color: var(--text-color-1);\n  background-color: var(--text-color-2);\n  border-radius: 15px;\n  border: 1px solid var(--text-color-2);\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n.comment-btn:hover,\n.reservation-btn:hover {\n  background-color: #236128;\n}\n\n.like-btn {\n  background: none;\n  border: none;\n  color: var(--text-color-3);\n  font-size: 1.7rem;\n  margin-right: 0.5rem;\n  cursor: pointer;\n}\n\n.like-btn .fa-heart {\n  margin-right: 0.75rem;\n}\n\n.comments-container {\n  width: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.hidden {\n  display: none;\n}\n\n.no-scroll {\n  overflow: hidden;\n}\n\n.footer {\n  width: 100%;\n  text-align: center;\n  background-color: #c8e073;\n  padding: 20px;\n}\n\n.footer a {\n  color: #2a7703;\n  text-decoration: none;\n  transition: 0.2s;\n}\n\n.footer a:hover {\n  cursor: pointer;\n  font-size: 1.5rem;\n  transform: scale(1.2, 1.2);\n}\n\nbody.popup-open {\n  overflow: hidden;\n  z-index: 95;\n}\n\n#blur-bg {\n  z-index: 99;\n}\n\n#reservationPopup {\n  --nav-line-height: 3px;\n  --nav-line-color: rgb(88, 88, 88);\n\n  position: fixed;\n  top: 0;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.9);\n  display: flex;\n  justify-content: center;\n  z-index: 100;\n  overflow: auto;\n  height: 100%;\n}\n\n#reservationFormErr {\n  color: red;\n}\n\n#reservation__container {\n  padding: 20px;\n  border-radius: 20px;\n  background-color: rgb(255, 255, 255);\n  box-shadow:\n    rgb(50 50 93 / 25%) 0 6px 12px -2px,\n    rgb(0 0 0 / 30%) 0 3px 7px -3px;\n  margin: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n#reservation__closeBtn {\n  cursor: pointer;\n  position: relative;\n  width: 50px;\n  height: 43px;\n}\n\n#r__cBtn-lines {\n  position: absolute;\n  top: 12px;\n  width: 80%;\n  height: var(--nav-line-height);\n  background-color: var(--nav-line-color);\n  transform: rotate(45deg);\n}\n\n#r__cBtn-lines::after {\n  content: \"\";\n  top: 0;\n  transform: rotate(-90deg);\n  position: absolute;\n  width: 100%;\n  height: var(--nav-line-height);\n  background-color: var(--nav-line-color);\n}\n\n#reservation__data-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#reservation__data-content img {\n  width: 100%;\n  border-radius: 20px;\n}\n\n#reservation__data-content h2 {\n  margin-bottom: 10px;\n}\n\n#reservation-p__container {\n  max-width: 90vw;\n\n  /* stylelint-disable-next-line */\n  height: fit-content;\n\n  /* stylelint-disable-next-line */\n  height: -moz-fit-content;\n}\n\n#resPopup--dish-description {\n  display: flex;\n  flex-direction: column;\n}\n\n#resPopup--dish-description .rpdd-item p:first-child {\n  font-weight: bold;\n}\n\n#resPopup--dish-description .rpdd-item {\n  margin-bottom: 1rem;\n}\n\n#resPopup--dish-description a {\n  text-decoration: none;\n  color: var(--text-color-2);\n}\n\n#submit-reservation {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n\n#submit-reservation h3 {\n  margin: 1rem 0;\n}\n\n#submit-reservation button {\n  min-width: 10rem;\n}\n\n.resPopupFormItem input,\n#submit-reservation button {\n  border-radius: 20px;\n  padding: 10px;\n  border: 1px solid black;\n}\n\n.resPopupFormItem input {\n  margin-bottom: 0.7rem;\n  text-align: center;\n  min-width: 17rem;\n}\n\n@media screen and (min-width: 768px) {\n  nav .openMenu {\n    display: none;\n  }\n\n  nav .nav-items .closeMenu {\n    display: none;\n    cursor: pointer;\n  }\n\n  nav .nav-items {\n    display: flex;\n    flex-direction: row;\n    height: auto;\n    align-items: center;\n    justify-content: center;\n    gap: 3rem;\n    list-style: none;\n    padding: 2%;\n    background-color: #fff;\n    margin: auto;\n  }\n\n  .item a {\n    font-size: 1rem;\n  }\n\n  .tagline h2 {\n    font-size: 3.5rem;\n  }\n\n  footer {\n    font-size: 1.2rem;\n  }\n\n  #reservation-p__container {\n    max-width: 50vw;\n  }\n\n  #resPopup--dish-description {\n    flex-direction: row;\n    align-items: center;\n  }\n\n  #resPopup--dish-description .rpdd-item {\n    margin: 0 1rem;\n    position: relative;\n  }\n\n  #resPopup--dish-description .rpdd-item::after {\n    content: \"\";\n    position: absolute;\n    border-right: 1px solid #ccc;\n    height: 100%;\n    top: 0;\n    right: 0;\n    margin-right: -1rem;\n  }\n\n  #resPopup--dish-description .rpdd-item:last-of-type::after {\n    content: \"\";\n    border-right: 0;\n  }\n}\n\n.blur {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.bring {\n  display: block;\n}\n\n.comment-pop {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-items: center;\n  margin: 10% 10% 25% 25%;\n  z-index: 10;\n  background-color: rgb(217, 213, 213);\n  width: 50%;\n  gap: 0.75rem;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n}\n\n.x {\n  margin-left: 87%;\n  width: 30px;\n  margin-top: 6%;\n  background-color: red;\n}\n\n.comments {\n  display: flex;\n  gap: 1.25rem;\n}\n\n.coImage {\n  width: 70%;\n  margin-top: 1.875rem;\n  border-radius: 5%;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;EACE,uBAAuB;EACvB,uBAAuB;EACvB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,kCAAkC;AACpC;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,iBAAiB;EACjB,YAAY;EACZ,eAAe;EACf,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,WAAW;EACX,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;EACT,gBAAgB;EAChB,oCAAoC;AACtC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,qBAAqB;EACrB,iBAAiB;EACjB,eAAe;EACf,qBAAqB;EACrB,sBAAsB;EACtB,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,UAAU;EACV,WAAW;EACX,kBAAkB;EAClB,qCAAqC;EACrC,aAAa;EACb,OAAO;EACP,WAAW;EACX,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,WAAW;EACX,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,0BAA0B;EAC1B,iBAAiB;EACjB,cAAc;EACd,mBAAmB;EACnB,gBAAgB;EAChB,iCAAiC;AACnC;;AAEA;EACE,aAAa;EACb,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB;EAClB,sBAAsB;EACtB,mBAAmB;EACnB,gBAAgB;EAChB;;mCAEiC;AACnC;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,yBAAyB;EACzB,WAAW;AACb;;AAEA;;EAEE,oCAAoC;EACpC,0BAA0B;EAC1B,eAAe;EACf,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,8BAA8B;EAC9B,gBAAgB;AAClB;;AAEA;;EAEE,cAAc;EACd,oCAAoC;EACpC,iBAAiB;EACjB,0BAA0B;EAC1B,qCAAqC;EACrC,mBAAmB;EACnB,qCAAqC;EACrC,eAAe;EACf,gBAAgB;AAClB;;AAEA;;EAEE,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,0BAA0B;EAC1B,iBAAiB;EACjB,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,cAAc;EACd,qBAAqB;EACrB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,sBAAsB;EACtB,iCAAiC;;EAEjC,eAAe;EACf,MAAM;EACN,WAAW;EACX,0CAA0C;EAC1C,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,cAAc;EACd,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,oCAAoC;EACpC;;mCAEiC;EACjC,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,UAAU;EACV,8BAA8B;EAC9B,uCAAuC;EACvC,wBAAwB;AAC1B;;AAEA;EACE,WAAW;EACX,MAAM;EACN,yBAAyB;EACzB,kBAAkB;EAClB,WAAW;EACX,8BAA8B;EAC9B,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,eAAe;;EAEf,gCAAgC;EAChC,mBAAmB;;EAEnB,gCAAgC;EAChC,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;;EAEE,mBAAmB;EACnB,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE;IACE,aAAa;EACf;;EAEA;IACE,aAAa;IACb,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,gBAAgB;IAChB,WAAW;IACX,sBAAsB;IACtB,YAAY;EACd;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;IACE,eAAe;EACjB;;EAEA;IACE,mBAAmB;IACnB,mBAAmB;EACrB;;EAEA;IACE,cAAc;IACd,kBAAkB;EACpB;;EAEA;IACE,WAAW;IACX,kBAAkB;IAClB,4BAA4B;IAC5B,YAAY;IACZ,MAAM;IACN,QAAQ;IACR,mBAAmB;EACrB;;EAEA;IACE,WAAW;IACX,eAAe;EACjB;AACF;;AAEA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,SAAS;EACT,QAAQ;EACR,oCAAoC;AACtC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,qBAAqB;EACrB,uBAAuB;EACvB,WAAW;EACX,oCAAoC;EACpC,UAAU;EACV,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,YAAY;AACd;;AAEA;EACE,UAAU;EACV,oBAAoB;EACpB,iBAAiB;AACnB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Courgette&family=Patrick+Hand&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap\");\n\n:root {\n  --text-color-1: #f0f9cf;\n  --text-color-2: #23832b;\n  --text-color-3: #9cb445;\n  --bg-color: #f0f9cf;\n  --popup-blur: 20px;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  font-family: \"Poppins\", sans-serif;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  background-color: var(--bg-color);\n}\n\nnav .openMenu {\n  display: flex;\n  flex-direction: row-reverse;\n  font-size: 1.5rem;\n  margin: 20px;\n  cursor: pointer;\n  color: #236128;\n}\n\nnav .nav-items {\n  display: none;\n  position: fixed;\n  height: 100vh;\n  flex-direction: column;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 10;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  list-style: none;\n  background: rgba(235, 255, 161, 0.9);\n}\n\nnav .closeMenu {\n  font-size: 1.7rem;\n}\n\nnav .nav-items .closeMenu {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}\n\n.item a {\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n\n.nav-link {\n  text-decoration: none;\n  position: relative;\n  display: inline-block;\n  margin: 0 0.75rem;\n  font-size: 1rem;\n  letter-spacing: 0.5px;\n  color: rgb(49, 49, 49);\n  font-weight: 500;\n  opacity: 0.9;\n  transition: 0.3s;\n}\n\n.nav-link::after {\n  content: \"\";\n  position: absolute;\n  width: 50%;\n  height: 7px;\n  border-radius: 5px;\n  background-color: var(--text-color-3);\n  bottom: -10px;\n  left: 0;\n  z-index: -1;\n  opacity: 0;\n  transition: 0.3s;\n}\n\n.nav-link:hover {\n  color: var(--text-color-2);\n}\n\n.nav-link:hover::after {\n  width: 100%;\n  opacity: 1;\n}\n\n.tagline h2 {\n  text-align: center;\n  color: var(--text-color-2);\n  font-size: 2.5rem;\n  margin-top: 5%;\n  letter-spacing: 2px;\n  font-weight: 500;\n  font-family: \"Courgette\", cursive;\n}\n\n.recipe-cards {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  margin-top: 2rem;\n}\n\n.card {\n  position: relative;\n  width: 300px;\n  height: auto;\n  margin: 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 1rem 1rem;\n  border: 1px solid #fff;\n  border-radius: 25px;\n  background: #fff;\n  box-shadow:\n    rgb(50 50 93 / 25%) 0 6px 12px -2px,\n    rgb(0 0 0 / 30%) 0 3px 7px -3px;\n}\n\n.card-img img {\n  width: 100%;\n  border-radius: 20px;\n}\n\n.card-info {\n  display: flex;\n  flex-direction: column;\n  align-content: flex-start;\n  width: 100%;\n}\n\n.card-info h2,\n#reservationPopup h2 {\n  font-family: \"Patrick Hand\", cursive;\n  color: var(--text-color-3);\n  font-size: 2rem;\n  letter-spacing: 2px;\n}\n\n.card-info ul {\n  display: flex;\n  margin-top: 5%;\n  justify-content: space-between;\n  list-style: none;\n}\n\n.comment-btn,\n.reservation-btn {\n  padding: 3% 7%;\n  font-family: \"Patrick Hand\", cursive;\n  font-size: 1.3rem;\n  color: var(--text-color-1);\n  background-color: var(--text-color-2);\n  border-radius: 15px;\n  border: 1px solid var(--text-color-2);\n  cursor: pointer;\n  transition: 0.3s;\n}\n\n.comment-btn:hover,\n.reservation-btn:hover {\n  background-color: #236128;\n}\n\n.like-btn {\n  background: none;\n  border: none;\n  color: var(--text-color-3);\n  font-size: 1.7rem;\n  margin-right: 0.5rem;\n  cursor: pointer;\n}\n\n.like-btn .fa-heart {\n  margin-right: 0.75rem;\n}\n\n.comments-container {\n  width: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.hidden {\n  display: none;\n}\n\n.no-scroll {\n  overflow: hidden;\n}\n\n.footer {\n  width: 100%;\n  text-align: center;\n  background-color: #c8e073;\n  padding: 20px;\n}\n\n.footer a {\n  color: #2a7703;\n  text-decoration: none;\n  transition: 0.2s;\n}\n\n.footer a:hover {\n  cursor: pointer;\n  font-size: 1.5rem;\n  transform: scale(1.2, 1.2);\n}\n\nbody.popup-open {\n  overflow: hidden;\n  z-index: 95;\n}\n\n#blur-bg {\n  z-index: 99;\n}\n\n#reservationPopup {\n  --nav-line-height: 3px;\n  --nav-line-color: rgb(88, 88, 88);\n\n  position: fixed;\n  top: 0;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.9);\n  display: flex;\n  justify-content: center;\n  z-index: 100;\n  overflow: auto;\n  height: 100%;\n}\n\n#reservationFormErr {\n  color: red;\n}\n\n#reservation__container {\n  padding: 20px;\n  border-radius: 20px;\n  background-color: rgb(255, 255, 255);\n  box-shadow:\n    rgb(50 50 93 / 25%) 0 6px 12px -2px,\n    rgb(0 0 0 / 30%) 0 3px 7px -3px;\n  margin: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n#reservation__closeBtn {\n  cursor: pointer;\n  position: relative;\n  width: 50px;\n  height: 43px;\n}\n\n#r__cBtn-lines {\n  position: absolute;\n  top: 12px;\n  width: 80%;\n  height: var(--nav-line-height);\n  background-color: var(--nav-line-color);\n  transform: rotate(45deg);\n}\n\n#r__cBtn-lines::after {\n  content: \"\";\n  top: 0;\n  transform: rotate(-90deg);\n  position: absolute;\n  width: 100%;\n  height: var(--nav-line-height);\n  background-color: var(--nav-line-color);\n}\n\n#reservation__data-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#reservation__data-content img {\n  width: 100%;\n  border-radius: 20px;\n}\n\n#reservation__data-content h2 {\n  margin-bottom: 10px;\n}\n\n#reservation-p__container {\n  max-width: 90vw;\n\n  /* stylelint-disable-next-line */\n  height: fit-content;\n\n  /* stylelint-disable-next-line */\n  height: -moz-fit-content;\n}\n\n#resPopup--dish-description {\n  display: flex;\n  flex-direction: column;\n}\n\n#resPopup--dish-description .rpdd-item p:first-child {\n  font-weight: bold;\n}\n\n#resPopup--dish-description .rpdd-item {\n  margin-bottom: 1rem;\n}\n\n#resPopup--dish-description a {\n  text-decoration: none;\n  color: var(--text-color-2);\n}\n\n#submit-reservation {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n\n#submit-reservation h3 {\n  margin: 1rem 0;\n}\n\n#submit-reservation button {\n  min-width: 10rem;\n}\n\n.resPopupFormItem input,\n#submit-reservation button {\n  border-radius: 20px;\n  padding: 10px;\n  border: 1px solid black;\n}\n\n.resPopupFormItem input {\n  margin-bottom: 0.7rem;\n  text-align: center;\n  min-width: 17rem;\n}\n\n@media screen and (min-width: 768px) {\n  nav .openMenu {\n    display: none;\n  }\n\n  nav .nav-items .closeMenu {\n    display: none;\n    cursor: pointer;\n  }\n\n  nav .nav-items {\n    display: flex;\n    flex-direction: row;\n    height: auto;\n    align-items: center;\n    justify-content: center;\n    gap: 3rem;\n    list-style: none;\n    padding: 2%;\n    background-color: #fff;\n    margin: auto;\n  }\n\n  .item a {\n    font-size: 1rem;\n  }\n\n  .tagline h2 {\n    font-size: 3.5rem;\n  }\n\n  footer {\n    font-size: 1.2rem;\n  }\n\n  #reservation-p__container {\n    max-width: 50vw;\n  }\n\n  #resPopup--dish-description {\n    flex-direction: row;\n    align-items: center;\n  }\n\n  #resPopup--dish-description .rpdd-item {\n    margin: 0 1rem;\n    position: relative;\n  }\n\n  #resPopup--dish-description .rpdd-item::after {\n    content: \"\";\n    position: absolute;\n    border-right: 1px solid #ccc;\n    height: 100%;\n    top: 0;\n    right: 0;\n    margin-right: -1rem;\n  }\n\n  #resPopup--dish-description .rpdd-item:last-of-type::after {\n    content: \"\";\n    border-right: 0;\n  }\n}\n\n.blur {\n  position: fixed;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.bring {\n  display: block;\n}\n\n.comment-pop {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-items: center;\n  margin: 10% 10% 25% 25%;\n  z-index: 10;\n  background-color: rgb(217, 213, 213);\n  width: 50%;\n  gap: 0.75rem;\n}\n\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n}\n\n.x {\n  margin-left: 87%;\n  width: 30px;\n  margin-top: 6%;\n  background-color: red;\n}\n\n.comments {\n  display: flex;\n  gap: 1.25rem;\n}\n\n.coImage {\n  width: 70%;\n  margin-top: 1.875rem;\n  border-radius: 5%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _modules_itemslist_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/itemslist.js */ "./src/modules/itemslist.js");



(0,_modules_itemslist_js__WEBPACK_IMPORTED_MODULE_1__["default"])();


/***/ }),

/***/ "./src/modules/AddShowReservations.js":
/*!********************************************!*\
  !*** ./src/modules/AddShowReservations.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FormValidation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormValidation.js */ "./src/modules/FormValidation.js");


class AddShowReservations {
  link = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NeJSPpMrADKWN3Hg0NY2/reservations';

  constructor() {
    this.validator = new _FormValidation_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  renderForm = () => `<form id='submit-reservation'>
      <h3>Add a reservation</h3>
      <div class="resPopupFormItem">
        <input type='text' required name="name" placeholder='Your name'>
      </div>
      <div class="resPopupFormItem">
        <input type='text' required name="res-popup-start-date" placeholder='Start date' onfocus="(this.type = 'date')">
      </div>
      <div class="resPopupFormItem">
        <input type='text' required name="res-popup-end-date" placeholder='End date' onfocus="(this.type = 'date')">
      </div>
      <button type='submit'>Reserve</button>
    </form>
    <h3 class='reservations-list-header'>
      Reservations
      <span id="reservations-counter"></span>
    </h3>
    <div id='reservations-list'>
      </div>
    `;

  renderReservations = (data) => {
    const list = document.getElementById('reservations-list');
    let html = `
    `;

    data.reverse().forEach((el) => {
      html += `
      <div class="reservation-list-item">
        <strong>${el.date_start}</strong> - <strong>${el.date_end}</strong> by <strong>${el.username}</strong>
      </div>
        `;
    });
    list.insertAdjacentHTML('afterbegin', html);
  };

  async reservationsCounter(id) {
    const counter = document.getElementById('reservations-counter');

    try {
      const response = await fetch(`${this.link}?item_id=${id}`, { method: 'get' });

      const data = await response.json();
      counter.textContent = `(${data.length})`;
      return data;
    } catch (e) {
      return null;
    }
  }

  async getReservations(id) {
    try {
      const response = await fetch(`${this.link}?item_id=${id}`, { method: 'get' });
      if (!response.ok) {
        throw new Error(response.statusText);
      } else {
        const data = await response.json();
        this.renderReservations(data);
        this.reservationsCounter(id);
      }
    } catch (e) {
      throw Error(e);
    }
  }

  invalidFormData = (form) => {
    if (!document.getElementById('reservationFormErr')) {
      form.insertAdjacentHTML('afterend', `<div id="reservationFormErr">Invalid values</div>
      `);
    }
  };

  async sendData({
    id, name, start, end,
  }) {
    const dataJson = {
      item_id: id,
      username: name,
      date_start: start,
      date_end: end,
    };

    try {
      const response = await fetch(`${this.link}`, {
        method: 'POST',
        body: JSON.stringify(dataJson),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 201) {
        this.renderReservations([dataJson]);
        this.reservationsCounter(id);
      }
    } catch (e) {
      throw Error(e);
    }
  }

  submitForm(data, formElement, id) {
    const name = data.get('name');
    const start = data.get('res-popup-start-date');
    const end = data.get('res-popup-end-date');

    if (!this.validator.validateText(name)
      || !this.validator.validateDate(start)
      || !this.validator.validateDate(end)) {
      this.invalidFormData(formElement);
      return false;
    }

    const formErr = document.getElementById('reservationFormErr');
    if (formErr !== null) {
      formErr.remove();
    }

    this.sendData({
      id, name, start, end,
    });

    return 1;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddShowReservations);


/***/ }),

/***/ "./src/modules/FormValidation.js":
/*!***************************************!*\
  !*** ./src/modules/FormValidation.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class FormValidation {
  validateText = (data) => {
    const textRegex = /^[A-Za-z]+$/;
    if (textRegex.test(data)) return 'OK';
    return false;
  };

  validateDate = (data) => {
    const dateRegex = /^\d{2,4}-\d{2,4}-\d{2,4}$/;

    if (dateRegex.test(data)) return 'OK';
    return false;
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormValidation);


/***/ }),

/***/ "./src/modules/Reservations.js":
/*!*************************************!*\
  !*** ./src/modules/Reservations.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AddShowReservations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddShowReservations.js */ "./src/modules/AddShowReservations.js");


class Reservations {
  constructor() {
    this.AddShowRes = new _AddShowReservations_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  async apidata(dishName) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${dishName}`);

    try {
      const data = await response.json();
      this.renderPopup(data);
    } catch (e) {
      return null;
    }
    return 1;
  }

  removePopup = () => {
    const popup = document.getElementById('reservationPopup');
    const closeBtn = document.getElementById('reservation__closeBtn');

    popup.addEventListener('click', (e) => {
      if (e.target.id === 'reservationPopup') popup.remove();
      document.body.classList.remove('popup-open');
    });

    closeBtn.addEventListener('click', () => {
      popup.remove();
      document.body.classList.remove('popup-open');
    });
  };

  renderPopup(data) {
    const res = data.meals[0];

    const id = res.idMeal;
    const thumb = res.strMealThumb;
    const name = res.strMeal;
    const category = res.strCategory;
    const area = res.strArea;
    const recipie = res.strSource;

    const popup = document.getElementById('reservation__data-content');
    this.removePopup();

    let html = `
    <img src='${thumb}' alt="Image of ${name}">
    <h2>${name}</h2>
    <div id='resPopup--dish-description'>
      <div class='rpdd-item'>
        <p>Category:</p>
        <p>${category}</p>
      </div>
      <div class='rpdd-item'>
        <p>Origin:</p>
        <p>${area}</p>
      </div>
      <div class='rpdd-item'>
        <a href='${recipie}' target="_blank">Recipie</a>
        <i class="fa-solid fa-arrow-up-right-from-square"></i>
      </div>
    </div>
    `;
    html += this.AddShowRes.renderForm();
    this.AddShowRes.getReservations(id);
    popup.insertAdjacentHTML('afterbegin', html);

    const form = document.getElementById('submit-reservation');
    form.addEventListener('submit', (e) => {
      const formData = new FormData(e.target);

      e.preventDefault();
      this.AddShowRes.submitForm(formData, e.target, id);
      form.reset();
    });
  }

  openPopup = (e) => {
    document.body.classList.add('popup-open');
    document.body.insertAdjacentHTML('afterbegin', `
    <div id='reservationPopup'>
      <div id='reservation-p__container'>
        <div id='reservation__container'>
            <div id='reservation__closeBtn'>
              <div id='r__cBtn-lines'></div>
            </div>
            <div id='reservation__data-content'></div>
          </div>
      </div>
    </div>
    `);

    this.apidata(e.target.dataset.name);
    this.removePopup();
  };

  init = () => {
    const reservationBtn = document.querySelectorAll('.reservation-btn');

    reservationBtn.forEach((el) => {
      el.addEventListener('click', this.openPopup);
    });
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reservations);


/***/ }),

/***/ "./src/modules/comment.js":
/*!********************************!*\
  !*** ./src/modules/comment.js ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

const apicom = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NeJSPpMrADKWN3Hg0NY2/comments';
const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=vegetarian';
const doet = (b) => {
  fetch(`${apicom}?item_id=item${b}`)
    .then((res) => res.json())
    .then((data) => {
      const newData = data;
      for (let i = 0; i < newData.length; i += 1) {
        newData[i].index = i;
      }
      const html = newData
        .map((user) => `<div class='comments'>
           <p class='creation_date${user.index}'>${user.creation_date}</p>
           <p class='username'>${user.username}</p>
           <p class='comment'>${user.comment}</p>
           </div>`)
        .join('');
      const html2 = `<form>
         <h3 class='form-title'>Add your comment</h3>
         <input type='text' name='username' class='name' required placeholder='Your name'>
         <textarea class='textarea' id='' cols='2' rows='4' placeholder='Your Comment'></textarea>
         <button type='submit' id= 'submit${b}' >Submit</button>
         </form>`;
      const comment = document.querySelector('.comment-pop');
      const main = document.querySelector('main');
      const footer = document.querySelector('footer');
      main.classList.add('blur');
      footer.classList.add('blur');
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          const mealName = data.meals[b].strMeal;
          const imgUrl = data.meals[b].strMealThumb;
          const img = `<button id= '${b}x' class='x'>X</button><img class = 'coImage' src='${imgUrl}' alt='Food'><h2 class= "mealnames">${mealName}</h2>`;
          comment.insertAdjacentHTML('afterbegin', img);
          const xb = document.querySelector('.x');
          xb.addEventListener('click', () => {
            window.location.reload();
          });
        });
      comment.insertAdjacentHTML('afterbegin', html);
      comment.insertAdjacentHTML('afterbegin', html2);
      comment.style.disply = 'block';
      const submit = document.querySelector(`#submit${b}`);
      submit.addEventListener('click', (e) => {
        e.preventDefault();
        const Username = document.querySelector('.name');
        const Comment = document.querySelector('.textarea');
        const inputComment = {
          item_id: `item${b}`,
          username: Username.value,
          comment: Comment.value,
        };

        if (Username.value === '' || Comment.value === '') {
          alert('Add comment');
        } else {
          fetch(`${apicom}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputComment),
          }).then((res) => {
            console.log(res.json());
          });
          const comment = document.querySelector('.comments');
          comment.insertAdjacentHTML(
            'beforebegin',
            `<div class='comments'>
        <p class='creation_date0'>2022-06-22</p>
        <p class='username'>${Username.value}</p>
        <p class='comment'>${Comment.value}</p>
        </div>`,
          );
          data.length += 1;
          const mealnames = document.querySelector('.comment-length');
          mealnames.innerHTML = `<h2 class= 'comment-length'>Comments(${data.length})</h2>`;
          Username.value = '';
          Comment.value = '';
        }
      });
    });
};

exports.doet = doet;


/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ commentCounter)
/* harmony export */ });
const apicom = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NeJSPpMrADKWN3Hg0NY2/comments';
async function commentCounter(b) {
  const melsname = document.querySelector('.comment-pop');

  try {
    const response = await fetch(`${apicom}?item_id=item${b}`, { method: 'get' });
    const data = await response.json();
    const counternum = `<h2 class= 'comment-length'>Comments(${data.length})</h2>`;
    console.log(data.length);
    melsname.insertAdjacentHTML('beforeend', counternum);
    return data;
  } catch (e) {
    console.log(e);
    throw Error(e);
  }
}


/***/ }),

/***/ "./src/modules/itemsCounter.js":
/*!*************************************!*\
  !*** ./src/modules/itemsCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const itemsCounter = (counter, link) => {
  link.innerHTML = `Home(${counter})`;
  return counter;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemsCounter);


/***/ }),

/***/ "./src/modules/itemslist.js":
/*!**********************************!*\
  !*** ./src/modules/itemslist.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.js */ "./src/modules/comment.js");
/* harmony import */ var _nOfLikes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nOfLikes.js */ "./src/modules/nOfLikes.js");
/* harmony import */ var _itemsCounter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./itemsCounter.js */ "./src/modules/itemsCounter.js");
/* harmony import */ var _Reservations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Reservations.js */ "./src/modules/Reservations.js");
/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./commentCounter.js */ "./src/modules/commentCounter.js");






const recipeCards = document.querySelector('.recipe-cards');
const reservationBtn = new _Reservations_js__WEBPACK_IMPORTED_MODULE_3__["default"]();
const recipeCount = document.querySelector('.item-count');
const displayCards = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=vegetarian',
  );
  const data = await response.json();

  for (let i = 0; i < 20; i += 1) {
    data.meals[i].idMeal = i;
  }
  const file = data.meals;
  const newArray = file.filter((Objects) => Objects.idMeal <= 11);
  let html = '';
  newArray.forEach((meal) => {
    html += `<div class='card' id='${meal.idMeal}'>
               <div class='card-img'>
                   <img src='${meal.strMealThumb}' alt='${meal.strMeal}'>
               </div>
               <div class='card-info'>
                   <h2>${meal.strMeal}</h2>
                   <ul>
                       <li><button id=${meal.idMeal}  class='comment-btn' type='button'>Comments</button></li>
                       <li><button class='like-btn'><i class='fa-regular fa-heart'></i><span class='like-count'>0</span></button></li>
                     
                   </ul>
                   <ul>
                   <li><button class='reservation-btn' data-name='${meal.strMeal}' type='button'>Reservations</button></li>
                   </ul>
                  
               </div>
             </div>`;
    recipeCards.innerHTML = html;
  });
  recipeCards.addEventListener('click', async (e) => {
    if (e.target.classList.contains('comment-btn')) {
      const b = e.target.id;
      await (0,_comment_js__WEBPACK_IMPORTED_MODULE_0__.doet)(b);
      (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_4__["default"])(b);
    }
  });
  (0,_nOfLikes_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)();
  (0,_nOfLikes_js__WEBPACK_IMPORTED_MODULE_1__.likeInteraction)();
  (0,_itemsCounter_js__WEBPACK_IMPORTED_MODULE_2__["default"])(newArray.length, recipeCount);
  reservationBtn.init();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayCards);


/***/ }),

/***/ "./src/modules/nOfLikes.js":
/*!*********************************!*\
  !*** ./src/modules/nOfLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLikes": () => (/* binding */ getLikes),
/* harmony export */   "likeInteraction": () => (/* binding */ likeInteraction)
/* harmony export */ });
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/NeJSPpMrADKWN3Hg0NY2/likes';
const getLikes = async () => {
  const cards = document.querySelectorAll('.card');
  const likeCount = document.querySelectorAll('.like-count');
  await fetch(url)
    .then((response) => response.json())
    .then((json) => {
      cards.forEach((card, index) => {
        json.forEach((item) => {
          if (item.item_id === card.id) {
            likeCount[index].innerHTML = item.likes;
          }
        });
      });
    });
};
const likeInteraction = async () => {
  const likeBtns = document.querySelectorAll('.like-btn');
  const likeBtnIcon = document.querySelectorAll('.fa-heart');
  const likeBtnCount = document.querySelectorAll('.like-count');
  const cards = document.querySelectorAll('.card');
  likeBtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      likeBtnIcon[index].classList.remove('fa-regular');
      likeBtnIcon[index].classList.add('fa-solid');
      likeBtnCount[index].innerHTML = Number(likeBtnCount[index].innerHTML) + 1;
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          item_id: cards[index].id,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    });
  });
};



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxjQUFjLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFdBQVcsWUFBWSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZ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b0VBQW9FLGFBQWE7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlEQUFJO0FBQ2hCLE1BQU0sOERBQWM7QUFDcEI7QUFDQSxHQUFHO0FBQ0gsRUFBRSxzREFBUTtBQUNWLEVBQUUsNkRBQWU7QUFDakIsRUFBRSw0REFBWTtBQUNkO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RENUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNkNBQTZDO0FBQzdDLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9BZGRTaG93UmVzZXJ2YXRpb25zLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9Gb3JtVmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvUmVzZXJ2YXRpb25zLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb21tZW50LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb21tZW50Q291bnRlci5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL21vZHVsZXMvaXRlbXNDb3VudGVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9pdGVtc2xpc3QuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL25PZkxpa2VzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q291cmdldHRlJmZhbWlseT1QYXRyaWNrK0hhbmQmZmFtaWx5PVBvcHBpbnM6aXRhbCx3Z2h0QDAsMTAwOzAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNjAwOzAsNzAwOzAsODAwOzAsOTAwOzEsMTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNjAwOzEsNzAwOzEsODAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tdGV4dC1jb2xvci0xOiAjZjBmOWNmO1xcbiAgLS10ZXh0LWNvbG9yLTI6ICMyMzgzMmI7XFxuICAtLXRleHQtY29sb3ItMzogIzljYjQ0NTtcXG4gIC0tYmctY29sb3I6ICNmMGY5Y2Y7XFxuICAtLXBvcHVwLWJsdXI6IDIwcHg7XFxufVxcblxcbioge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBmb250LWZhbWlseTogXFxcIlBvcHBpbnNcXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5odG1sIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXG59XFxuXFxubmF2IC5vcGVuTWVudSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW46IDIwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogIzIzNjEyODtcXG59XFxuXFxubmF2IC5uYXYtaXRlbXMge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgei1pbmRleDogMTA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgYmFja2dyb3VuZDogcmdiYSgyMzUsIDI1NSwgMTYxLCAwLjkpO1xcbn1cXG5cXG5uYXYgLmNsb3NlTWVudSB7XFxuICBmb250LXNpemU6IDEuN3JlbTtcXG59XFxuXFxubmF2IC5uYXYtaXRlbXMgLmNsb3NlTWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDIwcHg7XFxuICByaWdodDogMjBweDtcXG59XFxuXFxuLml0ZW0gYSB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5hdi1saW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbjogMCAwLjc1cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcbiAgY29sb3I6IHJnYig0OSwgNDksIDQ5KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBvcGFjaXR5OiAwLjk7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4ubmF2LWxpbms6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogN3B4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvci0zKTtcXG4gIGJvdHRvbTogLTEwcHg7XFxuICBsZWZ0OiAwO1xcbiAgei1pbmRleDogLTE7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLm5hdi1saW5rOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLTIpO1xcbn1cXG5cXG4ubmF2LWxpbms6aG92ZXI6OmFmdGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnRhZ2xpbmUgaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItMik7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LWZhbWlseTogXFxcIkNvdXJnZXR0ZVxcXCIsIGN1cnNpdmU7XFxufVxcblxcbi5yZWNpcGUtY2FyZHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxufVxcblxcbi5jYXJkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbjogNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJveC1zaGFkb3c6XFxuICAgIHJnYig1MCA1MCA5MyAvIDI1JSkgMCA2cHggMTJweCAtMnB4LFxcbiAgICByZ2IoMCAwIDAgLyAzMCUpIDAgM3B4IDdweCAtM3B4O1xcbn1cXG5cXG4uY2FyZC1pbWcgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG59XFxuXFxuLmNhcmQtaW5mbyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmNhcmQtaW5mbyBoMixcXG4jcmVzZXJ2YXRpb25Qb3B1cCBoMiB7XFxuICBmb250LWZhbWlseTogXFxcIlBhdHJpY2sgSGFuZFxcXCIsIGN1cnNpdmU7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci0zKTtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxufVxcblxcbi5jYXJkLWluZm8gdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi10b3A6IDUlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuLmNvbW1lbnQtYnRuLFxcbi5yZXNlcnZhdGlvbi1idG4ge1xcbiAgcGFkZGluZzogMyUgNyU7XFxuICBmb250LWZhbWlseTogXFxcIlBhdHJpY2sgSGFuZFxcXCIsIGN1cnNpdmU7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLTEpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC1jb2xvci0yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0LWNvbG9yLTIpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogMC4zcztcXG59XFxuXFxuLmNvbW1lbnQtYnRuOmhvdmVyLFxcbi5yZXNlcnZhdGlvbi1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIzNjEyODtcXG59XFxuXFxuLmxpa2UtYnRuIHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci0zKTtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5saWtlLWJ0biAuZmEtaGVhcnQge1xcbiAgbWFyZ2luLXJpZ2h0OiAwLjc1cmVtO1xcbn1cXG5cXG4uY29tbWVudHMtY29udGFpbmVyIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubm8tc2Nyb2xsIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5mb290ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhlMDczO1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmZvb3RlciBhIHtcXG4gIGNvbG9yOiAjMmE3NzAzO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLmZvb3RlciBhOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIsIDEuMik7XFxufVxcblxcbmJvZHkucG9wdXAtb3BlbiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgei1pbmRleDogOTU7XFxufVxcblxcbiNibHVyLWJnIHtcXG4gIHotaW5kZXg6IDk5O1xcbn1cXG5cXG4jcmVzZXJ2YXRpb25Qb3B1cCB7XFxuICAtLW5hdi1saW5lLWhlaWdodDogM3B4O1xcbiAgLS1uYXYtbGluZS1jb2xvcjogcmdiKDg4LCA4OCwgODgpO1xcblxcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB6LWluZGV4OiAxMDA7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3Jlc2VydmF0aW9uRm9ybUVyciB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4jcmVzZXJ2YXRpb25fX2NvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXG4gIGJveC1zaGFkb3c6XFxuICAgIHJnYig1MCA1MCA5MyAvIDI1JSkgMCA2cHggMTJweCAtMnB4LFxcbiAgICByZ2IoMCAwIDAgLyAzMCUpIDAgM3B4IDdweCAtM3B4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbiNyZXNlcnZhdGlvbl9fY2xvc2VCdG4ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDQzcHg7XFxufVxcblxcbiNyX19jQnRuLWxpbmVzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTJweDtcXG4gIHdpZHRoOiA4MCU7XFxuICBoZWlnaHQ6IHZhcigtLW5hdi1saW5lLWhlaWdodCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXYtbGluZS1jb2xvcik7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XFxufVxcblxcbiNyX19jQnRuLWxpbmVzOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHRvcDogMDtcXG4gIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogdmFyKC0tbmF2LWxpbmUtaGVpZ2h0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1saW5lLWNvbG9yKTtcXG59XFxuXFxuI3Jlc2VydmF0aW9uX19kYXRhLWNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jcmVzZXJ2YXRpb25fX2RhdGEtY29udGVudCBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4jcmVzZXJ2YXRpb25fX2RhdGEtY29udGVudCBoMiB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5cXG4jcmVzZXJ2YXRpb24tcF9fY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogOTB2dztcXG5cXG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG5cXG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSAqL1xcbiAgaGVpZ2h0OiAtbW96LWZpdC1jb250ZW50O1xcbn1cXG5cXG4jcmVzUG9wdXAtLWRpc2gtZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbiNyZXNQb3B1cC0tZGlzaC1kZXNjcmlwdGlvbiAucnBkZC1pdGVtIHA6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNyZXNQb3B1cC0tZGlzaC1kZXNjcmlwdGlvbiAucnBkZC1pdGVtIHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbiNyZXNQb3B1cC0tZGlzaC1kZXNjcmlwdGlvbiBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLTIpO1xcbn1cXG5cXG4jc3VibWl0LXJlc2VydmF0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbiNzdWJtaXQtcmVzZXJ2YXRpb24gaDMge1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxufVxcblxcbiNzdWJtaXQtcmVzZXJ2YXRpb24gYnV0dG9uIHtcXG4gIG1pbi13aWR0aDogMTByZW07XFxufVxcblxcbi5yZXNQb3B1cEZvcm1JdGVtIGlucHV0LFxcbiNzdWJtaXQtcmVzZXJ2YXRpb24gYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5yZXNQb3B1cEZvcm1JdGVtIGlucHV0IHtcXG4gIG1hcmdpbi1ib3R0b206IDAuN3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1pbi13aWR0aDogMTdyZW07XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICBuYXYgLm9wZW5NZW51IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIG5hdiAubmF2LWl0ZW1zIC5jbG9zZU1lbnUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuXFxuICBuYXYgLm5hdi1pdGVtcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogM3JlbTtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMiU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gIH1cXG5cXG4gIC5pdGVtIGEge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuXFxuICAudGFnbGluZSBoMiB7XFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcbiAgfVxcblxcbiAgZm9vdGVyIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICB9XFxuXFxuICAjcmVzZXJ2YXRpb24tcF9fY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA1MHZ3O1xcbiAgfVxcblxcbiAgI3Jlc1BvcHVwLS1kaXNoLWRlc2NyaXB0aW9uIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gICNyZXNQb3B1cC0tZGlzaC1kZXNjcmlwdGlvbiAucnBkZC1pdGVtIHtcXG4gICAgbWFyZ2luOiAwIDFyZW07XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIH1cXG5cXG4gICNyZXNQb3B1cC0tZGlzaC1kZXNjcmlwdGlvbiAucnBkZC1pdGVtOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAtMXJlbTtcXG4gIH1cXG5cXG4gICNyZXNQb3B1cC0tZGlzaC1kZXNjcmlwdGlvbiAucnBkZC1pdGVtOmxhc3Qtb2YtdHlwZTo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xcbiAgfVxcbn1cXG5cXG4uYmx1ciB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcblxcbi5icmluZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLmNvbW1lbnQtcG9wIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMTAlIDEwJSAyNSUgMjUlO1xcbiAgei1pbmRleDogMTA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE3LCAyMTMsIDIxMyk7XFxuICB3aWR0aDogNTAlO1xcbiAgZ2FwOiAwLjc1cmVtO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjYyNXJlbTtcXG59XFxuXFxuLngge1xcbiAgbWFyZ2luLWxlZnQ6IDg3JTtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgbWFyZ2luLXRvcDogNiU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5jb21tZW50cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxLjI1cmVtO1xcbn1cXG5cXG4uY29JbWFnZSB7XFxuICB3aWR0aDogNzAlO1xcbiAgbWFyZ2luLXRvcDogMS44NzVyZW07XFxuICBib3JkZXItcmFkaXVzOiA1JTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSx1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7RUFDdEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7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Qjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixNQUFNO0lBQ04sUUFBUTtJQUNSLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsUUFBUTtFQUNSLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsb0NBQW9DO0VBQ3BDLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db3VyZ2V0dGUmZmFtaWx5PVBhdHJpY2srSGFuZCZmYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuOnJvb3Qge1xcbiAgLS10ZXh0LWNvbG9yLTE6ICNmMGY5Y2Y7XFxuICAtLXRleHQtY29sb3ItMjogIzIzODMyYjtcXG4gIC0tdGV4dC1jb2xvci0zOiAjOWNiNDQ1O1xcbiAgLS1iZy1jb2xvcjogI2YwZjljZjtcXG4gIC0tcG9wdXAtYmx1cjogMjBweDtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcblxcbmh0bWwge1xcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcbn1cXG5cXG5uYXYgLm9wZW5NZW51IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIG1hcmdpbjogMjBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjMjM2MTI4O1xcbn1cXG5cXG5uYXYgLm5hdi1pdGVtcyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB6LWluZGV4OiAxMDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzNSwgMjU1LCAxNjEsIDAuOSk7XFxufVxcblxcbm5hdiAuY2xvc2VNZW51IHtcXG4gIGZvbnQtc2l6ZTogMS43cmVtO1xcbn1cXG5cXG5uYXYgLm5hdi1pdGVtcyAuY2xvc2VNZW51IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjBweDtcXG4gIHJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uaXRlbSBhIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmF2LWxpbmsge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiAwIDAuNzVyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxuICBjb2xvcjogcmdiKDQ5LCA0OSwgNDkpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIG9wYWNpdHk6IDAuOTtcXG4gIHRyYW5zaXRpb246IDAuM3M7XFxufVxcblxcbi5uYXYtbGluazo6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNTAlO1xcbiAgaGVpZ2h0OiA3cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLTMpO1xcbiAgYm90dG9tOiAtMTBweDtcXG4gIGxlZnQ6IDA7XFxuICB6LWluZGV4OiAtMTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4ubmF2LWxpbms6aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItMik7XFxufVxcblxcbi5uYXYtbGluazpob3Zlcjo6YWZ0ZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udGFnbGluZSBoMiB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvci0yKTtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgbWFyZ2luLXRvcDogNSU7XFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiQ291cmdldHRlXFxcIiwgY3Vyc2l2ZTtcXG59XFxuXFxuLnJlY2lwZS1jYXJkcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMnJlbTtcXG59XFxuXFxuLmNhcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDMwMHB4O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luOiA0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbSAxcmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm94LXNoYWRvdzpcXG4gICAgcmdiKDUwIDUwIDkzIC8gMjUlKSAwIDZweCAxMnB4IC0ycHgsXFxuICAgIHJnYigwIDAgMCAvIDMwJSkgMCAzcHggN3B4IC0zcHg7XFxufVxcblxcbi5jYXJkLWltZyBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbn1cXG5cXG4uY2FyZC1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2FyZC1pbmZvIGgyLFxcbiNyZXNlcnZhdGlvblBvcHVwIGgyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGF0cmljayBIYW5kXFxcIiwgY3Vyc2l2ZTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLTMpO1xcbiAgZm9udC1zaXplOiAycmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXG59XFxuXFxuLmNhcmQtaW5mbyB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLXRvcDogNSU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uY29tbWVudC1idG4sXFxuLnJlc2VydmF0aW9uLWJ0biB7XFxuICBwYWRkaW5nOiAzJSA3JTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUGF0cmljayBIYW5kXFxcIiwgY3Vyc2l2ZTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItMSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLTIpO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRleHQtY29sb3ItMik7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4uY29tbWVudC1idG46aG92ZXIsXFxuLnJlc2VydmF0aW9uLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjM2MTI4O1xcbn1cXG5cXG4ubGlrZS1idG4ge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yLTMpO1xcbiAgZm9udC1zaXplOiAxLjdyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxpa2UtYnRuIC5mYS1oZWFydCB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XFxufVxcblxcbi5jb21tZW50cy1jb250YWluZXIge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5uby1zY3JvbGwge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmZvb3RlciB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjOGUwNzM7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uZm9vdGVyIGEge1xcbiAgY29sb3I6ICMyYTc3MDM7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4uZm9vdGVyIGE6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMiwgMS4yKTtcXG59XFxuXFxuYm9keS5wb3B1cC1vcGVuIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB6LWluZGV4OiA5NTtcXG59XFxuXFxuI2JsdXItYmcge1xcbiAgei1pbmRleDogOTk7XFxufVxcblxcbiNyZXNlcnZhdGlvblBvcHVwIHtcXG4gIC0tbmF2LWxpbmUtaGVpZ2h0OiAzcHg7XFxuICAtLW5hdi1saW5lLWNvbG9yOiByZ2IoODgsIDg4LCA4OCk7XFxuXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDEwMDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jcmVzZXJ2YXRpb25Gb3JtRXJyIHtcXG4gIGNvbG9yOiByZWQ7XFxufVxcblxcbiNyZXNlcnZhdGlvbl9fY29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm94LXNoYWRvdzpcXG4gICAgcmdiKDUwIDUwIDkzIC8gMjUlKSAwIDZweCAxMnB4IC0ycHgsXFxuICAgIHJnYigwIDAgMCAvIDMwJSkgMCAzcHggN3B4IC0zcHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuI3Jlc2VydmF0aW9uX19jbG9zZUJ0biB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogNTBweDtcXG4gIGhlaWdodDogNDNweDtcXG59XFxuXFxuI3JfX2NCdG4tbGluZXMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxMnB4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIGhlaWdodDogdmFyKC0tbmF2LWxpbmUtaGVpZ2h0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdi1saW5lLWNvbG9yKTtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG59XFxuXFxuI3JfX2NCdG4tbGluZXM6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgdG9wOiAwO1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiB2YXIoLS1uYXYtbGluZS1oZWlnaHQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2LWxpbmUtY29sb3IpO1xcbn1cXG5cXG4jcmVzZXJ2YXRpb25fX2RhdGEtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNyZXNlcnZhdGlvbl9fZGF0YS1jb250ZW50IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxufVxcblxcbiNyZXNlcnZhdGlvbl9fZGF0YS1jb250ZW50IGgyIHtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcblxcbiNyZXNlcnZhdGlvbi1wX19jb250YWluZXIge1xcbiAgbWF4LXdpZHRoOiA5MHZ3O1xcblxcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lICovXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcblxcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lICovXFxuICBoZWlnaHQ6IC1tb3otZml0LWNvbnRlbnQ7XFxufVxcblxcbiNyZXNQb3B1cC0tZGlzaC1kZXNjcmlwdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3Jlc1BvcHVwLS1kaXNoLWRlc2NyaXB0aW9uIC5ycGRkLWl0ZW0gcDpmaXJzdC1jaGlsZCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI3Jlc1BvcHVwLS1kaXNoLWRlc2NyaXB0aW9uIC5ycGRkLWl0ZW0ge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuI3Jlc1BvcHVwLS1kaXNoLWRlc2NyaXB0aW9uIGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IHZhcigtLXRleHQtY29sb3ItMik7XFxufVxcblxcbiNzdWJtaXQtcmVzZXJ2YXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuI3N1Ym1pdC1yZXNlcnZhdGlvbiBoMyB7XFxuICBtYXJnaW46IDFyZW0gMDtcXG59XFxuXFxuI3N1Ym1pdC1yZXNlcnZhdGlvbiBidXR0b24ge1xcbiAgbWluLXdpZHRoOiAxMHJlbTtcXG59XFxuXFxuLnJlc1BvcHVwRm9ybUl0ZW0gaW5wdXQsXFxuI3N1Ym1pdC1yZXNlcnZhdGlvbiBidXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLnJlc1BvcHVwRm9ybUl0ZW0gaW5wdXQge1xcbiAgbWFyZ2luLWJvdHRvbTogMC43cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWluLXdpZHRoOiAxN3JlbTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIG5hdiAub3Blbk1lbnUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgbmF2IC5uYXYtaXRlbXMgLmNsb3NlTWVudSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIG5hdiAubmF2LWl0ZW1zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAyJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgfVxcblxcbiAgLml0ZW0gYSB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gIH1cXG5cXG4gIC50YWdsaW5lIGgyIHtcXG4gICAgZm9udC1zaXplOiAzLjVyZW07XFxuICB9XFxuXFxuICBmb290ZXIge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gIH1cXG5cXG4gICNyZXNlcnZhdGlvbi1wX19jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDUwdnc7XFxuICB9XFxuXFxuICAjcmVzUG9wdXAtLWRpc2gtZGVzY3JpcHRpb24ge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgfVxcblxcbiAgI3Jlc1BvcHVwLS1kaXNoLWRlc2NyaXB0aW9uIC5ycGRkLWl0ZW0ge1xcbiAgICBtYXJnaW46IDAgMXJlbTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgfVxcblxcbiAgI3Jlc1BvcHVwLS1kaXNoLWRlc2NyaXB0aW9uIC5ycGRkLWl0ZW06OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB0b3A6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBtYXJnaW4tcmlnaHQ6IC0xcmVtO1xcbiAgfVxcblxcbiAgI3Jlc1BvcHVwLS1kaXNoLWRlc2NyaXB0aW9uIC5ycGRkLWl0ZW06bGFzdC1vZi10eXBlOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBib3JkZXItcmlnaHQ6IDA7XFxuICB9XFxufVxcblxcbi5ibHVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuXFxuLmJyaW5nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uY29tbWVudC1wb3Age1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAxMCUgMTAlIDI1JSAyNSU7XFxuICB6LWluZGV4OiAxMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTcsIDIxMywgMjEzKTtcXG4gIHdpZHRoOiA1MCU7XFxuICBnYXA6IDAuNzVyZW07XFxufVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNjI1cmVtO1xcbn1cXG5cXG4ueCB7XFxuICBtYXJnaW4tbGVmdDogODclO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBtYXJnaW4tdG9wOiA2JTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLmNvbW1lbnRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEuMjVyZW07XFxufVxcblxcbi5jb0ltYWdlIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBtYXJnaW4tdG9wOiAxLjg3NXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZXMvc3R5bGUuY3NzJztcbmltcG9ydCBkaXNwbGF5Q2FyZHMgZnJvbSAnLi9tb2R1bGVzL2l0ZW1zbGlzdC5qcyc7XG5cbmRpc3BsYXlDYXJkcygpO1xuIiwiaW1wb3J0IEZvcm1WYWxpZGF0aW9uIGZyb20gJy4vRm9ybVZhbGlkYXRpb24uanMnO1xuXG5jbGFzcyBBZGRTaG93UmVzZXJ2YXRpb25zIHtcbiAgbGluayA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy9OZUpTUHBNckFES1dOM0hnME5ZMi9yZXNlcnZhdGlvbnMnO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0aW9uKCk7XG4gIH1cblxuICByZW5kZXJGb3JtID0gKCkgPT4gYDxmb3JtIGlkPSdzdWJtaXQtcmVzZXJ2YXRpb24nPlxuICAgICAgPGgzPkFkZCBhIHJlc2VydmF0aW9uPC9oMz5cbiAgICAgIDxkaXYgY2xhc3M9XCJyZXNQb3B1cEZvcm1JdGVtXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyByZXF1aXJlZCBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPSdZb3VyIG5hbWUnPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicmVzUG9wdXBGb3JtSXRlbVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcmVxdWlyZWQgbmFtZT1cInJlcy1wb3B1cC1zdGFydC1kYXRlXCIgcGxhY2Vob2xkZXI9J1N0YXJ0IGRhdGUnIG9uZm9jdXM9XCIodGhpcy50eXBlID0gJ2RhdGUnKVwiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicmVzUG9wdXBGb3JtSXRlbVwiPlxuICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgcmVxdWlyZWQgbmFtZT1cInJlcy1wb3B1cC1lbmQtZGF0ZVwiIHBsYWNlaG9sZGVyPSdFbmQgZGF0ZScgb25mb2N1cz1cIih0aGlzLnR5cGUgPSAnZGF0ZScpXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0Jz5SZXNlcnZlPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICAgIDxoMyBjbGFzcz0ncmVzZXJ2YXRpb25zLWxpc3QtaGVhZGVyJz5cbiAgICAgIFJlc2VydmF0aW9uc1xuICAgICAgPHNwYW4gaWQ9XCJyZXNlcnZhdGlvbnMtY291bnRlclwiPjwvc3Bhbj5cbiAgICA8L2gzPlxuICAgIDxkaXYgaWQ9J3Jlc2VydmF0aW9ucy1saXN0Jz5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG5cbiAgcmVuZGVyUmVzZXJ2YXRpb25zID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9ucy1saXN0Jyk7XG4gICAgbGV0IGh0bWwgPSBgXG4gICAgYDtcblxuICAgIGRhdGEucmV2ZXJzZSgpLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBodG1sICs9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJyZXNlcnZhdGlvbi1saXN0LWl0ZW1cIj5cbiAgICAgICAgPHN0cm9uZz4ke2VsLmRhdGVfc3RhcnR9PC9zdHJvbmc+IC0gPHN0cm9uZz4ke2VsLmRhdGVfZW5kfTwvc3Ryb25nPiBieSA8c3Ryb25nPiR7ZWwudXNlcm5hbWV9PC9zdHJvbmc+XG4gICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICB9KTtcbiAgICBsaXN0Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGh0bWwpO1xuICB9O1xuXG4gIGFzeW5jIHJlc2VydmF0aW9uc0NvdW50ZXIoaWQpIHtcbiAgICBjb25zdCBjb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9ucy1jb3VudGVyJyk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0aGlzLmxpbmt9P2l0ZW1faWQ9JHtpZH1gLCB7IG1ldGhvZDogJ2dldCcgfSk7XG5cbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb3VudGVyLnRleHRDb250ZW50ID0gYCgke2RhdGEubGVuZ3RofSlgO1xuICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0UmVzZXJ2YXRpb25zKGlkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5saW5rfT9pdGVtX2lkPSR7aWR9YCwgeyBtZXRob2Q6ICdnZXQnIH0pO1xuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB0aGlzLnJlbmRlclJlc2VydmF0aW9ucyhkYXRhKTtcbiAgICAgICAgdGhpcy5yZXNlcnZhdGlvbnNDb3VudGVyKGlkKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aHJvdyBFcnJvcihlKTtcbiAgICB9XG4gIH1cblxuICBpbnZhbGlkRm9ybURhdGEgPSAoZm9ybSkgPT4ge1xuICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9uRm9ybUVycicpKSB7XG4gICAgICBmb3JtLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCBgPGRpdiBpZD1cInJlc2VydmF0aW9uRm9ybUVyclwiPkludmFsaWQgdmFsdWVzPC9kaXY+XG4gICAgICBgKTtcbiAgICB9XG4gIH07XG5cbiAgYXN5bmMgc2VuZERhdGEoe1xuICAgIGlkLCBuYW1lLCBzdGFydCwgZW5kLFxuICB9KSB7XG4gICAgY29uc3QgZGF0YUpzb24gPSB7XG4gICAgICBpdGVtX2lkOiBpZCxcbiAgICAgIHVzZXJuYW1lOiBuYW1lLFxuICAgICAgZGF0ZV9zdGFydDogc3RhcnQsXG4gICAgICBkYXRlX2VuZDogZW5kLFxuICAgIH07XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt0aGlzLmxpbmt9YCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YUpzb24pLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgIHRoaXMucmVuZGVyUmVzZXJ2YXRpb25zKFtkYXRhSnNvbl0pO1xuICAgICAgICB0aGlzLnJlc2VydmF0aW9uc0NvdW50ZXIoaWQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IEVycm9yKGUpO1xuICAgIH1cbiAgfVxuXG4gIHN1Ym1pdEZvcm0oZGF0YSwgZm9ybUVsZW1lbnQsIGlkKSB7XG4gICAgY29uc3QgbmFtZSA9IGRhdGEuZ2V0KCduYW1lJyk7XG4gICAgY29uc3Qgc3RhcnQgPSBkYXRhLmdldCgncmVzLXBvcHVwLXN0YXJ0LWRhdGUnKTtcbiAgICBjb25zdCBlbmQgPSBkYXRhLmdldCgncmVzLXBvcHVwLWVuZC1kYXRlJyk7XG5cbiAgICBpZiAoIXRoaXMudmFsaWRhdG9yLnZhbGlkYXRlVGV4dChuYW1lKVxuICAgICAgfHwgIXRoaXMudmFsaWRhdG9yLnZhbGlkYXRlRGF0ZShzdGFydClcbiAgICAgIHx8ICF0aGlzLnZhbGlkYXRvci52YWxpZGF0ZURhdGUoZW5kKSkge1xuICAgICAgdGhpcy5pbnZhbGlkRm9ybURhdGEoZm9ybUVsZW1lbnQpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IGZvcm1FcnIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2YXRpb25Gb3JtRXJyJyk7XG4gICAgaWYgKGZvcm1FcnIgIT09IG51bGwpIHtcbiAgICAgIGZvcm1FcnIucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zZW5kRGF0YSh7XG4gICAgICBpZCwgbmFtZSwgc3RhcnQsIGVuZCxcbiAgICB9KTtcblxuICAgIHJldHVybiAxO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFNob3dSZXNlcnZhdGlvbnM7XG4iLCJjbGFzcyBGb3JtVmFsaWRhdGlvbiB7XG4gIHZhbGlkYXRlVGV4dCA9IChkYXRhKSA9PiB7XG4gICAgY29uc3QgdGV4dFJlZ2V4ID0gL15bQS1aYS16XSskLztcbiAgICBpZiAodGV4dFJlZ2V4LnRlc3QoZGF0YSkpIHJldHVybiAnT0snO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICB2YWxpZGF0ZURhdGUgPSAoZGF0YSkgPT4ge1xuICAgIGNvbnN0IGRhdGVSZWdleCA9IC9eXFxkezIsNH0tXFxkezIsNH0tXFxkezIsNH0kLztcblxuICAgIGlmIChkYXRlUmVnZXgudGVzdChkYXRhKSkgcmV0dXJuICdPSyc7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBGb3JtVmFsaWRhdGlvbjtcbiIsImltcG9ydCBBZGRTaG93UmVzZXJ2YXRpb25zIGZyb20gJy4vQWRkU2hvd1Jlc2VydmF0aW9ucy5qcyc7XG5cbmNsYXNzIFJlc2VydmF0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuQWRkU2hvd1JlcyA9IG5ldyBBZGRTaG93UmVzZXJ2YXRpb25zKCk7XG4gIH1cblxuICBhc3luYyBhcGlkYXRhKGRpc2hOYW1lKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL3NlYXJjaC5waHA/cz0ke2Rpc2hOYW1lfWApO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICB0aGlzLnJlbmRlclBvcHVwKGRhdGEpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHJlbW92ZVBvcHVwID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc2VydmF0aW9uUG9wdXAnKTtcbiAgICBjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXNlcnZhdGlvbl9fY2xvc2VCdG4nKTtcblxuICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ3Jlc2VydmF0aW9uUG9wdXAnKSBwb3B1cC5yZW1vdmUoKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXAtb3BlbicpO1xuICAgIH0pO1xuXG4gICAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBwb3B1cC5yZW1vdmUoKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXAtb3BlbicpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlclBvcHVwKGRhdGEpIHtcbiAgICBjb25zdCByZXMgPSBkYXRhLm1lYWxzWzBdO1xuXG4gICAgY29uc3QgaWQgPSByZXMuaWRNZWFsO1xuICAgIGNvbnN0IHRodW1iID0gcmVzLnN0ck1lYWxUaHVtYjtcbiAgICBjb25zdCBuYW1lID0gcmVzLnN0ck1lYWw7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSByZXMuc3RyQ2F0ZWdvcnk7XG4gICAgY29uc3QgYXJlYSA9IHJlcy5zdHJBcmVhO1xuICAgIGNvbnN0IHJlY2lwaWUgPSByZXMuc3RyU291cmNlO1xuXG4gICAgY29uc3QgcG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzZXJ2YXRpb25fX2RhdGEtY29udGVudCcpO1xuICAgIHRoaXMucmVtb3ZlUG9wdXAoKTtcblxuICAgIGxldCBodG1sID0gYFxuICAgIDxpbWcgc3JjPScke3RodW1ifScgYWx0PVwiSW1hZ2Ugb2YgJHtuYW1lfVwiPlxuICAgIDxoMj4ke25hbWV9PC9oMj5cbiAgICA8ZGl2IGlkPSdyZXNQb3B1cC0tZGlzaC1kZXNjcmlwdGlvbic+XG4gICAgICA8ZGl2IGNsYXNzPSdycGRkLWl0ZW0nPlxuICAgICAgICA8cD5DYXRlZ29yeTo8L3A+XG4gICAgICAgIDxwPiR7Y2F0ZWdvcnl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPSdycGRkLWl0ZW0nPlxuICAgICAgICA8cD5PcmlnaW46PC9wPlxuICAgICAgICA8cD4ke2FyZWF9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPSdycGRkLWl0ZW0nPlxuICAgICAgICA8YSBocmVmPScke3JlY2lwaWV9JyB0YXJnZXQ9XCJfYmxhbmtcIj5SZWNpcGllPC9hPlxuICAgICAgICA8aSBjbGFzcz1cImZhLXNvbGlkIGZhLWFycm93LXVwLXJpZ2h0LWZyb20tc3F1YXJlXCI+PC9pPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgYDtcbiAgICBodG1sICs9IHRoaXMuQWRkU2hvd1Jlcy5yZW5kZXJGb3JtKCk7XG4gICAgdGhpcy5BZGRTaG93UmVzLmdldFJlc2VydmF0aW9ucyhpZCk7XG4gICAgcG9wdXAuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgaHRtbCk7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1yZXNlcnZhdGlvbicpO1xuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0KTtcblxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5BZGRTaG93UmVzLnN1Ym1pdEZvcm0oZm9ybURhdGEsIGUudGFyZ2V0LCBpZCk7XG4gICAgICBmb3JtLnJlc2V0KCk7XG4gICAgfSk7XG4gIH1cblxuICBvcGVuUG9wdXAgPSAoZSkgPT4ge1xuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgncG9wdXAtb3BlbicpO1xuICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYFxuICAgIDxkaXYgaWQ9J3Jlc2VydmF0aW9uUG9wdXAnPlxuICAgICAgPGRpdiBpZD0ncmVzZXJ2YXRpb24tcF9fY29udGFpbmVyJz5cbiAgICAgICAgPGRpdiBpZD0ncmVzZXJ2YXRpb25fX2NvbnRhaW5lcic+XG4gICAgICAgICAgICA8ZGl2IGlkPSdyZXNlcnZhdGlvbl9fY2xvc2VCdG4nPlxuICAgICAgICAgICAgICA8ZGl2IGlkPSdyX19jQnRuLWxpbmVzJz48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBpZD0ncmVzZXJ2YXRpb25fX2RhdGEtY29udGVudCc+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBgKTtcblxuICAgIHRoaXMuYXBpZGF0YShlLnRhcmdldC5kYXRhc2V0Lm5hbWUpO1xuICAgIHRoaXMucmVtb3ZlUG9wdXAoKTtcbiAgfTtcblxuICBpbml0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHJlc2VydmF0aW9uQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc2VydmF0aW9uLWJ0bicpO1xuXG4gICAgcmVzZXJ2YXRpb25CdG4uZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vcGVuUG9wdXApO1xuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBSZXNlcnZhdGlvbnM7XG4iLCJjb25zdCBhcGljb20gPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvTmVKU1BwTXJBREtXTjNIZzBOWTIvY29tbWVudHMnO1xuY29uc3QgdXJsID0gJ2h0dHBzOi8vd3d3LnRoZW1lYWxkYi5jb20vYXBpL2pzb24vdjEvMS9maWx0ZXIucGhwP2M9dmVnZXRhcmlhbic7XG5jb25zdCBkb2V0ID0gKGIpID0+IHtcbiAgZmV0Y2goYCR7YXBpY29tfT9pdGVtX2lkPWl0ZW0ke2J9YClcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBuZXdEYXRhID0gZGF0YTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3RGF0YS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBuZXdEYXRhW2ldLmluZGV4ID0gaTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGh0bWwgPSBuZXdEYXRhXG4gICAgICAgIC5tYXAoKHVzZXIpID0+IGA8ZGl2IGNsYXNzPSdjb21tZW50cyc+XG4gICAgICAgICAgIDxwIGNsYXNzPSdjcmVhdGlvbl9kYXRlJHt1c2VyLmluZGV4fSc+JHt1c2VyLmNyZWF0aW9uX2RhdGV9PC9wPlxuICAgICAgICAgICA8cCBjbGFzcz0ndXNlcm5hbWUnPiR7dXNlci51c2VybmFtZX08L3A+XG4gICAgICAgICAgIDxwIGNsYXNzPSdjb21tZW50Jz4ke3VzZXIuY29tbWVudH08L3A+XG4gICAgICAgICAgIDwvZGl2PmApXG4gICAgICAgIC5qb2luKCcnKTtcbiAgICAgIGNvbnN0IGh0bWwyID0gYDxmb3JtPlxuICAgICAgICAgPGgzIGNsYXNzPSdmb3JtLXRpdGxlJz5BZGQgeW91ciBjb21tZW50PC9oMz5cbiAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBuYW1lPSd1c2VybmFtZScgY2xhc3M9J25hbWUnIHJlcXVpcmVkIHBsYWNlaG9sZGVyPSdZb3VyIG5hbWUnPlxuICAgICAgICAgPHRleHRhcmVhIGNsYXNzPSd0ZXh0YXJlYScgaWQ9JycgY29scz0nMicgcm93cz0nNCcgcGxhY2Vob2xkZXI9J1lvdXIgQ29tbWVudCc+PC90ZXh0YXJlYT5cbiAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBpZD0gJ3N1Ym1pdCR7Yn0nID5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgIDwvZm9ybT5gO1xuICAgICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LXBvcCcpO1xuICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpO1xuICAgICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdibHVyJyk7XG4gICAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnYmx1cicpO1xuICAgICAgZmV0Y2godXJsKVxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGNvbnN0IG1lYWxOYW1lID0gZGF0YS5tZWFsc1tiXS5zdHJNZWFsO1xuICAgICAgICAgIGNvbnN0IGltZ1VybCA9IGRhdGEubWVhbHNbYl0uc3RyTWVhbFRodW1iO1xuICAgICAgICAgIGNvbnN0IGltZyA9IGA8YnV0dG9uIGlkPSAnJHtifXgnIGNsYXNzPSd4Jz5YPC9idXR0b24+PGltZyBjbGFzcyA9ICdjb0ltYWdlJyBzcmM9JyR7aW1nVXJsfScgYWx0PSdGb29kJz48aDIgY2xhc3M9IFwibWVhbG5hbWVzXCI+JHttZWFsTmFtZX08L2gyPmA7XG4gICAgICAgICAgY29tbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBpbWcpO1xuICAgICAgICAgIGNvbnN0IHhiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLngnKTtcbiAgICAgICAgICB4Yi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICBjb21tZW50Lmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGh0bWwpO1xuICAgICAgY29tbWVudC5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBodG1sMik7XG4gICAgICBjb21tZW50LnN0eWxlLmRpc3BseSA9ICdibG9jayc7XG4gICAgICBjb25zdCBzdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjc3VibWl0JHtifWApO1xuICAgICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBVc2VybmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJyk7XG4gICAgICAgIGNvbnN0IENvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGV4dGFyZWEnKTtcbiAgICAgICAgY29uc3QgaW5wdXRDb21tZW50ID0ge1xuICAgICAgICAgIGl0ZW1faWQ6IGBpdGVtJHtifWAsXG4gICAgICAgICAgdXNlcm5hbWU6IFVzZXJuYW1lLnZhbHVlLFxuICAgICAgICAgIGNvbW1lbnQ6IENvbW1lbnQudmFsdWUsXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKFVzZXJuYW1lLnZhbHVlID09PSAnJyB8fCBDb21tZW50LnZhbHVlID09PSAnJykge1xuICAgICAgICAgIGFsZXJ0KCdBZGQgY29tbWVudCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZldGNoKGAke2FwaWNvbX1gLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShpbnB1dENvbW1lbnQpLFxuICAgICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmpzb24oKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY29uc3QgY29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cycpO1xuICAgICAgICAgIGNvbW1lbnQuaW5zZXJ0QWRqYWNlbnRIVE1MKFxuICAgICAgICAgICAgJ2JlZm9yZWJlZ2luJyxcbiAgICAgICAgICAgIGA8ZGl2IGNsYXNzPSdjb21tZW50cyc+XG4gICAgICAgIDxwIGNsYXNzPSdjcmVhdGlvbl9kYXRlMCc+MjAyMi0wNi0yMjwvcD5cbiAgICAgICAgPHAgY2xhc3M9J3VzZXJuYW1lJz4ke1VzZXJuYW1lLnZhbHVlfTwvcD5cbiAgICAgICAgPHAgY2xhc3M9J2NvbW1lbnQnPiR7Q29tbWVudC52YWx1ZX08L3A+XG4gICAgICAgIDwvZGl2PmAsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBkYXRhLmxlbmd0aCArPSAxO1xuICAgICAgICAgIGNvbnN0IG1lYWxuYW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWxlbmd0aCcpO1xuICAgICAgICAgIG1lYWxuYW1lcy5pbm5lckhUTUwgPSBgPGgyIGNsYXNzPSAnY29tbWVudC1sZW5ndGgnPkNvbW1lbnRzKCR7ZGF0YS5sZW5ndGh9KTwvaDI+YDtcbiAgICAgICAgICBVc2VybmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICAgIENvbW1lbnQudmFsdWUgPSAnJztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG59O1xuXG5leHBvcnRzLmRvZXQgPSBkb2V0O1xuIiwiY29uc3QgYXBpY29tID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL05lSlNQcE1yQURLV04zSGcwTlkyL2NvbW1lbnRzJztcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNvbW1lbnRDb3VudGVyKGIpIHtcbiAgY29uc3QgbWVsc25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tbWVudC1wb3AnKTtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7YXBpY29tfT9pdGVtX2lkPWl0ZW0ke2J9YCwgeyBtZXRob2Q6ICdnZXQnIH0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc3QgY291bnRlcm51bSA9IGA8aDIgY2xhc3M9ICdjb21tZW50LWxlbmd0aCc+Q29tbWVudHMoJHtkYXRhLmxlbmd0aH0pPC9oMj5gO1xuICAgIGNvbnNvbGUubG9nKGRhdGEubGVuZ3RoKTtcbiAgICBtZWxzbmFtZS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGNvdW50ZXJudW0pO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5sb2coZSk7XG4gICAgdGhyb3cgRXJyb3IoZSk7XG4gIH1cbn1cbiIsImNvbnN0IGl0ZW1zQ291bnRlciA9IChjb3VudGVyLCBsaW5rKSA9PiB7XG4gIGxpbmsuaW5uZXJIVE1MID0gYEhvbWUoJHtjb3VudGVyfSlgO1xuICByZXR1cm4gY291bnRlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGl0ZW1zQ291bnRlcjtcbiIsImltcG9ydCB7IGRvZXQgfSBmcm9tICcuL2NvbW1lbnQuanMnO1xuaW1wb3J0IHsgZ2V0TGlrZXMsIGxpa2VJbnRlcmFjdGlvbiB9IGZyb20gJy4vbk9mTGlrZXMuanMnO1xuaW1wb3J0IGl0ZW1zQ291bnRlciBmcm9tICcuL2l0ZW1zQ291bnRlci5qcyc7XG5pbXBvcnQgUmVzZXJ2YXRpb25zIGZyb20gJy4vUmVzZXJ2YXRpb25zLmpzJztcbmltcG9ydCBjb21tZW50Q291bnRlciBmcm9tICcuL2NvbW1lbnRDb3VudGVyLmpzJztcblxuY29uc3QgcmVjaXBlQ2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjaXBlLWNhcmRzJyk7XG5jb25zdCByZXNlcnZhdGlvbkJ0biA9IG5ldyBSZXNlcnZhdGlvbnMoKTtcbmNvbnN0IHJlY2lwZUNvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tY291bnQnKTtcbmNvbnN0IGRpc3BsYXlDYXJkcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAnaHR0cHM6Ly93d3cudGhlbWVhbGRiLmNvbS9hcGkvanNvbi92MS8xL2ZpbHRlci5waHA/Yz12ZWdldGFyaWFuJyxcbiAgKTtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDIwOyBpICs9IDEpIHtcbiAgICBkYXRhLm1lYWxzW2ldLmlkTWVhbCA9IGk7XG4gIH1cbiAgY29uc3QgZmlsZSA9IGRhdGEubWVhbHM7XG4gIGNvbnN0IG5ld0FycmF5ID0gZmlsZS5maWx0ZXIoKE9iamVjdHMpID0+IE9iamVjdHMuaWRNZWFsIDw9IDExKTtcbiAgbGV0IGh0bWwgPSAnJztcbiAgbmV3QXJyYXkuZm9yRWFjaCgobWVhbCkgPT4ge1xuICAgIGh0bWwgKz0gYDxkaXYgY2xhc3M9J2NhcmQnIGlkPScke21lYWwuaWRNZWFsfSc+XG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdjYXJkLWltZyc+XG4gICAgICAgICAgICAgICAgICAgPGltZyBzcmM9JyR7bWVhbC5zdHJNZWFsVGh1bWJ9JyBhbHQ9JyR7bWVhbC5zdHJNZWFsfSc+XG4gICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NhcmQtaW5mbyc+XG4gICAgICAgICAgICAgICAgICAgPGgyPiR7bWVhbC5zdHJNZWFsfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGJ1dHRvbiBpZD0ke21lYWwuaWRNZWFsfSAgY2xhc3M9J2NvbW1lbnQtYnRuJyB0eXBlPSdidXR0b24nPkNvbW1lbnRzPC9idXR0b24+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxidXR0b24gY2xhc3M9J2xpa2UtYnRuJz48aSBjbGFzcz0nZmEtcmVndWxhciBmYS1oZWFydCc+PC9pPjxzcGFuIGNsYXNzPSdsaWtlLWNvdW50Jz4wPC9zcGFuPjwvYnV0dG9uPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICA8bGk+PGJ1dHRvbiBjbGFzcz0ncmVzZXJ2YXRpb24tYnRuJyBkYXRhLW5hbWU9JyR7bWVhbC5zdHJNZWFsfScgdHlwZT0nYnV0dG9uJz5SZXNlcnZhdGlvbnM8L2J1dHRvbj48L2xpPlxuICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgcmVjaXBlQ2FyZHMuaW5uZXJIVE1MID0gaHRtbDtcbiAgfSk7XG4gIHJlY2lwZUNhcmRzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb21tZW50LWJ0bicpKSB7XG4gICAgICBjb25zdCBiID0gZS50YXJnZXQuaWQ7XG4gICAgICBhd2FpdCBkb2V0KGIpO1xuICAgICAgY29tbWVudENvdW50ZXIoYik7XG4gICAgfVxuICB9KTtcbiAgZ2V0TGlrZXMoKTtcbiAgbGlrZUludGVyYWN0aW9uKCk7XG4gIGl0ZW1zQ291bnRlcihuZXdBcnJheS5sZW5ndGgsIHJlY2lwZUNvdW50KTtcbiAgcmVzZXJ2YXRpb25CdG4uaW5pdCgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUNhcmRzO1xuIiwiY29uc3QgdXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzL05lSlNQcE1yQURLV04zSGcwTlkyL2xpa2VzJztcbmNvbnN0IGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJyk7XG4gIGNvbnN0IGxpa2VDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlLWNvdW50Jyk7XG4gIGF3YWl0IGZldGNoKHVybClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgY2FyZHMuZm9yRWFjaCgoY2FyZCwgaW5kZXgpID0+IHtcbiAgICAgICAganNvbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgaWYgKGl0ZW0uaXRlbV9pZCA9PT0gY2FyZC5pZCkge1xuICAgICAgICAgICAgbGlrZUNvdW50W2luZGV4XS5pbm5lckhUTUwgPSBpdGVtLmxpa2VzO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbn07XG5jb25zdCBsaWtlSW50ZXJhY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGxpa2VCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpa2UtYnRuJyk7XG4gIGNvbnN0IGxpa2VCdG5JY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhLWhlYXJ0Jyk7XG4gIGNvbnN0IGxpa2VCdG5Db3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlLWNvdW50Jyk7XG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKTtcbiAgbGlrZUJ0bnMuZm9yRWFjaCgoYnRuLCBpbmRleCkgPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGxpa2VCdG5JY29uW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKCdmYS1yZWd1bGFyJyk7XG4gICAgICBsaWtlQnRuSWNvbltpbmRleF0uY2xhc3NMaXN0LmFkZCgnZmEtc29saWQnKTtcbiAgICAgIGxpa2VCdG5Db3VudFtpbmRleF0uaW5uZXJIVE1MID0gTnVtYmVyKGxpa2VCdG5Db3VudFtpbmRleF0uaW5uZXJIVE1MKSArIDE7XG4gICAgICBmZXRjaCh1cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBpdGVtX2lkOiBjYXJkc1tpbmRleF0uaWQsXG4gICAgICAgIH0pLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn07XG5leHBvcnQgeyBnZXRMaWtlcywgbGlrZUludGVyYWN0aW9uIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=