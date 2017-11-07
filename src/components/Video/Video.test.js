import React from 'react';
import ReactDOM from 'react-dom';
import Video from './Video';

const mockVideoData =  {
    "kind": "youtube#playlistItem",
    "etag": "\"ld9biNPKjAjgjV7EZ4EKeEGrhao/mn7-yF379SxjmQLPWfZ2mixhG48\"",
    "id": "UExTaTI4aURmRUNKUEpZRkE0d2psRjVLVXVjRnZjMHFiUS41MzJCQjBCNDIyRkJDN0VD",
    "snippet": {
      "publishedAt": "2014-09-04T16:00:41.000Z",
      "channelId": "UCc1SpIDSvxrf5ofxUMyXReg",
      "title": "Lamb Angelica",
      "description": "From Lamb's 2003 album Between Darkness and Wonder",
      "thumbnails": {
        "default": {
          "url": "https://i.ytimg.com/vi/X0qwQqwKLlM/default.jpg",
          "width": 120,
          "height": 90
        },
        "medium": {
          "url": "https://i.ytimg.com/vi/X0qwQqwKLlM/mqdefault.jpg",
          "width": 320,
          "height": 180
        },
        "high": {
          "url": "https://i.ytimg.com/vi/X0qwQqwKLlM/hqdefault.jpg",
          "width": 480,
          "height": 360
        }
      },
      "channelTitle": "Danielle Major",
      "playlistId": "PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ",
      "position": 0,
      "resourceId": {
        "kind": "youtube#video",
        "videoId": "X0qwQqwKLlM"
      }
    },
    "contentDetails": {
      "videoId": "X0qwQqwKLlM",
      "videoPublishedAt": "2009-09-07T15:09:56.000Z"
    },
    "status": {
      "privacyStatus": "public"
    }
  }
  
describe('<Video />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Video video={mockVideoData} />, div);
  });
})