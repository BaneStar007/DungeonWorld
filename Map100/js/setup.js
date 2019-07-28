var gridOn = false;
var debug = false;
var stats = {
   mapOriginal: 0,
   mapReskin: 0,
   mapKDM: 0,
   future: 0,

   Castle: 0,
   Dungeon: 0,
   Natural: 0,
   Hole: 0,
   Terrain: 0,
   Other: 0,

   borreal: 0,
   jungle: 0,
   coastal: 0,
   desert: 0,
   hills: 0,
   lake: 0,
   mountains: 0,
   plains: 0,
   taiga: 0,
   swamp: 0,
   sea: 0,
   terraType: 0,
   terraTypeother: 0,

   biomes: 0,
   cold: 0,
   cool: 0,
   mid: 0,
   warm: 0,
   arctic: 0,
   any: 0,
   tropic: 0,
   heat:0,
   death:0,

   arab: 0,
   asia: 0,
   aztec: 0,
   euro: 0,
   tents: 0,
   nomad: 0,
   exotic: 0,
   arab_: 0,
   asia_: 0,
   aztec_: 0,
   euro_: 0,
   tents_: 0,
   nomad_: 0,
   styleother: 0,
   

   mvil: 0,
   svil: 0,
   dungeon: 0,
   ruin: 0,
   label: 0,
   sign: 0,
   ruins: 0,
   statue: 0,
   hole: 0,
   temple: 0,
   trees: 0,
   animals: 0,
   surround: 0,
   farm: 0,
   fields: 0,
   tower: 0,
   waterfall: 0,
   abandoned: 0,
   smith: 0,
   nada: 0,

   futurefalse: 0,
   futuremap: 0,

   smallLocAother: 0,
   smallLocBother: 0,

   accountsToCheck: 0,

}

var EasterSet = Array( "mvil", "svil", "dungeon", "ruin", "label", "sign", "statue", "hole",
               "temple", "trees", "animals", "surround", "farm", "waterfall", "tents", "ruins", "tower",
               "smith", "fields", "surround", "abandoned", "nada", "other");

var terraSet = Array( "sea", "coastal", "swamp", "desert", "taiga", "plains",
            "borreal", "jungle", "hills", "mountains", "other");

var styleSet = Array("euro", "aztec", "arab", "asia", "tents","nomad", "ruins");  

var mapSet = Array("original","reskin","kdm","future");

var biomeSet = Array("cold","cool","mid","warm","arctic","any","tropic","heat","death")

// stats.mountains = 35;
// stats.hills = 34;
// stats.borreal = 31;
// stats.jungle = 20;
// stats.coastal = 26;
// stats.desert = 13;
// stats.lake = 2;
// stats.plains = 34;
// stats.taiga = 15;
// stats.swamp = 12;
// stats.sea = 22;
// stats.terraType = 3;
// stats.terraTypeother = 11;

var theMap = [];
var terraLocs = [];
var mainLocs = [];
var easterALocs = [];
var easterBLocs = [];
var biomeLocs = [];
// map max dimensions
var mapWidth = 52; // 52
var mapHeight = 32; // 32
var gridOn = true;
var mapDirection = 1;
var cycle = 0;

// any Terrain that must be pre-positioned / determined
var existingLocations = [{
   "loc": 1,
   "terra": "mountains",
   "title": "meh",
   "x": 3,
   "y": 5
}, {
   "loc": 2,
   "terra": "mountains",
   "title": "moo",
   "x": 2,
   "y": 2
}, {
   "loc": 3,
   "terra": "mountains",
   "title": "fish",
   "x": 6,
   "y": 9
}];

// The Full List of all locations to be added, Placeholder for Error Checking
var mapLocations = [{
   "locID": 500,
   "locType": {
      castle: true,
      details: "The Spire",
      dungeon: true,
      other: true
   },
   "terra": "mountains",
   "title": "Spire",
   "easter": {
      "loc": 22,
      "title": "plains"
   },
   "x": 5,
   "y": 5

}];

// Data to override existing data, so I don't have to re-write chunks

var mappedLocations = [{
   "Backer Name": "Christian Lippis",
   Email: "cslippis@hotmail.com",
   Notes: "",
   "Reward Title": "One Location Please!",
   biomes: {
      mid: true
   },
   description: "A coastal city/castle based near mountains so it has access to metals",
   fullDescription: "Selario is the capital city of the Illianese Empire",
   locID: 1000,
   locType: {
      castle: true,
      details: "CIty/castle",
      dungeon: true,
      other: true
   },
   map: {
      future: true,
      kdm: true,
      original: true,
      reskin: true
   },
   other3data: "CIty/castle",
   smallLocA: {
      description: "bigger town located near city",
      dungeon: true,
      farm: true,
      ruin: true,
      smith: true,
      svil: true,
      temple: true,
      tower: true,
      visible: true
   },
   smallLocB: {
      dungeon: true,
      visible: false,
      description: "Dungeon that adventurers go to seek treasure"
   },
   smallLocC: {
      details: "farming villages",
      farm: true,
   },
   smallLocD: {
      details: "Mining towns that extract rare metals that are then used by dwarfs to create superior quality items for the empire",
      mining: true
   },
   style: {
      euro: true,
      description: "Medieval Italian/german style architecture",
      otherdetails: "The capital is very rich and many of its citizens are well off"
   },
   terraType: {
      borders: "Forest - Boreal or Temperate",
      coastal: true,
      description: "No response",
      mountains: true,
      plains: true
   },
   title: "Selario",
   visible: true
}];


/*$$$$$$$                                                     
| $$__  $$                                                    
| $$  \ $$/$$$$$$  /$$$$$$  /$$$$$$$ /$$$$$$  /$$$$$$$/$$$$$$$
| $$$$$$$/$$__  $$/$$__  $$/$$_____//$$__  $$/$$_____/$$_____/
| $$____| $$  \__| $$  \ $| $$     | $$$$$$$|  $$$$$|  $$$$$$ 
| $$    | $$     | $$  | $| $$     | $$_____/\____  $\____  $$
| $$    | $$     |  $$$$$$|  $$$$$$|  $$$$$$$/$$$$$$$/$$$$$$$/
|__/    |__/      \______/ \_______/\_______|_______|_______/ 
 /$$$$$$$  /$$$$$$ /$$$$$$$$/$$$$$$                           
| $$__  $$/$$__  $|__  $$__/$$__  $$                          
| $$  \ $| $$  \ $$  | $$ | $$  \ $$                          
| $$  | $| $$$$$$$$  | $$ | $$$$$$$$                          
| $$  | $| $$__  $$  | $$ | $$__  $$                          
| $$  | $| $$  | $$  | $$ | $$  | $$                          
| $$$$$$$| $$  | $$  | $$ | $$  | $$                          
|_______/|__/  |__/  |__/ |__/  |__*/







function processData(allText, FullData) {
   debug = false;

   if (debug) {
      console.log("=============process=");
   }
   var data = JSON.parse(allText);
   var temp = null;



   for (i = 0; i < data.length; i++) {
      // some variables for use later:
      data[i].map = {};
      data[i].overspend = 0;
      data[i].overspent = [];
      data[i].isUnDefined = false;
      if (debug) {
         console.log("each--------------------->>");
      }

      if (data[i] == undefined) { 
         console.log("++++++++++++++++++++++++>>>>>WOFRONGNGNGNGN<<<");
      } else {
         console.log("HELOO++++++++++++++++++++++++++++++>>>>>>>>>>>>>",i, data[i]);
      }

      // not needed for this process
      deleteFromObject("Survey Response", data[i]);
      deleteFromObject("Rewards Sent?", data[i]);
      deleteFromObject("Reward ID", data[i]);
      deleteFromObject("Pledged At", data[i]);
      deleteFromObject("Billing State/Province", data[i]);
      deleteFromObject("Billing Country", data[i]);
      deleteFromObject("Backer UID", data[i]);

      //deleteFromObject("Backer Name", data[i]);


      deleteFromObject("Pledged Status", data[i]);
      //deleteFromObject("Backer Name", data[i]);
      //deleteFromObject("Backer Name", data[i]);
      //deleteFromObject("Backer Name", data[i]);

      if (data[i]["Anything To Add?"] == "No response") {
         deleteFromObject("Anything To Add?", data[i]);
      }

      // Easter Egg Locations

      // Pledge
      temp = data[i]["Pledge Amount"].split("$ ");
      data[i].pledge = parseInt(temp[1]);
      deleteFromObject("Pledge Amount", data[i]);


      // Extras
      temp = data[i]["Reward Minimum"].split("$ ");
      data[i].reward = parseInt(temp[1]);
      data[i].easterEggs = data[i].pledge - parseInt(temp[1]);

      deleteFromObject("Reward Minimum", data[i]);

      // Backer Order (to be sorted?)

      data[i].locID = parseInt(data[i]["Backer Number"]);
      deleteFromObject("Backer Number", data[i]);

      // Title of Location


      //4. Describe Your Location


      // Is the data filled in:
      if (FullData) {
         // Check if the form has been filled in - large maps
         if (data[i]["1. Email For Your Map To Be Sent. *Required!!"] == undefined) {
            //console.log("empty");
            data[i].isUnDefined = true;
            //console.log("undefined", data[i]["1. Email For Your Map To Be Sent. *Required!!"]);
         }
         if (data[i]["1. Email For Your Map To Be Sent. *Required!!"] == "") {
            //console.log("empty");
            data[i].isUnDefined = true;
            // console.log("blank", data[i]["1. Email For Your Map To Be Sent. *Required!!"]);
         }
      } else {
         // same for small maps
         if (data[i]["Email For Your Map To Be Sent. *Required!!"] == "") {
            //console.log("empty");
            data[i].isUnDefined = true;
            // console.log("small",data[i]);
         }
         if (data[i]["Email For Your Map To Be Sent. *Required!!"] == undefined) {
            //console.log("empty");
            data[i].isUnDefined = true;
            // console.log("small",data[i]);
         }
      }
      if (data[i].isUnDefined) {
          console.log("User", data[i]["Backer Name"], "unfilled survey");
      }

      // console.log(data[i].isUnDefined);

      if (!data[i].isUnDefined) {

         console.log("Lets G");


         data[i].title = data[i]["2. What Is Your Location Called?"];
         deleteFromObject("2. What Is Your Location Called?", data[i]);

         if (debug) {
            console.log(data[i]["Backer Name"], data[i].title, data[i].pledge, data[i].easterEggs);
         }

         if (data[i]["11. Which Map Do You Want This To Appear On?"] == undefined) {
            console.log(data[i]["11. Which Map Do You Want This To Appear On?"]);
            console.log(data[i]);
         }
         // Process Which Map
         temp = data[i]["11. Which Map Do You Want This To Appear On?"];

         tempSet = temp.split(" | ");

         // console.log(tempSet);


         for (loop = 0; loop < tempSet.length; loop++) {

            done = false;
            if (tempSet[loop] == "The Original Map, Sepia and Coloured") {
               done = true;

               data[i].map.original = true;
               stats.mapOriginal++;
            }
            if (tempSet[loop] == "The Re-Skinned Map") {
               done = true;
               data[i].map.reskin = true;
               stats.mapReskin++;
            }
            if (tempSet[loop] == "The Kingdom Death Monster / Cataclyzm Map") {
               done = true;
               data[i].map.kdm = true;
               stats.mapKDM++;
            }
            if (tempSet[loop] == "Future Maps (If you have increased your pledge)") {

               done = true;
               data[i].map.future = true;
               stats.future++;
            }
            if (tempSet[loop] == "No response") {
               done = true;
               data[i].map.future = true;
               stats.future++;
            }



            if (!done) {
               console.log(data[i]["Backer Name"]);
               console.log(data[i]);
               console.log(tempSet[loop]);
               console.log(tempSet);
               throw new Error("my error message");
            }

         }
         deleteFromObject("11. Which Map Do You Want This To Appear On?", data[i]);

         if (!data[i].map.original) {
            data[i].easterEggs++;
            data[i].overspend--;
            data[i].overspent.push("underspend O");;
         }
         if (!data[i].map.reskin) {
            data[i].easterEggs++;
            data[i].overspend--;
            data[i].overspent.push("underspend R");;
         }
         if (!data[i].map.kdm) {
            data[i].easterEggs++;
            data[i].overspend--;
            data[i].overspent.push("underspend K");;
         }

         if (data[i].map.future) {
            stats.futuremap++;

            if (data[i].easterEggs > 0) {
               data[i].easterEggs--;

            } else {
               data[i].map.future = false;
               data[i].overspend++;
               stats.futurefalse++
               data[i].overspent.push("future");;

            }
         }


         //
         data[i].description = data[i]["4. Describe Your Location"];
         deleteFromObject("4. Describe Your Location", data[i]);




         // 3.B. If Other, Add Details
         if (data[i]["3.B. If Other.. Add Details"] == "No response" ||
            data[i]["3.B. If Other.. Add Details"] == undefined) {
            deleteFromObject("3.B. If Other.. Add Details", data[i]);
         } else {

            if (data[i].easterEggs > 0) {

               data[i].other3data = data[i]["3.B. If Other.. Add Details"];
               data[i].easterEggs--;
            } else {


            }
            //-------->>>>   console.log(data[i]["5.B. If Other, Add Details"], data[i]["Backer Name"]);
         }

         // Structure Data Function
         // 5. What Terrain Do You Want Your Location To Appear In
         dataStructureSet = Array("Lake / Sea", "Coastal", "Swamp / Mangroves", "Desert",
            "Taiga / Steppe",
            "Plains / Grassland",
            "Forest - Boreal or Temperate", "Forest - Jungle or Rainforest", "Hills/Cliffs",
            "Mountains", "Other (Only choose if you have increased pledge)"
         );

         data[i].terraType = {};
         // structureSet = Array( "sea", "coastal", "swamp", "desert", "taiga", "plains",
         //    "borreal",
         //    "jungle",
         //    "hills", "mountains");

         data[i] = sortdata(dataStructureSet, "terraType", terraSet, data[i],
            "5. What Terrain Do You Want Your Location To Appear In")


         // 5.B. If Other, Add Details
         if (data[i]["5.B. If Other, Add Details"] == "No response" ||
            data[i]["5.B. If Other, Add Details"] == undefined) {
            deleteFromObject("5.B. If Other, Add Details", data[i]);
         } else {
            if (data[i].easterEggs > 0) {


               data[i].other5data = data[i]["5.B. If Other, Add Details"];
               data[i].easterEggs--;
               deleteFromObject("5.B. If Other, Add Details", data[i]);
            } else {
               data[i].overspend++;
               data[i].overspent.push("5B");
               //          console.log(data[i]["5.B. If Other, Add Details"], data[i]["Backer Name"]); <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
            }

         }

         //data[i].terraType.borders = data[i]["6. What Terrain Borders Your Location"];
         //deleteFromObject("6. What Terrain Borders Your Location", data[i]);

         dataStructureSet = Array("Lake / Sea", "Coastal", "Swamp / Mangroves", "Desert",
         "Taiga / Steppe",
         "Plains / Grassland",
         "Forest - Boreal or Temperate", "Forest - Jungle or Rainforest", "Hills/Cliffs",
         "Mountains", "Other (Only choose if you have increased pledge)"
      );

      data[i].borders = {};
      // structureSet = Array( "sea", "coastal", "swamp", "desert", "taiga", "plains",
      //    "borreal",
      //    "jungle",
      //    "hills", "mountains");

      data[i] = sortdata(dataStructureSet, "borders", terraSet, data[i],
         "6. What Terrain Borders Your Location")



         // Structure Data Function
         //7. Which Biomes Would Suit Your Location
         dataStructureSet = Array("Mid Range (o.c winters, 30.c summers)",
            "Warmer climates (10.c winters, 40.c summers)", 
            "Any of the Above",
            "Cooler Temperate Zone (minus winters, 20.c summers",
            "Arctic or Arctic Fringes ( minus winters, 0-5.c summers)",
            "Tropical (20.c winters, 45.c summers)", "No response");

         data[i].biomes = {};
         structureSet = Array( "mid", "warm", "any", "cool", "arctic", "tropic", "arctic",
            "n/a");

         data[i] = sortdata(dataStructureSet, "biomes", structureSet, data[i],
            "7. Which Biomes Would Suit Your Location")

         //8. Terrain Descriotion
         if (data[i] && data[i]["8. Describe Your Terrain, Border Terrain And Biome."] != undefined){
            data[i].terraType.description = data[i]["8. Describe Your Terrain, Border Terrain And Biome."];
            deleteFromObject("8. Describe Your Terrain, Border Terrain And Biome.", data[i]);
         }

         //9. Style Of Your Location (If Applicable, Choose Up To 2)
         dataStructureSet = Array( 
            
            "European (Grey stone)", 
            "Arabian (Yellow Stone)", 
            "Asian (White Stone)", 
            "Aztec (Orange Stone)",
            "Native (tents)", 
            "Nomadic (horses or wheeled)",  
            "Abandoned/Ruins", 
             "No response");

            
         data[i].style = {};
         console.log(data[i]);
         structureSet = Array( "euro",  "arab",   "asia",  "aztec","tents", "nomad",  "ruins",   "any");
         

         data[i] = sortdata(dataStructureSet, "style", structureSet, data[i],
            "9. Style Of Your Location (If Applicable, Choose Up To 2)");

            console.log(data[i].style);

         // spread out the anys?
         if (data[i].style && data[i].style.any) {
            rando = Math.ceil((Math.random() * 6) + 1);
            data[i].style[structureSet[rando]] = true;
            deleteFromObject("any", data[i].style);
         }

         counter = 0;
         // count the number of choices the user has chosen 2 allowed. if Three, chalk an easter egg
         console.log(data[i].style);
         if (data[i].style != undefined) {
            if (Object.keys(data[i].style).length > 2) { 

               if (data[i].easterEggs > (Object.keys(data[i].style).length - 2)) {
                  data[i].easterEggs -= (Object.keys(data[i].style).length - 2); 

               } else {
                  data[i].overspend++;
                  data[i].overspent.push("styles " + (Object.keys(data[i].style).length - 2));
                  console.log("User:", data[i]["Backer Name"], "styles", data[i].style);
                  console.log(data[i]);
                  //rando = Math.ceil((Math.random()*6)+1);
                  //deleteFromObject(structureSet[rando], data[i].style);
               }  

            }
         
         // Need to determine groups. 
         for (stylz = 0; stylz < (structureSet.length - 1); stylz++) {
            for (styls = 0; styls < (structureSet.length - 1); styls++) {

               if (structureSet[stylz] == structureSet[styls]) {
                  // do nothing 
               } else {
                  // if not created, create

                  // if sets exist, add group
                  if (data[i].style[structureSet[stylz]] && data[i].style[structureSet[styls]]) {
                     if (stats[structureSet[stylz] + "_" + structureSet[styls]] == undefined) {
                        stats[structureSet[stylz] + "_" + structureSet[styls]] = 0;
                     }
                     //              console.log(structureSet[stylz] + ":", data[i].style[structureSet[stylz]], structureSet[styls] + ":", data[i].style[structureSet[styls]])
                     //            console.log(stats[structureSet[stylz] + "_" + structureSet[styls]]);
                     stats[structureSet[stylz] + "_" + structureSet[styls]]++;
                     stats[structureSet[stylz]]--;
                     stats[structureSet[stylz]+"_"]++;
                     stats[structureSet[styls]]--;
                     stats[structureSet[styls]+'_']++;
                     data[i].style[structureSet[stylz] + "_" + structureSet[styls]] = true;
                     //          console.log(data[i].style);
                     //data[i].style[structureSet[stylz]] = false;
                     //data[i].style[structureSet[styls]] = false;
                     //        console.log(data[i].style);
                  }
               }
            }
         } /** */
       

         //9. Terrain Descriotion
         data[i].style.description = data[i][
            "9.B. Using The Key Ideas Of The Styles Given, You Can Add Some Flourish?"
         ];
         deleteFromObject("9.B. Using The Key Ideas Of The Styles Given, You Can Add Some Flourish?",
            data[
               i]);



         //9. Terrain Descriotion
         temp = data[i]["9.C. If Other, Add Details"];
         if (temp == "No response" ||
            temp == "N/A" ||
            temp == "na" ||
            temp == "NA" ||
            temp == "n/a" ||
            temp == "Not other" ||
            temp == "N/a" ||
            temp == "Didn't fill out other" ||
            temp == "This field should have been optional...." ||
            temp == "No" ||
            temp == "I'm good." ||
            temp == "-" ||
            temp == "no other noted" ||
            temp == "." ||
            temp == "didn't choose other, but it still requires an answer to accept my response" ||
            temp == "(this should've probably been optional)" ||
            temp == "See above" ||
            temp == "none" ||
            temp == "not other" ||
            temp ==
            "I didn't pick other...and didn't have increased pledge. (although I wish I had now that I have thought of my idea)" ||
            temp == "..." ||
            temp == "No buildings (Kickstarter made me fill this in)" ||
            temp == "This question was not optional"

         ) {
            deleteFromObject("9.C. If Other, Add Details", data[i]);
         } else {
            data[i].style.otherdetails = data[i]["9.C. If Other, Add Details"];
            // don't 'charge' for this
            //data[i].easterEggs--;
            //console.log("9.c.", data[i]["9.C. If Other, Add Details"]);
            deleteFromObject("9.C. If Other, Add Details", data[i]);
         }

         // Description for Mapping Data
         data[i].fullDescription = data[i][
            "10. What Text Do You Want To Appear In The Document For This Location? (2 Paragraph Maximum)"
         ];
         deleteFromObject(
            "10. What Text Do You Want To Appear In The Document For This Location? (2 Paragraph Maximum)",
            data[
               i]);


            } // IF the data[i].style doesn't exist..




         /*
                                         /$$/$$                             
                                        | $| $$                             
           /$$$$$$$/$$$$$$/$$$$  /$$$$$$| $| $$                             
          /$$_____| $$_  $$_  $$|____  $| $| $$                             
         |  $$$$$$| $$ \ $$ \ $$ /$$$$$$| $| $$                             
          \____  $| $$ | $$ | $$/$$__  $| $| $$                             
          /$$$$$$$| $$ | $$ | $|  $$$$$$| $| $$                             
         |_______/|__/ |__/ |__/\_______|__|__/                             
          /$$                                   /$$    /$$                  
         | $$                                  | $$   |__/                  
         | $$       /$$$$$$  /$$$$$$$ /$$$$$$ /$$$$$$  /$$ /$$$$$$ /$$$$$$$ 
         | $$      /$$__  $$/$$_____/|____  $|_  $$_/ | $$/$$__  $| $$__  $$
         | $$     | $$  \ $| $$       /$$$$$$$ | $$   | $| $$  \ $| $$  \ $$
         | $$     | $$  | $| $$      /$$__  $$ | $$ /$| $| $$  | $| $$  | $$
         | $$$$$$$|  $$$$$$|  $$$$$$|  $$$$$$$ |  $$$$| $|  $$$$$$| $$  | $$
         |________/\______/ \_______/\_______/  \___/ |__/\______/|__/  |__/
                                                                            */

         // Question.. Should all Small Locations be added to the map independantly of their parent, and 'attached' to their parent IF a parent ID exists, which we check for, because some locations may be detached?

         // Only Add On






         if (FullData) {
            // Form is filled in, lets Process it

            deleteFromObject("Email For Your Map To Be Sent. *Required!!", data[i]);

            // Locations
            min1 = false;
            temp = data[i]["3. What Kind Of Location Do You Want"];
            tempSet = temp.split(" | ");
            data[i].locType = {};
            for (loop = 0; loop < tempSet.length; loop++) {
               if (tempSet[loop] == "Castle/Fortress/City/Tower") {
                  data[i].locType.Castle = true;
                  stats.cCstle++;
                  min1 = true;
               }
               if (tempSet[loop] == "Dungeon/Crypt/Tomb") {
                  data[i].locType.Dungeon = true;
                  stats.Dungeon++;
                  min1 = true;
               }
               if (tempSet[loop] == "Exotic Natural Object (tree/rock/other)") {
                  data[i].locType.Natural = true;
                  stats.Natural++;
                  min1 = true;
               }
               if (tempSet[loop] == "Mine/Hole/Crack in Ground") {
                  data[i].locType.Hole = true;
                  stats.Hole++;
                  min1 = true;
               }
               if (tempSet[loop] == "Exotic/Abnormal Terrain") {
                  data[i].locType.Terrain = true;
                  stats.Terrain++;
                  min1 = true;
               }



               if (tempSet[loop] == "Other (Only choose if you have increased pledge)") {

                  if (data[i].easterEggs > 0) {

                     data[i].locType.other = true;
                     stats.other++;
                     data[i].easterEggs--;
                     data[i].locType.details = data[i]["3.B. If Other.. Add Details"];
                     deleteFromObject("3.B. If Other.. Add Details", data[i]);

                  } else {
                     // catch out users who entered details in excess
                     data[i].overspend++;
                     data[i].overspent.push("3B");

                     //console.log(data[i].title, data[i].easterEggs);
                     //console.log(data[i]["3.B. If Other.. Add Details"], data[i]["Backer Name"]);
                     //console.log(data[i]);
                  }

                  min1 = true;
               }

               // Catch if didn't before.
               if (!min1) {
                  console.log("Catch", tempSet[loop]);
                  console.log("------>>>", data[i]["Backer Name"], data[i].title, data[i].pledge, data[i]
                     .easterEggs);

               }

            } // end of tempSet for Locations
            deleteFromObject("3. What Kind Of Location Do You Want", data[i]);

            // Location Visibility
            temp = data[i]["12. Will Your Location Be Hidden On The Player Maps?"];
            if (temp == "Yes, My place is public Knowledge, anyone can find it") {
               data[i].visible = true;

            } else {
               data[i].visible = false;
            }
            deleteFromObject("12. Will Your Location Be Hidden On The Player Maps?", data[i]);

            //First Add On
            dataStructureSet = Array("Village size+2",
               "Village size+1", "Dungeon Entrance/Exit",
               
               "Label: Add name in text below", "Sign / road marker",
               "Abandoned/Ruins", "Monolith/statue/totem", "Hole in the ground", "Temple",
               "surround with trees",
               "Animals", "surrounding Main Location", "Farms", "Lake/waterfall (if possible)",
               "Tents", "Ruins",
               "tower/guard post", "Blacksmith", "Fields", "surrounding Someone Elses Location",
               "Abandonded... <insert here>", "Abandonded...", "No response");

            data[i].smallLocA = {};
            // structureSet = Array( "mvil", "svil", "dungeon", "ruin", "label", "sign",
               
            //    "statue",
            //    "hole",
            //    "temple", "trees", "animals", "surround", "farm", "waterfall", "tents", "ruins", "tower",
            //    "smith",
            //    "fields",
            //    "surround", "abandoned", "abandoned",
            //    "nada"); EasterSet



            data[i] = sortdata(dataStructureSet, "smallLocA", EasterSet, data[i],
               "13a. Your First Add On / Small Location A, You Can Combine By Clicking 3 Elements, (Or More For Higher Pledges)"
            );


            data[i].smallLocA.description = data[i]['13b. Describe Location A'];
            deleteFromObject("13b. Describe Location A", data[i]);

            //data[i].smallLocA.other = data[i]['13c. If Other, Add Details'];
            //deleteFromObject("13c. If Other, Add Details", data[i]);

            if (data[i]["13c. If Other, Add Details"] == "No response") {
               deleteFromObject("13c. If Other, Add Details", data[i]);
            } else {

               if (data[i].easterEggs > 0) {
                  data[i].smallLocA.otherdetails = data[i]["13c. If Other, Add Details"];
                  data[i].easterEggs--;
                  deleteFromObject("13c. If Other, Add Details", data[i]);
               } else {
                  data[i].overspend++;
                  data[i].overspent.push("13C");
               }

            }

            temp = data[i]["13d. Will Location A Be Hidden On The Player Maps?"];
            if (temp == "No") {
               data[i].smallLocA.visible = true;

            } else {
               data[i].smallLocA.visible = false;
            }
            deleteFromObject("13d. Will Location A Be Hidden On The Player Maps?", data[i]);

            // Second AddOn

            data[i].smallLocB = {};

            data[i] = sortdata(dataStructureSet, "smallLocB", structureSet, data[i],
               "14a. Location B? You Can Combine By Clicking 3 Elements, (Or More For Higher Pledges)"
            )

            data[i].smallLocB.description = data[i]['14b. Describe Location A'];
            deleteFromObject("14b. Describe Location A", data[i]);

            if (data[i]["14c. If Other, Add Details"] == "No response") {
               deleteFromObject("14c. If Other, Add Details", data[i]);
            } else {
               if (data[i].easterEggs > 0) {
                  data[i].smallLocB.otherdetails = data[i]["14c. If Other, Add Details"];
                  data[i].easterEggs--;
                  deleteFromObject("14c. If Other, Add Details", data[i]);
               } else {
                  data[i].overspend++;
                  data[i].overspent.push("14c");

               }


            }

            temp = data[i]["14d. Will Location A Be Hidden On The Player Maps?"];
            if (temp == "No") {
               data[i].smallLocB.visible = true;

            } else {
               data[i].smallLocB.visible = false;
            }
            deleteFromObject("14d. Will Location A Be Hidden On The Player Maps?", data[i]);


            // Extra Locations
            if (data[i]["Location C Description (If You Pledged Higher For More Locations)"] ==
               "No response") {
               deleteFromObject("Location C Description (If You Pledged Higher For More Locations)",
                  data[i]);
            } else {
               if (data[i].easterEggs > 0) {
                  data[i].smallLocC = {};
                  data[i].smallLocC.details = data[i][
                     "Location C Description (If You Pledged Higher For More Locations)"
                  ];
                  data[i].easterEggs--;
                  //console.log("minus 1 easter egg for details", data[i]['Backer Name']);
                  deleteFromObject("Location C Description (If You Pledged Higher For More Locations)",
                     data[i]);
               } else {
                  data[i].overspend++;
                  data[i].overspent.push("LocC");
               }
            }
            // Extra Locations
            if (data[i]["Location D Description (If You Pledged Higher For More Locations)"] ==
               "No response") {
               deleteFromObject("Location D Description (If You Pledged Higher For More Locations)",
                  data[i]);
            } else {

               if (data[i].easterEggs > 0) {
                  data[i].smallLocD = {};
                  data[i].smallLocD.details = data[i][
                     "Location D Description (If You Pledged Higher For More Locations)"
                  ];
                  data[i].easterEggs--;
                  deleteFromObject("Location D Description (If You Pledged Higher For More Locations)",
                     data[i]);
               } else {
                  data[i].overspend++;
                  data[i].overspent.push("LocD");
               }
            }
            // Extra Locations
            if (data[i]["Location E Description (If You Pledged Higher For More Locations)"] ==
               "No response") {
               deleteFromObject("Location E Description (If You Pledged Higher For More Locations)",
                  data[i]);
            } else {
               if (data[i].easterEggs > 0) {
                  data[i].smallLocE = {};
                  data[i].smallLocE.details = data[i][
                     "Location E Description (If You Pledged Higher For More Locations)"
                  ];
                  data[i].easterEggs--;

                  deleteFromObject("Location E Description (If You Pledged Higher For More Locations)",
                     data[i]);
               } else {
                  data[i].overspend++;
                  data[i].overspent.push("LocD");
               }
            }




         } else {

            // Location Visibility
            temp = data[i]["12. Will Your Location Be Hidden On The Player Maps?"];
            if (temp == "Yes, My place is public Knowledge, anyone can find it") {
               data[i].visible = true;

            } else {
               data[i].visible = false;
            }
            deleteFromObject("12. Will Your Location Be Hidden On The Player Maps?", data[i]);

            // Process Specifically Small Map Items
            deleteFromObject("Email For Your Map To Be Sent. *Required!!", data[i]);

            dataStructureSet = Array("Village size+2",
               "Village size+1", "Dungeon Entrance/Exit",
               
               "Label: Add name in text below", "Sign / road marker",
               "Abandoned/Ruins", "Monolith/statue/totem", "Hole in the ground", "Temple",
               "surround with trees",
               "Animals", "surrounding Main Location", "Farms", "Lake/waterfall (if possible)",
               "Tents", "Ruins",
               "tower/guard post", "Blacksmith", "Fields", "surrounding Someone Elses Location",
               "Abandonded... <insert here>", "No response");

            data[i].smallLocA = {};
            structureSet = Array( "mvil", "svil", "dungeon", "ruin", "label", "sign",
               "statue",
               "hole",
               "temple", "trees", "animals", "surround", "farm", "waterfall", "tents", "ruins", "tower",
               "smith",
               "fields",
               "surround", "abandoned",
               "nada");

            data[i] = sortdata(dataStructureSet, "smallLocA", structureSet, data[i],
               "3. What Kind Of Location Do You Want ? You Can Combine By Clicking 3 Elements, (Or More For Higher Pledges)"
            )

               if (data[i]['13b. Describe Location A']) {
                  data[i].smallLocA.description = data[i]['13b. Describe Location A'];
                  deleteFromObject("13b. Describe Location A", data[i]);
               }
         }

      }


      // Main Locations





   } // loop of data

   // compare final:



   mapLocations.push.apply(mapLocations, data);
   console.log("Stst", stats);

}