class MediaItem {
	constructor(url, name, size, type, duration) {
		this.url = url;
		this.name = name;
		this.size = size;
		this.type = type;
		this.duration = duration;
	}

	static CreateFromFile(file, mediaItemCreatedCallback) {
		const url = window.URL.createObjectURL(file);
		const mediaItem = new MediaItem(url, file.name, file.size, 0);
		const tempVideo = document.createElement('video');
		tempVideo.preload = 'metadata';
		tempVideo.onloadedmetadata = function () {
			const duration = tempVideo.duration;
			mediaItem.duration = duration;
			mediaItemCreatedCallback(mediaItem);
		}
		tempVideo.src = url;
	}
	static CreateFromFiles(files, mediaItemsCreatedCallback) {
		const mediaItems = [];
		for (const file of files) {
			MediaItem.CreateFromFile(file, function (mediaItem) {
				mediaItems.push(mediaItem);
				if (mediaItems.length == files.length) {
					mediaItemsCreatedCallback(mediaItems);
				}
			});
		}
	}
}