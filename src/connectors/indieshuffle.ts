export {};

Connector.playerSelector = '#player';

Connector.getArtist = () =>
	document.querySelector('.player-info .track-artist')?.firstChild
		?.textContent;

Connector.trackSelector = '.player-info .track-title';

Connector.trackArtSelector = '.player-artwork img';

Connector.currentTimeSelector = '.player-progress .current';

Connector.durationSelector = '.player-progress .total';

Connector.isPlaying = () => {
	const canPause =
		Util.getAttrFromSelectors('.play-pause', 'title', 'Play') == 'Pause';
	const hasError = Util.getTextFromSelectors('.player-info .player-error');
	return canPause && !hasError;
};
