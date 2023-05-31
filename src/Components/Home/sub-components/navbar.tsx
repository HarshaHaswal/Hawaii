import "./navbar.module.css";
import alohaImg from "../../../assets/Aloha.svg"

const Navbar = () => {
	return (
		<div>
			<div style={{ padding: "1vw 13vw" }}>
				<ul>
					<li><img src={alohaImg}></img></li>
					<div style={{ paddingLeft: "10vw" }}>
						<li><a>Home</a></li>
						<li><a>Surfing</a></li>
						<li><a>Hula</a></li>
						<li><a>Vulcano</a></li>
					</div>
					<li style={{ float: "right", padding: "1vw" }}>
						<button> Book a trip </button></li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar;