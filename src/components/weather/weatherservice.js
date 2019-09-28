import React, { Component } from 'react';

const API_KEY = "ba0c17210935d83717a61c2b8509e83b";

class Weatherservice extends Component {
    state = {
        temperature: null,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }
    getWeather = async (e) => {
        e.preventDefault();
    }
}

export default Weatherservice;