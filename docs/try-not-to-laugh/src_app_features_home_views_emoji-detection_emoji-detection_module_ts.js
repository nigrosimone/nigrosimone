"use strict";
(self["webpackChunktry_not_to_laugh"] = self["webpackChunktry_not_to_laugh"] || []).push([["src_app_features_home_views_emoji-detection_emoji-detection_module_ts"],{

/***/ 221:
/*!***************************************************************************************!*\
  !*** ./src/app/features/home/views/emoji-detection/emoji-detection-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmojiDetectionRoutingModule": () => (/* binding */ EmojiDetectionRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _emoji_detection_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emoji-detection.component */ 8276);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _emoji_detection_component__WEBPACK_IMPORTED_MODULE_0__.EmojiDetectionComponent
}];
class EmojiDetectionRoutingModule {}
EmojiDetectionRoutingModule.ɵfac = function EmojiDetectionRoutingModule_Factory(t) {
  return new (t || EmojiDetectionRoutingModule)();
};
EmojiDetectionRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: EmojiDetectionRoutingModule
});
EmojiDetectionRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EmojiDetectionRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 8276:
/*!**********************************************************************************!*\
  !*** ./src/app/features/home/views/emoji-detection/emoji-detection.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmojiDetectionComponent": () => (/* binding */ EmojiDetectionComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/utils/common */ 2768);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_services_window_windos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/window/windos.service */ 5027);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_camera_detection_camera_detection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/camera-detection/camera-detection.component */ 1983);
/* harmony import */ var _shared_components_emoji_emoji_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/emoji/emoji.component */ 4160);






const _c0 = ["cameraDetection"];
function EmojiDetectionComponent_h1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Non riesco a vedere la tua faccia!");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function EmojiDetectionComponent_app_emoji_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-emoji", 7);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("emojiEnabled", ctx_r2.emojiEnabled)("emojiHighlight", ctx_r2.emojiHighlight);
  }
}
const EXPRESSIONS = [{
  expression: 'neutral',
  value: 0
}, {
  expression: 'happy',
  value: 0
}, {
  expression: 'sad',
  value: 0
}, {
  expression: 'angry',
  value: 0
}, {
  expression: 'fearful',
  value: 0
}, {
  expression: 'disgusted',
  value: 0
}, {
  expression: 'surprised',
  value: 0
}];
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
    (0,src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_0__.safeUnsubscribe)(this.subVwChanges);
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
            foundExpression = {
              expression: ex.expression,
              value
            };
          }
        } else {
          if (value > 0) {
            foundExpression = {
              expression: ex.expression,
              value
            };
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
EmojiDetectionComponent.ɵfac = function EmojiDetectionComponent_Factory(t) {
  return new (t || EmojiDetectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_core_services_window_windos_service__WEBPACK_IMPORTED_MODULE_1__.WindowService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef));
};
EmojiDetectionComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: EmojiDetectionComponent,
  selectors: [["app-emoji-detection"]],
  viewQuery: function EmojiDetectionComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.cameraDetection = _t.first);
    }
  },
  decls: 7,
  vars: 10,
  consts: [[1, "game-container"], [1, "info"], [4, "ngIf"], [1, "webcam"], [3, "width", "height", "drawDetection", "detectionTimer", "detectionReady", "detectionChanges", "firstDetection", "detectionFace"], ["cameraDetection", ""], ["class", "emoji", 3, "emojiEnabled", "emojiHighlight", 4, "ngIf"], [1, "emoji", 3, "emojiEnabled", "emojiHighlight"]],
  template: function EmojiDetectionComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, EmojiDetectionComponent_h1_2_Template, 2, 0, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3)(4, "app-camera-detection", 4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("detectionReady", function EmojiDetectionComponent_Template_app_camera_detection_detectionReady_4_listener($event) {
        return ctx.onDetectionReady($event);
      })("detectionChanges", function EmojiDetectionComponent_Template_app_camera_detection_detectionChanges_4_listener($event) {
        return ctx.onDetectionChanges($event);
      })("firstDetection", function EmojiDetectionComponent_Template_app_camera_detection_firstDetection_4_listener($event) {
        return ctx.onFirstDetection($event);
      })("detectionFace", function EmojiDetectionComponent_Template_app_camera_detection_detectionFace_4_listener($event) {
        return ctx.onDetectionFace($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, EmojiDetectionComponent_app_emoji_6_Template, 1, 2, "app-emoji", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", ctx.width + "px")("height", ctx.height + "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.detectionReady && !ctx.faceDetected);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("width", ctx.width)("height", ctx.height)("drawDetection", true)("detectionTimer", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.detectionReady && ctx.faceDetected);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_camera_detection_camera_detection_component__WEBPACK_IMPORTED_MODULE_2__.CameraDetectionComponent, _shared_components_emoji_emoji_component__WEBPACK_IMPORTED_MODULE_3__.EmojiComponent],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n\n.game-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.game-container[_ngcontent-%COMP%]   .webcam[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n}\n.game-container[_ngcontent-%COMP%]   .webcam[_ngcontent-%COMP%]   .emoji[_ngcontent-%COMP%] {\n  transform-origin: center;\n  transform: scale(0.5);\n  position: absolute;\n  z-index: 10000;\n  width: 100%;\n  left: 0%;\n}\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  width: 100%;\n  color: black;\n  position: absolute;\n  bottom: 10px;\n  text-align: center;\n  z-index: 10000;\n}\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 3px 3px 3px 3px;\n  border-radius: 3px;\n  margin-bottom: 5px;\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaG9tZS92aWV3cy9lbW9qaS1kZXRlY3Rpb24vZW1vamktZGV0ZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQUo7QUFFSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFBUjtBQUVRO0VBQ0ksd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FBQVo7QUFJSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBRlI7QUFJUTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUZaIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmdhbWUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgLndlYmNhbSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgZmxleDogMSAxIGF1dG87XHJcblxyXG4gICAgICAgIC5lbW9qaSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDAwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbGVmdDogMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgei1pbmRleDogMTAwMDA7XHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCAzcHggM3B4IDNweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6926:
/*!*******************************************************************************!*\
  !*** ./src/app/features/home/views/emoji-detection/emoji-detection.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmojiDetectionModule": () => (/* binding */ EmojiDetectionModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _emoji_detection_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emoji-detection.component */ 8276);
/* harmony import */ var _emoji_detection_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emoji-detection-routing.module */ 221);
/* harmony import */ var src_app_shared_pipe_humanize_time_humanize_time_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pipe/humanize-time/humanize-time.module */ 6453);
/* harmony import */ var src_app_shared_components_camera_detection_camera_detection_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/camera-detection/camera-detection.module */ 5960);
/* harmony import */ var src_app_shared_components_emoji_emoji_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/emoji/emoji.module */ 698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);







class EmojiDetectionModule {}
EmojiDetectionModule.ɵfac = function EmojiDetectionModule_Factory(t) {
  return new (t || EmojiDetectionModule)();
};
EmojiDetectionModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: EmojiDetectionModule
});
EmojiDetectionModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _emoji_detection_routing_module__WEBPACK_IMPORTED_MODULE_1__.EmojiDetectionRoutingModule, src_app_shared_pipe_humanize_time_humanize_time_module__WEBPACK_IMPORTED_MODULE_2__.HumanizeTimeModule, src_app_shared_components_camera_detection_camera_detection_module__WEBPACK_IMPORTED_MODULE_3__.CameraDetectionModule, src_app_shared_components_emoji_emoji_module__WEBPACK_IMPORTED_MODULE_4__.EmojiModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](EmojiDetectionModule, {
    declarations: [_emoji_detection_component__WEBPACK_IMPORTED_MODULE_0__.EmojiDetectionComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _emoji_detection_routing_module__WEBPACK_IMPORTED_MODULE_1__.EmojiDetectionRoutingModule, src_app_shared_pipe_humanize_time_humanize_time_module__WEBPACK_IMPORTED_MODULE_2__.HumanizeTimeModule, src_app_shared_components_camera_detection_camera_detection_module__WEBPACK_IMPORTED_MODULE_3__.CameraDetectionModule, src_app_shared_components_emoji_emoji_module__WEBPACK_IMPORTED_MODULE_4__.EmojiModule],
    exports: [_emoji_detection_component__WEBPACK_IMPORTED_MODULE_0__.EmojiDetectionComponent]
  });
})();

/***/ }),

/***/ 4160:
/*!************************************************************!*\
  !*** ./src/app/shared/components/emoji/emoji.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmojiComponent": () => (/* binding */ EmojiComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function EmojiComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("highlight", ctx_r0.emojiHighlight === "like");
  }
}
function EmojiComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("highlight", ctx_r1.emojiHighlight === "love");
  }
}
function EmojiComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("highlight", ctx_r2.emojiHighlight === "haha");
  }
}
function EmojiComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 18)(3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("highlight", ctx_r3.emojiHighlight === "yay");
  }
}
function EmojiComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 18)(3, "div", 14)(4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("highlight", ctx_r4.emojiHighlight === "wow");
  }
}
function EmojiComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 18)(3, "div", 14)(4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("highlight", ctx_r5.emojiHighlight === "sad");
  }
}
function EmojiComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 18)(3, "div", 14)(4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("highlight", ctx_r6.emojiHighlight === "angry");
  }
}
class EmojiComponent {
  constructor() {
    this.emojiEnabled = null;
    this.emojiHighlight = null;
  }
}
EmojiComponent.ɵfac = function EmojiComponent_Factory(t) {
  return new (t || EmojiComponent)();
};
EmojiComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: EmojiComponent,
  selectors: [["app-emoji"]],
  inputs: {
    emojiEnabled: "emojiEnabled",
    emojiHighlight: "emojiHighlight"
  },
  decls: 7,
  vars: 7,
  consts: [["class", "emoji emoji--like", 3, "highlight", 4, "ngIf"], ["class", "emoji emoji--love", 3, "highlight", 4, "ngIf"], ["class", "emoji emoji--haha", 3, "highlight", 4, "ngIf"], ["class", "emoji emoji--yay", 3, "highlight", 4, "ngIf"], ["class", "emoji emoji--wow", 3, "highlight", 4, "ngIf"], ["class", "emoji emoji--sad", 3, "highlight", 4, "ngIf"], ["class", "emoji emoji--angry", 3, "highlight", 4, "ngIf"], [1, "emoji", "emoji--like"], [1, "emoji__hand"], [1, "emoji__thumb"], [1, "emoji", "emoji--love"], [1, "emoji__heart"], [1, "emoji", "emoji--haha"], [1, "emoji__face"], [1, "emoji__eyes"], [1, "emoji__mouth"], [1, "emoji__tongue"], [1, "emoji", "emoji--yay"], [1, "emoji__eyebrows"], [1, "emoji", "emoji--wow"], [1, "emoji", "emoji--sad"], [1, "emoji", "emoji--angry"]],
  template: function EmojiComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EmojiComponent_div_0_Template, 3, 2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EmojiComponent_div_1_Template, 2, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EmojiComponent_div_2_Template, 5, 2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, EmojiComponent_div_3_Template, 4, 2, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmojiComponent_div_4_Template, 5, 2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EmojiComponent_div_5_Template, 5, 2, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, EmojiComponent_div_6_Template, 5, 2, "div", 6);
    }
    if (rf & 2) {
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
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
  styles: ["[_nghost-%COMP%] {\n  margin: 0;\n  width: 100%;\n  max-width: 100%;\n  text-align: center;\n  position: absolute;\n  bottom: 2px;\n  left: 50%;\n  transform: translate(-50%, 2%);\n}\n\n.emoji[_ngcontent-%COMP%] {\n  width: 120px;\n  height: 120px;\n  margin: 15px 15px 40px;\n  background: #FFDA6A;\n  display: inline-block;\n  border-radius: 50%;\n  position: relative;\n}\n.emoji[_ngcontent-%COMP%]:after {\n  position: absolute;\n  bottom: -40px;\n  font-size: 18px;\n  width: 60px;\n  left: calc(50% - 30px);\n  color: #8A8A8A;\n}\n.emoji.highlight[_ngcontent-%COMP%] {\n  transform: scale(1.5, 1.5);\n}\n\n.emoji__face[_ngcontent-%COMP%], .emoji__eyebrows[_ngcontent-%COMP%], .emoji__eyes[_ngcontent-%COMP%], .emoji__mouth[_ngcontent-%COMP%], .emoji__tongue[_ngcontent-%COMP%], .emoji__heart[_ngcontent-%COMP%], .emoji__hand[_ngcontent-%COMP%], .emoji__thumb[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.emoji__face[_ngcontent-%COMP%]:before, .emoji__face[_ngcontent-%COMP%]:after, .emoji__eyebrows[_ngcontent-%COMP%]:before, .emoji__eyebrows[_ngcontent-%COMP%]:after, .emoji__eyes[_ngcontent-%COMP%]:before, .emoji__eyes[_ngcontent-%COMP%]:after, .emoji__mouth[_ngcontent-%COMP%]:before, .emoji__mouth[_ngcontent-%COMP%]:after, .emoji__tongue[_ngcontent-%COMP%]:before, .emoji__tongue[_ngcontent-%COMP%]:after, .emoji__heart[_ngcontent-%COMP%]:before, .emoji__heart[_ngcontent-%COMP%]:after, .emoji__hand[_ngcontent-%COMP%]:before, .emoji__hand[_ngcontent-%COMP%]:after, .emoji__thumb[_ngcontent-%COMP%]:before, .emoji__thumb[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n}\n\n.emoji__face[_ngcontent-%COMP%] {\n  width: inherit;\n  height: inherit;\n}\n\n.emoji--like[_ngcontent-%COMP%] {\n  background: #548DFF;\n}\n.emoji--like[_ngcontent-%COMP%]:after {\n  content: \"Like\";\n}\n.emoji--like[_ngcontent-%COMP%]   .emoji__hand[_ngcontent-%COMP%] {\n  left: 25px;\n  bottom: 30px;\n  width: 20px;\n  height: 40px;\n  background: #FFFFFF;\n  border-radius: 5px;\n  z-index: 0;\n  animation: _ngcontent-%COMP%_hands-up 2s linear infinite;\n}\n.emoji--like[_ngcontent-%COMP%]   .emoji__hand[_ngcontent-%COMP%]:before {\n  left: 25px;\n  bottom: 5px;\n  width: 40px;\n  background: inherit;\n  height: 10px;\n  border-radius: 2px 10px 10px 2px;\n  box-shadow: 1px -9px 0 1px #FFFFFF, 2px -19px 0 2px #FFFFFF, 3px -29px 0 3px #FFFFFF;\n}\n.emoji--like[_ngcontent-%COMP%]   .emoji__thumb[_ngcontent-%COMP%] {\n  border-bottom: 20px solid #FFFFFF;\n  border-left: 20px solid transparent;\n  top: -25px;\n  right: -25px;\n  z-index: 2;\n  transform: rotate(5deg);\n  transform-origin: 0% 100%;\n  animation: _ngcontent-%COMP%_thumbs-up 2s linear infinite;\n}\n.emoji--like[_ngcontent-%COMP%]   .emoji__thumb[_ngcontent-%COMP%]:before {\n  border-radius: 50% 50% 0 0;\n  background: #FFFFFF;\n  width: 10px;\n  height: 12px;\n  left: -10px;\n  top: -8px;\n  transform: rotate(-15deg);\n  transform-origin: 100% 100%;\n  box-shadow: -1px 4px 0 -1px #FFFFFF;\n}\n\n.emoji--love[_ngcontent-%COMP%] {\n  background: #F55064;\n}\n.emoji--love[_ngcontent-%COMP%]:after {\n  content: \"Love\";\n}\n.emoji--love[_ngcontent-%COMP%]   .emoji__heart[_ngcontent-%COMP%] {\n  left: calc(50% - 40px);\n  top: calc(50% - 40px);\n  width: 80px;\n  height: 80px;\n  animation: _ngcontent-%COMP%_heart-beat 1s linear infinite alternate;\n}\n.emoji--love[_ngcontent-%COMP%]   .emoji__heart[_ngcontent-%COMP%]:before, .emoji--love[_ngcontent-%COMP%]   .emoji__heart[_ngcontent-%COMP%]:after {\n  left: calc(50% - 20px);\n  top: calc(50% - 32px);\n  width: 40px;\n  height: 64px;\n  background: #FFFFFF;\n  border-radius: 20px 20px 0 0;\n}\n.emoji--love[_ngcontent-%COMP%]   .emoji__heart[_ngcontent-%COMP%]:before {\n  transform: translate(20px) rotate(-45deg);\n  transform-origin: 0 100%;\n}\n.emoji--love[_ngcontent-%COMP%]   .emoji__heart[_ngcontent-%COMP%]:after {\n  transform: translate(-20px) rotate(45deg);\n  transform-origin: 100% 100%;\n}\n\n.emoji--haha[_ngcontent-%COMP%]:after {\n  content: \"Haha\";\n}\n.emoji--haha[_ngcontent-%COMP%]   .emoji__face[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_haha-face 2s linear infinite;\n}\n.emoji--haha[_ngcontent-%COMP%]   .emoji__eyes[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 6px;\n  border-radius: 2px;\n  left: calc(50% - 13px);\n  top: 35px;\n  transform: rotate(20deg);\n  background: transparent;\n  box-shadow: -25px 5px 0 0 #000000, 25px -5px 0 0 #000000;\n}\n.emoji--haha[_ngcontent-%COMP%]   .emoji__eyes[_ngcontent-%COMP%]:after {\n  left: 0;\n  top: 0;\n  width: 26px;\n  height: 6px;\n  border-radius: 2px;\n  transform: rotate(-40deg);\n  background: transparent;\n  box-shadow: -25px -5px 0 0 #000000, 25px 5px 0 0 #000000;\n}\n.emoji--haha[_ngcontent-%COMP%]   .emoji__mouth[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 40px;\n  left: calc(50% - 40px);\n  top: 50%;\n  background: #000000;\n  border-radius: 0 0 40px 40px;\n  overflow: hidden;\n  z-index: 1;\n  animation: _ngcontent-%COMP%_haha-mouth 2s linear infinite;\n}\n.emoji--haha[_ngcontent-%COMP%]   .emoji__tongue[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 30px;\n  background: #F55064;\n  left: calc(50% - 35px);\n  bottom: -10px;\n  border-radius: 50%;\n}\n\n.emoji--yay[_ngcontent-%COMP%]:after {\n  content: \"Yay\";\n  animation: yay-reverse 1s linear infinite;\n}\n.emoji--yay[_ngcontent-%COMP%]   .emoji__face[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_yay 1s linear infinite alternate;\n}\n.emoji--yay[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%] {\n  left: calc(50% - 3px);\n  top: 30px;\n  height: 6px;\n  width: 6px;\n  border-radius: 50%;\n  background: transparent;\n  box-shadow: -6px 0 0 0 #000000, -36px 0 0 0px #000000, 6px 0 0 0 #000000, 36px 0 0 0px #000000;\n}\n.emoji--yay[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:before, .emoji--yay[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:after {\n  width: 36px;\n  height: 18px;\n  border-radius: 60px 60px 0 0;\n  background: transparent;\n  border: 6px solid black;\n  box-sizing: border-box;\n  border-bottom: 0;\n  bottom: 3px;\n  left: calc(50% - 18px);\n}\n.emoji--yay[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:before {\n  margin-left: -21px;\n}\n.emoji--yay[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:after {\n  margin-left: 21px;\n}\n.emoji--yay[_ngcontent-%COMP%]   .emoji__mouth[_ngcontent-%COMP%] {\n  top: 60px;\n  background: transparent;\n  left: 50%;\n}\n.emoji--yay[_ngcontent-%COMP%]   .emoji__mouth[_ngcontent-%COMP%]:after {\n  width: 80px;\n  height: 80px;\n  left: calc(50% - 40px);\n  top: -75px;\n  border-radius: 50%;\n  background: transparent;\n  border: 6px solid #000000;\n  box-sizing: border-box;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  border-right-color: transparent;\n  z-index: 1;\n}\n.emoji--yay[_ngcontent-%COMP%]   .emoji__mouth[_ngcontent-%COMP%]:before {\n  width: 6px;\n  height: 6px;\n  background: transparent;\n  border-radius: 50%;\n  bottom: 5px;\n  left: calc(50% - 3px);\n  box-shadow: -25px 0 0 0 #000000, 25px 0 0 0 #000000, -35px -2px 30px 10px #D5234C, 35px -2px 30px 10px #D5234C;\n}\n\n.emoji--wow[_ngcontent-%COMP%]:after {\n  content: \"Wow\";\n}\n.emoji--wow[_ngcontent-%COMP%]   .emoji__face[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_wow-face 3s linear infinite;\n}\n.emoji--wow[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%] {\n  left: calc(50% - 3px);\n  height: 6px;\n  width: 6px;\n  border-radius: 50%;\n  background: transparent;\n  box-shadow: -18px 0 0 0 #000000, -33px 0 0 0 #000000, 18px 0 0 0 #000000, 33px 0 0 0 #000000;\n  animation: _ngcontent-%COMP%_wow-brow 3s linear infinite;\n}\n.emoji--wow[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:before, .emoji--wow[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:after {\n  width: 24px;\n  height: 20px;\n  border: 6px solid #000000;\n  box-sizing: border-box;\n  border-radius: 50%;\n  border-bottom-color: transparent;\n  border-left-color: transparent;\n  border-right-color: transparent;\n  top: -3px;\n  left: calc(50% - 12px);\n}\n.emoji--wow[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:before {\n  margin-left: -25px;\n}\n.emoji--wow[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:after {\n  margin-left: 25px;\n}\n.emoji--wow[_ngcontent-%COMP%]   .emoji__eyes[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 24px;\n  left: calc(50% - 8px);\n  top: 35px;\n  border-radius: 50%;\n  background: transparent;\n  box-shadow: 25px 0 0 0 #000000, -25px 0 0 0 #000000;\n}\n.emoji--wow[_ngcontent-%COMP%]   .emoji__mouth[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 45px;\n  left: calc(50% - 15px);\n  top: 50%;\n  border-radius: 50%;\n  background: #000000;\n  animation: _ngcontent-%COMP%_wow-mouth 3s linear infinite;\n}\n\n.emoji--sad[_ngcontent-%COMP%]:after {\n  content: \"Sad\";\n}\n.emoji--sad[_ngcontent-%COMP%]   .emoji__face[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_sad-face 2s ease-in infinite;\n}\n.emoji--sad[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%] {\n  left: calc(50% - 3px);\n  top: 35px;\n  height: 6px;\n  width: 6px;\n  border-radius: 50%;\n  background: transparent;\n  box-shadow: -40px 9px 0 0 #000000, -25px 0 0 0 #000000, 25px 0 0 0 #000000, 40px 9px 0 0 #000000;\n}\n.emoji--sad[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:before, .emoji--sad[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:after {\n  width: 30px;\n  height: 20px;\n  border: 6px solid #000000;\n  box-sizing: border-box;\n  border-radius: 50%;\n  border-bottom-color: transparent;\n  border-left-color: transparent;\n  border-right-color: transparent;\n  top: 2px;\n  left: calc(50% - 15px);\n}\n.emoji--sad[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:before {\n  margin-left: -30px;\n  transform: rotate(-30deg);\n}\n.emoji--sad[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:after {\n  margin-left: 30px;\n  transform: rotate(30deg);\n}\n.emoji--sad[_ngcontent-%COMP%]   .emoji__eyes[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 16px;\n  left: calc(50% - 7px);\n  top: 50px;\n  border-radius: 50%;\n  background: transparent;\n  box-shadow: 25px 0 0 0 #000000, -25px 0 0 0 #000000;\n}\n.emoji--sad[_ngcontent-%COMP%]   .emoji__eyes[_ngcontent-%COMP%]:after {\n  background: #548DFF;\n  width: 12px;\n  height: 12px;\n  margin-left: 6px;\n  border-radius: 0 100% 40% 50%/0 50% 40% 100%;\n  transform-origin: 0% 0%;\n  animation: _ngcontent-%COMP%_tear-drop 2s ease-in infinite;\n}\n.emoji--sad[_ngcontent-%COMP%]   .emoji__mouth[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 80px;\n  left: calc(50% - 30px);\n  top: 80px;\n  box-sizing: border-box;\n  border: 6px solid #000000;\n  border-radius: 50%;\n  border-bottom-color: transparent;\n  border-left-color: transparent;\n  border-right-color: transparent;\n  background: transparent;\n  animation: _ngcontent-%COMP%_sad-mouth 2s ease-in infinite;\n}\n.emoji--sad[_ngcontent-%COMP%]   .emoji__mouth[_ngcontent-%COMP%]:after {\n  width: 6px;\n  height: 6px;\n  background: transparent;\n  border-radius: 50%;\n  top: 4px;\n  left: calc(50% - 3px);\n  box-shadow: -18px 0 0 0 #000000, 18px 0 0 0 #000000;\n}\n\n.emoji--angry[_ngcontent-%COMP%] {\n  background: linear-gradient(#D5234C -10%, #FFDA6A);\n  background-size: 100%;\n  animation: _ngcontent-%COMP%_angry-color 2s ease-in infinite;\n}\n.emoji--angry[_ngcontent-%COMP%]:after {\n  content: \"Angry\";\n}\n.emoji--angry[_ngcontent-%COMP%]   .emoji__face[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_angry-face 2s ease-in infinite;\n}\n.emoji--angry[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%] {\n  left: calc(50% - 3px);\n  top: 55px;\n  height: 6px;\n  width: 6px;\n  border-radius: 50%;\n  background: transparent;\n  box-shadow: -44px 5px 0 0 #000000, -7px 16px 0 0 #000000, 7px 16px 0 0 #000000, 44px 5px 0 0 #000000;\n}\n.emoji--angry[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:before, .emoji--angry[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:after {\n  width: 50px;\n  height: 20px;\n  border: 6px solid #000000;\n  box-sizing: border-box;\n  border-radius: 50%;\n  border-top-color: transparent;\n  border-left-color: transparent;\n  border-right-color: transparent;\n  top: 0;\n  left: calc(50% - 25px);\n}\n.emoji--angry[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:before {\n  margin-left: -25px;\n  transform: rotate(15deg);\n}\n.emoji--angry[_ngcontent-%COMP%]   .emoji__eyebrows[_ngcontent-%COMP%]:after {\n  margin-left: 25px;\n  transform: rotate(-15deg);\n}\n.emoji--angry[_ngcontent-%COMP%]   .emoji__eyes[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  left: calc(50% - 6px);\n  top: 70px;\n  border-radius: 50%;\n  background: transparent;\n  box-shadow: 25px 0 0 0 #000000, -25px 0 0 0 #000000;\n}\n.emoji--angry[_ngcontent-%COMP%]   .emoji__mouth[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 18px;\n  left: calc(50% - 18px);\n  bottom: 15px;\n  background: #000000;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_angry-mouth 2s ease-in infinite;\n}\n\n@keyframes _ngcontent-%COMP%_heart-beat {\n  25% {\n    transform: scale(1.1);\n  }\n  75% {\n    transform: scale(0.6);\n  }\n}\n@keyframes _ngcontent-%COMP%_haha-face {\n  10%, 30%, 50% {\n    transform: translateY(25px);\n  }\n  20%, 40% {\n    transform: translateY(15px);\n  }\n  60%, 80% {\n    transform: translateY(0);\n  }\n  70%, 90% {\n    transform: translateY(-10px);\n  }\n}\n@keyframes _ngcontent-%COMP%_haha-mouth {\n  10%, 30%, 50% {\n    transform: scale(0.6);\n    top: 45%;\n  }\n  20%, 40% {\n    transform: scale(0.8);\n    top: 45%;\n  }\n  60%, 80% {\n    transform: scale(1);\n    top: 50%;\n  }\n  70% {\n    transform: scale(1.2);\n    top: 50%;\n  }\n  90% {\n    transform: scale(1.1);\n    top: 50%;\n  }\n}\n@keyframes _ngcontent-%COMP%_yay {\n  25% {\n    transform: rotate(-15deg);\n  }\n  75% {\n    transform: rotate(15deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_wow-face {\n  15%, 25% {\n    transform: rotate(20deg) translateX(-25px);\n  }\n  45%, 65% {\n    transform: rotate(-20deg) translateX(25px);\n  }\n  75%, 100% {\n    transform: rotate(0deg) translateX(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_wow-brow {\n  15%, 65% {\n    top: 25px;\n  }\n  75%, 100%, 0% {\n    top: 15px;\n  }\n}\n@keyframes _ngcontent-%COMP%_wow-mouth {\n  10%, 30% {\n    width: 20px;\n    height: 20px;\n    left: calc(50% - 10px);\n  }\n  50%, 70% {\n    width: 30px;\n    height: 40px;\n    left: calc(50% - 15px);\n  }\n  75%, 100% {\n    height: 50px;\n  }\n}\n@keyframes _ngcontent-%COMP%_sad-face {\n  25%, 35% {\n    top: -15px;\n  }\n  55%, 95% {\n    top: 10px;\n  }\n  100%, 0% {\n    top: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_sad-mouth {\n  25%, 35% {\n    transform: scale(0.85);\n    top: 70px;\n  }\n  55%, 100%, 0% {\n    transform: scale(1);\n    top: 80px;\n  }\n}\n@keyframes _ngcontent-%COMP%_tear-drop {\n  0%, 100% {\n    display: block;\n    left: 35px;\n    top: 15px;\n    transform: rotate(45deg) scale(0);\n  }\n  25% {\n    display: block;\n    left: 35px;\n    transform: rotate(45deg) scale(2);\n  }\n  49.9% {\n    display: block;\n    left: 35px;\n    top: 65px;\n    transform: rotate(45deg) scale(0);\n  }\n  50% {\n    display: block;\n    left: -35px;\n    top: 15px;\n    transform: rotate(45deg) scale(0);\n  }\n  75% {\n    display: block;\n    left: -35px;\n    transform: rotate(45deg) scale(2);\n  }\n  99.9% {\n    display: block;\n    left: -35px;\n    top: 65px;\n    transform: rotate(45deg) scale(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_hands-up {\n  25% {\n    transform: rotate(15deg);\n  }\n  50% {\n    transform: rotate(-15deg) translateY(-10px);\n  }\n  75%, 100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_thumbs-up {\n  25% {\n    transform: rotate(20deg);\n  }\n  50%, 100% {\n    transform: rotate(5deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_angry-color {\n  45%, 60% {\n    background-size: 250%;\n  }\n  85%, 100%, 0% {\n    background-size: 100%;\n  }\n}\n@keyframes _ngcontent-%COMP%_angry-face {\n  35%, 60% {\n    transform: translateX(0) translateY(10px) scale(0.9);\n  }\n  40%, 50% {\n    transform: translateX(-5px) translateY(10px) scale(0.9);\n  }\n  45%, 55% {\n    transform: translateX(5px) translateY(10px) scale(0.9);\n  }\n}\n@keyframes _ngcontent-%COMP%_angry-mouth {\n  25%, 50% {\n    height: 6px;\n    bottom: 25px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZW1vamkvZW1vamkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtBQVBKOztBQVVBO0VBQ0MsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQXZCa0I7RUF3QmxCLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVBEO0FBU0M7RUFDQyxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0E1QmlCO0FBcUJuQjtBQVVJO0VBQ0ksMEJBQUE7QUFSUjs7QUFZQTtFQUNDLGtCQUFBO0FBVEQ7QUFXQztFQUNDLGtCQUFBO0VBQ0EsV0FBQTtBQVRGOztBQWFBO0VBQ0MsY0FBQTtFQUNBLGVBQUE7QUFWRDs7QUFhQTtFQUNDLG1CQXhEa0I7QUE4Q25CO0FBWUM7RUFDQyxlQUFBO0FBVkY7QUFhQztFQUNDLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFoRWtCO0VBaUVsQixrQkFBQTtFQUNBLFVBQUE7RUFDQSxzQ0FBQTtBQVhGO0FBYUU7RUFDQyxVQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLG9GQUFBO0FBWEg7QUFlQztFQUNDLGlDQUFBO0VBQ0EsbUNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUNBQUE7QUFiRjtBQWVFO0VBQ0MsMEJBQUE7RUFDQSxtQkE1RmlCO0VBNkZqQixXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1D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O0lBQWEsWUFBQTtJQUFjLHNCQUFBO0VBdEJwQztFQXVCRDtJQUFXLFlBQUE7RUFwQlY7QUFDRjtBQXNCQTtFQUNDO0lBQVUsVUFBQTtFQW5CVDtFQW9CRDtJQUFVLFNBQUE7RUFqQlQ7RUFrQkQ7SUFBVSxNQUFBO0VBZlQ7QUFDRjtBQWlCQTtFQUNDO0lBQVUsc0JBQUE7SUFBd0IsU0FBQTtFQWJqQztFQWNEO0lBQWUsbUJBQUE7SUFBcUIsU0FBQTtFQVZuQztBQUNGO0FBWUE7RUFDQztJQUFVLGNBQUE7SUFBZSxVQUFBO0lBQVksU0FBQTtJQUFXLGlDQUFBO0VBTi9DO0VBT0Q7SUFBSyxjQUFBO0lBQWUsVUFBQTtJQUFZLGlDQUFBO0VBRi9CO0VBR0Q7SUFBTyxjQUFBO0lBQWUsVUFBQTtJQUFZLFNBQUE7SUFBVyxpQ0FBQTtFQUc1QztFQUZEO0lBQUssY0FBQTtJQUFlLFdBQUE7SUFBYSxTQUFBO0lBQVcsaUNBQUE7RUFRM0M7RUFQRDtJQUFLLGNBQUE7SUFBZSxXQUFBO0lBQWEsaUNBQUE7RUFZaEM7RUFYRDtJQUFPLGNBQUE7SUFBZSxXQUFBO0lBQWEsU0FBQTtJQUFXLGlDQUFBO0VBaUI3QztBQUNGO0FBZkE7RUFDQztJQUFLLHdCQUFBO0VBa0JKO0VBakJEO0lBQUssMkNBQUE7RUFvQko7RUFuQkQ7SUFBVyx1QkFBQTtFQXNCVjtBQUNGO0FBcEJBO0VBQ0M7SUFBSyx3QkFBQTtFQXVCSjtFQXRCRDtJQUFXLHVCQUFBO0VBeUJWO0FBQ0Y7QUF2QkE7RUFDQztJQUFVLHFCQUFBO0VBMEJUO0VBekJEO0lBQWUscUJBQUE7RUE0QmQ7QUFDRjtBQTFCQTtFQUNDO0lBQVUsb0RBQUE7RUE2QlQ7RUE1QkQ7SUFBVSx1REFBQTtFQStCVDtFQTlCRDtJQUFVLHNEQUFBO0VBaUNUO0FBQ0Y7QUEvQkE7RUFDQztJQUFVLFdBQUE7SUFBYSxZQUFBO0VBbUN0QjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiJGVtb2ppLWJhc2UtY29sb3I6ICNGRkRBNkE7XHJcbiRlbW9qaS1saWtlLWNvbG9yOiAjNTQ4REZGO1xyXG4kZW1vamktbG92ZS1jb2xvcjogI0Y1NTA2NDtcclxuJGVtb2ppLWFuZ3J5LWNvbG9yOiAjRDUyMzRDO1xyXG4kZW1vamktd2hpdGUtY29sb3I6ICNGRkZGRkY7XHJcbiRlbW9qaS1ibGFjay1jb2xvcjogIzAwMDAwMDtcclxuJGVtb2ppLXRleHQtY29sb3I6ICM4QThBOEE7XHJcblxyXG46aG9zdCB7IFxyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDJweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDIlKTtcclxufVxyXG5cclxuLmVtb2ppIHtcclxuXHR3aWR0aDogMTIwcHg7XHJcblx0aGVpZ2h0OiAxMjBweDtcclxuXHRtYXJnaW46IDE1cHggMTVweCA0MHB4O1xyXG5cdGJhY2tncm91bmQ6ICRlbW9qaS1iYXNlLWNvbG9yO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIFxyXG5cdCY6YWZ0ZXIge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Ym90dG9tOiAtNDBweDtcclxuXHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHRcdHdpZHRoOiA2MHB4O1xyXG5cdFx0bGVmdDogY2FsYyg1MCUgLSAzMHB4KTtcclxuXHRcdGNvbG9yOiAkZW1vamktdGV4dC1jb2xvcjsgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLmhpZ2hsaWdodCB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUsIDEuNSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5lbW9qaV9fZmFjZSwgLmVtb2ppX19leWVicm93cywgLmVtb2ppX19leWVzLCAuZW1vamlfX21vdXRoLCAuZW1vamlfX3Rvbmd1ZSwgLmVtb2ppX19oZWFydCwgLmVtb2ppX19oYW5kLCAuZW1vamlfX3RodW1iIHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHJcblx0JjpiZWZvcmUsICY6YWZ0ZXIge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0Y29udGVudDogJyc7XHJcblx0fSAgXHJcbn1cclxuXHJcbi5lbW9qaV9fZmFjZSB7XHJcblx0d2lkdGg6IGluaGVyaXQ7XHJcblx0aGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcblxyXG4uZW1vamktLWxpa2Uge1xyXG5cdGJhY2tncm91bmQ6ICRlbW9qaS1saWtlLWNvbG9yO1xyXG4gIFxyXG5cdCY6YWZ0ZXIge1xyXG5cdFx0Y29udGVudDogJ0xpa2UnO1xyXG5cdH1cclxuXHJcblx0LmVtb2ppX19oYW5kIHtcclxuXHRcdGxlZnQ6IDI1cHg7XHJcblx0XHRib3R0b206IDMwcHg7XHJcblx0XHR3aWR0aDogMjBweDtcclxuXHRcdGhlaWdodDogNDBweDsgXHJcblx0XHRiYWNrZ3JvdW5kOiAkZW1vamktd2hpdGUtY29sb3I7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0XHR6LWluZGV4OiAwO1xyXG5cdFx0YW5pbWF0aW9uOiBoYW5kcy11cCAycyBsaW5lYXIgaW5maW5pdGU7XHJcblx0XHRcclxuXHRcdCY6YmVmb3JlIHtcclxuXHRcdFx0bGVmdDogMjVweDtcclxuXHRcdFx0Ym90dG9tOiA1cHg7XHJcblx0XHRcdHdpZHRoOiA0MHB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG5cdFx0XHRoZWlnaHQ6IDEwcHg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDJweCAxMHB4IDEwcHggMnB4O1xyXG5cdFx0XHRib3gtc2hhZG93OiAxcHggLTlweCAwIDFweCAkZW1vamktd2hpdGUtY29sb3IsIDJweCAtMTlweCAwIDJweCAkZW1vamktd2hpdGUtY29sb3IsIDNweCAtMjlweCAwIDNweCAkZW1vamktd2hpdGUtY29sb3I7ICBcclxuXHRcdH0gIFxyXG5cdH1cclxuICBcclxuXHQuZW1vamlfX3RodW1iIHtcclxuXHRcdGJvcmRlci1ib3R0b206IDIwcHggc29saWQgJGVtb2ppLXdoaXRlLWNvbG9yO1xyXG5cdFx0Ym9yZGVyLWxlZnQ6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcblx0XHR0b3A6IC0yNXB4O1xyXG5cdFx0cmlnaHQ6IC0yNXB4O1xyXG5cdFx0ei1pbmRleDogMjtcclxuXHRcdHRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xyXG5cdFx0dHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcclxuXHRcdGFuaW1hdGlvbjogdGh1bWJzLXVwIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuXHJcblx0XHQmOmJlZm9yZSB7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgMCAwO1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAkZW1vamktd2hpdGUtY29sb3I7XHJcblx0XHRcdHdpZHRoOiAxMHB4O1xyXG5cdFx0XHRoZWlnaHQ6IDEycHg7XHJcblx0XHRcdGxlZnQ6IC0xMHB4O1xyXG5cdFx0XHR0b3A6IC04cHg7XHJcblx0XHRcdHRyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7XHJcblx0XHRcdHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcclxuXHRcdFx0Ym94LXNoYWRvdzogLTFweCA0cHggMCAtMXB4ICRlbW9qaS13aGl0ZS1jb2xvcjtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5lbW9qaS0tbG92ZSB7XHJcblx0YmFja2dyb3VuZDogJGVtb2ppLWxvdmUtY29sb3I7XHJcbiAgXHJcblx0JjphZnRlciB7XHJcblx0XHRjb250ZW50OiAnTG92ZSc7XHJcblx0fVxyXG5cclxuXHQuZW1vamlfX2hlYXJ0IHtcclxuXHRcdGxlZnQ6IGNhbGMoNTAlIC0gNDBweCk7XHJcblx0XHR0b3A6IGNhbGMoNTAlIC0gNDBweCk7XHJcblx0XHR3aWR0aDogODBweDtcclxuXHRcdGhlaWdodDogODBweDtcclxuXHRcdGFuaW1hdGlvbjogaGVhcnQtYmVhdCAxcyBsaW5lYXIgaW5maW5pdGUgYWx0ZXJuYXRlO1xyXG5cclxuXHRcdCY6YmVmb3JlLCAmOmFmdGVyIHtcclxuXHRcdFx0bGVmdDogY2FsYyg1MCUgLSAyMHB4KTtcclxuXHRcdFx0dG9wOiBjYWxjKDUwJSAtIDMycHgpO1xyXG5cdFx0XHR3aWR0aDogNDBweDtcclxuXHRcdFx0aGVpZ2h0OiA2NHB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAkZW1vamktd2hpdGUtY29sb3I7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAwIDA7XHJcblx0XHR9XHJcblx0ICBcclxuXHRcdCY6YmVmb3JlIHtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoMjBweCkgcm90YXRlKC00NWRlZyk7XHJcblx0XHRcdHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcclxuXHRcdH1cclxuXHJcblx0XHQmOmFmdGVyIHtcclxuXHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTIwcHgpIHJvdGF0ZSg0NWRlZyk7XHJcblx0XHRcdHRyYW5zZm9ybS1vcmlnaW4gOjEwMCUgMTAwJTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5lbW9qaS0taGFoYSB7XHJcblx0JjphZnRlciB7XHJcblx0XHRjb250ZW50OiAnSGFoYSc7XHJcblx0fVxyXG5cclxuXHQuZW1vamlfX2ZhY2Uge1xyXG5cdFx0YW5pbWF0aW9uOiBoYWhhLWZhY2UgMnMgbGluZWFyIGluZmluaXRlO1xyXG5cdH1cclxuICBcclxuXHQuZW1vamlfX2V5ZXMge1xyXG5cdFx0d2lkdGg6IDI2cHg7XHJcblx0XHRoZWlnaHQ6IDZweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHRcdGxlZnQ6IGNhbGMoNTAlIC0gMTNweCk7XHJcblx0XHR0b3A6IDM1cHg7XHJcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgyMGRlZyk7XHJcblx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRcdGJveC1zaGFkb3c6IC0yNXB4IDVweCAwIDAgJGVtb2ppLWJsYWNrLWNvbG9yLCAgMjVweCAtNXB4IDAgMCAkZW1vamktYmxhY2stY29sb3I7XHJcblx0ICBcclxuXHRcdCY6YWZ0ZXIge1xyXG5cdFx0ICBsZWZ0OiAwO1xyXG5cdFx0ICB0b3A6IDA7XHJcblx0XHQgIHdpZHRoOiAyNnB4O1xyXG5cdFx0ICBoZWlnaHQ6IDZweDtcclxuXHRcdCAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG5cdFx0ICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDBkZWcpO1xyXG5cdFx0ICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRcdCAgYm94LXNoYWRvdzogLTI1cHggLTVweCAwIDAgJGVtb2ppLWJsYWNrLWNvbG9yLCAgMjVweCA1cHggMCAwICRlbW9qaS1ibGFjay1jb2xvcjtcclxuXHRcdH1cclxuXHR9XHJcbiAgXHJcblx0LmVtb2ppX19tb3V0aCB7XHJcblx0XHR3aWR0aDogODBweDtcclxuXHRcdGhlaWdodDogNDBweDtcclxuXHRcdGxlZnQ6IGNhbGMoNTAlIC0gNDBweCk7XHJcblx0XHR0b3A6IDUwJTtcclxuXHRcdGJhY2tncm91bmQ6ICRlbW9qaS1ibGFjay1jb2xvcjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDAgMCA0MHB4IDQwcHg7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0ei1pbmRleDogMTsgIFxyXG5cdFx0YW5pbWF0aW9uOiBoYWhhLW1vdXRoIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuXHR9XHJcbiBcclxuXHQuZW1vamlfX3Rvbmd1ZSB7XHJcblx0XHR3aWR0aDogNzBweDtcclxuXHRcdGhlaWdodDogMzBweDtcclxuXHRcdGJhY2tncm91bmQ6ICRlbW9qaS1sb3ZlLWNvbG9yO1xyXG5cdFx0bGVmdDogY2FsYyg1MCUgLSAzNXB4KTtcclxuXHRcdGJvdHRvbTogLTEwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7ICBcclxuXHR9ICBcclxufVxyXG5cclxuLmVtb2ppLS15YXkge1xyXG5cdCY6YWZ0ZXIge1xyXG5cdFx0Y29udGVudDogJ1lheSc7XHJcblx0XHRhbmltYXRpb246IHlheS1yZXZlcnNlIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuXHR9XHJcbiAgXHJcblx0LmVtb2ppX19mYWNlIHtcclxuXHRcdGFuaW1hdGlvbjogeWF5IDFzIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcblx0fVxyXG5cclxuXHQuZW1vamlfX2V5ZWJyb3dzIHtcclxuXHRcdGxlZnQ6IGNhbGMoNTAlIC0gM3B4KTtcclxuXHRcdHRvcDogMzBweDtcclxuXHRcdGhlaWdodDogNnB4O1xyXG5cdFx0d2lkdGg6IDZweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0Ym94LXNoYWRvdzogLTZweCAwIDAgMCAkZW1vamktYmxhY2stY29sb3IsIC0zNnB4IDAgMCAwcHggJGVtb2ppLWJsYWNrLWNvbG9yLCA2cHggMCAwIDAgJGVtb2ppLWJsYWNrLWNvbG9yLCAzNnB4IDAgMCAwcHggJGVtb2ppLWJsYWNrLWNvbG9yO1xyXG5cdFx0XHJcblx0XHQmOmJlZm9yZSwgJjphZnRlciB7XHJcblx0XHRcdHdpZHRoOiAzNnB4O1xyXG5cdFx0XHRoZWlnaHQ6IDE4cHg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDYwcHggNjBweCAwIDA7XHJcblx0XHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0XHRib3JkZXI6IDZweCBzb2xpZCBibGFjaztcclxuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0Ym9yZGVyLWJvdHRvbTogMDtcclxuXHRcdFx0Ym90dG9tOiAzcHg7XHJcblx0XHRcdGxlZnQ6IGNhbGMoNTAlIC0gMThweCk7XHJcblx0XHR9XHJcblxyXG5cdFx0JjpiZWZvcmUge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogLTIxcHg7ICBcclxuXHRcdH1cclxuXHJcblx0XHQmOmFmdGVyIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IDIxcHg7ICBcclxuXHRcdH1cclxuXHR9XHJcbiAgXHJcblx0LmVtb2ppX19tb3V0aCB7XHJcblx0XHR0b3A6IDYwcHg7XHJcblx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRcdGxlZnQ6IDUwJTsgIFxyXG5cdCAgXHJcblx0XHQmOmFmdGVyIHtcclxuXHRcdCAgd2lkdGg6IDgwcHg7XHJcblx0XHQgIGhlaWdodDogODBweDtcclxuXHRcdCAgbGVmdDogY2FsYyg1MCUgLSA0MHB4KTtcclxuXHRcdCAgdG9wOiAtNzVweDtcclxuXHRcdCAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0ICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgIFxyXG5cdFx0ICBib3JkZXI6IDZweCBzb2xpZCAkZW1vamktYmxhY2stY29sb3I7XHJcblx0XHQgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHQgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0ICBib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHQgIGJvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHQgIHotaW5kZXg6IDE7XHJcblx0XHR9XHJcblxyXG5cdFx0JjpiZWZvcmUge1xyXG5cdFx0XHR3aWR0aDogNnB4O1xyXG5cdFx0XHRoZWlnaHQ6IDZweDtcclxuXHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0Ym90dG9tOiA1cHg7XHJcblx0XHRcdGxlZnQ6IGNhbGMoNTAlIC0gM3B4KTtcclxuXHRcdFx0Ym94LXNoYWRvdzogLTI1cHggMCAwIDAgJGVtb2ppLWJsYWNrLWNvbG9yLCAyNXB4IDAgMCAwICRlbW9qaS1ibGFjay1jb2xvciwgLTM1cHggLTJweCAzMHB4IDEwcHggJGVtb2ppLWFuZ3J5LWNvbG9yLCAzNXB4IC0ycHggMzBweCAxMHB4ICRlbW9qaS1hbmdyeS1jb2xvcjtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5lbW9qaS0td293IHtcclxuXHQmOmFmdGVyIHtcclxuXHRcdGNvbnRlbnQ6ICdXb3cnO1xyXG5cdH1cclxuICAuZW1vamlfX2ZhY2Uge1xyXG5cdGFuaW1hdGlvbjogd293LWZhY2UgM3MgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cdFxyXG4gIFxyXG4gIC5lbW9qaV9fZXllYnJvd3Mge1xyXG5cdFx0bGVmdDogY2FsYyg1MCUgLSAzcHgpO1xyXG5cdFx0aGVpZ2h0OiA2cHg7XHJcblx0XHR3aWR0aDogNnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0XHRib3gtc2hhZG93OiAtMThweCAwIDAgMCAkZW1vamktYmxhY2stY29sb3IsIC0zM3B4IDAgMCAwICRlbW9qaS1ibGFjay1jb2xvciwgMThweCAwIDAgMCAkZW1vamktYmxhY2stY29sb3IsIDMzcHggMCAwIDAgJGVtb2ppLWJsYWNrLWNvbG9yO1xyXG5cdFx0YW5pbWF0aW9uOiB3b3ctYnJvdyAzcyBsaW5lYXIgaW5maW5pdGU7XHJcblx0XHJcblx0XHQmOmJlZm9yZSwgJjphZnRlciB7XHJcblx0XHRcdHdpZHRoOiAyNHB4O1xyXG5cdFx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0XHRcdGJvcmRlcjogNnB4IHNvbGlkICRlbW9qaS1ibGFjay1jb2xvcjtcclxuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0Ym9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0XHRib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0XHR0b3A6IC0zcHg7XHJcblx0XHRcdGxlZnQ6IGNhbGMoNTAlIC0gMTJweCk7ICBcclxuXHRcdH1cclxuXHJcblx0XHQmOmJlZm9yZSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAtMjVweDsgIFxyXG5cdFx0fVxyXG5cclxuXHRcdCY6YWZ0ZXIge1xyXG5cdFx0XHRtYXJnaW4tbGVmdDogMjVweDsgIFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LmVtb2ppX19leWVzIHtcclxuXHRcdHdpZHRoOiAxNnB4O1xyXG5cdFx0aGVpZ2h0OiAyNHB4O1xyXG5cdFx0bGVmdDogY2FsYyg1MCUgLSA4cHgpO1xyXG5cdFx0dG9wOiAzNXB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0XHRib3gtc2hhZG93OiAyNXB4IDAgMCAwICRlbW9qaS1ibGFjay1jb2xvciwgLTI1cHggMCAwIDAgJGVtb2ppLWJsYWNrLWNvbG9yO1xyXG5cdH1cclxuIFxyXG5cdC5lbW9qaV9fbW91dGgge1xyXG5cdFx0d2lkdGg6IDMwcHg7XHJcblx0XHRoZWlnaHQ6IDQ1cHg7XHJcblx0XHRsZWZ0OiBjYWxjKDUwJSAtIDE1cHgpO1xyXG5cdFx0dG9wOiA1MCU7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRiYWNrZ3JvdW5kOiAkZW1vamktYmxhY2stY29sb3I7XHJcblx0XHRhbmltYXRpb246IHdvdy1tb3V0aCAzcyBsaW5lYXIgaW5maW5pdGU7XHJcblx0fVxyXG59XHJcblxyXG4uZW1vamktLXNhZCB7XHJcblx0JjphZnRlciB7XHJcblx0XHRjb250ZW50OiAnU2FkJztcclxuXHR9XHJcblxyXG5cdC5lbW9qaV9fZmFjZSB7XHJcblx0XHRhbmltYXRpb246IHNhZC1mYWNlIDJzIGVhc2UtaW4gaW5maW5pdGU7XHJcblx0fVxyXG4gIFxyXG5cdC5lbW9qaV9fZXllYnJvd3Mge1xyXG5cdFx0bGVmdDogY2FsYyg1MCUgLSAzcHgpO1xyXG5cdFx0dG9wOiAzNXB4O1xyXG5cdFx0aGVpZ2h0OiA2cHg7XHJcblx0XHR3aWR0aDogNnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0XHRib3gtc2hhZG93OiAtNDBweCA5cHggMCAwICRlbW9qaS1ibGFjay1jb2xvciwgLTI1cHggMCAwIDAgJGVtb2ppLWJsYWNrLWNvbG9yLCAyNXB4IDAgMCAwICRlbW9qaS1ibGFjay1jb2xvciwgNDBweCA5cHggMCAwICRlbW9qaS1ibGFjay1jb2xvciwgO1xyXG5cdFx0XHJcblx0XHQmOmJlZm9yZSwgJjphZnRlciB7XHJcblx0XHRcdHdpZHRoOiAzMHB4O1xyXG5cdFx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0XHRcdGJvcmRlcjogNnB4IHNvbGlkICRlbW9qaS1ibGFjay1jb2xvcjtcclxuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0Ym9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0XHRib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0XHR0b3A6IDJweDtcclxuXHRcdFx0bGVmdDogY2FsYyg1MCUgLSAxNXB4KTsgIFxyXG5cdFx0fVxyXG5cclxuXHRcdCY6YmVmb3JlIHtcclxuXHRcdFx0bWFyZ2luLWxlZnQ6IC0zMHB4O1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtMzBkZWcpOyAgXHJcblx0XHR9XHJcblxyXG5cdFx0JjphZnRlciB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XHJcblx0XHR9XHJcblx0fVxyXG4gIFxyXG5cdC5lbW9qaV9fZXllcyB7XHJcblx0XHR3aWR0aDogMTRweDtcclxuXHRcdGhlaWdodDogMTZweDtcclxuXHRcdGxlZnQ6IGNhbGMoNTAlIC0gN3B4KTtcclxuXHRcdHRvcDogNTBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdFx0Ym94LXNoYWRvdzogMjVweCAwIDAgMCAkZW1vamktYmxhY2stY29sb3IsIC0yNXB4IDAgMCAwICRlbW9qaS1ibGFjay1jb2xvcjtcclxuXHJcblx0XHQmOmFmdGVyIHtcclxuXHRcdFx0YmFja2dyb3VuZDogJGVtb2ppLWxpa2UtY29sb3I7XHJcblx0XHRcdHdpZHRoOiAxMnB4O1xyXG5cdFx0XHRoZWlnaHQ6IDEycHg7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiA2cHg7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDAgMTAwJSA0MCUgNTAlIC8gMCA1MCUgNDAlIDEwMCU7XHJcblx0XHRcdHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xyXG5cdFx0XHRhbmltYXRpb246IHRlYXItZHJvcCAycyBlYXNlLWluIGluZmluaXRlO1xyXG5cdFx0fSAgXHJcblx0fVxyXG4gIFxyXG5cdC5lbW9qaV9fbW91dGgge1xyXG5cdFx0d2lkdGg6IDYwcHg7XHJcblx0XHRoZWlnaHQ6IDgwcHg7XHJcblx0XHRsZWZ0OiBjYWxjKDUwJSAtIDMwcHgpO1xyXG5cdFx0dG9wOiA4MHB4O1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdGJvcmRlcjogNnB4IHNvbGlkICRlbW9qaS1ibGFjay1jb2xvcjsgIFxyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHRib3JkZXItbGVmdC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0XHRib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0XHRhbmltYXRpb246IHNhZC1tb3V0aCAycyBlYXNlLWluIGluZmluaXRlO1xyXG5cclxuXHRcdCY6YWZ0ZXIge1xyXG5cdFx0XHR3aWR0aDogNnB4O1xyXG5cdFx0XHRoZWlnaHQ6IDZweDtcclxuXHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0dG9wOiA0cHg7XHJcblx0XHRcdGxlZnQ6IGNhbGMoNTAlIC0gM3B4KTtcclxuXHRcdFx0Ym94LXNoYWRvdzogLTE4cHggMCAwIDAgJGVtb2ppLWJsYWNrLWNvbG9yLCAxOHB4IDAgMCAwICRlbW9qaS1ibGFjay1jb2xvcjsgIFxyXG5cdFx0fSAgXHJcblx0fVxyXG59XHJcblxyXG4uZW1vamktLWFuZ3J5IHtcclxuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoJGVtb2ppLWFuZ3J5LWNvbG9yIC0xMCUsICRlbW9qaS1iYXNlLWNvbG9yKTtcclxuXHRiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcblx0YW5pbWF0aW9uOiBhbmdyeS1jb2xvciAycyBlYXNlLWluIGluZmluaXRlO1xyXG4gIFxyXG5cdCY6YWZ0ZXIge1xyXG5cdFx0Y29udGVudDogJ0FuZ3J5JztcclxuXHR9XHJcblxyXG4gIC5lbW9qaV9fZmFjZSB7XHJcblx0ICBhbmltYXRpb246IGFuZ3J5LWZhY2UgMnMgZWFzZS1pbiBpbmZpbml0ZTtcclxuXHR9ICBcclxuXHJcblx0LmVtb2ppX19leWVicm93cyB7XHJcblx0XHRsZWZ0OiBjYWxjKDUwJSAtIDNweCk7XHJcblx0XHR0b3A6IDU1cHg7XHJcblx0XHRoZWlnaHQ6IDZweDtcclxuXHRcdHdpZHRoOiA2cHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRcdGJveC1zaGFkb3c6IC00NHB4IDVweCAwIDAgJGVtb2ppLWJsYWNrLWNvbG9yLCAtN3B4IDE2cHggMCAwICRlbW9qaS1ibGFjay1jb2xvciwgN3B4IDE2cHggMCAwICRlbW9qaS1ibGFjay1jb2xvciwgNDRweCA1cHggMCAwICRlbW9qaS1ibGFjay1jb2xvciwgO1xyXG5cdFx0XHJcblx0XHQmOmJlZm9yZSwgJjphZnRlciB7XHJcblx0XHRcdHdpZHRoOiA1MHB4O1xyXG5cdFx0XHRoZWlnaHQ6IDIwcHg7XHJcblx0XHRcdGJvcmRlcjogNnB4IHNvbGlkICRlbW9qaS1ibGFjay1jb2xvcjtcclxuXHRcdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRcdFx0Ym9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0XHRib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cdFx0XHR0b3A6IDA7XHJcblx0XHRcdGxlZnQ6IGNhbGMoNTAlIC0gMjVweCk7ICBcclxuXHRcdH1cclxuXHJcblx0XHQmOmJlZm9yZSB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAtMjVweDtcclxuXHRcdFx0dHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpOyAgXHJcblx0XHR9XHJcblxyXG5cdFx0JjphZnRlciB7XHJcblx0XHRcdG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG5cdFx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpO1xyXG5cdFx0fVxyXG5cdH1cclxuICBcclxuXHQuZW1vamlfX2V5ZXMge1xyXG5cdFx0d2lkdGg6IDEycHg7XHJcblx0XHRoZWlnaHQ6IDEycHg7XHJcblx0XHRsZWZ0OiBjYWxjKDUwJSAtIDZweCk7XHJcblx0XHR0b3A6IDcwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0XHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRcdGJveC1zaGFkb3c6IDI1cHggMCAwIDAgJGVtb2ppLWJsYWNrLWNvbG9yLCAtMjVweCAwIDAgMCAkZW1vamktYmxhY2stY29sb3I7XHJcblx0fVxyXG4gIFxyXG5cdC5lbW9qaV9fbW91dGgge1xyXG5cdFx0d2lkdGg6IDM2cHg7XHJcblx0XHRoZWlnaHQ6IDE4cHg7XHJcblx0XHRsZWZ0OiBjYWxjKDUwJSAtIDE4cHgpO1xyXG5cdFx0Ym90dG9tOiAxNXB4O1xyXG5cdFx0YmFja2dyb3VuZDogJGVtb2ppLWJsYWNrLWNvbG9yO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0YW5pbWF0aW9uOiBhbmdyeS1tb3V0aCAycyBlYXNlLWluIGluZmluaXRlO1xyXG5cdH0gIFxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGhlYXJ0LWJlYXQge1xyXG5cdDI1JSB7dHJhbnNmb3JtOiBzY2FsZSgxLjEpO31cclxuXHQ3NSUge3RyYW5zZm9ybTogc2NhbGUoMC42KTt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgaGFoYS1mYWNlIHtcclxuXHQxMCUsIDMwJSwgNTAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjVweCk7fVxyXG5cdDIwJSwgNDAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTVweCk7fVxyXG5cdDYwJSwgODAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7fVxyXG5cdDcwJSwgOTAlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO31cclxufVxyXG5cclxuQGtleWZyYW1lcyBoYWhhLW1vdXRoIHtcclxuXHQxMCUsIDMwJSwgNTAlIHt0cmFuc2Zvcm06IHNjYWxlKDAuNik7IHRvcDogNDUlO31cclxuXHQyMCUsIDQwJSB7dHJhbnNmb3JtOiBzY2FsZSgwLjgpOyB0b3A6IDQ1JTt9XHJcblx0NjAlLCA4MCUge3RyYW5zZm9ybTogc2NhbGUoMSk7IHRvcDogNTAlO31cclxuXHQ3MCUge3RyYW5zZm9ybTogc2NhbGUoMS4yKTsgdG9wOiA1MCU7fVxyXG5cdDkwJSB7dHJhbnNmb3JtOiBzY2FsZSgxLjEpOyB0b3A6IDUwJTt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgeWF5IHtcclxuXHQyNSUge3RyYW5zZm9ybTogcm90YXRlKC0xNWRlZyk7fVxyXG5cdDc1JSB7dHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpO31cclxufVxyXG5cclxuQGtleWZyYW1lcyB3b3ctZmFjZSB7XHJcblx0MTUlLCAyNSUge3RyYW5zZm9ybTogcm90YXRlKDIwZGVnKSB0cmFuc2xhdGVYKC0yNXB4KTt9XHJcblx0NDUlLCA2NSUge3RyYW5zZm9ybTogcm90YXRlKC0yMGRlZykgdHJhbnNsYXRlWCgyNXB4KTt9XHJcblx0NzUlLCAxMDAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGVYKDApO31cclxufVxyXG5cclxuQGtleWZyYW1lcyB3b3ctYnJvdyB7XHJcblx0MTUlLCA2NSUge3RvcDogMjVweDt9XHJcblx0NzUlLCAxMDAlLCAwJSB7dG9wOiAxNXB4O31cclxufVxyXG5cclxuQGtleWZyYW1lcyB3b3ctbW91dGgge1xyXG5cdDEwJSwgMzAlIHt3aWR0aDogMjBweDsgaGVpZ2h0OiAyMHB4OyBsZWZ0OiBjYWxjKDUwJSAtIDEwcHgpO31cclxuXHQ1MCUsIDcwJSB7d2lkdGg6IDMwcHg7IGhlaWdodDogNDBweDsgbGVmdDogY2FsYyg1MCUgLSAxNXB4KTt9XHJcblx0NzUlLCAxMDAlIHtoZWlnaHQ6IDUwcHg7fVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNhZC1mYWNlIHtcclxuXHQyNSUsIDM1JSB7dG9wOiAtMTVweDt9XHJcblx0NTUlLCA5NSUge3RvcDogMTBweDt9XHJcblx0MTAwJSwgMCUge3RvcDogMDt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc2FkLW1vdXRoIHtcclxuXHQyNSUsIDM1JSB7dHJhbnNmb3JtOiBzY2FsZSgwLjg1KTsgdG9wOiA3MHB4O31cclxuXHQ1NSUsIDEwMCUsIDAlIHt0cmFuc2Zvcm06IHNjYWxlKDEpOyB0b3A6ODBweDt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdGVhci1kcm9wIHtcclxuXHQwJSwgMTAwJSB7ZGlzcGxheTpibG9jazsgbGVmdDogMzVweDsgdG9wOiAxNXB4OyB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUoMCk7fVxyXG5cdDI1JSB7ZGlzcGxheTpibG9jazsgbGVmdDogMzVweDsgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlKDIpO31cclxuXHQ0OS45JSB7ZGlzcGxheTpibG9jazsgbGVmdDogMzVweDsgdG9wOiA2NXB4OyB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUoMCk7fVxyXG5cdDUwJSB7ZGlzcGxheTpibG9jazsgbGVmdDogLTM1cHg7IHRvcDogMTVweDsgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlKDApO31cclxuXHQ3NSUge2Rpc3BsYXk6YmxvY2s7IGxlZnQ6IC0zNXB4OyB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUoMik7fVxyXG5cdDk5LjklIHtkaXNwbGF5OmJsb2NrOyBsZWZ0OiAtMzVweDsgdG9wOiA2NXB4OyB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUoMCk7fVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGhhbmRzLXVwIHtcclxuXHQyNSUge3RyYW5zZm9ybTogcm90YXRlKDE1ZGVnKTt9XHJcblx0NTAlIHt0cmFuc2Zvcm06IHJvdGF0ZSgtMTVkZWcpIHRyYW5zbGF0ZVkoLTEwcHgpO31cclxuXHQ3NSUsIDEwMCUge3RyYW5zZm9ybTogcm90YXRlKDBkZWcpO31cclxufVxyXG5cclxuQGtleWZyYW1lcyB0aHVtYnMtdXAge1xyXG5cdDI1JSB7dHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO31cclxuXHQ1MCUsIDEwMCUge3RyYW5zZm9ybTogcm90YXRlKDVkZWcpO31cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmdyeS1jb2xvciB7XHJcblx0NDUlLCA2MCUge2JhY2tncm91bmQtc2l6ZTogMjUwJTt9XHJcblx0ODUlLCAxMDAlLCAwJSB7YmFja2dyb3VuZC1zaXplOiAxMDAlO31cclxufVxyXG5cclxuQGtleWZyYW1lcyBhbmdyeS1mYWNlIHtcclxuXHQzNSUsIDYwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVkoMTBweCkgc2NhbGUoMC45KTt9XHJcblx0NDAlLCA1MCUge3RyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KSB0cmFuc2xhdGVZKDEwcHgpIHNjYWxlKDAuOSk7fVxyXG5cdDQ1JSwgNTUlIHt0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNXB4KSB0cmFuc2xhdGVZKDEwcHgpIHNjYWxlKDAuOSk7fVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuZ3J5LW1vdXRoIHtcclxuXHQyNSUsIDUwJSB7aGVpZ2h0OiA2cHg7IGJvdHRvbTogMjVweDt9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"],
  changeDetection: 0
});

/***/ }),

/***/ 698:
/*!*********************************************************!*\
  !*** ./src/app/shared/components/emoji/emoji.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmojiModule": () => (/* binding */ EmojiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _emoji_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emoji.component */ 4160);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class EmojiModule {}
EmojiModule.ɵfac = function EmojiModule_Factory(t) {
  return new (t || EmojiModule)();
};
EmojiModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: EmojiModule
});
EmojiModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EmojiModule, {
    declarations: [_emoji_component__WEBPACK_IMPORTED_MODULE_0__.EmojiComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_emoji_component__WEBPACK_IMPORTED_MODULE_0__.EmojiComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_home_views_emoji-detection_emoji-detection_module_ts.js.map