    /*====== CHANGE BACKGROUND HEADER =======*/

    function scrollHeader(){
        const header = document.getElementById('header')
        if(this.scrollY >= 50) header.classList.add('scroll-header')

    }

    window.addEventListener('scroll', scrollHeader.bind(this))

    /*====== MIXITUP FILTER PORTFOLIO =======*/
    let mixerPortfolio = mixitup('work_container', {
        selectors: {
            target: '.work_card'
        },
        animation: {
            duration: 300
        }
    });