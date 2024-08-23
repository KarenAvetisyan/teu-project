document.addEventListener('DOMContentLoaded', function(){
    // burger 
    var burger = document.querySelector('.js-burger')
    var nav = document.querySelector('nav');
    var nav__overlay = document.querySelector('.nav__overlay');
    document.addEventListener('click', e => {
        if(!e.target.matches('.burger')){}
        else{
        burger.classList.toggle('clicked');
        nav.classList.toggle('show');
        nav__overlay.classList.toggle('show');
        }
        if(!e.target.matches('.nav__overlay, .nav__link')){}
        else {
        e.preventDefault();
        burger.classList.remove('clicked');
        nav.classList.remove('show');
        nav__overlay.classList.remove('show');
        }
    })

    // Якоря 
    const links = document.querySelectorAll(".js-scroll");
    var headerHeight = document.querySelector('.header').clientHeight;
        for (const link of links) {
        link.addEventListener("click", clickHandler);
        }

        function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop - headerHeight;

        scroll({
            top: offsetTop,
            behavior: "smooth"
        });
    }

    // modal 
    document.addEventListener('click', function (e) {
        if (!e.target.matches('[data-show-modal]')) return;
        else{
        e.preventDefault();
        var modal = document.querySelectorAll('#'+e.target.dataset.id);
        Array.prototype.forEach.call(modal, function (el) {
                el.classList.add('active');
        });
        }
    });
    document.addEventListener('click', function (e) {
        if (!e.target.matches('[data-close-modal]')) return;
        else{
            e.target.closest('.modal').classList.remove('active');
        }
    });

    // phone mask 
    const input = document.querySelectorAll(".js-tel__mask");
    const prefixNumber = (str) => {
      if (str === "7") {
        return "7 (";
      }
      if (str === "8") {
        return "8 (";
      }
      if (str === "9") {
        return "7 (9";
      }
      return "7 (";
    };
    input.forEach(i=>{
        i.addEventListener("input", (e) => {
            const value = i.value.replace(/\D+/g, "");
            const numberLength = 11;
      
            let result;
            if (i.value.includes("+8") || i.value[0] === "8") {
              result = "";
            } else {
              result = "+";
            }
      
            //
            for (let i = 0; i < value.length && i < numberLength; i++) {
              switch (i) {
                case 0:
                  result += prefixNumber(value[i]);
                  continue;
                case 4:
                  result += ") ";
                  break;
                case 7:
                  result += "-";
                  break;
                case 9:
                  result += "-";
                  break;
                default:
                  break;
              }
              result += value[i];
            }
            //
            i.value = result;
          });
    })
})