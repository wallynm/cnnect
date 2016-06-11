enyo.kind({
  name: 'smartView.twitterAPI',
  kind: 'enyo.Component',

  _permissions: 'email profile',
  _clientID: '638344118098-889a69gq2qnjeoea56vpjhavnrp31666.apps.googleusercontent.com',
  _authUrl: 'https://accounts.google.com/o/oauth2/device/code',
  _successAuthUrl: 'https://www.googleapis.com/oauth2/v3/token',


  create: function() {
    var self = this;
    self.inherited(arguments);
    window.app.$.mainView.$.console.setContent('AFFF');


    // // Updates authToken with the current saved token, so the client data binded updates the urls
    // this.setAuthToken(this.getToken());
    this.$.SmartView.twitterService.send()
    .onComplete(function(){
      window.app.$.mainView.$.console.setContent('Funfou...')
    });
    ;
  }
});
