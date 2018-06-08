import $ = require("jquery");
import {Playlist} from "./Playlist";
import {MediaItem} from "./MediaItem";

$(function () {
    const inputFilesElt: JQuery = $("#input_files");
    let videoPlaylist: Playlist<MediaItem> = new Playlist<MediaItem>();
	
    inputFilesElt.change(function() {
        //console.log(ev.currentTarget);
        const inputFilesElement: HTMLInputElement = inputFilesElt.get(0) as HTMLInputElement;

        if(inputFilesElement != null){   
            const fileList: FileList = inputFilesElement.files as FileList;
            MediaItem.CreateFromFiles(fileList).done((mediaItems: Array<MediaItem>) => {
                console.log("mediaItems",mediaItems);
                mediaItems.forEach((mediaItem: MediaItem) => videoPlaylist.Add(mediaItem));
            });
        }
    });
});
