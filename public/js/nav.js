let ul = document.querySelector('.links-container');

auth.onAuthStateChanged((user) => {
    if(user){
        // user is loggin
        // <li class="link-item"><a href="/admin" class="link">Дэшборд</a></li>
        ul.innerHTML += `
        <li class="link-item"><a href="#" onclick="logoutUser()" class="link">Выйти</li>
        `
    } else {
        // no one is logged in
        ul.innerHTML += `
        <li class="link-item"><a href="/admin" class="link">Войти</a></li>
        `
    }
})