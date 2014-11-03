App.ArtworksController = Ember.ObjectController.extend({
  needs: 'artwork',
  query: "",
  results: [],
  actions: {
    search: function() {
      var val = this.get('query');
      this.set('query',"")  
      this.transitionTo('artwork',val);
    },
  },

  showExtendedBinding: Ember.Binding.oneWay("controllers.artwork.showExtended")
});