// let dataBlog = [];

// function addBlog(event) {
//     event.preventDefault();

//     let title = document.getElementById('input-blog-title').value;
//     let content = document.getElementById('input-blog-content').value;
//     let image = document.getElementById('input-blog-image').files;

//     image = URL.createObjectURL(image[0]);

//     dataBlog.push({
//         title,
//         content,
//         image
//     });

//     console.log(dataBlog);

//     renderPost();
// }

// function renderPost() {
//     document.getElementById('contents').innerHTML = '';
// }

function imageClick(event) {
    event.preventDefault();
    
    let imageInput = document.getElementById('image');
    imageInput.click();
}