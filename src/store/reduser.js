
const initialState ={
    users : [
       
    ],
}

function Reducer(state = initialState, action  ){
 switch (action.type) {
     case "ADD_USER" :
        const newUser = {
            username: action.payload.username,
            expenditure: action.payload.expenditure,
            description: action.payload.description,
            date: action.payload.date
          };
         return({...state, users:[...state.users, newUser]})
        
     default:
         return (state)  
 }
}
export default Reducer;