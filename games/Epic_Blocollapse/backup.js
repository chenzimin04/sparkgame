"use strict";
const lofgames = {
	sfxArray: [],
	musicArray: [],
	clickFuncs: [],
	gameId: "084df1fx3",
	hsSubmit: "https://www.lofgames.com/hsapi/scorehtml5.php",
	hsGet: "https://www.lofgames.com/hsapi/topscoreshtml.php",
	session: "https://www.lofgames.com/hsapi/index.php?t=",
	playingLevel: 1,
	time: Number(new Date()) - 120000,
	listeners: {
		mClickFunc: [],
		mDownFunc: [],
		mPressMoveFunc: [],
		mPressUpFunc: [],
		mMoveFunc: [],
		mUpFunc: [],
		mOverFunc: [],
		mOutFunc: [],
		kUpFunc: [],
		kDownFunc: [],
		frameFunc: []
	}
};
const lg = lofgames;
const caller = function() {
	return lg.mainFunction(Array.prototype.slice.call(arguments, 0));
};
lg.sendHighScores = function() {
	var score = lg.getTotalScore();
	if (score > 0) {
		try {
			window.top.postMessage('highscore|' + score, '*');
		} catch (e) {}
		try {
			window.parent.postMessage('highscore|' + score, '*');
		} catch (e) {}
	}
};
lg.showStatus = function() {
	var str = console.log.toString();
	if (str.indexOf("native") < 0) {
		return;
	}
	lg.trace(str);
	lg.trace("\n\n________________\nListener :\n");
	for (var itm in lg.listeners) {
		if (lg.listeners[itm] instanceof Array) {
			lg.trace(itm, ":", lg.listeners[itm].length);
		} else {
			lg.trace(itm, ":", lg.listeners[itm]);
		}
	}
	lg.trace("\nScreens :\n");
	for (var child of stage.children) {
		lg.trace(child, child.getBounds());
	}
	lg.trace("End Status\n________________\n\n\n");
};
lg.mainFunction = function(args) {
	switch (args[0]) {
		case 0:
			lg.initGame(args[1]);
			let page = lg.getParameterByName("page");
			if (page == null) {
				page = "IntroScreen";
			}
			lg.establishSessionHighscore();
			caller(3, new lg.lib[page](), true);
			break;
		case 1:
			lg.setItem(args[1], args[2]);
			break;
		case 2:
			return lg.getItem(args[1]);
		case 3:
			lg.stage.addChild(args[1]);
			lg.sendHighScores();
			break;
		case 4:
			if (args[1].parent != null) {
				args[1].parent.removeChild(args[1]);
			}
			break;
		case 6:
			lg.registerClickListener(args[1]);
			break;
		case 7:
			lg.unRegisterClickListener(args[1]);
			break;
		case 8:
			lg.registerMouseDownListener(args[1]);
			break;
		case 9:
			lg.unRegisterMouseDownListener(args[1]);
			break;
		case 10:
			lg.registerMouseMoveListener(args[1]);
			break;
		case 11:
			lg.unRegisterMouseMoveListener(args[1]);
			break;
		case 12:
			lg.registerMouseUpListener(args[1]);
			break;
		case 13:
			lg.unRegisterMouseUpListener(args[1]);
			break;
		case 14:
			lg.registerMouseOverListener(args[1]);
			break;
		case 15:
			lg.unRegisterMouseOverListener(args[1]);
			break;
		case 16:
			lg.registerMouseOutListener(args[1]);
			break;
		case 17:
			lg.unRegisterMouseOutListener(args[1]);
			break;
		case 18:
			lg.registerPressMoveListener(args[1]);
			break;
		case 19:
			lg.unRegisterPressMoveListener(args[1]);
			break;
		case 20:
			lg.registerPressUpListener(args[1]);
			break;
		case 21:
			lg.unRegisterPressUpListener(args[1]);
			break;
		case 22:
			lg.registerKeyDownListener(args[1]);
			break;
		case 23:
			lg.unRegisterKeyDownListener(args[1]);
			break;
		case 24:
			lg.registerKeyUpListener(args[1]);
			break;
		case 25:
			lg.unRegisterKeyUpListener(args[1]);
			break;
		case 26:
			lg.registerEnterFrameListener(args[1]);
			break;
		case 27:
			lg.unRegisterEnterFrameListener(args[1]);
			break;
		case 42:
			lg.showAds(args[1], args[2]);
			break;
		case 43:
			if (lg.rewardOk != true) {
				lg.loadRewardAds();
			}
			break;
		case 44:
			lg.showRewardFunction(args[1], args[2]);
			break;
		case 100:
			var itm = args[1];
			while (itm.firstChild) {
				itm.removeChild(itm.lastChild);
			}
			itm.innerHTML = "";
			itm.remove();
			break;
	}
};
lg.pauseGame = function() {
	lg.glPause = true;
	lg.soundPaused = true;
	createjs.Tween.pauseAllTweens();
	lg.pauseSounds();
	lg.tickerPause = true;
};
lg.resumeGame = function() {
	lg.glPause = false;
	lg.soundPaused = false;
	createjs.Tween.resumeAllTweens();
	lg.resumeSounds();
	lg.tickerPause = false;
};
lg.initSDKFunctions = function() {
	lg.rewardOk = false;
	lg.time = Number(new Date()) - 1200000;
	if (window.location.hostname === "www.lofgames.com" || window.location.hostname === "lofgames.com") {
		lg.time = Number(new Date());
	}
	var pausedTweenObjs = [];
	createjs.Tween.pauseAllTweens = function() {
		var i = 0,
			tweenObjs = createjs.Tween._tweens.slice()
			.reverse(),
			tweenObj;
		for (; tweenObj = tweenObjs[i++];) {
			pausedTweenObjs.push(tweenObj);
			tweenObj.setPaused(true);
		}
	};
	createjs.Tween.resumeAllTweens = function() {
		var i = 0,
			tweenObj;
		for (; tweenObj = pausedTweenObjs[i++];) tweenObj.setPaused(false);
		pausedTweenObjs.length = 0;
	};
	var winActiveStateHandler = (function() {
		var stateKey, eventKey, keys = {
			hidden: "visibilitychange",
			webkitHidden: "webkitvisibilitychange",
			mozHidden: "mozvisibilitychange",
			msHidden: "msvisibilitychange"
		};
		for (stateKey in keys) {
			if (stateKey in document) {
				eventKey = keys[stateKey];
				break;
			}
		}
		return function(c) {
			if (c) document.addEventListener(eventKey, c);
			return !document[stateKey];
		};
	})();
	winActiveStateHandler(function() {
		if (winActiveStateHandler()) {
			if (lg.soundPaused == false) {
				lg.resumeSounds();
				createjs.Tween.resumeAllTweens();
			}
			lg.inactivePause = false;
		} else {
			lg.pauseSounds();
			createjs.Tween.pauseAllTweens();
			lg.inactivePause = true;
		}
	});
	switch (lg.sdkType) {
		case "gd":
			window["GD_OPTIONS"] = {
				"gameId": lg.sdkId,
				"onEvent": function(event) {
					switch (event.name) {
						case "SDK_GAME_START":
							lg.removeLoadingScreen();
							lg.resumeGame();
							if (lg.nextCallFunction != null) {
								lg.nextCallFunction();
								lg.nextCallFunction = null;
							}
							break;
						case "SDK_GAME_PAUSE":
							lg.pauseGame();
							break;
						case "SKIPPED":
							if (lg.rewardFailFunction != null) {
								lg.rewardFailFunction();
								lg.rewardFailFunction = null;
							}
							break;
						case "SDK_REWARDED_WATCH_COMPLETE":
							lg.rewardFunction();
							lg.rewardFunction = null;
							lg.rewardFailFunction = null;
							break;
					}
				},
			};
			(function(d, s, id) {
				var js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) return;
				js = d.createElement(s);
				js.id = id;
				js.src = 'https://html5.api.gamedistribution.com/main.min.js';
				fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'gamedistribution-jssdk'));
			break;
		case "gm":
			window.SDK_OPTIONS = {
				gameId: lg.sdkId,
				onEvent: function(a) {
					switch (a.name) {
						case "SDK_GAME_PAUSE":
							lg.pauseGame();
							break;
						case "SDK_GAME_START":
							lg.removeLoadingScreen();
							lg.resumeGame();
							if (lg.nextCallFunction != null) {
								lg.nextCallFunction();
								lg.nextCallFunction = null;
							}
							break;
					}
				}
			};
			(function(a, b, c) {
				var d = a.getElementsByTagName(b)[0];
				a.getElementById(c) || (a = a.createElement(b), a.id = c, a.src = "https://api.gamemonetize.com/sdk.js", d.parentNode.insertBefore(a, d));
			})(document, "script", "gamemonetize-sdk");
			break;
	}
};
lg.addLoadingScreen = function() {
	try {
		lg.adLoader = new lg.lib.AdLoader();
		lg.adLoader.x = lg.gameWidth / 2;
		lg.adLoader.y = lg.gameHeight / 2;
		caller(3, lg.adLoader);
	} catch (e) {}
};
lg.removeLoadingScreen = function() {
	if (lg.adLoader != null) {
		if (lg.adLoader.parent != null) {
			caller(4, lg.adLoader);
		}
	}
	lg.adLoader = null;
};
lg.nextWeeGooAd = function() {
	lg.removeLoadingScreen();
	lg.resumeGame();
	if (lg.nextCallFunction != null) {
		lg.nextCallFunction();
	}
	lg.nextCallFunction = null;
};
lg.showAds = function(callBack, forced) {
	switch (lg.sdkType) {
		case "wg":
			if (forced == undefined || forced == false) {
				var timePassed = Number(new Date()) - lg.time;
				if (timePassed < 120000) {
					callBack();
					return;
				}
			}
			lg.time = Number(new Date());
			lg.pauseGame();
			lg.addLoadingScreen();
			lg.nextCallFunction = callBack;
			try {
				window[window.preroll.config.loaderObjectName].refetchAd(lg.nextWeeGooAd);
			} catch (e) {
				lg.nextWeeGooAd();
			}
			break;
		case "gd":
			lg.nextCallFunction = callBack;
			if (typeof gdsdk !== 'undefined' && gdsdk.showAd !== 'undefined') {
				lg.addLoadingScreen();
				gdsdk.showAd();
			} else {
				lg.nextCallFunction = null;
				callBack();
			}
			break;
		case "gm":
			if (forced == undefined || forced == false) {
				var timePassed = Number(new Date()) - lg.time;
				if (timePassed < 120000) {
					callBack();
					return;
				}
			}
			lg.time = Number(new Date());
			lg.nextCallFunction = callBack;
			if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {
				lg.addLoadingScreen();
				sdk.showBanner();
			} else {
				lg.nextCallFunction = null;
				callBack();
			}
			break;
		default:
			callBack();
			break;
	}
};
lg.loadRewardAds = function() {
	lg.rewardOk = false;
	try {
		switch (lg.sdkType) {
			case "gd":
				if (gdsdk !== 'undefined' && gdsdk.preloadAd !== 'undefined') {
					gdsdk.preloadAd('rewarded')
						.then(response => {
							lg.rewardOk = true;
						})
						.catch(error => {
							lg.rewardOk = false;
						});
				}
				break;
			case "wg":
				window[window.preroll.config.loaderObjectName].registerRewardCallbacks({
					onReady: function() {
						lg.rewardOk = true;
					},
					onSuccess: function() {
						lg.removeLoadingScreen();
						lg.resumeGame();
						lg.rewardFunction();
					},
					onFail: function() {
						lg.removeLoadingScreen();
						lg.resumeGame();
						lg.rewardFailFunction();
					}
				});
				break;
		}
	} catch (e) {}
};
lg.showRewardFunction = function(rewardFunction, rewardFailFunction) {
	if (lg.rewardOk) {
		lg.rewardFailFunction = rewardFailFunction;
		lg.rewardFunction = rewardFunction;
		switch (lg.sdkType) {
			case "gd":
				if (gdsdk !== 'undefined' && gdsdk.showAd !== 'undefined') {
					lg.addLoadingScreen();
					gdsdk.showAd('rewarded')
						.then(response => {})
						.catch(error => {
							rewardFailFunction();
						});
				}
				break;
			case "wg":
				lg.addLoadingScreen();
				lg.pauseGame();
				lg.rewardOk = false;
				window[window.preroll.config.loaderObjectName].showRewardAd();
				break;
		}
	} else {
		rewardFailFunction();
	}
};
lg.initGame = function(props) {
	for (var prop in props) {
		lofgames[prop] = props[prop];
	}
	if (lg.getCookies(lg.dataId) == null) {
		lg.setCookies();
	} else {
		lg.gameObject = JSON.parse(lg.getCookies(lg.dataId));
	}
	lg.stage.enableDOMEvents(true);
	createjs.Touch.enable(stage, true);
	caller(6, onGlobalClick);

	function onGlobalClick(e) {
		let target = e.target;
		if (target.mouseChildren == false && target.cursor == 'pointer') {
			if (target.downS != 1) {
				lg.playSFX("DownSound");
			}
		}
		switch (e.target.name) {
			case "firmanasingha":
				window.open("https://www.lofgames.com/?ref=logo", "_blank");
				break;
			case "nerokonzama":
				window.open("https://www.lofgames.com/?ref=morebtn", "_blank");
				break;
			case "fullscreen":
			case "fullscreenapi":
				lg.fullscreen();
				break;
			case "musicOn":
				lg.setItem("musicVolume", 0);
				lg.updateMusicVolume();
				target.parent.gotoAndStop(1);
				break;
			case "musicOff":
				lg.setItem("musicVolume", 1);
				lg.updateMusicVolume();
				target.parent.gotoAndStop(0);
				break;
			case "sfxOn":
				lg.setItem("sfxVolume", 0);
				lg.updateSfxVolume();
				target.parent.gotoAndStop(1);
				break;
			case "sfxOff":
				lg.setItem("sfxVolume", 1);
				lg.updateSfxVolume();
				target.parent.gotoAndStop(0);
				break;
			case "submitScore":
			case "subscoreapi":
				caller(3, new lg.lib.ScoreBoardScreen());
				break;
		}
	}
	lg.isOnline = ("" + window.location.href)
		.indexOf('.gamedistribution.com') >= 0;
	canvas.addEventListener("contextmenu", function(e) {
		e.preventDefault();
		return false;
	}, false);
};
lg.levelScore = function() {
	return lg.gameObject.scores[lg.playingLevel];
};
lg.getTotalScore = function() {
	let totalScore = 0;
	for (var val of lg.gameObject.scores) {
		if (!isNaN(val)) {
			totalScore += val;
		}
	}
	if (totalScore > lg.gameObject.bestScore) {
		lg.setItem("bestScore", totalScore);
	}
	return totalScore;
};
lg.setScore = function(score) {
	lg.gameObject.scores[lg.playingLevel] = score;
	lg.setCookies();
};
lg.setItem = function(prop, value) {
	lg.gameObject[prop] = value;
	lg.setCookies();
};
lg.getItem = function(prop) {
	return lg.gameObject[prop];
};
lg.getCookies = function() {
	return window.localStorage.getItem(lg.dataId);
};
lg.setCookies = function() {
	window.localStorage.setItem(lg.dataId, JSON.stringify(lg.gameObject));
};
lg.fullscreen = function() {
	if (document.fullscreenElement === null) {
		var item = window.document.documentElement;
		if (item.mozRequestFullScreen) {
			item.mozRequestFullScreen();
		} else if (item.webkitRequestFullscreen) {
			item.webkitRequestFullscreen();
		} else if (item.msRequestFullscreen) {
			item.msRequestFullscreen();
		} else if (item.requestFullscreen) {
			item.requestFullscreen();
		}
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
	}
};
lg.getRotatedRect = function(angle, width, height) {
	angle = angle * Math.PI / 180;
	var sin = Math.sin(angle);
	var cos = Math.cos(angle);
	var x1 = cos * width,
		y1 = sin * width;
	var x2 = -sin * height,
		y2 = cos * height;
	var x3 = cos * width - sin * height,
		y3 = sin * width + cos * height;
	var minX = Math.min(0, x1, x2, x3),
		maxX = Math.max(0, x1, x2, x3),
		minY = Math.min(0, y1, y2, y3),
		maxY = Math.max(0, y1, y2, y3);
	var rotatedWidth = maxX - minX,
		rotatedHeight = maxY - minY;
	return new createjs.Rectangle(minX, minY, rotatedWidth, rotatedHeight);
};
lg.speekUp = function(wordSTR, vType = 4, rateX = 1) {
	if (lg.gameObject.sfxVolume == 0) {
		return;
	}
	var voiceGetter = setInterval(function() {
		var voices = window.speechSynthesis.getVoices();
		if (voices.length !== 0) {
			var msg = new SpeechSynthesisUtterance(wordSTR.toLowerCase());
			msg.voice = voices[vType];
			msg.volume = 1;
			msg.rate = rateX;
			msg.pitch = 1;
			msg.lang = 'en-US';
			msg.onend = function(e) {};
			speechSynthesis.cancel();
			speechSynthesis.speak(msg);
			clearInterval(voiceGetter);
		}
	}, 200);
};
lg.getParameterByName = function(name, url = window.location.href) {
	name = name.replace(/[\[\]]/g, '\\$&');
	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
	var results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
lg.trace = function() {
	var args = Array.prototype.slice.call(arguments, 0);
	console.log(args.join(","));
};
lg.playSFX = function(sfx_name, inVol = 1) {
	var sfx = createjs.Sound.play(sfx_name);
	lg.sfxArray.push(sfx);
	sfx.sound_id = sfx_name;
	sfx.inVol = inVol;
	sfx.volume = lg.getItem("sfxVolume") * sfx.inVol;
	sfx.addEventListener("complete", lg.onSoundComplete);
	if (lg.soundPaused) {
		lg.pauseSounds();
	}
};
lg.onSoundComplete = function(event) {
	var sfx = event.target;
	sfx.removeEventListener("complete", lg.onSoundComplete);
	lg.sfxArray.splice(lg.sfxArray.indexOf(sfx), 1);
};
lg.removeSFX = function(sfx_name) {
	for (var sfx of lg.sfxArray) {
		if (sfx.sound_id == sfx_name) {
			sfx.stop();
			sfx.removeEventListener("complete", lg.onSoundComplete);
			lg.sfxArray.splice(lg.sfxArray.indexOf(sfx), 1);
			sfx.destroy();
		}
	}
};
lg.removeAllSounds = function() {
	while (lg.sfxArray.length > 0) {
		var sfx = lg.sfxArray[0];
		lg.removeSFX(sfx.sound_id);
	}
};
lg.playMusic = function(music_name, inVol = 1) {
	var props = new createjs.PlayPropsConfig()
		.set({
			loop: -1,
			volume: inVol
		});
	var music = createjs.Sound.play(music_name, props);
	lg.musicArray.push(music);
	music.inVol = inVol;
	music.music_id = music_name;
	music.volume = lg.getItem("musicVolume") * music.inVol;
	if (lg.soundPaused) {
		lg.pauseSounds();
	}
};
lg.removeMusic = function(music_name) {
	for (var music of lg.musicArray) {
		if (music.music_id == music_name) {
			music.stop();
			lg.musicArray.splice(lg.musicArray.indexOf(music), 1);
			music.destroy();
		}
	}
};
lg.updateMusicVolume = function() {
	for (var music of lg.musicArray) {
		music.volume = lg.getItem("musicVolume") * music.inVol;
	}
};
lg.updateSfxVolume = function() {
	for (var sfx of lg.sfxArray) {
		sfx.volume = lg.getItem("sfxVolume") * sfx.inVol;
	}
};
lg.pauseSounds = function() {
	for (var music of lg.musicArray) {
		music.volume = 0;
	}
	for (var sfx of lg.sfxArray) {
		sfx.volume = 0;
	}
};
lg.resumeSounds = function() {
	lg.updateSfxVolume();
	lg.updateMusicVolume();
};
lg.getTimeString = function(seconds) {
	var min = Math.floor(seconds / 60);
	var sec = Math.floor(seconds % 60);
	var time_str = "0" + min + ":";
	if (min > 9) {
		time_str = min + ":";
	} else {
		time_str = "0" + min + ":";
	}
	if (sec < 10) {
		time_str += "0" + sec;
	} else {
		time_str += "" + sec;
	}
	return time_str;
};
lg.randomizeArray = function(arrayx) {
	var newArray = [];
	while (arrayx.length > 0) {
		var idx = Math.floor(Math.random() * arrayx.length);
		newArray.push(arrayx[idx]);
		arrayx.splice(idx, 1);
	}
	for (var i = 0; i < newArray.length; i++) {
		arrayx.push(newArray[i]);
	}
};
lg.sortOn = function(arrarg, prop_list, acdclist) {
	arrarg.sort(function(a, b) {
		for (var i = 0; i < prop_list.length; i++) {
			var prop = prop_list[i];
			var dec = acdclist[i];
			if (a[prop] != b[prop]) {
				return (dec ? b[prop] - a[prop] : a[prop] - b[prop]);
			}
		}
	});
};
lg.sortNumArray = function(arrarg, decending = false) {
	arrarg.sort(function(a, b) {
		if (decending) {
			return b - a;
		} else {
			return a - b;
		}
	});
};
lg.createClone = function(mc) {
	var newMC = new createjs.MovieClip();
	for (var i = 0; i < mc.numChildren; i++) {
		var obj = mc.getChildAt(i);
		var copyobj = null;
		if (obj instanceof createjs.MovieClip) {
			copyobj = lg.createClone(obj);
		} else {
			copyobj = obj.clone(true);
		}
		newMC.addChild(copyobj);
		copyobj.regX = obj.regX;
		copyobj.regY = obj.regY;
		copyobj.x = 0;
		copyobj.y = 0;
	}
	newMC.regX = mc.regX;
	newMC.regY = mc.regY;
	newMC.name = mc.name;
	newMC.mouseEnabled = false;
	return newMC;
};
lg.onClick = function(event) {
	for (var func of lg.listeners.mClickFunc) {
		func(event);
	}
};
lg.registerClickListener = function(funcName) {
	if (lg.listeners.mClick == true) {
		lg.listeners.mClickFunc.push(funcName);
	} else {
		lg.stage.addEventListener("click", lg.onClick);
		lg.listeners.mClickFunc.push(funcName);
		lg.listeners.mClick = true;
	}
};
lg.unRegisterClickListener = function(funcName) {
	var functionIndex = lg.listeners.mClickFunc.indexOf(funcName);
	if (functionIndex != -1) {
		lg.listeners.mClickFunc.splice(functionIndex, 1);
		if (lg.listeners.mClickFunc.length == 0) {
			lg.stage.removeEventListener("click", lg.onClick);
			lg.listeners.mClick = false;
		}
	}
};
lg.onMouseDown = function(event) {
	for (var func of lg.listeners.mDownFunc) {
		func(event);
	}
};
lg.registerMouseDownListener = function(funcName) {
	if (lg.listeners.mDown == true) {
		lg.listeners.mDownFunc.push(funcName);
	} else {
		lg.stage.addEventListener("mousedown", lg.onMouseDown);
		lg.listeners.mDownFunc.push(funcName);
		lg.listeners.mDown = true;
	}
};
lg.unRegisterMouseDownListener = function(funcName) {
	var functionIndex = lg.listeners.mDownFunc.indexOf(funcName);
	if (functionIndex != -1) {
		lg.listeners.mDownFunc.splice(functionIndex, 1);
		if (lg.listeners.mDownFunc.length == 0) {
			lg.stage.removeEventListener("mousedown", lg.onMouseDown);
			lg.listeners.mDown = false;
		}
	}
};
lg.onPressMove = function(event) {
	for (var func of lg.listeners.mPressMoveFunc) {
		func(event);
	}
};
lg.registerPressMoveListener = function(funcName) {
	if (lg.listeners.pMove == true) {
		lg.listeners.mPressMoveFunc.push(funcName);
	} else {
		lg.stage.addEventListener("pressmove", lg.onPressMove);
		lg.listeners.mPressMoveFunc.push(funcName);
		lg.listeners.pMove = true;
	}
};
lg.unRegisterPressMoveListener = function(funcName) {
	var functionIndex = lg.listeners.mPressMoveFunc.indexOf(funcName);
	if (functionIndex != -1) {
		lg.listeners.mPressMoveFunc.splice(functionIndex, 1);
		if (lg.listeners.mPressMoveFunc.length == 0) {
			lg.stage.removeEventListener("pressmove", lg.onPressMove);
			lg.listeners.pMove = false;
		}
	}
};
lg.onPressUp = function(event) {
	for (var func of lg.listeners.mPressUpFunc) {
		func(event);
	}
};
lg.registerPressUpListener = function(funcName) {
	if (lg.listeners.pUp == true) {
		lg.listeners.mPressUpFunc.push(funcName);
	} else {
		lg.stage.addEventListener("pressup", lg.onPressUp);
		lg.listeners.mPressUpFunc.push(funcName);
		lg.listeners.pUp = true;
	}
};
lg.unRegisterPressUpListener = function(funcName) {
	var functionIndex = lg.listeners.mPressUpFunc.indexOf(funcName);
	if (functionIndex != -1) {
		lg.listeners.mPressUpFunc.splice(functionIndex, 1);
		if (lg.listeners.mPressUpFunc.length == 0) {
			lg.stage.removeEventListener("pressup", lg.onPressUp);
			lg.listeners.pUp = false;
		}
	}
};
lg.onMouseMove = function(event) {
	for (var func of lg.listeners.mMoveFunc) {
		func(event);
	}
};
lg.registerMouseMoveListener = function(funcName) {
	if (lg.listeners.mMove == true) {
		lg.listeners.mMoveFunc.push(funcName);
	} else {
		lg.stage.addEventListener("stagemousemove", lg.onMouseMove);
		lg.listeners.mMoveFunc.push(funcName);
		lg.listeners.mMove = true;
	}
};
lg.unRegisterMouseMoveListener = function(funcName) {
	var functionIndex = lg.listeners.mMoveFunc.indexOf(funcName);
	if (functionIndex != -1) {
		lg.listeners.mMoveFunc.splice(functionIndex, 1);
		if (lg.listeners.mMoveFunc.length == 0) {
			lg.stage.removeEventListener("stagemousemove", lg.onMouseMove);
			lg.listeners.mMove = false;
		}
	}
};
lg.onMouseUp = function(event) {
	for (var func of lg.listeners.mUpFunc) {
		func(event);
	}
};
lg.registerMouseUpListener = function(funcName) {
	if (lg.listeners.mUp == true) {
		lg.listeners.mUpFunc.push(funcName);
	} else {
		lg.stage.addEventListener("stagemouseup", lg.onMouseUp);
		lg.listeners.mUpFunc.push(funcName);
		lg.listeners.mUp = true;
	}
};
lg.unRegisterMouseUpListener = function(funcName) {
	var functionIndex = lg.listeners.mUpFunc.indexOf(funcName);
	if (functionIndex != -1) {
		lg.listeners.mUpFunc.splice(functionIndex, 1);
		if (lg.listeners.mUpFunc.length == 0) {
			lg.stage.removeEventListener("stagemouseup", lg.onMouseUp);
			lg.listeners.mUp = false;
		}
	}
};
lg.onMouseOver = function(event) {
	for (var func of lg.listeners.mOverFunc) {
		func(event);
	}
};
lg.registerMouseOverListener = function(funcName) {
	if (lg.listeners.mOver == true) {
		lg.listeners.mOverFunc.push(funcName);
	} else {
		lg.stage.addEventListener("mouseover", lg.onMouseOver);
		lg.listeners.mOverFunc.push(funcName);
		lg.listeners.mOver = true;
	}
};
lg.unRegisterMouseOverListener = function(funcName) {
	var functionIndex = lg.listeners.mOverFunc.indexOf(funcName);
	if (functionIndex != -1) {
		lg.listeners.mOverFunc.splice(functionIndex, 1);
		if (lg.listeners.mOverFunc.length == 0) {
			lg.stage.removeEventListener("mouseover", lg.onMouseOver);
			lg.listeners.mOver = false;
		}
	}
};
lg.onMouseOut = function(event) {
	for (var func of lg.listeners.mOutFunc) {
		func(event);
	}
};
lg.registerMouseOutListener = function(funcName) {
	if (lg.listeners.mOut == true) {
		lg.listeners.mOutFunc.push(funcName);
	} else {
		lg.stage.addEventListener("mouseout", lg.onMouseOut);
		lg.listeners.mOutFunc.push(funcName);
		lg.listeners.mOut = true;
	}
};
lg.unRegisterMouseOutListener = function(funcName) {
	var functionIndex = lg.listeners.mOutFunc.indexOf(funcName);
	if (functionIndex != -1) {
		lg.listeners.mOutFunc.splice(functionIndex, 1);
		if (lg.listeners.mOutFunc.length == 0) {
			lg.stage.removeEventListener("mouseout", lg.onMouseOut);
			lg.listeners.mOut = false;
		}
	}
};
lg.onKeyUp = function(event) {
	for (var func of lg.listeners.kUpFunc) {
		func(event);
	}
};
lg.registerKeyUpListener = function(funcName) {
	if (lg.listeners.kUp == true) {
		lg.listeners.kUpFunc.push(funcName);
	} else {
		document.addEventListener("keyup", lg.onKeyUp);
		lg.listeners.kUpFunc.push(funcName);
		lg.listeners.kUp = true;
	}
};
lg.unRegisterKeyUpListener = function(funcName) {
	var functionIndex = lg.listeners.kUpFunc.indexOf(funcName);
	if (functionIndex != -1) {
		lg.listeners.kUpFunc.splice(functionIndex, 1);
		if (lg.listeners.kUpFunc.length == 0) {
			document.removeEventListener("keyup", lg.onKeyUp);
			lg.listeners.kUp = false;
		}
	}
};
lg.onKeyDown = function(event) {
	for (var func of lg.listeners.kDownFunc) {
		func(event);
	}
};
lg.registerKeyDownListener = function(funcName) {
	if (lg.listeners.kDown == true) {
		lg.listeners.kDownFunc.push(funcName);
	} else {
		document.addEventListener("keydown", lg.onKeyDown);
		lg.listeners.kDownFunc.push(funcName);
		lg.listeners.kDown = true;
	}
};
lg.unRegisterKeyDownListener = function(funcName) {
	var functionIndex = lg.listeners.kDownFunc.indexOf(funcName);
	if (functionIndex != -1) {
		lg.listeners.kDownFunc.splice(functionIndex, 1);
		if (lg.listeners.kDownFunc.length == 0) {
			document.removeEventListener("keydown", lg.onKeyDown);
			lg.listeners.kDown = false;
		}
	}
};
lg.onEnterFrame = function(event) {
	if (lg.tickerPause) {
		return;
	}
	if (lg.inactivePause) {
		return;
	}
	for (var func of lg.listeners.frameFunc) {
		func(event);
	}
};
lg.registerEnterFrameListener = function(funcName) {
	if (lg.listeners.eFrame == true) {
		lg.listeners.frameFunc.push(funcName);
	} else {
		lg.stage.addEventListener("tick", lg.onEnterFrame);
		lg.listeners.frameFunc.push(funcName);
		lg.listeners.eFrame = true;
	}
};
lg.unRegisterEnterFrameListener = function(funcName) {
	var functionIndex = lg.listeners.frameFunc.indexOf(funcName);
	if (functionIndex != -1) {
		lg.listeners.frameFunc.splice(functionIndex, 1);
		if (lg.listeners.frameFunc.length == 0) {
			lg.stage.removeEventListener("tick", lg.onEnterFrame);
			lg.listeners.eFrame = false;
		}
	}
};
lg.establishSessionHighscore = function() {
	var isInternetExp8 = window.XDomainRequest ? true : false;
	var xmlHtpRequestHolder = createCrossDomainRequest();
	var sessionConnectURL = lg.session + (Number(new Date()));

	function createCrossDomainRequest(sessionConnectURL, onSessionEstablished) {
		var sessionRequest;
		if (isInternetExp8) {
			sessionRequest = new window.XDomainRequest();
		} else {
			sessionRequest = new XMLHttpRequest();
		}
		return sessionRequest;
	}
	callOtherDomain();

	function callOtherDomain() {
		if (xmlHtpRequestHolder) {
			if (isInternetExp8) {
				xmlHtpRequestHolder.onload = sessionResponseHandleer;
				xmlHtpRequestHolder.open("POST", sessionConnectURL, true);
				xmlHtpRequestHolder.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				xmlHtpRequestHolder.send("id=00185708");
			} else {
				xmlHtpRequestHolder.open('POST', sessionConnectURL, true);
				xmlHtpRequestHolder.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
				xmlHtpRequestHolder.onreadystatechange = onSessionEstablished;
				xmlHtpRequestHolder.send("id=00185708");
			}
		} else {
			lg.hsapi_status = "no";
		}
	}

	function onSessionEstablished(e) {
		if (xmlHtpRequestHolder.readyState == 4) {
			if (xmlHtpRequestHolder["status"] == 200) {
				sessionResponseHandleer();
			} else {
				lg.hsapi_status = "no";
			}
		}
	}

	function sessionResponseHandleer() {
		var objxx = {
			n: "game_name",
			u: "game_url",
			w: "game_width",
			h: "game_height",
			sid: "session_id",
			status: "hsapi_status"
		};
		var response = xmlHtpRequestHolder.responseText;
		var obj = JSON.parse('{"' + decodeURI(response)
			.replace(/"/g, '\\"')
			.replace(/&/g, '","')
			.replace(/=/g, '":"') + '"}');
		for (var sk in obj) {
			lofgames[objxx[sk]] = obj[sk];
		}
	}
};
lg.initBoard = function(sBoardMC) {
	var minLet = 3;
	sBoardMC.stop();
	sBoardMC.bg = new lg.lib.Background();
	caller(3, sBoardMC.bg);
	var rec = sBoardMC.bg.getBounds();
	sBoardMC.bg.scaleX = lg.gameWidth / rec.width;
	sBoardMC.bg.scaleY = lg.gameHeight / rec.height;
	caller(3, sBoardMC);
	sBoardMC.x = lg.gameWidth / 2;
	sBoardMC.y = lg.gameHeight / 2;
	rec = sBoardMC.getBounds();
	var sFact = lg.gameWidth / rec.width * 0.9;
	var sFact2 = lg.gameHeight / rec.height * 0.9;
	sFact = sBoardMC.scaleX = sBoardMC.scaleY = (sFact < sFact2 ? sFact : sFact2);
	var inpWid = 300 * sBoardMC.scaleX;
	var inpHt = 40 * sBoardMC.scaleY;
	var sxpos = (lg.gameWidth - inpWid) / 2;
	var sypos = (lg.gameHeight - inpHt) / 2;
	var inputText = createInput("Enter Your Name");
	inputText.addEventListener('focus', onFocus);
	window.addEventListener('resize', onResize);

	function onFocus(e) {
		inputText.value = "";
	}
	onResize();

	function createInput(val) {
		var inp = document.createElement('input');
		inp.type = 'text';
		inp.maxLength = 15;
		inp.style.position = 'fixed';
		inp.style.textAlign = 'center';
		inp.style.color = '#330000';
		inp.style.fontFamily = 'Shantell Sans,Passion One,Verdana';
		inp.style.borderRadius = "8px";
		inp.style.borderWidth = "3px";
		inp.style.borderColor = "#220000";
		inp.style.backgroundColor = '#00442200';
		inp.style.fontSize = '25px';
		inp.value = val;
		document.body.appendChild(inp);
		inp.style.display = 'block';
		return inp;
	}

	function onResize(e) {
		var rect = canvas.getBoundingClientRect();
		var sx = rect.width / lg.gameWidth;
		var sy = rect.height / lg.gameHeight;
		inputText.style.left = (rect.x + (sx * sxpos)) + 'px';
		inputText.style.top = (rect.y + (sy * sypos)) + 'px';
		inputText.style.width = Math.round(inpWid * sx) + 'px';
		inputText.style.fontSize = Math.round(inpHt * sx) + 'px';
		inputText.style.borderWidth = (3 * sx) + "px";
		inputText.style.borderRadius = (8 * sx) + "px";
	}
	var game_scr = lg.getTotalScore();
	sBoardMC.alpha = 1;
	caller(6, onmouseb);
	sBoardMC.diff = 0;
	var scoreText = sBoardMC.HE.txtscore;
	scoreText.text = "" + game_scr;
	var nameStr = lg.getItem("playername");
	if (nameStr == undefined || nameStr == null) {
		nameStr = "Enter Name";
	}
	inputText.value = nameStr;
	sBoardMC.scrollBar = sBoardMC.HV.scrollBar;
	sBoardMC.commonItems.gamename.text = lg.gameName.toUpperCase();

	function updateScroll() {
		var ran = (sBoardMC.scrollBar.mover.y + 186) / 372;
		var curY = -170 - (sBoardMC.diff * ran);
		sBoardMC.HV.scoreMc.y = curY;
	}

	function onmouseb(eobj) {
		var targetName = eobj.target.name;
		switch (targetName) {
			case "subBtn":
				nameStr = inputText.value;
				var vulg = "cum,anal,anus,arse,ass,assshole,bastard,bitch,boong,cock,cockfucker,cocksuck,cocksucker,coon,coonnass,crap,cunt,cyberfuck,damn,darn,dick,dirty,douche,dummy,erect,erection,erotic,escort,fag,faggot,fuck,fuckass,fuckhole,gook,hardcore,homoerotic,hore,lesbian,lesbians,motherfuck,motherfucker,negro,nigger,orgasim,orgasm,penis,penisfucker,piss,porn,porno,pornography,pussy,retard,sadist,sex,sexy,shit,slut,suck,tits,viagra,whore,xxx".split(",");
				var checkstr = nameStr.toLowerCase();
				for (var wrd of vulg) {
					if (checkstr.indexOf(wrd) >= 0) {
						sBoardMC.HE.errort.text = "Please remove " + wrd + " from name";
						return;
					}
				}
				if (nameStr == "Enter Name") {
					sBoardMC.HE.errort.text = "Please enter your name";
					return;
				}
				if (nameStr.length < minLet) {
					sBoardMC.HE.errort.text = "Please enter name with at least " + minLet + " characters";
				} else {
					inputText.style.display = "none";
					lg.setItem("playername", nameStr);
					sBoardMC.addChild(sBoardMC.HL);
					sBoardMC.HL.msgTxt.text = "Dear " + nameStr + " your score: " + game_scr + " is being submitted";
					sBoardMC.addChild(sBoardMC.commonItems);
					callPHP("id=f99233b4&player=" + nameStr + "&score=" + game_scr + "&plrid=" + lg.getItem("playerid") + "&type=max&sid=&mode=" + lg.gameName);
				}
				break;
			case "closeBtn":
				inputText.removeEventListener('focus', onFocus);
				window.removeEventListener('resize', onResize);
				inputText.remove();
				sBoardMC.scrollBar.mover.removeEventListener("pressmove", onPressMove);
				caller(4, sBoardMC);
				caller(7, onmouseb);
				caller(4, sBoardMC.bg);
				break;
		}
	}

	function onPressMove(evt) {
		var point = sBoardMC.scrollBar.globalToLocal(evt.stageX, evt.stageY);
		evt.target.y = point.y;
		if (evt.target.y > 186) {
			evt.target.y = 186;
		}
		if (evt.target.y < -186) {
			evt.target.y = -186;
		}
		updateScroll();
	}

	function callPHP(params) {
		nameStr = inputText.value;
		var httpc = new XMLHttpRequest();
		var url = lg.hsSubmit;
		httpc.open("POST", url, true);
		httpc.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		httpc.onreadystatechange = function() {
			if (httpc.readyState == 4 && httpc.status == 200) {
				var str = (httpc.responseText);
				var obj = JSON.parse('{"' + decodeURI(str)
					.replace(/"/g, '\\"')
					.replace(/&/g, '","')
					.replace(/=/g, '":"') + '"}');
				if (lg.getItem("playerid") != obj.plrid) {
					lg.setItem("playerid", obj.plrid);
				}
				switch (obj.status) {
					case "submitted":
						sBoardMC.HL.msgTxt.text = "Dear " + nameStr + " your score: " + game_scr + " is submitted successfully\nLoading Highscore table...";
						break;
					case "updated":
						sBoardMC.HL.msgTxt.text = "Dear " + nameStr + " your score: " + game_scr + " is updated in highscore table\nLoading Highscore table...";
						break;
					case "nochange":
						sBoardMC.HL.msgTxt.text = "Dear " + nameStr + " your score: " + game_scr + " is less than or equal to previous\nLoading Highscore table...";
						break;
				}
				var oReq = new XMLHttpRequest();
				oReq.onload = function(e) {
					var respText = oReq.response;
					var parser = new DOMParser();
					var xmlDoc = parser.parseFromString(respText, "text/xml");
					sBoardMC.addChild(sBoardMC.HV);
					sBoardMC.addChild(sBoardMC.commonItems);
					sBoardMC.HV.yscr.text = nameStr + ": " + game_scr;
					var ctrn = sBoardMC.HV.scoreMc;
					var len = xmlDoc.getElementsByTagName("name")
						.length;
					var sexp = 0;
					if (len < 11) {
						sexp = 18;
					}
					for (var i = 0; i < len; i++) {
						var scoreEntry = new lg.lib.ScoreEntery();
						if (i < 4) {
							scoreEntry.rank.gotoAndStop(i);
						} else {
							scoreEntry.rank.gotoAndStop(3);
						}
						scoreEntry.nameTxt.text = xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue;
						scoreEntry.rank.txt.text = xmlDoc.getElementsByTagName("rank")[i].childNodes[0].nodeValue;
						scoreEntry.scoreTxt.text = xmlDoc.getElementsByTagName("score")[i].childNodes[0].nodeValue;
						ctrn.addChild(scoreEntry);
						scoreEntry.y = i * 43;
						scoreEntry.x = sexp;
					}
					if (len > 10) {
						sBoardMC.diff = (len * 43) - 430;
						var o = new createjs.Shape(new createjs.Graphics()
							.f("#000")
							.dr(-220, -170, 500, 430));
						ctrn.mask = o;
						sBoardMC.scrollBar.visible = true;
						sBoardMC.scrollBar.mover.addEventListener("pressmove", onPressMove);
					} else {
						sBoardMC.scrollBar.visible = false;
					}
				};
				oReq.open("GET", lg.hsGet + "?id=f99233b4&mode=" + lg.gameName);
				oReq.responseType = "text";
				oReq.send();
			}
		};
		httpc.send(params);
	}
};
lg.extendDisplayObject = function() {
	createjs.DisplayObject.prototype.getRect = function(relParent) {
		var prnt = this.parent;
		if (relParent == null) {
			relParent = lg.stage;
		}
		if (prnt == null) {
			return new createjs.Rectangle(0, 0, 0, 0);
		}
		var objRect = this.getTransformedBounds();
		var gp = prnt.localToLocal(objRect.x, objRect.y, relParent);
		objRect.x = gp.x;
		objRect.y = gp.y;
		var rotationData = 0;
		while (prnt != relParent) {
			objRect.width *= Math.abs(prnt.scaleX);
			objRect.height *= Math.abs(prnt.scaleY);
			if (prnt.rotation != 0) {
				rotationData += prnt.rotation;
			}
			prnt = prnt.parent;
		}
		if (rotationData != 0) {
			var objRect2 = lg.getRotatedRect(rotationData, objRect.width, objRect.height);
			objRect.height = objRect2.height;
			objRect.width = objRect2.width;
			objRect.x += objRect2.x;
			objRect.y += objRect2.y;
		}
		return objRect;
	};
	createjs.DisplayObject.prototype.hitTestObject = function(otherObj, commonParent) {
		if (this.visible && otherObj.visible && this.parent && otherObj.parent) {
			var rectOfObject1 = this.getRect(commonParent);
			var rectOfObject2 = otherObj.getRect(commonParent);
			var rectOfObject3 = rectOfObject1.intersection(rectOfObject2);
			if (rectOfObject3) {
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	};
	createjs.DisplayObject.prototype.hitTestPoint = function(xpositionObj, ypositionObj) {
		var rectOfObject1 = this.getRect();
		if (rectOfObject1.contains(xpositionObj, ypositionObj)) {
			return true;
		} else {
			return false;
		}
	};
};
lg.loadFont = function(options = {}) {
	const defVal = {
		f: "Noto Sans",
		b: "900",
		s: "700"
	};
	const opt = {
		...defVal,
		...options
	};
	let loadedFonts = [];
	let loadArray = [];
	lg.bigFont = opt.b;
	lg.smallFont = opt.s;
	lg.gameFont = lg.bigFont + " FTSpx 'Noto Sans'";
	if (opt.f === "Noto Sans") {
		loadArray = ['Passion One:400', opt.f + ':' + opt.s + ',' + opt.b];
	} else {
		loadArray = ['Passion One:400', 'Noto Sans:700,900', opt.f + ':' + opt.s + ',' + opt.b];
	}
	WebFont.load({
		google: {
			families: loadArray
		},
		loading: function() {},
		active: function() {
			if (loadedFonts.indexOf(opt.f) >= 0) {
				lg.bigFont = opt.b;
				lg.smallFont = opt.s;
				lg.gameFont = lg.bigFont + " FTSpx '" + opt.f + "'";
			} else {
				lg.bigFont = "900";
				lg.smallFont = "700";
				lg.gameFont = lg.bigFont + " FTSpx 'Noto Sans'";
			}
		},
		inactive: function() {},
		fontactive: function(familyName, fvd) {
			if (loadedFonts.indexOf(familyName) < 0) {
				loadedFonts.push(familyName);
			}
		},
	});
};
lg.getFontSize = function(cssFontString) {
	const match = cssFontString.match(/(\d+)px/);
	if (match) {
		return parseInt(match[1], 10);
	}
	return 24;
};
lg.setGameFont = function(txt, small = false) {
	let newfont = lg.gameFont;
	let oldFont = txt.font;
	let fontSize = lg.getFontSize(oldFont);
	if (small == true) {
		newfont = newfont.replace(lg.bigFont, lg.smallFont);
	}
	txt.font = newfont.replace("FTS", fontSize);
};
lg.translate = function(key, txt, options = {}) {
	const defVal = {
		bold: true,
		upper: false,
		fw: 1
	};
	const opt = {
		...defVal,
		...options
	};
	let newfont = lg.gameFont;
	let str = lg.languageText["en"][key].toString();
	if (opt.upper) {
		str = str.toLocaleUpperCase();
	}
	if (!opt.bold) {
		newfont = newfont.replace(lg.bigFont, lg.smallFont);
	}
	txt.text = str;
	let oldFont = txt.font;
	let fontSize = Math.round(lg.getFontSize(oldFont) * opt.fw);
	txt.lineHeight = txt.lineHeight * opt.fw;
	txt.font = newfont.replace("FTS", fontSize);
};
lg.scaleTextBox = function(mc, mx = -1) {
	if (mx == -1) {
		mx = lg.defTW;
	}
	let rect = mc.txt.getBounds();
	let b = rect.width;
	let s = mx / b;
	if (s > 1) {
		s = 1;
	}
	mc.scaleX = mc.scaleY = s;
};


"use strict";const lofgames = {sfxArray: [],musicArray: [],clickFuncs: [],gameId: "084df1fx3",hsSubmit: "https://www.lofgames.com/hsapi/scorehtml5.php",hsGet: "https://www.lofgames.com/hsapi/topscoreshtml.php",session: "https://www.lofgames.com/hsapi/index.php?t=",playingLevel: 1,time: Number(new Date()) - 120000,listeners: {mClickFunc: [],mDownFunc: [],mPressMoveFunc: [],mPressUpFunc: [],mMoveFunc: [],mUpFunc: [],mOverFunc: [],mOutFunc: [],kUpFunc: [],kDownFunc: [],frameFunc: []}};const lg = lofgames;const caller = function () {return lg.mainFunction(Array.prototype.slice.call(arguments, 0));};lg.sendHighScores = function () {var score = lg.getTotalScore();if (score > 0) {try{window.top.postMessage('highscore|' + score, '*');}catch(e){}try{window.parent.postMessage('highscore|' + score, '*');}catch(e){}}};lg.showStatus = function () {var str = console.log.toString();if (str.indexOf("native") < 0) {return;}lg.trace(str);lg.trace("\n\n________________\nListener :\n");for (var itm in lg.listeners) {if (lg.listeners[itm] instanceof Array) {lg.trace(itm, ":", lg.listeners[itm].length);} else {lg.trace(itm, ":", lg.listeners[itm]);}}lg.trace("\nScreens :\n");for (var child of stage.children) {lg.trace(child, child.getBounds());}lg.trace("End Status\n________________\n\n\n");};lg.mainFunction = function (args) {switch (args[0]) {case 0:lg.initGame(args[1]);let page = lg.getParameterByName("page");if (page == null) {page = "IntroScreen";}lg.establishSessionHighscore();caller(3, new lg.lib[page](), true);break;case 1:lg.setItem(args[1], args[2]);break;case 2:return lg.getItem(args[1]);case 3:lg.stage.addChild(args[1]);lg.sendHighScores();break;case 4:if (args[1].parent != null) {args[1].parent.removeChild(args[1]);}break;case 6:lg.registerClickListener(args[1]);break;case 7:lg.unRegisterClickListener(args[1]);break;case 8:lg.registerMouseDownListener(args[1]);break;case 9:lg.unRegisterMouseDownListener(args[1]);break;case 10:lg.registerMouseMoveListener(args[1]);break;case 11:lg.unRegisterMouseMoveListener(args[1]);break;case 12:lg.registerMouseUpListener(args[1]);break;case 13:lg.unRegisterMouseUpListener(args[1]);break;case 14:lg.registerMouseOverListener(args[1]);break;case 15:lg.unRegisterMouseOverListener(args[1]);break;case 16:lg.registerMouseOutListener(args[1]);break;case 17:lg.unRegisterMouseOutListener(args[1]);break;case 18:lg.registerPressMoveListener(args[1]);break;case 19:lg.unRegisterPressMoveListener(args[1]);break;case 20:lg.registerPressUpListener(args[1]);break;case 21:lg.unRegisterPressUpListener(args[1]);break;case 22:lg.registerKeyDownListener(args[1]);break;case 23:lg.unRegisterKeyDownListener(args[1]);break;case 24:lg.registerKeyUpListener(args[1]);break;case 25:lg.unRegisterKeyUpListener(args[1]);break;case 26:lg.registerEnterFrameListener(args[1]);break;case 27:lg.unRegisterEnterFrameListener(args[1]);break;case 42:lg.showAds(args[1], args[2]);break;case 43:if(lg.rewardOk != true){lg.loadRewardAds();}break;case 44:lg.showRewardFunction(args[1], args[2]);break;case 100:var itm = args[1];while (itm.firstChild) {itm.removeChild(itm.lastChild);}itm.innerHTML = "";itm.remove();break;}};lg.pauseGame = function () {lg.glPause = true;lg.soundPaused = true;createjs.Tween.pauseAllTweens();lg.pauseSounds();lg.tickerPause = true;};lg.resumeGame = function () {lg.glPause = false;lg.soundPaused = false;createjs.Tween.resumeAllTweens();lg.resumeSounds();lg.tickerPause = false;};lg.initSDKFunctions = function () {lg.rewardOk = false;lg.time = Number(new Date())-1200000;if (window.location.hostname === "www.lofgames.com" || window.location.hostname === "lofgames.com") {lg.time = Number(new Date()); }var pausedTweenObjs = [];createjs.Tween.pauseAllTweens = function () {var i = 0,tweenObjs = createjs.Tween._tweens.slice().reverse(),tweenObj;for (; tweenObj = tweenObjs[i++];) {pausedTweenObjs.push(tweenObj);tweenObj.setPaused(true);}};createjs.Tween.resumeAllTweens = function () {var i = 0,tweenObj;for (; tweenObj = pausedTweenObjs[i++];) tweenObj.setPaused(false);pausedTweenObjs.length = 0;};var winActiveStateHandler = (function () {var stateKey, eventKey, keys = {hidden: "visibilitychange",webkitHidden: "webkitvisibilitychange",mozHidden: "mozvisibilitychange",msHidden: "msvisibilitychange"};for (stateKey in keys) {if (stateKey in document) {eventKey = keys[stateKey];break;}}return function (c) {if (c) document.addEventListener(eventKey, c);return !document[stateKey];};})();winActiveStateHandler(function () {if (winActiveStateHandler()) {if (lg.soundPaused == false) {lg.resumeSounds();createjs.Tween.resumeAllTweens();}lg.inactivePause = false;} else {lg.pauseSounds();createjs.Tween.pauseAllTweens();lg.inactivePause = true;}});switch (lg.sdkType) {case "gd":window["GD_OPTIONS"] = {"gameId": lg.sdkId,"onEvent": function (event) {switch (event.name) {case "SDK_GAME_START":lg.removeLoadingScreen();lg.resumeGame();if (lg.nextCallFunction != null) {lg.nextCallFunction();lg.nextCallFunction = null;}break;case "SDK_GAME_PAUSE":lg.pauseGame();break;case "SKIPPED":if (lg.rewardFailFunction != null) {lg.rewardFailFunction();lg.rewardFailFunction = null;}break;case "SDK_REWARDED_WATCH_COMPLETE":lg.rewardFunction();lg.rewardFunction = null;lg.rewardFailFunction = null;break;}},};(function (d, s, id) {var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) return;js = d.createElement(s);js.id = id;js.src = 'https://html5.api.gamedistribution.com/main.min.js';fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'gamedistribution-jssdk'));break;case "gm":window.SDK_OPTIONS = {gameId: lg.sdkId,onEvent: function (a) {switch (a.name) {case "SDK_GAME_PAUSE":lg.pauseGame();break;case "SDK_GAME_START":lg.removeLoadingScreen();lg.resumeGame();if (lg.nextCallFunction != null) {lg.nextCallFunction();lg.nextCallFunction = null;}break;}}};(function (a, b, c) {var d = a.getElementsByTagName(b)[0];a.getElementById(c) || (a = a.createElement(b), a.id = c, a.src = "https://api.gamemonetize.com/sdk.js", d.parentNode.insertBefore(a, d));})(document, "script", "gamemonetize-sdk");break;}};lg.addLoadingScreen = function () {try {lg.adLoader = new lg.lib.AdLoader();lg.adLoader.x = lg.gameWidth / 2;lg.adLoader.y = lg.gameHeight / 2;caller(3, lg.adLoader);} catch (e) {}};lg.removeLoadingScreen = function () {if (lg.adLoader != null) {if (lg.adLoader.parent != null) {caller(4, lg.adLoader);}}lg.adLoader = null;};lg.nextWeeGooAd = function () {lg.removeLoadingScreen();lg.resumeGame();if (lg.nextCallFunction != null) {lg.nextCallFunction();}lg.nextCallFunction = null;};lg.showAds = function (callBack, forced) {switch (lg.sdkType) {case "wg":if (forced == undefined || forced == false) {var timePassed = Number(new Date()) - lg.time;if (timePassed < 120000) {callBack();return;}}lg.time = Number(new Date());lg.pauseGame();lg.addLoadingScreen();lg.nextCallFunction = callBack;try {window[window.preroll.config.loaderObjectName].refetchAd(lg.nextWeeGooAd);} catch (e) {lg.nextWeeGooAd();}break;case "gd":lg.nextCallFunction = callBack;if (typeof gdsdk !== 'undefined' && gdsdk.showAd !== 'undefined') {lg.addLoadingScreen();gdsdk.showAd();} else {lg.nextCallFunction = null;callBack();}break;case "gm":if (forced == undefined || forced == false) {var timePassed = Number(new Date()) - lg.time;if (timePassed < 120000) {callBack();return;}}lg.time = Number(new Date());lg.nextCallFunction = callBack;if (typeof sdk !== 'undefined' && sdk.showBanner !== 'undefined') {lg.addLoadingScreen();sdk.showBanner();} else {lg.nextCallFunction = null;callBack();}break;default:callBack();break;}};lg.loadRewardAds = function () {lg.rewardOk = false;try {switch (lg.sdkType) {case "gd":if (gdsdk !== 'undefined' && gdsdk.preloadAd !== 'undefined') {gdsdk.preloadAd('rewarded').then(response => {lg.rewardOk = true;}).catch (error => {lg.rewardOk = false;});}break;case "wg":window[window.preroll.config.loaderObjectName].registerRewardCallbacks({onReady: function () {lg.rewardOk = true;},onSuccess: function () {lg.removeLoadingScreen();lg.resumeGame();lg.rewardFunction();},onFail: function () {lg.removeLoadingScreen();lg.resumeGame();lg.rewardFailFunction();}});break;}}catch(e){}};lg.showRewardFunction = function (rewardFunction, rewardFailFunction) {if (lg.rewardOk) {lg.rewardFailFunction = rewardFailFunction;lg.rewardFunction = rewardFunction;switch (lg.sdkType) {case "gd":if (gdsdk !== 'undefined' && gdsdk.showAd !== 'undefined') {lg.addLoadingScreen();gdsdk.showAd('rewarded').then(response => {}).catch (error => {rewardFailFunction();});}break;case "wg":lg.addLoadingScreen();lg.pauseGame();lg.rewardOk = false;window[window.preroll.config.loaderObjectName].showRewardAd();break;}} else {rewardFailFunction();}};lg.initGame = function (props) {for (var prop in props) {lofgames[prop] = props[prop];}if (lg.getCookies(lg.dataId) == null) {lg.setCookies();} else {lg.gameObject = JSON.parse(lg.getCookies(lg.dataId));}lg.stage.enableDOMEvents(true);createjs.Touch.enable(stage, true);caller(6, onGlobalClick);function onGlobalClick(e) {let target = e.target;if (target.mouseChildren == false && target.cursor == 'pointer') {if(target.downS != 1){lg.playSFX("DownSound");}}switch (e.target.name) {case "firmanasingha":window.open("https://www.lofgames.com/?ref=logo", "_blank");break;case "nerokonzama":window.open("https://www.lofgames.com/?ref=morebtn", "_blank");break;case "fullscreen":case "fullscreenapi":lg.fullscreen();break;case "musicOn":lg.setItem("musicVolume", 0);lg.updateMusicVolume();target.parent.gotoAndStop(1);break;case "musicOff":lg.setItem("musicVolume", 1);lg.updateMusicVolume();target.parent.gotoAndStop(0);break;case "sfxOn":lg.setItem("sfxVolume", 0);lg.updateSfxVolume();target.parent.gotoAndStop(1);break;case "sfxOff":lg.setItem("sfxVolume", 1);lg.updateSfxVolume();target.parent.gotoAndStop(0);break;case "submitScore":case "subscoreapi":caller(3, new lg.lib.ScoreBoardScreen());break;}}lg.isOnline = ("" + window.location.href).indexOf('.gamedistribution.com') >= 0;canvas.addEventListener("contextmenu", function (e) {e.preventDefault();return false;}, false);};lg.levelScore = function () {return lg.gameObject.scores[lg.playingLevel];};lg.getTotalScore = function () {let totalScore = 0;for (var val of lg.gameObject.scores) {if (!isNaN(val)) {totalScore += val;}}if (totalScore > lg.gameObject.bestScore) {lg.setItem("bestScore", totalScore);}return totalScore;};lg.setScore = function (score) {lg.gameObject.scores[lg.playingLevel] = score;lg.setCookies();};lg.setItem = function (prop, value) {lg.gameObject[prop] = value;lg.setCookies();};lg.getItem = function (prop) {return lg.gameObject[prop];};lg.getCookies = function () {return window.localStorage.getItem(lg.dataId);};lg.setCookies = function () {window.localStorage.setItem(lg.dataId, JSON.stringify(lg.gameObject));};lg.fullscreen = function () {if (document.fullscreenElement === null) {var item = window.document.documentElement;if (item.mozRequestFullScreen) {item.mozRequestFullScreen();} else if (item.webkitRequestFullscreen) {item.webkitRequestFullscreen();} else if (item.msRequestFullscreen) {item.msRequestFullscreen();} else if (item.requestFullscreen) {item.requestFullscreen();}} else {if (document.exitFullscreen) {document.exitFullscreen();} else if (document.webkitExitFullscreen) {document.webkitExitFullscreen();} else if (document.mozCancelFullScreen) {document.mozCancelFullScreen();} else if (document.msExitFullscreen) {document.msExitFullscreen();}}};lg.getRotatedRect = function (angle, width, height) {angle = angle * Math.PI / 180;var sin = Math.sin(angle);var cos = Math.cos(angle);var x1 = cos * width,y1 = sin * width;var x2 = -sin * height,y2 = cos * height;var x3 = cos * width - sin * height,y3 = sin * width + cos * height;var minX = Math.min(0, x1, x2, x3),maxX = Math.max(0, x1, x2, x3),minY = Math.min(0, y1, y2, y3),maxY = Math.max(0, y1, y2, y3);var rotatedWidth = maxX - minX,rotatedHeight = maxY - minY;return new createjs.Rectangle(minX, minY, rotatedWidth, rotatedHeight);};lg.speekUp = function (wordSTR, vType = 4, rateX = 1) {if (lg.gameObject.sfxVolume == 0) {return;}var voiceGetter = setInterval(function () {var voices = window.speechSynthesis.getVoices();if (voices.length !== 0) {var msg = new SpeechSynthesisUtterance(wordSTR.toLowerCase());msg.voice = voices[vType];msg.volume = 1;msg.rate = rateX;msg.pitch = 1;msg.lang = 'en-US';msg.onend = function (e) {};speechSynthesis.cancel();speechSynthesis.speak(msg);clearInterval(voiceGetter);}}, 200);};lg.getParameterByName = function (name, url = window.location.href) {name = name.replace(/[\[\]]/g, '\\$&');var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');var results = regex.exec(url);if (!results) return null;if (!results[2]) return '';return decodeURIComponent(results[2].replace(/\+/g, ' '));};lg.trace = function () {var args = Array.prototype.slice.call(arguments, 0);console.log(args.join(","));};lg.playSFX = function (sfx_name, inVol = 1) {var sfx = createjs.Sound.play(sfx_name);lg.sfxArray.push(sfx);sfx.sound_id = sfx_name;sfx.inVol = inVol;sfx.volume = lg.getItem("sfxVolume") * sfx.inVol;sfx.addEventListener("complete", lg.onSoundComplete);if (lg.soundPaused) {lg.pauseSounds();}};lg.onSoundComplete = function (event) {var sfx = event.target;sfx.removeEventListener("complete", lg.onSoundComplete);lg.sfxArray.splice(lg.sfxArray.indexOf(sfx), 1);};lg.removeSFX = function (sfx_name) {for (var sfx of lg.sfxArray) {if (sfx.sound_id == sfx_name) {sfx.stop();sfx.removeEventListener("complete", lg.onSoundComplete);lg.sfxArray.splice(lg.sfxArray.indexOf(sfx), 1);sfx.destroy();}}};lg.removeAllSounds = function () {while (lg.sfxArray.length > 0) {var sfx = lg.sfxArray[0];lg.removeSFX(sfx.sound_id);}};lg.playMusic = function (music_name, inVol = 1) {var props = new createjs.PlayPropsConfig().set({loop: -1,volume: inVol});var music = createjs.Sound.play(music_name, props);lg.musicArray.push(music);music.inVol = inVol;music.music_id = music_name;music.volume = lg.getItem("musicVolume") * music.inVol;if (lg.soundPaused) {lg.pauseSounds();}};lg.removeMusic = function (music_name) {for (var music of lg.musicArray) {if (music.music_id == music_name) {music.stop();lg.musicArray.splice(lg.musicArray.indexOf(music), 1);music.destroy();}}};lg.updateMusicVolume = function () {for (var music of lg.musicArray) {music.volume = lg.getItem("musicVolume") * music.inVol;}};lg.updateSfxVolume = function () {for (var sfx of lg.sfxArray) {sfx.volume = lg.getItem("sfxVolume") * sfx.inVol;}};lg.pauseSounds = function () {for (var music of lg.musicArray) {music.volume = 0;}for (var sfx of lg.sfxArray) {sfx.volume = 0;}};lg.resumeSounds = function () {lg.updateSfxVolume();lg.updateMusicVolume();};lg.getTimeString = function (seconds) {var min = Math.floor(seconds / 60);var sec = Math.floor(seconds % 60);var time_str = "0" + min + ":";if (min > 9) {time_str = min + ":";} else {time_str = "0" + min + ":";} if (sec < 10) {time_str += "0" + sec;} else {time_str += "" + sec;}return time_str;};lg.randomizeArray = function (arrayx) {var newArray = [];while (arrayx.length > 0) {var idx = Math.floor(Math.random() * arrayx.length);newArray.push(arrayx[idx]);arrayx.splice(idx, 1);}for (var i = 0; i < newArray.length; i++) {arrayx.push(newArray[i]);}};lg.sortOn = function (arrarg, prop_list, acdclist) {arrarg.sort(function (a, b) {for (var i = 0; i < prop_list.length; i++) {var prop = prop_list[i];var dec = acdclist[i];if (a[prop] != b[prop]) {return (dec ? b[prop] - a[prop] : a[prop] - b[prop]);}}});};lg.sortNumArray = function (arrarg, decending = false) {arrarg.sort(function (a, b) {if (decending) {return b - a;} else {return a - b;}});};lg.createClone = function (mc) {var newMC = new createjs.MovieClip();for (var i = 0; i < mc.numChildren; i++) {var obj = mc.getChildAt(i);var copyobj = null;if (obj instanceof createjs.MovieClip) {copyobj = lg.createClone(obj);} else {copyobj = obj.clone(true);}newMC.addChild(copyobj);copyobj.regX = obj.regX;copyobj.regY = obj.regY;copyobj.x = 0;copyobj.y = 0;}newMC.regX = mc.regX;newMC.regY = mc.regY;newMC.name = mc.name;newMC.mouseEnabled = false;return newMC;};lg.onClick = function (event) {for (var func of lg.listeners.mClickFunc) {func(event);}};lg.registerClickListener = function (funcName) {if (lg.listeners.mClick == true) {lg.listeners.mClickFunc.push(funcName);} else {lg.stage.addEventListener("click", lg.onClick);lg.listeners.mClickFunc.push(funcName);lg.listeners.mClick = true;}};lg.unRegisterClickListener = function (funcName) {var functionIndex = lg.listeners.mClickFunc.indexOf(funcName);if (functionIndex != -1) {lg.listeners.mClickFunc.splice(functionIndex, 1);if (lg.listeners.mClickFunc.length == 0) {lg.stage.removeEventListener("click", lg.onClick);lg.listeners.mClick = false;}}};lg.onMouseDown = function (event) {for (var func of lg.listeners.mDownFunc) {func(event);}};lg.registerMouseDownListener = function (funcName) {if (lg.listeners.mDown == true) {lg.listeners.mDownFunc.push(funcName);} else {lg.stage.addEventListener("mousedown", lg.onMouseDown);lg.listeners.mDownFunc.push(funcName);lg.listeners.mDown = true;}};lg.unRegisterMouseDownListener = function (funcName) {var functionIndex = lg.listeners.mDownFunc.indexOf(funcName);if (functionIndex != -1) {lg.listeners.mDownFunc.splice(functionIndex, 1);if (lg.listeners.mDownFunc.length == 0) {lg.stage.removeEventListener("mousedown", lg.onMouseDown);lg.listeners.mDown = false;}}};lg.onPressMove = function (event) {for (var func of lg.listeners.mPressMoveFunc) {func(event);}};lg.registerPressMoveListener = function (funcName) {if (lg.listeners.pMove == true) {lg.listeners.mPressMoveFunc.push(funcName);} else {lg.stage.addEventListener("pressmove", lg.onPressMove);lg.listeners.mPressMoveFunc.push(funcName);lg.listeners.pMove = true;}};lg.unRegisterPressMoveListener = function (funcName) {var functionIndex = lg.listeners.mPressMoveFunc.indexOf(funcName);if (functionIndex != -1) {lg.listeners.mPressMoveFunc.splice(functionIndex, 1);if (lg.listeners.mPressMoveFunc.length == 0) {lg.stage.removeEventListener("pressmove", lg.onPressMove);lg.listeners.pMove = false;}}};lg.onPressUp = function (event) {for (var func of lg.listeners.mPressUpFunc) {func(event);}};lg.registerPressUpListener = function (funcName) {if (lg.listeners.pUp == true) {lg.listeners.mPressUpFunc.push(funcName);} else {lg.stage.addEventListener("pressup", lg.onPressUp);lg.listeners.mPressUpFunc.push(funcName);lg.listeners.pUp = true;}};lg.unRegisterPressUpListener = function (funcName) {var functionIndex = lg.listeners.mPressUpFunc.indexOf(funcName);if (functionIndex != -1) {lg.listeners.mPressUpFunc.splice(functionIndex, 1);if (lg.listeners.mPressUpFunc.length == 0) {lg.stage.removeEventListener("pressup", lg.onPressUp);lg.listeners.pUp = false;}}};lg.onMouseMove = function (event) {for (var func of lg.listeners.mMoveFunc) {func(event);}};lg.registerMouseMoveListener = function (funcName) {if (lg.listeners.mMove == true) {lg.listeners.mMoveFunc.push(funcName);} else {lg.stage.addEventListener("stagemousemove", lg.onMouseMove);lg.listeners.mMoveFunc.push(funcName);lg.listeners.mMove = true;}};lg.unRegisterMouseMoveListener = function (funcName) {var functionIndex = lg.listeners.mMoveFunc.indexOf(funcName);if (functionIndex != -1) {lg.listeners.mMoveFunc.splice(functionIndex, 1);if (lg.listeners.mMoveFunc.length == 0) {lg.stage.removeEventListener("stagemousemove", lg.onMouseMove);lg.listeners.mMove = false;}}};lg.onMouseUp = function (event) {for (var func of lg.listeners.mUpFunc) {func(event);}};lg.registerMouseUpListener = function (funcName) {if (lg.listeners.mUp == true) {lg.listeners.mUpFunc.push(funcName);} else {lg.stage.addEventListener("stagemouseup", lg.onMouseUp);lg.listeners.mUpFunc.push(funcName);lg.listeners.mUp = true;}};lg.unRegisterMouseUpListener = function (funcName) {var functionIndex = lg.listeners.mUpFunc.indexOf(funcName);if (functionIndex != -1) {lg.listeners.mUpFunc.splice(functionIndex, 1);if (lg.listeners.mUpFunc.length == 0) {lg.stage.removeEventListener("stagemouseup", lg.onMouseUp);lg.listeners.mUp = false;}}};lg.onMouseOver = function (event) {for (var func of lg.listeners.mOverFunc) {func(event);}};lg.registerMouseOverListener = function (funcName) {if (lg.listeners.mOver == true) {lg.listeners.mOverFunc.push(funcName);} else {lg.stage.addEventListener("mouseover", lg.onMouseOver);lg.listeners.mOverFunc.push(funcName);lg.listeners.mOver = true;}};lg.unRegisterMouseOverListener = function (funcName) {var functionIndex = lg.listeners.mOverFunc.indexOf(funcName);if (functionIndex != -1) {lg.listeners.mOverFunc.splice(functionIndex, 1);if (lg.listeners.mOverFunc.length == 0) {lg.stage.removeEventListener("mouseover", lg.onMouseOver);lg.listeners.mOver = false;}}};lg.onMouseOut = function (event) {for (var func of lg.listeners.mOutFunc) {func(event);}};lg.registerMouseOutListener = function (funcName) {if (lg.listeners.mOut == true) {lg.listeners.mOutFunc.push(funcName);} else {lg.stage.addEventListener("mouseout", lg.onMouseOut);lg.listeners.mOutFunc.push(funcName);lg.listeners.mOut = true;}};lg.unRegisterMouseOutListener = function (funcName) {var functionIndex = lg.listeners.mOutFunc.indexOf(funcName);if (functionIndex != -1) {lg.listeners.mOutFunc.splice(functionIndex, 1);if (lg.listeners.mOutFunc.length == 0) {lg.stage.removeEventListener("mouseout", lg.onMouseOut);lg.listeners.mOut = false;}}};lg.onKeyUp = function (event) {for (var func of lg.listeners.kUpFunc) {func(event);}};lg.registerKeyUpListener = function (funcName) {if (lg.listeners.kUp == true) {lg.listeners.kUpFunc.push(funcName);} else {document.addEventListener("keyup", lg.onKeyUp);lg.listeners.kUpFunc.push(funcName);lg.listeners.kUp = true;}};lg.unRegisterKeyUpListener = function (funcName) {var functionIndex = lg.listeners.kUpFunc.indexOf(funcName);if (functionIndex != -1) {lg.listeners.kUpFunc.splice(functionIndex, 1);if (lg.listeners.kUpFunc.length == 0) {document.removeEventListener("keyup", lg.onKeyUp);lg.listeners.kUp = false;}}};lg.onKeyDown = function (event) {for (var func of lg.listeners.kDownFunc) {func(event);}};lg.registerKeyDownListener = function (funcName) {if (lg.listeners.kDown == true) {lg.listeners.kDownFunc.push(funcName);} else {document.addEventListener("keydown", lg.onKeyDown);lg.listeners.kDownFunc.push(funcName);lg.listeners.kDown = true;}};lg.unRegisterKeyDownListener = function (funcName) {var functionIndex = lg.listeners.kDownFunc.indexOf(funcName);if (functionIndex != -1) {lg.listeners.kDownFunc.splice(functionIndex, 1);if (lg.listeners.kDownFunc.length == 0) {document.removeEventListener("keydown", lg.onKeyDown);lg.listeners.kDown = false;}}};lg.onEnterFrame = function (event) {if (lg.tickerPause) {return;}if (lg.inactivePause) {return;}for (var func of lg.listeners.frameFunc) {func(event);}};lg.registerEnterFrameListener = function (funcName) {if (lg.listeners.eFrame == true) {lg.listeners.frameFunc.push(funcName);} else {lg.stage.addEventListener("tick", lg.onEnterFrame);lg.listeners.frameFunc.push(funcName);lg.listeners.eFrame = true;}};lg.unRegisterEnterFrameListener = function (funcName) {var functionIndex = lg.listeners.frameFunc.indexOf(funcName);if (functionIndex != -1) {lg.listeners.frameFunc.splice(functionIndex, 1);if (lg.listeners.frameFunc.length == 0) {lg.stage.removeEventListener("tick", lg.onEnterFrame);lg.listeners.eFrame = false;}}};lg.establishSessionHighscore = function () {var isInternetExp8 = window.XDomainRequest ? true : false;var xmlHtpRequestHolder = createCrossDomainRequest();var sessionConnectURL = lg.session + (Number(new Date()));function createCrossDomainRequest(sessionConnectURL, onSessionEstablished) {var sessionRequest;if (isInternetExp8) {sessionRequest = new window.XDomainRequest();} else {sessionRequest = new XMLHttpRequest();}return sessionRequest;}callOtherDomain();function callOtherDomain() {if (xmlHtpRequestHolder) {if (isInternetExp8) {xmlHtpRequestHolder.onload = sessionResponseHandleer;xmlHtpRequestHolder.open("POST", sessionConnectURL, true);xmlHtpRequestHolder.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");xmlHtpRequestHolder.send("id=00185708");} else {xmlHtpRequestHolder.open('POST', sessionConnectURL, true);xmlHtpRequestHolder.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");xmlHtpRequestHolder.onreadystatechange = onSessionEstablished;xmlHtpRequestHolder.send("id=00185708");}} else {lg.hsapi_status = "no";}}function onSessionEstablished(e) {if (xmlHtpRequestHolder.readyState == 4) {if (xmlHtpRequestHolder["status"] == 200) {sessionResponseHandleer();} else {lg.hsapi_status = "no";}}}function sessionResponseHandleer() {var objxx = {n: "game_name",u: "game_url",w: "game_width",h: "game_height",sid: "session_id",status: "hsapi_status"};var response = xmlHtpRequestHolder.responseText;var obj = JSON.parse('{"' + decodeURI(response).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');for (var sk in obj) {lofgames[objxx[sk]] = obj[sk];}}};lg.initBoard = function (sBoardMC) {var minLet = 3;sBoardMC.stop();sBoardMC.bg = new lg.lib.Background();caller(3, sBoardMC.bg);var rec = sBoardMC.bg.getBounds();sBoardMC.bg.scaleX = lg.gameWidth / rec.width;sBoardMC.bg.scaleY = lg.gameHeight / rec.height;caller(3, sBoardMC);sBoardMC.x = lg.gameWidth / 2;sBoardMC.y = lg.gameHeight / 2;rec = sBoardMC.getBounds();var sFact = lg.gameWidth / rec.width * 0.9;var sFact2 = lg.gameHeight / rec.height * 0.9;sFact = sBoardMC.scaleX =sBoardMC.scaleY = (sFact < sFact2 ? sFact : sFact2);var inpWid = 300 * sBoardMC.scaleX;var inpHt = 40 * sBoardMC.scaleY;var sxpos = (lg.gameWidth - inpWid) / 2;var sypos = (lg.gameHeight - inpHt) / 2;var inputText = createInput("Enter Your Name");inputText.addEventListener('focus', onFocus);window.addEventListener('resize', onResize);function onFocus(e) {inputText.value = "";}onResize();function createInput(val) {var inp = document.createElement('input');inp.type = 'text';inp.maxLength = 15;inp.style.position = 'fixed';inp.style.textAlign = 'center';inp.style.color = '#330000';inp.style.fontFamily = 'Shantell Sans,Passion One,Verdana';inp.style.borderRadius = "8px";inp.style.borderWidth = "3px";inp.style.borderColor = "#220000";inp.style.backgroundColor = '#00442200';inp.style.fontSize = '25px';inp.value = val;document.body.appendChild(inp);inp.style.display = 'block';return inp;}function onResize(e) {var rect = canvas.getBoundingClientRect();var sx = rect.width / lg.gameWidth;var sy = rect.height / lg.gameHeight;inputText.style.left = (rect.x + (sx * sxpos)) + 'px';inputText.style.top = (rect.y + (sy * sypos)) + 'px';inputText.style.width = Math.round(inpWid * sx) + 'px';inputText.style.fontSize = Math.round(inpHt * sx) + 'px';inputText.style.borderWidth = (3 * sx) + "px";inputText.style.borderRadius = (8 * sx) + "px";}var game_scr = lg.getTotalScore();sBoardMC.alpha = 1;caller(6, onmouseb);sBoardMC.diff = 0;var scoreText = sBoardMC.HE.txtscore;scoreText.text = "" + game_scr;var nameStr = lg.getItem("playername");if (nameStr == undefined || nameStr == null) {nameStr = "Enter Name";}inputText.value = nameStr;sBoardMC.scrollBar = sBoardMC.HV.scrollBar;sBoardMC.commonItems.gamename.text = lg.gameName.toUpperCase();function updateScroll() {var ran = (sBoardMC.scrollBar.mover.y + 186) / 372;var curY = -170 - (sBoardMC.diff * ran);sBoardMC.HV.scoreMc.y = curY;}function onmouseb(eobj) {var targetName = eobj.target.name;switch (targetName) {case "subBtn":nameStr = inputText.value;var vulg = "cum,anal,anus,arse,ass,assshole,bastard,bitch,boong,cock,cockfucker,cocksuck,cocksucker,coon,coonnass,crap,cunt,cyberfuck,damn,darn,dick,dirty,douche,dummy,erect,erection,erotic,escort,fag,faggot,fuck,fuckass,fuckhole,gook,hardcore,homoerotic,hore,lesbian,lesbians,motherfuck,motherfucker,negro,nigger,orgasim,orgasm,penis,penisfucker,piss,porn,porno,pornography,pussy,retard,sadist,sex,sexy,shit,slut,suck,tits,viagra,whore,xxx".split(",");var checkstr = nameStr.toLowerCase();for (var wrd of vulg) {if (checkstr.indexOf(wrd) >= 0) {sBoardMC.HE.errort.text = "Please remove " + wrd + " from name";return;}}if (nameStr == "Enter Name") {sBoardMC.HE.errort.text = "Please enter your name";return;}if (nameStr.length < minLet) {sBoardMC.HE.errort.text = "Please enter name with at least " + minLet + " characters";} else {inputText.style.display = "none";lg.setItem("playername", nameStr);sBoardMC.addChild(sBoardMC.HL);sBoardMC.HL.msgTxt.text = "Dear " + nameStr + " your score: " + game_scr + " is being submitted";sBoardMC.addChild(sBoardMC.commonItems);callPHP("id=f99233b4&player=" + nameStr + "&score=" + game_scr + "&plrid=" + lg.getItem("playerid") + "&type=max&sid=&mode=" + lg.gameName);}break;case "closeBtn":inputText.removeEventListener('focus', onFocus);window.removeEventListener('resize', onResize);inputText.remove();sBoardMC.scrollBar.mover.removeEventListener("pressmove", onPressMove);caller(4, sBoardMC);caller(7, onmouseb);caller(4, sBoardMC.bg);break;}}function onPressMove(evt) {var point = sBoardMC.scrollBar.globalToLocal(evt.stageX, evt.stageY);evt.target.y = point.y;if (evt.target.y > 186) {evt.target.y = 186;}if (evt.target.y < -186) {evt.target.y = -186;}updateScroll();}function callPHP(params) {nameStr = inputText.value;var httpc = new XMLHttpRequest();var url = lg.hsSubmit;httpc.open("POST", url, true);httpc.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");httpc.onreadystatechange = function () {if (httpc.readyState == 4 && httpc.status == 200) {var str = (httpc.responseText);var obj = JSON.parse('{"' + decodeURI(str).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');if (lg.getItem("playerid") != obj.plrid) {lg.setItem("playerid", obj.plrid);}switch (obj.status) {case "submitted":sBoardMC.HL.msgTxt.text = "Dear " + nameStr + " your score: " + game_scr + " is submitted successfully\nLoading Highscore table...";break;case "updated":sBoardMC.HL.msgTxt.text = "Dear " + nameStr + " your score: " + game_scr + " is updated in highscore table\nLoading Highscore table...";break;case "nochange":sBoardMC.HL.msgTxt.text = "Dear " + nameStr + " your score: " + game_scr + " is less than or equal to previous\nLoading Highscore table...";break;}var oReq = new XMLHttpRequest();oReq.onload = function (e) {var respText = oReq.response;var parser = new DOMParser();var xmlDoc = parser.parseFromString(respText, "text/xml");sBoardMC.addChild(sBoardMC.HV);sBoardMC.addChild(sBoardMC.commonItems);sBoardMC.HV.yscr.text = nameStr + ": " + game_scr;var ctrn = sBoardMC.HV.scoreMc;var len = xmlDoc.getElementsByTagName("name").length;var sexp = 0;if (len < 11) {sexp = 18;}for (var i = 0; i < len; i++) {var scoreEntry = new lg.lib.ScoreEntery();if (i < 4) {scoreEntry.rank.gotoAndStop(i);} else {scoreEntry.rank.gotoAndStop(3);}scoreEntry.nameTxt.text = xmlDoc.getElementsByTagName("name")[i].childNodes[0].nodeValue;scoreEntry.rank.txt.text = xmlDoc.getElementsByTagName("rank")[i].childNodes[0].nodeValue;scoreEntry.scoreTxt.text = xmlDoc.getElementsByTagName("score")[i].childNodes[0].nodeValue;ctrn.addChild(scoreEntry);scoreEntry.y = i * 43;scoreEntry.x = sexp;}if (len > 10) {sBoardMC.diff = (len * 43) - 430;var o = new createjs.Shape(new createjs.Graphics().f("#000").dr(-220, -170, 500, 430));ctrn.mask = o;sBoardMC.scrollBar.visible = true;sBoardMC.scrollBar.mover.addEventListener("pressmove", onPressMove);} else {sBoardMC.scrollBar.visible = false;}};oReq.open("GET", lg.hsGet + "?id=f99233b4&mode=" + lg.gameName);oReq.responseType = "text";oReq.send();}};httpc.send(params);}};lg.extendDisplayObject = function () {createjs.DisplayObject.prototype.getRect = function (relParent) {var prnt = this.parent;if (relParent == null) {relParent = lg.stage;}if (prnt == null) {return new createjs.Rectangle(0, 0, 0, 0);}var objRect = this.getTransformedBounds();var gp = prnt.localToLocal(objRect.x, objRect.y, relParent);objRect.x = gp.x;objRect.y = gp.y;var rotationData = 0;while (prnt != relParent) {objRect.width *= Math.abs(prnt.scaleX);objRect.height *= Math.abs(prnt.scaleY);if (prnt.rotation != 0) {rotationData += prnt.rotation;}prnt = prnt.parent;}if (rotationData != 0) {var objRect2 = lg.getRotatedRect(rotationData, objRect.width, objRect.height);objRect.height = objRect2.height;objRect.width = objRect2.width;objRect.x += objRect2.x;objRect.y += objRect2.y;}return objRect;};createjs.DisplayObject.prototype.hitTestObject = function (otherObj, commonParent) {if (this.visible && otherObj.visible && this.parent && otherObj.parent) {var rectOfObject1 = this.getRect(commonParent);var rectOfObject2 = otherObj.getRect(commonParent);var rectOfObject3 = rectOfObject1.intersection(rectOfObject2);if (rectOfObject3) {return true;} else {return false;}} else {return false;}};createjs.DisplayObject.prototype.hitTestPoint = function (xpositionObj, ypositionObj) {var rectOfObject1 = this.getRect();if (rectOfObject1.contains(xpositionObj, ypositionObj)) {return true;} else {return false;}};};lg.loadFont = function (options = {}) { const defVal = { f: "Noto Sans", b: "900", s: "700" }; const opt = { ...defVal, ...options }; let loadedFonts = [];let loadArray = []; lg.bigFont = opt.b; lg.smallFont = opt.s; lg.gameFont = lg.bigFont + " FTSpx 'Noto Sans'"; if (opt.f === "Noto Sans") { loadArray = ['Passion One:400', opt.f + ':' + opt.s + ',' + opt.b]; } else { loadArray = ['Passion One:400', 'Noto Sans:700,900', opt.f + ':' + opt.s + ',' + opt.b]; } WebFont.load({ google: { families: loadArray }, loading: function () {}, active: function () { if (loadedFonts.indexOf(opt.f) >= 0) { lg.bigFont = opt.b; lg.smallFont = opt.s; lg.gameFont = lg.bigFont + " FTSpx '" + opt.f + "'"; } else { lg.bigFont = "900"; lg.smallFont = "700"; lg.gameFont = lg.bigFont + " FTSpx 'Noto Sans'"; } }, inactive: function () {}, fontactive: function (familyName, fvd) { if (loadedFonts.indexOf(familyName) < 0) { loadedFonts.push(familyName); } }, });};lg.getFontSize = function (cssFontString) {const match = cssFontString.match(/(\d+)px/);if (match) {return parseInt(match[1], 10);}return 24;};lg.setGameFont = function (txt, small = false) {let newfont = lg.gameFont;let oldFont = txt.font;let fontSize = lg.getFontSize(oldFont);if (small == true) {newfont = newfont.replace(lg.bigFont, lg.smallFont);}txt.font = newfont.replace("FTS", fontSize);};lg.translate = function (key, txt, options = {}) {const defVal = {bold:true,upper:false,fw:1};const opt = { ...defVal, ...options };let newfont = lg.gameFont;let str = lg.languageText[lg.lang][key].toString();if (opt.upper) {str = str.toLocaleUpperCase();}if (!opt.bold) {newfont = newfont.replace(lg.bigFont, lg.smallFont);}txt.text = str;let oldFont = txt.font;let fontSize = Math.round(lg.getFontSize(oldFont) * opt.fw);txt.lineHeight = txt.lineHeight * opt.fw;txt.font = newfont.replace("FTS", fontSize);};lg.scaleTextBox = function (mc, mx = -1) {if(mx == -1){mx = lg.defTW;}let rect = mc.txt.getBounds();let b = rect.width;let s = mx / b;if (s > 1) {s = 1;}mc.scaleX = mc.scaleY = s;};