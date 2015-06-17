// setup factory for data
myApp.factory('things', [function(){
	var service = {
 		links: [
 			// some seed data to see what's going on
			{ link: "https://www.codeschool.com/courses/shaping-up-with-angular-js/",
				upvotes: 5,
				comments: [
					{author: 'Joe Bloggs', body: 'Great link!', timestamp: 1288323623006},
					{author: 'Jenny Smith', body: 'Thanks for sharing!', timestamp: 1288323623006}
				] 
			},
			{ link: "https://www.railstutorial.org/book",
				upvotes: 3,
				comments: [
					{author: 'Joe Bloggs', body: 'Magnificent!', timestamp: 1288323623006},
					{author: 'Jenny Smith', body: 'Thanks for sharing!', timestamp: 1288323623006},
					{author: 'Anna Smith', body: 'Official docs are best', timestamp: 1288323623006}
				] 
			}
		]
 	};
 	return service;
}]);