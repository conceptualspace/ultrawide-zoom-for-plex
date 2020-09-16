"use strict";

$(document).arrive(".PlayerIconButton-playerButton-1DmNp4", function() {
    // selectors subject to change; working with web client v3.75.3

    if (! $('#widescreen')[0]) {
        let widescreenBtn = document.createElement('button');
        const classes = ["PlayerIconButton-playerButton-1DmNp4", "IconButton-button-9An-7I", "Link-link-2n0yJn", "Link-default-2XA2bN"];
        widescreenBtn.setAttribute("id","widescreen");
        widescreenBtn.classList.add(...classes);
        widescreenBtn.style.marginLeft = "10px";
        widescreenBtn.style.opacity = "0.5";

        let widescreenIcon = document.createElement("img");
        widescreenIcon.src = chrome.runtime.getURL("img/icon219.svg");
        widescreenIcon.classList.add("PlexIcon-plexIcon-8Tamaj");
        widescreenIcon.style.width = "1.3em";
        widescreenIcon.style.height = "1.3em";

        widescreenBtn.appendChild(widescreenIcon);

        widescreenBtn.onclick = function () {
            let video = $("video.HTMLMedia-mediaElement-35x77U")[0];
            if (video.style.transform === "scale(1.34)") {
                video.style.transform = "scale(1)";
                widescreenBtn.style.opacity = "0.5";
            } else if (video.parentElement.style.height === "100%") {
                video.style.transform = "scale(1.34)";
                widescreenBtn.style.opacity = "1";
            }
        }

        // insert after "more" button on bottom toolbar
        let closeBtn = document.querySelectorAll("button[data-qa-id='closeButton']")[0];
        closeBtn.parentNode.insertBefore(widescreenBtn, closeBtn.nextSibling);

    }
});
