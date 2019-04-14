function rewriteMap() {

   var arrayTitles = ['smallLocA', 'smallLocB'];

   // Loop through existing map locations
   for (old = 0; old < mapLocations.length; old++) {

      // Loop through mappedLocations
      for (map = 0; map < mappedLocations.length; map++) {

         if (mapLocations[old]['Backer Name'] == mappedLocations[map]['Backer Name']) {
            // Ovewrwrite in Progress:

            if (mappedLocations[map][arrayTitles[0]]) {
               mapLocations[old][arrayTitles[0]] = mappedLocations[map][arrayTitles[0]];
            }
            if (mappedLocations[map][arrayTitles[1]]) {
               mapLocations[old][arrayTitles[1]] = mappedLocations[map][arrayTitles[1]];
            }


         }
      }

   }

}

function reCheckEasterEggs() {
   for (old = 0; old < mapLocations.length; old++) {

      pledge = mapLocations[old];
      pledge.checkSpend = 0;

      // Is defined?
      if (!pledge.isUnDefined) {

         console.log(pledge);

         if (pledge.locType == undefined) {
            // This is a small location

         } else {
            // this is a large location

            if (pledge.locType.other) {
               pledge.checkSpend--;
            }


         }
      }


      mapLocations[old] = pledge;
   } // End of "is Pledged"

}


function createMap() {

   terraLocs = [];
   mainLocs = [];
   easterALocs = [];
   easterBLocs = [];
   biomeLocs = [];

   console.log("creating map");
   var counter = 0;

   for (i = 0; i < mapHeight; i++) {

      theMap.push(
         [{
            "loc": 1
         }]
      );


      for (j = 0; j < mapWidth; j++) {

         theMap[i][j] = {
            "loc": 0,
            "id": counter
         };


         blank = {
            "id": counter,
            "x": i,
            "y": j,
            "taken": false
         };
         terraLocs.push(blank);
         mainLocs.push(blank);
         easterALocs.push(blank);
         easterBLocs.push(blank);
         biomeLocs.push(blank);

         counter++;
      }
   }

   // console.log(theMap);
}

var drawLimit = mapWidth;
var drawNum = 0; 

// Draw the Map to screen
function drawMap(map) {

   var mapBox = document.getElementById("mapbox");
   var counter = 0;

   //console.log("draw Map", mapHeight, mapWidth);

   if ((mapHeight * mapWidth) > 1800 ) { return;}
   drawTo = drawLimit+drawNum;

   if (drawNum < 500) { drawTo = 500; }

   if (drawNum < 350) { drawTo = 350; }

   for (i = 0; i < mapHeight; i++) {
      for (j = 0; j < mapWidth; j++) {

         
        // console.log(drawNum+" < "+drawTo,  drawLimit);
         if (drawNum < drawTo && counter >= drawNum) {
        // console.log(map[i][j].id);

         if (j % 2 != 0) {
            alternate = "";
         } else {
            alternate = 'alternate';
         }

         hex = '<div id="bid' + map[i][j].id + '" style= " top:' + ((i * 75) + 50) + 'px ; left:' + ((j * 65) + 40) + 'px" class = "' +
            alternate +
            ' grid" >';
         hex += '<div id="oid' + map[i][j].id + '" class = "gridimg" >';

         //      console.log(hex);

         // Check to Add Terrain Type


         hex += '<div id="id' + map[i][j].id + '" class="terrain">';

         hex += '<div id="mid' + map[i][j].id + '" class="id">';

         hex += '</div>';
         hex += '<div id="e1id' + map[i][j].id + '" class="easter">';

         hex += '</div>';
         hex += '<div id="e2id' + map[i][j].id + '" class="easter">';

         hex += '</div>';


         hex += '</div>';

         hex += '</div>';

         hex += '</div>';
      

         drawNum++;
         mapBox.innerHTML += hex;
   }
         counter++;
      }
   }
}

// Draw the Map to screen
function redrawMap(map) {

   console.log("redraw Map");

   for (i = 0; i < mapHeight; i++) {
      for (j = 0; j < mapWidth; j++) {

         if (map[i][j].terra) {

            //console.log('#id' + map[i][j].id);
            $('#id' + map[i][j].id).addClass(map[i][j].terra);
            $('bid' + map[i][j].id).text(map[i][j].terra);
         }
         //    console.log('#id' + map[i][j].id);
         if (map[i][j].biome) {

            //        console.log('#id' + map[i][j].id);
            $('#bid' + map[i][j].id).addClass(map[i][j].biome);
            $('#mid' + map[i][j].id).text(map[i][j].id);
         }

         /* Check to Add Terrain Type

         if (map[i] != undefined) {
            hex += '<div class = "terrain ' + map[i][j].terra + '" >' + map[i][j].id + map[i][j].title;
            //        console.log(map[i][j]);
            if (map[i][j].easter != undefined) {
               easterEgg = map[i][j].easter;

               hex += '<div class = "easter ' + easterEgg.terra + '" >' + easterEgg.loc + ' </div>';
            }

            hex += '</div>';

         } else {
            hex += '<div class = "terrain" > </div>';
         }

         hex += '</div>';

         document.getElementById("mapbox").innerHTML += hex;*/
      }
   }
}

function isInt(value) {
   var x;
   if (isNaN(value)) {
     return false;
   }
   x = parseFloat(value);
   return (x | 0) === x;
 }

function toggleGrid() {
   console.log(gridOn);
   if (!gridOn) {

      changeStyle('.gridimg', 'backgroundImage', "url('./img/hex3.png')");
      gridOn = true;
   } else {
      changeStyle('.gridimg', 'backgroundImage', 'none');
      gridOn = false;
   }
}

function changeStyle(selectorText, styleText, styleSet) {
   var theRules = new Array();
   if (document.styleSheets[0].cssRules) {
      theRules = document.styleSheets[0].cssRules;
   } else if (document.styleSheets[0].rules) {
      theRules = document.styleSheets[0].rules;
   }
   for (n in theRules) {
      if (theRules[n].selectorText == selectorText) {
         theRules[n].style[styleText] = styleSet;
      }
   }
}





function randNum(max) {

   return Math.floor((Math.random() * max) + 0);

}




function checkMapForErrors() {

   var last = 0;
   var next = 0;

   for (i = 0; i < theMap.length; i++) {

      for (j = 0; j < theMap[i].length; j++) {

         last = theMap[i][j].id;
         if (last != (next + 1)) {
            //      console.log("Something wrong", last, next);

         }
         next = theMap[i][j].id;
      }
   }

   last = 0;
   next = 0;
   for (i = 0; i < terraLocs.length; i++) {

      last = terraLocs[i].id;
      if (last != (next + 1)) {
         //      console.log("Something between", last, next);

      }
      next = terraLocs[i].id;
   }
}


function checkOverspend() {

   for (loop = 0; loop < mapLocations.length; loop++) {
      // Has the "account" spent more than they pledges or less than they pledged

      if (!mapLocations[loop].isUnDefined) {
         if (mapLocations[loop].overspend > 0 || mapLocations[loop].easterEggs > 0) {
            //console.log(mapLocations[i].overspend);
            if ((mapLocations[loop].easterEggs + mapLocations[loop].overspend) != 0) {
               console.log(mapLocations[loop].easterEggs - mapLocations[loop].overspend);
               console.log("------>>>", mapLocations[loop]["Backer Name"], mapLocations[loop].title,
                  mapLocations[
                     loop].pledge, "EasterEgss",
                  mapLocations[loop]
                  .easterEggs,
                  "Overspend", mapLocations[loop]
                  .overspend, mapLocations[loop].overspent);
               stats.accountsToCheck++;

               console.log(mapLocations[loop]);
            }
         }
      }
   }

   console.log("Final Stats CheckOverspend", stats);

}

function deleteFromObject(keyPart, obj) {
   for (var k in obj) { // Loop through the object
      if (~k.indexOf(keyPart)) { // If the current key contains the string we're looking for
         delete obj[k]; // Delete obj[key];
      }
   }
}


function sortdata(dataStructure, style, structureSet, dataSet, dataTitle, show = false) {

   //5. What Terrain Do You Want Your Location To Appear In
   
   if (show) console.log("meh:"+dataTitle );
   
   if (show) console.log("defined:"+style );

   notMissing = false;
   if (dataSet[dataTitle] != undefined) {
      temp = dataSet[dataTitle];
      tempSet = temp.split(" | ");
      if (show) console.log(tempSet);


      for (loop = 0; loop < tempSet.length; loop++) {

         for (iloop = 0; iloop < dataStructure.length; iloop++) {

            if (show) console.log(tempSet[loop]+ " vs" + dataStructure[iloop] + " & " + structureSet[iloop]);
            if (tempSet[loop] == dataStructure[iloop]) {

               dataSet[style][structureSet[iloop]] = true;

               stats[structureSet[iloop]]++;
               
               notMissing = true;
            }

         }


         if (tempSet[loop] == "Other (Only choose if you have increased pledge)") {

            //console.log(structureSet[0], tempSet);

            if (dataSet.easterEggs > 0) {

               dataSet[style].other = true;
               stats[style + "other"]++;
               dataSet.easterEggs--;
               dataSet[style].details = dataSet[dataTitle];
               deleteFromObject(dataTitle, dataSet);

            } else {
               // catch out users who entered details in excess

               dataSet.overspend++;
               dataSet.overspent.push("Other" + style);
               //console.log(dataSet.title, dataSet.easterEggs);
               //console.log(tempSet[loop] == dataSet[dataTitle], dataSet["Backer Name"]);
               //console.log(dataSet);
            }

            notMissing = true;
         }

         if (show) console.log(dataSet[style]);
               if (show) console.log("------->");

         // Catch if didn't before.
         if (!notMissing) {
            console.log("Catch", dataTitle, tempSet[loop]);
            console.log("------>>>", dataSet["Backer Name"], dataSet.title, dataSet.pledge, dataSet.easterEggs);

         } else {
            deleteFromObject(dataTitle, dataSet);
         }


      } // end of tempSet for Terrains
      return dataSet;
   }
   return false;


}


var startLoc = undefined;
var endLoc = undefined;
var MountainsLeft = undefined;

function makeMountains(minX =2, maxX= null, minY =2, maxY =null, total =10) {
   /*
    /$$      /$$                             /$$    
   | $$$    /$$$                            | $$    
   | $$$$  /$$$$ /$$$$$$ /$$   /$$/$$$$$$$ /$$$$$$  
   | $$ $$/$$ $$/$$__  $| $$  | $| $$__  $|_  $$_/  
   | $$  $$$| $| $$  \ $| $$  | $| $$  \ $$ | $$    
   | $$\  $ | $| $$  | $| $$  | $| $$  | $$ | $$ /$$
   | $$ \/  | $|  $$$$$$|  $$$$$$| $$  | $$ |  $$$$/
   |__/     |__/\______/ \______/|__/  |__/  \___*/

   // Mountain Ranges: 
   if (MountainsLeft == undefined) { MountainsLeft = stats.mountains; }
   console.log(stats, MountainsLeft);

   if (MountainsLeft > 0) {
      MountainsLeft--;
   
   
   var needMore = 0;
   thisX = 0;
   thisY = 0;
   if (maxX == null) { maxX = mapHeight -3; }
   mapWidth
   unset = true;
   counter = 0;
   console.log("Start Mountains");

   mountCount = stats.mountains;
   //mountCount = total;
   
   countMax = 10;

   for (i = 0; i < 1; i++) {


      console.log("Terrain left to Process", mountCount);
      if (terraLocs.length > 7) {
         // Create a start location
         console.log("enoughTerrain?", terraLocs.length)
         if (startLoc == undefined) {

            console.log("starting");
            counter = 0;



            while (counter < countMax) {
            if (thisX < minX || thisX > maxX && thisY < minY || thisY > maxY) {
               console.log("success", thisX, mapHeight, thisY, mapWidth);


               val = Math.floor((Math.random() * terraLocs.length));


               thisX = terraLocs[val].x;
               thisY = terraLocs[val].y;
               console.log(thisX, thisY);
            
            }
            counter++;
            }
            startLoc = {
               "startX": thisX,
               "startY": thisY
            };
            //          console.log(startLoc);
            icon = "MS";
         } else {

            if (endLoc == undefined) {

               // So the map doesn't try to put a mountain on the 'otherside of the world'
               console.log("endLoc");
               counter = 0;
               //for (i = 0; i < 500; i++) {
               while (counter < countMax) {
               if (thisX < minX || thisX > maxX && thisY < minY || thisY > maxY) {

                  dice1 = Math.floor(Math.random() * 6);
                  dice2 = Math.floor(Math.random() * 6);
                  dice3 = Math.floor(Math.random() * 6);
                  dice4 = Math.floor(Math.random() * 6);


                  thisX = startLoc.startX + dice1 - dice2;
                  if (thisX >= maxX) thisX = maxX - 1;
                  if (thisX < minX) thisX = minX+1;

                  thisY = startLoc.startY + dice3 - dice4;
                  if (thisY >= maxY) thisY = maxY - 1;
                  if (thisY < minY) thisY = minY+1;
                  console.log(thisX, thisY);
                  }

                  counter++;
                  
               }

               endLoc = {
                  "endX": thisX,
                  "endY": thisY
               };
               //           console.log(endLoc);
               icon = "ME";
            } else {
               // So, given that startLoc and endLoc ARE defined
               // check if we've 'moved' startLoc to endLoc
               if (startLoc.startX == endLoc.endX && startLoc.startY == endLoc.endY) {

                  startLoc = undefined;
                  endLoc = undefined;
               } else {
                  icon = "M" + i;
                  unset = false;
                  if (Math.random() > 0.4) {
                     unset = true;
                  }
                  // So, StartLoc and endLoc are defined and not the same place.
                  if (startLoc.startX < endLoc.endX && unset) {

                     thisX = startLoc.startX + 1;
                     thisY = startLoc.startY;
                     startLoc = {
                        "startX": thisX,
                        "startY": thisY
                     };
                     if (Math.random() > 0.6) {
                        unset = false;
                     }

                  }

                  if (startLoc.startX > endLoc.endX && unset) {

                     thisX = startLoc.startX - 1;
                     thisY = startLoc.startY;
                     startLoc = {
                        "startX": thisX,
                        "startY": thisY
                     };
                     if (Math.random() > 0.6) {
                        unset = false;
                     }

                  }

                  if (startLoc.startY < endLoc.endY && unset) {

                     thisX = startLoc.startX;
                     thisY = startLoc.startY + 1;
                     startLoc = {
                        "startX": thisX,
                        "startY": thisY
                     };
                     if (Math.random() > 0.6) {
                        unset = false;
                     }

                  }

                  if (startLoc.startY > endLoc.endY && unset) {

                     thisX = startLoc.startX;
                     thisY = startLoc.startY - 1;
                     startLoc = {
                        "startX": thisX,
                        "startY": thisY
                     };
                     if (Math.random() > 0.6) {
                        unset = false;
                     }

                  }
               } // if start = end
            } // if end undefined
         } // if start undefined


         if (theMap[thisX][thisY].terra == undefined && unset) {

            // Set the current location as mountains
            theMap[thisX][thisY].terra = "mountains";
            theMap[thisX][thisY].locID = i;
            theMap[thisX][thisY].title = "-" + icon;

            // drop it from the array of blanks
            terraLocs = removeFromArray(terraLocs, thisX, thisY, true);
         } else {
            i--;
         }
         //console.log(i);
         //console.log(terraLocs.length);
      } else {
         needMore++;
      }
   }
   checkMapForErrors();
   terraLocs = removeFilled(terraLocs, "terra", "After Mountains");
   console.log("====>>> End of Mountain Ranges <<==");

   redrawMap(theMap);
} // limited to Mountains Left
}

function makeHills(minX =2, maxX= null, minY =2, maxY =null, total =10) {
   /*
    /$$   /$$/$$/$$/$$         
   | $$  | $|__| $| $$         
   | $$  | $$/$| $| $$ /$$$$$$$
   | $$$$$$$| $| $| $$/$$_____/
   | $$__  $| $| $| $|  $$$$$$ 
   | $$  | $| $| $| $$\____  $$
   | $$  | $| $| $| $$/$$$$$$$/
   |__/  |__|__|__|__|_______*/

   var startLoc = undefined;
   var endLoc = undefined;
   var needMore = 0;
   var counter = 0;
   var countMax = 10; 

   for (i = 0; i < stats.hills; i++) {

      //   console.log("Terrain left to Process", terraLocs.length);
      if (terraLocs.length > 0) {
         // Create a start location
         if (startLoc == undefined) {

            while (counter < countMax) {
               if (thisX < minX || thisX > maxX && thisY < minY || thisY > maxY) {
            

               val = Math.floor((Math.random() * terraLocs.length));


               thisX = terraLocs[val].x;
               thisY = terraLocs[val].y;
               console.log(thisX, thisY);
            }
            counter++;
         }
            startLoc = {
               "startX": thisX,
               "startY": thisY
            };
            icon = "HS";
         } else {

            if (endLoc == undefined) {
               // backup
               while (counter < countMax) {
                  if (thisX < minX || thisX > maxX && thisY < minY || thisY > maxY) {

                  dice1 = Math.floor(Math.random() * 6);
                  dice2 = Math.floor(Math.random() * 6);
                  dice3 = Math.floor(Math.random() * 6);
                  dice4 = Math.floor(Math.random() * 6);


                  thisX = startLoc.startX + dice1 - dice2;
                  if (thisX >= maxX) thisX = maxX - 1;
                  if (thisX < minX) minX = minX+1;

                  thisY = startLoc.startY + dice3 - dice4;
                  if (thisY >= maxY) thisY = maxY - 1;
                  if (thisY < minY) thisY = minY+1;
                  console.log(thisX, thisY);
               }
               counter++;
            }
               endLoc = {
                  "endX": thisX,
                  "endY": thisY
               };
               icon = "HE";
            } else {
               // So, given that startLoc and endLoc ARE defined
               // check if we've 'moved' startLoc to endLoc
               if (startLoc.startX == endLoc.endX && startLoc.startY == endLoc.endY) {

                  startLoc = undefined;
                  endLoc = undefined;
               } else {
                  icon = "H" + i;
                  unset = false;
                  if (Math.random() > 0.4) {
                     unset = true;
                  }
                  // So, StartLoc and endLoc are defined and not the same place.
                  if (startLoc.startX < endLoc.endX && unset) {

                     thisX = startLoc.startX + 1;
                     thisY = startLoc.startY;
                     startLoc = {
                        "startX": thisX,
                        "startY": thisY
                     };
                     if (Math.random() > 0.6) {
                        unset = false;
                     }

                  }

                  if (startLoc.startX > endLoc.endX && unset) {

                     thisX = startLoc.startX - 1;
                     thisY = startLoc.startY;
                     startLoc = {
                        "startX": thisX,
                        "startY": thisY
                     };
                     if (Math.random() > 0.6) {
                        unset = false;
                     }

                  }

                  if (startLoc.startY < endLoc.endY && unset) {

                     thisX = startLoc.startX;
                     thisY = startLoc.startY + 1;
                     startLoc = {
                        "startX": thisX,
                        "startY": thisY
                     };
                     if (Math.random() > 0.6) {
                        unset = false;
                     }

                  }

                  if (startLoc.startY > endLoc.endY && unset) {

                     thisX = startLoc.startX;
                     thisY = startLoc.startY - 1;
                     startLoc = {
                        "startX": thisX,
                        "startY": thisY
                     };
                     if (Math.random() > 0.6) {
                        unset = false;
                     }

                  }



               }



            }

         }
         if (theMap[thisX][thisY].terra == undefined) {

            // Set the current location as mountains
            theMap[thisX][thisY].terra = "hills";
            theMap[thisX][thisY].locID = i;
            theMap[thisX][thisY].title = "-" + icon;

            // this is broken, but it creates interesting ranges
            terraLocs = removeFromArray(terraLocs, thisX, thisY, true);
         } else {
            i--;
         }
         //console.log(i);
         //console.log(terraLocs.length);
      } else {
         needMore++;
      }
   }
   checkMapForErrors();
   console.log("====>>> End of Hills Ranges <<==");
   terraLocs = removeFilled(terraLocs, "terra", "After Hills");

   redrawMap(theMap);
}










function removeFilled(arrayToCheck, typeToCheck, request = null) {

   if (request != null) {
      //          console.log("Checking", request);
      //         console.log(arrayToCheck.length, typeToCheck);
      //        console.log(arrayToCheck);
   }

   for (i = arrayToCheck.length; i >= 0; i--) {
      // for (i = 0; i < arrayToCheck.length; i++) {


      if (arrayToCheck[i] != undefined && arrayToCheck[i][typeToCheck] != null) {

         //           console.log(arrayToCheck[i]);
         arrayToCheck = removeFromArray(arrayToCheck, arrayToCheck[i].x, arrayToCheck[i].y, true);

      }

   }
   return arrayToCheck;
}

/*
  /$$$$$$  /$$$$$$  /$$$$$$  /$$$$$$$ /$$$$$$  /$$$$$$$
 /$$__  $$/$$__  $$/$$__  $$/$$_____//$$__  $$/$$_____/
| $$  \ $| $$  \__| $$  \ $| $$     | $$$$$$$|  $$$$$$ 
| $$  | $| $$     | $$  | $| $$     | $$_____/\____  $$
| $$$$$$$| $$     |  $$$$$$|  $$$$$$|  $$$$$$$/$$$$$$$/
| $$____/|__/      \______/ \_______/\_______|_______/ 
| $$                                                   
| $$                                                   
|__/                                                   
  /$$$$$$ /$$$$$$$$/$$      /$$                        
 /$$__  $| $$_____| $$     | $$                        
| $$  \__| $$     | $$     | $$                        
| $$     | $$$$$  | $$     | $$                        
| $$     | $$__/  | $$     | $$                        
| $$    $| $$     | $$     | $$                        
|  $$$$$$| $$$$$$$| $$$$$$$| $$$$$$$$                  
 \______/|________|________|________/                  
*/


function processCell(location, LocsSet, putTitle, checkFor, checkBiome, putIn) {

   var localX = LocsSet[location].x;
   var localY = LocsSet[location].y;
   var localID = LocsSet[location].id;
   var place = false;
   var which = null;

   if (checkBiome == "any" || theMap[(localX - 1)][localY].biome == checkBiome) {

      if (localX != 0 && theMap[(localX - 1)][localY][putTitle] == checkFor) {
         place = true;
         which = "upper";
      }

      if (localX < (mapHeight - 1) && theMap[(localX + 1)][localY][putTitle] == checkFor) {
         place = true;
         which = "lower";
      }

      if (localY % 2 != 0) {


         // top left of cell
         if (localY != 0 && theMap[localX][(localY - 1)][putTitle] == checkFor) {
            place = true;
            which = "upperLeft";
         }

         if (localY < (mapWidth - 1) && theMap[localX][(localY + 1)][putTitle] == checkFor) {
            place = true;
            which = "upperRight";
         }

         if (localX < (mapHeight - 1) && localY != 0 && theMap[(localX + 1)][(localY - 1)][putTitle] ==
            checkFor) {
            place = true;
            which = "lowerLeft";
         }

         if (localX < (mapHeight - 1) && localY < (mapWidth - 1) && theMap[(localX + 1)][(localY + 1)][putTitle] ==
            checkFor) {
            place = true;
            which = "lowerRight";
         }

      } else {
         if (localX != 0 && localY != 0 && theMap[(localX - 1)][(localY - 1)][putTitle] == checkFor) {
            place = true;
            which = "upperLeft";
         }

         if (localX != 0 && localY < (mapWidth - 1) && theMap[(localX - 1)][(localY + 1)][putTitle] == checkFor) {
            place = true;
            which = "upperRight";
         }

         if (localY != 0 && theMap[localX][(localY - 1)][putTitle] == checkFor) {
            place = true;
            which = "lowerLeft";
         }

         if (localY < (mapWidth - 1) && theMap[localX][(localY + 1)][putTitle] == checkFor) {
            place = true;
            which = "lowerRight";
         }
      }
      //   console.log(place, which);

      if (place && Math.random() > 0.1) {
         //          console.log(which, theMap[localX][localY].id, "to be " + putIn);
         theMap[localX][localY][putTitle] = putIn;
         theMap[localX][localY].locID = location;
         theMap[localX][localY].title = "-" + which;

         LocsSet[location][putTitle] = putIn;

         return true;
      }
      return false;
   }
   return false;
}



function drawLine() {
   // Assumption, 


}

function removeFromArray(arrToFilter, x, y, err) {

   arrToFilter = arrToFilter.filter(function (obj) {
      if (err) {
         if (obj.x == x && obj.y == y) {
            //          console.log("Delete ", obj.id);
         }
      }
      return obj.x != x || obj.y != y;
   });
   return arrToFilter;
}
/**Returns (as a float) a value between min_output and max_output,
     with values increasing at a reduced rate as they move from
     min_input toward max_output.

     Input is the input value.

     Max_input is the maximum acceptable input. Any higher input
     value will be capped to this.

     Max_output is the maximum value returned.

     Min_input is the (optional) minimum input. Default is zero.

     Min_output is the (optional) minimum output. Default is zero.

     Rate determines how quickly the cost increases to achieve
     greater return values. Higher numbers are faster, lower numbers
     are slower. */
function dimval(n, min_in, max_in, min_out, max_out, exponent) {
   // unscale input
   n -= min_in
   n /= max_in - min_in

   n = Math.pow(n, exponent)

   // scale output
   n *= max_out - min_out
   n += min_out
   return n
}

function syntaxHighlight(json) {
   if (typeof json != 'string') {
        json = JSON.stringify(json, undefined, 2);
   }
   json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
   return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
       var cls = 'number';
       if (/^"/.test(match)) {
           if (/:$/.test(match)) {
               cls = 'key';
           } else {
               cls = 'string';
           }
       } else if (/true|false/.test(match)) {
           cls = 'boolean';
       } else if (/null/.test(match)) {
           cls = 'null';
       }
       return '<span class="' + cls + '">' + match + '</span>';
   });
}