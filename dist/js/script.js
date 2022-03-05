$(function() {
 
   console.log(816666)
   $('#map').locationpicker({
   location: {latitude: -6.200000, longitude: 106.816666},   
   radius: 0,
   inputBinding: {
      latitudeInput: $('#lat'),
      longitudeInput: $('#lng'),
      locationNameInput: $('#location')
   },
   enableAutocomplete: true,
   onchanged: function(currentLocation, radius, isMarkerDropped) {
      alert("Location changed. New location (" + currentLocation.latitude + ", " + currentLocation.longitude + ")");
    }
});
 
 
});
