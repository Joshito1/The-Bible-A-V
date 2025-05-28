const videoContainer = document.getElementById('videoContainer');

fetch()

async function getYouTubeVideos() {
  const apiKey = 'AIzaSyBePNYCc-QKf55srJysgerjpfYw2fsB82k'; // Replace with your API key
  const channelId = 'UC9-hp4D25lwx25vTjmPMlYQ'; // Replace with the channel ID
  const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&order=date&maxResults=5&key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    let videoHtml = '';
    data.items.forEach(item => {
      const videoId = item.id.videoId;
      const title = item.snippet.title;
      const thumbnail = item.snippet.thumbnails.default.url;

      // Create the IFrame embed code
      const iframeHtml = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>`;

      videoHtml += `
        <div>
          <h3>${title}</h3>
          ${iframeHtml}
        </div>
      `;
    });

    // Display the videos in the HTML
    document.getElementById('videoContainer').innerHTML = videoHtml;

  } catch (error) {
    console.error("Error fetching videos:", error);
  }
}

// Call the function to fetch and display the videos
getYouTubeVideos();
