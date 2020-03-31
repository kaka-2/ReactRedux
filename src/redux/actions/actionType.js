import { FETCH_DATA } from '../actions/constants';

export function  fetcher() {
    return function(dispatch){
        fetch('http://api.openweathermap.org/data/2.5/weather?q=nairobi&appid=aca399b9d3e2d09de5c6162e4c52af4b')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_DATA,
            payload: data
        }))
        }

    }
