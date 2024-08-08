document.addEventListener('DOMContentLoaded', () => {
    function loading() {
        var tl = gsap.timeline();

        tl.to("#yellow1", {
            top: "-100%",
            duration: 0.5,
            ease: "expo.out",
            delay: 0.5
        });
        tl.from("#yellow2", {
            top: "100%",
            duration: 0.5,
            ease: "expo.out",
            delay: 5.4
        }, "anim");
        tl.to("#loader h1", {
            delay: 5.6,
            color: "black"
        }, "anim");
        tl.to("#loader", {
            display: "none"
        });
        tl.to("#loader", {
            opacity: 0
        });
    }

    loading();

    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });

    document.querySelector("#footer h2").addEventListener("click", () => {
        scroll.scrollTo(0, 0);
    });

    var elems = document.querySelectorAll(".elem");
    var page2 = document.querySelector("#page2");

    elems.forEach(function (ele) {
        ele.addEventListener("mouseenter", function () {
            var bgimg = ele.getAttribute("data-img");
            page2.style.backgroundImage = `url(${bgimg})`;
        });
    });

    // New code for the search functionality in the navbar
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    searchBtn.addEventListener('click', function() {
        alert(`Searching for: ${searchInput.value}`);
    });
});
