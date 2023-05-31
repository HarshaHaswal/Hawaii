import { useEffect, useState } from "react";
import axios from 'axios';
import Navbar from "./sub-components/navbar";
import Styles from "./home.module.css";
import cardImg1 from "../../assets/Surrfing.svg"
import cardImg2 from "../../assets/Hula.svg"
import cardImg3 from "../../assets/Volccano.svg"
import arrowImage from "../../assets/ArrowImage.svg"
import catarrowImage from "../../assets/arrow_forward.svg"
import profile from "../../assets/Ellipse 10.svg"
import footeraloha from "../../assets/AlohaWhite.svg"
import alohanav from "../../assets/Aloha.svg"
import menu from "../../assets/menu.svg"
import close from "../../assets/close.svg"
import useFetch from "../../hooks/fetchhook";


const Home = () => {
	const [isOpen, setIsOpen] = useState(false)

	const [data, loading, error] = useFetch({ apiPath: "https://web-dev.dev.kimo.ai/v1/highlights" })
	const [categories, categoriesloading, categorieserror] = useFetch({ apiPath: "https://web-dev.dev.kimo.ai/v1/categories" })
	const [activity, activityloading, activityerror] = useFetch({ apiPath: "https://web-dev.dev.kimo.ai/v1/activities/{activity_type}" })


	console.log(data, error, "Response");

	return (
		<div>
			<div className={Styles["nav-section"]}>
				<div className={Styles["nav-maindiv"]} >
					<div className={Styles["nav-text"]}>
						<img className={Styles["footer-aloha"]} src={alohanav}></img>
					</div>
					<div>
						<button
							onClick={() => setIsOpen(!isOpen)}
							className={Styles["btn-div"]}
						>
							{isOpen ? <img className={Styles["menu-bar"]} src={close} /> : <img className={Styles["close-bar"]} src={menu} />}
						</button>

						{isOpen && (
							<div className={Styles["card-text"]}>
								<div className={Styles["highlight-section"]}>home</div>
								<div className={Styles["highlight-section"]}>surfing</div>
								<div className={Styles["highlight-section"]}>hula</div>
								<div className={Styles["highlight-section"]}>valcano</div>
								<button className={Styles["book-btn"]}>book a trip</button>
							</div>
						)}

					</div>
				</div>
			</div>
			<div className={Styles["main-container"]}>
				<div className={Styles["bg-image"]}>
					<Navbar></Navbar>
					<div className={Styles["text-padding"]}>
						<span className={Styles["welcome-text"]}>Welcome to Hawaii</span>
					</div>
					<div>
						<span className={Styles["welcome-text"]}></span>
					</div>
				</div>
			</div>
			<div className={Styles["highlight-section"]}>
				<div>
					<div className={Styles["highlight-text"]}>
						<span>Highlights</span>
					</div>
					<div className={Styles["card-container"]}>

						{/* Api map code */}
						{/* {data.map((item:any)=>{
							return (
								<div className={Styles["card-body"]}>
							<img className={Styles["card-img"]} src={cardImg1}></img>

							<span className={Styles["card-header"]}>{item.title}</span>
							<span className={Styles["card-subheader"]}>{item.description}</span>
							<img className={Styles["card-arrow-image"]} src={item.image}></img>
						</div>
							)
						})} */}
						<div className={Styles["card-body"]}>
							<img className={Styles["card-img"]} src={cardImg1}></img>

							<span className={Styles["card-header"]}>Surfing</span>
							<span className={Styles["card-subheader"]}>Best Hawaiian islands for surfing.</span>
							<img className={Styles["card-arrow-image"]} src={arrowImage}></img>
						</div>
						<div className={Styles["card-body"]}>
							<img className={Styles["card-img"]} src={cardImg2}></img>
							<div className={Styles["card-header"]}>Hula</div>
							<div className={Styles["card-subheader"]}>Try it yourself.</div>
							<img className={Styles["card-arrow-image"]} src={arrowImage}></img>
						</div>
						<div className={Styles["card-body"]}>
							<img className={Styles["card-img"]} src={cardImg3}></img>
							<span className={Styles["card-header"]}>Vulcanoes</span>
							<span className={Styles["card-subheader"]}>Volcanic conditions can change at any time.</span>
							<span>
								<img className={Styles["card-arrow-image"]} src={arrowImage}></img>
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className={Styles["Catergories-section"]}>
				<div>
					<div className={Styles["highlight-text"]}>
						<span>Catergories</span>
					</div>
					<div className={Styles["catergories-card-container"]}>
						<div className={Styles["catergories-card-body"]}>
							<span className={Styles["catergories-text"]}>Adventure</span>
							<img className={Styles["travel-arrow-img"]} src={catarrowImage}></img>
						</div>
						<div className={Styles["catergories-card-body"]}>
							<span className={Styles["catergories-text"]}>Culinary</span>
							<img className={Styles["travel-arrow-img"]} src={catarrowImage}></img>
						</div><div className={Styles["catergories-card-body"]}>
							<span className={Styles["catergories-text"]}>Eco-tourism</span>
							<img className={Styles["travel-arrow-img"]} src={catarrowImage}></img>
						</div>
						<div className={Styles["catergories-card-body"]}>
							<span className={Styles["catergories-text"]}>Family</span>
							<img className={Styles["travel-arrow-img"]} src={catarrowImage}></img>
						</div>
						<div className={Styles["catergories-card-body"]}>
							<span className={Styles["catergories-text"]}>Sport</span>
							<img className={Styles["travel-arrow-img"]} src={catarrowImage}></img>
						</div>
					</div>
				</div>
				<div>
					<div className={Styles["highlight-text"]}>Travel Guide</div>
					<div className={Styles["Travel-card-container"]}>
						<div className={Styles["Traval-card-body"]}>

							<div className={Styles["highlight-text"]}>

								<div className={Styles["Travel-text"]}>Hadwin Malone</div>
								<div className={Styles["Travel-subtext"]}>Guide since 2012</div>
								<div className={Styles["Travel-btn-div"]}>
									<button className={Styles["Travel-button"]}> Contact </button>
								</div>
							</div>
							<img className={Styles["travel-profile-img"]} src={profile}></img>


						</div>
					</div>
				</div>
			</div>

			<div className={Styles["footer-section"]}>
				<div>
					<div className={Styles["highlight-text"]}>
						{/* <span>Highlights</span> */}
						<img className={Styles["footer-aloha"]} src={footeraloha}></img>

					</div>
				</div>
			</div>
		</div>
	)
}

export default Home;