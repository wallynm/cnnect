enyo.kind({
  name: 'smartView.PanelConfig',
  title: 'Configurações - seus dados',
  kind: 'moon.Panel',

  components: [
    {kind: 'moon.BodyText', name: 'userName', allowHtml: true, content: 'Awaiting request finish'},
    {kind: 'moon.Image', name: 'userPhoto', src: 'undefined', showBadgesOnSpotlight: false },
    {kind: 'moon.Button', content: 'Deslogar Facebook', ontap: 'facebookLogout'}
  ],

  events: {
    onRequestPushPanel: '',
    onSetPanel: ''
  },

  bindings: [{
    from: "facebookAPI.userName", to: ".$.userName.content"
  },{
    from: "facebookAPI.userPhoto", to: ".$.userPhoto.src"
  }],  

  create: function() {
    this.inherited(arguments);
    this.set('facebookAPI', new smartView.facebookAPI());
    this.set('twitterAPI', new smartView.twitterAPI());
    this.set('googleAPI', new smartView.googleAPI());
    this.facebookAPI.getProfileData();
  },

  facebookLogout: function() {
    this.facebookAPI.removeToken();
    this.doSetPanel('smartView.PanelIntro');
  }
});
