function DrawPlayList(files) {
    //play_list.innerHTML = "";
    for (let file of files) {
        AddMediaItem($("#play_list"), file);
    }   
    UpdatePlayList(files);
    console.log(playlist);
}

function UpdatePlayList(el) {
   /* const elts = play_list.getElementsByClassName("list");
    for (let element of elts) {
        if (element.innerText == currentPlaylist.mediaItems.name) {
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
    } */
    
}




function AddMediaItem(mediaItemsContainer, mediaItem){
    const mediaItemElement = $("<div>");
    const removeButton = $("<button>");
    mediaItemElement.attr("id",mediaItem.name);
    mediaItemElement.text(mediaItem.name);
    removeButton.attr("id","remove_button")
    removeButton.text("X");
    mediaItemElement.append(removeButton);
    mediaItemsContainer.append(mediaItemElement);
    
    removeButton.click(function(){
        mediaItemElement.remove();
    });
    
}


function SetMediaItemToWatched(mediaItemsContainer, mediaItem){
    const correspondingMediaItems = mediaItemsContainer.children("#" + mediaItem.name);
    correspondingMediaItems.addClass("watched");
}

function SetMediaItemToCurrent(mediaItemsContainer, mediaItem){
    const correspondingMediaItems = mediaItemsContainer.children("#" + mediaItem.name);
    correspondingMediaItems.addClass("current");
}