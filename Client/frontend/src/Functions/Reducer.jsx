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


const categoryreducer =(state,action)=>{
          switch(action.type){
            case 'AddCategory':
                return {
                    ...state,
                    [action.field] :action.value
                }
          }

}



export {reducerRegister,categoryreducer}