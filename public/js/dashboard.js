let ui = new firebaseui.auth.AuthUI(auth);
let login = document.querySelector('.login');
const blogSection = document.querySelector('.blogs-section');

auth.onAuthStateChanged((user) => {
    if(user){
        login.style.display = "none";
    } else {
        setupLoginButton();
    }
})

const setupLoginButton = () => {
    ui.start("#loginUI", {
        callbacks: {
            signInSuccessWithAuthResult: function(authResult, redirectURL) {
                login.style.display = "none";
                return false;
            }
        },
        signInFlow: "popup",
        signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID]
    })
}

// fetch user written blogs
const getUserWrittenBlogs = () => {
    db.collection("blogs").where("author", "==", auth.currentUser.email.split('@')[0])
    .get()
    .then((blogs) =>{
        blogs.forEach((blog) => {
            createBlog(blog);
        })
    })
    .catch((error) => {
        console.log("Ошибка при получении данных");
    })
}

const createBlog = (blog) => {
    let data = blog.data();
    blogSection.insertAdjacentHTML("afterend", `
    <div class="blog-card">
        <img src="${data.bannerImage}" class="blog-image" alt="">
        <h1 class="blog-title">${data.title.substring(0, 45) + '...'}</h1>
        <a href="/${blog.id}" class="btn dark">Читать</a>
        <a href="/${blog.id}/editor" class="btn grey">Редактировать</a>
        <a href="/" onclick="deleteBlog('${blog.id}')" class="btn danger">Удалить</a>
    </div>
    `);
}