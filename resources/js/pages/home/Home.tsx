import React, { useEffect,useState  } from 'react';
// import Helper from "../../utils/helpers";

const Home: React.FC = ()=>{
  
    const [is_loading, setIsLoading] = useState(true);


    useEffect(() => {
     
        setTimeout(() => {
        
           // Call the loadHomeScripts method here
            // Helper.loadHomeScripts();
            setIsLoading(false); // Update the state variable
        }, 1000);
        
      }, []); // Empty dependency array means this useEffect will run once when the component mounts
    
        return (
            <div className="row justify-content-center">
						<div className="col-xxl-8 js-grid">
							<div className="row justify-content-center js-grid">
								<div className="col-lg-4 col-sm-6">
									<div className="card status-card border-0 rounded-3 mb-24 cursor-move">
										<div className="card-body p-25 text-body">
											<div className="d-flex align-items-center">
												<div className="flex-shrink-0">
													<div className="icon rounded-3">
														<i data-feather="users"></i>
													</div>
												</div>
												<div className="flex-grow-1 ms-3">
													  <span className="d-block mb-1">Total Users</span>
													<h3 className="fs-25">15,821</h3>
													<p className="fw-medium fs-13">User <span className="badge bg-success-transparent text-success mx-1"><i data-feather="trending-up" className="me-1"></i> 4.2%</span> this month</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-sm-6">
                           

									<div className="card status-card border-0 rounded-3 mb-24 cursor-move">
										<div className="card-body p-25 text-body">
											<div className="d-flex align-items-center">
												<div className="flex-shrink-0">
													<div className="icon rounded-3">
														<i data-feather="activity"></i>
													</div>
												</div>
												<div className="flex-grow-1 ms-3">
													  <span className="d-block mb-1">Live Visitors</span>
													<h3 className="fs-25"> 30,125.00 </h3>
													<p className="fw-medium fs-13">Visitor <span className="badge bg-success-transparent text-success mx-1"><i data-feather="trending-up" className="me-1"></i> 5.0%</span> this month</p>
												</div>
											</div>
										</div>
									</div>
                                   
								</div>
								<div className="col-lg-4 col-sm-6">
									<div className="card status-card border-0 rounded-3 mb-24 cursor-move">
										<div className="card-body p-25 text-body">
											<div className="d-flex align-items-center">
												<div className="flex-shrink-0">
													<div className="icon rounded-3">
														<i data-feather="pie-chart"></i>
													</div>
												</div>
												<div className="flex-grow-1 ms-3">
													  <span className="d-block mb-1">Bounce Rate</span>
													<h3 className="fs-25"> 2,11,125 </h3>
													<p className="fw-medium fs-13">User <span className="badge bg-danger-transparent text-danger mx-1"> <i data-feather="trending-down" className="me-1"></i> 7.6%</span> this month</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="card rounded-3 border-0 audience-report-card mb-24">
								<div className="card-body p-25">
									<div className="card-title d-flex align-items-center justify-content-between mb-20 pb-20 border-bottom border-color cursor-move">
										<h4 className="mb-0">Audience Report</h4>

										<select className="form-select form-control" aria-label="Default select example">
											<option selected>Today</option>
											<option value="1">This Week</option>
											<option value="2">This Month</option>
											<option value="3">This Year</option>
										</select>
									</div>

									<div id="audience_report"></div>
								</div>
							</div>

							<div className="row justify-content-center">
								<div className="col-lg-7">
									<div className="card rounded-3 border-0 sessions-bounce-card mb-24">
										<div className="card-body p-25">
											<div className="card-title d-flex align-items-center justify-content-between mb-20 pb-20 border-bottom border-color cursor-move">
												<h4 className="mb-0">Top Countries Sessions vs Bounce Rate</h4>
		
												<select className="form-select form-control" aria-label="Default select example">
													<option selected>Today</option>
													<option value="1">This Week</option>
													<option value="2">This Month</option>
													<option value="3">This Year</option>
												</select>
											</div>
		
											<div id="sessions_bounce"></div>
										</div>
									</div>

									<div className="card rounded-3 border-0 total-summary-card mb-24">
										<div className="card-body p-25">
											<div className="card-title d-flex align-items-center justify-content-between mb-20 pb-20 border-bottom border-color cursor-move">
												<h4 className="mb-0">Total Summary</h4>
		
												<select className="form-select form-control" aria-label="Default select example">
													<option selected>Today</option>
													<option value="1">This Week</option>
													<option value="2">This Month</option>
													<option value="3">This Year</option>
												</select>
											</div>
		
											<ul className="total-summary ps-0 mb-0 list-unstyled o-sortable">
												<li className="d-flex align-items-center">
													<div className="flex-shrink-0">
														<div className="icon">
															<img src="assets/images/country/usa.png" alt="usa"/>
														</div>
													</div>
													<div className="flex-grow-1 ms-3">
														<span className="fw-medium mb-2 d-block">USA</span>
														<div className="progress position-relative overflow-visible rounded-1 cursor-move bg-white1" role="progressbar" aria-label="Example with label" >
															{/* style="width: 95%" */}
															<div className="progress-bar rounded-1 bg-success" >
																<span className="count position-absolute fw-semibold">95%</span>
															</div>
														</div>
													</div>
												</li>
												<li className="d-flex align-items-center">
													<div className="flex-shrink-0">
														<div className="icon bg-2">
															<img src="assets/images/country/france.png" alt="france"/>
														</div>
													</div>
													<div className="flex-grow-1 ms-3">
														<span className="fw-medium mb-2 d-block">France</span>
														<div className="progress position-relative overflow-visible rounded-1 cursor-move bg-white1" role="progressbar" aria-label="Example with label" >
															{/* style="width: 85%" */}
															<div className="progress-bar rounded-1 bg-primary" >
																<span className="count position-absolute fw-semibold">85%</span>
															</div>
														</div>
													</div>
												</li>
												<li className="d-flex align-items-center">
													<div className="flex-shrink-0">
														<div className="icon bg-3">
															<img src="assets/images/country/canada.png" alt="canada"/>
														</div>
													</div>
													<div className="flex-grow-1 ms-3">
														<span className="fw-medium mb-2 d-block">Canada</span>
														<div className="progress position-relative overflow-visible rounded-1 cursor-move bg-white1" role="progressbar" aria-label="Example with label" >
															{/* style="width: 75%" */}
															<div className="progress-bar rounded-1 bg-warning" >
																<span className="count position-absolute fw-semibold">75%</span>
															</div>
														</div>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>

								<div className="col-lg-5">
									<div className="card rounded-3 border-0 activity-status-card mb-24">
										<div className="card-body text-body p-25">
											<div className="card-title d-flex align-items-center justify-content-between mb-20 pb-20 border-bottom border-color cursor-move">
												<h4 className="mb-0">Activity</h4>
		
												<select className="form-select form-control" aria-label="Default select example">
													<option selected>Today</option>
													<option value="1">This Week</option>
													<option value="2">This Month</option>
													<option value="3">This Year</option>
												</select>
											</div>
		
											<ul className="list-unstyled ps-0 mb-0 activity-list h-571" data-simplebar>
												<li className="mb-20">
													<a href="#" className="d-flex text-decoration-none text-body">
														<div className="flex-shrink-0">
															<div className="icon">
																<i data-feather="user"></i>
															</div>
														</div>
														<div className="flex-grow-1 ms-3">
															<span className="fw-semibold text-dark d-block mb-1 fs-15">Donald</span>
															<p>Updated the status of <span className="text-dark">Refund #1234</span> to awaiting customer response</p>
															<span className="fs-12">1 Min ago</span>
														</div>
													</a>
												</li>
												<li className="mb-20">
													<a href="#" className="d-flex text-decoration-none text-body">
														<div className="flex-shrink-0">
															<div className="icon">
																<img src="assets/images/user/user-1.jpg" className="rounded-circle" alt="user-1"/>
															</div>
														</div>
														<div className="flex-grow-1 ms-3">
															<span className="fw-semibold text-dark d-block mb-1 fs-15">Lucy Peterson</span>
															<p>Was added to the group, group name is Overtake</p>
															<span className="fs-12">3 Min ago</span>
														</div>
													</a>
												</li>
												<li className="mb-20">
													<a href="#" className="d-flex text-decoration-none text-body">
														<div className="flex-shrink-0">
															<div className="icon">
																<i data-feather="credit-card"></i>
															</div>
														</div>
														<div className="flex-grow-1 ms-3">
															<span className="fw-semibold text-dark d-block mb-1 fs-15">Joseph Rust</span>
															<p>Opened new showcase <span className="text-dark">Mannat #112233</span> with theme market</p>
															<span className="fs-12">6 Min ago</span>
														</div>
													</a>
												</li>
												<li>
													<a href="#" className="d-flex text-decoration-none text-body">
														<div className="flex-shrink-0">
															<div className="icon">
																<img src="assets/images/user/user-2.jpg" className="rounded-circle" alt="user-2"/>
															</div>
														</div>
														<div className="flex-grow-1 ms-3">
															<span className="fw-semibold text-dark d-block mb-1 fs-15">Juhon Dew</span>
															<p>Updated the status of <span className="text-dark">Refund #1234</span> to awaiting customer response</p>
															<span className="fs-12">7 Min ago</span>
														</div>
													</a>
												</li>
												<li className="mb-20">
													<a href="#" className="d-flex text-decoration-none text-body">
														<div className="flex-shrink-0">
															<div className="icon">
																<i data-feather="alert-circle"></i>
															</div>
														</div>
														<div className="flex-grow-1 ms-3">
															<span className="fw-semibold text-dark d-block mb-1 fs-15">Warning</span>
															<p>Was added to the group, group name is <span className="text-dark">Overtake</span></p>
															<span className="fs-12">10 Min ago</span>
														</div>
													</a>
												</li>
												<li className="mb-20">
													<a href="#" className="d-flex text-decoration-none text-body">
														<div className="flex-shrink-0">
															<div className="icon">
																<i data-feather="user"></i>
															</div>
														</div>
														<div className="flex-grow-1 ms-3">
															<span className="fw-semibold text-dark d-block mb-1 fs-15">Donald</span>
															<p>Updated the status of <span className="text-dark">Refund #1234</span> to awaiting customer response</p>
															<span className="fs-12">11 Min ago</span>
														</div>
													</a>
												</li>
												<li className="mb-20">
													<a href="#" className="d-flex text-decoration-none text-body">
														<div className="flex-shrink-0">
															<div className="icon">
																<img src="assets/images/user/user-1.jpg" className="rounded-circle" alt="user-1"/>
															</div>
														</div>
														<div className="flex-grow-1 ms-3">
															<span className="fw-semibold text-dark d-block mb-1 fs-15">Lucy Peterson</span>
															<p>Was added to the group, group name is Overtake</p>
															<span className="fs-12">2 Hours ago</span>
														</div>
													</a>
												</li>
												<li className="mb-20">
													<a href="#" className="d-flex text-decoration-none text-body">
														<div className="flex-shrink-0">
															<div className="icon">
																<i data-feather="credit-card"></i>
															</div>
														</div>
														<div className="flex-grow-1 ms-3">
															<span className="fw-semibold text-dark d-block mb-1 fs-15">Joseph Rust</span>
															<p>Opened new showcase <span className="text-dark">Mannat #112233</span> with theme market</p>
															<span className="fs-12">3 Hours ago</span>
														</div>
													</a>
												</li>
												<li>
													<a href="#" className="d-flex text-decoration-none text-body">
														<div className="flex-shrink-0">
															<div className="icon">
																<img src="assets/images/user/user-2.jpg" className="rounded-circle" alt="user-2"/>
															</div>
														</div>
														<div className="flex-grow-1 ms-3">
															<span className="fw-semibold text-dark d-block mb-1 fs-15">Juhon Dew</span>
															<p>Updated the status of <span className="text-dark">Refund #1234</span> to awaiting customer response</p>
															<span className="fs-12">10 Hours ago</span>
														</div>
													</a>
												</li>
												<li>
													<a href="#" className="d-flex text-decoration-none text-body">
														<div className="flex-shrink-0">
															<div className="icon">
																<i data-feather="alert-circle"></i>
															</div>
														</div>
														<div className="flex-grow-1 ms-3">
															<span className="fw-semibold text-dark d-block mb-1 fs-15">Warning</span>
															<p>Was added to the group, group name is <span className="text-dark">Overtake</span></p>
															<span className="fs-12">14 Hours ago</span>
														</div>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div className="row justify-content-center">
								<div className="col-lg-6">
									<div className="card rounded-3 border-0 traffic-sources-card mb-24 table-edit-area">
										<div className="card-body text-body p-25">
											<div className="card-title d-flex align-items-center justify-content-between mb-20 pb-20 border-bottom border-color cursor-move">
												<h4 className="mb-0">Traffic Sources</h4>
					
												<select className="form-select form-control" aria-label="Default select example">
													<option selected>Today</option>
													<option value="1">This Week</option>
													<option value="2">This Month</option>
													<option value="3">This Year</option>
												</select>
											</div>
					
											<div className="global-table-area">
												<div className="table-responsive overflow-auto h-452" data-simplebar>
													<table className="table align-middle table-bordered" >
														<thead className="text-dark">
															<tr>
																<th scope="col">Browser</th>
																<th scope="col">Sessions</th>
																<th scope="col">Traffic</th>
															</tr>
														</thead>
														<tbody className="text-body o-sortable">
															<tr className="cursor-move">
																<td>
																	<div className="d-flex align-items-center">
																		<img className="rounded-3 wh-32" src="assets/images/browsers/chrome.png" alt="chrome"/>
																		<span className="fw-medium fs-15 ms-3">Chrome</span>
																	</div>
																</td>
																<td className="text-dark"><i data-feather="trending-up" className="text-success up-down-style me-1"></i> 24,458</td>
																<td>
																	{/* style="height: 6px;" */}
																	<div className="progress position-relative overflow-visible rounded-1 cursor-move bg-white1"  role="progressbar" aria-label="Example with label" >
																		{/* style="width: 90%; height: 6px;" */}
																		<div className="progress-bar rounded-1 bg-primary" ></div>
																	</div>
																</td>
															</tr>
															<tr className="cursor-move">
																<td>
																	<div className="d-flex align-items-center">
																		<img className="rounded-3 wh-32" src="assets/images/browsers/firefox.png" alt="firefox"/>
																		<span className="fw-medium fs-15 ms-3">Firefox</span>
																	</div>
																</td>
																<td className="text-dark"><i data-feather="trending-down" className="text-danger up-down-style me-1"></i> 22,458</td>
																<td>
																	{/*  style="height: 6px;"  */}
																	<div className="progress position-relative overflow-visible rounded-1 cursor-move bg-white1"role="progressbar" aria-label="Example with label">
																		{/*  style="width: 80%; height: 6px;" */}
																		<div className="progress-bar rounded-1 bg-primary"></div>
																	</div>
																</td>
															</tr>
															<tr className="cursor-move">
																<td>
																	<div className="d-flex align-items-center">
																		<img className="rounded-3 wh-32" src="assets/images/browsers/google.png" alt="google"/>
																		<span className="fw-medium fs-15 ms-3">Google</span>
																	</div>
																</td>
																<td className="text-dark"><i data-feather="trending-up" className="text-success up-down-style me-1"></i> 21,125</td>
																<td>
																	{/* style="height: 6px;" */}
																	<div className="progress position-relative overflow-visible rounded-1 cursor-move bg-white1"  role="progressbar" aria-label="Example with label" >
																		{/* style="width: 70%; height: 6px;" */}
																		<div className="progress-bar rounded-1 bg-primary" ></div>
																	</div>
																</td>
															</tr>
															<tr className="cursor-move">
																<td>
																	<div className="d-flex align-items-center">
																		<img className="rounded-3 wh-32" src="assets/images/browsers/safari.png" alt="safari"/>
																		<span className="fw-medium fs-15 ms-3">Safari</span>
																	</div>
																</td>
																<td className="text-dark"><i data-feather="trending-down" className="text-danger up-down-style me-1"></i> 20,222</td>
																<td>
																{/* style="height: 6px;" */}
																	<div className="progress position-relative overflow-visible rounded-1 cursor-move bg-white1"  role="progressbar" aria-label="Example with label"  >
																	{/*  style="width: 60%; height: 6px;" */}
																		<div className="progress-bar rounded-1 bg-primary"></div>
																	</div>
																</td>
															</tr>
															<tr className="cursor-move">
																<td>
																	<div className="d-flex align-items-center">
																		<img className="rounded-3 wh-32" src="assets/images/browsers/ubuntu.png" alt="ubuntu"/>
																		<span className="fw-medium fs-15 ms-3">Ubuntu</span>
																	</div>
																</td>
																<td className="text-dark"><i data-feather="trending-up" className="text-success up-down-style me-1"></i> 19,124</td>
																<td>
																{/* style="height: 6px;" */}
																	<div className="progress position-relative overflow-visible rounded-1 cursor-move bg-white1"  role="progressbar" aria-label="Example with label">
																		{/* style="width: 50%; height: 6px;" */}
																		<div className="progress-bar rounded-1 bg-primary" ></div>
																	</div>
																</td>
															</tr>
															
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-6">
									<div className="card rounded-3 border-0 visitors-countries-card mb-24 table-edit-area">
										<div className="card-body text-body p-25">
											<div className="card-title d-flex align-items-center justify-content-between mb-20 pb-20 border-bottom border-color cursor-move">
												<h4 className="mb-0">Visitors By Countries </h4>
					
												<select className="form-select form-control" aria-label="Default select example">
													<option selected>Today</option>
													<option value="1">This Week</option>
													<option value="2">This Month</option>
													<option value="3">This Year</option>
												</select>
											</div>
					
											<div className="global-table-area">
												<div className="table-responsive overflow-auto h-452" data-simplebar>
													<table className="table align-middle table-bordered" >
														<thead className="text-dark">
															<tr>
																<th scope="col">Countries</th>
																<th scope="col" className="text-end">Visitors</th>
															</tr>
														</thead>
														<tbody className="text-body o-sortable">
															<tr className="cursor-move">
																<td>
																	<div className="d-flex align-items-center">
																		<img className="rounded-3 wh-24 rounded-circle" src="assets/images/country/united-states.png" alt="united-states"/>
																		<span className="fw-medium fs-15 ms-3">United States</span>
																	</div>
																</td>
																<td className="text-dark text-end">
																	<span className="badge bg-success-transparent text-success fs-12 fw-normal">34,458</span>
																</td>
															</tr>
															
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xxl-4 js-grid">
							<div className="card rounded-3 border-0 sales-by-locations-card mb-24">
								<div className="card-body text-body p-25">
									<div className="card-title d-flex align-items-center justify-content-between mb-20 pb-20 border-bottom border-color cursor-move">
										<h4 className="mb-0">Live Visitor</h4>

										<select className="form-select form-control" aria-label="Default select example">
											<option selected>Today</option>
											<option value="1">This Week</option>
											<option value="2">This Month</option>
											<option value="3">This Year</option>
										</select>
									</div>

									<div id="sales_by_locations" className="mb-15"></div>

									<ul className="country-progress ps-0 mb-0 list-unstyled o-sortable">
										<li>
											<span className="fw-medium mb-2 d-block">United Kingdom</span>
											<div className="progress position-relative overflow-visible rounded-1 cursor-move bg-white1" role="progressbar" aria-label="Example with label" >
												{/* style="width: 95%" */}
												<div className="progress-bar rounded-1 bg-primary" >
													<span className="count position-absolute fw-medium">95%</span>
												</div>
											</div>
										</li>
										<li>
											<span className="fw-medium mb-2 d-block">United States </span>
											<div className="progress position-relative overflow-visible rounded-1 cursor-move bg-white1" role="progressbar" aria-label="Example with label">
												{/* style="width: 85%" */}
												<div className="progress-bar rounded-1 bg-primary" >
													<span className="count position-absolute fw-medium">85%</span>
												</div>
											</div>
										</li>
										<li>
											<span className="fw-medium mb-2 d-block">Canada</span>
											<div className="progress position-relative overflow-visible rounded-1 cursor-move bg-white1" role="progressbar" aria-label="Example with label">
												{/* style="width: 75%" */}
												<div className="progress-bar rounded-1 bg-primary" >
													<span className="count position-absolute fw-medium">75%</span>
												</div>
											</div>
										</li>
										<li>
											<span className="fw-medium mb-2 d-block">Greenland</span>
											<div className="progress position-relative overflow-visible rounded-1 cursor-move bg-white1" role="progressbar" aria-label="Example with label" >
												{/* style="width: 65%" */}
												<div className="progress-bar rounded-1 bg-primary" >
													<span className="count position-absolute fw-medium">65%</span>
												</div>
											</div>
										</li>
										<li>
											<span className="fw-medium mb-2 d-block">Russia</span>
											<div className="progress position-relative overflow-visible rounded-1 cursor-move bg-white1" role="progressbar" aria-label="Example with label" >
												{/* style="width: 55%" */}
												<div className="progress-bar rounded-1 bg-primary" >
													<span className="count position-absolute fw-medium">55%</span>
												</div>
											</div>
										</li>
										
									</ul>
								</div>
							</div>

							<div className="card rounded-3 border-0 website-overview-card mb-24">
								<div className="card-body text-body p-25">
									<div className="card-title d-flex align-items-center justify-content-between mb-20 pb-20 border-bottom border-color cursor-move">
										<h4 className="mb-0">Weekly Website Overview</h4>

										<select className="form-select form-control" aria-label="Default select example">
											<option selected>Today</option>
											<option value="1">This Week</option>
											<option value="2">This Month</option>
											<option value="3">This Year</option>
										</select>
									</div>

									<div id="website_overview"></div>
								</div>
							</div>

							<div className="card rounded-3 border-0 device-card mb-24">
								<div className="card-body text-body p-25">
									<div className="card-title d-flex align-items-center justify-content-between mb-20 pb-20 border-bottom border-color cursor-move">
										<h4 className="mb-0">Sessions By Device </h4>

										<select className="form-select form-control" aria-label="Default select example">
											<option selected>Today</option>
											<option value="1">This Week</option>
											<option value="2">This Month</option>
											<option value="3">This Year</option>
										</select>
									</div>

									<div id="website_device"></div>

									<ul className="d-flex justify-content-between align-items-center justify-content-center text-center ps-0 mb-0 list-unstyled">
										<li className="mt-10">
											<span className="mb-2 text-primary">Mobile</span>
											<h5 className="fs-16 mb-0">60.50%</h5>
										</li>
										<li className="mt-10">
											<span className="mb-2 text-success">Tablet</span>
											<h5 className="fs-16 mb-0">15.50%</h5>
										</li>
										<li className="mt-10">
											<span className="mb-2 text-warning">Desktop</span>
											<h5 className="fs-16 mb-0">18.50%</h5>
										</li>
										<li className="mt-10">
											<span className="mb-2 text-danger">Others</span>
											<h5 className="fs-16 mb-0">5.50%</h5>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
        )
}

export default Home;