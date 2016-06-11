var svgUnlink = '<svg width="40px" height="40px" viewBox="13.545 15.126 119.17 116.929"> <g> <path class="unlink-top" d="M132.715,51.031c-0.545,2.497-0.943,5.037-1.661,7.484c-2.1,7.159-6.424,12.659-12.938,16.293 c-8.013,4.471-16.102,8.805-24.174,13.169c-3.347,1.809-7.235,0.689-8.966-2.511c-1.776-3.283-0.599-7.107,2.807-8.968 c7.097-3.879,14.156-7.831,21.327-11.567c5.515-2.873,8.068-7.583,8.837-13.428c0.186-1.412-0.194-3.063-0.794-4.385 c-3.511-7.729-12.888-10.768-20.453-6.695c-7.292,3.926-14.558,7.901-21.825,11.874c-1.791,0.979-3.634,1.381-5.602,0.688 c-2.645-0.931-4.186-2.847-4.439-5.604c-0.254-2.768,0.952-4.944,3.388-6.296c5.032-2.792,10.1-5.518,15.154-8.27 c3.039-1.655,6.063-3.34,9.124-4.953c14.914-7.856,33.748-0.499,39.089,15.282c0.506,1.495,0.757,3.076,1.127,4.617 C132.715,48.851,132.715,49.941,132.715,51.031z"/> <path class="unlink-bottom" d="M44.05,132.055c-6.157-0.117-12.96-3.053-18.5-8.873c-3.418-3.591-4.987-7.99-5.571-12.818 c-0.661-5.472-0.296-10.85,2.13-15.852c1.226-2.527,2.733-5.023,4.577-7.126c6.058-6.905,12.304-13.645,18.526-20.404 c3.205-3.482,8.586-2.788,10.71,1.302c1.268,2.441,0.843,5.354-1.16,7.56c-5.497,6.05-11.095,11.656-16.536,18.112 c-4.297,4.622-5.508,15.326-1.378,19.455c5.977,5.99,15.611,5.637,21.446-0.72c4.95-5.391,16.149-17.727,16.841-18.466 c2.622-2.801,6.573-3.046,9.296-0.583c2.749,2.486,2.895,6.523,0.289,9.398c-4.941,5.452-17.014,18.676-18.089,19.856 C61.233,128.822,53.92,132.057,44.05,132.055z"/> <path d="M95.066,59.211c0.058,2.273-0.892,4.11-2.415,5.742c-7.729,8.28-15.439,16.577-23.156,24.869 c-2.042,2.194-4.071,4.4-6.126,6.581c-3.231,3.428-8.089,3.674-11.358,0.595c-3.202-3.017-3.26-7.903-0.111-11.293 c9.802-10.551,19.61-21.098,29.418-31.642c2.201-2.366,4.897-3.304,8.033-2.445c3.031,0.831,4.881,2.909,5.615,5.969 c0.045,0.188,0.087,0.381,0.095,0.573C95.077,58.511,95.066,58.861,95.066,59.211z"/> <g class="unlink-particles"> <path class="particle1" d="M45.255,58.952c-7.293-0.445-14.585-0.891-21.878-1.336c-2.793-0.17-5.584-0.389-8.379-0.481 c-1.08-0.036-1.549-0.495-1.436-1.469c0.285-2.46,0.443-4.961,1.036-7.35c0.65-2.618,1.628-5.172,2.661-7.672 c0.659-1.595,1.043-1.602,2.595-0.839c9.198,4.521,18.398,9.041,27.592,13.57c2.313,1.139,2.743,3.903,0.718,5.096 c-0.806,0.475-1.902,0.458-2.866,0.665C45.285,59.075,45.27,59.014,45.255,58.952z"/> <path class="particle2" d="M57.758,15.126c2.181,0.247,4.073,0.431,5.954,0.685c1.013,0.137,1.509,0.571,1.274,1.811 c-1.697,8.926-3.308,17.87-4.959,26.805c-0.242,1.309-1.175,2.107-2.393,2.14c-1.378,0.037-2.251-0.713-2.604-2.323 c-1.355-6.182-2.693-12.368-4.036-18.553c-0.56-2.58-1.031-5.184-1.713-7.731c-0.345-1.288,0.299-1.703,1.236-1.853 C53.003,15.709,55.507,15.424,57.758,15.126z"/> <path class="particle3" d="M46.467,38.901c-0.046,1.403-1.233,2.141-2.403,1.718c-0.394-0.143-0.757-0.396-1.104-0.64 c-5.817-4.096-11.614-8.221-17.459-12.277c-0.96-0.666-0.985-1.235-0.353-2.057c1.85-2.403,4.076-4.372,6.717-5.869 c0.84-0.476,1.431-0.366,2.029,0.515c3.933,5.787,7.926,11.534,11.885,17.304C46.101,38.061,46.314,38.604,46.467,38.901z"/> </g> </g> </svg>';

enyo.kind({
  name: 'smartView.SocialBar',
  kind: 'moon.Panels',
  classes: 'enyo-fit social-bar',
  pattern: 'alwaysviewing',
  size: 'small',
  narrowFit: false,
  popOnBack: true,

  fit: false,
  narrowFit: false,
  arrangerKind: 'CollapsingArranger',

  components: [{
    name: 'smartView.SocialBar',
    kind: 'moon.Panel',
    headerType: 'small',

    components: [{
      name: 'smartView.ConfigButton',
      kind: 'moon.Item',
      classes: 'social-button config-button',
      content: 'Configurações',
      ontap: 'selectPanel',
      components: [{
        kind: 'moon.Image', src: 'assets/config.png'
      }]
    }, {
      name: 'smartView.FacebookButton',
      kind: 'moon.Item',
      classes: 'social-button facebook-button',
      ontap: 'selectPanel',
      onSpotlightFocused: 'itemFocus',
      onSpotlightBlur: 'itemFocus',

      components: [{
        tag: 'div', allowHtml: true, classes: 'unlink-svg', content: svgUnlink}, {
        tag: 'span', content: 'Facebook'
      }]
    },{
      name: 'smartView.TwitterButton',
      kind: 'moon.Item',
      classes: 'social-button twitter-button',
      ontap: 'selectPanel',
      onSpotlightFocused: 'itemFocus',
      onSpotlightBlur: 'itemFocus',

      components: [{
        tag: 'div', allowHtml: true, classes: 'unlink-svg', content: svgUnlink}, {
        tag: 'span', content: 'Twitter'
      }]
    }, {
      name: 'smartView.GoogleButton',
      kind: 'moon.Item',
      classes: 'social-button google-button',
      ontap: 'selectPanel',
      onSpotlightFocused: 'itemFocus',
      onSpotlightBlur: 'itemFocus',
      components: [{
        tag: 'div', allowHtml: true, classes: 'unlink-svg', content: svgUnlink}, {
        tag: 'span', content: 'Google'
      }]
    }, {
      name: 'smartView.InstagramButton',
      kind: 'moon.Item',
      classes: 'social-button instagram-button',
      ontap: 'selectPanel',
      onSpotlightFocused: 'itemFocus',
      onSpotlightBlur: 'itemFocus',
      components: [{
        tag: 'div', allowHtml: true, classes: 'unlink-svg', content: svgUnlink}, {
        tag: 'span', content: 'Instagram'
      }]
    },{
      name: 'smartView.FlickrButton',
      kind: 'moon.Item',
      classes: 'social-button flickr-button',
      ontap: 'selectPanel',
      onSpotlightFocused: 'itemFocus',
      onSpotlightBlur: 'itemFocus',
      components: [{
        tag: 'div', allowHtml: true, classes: 'unlink-svg', content: svgUnlink}, {
        tag: 'span', content: 'Flickr'
      }]
    }, {
      name: 'smartView.PocketButton',
      kind: 'moon.Item',
      classes: 'social-button pocket-button',
      ontap: 'selectPanel',
      onSpotlightFocused: 'itemFocus',
      onSpotlightBlur: 'itemFocus',
      components: [{
        tag: 'div', allowHtml: true, classes: 'unlink-svg', content: svgUnlink}, {
        tag: 'span', content: 'Pocket'
      }]
    }]
  }],

  events: {
    onRequestPushPanel: '',
    onReplacePanel: ''
  },

  rendered: function() {
    this.inherited(arguments);
    this.updateButtonsConnected();
  },

  itemFocus: function(component, event) {
    // event.target.firstChild.$el = $(event.target.firstChild);
    // event.target.firstChild.$el.toggleClass('unlink-over');
  },

  updateButtonsConnected: function() {
    this.$['smartView.FacebookButton'].addClass('connected');
    this.$['smartView.FlickrButton'].addClass('connected');
  },

  selectPanel: function(inSender, inEvent) {
    var self = this;

    // Cleans every class before adds new attribute
    // $('.social-button').removeClass('selected');

    // Adds selected classe to differ which panel has been selected by the user
    // @TODO - Not working yet - adding classes on rollover
    // inSender.addClass('selected');

    if (inSender.name === 'smartView.ConfigButton') {
      this.doRequestPushPanel({panel: {kind: 'smartView.PanelConfig'}});
    }

    else if (inSender.name === 'smartView.FlickrButton') {
      this.doRequestPushPanel({panel: {kind: 'smartView.FlickrLibrary'}});
    }

    else if (inSender.name === 'smartView.TwitterButton') {
      this.doRequestPushPanel({panel: {kind: 'smartView.TwitterLogin'}});
    }    

    else if (inSender.name === 'smartView.GoogleButton') {
      this.doRequestPushPanel({panel: {kind: 'smartView.GoogleLogin'}});
    }

    else if (inSender.name === 'smartView.FacebookButton') {
      if (_.isUndefined(self.app.storage.get('FacebookAccessToken'))) {
        this.doRequestPushPanel({panel: {kind: 'smartView.FacebookLogin', model: inEvent.model}});
      } else {
        // TODO - Replace, aplicar transição durante a alteraação de paineis
        this.doRequestPushPanel({panel: {kind: 'smartView.FacebookLibrary', model: inEvent.model}});
        // this.doRequestPusshPanel({panel: {kind: 'smartView.PanelFacebookConfig', model: inEvent.model}});
      }
    }
  }
});

