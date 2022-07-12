let menu = document.querySelector('.menu')
let menuList = document.querySelector('.menu-list')

function fecharMenu() {
    menuList.classList.remove('active')
}

function abrirMenu() {
    menuList.classList.add('active')
}

menu.addEventListener('click', abrirMenu)
let elementosQuePodemClicar = [menu];
for (let i = 0; i < menuList.children.length; i++) {
   elementosQuePodemClicar.push(menuList.children[i])
}
document.addEventListener('click', e => {
    if(!elementosQuePodemClicar.includes(e.target)) fecharMenu()
})