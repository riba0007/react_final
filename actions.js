import axios from "axios";

export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const DATA_LOADING = 'DATA_LOADING';
export const GET_DETAILS = 'GET_DETAILS';
export const RETURN_TO_LIST = 'RETURN_TO_LIST';

export function fetchDataSuccess(data){
    return {
        type: FETCH_DATA_SUCCESS,
        restaurants: data
    }
}

export function dataLoading(){
    return {
        type: DATA_LOADING
    }
}

export function getDetails(id){
    return {
        type: GET_DETAILS,
        id: id
    }
}

export function returnToList(){
    return {
        type: RETURN_TO_LIST
    }
}

export function fetchData(lat, long) {
    return (dispatch) => {
    
        const apiKey = 'PyZAtUODuybAuJ5vl-yvznmRMp2J0D8RDEnqY0QAVAOJ5zWE-06JFrIPueI4ZOewJFOBPOMjfMly3bLcw1DF2ZfL2OgnTsEAGmCOwfJq2eYc4V0lBQYkG-pcrgpNWnYx';
        
        let url = 'https://api.yelp.com/v3/businesses/search?term=restaurants&latitude='+lat+'&longitude='+long+'&sort_by=distance';
        
        //dispatch(dataLoading());
        
        axios.get(url, {headers: {Authorization: 'Bearer '+apiKey}})
            .then((response)=> {
                if (response.status != 200) {
                    console.log('Response Error', response);
                    throw "SOMETHING WRONG";
                }
                return response;
            }).then((response) => {
                dispatch(fetchDataSuccess(response.data.businesses));
        });
    };
}

export function getGeolocalizedList() {
  return (dispatch)=> {
    
    dispatch(dataLoading());
      
    navigator.geolocation.getCurrentPosition(
      (position) => {
        dispatch(fetchData(position.coords.latitude, position.coords.longitude));
      },
      (error) => {
        console.log("Error", error);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    );
  }
}