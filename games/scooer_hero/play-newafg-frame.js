
var iframe_game = document.getElementById('iframe_game');
iframe_game.src = 'play.html';
iframe_game.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});




window.h5sdk.init(4547502, "10vw", "10vw", "", "", {
  ga: {
    id: "UA-120043346-133", // 运营给到的ID应该是UA-XXXXXXXXX-XX格式
  },
  adsence: {
    client: "ca-pub-2270136017335510",
    "data-ad-frequency-hint": "30s",
    // "data-adbreak-test": "on",
    "data-ad-channel": "1234567", // 游戏广告自定义渠道ID
    callback: () => {
      window.h5sdk.athenaSend("game_start", "my_flip_coin_game"); //开始游戏自定义埋点
      window.h5sdk.adConfig({
        preloadAdBreaks: "on",
        onReady: () => {
          // 展示开屏广告
          window.h5sdk.adBreak({
            type: "preroll",
            name: "my_preroll",
            adBreakDone: () => { },
          });
        },
      });
    },
  },
});

window.addEventListener('message', function (e) {
  if (e.data.type == 1) {
    //插屏
    console.log('=================播放插屏');
    window.h5sdk.adBreak({
      type: "next", // type请按照文档选择合适的https://developers.google.com/ad-placement/docs/placement-types
      name: "game_next",
      beforeAd: () => {
        console.log("beforeAd");
      },
      afterAd: () => {
        console.log("afterAd");
      },
      adBreakDone: () => {
        this.score = 0;
        this.erase();
        this.play();
      },
    });
  } else if (e.data.type == 2) {
    //视频
    console.log('=================播放视频');
    window.h5sdk.adBreak({
      type: "reward",
      name: "my_reward",
      beforeAd: () => {
        console.log("beforeAd");
      },
      afterAd: () => {
        console.log("afterAd");
      },
      adDismissed: () => {
        console.log("adDismissed");
      },
      adViewed: () => {
        console.log("adViewed");
      },
      beforeReward: (showAdFn) => {
        console.log("beforeReward");
        showAdFn();
      },
      adBreakDone: (placementInfo) => {
        if (placementInfo.breakStatus === "dismissed") {
          console.log("取消观看" + placementInfo.breakStatus);
          document.getElementById("iframe_game").contentWindow.postMessage(JSON.stringify(0), "*")
          return;
        } else if (placementInfo.breakStatus !== "viewed") {
          console.log("广告异常" + placementInfo.breakStatus);
          document.getElementById("iframe_game").contentWindow.postMessage(JSON.stringify(0), "*")
          return;
        }

        document.getElementById("iframe_game").contentWindow.postMessage(JSON.stringify(1), "*")
      },
    });
  } else if (e.data.type == 3) {
    console.log("展示float广告");
    window.h5sdk.show("", "", "30vw", "30vw")
  } else if (e.data.type == 4) {
    console.log("隐藏float广告");
    window.h5sdk.hide();
  }
})

