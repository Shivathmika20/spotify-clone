import { reducercase } from "./cases";

export const initialState={
    token:null,
    playlist:[],
    userDetails:null,
    selectedPlayId:'5SnKo9jLbO3FEIlPJT4o6P',
    selectedPlaylist:null,
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
        case reducercase.SET_INITIALPLAYLIST:{
            return{
                ...state,
               selectedPlaylist:action.selectedPlaylist,
            }
        }
        default:return state;
    }
};

export default reducer;