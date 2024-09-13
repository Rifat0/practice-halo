import logo from '@/public/assets/images/logo/logo_light.png';
import toggle from '@/public/assets/images/nav_toggle_icon.png';
import moment from 'moment';
import Image from 'next/image';
import { NavBarUser } from './NavBarUser';

export const NavBar = () => {
    var today = moment();

    return (
        <div className="page-header row">
            <div className="header-logo-wrapper col-auto">
                <div className="logo-wrapper">
                    <a href="index.html">
                    <Image className="img-fluid for-light" src={logo} alt="Logo"/>
                    <Image className="img-fluid for-dark" src={logo} alt="Logo"/>
                    </a>
                </div>
            </div>
            <div className="col-4 col-xl-4 page-title">
                <h4 className="f-w-700">{today.format('dddd, MMMM Do')}</h4>            
            </div>
            <div className="header-wrapper col m-0">
                <div className="row">
                    <form className="form-inline search-full col" action="#" method="get">
                        <div className="form-group w-100">
                        <div className="Typeahead Typeahead--twitterUsers">
                            <div className="u-posRelative">
                                <input className="demo-input Typeahead-input form-control-plaintext w-100" type="text" placeholder="Search Mofi .." name="q" title="" autoFocus />
                                <div className="spinner-border Typeahead-spinner" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <i className="close-search" data-feather="x"></i>
                            </div>

                            <div className="Typeahead-menu"></div>
                        </div>
                        </div>
                    </form>
                    <div className="header-logo-wrapper col-auto p-0">
                        <div className="logo-wrapper">
                            <a href="index.html">
                                <Image className="img-fluid" src={logo} alt="Logo" />
                            </a>
                        </div>
                        <div className="toggle-sidebar">
                            <Image src={toggle} alt="Toggle" />
                        </div>
                    </div>
                    <div className="nav-right col-xxl-8 col-xl-6 col-md-7 col-8 pull-right right-header p-0 ms-auto">
                        <ul className="nav-menus">
                            <li>
                                <span className="header-search">
                                    <svg>
                                        <use href="assets/svg/icon-sprite.svg"></use>
                                    </svg>
                                </span>
                            </li>

                            <li className="onhover-dropdown">
                                <div className="notification-box">
                                    <span className="icon-notification nav_font">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                        <span className="path3"></span>
                                    </span>
                                    <span className="badge rounded-pill badge-primary">4 </span>
                                </div>
                                <div className="onhover-show-div notification-dropdown">
                                    <h5 className="f-18 f-w-600 mb-0 dropdown-title">Notifications</h5>
                                    <ul className="notification-box">
                                        <li className="d-flex"> 
                                            <div className="flex-shrink-0 bg-light-primary">
                                                <Image src="/assets/images/dashboard/icon/wallet.png" alt="Wallet" width={50} height={50} />
                                            </div>
                                            <div className="flex-grow-1">
                                                <a href="template/letter-box.html">
                                                <h6>New daily offer added</h6></a>
                                                <p>New user-only offer added</p>
                                            </div>
                                        </li>
                                        <li><a className="f-w-700" href="template/letter-box.html">Check all</a></li>
                                    </ul>
                                </div>
                            </li>
                            
                            <NavBarUser />
                        </ul>
                    </div>            
                </div>
            </div>
        </div>
    )
}
