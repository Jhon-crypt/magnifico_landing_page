import { FaArrowRight } from "react-icons/fa";

export default function SectionThreeHero() {

    return (

        <>

            <div className="container px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-lg-6">
                        <h1 id="third-hero-text-header" className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                            Improve workflow
                        </h1>
                        <br />
                        <div className="d-flex" id="third-hero-flex">
                            <div className="p-2 flex-fill text-center" style={{borderRadius: '8px 0px 0px 8px', backgroundColor: "#F1F5F9", border: '1px solid #CBD5E1', padding: '16px', alignItems: 'center'}}>Research</div>
                            <div className="p-2 flex-fill text-center" style={{border: '1px solid #CBD5E1', padding: '16px', alignItems: 'center'}}>Plan</div>
                            <div className="p-2 flex-fill text-center" style={{borderRadius: '0px 8px 8px 0px', border: '1px solid #CBD5E1', padding: '16px', alignItems: 'center'}}>Design</div>
                        </div>
                        <br />
                        <p id="landing-hero-text-lead" className="lead">
                            Etiam condimentum duis molestie malesuada volutpat pellentesque sed.
                            Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis
                            massa tellus imperdiet aenean nulla.
                            <br />
                        </p>
                        <br />
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button id="nav-text-sign-button" type="submit">
                                See how it helped others <FaArrowRight className="ms-3" />
                            </button>
                        </div>
                    </div>
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src="./Video.png" className="rounded d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                </div>

            </div>

        </>

    )

}