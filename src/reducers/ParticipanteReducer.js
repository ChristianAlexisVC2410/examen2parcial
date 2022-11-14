//Definimos el Reducer de Contactos como una arrow function que recibe
//solo dos parámetros son: un state y un action.

export const ParticipanteReducer = (state,action) => {
    switch(action.type){
        case 'add':
            return [...state,action.payload];//... es el operado spread sirve para agregar algo mas 
            //payload contiene la información y es un objeto con los nuevos datos. 
        case 'delete':
            //Filtra el state con todos los datos menos donde coincida
            //con el id seleccionado
            return state.filter((actual) => actual.id !== action.payload);
        case 'edit':
            //Filtra el state con todos los datos menos donde coincida
            //con el id seleccionado
            return state.map((actual) => actual.id === action.payload.id ? action.payload : actual);
            
        default:
            return state;
        
        
    }
}