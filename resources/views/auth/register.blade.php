@extends('auth.layouts.auth')

@section('content')

    <form method="POST" action="{{ route('register') }}">
        @csrf
        <div class="login-form-head">
            <h4>{{ __('Register') }}</h4>
            <p>Hello there, Sign up and Join with Us</p>
        </div>
        <div class="login-form-body">
            <div class="form-gp">
                <label for="name">{{ __('Name') }}</label>
                <input type="text" id="name" class="{{ $errors->has('name') ? ' is-invalid' : '' }}" name="name" value="{{ old('name') }}" required autofocus >
                <i class="ti-user"></i>
            </div>
            @if ($errors->has('name'))
                <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('name') }}</strong>
                                    </span>
            @endif
            <div class="form-gp">
                <label for="email">{{ __('E-Mail Address') }}</label>
                <input type="email" id="email" class="{{ $errors->has('email') ? ' is-invalid' : '' }}" name="email" value="{{ old('email') }}" >
                <i class="ti-email"></i>
            </div>
            @if ($errors->has('email'))
                <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('email') }}</strong>
                                    </span>
            @endif
            <div class="form-gp">
                <label for="password">{{ __('Password') }}</label>
                <input type="password" id="password" class="{{ $errors->has('password') ? ' is-invalid' : '' }}" name="password" required autocomplete="new-password">
                <i class="ti-lock"></i>
            </div>
            @if ($errors->has('password'))
                <span class="invalid-feedback" role="alert">
                                        <strong>{{ $errors->first('password') }}</strong>
                                    </span>
            @endif
            <div class="form-gp">
                <label for="password-confirm">{{ __('Confirm Password') }}</label>
                <input type="password" id="password-confirm" name="password_confirmation" required >
                <i class="ti-lock"></i>
            </div>
            <div class="submit-btn-area">
                <button id="form_submit" type="submit">{{ __('Register') }} <i class="ti-arrow-right"></i></button>
            </div>
            <div class="form-footer text-center mt-5">Already have an account? <a href="{{ route('login') }}">{{ __('Login') }}</a></p>
            </div>
        </div>
    </form>
@endsection




