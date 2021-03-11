

'use strict';

mstApp.controller('mst05Controller', mstController);

mstController.$inject = ['$timeout','$rootScope','$scope','$http','mstService'];

function mstController($timeout, $rootScope, $scope, $http, mstService){

	$scope.selectMst050 = function(){
		var sok_cd = $scope.blank_check($scope.mst050.sok_cd);
		if(sok_cd && sok_cd.length <5){
			
			sok_cd = $scope.zeroPadding(sok_cd, 4);
			var param = {sok_cd : sok_cd};
			console.log("selectMst050_param : ", param);
			
			mstService.selectMst050(param).then(function(res){
				console.log("selectMst050_res : ", res);
				if(res.result == "true"){
					var d = $scope.blank_check(res.data);
					//data 있음
					if(d){
						$scope.viewData(d);
					}
					//data 없음
					else{
						alert("データがありません");
					}
				}
				
				
			});
			
		}
	}
	
	$scope.blurClickSok = function(){
		var sok_cd = $scope.blank_check($scope.mst050.sok_cd);
		if(sok_cd > 0){
			$scope.selectMst050();
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	////////////////////utility  functions////////////////////
	$scope.blank_check = function(str){
		if(str == null || str == "null"
			   || str == undefined || str == "undefined"
			   || str == '' || str == "" || str.length == 0
			   ){
				return null;
			}else{
				return str;
			}
		}
	
	$scope.zeroPadding = function(n, width) {
		n = $scope.blank_check(n);
		if(n){
			n = '' + n;
			return n.length >= width ? n : new Array(width - n.length + 1)
													 .join('0') + n;
		}else return null;
	}
	
	$scope.ch_str_val = function(id, str, min, max){
		var nStr = $scope.blank_check($scope.cNumeric(str)) == null?null:1*str;
		console.log("nStr : ",nStr)
		if(nStr != null){
			console.log("in");
			if(nStr >= min && nStr <= max){
				$("#" + id).val(""+nStr);
			}
			else{
				alert("範囲以外の数字です。(範囲 : "+min+" ~ "+max+" )");
				$("#" + id).val(null);
			}	
		}
	}
	
	$scope.cNumeric = function(str){
		console.log(str)
		str = "" + str;
		
		if($scope.blank_check(str)){
			str = str.replace(/[^0-9]/g, "");
		}else{
			str = null;
		}
		return str;
	}
	
	$scope.postal_code = function(e){
		var id = e.target.id;
		var str = e.target.value;
		var nStr = '' + $scope.cNumeric(str);
		var aStr = [];
		var jStr = null;
		
		if(nStr != 'null'){
			if(nStr.length >= 3){
				if(e.keyCode != 8){
					aStr.push((nStr.trim().substring(0, 3)));
					aStr.push((nStr.trim().substring(3)));
				
					jStr = [aStr[0], aStr[1]].join('-');
				
					$("#" + id).val(jStr);
				
					console.log("postal_code_nStr : ", nStr);
					console.log("postal_code_aStr : ", aStr);
					console.log("postal_code_jStr : ", jStr);
				}		
			}else{		
				console.log("postal_code_nStr : ", nStr);
				$("#" + id).val(nStr);
			}
		}
	}
};

