
<!doctype html>
<html lang="zxx">
    <head>
		<!--=== Required meta tags ===-->
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

		<!--=== CSS Link ===--> 
		<link rel="stylesheet" href="{{asset('/assets/css/bootstrap.min.css')}}">

		<link rel="stylesheet" href="{{asset('/assets/css/remixicon.css')}}">
		<link rel="stylesheet" href="{{asset('/assets/css/font-awesome-pro.css')}}">
		<link rel="stylesheet" href="{{asset('/assets/css/metisMenu.min.css')}}">
		<link rel="stylesheet" href="{{asset('/assets/css/simplebar.min.css')}}">
		<link rel="stylesheet" href="{{asset('/assets/css/prism.css')}}">
		<link rel="stylesheet" href="{{asset('/assets/css/jquery.dataTables.css')}}">

		<link rel="stylesheet" href="{{asset('/assets/css/style.css')}}">
		
		<!--=== Favicon ===-->
		<link rel="icon" type="image/png" href="assets/images/favicon.png">
		<!--=== Title ===-->
		<title> Auth | {{config('app.name')}}</title>
    </head>

    <body>
		<!--=== Start Preloader Section ===-->
		<div class="preloader">
            <div class="content">
                <div class="ball"></div>
                <div class="ball"></div>
                <div class="ball"></div>
                <div class="ball"></div>
                <div class="ball"></div>
                <div class="ball"></div>
                <div class="ball"></div>
                <div class="ball"></div>
                <div class="ball"></div>
                <div class="ball"></div>
            </div>
        </div>
		<!--=== End Preloader Section ===-->

		<!--=== Start Main Content Area ===-->
		<div class="main-content-area ps-0">
			<div class="container">
				<!--=== Start Login Area ===-->
                    @yield('content')
				<!--=== End Login Area ===-->
			</div>
		</div>
		<!--=== End Main Content Area ===-->


	

        <!--=== JS Link ===-->
        <script src="{{asset('assets/js/jquery.min.js')}}"></script> 
        <script src="{{asset('assets/js/bootstrap.bundle.min.js')}}"></script>

        <script src="{{asset('assets/js/metisMenu.min.js')}}"></script>
        <script src="{{asset('assets/js/countdown.min.js')}}"></script>
        <script src="{{asset('assets/js/feather.min.js')}}"></script>
        <script src="{{asset('assets/js/simplebar.min.js')}}"></script>
        <script src="{{asset('assets/js/html5sortable.js')}}"></script>
		<script src="{{asset('assets/js/prism.js')}}"></script>

		<script src="{{asset('assets/js/members-list.js')}}"></script> 

		<script src="{{asset('assets/js/custom.js')}}"></script>
    </body>
</html>