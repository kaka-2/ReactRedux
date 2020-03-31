import React, { Component } from 'react'
import {connect} from 'react-redux';
import { fetcher} from '../src/redux/actions/actionType';

class App extends Component {

    componentWillMount(){
        this.props.fetcher();
    }
    
    render(){
        const {weatherData} = this.props;
        console.log(weatherData)
        return (
            <div>
                <h1>Weather</h1>
                <p>{JSON.stringify(weatherData.weather)}</p>
                <p>{JSON.stringify(weatherData.main)}</p>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    weatherData: state.data.weather
})

export default connect(mapStateToProps,{fetcher})(App);