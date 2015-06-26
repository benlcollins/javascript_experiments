uplearnApp.factory('links',[function(){
	var obj = {
		links: [
			{ 
				title: "Get bootstrap", 
				url: "http://getbootstrap.com/", 
				body: "This is a great resource for front-end work",
				comments: [
						{ author: "Joe Bloggs", body: "This is a great resource." },
						{ author: "Paul Smith", body: "Thanks for sharing!" }
				],
				upvotes: 0
			},
			{ 
				title: "GitHub", 
				url: "https://github.com/", 
				body: "This is a great resource for GitHub",
				comments: [
						{ author: "Joe Bloggs", body: "Use this on a daily basis." }
				],
				upvotes: 0
			},
			{ 
				title: "Twitter", 
				url: "https://twitter.com/", 
				body: "This is Twitter", 
				comments: [],
				upvotes: 0}
		]
	};
	return obj;
}]);