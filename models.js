Menus = new Mongo.Collection('menus');

Menus.allow({
	insert: function(userId, post){
		return true;
	}
})


Orders = new Mongo.Collection('orders');


// Items.allow({
// 	insert: function(userId, post){
// 		return true;
// 	}
// });

HTTP.publish({collection: Menus}, function(data){
	return Menus.find({});
});

HTTP.publish({collection: Orders}, function(data){
	return Menus.find({});
});