
!function () {

    class loadingManage {
        constructor() {
          
        }
        static getInstance() {
            if (!this._instance) {
                this._instance = new loadingManage();

                this._instance.loadJson = {"x":0,"type":"View","selectedBox":8,"selecteID":12,"searchKey":"View","props":{"y":0,"x":0,"width":1280,"height":720,"centerY":0,"centerX":0},"nodeParent":-1,"maxID":13,"loadList3D":[],"loadList":[],"label":"View","isOpen":true,"isDirectory":true,"isAniNode":true,"hasChild":true,"compId":2,"child":[{"x":15,"type":"Box","searchKey":"Box,box","props":{"top":0,"right":0,"name":"box","left":0,"bottom":0},"nodeParent":2,"label":"box","isOpen":true,"isDirectory":true,"isAniNode":true,"hasChild":true,"compId":8,"child":[{"x":30,"type":"Label","searchKey":"Label,txt","props":{"width":200,"valign":"middle","text":"label","name":"txt","fontSize":40,"font":"Arial","color":"#ffffff","centerY":0,"centerX":0,"align":"center"},"nodeParent":8,"label":"txt","isDirectory":false,"isAniNode":true,"hasChild":false,"compId":11,"child":[]},{"x":30,"type":"Image","searchKey":"Image","props":{"skin":"logo.png","centerY":-200,"centerX":0},"nodeParent":8,"label":"Image","isDirectory":false,"isAniNode":true,"hasChild":false,"compId":12,"child":[]}]}],"animations":[{"nodes":[],"name":"ani1","id":1,"frameRate":24,"action":0}]}
            }

            //this._instance.showLoad();

            return this._instance;
        }

        init()
        {
           
        }


        //---------------------------------------------------------------
        
        showLoad() {
           
            if(this.loadPanel)
            {
                console.log("进来这里---");
                this.loadPrefab.visible = true;
                this.loadPanel.load();
                return;
            }
            
            let prefab = new Laya.Prefab();
          
            prefab.json = this.loadJson;
            this.loadPrefab = prefab.create();
            
            this.loadPrefab.addComponent(CreateLoadPanel);
            this.loadPrefab && Laya.stage.addChild(this.loadPrefab,9999);
            this.loadPrefab.zOrder = 9999;
            this.loadPanel = this.loadPrefab.getComponent(CreateLoadPanel);
            this.loadPanel.load();
  
        }

     

        hideLoad()
        {
            this.loadPrefab.visible = false;
            clearInterval(loadingManage.timeId);
        }
    }

    class CreateLoadPanel extends Laya.Script {
        constructor() {
            super();
        }

        onAwake() {

            
        }

        load()
        {
            console.log("进来这里~");
            this._panel = this.owner.getChildByName("box");
            this.txt = this._panel.getChildByName("txt");
            
            this._panel.visible = true;
            this.loadNum = 0;
            loadingManage.timeId = setInterval(()=>
            {
                this.loadNum += 1;
                if(this.loadNum < 100)
                {
                    this.txt.text = "loading…" + this.loadNum + "%"
                }else
                {
                    clearInterval(loadingManage.timeId);
                }
            },100)

        }
        

       

        onEnable() {

           
        }

        onDisable()
        {
           
        }


    }

    loadingManage._instance = null;
    window["loadingManage"] = loadingManage.getInstance();
    
}()