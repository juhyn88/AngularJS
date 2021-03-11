var mstApp = angular.module("mstApp", []);

mstApp.factory("mstService", function($http){
	
	var service = {
		selectMst050 : selectMst050Ajax	
		
		
	};
	
	return service;
	
	function selectMst050Ajax(param){
		return $http.post("/mst/selectMst050Ajax",param)
					.then(handleSuccess, handleError);
	}
	
	// private functions
	function handleSuccess(res){
		return res.data;
	}
	
	function handleError(error){
		return function(){
			return {success: false, message: error};
		};
	}	
});