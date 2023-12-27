import { FaArrowRight } from "react-icons/fa";

export default function SectionHero() {

    return (

        <>

            <div className="container px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-lg-6">
                        <h1 id="laing-hero-text-header" className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                            Enjoy your time working
                        </h1>
                        <p id="landing-hero-text-lead" className="lead">
                            Etiam condimentum duis molestie malesuada volutpat pellentesque sed. 
                            Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis 
                            massa tellus imperdiet aenean nulla id.
                            <br />
                        </p>  
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button id="nav-text-sign-button" type="submit">
                                See how it helped others <FaArrowRight className="ms-3"/>
                            </button>
                        </div>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="./section-hero.png" className="rounded d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                </div>
            </div>

        </>

    )

}