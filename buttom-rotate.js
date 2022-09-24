let open = false;
const arrowFlip = (number) => {
    let icon = document.getElementsByClassName("icon")[number];
    if (open) {
        icon.className = "icone-close-rotate";
    } else {
        icon.className = "icone-close-rotate open";
    }
    open = !open;
};