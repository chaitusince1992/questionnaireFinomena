mainApp.directive('scopeCategoryItemsList', function () {
    return function(scope, elements, attributes) {
        if(scope.$first) {
//            console.log(document.getElementsByClassName("category-item")[0]);
            var categoryItem = document.getElementsByClassName("category-item")[0];
            categoryItem.expandStatus = true;
            categoryItem.children[1].style.height = 'initial';
            categoryItem.children[0].classList.add("category-name-container-expand");
        }
    }
});
