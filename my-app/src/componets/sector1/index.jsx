import React,{ useState } from "react";
import "./style.css"
import A1  from'../img/A1.png'
import A2  from'../img/A2.png'
import A3  from'../img/A3.png'
import A4  from'../img/A4.png'
import A5  from'../img/A5.png'
import A6  from'../img/A6.png'

const Sector1=()=>{
    const[set, getel]=useState([
        {
            img:A1,
            names:"Dashboard",
            text:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove."
        },
        {
            img:A2,
            names:"Administration",
            text:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove."
        },
        {
            img:A3,
            names:"Make Money",
            text:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove."
        },
        {
            img:A4,
            names:"SEO Monitoring",
            text:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove."
        },
        {
            img:A5,
            names:"Online Marketing",
            text:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove."
        },
        {
            img:A6,
            names:"Business Analytics",
            text:"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove."
        },
        


    ])
    return <div className="App">
          <div> 
            <h2 style={{margin: 15+'px'}}>Our Awesome Features</h2>
           <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div className=" P-ss">
          {set.map((el, index)=>{
           return <div  className="G-flex G-contener l-margin" kay={index}>
                <span className="icon"><img src={el.img} alt="" /></span>
                <div className="P-conte">
                    <h3 className="list2">{el.names}</h3>
                    <p  className="list2">{el.text}</p>
                </div>
            </div>})}
            </div>
    </div>
}
export default Sector1