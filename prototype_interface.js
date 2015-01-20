if (Meteor.isClient) {
  Meteor.subscribe('menus');
  Meteor.subscribe('orders');

  Template.body.helpers({
    menus: function(){
      return Menus.find();
    },
    orders: function(){
      return Orders.find();
    }
  });

  Template.body.events({
    'submit form.menuForm': function(e) {
      e.preventDefault();

      var new_menu = {
        name: $(e.target).find('[name=name]').val(),
        price: $(e.target).find('[name=price]').val()
      }

      Menus.insert(new_menu);
    },
    'submit form.orderForm': function(e) {

      e.preventDefault();

      var new_order = {
        name: $(e.target).find('[name=name]').val(),
        quantity: $(e.target).find('[name=quantity]').val()
      }

      Orders.insert(new_order);
    }
  })

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    Meteor.publish("menus", function(){
      return Menus.find();
    });

    Meteor.publish("orders", function(){
      return Orders.find();
    });
  });
}

