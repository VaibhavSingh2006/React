import "./Product.css"

function Price({OldPrice, NewPrice}){
    return(
        <div>
            <span>{OldPrice}</span>
            &nbsp;
            <span>{NewPrice}</span>
        </div>
    )
}

export default Price;