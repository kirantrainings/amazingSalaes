//amazaing Sales 
// requires login so login module included as a dependency
// requires register ==>include register module as a dependency

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
