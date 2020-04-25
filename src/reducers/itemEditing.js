import * as Types from './../constants/ActionType'; 
var initialSatate = {};

const itemEditing = (state = initialSatate, action) => {
    switch(action.type){
        case Types.EDIT_PRODUCTS: {
            return action.product;
        }
        default:{
            return state;
        }
    }
} 

export default itemEditing;