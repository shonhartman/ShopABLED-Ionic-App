function config($stateProvider) {
  $stateProvider
    .state("login", {
      url: "/login",
      abstract: true,
      template: require("./login.html")
    })

    .state("register", {
      url:"/register",
      controller: "RegisterController as registerCtrl",
      template: require("./register.html")
    });

}

export default config;
