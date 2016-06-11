enyo.kind({
  name: 'smartView.facebookAPI',
  kind: 'enyo.Component',

  _permissions: 'public_profile,user_likes,email,user_about_me,user_hometown,user_photos,user_likes,user_location,user_photos,user_religion_politics,user_posts',
  _clientID: '1046426045376479',
  _authUrl: 'https://graph.facebook.com/oauth/device?type=device_code&client_id=<%=clientID%>&scope=<%=scope%>',
  _successAuthUrl: 'https://graph.facebook.com/oauth/device?type=device_token&client_id=<%=clientID%>&code=<%=code%>',
  _profileDataUrl: 'https://graph.facebook.com/v2.3/me?fields=name,picture&access_token=<%=authToken%>',

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

    // Updates authUrl with default data
    this._authUrl = _.template(this._authUrl)({clientID: this._clientID, scope: this._permissions});
  },

  /**
   * Updates the successAuthUrl with newOne authCode
   */
  authCodeChanged: function() {
    this._successAuthUrl = _.template(this._successAuthUrl)({clientID: this._clientID, code: this.getAuthCode()});
  },

  /**
   * This method changes every url related to the auth token, 
   * when it gets updated, the url also get the new accessToken
   */ 
  authTokenChanged: function() {
    this._profileDataUrl = _.template(this._profileDataUrl)({authToken: this.getAuthToken()});
    this._albumsUrl = _.template(this._albumsUrl)({authToken: this.getAuthToken()});
  },

  /**
   * Updates the token into the localStorage
   */
  setToken: function(token) {
    var self = this;
    self.setAuthToken(token);
    window.app.storage.set('FacebookAccessToken', token);
  },

  /**
   * Gets the stored token into localstorage
   */
  getToken: function() {
    return window.app.storage.get('FacebookAccessToken');
  },

  /**
   * Deletes the local key, same as logout the user
   */
  removeToken: function() {
    window.app.storage.remove('FacebookAccessToken');
  },

  /**
   * Generate basic data for user auth
   */
  checkAuth: function() {
    var self = this;
    var ajax = new enyo.Ajax({url: this._authUrl});
    ajax.go({method: 'POST'});
    ajax.response(this, function(inSender, data) {
      self.setPin(data.user_code);
      self.setAuthCode(data.code);
      self.setAuthUrl(data.verification_uri);
    });
  },

  /**
   * Checks if the user correctly allowed app to use their data
   *
   * @param  {Function} callback [Method to be executed when request successful finishes]
   */
  checkAuthConceeded: function(callback) {
    var self = this;
    var ajax = new enyo.Ajax({url: this._successAuthUrl});
    ajax.go({method: 'POST'});
    ajax.response(this, function(inSender, data) {
      callback(data);
    });
  },

  getProfileData: function(callback) {
    var self = this;
    var ajax = new enyo.Ajax({url: this._profileDataUrl});
    ajax.go();
    ajax.response(this, function(inSender, data) {
      self.setUserId(data.id);
      self.setUserName(data.name);
      self.setUserPhoto(data.picture.data.url);

      if (!_.isUndefined(callback) && _.isFunction(callback))
        callback(data);
    });
  }
});
