// click other
const counters = document.querySelectorAll(".valueContribute");
const aboutContent = document.querySelector("#about .about-content");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const navLink = document.querySelector("header nav a.nav-links");

aboutContent.onclick = (event) => {
  const current = event.target;

  const selengkapnya = current.className.includes("Other");
  if (!selengkapnya) return;

  const currentText = event.target.parentNode.querySelector(".read-about");
  currentText.classList.toggle("read-about--show");

  current.textContent = current.textContent.includes("Read More") ? "Hide..." : "Read More...";
};

window.onscroll = () => {
  // melakukan link active ketika discroll
  sections.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop - 15;
    const height = section.offsetHeight;
    const idSection = section.getAttribute("id");

    if (top > offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active-link");
        this.document.querySelector("header nav a[href*=" + idSection + "]").classList.add("active-link");
      });
    }
  });
};

// counter
let counterObserver = new IntersectionObserver(
  (entries) => {
    let [entry] = entries;
    if (!entry.isIntersecting) return;
    counters.forEach((counter) => {
      const animate = () => {
        const value = +counter.getAttribute("data-target");
        const data = +counter.innerText;
        const time = value / 10000;

        if (data <= value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 100);
        } else {
          counter.innerText = value;
        }
      };

      animate();
    });
  },
  {
    root: null,
    threshold: 0.5,
  }
);

counterObserver.observe(aboutContent);
