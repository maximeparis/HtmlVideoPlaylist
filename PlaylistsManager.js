class PlaylistsManager extends PointedList{
	constructor() {
		super();
	}
	Add(playlist) {
		super.Add(playlist);
	}
	SetCurrent(id) {
		super.SetCurrent(playlist => playlist.id == id);
	}
	Remove(id){
		super.Remove(function(pl,idx){ return pl.id == id});
	}
	Current(){
		return super.Current();
	}
}