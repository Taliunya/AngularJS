function Home() {
    this.videoSource = 'https://youtu.be/aRQ5uNn8Y5o'
}

angular.module('home', ['ngRoute']).component('home', {
    templateUrl: 'home/home.template.html',
    controller: ['$routeParams', Home]
})