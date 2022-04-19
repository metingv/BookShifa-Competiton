
import '../styles/Component2.scss';
import img1 from "../assets1/com.png"
import img2 from "../assets1/rigth.png"
import img3 from "../assets1/left.png"
function Component2() {
  return (
    <>
      <div className="Component2">
          <div className='img1div'>
      <img src={img1} alt="man1" />
      </div>
          <div className='spanbox'>
        <span>Introduction to Frontend</span>
        <span>by Allahverdi Aliyev</span>
        </div>
        <div className='surcle'>83%</div>
        <button>Continue</button> 
        <div>
        <img src={img3} alt="man1" className='img2' />
        <img src={img2} alt="man1" className='img3' />
        </div>
      </div>
    </>
  );
}

export default Component2;
