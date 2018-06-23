var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}


app.controller('navv' , ['$scope' , '$http' , '$window' , function($scope , $http , $window){

	//$scope.show = false;
	console.log('hi')
	$scope.go = function(where){
		$window.location.href = where;
	}


	$http({
		method: 'get',
		url: '/boolean'
	}).then(function(res){
		console.log(res);
		console.log(res.data.show);
		$scope.show = res.data.show;
		$scope.userId = '/profile/' + res.data.userId;
		$scope.userImg = res.data.userImage;
		$scope.userName = res.data.userNname;

	} , function(err){
		console.log(err);
	});






	// hover
	$scope.classStyleLogout = {'color':'white' , 'text-shadow':'0 0px 0'};
	$scope.classStyleUpload = {'color':'white' , 'text-shadow':'0 0px 0'};
	$scope.classStyleSignin = {'color':'white' , 'text-shadow':'0 0px 0'};
	$scope.classStyleSignup = {'color':'white' , 'text-shadow':'0 0px 0'};
	$scope.userNamee = {'color':'white' , 'text-shadow':'0 0px 0'};

	$scope.classStyleProfile = {'border-radius': '50px'};
	$scope.classStyleYourppt = 'abeer/icons/cvb.png';
	$scope.classStyleYourpptImg = 'abeer/icons/qwe.png';

	$scope.signinImg = 'abeer/icons/signinnw.png';
	$scope.signupImg = 'abeer/icons/signupw.png';
	$scope.logoutImg = 'abeer/icons/logout5.png';
	$scope.uploadImg = 'abeer/icons/uploadd.png';




	$scope.mouseLeaveNav = function(){
		$scope.classStyleLogout = {'color':'white' , 'text-shadow':'0 0px 0'};
		$scope.classStyleUpload = {'color':'white' , 'text-shadow':'0 0px 0'};
		$scope.classStyleSignin = {'color':'white' , 'text-shadow':'0 0px 0'};
		$scope.classStyleSignup = {'color':'white' , 'text-shadow':'0 0px 0'};
		$scope.userNamee = {'color':'white' , 'text-shadow':'0 0px 0'};
		$scope.classStyleProfile = {'border-radius': '50px'};
		$scope.classStyleYourppt = 'abeer/icons/cvb.png';
		$scope.classStyleYourpptImg = 'abeer/icons/qwe.png';

		$scope.signinImg = 'abeer/icons/signinnw.png';
		$scope.signupImg = 'abeer/icons/signupw.png';
		$scope.logoutImg = 'abeer/icons/logout5w.png';
		$scope.uploadImg = 'abeer/icons/uploaddw.png';
	}


	$scope.mouseOverNav = function(str){
		if(str == 'Logout'){
			$scope.classStyleLogout = {color:'#b3b3b3' , 'text-shadow':'0 0px 0'};
			$scope.logoutImg = 'abeer/icons/logout5.png';
		}
		else if(str == 'Upload'){
			$scope.classStyleUpload = {color:'#b3b3b3' , 'text-shadow':'0 0px 0'};
			$scope.uploadImg = 'abeer/icons/uploadd.png';
		}
		else if(str == 'Signin'){
			$scope.classStyleSignin = {color:'#b3b3b3' , 'text-shadow':'0 0px 0'};
			$scope.signinImg = 'abeer/icons/signinn.png';
		}
		else if(str == 'Signup'){
			$scope.classStyleSignup = {color:'#b3b3b3' , 'text-shadow':'0 0px 0'};
			$scope.signupImg = 'abeer/icons/signup.png';
		}
		else if(str == 'Profile'){
			$scope.classStyleProfile = {'border-radius': '0px'};
			$scope.userNamee = {'color':'#b3b3b3' , 'text-shadow':'0 0px 0'};
		}
		else if(str == 'Yourppt'){
			$scope.classStyleYourppt = 'abeer/icons/cvb2.png';
			$scope.classStyleYourpptImg = 'abeer/icons/qwe2.png';
		}		
	}

}]);

app.directive('myNavv' , function(){
	return{
		controller: 'navv' ,
		templateUrl: 'abeer/navv-directive-c.html'
	};
});

