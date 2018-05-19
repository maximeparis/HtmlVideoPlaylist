class Playlist {
	constructor(items) {
		if (!Array.isArray(items))
			throw new Error("Items of playlist must be an array of item")
		this.items = items;
		this.position = 0;
		this.isCircular = false;
		this.firstPlay = true;
	}
	ToggleCircular() { this.isCircular = !this.isCircular; }
	IsCircular() { return this.isCircular };
	SetPosition(index) {
		this.position = Math.max(0, Math.min(index, this.items.length - 1))
	}
	IsLast() { return this.position == (this.items.length - 1); }
	Reset(){ this.position = 0; }
	IsFirst() { return this.position == 0; }
	Current(){ return this.items[this.position];}
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
			this.SetPosition(this.items.length - 1);
		}
		else {
			this.SetPosition(this.position - 1);
		}
	}
}