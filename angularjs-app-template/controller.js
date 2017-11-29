yam.controller('home', function($scope, yamService) {
    
        $scope.x;
        $scope.y;
        $scope.climateData = {};
        $scope.yabashaCount = 0;
        $scope.yamCount = 0;

        function onSuccess(res) {
            console.log(res);
            $scope.resoult = res.data.water;
            console.log($scope.resoult);
           
            
            
            if ($scope.resoult == true){
                $scope.climateData = "yam"; 
                $scope.yamCount +=1;
            } else {
                $scope.climateData = "yabasah";
                $scope.yabashaCount +=1;
                 
            }
            
            console.log($scope.climateData);
        }

        function onError(res) {
            console.log('error');
            console.log(res);
            $scope.error = res.data;
        }

        $scope.yamYabasha = function() {
            yamService.getYam($scope.x, $scope.y, onSuccess, onError );
        }
    
});