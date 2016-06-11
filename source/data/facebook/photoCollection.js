enyo.kind({
  name: 'smartView.Facebook.PhotoCollection',
  kind: 'enyo.Collection',
  model: 'smartView.Facebook.PhotoModel',

  options: {parse: true},
  source: new smartView.FacebookSource(),

  create: function(data) {
    // Dynamically defines the current url
    this.url = data.url;
    this.empty({destroy: true});
    this.fetch(data);
    this.inherited(arguments);
  },

  fetch: function(data) {
    // Check if is empty
    if(_.isEmpty(this.params))
      this.params = {};

    // Extend property passing new params
    if (!_.isUndefined(data.params)) {
      _.extend(this.params, data.params);
    }

    console.warn('dataaaaa', data);

    // Updates maximum photos
    this.params.limit = 500;

    // if current fetch it's loading album, get all the data inside like description
    if(this.url === 'me/albums') {
      this.params.fields = 'count,privacy,description,created_time,cover_photo,name,place';
    } else if(this.url === 'me/photos') {
      this.params.fields = 'images';
    } else {
      this.params.fields = 'photos{images}';
    }


    console.warn('dataaa', this.params);

    return this.inherited(arguments);
  },

  fetched: function(data){
    this.inherited(arguments);
  },

  parse: function(data) {
    if (!_.isUndefined(data.photos)) {
      return data.photos.data;
    } else {
      return data.data;
    }
  }
});