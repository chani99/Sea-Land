yam.service('yamService', function($http) {
    var debugMode = true;
    
    this.getYam = function(x, y, onSuccess, onError) {

        if (debugMode) {
            setTimeout(function() {
                const mockObj = {
                    data: {
                        "lat": x,
                        "lon": y,
                        "water": Math.ceil(Math.random()*10) % 2 == 0
                    }
                }

                onSuccess(mockObj);
            }, 1 * 1000);
        } else {

                    $http({
                        url: 'https://api.onwater.io/api/v1/results/'+x+','+y,
                        method: 'GET',
                        params: {
                            access_token: '4zeVt4uqSazyxgGoR-ss'
                
                        }
                    }).then(onSuccess, onError);
                }
            
        }
});