import { reducercase } from "./cases";

export const initialState={
    token:null,
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
        default:return state;
    }
};

export default reducer;