const MenuResize = () => {
    if (isOpen()) {
        GetElement("menu ul").style.display = "none";
    } else {
        GetElement("menu ul").style.display = "block";
    }
}

const GetElement = (selector) => {
    return document.querySelector(selector);
}

const isOpen = () => {
    if (GetElement("menu ul").style.display === "none") {
        return false;
    } else {
        return true;
    }
}