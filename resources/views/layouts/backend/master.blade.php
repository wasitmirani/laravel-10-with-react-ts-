<!DOCTYPE html>
<html lang="en" data-layout="vertical" data-topbar="light" data-sidebar="dark" data-sidebar-size="lg" data-sidebar-image="none" data-preloader="disable">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">

        <title >{{ config('app.name', 'Laravel') }}</title>
        <!-- plugin css -->
        <link href="{{ asset('/assets/libs/jsvectormap/css/jsvectormap.min.css')}}" rel="stylesheet" type="text/css" />

        <!-- Layout config Js -->
        <script src="{{ asset('assets/js/layout.js')}}"></script>
        <!-- Bootstrap Css -->
        <link href="{{ asset('/assets/css/bootstrap.min.css')}}" rel="stylesheet" type="text/css" />
        <!-- Icons Css -->
        <link href="{{ asset('/assets/css/icons.min.css')}}" rel="stylesheet" type="text/css" />
        <!-- App Css-->
        <link href="{{ asset('/assets/css/app.min.css')}}" rel="stylesheet" type="text/css" />
        <!-- custom Css-->
        <link href="{{ asset('/assets/css/custom.min.css')}}" rel="stylesheet" type="text/css" />



        @viteReactRefresh
        @vite(['resources/js/index.tsx'])

    </head>
    <body >
        <div id="root"></div>

             <!--=== JS Link ===-->
            <!-- JAVASCRIPT -->
                <script src="{{ asset('/assets/libs/bootstrap/js/bootstrap.bundle.min.js')}}"></script>



                <!-- Vector map-->
                <script src="{{ asset('/assets/libs/jsvectormap/js/jsvectormap.min.js')}}"></script>
                <script src="{{ asset('/assets/libs/jsvectormap/maps/world-merc.js')}}"></script>



             <script >
                const scriptList = [
                  '/assets/libs/simplebar/simplebar.min.js',
                 '/assets/libs/node-waves/waves.min.js',
          
                 '/assets/libs/feather-icons/feather.min.js',
                 '/assets/js/pages/plugins/lord-icon-2.1.0.js',
                 '/assets/js/plugins.js',
                 '/assets/libs/apexcharts/apexcharts.min.js',
                 '/assets/js/pages/dashboard-analytics.init.js',
                 '/assets/js/app.js',
                ];

                scriptList.forEach((scriptUrl, index) => {
                  setTimeout(() => {
                    const script = document.createElement('script');
                    script.src = scriptUrl;
                    document.head.appendChild(script);
                  }, index * 120); // Adjust the delay as needed
                });
              </script>
    </body>
</html>
