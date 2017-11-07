import React from 'react';
import ReactDOM from 'react-dom';
import VideoList from './VideoList';

const mockData = [
  {
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
},
{
  "kind": "youtube#playlistItem",
  "etag": "\"ld9biNPKjAjgjV7EZ4EKeEGrhao/F8C78vLgLf54k3mYpRyIwrXpRDY\"",
  "id": "UExTaTI4aURmRUNKUEpZRkE0d2psRjVLVXVjRnZjMHFiUS41NkI0NEY2RDEwNTU3Q0M2",
  "snippet": {
    "publishedAt": "2014-09-04T15:56:12.000Z",
    "channelId": "UCc1SpIDSvxrf5ofxUMyXReg",
    "title": "Massive Attack - Teardrop",
    "description": "Listen to more from Massive Attack: https://MassiveAttack.lnk.to/Essentials\nDiscover more about this classic song here: http://www.udiscovermusic.com/stories/massive-attack-make-no-1-with-mezzanine\n\nBlue Lines 2012: Rebuilt from the original tapes, remixed and remastered.\nFind out more and order yours here: http://smarturl.it/bluelines2012v \n#bluelines2012\n\nOfficial video of Massive Attack performing Teardrop from the album Mezzanine. \nBuy It Here: http://smarturl.it/pq4bmk  \nLike Massive Attack on Facebook: http://www.facebook.com/massiveattack \nFollow Massive Attack on Twitter: https://twitter.com/MassiveAttackUK \nOfficial Website: http://massiveattack.com \nSee more videos: http://www.youtube.com/user/madotie",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/u7K72X4eo_s/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/u7K72X4eo_s/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/u7K72X4eo_s/hqdefault.jpg",
        "width": 480,
        "height": 360
      },
      "standard": {
        "url": "https://i.ytimg.com/vi/u7K72X4eo_s/sddefault.jpg",
        "width": 640,
        "height": 480
      },
      "maxres": {
        "url": "https://i.ytimg.com/vi/u7K72X4eo_s/maxresdefault.jpg",
        "width": 1280,
        "height": 720
      }
    },
    "channelTitle": "Danielle Major",
    "playlistId": "PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ",
    "position": 1,
    "resourceId": {
      "kind": "youtube#video",
      "videoId": "u7K72X4eo_s"
    }
  },
  "contentDetails": {
    "videoId": "u7K72X4eo_s",
    "videoPublishedAt": "2009-03-06T12:00:03.000Z"
  },
  "status": {
    "privacyStatus": "public"
  }
}
]

describe('<VideoList />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<VideoList videosList={mockData} />, div);
  });
})