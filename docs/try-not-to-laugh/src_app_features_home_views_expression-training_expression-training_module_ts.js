"use strict";
(self["webpackChunktry_not_to_laugh"] = self["webpackChunktry_not_to_laugh"] || []).push([["src_app_features_home_views_expression-training_expression-training_module_ts"],{

/***/ 2387:
/*!***********************************************************************************************!*\
  !*** ./src/app/features/home/views/expression-training/expression-training-routing.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpressionTrainingRoutingModule": () => (/* binding */ ExpressionTrainingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _expression_training_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expression-training.component */ 8955);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _expression_training_component__WEBPACK_IMPORTED_MODULE_0__.ExpressionTrainingComponent
}];
class ExpressionTrainingRoutingModule {}
ExpressionTrainingRoutingModule.ɵfac = function ExpressionTrainingRoutingModule_Factory(t) {
  return new (t || ExpressionTrainingRoutingModule)();
};
ExpressionTrainingRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ExpressionTrainingRoutingModule
});
ExpressionTrainingRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExpressionTrainingRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 8955:
/*!******************************************************************************************!*\
  !*** ./src/app/features/home/views/expression-training/expression-training.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpressionTrainingComponent": () => (/* binding */ ExpressionTrainingComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/utils/common */ 2768);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_services_window_windos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/window/windos.service */ 5027);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_camera_detection_camera_detection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/camera-detection/camera-detection.component */ 1983);





const _c0 = ["cameraDetection"];
function ExpressionTrainingComponent_h1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("Hai perso, dovevi fare una faccia \"", ctx_r0.targetExpression.label, "\" invece ne hai fatta una \"", ctx_r0.loseExpression.label, "\"!");
  }
}
function ExpressionTrainingComponent_h1_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Hai vinto!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ExpressionTrainingComponent_h1_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Non riesco a vedere la tua faccia!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ExpressionTrainingComponent_h1_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Fai una faccia: ", ctx_r3.targetExpression.label, "");
  }
}
function ExpressionTrainingComponent_h1_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Bravo! adesso torna con una espressione normale per una nuova sfida");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ExpressionTrainingComponent_div_7_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Record: ", ctx_r7.recordDuration, "");
  }
}
function ExpressionTrainingComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ExpressionTrainingComponent_div_7_span_3_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("background", ctx_r5.matchDuration > ctx_r5.recordDuration ? "green" : "blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Espressioni: ", ctx_r5.matchDuration, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.recordDuration);
  }
}
const EXPRESSIONS = [{
  expression: 'happy',
  label: 'felice'
}, {
  expression: 'sad',
  label: 'triste'
}, {
  expression: 'angry',
  label: 'arrabbiata'
}, {
  expression: 'fearful',
  label: 'spaventata'
}, {
  expression: 'disgusted',
  label: 'disgustata'
}, {
  expression: 'surprised',
  label: 'sorpresa'
}];
class ExpressionTrainingComponent {
  constructor(cdr, windowService, elRef) {
    this.cdr = cdr;
    this.windowService = windowService;
    this.elRef = elRef;
    // epressione da fare
    this.targetExpression = (0,src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_0__.randomItemFromArray)(EXPRESSIONS);
    // se è richiesta l'espressione neutrale
    this.neutralRequested = false;
    // true se l'espressione facciale è stata trovata nella webcam
    this.faceDetected = false;
    // se true l'espressione facciale è stata trovata almeno una volta
    this.firstDetectionHappen = false;
    // se true il riconoscimento facciale è pronto
    this.detectionReady = false;
    // se true youtube e il riconoscimento facciale sono pronti
    this.allReady = false;
    // partita terminata
    this.endMatch = false;
    // partita terminata come persa
    this.loseMatch = false;
    // partita terminata come vinta
    this.winMatch = false;
    // true se la partita può iniziare
    this.readyToGame = false;
    // dimensioni dell'area di gioco
    this.width = 0;
    this.height = 0;
    // record di espressioni indovinate
    this.recordDuration = 0;
    // numero di espressioni indovinate
    this.matchDuration = 0;
    this.recordDuration = this.getLocalStorageDuration();
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
      let foundTargetExpression = null;
      let foundNonTargetExpression = null;
      for (const ex of EXPRESSIONS) {
        const value = e[ex.expression];
        if (ex.expression === this.targetExpression.expression) {
          if (value > 0.4) {
            foundTargetExpression = ex;
          }
        } else {
          if (value > 0.94) {
            foundNonTargetExpression = ex;
          }
        }
      }
      if (foundNonTargetExpression) {
        this.loseExpression = foundNonTargetExpression;
        this.endGame(false);
        return;
      }
      // se l'espressione è maggiore di ... genreriamo una nuova epressione
      if (foundTargetExpression) {
        if (!this.neutralRequested) {
          (0,src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_0__.beep)();
          this.matchDuration++;
        }
        // l'utente deve tornare con una espressione neutra
        this.neutralRequested = true;
      } else {
        // se è richiesta una espressione neutrale e l'utente la fa
        if (this.neutralRequested && e.neutral > 0.6) {
          this.targetExpression = (0,src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_0__.randomItemFromArray)(EXPRESSIONS);
          this.neutralRequested = false;
        }
      }
    }
    this.manageReadyToGameState();
  }
  /**
   * Termina la partita
   */
  endGame(userWin) {
    if (!this.endMatch) {
      this.winMatch = userWin;
      this.loseMatch = !this.winMatch;
      this.endMatch = true;
      // mettiamo in pausa il video della webcam
      this.cameraDetection.pauseVideo();
      // facciamo vibrare il cellulare
      window.navigator.vibrate(200);
      this.manageReadyToGameState();
      if (this.matchDuration > this.recordDuration) {
        this.setLocalStorageDuration(this.matchDuration);
      }
      this.cdr.markForCheck();
    }
  }
  /**
   * Gestisce lo stato della partita (se è pronta per essere giocata o meno)
   */
  manageReadyToGameState() {
    // può essere giocata se non è terminata e se abbiamo trovato la faccia
    const readyToGame = !this.endMatch && this.faceDetected;
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
  /**
   * Recupera dal localstorage il record di espressioni indovinate
   */
  getLocalStorageDuration() {
    return +localStorage.getItem(`expression-training-duration`);
  }
  /**
   * Setta nel localstorage il record di espressioni indovinate
   */
  setLocalStorageDuration(value) {
    localStorage.setItem(`expression-training-duration`, value.toString());
  }
}
ExpressionTrainingComponent.ɵfac = function ExpressionTrainingComponent_Factory(t) {
  return new (t || ExpressionTrainingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_window_windos_service__WEBPACK_IMPORTED_MODULE_1__.WindowService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef));
};
ExpressionTrainingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ExpressionTrainingComponent,
  selectors: [["app-expression-training"]],
  viewQuery: function ExpressionTrainingComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.cameraDetection = _t.first);
    }
  },
  decls: 11,
  vars: 14,
  consts: [[1, "game-container"], [1, "info"], [4, "ngIf"], ["class", "badge-container", 4, "ngIf"], [1, "webcam"], [3, "width", "height", "drawDetection", "detectionTimer", "detectionReady", "detectionChanges", "firstDetection", "detectionFace"], ["cameraDetection", ""], [1, "badge-container"], [1, "badge", "badge-duration"], ["class", "badge badge-record-duration", 4, "ngIf"], [1, "badge", "badge-record-duration"]],
  template: function ExpressionTrainingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ExpressionTrainingComponent_h1_2_Template, 2, 2, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ExpressionTrainingComponent_h1_3_Template, 2, 0, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ExpressionTrainingComponent_h1_4_Template, 2, 0, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ExpressionTrainingComponent_h1_5_Template, 2, 1, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ExpressionTrainingComponent_h1_6_Template, 2, 0, "h1", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ExpressionTrainingComponent_div_7_Template, 4, 4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4)(9, "app-camera-detection", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("detectionReady", function ExpressionTrainingComponent_Template_app_camera_detection_detectionReady_9_listener($event) {
        return ctx.onDetectionReady($event);
      })("detectionChanges", function ExpressionTrainingComponent_Template_app_camera_detection_detectionChanges_9_listener($event) {
        return ctx.onDetectionChanges($event);
      })("firstDetection", function ExpressionTrainingComponent_Template_app_camera_detection_firstDetection_9_listener($event) {
        return ctx.onFirstDetection($event);
      })("detectionFace", function ExpressionTrainingComponent_Template_app_camera_detection_detectionFace_9_listener($event) {
        return ctx.onDetectionFace($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", ctx.width + "px")("height", ctx.height + "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.endMatch && ctx.loseMatch);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.endMatch && ctx.winMatch);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.detectionReady && !ctx.endMatch && !ctx.faceDetected);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.faceDetected && !ctx.endMatch && !ctx.neutralRequested);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.faceDetected && !ctx.endMatch && ctx.neutralRequested);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.faceDetected || ctx.endMatch);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("width", ctx.width)("height", ctx.height)("drawDetection", true)("detectionTimer", 100);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_components_camera_detection_camera_detection_component__WEBPACK_IMPORTED_MODULE_2__.CameraDetectionComponent],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n\n.game-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.game-container[_ngcontent-%COMP%]   .youtube[_ngcontent-%COMP%], .game-container[_ngcontent-%COMP%]   .webcam[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n}\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  width: 100%;\n  color: black;\n  position: absolute;\n  bottom: 10px;\n  text-align: center;\n  z-index: 10000;\n}\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 3px 3px 3px 3px;\n  border-radius: 3px;\n  margin-bottom: 5px;\n  display: inline;\n}\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 3px 3px 3px 3px;\n  border-radius: 3px;\n  white-space: nowrap;\n}\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%]   .badge-happy[_ngcontent-%COMP%] {\n  color: white;\n}\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%]   .badge-record-duration[_ngcontent-%COMP%], .game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%]   .badge-duration[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%]   .badge-duration[_ngcontent-%COMP%] {\n  color: white;\n}\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%]   .badge-record-duration[_ngcontent-%COMP%] {\n  background: yellow;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaG9tZS92aWV3cy9leHByZXNzaW9uLXRyYWluaW5nL2V4cHJlc3Npb24tdHJhaW5pbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFBSjtBQUVJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUFSO0FBR0k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQURSO0FBR1E7RUFDSSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFEWjtBQUlRO0VBQ0ksV0FBQTtBQUZaO0FBSVk7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFGaEI7QUFJWTtFQUNJLFlBQUE7QUFGaEI7QUFJWTtFQUNJLGdCQUFBO0FBRmhCO0FBSVk7RUFDSSxZQUFBO0FBRmhCO0FBSVk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFGaEIiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZ2FtZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAueW91dHViZSwgLndlYmNhbSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgZmxleDogMSAxIGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm8ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB6LWluZGV4OiAxMDAwMDtcclxuXHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4IDNweCAzcHggM3B4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJhZGdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgLmJhZGdlIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCAzcHggM3B4IDNweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJhZGdlLWhhcHB5IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYmFkZ2UtcmVjb3JkLWR1cmF0aW9uLCAuYmFkZ2UtZHVyYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYmFkZ2UtZHVyYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5iYWRnZS1yZWNvcmQtZHVyYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogeWVsbG93OyBcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjazsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 2078:
/*!***************************************************************************************!*\
  !*** ./src/app/features/home/views/expression-training/expression-training.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpressionTrainingModule": () => (/* binding */ ExpressionTrainingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _expression_training_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expression-training.component */ 8955);
/* harmony import */ var _expression_training_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expression-training-routing.module */ 2387);
/* harmony import */ var src_app_shared_pipe_humanize_time_humanize_time_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pipe/humanize-time/humanize-time.module */ 6453);
/* harmony import */ var src_app_shared_components_camera_detection_camera_detection_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/camera-detection/camera-detection.module */ 5960);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






class ExpressionTrainingModule {}
ExpressionTrainingModule.ɵfac = function ExpressionTrainingModule_Factory(t) {
  return new (t || ExpressionTrainingModule)();
};
ExpressionTrainingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: ExpressionTrainingModule
});
ExpressionTrainingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _expression_training_routing_module__WEBPACK_IMPORTED_MODULE_1__.ExpressionTrainingRoutingModule, src_app_shared_pipe_humanize_time_humanize_time_module__WEBPACK_IMPORTED_MODULE_2__.HumanizeTimeModule, src_app_shared_components_camera_detection_camera_detection_module__WEBPACK_IMPORTED_MODULE_3__.CameraDetectionModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ExpressionTrainingModule, {
    declarations: [_expression_training_component__WEBPACK_IMPORTED_MODULE_0__.ExpressionTrainingComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _expression_training_routing_module__WEBPACK_IMPORTED_MODULE_1__.ExpressionTrainingRoutingModule, src_app_shared_pipe_humanize_time_humanize_time_module__WEBPACK_IMPORTED_MODULE_2__.HumanizeTimeModule, src_app_shared_components_camera_detection_camera_detection_module__WEBPACK_IMPORTED_MODULE_3__.CameraDetectionModule],
    exports: [_expression_training_component__WEBPACK_IMPORTED_MODULE_0__.ExpressionTrainingComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_home_views_expression-training_expression-training_module_ts.js.map