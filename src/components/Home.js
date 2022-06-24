import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../Styles/Home.css";
import Product from "./Product";

function Home() {

	const [posts, setPosts] = useState({ product: [] })

	const [searchTerm, setSearchTerm] = useState("")

	useEffect(() => {
		const fetchPostList = async () => {
			const { data } = await axios("http://localhost:8082/products/getproducts")

			setPosts({ product: data })
			console.log(data)
		}
		fetchPostList()
	}, [setPosts])

	return (
		<div className="home">
			
			<div className="home__container">
				<center>
					<input className="searchB" placeholder="Search" onChange={event => {setSearchTerm(event.target.value)}}/>
				</center>
				
				<div className="home__row">
					{
						posts.product && posts.product.filter((val) => {
							if (searchTerm == ""){
								return val
							} else if (val.productName.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
								return val
							}
						}).map(p => (
							<Product
								productId={p.productId}
								productName={p.productName}
								price={p.price}
								image={p.image}
								rating={p.rating}
							/>
						))
					}

					{/*<Product
						id="1"
						title="iPhone X"
						price={29000}
						image="https://dummyjson.com/image/i/products/2/thumbnail.jpg"
						rating={4}
					/>
					<Product
						id="2"
						title="Fog Scent Xpressio Perfume"
						price={350}
						image="https://dummyjson.com/image/i/products/13/thumbnail.webp"
						rating={5}
					/>
					<Product
						id="7"
						title="Huawei P30"
						price={49999}
						rating={4}
						image="https://dummyjson.com/image/i/products/5/thumbnail.jpg"
					/>
					<Product
						id="3"
						title="Tree Oil 30ml"
						price={500}
						image="https://dummyjson.com/image/i/products/17/thumbnail.jpg"
						rating={5}
					/>
					<Product
						id="4"
						title="Skin Beauty Serum."
						price={750}
						image="https://dummyjson.com/image/i/products/19/thumbnail.jpg"
						rating={3}
					/>
					<Product
						id="5"
						title="Elbow Macaroni - 400 gm"
						price={125}
						image="https://dummyjson.com/image/i/products/22/thumbnail.jpg"
						rating={4}
					/>
					<Product
						id="6"
						title="Flying Wooden Bird"
						price={1499}
						image="https://dummyjson.com/image/i/products/27/thumbnail.webp"
						rating={5}
				/>*/}
				</div>
				{/* <img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/primedeals/PSW_PC_1x_English_Illustration._CB422946471_.jpg"
					alt="bg"
				/> */}

				<div className="home__row">

				</div>

				<div className="home__row">

				</div>

				<div className="home__row">

				</div>
				<div className="home__row">

				</div>

			</div>
		</div>
	);
}

export default Home; 