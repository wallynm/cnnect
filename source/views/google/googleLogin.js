enyo.kind({
  name: 'smartView.GoogleLogin',
  title: 'Google Login',
  kind: 'moon.Panel',
  content: 'Para acessar',

  components: [
    {kind: 'moon.BodyText', name: 'result', content: 'Acesse a Url a spresentada pelo seu celular ou pelo computador e informe o código a seguir'},
    {tag: 'br'},
    {kind: 'moon.BodyText', name: 'inputPin', allowHtml: true, content: 'Awaiting request finish'},
    {kind: 'moon.BodyText', name: 'inputUrl', allowHtml: true, content: 'Awaiting request finish'},
  ],

  events: {
    onRequestPushPanel: '',
    onSetPanel: ''
  },

  bindings: [{
    from: 'googleAPI.pin', to: '.$.inputPin.content'
  },{
    from: 'googleAPI.authUrl', to: '.$.inputUrl.content'
  }],

  create: function() {
    // this.inherited(arguments);
    // this.set('googleAPI', new smartView.googleAPI());

    // this.googleAPI.checkAuth();
    // this.startPooling();
    this.handleAuthClick();
  },

  destroy: function() {
    this.inherited(arguments);
    this.stopPooling();
  },

  logout: function() {
    this.googleAPI.removeToken();
  },

  startPooling: function() {
    var self = this;
    window.loginPool = setInterval(function() {
      self.googleAPI.checkAuthConceeded(function(data) {
        self.googleAPI.setToken(data.access_token);
        self.stopPooling();
        self.doSetPanel('smartView.PanelIntro');
      });
    }, 10000);
  },

  stopPooling: function() {
    clearTimeout(window.loginPool);
  },














  CLIENT_ID : '638344118098-889a69gq2qnjeoea56vpjhavnrp31666.apps.googleusercontent.com',

  SCOPES : ['https://www.googleapis.com/auth/drive.metadata.readonly'],

  /**
   * Check if current user has authorized this application.
   */
  checkAuth: function() {
    var self = this;
    gapi.auth.authorize(
      {
        'client_id': this.CLIENT_ID,
        'scope': this.SCOPES.join(' '),
        'immediate': true
      }, function(){
        self.handleAuthResult();
      });
  },

  /**
   * Handle response from authorization server.
   *
   * @param {Object} authResult Authorization result.
   */
  handleAuthResult: function(authResult) {
    alert('o-o')
    var authorizeDiv = document.getElementById('authorize-div');
    if (authResult && !authResult.error) {
      // Hide auth UI, then load client library.
      authorizeDiv.style.display = 'none';
      loadDriveApi();
    } else {
      // Show auth UI, allowing the user to initiate authorization by
      // clicking authorize button.
      authorizeDiv.style.display = 'inline';
    }
  },

  /**
   * Initiate auth flow in response to user clicking authorize button.
   *
   * @param {Event} event Button click event.
   */
  handleAuthClick: function(event) {
    var self = this;
    gapi.auth.authorize(
      {client_id: this.CLIENT_ID, scope: this.SCOPES, immediate: false}, function(){
        self.handleAuthResult();
      });

    return false;
  },

  /**
   * Load Drive API client library.
   */
  loadDriveApi: function() {
    gapi.client.load('drive', 'v2', listFiles);
  },

  /**
   * Print files.
   */
  listFiles: function() {
    var request = gapi.client.drive.files.list({
        'maxResults': 10
      });

      request.execute(function(resp) {
        appendPre('Files:');
        var files = resp.items;
        if (files && files.length > 0) {
          for (var i = 0; i < files.length; i++) {
            var file = files[i];
            appendPre(file.title + ' (' + file.id + ')');
          }
        } else {
          appendPre('No files found.');
        }
      });
  },

  /**
   * Append a pre element to the body containing the given message
   * as its text node.
   *
   * @param {string} message Text to be placed in pre element.
   */
  appendPre: function(message) {
    var pre = document.getElementById('output');
    var textContent = document.createTextNode(message + '\n');
    pre.appendChild(textContent);
  }
});
