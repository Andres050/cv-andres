export default function() {
    const tabLi = document.querySelectorAll(".js-tabMenu span");
    const tabs = document.querySelectorAll(".js-tabMenu span");
    const tabContent = document.querySelectorAll(".js-tabContent");
    tabs.forEach(tab => {

        tab.addEventListener('click', function(event) {

           // not active tabs at the moment
            tabs.forEach(t => {
                t.classList.remove('is-active');
            })


            tabContent.forEach(element => {

                if(tab.getAttribute('data-tab') == element.getAttribute('data-tab')) {
                    element.style.display = "block"
                    tab.classList.add('is-active')
                } else {
                    element.style.display = "none";
                }
            });
        })

    });

    /*const tabActive = document.querySelector(".js-tabMenu .js-tabLi.is-active span");
    tabContent.forEach(element => {
        let className = (element) ? element.className.split(" ") : null;
        if(tabActive.className == className[2]) {
            element.style.display = "block"
        }
    });*/
}
