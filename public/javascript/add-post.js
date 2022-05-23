async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="post-body"]').value;

    if(title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({
                title,
                content
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        
    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert(response.statusText);
    }
    } else {
        alert("Please fill out all the details!")
    }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);