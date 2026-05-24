!function () {
    class NullWebAudioEngine {
        constructor() {
            this.beEnabled = false;
            this.isMuted = false;
            this.bePauseSound = false;
            this.bePauseMusic = false;
            this.tryToResumeIntervalId = -1;
            this.isVisibilityMuted = false;
            this.adShowing = false;
        }
        init() {
            return new Promise((resolve, reject) => {
                try {
                    this.beEnabled = true;
                    this.musicVolume = 60;
                    resolve(true);
                }
                catch (e) {
                    console.log("Web Audio API", e);
                    resolve(false);
                }
            });
        }
        onVisibilitychange() {
        }
        onDBInstanceMuted() {
            // this.pauseMusic = DBInstance$1.musicMuted.value;
            // this.pauseSound = DBInstance$1.soundMuted.value;
        }
        tryToResumeAudioContext() {
            if (this.isMuted)
                return;

        }
        onMusicStatechange() {
        }
        onSoundStatechange() {
        }
        set muted(b) {
            this.isMuted = b;
        }

        get muted() {
            return this.isMuted;
        }

        set pause(b) {
            this.pauseSound = b;
            this.pauseMusic = b;
        }
        get pause() {
            return this.pauseSound || this.pauseMusic;
        }

        set pauseSound(b) {
            this.bePauseSound = b;
        }
        get pauseSound() {
            return this.bePauseSound;
        }
        get pauseMusic() {
            return this.bePauseMusic;
        }
        set pauseMusic(b) {
            this.bePauseMusic = b;
        }
        stopAll() {
        }
        parse(url, data, onComplete) {
        }
        playMusic(url) {
        }
        stopMusic() {
        }
        stopSound(url) {
        }
        set musicVolume(vlaue) {
        }
        get musicVolume() {
            return 60;
        }
        playSound(url, loop = false, singleton = false) {
            if (!this.beEnabled)
                return;
        }
    }
    const audioEngine = window.WebAudioEngine = new NullWebAudioEngine();
    class platform {
        constructor() {
            this.canNavigateActive_ = false;
            this.screen_ = "";
            this.action_ = "";
            this.to_ = "";
            this.prompt_ = null;
            this.initialized_ = false;
			this.lastShowVedioTime = 0;
            this.lastTableAdShowTime = new Date().getTime();  
        }
        static getInstance() {
            if (!this._instance) {
                this._instance = new platform();
            }
            return this._instance;
        }

        getStorageSync(key) {
            let value = null;
            try {
                let v = Laya.LocalStorage.getItem(key);
                value = JSON.parse(v);
            } catch (error) {

            }
            return value
        }
        setStorageSync(key, value) {
            return Laya.LocalStorage.setItem(key, JSON.stringify(value));
        }
		showTableAd(dua)
		{
			console.log("显示插屏");
            dua = dua || 500;
            let curTime = new Date().getTime();
            if(curTime - this.lastTableAdShowTime > 30000)
            {
				console.log("插屏时间足够");
                if(window["adShow"] != null)
                {
                    this.lastTableAdShowTime = curTime;
                    setTimeout(()=>{
                        window["adShow"]({
                            ad_type:2,
                            success(res){
                                console.log("adIntersShow success = "+res);
                            },
                            fail(res){
                                console.log("adIntersShow fail = "+res);
                            }
                        });
                    },dua);
                }
            }			
		}
		showBanner()
		{
            if (window["adInit"] != null)
            {
                window["adInit"]({
                    banner_id:"ca-app-pub-2476175026271293/2080729663",
                    interstitial_id:"ca-app-pub-2476175026271293/5666242147",
                    reward_id:"ca-app-pub-2476175026271293/5566169797",
                    debug_mode:false,
                    //test_device_id:'CFE435CB542A890684979DE4FDFAF420',
                    banner_location:2,
                    custom_banner_location:{
                        //充满屏幕
                        width:-1,

                        //居底
                        gravity:80,

                        //距离底部50dip
                        margin_bottom:5
                    },
                    success(res){
                        console.log("adInit success = "+res);
                    }
                });
            }
            setTimeout(()=>{
                if (window["adShow"] != null)
                {
                    window["adShow"]({
                        ad_type:1,
                        success(res){
                            console.log("adBannderShow success = "+res);
                        },
                        fail(res){
                            console.log("adBannderShow fail = "+res);
                        }
                    });
                }
            },500);
		}
        hideBanner() { }
        //插屏广告
        showInterstitial(complete) { complete && complete() }
        //复活
        showReward(succ, fail)
		{
            console.log("激励广告");
            if(window["adShow"] == null)
            {
				succ && succ();
            }
            else
			{
				let curTime = new Date().getTime();
				if (curTime - this.lastShowVedioTime <= 500)
				{
					this.tip('Frequent requests, please try again later');
					fail && fail();
				}
				else
				{
					this.lastShowVedioTime = curTime;
					let _this = this;
					window["adShow"]
					({
						ad_type:3,
						success(res)
						{
							console.log("adVideoShow success = " + res);
							if (res == 10001)
							{
								
							}
							else if (res == 10002)
							{
								succ && succ();
							}
							else
							{
								_this.tip('No ads, Pls try again later');
								fail && fail();
							}
						},
						fail(res)
						{
							console.log("adVideoShow fail = "+res);
							_this.tip('No ads, Pls try again later');
							fail && fail();
						}
					});
				}
			}
        }

        yadstartup(name, complete) { complete && complete(); }
		tip(text) {
			let UI_Tips = new Laya.Box();
			let textScaleArr = [];
			let LMsgnum = -3;
			let LMsgArr = [];
			UI_Tips.name = "UI_Tips";
			Laya.stage.addChild(UI_Tips);
			for (let i = 0; i < 2; i++) {
				let scaleText = new Laya.Label();
				textScaleArr.push(scaleText);
			}
			/**LMsg 消息提示*/
			function ShowTip(text) {
				let gh = 1024;
				let gw = Laya.stage.width;
				if (LMsgArr.length < 3) {
					let tsLayer = new Laya.Sprite();
					tsLayer.width = gw;
					UI_Tips.addChild(tsLayer);
					LMsgnum++;

					let tsText = new Laya.Label();
					textScaleFun(tsText, gh * 0.036, "#ffffff");
					tsText.text = text;
					tsText.stroke = 4;
					tsText.bold = true;
					tsText.strokeColor = "#111111";
					tsText.align = "center";
					tsText.valign = "middle";
					tsText.width = Laya.stage.width;
					tsText.wordWrap = true;
					tsText.m
					tsLayer.addChild(tsText);
					tsText.anchorX = tsText.anchorY = 0.5;
					tsText.x = (gw) / 2;
					tsLayer["tsText"] = tsText;
					let width = tsLayer.getBounds().width;

					tsLayer.x = 0;
					tsLayer.y = gh * 0.38;
					let tsLayery = tsLayer.y;
					tsLayer.alpha = 0;

					LMsgArr.push(tsLayer);
					Laya.Tween.clearTween(tsLayer);
					Laya.Tween.to(tsLayer, { y: tsLayery - gh * 0.05 }, 2000, Laya.Ease.quadOut, null, 280);
					Laya.Tween.to(tsLayer, { alpha: 1 }, 280, Laya.Ease.quadOut, Laya.Handler.create(this, ()=>
					{
						Laya.timer.once(1700, this, ()=>{
							Laya.Tween.clearTween(tsLayer);
							Laya.Tween.to(tsLayer, { alpha: 0 }, 300, Laya.Ease.quadOut, Laya.Handler.create(this, ()=>{
								removeFromParent(tsLayer)
							}))
						});
					}));
				} else {
					// console.log(LMsgArr.length);
					let tsLayer = LMsgArr[LMsgnum];

					Laya.Tween.clearTween(tsLayer);
					UI_Tips.addChild(tsLayer);
					LMsgnum++;
					LMsgnum = LMsgnum % 3;
					let tsText = tsLayer["tsText"];
					tsText.text = text;

					tsLayer.x = 0;
					tsLayer.y = gh * 0.38;
					let tsLayery = tsLayer.y;
					tsLayer.alpha = 0;
					tsLayer.visible = true;

					Laya.Tween.to(tsLayer, { y: tsLayery - gh * 0.05 }, 2000, Laya.Ease.quadOut, null, 280);
					Laya.Tween.to(tsLayer, { alpha: 1 }, 280, Laya.Ease.quadOut, Laya.Handler.create(this, ()=>
					{
						Laya.timer.once(1700, this, ()=>{
							Laya.Tween.clearTween(tsLayer);
							Laya.Tween.to(tsLayer, { alpha: 0 }, 300, Laya.Ease.quadOut, Laya.Handler.create(this, ()=>{
								removeFromParent(tsLayer);
							}))
						});
					}));
				}
			}
			function removeFromParent(obj) {
				obj && obj.parent && obj.parent.removeChild(obj);
			}
			function textScaleFun(obj, height, textColor, fontFamily){
				let result;
				if (textScaleArr.length > 0) {
					result = textScaleArr.pop();
				} else {
					result = new Laya.Label();
				}
				result.fontSize = 24;
				if (textColor || textColor == "#000000") obj.color = textColor;
				fontFamily ? obj.font = fontFamily : obj.font = "Arial";
				result.font = obj.font;
				result.text = "Mrz默认值Mrz";
				if (result.text && result.height != 0) {
					while (result.height < height) {
						result.fontSize++;
					}
					while (result.height > height && result.fontSize > 40) {
						result.fontSize--;
					}
				}
				obj.fontSize = result.fontSize;
				textScaleArr.push(result);
			}
			return ShowTip(text);
		}
    }
    platform._instance = null;
    window["platform"] = platform;
}()
