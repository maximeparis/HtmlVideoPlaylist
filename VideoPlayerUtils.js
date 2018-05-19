function PlayVideo(player, source) {
	if (source && player) {
		player.src = source;
		player.play();
	}
}