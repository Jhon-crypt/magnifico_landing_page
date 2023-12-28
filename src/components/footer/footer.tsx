export default function Footer() {

    return (

        <>

            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <p id="footerHeader" className="col-md-4 mb-0 text-body-secondary">&copy; 2023 Oladele John</p>

                    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                        <svg className="bi me-2" width="40" height="32"><use/></svg>
                    </a>

                    <ul className="nav col-md-4 justify-content-end" id="footerNavList">
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Terms</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Privacy</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Support</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Resources</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Contact</a></li>
                    </ul>
                </footer>
            </div>

        </>

    )

}