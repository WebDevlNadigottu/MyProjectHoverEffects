const menuItems = document.querySelectorAll('nav ul li')


menuItems.forEach((li) => {

    li.addEventListener('click', () => {
        // console.log('working....')
        removeActiveClass()
        li.classList.add('active')
    })
} )

function removeActiveClass(){
    menuItems.forEach((item) => {
        item.classList.remove('active')
    })
}