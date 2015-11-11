(function() {

var DisplayComponent = ng
  .Component({
    selector: "display"
  })
  .View({
    directives: [ng.NgFor],
    templateUrl: 'tpls/show-properties.html'
  })
  .Class({
    constructor: function () {
      this.myName = "Miguel";
      this.names = ["Aarav", "Martin", "Shannon", "Ariana", "Kai"];
    },
    addFriend: function(friendName) {
      console.log('friend added: ', friendName);
      this.names.push(friendName);
    },
    removeFriend: function(i) {
      console.log('friend removed at: ', i);
      this.names.splice(i, 1);
    }
  });

var AppComponent = ng
  .Component({
    selector: 'my-app',
    directives: [DisplayComponent],
    templateUrl: 'tpls/app.html',
    componentServices: [DisplayComponent.Class]
  })
  .Class({
    constructor: function () { }
  });



document.addEventListener('DOMContentLoaded', function() {
  ng.bootstrap(AppComponent);
});

})();