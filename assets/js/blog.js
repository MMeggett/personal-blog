function renderBlogPosts() {
    const blogs = localStorage.getItem('blogPosts');
    if (!blogs) {
        console.log('No blog posts found.');
        return;
    }

    const blogsArray = JSON.parse(blogs);

    // Get reference to the div where posts will be displayed
    const blogPostsContainer = document.getElementById('blog-posts');

    // Clear any existing content
    blogPostsContainer.innerHTML = '';

    // Iterate through each blog post in the array
    blogsArray.forEach((post, index) => {
        console.log(post);
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

        // Add click event to redirect to the post page
        postElement.addEventListener('click', () => {
            window.location.href = `post.html?id=${index}`;
        });

        // Append the post element to the container
        blogPostsContainer.appendChild(postElement);
    });
}

document.addEventListener('DOMContentLoaded', renderBlogPosts);

function goBack() {
    window.location.href = 'index.html';
}

