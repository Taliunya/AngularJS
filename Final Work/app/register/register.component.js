
function Register () {
   this.user = {
       name: '',
       password: '',
       repeatedPassword: ''
   }

   this.createAcc = function () {
       user.name = this.user.name;
       user.password = this.user.password;
       window.location.href = '#!/auth'
   }
}

angular.module('register', ['ngRoute'])
    .component('register', {
        templateUrl: 'register/register.html',
        controller: ['$routeParams', Register]
    })