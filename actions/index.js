import axios from 'axios';
import { request } from 'http';

export function exampleThunk(){
    // Example Redux Thunk
    // const response = await axios.get( `https://josephcoulam.com/wp-json/wp/v2/posts?slug=${ slug }` )
    // return (dispatch) => {
    //     request.then(({data}) => {
    //         dispatch({ type: 'GET_WORDPRESS_POST', payload: data})
    //     })
    // }
}

export function exampleRedux(){
    // Example Redux Thunk
    const response = await axios.get( `https://josephcoulam.com/wp-json/wp/v2/posts?slug=${ slug }` )
    return (dispatch) => {
        request.then(({data}) => {
            dispatch({ type: 'GET_WORDPRESS_POST', payload: data})
        })
    }
}
