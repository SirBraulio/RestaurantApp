import React, { useReducer } from 'react';

import firebase from '../../firebase'
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';

import { OBTENER_PRODUCTOS_EXITO } from '../../types';
import _ from 'lodash';

const FirebaseState = props =>{

    console.log(firebase);
    //Crear state inicial
    const initialState={
        menu: []
    }
    //useReducer con dispatch para ejecutar las funciones
    const [state, dispatch ] = useReducer(FirebaseReducer, initialState);
    
    // Función que se ejecuta para traer los productos
    const obtenerProductos = () => {
        //console.log('desde firebasetate, osea que vamo bien')
        // consultar firebase
        firebase.db.settings({ experimentalForceLongPolling: true });
            firebase.db 
            .collection('productos')
            .where('existencia', '==', true) // traer solo los que esten en existencia
            .onSnapshot(manejarSnapshot);
        
            function manejarSnapshot(snapshot) {
                let platillos = snapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                });
                dispatch({
                    type: OBTENER_PRODUCTOS_EXITO,
                    payload: platillos
                });
                // Ordenar por categoria con lodash
                platillos = _.sortBy(platillos, 'categoria');
    
                //console.log(platillos)
    
                
            }
            
    }
    return(
        <FirebaseContext.Provider
            value = {{
                menu: state.menu,
                firebase,
                obtenerProductos
            }}
        >
            {props.children}
        </FirebaseContext.Provider>
    )
}
export default FirebaseState;