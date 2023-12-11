import React from "react";

const SideBarMenu : React.FC= ()=>{
    return (
    
        <div className="sidebar-menu-area" id="metismenu" data-simplebar>
			<div className="d-flex justify-content-between align-items-center border-bottom border-color bg-white position-sticky top-0 z-1 main-logo-wrap">
				<a href="index.html" className="main-logo d-flex align-items-center text-decoration-none">
					<img className="logo" src="assets/images/logo.png" alt="logo"/>
					<span className="ms-3 logo-text">Dass</span>
				</a>
				<div className="responsive-burger-menu d-block d-xl-none">
					<span className="top-bar"></span>
					<span className="middle-bar"></span>
					<span className="bottom-bar"></span>
				</div>
			</div>
			<ul className="sidebar-menu o-sortable">
				<li><span className="cat">HOME</span></li>
				<li className="mm-active">
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="home"></i></span>
						<span className="title">Dashboard</span>
						<span className="count">5</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="ecommerce.html">eCommerce</a></li>
						<li><a href="analytics.html" className="active">Analytics</a></li>
						<li><a href="lms-courses.html">LMS Courses</a></li>
						<li><a href="project-management.html">Project Management</a></li>
						<li><a href="hr-management.html">HR Management</a></li>
					</ul>
				</li>
				<li><span className="cat">APPS</span></li>
				<li>
					<a href="calendar.html" className="menu-title">
						<span className="icon"><i data-feather="calendar"></i></span>
						<span className="title">Calendar</span>
					</a>
				</li>
				<li>
					<a href="chat.html" className="menu-title">
						<span className="icon"><i data-feather="message-square"></i></span>
						<span className="title">Chat</span>
					</a>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="mail"></i></span>
						<span className="title">Email</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="inbox.html">Inbox</a></li>
						<li><a href="compose.html">Compose</a></li>
						<li><a href="read-email.html">Read Email</a></li>
						<li><a href="starred.html">Starred</a></li>
						<li><a href="drafts.html">Drafts</a></li>
						<li><a href="important.html">Important</a></li>
						<li><a href="trash.html">Trash</a></li>
					</ul>
				</li>
				<li>
					<a href="notes.html" className="menu-title">
						<span className="icon"><i data-feather="file-text"></i></span>
						<span className="title">Notes</span>
					</a>
				</li>
				<li>
					<a href="to-do-list.html" className="menu-title">
						<span className="icon"><i data-feather="clipboard"></i></span>
						<span className="title">To Do List</span>
					</a>
				</li>
				<li>
					<a href="invoice.html" className="menu-title">
						<span className="icon"><i data-feather="printer"></i></span>
						<span className="title">Invoice</span>
					</a>
				</li>
				<li>
					<a href="user-profile.html" className="menu-title">
						<span className="icon"><i data-feather="user"></i></span>
						<span className="title">User Profile</span>
					</a>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="folder"></i></span>
						<span className="title">File Manager</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="my-drive.html">My Drive</a></li>
						<li><a href="recent.html">Recent</a></li>
						<li><a href="deleted-files.html">Deleted Files</a></li>
						<li><a href="image-file.html">Image Files</a></li>
						<li><a href="video-file.html">Video Files</a></li>
						<li><a href="documents.html">Documents</a></li>
						<li><a href="audio.html">Audio</a></li>
					</ul>
				</li>
				<li>
					<a href="contact.html" className="menu-title">
						<span className="icon"><i data-feather="user"></i></span>
						<span className="title">Contact</span>
					</a>
				</li>
				<li><span className="cat">PAGES</span></li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="phone-call"></i></span>
						<span className="title">Contact List</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="members-list.html">Members List</a></li>
						<li><a href="members-grid.html">Members Grid</a></li>
						<li><a href="member-profile.html">Member Profile</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="shopping-cart"></i></span>
						<span className="title">eCommerce</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="products.html">Products</a></li>
						<li><a href="create-product.html">Create Product</a></li>
						<li><a href="product-details.html">Product Details</a></li>
						<li><a href="orders.html">Orders</a></li>
						<li><a href="order-details.html">Order Details</a></li>
						<li><a href="sellers.html">Sellers</a></li>
						<li><a href="customers.html">Customers</a></li>
						<li><a href="cart.html">Cart</a></li>
						<li><a href="checkout.html">Checkout</a></li>
						<li><a href="wishlist.html">Wishlist</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="award"></i></span>
						<span className="title">Courses</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="courses.html">Courses</a></li>
						<li><a href="courses-video.html">Courses Video</a></li>
						<li><a href="course-details.html">Course Details</a></li>
						<li><a href="instructors.html">Instructor</a></li>
						<li><a href="courses-member-profile.html">Member Profile</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="file-plus"></i></span>
						<span className="title">Projects</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="projects.html">Projects</a></li>
						<li><a href="project-create.html">Project Create</a></li>
						<li><a href="tasks.html">Tasks</a></li>
						<li><a href="client-list.html">Client List</a></li>
						<li><a href="client-grid.html">Client Grid</a></li>
						<li><a href="team.html">Team</a></li>
						<li><a href="kanban-board.html">Kanban Board</a></li>
						<li><a href="user.html">User</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="command"></i></span>
						<span className="title">Management</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="bills-summary.html">Bills Summary</a></li>
						<li><a href="notice-board.html">Notice Board</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="pocket"></i></span>
						<span className="title">Analytics</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="visitors-by-channel.html">Visitors By Channel</a></li>
						<li><a href="visitor-reports.html">Visitor Reports</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="lock"></i></span>
						<span className="title">Authentication</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="login.html">Login</a></li>
						<li><a href="register.html">Register</a></li>
						<li><a href="forgot-password.html">Forgot Password</a></li>
						<li><a href="reset-password.html">Reset Password</a></li>
						<li><a href="confirm-mail.html">Confirm Mail</a></li>
						<li><a href="lock-screen.html">Lock Screen</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="grid"></i></span>
						<span className="title">UI Elements</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="alerts.html">Alerts</a></li>
						<li><a href="avatars.html">Avatars</a></li>
						<li><a href="accordion.html">Accordion</a></li>
						<li><a href="drop-downs.html">Drop Downs</a></li>
						<li><a href="badges.html">Badges</a></li>
						<li><a href="breadcrumb.html">Breadcrumb</a></li>
						<li><a href="collapse.html">Collapse</a></li>
						<li><a href="buttons.html">Buttons</a></li>
						<li><a href="button-group.html">Button Group</a></li>
						<li><a href="cards.html">Cards</a></li>
						<li><a href="checks-radios.html">Checks & Radios</a></li>
						<li><a href="carousels.html">Carousels</a></li>
						<li><a href="color-picker.html">Color Picker</a></li>
						<li><a href="date-time-picker.html">Date & Time Picker</a></li>
						<li><a href="colors.html">Colors</a></li>
						<li><a href="drag-drop.html">Drag & Drop</a></li>
						<li><a href="borders.html">Borders</a></li>
						<li><a href="form-overview.html">Form Overview</a></li>
						<li><a href="form-control.html">Form Control</a></li>
						<li><a href="form-layout.html">Form Layout</a></li>
						<li><a href="form-validation.html">Form Validation</a></li>
						<li><a href="select.html">Select</a></li>
						<li><a href="range-slider.html">Range Slider</a></li>
						<li><a href="input-group.html">Input Group</a></li>
						<li><a href="floating-labels.html">Floating Labels</a></li>
						<li><a href="grid.html">Grid</a></li>
						<li><a href="images.html">Images</a></li>
						<li><a href="list-group.html">List Group</a></li>
						<li><a href="pagination.html">Pagination</a></li>
						<li><a href="placeholders.html">Placeholders</a></li>
						<li><a href="spinners.html">Spinners</a></li>
						<li><a href="toasts.html">Toasts</a></li>
						<li><a href="progress-bar.html">Progress Bar</a></li>
						<li><a href="navbar.html">Navbar</a></li>
						<li><a href="media-object.html">Media Object</a></li>
						<li><a href="navs-tabs.html">Navs & Tabs</a></li>
						<li><a href="modal.html">Modal</a></li>
						<li><a href="popovers.html">Popovers</a></li>
						<li><a href="position-stepper.html">Position & Stepper</a></li>
						<li><a href="tooltip.html">Tooltip</a></li>
						<li><a href="content-scroll-bar.html">Scroll Bar</a></li>
						<li><a href="offcanvas.html">Offcanvas</a></li>
						<li><a href="global-custom-className.html">Global Custom className</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="layers"></i></span>
						<span className="title">Pages</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="about-us.html">About Us</a></li>
						<li><a href="pricing-table.html">Pricing Table</a></li>
						<li><a href="treeview.html">Treeview</a></li>
						<li><a href="timeline.html">Timeline</a></li>
						<li><a href="rating.html">Rating</a></li>
						<li><a href="sweet-alerts.html">Sweet Alerts</a></li>
						<li><a href="notifications.html">Notifications</a></li>
						<li><a href="widgets.html">Widgets</a></li>
						<li><a href="faqs.html">FAQs</a></li>
						<li><a href="gallery.html">Gallery</a></li>
						<li><a href="video.html">Video</a></li>
						<li><a href="contact-us.html">Contact Us</a></li>
						<li><a href="blog.html">Blog</a></li>
						<li><a href="blog-details.html">Blog Details</a></li>
						<li><a href="terms-conditions.html">Terms & Conditions</a></li>
						<li><a href="privacy-policy.html">Privacy Policy</a></li>
						<li><a href="empty.html">Empty</a></li>
						<li><a href="coming-soon.html">Coming Soon</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="map"></i></span>
						<span className="title">Maps</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="google-map.html">Google Map</a></li>
						<li><a href="vector-map.html">Vector Map</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="table"></i></span>
						<span className="title">Tables</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="basic-table.html">Basic Table</a></li>
						<li><a href="dark-table.html">Dark Table</a></li>
						<li><a href="ready-table.html">Ready Table</a></li>
						<li><a href="contact-table.html">Contact Table</a></li>
						<li><a href="data-table.html">Data Table</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="table"></i></span>
						<span className="title">Form Elements</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="forms-input.html">Forms Input</a></li>
						<li><a href="input-groups.html">Input Groups</a></li>
						<li><a href="form-editor.html">Form Editor</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="pie-chart"></i></span>
						<span className="title">Charts</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="apex-charts.html">Apex Charts</a></li>
						<li><a href="chart-js.html">Chart Js</a></li>
						<li><a href="e-charts.html">E Charts</a></li>
						<li><a href="am-charts.html">Am Charts</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="package"></i></span>
						<span className="title">Icons</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="feather-icons.html">Feather Icons</a></li>
						<li><a href="remix-icons.html">Remix Icons</a></li>
						<li><a href="font-awesome.html">Font Awesome</a></li>
					</ul>
				</li>
				<li>
					<a href="#" className="has-arrow menu-title" aria-expanded="true">
						<span className="icon"><i data-feather="settings"></i></span>
						<span className="title">Profile Settings</span>
					</a>
					<ul className="sidemenu-second-level">
						<li><a href="profile.html">Profile</a></li>
						<li><a href="account-settings.html">Account Settings</a></li>
						<li><a href="password-change.html">Password Change</a></li>
						<li><a href="profile-edit.html">Profile Edit</a></li>
						<li><a href="logout.html">Logout</a></li>
					</ul>
				</li>
			</ul>
		</div>
     
    );
}

export default SideBarMenu;