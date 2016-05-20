var faker = require('faker');

module.exports = function() {
  var data = {
    posts: []
  };

  // Create posts
  for (var i = 1; i <= 10; i++) {
    data.posts.push({
      id: i,
      title: faker.lorem.sentence().slice(0,-1),
      body: faker.lorem.paragraphs()
    });
  }

  return data;
}();