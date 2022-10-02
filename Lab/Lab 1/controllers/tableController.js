app.controller('table', function ($scope) {
    $scope.selectedLimit = 8;
    $scope.limit = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    $scope.selectedFilter = 'any';
    $scope.filter = ['any', 'milk', 'meat', 'fish'];
    $scope.priceRange = ['any', '<10', '<50', '<100'];
    $scope.selectedPriceRange = 'any';
    $scope.filterByCategory = function (selected) {
        return function (item) {
            if (selected.trim() !== 'any') {
                return !selected || item.category === selected.trim();
            }
            else {
                return item
            }
        }
    }
    $scope.filterByPrice = function (price) {
        return function (item) {
            if (price.trim() !== 'any') {
                const newPrice = +(price.trim().slice(1));
                return item.price > newPrice;
            }
            else {
                return item;
            }
        }
    }
    $scope.displayedColumns = ['Name', 'Price', 'Category', 'Count'];
    $scope.products = [
        {name: 'chicken meat', price: 10.9, category: 'meat', count: 10},
        {name: 'pork meat', price: 1.10, category: 'meat', count: 8},
        {name: 'salmon', price: 2.6, category: 'fish', count: 7},
        {name: 'sour cream', price: 17.9, category: 'milk', count: 33},
        {name: 'herring', price: 52.6, category: 'fish', count: 7},
        {name: 'corp', price: 102.6, category: 'fish', count: 10},
        {name: 'turkey meat', price: 112.6, category: 'meat', count: 27},
        {name: 'milk', price: 8.6, category: 'milk', count: 76},
    ]
})