(function(){

    let header = document.getElementById('header');
    let menuToggle = document.getElementById('menu-toggle');

    let carouselContainer = document.getElementById('carousel-container')
    let carouselLeftControl = document.getElementById('left-control');
    let carouselRightControl = document.getElementById('right-control');
    let offset = document.getElementById('carousel-item').offsetWidth;
    let carouselItemsLenght = document.querySelectorAll('.carousel-item').length;
    let elementWidth = 0;

    let menuSection = document.getElementById('pizza-menu');
    let menuItems = document.querySelectorAll('.pizza-item');


    window.onscroll = function(){
        let pageOffset = window.pageYOffset;
        if(pageOffset + 500 > menuSection.offsetTop){
            menuItems.forEach(function(e, i ){

                setTimeout(function(){
                    addClass(e, 'revealed');
                }, i * 200);

            })
        }
        if(pageOffset > 500){
            addClass(header, "scrolled");
        }
        if(pageOffset < 500){
            removeClass(header, "scrolled");
        }

    }

    carouselRightControl.onclick = function(){
        clearInterval(automaticSliding);
        elementWidth += offset;
        if(elementWidth === offset * carouselItemsLenght){
            elementWidth = 0;
        }
        carouselContainer.style.transform = 'translateX(-'+ elementWidth + 'px)';

    }
    carouselLeftControl.onclick = function(){
        clearInterval(automaticSliding);
        elementWidth -= offset;
        if(elementWidth < 0){
            elementWidth = offset * (carouselItemsLenght - 1);
        }
        carouselContainer.style.transform = 'translateX(-'+ elementWidth + 'px)';

    }


    let automaticSliding = setInterval(function(){
        elementWidth += offset;
        if(elementWidth === offset * carouselItemsLenght){
            elementWidth = 0;
        }
        carouselContainer.style.transform = 'translateX(-'+ elementWidth + 'px)';
    }, 2500);

    //menu toggle
    menuToggle.onclick = function(){
        toggleClass(header, 'open');
        toggleClass(menuToggle, 'open')
    }


    function addClass(section, className){
        let classList = section.className.split(' ');
        if(classList.indexOf(className) === -1){
            classList.push(className);
            section.className = classList.join(' ');
        }
    }
    function toggleClass(section, className){
        let classList = section.className.split(' ');
        if(classList.indexOf(className) === -1){
            classList.push(className);
            section.className = classList.join(' ');
        }else{
            removeClass(section, className);
        }
    }

    function removeClass(section, className){
        let classList = section.className.split(' ');
        if(classList.indexOf(className)){
            let newClassList = classList.filter(function(e){
                return e !== className;
            })

            section.className = newClassList.join(' ');
        }
    }
})();
