(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-camera-detection-test-camera-detection-test-module"],{

/***/ "C2X2":
/*!**********************************************************************************************!*\
  !*** ./src/app/features/home/views/camera-detection-test/camera-detection-test.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CameraDetectionTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraDetectionTestComponent", function() { return CameraDetectionTestComponent; });
/* harmony import */ var src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/utils/common */ "lM/l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_window_windos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/window/windos.service */ "tpjD");
/* harmony import */ var _shared_components_camera_detection_camera_detection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/camera-detection/camera-detection.component */ "eVtn");




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
        Object(src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_0__["safeUnsubscribe"])(this.subVwChanges);
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
CameraDetectionTestComponent.ɵfac = function CameraDetectionTestComponent_Factory(t) { return new (t || CameraDetectionTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_window_windos_service__WEBPACK_IMPORTED_MODULE_2__["WindowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
CameraDetectionTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CameraDetectionTestComponent, selectors: [["app-camera-detection-test"]], decls: 1, vars: 5, consts: [[3, "height", "width", "drawDetection", "enableFaceAndGender", "enableLandmarks", "detectionReady"]], template: function CameraDetectionTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-camera-detection", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("detectionReady", function CameraDetectionTestComponent_Template_app_camera_detection_detectionReady_0_listener() { return ctx.onDetectionReady(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("height", ctx.height)("width", ctx.width)("drawDetection", true)("enableFaceAndGender", true)("enableLandmarks", true);
    } }, directives: [_shared_components_camera_detection_camera_detection_component__WEBPACK_IMPORTED_MODULE_3__["CameraDetectionComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\n\n.video-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.video-container[_ngcontent-%COMP%]   video[_ngcontent-%COMP%], .video-container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%] {\n  flex: 1;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGNhbWVyYS1kZXRlY3Rpb24tdGVzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUFJOztFQUVJLE9BQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FBRVIiLCJmaWxlIjoiY2FtZXJhLWRldGVjdGlvbi10ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnNwaW5uZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4udmlkZW8tY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHZpZGVvLFxyXG4gICAgY2FudmFzIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ "T865":
/*!***************************************************************************************************!*\
  !*** ./src/app/features/home/views/camera-detection-test/camera-detection-test-routing.module.ts ***!
  \***************************************************************************************************/
/*! exports provided: CameraDetectionTestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraDetectionTestRoutingModule", function() { return CameraDetectionTestRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _camera_detection_test_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camera-detection-test.component */ "C2X2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _camera_detection_test_component__WEBPACK_IMPORTED_MODULE_1__["CameraDetectionTestComponent"]
    },
];
class CameraDetectionTestRoutingModule {
}
CameraDetectionTestRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CameraDetectionTestRoutingModule });
CameraDetectionTestRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function CameraDetectionTestRoutingModule_Factory(t) { return new (t || CameraDetectionTestRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CameraDetectionTestRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "YSGe":
/*!*******************************************************************************************!*\
  !*** ./src/app/features/home/views/camera-detection-test/camera-detection-test.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: CameraDetectionTestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CameraDetectionTestModule", function() { return CameraDetectionTestModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _camera_detection_test_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./camera-detection-test.component */ "C2X2");
/* harmony import */ var _camera_detection_test_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./camera-detection-test-routing.module */ "T865");
/* harmony import */ var src_app_shared_components_camera_detection_camera_detection_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/camera-detection/camera-detection.module */ "v6By");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class CameraDetectionTestModule {
}
CameraDetectionTestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CameraDetectionTestModule });
CameraDetectionTestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ factory: function CameraDetectionTestModule_Factory(t) { return new (t || CameraDetectionTestModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _camera_detection_test_routing_module__WEBPACK_IMPORTED_MODULE_2__["CameraDetectionTestRoutingModule"],
            src_app_shared_components_camera_detection_camera_detection_module__WEBPACK_IMPORTED_MODULE_3__["CameraDetectionModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CameraDetectionTestModule, { declarations: [_camera_detection_test_component__WEBPACK_IMPORTED_MODULE_1__["CameraDetectionTestComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _camera_detection_test_routing_module__WEBPACK_IMPORTED_MODULE_2__["CameraDetectionTestRoutingModule"],
        src_app_shared_components_camera_detection_camera_detection_module__WEBPACK_IMPORTED_MODULE_3__["CameraDetectionModule"]], exports: [_camera_detection_test_component__WEBPACK_IMPORTED_MODULE_1__["CameraDetectionTestComponent"]] }); })();


/***/ })

}]);
//# sourceMappingURL=views-camera-detection-test-camera-detection-test-module.js.map