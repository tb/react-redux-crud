var Joi = require('joi');

var categoryBody = {
  name: Joi.string().min(2).required()
};

var postBody = {
  title: Joi.string().min(3).max(80).required(),
  body: Joi.string().required()
};

module.exports = {
  category: {
    body: categoryBody
  },
  post: {
    body: postBody
  },
};
