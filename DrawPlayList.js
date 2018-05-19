function DrawPlayList(files) {
    play_list.innerHTML = "";

    for (let file of files) {
        const divElt = document.createElement("div");
        const aElt = document.createElement("a");
        aElt.innerText = "►";
        const name = file.name;
        divElt.textContent = name;
        divElt.className = "list";
        //liElt.append(aElt);
        play_list.append(divElt);
        UpdatePlayList();
    }
}

function UpdatePlayList() {
    const elts = play_list.getElementsByClassName("list");
    for (let element of elts) {
        if (element.innerText == video_name.innerText) {
            if (element.classList.contains("watched")) {
                element.classList.remove("watched");
            }
            element.classList.add("current");
        }
        else {
            if (element.classList.contains("current")) {
                element.classList.replace("current", "watched");
            }
        }
    }
}