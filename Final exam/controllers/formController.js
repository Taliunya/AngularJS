app.controller('testFormController', function ($scope, AgeVerification) {
    $scope.today = new Date();
    $scope.user = {
        name: '',
        surname: '',
        birth: '',
        age: null,
        groupNumber: null,
        isGood: false,
        isAdded: false
    }
    $scope.addChild = function () {
        $scope.user.isAdded = true;

    }
    $scope.findAge = function () {
        $scope.user.age = AgeVerification.check($scope.today, $scope.user.birth);
        $scope.whichGroup();
    }

    $scope.whichGroup = function () {

        if ($scope.user.age >= 6 && $scope.user.age<=7){
            $scope.user.groupNumber = 3;
            $scope.user.isGood = true;
        }

        if($scope.user.age>7) {
            $scope.user.groupNumber = 4;
            $scope.user.isGood = false;
        }

            if ($scope.user.age >= 4 && $scope.user.age<=5) {
                $scope.user.groupNumber = 2;
                $scope.user.isGood = true;
            }


            if ($scope.user.age >= 2 && $scope.user.age<=3) {
                $scope.user.groupNumber = 1;
                $scope.user.isGood = true;
            }
    }
})