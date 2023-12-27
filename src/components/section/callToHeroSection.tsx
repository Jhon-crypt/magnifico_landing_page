export default function CallToActionSection() {

    return (

        <>

            <div id="callToActionSection" className="container px-4 py-5 my-5 text-center">
                <h1 id="callToActionHeaderText" className="display-5 fw-bold">Join the community today</h1>
                <div className="col-lg-6 mx-auto">
                    <p id="callToActionTextLead" className="lead mb-4">Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button className="shadow p-4 mb-4" style={{ padding : '20px 24px', fontSize: '24px', fontStyle: 'normal', fontWeight: '700', lineHeight: '24px', letterSpacing: '0.5px'}} id="nav-text-sign-button" type="submit">Sign Up For Free</button>
                    </div>
                </div>
            </div>

        </>

    )

}