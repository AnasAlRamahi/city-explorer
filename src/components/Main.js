import React, { Component } from 'react';
import CityForm from './CityForm';
import Results from './Results';
import axios from 'axios';


export class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            cityName: '',
            cityData: {},
            showData: false
        }
    }

    setCityName = (e) => {
        e.preventDefault();
        this.setState({
            cityName: e.target.value
        })
        console.log(this.state.cityName);
    }

    getCityData = async (e) => {
        e.preventDefault();
        const responseData = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=pk.359b8966c3600adbf20970aa12a8f363&city=${this.state.cityName}&format=json`);
        console.log(responseData);
        this.setState({
            cityData: responseData.data[0],
            showData: true
        });
        console.log(this.state.cityData);
    }
    render() {
        return (
            <div>
                <CityForm setCityName={this.setCityName} getCityData={this.getCityData} />
                {
                    this.state.showData &&
                    <Results cityData={this.state.cityData} />
                }
            </div>
        )
    }
}

export default Main
