window.aiptag = window.aiptag || { cmd: [] };
aiptag.cmd.display = aiptag.cmd.display || [];
aiptag.cmd.player = aiptag.cmd.player || [];
aiptag.cmd.queue = aiptag.cmd.queue || [];
aiptag.cmd.load = aiptag.cmd.load || [];
aiptag.cmp = aiptag.cmp || {};
aiptag.events = aiptag.events || {};

console.log("typeof: "+(typeof aiptag.cmd.player));
aiptag.cmd.player = aiptag.cmd.player || [];
aiptag.cmd.player.push = function(a){
    a()
};

aiptag.events.addEventListener = function(eventName, callback, bool){
    if (eventName == "rewardedSlotReady"){
        setTimeout(() => {
            callback()    
        }, 1000);
        
    }
};

aipAPItag = {}

function aipPlayer(obj){

    this.aipConfig = {}

    obj && this.configure(obj)

};

aipPlayer.prototype.configure = function (a) {
    var b;
    for (b in a) {
      var c = a[b];
      void 0 !== c && a.hasOwnProperty(b) && (this.aipConfig[b] = c);
    }
    return this;
  };

aipPlayer.prototype.startPreRoll = function(){
    console.log("call startPreRoll")
    miniplay.showInterstitialAsync().finally(()=>{
        this.aipConfig.AIP_COMPLETE()
    })    
}
aipPlayer.prototype.startRewardedAd = function(obj){
    console.log("call startRewardedAd "+ obj.preload)
    if (obj.preload == false){
        miniplay.showRewardAsync().then(()=>{
            this.aipConfig.AIP_REWARDEDGRANTED()
        }).catch(()=>{
            this.aipConfig.AIP_REWARDEDCOMPLETE()
        }).finally(()=>{
            this.aipConfig.AIP_REWARDEDCOMPLETE()
            this.aipConfig.AIP_REMOVE()
        })
    }else{
        
    }
}



