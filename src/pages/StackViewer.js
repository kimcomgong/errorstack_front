import React from 'react'
import '../styles/stackviewer.css'

const StackViewer = (props) => {
    return (
        <div className="main">
            <div>
                <div className="viewerType"> 
                    <p className="viewerTypeUnit"> {props.location.state.createdAt} </p>
                    <p className="viewerTypeUnit"> pushed by </p>
                    <p className="viewerTypeUnit"> {props.location.state.createdBy} </p>
                </div>

                <div className="viewerMain">
                    <div className="viewerMainUnit"> 
                        <p className="ffont_t"> tag </p>
                        <p className="ffont"> {props.location.state.tag} </p>
                    </div>
                    <div className="viewerMainUnit">
                        <p className="ffont_t"> errorcode </p>
                        <p className="ffont"> {props.location.state.code} </p>
                    </div>
                    <div className="viewerMainUnit">
                        <p className="ffont_t"> comment </p>
                        <p className="ffont"> {props.location.state.body} </p>
                    </div>
                </div>

                <div className="viewerComment">
                </div>
            </div>
        </div>
    )
}

export default StackViewer;