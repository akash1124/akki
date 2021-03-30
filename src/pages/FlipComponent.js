import React from 'react';
import ReactCardFlip from 'react-card-flip';

class Flip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
                <div>
                    <div>
                        <div className="card">
                            <img
                                src={this.props.img1}
                                alt="Avatar"
                                style={{ width: '300px', height: '300px' }}
                            />
                            <div className="container">
                            <h4><b>{this.props.name1}</b></h4>
                                <p>{this.props.des1}</p>
                            </div>
                        </div>
                    </div>
                    <button class="button" onClick={this.handleClick}>Click to flip</button>
                </div>

                <div>
                    <div>
                        <div className="card">
                            <img
                                src={this.props.img2}
                                alt="Avatar"
                                style={{ width: '300px', height: '300px' }}
                            />
                            <div className="container">
                                <h4><b>{this.props.name2}</b></h4>
                                <p>{this.props.des2}</p>
                            </div>
                        </div>
                    </div>
                    <button class="button" onClick={this.handleClick}>Click to flip</button>
                </div>
            </ReactCardFlip >
        )
    }
}

export default Flip;