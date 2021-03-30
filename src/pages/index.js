import React from "react"
import Flip from './FlipComponent';
import Footer from "./Footer";
import Img1 from "../../images/img1.jpg";
import Img2 from "../../images/img2.jpg";
import Img3 from "../../images/img3.jpg";
import Img4 from "../../images/img4.jpg";
import Img5 from "../../images/img5.jpg";
import Img6 from "../../images/img6.jpg";
import Img7 from "../../images/img7.jpg";
import Img8 from "../../images/img8.jpg";

import './index.css';

function Home() {

    return (
        <React.Fragment>
            <div className="header">
                <h1 className="header-text">I LOVE YOU BUBA...</h1>
            </div>
            <div className="row">
                <div className="column">
                    <Flip img1={Img1} img2={Img2} name1='Riya Thakur' des1='Multi talented person' name2='Choti' des2='Loved by all' />
                </div>
                <div className="column">
                    <Flip img1={Img3} img2={Img4} name1='Riyu' des1='You are the best thing that happened to me' name2='Teddy' des2='Yes you are my personal teddy' />
                </div>
                <div className="column">
                    <Flip img1={Img5} img2={Img6} name1='Buba' des1='Need to take care of you like a child' name2='baby' des2='This is special coz you are my sweetest baccha' />
                </div>
                <div className="column">
                    <Flip img1={Img7} img2={Img8} name1='Sweetheart' des1='This defines the love that i have for you' name2='Sweety Pie' des2='Coz you are sweet as a pie' />
                </div>
            </div>
           <Footer />
        </React.Fragment>
    )
}

export default Home;
