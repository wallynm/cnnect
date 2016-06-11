enyo.kind({
  name: 'smartView.FacebookAlbum',
  title: 'Facebook Album',
  kind: 'moon.Panel',
  collapsingHeader: true,
  autoNumber: false,
  headerType: 'medium',
  titleBelow: 'Suas memórias todas reunidas!',
  collapsingHeader: true,

  components: [{
    kind: 'FittableRows',
    classes: 'enyo-fit',
    components: [{
      kind: 'FittableColumns',
      fit: true,
      classes: 'outer-box',
      components: [{
        name: 'moon.sample.BodyTextSample',
        kind: 'moon.BodyText',
        classes: 'moon-5h',
        content: 'Detalhes dos album selecionado pelo usuario'
      }, {
        kind: 'moon.DataGridList',
        fit: true,
        classes: 'inner-box',
        name: 'SearchPanelGrid',
        onScrollStop: 'onScroll',
        minWidth: 200,
        minHeight: 250,
        components: [{
          kind: 'moon.GridListImageItem',
          imageSizing: 'cover',
          useCaption: false,
          useSubCaption: false,
          ontap: 'itemSelected',
          centered: true,
          bindings: [
            {from: 'model.name', to: 'caption'},
            {from: 'model.thumbnail', to: 'source'},
            {from: 'model.info'},
          ]
        }]
      }]
    }]
  }],

  bindings: [{
    from: 'photos', to: '$.SearchPanelGrid.collection'
  }],

  events: {
    onPostTransitionComplete: 'transitionFinished'
  },

  events: {
    onRequestPushPanel: ''
  },

  create: function(data) {
    this.inherited(arguments);
    this.set('photos', new smartView.Facebook.PhotoCollection({url: this.model.get('id')}));
    this.setTitleBelow(this.model.get('name'));
  },

  // onScroll: function(){
  //   this.get('photos').fetch({next: true});
  //   console.warn(this.$.SearchPanelGrid);
  //   window.testeee = this.$.SearchPanelGrid;
  //   this.$.SearchPanelGrid.refresh();
  // },

  itemSelected: function(inSender, inEvent) {
    this.doRequestPushPanel({panel: {kind: 'smartView.FacebookPhoto', model: inEvent.model}});
  }
});
