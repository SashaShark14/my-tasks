const topBtn = document.querySelector('.back-to-top')

window.addEventListener('scroll', trackScroll)
topBtn.addEventListener('click', backToTop)

function trackScroll() {
    let scrolled = window.pageYOffset
    let coords = document.documentElement.clientHeight

    if(scrolled > coords) {
        topBtn.classList.add('back-to-top-show')
    } 

    if(scrolled < coords) {
        topBtn.classList.remove('back-to-top-show')
    }
}

function backToTop() {
    if(window.pageYOffset > 0) {
        window.scrollTo(0, 0)
    }
}
