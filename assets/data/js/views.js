export const views = {
    home: {
        en: `
        <!--<h1 data-i18n="welcome"></h1>
        <p data-i18n="introText"></p>-->
            <section class="banner">
                <div class="banner-inner">
                    <p data-i18n="title">The Bible Audio & Visual</p>
                    <a data-i18n="play" href="">Play</a>
                    <!-- <button class="button-info">More Info</button> -->
                </div>
            </section>
            <section class="chapter-select">
                <div class="title">
                    <h2>Chapters</h2>
                    <a href="#/en/stream">See All</a>
                </div>
                <ul>
                    <li>
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
                </ul>

            </section>
            `
    },
    stream: {
        en: `
        <div class="player">
            <iframe></iframe>
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