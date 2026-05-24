window.checkRewardFlag = false;
window.options = {
    "ga": {
        "id": "UA-217637538-6"
    },
    "adsence": {
        "client": "ca-pub-3214612466403714",
        "data-ad-frequency-hint": "45s",
        // "data-adbreak-test": "on",
        "data-ad-channel": "7110309969",
        "callback": () => {
            window.checkRewardFlag = true;
            window.h5sdk.adConfig({
                preloadAdBreaks: "on",
                onReady: () => {
                    window.h5sdk.adBreak({
                        type: "preroll",
                        name: "mypreroll",
                        adBreakDone: () => {},
                    });
                },
            });
        },
    }
}
window.addEventListener('message',(evt)=>{
    // console.log(evt);
    if (evt && evt.data==='next'){
        window.h5sdk.adBreak({
            type: "next",
            name: "mynext",
        });
    }
});