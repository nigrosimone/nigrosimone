(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-expression-training-expression-training-module"],{

/***/ "1lbk":
/*!***************************************************************************************!*\
  !*** ./src/app/features/home/views/expression-training/expression-training.module.ts ***!
  \***************************************************************************************/
/*! exports provided: ExpressionTrainingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpressionTrainingModule", function() { return ExpressionTrainingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _expression_training_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expression-training.component */ "tgUH");
/* harmony import */ var _expression_training_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expression-training-routing.module */ "HKBc");
/* harmony import */ var src_app_shared_pipe_humanize_time_humanize_time_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pipe/humanize-time/humanize-time.module */ "8Vwt");
/* harmony import */ var src_app_shared_components_camera_detection_camera_detection_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/camera-detection/camera-detection.module */ "v6By");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class ExpressionTrainingModule {
}
ExpressionTrainingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: ExpressionTrainingModule });
ExpressionTrainingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function ExpressionTrainingModule_Factory(t) { return new (t || ExpressionTrainingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _expression_training_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExpressionTrainingRoutingModule"],
            src_app_shared_pipe_humanize_time_humanize_time_module__WEBPACK_IMPORTED_MODULE_3__["HumanizeTimeModule"],
            src_app_shared_components_camera_detection_camera_detection_module__WEBPACK_IMPORTED_MODULE_4__["CameraDetectionModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ExpressionTrainingModule, { declarations: [_expression_training_component__WEBPACK_IMPORTED_MODULE_1__["ExpressionTrainingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _expression_training_routing_module__WEBPACK_IMPORTED_MODULE_2__["ExpressionTrainingRoutingModule"],
        src_app_shared_pipe_humanize_time_humanize_time_module__WEBPACK_IMPORTED_MODULE_3__["HumanizeTimeModule"],
        src_app_shared_components_camera_detection_camera_detection_module__WEBPACK_IMPORTED_MODULE_4__["CameraDetectionModule"]], exports: [_expression_training_component__WEBPACK_IMPORTED_MODULE_1__["ExpressionTrainingComponent"]] }); })();


/***/ }),

/***/ "HKBc":
/*!***********************************************************************************************!*\
  !*** ./src/app/features/home/views/expression-training/expression-training-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: ExpressionTrainingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpressionTrainingRoutingModule", function() { return ExpressionTrainingRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _expression_training_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expression-training.component */ "tgUH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _expression_training_component__WEBPACK_IMPORTED_MODULE_1__["ExpressionTrainingComponent"]
    },
];
class ExpressionTrainingRoutingModule {
}
ExpressionTrainingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ExpressionTrainingRoutingModule });
ExpressionTrainingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ExpressionTrainingRoutingModule_Factory(t) { return new (t || ExpressionTrainingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ExpressionTrainingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "tgUH":
/*!******************************************************************************************!*\
  !*** ./src/app/features/home/views/expression-training/expression-training.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ExpressionTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpressionTrainingComponent", function() { return ExpressionTrainingComponent; });
/* harmony import */ var src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/utils/common */ "lM/l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_window_windos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/window/windos.service */ "tpjD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_camera_detection_camera_detection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/camera-detection/camera-detection.component */ "eVtn");





const _c0 = ["cameraDetection"];
function ExpressionTrainingComponent_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("Hai perso, dovevi fare una faccia \"", ctx_r0.targetExpression.label, "\" invece ne hai fatta una \"", ctx_r0.loseExpression.label, "\"!");
} }
function ExpressionTrainingComponent_h1_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Hai vinto!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ExpressionTrainingComponent_h1_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Non riesco a vedere la tua faccia!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ExpressionTrainingComponent_h1_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Fai una faccia: ", ctx_r3.targetExpression.label, "");
} }
function ExpressionTrainingComponent_h1_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Bravo! adesso torna con una espressione normale per una nuova sfida");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ExpressionTrainingComponent_div_7_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Record: ", ctx_r7.recordDuration, "");
} }
function ExpressionTrainingComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ExpressionTrainingComponent_div_7_span_3_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx_r5.matchDuration > ctx_r5.recordDuration ? "green" : "blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Espressioni: ", ctx_r5.matchDuration, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.recordDuration);
} }
const EXPRESSIONS = [
    { expression: 'happy', label: 'felice' },
    { expression: 'sad', label: 'triste' },
    { expression: 'angry', label: 'arrabbiata' },
    { expression: 'fearful', label: 'spaventata' },
    { expression: 'disgusted', label: 'disgustata' },
    { expression: 'surprised', label: 'sorpresa' }
];
class ExpressionTrainingComponent {
    constructor(cdr, windowService, elRef) {
        this.cdr = cdr;
        this.windowService = windowService;
        this.elRef = elRef;
        // epressione da fare
        this.targetExpression = Object(src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_0__["randomItemFromArray"])(EXPRESSIONS);
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
            let foundTargetExpression = null;
            let foundNonTargetExpression = null;
            for (const ex of EXPRESSIONS) {
                const value = e[ex.expression];
                if (ex.expression === this.targetExpression.expression) {
                    if (value > 0.4) {
                        foundTargetExpression = ex;
                    }
                }
                else {
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
                    Object(src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_0__["beep"])();
                    this.matchDuration++;
                }
                // l'utente deve tornare con una espressione neutra
                this.neutralRequested = true;
            }
            else {
                // se è richiesta una espressione neutrale e l'utente la fa
                if (this.neutralRequested && e.neutral > 0.6) {
                    this.targetExpression = Object(src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_0__["randomItemFromArray"])(EXPRESSIONS);
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
ExpressionTrainingComponent.ɵfac = function ExpressionTrainingComponent_Factory(t) { return new (t || ExpressionTrainingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_window_windos_service__WEBPACK_IMPORTED_MODULE_2__["WindowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
ExpressionTrainingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ExpressionTrainingComponent, selectors: [["app-expression-training"]], viewQuery: function ExpressionTrainingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cameraDetection = _t.first);
    } }, decls: 11, vars: 14, consts: [[1, "game-container"], [1, "info"], [4, "ngIf"], ["class", "badge-container", 4, "ngIf"], [1, "webcam"], [3, "width", "height", "drawDetection", "detectionTimer", "detectionReady", "detectionChanges", "firstDetection", "detectionFace"], ["cameraDetection", ""], [1, "badge-container"], [1, "badge", "badge-duration"], ["class", "badge badge-record-duration", 4, "ngIf"], [1, "badge", "badge-record-duration"]], template: function ExpressionTrainingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ExpressionTrainingComponent_h1_2_Template, 2, 2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ExpressionTrainingComponent_h1_3_Template, 2, 0, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ExpressionTrainingComponent_h1_4_Template, 2, 0, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ExpressionTrainingComponent_h1_5_Template, 2, 1, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ExpressionTrainingComponent_h1_6_Template, 2, 0, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ExpressionTrainingComponent_div_7_Template, 4, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "app-camera-detection", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("detectionReady", function ExpressionTrainingComponent_Template_app_camera_detection_detectionReady_9_listener($event) { return ctx.onDetectionReady($event); })("detectionChanges", function ExpressionTrainingComponent_Template_app_camera_detection_detectionChanges_9_listener($event) { return ctx.onDetectionChanges($event); })("firstDetection", function ExpressionTrainingComponent_Template_app_camera_detection_firstDetection_9_listener($event) { return ctx.onFirstDetection($event); })("detectionFace", function ExpressionTrainingComponent_Template_app_camera_detection_detectionFace_9_listener($event) { return ctx.onDetectionFace($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.width + "px")("height", ctx.height + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.endMatch && ctx.loseMatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.endMatch && ctx.winMatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.detectionReady && !ctx.endMatch && !ctx.faceDetected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.faceDetected && !ctx.endMatch && !ctx.neutralRequested);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.faceDetected && !ctx.endMatch && ctx.neutralRequested);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.faceDetected || ctx.endMatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", ctx.width)("height", ctx.height)("drawDetection", true)("detectionTimer", 100);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_camera_detection_camera_detection_component__WEBPACK_IMPORTED_MODULE_4__["CameraDetectionComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n\n.game-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.game-container[_ngcontent-%COMP%]   .youtube[_ngcontent-%COMP%], .game-container[_ngcontent-%COMP%]   .webcam[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n}\n\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  width: 100%;\n  color: black;\n  position: absolute;\n  bottom: 10px;\n  text-align: center;\n  z-index: 10000;\n}\n\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 3px 3px 3px 3px;\n  border-radius: 3px;\n  margin-bottom: 5px;\n  display: inline;\n}\n\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 3px 3px 3px 3px;\n  border-radius: 3px;\n  white-space: nowrap;\n}\n\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%]   .badge-happy[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%]   .badge-record-duration[_ngcontent-%COMP%], .game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%]   .badge-duration[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%]   .badge-duration[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%]   .badge-record-duration[_ngcontent-%COMP%] {\n  background: yellow;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGV4cHJlc3Npb24tdHJhaW5pbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFFSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFBUjs7QUFHSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBRFI7O0FBR1E7RUFDSSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFEWjs7QUFJUTtFQUNJLFdBQUE7QUFGWjs7QUFJWTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUZoQjs7QUFJWTtFQUNJLFlBQUE7QUFGaEI7O0FBSVk7RUFDSSxnQkFBQTtBQUZoQjs7QUFJWTtFQUNJLFlBQUE7QUFGaEI7O0FBSVk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFGaEIiLCJmaWxlIjoiZXhwcmVzc2lvbi10cmFpbmluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5nYW1lLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIC55b3V0dWJlLCAud2ViY2FtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuaW5mbyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDAwO1xyXG5cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggM3B4IDNweCAzcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmFkZ2UtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAuYmFkZ2Uge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDNweCAzcHggM3B4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYmFkZ2UtaGFwcHkge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5iYWRnZS1yZWNvcmQtZHVyYXRpb24sIC5iYWRnZS1kdXJhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5iYWRnZS1kdXJhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJhZGdlLXJlY29yZC1kdXJhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7IFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=views-expression-training-expression-training-module.js.map