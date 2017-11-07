import React from 'react'
import { renderToString } from 'react-dom/server'

import AppContainer from '../src/containers/AppContainer/AppContainer'
import { fetchPlaylist } from '../api/playlist'
import template from './template'

const handleRender = async (req, res) => {
    try {
        const playlist = await fetchPlaylist()
        const preloadedState = { videoList: playlist.items }
        const html = renderToString(<AppContainer {...preloadedState}/>)
        res.send(template(html, preloadedState))
    } catch (error) {
        // Throw error to page
        res.status(500).send(error)
    }
}

module.exports = {
    handleRender
}