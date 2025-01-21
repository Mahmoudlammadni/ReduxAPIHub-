const initialstate = {
     panier :[]
}
const reduxr = (state=initialstate,action)=>{
    switch (action.type) {
        case "add":
            return{...state,panier:[...state.panier,action.payload]}
        case "del":
            return {...state,panier:{}}
        default:
            break;
    }
}