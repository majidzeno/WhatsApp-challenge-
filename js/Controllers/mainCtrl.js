angular.module("WhatsApp",[])
       .controller('MainCtrl',[function (){
         var self = this;
         self.friends = [
           {name : 'Majid' , image :'F:/Programming/Challenges/Whatsapp/images/avatar.png' , lastMsg : 'okay, i will' , time : new Date().getTime() },
           {name : 'Majid' , image :'F:/Programming/Challenges/Whatsapp/images/avatar.png' , lastMsg : 'okay, i will' , time : new Date().getTime() },
           {name : 'Majid' , image :'F:/Programming/Challenges/Whatsapp/images/avatar.png' , lastMsg : 'okay, i will' , time : new Date().getTime() },
           {name : 'Majid' , image :'F:/Programming/Challenges/Whatsapp/images/avatar.png' , lastMsg : 'okay, i will' , time : new Date().getTime() },
           {name : 'Majid' , image :'F:/Programming/Challenges/Whatsapp/images/avatar.png' , lastMsg : 'okay, i will' , time : new Date().getTime() }
    ];
}]);

    //  .config(['$routeProvider', function($routeProvider) {
    //      $routeProvider.when('#chat_view', {
    //     templateUrl: 'F:/Programming/Challenges/Whatsapp/app/chat-view.html',
    //     controller: 'MainCtrl'
    //   })
    //   }]);
