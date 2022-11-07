function Contact() {
    this.contact = {
        name: '',
        surname: '',
        gender: '',
        date: '',
        country: '',
        address: '',
        email: '',
        flag : false
    };

    this.reset = function () {
        this.contact = {
            name: '',
            surname: '',
            gender: '',
            date: '',
            country: '',
            address: '',
            email: '',
            flag : false
        };
    }

    this.submit = function () {
        console.log(this.contact);
        this.reset();
    }
}



angular.module('contactus', ['ngRoute']).component('contactUs', {
    templateUrl: 'contactus/contactus.template.html',
    controller: ['$routeParams', Contact]
})