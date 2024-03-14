import React from "react";
import main2 from "./images/main3.jpg";
import main1 from "./images/main2.jpg";
import main3 from "./images/main4.jpg"


export default function Layer() {
    return (

        <div className="container align-items-center">
            <hr className="featurette-divider" />
            <div className="row featurette">
                <div className="col-md-7 py-5">
                    <h2 className="featurette-heading text-light fw-normal lh-1">First featurette heading.</h2>
                    <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
                </div>
                <div className="col-md-5">
                    <img src={main1} width={"450px"} height={"350px"} style={{ border: "1px solid white", boxShadow: "", borderRadius: "30px" }} />
                </div>
            </div>
            <hr className="featurette-divider" />
            <div className="row featurette">
                <div className="col-md-7 order-md-2 py-5">
                    <h2 className="featurette-heading text-light fw-normal lh-1">Oh yeah, it’s that good.</h2>
                    <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
                </div>
                <div className="col-md-5 order-md-1">
                    <img src={main2} width={"450px"} height={"350px"} style={{ border: "1px solid white", boxShadow: "", borderRadius: "30px" }} />
                </div>
            </div>
            <hr className="featurette-divider" />
            <div className="row featurette">
                <div className="col-md-7 py-5">
                    <h2 className="featurette-heading text-light fw-normal lh-1">And lastly, this one.</h2>
                    <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
                </div>
                <div className="col-md-5">
                    <img src={main3} width={"450px"} height={"350px"} style={{ border: "1px solid white", boxShadow: "", borderRadius: "20px" }} />
                </div>
            </div>
            <hr className="featurette-divider" />
        </div>

    );
}