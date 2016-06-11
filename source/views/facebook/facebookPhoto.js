enyo.kind({
  name: 'smartView.FacebookPhoto',
  kind: 'moon.Panel',
  headerType: 'small',
  layoutKind: 'FittableColumnsLayout',
  components: [{
    kind: 'moon.Image',
    fit: true,
    sizing: 'contain',
    name: 'image'
  }],
  bindings: [{
    from: 'model.id',
    to: 'title'
  }, {
    from: 'model.original',
    to: '$.image.src'
  }, {
    from: 'model.username',
    to: 'titleBelow',
    transform: function(val) {
      return 'By ' + (val || ' unknown user');
    }
  }, {
    from: 'model.taken',
    to: 'subTitleBelow',
    transform: function(val) {
      return val ? 'Taken ' + val : '';
    }
  }],

  transitionFinished: function(inInfo) {
    console.warn(this.model)
    console.warn(inInfo);
    if (inInfo.from < inInfo.to) {
      // this.model.fetch();
    }
  }
});
