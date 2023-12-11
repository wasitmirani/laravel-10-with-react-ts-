import React, {useState} from "react";

const HeaderMenu : React.FC = ()=>{
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);

        const handleDropdownToggle = () => {
            setIsDropdownOpen(!isDropdownOpen);
        };
        return (
            <header className="header-area bg-white mb-24">
            <div className="row align-items-center">
                <div className="col-lg-6 col-sm-6">
                    <div className="header-left-content">
                        <ul className="list-unstyled ps-0 mb-0 d-flex justify-content-center justify-content-lg-start justify-content-md-start align-items-center">
                            <li>
                                <div className="burger-menu d-none d-lg-block">
                                    <span className="top-bar"></span>
                                    <span className="middle-bar"></span>
                                    <span className="bottom-bar"></span>
                                </div>
                                <div className="responsive-burger-menu d-block d-lg-none">
                                    <span className="top-bar"></span>
                                    <span className="middle-bar"></span>
                                    <span className="bottom-bar"></span>
                                </div>
                            </li>
                            <li>
                                <form className="src-form position-relative z-1">
                                    <input type="text" className="form-control" placeholder="Search Here"/>
                                    <button className="bg-transparent position-absolute position-absolute top-50 end-0 translate-middle border-0 ps-0 pe-1">
                                        <i data-feather="search"></i>
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-6">
                    <div className="header-right-content float-lg-end float-md-end">
                        <ul className="list-unstyled ps-0 mb-0 d-flex justify-content-center justify-content-lg-end justify-content-md-end align-items-center">
                            <li>
                                <div className="dropdown mail languages">
                                    <button className="btn btn-secondary border-0 p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src="assets/images/country/usa.png" alt="usa"/>
                                    </button>
                                    <div className="dropdown-menu dropdown-lg p-0 border-0 box-shadow">
                                        <h6 className="dropdown-item-text fs-15 fw-semibold m-0 py-3 border-bottom border-color d-flex justify-content-between align-items-center">
                                            Language 
                                            <span className="text-white bg-danger fs-12 py-1 px-1 rounded-1 fw-normal">09</span>
                                        </h6> 
                                        
                                        <div className="notification-menu h-400" data-simplebar>
                                            <div className=" d-flex justify-content-between">
                                                <a href="javascript:;" className="dropdown-item py-3">
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar-md rounded-circle text-center flex-shrink-0">
                                                            <img src="assets/images/country/united-states.png" alt="united-states"/>
                                                        </div>
                                                        <div className="flex-grow-1 ms-2 text-truncate">
                                                            <h6 className="my-0 fs-14 fw-medium">English</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="javascript:;" className="dropdown-item py-3">
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar-md rounded-circle text-center flex-shrink-0">
                                                            <img src="assets/images/country/canada.png" alt="canada"/>
                                                        </div>
                                                        <div className="flex-grow-1 ms-2 text-truncate">
                                                            <h6 className="my-0 fs-14 fw-medium">Canada</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className=" d-flex justify-content-between">
                                                <a href="javascript:;" className="dropdown-item py-3">
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar-md rounded-circle text-center flex-shrink-0">
                                                            <img src="assets/images/country/china.png" alt="china"/>
                                                        </div>
                                                        <div className="flex-grow-1 ms-2 text-truncate">
                                                            <h6 className="my-0 fs-14 fw-medium">China</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="javascript:;" className="dropdown-item py-3">
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar-md rounded-circle text-center flex-shrink-0">
                                                            <img src="assets/images/country/france.png" alt="france"/>
                                                        </div>
                                                        <div className="flex-grow-1 ms-2 text-truncate">
                                                            <h6 className="my-0 fs-14 fw-medium">France</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className=" d-flex justify-content-between">
                                                <a href="javascript:;" className="dropdown-item py-3">
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar-md rounded-circle text-center flex-shrink-0">
                                                            <img src="assets/images/country/germany.png" alt="Germany"/>
                                                        </div>
                                                        <div className="flex-grow-1 ms-2 text-truncate">
                                                            <h6 className="my-0 fs-14 fw-medium">Germany</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="javascript:;" className="dropdown-item py-3">
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar-md rounded-circle text-center flex-shrink-0">
                                                            <img src="assets/images/country/mexico.png" alt="mexico"/>
                                                        </div>
                                                        <div className="flex-grow-1 ms-2 text-truncate">
                                                            <h6 className="my-0 fs-14 fw-medium">Mexico</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className=" d-flex justify-content-between">
                                                <a href="javascript:;" className="dropdown-item py-3">
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar-md rounded-circle text-center flex-shrink-0">
                                                            <img src="assets/images/country/russia.png" alt="russia"/>
                                                        </div>
                                                        <div className="flex-grow-1 ms-2 text-truncate">
                                                            <h6 className="my-0 fs-14 fw-medium">Russia</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="javascript:;" className="dropdown-item py-3">
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar-md rounded-circle text-center flex-shrink-0">
                                                            <img src="assets/images/country/arabic.png" alt="arabic"/>
                                                        </div>
                                                        <div className="flex-grow-1 ms-2 text-truncate">
                                                            <h6 className="my-0 fs-14 fw-medium">Arabic</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <a href="javascript:;" className="dropdown-item text-center text-white border-top border-color pt-2 pb-2 d-block bg-primary rounded-bottom fs-15">
                                            View all
                                        </a>
                                    </div>
                                </div>
                            </li>

                            <li className="ms-lg-4 ms-md-4 ms-2">
                                <div className="dropdown mail">
                                    <button className="btn btn-secondary fullscreen-btn border-0 p-0 position-relative" id="fullscreen-button">
                                        <span className="maximize">
                                            <i data-feather="maximize"></i>
                                        </span>
                                        <span className="minimize top-50 start-50 translate-middle position-absolute">
                                            <i data-feather="minimize"></i>
                                        </span>
                                    </button>
                                </div>
                            </li>

                            <li className="ms-lg-4 ms-md-4 ms-2">
                                <div className="dropdown mail apps">
                                    <button className="btn btn-secondary border-0 p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i data-feather="grid"></i>
                                    </button>
                                    <div className="dropdown-menu dropdown-lg p-0 border-0 box-shadow">
                                        <h6 className="dropdown-item-text fs-15 fw-semibold m-0 py-3 border-bottom border-color d-flex justify-content-between align-items-center">
                                            Apps 
                                            <span className="text-white bg-danger fs-12 py-1 px-1 rounded-1 fw-normal">12</span>
                                        </h6> 
                                        
                                        <div className="h-255" data-simplebar>
                                            <div className="apps-menu d-flex flex-wrap align-items-center justify-content-center">
                                                <a href="javascript:;" className="dropdown-item m-2 border-1">
                                                    <img src="assets/images/apps/gmail.png" alt="gmail"/>
                                                    <span className="d-block fs-14 fw-medium text-dark mt-2">Gmail</span>
                                                </a>
                                                <a href="javascript:;" className="dropdown-item m-2 border-1">
                                                    <img src="assets/images/apps/playstore.png" alt="playstore"/>
                                                    <span className="d-block fs-14 fw-medium text-dark mt-2">Play Store</span>
                                                </a>
                                                <a href="javascript:;" className="dropdown-item m-2 border-1">
                                                    <img src="assets/images/apps/drive.png" alt="drive"/>
                                                    <span className="d-block fs-14 fw-medium text-dark mt-2">Drive</span>
                                                </a>
                                                <a href="javascript:;" className="dropdown-item m-2 border-1">
                                                    <img src="assets/images/apps/account.png" alt="account"/>
                                                    <span className="d-block fs-14 fw-medium text-dark mt-2">Account</span>
                                                </a>
                                                <a href="javascript:;" className="dropdown-item m-2 border-1">
                                                    <img src="assets/images/apps/calender.png" alt="calender"/>
                                                    <span className="d-block fs-14 fw-medium text-dark mt-2">Calender</span>
                                                </a>
                                                <a href="javascript:;" className="dropdown-item m-2 border-1">
                                                    <img src="assets/images/apps/figma.png" alt="figma"/>
                                                    <span className="d-block fs-14 fw-medium text-dark mt-2">Figma</span>
                                                </a>
                                                <a href="javascript:;" className="dropdown-item m-2 border-1">
                                                    <img src="assets/images/apps/google-sheets.png" alt="google-sheets"/>
                                                    <span className="d-block fs-14 fw-medium text-dark mt-2">Sheets</span>
                                                </a>
                                                <a href="javascript:;" className="dropdown-item m-2 border-1">
                                                    <img src="assets/images/apps/google.png" alt="google"/>
                                                    <span className="d-block fs-14 fw-medium text-dark mt-2">Google</span>
                                                </a>
                                                <a href="javascript:;" className="dropdown-item m-2 border-1">
                                                    <img src="assets/images/apps/microsoft-word.png" alt="microsoft-word"/>
                                                    <span className="d-block fs-14 fw-medium text-dark mt-2">Microsoft</span>
                                                </a>
                                                <a href="javascript:;" className="dropdown-item m-2 border-1">
                                                    <img src="assets/images/apps/powerpoint.png" alt="powerpoint"/>
                                                    <span className="d-block fs-14 fw-medium text-dark mt-2">Powerpoint</span>
                                                </a>
                                                <a href="javascript:;" className="dropdown-item m-2 border-1">
                                                    <img src="assets/images/apps/sketch.png" alt="sketch"/>
                                                    <span className="d-block fs-14 fw-medium text-dark mt-2">Sketch</span>
                                                </a>
                                                <a href="javascript:;" className="dropdown-item m-2 border-1">
                                                    <img src="assets/images/apps/translate.png" alt="translate"/>
                                                    <span className="d-block fs-14 fw-medium text-dark mt-2">Translate</span>
                                                </a>
                                            </div>
                                        </div>
                                        <a href="javascript:;" className="dropdown-item text-center text-white border-top border-color py-2 d-block bg-primary rounded-bottom z-1 position-relative fs-15">
                                            View all
                                        </a>
                                    </div>
                                </div>
                            </li>

                            <li className="ms-lg-4 ms-md-4 ms-2">
                                <div className="dropdown mail">
                                    <button className="btn btn-secondary border-0 p-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i data-feather="mail"></i>
                                    </button>
                                    <div className="dropdown-menu dropdown-lg p-0 border-0 box-shadow">
                                        <h6 className="dropdown-item-text fs-15 fw-semibold m-0 py-3 border-bottom border-color d-flex justify-content-between align-items-center">
                                            Email 
                                            <span className="text-white bg-danger fs-12 py-1 px-1 rounded-1 fw-normal">08</span>
                                        </h6> 
                                        
                                        <div className="notification-menu h-400" data-simplebar>
                                            <a href="inbox.html" className="dropdown-item py-3">
                                                <small className="float-end ps-2 text-body fs-12">1 min ago</small>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-md rounded-circle text-center flex-shrink-0">
                                                        <i data-feather="shopping-bag"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2 text-truncate">
                                                        <h6 className="my-0 fs-14 fw-medium">Your Order Has Been Shipped</h6>
                                                        <small className="mb-0 text-body fs-12">Order No: 123456 Has Shipped To Your Delivery Address</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="inbox.html" className="dropdown-item py-3">
                                                <small className="float-end ps-2 text-body fs-12">3 min ago</small>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-md rounded-circle text-center flex-shrink-0">
                                                        <i data-feather="percent"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2 text-truncate">
                                                        <h6 className="my-0 fs-14 fw-medium">Discount Available</h6>
                                                        <small className="mb-0 text-body fs-12">Discount Available On Selected Products</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="inbox.html" className="dropdown-item py-3">
                                                <small className="float-end ps-2 text-body fs-12">4 min ago</small>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-md rounded-circle text-center flex-shrink-0">
                                                        <i data-feather="user-check"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2 text-truncate">
                                                        <h6 className="my-0 fs-14 fw-medium">Account Has Been Verified</h6>
                                                        <small className="mb-0 text-body fs-12">Your Account Has Been Verified Sucessfully</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="inbox.html" className="dropdown-item py-3">
                                                <small className="float-end ps-2 text-body fs-12">6 min ago</small>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-md rounded-circle text-center flex-shrink-0">
                                                        <i data-feather="check-circle"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2 text-truncate">
                                                        <h6 className="my-0 fs-14 fw-medium">Order Placed <span className="text-success">ID: #1116773</span></h6>
                                                        <small className="mb-0 text-body fs-12">Order Placed Successfully</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="inbox.html" className="dropdown-item py-3">
                                                <small className="float-end ps-2 text-body fs-12">8 min ago</small>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-md rounded-circle text-center flex-shrink-0">
                                                        <i data-feather="clock"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2 text-truncate">
                                                        <h6 className="my-0 fs-14 fw-medium">Order Delayed <span className="text-danger">ID: 7731116</span></h6>
                                                        <small className="mb-0 text-body fs-12">Order Delayed Unfortunately</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="inbox.html" className="dropdown-item py-3">
                                                <small className="float-end ps-2 text-body fs-12">1 min ago</small>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-md rounded-circle text-center flex-shrink-0">
                                                        <i data-feather="shopping-bag"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2 text-truncate">
                                                        <h6 className="my-0 fs-14 fw-medium">Your Order Has Been Shipped</h6>
                                                        <small className="mb-0 text-body fs-12">Order No: 123456 Has Shipped To Your Delivery Address</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="inbox.html" className="dropdown-item py-3">
                                                <small className="float-end ps-2 text-body fs-12">3 min ago</small>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-md rounded-circle text-center flex-shrink-0">
                                                        <i data-feather="percent"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2 text-truncate">
                                                        <h6 className="my-0 fs-14 fw-medium">Discount Available</h6>
                                                        <small className="mb-0 text-body fs-12">Discount Available On Selected Products</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="inbox.html" className="dropdown-item py-3">
                                                <small className="float-end ps-2 text-body fs-12">4 min ago</small>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-md rounded-circle text-center flex-shrink-0">
                                                        <i data-feather="user-check"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2 text-truncate">
                                                        <h6 className="my-0 fs-14 fw-medium">Account Has Been Verified</h6>
                                                        <small className="mb-0 text-body fs-12">Your Account Has Been Verified Sucessfully</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="inbox.html" className="dropdown-item py-3">
                                                <small className="float-end ps-2 text-body fs-12">6 min ago</small>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-md rounded-circle text-center flex-shrink-0">
                                                        <i data-feather="check-circle"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2 text-truncate">
                                                        <h6 className="my-0 fs-14 fw-medium">Order Placed <span className="text-success">ID: #1116773</span></h6>
                                                        <small className="mb-0 text-body fs-12">Order Placed Successfully</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="inbox.html" className="dropdown-item py-3">
                                                <small className="float-end ps-2 text-body fs-12">8 min ago</small>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-md rounded-circle text-center flex-shrink-0">
                                                        <i data-feather="clock"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2 text-truncate">
                                                        <h6 className="my-0 fs-14 fw-medium">Order Delayed <span className="text-danger">ID: 7731116</span></h6>
                                                        <small className="mb-0 text-body fs-12">Order Delayed Unfortunately</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <a href="inbox.html" className="dropdown-item text-center text-white border-top border-color pt-2 pb-2 d-block bg-primary rounded-bottom fs-15">
                                            View all
                                        </a>
                                    </div>
                                </div>
                            </li>

                            <li className="ms-lg-4 ms-md-4 ms-2">
                            <div className={`dropdown notifications${isDropdownOpen ? ' show' : ''}`}>
                                                    <button
                                                        className="btn btn-secondary border-0 p-0 position-relative badge"
                                                        type="button"
                                                        onClick={handleDropdownToggle}
                                                    >
                                                        <i data-feather="bell"></i>
                                                    </button>
                                                    <div className={`dropdown-menu dropdown-lg p-0 border-0 box-shadow${isDropdownOpen ? ' show' : ''}`}>
                                                        {/* ... your dropdown content ... */}
                                                        <h6 className="dropdown-item-text fs-15 fw-semibold m-0 py-3 border-bottom border-color d-flex justify-content-between align-items-center">
                                            Notifications 
                                            <span className="text-white bg-danger fs-12 py-1 px-1 rounded-1 fw-normal">08</span>
                                        </h6> 
                                        
                                        <div className="notification-menu h-400" >
                                            <a href="notifications.html" className="dropdown-item py-3">
                                                <small className="float-end ps-2 text-body fs-12">6 min ago</small>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-md rounded-circle text-center flex-shrink-0">
                                                        <i data-feather="check-circle"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2 text-truncate">
                                                        <h6 className="my-0 fs-14 fw-medium">Order Placed <span className="text-success">ID: #1116773</span></h6>
                                                        <small className="mb-0 text-body fs-12">Order Placed Successfully</small>
                                                    </div>
                                                </div>
                                            </a>
                                            </div>
                                                        <a href="notification.html" className="dropdown-item text-center text-white border-top border-color pt-2 pb-2 d-block bg-primary rounded-bottom fs-15">
                                                        View all
                                                        </a>
                                                    </div>
                                                    </div>
                                {/* <div className="dropdown notifications">
                                    <button className="btn btn-secondary border-0 p-0 position-relative badge" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i data-feather="bell"></i>
                                    </button>
                                    <div className="dropdown-menu dropdown-lg p-0 border-0 box-shadow">
                                        <h6 className="dropdown-item-text fs-15 fw-semibold m-0 py-3 border-bottom border-color d-flex justify-content-between align-items-center">
                                            Notifications 
                                            <span className="text-white bg-danger fs-12 py-1 px-1 rounded-1 fw-normal">08</span>
                                        </h6> 
                                        
                                        <div className="notification-menu h-400" data-simplebar>
                                            <a href="notifications.html" className="dropdown-item py-3">
                                                <small className="float-end ps-2 text-body fs-12">6 min ago</small>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-md rounded-circle text-center flex-shrink-0">
                                                        <i data-feather="check-circle"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2 text-truncate">
                                                        <h6 className="my-0 fs-14 fw-medium">Order Placed <span className="text-success">ID: #1116773</span></h6>
                                                        <small className="mb-0 text-body fs-12">Order Placed Successfully</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="notifications.html" className="dropdown-item py-3">
                                                <small className="float-end ps-2 text-body fs-12">8 min ago</small>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-md rounded-circle text-center flex-shrink-0">
                                                        <i data-feather="clock"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2 text-truncate">
                                                        <h6 className="my-0 fs-14 fw-medium">Order Delayed <span className="text-danger">ID: 7731116</span></h6>
                                                        <small className="mb-0 text-body fs-12">Order Delayed Unfortunately</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="notifications.html" className="dropdown-item py-3">
                                                <small className="float-end ps-2 text-body fs-12">1 min ago</small>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-md rounded-circle text-center flex-shrink-0">
                                                        <i data-feather="shopping-bag"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2 text-truncate">
                                                        <h6 className="my-0 fs-14 fw-medium">Your Order Has Been Shipped</h6>
                                                        <small className="mb-0 text-body fs-12">Order No: 123456 Has Shipped To Your Delivery Address</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="notifications.html" className="dropdown-item py-3">
                                                <small className="float-end ps-2 text-body fs-12">3 min ago</small>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-md rounded-circle text-center flex-shrink-0">
                                                        <i data-feather="percent"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2 text-truncate">
                                                        <h6 className="my-0 fs-14 fw-medium">Discount Available</h6>
                                                        <small className="mb-0 text-body fs-12">Discount Available On Selected Products</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="notifications.html" className="dropdown-item py-3">
                                                <small className="float-end ps-2 text-body fs-12">4 min ago</small>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-md rounded-circle text-center flex-shrink-0">
                                                        <i data-feather="user-check"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2 text-truncate">
                                                        <h6 className="my-0 fs-14 fw-medium">Account Has Been Verified</h6>
                                                        <small className="mb-0 text-body fs-12">Your Account Has Been Verified Sucessfully</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="notifications.html" className="dropdown-item py-3">
                                                <small className="float-end ps-2 text-body fs-12">6 min ago</small>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-md rounded-circle text-center flex-shrink-0">
                                                        <i data-feather="check-circle"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2 text-truncate">
                                                        <h6 className="my-0 fs-14 fw-medium">Order Placed <span className="text-success">ID: #1116773</span></h6>
                                                        <small className="mb-0 text-body fs-12">Order Placed Successfully</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="notifications.html" className="dropdown-item py-3">
                                                <small className="float-end ps-2 text-body fs-12">8 min ago</small>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-md rounded-circle text-center flex-shrink-0">
                                                        <i data-feather="clock"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2 text-truncate">
                                                        <h6 className="my-0 fs-14 fw-medium">Order Delayed <span className="text-danger">ID: 7731116</span></h6>
                                                        <small className="mb-0 text-body fs-12">Order Delayed Unfortunately</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="notifications.html" className="dropdown-item py-3">
                                                <small className="float-end ps-2 text-body fs-12">1 min ago</small>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-md rounded-circle text-center flex-shrink-0">
                                                        <i data-feather="shopping-bag"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2 text-truncate">
                                                        <h6 className="my-0 fs-14 fw-medium">Your Order Has Been Shipped</h6>
                                                        <small className="mb-0 text-body fs-12">Order No: 123456 Has Shipped To Your Delivery Address</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="notifications.html" className="dropdown-item py-3">
                                                <small className="float-end ps-2 text-body fs-12">3 min ago</small>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-md rounded-circle text-center flex-shrink-0">
                                                        <i data-feather="percent"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2 text-truncate">
                                                        <h6 className="my-0 fs-14 fw-medium">Discount Available</h6>
                                                        <small className="mb-0 text-body fs-12">Discount Available On Selected Products</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="notifications.html" className="dropdown-item py-3">
                                                <small className="float-end ps-2 text-body fs-12">4 min ago</small>
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-md rounded-circle text-center flex-shrink-0">
                                                        <i data-feather="user-check"></i>
                                                    </div>
                                                    <div className="flex-grow-1 ms-2 text-truncate">
                                                        <h6 className="my-0 fs-14 fw-medium">Account Has Been Verified</h6>
                                                        <small className="mb-0 text-body fs-12">Your Account Has Been Verified Sucessfully</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <a href="notification.html" className="dropdown-item text-center text-white border-top border-color pt-2 pb-2 d-block bg-primary rounded-bottom fs-15">
                                            View all
                                        </a>
                                    </div>
                                </div> */}
                            </li>

                            <li className="ms-lg-4 ms-md-4 ms-2">
                                <div className="dropdown user-profile">
                                    <div className="btn border-0 p-0 d-flex align-items-center text-start" data-bs-toggle="dropdown">
                                        <div className="flex-shrink-0">
                                            <img className="rounded-circle user" src="assets/images/user/user.png" alt="user"/>
                                        </div>
                                        <div className="flex-grow-1 ms-2 d-none d-xxl-block">
                                            <h3 className="fs-14 mb-0">Jacob Smith</h3>
                                            <span className="fs-13 text-body">Admin</span>
                                        </div>
                                    </div>
                                    <ul className="dropdown-menu border-0 rounded box-shadow">
                                        <li>
                                            <div className=" text-center border-bottom border-color pb-10 mb-10 d-xxl-none">
                                                <h3 className="fs-14 mb-0">Jacob Smith</h3>
                                                <span className="fs-13 text-body">Admin</span>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="dropdown-item d-flex align-items-center text-body">
                                                <i data-feather="dollar-sign"></i>
                                                <span className="ms-2 fs-14 fw-semibold text-dark">45,8745.48</span>
                                            </div>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center text-body" href="profile.html">
                                                <i data-feather="user"></i>
                                                <span className="ms-2 fs-14">Profile</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center text-body" href="user-profile.html">
                                                <i data-feather="command"></i>
                                                <span className="ms-2 fs-14">User Profile</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center text-body" href="team.html">
                                                <i data-feather="users"></i>
                                                <span className="ms-2 fs-14">Team</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center text-body" href="user.html">
                                                <i data-feather="list"></i>
                                                <span className="ms-2 fs-14">User List</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center text-body" href="add-user.html">
                                                <i data-feather="user-plus"></i>
                                                <span className="ms-2 fs-14">Add User</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center text-body" href="account-settings.html">
                                                <i data-feather="settings"></i>
                                                <span className="ms-2 fs-14">Settings</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item d-flex align-items-center text-body" href="logout.html">
                                                <i data-feather="log-out"></i>
                                                <span className="ms-2 fs-14">Logout</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>

        );
}

export default HeaderMenu;