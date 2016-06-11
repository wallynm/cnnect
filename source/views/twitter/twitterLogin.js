enyo.kind({
  name: 'smartView.TwitterLogin',
  title: 'Twitter Login',
  kind: 'moon.Panel',
  content: 'Para acessar',

  components: [
    {kind: 'moon.BodyText', name: 'result', content: 'Acesse a Url a spresentada pelo seu celular ou pelo computador e informe o código a seguir'},
    {tag: 'br'},
    {kind: 'moon.BodyText', name: 'inputPin', allowHtml: true, content: 'Awaiting request finish'},
    {kind: 'moon.BodyText', name: 'inputUrl', allowHtml: true, content: 'Awaiting request finish'},
  ],

  create: function() {
    this.inherited(arguments);
    this.set('twitterAPI', new smartView.twitterAPI());
  }
});
