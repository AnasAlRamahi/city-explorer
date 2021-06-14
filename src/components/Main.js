import React, { Component } from 'react';
import CityForm from './CityForm';
import Results from './Results';
import ErrorMessage from './ErrorMessage';
import axios from 'axios';


export class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            cityName: '',
            cityData: {},
            showData: false,
            show: true,
            showError: false,
            errorMessage: {},
        }
    }
    setShow = () => {
        this.setState({
            show: false,
        })
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
        try {
            const responseData = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=pk.359b8966c3600adbf20970aa12a8f363&city=${this.state.cityName}&format=json`);
            console.log(responseData);
            this.setState({
                cityData: responseData.data[0],
                showData: true,
                showError: false,
            });
            console.log(this.state.cityData);    
        } catch (error) {
            this.setState({
                showError: true,
                errorMessage: error.message,
            });

        }
        
    }
    

    setShowError = () => {
        this.setState({
            showError: false
        })
    }

    render(){
        return (
            <div>
                <ErrorMessage setShowError= {this.setShowError} showError={this.state.showError} errorMessage={this.state.errorMessage} />
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
