export default function Header() {

    return (

        <>

            <nav className="navbar navbar-expand-lg shadow-sm p-4 mb-4 bg-white">
                <div className="container-fluid">
                <a id="mobile-nav" className="navbar-brand" href="#"style={{ fontSize: '32px', fontStyle: 'normal', fontWeight: '700', lineHeight: '110%'}}>magnifico</a>
                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a id="header_text" className="navbar-brand" href="#">magnifico</a>
                        <ul id="nav-list-text" className="navbar-nav mx-auto me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-4">
                                <a className="nav-link active">Products</a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link active">Solutions</a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link active">Services</a>
                            </li>
                            <li className="nav-item me-4">
                                <a className="nav-link active">Help Center</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active">Pricing</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button id="nav-text-login-button" className="btn btn-md text-primary" type="submit">Login</button>
                            <button id="nav-text-sign-button" type="submit">Sign Up Free</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>

    )

}