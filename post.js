function loadPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data =>  displayPosts(data));
}

function displayPosts(posts) {
  const postContainer = document.getElementById('post-container'); 
  for (const post of posts) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post')
    postDiv.innerHTML = `
    <h4>User-${post.userId}</>
    <h5> Post: ${post.title}</h5>
    <p>Post discription: ${post.body}</p>
    `;
postContainer.appendChild(postDiv)
   
 }
}



loadPosts();

function delatePost() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'DELETE',
});
}

function patchApost() {
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PATCH',
  body: JSON.stringify({
    title: 'foo',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}

function createApost() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
}