const user = document.querySelector('#username');
const titleData = document.querySelector('#title');
const contentData = document.querySelector('#content');
const submitBtn = document.querySelector('#submit');

let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

function blogPost(username, title, content) {
    this.username = username;
    this.title = title;
    this.content = content;
    let newPost = {
        username: username,
        title: title,
        content: content
    };
    blogPosts.push(newPost);
    console.log(newPost);
}

function saveData() {
    let userData = user.value;
    let title = titleData.value;
    let content = contentData.value;
    new blogPost(userData, title, content);
}

function savetoArray() {
    console.log(blogPosts);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    console.log(blogPosts);
}

function loadBlogForm() {
    window.location.href = 'blog.html';
}

submitBtn.addEventListener('click', function submitBlogData() {
    saveData();
    savetoArray();
    loadBlogForm();
});