import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetails from './videoDetails';



class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items });
  }


  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  }
  render() {
    return (
      <>
        <div className="container">
          {/* Sends the onTerm Function as a prop(onFormSubmit) and later it is called on SearchBar components */}
          <SearchBar onFormSubmit={this.onTermSubmit} />
          <VideoDetails video={this.state.selectedVideo} />
          <VideoList onVideoSelect={this.onVideoSelect} Videos={this.state.videos} />

        </div>

      </>

    );
  }

}
export default App;