class VideoPlayer {
	constructor(player, autoplays = true) {
		this.player = player;
		this.autoplays = autoplays;
		this.playlist = null;

		this.player.addEventListener('ended', (function () {
			if (this.autoplays) {
				if (!this.playlist.IsLast() || (this.playlist.IsLast() && this.playlist.IsCircular())) {
					this.playlist.Next();
					const mediaItem = this.playlist.Current();
					this.player.src = mediaItem.url;
					this.player.play();
				}
			}
		}).bind(this));
	}
	ToggleAutoplays() {
		this.autoplays = !this.autoplays;
	}
	SetPlaylist(playlist) {
		this.playlist = playlist;
	}
	PlayCurrent() {
		const mediaItem = this.playlist.Current();
		this.player.src = mediaItem.url;
		this.player.play();
	}
	Resume() {
		if (this.player.currentSrc === "" && this.playlist) {
			const mediaItem = this.playlist.Current();
			this.player.src = mediaItem.url;
		}

		if (this.player.currentSrc !== "") {
			if (!this.player.paused) {
				this.player.pause();
			}
			else {
				this.player.play();
			}
		}
	}
}