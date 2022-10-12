const MenuResize = () => {
    GetElement("menu ul").style.display = isOpen()?"none":"block";
}

const GetElement = (selector) => {
    return document.querySelector(selector);
}

const isOpen = () => {
    return GetElement("menu ul").style.display === "block";
}

window.addEventListener("resize", () => {
    if(window.innerWidth >= 768) {
        document.querySelector("header menu ul").style.display = "block";
    } else {
        document.querySelector("header menu ul").style.display = "none";
    }
})