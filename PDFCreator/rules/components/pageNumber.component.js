app.component('pageNumber', {
   templateUrl: './components/pageNumber.component.html',
   bindings: {
      config: '=',
      data: '=',
      number: '<'
   },
   controller: function(){
      var ctrl = this;
      var posChange = 0;
      var positionX = [50,10,15,20,25,30];
      var positionY = [50,50,55,50,55,50];
      var sizes = [75,20,30,40,50,60];
      var speeds = [360,720,360,180,90,45];
      ctrl.ticks = [0,1,2,3,4,5,6,7,8,9];
      ctrl.cogs = [{},{},{},{},{},{}];
      
      ctrl.localconfig = {thick : 12};
      console.log(ctrl.config);

      this.$onInit = function() {
         ctrl.clockface = { str: "width:"+ ctrl.config.size +"px; height:"+ ctrl.config.size +"px ; " };
         ctrl.clockface2 = { str: "width:"+ (ctrl.config.size+ctrl.localconfig.thick*2) +"px; height:"+ (ctrl.config.size+ctrl.localconfig.thick*2) +"px ; " };
        
      posChange = ctrl.number * 36;
      if (posChange < 0) posChange = 0;   
      for (let j=0; j<ctrl.ticks.length; j++) {
console.log((360/ctrl.ticks.length)*j);


         ctrl.ticks[j] = { str: " transform: rotate("+((360/ctrl.ticks.length)*j)+"deg); "}
      }
      

      }
      
     
      this.$onChanges = function(changes) {
         // Config .size = width, height, etc, we can't trust to css.
        
ctrl.hand1 = { str: " transform: rotate("+((360/ctrl.ticks.length)*Math.round(ctrl.number/1))+"deg); "};
ctrl.hand2 = { str: " transform: rotate("+((360/(ctrl.ticks.length))*Math.round(ctrl.number/10))+"deg); "};

ctrl.hand3 = { str: " transform: rotate("+((360/(ctrl.ticks.length) )*Math.round(ctrl.number/100))+"deg); "};
ctrl.hand4 = { str: " transform: rotate("+((360/(ctrl.ticks.length) )*Math.round(ctrl.number/1000))+"deg); "};

      /*   for (let i=0; i<6; i++) {
           
            ctrl.cogs[i].width=Math.round((ctrl.config.width/100)*sizes[i]);
            ctrl.cogs[i].height=Math.round((ctrl.config.height/100)*sizes[i]);
            ctrl.cogs[i].top=Math.round((ctrl.config.width/100)*positionX[i]);
            ctrl.cogs[i].left=Math.round((ctrl.config.height/100)*positionY[i]);
            ctrl.cogs[i].speed=speeds[i];
            
            console.log(ctrl.cogs);
                     }
        
         for (let i=0; i<6; i++) {
            ctrl.cogs[i].str="width: "+ ctrl.cogs[i].width +"px; height: "+ ctrl.cogs[i].height +"px; top: "+ ctrl.cogs[i].top +"px; left: "+ ctrl.cogs[i].left +"px;  transform: rotate("+ (Math.round((ctrl.number /100) *ctrl.cogs[i].speed)) +"deg)";
         }
*/
        
      }
   }
   
   
});