enyo.kind({
  name: 'smartView.FacebookSource',
  kind: 'enyo.AjaxSource',
  urlRoot: 'https://graph.facebook.com/v2.5/',

  fetch: function(rec, opts) {
    var self = this;
    opts.params = enyo.clone(rec.params);
    opts.params.access_token = window.app.storage.get('FacebookAccessToken');
    opts.params.format = 'json';

    /**
     * Actually i'm treatin correctly the error message,
     * need a way to handle transitions on the system
     */
    opts.error = function(statusCode, request) {
      var data = JSON.parse(request.xhrResponse.body);
      console.warn(data);
      if (!_.isUndefined(data.error)) {
        if (data.error.code === 190 || data.error.code === 102) {

          new moon.Popup({
            allowHtml: true,
            content: '<b>Ocorreu um ao tentar listar suas imagens</b><hr/>Pedimos desculpas, mas será necessário logar novamente no aplicativo! Não se preocupe, provavelmente foi um problema causado pela maré alta do extremo polo, mas já colocamos nossos pinguins para resolver este problema!'
          }).show();

          // Clean the auth code so the user needs to login
          window.app.storage.remove('FacebookAccessToken');

          setTimeout(function() {
            new moon.Popup({
              content: 'teste',
            });
            window.app.$.mainView.replacePanel({}, {panel: {kind: 'smartView.FacebookLogin'}});
          }, 1000);
        }
      }
    };

    this.inherited(arguments);
  },
});
