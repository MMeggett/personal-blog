const user = document.querySelector('#username');
const titleData = document.querySelector('#title');
const contentData = document.querySelector('#content');
const submitBtn = document.querySelector('#submit');

let userData = localStorage.getItem('userData');
let title = localStorage.getItem('title');
let content = localStorage.getItem('content')

let blogPosts = [
    {
        username: '',
        title: '',
        content: '' 
    }]

user.textcontent = userData;
titleData.textcontent = title;
contentData.textcontent = content;

// let i = localStorage.getItem('i');
// i.value = '0';

// let blogName = blogPosts[i].username;
// let blogTitle = blogPosts[i].title;
// let blogContent = blogPosts[i].content;

function saveUserName() {
    let userData = user.value
    user.textcontent = userData;
    // blogName = userData
    localStorage.setItem('userData', userData);    
}

function saveTitle() {
    let title = titleData.value
    titleData.textcontent = title;
    // blogTitle = title;
    localStorage.setItem('title', title);
    
}

function saveContent() {
    let content = contentData.value;
    contentData.textcontent = content;
    // blogContent = content
    localStorage.setItem('content', content);
}

function loadBlogForm() {
window.location.href = 'blog.html';
}

submitBtn.addEventListener('click', function submitBlogData() {
    // console.log('blogposts length >>>>> ' + blogPosts.length)
    saveUserName();
    saveTitle();
    saveContent();
    loadBlogForm();
    // console.log('hi')
    // console.log(blogName);
    // console.log(blogTitle);
    // console.log(blogContent);
    // console.log('blogposts length >>>>> ' + blogPosts.length)
});

// functions to set them to i
// function to add one to i

    // blogPosts.length + 1 = i;

