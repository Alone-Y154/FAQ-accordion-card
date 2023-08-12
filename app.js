    let divs = document.querySelectorAll('.faq');


    divs.forEach((div, i) => {
      div.addEventListener('click',() => {
        div.classList.toggle("faq-question-click");
      })
    });
