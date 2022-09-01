import axios from "axios";
import { countryActionTypes } from "../Types";

export const countryActions = () => async (dispatch) => {

    try{

        const response = await axios.get(`https://restcountries.com/v2/all`);
        
        // console.log(response.data);
        if (response?.status === 200) {

            dispatch({

                type: countryActionTypes.GET_COUNTRIES,
                payload: response.data,

            });

            console.log(response);

        }


        return response;

    }catch(error){

        console.log(error);
    }
}

export const getCountryByName = (values) => async(dispatch) => {

    try{

        const response = await axios.get(`https://restcountries.com/v2/name/${values?.name}?fullText=true`);
        console.log(response);

        if (response?.status === 200) {
            
            dispatch({

                type: countryActionTypes.GET_COUNTRIES_BY_NAMES,
                payload: response.data,

            });

            console.log(response);
        }

        return response;

    }catch(error){

        console.log(error);

    }
}