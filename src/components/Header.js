import React from "react";
import "../Styles/Header.css";
import {ShoppingCartIcon} from "@heroicons/react/outline"
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";


function Header() {
	const [{ basket, user }, dispatch] = useStateValue();

	return (
		<div className="header">
			<header className="name">
				E-Store
			</header>
			<Link to="/">
				<img
					className="header__logo"
					src="./Icon.png"
				/>
			</Link>

			<div className="header__search">
				<input className="header__searchInput" placeholder="Search" />
			</div>
			<div className="header__nav">
				<Link to={!user && "/login"}>
					<div className="header__option">
						<span className="header__optionLineOne">
							Hello {user ? user.email : "Guest"}
						</span>
						<span
							// onClick={handleAuth}
							className="header__optionLineTwo"
						>
							{user ? "Log Out" : "Log In"}
						</span>
					</div>
				</Link>
			

				<Link to="/checkout">
					<div className="header__optionBasket">
						<ShoppingCartIcon className="cartI"/>
						<span className="header__optionLineTwo header__optionBasketCount">
							{basket?.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
