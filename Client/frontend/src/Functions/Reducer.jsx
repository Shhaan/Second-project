const reducerRegister = (state,action)=>{
    switch (action.type){
        case 'Change':
            return {
                ...state,
                [action.field]: action.value
              };


        default:
            return state;
          }
        

    
}

export {reducerRegister}