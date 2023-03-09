"use strict";
(self["webpackChunktry_not_to_laugh"] = self["webpackChunktry_not_to_laugh"] || []).push([["src_app_features_home_views_arcade_arcade_module_ts"],{

/***/ 9970:
/*!*********************************************************************!*\
  !*** ./src/app/features/home/views/arcade/arcade-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArcadeRoutingModule": () => (/* binding */ ArcadeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _arcade_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arcade.component */ 468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _arcade_component__WEBPACK_IMPORTED_MODULE_0__.ArcadeComponent
}];
class ArcadeRoutingModule {}
ArcadeRoutingModule.ɵfac = function ArcadeRoutingModule_Factory(t) {
  return new (t || ArcadeRoutingModule)();
};
ArcadeRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: ArcadeRoutingModule
});
ArcadeRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ArcadeRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 468:
/*!****************************************************************!*\
  !*** ./src/app/features/home/views/arcade/arcade.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArcadeComponent": () => (/* binding */ ArcadeComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/utils/common */ 2768);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_services_window_windos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/window/windos.service */ 5027);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_camera_detection_camera_detection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/camera-detection/camera-detection.component */ 1983);
/* harmony import */ var _shared_components_youtube_player_wrapper_youtube_player_wrapper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/youtube-player-wrapper/youtube-player-wrapper.component */ 731);
/* harmony import */ var _shared_pipe_humanize_time_humanize_time_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/pipe/humanize-time/humanize-time.pipe */ 1660);







const _c0 = ["cameraDetection"];
const _c1 = ["youtube"];
function ArcadeComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9)(1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ArcadeComponent_div_2_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.restartGame());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "RIPROVA");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function ArcadeComponent_h1_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Hai perso, hai sorriso!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ArcadeComponent_h1_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Hai vinto, non hai sorriso!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ArcadeComponent_h1_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Non riesco a vedere la tua faccia!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function ArcadeComponent_div_6_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "humanizeTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Record: ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, ctx_r9.recordDuration * 1000), "");
  }
}
function ArcadeComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11)(1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "humanizeTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ArcadeComponent_div_6_span_7_Template, 3, 3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", ctx_r4.happy > 0.3 ? "red" : "green");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Felicit\u00E0: ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](3, 7, ctx_r4.happy * 100, "1.1-1"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background", ctx_r4.timeElapse > ctx_r4.recordDuration ? "green" : "blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Resistenza: ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 10, ctx_r4.timeElapse * 1000), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.recordDuration);
  }
}
function ArcadeComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16)(1, "app-youtube-player-wrapper", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ready", function ArcadeComponent_div_7_Template_app_youtube_player_wrapper_ready_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r11.onYoutubeReady($event));
    })("stateChange", function ArcadeComponent_div_7_Template_app_youtube_player_wrapper_stateChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r13.onStateChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("display", !ctx_r5.readyToGame ? "none" : "flex");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("width", ctx_r5.width)("height", ctx_r5.height)("videoId", ctx_r5.videoId)("seek", ctx_r5.recordDuration);
  }
}
const VIDEOS = ['_TnkkZq-dbU', 'g6PSwYx3jA0', 'pl0KA-wPT8A'];
class ArcadeComponent {
  constructor(cdr, windowService, elRef) {
    this.cdr = cdr;
    this.windowService = windowService;
    this.elRef = elRef;
    // id del video di youtube
    this.videoId = (0,src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_0__.randomItemFromArray)(VIDEOS);
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
    // valore di felicità dell'espressione facciale
    this.happy = 0;
    // true se la partita può iniziare
    this.readyToGame = false;
    // true se il player video di youtube è stato caricato
    this.youtubeReady = false;
    // secondi visti del video di youtube
    this.timeElapse = 0;
    // massimo di secondi visti del video di youtube
    this.recordDuration = 0;
    // dimensioni dell'area di gioco
    this.width = 0;
    this.height = 0;
    this.recordDuration = this.getRecordStorageDuration();
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
   * Evento di cambiamento di stato del player di YouTube
   */
  onStateChange(e) {
    if (e.data === YT.PlayerState.ENDED) {
      this.endGame(true);
    }
  }
  /**
   * Evento di caricamento completato del player di YouTube
   */
  onYoutubeReady(e) {
    this.youtubeReady = true;
    this.doThirdPartyOnReady();
  }
  /**
   * Evento di caricamento completato del riconoscimento facciale
   */
  onDetectionReady(e) {
    this.detectionReady = true;
    this.doThirdPartyOnReady();
  }
  /**
   * Quando il player youtube o il riconoscimento sono ready, gestiamo le parti comuni
   */
  doThirdPartyOnReady() {
    this.allReady = this.youtubeReady && this.detectionReady;
    this.doResize();
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
   * Evento di cambiamento del riconoscimento facciale
   */
  onDetectionChanges(e) {
    // ridimensioniamo l'area di gioco
    this.doResize();
    // se il player di youtube non  è pronto non facciamo nient'altro
    if (!this.youtubeReady) {
      return;
    }
    // faccia trovata?
    if (e) {
      const happy = e.happy;
      if (this.happy !== happy) {
        this.happy = happy;
        this.cdr.markForCheck();
      }
      // se la felicità è maggiore di ... ha perso
      if (this.happy > 0.8) {
        this.endGame(false);
        return;
      }
    } else {
      // faccia non trovata...
      this.happy = 0;
    }
    // recuperiamo il tempo di esecuzione del video di youtube
    const timeElapse = this.youtube.getCurrentTimeIntSeeked();
    if (this.timeElapse !== timeElapse) {
      this.timeElapse = timeElapse;
    }
    this.manageDetectionState();
  }
  /**
   * Gestisce lo stato di ricerca della faccia nello stream video
   */
  manageDetectionState() {
    this.manageReadyToGameState();
    // se non abbiamo la faccia, mettiamo anche in pausa il video di youtube,
    // questo perchè il video parte in autoplay la prima volta
    if (!this.faceDetected || !document.hasFocus()) {
      this.youtube.pauseVideo();
    } else {
      this.youtube.playVideo();
    }
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
      // fermiamo il video di youtube
      this.youtube.stopVideo();
      // facciamo vibrare il cellulare
      window.navigator.vibrate(200);
      this.manageReadyToGameState();
      this.cdr.markForCheck();
      this.setLocalStorageDuration(this.timeElapse);
    }
  }
  restartGame() {
    this.endMatch = false;
    // riavviamo il video della webcam
    this.cameraDetection.playVideo();
    this.manageReadyToGameState();
    this.recordDuration = this.getRecordStorageDuration();
    this.cdr.markForCheck();
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
   * Recupera dal localstorage l'ultima durata del video corrente
   */
  getLocalStorageDuration() {
    return +localStorage.getItem(`arcade-${this.videoId}-duration`);
  }
  /**
   * Setta nel localstorage l'ultima durata del video corrente
   */
  setLocalStorageDuration(value) {
    localStorage.setItem(`arcade-${this.videoId}-duration`, value.toString());
    this.setRecordStorageDuration(value);
  }
  /**
   * Recupera il valore record
   */
  getRecordStorageDuration() {
    return +localStorage.getItem(`arcade-record-duration`);
  }
  /**
   * Setta il valore del record
   */
  setRecordStorageDuration(value) {
    const key = `arcade-record-duration`;
    const record = +localStorage.getItem(key);
    if (value > record) {
      localStorage.setItem(key, value.toString());
    }
  }
}
ArcadeComponent.ɵfac = function ArcadeComponent_Factory(t) {
  return new (t || ArcadeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_core_services_window_windos_service__WEBPACK_IMPORTED_MODULE_1__.WindowService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef));
};
ArcadeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: ArcadeComponent,
  selectors: [["app-arcade"]],
  viewQuery: function ArcadeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.cameraDetection = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.youtube = _t.first);
    }
  },
  decls: 11,
  vars: 16,
  consts: [[1, "game-container"], [1, "info"], ["class", "retry", 4, "ngIf"], [4, "ngIf"], ["class", "badge-container", 4, "ngIf"], ["class", "youtube", 3, "display", 4, "ngIf"], [1, "webcam"], [3, "width", "height", "drawDetection", "detectionTimer", "detectionReady", "detectionChanges", "firstDetection", "detectionFace"], ["cameraDetection", ""], [1, "retry"], [1, "retry-button", 3, "click"], [1, "badge-container"], [1, "badge", "badge-happy"], [1, "badge", "badge-duration"], ["class", "badge badge-record-duration", 4, "ngIf"], [1, "badge", "badge-record-duration"], [1, "youtube"], [3, "width", "height", "videoId", "seek", "ready", "stateChange"], ["youtube", ""]],
  template: function ArcadeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ArcadeComponent_div_2_Template, 4, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ArcadeComponent_h1_3_Template, 2, 0, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ArcadeComponent_h1_4_Template, 2, 0, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ArcadeComponent_h1_5_Template, 2, 0, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ArcadeComponent_div_6_Template, 8, 12, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ArcadeComponent_div_7_Template, 3, 6, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 6)(9, "app-camera-detection", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("detectionReady", function ArcadeComponent_Template_app_camera_detection_detectionReady_9_listener($event) {
        return ctx.onDetectionReady($event);
      })("detectionChanges", function ArcadeComponent_Template_app_camera_detection_detectionChanges_9_listener($event) {
        return ctx.onDetectionChanges($event);
      })("firstDetection", function ArcadeComponent_Template_app_camera_detection_firstDetection_9_listener($event) {
        return ctx.onFirstDetection($event);
      })("detectionFace", function ArcadeComponent_Template_app_camera_detection_detectionFace_9_listener($event) {
        return ctx.onDetectionFace($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("width", ctx.width + "px")("height", ctx.height + "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.endMatch);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.endMatch && ctx.loseMatch);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.endMatch && ctx.winMatch);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.detectionReady && !ctx.endMatch && !ctx.faceDetected);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.faceDetected || ctx.endMatch);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.endMatch);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("display", ctx.readyToGame ? "none" : "flex");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("width", ctx.width)("height", ctx.height)("drawDetection", false)("detectionTimer", 100);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_camera_detection_camera_detection_component__WEBPACK_IMPORTED_MODULE_2__.CameraDetectionComponent, _shared_components_youtube_player_wrapper_youtube_player_wrapper_component__WEBPACK_IMPORTED_MODULE_3__.YoutubePlayerWrapperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe, _shared_pipe_humanize_time_humanize_time_pipe__WEBPACK_IMPORTED_MODULE_4__.HumanizeTimePipe],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n\n.game-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.game-container[_ngcontent-%COMP%]   .youtube[_ngcontent-%COMP%], .game-container[_ngcontent-%COMP%]   .webcam[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n}\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  width: 100%;\n  color: black;\n  position: absolute;\n  bottom: 10px;\n  text-align: center;\n  z-index: 10000;\n}\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 3px 3px 3px 3px;\n  border-radius: 3px;\n  margin-bottom: 5px;\n  display: inline;\n}\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 3px 3px 3px 3px;\n  border-radius: 3px;\n  white-space: nowrap;\n}\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%]   .badge-happy[_ngcontent-%COMP%] {\n  color: white;\n}\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%]   .badge-record-duration[_ngcontent-%COMP%], .game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%]   .badge-duration[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%]   .badge-duration[_ngcontent-%COMP%] {\n  color: white;\n}\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%]   .badge-record-duration[_ngcontent-%COMP%] {\n  background: yellow;\n  color: black;\n}\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .retry[_ngcontent-%COMP%] {\n  padding-bottom: 2vh;\n}\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .retry[_ngcontent-%COMP%]   .retry-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  opacity: 0.4;\n  filter: alpha(opacity=40);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaG9tZS92aWV3cy9hcmNhZGUvYXJjYWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQUo7QUFFSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFBUjtBQUdJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFEUjtBQUdRO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRFo7QUFJUTtFQUNJLFdBQUE7QUFGWjtBQUlZO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRmhCO0FBSVk7RUFDSSxZQUFBO0FBRmhCO0FBSVk7RUFDSSxnQkFBQTtBQUZoQjtBQUlZO0VBQ0ksWUFBQTtBQUZoQjtBQUlZO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBRmhCO0FBS1E7RUFDSSxtQkFBQTtBQUhaO0FBSVk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBRmhCIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmdhbWUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgLnlvdXR1YmUsIC53ZWJjYW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgei1pbmRleDogMTAwMDA7XHJcblxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDNweCAzcHggM3B4IDNweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5iYWRnZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIC5iYWRnZSB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggM3B4IDNweCAzcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5iYWRnZS1oYXBweSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJhZGdlLXJlY29yZC1kdXJhdGlvbiwgLmJhZGdlLWR1cmF0aW9uIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJhZGdlLWR1cmF0aW9uIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYmFkZ2UtcmVjb3JkLWR1cmF0aW9uIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHllbGxvdzsgXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZXRyeXtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDJ2aDtcclxuICAgICAgICAgICAgLnJldHJ5LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7273:
/*!*************************************************************!*\
  !*** ./src/app/features/home/views/arcade/arcade.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArcadeModule": () => (/* binding */ ArcadeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _arcade_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arcade.component */ 468);
/* harmony import */ var _arcade_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arcade-routing.module */ 9970);
/* harmony import */ var src_app_shared_pipe_humanize_time_humanize_time_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/pipe/humanize-time/humanize-time.module */ 6453);
/* harmony import */ var src_app_shared_components_camera_detection_camera_detection_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/camera-detection/camera-detection.module */ 5960);
/* harmony import */ var src_app_shared_components_youtube_player_wrapper_youtube_player_wrapper_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/youtube-player-wrapper/youtube-player-wrapper.module */ 1960);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);







class ArcadeModule {}
ArcadeModule.ɵfac = function ArcadeModule_Factory(t) {
  return new (t || ArcadeModule)();
};
ArcadeModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
  type: ArcadeModule
});
ArcadeModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _arcade_routing_module__WEBPACK_IMPORTED_MODULE_1__.ArcadeRoutingModule, src_app_shared_pipe_humanize_time_humanize_time_module__WEBPACK_IMPORTED_MODULE_2__.HumanizeTimeModule, src_app_shared_components_camera_detection_camera_detection_module__WEBPACK_IMPORTED_MODULE_3__.CameraDetectionModule, src_app_shared_components_youtube_player_wrapper_youtube_player_wrapper_module__WEBPACK_IMPORTED_MODULE_4__.YoutubePlayerWrapperModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ArcadeModule, {
    declarations: [_arcade_component__WEBPACK_IMPORTED_MODULE_0__.ArcadeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _arcade_routing_module__WEBPACK_IMPORTED_MODULE_1__.ArcadeRoutingModule, src_app_shared_pipe_humanize_time_humanize_time_module__WEBPACK_IMPORTED_MODULE_2__.HumanizeTimeModule, src_app_shared_components_camera_detection_camera_detection_module__WEBPACK_IMPORTED_MODULE_3__.CameraDetectionModule, src_app_shared_components_youtube_player_wrapper_youtube_player_wrapper_module__WEBPACK_IMPORTED_MODULE_4__.YoutubePlayerWrapperModule],
    exports: [_arcade_component__WEBPACK_IMPORTED_MODULE_0__.ArcadeComponent]
  });
})();

/***/ }),

/***/ 731:
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/youtube-player-wrapper/youtube-player-wrapper.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YoutubePlayerWrapperComponent": () => (/* binding */ YoutubePlayerWrapperComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/youtube-player */ 2163);



const _c0 = ["youtube"];
class YoutubePlayerWrapperComponent {
  constructor() {
    this.stateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.seekChecked = false;
    this.seekApplied = false;
  }
  ngOnInit() {
    this.playerVars = {
      autoplay: YT.AutoPlay.NoAutoPlay,
      controls: YT.Controls.Hide,
      showinfo: YT.ShowInfo.Hide,
      modestbranding: YT.ModestBranding.Modest,
      rel: YT.RelatedVideos.Hide
    };
  }
  /**
   * Evento di cambiamento di stato del player di YouTube
   */
  onStateChange(e) {
    if (e.data === YT.PlayerState.PLAYING) {
      if (!this.seekApplied && !this.seekChecked && this.seek > 0) {
        this.seekChecked = true;
        if (this.seek < this.youtube.getDuration()) {
          this.youtube.seekTo(this.seek, true);
          this.seekApplied = true;
        }
      }
    }
    this.stateChange.emit(e);
  }
  /**
   * Mette in pausa la webcam
   */
  pauseVideo() {
    this.youtube.pauseVideo();
  }
  /**
   * Mette in play la webcam
   */
  playVideo() {
    this.youtube.playVideo();
  }
  /**
   * Ferma il video
   */
  stopVideo() {
    this.youtube.stopVideo();
  }
  /**
   * Torna i secondi visualizzati del video
   */
  getCurrentTime() {
    return this.youtube.getCurrentTime();
  }
  /**
   * Torna i secondi visualizzati del video come intero
   */
  getCurrentTimeInt() {
    return Math.floor(this.getCurrentTime());
  }
  /**
   * Torna i secondi visualizzati del video come intero meno i secondi del seek
   */
  getCurrentTimeIntSeeked() {
    let time = this.getCurrentTimeInt();
    if (this.seekApplied) {
      time = time - this.seek;
    }
    return time;
  }
}
YoutubePlayerWrapperComponent.ɵfac = function YoutubePlayerWrapperComponent_Factory(t) {
  return new (t || YoutubePlayerWrapperComponent)();
};
YoutubePlayerWrapperComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: YoutubePlayerWrapperComponent,
  selectors: [["app-youtube-player-wrapper"]],
  viewQuery: function YoutubePlayerWrapperComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.youtube = _t.first);
    }
  },
  inputs: {
    videoId: "videoId",
    seek: "seek",
    width: "width",
    height: "height"
  },
  outputs: {
    stateChange: "stateChange",
    ready: "ready"
  },
  decls: 2,
  vars: 4,
  consts: [[3, "width", "height", "videoId", "playerVars", "ready", "stateChange"], ["youtube", ""]],
  template: function YoutubePlayerWrapperComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "youtube-player", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ready", function YoutubePlayerWrapperComponent_Template_youtube_player_ready_0_listener($event) {
        return ctx.ready.emit($event);
      })("stateChange", function YoutubePlayerWrapperComponent_Template_youtube_player_stateChange_0_listener($event) {
        return ctx.onStateChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx.width)("height", ctx.height)("videoId", ctx.videoId)("playerVars", ctx.playerVars);
    }
  },
  dependencies: [_angular_youtube_player__WEBPACK_IMPORTED_MODULE_1__.YouTubePlayer],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 1960:
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/components/youtube-player-wrapper/youtube-player-wrapper.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YoutubePlayerWrapperModule": () => (/* binding */ YoutubePlayerWrapperModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _youtube_player_wrapper_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./youtube-player-wrapper.component */ 731);
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/youtube-player */ 2163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




class YoutubePlayerWrapperModule {}
YoutubePlayerWrapperModule.ɵfac = function YoutubePlayerWrapperModule_Factory(t) {
  return new (t || YoutubePlayerWrapperModule)();
};
YoutubePlayerWrapperModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: YoutubePlayerWrapperModule
});
YoutubePlayerWrapperModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_youtube_player__WEBPACK_IMPORTED_MODULE_3__.YouTubePlayerModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](YoutubePlayerWrapperModule, {
    declarations: [_youtube_player_wrapper_component__WEBPACK_IMPORTED_MODULE_0__.YoutubePlayerWrapperComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_youtube_player__WEBPACK_IMPORTED_MODULE_3__.YouTubePlayerModule],
    exports: [_youtube_player_wrapper_component__WEBPACK_IMPORTED_MODULE_0__.YoutubePlayerWrapperComponent]
  });
})();

/***/ }),

/***/ 4370:
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/fromEventPattern.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromEventPattern": () => (/* binding */ fromEventPattern)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Observable */ 833);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isFunction */ 2971);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/mapOneOrManyArgs */ 8385);



function fromEventPattern(addHandler, removeHandler, resultSelector) {
  if (resultSelector) {
    return fromEventPattern(addHandler, removeHandler).pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_0__.mapOneOrManyArgs)(resultSelector));
  }
  return new _Observable__WEBPACK_IMPORTED_MODULE_1__.Observable(subscriber => {
    const handler = (...e) => subscriber.next(e.length === 1 ? e[0] : e);
    const retValue = addHandler(handler);
    return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_2__.isFunction)(removeHandler) ? () => removeHandler(handler, retValue) : undefined;
  });
}

/***/ }),

/***/ 6757:
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/observable/fromSubscribable.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromSubscribable": () => (/* binding */ fromSubscribable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ 833);

function fromSubscribable(subscribable) {
  return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(subscriber => subscribable.subscribe(subscriber));
}

/***/ }),

/***/ 3351:
/*!************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/combineLatest.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "combineLatest": () => (/* binding */ combineLatest)
/* harmony export */ });
/* harmony import */ var _observable_combineLatest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../observable/combineLatest */ 6562);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/lift */ 1944);
/* harmony import */ var _util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/argsOrArgArray */ 5330);
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/mapOneOrManyArgs */ 8385);
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/pipe */ 629);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 420);






function combineLatest(...args) {
  const resultSelector = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popResultSelector)(args);
  return resultSelector ? (0,_util_pipe__WEBPACK_IMPORTED_MODULE_1__.pipe)(combineLatest(...args), (0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_2__.mapOneOrManyArgs)(resultSelector)) : (0,_util_lift__WEBPACK_IMPORTED_MODULE_3__.operate)((source, subscriber) => {
    (0,_observable_combineLatest__WEBPACK_IMPORTED_MODULE_4__.combineLatestInit)([source, ...(0,_util_argsOrArgArray__WEBPACK_IMPORTED_MODULE_5__.argsOrArgArray)(args)])(subscriber);
  });
}

/***/ }),

/***/ 2101:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/connect.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "connect": () => (/* binding */ connect)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Subject */ 228);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/innerFrom */ 4987);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 1944);
/* harmony import */ var _observable_fromSubscribable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observable/fromSubscribable */ 6757);




const DEFAULT_CONFIG = {
  connector: () => new _Subject__WEBPACK_IMPORTED_MODULE_0__.Subject()
};
function connect(selector, config = DEFAULT_CONFIG) {
  const {
    connector
  } = config;
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    const subject = connector();
    (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(selector((0,_observable_fromSubscribable__WEBPACK_IMPORTED_MODULE_3__.fromSubscribable)(subject))).subscribe(subscriber);
    subscriber.add(source.subscribe(subject));
  });
}

/***/ }),

/***/ 8532:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/multicast.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "multicast": () => (/* binding */ multicast)
/* harmony export */ });
/* harmony import */ var _observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/ConnectableObservable */ 3932);
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ 2971);
/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connect */ 2101);



function multicast(subjectOrSubjectFactory, selector) {
  const subjectFactory = (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(subjectOrSubjectFactory) ? subjectOrSubjectFactory : () => subjectOrSubjectFactory;
  if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(selector)) {
    return (0,_connect__WEBPACK_IMPORTED_MODULE_1__.connect)(selector, {
      connector: subjectFactory
    });
  }
  return source => new _observable_ConnectableObservable__WEBPACK_IMPORTED_MODULE_2__.ConnectableObservable(source, subjectFactory);
}

/***/ }),

/***/ 2123:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/publish.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "publish": () => (/* binding */ publish)
/* harmony export */ });
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Subject */ 228);
/* harmony import */ var _multicast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multicast */ 8532);
/* harmony import */ var _connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connect */ 2101);



function publish(selector) {
  return selector ? source => (0,_connect__WEBPACK_IMPORTED_MODULE_0__.connect)(selector)(source) : source => (0,_multicast__WEBPACK_IMPORTED_MODULE_1__.multicast)(new _Subject__WEBPACK_IMPORTED_MODULE_2__.Subject())(source);
}

/***/ }),

/***/ 4055:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/skipWhile.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skipWhile": () => (/* binding */ skipWhile)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ 1944);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ 3945);


function skipWhile(predicate) {
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)((source, subscriber) => {
    let taking = false;
    let index = 0;
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.createOperatorSubscriber)(subscriber, value => (taking || (taking = !predicate(value, index++))) && subscriber.next(value)));
  });
}

/***/ }),

/***/ 538:
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/withLatestFrom.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "withLatestFrom": () => (/* binding */ withLatestFrom)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/lift */ 1944);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OperatorSubscriber */ 3945);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/innerFrom */ 4987);
/* harmony import */ var _util_identity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/identity */ 9173);
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/noop */ 9635);
/* harmony import */ var _util_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/args */ 420);






function withLatestFrom(...inputs) {
  const project = (0,_util_args__WEBPACK_IMPORTED_MODULE_0__.popResultSelector)(inputs);
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.operate)((source, subscriber) => {
    const len = inputs.length;
    const otherValues = new Array(len);
    let hasValue = inputs.map(() => false);
    let ready = false;
    for (let i = 0; i < len; i++) {
      (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(inputs[i]).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__.createOperatorSubscriber)(subscriber, value => {
        otherValues[i] = value;
        if (!ready && !hasValue[i]) {
          hasValue[i] = true;
          (ready = hasValue.every(_util_identity__WEBPACK_IMPORTED_MODULE_4__.identity)) && (hasValue = null);
        }
      }, _util_noop__WEBPACK_IMPORTED_MODULE_5__.noop));
    }
    source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_3__.createOperatorSubscriber)(subscriber, value => {
      if (ready) {
        const values = [value, ...otherValues];
        subscriber.next(project ? project(...values) : values);
      }
    }));
  });
}

/***/ }),

/***/ 5330:
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/util/argsOrArgArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "argsOrArgArray": () => (/* binding */ argsOrArgArray)
/* harmony export */ });
const {
  isArray
} = Array;
function argsOrArgArray(args) {
  return args.length === 1 && isArray(args[0]) ? args[0] : args;
}

/***/ }),

/***/ 2163:
/*!**************************************************************************!*\
  !*** ./node_modules/@angular/youtube-player/fesm2020/youtube-player.mjs ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YouTubePlayer": () => (/* binding */ YouTubePlayer),
/* harmony export */   "YouTubePlayerModule": () => (/* binding */ YouTubePlayerModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 4370);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 833);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 6562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs */ 629);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 6646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9295);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 4874);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 2123);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 2673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 1353);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 538);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 4503);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 8977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs/operators */ 3351);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 4055);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs/operators */ 116);






/// <reference types="youtube" />
const _c0 = ["youtubeContainer"];
const DEFAULT_PLAYER_WIDTH = 640;
const DEFAULT_PLAYER_HEIGHT = 390;
/**
 * Angular component that renders a YouTube player via the YouTube player
 * iframe API.
 * @see https://developers.google.com/youtube/iframe_api_reference
 */
class YouTubePlayer {
  /** YouTube Video ID to view */
  get videoId() {
    return this._videoId.value;
  }
  set videoId(videoId) {
    this._videoId.next(videoId);
  }
  /** Height of video player */
  get height() {
    return this._height.value;
  }
  set height(height) {
    this._height.next(height || DEFAULT_PLAYER_HEIGHT);
  }
  /** Width of video player */
  get width() {
    return this._width.value;
  }
  set width(width) {
    this._width.next(width || DEFAULT_PLAYER_WIDTH);
  }
  /** The moment when the player is supposed to start playing */
  set startSeconds(startSeconds) {
    this._startSeconds.next(startSeconds);
  }
  /** The moment when the player is supposed to stop playing */
  set endSeconds(endSeconds) {
    this._endSeconds.next(endSeconds);
  }
  /** The suggested quality of the player */
  set suggestedQuality(suggestedQuality) {
    this._suggestedQuality.next(suggestedQuality);
  }
  /**
   * Extra parameters used to configure the player. See:
   * https://developers.google.com/youtube/player_parameters.html?playerVersion=HTML5#Parameters
   */
  get playerVars() {
    return this._playerVars.value;
  }
  set playerVars(playerVars) {
    this._playerVars.next(playerVars);
  }
  /** Whether cookies inside the player have been disabled. */
  get disableCookies() {
    return this._disableCookies.value;
  }
  set disableCookies(value) {
    this._disableCookies.next(!!value);
  }
  constructor(_ngZone, platformId) {
    this._ngZone = _ngZone;
    this._youtubeContainer = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this._playerChanges = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
    this._videoId = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
    this._height = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(DEFAULT_PLAYER_HEIGHT);
    this._width = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(DEFAULT_PLAYER_WIDTH);
    this._startSeconds = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
    this._endSeconds = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
    this._suggestedQuality = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
    this._playerVars = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(undefined);
    this._disableCookies = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    /** Outputs are direct proxies from the player itself. */
    this.ready = this._getLazyEmitter('onReady');
    this.stateChange = this._getLazyEmitter('onStateChange');
    this.error = this._getLazyEmitter('onError');
    this.apiChange = this._getLazyEmitter('onApiChange');
    this.playbackQualityChange = this._getLazyEmitter('onPlaybackQualityChange');
    this.playbackRateChange = this._getLazyEmitter('onPlaybackRateChange');
    this._isBrowser = (0,_angular_common__WEBPACK_IMPORTED_MODULE_2__.isPlatformBrowser)(platformId);
  }
  ngOnInit() {
    // Don't do anything if we're not in a browser environment.
    if (!this._isBrowser) {
      return;
    }
    let iframeApiAvailableObs = (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(true);
    if (!window.YT || !window.YT.Player) {
      if (this.showBeforeIframeApiLoads && (typeof ngDevMode === 'undefined' || ngDevMode)) {
        throw new Error('Namespace YT not found, cannot construct embedded youtube player. ' + 'Please install the YouTube Player API Reference for iframe Embeds: ' + 'https://developers.google.com/youtube/iframe_api_reference');
      }
      const iframeApiAvailableSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
      this._existingApiReadyCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (this._existingApiReadyCallback) {
          this._existingApiReadyCallback();
        }
        this._ngZone.run(() => iframeApiAvailableSubject.next(true));
      };
      iframeApiAvailableObs = iframeApiAvailableSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(false));
    }
    const hostObservable = this._disableCookies.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(cookiesDisabled => cookiesDisabled ? 'https://www.youtube-nocookie.com' : undefined));
    // An observable of the currently loaded player.
    const playerObs = createPlayerObservable(this._youtubeContainer, this._videoId, hostObservable, iframeApiAvailableObs, this._width, this._height, this._playerVars, this._ngZone).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.tap)(player => {
      // Emit this before the `waitUntilReady` call so that we can bind to
      // events that happen as the player is being initialized (e.g. `onReady`).
      this._playerChanges.next(player);
    }), waitUntilReady(player => {
      // Destroy the player if loading was aborted so that we don't end up leaking memory.
      if (!playerIsReady(player)) {
        player.destroy();
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroyed), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.publish)());
    // Set up side effects to bind inputs to the player.
    playerObs.subscribe(player => {
      this._player = player;
      if (player && this._pendingPlayerState) {
        this._initializePlayer(player, this._pendingPlayerState);
      }
      this._pendingPlayerState = undefined;
    });
    bindSizeToPlayer(playerObs, this._width, this._height);
    bindSuggestedQualityToPlayer(playerObs, this._suggestedQuality);
    bindCueVideoCall(playerObs, this._videoId, this._startSeconds, this._endSeconds, this._suggestedQuality, this._destroyed);
    // After all of the subscriptions are set up, connect the observable.
    playerObs.connect();
  }
  ngAfterViewInit() {
    this._youtubeContainer.next(this.youtubeContainer.nativeElement);
  }
  ngOnDestroy() {
    if (this._player) {
      this._player.destroy();
      window.onYouTubeIframeAPIReady = this._existingApiReadyCallback;
    }
    this._playerChanges.complete();
    this._videoId.complete();
    this._height.complete();
    this._width.complete();
    this._startSeconds.complete();
    this._endSeconds.complete();
    this._suggestedQuality.complete();
    this._youtubeContainer.complete();
    this._playerVars.complete();
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#playVideo */
  playVideo() {
    if (this._player) {
      this._player.playVideo();
    } else {
      this._getPendingState().playbackState = YT.PlayerState.PLAYING;
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#pauseVideo */
  pauseVideo() {
    if (this._player) {
      this._player.pauseVideo();
    } else {
      this._getPendingState().playbackState = YT.PlayerState.PAUSED;
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#stopVideo */
  stopVideo() {
    if (this._player) {
      this._player.stopVideo();
    } else {
      // It seems like YouTube sets the player to CUED when it's stopped.
      this._getPendingState().playbackState = YT.PlayerState.CUED;
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#seekTo */
  seekTo(seconds, allowSeekAhead) {
    if (this._player) {
      this._player.seekTo(seconds, allowSeekAhead);
    } else {
      this._getPendingState().seek = {
        seconds,
        allowSeekAhead
      };
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#mute */
  mute() {
    if (this._player) {
      this._player.mute();
    } else {
      this._getPendingState().muted = true;
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#unMute */
  unMute() {
    if (this._player) {
      this._player.unMute();
    } else {
      this._getPendingState().muted = false;
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#isMuted */
  isMuted() {
    if (this._player) {
      return this._player.isMuted();
    }
    if (this._pendingPlayerState) {
      return !!this._pendingPlayerState.muted;
    }
    return false;
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#setVolume */
  setVolume(volume) {
    if (this._player) {
      this._player.setVolume(volume);
    } else {
      this._getPendingState().volume = volume;
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getVolume */
  getVolume() {
    if (this._player) {
      return this._player.getVolume();
    }
    if (this._pendingPlayerState && this._pendingPlayerState.volume != null) {
      return this._pendingPlayerState.volume;
    }
    return 0;
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#setPlaybackRate */
  setPlaybackRate(playbackRate) {
    if (this._player) {
      return this._player.setPlaybackRate(playbackRate);
    } else {
      this._getPendingState().playbackRate = playbackRate;
    }
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getPlaybackRate */
  getPlaybackRate() {
    if (this._player) {
      return this._player.getPlaybackRate();
    }
    if (this._pendingPlayerState && this._pendingPlayerState.playbackRate != null) {
      return this._pendingPlayerState.playbackRate;
    }
    return 0;
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getAvailablePlaybackRates */
  getAvailablePlaybackRates() {
    return this._player ? this._player.getAvailablePlaybackRates() : [];
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getVideoLoadedFraction */
  getVideoLoadedFraction() {
    return this._player ? this._player.getVideoLoadedFraction() : 0;
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getPlayerState */
  getPlayerState() {
    if (!this._isBrowser || !window.YT) {
      return undefined;
    }
    if (this._player) {
      return this._player.getPlayerState();
    }
    if (this._pendingPlayerState && this._pendingPlayerState.playbackState != null) {
      return this._pendingPlayerState.playbackState;
    }
    return YT.PlayerState.UNSTARTED;
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getCurrentTime */
  getCurrentTime() {
    if (this._player) {
      return this._player.getCurrentTime();
    }
    if (this._pendingPlayerState && this._pendingPlayerState.seek) {
      return this._pendingPlayerState.seek.seconds;
    }
    return 0;
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getPlaybackQuality */
  getPlaybackQuality() {
    return this._player ? this._player.getPlaybackQuality() : 'default';
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getAvailableQualityLevels */
  getAvailableQualityLevels() {
    return this._player ? this._player.getAvailableQualityLevels() : [];
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getDuration */
  getDuration() {
    return this._player ? this._player.getDuration() : 0;
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getVideoUrl */
  getVideoUrl() {
    return this._player ? this._player.getVideoUrl() : '';
  }
  /** See https://developers.google.com/youtube/iframe_api_reference#getVideoEmbedCode */
  getVideoEmbedCode() {
    return this._player ? this._player.getVideoEmbedCode() : '';
  }
  /** Gets an object that should be used to store the temporary API state. */
  _getPendingState() {
    if (!this._pendingPlayerState) {
      this._pendingPlayerState = {};
    }
    return this._pendingPlayerState;
  }
  /** Initializes a player from a temporary state. */
  _initializePlayer(player, state) {
    const {
      playbackState,
      playbackRate,
      volume,
      muted,
      seek
    } = state;
    switch (playbackState) {
      case YT.PlayerState.PLAYING:
        player.playVideo();
        break;
      case YT.PlayerState.PAUSED:
        player.pauseVideo();
        break;
      case YT.PlayerState.CUED:
        player.stopVideo();
        break;
    }
    if (playbackRate != null) {
      player.setPlaybackRate(playbackRate);
    }
    if (volume != null) {
      player.setVolume(volume);
    }
    if (muted != null) {
      muted ? player.mute() : player.unMute();
    }
    if (seek != null) {
      player.seekTo(seek.seconds, seek.allowSeekAhead);
    }
  }
  /** Gets an observable that adds an event listener to the player when a user subscribes to it. */
  _getLazyEmitter(name) {
    // Start with the stream of players. This way the events will be transferred
    // over to the new player if it gets swapped out under-the-hood.
    return this._playerChanges.pipe(
    // Switch to the bound event. `switchMap` ensures that the old event is removed when the
    // player is changed. If there's no player, return an observable that never emits.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.switchMap)(player => {
      return player ? (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.fromEventPattern)(listener => {
        player.addEventListener(name, listener);
      }, listener => {
        // The API seems to throw when we try to unbind from a destroyed player and it doesn't
        // expose whether the player has been destroyed so we have to wrap it in a try/catch to
        // prevent the entire stream from erroring out.
        try {
          if (player.removeEventListener) {
            player.removeEventListener(name, listener);
          }
        } catch {}
      }) : (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)();
    }),
    // By default we run all the API interactions outside the zone
    // so we have to bring the events back in manually when they emit.
    source => new rxjs__WEBPACK_IMPORTED_MODULE_12__.Observable(observer => source.subscribe({
      next: value => this._ngZone.run(() => observer.next(value)),
      error: error => observer.error(error),
      complete: () => observer.complete()
    })),
    // Ensures that everything is cleared out on destroy.
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this._destroyed));
  }
}
YouTubePlayer.ɵfac = function YouTubePlayer_Factory(t) {
  return new (t || YouTubePlayer)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_13__.PLATFORM_ID));
};
YouTubePlayer.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: YouTubePlayer,
  selectors: [["youtube-player"]],
  viewQuery: function YouTubePlayer_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵloadQuery"]()) && (ctx.youtubeContainer = _t.first);
    }
  },
  inputs: {
    videoId: "videoId",
    height: "height",
    width: "width",
    startSeconds: "startSeconds",
    endSeconds: "endSeconds",
    suggestedQuality: "suggestedQuality",
    playerVars: "playerVars",
    disableCookies: "disableCookies",
    showBeforeIframeApiLoads: "showBeforeIframeApiLoads"
  },
  outputs: {
    ready: "ready",
    stateChange: "stateChange",
    error: "error",
    apiChange: "apiChange",
    playbackQualityChange: "playbackQualityChange",
    playbackRateChange: "playbackRateChange"
  },
  decls: 2,
  vars: 0,
  consts: [["youtubeContainer", ""]],
  template: function YouTubePlayer_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "div", null, 0);
    }
  },
  encapsulation: 2,
  changeDetection: 0
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵsetClassMetadata"](YouTubePlayer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component,
    args: [{
      selector: 'youtube-player',
      changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ChangeDetectionStrategy.OnPush,
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewEncapsulation.None,
      // This div is *replaced* by the YouTube player embed.
      template: '<div #youtubeContainer></div>'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.NgZone
    }, {
      type: Object,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Inject,
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_13__.PLATFORM_ID]
      }]
    }];
  }, {
    videoId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input
    }],
    height: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input
    }],
    width: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input
    }],
    startSeconds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input
    }],
    endSeconds: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input
    }],
    suggestedQuality: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input
    }],
    playerVars: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input
    }],
    disableCookies: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input
    }],
    showBeforeIframeApiLoads: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input
    }],
    ready: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Output
    }],
    stateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Output
    }],
    error: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Output
    }],
    apiChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Output
    }],
    playbackQualityChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Output
    }],
    playbackRateChange: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Output
    }],
    youtubeContainer: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild,
      args: ['youtubeContainer']
    }]
  });
})();
/** Listens to changes to the given width and height and sets it on the player. */
function bindSizeToPlayer(playerObs, widthObs, heightObs) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([playerObs, widthObs, heightObs]).subscribe(([player, width, height]) => player && player.setSize(width, height));
}
/** Listens to changes from the suggested quality and sets it on the given player. */
function bindSuggestedQualityToPlayer(playerObs, suggestedQualityObs) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([playerObs, suggestedQualityObs]).subscribe(([player, suggestedQuality]) => player && suggestedQuality && player.setPlaybackQuality(suggestedQuality));
}
/**
 * Returns an observable that emits the loaded player once it's ready. Certain properties/methods
 * won't be available until the iframe finishes loading.
 * @param onAbort Callback function that will be invoked if the player loading was aborted before
 * it was able to complete. Can be used to clean up any loose references.
 */
function waitUntilReady(onAbort) {
  return (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.mergeMap)(player => {
    if (!player) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(undefined);
    }
    if (playerIsReady(player)) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(player);
    }
    // Since removeEventListener is not on Player when it's initialized, we can't use fromEvent.
    // The player is not initialized fully until the ready is called.
    return new rxjs__WEBPACK_IMPORTED_MODULE_12__.Observable(emitter => {
      let aborted = false;
      let resolved = false;
      const onReady = event => {
        resolved = true;
        if (!aborted) {
          event.target.removeEventListener('onReady', onReady);
          emitter.next(event.target);
        }
      };
      player.addEventListener('onReady', onReady);
      return () => {
        aborted = true;
        if (!resolved) {
          onAbort(player);
        }
      };
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(undefined));
  });
}
/** Create an observable for the player based on the given options. */
function createPlayerObservable(youtubeContainer, videoIdObs, hostObs, iframeApiAvailableObs, widthObs, heightObs, playerVarsObs, ngZone) {
  const playerOptions = (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([videoIdObs, hostObs, playerVarsObs]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.withLatestFrom)((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([widthObs, heightObs])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(([constructorOptions, sizeOptions]) => {
    const [videoId, host, playerVars] = constructorOptions;
    const [width, height] = sizeOptions;
    return videoId ? {
      videoId,
      playerVars,
      width,
      height,
      host
    } : undefined;
  }));
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([youtubeContainer, playerOptions, (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(ngZone)]).pipe(skipUntilRememberLatest(iframeApiAvailableObs), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.scan)(syncPlayerState, undefined), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.distinctUntilChanged)());
}
/** Skips the given observable until the other observable emits true, then emit the latest. */
function skipUntilRememberLatest(notifier) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.combineLatest)(notifier), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.skipWhile)(([_, doneSkipping]) => !doneSkipping), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(([value]) => value));
}
/** Destroy the player if there are no options, or create the player if there are options. */
function syncPlayerState(player, [container, videoOptions, ngZone]) {
  if (player && videoOptions && (player.playerVars !== videoOptions.playerVars || player.host !== videoOptions.host)) {
    // The player needs to be recreated if the playerVars are different.
    player.destroy();
  } else if (!videoOptions) {
    if (player) {
      // Destroy the player if the videoId was removed.
      player.destroy();
    }
    return;
  } else if (player) {
    return player;
  }
  // Important! We need to create the Player object outside of the `NgZone`, because it kicks
  // off a 250ms setInterval which will continually trigger change detection if we don't.
  const newPlayer = ngZone.runOutsideAngular(() => new YT.Player(container, videoOptions));
  newPlayer.videoId = videoOptions.videoId;
  newPlayer.playerVars = videoOptions.playerVars;
  newPlayer.host = videoOptions.host;
  return newPlayer;
}
/**
 * Call cueVideoById if the videoId changes, or when start or end seconds change. cueVideoById will
 * change the loaded video id to the given videoId, and set the start and end times to the given
 * start/end seconds.
 */
function bindCueVideoCall(playerObs, videoIdObs, startSecondsObs, endSecondsObs, suggestedQualityObs, destroyed) {
  const cueOptionsObs = (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([startSecondsObs, endSecondsObs]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(([startSeconds, endSeconds]) => ({
    startSeconds,
    endSeconds
  })));
  // Only respond to changes in cue options if the player is not running.
  const filteredCueOptions = cueOptionsObs.pipe(filterOnOther(playerObs, player => !!player && !hasPlayerStarted(player)));
  // If the video id changed, there's no reason to run 'cue' unless the player
  // was initialized with a different video id.
  const changedVideoId = videoIdObs.pipe(filterOnOther(playerObs, (player, videoId) => !!player && player.videoId !== videoId));
  // If the player changed, there's no reason to run 'cue' unless there are cue options.
  const changedPlayer = playerObs.pipe(filterOnOther((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([videoIdObs, cueOptionsObs]), ([videoId, cueOptions], player) => !!player && (videoId != player.videoId || !!cueOptions.startSeconds || !!cueOptions.endSeconds)));
  (0,rxjs__WEBPACK_IMPORTED_MODULE_22__.merge)(changedPlayer, changedVideoId, filteredCueOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.withLatestFrom)((0,rxjs__WEBPACK_IMPORTED_MODULE_14__.combineLatest)([playerObs, videoIdObs, cueOptionsObs, suggestedQualityObs])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(([_, values]) => values), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(destroyed)).subscribe(([player, videoId, cueOptions, suggestedQuality]) => {
    if (!videoId || !player) {
      return;
    }
    player.videoId = videoId;
    player.cueVideoById({
      videoId,
      suggestedQuality,
      ...cueOptions
    });
  });
}
function hasPlayerStarted(player) {
  const state = player.getPlayerState();
  return state !== YT.PlayerState.UNSTARTED && state !== YT.PlayerState.CUED;
}
function playerIsReady(player) {
  return 'getPlayerStatus' in player;
}
/** Combines the two observables temporarily for the filter function. */
function filterOnOther(otherObs, filterFn) {
  return (0,rxjs__WEBPACK_IMPORTED_MODULE_19__.pipe)((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.withLatestFrom)(otherObs), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_23__.filter)(([value, other]) => filterFn(other, value)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(([value]) => value));
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const COMPONENTS = [YouTubePlayer];
class YouTubePlayerModule {}
YouTubePlayerModule.ɵfac = function YouTubePlayerModule_Factory(t) {
  return new (t || YouTubePlayerModule)();
};
YouTubePlayerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
  type: YouTubePlayerModule
});
YouTubePlayerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵsetClassMetadata"](YouTubePlayerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule,
    args: [{
      declarations: COMPONENTS,
      exports: COMPONENTS
    }]
  }], null, null);
})();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_features_home_views_arcade_arcade_module_ts.js.map