@extends('auth.layouts.auth')

@section('content')
    <form method="POST" action="{{ route('login') }}">
        @csrf
        <div class="login-form-head">
            <h4>{{ __('Login') }}</h4>
            <p>Welcome. Glad to see you!</p>
        </div>
        @if($errors->has('expired'))
            <div class="alert alert-danger" role="alert">
                {{ $errors->first('expired') }}
            </div>
        @endif
        <div class="login-form-body">
            <div class="form-gp">
                <label for="email">{{ __('E-Mail Address') }}</label>
                <input type="email" id="email" name="email" class="{{ $errors->has('email') ? ' is-invalid' : '' }}" value="{{ old('email') }}" required >
                <i class="ti-email"></i>
            </div>
            @if ($errors->has('email'))
                <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
            @endif
            <div class="form-gp">
                <label for="password">{{ __('Password') }}</label>
                <input type="password" id="password" name="password" class="{{ $errors->has('password') ? ' is-invalid' : '' }}" required autocomplete="new-password">
                <i class="ti-lock"></i>
            </div>
            @if ($errors->has('password'))
                <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
            @endif
            <div class="row mb-4 rmber-area">
                <div class="col-6">
                    <div class="custom-control custom-checkbox mr-sm-2">
                        <input type="checkbox" class="custom-control-input" id="remember" name="remember" {{ old('remember') ? 'checked' : '' }}>
                        <label class="custom-control-label" for="remember">{{ __('Remember Me') }}</label>
                    </div>
                </div>
{{--                <div class="col-6 text-right">--}}
{{--                    <a href="{{ route('password.request') }}">{{ __('Forgot Your Password?') }}</a>--}}
{{--                </div>--}}
            </div>
            <div class="submit-btn-area">
                <button id="form_submit" type="submit">{{ __('Login') }} <i class="ti-arrow-right"></i></button>
            </div>
            <div class="form-footer text-center mt-5">
                <p class="text-muted">Don't have an account? <a href="{{ route('register') }}">{{ __('Register') }}</a></p>
            </div>
        </div>
    </form>
@endsection

