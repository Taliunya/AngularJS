app.controller('helloWorld', function ($scope) {
    $scope.inputValue = '----';
    $scope.inputDisabled = true;
    $scope.switchDisabled = function () {
        $scope.inputDisabled = false;
        $scope.inputValue = '';
    }
})