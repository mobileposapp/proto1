angular.module('BlankApp', ['ngMaterial', 'ngMessages', 'material.svgAssetsCache', 'ui.router']);
angular.module('BlankApp').config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('tab1', {
            name: 'tab1',
            url: '/tab1',
            template: '<md-button class="md-raised">Button</md-button>'
        })

        .state('tab2', {
            name: 'tab2',
            url: '/tab2',
            template: '<md-button class="md-raised md-primary">Primary</md-button>'
        })

        .state('tab3', {
            name: 'tab3',
            url: '/tab3',
            template: '<div class="tab tab3"><p>Cheese and biscuits stinking bishop jarlsberg. Boursin melted cheese emmental cheeseburger cheese slices mozzarella cream cheese say cheese. Macaroni cheese fondue mozzarella cheese strings cheese triangles when the cheese comes out everybody\'s happy cheese on toast croque monsieur. Stinking bishop rubber cheese when the cheese comes out everybody\'s happy paneer cheesy feet.</p></div>'
        })

        .state('tab4', {
            name: 'tab4',
            url: '/tab4',
            template: '<div class="tab tab4"><p>Bocconcini hard cheese stinking bishop. Cheesecake gouda cheese and biscuits red leicester airedale cheeseburger say cheese pecorino. St. agur blue cheese cheese triangles emmental pecorino monterey jack cut the cheese emmental cheese slices. Manchego cow cheeseburger airedale who moved my cheese cottage cheese airedale feta. Parmesan.</p></div>'
        });
});

/*------------------------------------------------------------------------------------------*/
angular.module('BlankApp').controller('AppCtrl', function ($scope, $timeout, $mdSidenav) {
    $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.items = [];

    for (var i = 0; i < 20; i++) {
        $scope.items.push('Product Category ' + i);
    }

    function buildToggler(componentId) {
        return function () {
            $mdSidenav(componentId).toggle();
        };
    }
});
/*------------------------------------------------------------------------------------------*/
