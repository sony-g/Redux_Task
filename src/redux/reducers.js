export default function userReducer (state=[],action){

    switch (action.type){
        case  'ADD_USERS' : {
            console.log(action)
            return state = action.userArr.map(it=>it)
           
        }
        case 'UPD_USERS' :{
            console.log(action.userobj);
            console.log(state)
            return state.map((it)=>{
                if(it.id == action.userobj.id){
                    console.log(it);
                    console.log(action.userobj)
                    return action.userobj
                }else {
                    return it;
                }
            })

        }
        default :{
            return state;
        }
    }
    
}
