enyo.kind({
  name: 'smartView.PanelIntro',
  kind: 'moon.Panel',
  title: 'Bem Vindo ao SmartView',
  titleBelow: 'Conecte suas mídias sociais e veja todas suas fotos de maneira centralizada',
  smallHeader: true,
  autoNumber: false,
  components: [{
    kind: "moon.Scroller",
    components: [
      {kind: "moon.Item", classes:'item-masonry', content: "Item 1"},
      {kind: "moon.Item", classes:'item-masonry', content: "Item 2 (Disabled)"},
      {kind: "moon.Item", classes:'item-masonry', content: "Item 3 (Disabled) with really long marqueed text",},
      {kind: "moon.Item", classes:'item-masonry', content: "Item 4"},
      {kind: "moon.Item", classes:'item-masonry', content: "Item with very long text that should truncate"},
      {kind: "moon.Item", classes:'item-masonry', content: "Item   with   extra   spaces   that   should   truncate"},
      {kind: "moon.Item", classes:'item-masonry', content: "Item 1"},
      {kind: "moon.Item", classes:'item-masonry', content: "Item 2 (Disabled)"},
      {kind: "moon.Item", classes:'item-masonry', content: "Item 3 (Disabled) with really long marqueed text",},
      {kind: "moon.Item", classes:'item-masonry', content: "Item 4"},
      {kind: "moon.Item", classes:'item-masonry', content: "Item with very long text that should truncate"},
      {kind: "moon.Item", classes:'item-masonry', content: "Item   with   extra   spaces   that   should   truncate"},
      {kind: "moon.Item", classes:'item-masonry', content: "Item 1"},
      {kind: "moon.Item", classes:'item-masonry', content: "Item 2 (Disabled)"},
      {kind: "moon.Item", classes:'item-masonry', content: "Item 3 (Disabled) with really long marqueed text"},
      {kind: "moon.Item", classes:'item-masonry', content: "Item 4"},
      {kind: "moon.Item", classes:'item-masonry', content: "Item with very long text that should truncate"},
      {kind: "moon.Item", classes:'item-masonry', content: "Item   with   extra   spaces   that   should   truncate"}
    ]
  }]
});