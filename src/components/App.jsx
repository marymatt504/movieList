import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: exampleVideoData,
      video: exampleVideoData[0],
      query: 'JazzFestNewOrleans',
      key: YOUTUBE_API_KEY,
      max: 5
    };
  }

  componentDidMount() {
    this.props.searchYouTube({query: this.state.query, key: this.state.key, max: this.state.max}, (data) => {
      this.setState({
        videos: data,
        video: data[0]
      });
    });

  }

  changePlayer(event) {
    var title = event.target.innerHTML;
    let vid;
    for (var i = 0; i < this.state.videos.length; i++) {
      let vi = this.state.videos[i];
      // debugger;
      console.log(vi.snippet.title);
      console.log(title);
      if (vi.snippet.title === title) {
        vid = vi;
        break;
      }
    }
    this.setState({
      video: vid 
    });
  }

  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em></h5>
              <VideoPlayer video={this.state.video} videoId={this.state.videoId} title={this.state.title} description={this.state.description}/>
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <h5><em>Check out our videos!</em></h5>
              <VideoList videos={this.state.videos} changeplay={this.changePlayer.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
