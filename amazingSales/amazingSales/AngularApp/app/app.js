//amazaing Sales 
// requires login so login module included as a dependency
// requires register ==>include register module as a dependency
//amazingSales is dependent
//"amazingSales home and login are service or objects
angular.module("amazingSales",
    [
"amazingSales.home",
"amazingSales.login",
"amazingSales.register",
"amazingSales.cart"
]);

angular.module("amazingSales")
       .config(function () {
           console.log("i am the Main module");
       });
