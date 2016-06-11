enyo.kind({
  name: 'smartView.FacebookLogin',
  title: 'Facebook Login',
  kind: 'moon.Panel',
  content: 'Para acessar',

  // published: {
  //   pin: undefined,
  //   authCode: undefined,
  //   url: undefined,
  //   clientID: '1046426045376479',
  //   permissions: 'public_profile,user_likes,email,user_about_me,user_hometown,user_photos,user_likes,user_location,user_photos,user_religion_politics,user_posts'
  // },

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
    from: "facebookAPI.pin", to: ".$.inputPin.content"
  },{
    from: "facebookAPI.authUrl", to: ".$.inputUrl.content"
  }],

  create: function() {
    this.inherited(arguments);
    this.set('facebookAPI', new smartView.facebookAPI());

    this.facebookAPI.checkAuth();
    this.startPooling();
  },

  destroy: function() {
    this.inherited(arguments);
    this.stopPooling();
  },

  logout: function() {
    this.facebookAPI.removeToken();
  },

  startPooling: function() {
    var self = this;
    window.loginPool = setInterval(function() {
      self.facebookAPI.checkAuthConceeded(function(data) {
        self.facebookAPI.setToken(data.access_token);
        self.stopPooling();
        self.doSetPanel('smartView.PanelIntro');
      });
    }, 10000);
  },

  stopPooling: function() {
    clearTimeout(window.loginPool);
  }
});
