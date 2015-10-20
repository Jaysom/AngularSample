
packageApp.service('LastFMService', ['ApiService', function(ApiService) {

	var urlService = 'http://ws.audioscrobbler.com/2.0/';

	this.getSongs = function() {
		var requestParams = {
			method: 'user.getRecentTracks',
			api_key: 'cee5d274646c238f4bb7aee4117727f6',
        	limit: 30,
			user: 'Skarmody21',
			format: 'json'
		}

		return ApiService.requestApi('get', urlService, requestParams);
	}

}]);
    