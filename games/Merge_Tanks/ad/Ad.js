const appKey = 4715321;
const ga_id = "UA-120043346-118"; // 运营给到的ID应该是UA-XXXXXXXXX-XX格式
const adsence_client = "ca-pub-2270136017335510";
const adTop = "10vw";
const adLeft = "10vw";
const adBottom = "";
const adRight = "";
const adsence_data_ad_channel = "1234567"; //可以不用填
const gameName = "Merge_Tanks";

var adLoadFail = document.getElementById("adLoadFail");
var rotate = document.getElementById('rotate-tip');

function checkOrientation() {
	if (window.orientation === 90 || window.orientation === -90) {
		// 横屏
		rotate.style.display = 'none';
	} else {
		// 竖屏
		rotate.style.display = 'block';
		setTimeout(() => {
			rotate.style.display = 'none'
		}, 3000);
	}
}

window.addEventListener("orientationchange", function() {
	checkOrientation();
}, false);
// 页面加载时检测一次屏幕方向
checkOrientation();

function sdkInit() {
	console.log("Ad init...");
	window.h5sdk.init(appKey, adTop, adLeft, adBottom, adRight, { //以下代码参数由2个部分组成, ga, adsense
		"ga": {
			// GA跟踪代码ID，有了它，athena埋点会同步上报到谷歌，请联系传音对接人获取
			"id": ga_id
		},
		"adsense": {
			"client": adsence_client, // adsense client id
			"data-ad-frequency-hint": "45s", // 广告频次限制，最小值45s
			"data-ad-channel": adsence_data_ad_channel, // 游戏广告自定义渠道ID
			// 热启动广告，既手机锁屏/恢复，浏览器切换时展示的广告
			// pauseCallback 和 resumeCallback 必须两个同时存在，才会展示热启动广告
			"pauseCallback": () => {
				console.log("👩💻 my game paused"); // ---请在这里加入游戏暂停代码---
			},
			"resumeCallback": () => {
				console.log("👩💻 my game restart"); // ---请在这里加入游戏重新开始代码---
			},
			"callback": () => { // 初始化成功后回调
				window.h5sdk.athenaSend("game_start", gameName); //开始游戏自定义埋点
				window.h5sdk.adConfig({
					preloadAdBreaks: "on",
					onReady: () => {
						// 展示广告
						// 当广告展示失败错误为notReady, timeout, noAdPreloaded, other的时候，会展示兜底广告
						window.h5sdk.adBreak({
							type: "preroll",
							name: "my_preroll",
							adBreakDone: () => {}, // 也不要在这里初始化游戏，因为用户不关闭广告，则游戏无法初始化！！！
						});
					},
				});
			},
		}
	});
}

function showSplash() {
	console.log("showSplash...");
	window.h5sdk.adBreak({
		type: "preroll",
		name: "my_preroll",
		adBreakDone: () => {}, // 也不要在这里初始化游戏，因为用户不关闭广告，则游戏无法初始化！！！
	});
}

function loadComplete(){
	console.log("loadComplete...");
	// window.h5sdk.gameLoadingCompleted();
}

function showReward(callback) {
	console.log("showReward...");
	window.h5sdk.adBreak({
		type: "reward",
		name: 'video',
		beforeAd: () => {
			//（可选）在展示广告之前调用。游戏此时应当暂停并静音。这两项操作必须同步完成。此回调完成后，广告将立即展示。
			console.log('beforeAd');
		},
		afterAd: () => {
			//（可选）无论出于任何原因，都应在广告展示完毕后调用。对于激励广告，此方法会在 adDismissed 或 adViewed 之后调用，具体取决于玩家操作。此函数应该用于恢复游戏流程。例如，用于取消静音并开始下一关。
			console.log('afterBreak ');
		},
		beforeReward: (showAdFn) => {
			//在激励广告可以投放时调用。该函数应该会接收一个参数 - showAdFn()，您必须调用该参数才能展示激励广告。
			console.log("beforeReward");
			showAdFn();
		},
		adDismissed: () => {
			//仅在玩家关闭广告时针对激励广告调用。仅当玩家在广告结束前关闭广告时调用。在这种情况下，不应给予奖励。
			console.log("adDismissed");
			// callback && callback(false);
		},
		adViewed: () => {
			//仅在玩家看完广告后针对激励广告调用，应向玩家提供奖励。
			console.log("adViewed");
			callback && callback(true);
		},
		adBreakDone: (placementInfo) => {
			//（可选）始终作为 adBreak() 中的最后一步调用，即使广告没有展示也是如此。
			console.log("adBreakDone");
			console.log(placementInfo);
			// callback && callback(placementInfo.breakStatus);
		},
	});
	if (callback != "viewed") {
		console.log("callback: ", callback);
		adLoadFail.setAttribute("style", "display : inline-block");
		setTimeout(() => {
			adLoadFail.setAttribute("style", "display : none");
		}, 2000);
	}
}

function showInterstitial(callback) {
	console.log("showInterstitial...");
	window.h5sdk.adBreak({
		type: "next", // ad shows at start of next level
		name: 'interstitial',
		adBreakDone: (placementInfo) => {
			console.log(placementInfo);
			callback && callback(placementInfo.breakStatus);
		},
	});
}

window.showReward = this.showReward;
window.showInterstitial = this.showInterstitial;

this.sdkInit();