import React, { Component } from 'react';

class MartaDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            martaData = []
        }
    }

    render() {
        return (
            <div>
                <p>Marta: It's smarta, but not really</p>
                <div>
                    {this.state.martaData}
                </div>
            </div>
        )
    }
}

export default MartaDashboard;

