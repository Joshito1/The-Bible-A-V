export const views = {
    home: {
        en: `
            <section class="banner">
                <div class="banner-inner">
                    <p data-i18n="home.title"></p>
                    <button data-i18n="home.play" href=""></button>
                </div>
            </section>
            <section class="chapter-select">
                <div class="title">
                    <h2 data-i18n="home.streamHomeTitle"></h2>
                    <a data-i18n="home.streamHomeAllLinkTitle"></a>
                </div>
                <ul>
                    <!-- <li>
                        <div>
                            <p data-i18n="book" class="book">Gen</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p data-i18n="book" class="book">Ex</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p data-i18n="book" class="book">Le</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p data-i18n="book" class="book">Nu</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p data-i18n="book" class="book">De</p>
                        </div>
                    </li>
                </ul> -->

            </section>
            `
    },
    stream: {
        en: `
        <div class="player">
        <video controls muted preload="auto">
            <source src="assets/media/video.mp4" type="video/mp4">            <div class="player-inner">
                <div class="player-controls">
                    <button class="play-pause" data-i18n="play"></button>
                    <button class="stop" data-i18n="stop"></button>
                    <button class="volume" data-i18n="volume"></button>
                    <button class="fullscreen" data-i18n="fullscreen"></button>
                    <button class="settings" data-i18n="settings"></button>
                    <button class="next" data-i18n="next"></button>
                    <button class="prev" data-i18n="prev"></button>
                    <button class="repeat" data-i18n="repeat"></button>
                    <button class="shuffle" data-i18n="shuffle"></button>
                
                    <button class="playlist" data-i18n="playlist"></button>
                    <button class="chapters" data-i18n="chapters"></button>
                    <button class="info" data-i18n="info"></button>
                    <button class="share" data-i18n="share"></button>
                    <button class="download" data-i18n="download"></button>
                    <button class="settings" data-i18n="settings"></button>
                </div>
                <div class="player-progress">
                    <div class="progress-bar">
                        <div class="progress"></div>
                    </div>
                    <div class="time">
                        <span class="current-time">00:00</span> / <span class="duration">00:00</span>
                    </div>
                </div>
                <div class="player-volume">
                    <div class="volume-bar">
                        <div class="volume"></div>
                    </div>
                    <div class="volume-level">
                        <span class="current-volume">50%</span>
                    </div>
                </div>
                <div class="player-playlist">
                    <ul>
                        <li>
                            <div class="playlist-item">
                                <p data-i18n="book" class="book">Genesis</p>
                                <p data-i18n="chapter" class="chapter">1</p>
                            </div>
                        </li>
                        <li>
                            <div class="playlist-item">
                                <p data-i18n="book" class="book">Exodus</p>
                                <p data-i18n="chapter" class="chapter">2</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="player-chapters">
                    <ul>
                        <li>
                            <div class="chapter-item">
                                <p data-i18n="book" class="book">Genesis</p>
                                <p data-i18n="chapter" class="chapter">1</p>
                            </div>
                        </li>
                        <li>
                            <div class="chapter-item">
                                <p data-i18n="book" class="book">Exodus</p>
                                <p data-i18n="chapter" class="chapter">2</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="player-info">
                    <p data-i18n="info" class="info">This is some information about the current chapter.</p>
                </div>
                <div class="player-share">
                    <p data-i18n="share" class="share">Share this chapter with your friends!</p>
                </div>
                <div class="player-download">
                    <p data-i18n="download" class="download">Download this chapter for offline listening.</p>
                </div>
                <div class="player-settings">
                    <p data-i18n="settings" class="settings">Settings</p>
                    <div class="settings-options">
                        <label for="language">Language:</label>
                        <select name="language" id="language-select">
                            <option value="en" data-i18n="language">English</option>
                            <option value="es" data-i18n="language">Spanish</option>
                        </select>
                    </div>
                    <div class="settings-options">
                        <label for="theme">Theme:</label>
                        <select name="theme" id="theme-select">
                            <option value="light" data-i18n="theme">Light</option>
                            <option value="dark" data-i18n="theme">Dark</option>
                        </select>
                    </div>
                    <div class="settings-options">
                        <label for="font-size">Font Size:</label>
                        <select name="font-size" id="font-size-select">
                            <option value="small" data-i18n="fontSize">Small</option>
                            <option value="medium" data-i18n="fontSize">Medium</option>
                            <option value="large" data-i18n="fontSize">Large</option>
                        </select>
                    </div>
                    <div class="settings-options">
                        <label for="speed">Playback Speed:</label>
                        <select name="speed" id="speed-select">
                            <option value="0.5x" data-i18n="speed">0.5x</option>
                            <option value="1x" data-i18n="speed">1x</option>
                            <option value="1.5x" data-i18n="speed">1.5x</option>
                            <option value="2x" data-i18n="speed">2x</option>
                        </select>
                    </div>
                    <div class="settings-options">
                        <label for="quality">Video Quality:</label>
                        <select name="quality" id="quality-select">
                            <option value="720p" data-i18n="quality">720p</option>
                            <option value="1080p" data-i18n="quality">1080p</option>
                            <option value="4k" data-i18n="quality">4K</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        </video>
        </div>
        <div class="content-container">
        <select name="books" id="book-select">
            <option value="genesis" data-i18n="book">Genesis</option>
            <option value="exodus" data-i18n="book">Exodus</option>
        </select>
        <ul class="chapter-list">
          <a href=""><li>1</li></a>
          <li>2</li>
          <li>3</li>
          <!-- You can later dynamically generate this -->
        </ul>
        </div>
        `
    }
};