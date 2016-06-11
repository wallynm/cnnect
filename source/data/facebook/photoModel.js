enyo.kind({
  name: 'smartView.Facebook.PhotoModel',
  kind: 'enyo.Model',
  options: {parse: true},
  source: new smartView.FacebookSource(),
  computed: [{
    method: 'thumbnail',
  }],
  thumbnail: function() {
    var photoID = (_.isUndefined(this.attributes.cover_photo)) ? this.get('id') : this.attributes.cover_photo.id;

    return 'https://graph.facebook.com/v2.5/' + photoID + '/picture?access_token=' + window.app.storage.get('FacebookAccessToken');
  },
  parse: function(data) {
    console.warn('parsed data ->', data)

    if (!_.isUndefined(data.images)) {

      // Stores each images as sttributes inside model
      _.each(data.images, function(photo, i){
        data['image' + i] = photo.source;
      });

      // Sets original as higher image
      data.original = data.image0;
      delete data.images;
    }

    return data;
  }
});