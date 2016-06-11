enyo.kind({
  name: 'smartView.googleAPI',
  kind: 'enyo.Component',

  _permissions: 'email profile',
  _clientID: '638344118098-889a69gq2qnjeoea56vpjhavnrp31666.apps.googleusercontent.com',
  _authUrl: 'https://accounts.google.com/o/oauth2/device/code',
  _successAuthUrl: 'https://www.googleapis.com/oauth2/v3/token',

  published: {
    pin: undefined,
    authUrl: undefined,
    authCode: undefined,
    authToken: undefined,

    userId: undefined,
    userName: undefined,
    userPhoto: undefined,
  },

  create: function() {
    this.inherited(arguments);

    // Updates authToken with the current saved token, so the client data binded updates the urls
    this.setAuthToken(this.getToken());
  },

  /**
   * Updates the token into the localStorage
   */
  setToken: function(token) {
    var self = this;
    self.setAuthToken(token);
    window.app.storage.set('GoogleAccessToken', token);
  },

  /**
   * Gets the stored token into localstorage
   */
  getToken: function() {
    return window.app.storage.get('GoogleAccessToken');
  },

  /**
   * Deletes the local key, same as logout the user
   */
  removeToken: function() {
    window.app.storage.remove('GoogleAccessToken');
  },

  /**
   * Generate basic data for user auth
   */
  checkAuth: function() {
    var self = this;
    new enyo.Ajax({
      url: this._authUrl,
      method: 'POST',
      postBody: {
        client_id: this._clientID,
        scope: this._permissions
      }
    })
    .go().response(this, function(inSender, data) {
      console.warn(data)
      self.setPin(data.user_code);
      self.setAuthCode(data.device_code);
      self.setAuthUrl(data.verification_url);
    });
  },

  /**
   * Checks if the user correctly allowed app to use their data
   *
   * @param  {Function} callback [Method to be executed when request successful finishes]
   */
  checkAuthConceeded: function(callback) {
    var self = this;

    new enyo.Ajax({
      url: this._successAuthUrl,
      method: 'POST',
      handleAs: 'json',
      postBody: {
        client_id: this._clientID,
        device_code: this.getToken(),
        grant_type: 'http://oauth.net/grant_type/device/1.0'
      }
    })
    .go().response(this, function(inSender, data) {
      callback(data);
    });
  }
});
