'use strict';
 
 /**
 	App module dependencies
 */
var packageApp = angular.module('lastfm-app', []);
 
packageApp.controller('MusicWorldController', ['$scope', 'LastFMService', function(scope, LastFMService) {

	scope.songs = [];

	scope.loadCtrl = function() {
		LastFMService.getSongs()
			.success(_handlerSongsSuccess)
			.error(_handlerSongsError);	
	}
	
	scope.loadCount = function(){
		LastFMService.getCount(_handlerCountSuccess)
		.success(_handlerCountSuccess)
		.error();
	}
	
	scope.init = function(){
		scope.loadCtrl();
		scope.loadCount();
	}

	function _handlerSongsSuccess(data) {
		scope.songs = data.recenttracks.track;
	}	

	function _handlerSongsError(data, status) {
		console.log(data || "Request failed");
		console.log(status);
	}
	
	function _handlerCountSuccess(data) {
		scope.artists = data.weeklytrackchart.track;
	}	

	function _handlerCountError(data, status) {
		console.log(data || "Request failed");
		console.log(status);
	}
	
}]);
