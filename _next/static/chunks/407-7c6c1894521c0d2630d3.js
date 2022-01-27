"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[407],{92407:function(e,t,n){n.d(t,{fO:function(){return s},wj:function(){return l},$X:function(){return d},p$:function(){return T}});var i=n(30266),a=n(809),r=n.n(a),u=n(96519),p=n(77616),y=n(80160);function s(e,t){return o.apply(this,arguments)}function o(){return(o=(0,i.Z)(r().mark((function e(t,n){var i,a,p,s,o,l,m;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.provider,a=t.tokenID,p=t.timeInDays,s=y.ZP.loading("Heading to the Forest..."),o=i.getSigner(),l=new u.Contract("0x3874e67201cD8AA6B8b8EB8D8626411Ef2724167",[{inputs:[{internalType:"address",name:"_rarityAddr",type:"address"},{internalType:"address",name:"_rarityForestAddr",type:"address"},{internalType:"address",name:"_rarityForestV2Addr",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"owner",type:"uint256"},{indexed:!0,internalType:"uint256",name:"approved",type:"uint256"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"owner",type:"uint256"},{indexed:!0,internalType:"uint256",name:"operator",type:"uint256"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"summonerId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"initBlockTs",type:"uint256"},{indexed:!1,internalType:"uint256",name:"endBlockTs",type:"uint256"},{indexed:!1,internalType:"uint256",name:"timeInDays",type:"uint256"}],name:"ResearchStarted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"from",type:"uint256"},{indexed:!0,internalType:"uint256",name:"to",type:"uint256"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"summonerId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"treasureId",type:"uint256"}],name:"TreasureDiscovered",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"treasureId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"newLevel",type:"uint256"}],name:"TreasureLevelUp",type:"event"},{inputs:[],name:"_tokenIdCounter",outputs:[{internalType:"uint256",name:"_value",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"from",type:"uint256"},{internalType:"uint256",name:"to",type:"uint256"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"owner",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"burner",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"summonerId",type:"uint256"}],name:"discover",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"summonerId",type:"uint256"}],name:"getResearchBySummoner",outputs:[{components:[{internalType:"uint256",name:"timeInDays",type:"uint256"},{internalType:"uint256",name:"initBlockTs",type:"uint256"},{internalType:"bool",name:"discovered",type:"bool"},{internalType:"uint256",name:"summonerId",type:"uint256"},{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"endBlockTs",type:"uint256"}],internalType:"struct TheRarityForestV3.Research",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"summonerId",type:"uint256"}],name:"getTreasuresBySummoner",outputs:[{components:[{internalType:"uint256",name:"summonerId",type:"uint256"},{internalType:"uint256",name:"treasureId",type:"uint256"},{internalType:"string",name:"itemName",type:"string"},{internalType:"uint256",name:"magic",type:"uint256"},{internalType:"uint256",name:"level",type:"uint256"}],internalType:"struct TheRarityForestV3.Treasure[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"owner",type:"uint256"},{internalType:"uint256",name:"operator",type:"uint256"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"levelUp",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"rarityContract",outputs:[{internalType:"contract IRarity",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"rarityForestContract",outputs:[{internalType:"contract ITheRarityForest",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"rarityForestContractV2",outputs:[{internalType:"contract ITheRarityForestV2",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"rescuer",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"receiver",type:"uint256"}],name:"restoreTreasure",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"rm",outputs:[{internalType:"contract IRarity",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"saveTreasure",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"from",type:"uint256"},{internalType:"uint256",name:"operator",type:"uint256"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_rescuer",type:"address"}],name:"setRescuer",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"summonerId",type:"uint256"},{internalType:"uint256",name:"timeInDays",type:"uint256"}],name:"startResearch",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"owner",type:"uint256"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"from",type:"uint256"},{internalType:"uint256",name:"to",type:"uint256"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"treasure",outputs:[{internalType:"uint256",name:"_summonerId",type:"uint256"},{internalType:"string",name:"_itemName",type:"string"},{internalType:"uint256",name:"_magic",type:"uint256"},{internalType:"uint256",name:"_level",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"currentLevel",type:"uint256"}],name:"xpRequired",outputs:[{internalType:"uint256",name:"xpToNextLevel",type:"uint256"}],stateMutability:"pure",type:"function"}],o),e.prev=4,e.next=7,l.callStatic.startResearch(a,p,{gasLimit:2e5});case 7:e.next=15;break;case 9:return e.prev=9,e.t0=e.catch(4),y.ZP.dismiss(s),y.ZP.error("Impossible to explore The Forest"+e.t0.data.message),n({error:e.t0,data:void 0}),e.abrupt("return");case 15:return e.prev=15,e.next=18,l.startResearch(a,p,{gasLimit:2e5});case 18:return m=e.sent,e.next=21,m.wait(2);case 21:1===e.sent.status?(n({error:!1,data:a}),y.ZP.dismiss(s),y.ZP.success("Transaction successful")):(y.ZP.dismiss(s),y.ZP.error("Transaction reverted"),n({error:!0,data:void 0})),e.next=31;break;case 25:e.prev=25,e.t1=e.catch(15),console.error(e.t1),y.ZP.dismiss(s),y.ZP.error("Something went wrong, please try again later."),n({error:e.t1,data:void 0});case 31:case"end":return e.stop()}}),e,null,[[4,9],[15,25]])})))).apply(this,arguments)}function l(e,t){return m.apply(this,arguments)}function m(){return(m=(0,i.Z)(r().mark((function e(t,n){var i,a,p,s,o,l;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.provider,a=t.tokenID,p=y.ZP.loading("Digging in the Forest..."),s=i.getSigner(),o=new u.Contract("0x3874e67201cD8AA6B8b8EB8D8626411Ef2724167",[{inputs:[{internalType:"address",name:"_rarityAddr",type:"address"},{internalType:"address",name:"_rarityForestAddr",type:"address"},{internalType:"address",name:"_rarityForestV2Addr",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"owner",type:"uint256"},{indexed:!0,internalType:"uint256",name:"approved",type:"uint256"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"owner",type:"uint256"},{indexed:!0,internalType:"uint256",name:"operator",type:"uint256"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"summonerId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"initBlockTs",type:"uint256"},{indexed:!1,internalType:"uint256",name:"endBlockTs",type:"uint256"},{indexed:!1,internalType:"uint256",name:"timeInDays",type:"uint256"}],name:"ResearchStarted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"from",type:"uint256"},{indexed:!0,internalType:"uint256",name:"to",type:"uint256"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"summonerId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"treasureId",type:"uint256"}],name:"TreasureDiscovered",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"treasureId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"newLevel",type:"uint256"}],name:"TreasureLevelUp",type:"event"},{inputs:[],name:"_tokenIdCounter",outputs:[{internalType:"uint256",name:"_value",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"from",type:"uint256"},{internalType:"uint256",name:"to",type:"uint256"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"owner",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"burner",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"summonerId",type:"uint256"}],name:"discover",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"summonerId",type:"uint256"}],name:"getResearchBySummoner",outputs:[{components:[{internalType:"uint256",name:"timeInDays",type:"uint256"},{internalType:"uint256",name:"initBlockTs",type:"uint256"},{internalType:"bool",name:"discovered",type:"bool"},{internalType:"uint256",name:"summonerId",type:"uint256"},{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"endBlockTs",type:"uint256"}],internalType:"struct TheRarityForestV3.Research",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"summonerId",type:"uint256"}],name:"getTreasuresBySummoner",outputs:[{components:[{internalType:"uint256",name:"summonerId",type:"uint256"},{internalType:"uint256",name:"treasureId",type:"uint256"},{internalType:"string",name:"itemName",type:"string"},{internalType:"uint256",name:"magic",type:"uint256"},{internalType:"uint256",name:"level",type:"uint256"}],internalType:"struct TheRarityForestV3.Treasure[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"owner",type:"uint256"},{internalType:"uint256",name:"operator",type:"uint256"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"levelUp",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"rarityContract",outputs:[{internalType:"contract IRarity",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"rarityForestContract",outputs:[{internalType:"contract ITheRarityForest",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"rarityForestContractV2",outputs:[{internalType:"contract ITheRarityForestV2",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"rescuer",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"receiver",type:"uint256"}],name:"restoreTreasure",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"rm",outputs:[{internalType:"contract IRarity",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"saveTreasure",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"from",type:"uint256"},{internalType:"uint256",name:"operator",type:"uint256"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_rescuer",type:"address"}],name:"setRescuer",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"summonerId",type:"uint256"},{internalType:"uint256",name:"timeInDays",type:"uint256"}],name:"startResearch",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"owner",type:"uint256"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"from",type:"uint256"},{internalType:"uint256",name:"to",type:"uint256"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"treasure",outputs:[{internalType:"uint256",name:"_summonerId",type:"uint256"},{internalType:"string",name:"_itemName",type:"string"},{internalType:"uint256",name:"_magic",type:"uint256"},{internalType:"uint256",name:"_level",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"currentLevel",type:"uint256"}],name:"xpRequired",outputs:[{internalType:"uint256",name:"xpToNextLevel",type:"uint256"}],stateMutability:"pure",type:"function"}],s),e.prev=4,e.next=7,o.callStatic.discover(a,{gasLimit:3e5});case 7:e.next=15;break;case 9:return e.prev=9,e.t0=e.catch(4),y.ZP.dismiss(p),y.ZP.error("Your shovel broke ... Try another one"),n({error:e.t0,data:void 0}),e.abrupt("return");case 15:return e.prev=15,e.next=18,o.discover(a,{gasLimit:3e5});case 18:return l=e.sent,e.next=21,l.wait(2);case 21:1===e.sent.status?(n({error:!1,data:a}),y.ZP.dismiss(p),y.ZP.success("Transaction successful")):(y.ZP.dismiss(p),y.ZP.error("Transaction reverted"),n({error:!0,data:void 0})),e.next=31;break;case 25:e.prev=25,e.t1=e.catch(15),console.error(e.t1),y.ZP.dismiss(p),y.ZP.error("Your shovel broke ... Try another one"),n({error:e.t1,data:void 0});case 31:case"end":return e.stop()}}),e,null,[[4,9],[15,25]])})))).apply(this,arguments)}function d(e,t){return c.apply(this,arguments)}function c(){return(c=(0,i.Z)(r().mark((function e(t,n){var i,a,s,o,l,m,d,c,T,v,b,f,x,w;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.provider,a=t.tokenID,s=t.adventurerID,o=t.treasureName,l=t.xpRequired,m=y.ZP.loading("1/3 - Approving Proxy Spender ".concat(s,"...")),d=i.getSigner(),e.next=5,d.getAddress();case 5:return c=e.sent,T=new u.Contract("0x3874e67201cD8AA6B8b8EB8D8626411Ef2724167",[{inputs:[{internalType:"address",name:"_rarityAddr",type:"address"},{internalType:"address",name:"_rarityForestAddr",type:"address"},{internalType:"address",name:"_rarityForestV2Addr",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"owner",type:"uint256"},{indexed:!0,internalType:"uint256",name:"approved",type:"uint256"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"owner",type:"uint256"},{indexed:!0,internalType:"uint256",name:"operator",type:"uint256"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"summonerId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"initBlockTs",type:"uint256"},{indexed:!1,internalType:"uint256",name:"endBlockTs",type:"uint256"},{indexed:!1,internalType:"uint256",name:"timeInDays",type:"uint256"}],name:"ResearchStarted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"from",type:"uint256"},{indexed:!0,internalType:"uint256",name:"to",type:"uint256"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"summonerId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"treasureId",type:"uint256"}],name:"TreasureDiscovered",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"treasureId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"newLevel",type:"uint256"}],name:"TreasureLevelUp",type:"event"},{inputs:[],name:"_tokenIdCounter",outputs:[{internalType:"uint256",name:"_value",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"from",type:"uint256"},{internalType:"uint256",name:"to",type:"uint256"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"owner",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"burner",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"summonerId",type:"uint256"}],name:"discover",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"summonerId",type:"uint256"}],name:"getResearchBySummoner",outputs:[{components:[{internalType:"uint256",name:"timeInDays",type:"uint256"},{internalType:"uint256",name:"initBlockTs",type:"uint256"},{internalType:"bool",name:"discovered",type:"bool"},{internalType:"uint256",name:"summonerId",type:"uint256"},{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"endBlockTs",type:"uint256"}],internalType:"struct TheRarityForestV3.Research",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"summonerId",type:"uint256"}],name:"getTreasuresBySummoner",outputs:[{components:[{internalType:"uint256",name:"summonerId",type:"uint256"},{internalType:"uint256",name:"treasureId",type:"uint256"},{internalType:"string",name:"itemName",type:"string"},{internalType:"uint256",name:"magic",type:"uint256"},{internalType:"uint256",name:"level",type:"uint256"}],internalType:"struct TheRarityForestV3.Treasure[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"owner",type:"uint256"},{internalType:"uint256",name:"operator",type:"uint256"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"levelUp",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"rarityContract",outputs:[{internalType:"contract IRarity",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"rarityForestContract",outputs:[{internalType:"contract ITheRarityForest",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"rarityForestContractV2",outputs:[{internalType:"contract ITheRarityForestV2",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"rescuer",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"receiver",type:"uint256"}],name:"restoreTreasure",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"rm",outputs:[{internalType:"contract IRarity",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"saveTreasure",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"from",type:"uint256"},{internalType:"uint256",name:"operator",type:"uint256"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_rescuer",type:"address"}],name:"setRescuer",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"summonerId",type:"uint256"},{internalType:"uint256",name:"timeInDays",type:"uint256"}],name:"startResearch",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"owner",type:"uint256"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"from",type:"uint256"},{internalType:"uint256",name:"to",type:"uint256"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"treasure",outputs:[{internalType:"uint256",name:"_summonerId",type:"uint256"},{internalType:"string",name:"_itemName",type:"string"},{internalType:"uint256",name:"_magic",type:"uint256"},{internalType:"uint256",name:"_level",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"currentLevel",type:"uint256"}],name:"xpRequired",outputs:[{internalType:"uint256",name:"xpToNextLevel",type:"uint256"}],stateMutability:"pure",type:"function"}],d),e.prev=7,v=new u.Contract("0x7D9f354e5d942E16EB6cB4c15C2d2e80Ec08bAe6",["function setApprovalForAll(address operator, bool approved) external","function isApprovedForAll(address owner, address operator) external view returns (bool)"],d),e.next=11,v.isApprovedForAll(c,"0xf8fB88d42eA9b8F8DB5BE983514a4bBFAE170533");case 11:if(!e.sent){e.next=15;break}e.next=29;break;case 15:return e.next=17,v.setApprovalForAll("0xf8fB88d42eA9b8F8DB5BE983514a4bBFAE170533",!0);case 17:return b=e.sent,e.next=20,b.wait(2);case 20:if(1!==e.sent.status){e.next=25;break}y.ZP.dismiss(m),e.next=29;break;case 25:return y.ZP.dismiss(m),y.ZP.error("Approve reverted"),n({error:!0,data:void 0}),e.abrupt("return");case 29:e.next=38;break;case 31:return e.prev=31,e.t0=e.catch(7),console.error(e.t0),y.ZP.dismiss(m),y.ZP.error("Something went wrong, please try again later."),n({error:e.t0,data:void 0}),e.abrupt("return");case 38:return e.prev=38,m=y.ZP.loading("2/3 - Approving ".concat(p.dF(l)," XP to be used...")),f=new u.Contract("0xf8fB88d42eA9b8F8DB5BE983514a4bBFAE170533",["function allowance(address _owner, uint _adventurer, address _operator) external view returns (uint256)","function approve(uint _adventurer, address _operator, uint _amount) external returns (bool)"],d),e.next=43,f.allowance(c,s,"0x3874e67201cD8AA6B8b8EB8D8626411Ef2724167");case 43:if(!e.sent.gte(l)){e.next=48;break}y.ZP.dismiss(m),e.next=62;break;case 48:return e.next=50,f.approve(s,"0x3874e67201cD8AA6B8b8EB8D8626411Ef2724167",l);case 50:return x=e.sent,e.next=53,x.wait(2);case 53:if(1!==e.sent.status){e.next=58;break}y.ZP.dismiss(m),e.next=62;break;case 58:return y.ZP.dismiss(m),y.ZP.error("Approve reverted"),n({error:!0,data:void 0}),e.abrupt("return");case 62:e.next=71;break;case 64:return e.prev=64,e.t1=e.catch(38),console.error(e.t1),y.ZP.dismiss(m),y.ZP.error("Something went wrong, please try again later."),n({error:e.t1,data:void 0}),e.abrupt("return");case 71:return m=y.ZP.loading("3/3 - Level-up treasure ".concat(o,"...")),e.prev=72,e.next=75,T.callStatic.levelUp(a,{gasLimit:2e5});case 75:e.next=83;break;case 77:return e.prev=77,e.t2=e.catch(72),y.ZP.dismiss(m),y.ZP.error("Impossible to submit transaction"),n({error:e.t2,data:void 0}),e.abrupt("return");case 83:return e.prev=83,e.next=86,T.levelUp(a,{gasLimit:2e5});case 86:return w=e.sent,e.next=89,w.wait(2);case 89:1===e.sent.status?(n({error:!1,data:a}),y.ZP.dismiss(m),y.ZP.success("Transaction successful")):(y.ZP.dismiss(m),y.ZP.error("Transaction reverted"),n({error:!0,data:void 0})),e.next=99;break;case 93:e.prev=93,e.t3=e.catch(83),console.error(e.t3),y.ZP.dismiss(m),y.ZP.error("Something went wrong, please try again later."),n({error:e.t3,data:void 0});case 99:case"end":return e.stop()}}),e,null,[[7,31],[38,64],[72,77],[83,93]])})))).apply(this,arguments)}function T(e,t){return v.apply(this,arguments)}function v(){return(v=(0,i.Z)(r().mark((function e(t,n){var i,a,p,s,o,l,m,d,c,T;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.provider,a=t.tokenID,p=t.treasureName,s=t.adventurerID,o=y.ZP.loading("1/2 - Approving treasure ".concat(p,"...")),l=i.getSigner(),m=new u.Contract("0x3874e67201cD8AA6B8b8EB8D8626411Ef2724167",[{inputs:[{internalType:"address",name:"_rarityAddr",type:"address"},{internalType:"address",name:"_rarityForestAddr",type:"address"},{internalType:"address",name:"_rarityForestV2Addr",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"owner",type:"uint256"},{indexed:!0,internalType:"uint256",name:"approved",type:"uint256"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"owner",type:"uint256"},{indexed:!0,internalType:"uint256",name:"operator",type:"uint256"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"summonerId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"initBlockTs",type:"uint256"},{indexed:!1,internalType:"uint256",name:"endBlockTs",type:"uint256"},{indexed:!1,internalType:"uint256",name:"timeInDays",type:"uint256"}],name:"ResearchStarted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"from",type:"uint256"},{indexed:!0,internalType:"uint256",name:"to",type:"uint256"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"summonerId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"treasureId",type:"uint256"}],name:"TreasureDiscovered",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint256",name:"treasureId",type:"uint256"},{indexed:!1,internalType:"uint256",name:"newLevel",type:"uint256"}],name:"TreasureLevelUp",type:"event"},{inputs:[],name:"_tokenIdCounter",outputs:[{internalType:"uint256",name:"_value",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"from",type:"uint256"},{internalType:"uint256",name:"to",type:"uint256"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"owner",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"burner",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"summonerId",type:"uint256"}],name:"discover",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"summonerId",type:"uint256"}],name:"getResearchBySummoner",outputs:[{components:[{internalType:"uint256",name:"timeInDays",type:"uint256"},{internalType:"uint256",name:"initBlockTs",type:"uint256"},{internalType:"bool",name:"discovered",type:"bool"},{internalType:"uint256",name:"summonerId",type:"uint256"},{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"endBlockTs",type:"uint256"}],internalType:"struct TheRarityForestV3.Research",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"summonerId",type:"uint256"}],name:"getTreasuresBySummoner",outputs:[{components:[{internalType:"uint256",name:"summonerId",type:"uint256"},{internalType:"uint256",name:"treasureId",type:"uint256"},{internalType:"string",name:"itemName",type:"string"},{internalType:"uint256",name:"magic",type:"uint256"},{internalType:"uint256",name:"level",type:"uint256"}],internalType:"struct TheRarityForestV3.Treasure[]",name:"",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"owner",type:"uint256"},{internalType:"uint256",name:"operator",type:"uint256"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"levelUp",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"rarityContract",outputs:[{internalType:"contract IRarity",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"rarityForestContract",outputs:[{internalType:"contract ITheRarityForest",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"rarityForestContractV2",outputs:[{internalType:"contract ITheRarityForestV2",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"rescuer",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"uint256",name:"receiver",type:"uint256"}],name:"restoreTreasure",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"rm",outputs:[{internalType:"contract IRarity",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"saveTreasure",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"from",type:"uint256"},{internalType:"uint256",name:"operator",type:"uint256"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_rescuer",type:"address"}],name:"setRescuer",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"summonerId",type:"uint256"},{internalType:"uint256",name:"timeInDays",type:"uint256"}],name:"startResearch",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"owner",type:"uint256"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"from",type:"uint256"},{internalType:"uint256",name:"to",type:"uint256"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"treasure",outputs:[{internalType:"uint256",name:"_summonerId",type:"uint256"},{internalType:"string",name:"_itemName",type:"string"},{internalType:"uint256",name:"_magic",type:"uint256"},{internalType:"uint256",name:"_level",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"currentLevel",type:"uint256"}],name:"xpRequired",outputs:[{internalType:"uint256",name:"xpToNextLevel",type:"uint256"}],stateMutability:"pure",type:"function"}],l),e.prev=4,d=new u.Contract("0x771CBD9fB836469476cE7638ADdd67C5A057db88",["function getApproved(uint256 tokenId) external view returns (address operator)","function approve(address to, uint256 tokenId) external"],l),e.next=8,d.getApproved(a);case 8:if("0x3874e67201cD8AA6B8b8EB8D8626411Ef2724167"!==e.sent){e.next=13;break}y.ZP.dismiss(o),e.next=27;break;case 13:return e.next=15,d.approve("0x3874e67201cD8AA6B8b8EB8D8626411Ef2724167",a);case 15:return c=e.sent,e.next=18,c.wait(2);case 18:if(1!==e.sent.status){e.next=23;break}y.ZP.dismiss(o),e.next=27;break;case 23:return y.ZP.dismiss(o),y.ZP.error("Approve reverted"),n({error:!0,data:void 0}),e.abrupt("return");case 27:e.next=36;break;case 29:return e.prev=29,e.t0=e.catch(4),console.error(e.t0),y.ZP.dismiss(o),y.ZP.error("Something went wrong, please try again later."),n({error:e.t0,data:void 0}),e.abrupt("return");case 36:return o=y.ZP.loading("2/2 - Restoring treasure ".concat(p,"...")),e.prev=37,e.next=40,m.callStatic.restoreTreasure(a,s,{gasLimit:3e5});case 40:e.next=48;break;case 42:return e.prev=42,e.t1=e.catch(37),y.ZP.dismiss(o),y.ZP.error("Impossible to submit transaction"),n({error:e.t1,data:void 0}),e.abrupt("return");case 48:return e.prev=48,e.next=51,m.restoreTreasure(a,s,{gasLimit:3e5});case 51:return T=e.sent,e.next=54,T.wait(2);case 54:1===e.sent.status?(n({error:!1,data:a}),y.ZP.dismiss(o),y.ZP.success("Transaction successful")):(y.ZP.dismiss(o),y.ZP.error("Transaction reverted"),n({error:!0,data:void 0})),e.next=64;break;case 58:e.prev=58,e.t2=e.catch(48),console.error(e.t2),y.ZP.dismiss(o),y.ZP.error("Something went wrong, please try again later."),n({error:e.t2,data:void 0});case 64:case"end":return e.stop()}}),e,null,[[4,29],[37,42],[48,58]])})))).apply(this,arguments)}}}]);