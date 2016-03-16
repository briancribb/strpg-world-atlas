"use strict";var STRPG=STRPG||{};STRPG.data={parsec:3.26163344,speedMod:3,systems:[],planets:[],location:null,current:null,origin:null,destination:null,regionProps:{UFP:{color:"rgba(110, 200, 250, 1)",fullName:"United Federation of Planets"},KE:{color:"rgba(255, 0, 0, 1)",fullName:"Klingon Empire"},RSA:{color:"rgba(190, 20, 190, 1)",fullName:"Romulan Star Empire"},AOFW:{color:"rgba(200, 200, 0, 1)",fullName:"Affiliation of Outer Free Worlds"},OFMA:{color:"rgba(0, 255, 0, 1)",fullName:"Orion Free Merchantile Association"},MCA:{color:"rgba(150, 150, 255, 1)",fullName:"Mantiev Colonial Association"},IKS:{color:"rgba(255, 150, 150, 1)",fullName:"Independent Klingon States"},I:{color:"rgba(0, 255, 0, 1)",fullName:"Independent"},U:{color:"rgba(150, 150, 150, 1)",fullName:"Unexplored"}},mineralNames:{normal:"Normal Minerals",radioactives:"Radioactives",gemstones:"Gemstones",crystals:"Industrial Crystals",special:"Special Minerals"},tradeProfileNames:{rating:"Trade Profile Rating",agricultural:"Food and Agricultural Goods",drugMedicine:"Drugs and Medicine",highTechMan:"High Tech Manufactured Goods",lowTechMan:"Low Tech Manufactured Goods",luxuryGoods:"Luxury Goods",mediumTechMan:"Medium Tech Manufactured Goods",population:"Population Rating",radioSpecial:"Radioactives, Special Minerals",rawMaterials:"Normal Minerals, Raw Materials"},tradeProfileTypes:["agricultural","drugMedicine","highTechMan","lowTechMan","luxuryGoods","mediumTechMan","population","radioSpecial","rawMaterials"],climateTypes:null,domRaces:null,init:function(data_1,data_2){var jsonPlanetData=data_1[0].feed.entry,jsonLocationData=data_2[0].feed.entry,tempClimateTypes=[],tempDomRaces=[],systemLoopCounter=0,setTradeDetails=function(index,catRating,populationRating,luxPriceMod,luxConMod){var demandLevelKey={A:.25,B:.5,C:.75,D:1,E:1.25,F:1.5,G:1.75,H:2},luxuryModKey={A:2,B:1.5,C:1,D:.5},populationModKey={A:4,B:2,C:1,D:.5,E:.25,X:.1},properties={};switch(index){case 0:properties={rating:catRating,price:700*demandLevelKey[catRating],consumptionRate:1e3*populationModKey[populationRating]};break;case 1:properties={rating:catRating,price:1e3*demandLevelKey[catRating],consumptionRate:700*populationModKey[populationRating]};break;case 2:properties={rating:catRating,price:1500*demandLevelKey[catRating],consumptionRate:300*populationModKey[populationRating]};break;case 3:properties={rating:catRating,price:2e3*demandLevelKey[catRating],consumptionRate:500*populationModKey[populationRating]};break;case 4:properties={rating:catRating,price:1200*demandLevelKey[catRating],consumptionRate:900*populationModKey[populationRating]};break;case 5:properties={rating:catRating,price:2e3*demandLevelKey[catRating],consumptionRate:700*populationModKey[populationRating]};break;case 6:properties={rating:catRating,price:2200*demandLevelKey[catRating],consumptionRate:500*populationModKey[populationRating]};break;case 7:properties={rating:catRating,price:250*luxPriceMod*demandLevelKey[catRating],consumptionRate:100*luxConMod*populationModKey[populationRating]};break;default:properties={rating:"REPLACEME",price:0,consumptionRate:0}}return properties};for(var i=0;i<jsonPlanetData.length;i++){var tempPlanetObject={value:jsonPlanetData[i].gsx$world.$t,type:"planet",system:jsonPlanetData[i].gsx$system.$t,id:i,numClassM:jsonPlanetData[i].gsx$numclassm.$t,x:jsonPlanetData[i].gsx$x.$t,y:jsonPlanetData[i].gsx$y.$t,systemPosition:jsonPlanetData[i].gsx$systemposition.$t,satellites:jsonPlanetData[i].gsx$satellites.$t,gravity:jsonPlanetData[i].gsx$gravity.$t,diameter:jsonPlanetData[i].gsx$diameter.$t,circumference:jsonPlanetData[i].gsx$circumference.$t,surfaceArea:jsonPlanetData[i].gsx$surfacearea.$t,percentLand:jsonPlanetData[i].gsx$percentland.$t,landArea:jsonPlanetData[i].gsx$landarea.$t,dayLength:jsonPlanetData[i].gsx$daylength.$t,atmosDensity:jsonPlanetData[i].gsx$atmosdensity.$t,climate:jsonPlanetData[i].gsx$climate.$t,minerals:{normal:jsonPlanetData[i].gsx$mineralnormal.$t,radioactives:jsonPlanetData[i].gsx$mineralrad.$t,gemstones:jsonPlanetData[i].gsx$mineralgem.$t,crystals:jsonPlanetData[i].gsx$mineralcrystal.$t,special:jsonPlanetData[i].gsx$mineralspecial.$t},domRace:jsonPlanetData[i].gsx$domrace.$t,techSocIndex:{rating:jsonPlanetData[i].gsx$techsocindex.$t.substr(0,6)+"-"+jsonPlanetData[i].gsx$techsocindex.$t.substr(6),spaceScience:{index:0,rating:parseInt(jsonPlanetData[i].gsx$techsocindex.$t.substring(0,1))},engineering:{index:1,rating:parseInt(jsonPlanetData[i].gsx$techsocindex.$t.substring(1,2))},lifeMedScience:{index:2,rating:parseInt(jsonPlanetData[i].gsx$techsocindex.$t.substring(2,3))},physicalScience:{index:3,rating:parseInt(jsonPlanetData[i].gsx$techsocindex.$t.substring(3,4))},planetaryScience:{index:4,rating:parseInt(jsonPlanetData[i].gsx$techsocindex.$t.substring(4,5))},psionics:{index:5,rating:parseInt(jsonPlanetData[i].gsx$techsocindex.$t.substring(5,6))},socialScience:{index:6,rating:parseInt(jsonPlanetData[i].gsx$techsocindex.$t.substring(6,7))},culturalAttitude:{index:7,rating:parseInt(jsonPlanetData[i].gsx$techsocindex.$t.substring(7,8))}},tradeProfile:{rating:jsonPlanetData[i].gsx$tradeprofile.$t.substr(0,6)+" "+jsonPlanetData[i].gsx$tradeprofile.$t.substr(7,1)+" ("+jsonPlanetData[i].gsx$tradeprofile.$t.substr(8)+")",agricultural:setTradeDetails(0,jsonPlanetData[i].gsx$tradeprofile.$t.substring(0,1),jsonPlanetData[i].gsx$tradeprofile.$t.substring(8,9),jsonPlanetData[i].gsx$luxpricemod.$t,jsonPlanetData[i].gsx$luxconmod.$t),rawMaterials:setTradeDetails(1,jsonPlanetData[i].gsx$tradeprofile.$t.substring(1,2),jsonPlanetData[i].gsx$tradeprofile.$t.substring(8,9),jsonPlanetData[i].gsx$luxpricemod.$t,jsonPlanetData[i].gsx$luxconmod.$t),radioSpecial:setTradeDetails(2,jsonPlanetData[i].gsx$tradeprofile.$t.substring(2,3),jsonPlanetData[i].gsx$tradeprofile.$t.substring(8,9),jsonPlanetData[i].gsx$luxpricemod.$t,jsonPlanetData[i].gsx$luxconmod.$t),drugMedicine:setTradeDetails(3,jsonPlanetData[i].gsx$tradeprofile.$t.substring(3,4),jsonPlanetData[i].gsx$tradeprofile.$t.substring(8,9),jsonPlanetData[i].gsx$luxpricemod.$t,jsonPlanetData[i].gsx$luxconmod.$t),lowTechMan:setTradeDetails(4,jsonPlanetData[i].gsx$tradeprofile.$t.substring(4,5),jsonPlanetData[i].gsx$tradeprofile.$t.substring(8,9),jsonPlanetData[i].gsx$luxpricemod.$t,jsonPlanetData[i].gsx$luxconmod.$t),mediumTechMan:setTradeDetails(5,jsonPlanetData[i].gsx$tradeprofile.$t.substring(5,6),jsonPlanetData[i].gsx$tradeprofile.$t.substring(8,9),jsonPlanetData[i].gsx$luxpricemod.$t,jsonPlanetData[i].gsx$luxconmod.$t),highTechMan:setTradeDetails(6,jsonPlanetData[i].gsx$tradeprofile.$t.substring(6,7),jsonPlanetData[i].gsx$tradeprofile.$t.substring(8,9),jsonPlanetData[i].gsx$luxpricemod.$t,jsonPlanetData[i].gsx$luxconmod.$t),luxuryGoods:setTradeDetails(7,jsonPlanetData[i].gsx$tradeprofile.$t.substring(7,8),jsonPlanetData[i].gsx$tradeprofile.$t.substring(8,9),jsonPlanetData[i].gsx$luxpricemod.$t,jsonPlanetData[i].gsx$luxconmod.$t),population:{rating:jsonPlanetData[i].gsx$tradeprofile.$t.substring(8,9)}},affiliation:jsonPlanetData[i].gsx$affiliation.$t,region:jsonPlanetData[i].gsx$region.$t},tempSystemObject={value:tempPlanetObject.system,type:"system",id:systemLoopCounter,numClassM:tempPlanetObject.numClassM,planets:[{value:tempPlanetObject.value,id:tempPlanetObject.id}],affiliation:tempPlanetObject.affiliation,region:tempPlanetObject.region,x:tempPlanetObject.x,y:tempPlanetObject.y};if(i===0){STRPG.data.systems.push(tempSystemObject);tempPlanetObject.systemID=tempSystemObject.id;systemLoopCounter++}else{var systemFound=!1;for(var j=0;j<STRPG.data.systems.length;j++)if(STRPG.data.systems[j].value===tempPlanetObject.system){systemFound=!0;STRPG.data.systems[j].planets.push({value:tempPlanetObject.value,id:tempPlanetObject.id})}if(systemFound===!1){STRPG.data.systems.push(tempSystemObject);tempPlanetObject.systemID=tempSystemObject.id;systemLoopCounter++}}tempClimateTypes.push(tempPlanetObject.climate);tempDomRaces.push(tempPlanetObject.domRace);STRPG.data.planets.push(tempPlanetObject)}STRPG.data.climateTypes=_.chain(tempClimateTypes).uniq().sortBy(function(type){return type}).value();STRPG.data.domRaces=_.chain(tempDomRaces).uniq().sortBy(function(race){return race}).value();var lastLocation=_.last(jsonLocationData),locationPoint={x:lastLocation.gsx$locationx.$t,y:lastLocation.gsx$locationy.$t};STRPG.data.location={x:Number(locationPoint.x),y:Number(locationPoint.y)};var tempCoords=STRPG.utils.getPointFromCoords(Number(locationPoint.x),Number(locationPoint.y));STRPG.data.current=STRPG.utils.getNearestFromPoint(tempCoords.x,tempCoords.y)}};STRPG.data.typeaheadFormat=[{name:"systems",local:STRPG.data.systems,limit:10,header:'<h3 class="system-name">Systems</h3>'},{name:"planets",local:STRPG.data.planets,limit:10,header:'<h3 class="planet-name">Planets</h3>'}];