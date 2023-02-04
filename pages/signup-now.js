import FooterBar from "components/core/FooterBar";

export default function Pricing() {
  return (
    <div>
      <FooterBar />
    </div>
  );
}

/*
<div class="fusion-login-box fusion-login-box-1 fusion-login-box-register fusion-login-align-center">
    <h3 class="fusion-login-heading" data-fontsize="18" data-lineheight="27">Trusted point-of-sale by SMEs.</h3>
  <form class="fusion-login-form" style="background-color:#f6f6f6;" name="registerform" id="registerform" method="post" action="https://secure.imonggo.com/signup_from_landing">
        <div class="fusion-login-input-wrapper">
            <label class="fusion-hidden-content" for="user_pass">Email</label>
            <input type="text" name="account[email]" placeholder="Email" value="" size="20" class="fusion-login-email input-text" id="user_email">
        </div>
        <div class="fusion-login-input-wrapper">
            <label class="fusion-hidden-content" for="user_pass">Password</label>
<input type="password" name="account[user_password]" placeholder="Password" value="" size="20" class="fusion-login-password input-text" id="user_password">
<i class="far fa-eye" id="togglePassword" onmouseup="togglePassword()" onmousedown="togglePassword()"></i>
        </div>
        <p class="fusion-login-input-wrapper" id="errormessage" style="color: #CD5C5C"></p>
        <div class="fusion-login-submit-wrapperr">
            <button type="button" class="g-recaptcha fusion-login-button fusion-button button-default button-large" data-sitekey="6LfQSc0bAAAAAJRx4W3OxxszAEbfucG4Gl2xx3p1" 
        id="ga-track-signup" data-callback='onSubmit' data-action='submit' name="wp-submit">Create Free Account</button>
            <input type="hidden" id="timezone_offset" name="timezone_offset">
            <input type="hidden" name="refer" class="refer">
            <input type="hidden" id="g-recaptcha-response" name="g-recaptcha-response">
            <input type="hidden" name="_wp_http_referer" value="/landing-page-a/"><span class="fusion-login-nonce" style="display:none;"><input type="hidden" id="_wpnonce" name="_wpnonce" value="14f18dfe8d"></span></div>
    </form>
</div>

*********************

<div class="fusion-login-box fusion-login-box-1 fusion-login-box-register fusion-login-align-center">
<div class="separator">
  <div class="line"></div>
<span>Or continue with</span>
  <div class="line"></div>
</div>
</div>

<div class="form-group" style="text-align:center;" class="firebase-item">
  <div id="firebaseui-auth-container"></div>
</div>
<form action="https://secure.imonggo.com/auth/callback" method="post" id="firebase_login_form">
  <input type="hidden" id="firebase_email" name="firebase[email]"/>
  <input type="hidden" id="firebase_display_name" name="firebase[display_name]"/>
  <input type="hidden" id="firebase_provider" name="firebase[provider]"/>
  <input type="hidden" id="firebase_uid" name="firebase[uid]"/>
  <input type="hidden" name="refer" class="refer">
</form>

*/
