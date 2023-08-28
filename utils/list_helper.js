const dummy = (blogs) => {
    return 1;
}

const totalLikes = (blogs) => {
    return blogs.reduce((a, { likes }) => a + likes, 0);
}

const favoriteBlog = (blogs) => {
    let favorite = null;

    for (const blog of blogs) {
        if (favorite === null || blog.likes >= favorite.likes) {
            favorite = blog;
        }
    }

    return {
        title: favorite.title,
        author: favorite.author,
        likes: favorite.likes
    };
}

const mostBlogs = (blogs) => {
    let mostBlogs = [];

    for (const blog of blogs) {
        if (mostBlogs[blog.author] == undefined) {
            mostBlogs[blog.author] = 1;
        } else {
            mostBlogs[blog.author] += 1;
        }
    }

    let maxValue = 0;
    let maxKey = '';
    for (const key in mostBlogs) {
        if (mostBlogs[key] > maxValue) {
          maxValue = mostBlogs[key];
          maxKey = key;
        }
      }
      

    return {
        author: maxKey,
        blogs: maxValue
    }
}

const mostLikes = (blogs) => {
    let mostBlogs = [];

    for (const blog of blogs) {
        if (mostBlogs[blog.author] == undefined) {
            mostBlogs[blog.author] = blog.likes;
        } else {
            mostBlogs[blog.author] += blog.likes;
        }
    }

    let maxValue = 0;
    let maxKey = '';
    for (const key in mostBlogs) {
        if (mostBlogs[key] > maxValue) {
          maxValue = mostBlogs[key];
          maxKey = key;
        }
      }
      

    return {
        author: maxKey,
        likes: maxValue
    }
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}