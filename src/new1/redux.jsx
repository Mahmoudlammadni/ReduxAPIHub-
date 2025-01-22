const initialstate = {
    panier : []
}
const redu_x = (state=initialstate,action)=>{
    switch (action.type) {
        case "add":
            const target_card = state.panier.find((p)=>p.id===action.payload.id)
            if (!target_card) {
                return {...state,panier:[...state.panier,action.payload]}
            }
            
        case "delet":
            return {...state,panier:[...state.panier.filter((p)=>{
                return p.id!==action.payload
            })]}
        default:
            return state 
    }
}
export default redu_x