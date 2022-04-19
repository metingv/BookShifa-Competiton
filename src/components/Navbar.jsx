
import '../styles/navbar.scss';
import img1 from "../assets1/image 16.png"
import img2 from "../assets1/image 17.png"
import img3 from "../assets1/image 18.png"
import img4 from "../assets1/image 19.png"
import img5 from "../assets1/image 22.png"
import img6 from "../assets1/image 23.png"


function Navbar() {
  return (
    <>
    <div className="Navbar">
      <span>CP</span>
      <ul>
        <li>
       <img src={img1} />
       <img src={img2} />
       <img src={img3} />
       <img src={img4} />
       <img src={img5} />
        </li>
      </ul>
      <img src={img6} />
    </div>
    </>
  );
}

export default Navbar;
