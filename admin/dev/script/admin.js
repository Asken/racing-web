const isLoggedIn = () => {
    // TODO: Check with server...
    return false
}

const loginClick = () => {
    pubsub.publish('login')
}

const showLogin = () => {
    const template = `<div class="modal" tabindex="-1" role="dialog" id="login">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header border-bottom-0">
          <!--button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button-->
        </div>
        <div class="modal-body">
          <div class="form-title text-center">
            <h4>Login</h4>
          </div>
          <form>
            <div class="form-group">
              <!--label for="username">Username</label-->
              <input type="email" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter username">
              <!--small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small-->
            </div>
            <div class="form-group">
              <!--label for="password">Username</label-->
              <input type="password" class="form-control" id="password" aria-describedby="passwordHelp" placeholder="Enter password">
              <!--small id="passwordHelp" class="form-text text-muted">We'll never store your password in a readable format.</small-->
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" onclick="loginClick()">Login</button>
        </div>
      </div>
    </div>
  </div>
    `
    document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend', ejs.render(template))
    $('#login').modal({
        backdrop: 'static',
        keyboard: false,
    })
}