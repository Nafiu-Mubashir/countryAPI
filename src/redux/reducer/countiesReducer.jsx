import { countryActionTypes } from "../Types";

const initialState = {
    countries : [],
    country: []
}
export const countryReducer = (state = initialState, {type, payload}) => {

    switch (type) {

        case countryActionTypes.GET_COUNTRIES:

            return{

                ...state,
                countries: payload,
                
            }

        case countryActionTypes.GET_COUNTRIES_BY_NAMES:

            return{
                
                ...state,
                country: payload
            }
    
        default:
            return state;
    }
}