"use strict";
(self["webpackChunktry_not_to_laugh"] = self["webpackChunktry_not_to_laugh"] || []).push([["src_app_features_home_views_camera-detection-test_camera-detection-test_module_ts"],{

/***/ 4864:
/*!***************************************************************************************************!*\
  !*** ./src/app/features/home/views/camera-detection-test/camera-detection-test-routing.module.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDetectionTestRoutingModule": () => (/* binding */ CameraDetectionTestRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _camera_detection_test_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camera-detection-test.component */ 777);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [{
  path: '',
  component: _camera_detection_test_component__WEBPACK_IMPORTED_MODULE_0__.CameraDetectionTestComponent
}];
class CameraDetectionTestRoutingModule {}
CameraDetectionTestRoutingModule.ɵfac = function CameraDetectionTestRoutingModule_Factory(t) {
  return new (t || CameraDetectionTestRoutingModule)();
};
CameraDetectionTestRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: CameraDetectionTestRoutingModule
});
CameraDetectionTestRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CameraDetectionTestRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 777:
/*!**********************************************************************************************!*\
  !*** ./src/app/features/home/views/camera-detection-test/camera-detection-test.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDetectionTestComponent": () => (/* binding */ CameraDetectionTestComponent)
/* harmony export */ });
/* harmony import */ var src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/utils/common */ 2768);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_core_services_window_windos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/window/windos.service */ 5027);
/* harmony import */ var _shared_components_camera_detection_camera_detection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/camera-detection/camera-detection.component */ 1983);




class CameraDetectionTestComponent {
  constructor(cdr, windowService, elRef) {
    this.cdr = cdr;
    this.windowService = windowService;
    this.elRef = elRef;
  }
  ngOnInit() {
    this.subVwChanges = this.windowService.viewPortChanges.subscribe(() => {
      this.doResize();
    });
  }
  ngOnDestroy() {
    (0,src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_0__.safeUnsubscribe)(this.subVwChanges);
  }
  onDetectionReady() {
    this.doResize();
  }
  doResize() {
    // -1 altrimenti esce la scrollbar
    const w = this.elRef.nativeElement.clientWidth - 1;
    const h = this.elRef.nativeElement.clientHeight - 1;
    if (w !== this.width || h !== this.height) {
      this.width = w;
      this.height = h;
      this.cdr.detectChanges();
    }
  }
}
CameraDetectionTestComponent.ɵfac = function CameraDetectionTestComponent_Factory(t) {
  return new (t || CameraDetectionTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_core_services_window_windos_service__WEBPACK_IMPORTED_MODULE_1__.WindowService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef));
};
CameraDetectionTestComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: CameraDetectionTestComponent,
  selectors: [["app-camera-detection-test"]],
  decls: 1,
  vars: 5,
  consts: [[3, "height", "width", "drawDetection", "enableFaceAndGender", "enableLandmarks", "detectionReady"]],
  template: function CameraDetectionTestComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-camera-detection", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("detectionReady", function CameraDetectionTestComponent_Template_app_camera_detection_detectionReady_0_listener() {
        return ctx.onDetectionReady();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("height", ctx.height)("width", ctx.width)("drawDetection", true)("enableFaceAndGender", true)("enableLandmarks", true);
    }
  },
  dependencies: [_shared_components_camera_detection_camera_detection_component__WEBPACK_IMPORTED_MODULE_2__.CameraDetectionComponent],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.video-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.video-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%], .video-container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  flex: 1;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaG9tZS92aWV3cy9jYW1lcmEtZGV0ZWN0aW9uLXRlc3QvY2FtZXJhLWRldGVjdGlvbi10ZXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7QUFBSTs7RUFFSSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUVSIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNwaW5uZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4udmlkZW8tY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHZpZGVvLFxyXG4gICAgY2FudmFzIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 5221:
/*!*******************************************************************************************!*\
  !*** ./src/app/features/home/views/camera-detection-test/camera-detection-test.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CameraDetectionTestModule": () => (/* binding */ CameraDetectionTestModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _camera_detection_test_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./camera-detection-test.component */ 777);
/* harmony import */ var _camera_detection_test_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camera-detection-test-routing.module */ 4864);
/* harmony import */ var src_app_shared_components_camera_detection_camera_detection_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/components/camera-detection/camera-detection.module */ 5960);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class CameraDetectionTestModule {}
CameraDetectionTestModule.ɵfac = function CameraDetectionTestModule_Factory(t) {
  return new (t || CameraDetectionTestModule)();
};
CameraDetectionTestModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: CameraDetectionTestModule
});
CameraDetectionTestModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _camera_detection_test_routing_module__WEBPACK_IMPORTED_MODULE_1__.CameraDetectionTestRoutingModule, src_app_shared_components_camera_detection_camera_detection_module__WEBPACK_IMPORTED_MODULE_2__.CameraDetectionModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CameraDetectionTestModule, {
    declarations: [_camera_detection_test_component__WEBPACK_IMPORTED_MODULE_0__.CameraDetectionTestComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _camera_detection_test_routing_module__WEBPACK_IMPORTED_MODULE_1__.CameraDetectionTestRoutingModule, src_app_shared_components_camera_detection_camera_detection_module__WEBPACK_IMPORTED_MODULE_2__.CameraDetectionModule],
    exports: [_camera_detection_test_component__WEBPACK_IMPORTED_MODULE_0__.CameraDetectionTestComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_home_views_camera-detection-test_camera-detection-test_module_ts.js.map