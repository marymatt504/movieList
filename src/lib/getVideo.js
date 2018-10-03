import YOUTUBE_API_KEY from '../config/youtube.js';

var getVideo = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/videos',
    type: 'GET',
    data: {
      'id': options.id,
      'key': options.key,
      'part': 'snippet, contentDetails, statistics'
    },
    dataType: 'json',
    success: function (data) {
      callback(data);
    },
    error: function (data) {
      console.log("did not retrieve data.");
    },
    timeout: 2000
  });
};

export default getVideo;
