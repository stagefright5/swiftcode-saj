var app = angular.module('chatApp', ['ngMaterial']);

app.controller('chatController', function ($scope, $sce) {
        $scope.messages=[
        {
            'sender':'USER',
            'text':'hello',
            'time':'10:01 AM'
        },
        {
            'sender':'BOT',
            'text':'What news do you want?',
            'time':'10:01 AM'
        },
        {
            'sender':'USER',
            'text':'news about nothing',
            'time':'10:02 AM'
        }]
});
