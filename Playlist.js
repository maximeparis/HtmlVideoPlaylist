class Playlist {
	constructor(id) {
		this.position = 0;
		this.isCircular = false;
		this.id = id;
		this.mediaItems = [];
	}
	AddMediaItems(items) {
		this.mediaItems.push(items);
	}
	RemoveMediaItem(names){
		if(!Array.isArray(names))
			throw new Error("names must be an array");
		this.mediaItems.remove(function(mi, idx){ return names.exists(name => mi.name == name)});
	}
	ToggleCircular() { this.isCircular = !this.isCircular; }
	IsCircular() { return this.isCircular };
	SetPosition(index) {
		this.position = Math.max(0, Math.min(index, this.mediaItems.length - 1))
	}
	IsLast() { return this.position == (this.mediaItems.length - 1); }
	Reset() { this.position = 0; }
	IsFirst() { return this.position == 0; }
	Current() { return this.mediaItems[this.position]; }
	Next() {
		if (this.IsLast() && this.isCircular) {
			this.SetPosition(0);
		}
		else {
			this.SetPosition(this.position + 1);
		}
	}
	Previous() {
		if (this.IsFirst() && this.isCircular) {
			this.SetPosition(this.mediaItems.length - 1);
		}
		else {
			this.SetPosition(this.position - 1);
		}
	}
}