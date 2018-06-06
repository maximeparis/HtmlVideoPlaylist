export class Playlist<T>{
	private items: Array<T>;
	private cursorPosition: number;

	constructor() {
		this.items = [];
		this.cursorPosition = 0;
	}

	Add(item: T): void {
		this.items.push(item);
	}

	Remove(item: T): void {
		for (let i = 0; i < this.items.length; i++) {
			if (i == (this.items.length - 1) && this.cursorPosition == (this.items.length - 1)) {
				this.SetPosition(this.cursorPosition - 1);
			}
			this.items.splice(i, 1);
		}
	}

	SetPosition(pos: number): void {
		this.cursorPosition = Math.max(0, Math.min(pos, this.items.length - 1));
	}

	Current(): T {
		return this.items[this.cursorPosition];
	}

	Next(): T {
		this.SetPosition(this.cursorPosition + 1);
		return this.Current();
	}

	Previous(): T {
		this.SetPosition(this.cursorPosition - 1);
		return this.Current();
	}
}