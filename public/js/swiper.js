const blogSections = document.querySelector('.blogsn-section');

// db.collection("blogs")
// .get()
// .then((blogs) => {
//     blogs.(blog => {
//         if(blog.id != decodeURI(location.pathname.split("/").pop())){
//             createBlogs(blog);
//         }
//     })
// })

db.collection("blogs")
.get()
.then((blogs) => {
    blogs.forEach(blog => {
        if(blog.id != decodeURI(location.pathname.split("/").pop())){
            createBlogs(blog);
        }                                     
    })
})

const createBlogs = (blog) => {
    let data = blog.data();
    blogSections.innerHTML += `
    <div class="blog-card">
        <img src="${data.bannerImage}" class="blog-image" alt="">
        <h1 class="blog-title">${data.title.substring(0, 45) + '...'}</h1><br>
        <a href="/${blog.id}" class="btn dark">Читать</a>
    </div>
    `;
    }
