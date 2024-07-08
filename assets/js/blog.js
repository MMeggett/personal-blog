document.addEventListener('DOMContentLoaded', function () {
    const modeSwitch = document.querySelector('#modeSwitch');

    // Check if the user has a preference for dark mode using localStorage
    const currentMode = localStorage.getItem('mode');
    if (currentMode) {
        document.body.classList.toggle('dark-mode', currentMode === 'dark');
        modeSwitch.checked = currentMode === 'dark';
    }

    // Event listener for mode switch change
    modeSwitch.addEventListener('change', function () {
        if (modeSwitch.checked) {
            document.body.classList.add('dark-mode');
            localStorage.setItem('mode', 'dark');
        } else {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('mode', 'light');
        }
    });
});

function goBack() {
    window.location.href = 'index.html';
}

// Function to render blog posts
function renderBlogPosts() {
    const blogs = localStorage.getItem('blogPosts');
    console.log(blogs)
    const blogsArray = Array.from(blogs);
    // Get reference to the div where posts will be displayed
    const blogPostsContainer = document.getElementById('blog-posts');

    // Clear any existing content
    blogPostsContainer.innerHTML = '';

    // Iterate through each blog post in the array
    blogsArray.forEach(post => {
        console.log(post)
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
        blogPostsContainer.appendChild(postElement);
    });
}