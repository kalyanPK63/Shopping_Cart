import React from "react";
import "../Styles/Product.css";
import { useStateValue } from "../StateProvider";

function Product({ productId, productName, price, image, rating }) {
	const [{ basket }, dispatch] = useStateValue();
	const addToBasket = () => {
		//dispatch the product into the data layer
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				productId: productId,
				productName: productName,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};

	return (
		<div className="product">
			<div>
				<img src={image} alt="prods" />
			</div> 
			<div className="product__info">
				<p>{productName}</p>
				<p className="product__price">
					<small> ₹ </small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>⭐</p>
						))}
				</div>
			</div>

			<button onClick={addToBasket}>Add to Cart</button>
		</div>
	);
}

export default Product;
