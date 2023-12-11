{{-- <x-guest-layout>
    <!-- Session Status -->
    <x-auth-session-status class="mb-4" :status="session('status')" />

    <form method="POST" action="{{ route('login') }}">
        @csrf

        <!-- Email Address -->
        <div>
            <x-input-label for="email" :value="__('Email')" />
            <x-text-input id="email" class="block mt-1 w-full" type="email" name="email" :value="old('email')" required autofocus autocomplete="username" />
            <x-input-error :messages="$errors->get('email')" class="mt-2" />
        </div>

        <!-- Password -->
        <div class="mt-4">
            <x-input-label for="password" :value="__('Password')" />

            <x-text-input id="password" class="block mt-1 w-full"
                            type="password"
                            name="password"
                            required autocomplete="current-password" />

            <x-input-error :messages="$errors->get('password')" class="mt-2" />
        </div>

        <!-- Remember Me -->
        <div class="block mt-4">
            <label for="remember_me" class="inline-flex items-center">
                <input id="remember_me" type="checkbox" class="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500" name="remember">
                <span class="ms-2 text-sm text-gray-600">{{ __('Remember me') }}</span>
            </label>
        </div>

        <div class="flex items-center justify-end mt-4">
            @if (Route::has('password.request'))
                <a class="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="{{ route('password.request') }}">
                    {{ __('Forgot your password?') }}
                </a>
            @endif

            <x-primary-button class="ms-3">
                {{ __('Log in') }}
            </x-primary-button>
        </div>
    </form>
</x-guest-layout> --}}


@extends('layouts.backend.authmaster')

@section('content')

<!--=== Start Login Area ===-->
<div class="login-area">
    <div class="text-center mb-4">
        <a href="index.html">
            <img src="assets/images/logo.svg" alt="logo">
        </a>
    </div> 
    <div class="card rounded-3 border-0 mb-24 mw-560 m-auto">
        <div class="card-body p-30">
            <div class="card-title mb-20 pb-20 border-bottom border-color text-center">
                <h4 class="mb-0 mb-2 fs-20">Login</h4>
                <p class="text-body fs-14">Welcome back Jacob Smith!</p>
            </div>
            <div class="bg-primary-transparent p-3 rounded-3 text-center mb-25">
                <span class="text-dark fs-14 fw-semibold mb-2 d-block">Login Access</span>
                <p class="text-primary fs-14 mb-0"><span class="text-dark">Email:</span> jacobsmith@dass.com</p>
                <p class="text-primary fs-14"><span class="text-dark">Password:</span> jacobsmith123456</p>
            </div>
            <form>
                <div class="form-group mb-4">
                    <label class="fw-semibold fs-14 mb-2 text-dark">User Name<span class="text-danger">*</span></label>
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Enter User Name">
                        <label class="text-body fs-12" for="floatingInput">Enter User Name</label>
                    </div>
                </div>
                <div class="form-group mb-4">
                    <label class="fw-semibold fs-14 mb-2 text-dark">Password <span class="text-danger">*</span></label>
                    <div class="form-floating position-relative">
                        <input type="password" class="form-control" id="password-field1" placeholder="Enter Password">
                        <label class="text-body fs-12" for="password-field1">Enter Password</label>
                        <span toggle="#password-field1" class="text-body ri-eye-line field-icon toggle-password position-absolute top-50 end-0 fs-20 translate-middle-y" style="right: 10px !important; cursor: pointer;"></span>
                    </div>
                </div>
                <div class="form-group d-sm-flex justify-content-between">
                    <div class="form-check mb-4">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="position: relative; top: -2px;">
                        <label class="form-check-label fs-14 text-body ms-2" for="flexCheckDefault">
                            Remember password ? 
                        </label>
                    </div>
                    <div class="mb-4">
                        <a href="forgot-password.html" class="fs-14 text-primary text-decoration-none">Forgot your password?</a>
                    </div>
                </div>
                <div class="form-group mb-4">
                    <a href="index.html" class="btn btn-primary rounded-1 w-100 py-3">Login</a>
                </div>
                <div class="form-group mb-4 text-center">
                    <p class="text-body mb-4 fs-14">Don't have an account? <a href="register.html" class="text-primary text-decoration-none">Register</a></p>
                    <span class="or d-block"><span class="px-3 bg-white fw-medium">OR</span></span>
                </div>
                <div class="form-group mb-0 text-center">
                    <ul class="social-link ps-0 mb-0 list-unstyled">
                        <li>
                            <a href="https://www.google.com/" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Google">
                                <i data-feather="mail"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Facebook">
                                <i data-feather="facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com/" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Twitter">
                                <i data-feather="twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/" target="_blank" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Linkedin">
                                <i data-feather="linkedin"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    </div>
</div>
<!--=== End Login Area ===-->
@endsection