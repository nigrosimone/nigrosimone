(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-arcade-arcade-module"],{

/***/ "EXdD":
/*!*******************************************************************************************!*\
  !*** ./src/app/shared/components/youtube-player-wrapper/youtube-player-wrapper.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: YoutubePlayerWrapperModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubePlayerWrapperModule", function() { return YoutubePlayerWrapperModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _youtube_player_wrapper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./youtube-player-wrapper.component */ "WfU5");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class YoutubePlayerWrapperModule {
}
YoutubePlayerWrapperModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: YoutubePlayerWrapperModule });
YoutubePlayerWrapperModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function YoutubePlayerWrapperModule_Factory(t) { return new (t || YoutubePlayerWrapperModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_2__["YouTubePlayerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](YoutubePlayerWrapperModule, { declarations: [_youtube_player_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["YoutubePlayerWrapperComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_2__["YouTubePlayerModule"]], exports: [_youtube_player_wrapper_component__WEBPACK_IMPORTED_MODULE_1__["YoutubePlayerWrapperComponent"]] }); })();


/***/ }),

/***/ "Rma7":
/*!*********************************************************************!*\
  !*** ./src/app/features/home/views/arcade/arcade-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ArcadeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArcadeRoutingModule", function() { return ArcadeRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _arcade_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arcade.component */ "f7yT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _arcade_component__WEBPACK_IMPORTED_MODULE_1__["ArcadeComponent"]
    },
];
class ArcadeRoutingModule {
}
ArcadeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ArcadeRoutingModule });
ArcadeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function ArcadeRoutingModule_Factory(t) { return new (t || ArcadeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ArcadeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "TIDI":
/*!**************************************************************************************!*\
  !*** ./node_modules/@angular/youtube-player/__ivy_ngcc__/fesm2015/youtube-player.js ***!
  \**************************************************************************************/
/*! exports provided: YouTubePlayer, YouTubePlayerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YouTubePlayer", function() { return YouTubePlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YouTubePlayerModule", function() { return YouTubePlayerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


const _c0 = ["youtubeContainer"];
const DEFAULT_PLAYER_WIDTH = 640;
const DEFAULT_PLAYER_HEIGHT = 390;
/**
 * Angular component that renders a YouTube player via the YouTube player
 * iframe API.
 * @see https://developers.google.com/youtube/iframe_api_reference
 */
class YouTubePlayer {
    constructor(_ngZone, platformId) {
        this._ngZone = _ngZone;
        this._youtubeContainer = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._playerChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._videoId = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._height = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](DEFAULT_PLAYER_HEIGHT);
        this._width = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](DEFAULT_PLAYER_WIDTH);
        this._startSeconds = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._endSeconds = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._suggestedQuality = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        this._playerVars = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
        /** Outputs are direct proxies from the player itself. */
        this.ready = this._getLazyEmitter('onReady');
        this.stateChange = this._getLazyEmitter('onStateChange');
        this.error = this._getLazyEmitter('onError');
        this.apiChange = this._getLazyEmitter('onApiChange');
        this.playbackQualityChange = this._getLazyEmitter('onPlaybackQualityChange');
        this.playbackRateChange = this._getLazyEmitter('onPlaybackRateChange');
        this._isBrowser = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(platformId);
    }
    /** YouTube Video ID to view */
    get videoId() { return this._videoId.value; }
    set videoId(videoId) {
        this._videoId.next(videoId);
    }
    /** Height of video player */
    get height() { return this._height.value; }
    set height(height) {
        this._height.next(height || DEFAULT_PLAYER_HEIGHT);
    }
    /** Width of video player */
    get width() { return this._width.value; }
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
    get playerVars() { return this._playerVars.value; }
    set playerVars(playerVars) {
        this._playerVars.next(playerVars);
    }
    ngOnInit() {
        // Don't do anything if we're not in a browser environment.
        if (!this._isBrowser) {
            return;
        }
        let iframeApiAvailableObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
        if (!window.YT || !window.YT.Player) {
            if (this.showBeforeIframeApiLoads && (typeof ngDevMode === 'undefined' || ngDevMode)) {
                throw new Error('Namespace YT not found, cannot construct embedded youtube player. ' +
                    'Please install the YouTube Player API Reference for iframe Embeds: ' +
                    'https://developers.google.com/youtube/iframe_api_reference');
            }
            const iframeApiAvailableSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            this._existingApiReadyCallback = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = () => {
                if (this._existingApiReadyCallback) {
                    this._existingApiReadyCallback();
                }
                this._ngZone.run(() => iframeApiAvailableSubject.next(true));
            };
            iframeApiAvailableObs = iframeApiAvailableSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(false));
        }
        // An observable of the currently loaded player.
        const playerObs = createPlayerObservable(this._youtubeContainer, this._videoId, iframeApiAvailableObs, this._width, this._height, this._playerVars, this._ngZone).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(player => {
            // Emit this before the `waitUntilReady` call so that we can bind to
            // events that happen as the player is being initialized (e.g. `onReady`).
            this._playerChanges.next(player);
        }), waitUntilReady(player => {
            // Destroy the player if loading was aborted so that we don't end up leaking memory.
            if (!playerIsReady(player)) {
                player.destroy();
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["publish"])());
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
    /**
     * @deprecated No longer being used. To be removed.
     * @breaking-change 11.0.0
     */
    createEventsBoundInZone() {
        return {};
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
        }
        else {
            this._getPendingState().playbackState = 1 /* PLAYING */;
        }
    }
    /** See https://developers.google.com/youtube/iframe_api_reference#pauseVideo */
    pauseVideo() {
        if (this._player) {
            this._player.pauseVideo();
        }
        else {
            this._getPendingState().playbackState = 2 /* PAUSED */;
        }
    }
    /** See https://developers.google.com/youtube/iframe_api_reference#stopVideo */
    stopVideo() {
        if (this._player) {
            this._player.stopVideo();
        }
        else {
            // It seems like YouTube sets the player to CUED when it's stopped.
            this._getPendingState().playbackState = 5 /* CUED */;
        }
    }
    /** See https://developers.google.com/youtube/iframe_api_reference#seekTo */
    seekTo(seconds, allowSeekAhead) {
        if (this._player) {
            this._player.seekTo(seconds, allowSeekAhead);
        }
        else {
            this._getPendingState().seek = { seconds, allowSeekAhead };
        }
    }
    /** See https://developers.google.com/youtube/iframe_api_reference#mute */
    mute() {
        if (this._player) {
            this._player.mute();
        }
        else {
            this._getPendingState().muted = true;
        }
    }
    /** See https://developers.google.com/youtube/iframe_api_reference#unMute */
    unMute() {
        if (this._player) {
            this._player.unMute();
        }
        else {
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
        }
        else {
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
        }
        else {
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
        return -1 /* UNSTARTED */;
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
        const { playbackState, playbackRate, volume, muted, seek } = state;
        switch (playbackState) {
            case 1 /* PLAYING */:
                player.playVideo();
                break;
            case 2 /* PAUSED */:
                player.pauseVideo();
                break;
            case 5 /* CUED */:
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
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(player => {
            return player ? Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEventPattern"])((listener) => {
                player.addEventListener(name, listener);
            }, (listener) => {
                // The API seems to throw when we try to unbind from a destroyed player and it doesn't
                // expose whether the player has been destroyed so we have to wrap it in a try/catch to
                // prevent the entire stream from erroring out.
                try {
                    if (player.removeEventListener) {
                        player.removeEventListener(name, listener);
                    }
                }
                catch (_a) { }
            }) : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])();
        }), 
        // By default we run all the API interactions outside the zone
        // so we have to bring the events back in manually when they emit.
        (source) => new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => source.subscribe({
            next: value => this._ngZone.run(() => observer.next(value)),
            error: error => observer.error(error),
            complete: () => observer.complete()
        })), 
        // Ensures that everything is cleared out on destroy.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroyed));
    }
}
YouTubePlayer.ɵfac = function YouTubePlayer_Factory(t) { return new (t || YouTubePlayer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])); };
YouTubePlayer.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YouTubePlayer, selectors: [["youtube-player"]], viewQuery: function YouTubePlayer_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.youtubeContainer = _t.first);
    } }, inputs: { videoId: "videoId", height: "height", width: "width", startSeconds: "startSeconds", endSeconds: "endSeconds", suggestedQuality: "suggestedQuality", playerVars: "playerVars", showBeforeIframeApiLoads: "showBeforeIframeApiLoads" }, outputs: { ready: "ready", stateChange: "stateChange", error: "error", apiChange: "apiChange", playbackQualityChange: "playbackQualityChange", playbackRateChange: "playbackRateChange" }, decls: 2, vars: 0, consts: [["youtubeContainer", ""]], template: function YouTubePlayer_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", null, 0);
    } }, encapsulation: 2, changeDetection: 0 });
YouTubePlayer.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
    { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] }] }
];
YouTubePlayer.propDecorators = {
    videoId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    startSeconds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    endSeconds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    suggestedQuality: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    playerVars: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    showBeforeIframeApiLoads: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    stateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    error: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    apiChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    playbackQualityChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    playbackRateChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    youtubeContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['youtubeContainer',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YouTubePlayer, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'youtube-player',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                // This div is *replaced* by the YouTube player embed.
                template: '<div #youtubeContainer></div>'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }, { type: Object, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
            }] }]; }, { ready: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], stateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], error: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], apiChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], playbackQualityChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], playbackRateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], videoId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], startSeconds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], endSeconds: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], suggestedQuality: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], playerVars: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showBeforeIframeApiLoads: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], youtubeContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['youtubeContainer']
        }] }); })();
/** Listens to changes to the given width and height and sets it on the player. */
function bindSizeToPlayer(playerObs, widthObs, heightObs) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([playerObs, widthObs, heightObs])
        .subscribe(([player, width, height]) => player && player.setSize(width, height));
}
/** Listens to changes from the suggested quality and sets it on the given player. */
function bindSuggestedQualityToPlayer(playerObs, suggestedQualityObs) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([
        playerObs,
        suggestedQualityObs
    ]).subscribe(([player, suggestedQuality]) => player && suggestedQuality && player.setPlaybackQuality(suggestedQuality));
}
/**
 * Returns an observable that emits the loaded player once it's ready. Certain properties/methods
 * won't be available until the iframe finishes loading.
 * @param onAbort Callback function that will be invoked if the player loading was aborted before
 * it was able to complete. Can be used to clean up any loose references.
 */
function waitUntilReady(onAbort) {
    return Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(player => {
        if (!player) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(undefined);
        }
        if (playerIsReady(player)) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(player);
        }
        // Since removeEventListener is not on Player when it's initialized, we can't use fromEvent.
        // The player is not initialized fully until the ready is called.
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](emitter => {
            let aborted = false;
            let resolved = false;
            const onReady = (event) => {
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
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(undefined));
    });
}
/** Create an observable for the player based on the given options. */
function createPlayerObservable(youtubeContainer, videoIdObs, iframeApiAvailableObs, widthObs, heightObs, playerVarsObs, ngZone) {
    const playerOptions = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([videoIdObs, playerVarsObs]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([widthObs, heightObs])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([constructorOptions, sizeOptions]) => {
        const [videoId, playerVars] = constructorOptions;
        const [width, height] = sizeOptions;
        return videoId ? ({ videoId, playerVars, width, height }) : undefined;
    }));
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([youtubeContainer, playerOptions, Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(ngZone)])
        .pipe(skipUntilRememberLatest(iframeApiAvailableObs), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])(syncPlayerState, undefined), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
}
/** Skips the given observable until the other observable emits true, then emit the latest. */
function skipUntilRememberLatest(notifier) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(notifier), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skipWhile"])(([_, doneSkipping]) => !doneSkipping), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([value]) => value));
}
/** Destroy the player if there are no options, or create the player if there are options. */
function syncPlayerState(player, [container, videoOptions, ngZone]) {
    if (player && videoOptions && player.playerVars !== videoOptions.playerVars) {
        // The player needs to be recreated if the playerVars are different.
        player.destroy();
    }
    else if (!videoOptions) {
        if (player) {
            // Destroy the player if the videoId was removed.
            player.destroy();
        }
        return;
    }
    else if (player) {
        return player;
    }
    // Important! We need to create the Player object outside of the `NgZone`, because it kicks
    // off a 250ms setInterval which will continually trigger change detection if we don't.
    const newPlayer = ngZone.runOutsideAngular(() => new YT.Player(container, videoOptions));
    newPlayer.videoId = videoOptions.videoId;
    newPlayer.playerVars = videoOptions.playerVars;
    return newPlayer;
}
/**
 * Call cueVideoById if the videoId changes, or when start or end seconds change. cueVideoById will
 * change the loaded video id to the given videoId, and set the start and end times to the given
 * start/end seconds.
 */
function bindCueVideoCall(playerObs, videoIdObs, startSecondsObs, endSecondsObs, suggestedQualityObs, destroyed) {
    const cueOptionsObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([startSecondsObs, endSecondsObs])
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([startSeconds, endSeconds]) => ({ startSeconds, endSeconds })));
    // Only respond to changes in cue options if the player is not running.
    const filteredCueOptions = cueOptionsObs
        .pipe(filterOnOther(playerObs, player => !!player && !hasPlayerStarted(player)));
    // If the video id changed, there's no reason to run 'cue' unless the player
    // was initialized with a different video id.
    const changedVideoId = videoIdObs
        .pipe(filterOnOther(playerObs, (player, videoId) => !!player && player.videoId !== videoId));
    // If the player changed, there's no reason to run 'cue' unless there are cue options.
    const changedPlayer = playerObs.pipe(filterOnOther(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([videoIdObs, cueOptionsObs]), ([videoId, cueOptions], player) => !!player &&
        (videoId != player.videoId || !!cueOptions.startSeconds || !!cueOptions.endSeconds)));
    Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(changedPlayer, changedVideoId, filteredCueOptions)
        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([playerObs, videoIdObs, cueOptionsObs, suggestedQualityObs])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([_, values]) => values), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(destroyed))
        .subscribe(([player, videoId, cueOptions, suggestedQuality]) => {
        if (!videoId || !player) {
            return;
        }
        player.videoId = videoId;
        player.cueVideoById(Object.assign({ videoId,
            suggestedQuality }, cueOptions));
    });
}
function hasPlayerStarted(player) {
    const state = player.getPlayerState();
    return state !== -1 /* UNSTARTED */ && state !== 5 /* CUED */;
}
function playerIsReady(player) {
    return 'getPlayerStatus' in player;
}
/** Combines the two observables temporarily for the filter function. */
function filterOnOther(otherObs, filterFn) {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["pipe"])(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["withLatestFrom"])(otherObs), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(([value, other]) => filterFn(other, value)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(([value]) => value));
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const COMPONENTS = [YouTubePlayer];
class YouTubePlayerModule {
}
YouTubePlayerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: YouTubePlayerModule });
YouTubePlayerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function YouTubePlayerModule_Factory(t) { return new (t || YouTubePlayerModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](YouTubePlayerModule, { declarations: [YouTubePlayer], exports: [YouTubePlayer] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YouTubePlayerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: COMPONENTS,
                exports: COMPONENTS
            }]
    }], null, null); })();

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



//# sourceMappingURL=youtube-player.js.map

/***/ }),

/***/ "V1Zt":
/*!*************************************************************!*\
  !*** ./src/app/features/home/views/arcade/arcade.module.ts ***!
  \*************************************************************/
/*! exports provided: ArcadeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArcadeModule", function() { return ArcadeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _arcade_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arcade.component */ "f7yT");
/* harmony import */ var _arcade_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arcade-routing.module */ "Rma7");
/* harmony import */ var src_app_shared_pipe_humanize_time_humanize_time_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/pipe/humanize-time/humanize-time.module */ "8Vwt");
/* harmony import */ var src_app_shared_components_camera_detection_camera_detection_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/camera-detection/camera-detection.module */ "v6By");
/* harmony import */ var src_app_shared_components_youtube_player_wrapper_youtube_player_wrapper_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/components/youtube-player-wrapper/youtube-player-wrapper.module */ "EXdD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class ArcadeModule {
}
ArcadeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ArcadeModule });
ArcadeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ factory: function ArcadeModule_Factory(t) { return new (t || ArcadeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _arcade_routing_module__WEBPACK_IMPORTED_MODULE_2__["ArcadeRoutingModule"],
            src_app_shared_pipe_humanize_time_humanize_time_module__WEBPACK_IMPORTED_MODULE_3__["HumanizeTimeModule"],
            src_app_shared_components_camera_detection_camera_detection_module__WEBPACK_IMPORTED_MODULE_4__["CameraDetectionModule"],
            src_app_shared_components_youtube_player_wrapper_youtube_player_wrapper_module__WEBPACK_IMPORTED_MODULE_5__["YoutubePlayerWrapperModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ArcadeModule, { declarations: [_arcade_component__WEBPACK_IMPORTED_MODULE_1__["ArcadeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _arcade_routing_module__WEBPACK_IMPORTED_MODULE_2__["ArcadeRoutingModule"],
        src_app_shared_pipe_humanize_time_humanize_time_module__WEBPACK_IMPORTED_MODULE_3__["HumanizeTimeModule"],
        src_app_shared_components_camera_detection_camera_detection_module__WEBPACK_IMPORTED_MODULE_4__["CameraDetectionModule"],
        src_app_shared_components_youtube_player_wrapper_youtube_player_wrapper_module__WEBPACK_IMPORTED_MODULE_5__["YoutubePlayerWrapperModule"]], exports: [_arcade_component__WEBPACK_IMPORTED_MODULE_1__["ArcadeComponent"]] }); })();


/***/ }),

/***/ "WfU5":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/youtube-player-wrapper/youtube-player-wrapper.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: YoutubePlayerWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubePlayerWrapperComponent", function() { return YoutubePlayerWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_youtube_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/youtube-api */ "df9j");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");




const _c0 = ["youtube"];
class YoutubePlayerWrapperComponent {
    constructor() {
        this.stateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.seekChecked = false;
        this.seekApplied = false;
        // impostazioni del player di youtube
        this.playerVars = {
            autoplay: 0 /* NoAutoPlay */,
            controls: 0 /* Hide */,
            showinfo: 0 /* Hide */,
            modestbranding: 1 /* Modest */,
            rel: 0 /* Hide */
        };
    }
    ngOnInit() {
        // carichiamo lo script delle API di youtube
        Object(_utils_youtube_api__WEBPACK_IMPORTED_MODULE_1__["loadYouTubeApiScript"])();
    }
    /**
     * Evento di cambiamento di stato del player di YouTube
     */
    onStateChange(e) {
        if (e.data === 1 /* PLAYING */) {
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
YoutubePlayerWrapperComponent.ɵfac = function YoutubePlayerWrapperComponent_Factory(t) { return new (t || YoutubePlayerWrapperComponent)(); };
YoutubePlayerWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YoutubePlayerWrapperComponent, selectors: [["app-youtube-player-wrapper"]], viewQuery: function YoutubePlayerWrapperComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.youtube = _t.first);
    } }, inputs: { videoId: "videoId", seek: "seek", width: "width", height: "height" }, outputs: { stateChange: "stateChange", ready: "ready" }, decls: 2, vars: 4, consts: [[3, "width", "height", "videoId", "playerVars", "ready", "stateChange"], ["youtube", ""]], template: function YoutubePlayerWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "youtube-player", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ready", function YoutubePlayerWrapperComponent_Template_youtube_player_ready_0_listener($event) { return ctx.ready.emit($event); })("stateChange", function YoutubePlayerWrapperComponent_Template_youtube_player_stateChange_0_listener($event) { return ctx.onStateChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx.width)("height", ctx.height)("videoId", ctx.videoId)("playerVars", ctx.playerVars);
    } }, directives: [_angular_youtube_player__WEBPACK_IMPORTED_MODULE_2__["YouTubePlayer"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ5b3V0dWJlLXBsYXllci13cmFwcGVyLmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ "df9j":
/*!*********************************************!*\
  !*** ./src/app/shared/utils/youtube-api.ts ***!
  \*********************************************/
/*! exports provided: loadYouTubeApiScript */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadYouTubeApiScript", function() { return loadYouTubeApiScript; });
/**
 * Carica lo script per le API del player di YouTube
 */
function loadYouTubeApiScript() {
    const ID = 'YOUTUBE_API_SCRIPT';
    let el = document.getElementById(ID);
    if (!el) {
        // This code loads the IFrame Player API code asynchronously, according to the instructions at
        // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
        el = document.createElement('script');
        el.src = 'https://www.youtube.com/iframe_api';
        el.id = ID;
        document.body.appendChild(el);
    }
}


/***/ }),

/***/ "f7yT":
/*!****************************************************************!*\
  !*** ./src/app/features/home/views/arcade/arcade.component.ts ***!
  \****************************************************************/
/*! exports provided: ArcadeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArcadeComponent", function() { return ArcadeComponent; });
/* harmony import */ var src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/utils/common */ "lM/l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_core_services_window_windos_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/window/windos.service */ "tpjD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_camera_detection_camera_detection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/camera-detection/camera-detection.component */ "eVtn");
/* harmony import */ var _shared_components_youtube_player_wrapper_youtube_player_wrapper_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/youtube-player-wrapper/youtube-player-wrapper.component */ "WfU5");
/* harmony import */ var _shared_pipe_humanize_time_humanize_time_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/pipe/humanize-time/humanize-time.pipe */ "0Fv8");







const _c0 = ["cameraDetection"];
const _c1 = ["youtube"];
function ArcadeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ArcadeComponent_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.restartGame(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "RIPROVA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ArcadeComponent_h1_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Hai perso, hai sorriso!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ArcadeComponent_h1_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Hai vinto, non hai sorriso!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ArcadeComponent_h1_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Non riesco a vedere la tua faccia!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ArcadeComponent_div_6_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "humanizeTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Record: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r9.recordDuration * 1000), "");
} }
function ArcadeComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "humanizeTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ArcadeComponent_div_6_span_7_Template, 3, 3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx_r4.happy > 0.3 ? "red" : "green");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Felicit\u00E0: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 7, ctx_r4.happy * 100, "1.1-1"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background", ctx_r4.timeElapse > ctx_r4.recordDuration ? "green" : "blue");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Resistenza: ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 10, ctx_r4.timeElapse * 1000), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.recordDuration);
} }
function ArcadeComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-youtube-player-wrapper", 17, 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ready", function ArcadeComponent_div_7_Template_app_youtube_player_wrapper_ready_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.onYoutubeReady($event); })("stateChange", function ArcadeComponent_div_7_Template_app_youtube_player_wrapper_stateChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.onStateChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", !ctx_r5.readyToGame ? "none" : "flex");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", ctx_r5.width)("height", ctx_r5.height)("videoId", ctx_r5.videoId)("seek", ctx_r5.recordDuration);
} }
const VIDEOS = ['_TnkkZq-dbU', 'g6PSwYx3jA0', 'pl0KA-wPT8A'];
class ArcadeComponent {
    constructor(cdr, windowService, elRef) {
        this.cdr = cdr;
        this.windowService = windowService;
        this.elRef = elRef;
        // id del video di youtube
        this.videoId = Object(src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_0__["randomItemFromArray"])(VIDEOS);
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
        Object(src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_0__["safeUnsubscribe"])(this.subVwChanges);
    }
    /**
     * Evento di cambiamento di stato del player di YouTube
     */
    onStateChange(e) {
        if (e.data === 0 /* ENDED */) {
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
        }
        else {
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
        }
        else {
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
ArcadeComponent.ɵfac = function ArcadeComponent_Factory(t) { return new (t || ArcadeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_window_windos_service__WEBPACK_IMPORTED_MODULE_2__["WindowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
ArcadeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ArcadeComponent, selectors: [["app-arcade"]], viewQuery: function ArcadeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.cameraDetection = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.youtube = _t.first);
    } }, decls: 11, vars: 16, consts: [[1, "game-container"], [1, "info"], ["class", "retry", 4, "ngIf"], [4, "ngIf"], ["class", "badge-container", 4, "ngIf"], ["class", "youtube", 3, "display", 4, "ngIf"], [1, "webcam"], [3, "width", "height", "drawDetection", "detectionTimer", "detectionReady", "detectionChanges", "firstDetection", "detectionFace"], ["cameraDetection", ""], [1, "retry"], [1, "retry-button", 3, "click"], [1, "badge-container"], [1, "badge", "badge-happy"], [1, "badge", "badge-duration"], ["class", "badge badge-record-duration", 4, "ngIf"], [1, "badge", "badge-record-duration"], [1, "youtube"], [3, "width", "height", "videoId", "seek", "ready", "stateChange"], ["youtube", ""]], template: function ArcadeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ArcadeComponent_div_2_Template, 4, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ArcadeComponent_h1_3_Template, 2, 0, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ArcadeComponent_h1_4_Template, 2, 0, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ArcadeComponent_h1_5_Template, 2, 0, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ArcadeComponent_div_6_Template, 8, 12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ArcadeComponent_div_7_Template, 3, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "app-camera-detection", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("detectionReady", function ArcadeComponent_Template_app_camera_detection_detectionReady_9_listener($event) { return ctx.onDetectionReady($event); })("detectionChanges", function ArcadeComponent_Template_app_camera_detection_detectionChanges_9_listener($event) { return ctx.onDetectionChanges($event); })("firstDetection", function ArcadeComponent_Template_app_camera_detection_firstDetection_9_listener($event) { return ctx.onFirstDetection($event); })("detectionFace", function ArcadeComponent_Template_app_camera_detection_detectionFace_9_listener($event) { return ctx.onDetectionFace($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.width + "px")("height", ctx.height + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.endMatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.endMatch && ctx.loseMatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.endMatch && ctx.winMatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.detectionReady && !ctx.endMatch && !ctx.faceDetected);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.faceDetected || ctx.endMatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.endMatch);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.readyToGame ? "none" : "flex");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("width", ctx.width)("height", ctx.height)("drawDetection", false)("detectionTimer", 100);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_camera_detection_camera_detection_component__WEBPACK_IMPORTED_MODULE_4__["CameraDetectionComponent"], _shared_components_youtube_player_wrapper_youtube_player_wrapper_component__WEBPACK_IMPORTED_MODULE_5__["YoutubePlayerWrapperComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"], _shared_pipe_humanize_time_humanize_time_pipe__WEBPACK_IMPORTED_MODULE_6__["HumanizeTimePipe"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n\n.game-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.game-container[_ngcontent-%COMP%]   .youtube[_ngcontent-%COMP%], .game-container[_ngcontent-%COMP%]   .webcam[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n}\n\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  width: 100%;\n  color: black;\n  position: absolute;\n  bottom: 10px;\n  text-align: center;\n  z-index: 10000;\n}\n\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  background-color: white;\n  padding: 3px 3px 3px 3px;\n  border-radius: 3px;\n  margin-bottom: 5px;\n  display: inline;\n}\n\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  padding: 3px 3px 3px 3px;\n  border-radius: 3px;\n  white-space: nowrap;\n}\n\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%]   .badge-happy[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%]   .badge-record-duration[_ngcontent-%COMP%], .game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%]   .badge-duration[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%]   .badge-duration[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .badge-container[_ngcontent-%COMP%]   .badge-record-duration[_ngcontent-%COMP%] {\n  background: yellow;\n  color: black;\n}\n\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .retry[_ngcontent-%COMP%] {\n  padding-bottom: 2vh;\n}\n\n.game-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .retry[_ngcontent-%COMP%]   .retry-button[_ngcontent-%COMP%] {\n  cursor: pointer;\n  opacity: 0.4;\n  filter: alpha(opacity=40);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFyY2FkZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUVJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUFSOztBQUdJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFEUjs7QUFHUTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQURaOztBQUlRO0VBQ0ksV0FBQTtBQUZaOztBQUlZO0VBQ0ksd0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRmhCOztBQUlZO0VBQ0ksWUFBQTtBQUZoQjs7QUFJWTtFQUNJLGdCQUFBO0FBRmhCOztBQUlZO0VBQ0ksWUFBQTtBQUZoQjs7QUFJWTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUZoQjs7QUFLUTtFQUNJLG1CQUFBO0FBSFo7O0FBSVk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FBRmhCIiwiZmlsZSI6ImFyY2FkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5nYW1lLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcblxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIC55b3V0dWJlLCAud2ViY2FtIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuaW5mbyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDAwO1xyXG5cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAzcHggM3B4IDNweCAzcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYmFkZ2UtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAuYmFkZ2Uge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogM3B4IDNweCAzcHggM3B4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYmFkZ2UtaGFwcHkge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5iYWRnZS1yZWNvcmQtZHVyYXRpb24sIC5iYWRnZS1kdXJhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5iYWRnZS1kdXJhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJhZGdlLXJlY29yZC1kdXJhdGlvbiB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7IFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucmV0cnl7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAydmg7XHJcbiAgICAgICAgICAgIC5yZXRyeS1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC40O1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTQwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=views-arcade-arcade-module.js.map