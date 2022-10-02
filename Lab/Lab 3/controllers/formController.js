app.controller('formController', function ($scope) {
    $scope.teams = ['Real Madrid', 'Barcelona', 'Juventus', 'Chelsea'];
    $scope.citizenships = ['Moldova', 'Germany', 'UK', 'USA'];
    $scope.genders = ['Male', 'Female'];
    $scope.displayedColumns = ['Игрок','Команда', 'Национальность', 'Сколько голов забил'];
    $scope.alreadyInTeam = [
        {name: 'Lionel Messi', team: 'Paris Saint-Germain', citizenship: 'Argentina', goals: 150},
        {name: 'Cristiano Ronaldo', team: 'Manchester United', citizenship: 'Portugal', goals: 300}
    ];
    $scope.player = {
        name: '',
        team: '',
        citizenship: '',
        gender: '',
        married: false,
        age: null,
        salary: null,
        goals: null
    }
    $scope.click = function () {
        $scope.alreadyInTeam.push($scope.player);
        $scope.player = {
            name: '',
            team: '',
            citizenship: '',
            gender: '',
            married: false,
            age: null,
            salary: null,
            goals: null
        }
    }
})