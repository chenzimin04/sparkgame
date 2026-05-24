function postMessageToParent(params) {
    window.parent.postMessage(
        JSON.stringify(params),
        "*" // 父window的域名
    );
}

function GASend(event, event_param) {
    postMessageToParent({ code: 0, data: { event: event, event: event_param } });
}

var rewardAD_CallBack;
var interstitialAD_CallBack;
function ShowRewardAD(callback) {
    rewardAD_CallBack = callback;
    // 展示激励广告
    postMessageToParent({ code: 2, data: { name: "show_reward" } });
}
function ShowInterstitialAD(callback) {
    interstitialAD_CallBack = callback;
    // 展示广告
    postMessageToParent({ code: 1, data: { type: "next", name: "show_interstitial" } });
}

// 注册消息接收
window.addEventListener("message", (e) => {
    console.log(e, "msg to iframe");
    try {
        const data = JSON.parse(e.data);
        if (data.func == "reward_AdBreakDoneCallback") {
            // gameInstance.SendMessage("JSInstance", data.func, data.param);
            if (rewardAD_CallBack) {
                if(data.param!="viewed"){
                    // mizhu.toast("Please try again later");
                }
                rewardAD_CallBack(data.param);
            }
        } else if (data.func == "AdBreakDoneCallback") {
            if (interstitialAD_CallBack) interstitialAD_CallBack();
        }
    } catch (error) {
        console.log(error);
    }
})

function onGameReadyForPlay() {
    postMessageToParent({ code: 3, data: {} });
}
