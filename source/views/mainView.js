enyo.kind({
  name: 'smartView.mainPanel',
  kind: 'moon.Panels',
  kindArranger: 'enyo.CardArranger',
  pattern: 'none',
  classes: 'enyo-fit',
  components: [{
    kind: 'smartView.PanelIntro'
  }],

  handlers: {
    onTransitionFinish: 'transitionFinish'
  },

  /**
   * Applied when each transition panel
   * finish it's loading animation
   */
  transitionFinish: function() {
    this.previousButtonShowingStatus();
    this.popUpPanels();
  },

  /**
   * While transitioning pages, removes 
   * everything behind current active panel
   */
  popUpPanels: function() {
    var currentIndex = this.getPanelIndex(this.getActive());

    // Pops every panel whichs behind it
    this.popPanels(currentIndex + 1);
  },

  /**
   * Controlls if the previous button should appear or not,
   * based on the current active window
   */
  previousButtonShowingStatus: function() {
    if (this.getActive().name === 'panelIntro') {
      window.app.$.mainView.$.previousPanel.hide();
      return;
    }
    window.app.$.mainView.$.previousPanel.show();
  }
});

enyo.kind({
  name: 'smartView.MainView',
  classes: 'moon enyo-fit enyo-unselectable main-view',
  components: [{
    kind: 'smartView.mainPanel'
  }, {
    kind: 'smartView.SocialBar'
  }, {
    kind: 'moon.Button',
    name: 'previousPanel',
    content: 'Voltar',
    style: 'position: absolute; left: 20px; bottom: 30px;',
    showing: false,
    ontap: 'prevPanel'
  }, {
    name: 'console', kind: "moon.BodyText", content: "Item 1"},
  ],

  handlers: {
    onRequestPushPanel: 'pushPanel',
    onReplacePanel: 'replacePanel',
    onSetPanel: 'setPanel'
  },

  create: function() {
    this.inherited(arguments);
  },

  prevPanel: function() {
    this.$.mainPanel.previous();
  },

  setPanel: function(panelName) {
    var indexPanel = this.$.mainPanel.selectPanelByName(panelName);
    this.$.mainPanel.setIndexDirect(indexPanel);
  },

  replacePanel: function(isSender, inEvent) {
    var indexPanel = this.$.mainPanel.getPanelIndex(this.$.mainPanel.getActive());
    this.$.mainPanel.replacePanel(indexPanel, inEvent.panel);
  },

  pushPanel: function(inSender, inEvent) {
    var info = {};
    var panels = this.$.mainPanel.getPanels();
    var exists = false;
    var currentName = undefined;

    _.each(panels, function(panel) {
      if (panel.kind === inEvent.panel.kind) {
        exists = true;
        currentName = panel.name;
      }
    });

    if (!_.isUndefined(inEvent.model))
      info.model = inEvent.model;

    if (exists) {
      this.$.mainPanel.selectPanelByName(currentName);
    } else {
      this.$.mainPanel.pushPanel(inEvent.panel, info);
    }
  },
});
