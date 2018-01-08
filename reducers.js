import {FETCH_DATA_SUCCESS, GET_DETAILS, RETURN_TO_LIST, DATA_LOADING} from "./actions";
import {PAGE_LIST, PAGE_DETAILS, PAGE_LOAD} from './pages';

export default function finalApp(state, action) {
    
    let newState = Object.assign({}, state);
    
    switch(action.type) {
        case FETCH_DATA_SUCCESS:
            
            newState = Object.assign({},loadRestaurants(newState, action.restaurants)); 
            
            break;
            
        case DATA_LOADING:
            
            newState = Object.assign({}, dataLoading(newState, action.id));
            
            break;
        case GET_DETAILS:
            
            newState = Object.assign({}, getDetails(newState, action.id));
            
            break;
        case RETURN_TO_LIST:
            
            nnewState = Object.assign({}, returnToList(newState));
            
            break;
        default:
            return state;
    }
    return newState;
}
                                     
function loadRestaurants(newState, restaurants){
    
    newState.page = PAGE_LIST;
    
    newState.restaurants = restaurants;
    console.log(newState.restaurants);
    return newState;
}

function getDetails(newState, id){
    
    newState.page = PAGE_DETAILS;
    
    let restaurant = newState.restaurants.find(item => item.id == id ? true: false);
    newState.selectedItem = restaurant;
    return newState;
}

function returnToList(newState){
    
    newState.page = PAGE_LIST;
    
    newState.selectedItem = undefined;
    return newState; 
}


function dataLoading(newState){
    
    newState.page = PAGE_LOAD;
    
    return newState; 
}