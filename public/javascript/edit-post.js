async function editFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
  ];
    const title = document.querySelector('input[name="post-title"]').value.trim();
  
    return response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(document.location.replace('/dashboard'))
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);