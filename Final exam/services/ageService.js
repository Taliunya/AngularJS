var AgeService = angular.module('AgeService', [])
    .service('AgeVerification', function () {
        this.check = function (today, birth) {
            let answer;
             const ageDiff = today.getFullYear() - birth.getFullYear();
             const monthDiff = today.getMonth() - birth.getMonth();
             if (monthDiff < 0) {
                 answer = ageDiff - 1;
             }
             else if (monthDiff === 0) {
                 today.getDay() - birth.getDay() >= 0 ? answer = ageDiff
                     : answer = ageDiff - 1;
             }
             else {
                 answer = ageDiff;
             }
             return answer;
        };
    })