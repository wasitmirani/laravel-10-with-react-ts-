import React, { useEffect, useState } from "react";
import Sidebar from "@/utils/sidebar";
import { Link } from "react-router-dom";
import { Props } from "@/interfaces/sidebar_interface";


 
 
const SideBarMenu : React.FC<Props>=  ({ menu }) =>{

    return (
    
        <div className="app-menu navbar-menu">

            <div className="navbar-brand-box">

                <a href="index.html" className="logo logo-dark">
                    <span className="logo-sm">
                        <img src="/assets/images/logo-sm.png" alt="" height="22"/>
                    </span>
                    <span className="logo-lg">
                        <img src="/assets/images/logo-dark.png" alt="" height="17"/>
                    </span>
                </a>

                <a href="index.html" className="logo logo-light">
                    <span className="logo-sm">
                        <img src="/assets/images/logo-sm.png" alt="" height="22"/>
                    </span>
                    <span className="logo-lg">
                        <img src="/assets/images/logo-light.png" alt="" height="17"/>
                    </span>
                </a>
                <button type="button" className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
                    <i className="ri-record-circle-line"></i>
                </button>
            </div>

            <div id="scrollbar">
                <div className="container-fluid">

                    <div id="two-column-menu">
                    </div>
                    <ul className="navbar-nav" id="navbar-nav">
                      
					{menu && menu.map((menu_item,index) => (
						menu_item.type === 'heading' ? (
							<li key={'heading-'+index} className="menu-title">
							<span data-key={'t-'+index}>{menu_item.title}</span>
							</li>
						) : menu_item.type === 'single' ? (
							<li key={index} className="nav-item">
							<Link className="nav-link menu-link" to={`${menu_item.link}`}>
								<i className={menu_item.icon + ' icon-dual'}></i>
								<span data-key={'t-'+index}>{menu_item.title}</span>
							</Link>
							</li>
						) : menu_item.type === 'multi' ? (
							
							 <li className="nav-item">
							 <a className="nav-link menu-link" href={'#sidebar'+index} data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls={'sidebar'+index}>
								 {/* <i data-feather="home" className="icon-dual"></i>  */}
								 <i className={menu_item.icon + ' icon-dual'}></i>
								 <span data-key={'t-'+index}>{menu_item.title}</span>
							 </a>
							 <div className="collapse menu-dropdown" id={'sidebar'+index}>
								 <ul className="nav nav-sm flex-column">
									{menu_item?.sub_menu?.map((item)=>(
						  			<li  className="nav-item">
										 <Link to={item.link} className="nav-link" data-key="t-analytics"> {item.title} </Link>
									 </li>
									))}
									
								 </ul>
							 </div>
						 </li>
						) : null
						))}
                       
						
                       

                    </ul>
                </div>
            </div>

            <div className="sidebar-background"></div>
        </div>
    );
}

export default SideBarMenu;