
function Authetnification () {
    this.user = {
        name: '',
        password: ''
    };
    this.isDataIncorrect = false;
    this.login = function () {
        if (this.user.name !== user.name ||
            this.user.password !== user.password) {
            this.isDataIncorrect = true;
            this.user = {
                name: '',
                password: ''
            };
        }
        else {
            window.location.href = '#!/home'
        }
    }
}



angular.module('authentication', ['ngRoute']).component('authentication', {
    templateUrl: 'authentication/authentication.html',
    controller: ['$routeParams', Authetnification]
})