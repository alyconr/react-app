import React from 'react';
class Counter extends React.Component {
    state = {
        count: 0
    };

    handleClick = () => {
        this.setState( (prevState, { count}) => ({
            count: prevState.count + 1
        }));
    };



    render () {
        return <button  className="glyphicon glyphicon-heart fs-4 btn btn-lg btn-danger btn-change btn-change:hover " onClick={this.handleClick} >{this.state.count}k </button>;
    }
}

export default Counter;