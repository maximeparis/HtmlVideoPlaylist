const input_files = document.getElementById("input_files");
const video_player = document.getElementById("video_player");
const button_next = document.getElementById("button_next");
const button_previous = document.getElementById("button_previous");
const video_name = document.getElementById("video_name");
const button_goto = document.getElementById("button_goto");
const input_goto = document.getElementById("input_goto");
const videoPlayer = new VideoPlayer(video_player);
const playlist = new Playlist("initialPlaylist", []);
videoPlayer.SetPlaylist(playlist);

input_files.addEventListener("change", function (ev) {
	const files = Array.from(input_files.files);
	MediaItem.CreateFromFiles(files, function (mediaItems) {
		playlist.AddMediaItems(mediaItems);
		videoPlayer.Play();
        DrawPlayList(files);
	});
});

button_previous.addEventListener("click", function (ev) {
	videoPlayer.Previous();
    UpdatePlayList();
});

button_next.addEventListener("click", function (ev) {
	videoPlayer.Next();
    UpdatePlayList();
});

button_goto.addEventListener('click', function () {
	const position = parseInt(input_goto.value);
	if (Number.isInteger(position)) {
		videoPlayer.SetPosition(position);
        UpdatePlayList();
	}
});