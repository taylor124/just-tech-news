async function deleteFormHandler(event) {
    // event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    return response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
    }).then(document.location.replace('/dashboard/'))
}



document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);