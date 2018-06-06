# 禁止模板缓存
   $templateCache.remove(toState.templateUrl);  
   案例1:   
       angular.module("com.gzh.CarClubPc").run(function ($rootScope, $templateCache) {  
             $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {  
                 $templateCache.remove(toState.templateUrl);  
             });  
       });       