const dummy = (blog) => {
  return 1;
};
const totalLikes = (publications) => {
  let total = 0;
  publications.map((post) => {
    total += post.likes;
  });
  return total;
};

const favoriteBlog = (publications) => {
  let likes = 0;
  let blog;
  publications.map((post) => {
    console.log(post);
    if (post.likes > likes) {
      likes = post.likes;
      blog = {
        title: post.title,
        author: post.author,
        likes: post.likes,
      };
    }
  });
  return blog;
};
module.exports = { dummy, totalLikes, favoriteBlog };
