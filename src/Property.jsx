function Property({name, rating, price}){
    return(
        <div className="Property">
        <h2>{name}</h2>
        <h3>${price} a night</h3>
        <h2>{rating} STAR</h2>
        </div>
    )
}
export default Property;