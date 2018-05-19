class PointedList{
	constructor(){
		this.items = [];
		this.currrentItem = undefined;
	}
	Add(item) {
		this.items.push(item);
	}
	SetCurrent(pred) {
		this.currentItem = this.items.find(pred);
		return this.currentItem != undefined;
	}
	Remove(pred){
		this.items.remove(pred);
	}
	Current(){
		return this.currentItem;
	}
}