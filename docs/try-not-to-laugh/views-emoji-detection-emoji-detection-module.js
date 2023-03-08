(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-emoji-detection-emoji-detection-module"],{

/***/ "2Jm2":
/*!*******************************************************************************!*\
  !*** ./src/app/features/home/views/emoji-detection/emoji-detection.module.ts ***!
  \*******************************************************************************/
/*! exports provided: EmojiDetectionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiDetectionModule", function() { return EmojiDetectionModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _emoji_detection_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emoji-detection.component */ "LmSG");
/* harmony import */ var _emoji_detection_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emoji-detection-routing.module */ "rStz");
/* harmony import */ var src_app_shared_pipe_humanize_time_humanize_time_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pipe/humanize-time/humanize-time.module */ "8Vwt");
/* harmony import */ var src_app_shared_components_camera_detection_camera_detection_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/camera-detection/camera-detection.module */ "v6By");
/* harmony import */ var src_app_shared_components_emoji_emoji_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/emoji/emoji.module */ "xD2x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class EmojiDetectionModule {
}
EmojiDetectionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: EmojiDetectionModule });
EmojiDetectionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function EmojiDetectionModule_Factory(t) { return new (t || EmojiDetectionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _emoji_detection_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmojiDetectionRoutingModule"],
            src_app_shared_pipe_humanize_time_humanize_time_module__WEBPACK_IMPORTED_MODULE_3__["HumanizeTimeModule"],
            src_app_shared_components_camera_detection_camera_detection_module__WEBPACK_IMPORTED_MODULE_4__["CameraDetectionModule"],
            src_app_shared_components_emoji_emoji_module__WEBPACK_IMPORTED_MODULE_5__["EmojiModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](EmojiDetectionModule, { declarations: [_emoji_detection_component__WEBPACK_IMPORTED_MODULE_1__["EmojiDetectionComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _emoji_detection_routing_module__WEBPACK_IMPORTED_MODULE_2__["EmojiDetectionRoutingModule"],
        src_app_shared_pipe_humanize_time_humanize_time_module__WEBPACK_IMPORTED_MODULE_3__["HumanizeTimeModule"],
        src_app_shared_components_camera_detection_camera_detection_module__WEBPACK_IMPORTED_MODULE_4__["CameraDetectionModule"],
        src_app_shared_components_emoji_emoji_module__WEBPACK_IMPORTED_MODULE_5__["EmojiModule"]], exports: [_emoji_detection_component__WEBPACK_IMPORTED_MODULE_1__["EmojiDetectionComponent"]] }); })();


/***/ }),

/***/ "8GYb":
/*!************************************************************!*\
  !*** ./src/app/shared/components/emoji/emoji.component.ts ***!
  \************************************************************/
/*! exports provided: EmojiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiComponent", function() { return EmojiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function EmojiComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("highlight", ctx_r0.emojiHighlight === "like");
} }
function EmojiComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("highlight", ctx_r1.emojiHighlight === "love");
} }
function EmojiComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("highlight", ctx_r2.emojiHighlight === "haha");
} }
function EmojiComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("highlight", ctx_r3.emojiHighlight === "yay");
} }
function EmojiComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("highlight", ctx_r4.emojiHighlight === "wow");
} }
function EmojiComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("highlight", ctx_r5.emojiHighlight === "sad");
} }
function EmojiComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("highlight", ctx_r6.emojiHighlight === "angry");
} }
class EmojiComponent {
    constructor() {
        this.emojiEnabled = null;
        this.emojiHighlight = null;
    }
}
EmojiComponent.ɵfac = function EmojiComponent_Factory(t) { return new (t || EmojiComponent)(); };
EmojiComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmojiComponent, selectors: [["app-emoji"]], inputs: { emojiEnabled: "emojiEnabled", emojiHighlight: "emojiHighlight" }, decls: 7, vars: 7, consts: [["class", "emoji emoji--like", 3, "highlight", 4, "ngIf"], ["class", "emoji emoji--love", 3, "highlight", 4, "ngIf"], ["class", "emoji emoji--haha", 3, "highlight", 4, "ngIf"], ["class", "emoji emoji--yay", 3, "highlight", 4, "ngIf"], ["class", "emoji emoji--wow", 3, "highlight", 4, "ngIf"], ["class", "emoji emoji--sad", 3, "highlight", 4, "ngIf"], ["class", "emoji emoji--angry", 3, "highlight", 4, "ngIf"], [1, "emoji", "emoji--like"], [1, "emoji__hand"], [1, "emoji__thumb"], [1, "emoji", "emoji--love"], [1, "emoji__heart"], [1, "emoji", "emoji--haha"], [1, "emoji__face"], [1, "emoji__eyes"], [1, "emoji__mouth"], [1, "emoji__tongue"], [1, "emoji", "emoji--yay"], [1, "emoji__eyebrows"], [1, "emoji", "emoji--wow"], [1, "emoji", "emoji--sad"], [1, "emoji", "emoji--angry"]], template: function EmojiComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EmojiComponent_div_0_Template, 3, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmojiComponent_div_1_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmojiComponent_div_2_Template, 5, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmojiComponent_div_3_Template, 4, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmojiComponent_div_4_Template, 5, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EmojiComponent_div_5_Template, 5, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmojiComponent_div_6_Template, 5, 2, "div", 6);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emojiEnabled == null ? null : ctx.emojiEnabled.like);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emojiEnabled == null ? null : ctx.emojiEnabled.love);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emojiEnabled == null ? null : ctx.emojiEnabled.haha);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emojiEnabled == null ? null : ctx.emojiEnabled.yay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emojiEnabled == null ? null : ctx.emojiEnabled.wow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emojiEnabled == null ? null : ctx.emojiEnabled.sad);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.emojiEnabled == null ? null : ctx.emojiEnabled.angry);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  margin: 0;\n  width: 100%;\n  max-width: 100%;\n  text-align: center;\n  position: absolute;\n  bottom: 2px;\n  left: 50%;\n  transform: translate(-50%, 2%);\n}\n\n.emoji[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  margin: 15px 15px 40px;\n  background: #FFDA6A;\n  display: inline-block;\n  border-radius: 50%;\n  position: relative;\n}\n\n.emoji[_ngcontent-%COMP%]:after {\n  position: absolute;\n  bottom: -40px;\n  font-size: 18px;\n  width: 60px;\n  left: calc(50% - 30px);\n  color: #8A8A8A;\n}\n\n.emoji.highlight[_ngcontent-%COMP%] {\n  transform: scale(1.5, 1.5);\n}\n\n.emoji__face[_ngcontent-%COMP%], .emoji__eyebrows[_ngcontent-%COMP%], .emoji__eyes[_ngcontent-%COMP%], .emoji__mouth[_ngcontent-%COMP%], .emoji__tongue[_ngcontent-%COMP%], .emoji__heart[_ngcontent-%COMP%], .emoji__hand[_ngcontent-%COMP%], .emoji__thumb[_ngcontent-%COMP%] {\n  position: absolute;\n}\n\n.emoji__face[_ngcontent-%COMP%]:before, .emoji__face[_ngcontent-%COMP%]:after, .emoji__eyebrows[_ngcontent-%COMP%]:before, .emoji__eyebrows[_ngcontent-%COMP%]:after, .emoji__eyes[_ngcontent-%COMP%]:before, .emoji__eyes[_ngcontent-%COMP%]:after, .emoji__mouth[_ngcontent-%COMP%]:before, .emoji__mouth[_ngcontent-%COMP%]:after, .emoji__tongue[_ngcontent-%COMP%]:before, .emoji__tongue[_ngcontent-%COMP%]:after, .emoji__heart[_ngcontent-%COMP%]:before, .emoji__heart[_ngcontent-%COMP%]:after, .emoji__hand[_ngcontent-%COMP%]:before, .emoji__hand[_ngcontent-%COMP%]:after, .emoji__thumb[_ngcontent-%COMP%]:before, .emoji__thumb[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n}\n\n.emoji__face[_ngcontent-%COMP%] {\n  width: inherit;\n  height: inherit;\n}\n\n.emoji--like[_ngcontent-%COMP%] {\n  background: #548DFF;\n}\n\n.emoji--like[_ngcontent-%COMP%]:after {\n  content: \"Like\";\n}\n\n.emoji--like[_ngcontent-%COMP%]   .emoji__hand[_ngcontent-%COMP%] {\n  left: 25px;\n  bottom: 30px;\n  width: 20px;\n  height: 40px;\n  background: #FFFFFF;\n  border-radius: 5px;\n  z-index: 0;\n  animation: hands-up 2s linear infinite;\n}\n\n.emoji--like[_ngcontent-%COMP%]   .emoji__hand[_ngcontent-%COMP%]:before {\n  left: 25px;\n  bottom: 5px;\n  width: 40px;\n  background: inherit;\n  height: 10px;\n  border-radius: 2px 10px 10px 2px;\n  box-shadow: 1px -9px 0 1px #FFFFFF, 2px -19px 0 2px #FFFFFF, 3px -29px 0 3px #FFFFFF;\n}\n\n.emoji--like[_ngcontent-%COMP%]   .emoji__thumb[_ngcontent-%COMP%] {\n  border-bottom: 20px solid #FFFFFF;\n  border-left: 20px solid transparent;\n  top: -25px;\n  right: -25px;\n  z-index: 2;\n  transform: rotate(5deg);\n  transform-origin: 0% 100%;\n  animation: thumbs-up 2s linear infinite;\n}\n\n.emoji--like[_ngcontent-%COMP%]   .emoji__thumb[_ngcontent-%COMP%]:before {\n  border-radius: 50% 50% 0 0;\n  background: #FFFFFF;\n  width: 10px;\n  height: 12px;\n  left: -10px;\n  top: -8px;\n  transform: rotate(-15deg);\n  transform-origin: 100% 100%;\n  box-shadow: -1px 4px 0 -1px #FFFFFF;\n}\n\n.emoji--love[_ngcontent-%COMP%] {\n  background: #F55064;\n}\n\n.emoji--love[_ngcontent-%COMP%]:after {\n  content: \"Love\";\n}\n\n.emoji--love[_ngcontent-%COMP%]   .emoji__heart[_ngcontent-%COMP%] {\n  left: calc(50% - 40px);\n  top: calc(50% - 40px);\n  width: 80px;\n  height: 80px;\n  animation: heart-beat 1s linear infinite alternate;\n}\n\n.emoji--love[_ngcontent-%COMP%]   .emoji__heart[_ngcontent-%COMP%]:before, .emoji--love[_ngcontent-%COMP%]   .emoji__heart[_ngcontent-%COMP%]:after {\n  left: calc(50% - 20px);\n  top: calc(50% - 32px);\n  width: 40px;\n  height: 64px;\n  background: #FFFFFF;\n  border-radius: 20px 20px 0 0;\n}\n\n.emoji--love[_ngcontent-%COMP%]   .emoji__heart[_ngcontent-%COMP%]:before {\n  transform: translate(20px) rotate(-45deg);\n  transform-origin: 0 100%;\n}\n\n.emoji--love[_ngcontent-%COMP%]   .emoji__heart[_ngcontent-%COMP%]:after {\n  transform: translate(-20px) rotate(45deg);\n  transform-origin: 100% 100%;\n}\n\n.emoji--haha[_ngcontent-%COMP%]:after {\n  content: \"Haha\";\n}\n\n.emoji--haha[_ngcontent-%COMP%]   .emoji__face[_ngcontent-%COMP%] {\n  animation: haha-face 2s linear infinite;\n}\n\n.emoji--haha[_ngcontent-%COMP%]   .emoji__eyes[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 6px;\n  border-radius: 2px;\n  left: calc(50% - 13px);\n  top: 35px;\n  transform: rotate(20deg);\n  background: transparent;\n  box-shadow: -25px 5px 0 0 #000000, 25px -5px 0 0 #000000;\n}\n\n.emoji--haha[_ngcontent-%COMP%]   .emoji__eyes[_ngcontent-%COMP%]:after {\n  left: 0;\n  top: 0;\n  width: 26px;\n  height: 6px;\n  border-radius: 2px;\n  transform: rotate(-40deg);\n  background: transparent;\n  box-shadow: -25px -5px 0 0 #000000, 25px 5px 0 0 #000000;\n}\n\n.emoji--haha[_ngcontent-%COMP%]   .emoji__mouth[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 40px;\n  left: calc(50% - 40px);\n  top: 50%;\n  background: #000000;\n  border-radius: 0 0 40px 40px;\n  overflow: hidden;\n  z-index: 1;\n  animation: haha-mouth 2s linear infinite;\n}\n\n.emoji--haha[_ngcontent-%COMP%]   .emoji__tongue[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 30px;\n  background: #F55064;\n  left: calc(50% - 35px);\n  bottom: -10px;\n  border-radius: 50%;\n}\n\n.emoji--yay[_ngcontent-%COMP%]:after {\n  content: \"Yay\";\n  animation: yay-reverse 1s linear infinite;\n}\n\n.emoji--yay[_ngcontent-%COMP%]   .emoji__face[_ngcontent-%COMP%] {\n  animation: yay 1s linear infinite alternate;\n}\n\n.emoji--yay[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%] {\n  left: calc(50% - 3px);\n  top: 30px;\n  height: 6px;\n  width: 6px;\n  border-radius: 50%;\n  background: transparent;\n  box-shadow: -6px 0 0 0 #000000, -36px 0 0 0px #000000, 6px 0 0 0 #000000, 36px 0 0 0px #000000;\n}\n\n.emoji--yay[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:before, .emoji--yay[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:after {\n  width: 36px;\n  height: 18px;\n  border-radius: 60px 60px 0 0;\n  background: transparent;\n  border: 6px solid black;\n  box-sizing: border-box;\n  border-bottom: 0;\n  bottom: 3px;\n  left: calc(50% - 18px);\n}\n\n.emoji--yay[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:before {\n  margin-left: -21px;\n}\n\n.emoji--yay[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:after {\n  margin-left: 21px;\n}\n\n.emoji--yay[_ngcontent-%COMP%]   .emoji__mouth[_ngcontent-%COMP%] {\n  top: 60px;\n  background: transparent;\n  left: 50%;\n}\n\n.emoji--yay[_ngcontent-%COMP%]   .emoji__mouth[_ngcontent-%COMP%]:after {\n  width: 80px;\n  height: 80px;\n  left: calc(50% - 40px);\n  top: -75px;\n  border-radius: 50%;\n  background: transparent;\n  border: 6px solid #000000;\n  box-sizing: border-box;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  border-right-color: transparent;\n  z-index: 1;\n}\n\n.emoji--yay[_ngcontent-%COMP%]   .emoji__mouth[_ngcontent-%COMP%]:before {\n  width: 6px;\n  height: 6px;\n  background: transparent;\n  border-radius: 50%;\n  bottom: 5px;\n  left: calc(50% - 3px);\n  box-shadow: -25px 0 0 0 #000000, 25px 0 0 0 #000000, -35px -2px 30px 10px #D5234C, 35px -2px 30px 10px #D5234C;\n}\n\n.emoji--wow[_ngcontent-%COMP%]:after {\n  content: \"Wow\";\n}\n\n.emoji--wow[_ngcontent-%COMP%]   .emoji__face[_ngcontent-%COMP%] {\n  animation: wow-face 3s linear infinite;\n}\n\n.emoji--wow[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%] {\n  left: calc(50% - 3px);\n  height: 6px;\n  width: 6px;\n  border-radius: 50%;\n  background: transparent;\n  box-shadow: -18px 0 0 0 #000000, -33px 0 0 0 #000000, 18px 0 0 0 #000000, 33px 0 0 0 #000000;\n  animation: wow-brow 3s linear infinite;\n}\n\n.emoji--wow[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:before, .emoji--wow[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:after {\n  width: 24px;\n  height: 20px;\n  border: 6px solid #000000;\n  box-sizing: border-box;\n  border-radius: 50%;\n  border-bottom-color: transparent;\n  border-left-color: transparent;\n  border-right-color: transparent;\n  top: -3px;\n  left: calc(50% - 12px);\n}\n\n.emoji--wow[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:before {\n  margin-left: -25px;\n}\n\n.emoji--wow[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:after {\n  margin-left: 25px;\n}\n\n.emoji--wow[_ngcontent-%COMP%]   .emoji__eyes[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 24px;\n  left: calc(50% - 8px);\n  top: 35px;\n  border-radius: 50%;\n  background: transparent;\n  box-shadow: 25px 0 0 0 #000000, -25px 0 0 0 #000000;\n}\n\n.emoji--wow[_ngcontent-%COMP%]   .emoji__mouth[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 45px;\n  left: calc(50% - 15px);\n  top: 50%;\n  border-radius: 50%;\n  background: #000000;\n  animation: wow-mouth 3s linear infinite;\n}\n\n.emoji--sad[_ngcontent-%COMP%]:after {\n  content: \"Sad\";\n}\n\n.emoji--sad[_ngcontent-%COMP%]   .emoji__face[_ngcontent-%COMP%] {\n  animation: sad-face 2s ease-in infinite;\n}\n\n.emoji--sad[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%] {\n  left: calc(50% - 3px);\n  top: 35px;\n  height: 6px;\n  width: 6px;\n  border-radius: 50%;\n  background: transparent;\n  box-shadow: -40px 9px 0 0 #000000, -25px 0 0 0 #000000, 25px 0 0 0 #000000, 40px 9px 0 0 #000000;\n}\n\n.emoji--sad[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:before, .emoji--sad[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:after {\n  width: 30px;\n  height: 20px;\n  border: 6px solid #000000;\n  box-sizing: border-box;\n  border-radius: 50%;\n  border-bottom-color: transparent;\n  border-left-color: transparent;\n  border-right-color: transparent;\n  top: 2px;\n  left: calc(50% - 15px);\n}\n\n.emoji--sad[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:before {\n  margin-left: -30px;\n  transform: rotate(-30deg);\n}\n\n.emoji--sad[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:after {\n  margin-left: 30px;\n  transform: rotate(30deg);\n}\n\n.emoji--sad[_ngcontent-%COMP%]   .emoji__eyes[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 16px;\n  left: calc(50% - 7px);\n  top: 50px;\n  border-radius: 50%;\n  background: transparent;\n  box-shadow: 25px 0 0 0 #000000, -25px 0 0 0 #000000;\n}\n\n.emoji--sad[_ngcontent-%COMP%]   .emoji__eyes[_ngcontent-%COMP%]:after {\n  background: #548DFF;\n  width: 12px;\n  height: 12px;\n  margin-left: 6px;\n  border-radius: 0 100% 40% 50%/0 50% 40% 100%;\n  transform-origin: 0% 0%;\n  animation: tear-drop 2s ease-in infinite;\n}\n\n.emoji--sad[_ngcontent-%COMP%]   .emoji__mouth[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 80px;\n  left: calc(50% - 30px);\n  top: 80px;\n  box-sizing: border-box;\n  border: 6px solid #000000;\n  border-radius: 50%;\n  border-bottom-color: transparent;\n  border-left-color: transparent;\n  border-right-color: transparent;\n  background: transparent;\n  animation: sad-mouth 2s ease-in infinite;\n}\n\n.emoji--sad[_ngcontent-%COMP%]   .emoji__mouth[_ngcontent-%COMP%]:after {\n  width: 6px;\n  height: 6px;\n  background: transparent;\n  border-radius: 50%;\n  top: 4px;\n  left: calc(50% - 3px);\n  box-shadow: -18px 0 0 0 #000000, 18px 0 0 0 #000000;\n}\n\n.emoji--angry[_ngcontent-%COMP%] {\n  background: linear-gradient(#D5234C -10%, #FFDA6A);\n  background-size: 100%;\n  animation: angry-color 2s ease-in infinite;\n}\n\n.emoji--angry[_ngcontent-%COMP%]:after {\n  content: \"Angry\";\n}\n\n.emoji--angry[_ngcontent-%COMP%]   .emoji__face[_ngcontent-%COMP%] {\n  animation: angry-face 2s ease-in infinite;\n}\n\n.emoji--angry[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%] {\n  left: calc(50% - 3px);\n  top: 55px;\n  height: 6px;\n  width: 6px;\n  border-radius: 50%;\n  background: transparent;\n  box-shadow: -44px 5px 0 0 #000000, -7px 16px 0 0 #000000, 7px 16px 0 0 #000000, 44px 5px 0 0 #000000;\n}\n\n.emoji--angry[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:before, .emoji--angry[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:after {\n  width: 50px;\n  height: 20px;\n  border: 6px solid #000000;\n  box-sizing: border-box;\n  border-radius: 50%;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  border-right-color: transparent;\n  top: 0;\n  left: calc(50% - 25px);\n}\n\n.emoji--angry[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:before {\n  margin-left: -25px;\n  transform: rotate(15deg);\n}\n\n.emoji--angry[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:after {\n  margin-left: 25px;\n  transform: rotate(-15deg);\n}\n\n.emoji--angry[_ngcontent-%COMP%]   .emoji__eyes[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  left: calc(50% - 6px);\n  top: 70px;\n  border-radius: 50%;\n  background: transparent;\n  box-shadow: 25px 0 0 0 #000000, -25px 0 0 0 #000000;\n}\n\n.emoji--angry[_ngcontent-%COMP%]   .emoji__mouth[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 18px;\n  left: calc(50% - 18px);\n  bottom: 15px;\n  background: #000000;\n  border-radius: 50%;\n  animation: angry-mouth 2s ease-in infinite;\n}\n\n@keyframes heart-beat {\n  25% {\n    transform: scale(1.1);\n  }\n  75% {\n    transform: scale(0.6);\n  }\n}\n\n@keyframes haha-face {\n  10%, 30%, 50% {\n    transform: translateY(25px);\n  }\n  20%, 40% {\n    transform: translateY(15px);\n  }\n  60%, 80% {\n    transform: translateY(0);\n  }\n  70%, 90% {\n    transform: translateY(-10px);\n  }\n}\n\n@keyframes haha-mouth {\n  10%, 30%, 50% {\n    transform: scale(0.6);\n    top: 45%;\n  }\n  20%, 40% {\n    transform: scale(0.8);\n    top: 45%;\n  }\n  60%, 80% {\n    transform: scale(1);\n    top: 50%;\n  }\n  70% {\n    transform: scale(1.2);\n    top: 50%;\n  }\n  90% {\n    transform: scale(1.1);\n    top: 50%;\n  }\n}\n\n@keyframes yay {\n  25% {\n    transform: rotate(-15deg);\n  }\n  75% {\n    transform: rotate(15deg);\n  }\n}\n\n@keyframes wow-face {\n  15%, 25% {\n    transform: rotate(20deg) translateX(-25px);\n  }\n  45%, 65% {\n    transform: rotate(-20deg) translateX(25px);\n  }\n  75%, 100% {\n    transform: rotate(0deg) translateX(0);\n  }\n}\n\n@keyframes wow-brow {\n  15%, 65% {\n    top: 25px;\n  }\n  75%, 100%, 0% {\n    top: 15px;\n  }\n}\n\n@keyframes wow-mouth {\n  10%, 30% {\n    width: 20px;\n    height: 20px;\n    left: calc(50% - 10px);\n  }\n  50%, 70% {\n    width: 30px;\n    height: 40px;\n    left: calc(50% - 15px);\n  }\n  75%, 100% {\n    height: 50px;\n  }\n}\n\n@keyframes sad-face {\n  25%, 35% {\n    top: -15px;\n  }\n  55%, 95% {\n    top: 10px;\n  }\n  100%, 0% {\n    top: 0;\n  }\n}\n\n@keyframes sad-mouth {\n  25%, 35% {\n    transform: scale(0.85);\n    top: 70px;\n  }\n  55%, 100%, 0% {\n    transform: scale(1);\n    top: 80px;\n  }\n}\n\n@keyframes tear-drop {\n  0%, 100% {\n    display: block;\n    left: 35px;\n    top: 15px;\n    transform: rotate(45deg) scale(0);\n  }\n  25% {\n    display: block;\n    left: 35px;\n    transform: rotate(45deg) scale(2);\n  }\n  49.9% {\n    display: block;\n    left: 35px;\n    top: 65px;\n    transform: rotate(45deg) scale(0);\n  }\n  50% {\n    display: block;\n    left: -35px;\n    top: 15px;\n    transform: rotate(45deg) scale(0);\n  }\n  75% {\n    display: block;\n    left: -35px;\n    transform: rotate(45deg) scale(2);\n  }\n  99.9% {\n    display: block;\n    left: -35px;\n    top: 65px;\n    transform: rotate(45deg) scale(0);\n  }\n}\n\n@keyframes hands-up {\n  25% {\n    transform: rotate(15deg);\n  }\n  50% {\n    transform: rotate(-15deg) translateY(-10px);\n  }\n  75%, 100% {\n    transform: rotate(0deg);\n  }\n}\n\n@keyframes thumbs-up {\n  25% {\n    transform: rotate(20deg);\n  }\n  50%, 100% {\n    transform: rotate(5deg);\n  }\n}\n\n@keyframes angry-color {\n  45%, 60% {\n    background-size: 250%;\n  }\n  85%, 100%, 0% {\n    background-size: 100%;\n  }\n}\n\n@keyframes angry-face {\n  35%, 60% {\n    transform: translateX(0) translateY(10px) scale(0.9);\n  }\n  40%, 50% {\n    transform: translateX(-5px) translateY(10px) scale(0.9);\n  }\n  45%, 55% {\n    transform: translateX(5px) translateY(10px) scale(0.9);\n  }\n}\n\n@keyframes angry-mouth {\n  25%, 50% {\n    height: 6px;\n    bottom: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZW1vamkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtBQVBKOztBQVVBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQXZCa0I7RUF3QmxCLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVBEOztBQVNDO0VBQ0Msa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGNBNUJpQjtBQXFCbkI7O0FBVUk7RUFDSSwwQkFBQTtBQVJSOztBQVlBO0VBQ0Msa0JBQUE7QUFURDs7QUFXQztFQUNDLGtCQUFBO0VBQ0EsV0FBQTtBQVRGOztBQWFBO0VBQ0MsY0FBQTtFQUNBLGVBQUE7QUFWRDs7QUFhQTtFQUNDLG1CQXhEa0I7QUE4Q25COztBQVlDO0VBQ0MsZUFBQTtBQVZGOztBQWFDO0VBQ0MsVUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQWhFa0I7RUFpRWxCLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO0FBWEY7O0FBYUU7RUFDQyxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLG9GQUFBO0FBWEg7O0FBZUM7RUFDQyxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVDQUFBO0FBYkY7O0FBZUU7RUFDQywwQkFBQTtFQUNBLG1CQTVGaUI7RUE2RmpCLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUNBQUE7QUFiSDs7QUFrQkE7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ZXNDb250ZW50IjpbIiRlbW9qaS1iYXNlLWNvbG9yOiAjRkZEQTZBO1xyXG4kZW1vamktbGlrZS1jb2xvcjogIzU0OERGRjtcclxuJGVtb2ppLWxvdmUtY29sb3I6ICNGNTUwNjQ7XHJcbiRlbW9qaS1hbmdyeS1jb2xvcjogI0Q1MjM0QztcclxuJGVtb2ppLXdoaXRlLWNvbG9yOiAjRkZGRkZGO1xyXG4kZW1vamktYmxhY2stY29sb3I6ICMwMDAwMDA7XHJcbiRlbW9qaS10ZXh0LWNvbG9yOiAjOEE4QThBO1xyXG5cclxuOmhvc3QgeyBcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAycHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAyJSk7XHJcbn1cclxuXHJcbi5lbW9qaSB7XHJcblx0d2lkdGg6IDEyMHB4O1xyXG5cdGhlaWdodDogMTIwcHg7XHJcblx0bWFyZ2luOiAxNXB4IDE1cHggNDBweDtcclxuXHRiYWNrZ3JvdW5kOiAkZW1vamktYmFzZS1jb2xvcjtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBcclxuXHQmOmFmdGVyIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGJvdHRvbTogLTQwcHg7XHJcblx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0XHR3aWR0aDogNjBweDtcclxuXHRcdGxlZnQ6IGNhbGMoNTAlIC0gMzBweCk7XHJcblx0XHRjb2xvcjogJGVtb2ppLXRleHQtY29sb3I7ICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgJi5oaWdobGlnaHQge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS41LCAxLjUpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZW1vamlfX2ZhY2UsIC5lbW9qaV9fZXllYnJvd3MsIC5lbW9qaV9fZXllcywgLmVtb2ppX19tb3V0aCwgLmVtb2ppX190b25ndWUsIC5lbW9qaV9faGVhcnQsIC5lbW9qaV9faGFuZCwgLmVtb2ppX190aHVtYiB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFxyXG5cdCY6YmVmb3JlLCAmOmFmdGVyIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGNvbnRlbnQ6ICcnO1xyXG5cdH0gIFxyXG59XHJcblxyXG4uZW1vamlfX2ZhY2Uge1xyXG5cdHdpZHRoOiBpbmhlcml0O1xyXG5cdGhlaWdodDogaW5oZXJpdDtcclxufVxyXG5cclxuLmVtb2ppLS1saWtlIHtcclxuXHRiYWNrZ3JvdW5kOiAkZW1vamktbGlrZS1jb2xvcjtcclxuICBcclxuXHQmOmFmdGVyIHtcclxuXHRcdGNvbnRlbnQ6ICdMaWtlJztcclxuXHR9XHJcblxyXG5cdC5lbW9qaV9faGFuZCB7XHJcblx0XHRsZWZ0OiAyNXB4O1xyXG5cdFx0Ym90dG9tOiAzMHB4O1xyXG5cdFx0d2lkdGg6IDIwcHg7XHJcblx0XHRoZWlnaHQ6IDQwcHg7IFxyXG5cdFx0YmFja2dyb3VuZDogJGVtb2ppLXdoaXRlLWNvbG9yO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdFx0ei1pbmRleDogMDtcclxuXHRcdGFuaW1hdGlvbjogaGFuZHMtdXAgMnMgbGluZWFyIGluZmluaXRlO1xyXG5cdFx0XHJcblx0XHQmOmJlZm9yZSB7XHJcblx0XHRcdGxlZnQ6IDI1cHg7XHJcblx0XHRcdGJvdHRvbTogNXB4O1xyXG5cdFx0XHR3aWR0aDogNDBweDtcclxuXHRcdFx0YmFja2dyb3VuZDogaW5oZXJpdDtcclxuXHRcdFx0aGVpZ2h0OiAxMHB4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAycHggMTBweCAxMHB4IDJweDtcclxuXHRcdFx0Ym94LXNoYWRvdzogMXB4IC05cHggMCAxcHggJGVtb2ppLXdoaXRlLWNvbG9yLCAycHggLTE5cHggMCAycHggJGVtb2ppLXdoaXRlLWNvbG9yLCAzcHggLTI5cHggMCAzcHggJGVtb2ppLXdoaXRlLWNvbG9yOyAgXHJcblx0XHR9ICBcclxuXHR9XHJcbiAgXHJcblx0LmVtb2ppX190aHVtYiB7XHJcblx0XHRib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkICRlbW9qaS13aGl0ZS1jb2xvcjtcclxuXHRcdGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG5cdFx0dG9wOiAtMjVweDtcclxuXHRcdHJpZ2h0OiAtMjVweDtcclxuXHRcdHotaW5kZXg6IDI7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcclxuXHRcdHRyYW5zZm9ybS1vcmlnaW46IDAlIDEwMCU7XHJcblx0XHRhbmltYXRpb246IHRodW1icy11cCAycyBsaW5lYXIgaW5maW5pdGU7XHJcblxyXG5cdFx0JjpiZWZvcmUge1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCUgNTAlIDAgMDtcclxuXHRcdFx0YmFja2dyb3VuZDogJGVtb2ppLXdoaXRlLWNvbG9yO1xyXG5cdFx0XHR3aWR0aDogMTBweDtcclxuXHRcdFx0aGVpZ2h0OiAxMnB4O1xyXG5cdFx0XHRsZWZ0OiAtMTBweDtcclxuXHRcdFx0dG9wOiAtOHB4O1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xyXG5cdFx0XHR0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XHJcblx0XHRcdGJveC1zaGFkb3c6IC0xcHggNHB4IDAgLTFweCAkZW1vamktd2hpdGUtY29sb3I7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4uZW1vamktLWxvdmUge1xyXG5cdGJhY2tncm91bmQ6ICRlbW9qaS1sb3ZlLWNvbG9yO1xyXG4gIFxyXG5cdCY6YWZ0ZXIge1xyXG5cdFx0Y29udGVudDogJ0xvdmUnO1xyXG5cdH1cclxuXHJcblx0LmVtb2ppX19oZWFydCB7XHJcblx0XHRsZWZ0OiBjYWxjKDUwJSAtIDQwcHgpO1xyXG5cdFx0dG9wOiBjYWxjKDUwJSAtIDQwcHgpO1xyXG5cdFx0d2lkdGg6IDgwcHg7XHJcblx0XHRoZWlnaHQ6IDgwcHg7XHJcblx0XHRhbmltYXRpb246IGhlYXJ0LWJlYXQgMXMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZTtcclxuXHJcblx0XHQmOmJlZm9yZSwgJjphZnRlciB7XHJcblx0XHRcdGxlZnQ6IGNhbGMoNTAlIC0gMjBweCk7XHJcblx0XHRcdHRvcDogY2FsYyg1MCUgLSAzMnB4KTtcclxuXHRcdFx0d2lkdGg6IDQwcHg7XHJcblx0XHRcdGhlaWdodDogNjRweDtcclxuXHRcdFx0YmFja2dyb3VuZDogJGVtb2ppLXdoaXRlLWNvbG9yO1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMCAwO1xyXG5cdFx0fVxyXG5cdCAgXHJcblx0XHQmOmJlZm9yZSB7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDIwcHgpIHJvdGF0ZSgtNDVkZWcpO1xyXG5cdFx0XHR0cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XHJcblx0XHR9XHJcblxyXG5cdFx0JjphZnRlciB7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yMHB4KSByb3RhdGUoNDVkZWcpO1xyXG5cdFx0XHR0cmFuc2Zvcm0tb3JpZ2luIDoxMDAlIDEwMCU7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4uZW1vamktLWhhaGEge1xyXG5cdCY6YWZ0ZXIge1xyXG5cdFx0Y29udGVudDogJ0hhaGEnO1xyXG5cdH1cclxuXHJcblx0LmVtb2ppX19mYWNlIHtcclxuXHRcdGFuaW1hdGlvbjogaGFoYS1mYWNlIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuXHR9XHJcbiAgXHJcblx0LmVtb2ppX19leWVzIHtcclxuXHRcdHdpZHRoOiAyNnB4O1xyXG5cdFx0aGVpZ2h0OiA2cHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAycHg7XHJcblx0XHRsZWZ0OiBjYWxjKDUwJSAtIDEzcHgpO1xyXG5cdFx0dG9wOiAzNXB4O1xyXG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xyXG5cdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0XHRib3gtc2hhZG93OiAtMjVweCA1cHggMCAwICRlbW9qaS1ibGFjay1jb2xvciwgIDI1cHggLTVweCAwIDAgJGVtb2ppLWJsYWNrLWNvbG9yO1xyXG5cdCAgXHJcblx0XHQmOmFmdGVyIHtcclxuXHRcdCAgbGVmdDogMDtcclxuXHRcdCAgdG9wOiAwO1xyXG5cdFx0ICB3aWR0aDogMjZweDtcclxuXHRcdCAgaGVpZ2h0OiA2cHg7XHJcblx0XHQgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHRcdCAgdHJhbnNmb3JtOiByb3RhdGUoLTQwZGVnKTtcclxuXHRcdCAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0XHQgIGJveC1zaGFkb3c6IC0yNXB4IC01cHggMCAwICRlbW9qaS1ibGFjay1jb2xvciwgIDI1cHggNXB4IDAgMCAkZW1vamktYmxhY2stY29sb3I7XHJcblx0XHR9XHJcblx0fVxyXG4gIFxyXG5cdC5lbW9qaV9fbW91dGgge1xyXG5cdFx0d2lkdGg6IDgwcHg7XHJcblx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHRsZWZ0OiBjYWxjKDUwJSAtIDQwcHgpO1xyXG5cdFx0dG9wOiA1MCU7XHJcblx0XHRiYWNrZ3JvdW5kOiAkZW1vamktYmxhY2stY29sb3I7XHJcblx0XHRib3JkZXItcmFkaXVzOiAwIDAgNDBweCA0MHB4O1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdHotaW5kZXg6IDE7ICBcclxuXHRcdGFuaW1hdGlvbjogaGFoYS1tb3V0aCAycyBsaW5lYXIgaW5maW5pdGU7XHJcblx0fVxyXG4gXHJcblx0LmVtb2ppX190b25ndWUge1xyXG5cdFx0d2lkdGg6IDcwcHg7XHJcblx0XHRoZWlnaHQ6IDMwcHg7XHJcblx0XHRiYWNrZ3JvdW5kOiAkZW1vamktbG92ZS1jb2xvcjtcclxuXHRcdGxlZnQ6IGNhbGMoNTAlIC0gMzVweCk7XHJcblx0XHRib3R0b206IC0xMHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlOyAgXHJcblx0fSAgXHJcbn1cclxuXHJcbi5lbW9qaS0teWF5IHtcclxuXHQmOmFmdGVyIHtcclxuXHRcdGNvbnRlbnQ6ICdZYXknO1xyXG5cdFx0YW5pbWF0aW9uOiB5YXktcmV2ZXJzZSAxcyBsaW5lYXIgaW5maW5pdGU7XHJcblx0fVxyXG4gIFxyXG5cdC5lbW9qaV9fZmFjZSB7XHJcblx0XHRhbmltYXRpb246IHlheSAxcyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG5cdH1cclxuXHJcblx0LmVtb2ppX19leWVicm93cyB7XHJcblx0XHRsZWZ0OiBjYWxjKDUwJSAtIDNweCk7XHJcblx0XHR0b3A6IDMwcHg7XHJcblx0XHRoZWlnaHQ6IDZweDtcclxuXHRcdHdpZHRoOiA2cHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRcdGJveC1zaGFkb3c6IC02cHggMCAwIDAgJGVtb2ppLWJsYWNrLWNvbG9yLCAtMzZweCAwIDAgMHB4ICRlbW9qaS1ibGFjay1jb2xvciwgNnB4IDAgMCAwICRlbW9qaS1ibGFjay1jb2xvciwgMzZweCAwIDAgMHB4ICRlbW9qaS1ibGFjay1jb2xvcjtcclxuXHRcdFxyXG5cdFx0JjpiZWZvcmUsICY6YWZ0ZXIge1xyXG5cdFx0XHR3aWR0aDogMzZweDtcclxuXHRcdFx0aGVpZ2h0OiAxOHB4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA2MHB4IDYwcHggMCAwO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0Ym9yZGVyOiA2cHggc29saWQgYmxhY2s7XHJcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdGJvcmRlci1ib3R0b206IDA7XHJcblx0XHRcdGJvdHRvbTogM3B4O1xyXG5cdFx0XHRsZWZ0OiBjYWxjKDUwJSAtIDE4cHgpO1xyXG5cdFx0fVxyXG5cclxuXHRcdCY6YmVmb3JlIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IC0yMXB4OyAgXHJcblx0XHR9XHJcblxyXG5cdFx0JjphZnRlciB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAyMXB4OyAgXHJcblx0XHR9XHJcblx0fVxyXG4gIFxyXG5cdC5lbW9qaV9fbW91dGgge1xyXG5cdFx0dG9wOiA2MHB4O1xyXG5cdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0XHRsZWZ0OiA1MCU7ICBcclxuXHQgIFxyXG5cdFx0JjphZnRlciB7XHJcblx0XHQgIHdpZHRoOiA4MHB4O1xyXG5cdFx0ICBoZWlnaHQ6IDgwcHg7XHJcblx0XHQgIGxlZnQ6IGNhbGMoNTAlIC0gNDBweCk7XHJcblx0XHQgIHRvcDogLTc1cHg7XHJcblx0XHQgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdCAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7ICBcclxuXHRcdCAgYm9yZGVyOiA2cHggc29saWQgJGVtb2ppLWJsYWNrLWNvbG9yO1xyXG5cdFx0ICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cdFx0ICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdCAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0ICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0ICB6LWluZGV4OiAxO1xyXG5cdFx0fVxyXG5cclxuXHRcdCY6YmVmb3JlIHtcclxuXHRcdFx0d2lkdGg6IDZweDtcclxuXHRcdFx0aGVpZ2h0OiA2cHg7XHJcblx0XHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdGJvdHRvbTogNXB4O1xyXG5cdFx0XHRsZWZ0OiBjYWxjKDUwJSAtIDNweCk7XHJcblx0XHRcdGJveC1zaGFkb3c6IC0yNXB4IDAgMCAwICRlbW9qaS1ibGFjay1jb2xvciwgMjVweCAwIDAgMCAkZW1vamktYmxhY2stY29sb3IsIC0zNXB4IC0ycHggMzBweCAxMHB4ICRlbW9qaS1hbmdyeS1jb2xvciwgMzVweCAtMnB4IDMwcHggMTBweCAkZW1vamktYW5ncnktY29sb3I7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4uZW1vamktLXdvdyB7XHJcblx0JjphZnRlciB7XHJcblx0XHRjb250ZW50OiAnV293JztcclxuXHR9XHJcbiAgLmVtb2ppX19mYWNlIHtcclxuXHRhbmltYXRpb246IHdvdy1mYWNlIDNzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHRcclxuICBcclxuICAuZW1vamlfX2V5ZWJyb3dzIHtcclxuXHRcdGxlZnQ6IGNhbGMoNTAlIC0gM3B4KTtcclxuXHRcdGhlaWdodDogNnB4O1xyXG5cdFx0d2lkdGg6IDZweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0Ym94LXNoYWRvdzogLTE4cHggMCAwIDAgJGVtb2ppLWJsYWNrLWNvbG9yLCAtMzNweCAwIDAgMCAkZW1vamktYmxhY2stY29sb3IsIDE4cHggMCAwIDAgJGVtb2ppLWJsYWNrLWNvbG9yLCAzM3B4IDAgMCAwICRlbW9qaS1ibGFjay1jb2xvcjtcclxuXHRcdGFuaW1hdGlvbjogd293LWJyb3cgM3MgbGluZWFyIGluZmluaXRlO1xyXG5cdFxyXG5cdFx0JjpiZWZvcmUsICY6YWZ0ZXIge1xyXG5cdFx0XHR3aWR0aDogMjRweDtcclxuXHRcdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHRib3JkZXI6IDZweCBzb2xpZCAkZW1vamktYmxhY2stY29sb3I7XHJcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0Ym9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0dG9wOiAtM3B4O1xyXG5cdFx0XHRsZWZ0OiBjYWxjKDUwJSAtIDEycHgpOyAgXHJcblx0XHR9XHJcblxyXG5cdFx0JjpiZWZvcmUge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogLTI1cHg7ICBcclxuXHRcdH1cclxuXHJcblx0XHQmOmFmdGVyIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDI1cHg7ICBcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC5lbW9qaV9fZXllcyB7XHJcblx0XHR3aWR0aDogMTZweDtcclxuXHRcdGhlaWdodDogMjRweDtcclxuXHRcdGxlZnQ6IGNhbGMoNTAlIC0gOHB4KTtcclxuXHRcdHRvcDogMzVweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0Ym94LXNoYWRvdzogMjVweCAwIDAgMCAkZW1vamktYmxhY2stY29sb3IsIC0yNXB4IDAgMCAwICRlbW9qaS1ibGFjay1jb2xvcjtcclxuXHR9XHJcbiBcclxuXHQuZW1vamlfX21vdXRoIHtcclxuXHRcdHdpZHRoOiAzMHB4O1xyXG5cdFx0aGVpZ2h0OiA0NXB4O1xyXG5cdFx0bGVmdDogY2FsYyg1MCUgLSAxNXB4KTtcclxuXHRcdHRvcDogNTAlO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0YmFja2dyb3VuZDogJGVtb2ppLWJsYWNrLWNvbG9yO1xyXG5cdFx0YW5pbWF0aW9uOiB3b3ctbW91dGggM3MgbGluZWFyIGluZmluaXRlO1xyXG5cdH1cclxufVxyXG5cclxuLmVtb2ppLS1zYWQge1xyXG5cdCY6YWZ0ZXIge1xyXG5cdFx0Y29udGVudDogJ1NhZCc7XHJcblx0fVxyXG5cclxuXHQuZW1vamlfX2ZhY2Uge1xyXG5cdFx0YW5pbWF0aW9uOiBzYWQtZmFjZSAycyBlYXNlLWluIGluZmluaXRlO1xyXG5cdH1cclxuICBcclxuXHQuZW1vamlfX2V5ZWJyb3dzIHtcclxuXHRcdGxlZnQ6IGNhbGMoNTAlIC0gM3B4KTtcclxuXHRcdHRvcDogMzVweDtcclxuXHRcdGhlaWdodDogNnB4O1xyXG5cdFx0d2lkdGg6IDZweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0Ym94LXNoYWRvdzogLTQwcHggOXB4IDAgMCAkZW1vamktYmxhY2stY29sb3IsIC0yNXB4IDAgMCAwICRlbW9qaS1ibGFjay1jb2xvciwgMjVweCAwIDAgMCAkZW1vamktYmxhY2stY29sb3IsIDQwcHggOXB4IDAgMCAkZW1vamktYmxhY2stY29sb3IsIDtcclxuXHRcdFxyXG5cdFx0JjpiZWZvcmUsICY6YWZ0ZXIge1xyXG5cdFx0XHR3aWR0aDogMzBweDtcclxuXHRcdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHRib3JkZXI6IDZweCBzb2xpZCAkZW1vamktYmxhY2stY29sb3I7XHJcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0Ym9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0dG9wOiAycHg7XHJcblx0XHRcdGxlZnQ6IGNhbGMoNTAlIC0gMTVweCk7ICBcclxuXHRcdH1cclxuXHJcblx0XHQmOmJlZm9yZSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAtMzBweDtcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoLTMwZGVnKTsgIFxyXG5cdFx0fVxyXG5cclxuXHRcdCY6YWZ0ZXIge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMzBweDtcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpO1xyXG5cdFx0fVxyXG5cdH1cclxuICBcclxuXHQuZW1vamlfX2V5ZXMge1xyXG5cdFx0d2lkdGg6IDE0cHg7XHJcblx0XHRoZWlnaHQ6IDE2cHg7XHJcblx0XHRsZWZ0OiBjYWxjKDUwJSAtIDdweCk7XHJcblx0XHR0b3A6IDUwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRcdGJveC1zaGFkb3c6IDI1cHggMCAwIDAgJGVtb2ppLWJsYWNrLWNvbG9yLCAtMjVweCAwIDAgMCAkZW1vamktYmxhY2stY29sb3I7XHJcblxyXG5cdFx0JjphZnRlciB7XHJcblx0XHRcdGJhY2tncm91bmQ6ICRlbW9qaS1saWtlLWNvbG9yO1xyXG5cdFx0XHR3aWR0aDogMTJweDtcclxuXHRcdFx0aGVpZ2h0OiAxMnB4O1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogNnB4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAwIDEwMCUgNDAlIDUwJSAvIDAgNTAlIDQwJSAxMDAlO1xyXG5cdFx0XHR0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcclxuXHRcdFx0YW5pbWF0aW9uOiB0ZWFyLWRyb3AgMnMgZWFzZS1pbiBpbmZpbml0ZTtcclxuXHRcdH0gIFxyXG5cdH1cclxuICBcclxuXHQuZW1vamlfX21vdXRoIHtcclxuXHRcdHdpZHRoOiA2MHB4O1xyXG5cdFx0aGVpZ2h0OiA4MHB4O1xyXG5cdFx0bGVmdDogY2FsYyg1MCUgLSAzMHB4KTtcclxuXHRcdHRvcDogODBweDtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRib3JkZXI6IDZweCBzb2xpZCAkZW1vamktYmxhY2stY29sb3I7ICBcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0Ym9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0Ym9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0YW5pbWF0aW9uOiBzYWQtbW91dGggMnMgZWFzZS1pbiBpbmZpbml0ZTtcclxuXHJcblx0XHQmOmFmdGVyIHtcclxuXHRcdFx0d2lkdGg6IDZweDtcclxuXHRcdFx0aGVpZ2h0OiA2cHg7XHJcblx0XHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRcdHRvcDogNHB4O1xyXG5cdFx0XHRsZWZ0OiBjYWxjKDUwJSAtIDNweCk7XHJcblx0XHRcdGJveC1zaGFkb3c6IC0xOHB4IDAgMCAwICRlbW9qaS1ibGFjay1jb2xvciwgMThweCAwIDAgMCAkZW1vamktYmxhY2stY29sb3I7ICBcclxuXHRcdH0gIFxyXG5cdH1cclxufVxyXG5cclxuLmVtb2ppLS1hbmdyeSB7XHJcblx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCRlbW9qaS1hbmdyeS1jb2xvciAtMTAlLCAkZW1vamktYmFzZS1jb2xvcik7XHJcblx0YmFja2dyb3VuZC1zaXplOiAxMDAlO1xyXG5cdGFuaW1hdGlvbjogYW5ncnktY29sb3IgMnMgZWFzZS1pbiBpbmZpbml0ZTtcclxuICBcclxuXHQmOmFmdGVyIHtcclxuXHRcdGNvbnRlbnQ6ICdBbmdyeSc7XHJcblx0fVxyXG5cclxuICAuZW1vamlfX2ZhY2Uge1xyXG5cdCAgYW5pbWF0aW9uOiBhbmdyeS1mYWNlIDJzIGVhc2UtaW4gaW5maW5pdGU7XHJcblx0fSAgXHJcblxyXG5cdC5lbW9qaV9fZXllYnJvd3Mge1xyXG5cdFx0bGVmdDogY2FsYyg1MCUgLSAzcHgpO1xyXG5cdFx0dG9wOiA1NXB4O1xyXG5cdFx0aGVpZ2h0OiA2cHg7XHJcblx0XHR3aWR0aDogNnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0XHRib3gtc2hhZG93OiAtNDRweCA1cHggMCAwICRlbW9qaS1ibGFjay1jb2xvciwgLTdweCAxNnB4IDAgMCAkZW1vamktYmxhY2stY29sb3IsIDdweCAxNnB4IDAgMCAkZW1vamktYmxhY2stY29sb3IsIDQ0cHggNXB4IDAgMCAkZW1vamktYmxhY2stY29sb3IsIDtcclxuXHRcdFxyXG5cdFx0JjpiZWZvcmUsICY6YWZ0ZXIge1xyXG5cdFx0XHR3aWR0aDogNTBweDtcclxuXHRcdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdFx0XHRib3JkZXI6IDZweCBzb2xpZCAkZW1vamktYmxhY2stY29sb3I7XHJcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0Ym9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdGJvcmRlci1sZWZ0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0Ym9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0dG9wOiAwO1xyXG5cdFx0XHRsZWZ0OiBjYWxjKDUwJSAtIDI1cHgpOyAgXHJcblx0XHR9XHJcblxyXG5cdFx0JjpiZWZvcmUge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogLTI1cHg7XHJcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTsgIFxyXG5cdFx0fVxyXG5cclxuXHRcdCY6YWZ0ZXIge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMjVweDtcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKTtcclxuXHRcdH1cclxuXHR9XHJcbiAgXHJcblx0LmVtb2ppX19leWVzIHtcclxuXHRcdHdpZHRoOiAxMnB4O1xyXG5cdFx0aGVpZ2h0OiAxMnB4O1xyXG5cdFx0bGVmdDogY2FsYyg1MCUgLSA2cHgpO1xyXG5cdFx0dG9wOiA3MHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0XHRib3gtc2hhZG93OiAyNXB4IDAgMCAwICRlbW9qaS1ibGFjay1jb2xvciwgLTI1cHggMCAwIDAgJGVtb2ppLWJsYWNrLWNvbG9yO1xyXG5cdH1cclxuICBcclxuXHQuZW1vamlfX21vdXRoIHtcclxuXHRcdHdpZHRoOiAzNnB4O1xyXG5cdFx0aGVpZ2h0OiAxOHB4O1xyXG5cdFx0bGVmdDogY2FsYyg1MCUgLSAxOHB4KTtcclxuXHRcdGJvdHRvbTogMTVweDtcclxuXHRcdGJhY2tncm91bmQ6ICRlbW9qaS1ibGFjay1jb2xvcjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdGFuaW1hdGlvbjogYW5ncnktbW91dGggMnMgZWFzZS1pbiBpbmZpbml0ZTtcclxuXHR9ICBcclxufVxyXG5cclxuQGtleWZyYW1lcyBoZWFydC1iZWF0IHtcclxuXHQyNSUge3RyYW5zZm9ybTogc2NhbGUoMS4xKTt9XHJcblx0NzUlIHt0cmFuc2Zvcm06IHNjYWxlKDAuNik7fVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGhhaGEtZmFjZSB7XHJcblx0MTAlLCAzMCUsIDUwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI1cHgpO31cclxuXHQyMCUsIDQwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1cHgpO31cclxuXHQ2MCUsIDgwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO31cclxuXHQ3MCUsIDkwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMHB4KTt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgaGFoYS1tb3V0aCB7XHJcblx0MTAlLCAzMCUsIDUwJSB7dHJhbnNmb3JtOiBzY2FsZSgwLjYpOyB0b3A6IDQ1JTt9XHJcblx0MjAlLCA0MCUge3RyYW5zZm9ybTogc2NhbGUoMC44KTsgdG9wOiA0NSU7fVxyXG5cdDYwJSwgODAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpOyB0b3A6IDUwJTt9XHJcblx0NzAlIHt0cmFuc2Zvcm06IHNjYWxlKDEuMik7IHRvcDogNTAlO31cclxuXHQ5MCUge3RyYW5zZm9ybTogc2NhbGUoMS4xKTsgdG9wOiA1MCU7fVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHlheSB7XHJcblx0MjUlIHt0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO31cclxuXHQ3NSUge3RyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgd293LWZhY2Uge1xyXG5cdDE1JSwgMjUlIHt0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZykgdHJhbnNsYXRlWCgtMjVweCk7fVxyXG5cdDQ1JSwgNjUlIHt0cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpIHRyYW5zbGF0ZVgoMjVweCk7fVxyXG5cdDc1JSwgMTAwJSB7dHJhbnNmb3JtOiByb3RhdGUoMGRlZykgdHJhbnNsYXRlWCgwKTt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgd293LWJyb3cge1xyXG5cdDE1JSwgNjUlIHt0b3A6IDI1cHg7fVxyXG5cdDc1JSwgMTAwJSwgMCUge3RvcDogMTVweDt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgd293LW1vdXRoIHtcclxuXHQxMCUsIDMwJSB7d2lkdGg6IDIwcHg7IGhlaWdodDogMjBweDsgbGVmdDogY2FsYyg1MCUgLSAxMHB4KTt9XHJcblx0NTAlLCA3MCUge3dpZHRoOiAzMHB4OyBoZWlnaHQ6IDQwcHg7IGxlZnQ6IGNhbGMoNTAlIC0gMTVweCk7fVxyXG5cdDc1JSwgMTAwJSB7aGVpZ2h0OiA1MHB4O31cclxufVxyXG5cclxuQGtleWZyYW1lcyBzYWQtZmFjZSB7XHJcblx0MjUlLCAzNSUge3RvcDogLTE1cHg7fVxyXG5cdDU1JSwgOTUlIHt0b3A6IDEwcHg7fVxyXG5cdDEwMCUsIDAlIHt0b3A6IDA7fVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNhZC1tb3V0aCB7XHJcblx0MjUlLCAzNSUge3RyYW5zZm9ybTogc2NhbGUoMC44NSk7IHRvcDogNzBweDt9XHJcblx0NTUlLCAxMDAlLCAwJSB7dHJhbnNmb3JtOiBzY2FsZSgxKTsgdG9wOjgwcHg7fVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHRlYXItZHJvcCB7XHJcblx0MCUsIDEwMCUge2Rpc3BsYXk6YmxvY2s7IGxlZnQ6IDM1cHg7IHRvcDogMTVweDsgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlKDApO31cclxuXHQyNSUge2Rpc3BsYXk6YmxvY2s7IGxlZnQ6IDM1cHg7IHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBzY2FsZSgyKTt9XHJcblx0NDkuOSUge2Rpc3BsYXk6YmxvY2s7IGxlZnQ6IDM1cHg7IHRvcDogNjVweDsgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlKDApO31cclxuXHQ1MCUge2Rpc3BsYXk6YmxvY2s7IGxlZnQ6IC0zNXB4OyB0b3A6IDE1cHg7IHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBzY2FsZSgwKTt9XHJcblx0NzUlIHtkaXNwbGF5OmJsb2NrOyBsZWZ0OiAtMzVweDsgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlKDIpO31cclxuXHQ5OS45JSB7ZGlzcGxheTpibG9jazsgbGVmdDogLTM1cHg7IHRvcDogNjVweDsgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlKDApO31cclxufVxyXG5cclxuQGtleWZyYW1lcyBoYW5kcy11cCB7XHJcblx0MjUlIHt0cmFuc2Zvcm06IHJvdGF0ZSgxNWRlZyk7fVxyXG5cdDUwJSB7dHJhbnNmb3JtOiByb3RhdGUoLTE1ZGVnKSB0cmFuc2xhdGVZKC0xMHB4KTt9XHJcblx0NzUlLCAxMDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdGh1bWJzLXVwIHtcclxuXHQyNSUge3RyYW5zZm9ybTogcm90YXRlKDIwZGVnKTt9XHJcblx0NTAlLCAxMDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5ncnktY29sb3Ige1xyXG5cdDQ1JSwgNjAlIHtiYWNrZ3JvdW5kLXNpemU6IDI1MCU7fVxyXG5cdDg1JSwgMTAwJSwgMCUge2JhY2tncm91bmQtc2l6ZTogMTAwJTt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYW5ncnktZmFjZSB7XHJcblx0MzUlLCA2MCUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDEwcHgpIHNjYWxlKDAuOSk7fVxyXG5cdDQwJSwgNTAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCkgdHJhbnNsYXRlWSgxMHB4KSBzY2FsZSgwLjkpO31cclxuXHQ0NSUsIDU1JSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCkgdHJhbnNsYXRlWSgxMHB4KSBzY2FsZSgwLjkpO31cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmdyeS1tb3V0aCB7XHJcblx0MjUlLCA1MCUge2hlaWdodDogNnB4OyBib3R0b206IDI1cHg7fVxyXG59Il19 */"], changeDetection: 0 });


/***/ }),

/***/ "LmSG":
/*!**********************************************************************************!*\
  !*** ./src/app/features/home/views/emoji-detection/emoji-detection.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EmojiDetectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiDetectionComponent", function() { return EmojiDetectionComponent; });
/* harmony import */ var src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/utils/common */ "lM/l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_window_windos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/window/windos.service */ "tpjD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_camera_detection_camera_detection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/camera-detection/camera-detection.component */ "eVtn");
/* harmony import */ var _shared_components_emoji_emoji_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/emoji/emoji.component */ "8GYb");






const _c0 = ["cameraDetection"];
function EmojiDetectionComponent_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Non riesco a vedere la tua faccia!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EmojiDetectionComponent_app_emoji_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-emoji", 7);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("emojiEnabled", ctx_r2.emojiEnabled)("emojiHighlight", ctx_r2.emojiHighlight);
} }
const EXPRESSIONS = [
    { expression: 'neutral', value: 0 },
    { expression: 'happy', value: 0 },
    { expression: 'sad', value: 0 },
    { expression: 'angry', value: 0 },
    { expression: 'fearful', value: 0 },
    { expression: 'disgusted', value: 0 },
    { expression: 'surprised', value: 0 }
];
class EmojiDetectionComponent {
    constructor(cdr, windowService, elRef) {
        this.cdr = cdr;
        this.windowService = windowService;
        this.elRef = elRef;
        // emoji abilitate
        this.emojiEnabled = {
            like: false,
            love: false,
            haha: true,
            yay: false,
            wow: true,
            sad: true,
            angry: true
        };
        // true se l'espressione facciale è stata trovata nella webcam
        this.faceDetected = false;
        // se true l'espressione facciale è stata trovata almeno una volta
        this.firstDetectionHappen = false;
        // se true il riconoscimento facciale è pronto
        this.detectionReady = false;
        // se true youtube e il riconoscimento facciale sono pronti
        this.allReady = false;
        // true se la partita può iniziare
        this.readyToGame = false;
        // dimensioni dell'area di gioco
        this.width = 0;
        this.height = 0;
    }
    ngOnInit() {
        this.subVwChanges = this.windowService.viewPortChanges.subscribe(() => {
            this.doResize();
        });
    }
    ngOnDestroy() {
        Object(src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_0__["safeUnsubscribe"])(this.subVwChanges);
    }
    /**
     * Evento di caricamento completato del riconoscimento facciale
     */
    onDetectionReady(e) {
        this.detectionReady = true;
        this.doThirdPartyOnReady();
    }
    /**
     * Evento scatenato al primo riconoscimento facciale
     */
    onFirstDetection(e) {
        this.firstDetectionHappen = e;
    }
    /**
     * Evento ad ogni cambiamento di stato (trovata/non trovata la faccia)
     */
    onDetectionFace(e) {
        this.faceDetected = e;
    }
    /**
     * Quando il player youtube o il riconoscimento sono ready, gestiamo le parti comuni
     */
    doThirdPartyOnReady() {
        this.allReady = this.detectionReady;
        this.doResize();
    }
    /**
     * Evento di cambiamento del riconoscimento facciale
     */
    onDetectionChanges(e) {
        // ridimensioniamo l'area di gioco
        this.doResize();
        // faccia trovata?
        if (e) {
            // recuperiamo l'espressione prefominante
            let foundExpression = null;
            for (const ex of EXPRESSIONS) {
                const value = e[ex.expression];
                if (foundExpression) {
                    if (value > foundExpression.value) {
                        foundExpression = { expression: ex.expression, value };
                    }
                }
                else {
                    if (value > 0) {
                        foundExpression = { expression: ex.expression, value };
                    }
                }
            }
            if (foundExpression) {
                switch (foundExpression.expression) {
                    case 'angry':
                        this.emojiHighlight = 'angry';
                        break;
                    case 'happy':
                        this.emojiHighlight = 'haha';
                        break;
                    case 'sad':
                        this.emojiHighlight = 'sad';
                        break;
                    case 'surprised':
                        this.emojiHighlight = 'wow';
                        break;
                    default:
                        this.emojiHighlight = null;
                        break;
                }
            }
            this.manageReadyToGameState();
        }
    }
    /**
     * Gestisce lo stato della partita (se è pronta per essere giocata o meno)
     */
    manageReadyToGameState() {
        // può essere giocata se non è terminata e se abbiamo trovato la faccia
        const readyToGame = this.faceDetected;
        if (this.readyToGame !== readyToGame) {
            this.readyToGame = readyToGame;
            this.cdr.markForCheck();
        }
    }
    doResize() {
        // -1 altrimenti esce la scrollbar
        const w = this.elRef.nativeElement.clientWidth - 1;
        const h = this.elRef.nativeElement.clientHeight - 1;
        if (w !== this.width || h !== this.height) {
            this.width = w;
            this.height = h;
            this.cdr.markForCheck();
        }
    }
}
EmojiDetectionComponent.ɵfac = function EmojiDetectionComponent_Factory(t) { return new (t || EmojiDetectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_window_windos_service__WEBPACK_IMPORTED_MODULE_2__["WindowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
EmojiDetectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EmojiDetectionComponent, selectors: [["app-emoji-detection"]], viewQuery: function EmojiDetectionComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cameraDetection = _t.first);
    } }, decls: 7, vars: 10, consts: [[1, "game-container"], [1, "info"], [4, "ngIf"], [1, "webcam"], [3, "width", "height", "drawDetection", "detectionTimer", "detectionReady", "detectionChanges", "firstDetection", "detectionFace"], ["cameraDetection", ""], ["class", "emoji", 3, "emojiEnabled", "emojiHighlight", 4, "ngIf"], [1, "emoji", 3, "emojiEnabled", "emojiHighlight"]], template: function EmojiDetectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, EmojiDetectionComponent_h1_2_Template, 2, 0, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-camera-detection", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("detectionReady", function EmojiDetectionComponent_Template_app_camera_detection_detectionReady_4_listener($event) { return ctx.onDetectionReady($event); })("detectionChanges", function EmojiDetectionComponent_Template_app_camera_detection_detectionChanges_4_listener($event) { return ctx.onDetectionChanges($event); })("firstDetection", function EmojiDetectionComponent_Template_app_camera_detection_firstDetection_4_listener($event) { return ctx.onFirstDetection($event); })("detectionFace", function EmojiDetectionComponent_Template_app_camera_detection_detectionFace_4_listener($event) { return ctx.onDetectionFace($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, EmojiDetectionComponent_app_emoji_6_Template, 1, 2, "app-emoji", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.width + "px")("height", ctx.height + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.detectionReady && !ctx.faceDetected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", ctx.width)("height", ctx.height)("drawDetection", true)("detectionTimer", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.detectionReady && ctx.faceDetected);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_camera_detection_camera_detection_component__WEBPACK_IMPORTED_MODULE_4__["CameraDetectionComponent"], _shared_components_emoji_emoji_component__WEBPACK_IMPORTED_MODULE_5__["EmojiComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n\n.game-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.game-container[_ngcontent-%COMP%]   .webcam[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n}\n\n.game-container[_ngcontent-%COMP%]   .webcam[_ngcontent-%COMP%]   .emoji[_ngcontent-%COMP%] {\n  transform-origin: center;\n  transform: scale(0.5);\n  position: absolute;\n  z-index: 10000;\n  width: 100%;\n  left: 0%;\n}\n\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  width: 100%;\n  color: black;\n  position: absolute;\n  bottom: 10px;\n  text-align: center;\n  z-index: 10000;\n}\n\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 3px 3px 3px 3px;\n  border-radius: 3px;\n  margin-bottom: 5px;\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGVtb2ppLWRldGVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUVJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUFSOztBQUVRO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FBQVo7O0FBSUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUZSOztBQUlRO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRloiLCJmaWxlIjoiZW1vamktZGV0ZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmdhbWUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgLndlYmNhbSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgZmxleDogMSAxIGF1dG87XHJcblxyXG4gICAgICAgIC5lbW9qaSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbGVmdDogMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgei1pbmRleDogMTAwMDA7XHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCAzcHggM3B4IDNweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });


/***/ }),

/***/ "rStz":
/*!***************************************************************************************!*\
  !*** ./src/app/features/home/views/emoji-detection/emoji-detection-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: EmojiDetectionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiDetectionRoutingModule", function() { return EmojiDetectionRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _emoji_detection_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emoji-detection.component */ "LmSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _emoji_detection_component__WEBPACK_IMPORTED_MODULE_1__["EmojiDetectionComponent"]
    },
];
class EmojiDetectionRoutingModule {
}
EmojiDetectionRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EmojiDetectionRoutingModule });
EmojiDetectionRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function EmojiDetectionRoutingModule_Factory(t) { return new (t || EmojiDetectionRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EmojiDetectionRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xD2x":
/*!*********************************************************!*\
  !*** ./src/app/shared/components/emoji/emoji.module.ts ***!
  \*********************************************************/
/*! exports provided: EmojiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiModule", function() { return EmojiModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _emoji_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emoji.component */ "8GYb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class EmojiModule {
}
EmojiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EmojiModule });
EmojiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function EmojiModule_Factory(t) { return new (t || EmojiModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EmojiModule, { declarations: [_emoji_component__WEBPACK_IMPORTED_MODULE_1__["EmojiComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]], exports: [_emoji_component__WEBPACK_IMPORTED_MODULE_1__["EmojiComponent"]] }); })();


/***/ })

}]);
//# sourceMappingURL=views-emoji-detection-emoji-detection-module.js.map