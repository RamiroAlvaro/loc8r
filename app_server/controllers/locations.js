/* GET home page */

module.exports.homelist = function(req, res, next){
  res.render('locations-list', { 
  	title: 'Loc8r - find a place to work with wifi',
  	pageHeader: {
  		title: 'Loc8r',
  		strapline: 'Find places to work with wifi near you!'
  	},
  	sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
  	locations: [{
  		name: 'Starcups',
  		address: '125 High Street, Reading, RG6 1PS',
  		rating: 3,
  		facilities: ['Hot drinks', 'Food', 'Premiun wifi'],
  		distance: '100m'
  	},{
  		name: 'Cafe Hero',
  		address: '120 High Street, Reading, RG6 1PS',
  		rating: 4,
  		facilities: ['Hot drinks', 'Premiun wifi'],
  		distance: '200m'
  	}]
  });
};

/* GET Location info page */

module.exports.locationInfo = function(req, res, next){
  res.render('location-info', { title: 'location info'});
};

/* GET Add review page */

module.exports.addReview = function(req, res, next){
  res.render('location-review-form', { title: 'Add review'});
};