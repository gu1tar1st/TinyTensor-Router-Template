//BOOTCAMP
angular.module('sparkleApp', [])
.controller('SparkleController', ['$scope', '$interval', function($scope, $interval) {
    const numSparkles = 7;
    const imageUrls = Array.from({ length: 19 }, (_, i) => `/router-page-meshes/${i + 1}.png`);

    function generateRandomStyle() {
        const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];
        const randomX = Math.random() * 90; // 0% to 90%
        const randomY = Math.random() * 90; // 0% to 90%
        const randomOpacity = Math.random() * 0.5 + 0.5;

        return {
            backgroundImage: `url(${randomImageUrl})`,
            left: `${randomX}%`,
            top: `${randomY}%`,
            right: `${randomX}%`,
            bottom: `${randomY}%`,
            width: `${7}vw`,
            height: `${7}vw`,
            opacity: randomOpacity
        };
    }

    function initializeSparkles() {
        $scope.sparkles = [];
        for (let i = 0; i < numSparkles; i++) {
            $scope.sparkles.push({
                style: generateRandomStyle()
            });
        }
    }

    function updateSparkles() {
        $scope.sparkles.forEach(sparkle => {
            sparkle.style = generateRandomStyle();
        });
    }

    initializeSparkles();

    $interval(updateSparkles, 2000);
}]);

document.addEventListener('DOMContentLoaded', function() {
    const groups = document.querySelectorAll('.square-group');
    let currentGroup = 0;

    function changeColor() {
        groups.forEach((group, index) => {
            const squares = group.children;
            for (let square of squares) {
                square.style.backgroundColor = index === currentGroup ? '#fff' : 'transparent';
            }
        });
        currentGroup = (currentGroup + 1) % groups.length;
    }

    setInterval(changeColor, 100); // Change color every 2 seconds
});
