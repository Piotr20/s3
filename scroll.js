 //window.scrollY - właściwość o którą skrolowaliśmy naszą stronę
    //document.documentElement.offsetHeight - wysokość naszej całej strony
    //window.innerHeight - wysokość okna przeglądarki

    const bar = document.querySelector(".status");
    const statusBar = () => {
      currentScroll = Math.round(window.scrollY / (document.documentElement.offsetHeight - window.innerHeight) * 100);
      bar.style.width = currentScroll + "%";

      //console.log(currentScroll);
    }

    window.addEventListener("scroll", statusBar);

