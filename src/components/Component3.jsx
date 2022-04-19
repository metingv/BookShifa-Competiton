
import '../styles/Component3.scss';
import img1 from "../assets1/image 15.png"
import img2 from "../assets1/image 26.png"
import img3 from "../assets1/finance 1.png"
import img4 from "../assets1/icon-market.png"
import img5 from "../assets1/icon-market.png"
import { Tab } from "@headlessui/react";
import { useState } from "react"
function Component2() {
    const [data, Setdata] = useState([
        {
            value1: "Learn  Marketing",
            value2: "by Ali Qafarov",
            img: img5
        },
        {
            value1: "Finance Accounting",
            value2: "by Sara Aliyeva",
            img: img3
        },
        {
            value1: "Social Media Mastering",
            value2: "by Orkhan Suleyman",
            img: img1
        },
        {
            value1: "Basics of drawing",
            value2: "by Picasso",
            img: img4
        },
        {
            value1: "Photoshop - Essence",
            value2: "by Farid Aliyev",
            img: img2
        }
    ])

    const [data1, Setdata1] = useState([
        {
            value1: "Learn  Marketing",
            value2: "by Ali Qafarov1",
            img: img5
        },
        {
            value1: "Finance Accounting",
            value2: "by Sara Aliyeva1",
            img: img3
        },
        {
            value1: "Social Media Mastering",
            value2: "by Orkhan Suleyman1",
            img: img1
        },
        {
            value1: "Basics of drawing",
            value2: "by Picasso1",
            img: img4
        },
        {
            value1: "Photoshop - Essence",
            value2: "by Farid Aliyev1",
            img: img2
        }
    ])
    
    return (
        <>
            <div className="Component3">
                <div className="title">Courses</div>
                <Tab.Group>
                    <Tab.List className="TabList">
                        <Tab className="Tab">
                            {({ selected }) => (
                                <div className={`${selected ? "active" : "deactive"} otherClassName...`}>
                                    All Courses
                                </div>
                            )}
                        </Tab>
                        <Tab className="Tab">
                            {({ selected }) => (
                                <div className={selected ? "active" : "deactive"}>For Beginners</div>
                            )}
                        </Tab>
                        <Tab className="Tab">
                            {({ selected }) => (
                                <div className={selected ? "active" : "deactive"}>Experienced</div>
                            )}
                        </Tab>
                        <Tab className="Tab">
                            {({ selected }) => (
                                <div className={selected ? "active" : "deactive"}>Advanced</div>
                            )}
                        </Tab>
                    </Tab.List>
                    <Tab.Panels>
                        <Tab.Panel className="Tabpanel">
                            {
                                data.map((data) => {
                                    return (
                                        <>
                                            <div className="main">
                                                <div className='img1div'>
                                                    <img src={data.img} alt="man1" />
                                                </div>
                                                <div className='spanbox'>
                                                    <span>{data.value1}</span>
                                                    <span>{data.value2}</span>
                                                </div>
                                              <div className='time'><i class="fa-solid fa-clock"></i> 6h 30min</div>
                                              <div><i class="fa-solid fa-fire"></i>4,7</div>

                                                <div>
                                         
                                                </div>
                                                <button>View course</button>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </Tab.Panel>
                        <Tab.Panel className="Tabpanel">
                        {
                                data1.map((data) => {
                                    return (
                                        <>
                                            <div className="main">
                                                <div className='img1div'>
                                                    <img src={data.img} alt="man1" />
                                                </div>
                                                <div className='spanbox'>
                                                    <span>{data.value1}</span>
                                                    <span>{data.value2}</span>
                                                </div>
                                              <div className='time'><i class="fa-solid fa-clock"></i> 6h 30min</div>
                                              <div><i class="fa-solid fa-fire"></i>4,7</div>

                                                <div>
                                         
                                                </div>
                                                <button>View course</button>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </Tab.Panel>
                        <Tab.Panel className="Tabpanel"> {
                                data1.map((data) => {
                                    return (
                                        <>
                                            <div className="main">
                                                <div className='img1div'>
                                                    <img src={data.img} alt="man1" />
                                                </div>
                                                <div className='spanbox'>
                                                    <span>{data.value1}</span>
                                                    <span>{data.value2}</span>
                                                </div>
                                              <div className='time'><i class="fa-solid fa-clock"></i> 6h 30min</div>
                                              <div><i class="fa-solid fa-fire"></i>4,7</div>

                                                <div>
                                         
                                                </div>
                                                <button>View course</button>
                                            </div>
                                        </>
                                    )
                                })
                            }</Tab.Panel>
                            <Tab.Panel className="Tabpanel"> {
                                data1.map((data) => {
                                    return (
                                        <>
                                            <div className="main">
                                                <div className='img1div'>
                                                    <img src={data.img} alt="man1" />
                                                </div>
                                                <div className='spanbox'>
                                                    <span>{data.value1}</span>
                                                    <span>{data.value2}</span>
                                                </div>
                                              <div className='time'><i class="fa-solid fa-clock"></i> 6h 30min</div>
                                              <div><i class="fa-solid fa-fire"></i>4,7</div>

                                                <div>
                                         
                                                </div>
                                                <button>View course</button>
                                            </div>
                                        </>
                                    )
                                })
                            }</Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>

            </div>
        </>
    );
}

export default Component2;
