var showHippooHomeBtn = false;
window.onmessage = function(e) {
    e = e || event;
    let tempData = e.data + "";
    if (tempData == "open" || tempData == "showInterstitial") {
        showInterstitial(() => {
            document.getElementById("iframe_game").contentWindow.postMessage("close", "*");
        });
    } else if (tempData == "showReward") {
        showReward(() => {
            document.getElementById("iframe_game").contentWindow.postMessage("close", "*");
        }, () => {
            document.getElementById("iframe_game").contentWindow.postMessage("fail", "*");
        });
    }
    setTimeout(() => {
        if (window.Aha_App || showHippooHomeBtn) {} else {
            hippooHome();
            showHippooHomeBtn = true;
        }
    }, 5000);
}
window._ShowAd = null;
window._success = null;
window._failure = null;
window.untilLog = (msg) => {
    console.log('%c' + msg, 'color: #43bb88;font-size: 24px;font-weight: bold;text-decoration: underline;');
}
window.showLoadAd = (success) => {}
window.showInterstitial = (success) => {
    console.log("requesting Interstitial AD");
    let typename = "next";
    // window.h5sdk.adBreak({
    //     type: typename,
    //     name: "game",
    //     adBreakDone: () => {
    //         success && success();
    //         success = null;
    //     }
    // });
    window.parent.postMessage('next','*');
    return true;
}
window.showReward = (success, failure) => {
    if (window._ShowAd) {
        window.untilLog("requesting Reward AD");
        window._success = success;
        window._failure = failure;
        window._ShowAd();
        window._ShowAd = null;
        return true;
    } else {
        checkReward();
        failure && failure();
        return false;
    }
}
var isShow = false;
window.checkReward = () => {
    if (window._ShowAd)
        return;
    if (!window.checkRewardFlag) {
        return;
    }
    console.log("%c Preload Reward AD", 'color: #00FF00;font-size: 18px;');
    window.h5sdk.adBreak({
        type: "reward",
        name: "reward",
        beforeAd: () => {
            console.log("%c Reward AD BeforeAd", 'color: #0000FF;font-size: 18px;');
        },
        afterAd: () => {
            console.log("%c Reward AD AfterAd", 'color: #FFA500;font-size: 18px;');
            window._ShowAd = null;
            // checkReward()
        },
        beforeReward: (showAdFn) => {
            window.untilLog("load Reward AD Successful");
            window._ShowAd = showAdFn;
            if (window.Aha_App || showHippooHomeBtn) {} else {
                hippooHome();
                showHippooHomeBtn = true;
            }
        },
        adDismissed: () => {
            window._failure && window._failure();
            window._failure = null;
        },
        adViewed: () => {
            window._success && window._success();
            window._success = null;
        },
        adBreakDone: (placementInfo) => {
            console.log(placementInfo);
        }
    });
}
// var checkRewardInterval = setInterval(() => {
//     window.checkReward()
// }, 1e3);
var gameId = window.location.pathname.split('/')[2];
var xhr = new XMLHttpRequest();
xhr.open("POST", "https://api.cocaji.com/game-count/" + gameId, true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({
    count: 1
}));
xhr.onload = function() {
    console.log(this.responseText);
    var data = JSON.parse(this.responseText);
    console.log(data);
}

function dynamicLoadCss(url) {
    var head = document.getElementsByTagName('head')[0];
    var link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    head.appendChild(link);
}
var hippooHomeShown = false;

function hippooHome() {
    if (hippooHomeShown) {
        return;
    }
    hippooHomeShown = true;
    dynamicLoadCss("/not_used/hippoo_nav.css");
    var nav = document.createElement("div");
    nav.id = "isShowNav";
    document.getElementsByTagName("body")[0].appendChild(nav);
    var oDiv = document.createElement("div");
    oDiv.setAttribute("class", "fuceng");
    oDiv.innerHTML = '<a href="https://www.hippoobox.com"><img id="moreBack" src="/not_used/jump_hippoo_home.png" /></a>';
    nav.appendChild(oDiv);
    var finger = document.createElement("img");
    finger.src = "/not_used/finger.svg";
    finger.setAttribute("class", "tips_finger");
    nav.appendChild(finger);
    setTimeout(() => {
        finger.style.display = "none"
    }, 3000);
    var disX, moveX, L, T, starX, starY, starXEnd, starYEnd;
    oDiv.addEventListener('touchstart', function(e) {
        disX = e.touches[0].clientX - this.offsetLeft;
        disY = e.touches[0].clientY - this.offsetTop;
        starX = e.touches[0].clientX;
        starY = e.touches[0].clientY;
    });
    oDiv.addEventListener('touchmove', function(e) {
        L = e.touches[0].clientX - disX;
        T = e.touches[0].clientY - disY;
        starXEnd = e.touches[0].clientX - starX;
        starYEnd = e.touches[0].clientY - starY;
        if (L < 0) {
            L = 0;
        } else if (L > document.documentElement.clientWidth - this.offsetWidth) {
            L = document.documentElement.clientWidth - this.offsetWidth;
        }
        if (T < 0) {
            T = 0;
        } else if (T > document.documentElement.clientHeight - this.offsetHeight) {
            T = document.documentElement.clientHeight - this.offsetHeight;
        }
        moveX = L + 'px';
        moveY = T + 'px';
        this.style.left = moveX;
        this.style.top = moveY;
    });
    window.addEventListener('touchend', function(e) {
        if (event.changedTouches.length == 1) {
            var touch = event.changedTouches[0];
            var halfViewWidth = window.innerWidth / 2;
            var halfWidth = 25;
            if ((touch.clientX < 0) || (touch.clientX >= 0 && touch.clientX <= (halfViewWidth - halfWidth))) {
                oDiv.style.left = '0px';
                oDiv.style.borderTopLeftRadius = "0px";
                oDiv.style.borderTopRightRadius = "15px";
                oDiv.style.borderBottomLeftRadius = "0px";
                oDiv.style.borderBottomRightRadius = "15px";
            } else if (touch.clientX >= (halfViewWidth - halfWidth)) {
                oDiv.style.left = (window.innerWidth - 50) + 'px';
                oDiv.style.borderTopLeftRadius = "15px";
                oDiv.style.borderTopRightRadius = "0px";
                oDiv.style.borderBottomLeftRadius = "15px";
                oDiv.style.borderBottomRightRadius = "0px";
            }
            if (touch.clientY < 0) {
                oDiv.style.top = 20 + 'px';
            } else if (touch.clientY >= window.innerHeight - 50) {
                oDiv.style.top = (window.innerHeight - 50 - 20) + 'px';
            }
        }
    });
}