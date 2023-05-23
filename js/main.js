    /*====== CHANGE BACKGROUND HEADER =======*/

    function scrollHeader(){
        const header = document.getElementById('header')
        if(this.scrollY >= 50) header.classList.add('scroll-header')

    }

    window.addEventListener('scroll', scrollHeader.bind(this))

    /*====== MIXITUP FILTER PORTFOLIO =======*/
    let mixerPortfolio = mixitup('.work_container', {
        selectors: {
            target: '.work_card'
        },
        animation: {
            duration: 300
        }
    });

    // Link active work 

    const linkWork = document.querySelectorAll('.work_item')

    function activeWork(){
        linkWork.forEach(link => 
                    link.classList.remove('active-work')
                )
                this.classList.add('active-work')
    }

    linkWork.forEach(link => link.addEventListener('click', activeWork))


    /* ========= SCROLL SECTIONS ACTIVE LINK ====== */

    const sections = document.querySelectorAll('section[id]')

    function scrollActive(){
        const scrolly = window.pageYOffsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

    
        if(scrolly > sectionTop && scrolly <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId +']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    }

    window.addEventListener('scroll', scrollActive)

    /* =============  DARK LIGHT THEME ============ */

        const themeButton = document.getElementById('theme-button')
        const lightTheme = 'light-theme'
        const iconTheme = 'bx-sun'

        // Previously selected topic (if user selected)

        const selectedTheme = localStorage.getItem('selected-theme')
        const selectedIcon = localStorage.getItem('selected-icon')

        //We obtain the current theme that the interface has by validating the light-theme class
        const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
        const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

        //We validate if the user previously chose a topic
        if(selectedTheme){
            document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
            themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
        }

        // Activate/deactivate the theme manually with the button
        
        themeButton.addEventListener('click', () => {
            // Add or remove the light class
            document.body.classList.toggle(lightTheme)
            themeButton.classList.toggle(iconTheme)

            // We save the theme and the current icon that the user chose
            localStorage.setItem('selected-theme', getCurrentTheme())
            localStorage.setItem('selected-icon', getCurrentIcon())
        })
