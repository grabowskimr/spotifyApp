import React from 'react';
import ReactDOM from 'react-dom';

import { Album } from './Cards';

class NewRelases extends React.Component {
    constructor(props) {
        super(props);
        this.props.getNewReleases();
        this.state = this.props.spotify;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            newReleases: nextProps.spotify.newReleases
        });
    }

    render() {
        return (
            <div>
                <div className="row mb-5 col-md-12 justify-content-center">
                    <h1 className="text-center">New Relases:</h1>
                </div>            
                <div className="row">
                    {this.state.newReleases.map((album) => (
                        <Album key={album.id} album={album}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default NewRelases;