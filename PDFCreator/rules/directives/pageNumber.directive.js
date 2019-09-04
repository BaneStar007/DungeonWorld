app.directive('pageNumberDir', function(){
   return {
   templateUrl: './directives/pageNumber.directive.html',
   scope: {
      config: '=',
      data: '=',
      number: '='
   },
   controllerAs: '$ctrl',
   link: function(scope, element, attrs){
      var ctrl = this;

      posChange = scope.number * 36;
      if (posChange < 0) posChange = 0;
      console.log(ctrl);
      console.log(ctrl.number);
     
      console.log(element);

      ctrl.cog1pos = "left: "+ ctrl.number +"px; top: 10px; transform: rotate("+ posChange +"deg)";
      ctrl.cog2pos = "left: 10px; top: "+ scope.number +"px; transform: rotate("+ posChange +"deg)";
      ctrl.cog3pos = "left: "+ element.number +"px; top: "+ element.number +"px; transform: rotate("+ posChange +"deg)";
      ctrl.cog4pos = "left: 10px; top: 10px; transform: rotate("+ posChange +"deg)";
      ctrl.cog5pos = "left: 10px; top: "+ element.number +"px; transform: rotate("+ posChange +"deg)";
      ctrl.cog6pos = "left: "+ (element.number+1) +"px; top: "+ element.number +"px; transform: rotate("+ posChange +"deg)";
      

   }
   
   }
});