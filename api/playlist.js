const fetch = require('node-fetch');

export const fetchPlaylist = async (callback) => {
  try {
    const response = await fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw')
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error)
  }
}