import React, { useEffect } from 'react';
import SideBarMenu from './components/sidebar';
import HeaderMenu from './components/header';
import { useRoutes } from "react-router-dom";
import routes  from "../routes/router";
const Master : React.FC=()=>{
	const app_routes = useRoutes(routes);
	useEffect(() => {
		// This function will run when the component is mounted
		const handleLoad = () => {
		  // Find and add the class to the element with the specific class name
		  const preloader = document.querySelector('.preloader');
		  if (preloader) {
			preloader.classList.add('preloader-deactivate');
		  }
		};
	
		// Attach the handleLoad function to the window's load event
		window.addEventListener('load', handleLoad);
	
		// Cleanup: Remove the event listener when the component is unmounted
		return () => {
		  window.removeEventListener('load', handleLoad);
		};
	  }, []); 
	
    return (
      <>
      
      {/* <!--=== Start Preloader Section ===--> */} 
		<div className="preloader">
            <div className="content">
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
                <div className="ball"></div>
            </div>
        </div>
		{/* <!--=== End Preloader Section ===--> */}
		
		{/* <!--=== Start Sidebar Menu Area ===--> */}
			<SideBarMenu/>
		{/* <!--=== End Sidebar Menu Area ===--> */}

		{/* <!--=== Start Main Content Area ===--> */}
		<div className="main-content-area">
			<div className="container-fluid">
				{/* <!--=== Start Header Area ===--> */}
						<HeaderMenu/>
				{/* <!--=== End Header Area ===--> */}

				{/* <!--=== Start Website Overview Area ===--> */}
				<div className="website-overview-area">
					
					{app_routes}
				</div>
				{/* <!--=== End Website Overview Area ===--> */}

				{/* <!--=== Start  Visitors By Channel Report  Area ===--> */}
	
				{/* <!--=== End  Visitors By Channel Report  Area ===-->  */}
			</div>

			<div className="flex-grow-1"></div>

			{/* <!--=== Start CopyRight Area ===--> */}
			
			{/* <!--=== End CopyRight Area ===--> */}
		
        </div>
		{/* <!-- End Go Top Area --> */}

      </>
    );
}

export default Master;