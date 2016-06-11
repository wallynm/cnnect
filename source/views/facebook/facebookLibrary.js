  enyo.kind({
    name: 'smartView.FacebookLibrary',
    title: 'Facebook Library',
    kind: 'moon.Panel',
    collapsingHeader: true,
    autoNumber: false,
    headerType: 'medium',

    headerComponents: [{
      kind: 'moon.ContextualPopupDecorator',
      components: [{
        name: 'ListingType',
        content: 'Meus Álbuns',
        small: true
      }, {
        name: 'ListingTypePopup',
        kind: 'moon.ContextualPopup',
        autoDismiss: true,

        components: [{
          classes: 'moon-5h',
          kind: 'Group',
          onActivate: 'groupChanged',
          components: [{
            kind: 'moon.FormCheckbox',
            content: 'Meus Álbuns',
            dataType: 'albuns',
            checked: true
          }, {
            kind: 'moon.FormCheckbox',
            dataType: 'tagged',
            content: 'Fotos Marcadas'
          }, {
            kind: 'moon.FormCheckbox',
            dataType: 'uploaded',
            content: 'Fotos Sincronizadas'
          }]
        }]
      }]
    }],

    components: [{
      kind: 'moon.DataGridList',
      name: 'PhotosGrid',
      fit: true,
      minWidth: 250,
      minHeight: 300,
      components: [{
        kind: 'moon.GridListImageItem',
        imageSizing: 'cover',
        useSubCaption: false,
        ontap: 'itemSelected',
        centered: true,
        showBadgesOnSpotlight: true,
        components: [{
          tag: "div", name: 'photosCounterBackground', classes: 'photos-counter-background' },{
          kind: "moon.BodyText", name: 'photosCounter', classes: 'photos-counter', content: "1"
        }],
        bindings: [{
          from: 'model.name',
          to: 'caption'
        }, {
          from: 'model.thumbnail',
          to: 'source'
        }, {
          from: 'model.count',
          to: '$.photosCounter.content',

          /**
           * Trougth transform i control the showing parameters for images counter,
           * this way i can control whenether it will be show or not
           *
           * @param  {val} val Value passed trhougth model instance
           * @return {val}     Value that will be rendered into gridItem
           */
          transform: function(val) {
            if (_.isUndefined(val)){
              // Hides the counter, if nothing to show
              this.$.photosCounterBackground.hide();
              this.$.photosCounter.hide();
            } else {
              this.$.photosCounterBackground.show();
              this.$.photosCounter.show();
            }
            return val;
          }
        }]
      }]
    }],

    /**
     * The default type that will be used to load images
     * @type {String}
     */
    _defaultType: 'albuns',

    /**
     * Eventsthat will controll the changing status, as photos
     * @type {Object}
     */
    published: {
      photos: undefined,
      dataType: undefined,
    },

    create: function() {
      this.inherited(arguments);
      this.setDataType(this._defaultType);
    },

    events: {
      onRequestPushPanel: ''
    },

    bindings: [{
      from: 'photos',
      to: '$.PhotosGrid.collection'
    }],

    dataTypeChanged: function() {
      var type = this.getDataType();
      var collection = undefined;

      if (type === 'albuns') {

        // Set the base url as 
        collection = new smartView.Facebook.PhotoCollection({url : 'me/albums'});
      } else {

        // Sets the urls also updating it's parameters as type
        collection = new smartView.Facebook.PhotoCollection({url : 'me/photos', params: {type: type}});
      }

      this.set('photos', collection);
    },

    /**
     * Triged event when user select a listing type
     */
    groupChanged: function(inSender, inEvent) {
      if (inEvent.toggledControl.getChecked()) {
        var selected = inEvent.toggledControl.getContent();

        // Every time that ListyingType get changed i close the
        // popup and update the value, for some reason isn't closing automatically
        if (this.$.ListingType.content !== selected) {
          this.$.ListingTypePopup.closePopup();
          this.$.ListingType.setContent(selected);
          this.setDataType(inEvent.toggledControl.dataType);
        }
      }
    },

    /**
     * Method trigered when user select an album
     */
    itemSelected: function(inSender, inEvent) {
      console.warn('facebookLibrary.itemSelected', inEvent.model)

      // Controls if the oanel should open a library or a a photo object
      var kindPanel = (!_.isUndefined(inEvent.model.attributes.count)) ? 'smartView.FacebookAlbum' : 'smartView.FacebookPhoto';
      this.doRequestPushPanel({panel: { kind: kindPanel, model: inEvent.model}});
    }
  });
