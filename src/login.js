
  export const login = `
  <div class="container">
    <form class="form">
      <h1 class="title">Hi there🥂</h1>
      <label class="text-login"
        >Email<input
          type="text"
          id="user-email"
          class="input-field"
          placeholder="dishared@gmail.com"
          autofocus
      /></label>
      <label class="text-login"
        >Password<input
          type="password"
          id="user-password"
          class="input-field"
          placeholder="password 🔒"
          autofocus
      /></label>
      <button id="btn-login">Log In</button>
      <h4 class="or-login">Or Use</h4>
      <div class="social">
        <a href="#"><i class="fa-brands fa-facebook fa-2x"></i></a>
        <a href="#"><i class="fa-brands fa-google-plus fa-2x"></i></a>
      </div>
      <h5 class="registered">
        No registered yet?
        <a href="#" class="href" id="create-account">Create Account</a>
      </h5>
      <h5 class="registered">
        Forgot your
        <a href="#" class="href" id="forgot-password">Password?</a>
      </h5>
    </form>
  </div>
  `;
  console.log(login)