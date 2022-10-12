function Header($mdDialog) {
    this.showPurchases = function (ev) {
        let confirm = $mdDialog.confirm()
            .title('Вы хотите покинуть сайт?')
            .textContent('Вся ваша активность исчезнет!')
            .ariaLabel('Lucky day')
            .targetEvent(ev)
            .ok('Да, я хочу выйти')
            .cancel('Нет, я продолжу покупки');

        $mdDialog.show(confirm).then(function () {
            //Да
            window.location.href = '#!/auth'
        }, function () {
        });
    }
}

angular.module('header', ['ngMaterial']).component('headerList', {
    templateUrl: 'header/header.html',
    controller: ['$mdDialog', Header]
})