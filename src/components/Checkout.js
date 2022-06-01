import React from "react";
import "../Styles/Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
	const [{ basket, user }] = useStateValue();
	return (
		<div className="checkout">
			<div className="checkout__left">
				<div>
					<h1 className="checkout__title">
						{user ? user.email : "Your"} Cart
					</h1>
					{basket.map((item) => (
						<CheckoutProduct
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating={item.rating}
						/>
					))}
				</div>
			</div>
			<div className="checkout__right">
				<div>
					<h1 className="checkout__title">Cart total</h1>
					<Subtotal />
				</div>
			</div>
		</div>
	);
}

export default Checkout;
