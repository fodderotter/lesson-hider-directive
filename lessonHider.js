app.directive("lessonHiderDirective", function() {
	return {
		scope: {
			lesson:"=",
			dayAlert: "&"
		},
		restrict:"E",
		templateUrl:"lessonHider.html",
		controller: function($scope,  lessonService) {
			$scope.getSchedule = lessonService.getSchedule();
		},
		link:function(scope, element, attr) {
			scope.getSchedule.then(function(response) {
				scope.schedule = response.data;
				scope.schedule.forEach(function(scheduleDay) {
					if(scheduleDay.lesson === scope.lesson) {
						scope.lessonDay = scheduleDay.weekday;
						element.css("text-decoration", "line-through");
						return;
					}
				});
			});
		}
	}
});