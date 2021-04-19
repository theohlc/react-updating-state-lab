import React from "react";

// Code YouTubeDebugger Component Here
export default class YouTubeDebugger extends React.Component {
    constructor() {
        super();

        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    render() {
        return(
            <div>
                <button className='bitrate' onClick={this.bitrateHandleBtn}>bitrate</button>
                <button className='resolution' onClick={this.resolutionHandleBtn}>res</button>
            </div>
        )
    }

    bitrateHandleBtn = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    resolutionHandleBtn = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }
}