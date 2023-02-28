const blogSection = document.querySelector('.blogs-section');
const sliderUl = document.querySelector('.gallery')

db.collection("blogs").get().then((blogs) => {
    blogs.forEach(blog => {
        if(blog.id != decodeURI(location.pathname.split("/").pop())){
            createBlog(blog);
        }
    })
})

const createBlog = (blog) => {
    let data = blog.data();
    blogSection.insertAdjacentHTML("beforeend", `
    <div class="blog-card">
        <img src="${data.bannerImage}" class="blog-image" alt="">
        <h1 class="blog-title">${data.title.substring(0, 45) + '...'}</h1><br>
        <a href="/${blog.id}" class="btn dark">Читать</a>
    </div>
    `);
}

const sliderBlog = (blog) => {
    let data = blog.data();
    sliderUl.insertAdjacentHTML("beforeend", `
    <li> <div class="blog-card">
        <img src="${data.bannerImage}" class="blog-images" alt="">
        <h1 class="blog-title">${data.title.substring(0, 45) + '...'}</h1><br>
        <a href="/${blog.id}" class="btn dark">Читать</a>
    </div> </li>
    `);
}

db.collection("blogs").get().then((blogs) => {
    blogs.forEach(blog => {
        if(blog.id != decodeURI(location.pathname.split("/").pop())){
            sliderBlog(blog);
        }
    })
})

const slider = document.querySelector('.gallery');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});

