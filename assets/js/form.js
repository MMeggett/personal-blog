const user = document.querySelector('#username');
const titleData = document.querySelector('#title');
const contentData = document.querySelector('#content');
const submitBtn = document.querySelector('#submit');

let userData = localStorage.getItem('userData');
let title = localStorage.getItem('title');
let content = localStorage.getItem('content')

let blogPosts = [];
// export { blogPosts };

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
    console.log(newPost)
}

user.textcontent = userData;
titleData.textcontent = title;
contentData.textcontent = content;

function saveData() {
    let userData = user.value
    let title = titleData.value
    let content = contentData.value;
    const data = new blogPost(userData, title, content);
    console.log(data)
}
function savetoArray() {
    console.log(blogPosts);

    // blogPosts.push(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    console.log(blogPosts)
}

function loadBlogForm() {
    window.location.href = 'blog.html';
}
submitBtn.addEventListener('click', function submitBlogData() {
    saveData();
    savetoArray();
    // loadBlogForm();
});