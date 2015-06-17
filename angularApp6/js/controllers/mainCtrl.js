myApp.controller('MainCtrl', [
	'$scope',
	'things',
	function($scope,things){
 
		// bind the $scope.links to the data array in the service
		$scope.links = things.links;
 
		// function for user to add new link
		$scope.addLink = function(){
			if (!$scope.linktitle || $scope.linktitle === '') { return; }
			$scope.links.push({
				link: $scope.linktitle, 
				upvotes: 0,
				comments: []
			});
			$scope.linktitle = '';
		};

		// function to handle upvoting of a link
		$scope.upvoteLink = function(link) {
			link.upvotes += 1;
		};

		// function to handle sorting links by upvotes
		var counter = 0;
		$scope.sortLinks = function(){
			if (counter % 2 == 0) {
				$scope.links.sort(compare);
			}
			else {
				$scope.links.sort(compare).reverse();
			}
			counter++;
		};

		// compare function used inside of sorting function
		var compare = function(a,b){
			if (a.upvotes < b.upvotes) {
					return 1;
				}
			if (a.upvotes > b.upvotes) {
					return -1;
				}
					return 0;
		};

		$scope.deleteLink = function(link) {
			var index = $scope.links.indexOf(link);
			var a = window.confirm("Are you sure you want to delete that link?");
			if (a == true){
				$scope.links.splice(index,1);	
			}
			else {
				return;
			}
		}
	}
]);