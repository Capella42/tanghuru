var Text=pc.createScript("text"),shinePoint=0,tangerinePoint=0,strawberryPoint=0,sweetsapphirePoint=0;Text.prototype.initialize=function(){},Text.prototype.update=function(t){var e=this.app.root.findByName("shinePoint"),i=this.app.root.findByName("tangerinePoint"),n=this.app.root.findByName("strawberryPoint"),o=this.app.root.findByName("sweetsapphirePoint");e.element.text=shinePoint,i.element.text=tangerinePoint,n.element.text=strawberryPoint,o.element.text=sweetsapphirePoint};var Shine=pc.createScript("shine");Shine.attributes.add("shineX",{type:"number",default:-3.4}),Shine.attributes.add("shineY",{type:"number",default:-.3}),Shine.attributes.add("shineZ",{type:"number",default:1.7});var shineMax=6;Shine.prototype.initialize=function(){for(i=0;i<shineMax;i++){var e=new pc.Entity;(e=this.app.assets.get(154127214).resource.instantiate()).setPosition(this.shineX,this.shineY,this.shineZ),e.name=`shine${i}`,this.app.root.addChild(e),this.shineX-=.6,2==i&&(this.shineX=-3.4,this.shineY=0)}},Shine.prototype.update=function(e){if(this.app.keyboard.wasPressed(pc.KEY_Q)&&mnum>0&&0==rotaCheck&&(shinePoint++,mnum--,mnum<shineMax&&(this.app.root.findByName("shine"+(shineMax-1)).destroy(),shineMax--)),1==cerateCheck&&1==mEnterCheck){var t=Shine.attributes.get("shineX").default,n=Shine.attributes.get("shineY").default;if(mnum<7&&1==cerateCheck){for(i=0;i<mnum-1;i++)this.app.root.findByName(`shine${i}`).destroy();for(i=0;i<mnum;i++){var s=new pc.Entity;(s=this.app.assets.get(154127214).resource.instantiate()).setPosition(t,n,this.shineZ),s.name=`shine${i}`,this.app.root.addChild(s),t-=.6,2==i&&(t=-3.4,n=0)}}cerateCheck=!1,mEnterCheck=!1}};var Tangerine=pc.createScript("tangerine");Tangerine.attributes.add("tangerineX",{type:"number",default:-.85}),Tangerine.attributes.add("tangerineY",{type:"number",default:-.3}),Tangerine.attributes.add("tangerineZ",{type:"number",default:1.7});var tangerineMax=6;Tangerine.prototype.initialize=function(){for(i=0;i<tangerineMax;i++){var e=new pc.Entity;(e=this.app.assets.get(154127249).resource.instantiate()).setPosition(this.tangerineX,this.tangerineY,this.tangerineZ),e.name=`tangerine${i}`,this.app.root.addChild(e),this.tangerineX-=.9,i%2==1&&(this.tangerineX=-.85,this.tangerineY+=.3)}},Tangerine.prototype.update=function(e){if(this.app.keyboard.wasPressed(pc.KEY_W)&&tnum>0&&0==rotaCheck&&(tangerinePoint++,tnum--,tnum<tangerineMax&&(this.app.root.findByName("tangerine"+(tangerineMax-1)).destroy(),tangerineMax--)),1==cerateCheck&&1==tEnterCheck){var t=Tangerine.attributes.get("tangerineX").default,n=Tangerine.attributes.get("tangerineY").default;if(tnum<7&&1==cerateCheck){for(i=0;i<tnum-1;i++)this.app.root.findByName(`tangerine${i}`).destroy();for(i=0;i<tnum;i++){var a=new pc.Entity;(a=this.app.assets.get(154127249).resource.instantiate()).setPosition(t,n,this.tangerineZ),a.name=`tangerine${i}`,this.app.root.addChild(a),t-=.9,i%2==1&&(t=-.85,n+=.3)}}cerateCheck=!1,tEnterCheck=!1}};var Strawberry=pc.createScript("strawberry");Strawberry.attributes.add("strawberryX",{type:"number",default:2.05}),Strawberry.attributes.add("strawberryY",{type:"number",default:-.2}),Strawberry.attributes.add("strawberryZ",{type:"number",default:1.7});var strawberryMax=8;Strawberry.prototype.initialize=function(){for(i=0;i<strawberryMax;i++){var r=new pc.Entity;(r=this.app.assets.get(154128370).resource.instantiate()).setPosition(this.strawberryX,this.strawberryY,this.strawberryZ),r.name=`strawberry${i}`,this.app.root.addChild(r),this.strawberryX-=.5,3==i&&(this.strawberryX=2.05,this.strawberryY=.2)}},Strawberry.prototype.update=function(r){if(this.app.keyboard.wasPressed(pc.KEY_E)&&bnum>0&&0==rotaCheck&&(strawberryPoint++,bnum--,bnum<strawberryMax&&(this.app.root.findByName("strawberry"+(strawberryMax-1)).destroy(),strawberryMax--)),1==cerateCheck&&1==bEnterCheck){var t=Strawberry.attributes.get("strawberryX").default,e=Strawberry.attributes.get("strawberryY").default;if(bnum<9&&1==cerateCheck){for(i=0;i<bnum-1;i++)this.app.root.findByName(`strawberry${i}`).destroy();for(i=0;i<bnum;i++){var a=new pc.Entity;(a=this.app.assets.get(154128370).resource.instantiate()).setPosition(t,e,this.strawberryZ),a.name=`strawberry${i}`,this.app.root.addChild(a),t-=.5,3==i&&(t=2.05,e=.2)}}cerateCheck=!1,bEnterCheck=!1}};var Sweetsapphire=pc.createScript("sweetsapphire");Sweetsapphire.attributes.add("sweetsapphireX",{type:"number",default:4.65}),Sweetsapphire.attributes.add("sweetsapphireY",{type:"number",default:-.3}),Sweetsapphire.attributes.add("sweetsapphireZ",{type:"number",default:1.7});var sweetsapphireMax=9;Sweetsapphire.prototype.initialize=function(){for(i=0;i<sweetsapphireMax;i++){var e=new pc.Entity;(e=this.app.assets.get(154638020).resource.instantiate()).setPosition(this.sweetsapphireX,this.sweetsapphireY,this.sweetsapphireZ),e.name=`sweetsapphire${i}`,this.app.root.addChild(e),this.sweetsapphireX-=.65,i%3==2&&(this.sweetsapphireX=4.65,this.sweetsapphireY+=.3)}},Sweetsapphire.prototype.update=function(e){if(this.app.keyboard.wasPressed(pc.KEY_R)&&snum>0&&0==rotaCheck&&(sweetsapphirePoint++,snum--,snum<sweetsapphireMax&&(this.app.root.findByName("sweetsapphire"+(sweetsapphireMax-1)).destroy(),sweetsapphireMax--)),1==cerateCheck&&1==sEnterCheck){var t=Sweetsapphire.attributes.get("sweetsapphireX").default,s=Sweetsapphire.attributes.get("sweetsapphireY").default;if(snum<10&&1==cerateCheck){for(i=0;i<snum-1;i++)this.app.root.findByName(`sweetsapphire${i}`).destroy();for(i=0;i<snum;i++){var p=new pc.Entity;(p=this.app.assets.get(154638020).resource.instantiate()).setPosition(t,s,this.sweetsapphireZ),p.name=`sweetsapphire${i}`,this.app.root.addChild(p),t-=.65,i%3==2&&(t=4.65,s+=.3)}}cerateCheck=!1,sEnterCheck=!1}};var Money=pc.createScript("money");Money.attributes.add("moneyNum",{type:"entity"});var money=0;Money.prototype.initialize=function(){},Money.prototype.update=function(e){this.moneyNum.element.text=money};var shineOrder,tangerineOrder,strawberryOrder,sweetsapphireOrder,Order=pc.createScript("order");Order.attributes.add("orderList",{type:"entity"}),Order.prototype.initialize=function(){shineOrder=Math.floor(4*Math.random()),tangerineOrder=Math.floor(3*Math.random()),strawberryOrder=Math.floor(3*Math.random()),sweetsapphireOrder=Math.floor(3*Math.random());var r=this.orderList.element.text,e=` sweetsapphire : ${sweetsapphireOrder}`;if(shineOrder>0&&(r+=`shine : ${shineOrder}`),tangerineOrder>0&&(r+=` tangerine : ${tangerineOrder}`),strawberryOrder>0&&(r+=`\n\n strawberry : ${strawberryOrder}`),sweetsapphireOrder>0){if(0==strawberryOrder)e=`\n\n sweetsapphire : ${sweetsapphireOrder}`;r+=e}this.orderList.element.text=r},Order.prototype.update=function(r){if(this.app.keyboard.wasPressed(pc.KEY_ENTER)&&0==rotaCheck){shineOrder==shinePoint&&(money+=100*shineOrder),tangerineOrder==tangerinePoint&&(money+=150*tangerineOrder),strawberryOrder==strawberryPoint&&(money+=150*strawberryOrder),sweetsapphireOrder==sweetsapphirePoint&&(money+=300*sweetsapphireOrder),shinePoint=0,tangerinePoint=0,strawberryPoint=0,sweetsapphirePoint=0,shineOrder=Math.floor(4*Math.random()),tangerineOrder=Math.floor(3*Math.random()),strawberryOrder=Math.floor(3*Math.random()),sweetsapphireOrder=Math.floor(2*Math.random());var e=this.orderList.element.text;e="";var t=` sweetsapphire : ${sweetsapphireOrder}`;if(shineOrder>0&&(e+=`shine : ${shineOrder}`),tangerineOrder>0&&(e+=` tangerine : ${tangerineOrder}`),strawberryOrder>0&&(e+=`\n\n strawberry : ${strawberryOrder}`),sweetsapphireOrder>0){if(0==strawberryOrder)t=`\n\n sweetsapphire : ${sweetsapphireOrder}`;e+=t}this.orderList.element.text=e}};var Num=pc.createScript("num");Num.attributes.add("mnumText",{type:"entity"}),Num.attributes.add("tnumText",{type:"entity"}),Num.attributes.add("bnumText",{type:"entity"}),Num.attributes.add("snumText",{type:"entity"});var mnum=10,tnum=10,bnum=10,snum=10;Num.prototype.initialize=function(){},Num.prototype.update=function(t){this.mnumText.element.text=mnum,this.tnumText.element.text=tnum,this.bnumText.element.text=bnum,this.snumText.element.text=snum};var Camera=pc.createScript("camera"),rota=0,rotaCheck=0;Camera.prototype.initialize=function(){},Camera.prototype.update=function(t){var a=this.app.keyboard,r=a.wasPressed(pc.KEY_A),e=a.wasPressed(pc.KEY_F);r&&(rota+=120,this.entity.rotate(0,rota,0),rota=0,3==++rotaCheck&&(rotaCheck=0)),e&&(rota-=120,this.entity.rotate(0,rota,0),rota=0,0==rotaCheck&&(rotaCheck=3),rotaCheck--)};var Stick=pc.createScript("stick"),stickMax=45,stickCount=45,stickCehck=!0;Stick.prototype.initialize=function(){var t=-4.46,s=-.49,c=17.67;for(i=0;i<stickMax;i++){var a=new pc.Entity;(a=this.app.assets.get(154749463).resource.instantiate()).setPosition(t,s,c),a.rotate(0,-60,0),a.name=`stick${i}`,this.app.root.addChild(a),t+=.05,c+=.1,i%9==8&&(t=-4.46,s+=.1,c=17.67)}},Stick.prototype.update=function(t){this.app.keyboard.wasPressed(pc.KEY_SPACE)&&stickCount>0&&1==stickCehck&&1==rotaCheck&&(stickCount--,stickCehck=!1,stickCount<stickMax&&(this.app.root.findByName("stick"+(stickMax-1)).setPosition(-6.3,.5,14.3),this.app.root.findByName("stick"+(stickMax-1)).rotate(0,-90,0),stickNum--,stickMax--))};var Source=pc.createScript("source"),tongMax=10,cms=!1,cts=!1,cbs=!1,css=!1;Source.prototype.initialize=function(){var t=.25,s=.1,e=.46,a=.41;for(i=0;i<tongMax;i++){var o=new pc.Entity,r=new pc.Entity,n=new pc.Entity,p=new pc.Entity,m=this.app.assets.get(154949803).resource.instantiate(),c=this.app.assets.get(154949917).resource.instantiate(),d=this.app.assets.get(154950004).resource.instantiate(),h=this.app.assets.get(154950029).resource.instantiate();(o=m).setPosition(-5.15,t,21.28),(r=c).setPosition(-7.5,s,17.57),r.rotate(-30,-54.5,0),(n=d).setPosition(-9.65,e,13.5),(p=h).setPosition(-11.7,a,10),p.rotate(-94,49,37),o.name=`shinePi${i}`,r.name=`tanPi${i}`,n.name=`berryPi${i}`,p.name=`sweetPi${i}`,this.app.root.addChild(o),this.app.root.addChild(r),this.app.root.addChild(n),this.app.root.addChild(p),t+=.35,s+=.35,e+=.35,a+=.35}},Source.prototype.update=function(t){if(1==cms){var s=.25;for(i=0;i<mtm;i++)this.app.root.findByName(`shinePi${i}`).destroy();var e=mtotal/5;for(mtm+=e,mtm>10&&(mtm=10),i=0;i<mtm;i++){var a=new pc.Entity;(a=this.app.assets.get(154949803).resource.instantiate()).setPosition(-5.15,s,21.28),a.name=`shinePi${i}`,this.app.root.addChild(a),s+=.35}cms=!1}if(1==cts){var o=.1;for(i=0;i<ttm;i++)this.app.root.findByName(`tanPi${i}`).destroy();var r=ttotal/3;for(ttm+=r,ttm>10&&(ttm=10),i=0;i<ttm;i++){var n=new pc.Entity;(n=this.app.assets.get(154949917).resource.instantiate()).setPosition(-7.5,o,17.57),n.rotate(-30,-54.5,0),n.name=`tanPi${i}`,this.app.root.addChild(n),o+=.35}cts=!1}if(1==cbs){var p=.46;for(i=0;i<btm;i++)this.app.root.findByName(`berryPi${i}`).destroy();var m=btotal/4;for(btm+=m,btm>10&&(btm=10),i=0;i<btm;i++){var c=new pc.Entity;(c=this.app.assets.get(154950004).resource.instantiate()).setPosition(-9.65,p,13.5),c.name=`berryPi${i}`,this.app.root.addChild(c),p+=.35}cbs=!1}if(1==css){var d=.41;for(i=0;i<stm;i++)this.app.root.findByName(`sweetPi${i}`).destroy();e=stotal/6;for(stm+=e,stm>10&&(stm=10),i=0;i<stm;i++){var h=new pc.Entity;(h=this.app.assets.get(154950029).resource.instantiate()).setPosition(-11.7,d,10),h.rotate(-94,49,37),h.name=`sweetPi${i}`,this.app.root.addChild(h),d+=.35}css=!1}};var CreateTang=pc.createScript("createTang"),sourceCheck=!1,cerateCheck=!1,mtm=10,ttm=10,btm=10,stm=10,mUp=!1,tUp=!1,bUp=!1,sUp=!1,mEnterCheck=!1,tEnterCheck=!1,bEnterCheck=!1,sEnterCheck=!1;CreateTang.prototype.initialize=function(){},CreateTang.prototype.update=function(e){var t=this.app.keyboard,s=t.wasPressed(pc.KEY_ENTER),r=t.wasPressed(pc.KEY_Q),a=t.wasPressed(pc.KEY_W),o=t.wasPressed(pc.KEY_E),p=t.wasPressed(pc.KEY_R);if(r&&1==rotaCheck&&0==stickCehck&&0==sourceCheck&&shineNum>0){var c=-6.4,n=14.1;for(i=0;i<5;i++){var h=new pc.Entity;(h=this.app.assets.get(154949803).resource.instantiate()).setPosition(c,.5,n),h.name=`mp${i}`,this.app.root.addChild(h),c+=.15,n+=.3}shineNum-=5,shineNum<50&&(this.app.root.findByName("shinePi"+(mtm-1)).destroy(),mtm--),sourceCheck=!0,mUp=!0}if(a&&1==rotaCheck&&0==stickCehck&&0==sourceCheck&&tanNum>0){var m=-6.7,k=14.35;for(i=0;i<3;i++){var C=new pc.Entity;(C=this.app.assets.get(154949917).resource.instantiate()).setPosition(m,.53,k),C.rotate(90,30,3),C.name=`tp${i}`,this.app.root.addChild(C),m+=.25,k+=.4}tanNum-=3,tanNum<30&&(this.app.root.findByName("tanPi"+(ttm-1)).destroy(),ttm--),sourceCheck=!0,tUp=!0}if(o&&1==rotaCheck&&0==stickCehck&&0==sourceCheck&&berryNum>0){var d=-6.48,u=14;for(i=0;i<4;i++){var y=new pc.Entity;(y=this.app.assets.get(154950004).resource.instantiate()).setPosition(d,.5,u),y.rotate(90,30,0),y.name=`bp${i}`,this.app.root.addChild(y),d+=.26,u+=.45}berryNum-=4,berryNum<40&&(this.app.root.findByName("berryPi"+(btm-1)).destroy(),btm--),sourceCheck=!0,bUp=!0}if(p&&1==rotaCheck&&0==stickCehck&&0==sourceCheck&&sweetNum>0){var f=-6.2,N=14.4;for(i=0;i<6;i++){var b=new pc.Entity;(b=this.app.assets.get(154950029).resource.instantiate()).setPosition(f,.5,N),b.rotate(55,25,120),b.name=`sp${i}`,this.app.root.addChild(b),f+=.1,N+=.2}sweetNum-=6,sweetNum<60&&(this.app.root.findByName("sweetPi"+(stm-1)).destroy(),stm--),sourceCheck=!0,sUp=!0}if(s&&1==rotaCheck&&1==mUp||s&&1==rotaCheck&&1==tUp||s&&1==rotaCheck&&1==bUp||s&&1==rotaCheck&&1==sUp){if(sourceCheck=!1,this.app.root.findByName(`stick${stickMax}`).destroy(),stickCehck=!0,1==mUp){for(i=0;i<5;i++)this.app.root.findByName(`mp${i}`).destroy();mnum++,mnum<7&&shineMax++,mEnterCheck=!0,cerateCheck=!0,mUp=!1}if(1==tUp){for(i=0;i<3;i++)this.app.root.findByName(`tp${i}`).destroy();tnum++,tnum<7&&tangerineMax++,tEnterCheck=!0,cerateCheck=!0,tUp=!1}if(1==bUp){for(i=0;i<4;i++)this.app.root.findByName(`bp${i}`).destroy();bnum++,bnum<9&&strawberryMax++,bEnterCheck=!0,cerateCheck=!0,bUp=!1}if(1==sUp){for(i=0;i<6;i++)this.app.root.findByName(`sp${i}`).destroy();snum++,snum<10&&sweetsapphireMax++,sEnterCheck=!0,cerateCheck=!0,sUp=!1}}};var ShopSetting=pc.createScript("shopSetting");ShopSetting.prototype.initialize=function(){var t=new pc.Entity,e=new pc.Entity,i=new pc.Entity,s=new pc.Entity,a=new pc.Entity,o=this.app.assets.get(154949803).resource.instantiate(),p=this.app.assets.get(154949917).resource.instantiate(),n=this.app.assets.get(154950004).resource.instantiate(),r=this.app.assets.get(154950029).resource.instantiate(),c=this.app.assets.get(154749463).resource.instantiate();(t=o).setLocalScale(.4,.8,1),t.setPosition(11.85,2,10.65),t.rotate(0,-30,0),(e=p).setLocalScale(1.2,1.2,1.2),e.setPosition(9.67,1.8,14.7),e.rotateLocal(15,60,0),(i=n).setLocalScale(.8,1.2,.8),i.setPosition(8,2,17.6),(s=r).setLocalScale(.5,.8,.5),s.setPosition(6,2,21.1),s.rotate(0,0,62.5),(a=c).setPosition(8.7,.2,15.85),a.rotate(0,-30,0),this.app.root.addChild(t),this.app.root.addChild(e),this.app.root.addChild(i),this.app.root.addChild(s),this.app.root.addChild(a)},ShopSetting.prototype.update=function(t){};var CreateText=pc.createScript("createText");CreateText.attributes.add("stickNum",{type:"entity"}),CreateText.attributes.add("shineNum",{type:"entity"}),CreateText.attributes.add("tanNum",{type:"entity"}),CreateText.attributes.add("berryNum",{type:"entity"}),CreateText.attributes.add("sweetNum",{type:"entity"});var stickNum=45,shineNum=50,tanNum=30,berryNum=40,sweetNum=60;CreateText.prototype.initialize=function(){},CreateText.prototype.update=function(t){this.stickNum.element.text=stickNum,this.shineNum.element.text=shineNum,this.tanNum.element.text=tanNum,this.berryNum.element.text=berryNum,this.sweetNum.element.text=sweetNum};var Receipt=pc.createScript("receipt");Receipt.attributes.add("receiptText",{type:"entity"});var mtotal,ttotal,btotal,stotal,msell=0,tsell=0,bsell=0,ssell=0,stickSell=0,total=0;Receipt.prototype.initialize=function(){},Receipt.prototype.update=function(t){this.receiptText.element.text=`shine: ${msell}\n\n tanger: ${tsell}\n\n berry: ${bsell}\n\n sweet: ${ssell}\n\n stick: ${stickSell}\n\n total: ${total}`;var e=this.app.keyboard,l=e.wasPressed(pc.KEY_ENTER),s=e.wasPressed(pc.KEY_SPACE),a=e.wasPressed(pc.KEY_Q),c=e.wasPressed(pc.KEY_W),o=e.wasPressed(pc.KEY_E),r=e.wasPressed(pc.KEY_R);a&&2==rotaCheck&&(msell+=5,total+=50),c&&2==rotaCheck&&(tsell+=3,total+=100),o&&2==rotaCheck&&(bsell+=4,total+=100),r&&2==rotaCheck&&(ssell+=6,total+=250),s&&2==rotaCheck&&(stickSell+=1,total+=100),2==rotaCheck&&l&&money>0&&(money-=total,msell>0&&(mtotal=msell,cms=!0),tsell>0&&(ttotal=tsell,cts=!0),bsell&&(btotal=bsell,cbs=!0),ssell&&(stotal=ssell,css=!0),shineNum+=msell,tanNum+=tsell,berryNum+=bsell,sweetNum+=ssell,stickNum+=stickSell,total=0,msell=0,tsell=0,bsell=0,ssell=0)};