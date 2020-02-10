import {getLocalJSON} from './api';

export function fetchUserList (){
    return dispatch => {
        return new Promise((resolve, reject) => {
            return getLocalJSON(require('./userdata.json'))
            .then(responsejson => {
                console.log(responsejson)
                dispatch({type:'ADD_USERS',userArr:responsejson})
                //resolve(responsejson) 
            })
            .catch((error) => {
                console.log(error);
                //reject(error)
            });
              
                      })

    }

   
}


export function updateUser(inpobj) {
    return dispatch => {
        dispatch({type:'UPD_USERS', userobj:inpobj})
    }
    }

