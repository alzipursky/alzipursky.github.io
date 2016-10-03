"use strict";angular.module("alzipurskyApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/home.html"}).when("/about",{templateUrl:"views/about.html"}).when("/projects",{templateUrl:"views/projects.html"}).when("/resume",{templateUrl:"views/resume.html"}).when("/contact",{templateUrl:"views/contact.html"}).otherwise({redirectTo:"/"})}]),angular.module("alzipurskyApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("alzipurskyApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("alzipurskyApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="container text-center jumbotron"> <h1 class="fade-in">Coming Soon</h1> </div>'),a.put("views/contact.html",'<div class="container text-center jumbotron"> <h1 class="fade-in">Coming Soon</h1> </div>'),a.put("views/home.html",'<div class="container text-center jumbotron"> <h1 class="fade-in">Aaron Zipursky</h1> <h2 class="fade-in">Student. Developer. Visionary.</h2> <a class="fade-in" href="http://www.linkedin.com/in/AaronZipursky"> <img src="images/linkedin-official.65c763df.png" alt="HTML tutorial" style="width:42px;height:42px;border:0"> </a> <a class="fade-in" href="mailto:zipursky@u.northwestern.edu"> <img src="images/mail.abd9e8de.png" alt="HTML tutorial" style="width:42px;height:42px;border:0"> </a> </div>'),a.put("views/main.html",'<div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> <img src="images/yeoman.8cb970fb.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>'),a.put("views/projects.html",'<div class="container text-center jumbotron"> <h1 class="fade-in">Coming Soon</h1> </div>'),a.put("views/resume.html",'<object class="container text-center" width="100%" height="100%" data="../files/Resume.pdf"></object>')}]);