export class MediaItem{

    url:string;
    name:string;
    size:number;
    duration:number;
    
	constructor(url:string, name:string, size:number, duration:number) {
		this.url = url;
		this.name = name;
		this.size = size;
		this.duration = duration;
	}

	static CreateFromFile(file:File): JQueryDeferred<MediaItem> {
		const defered: JQueryDeferred<MediaItem> = $.Deferred();
		const url:string = window.URL.createObjectURL(file);
		const name:string = file.name;
		const size:number = file.size;
		const mediaItem:MediaItem = new MediaItem(url, name, size, 0);
		const tempVideo:HTMLVideoElement = document.createElement('video');

		tempVideo.preload = 'metadata';
		tempVideo.onloadedmetadata = function () {
			const duration:number = tempVideo.duration;
			mediaItem.duration = duration;
			defered.resolve(mediaItem);
		}
		tempVideo.src = url;
		return defered;
	}

	static CreateFromFiles(files:FileList): JQueryDeferred<Array<MediaItem>> {
		const defered: JQueryDeferred<Array<MediaItem>> = $.Deferred();
		const mediaItems:Array<MediaItem> = new Array<MediaItem>(files.length);

		let fullfiled:number = 0;
		for (let i=0; i < files.length; i++) {
			const file: File = files[i];
			
			MediaItem.CreateFromFile(file).done((mediaItem: MediaItem) => {
				mediaItems[i] = mediaItem;
				fullfiled++;

				if(fullfiled == files.length){
					defered.resolve(mediaItems);
				}
			});
		}

		return defered;
	}
}