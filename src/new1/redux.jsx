const initialstate = {
    panier : []
}
const redu_x = (state=initialstate,action)=>{
    switch (action.type) {
        case "add":
            return {...state,panier:[...state.panier,action.payload]}
        case "delet":
            return {...state,panier:[...state.panier.filter((p)=>{
                return p.id!==action.payload
            })]}
        default:
            break;
    }
}
export default redu_x