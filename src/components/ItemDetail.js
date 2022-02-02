import ItemCount from './ItemCount';

const ItemDetail = ( { item } ) => {
    
    /*Renderizado*/;
    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-4">
                        <img src={item.img} alt='img'/>
                    </div>
                    <div className="col-4">                        
                        <div className="row"><p className="h1">{item.name}</p></div>
                        <div className="row">{item.description}</div>
                        <div className="row mt-4"><strong>Precio: {item.price}</strong></div>
                        <div className="row"><ItemCount stockLimit='5'/></div>
                    </div>
                </div>
            </div>
        </>
    )
  };
  
  export default ItemDetail;