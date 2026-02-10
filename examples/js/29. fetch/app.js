const loadingElement = document.getElementById('loader');


async function fetchData() {
  try {
    const result = await fetch('https://my-json-server.typicode.com/typicode/demo/posts');
    const posts = await result.json();
    const postsContainer = document.getElementById('posts');
    for (const post of posts) {
      const postElement = document.createElement('div');
      const postElementLink = document.createElement('a');
      postElementLink.href = `https://jsonplaceholder.typicode.com/posts/${post.id}`;
      postElementLink.textContent = `Post ${post.id}`;
      postElement.appendChild(postElementLink);
      postsContainer.appendChild(postElement);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    const errorElement = document.getElementById('error');
    errorElement.style.display = 'block';
  } finally {
    console.log('Fetch attempt finished');
    loadingElement.style.display = 'none';
  }


  // fetch('https://my-json-server.typicode.com/typicode/demo/posts')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log('Fetched data:', data);
  //   })
  //   .catch(error => {
  //     console.error('Error fetching data:', error);
  //   });
}

async function main() {
  await fetchData();
}

main();