var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.reviewsCreate = function(req, res){
    sendJsonResponse(res, 200, {"status": "success post"});
};
module.exports.reviewsReadOne = function(req, res){
    sendJsonResponse(res, 200, {"status": "success get"});
};
module.exports.reviewsUpdateOne = function(req, res){
    sendJsonResponse(res, 200, {"status": "success put"});
};
module.exports.reviewsDeleteOne = function(req, res){
    sendJsonResponse(res, 200, {"status": "success delete"});
};