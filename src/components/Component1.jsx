
import '../styles/Component1.scss';
import img1 from "../asset/man1.png"
function Component1() {
  return (
    <>
      <div className="Component1">
        <div className='spanbox'>
          <span>Hello Kamran!</span>
          <span>It’s good to see you <br /> again.</span>
        </div>
        <img src={img1} alt="man1" />
      </div>
    </>
  );
}

export default Component1;
