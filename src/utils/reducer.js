import { reducercase } from "./cases";

export const initialState={
    token:null,
    playlist:[],
    userDetails:null,
};

const reducer=(state,action)=>{
    switch(action.type)
    {
        case reducercase.SET_TOKEN:{
            return{
                ...state,
                token:action.token
            }

        }
        case reducercase.SET_PLAYLIST:{
            return{
                ...state,
                playlist:action.playlist,
            };
        }
        case reducercase.SET_USER:{
            return{
                ...state,
                userDetails:action.userDetails,
            }
        }
        default:return state;
    }
};

export default reducer;