import { Menu } from "@headlessui/react";
import '../styles/Component4.scss';
import img1 from "../assets1/image 24.png"
import img2 from "../assets1/xy.png"
function Dropdown1() {
  return (
      <div className="Component4">

      <div className="inputdiv">
      <input type="text" />
      <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      
  
      <div style={{display:"flex",alignItems:"center"}}>
    <Menu className="Menu">
      {({ open }) => (
        // open propsunu aldiq
        <>
         <img src={img1} />
          <Menu.Button className="MenuButton">
          <img src={img2} />
            {/* <i class="fa-solid fa-arrow-down"></i> */}
          </Menu.Button>
          {!open && (
            <>
              {/* <h1>Menu aciqdir </h1> */}
              <Menu.Items className="MenuItems">
    
                <Menu.Item>
                 <div className="box">

                 </div>
                </Menu.Item>
                <Menu.Item>
                 <div className="box">

                 </div>
                </Menu.Item>
                <Menu.Item>
                 <div className="box">

                 </div>
                </Menu.Item>
               
              </Menu.Items>
            </>
          )}
        </>
      )}
    </Menu>
    </div>
    </div>
  );
}

export default Dropdown1;
