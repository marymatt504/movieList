import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      'q': options.query,
      'key': options.key,
      'maxResults': options.max,
      'type': 'video',
      'videoEmbeddable': true,
      'part': 'snippet'
    },
    dataType: 'json',
    success: function (data) {
      callback(data.items);
    },
    error: function (data) {
      console.log("did not retrieve data.");
    },
    timeout: 2000
  });
};

export default searchYouTube;
