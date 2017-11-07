import React from 'react';
import './AppContainer.scss';

import Video from '../../components/Video/Video'
import Header from '../../components/Header/Header'
import VideoList from '../../components/VideoList/VideoList'

class AppContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      videosList: this.props.videoList,
      selectedVideo: null,
      showVideoView: false,
      fetchRequest: null,
      fetchSuccess: null,
      fetchFailure: null
    }

    this.onGoBackClick = this.onGoBackClick.bind(this)
    this.onVideoClick = this.onVideoClick.bind(this)
  }

  onGoBackClick() {
    this.setState({ showVideoView: false, selectedVideo: null })
  }

  onVideoClick(video) {
    this.setState({ showVideoView: true, selectedVideo: video })
  }

  render() {
    const { fetchRequest, fetchFailure } = this.state

    if (fetchFailure) {
      return (
        <div>
          <h2>Couldn't get youtube data</h2>
          <p>Please refresh and try again</p>
        </div>
      )
    }

    if (fetchRequest) {
      return (
        <div>
          <h2>Loading...</h2>
          <p>Loading YouTube data</p>
        </div>
      )
    }

    return (
      <div className="app">
        <Header />
        <div className="container">
        {this.state.selectedVideo && <a className="go-back-btn" onClick={() => this.onGoBackClick()}>Go back</a>}
          {!this.state.showVideoView ? (
            <VideoList
              videosList={this.state.videosList}
              onVideoClick={this.onVideoClick}
            />
          ) : <Video video={this.state.selectedVideo} />}
        </div>
      </div>
    );
  }
}

export default AppContainer
