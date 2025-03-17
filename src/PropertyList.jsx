import Property from "./Property";
import './PropertyList.css'
function PropertyList({properties}){
    return(
        <div className="PropertyList">
            {properties.map(prop => 
                <Property
                key={prop.id} name={prop.name} rating={prop.rating} price={prop.price}
                />
            )}
        </div>
    )
}
export default PropertyList;