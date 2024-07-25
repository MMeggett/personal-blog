function getPostIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
}

function renderBlogPost() {
    const postId = getPostIdFromUrl();
    const blogs = localStorage.getItem('blogPosts');
    if (!blogs) {
        console.log('No blog posts found.');
        return;
    }

    const blogsArray = JSON.parse(blogs);
    const post = blogsArray[postId];

    if (!post) {
        console.log('Blog post not found.');
        return;
    }

    // Get reference to the div where the post will be displayed
    const blogPostContainer = document.getElementById('blog-post');

    // Create elements for username, title, and content
    const postElement = document.createElement('div');
    postElement.classList.add('blog-post'); // Optional: add a class for styling

    const usernameElement = document.createElement('h3');
    usernameElement.textContent = post.username;

    const titleElement = document.createElement('h2');
    titleElement.textContent = post.title;

    const contentElement = document.createElement('p');
    contentElement.textContent = post.content;

    // Append username, title, and content to post element
    postElement.appendChild(usernameElement);
    postElement.appendChild(titleElement);
    postElement.appendChild(contentElement);

    // Append the post element to the container
    blogPostContainer.appendChild(postElement);
}

document.addEventListener('DOMContentLoaded', renderBlogPost);