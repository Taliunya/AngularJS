function ProductsList () {
    this.selectedFilter = 'Все';
    
    this.displayedColumns = ['Название', 'Категория', 'Цена', 'Количество', 'Действие', 'Действие'];
    this.categoryFilter = ['Все', 'Мучное', 'Молочка', 'Рыба', 'Мясо', 'Овощи', 'Фрукты'];
    this.possibleCategories = ['Мучное', 'Молочка', 'Рыба', 'Мясо', 'Овощи', 'Фрукты'];
    this.searchString = '';
    this.products = [
        {id: 0, name: 'Хлеб', category: 'Мучное', price: 15, count: 3, isBought: false},
        {id: 1, name: 'Молоко', category: 'Молочка', price: 7, count: 1, isBought: false},
        {id: 2, name: 'Масло', category: 'Молочка', price: 20, count: 5, isBought: false},
        {id: 3, name: 'Сыр', category: 'Молочка', price: 30, count: 8, isBought: false},
    ];
    this.newProduct = {
        id: this.products.length,
        name: '',
        category: '',
        price: null,
        count: null,
        isBought: false
    };

    this.boughtProducts = [];
    this.totalPrice = 0;
    this.totalCount = 0;
    this.deleteProduct = function (product) {
        this.products = this.products.filter((item) => item.id !== product.id);
    }
    this.filterByCategory = function (selectedFilter) {
        return function (item) {
            if (selectedFilter.trim() !== 'Все') {
                return !selectedFilter || item.category === selectedFilter.trim();
            }
            else {
                return item
            }
        }
    }
    this.buyProduct = function (product) {
        this.boughtProducts.push(product);
        product.isBought = true;
        this.totalPrice += product.price * product.count;
        this.totalCount += product.count;
    }
    this.searchByName = function (searchString) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products.name.contains(searchString.trim())) {
                newArray.push(this.products[i]);
            }
        }

    }
    this.addProduct = function () {
        this.products.push(this.newProduct);
        this.newProduct = {
            id: this.products.length,
            name: '',
            category: '',
            price: null,
            count: null,
            isBought: false
        };
    }
}

angular.module('products', ['ngRoute']).component('products', {
    templateUrl: 'products/products.template.html',
    controller: ['$routeParams', ProductsList]
})