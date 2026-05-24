
// 向iframe发送消息
function postMessageToIframe(params) {
    game_iframe.contentWindow.postMessage(
        JSON.stringify(params),
        "*" // iframe的域名
    );
}

//gtag
function GASend(event, event_param) {
    window.gtag(event, appName, event_param);
}

function ShowRewardAD(name) {
    // 展示激励广告
    window.h5sdk.athenaSend("showReward", "", "");
    window.h5sdk.adBreak({
        type: "reward",
        name: appName + "+" + name,
        beforeAd: () => {
            console.info("reward_beforeAd");
            postMessageToIframe({ func: "reward_BeforeAdCallback" });
        },
        afterAd: () => {
            console.info("reward_afterAd");
            postMessageToIframe({ func: "reward_AfterAdCallback" });
        },
        beforeReward: (showAdFn) => {
            console.info("reward_beforeReward");
            postMessageToIframe({ func: "reward_BeforeRewardCallback" });
            showAdFn();
        },
        adDismissed: () => {
            console.info("reward_adDismissed");
            postMessageToIframe({ func: "reward_AdDismissedCallback" });
        },
        adViewed: () => {
            console.info("reward_adViewed");
            postMessageToIframe({ func: "reward_AdViewedCallback" });
        },
        adBreakDone: (placementInfo) => {
            console.info("reward_adbreakdone", placementInfo.breakStatus);
            postMessageToIframe({ func: "reward_AdBreakDoneCallback", param: placementInfo.breakStatus });
        },
    });
}
function ShowInterstitialAD(type, name) {
    // 展示广告
    window.h5sdk.athenaSend("showInterstitial", "", "");
    window.h5sdk.adBreak({
        type: type,
        name: appName + "+" + name,
        beforeAd: () => {
            console.info("beforeAd");
            postMessageToIframe({ func: "BeforeAdCallback" });
        },
        afterAd: () => {
            console.info("afterAd");
            postMessageToIframe({ func: "AfterAdCallback" });
        },
        adBreakDone: (placementInfo) => {
            console.info("adbreakdone", placementInfo.breakStatus);
            postMessageToIframe({ func: "AdBreakDoneCallback", param: placementInfo.breakStatus });
        },
    });
}

//游戏加载完成上报时间
function onGameReadyForPlay() {
    window.h5sdk.gameLoadingCompleted();
}

// 注册消息接收
window.addEventListener("message", (e) => {
    console.info(e, "msg from iframe");
    try {
        var data = JSON.parse(e["data"]);
        switch (data.code) {
            case 0://gtag
                GASend(data.data.event, data.data.event_param);
                break;
            case 1://ShowInterstitialAD
                ShowInterstitialAD(data.data.type, data.data.name);
                break;
            case 2://ShowRewardAD
                ShowRewardAD(data.data.name);
                break;
            case 3:
                onGameReadyForPlay();
                break;
            case 4:
                doFullScreen();
                break;
        }
    } catch (error) {
        console.info(error);
    }
})


// 全屏
function doFullScreen() {
    var docElm = document.documentElement;
    //W3C 
    if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
    }
    //FireFox 
    else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
    }
    //Chrome等 
    else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
    }
    //IE11 
    else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
}
