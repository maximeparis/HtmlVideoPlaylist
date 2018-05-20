class VideoPlayer {
	constructor(player, autoplays = true) {
		this.player = player;
		this.autoplays = autoplays;
		this.playlist = null;
		this.playlistChanged = false;

		this.player.addEventListener('ended', (function () {
			if (this.autoplays && (!this.playlist.IsLast() || (this.playlist.IsLast() && this.playlist.IsCircular()))) {
				this.Next();
			}
		}).bind(this));
	}
	ToggleAutoplays() {
		this.autoplays = !this.autoplays;
	}
	SetPlaylist(playlist) {
		this.playlist = playlist;
		this.playlistChanged = true;
	}
	Play() {
		if (this.playlist && (this.player.currentSrc === "" || this.playlistChanged)) {
			if (this.playlistChanged) {
				this.playlistChanged = false;
			}
			const mediaItem = this.playlist.Current();
			this.player.src = mediaItem.url;
		}
		this.player.play();
	}
	Pause() {
		this.player.pause();
	}
	Resume() {
		if (!this.player.paused) {
			this.Pause();
		}
		else {
			this.Play();
		}
	}
	Next() {
		this.playlist.Next();
		const mediaItem = this.playlist.Current();
		this.player.src = mediaItem.url;
		this.Play();
	}
	Previous() {
		this.playlist.Previous();
		const mediaItem = this.playlist.Current();
		this.player.src = mediaItem.url;
		this.Play();
	}
	SetPosition(position){
		this.playlist.SetPosition(position);
		const mediaItem = this.playlist.Current();
		this.player.src = mediaItem.url;
		this.Play();
	}
}