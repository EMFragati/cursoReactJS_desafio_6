import React, { useState } from "react";

const ItemCount= ( { stockLimit } ) => {

    /*Nota: Esto se conoce como "Desestructuracion de arrays". El hook useState() devuelve un array de dos elementos,
     de esta fomra estoy declarando 2 variables en orden con los valores de ese array*/
    const [ counter , setCounter ] =  useState(1);
    const [ stock , setStock ] =  useState(0);
    
    const incrementCounter = () => {
        if ( counter < stockLimit ) {
            setCounter ( counter + 1 );
        };
    };

    const decreaseCounter = () => {
        if ( counter > 1 ) {
            setCounter ( counter - 1 );
        };        
    };

    /*Si al sumar elementos al carrito no supero el limite, permito la actualizacion*/
    const incrementStock = () => {        
        if ( ( stock + counter ) < stockLimit ) {
            setStock ( stock + counter );
        } else { 
            setStock ( 5 );
        };
    };

    /*Decremento el contador de stock. Si la resta podria dar un valor negativo, directamente dejo "0"*/
    const decreaseStock = () => {       
        if ( ( stock - counter ) > 0 ) {
            setStock ( stock - counter );
        } else { setStock ( 0 ) };
    };

    /*Renderizado*/
    return(
        <>           
            <div className="contanier">         

                <div className="row justify-content-md-right">
                    <div className="col-8">
                        <br/>                        
                        <button type="button" className="btn btn-primary mx-1" onClick={ decreaseCounter }><strong>-</strong></button>                            
                        <span>{ counter }</span>
                        <button type="button" className="btn btn-primary mx-1" onClick={ incrementCounter }><strong>+</strong></button>                                                        
                        <button type="button" className="btn btn-primary" onClick={ incrementStock }>Agregar al Carrito</button>  
                    </div>                    
                </div>
                
            </div>
        </>
    )
};

export default ItemCount;