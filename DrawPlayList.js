function DrawPlayList(files) {
        play_list.innerHTML = "";
        let i=0;
        files.forEach( function() {
            const divElt = document.createElement("div");
            const aElt = document.createElement("a");
            aElt.innerText = "►";
            let name = files[i].name;
            divElt.textContent = name;
            divElt.className = "list";
            //liElt.append(aElt);
            play_list.append(divElt);
            i++;
            UpdatePlayList();
        });   
    }
    
    function UpdatePlayList() {
        const elts = play_list.getElementsByClassName("list");
        for(i=0;i<elts.length; i++) {
             if(elts[i].innerText == video_name.innerText) {
                 if (elts[i].classList.contains("watched")) {
                     elts[i].classList.remove("watched");
                 }
                elts[i].classList.add("current");
            }
            else {
                if (elts[i].classList.contains("current")) {
                    
                    elts[i].classList.replace("current", "watched");
                }    
            }
        }
       
    }