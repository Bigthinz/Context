import {ACCESS_TOKEN} from './../helpers/constants'


export const getAccessToken = function(){
    return localStorage.getItem(ACCESS_TOKEN)
}



