<template>
    <div class="map_container">
        <div id="map"></div>
        <input type="text" class="controls" id="pac-input"/>
    </div>
</template>

<script>
    export default {
        props: {
            options: {
                type: Object,
                required: false,
                default() {
                    return {
                        map: {/** other map options **/},
                        marker: {/** marker options **/},
                        autocomplete: {/** autocomplete options **/}
                    }
                }
            },
            value: {
                type: Object,
                required: false,
                default() {
                    return {lat: -6.208224, lng: 106.845744}
                }
            },
        },
        data() {
            return {
                map: null,
                marker: null,
                autocomplete: null,
                val: {lat: 41.0082376, lng: 28.97835889999999},
            }
        },
        components: {},
        methods: {

            getLatLong(){
                console.log('321')
            },
            geocodeLocation(e) {
                this.val = {lat: this.marker.getPosition().lat(), lng: this.marker.getPosition().lng()}
                this.map.setCenter(this.val);
                this.map.panTo(this.val)
                this.$emit('input', this.val)
            },
            moveMarker() {
                document.getElementById('pac-input').value = ''
                let place = this.autocomplete.getPlace()
                if (!place.geometry) {
                    indow.alert("No details available for input: '" + place.name + "'");
                    return;
                }
                this.map.setCenter(place.geometry.location);
                this.map.setZoom(14);
                this.marker.setPosition(place.geometry.location);
                this.marker.setVisible(true); 
                this.val = {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()}
                this.$emit('input', this.val)
            },

        },
        watch: {
            value(newValue) {
                if (newValue != undefined && typeof newValue == 'object' && newValue.lat && newValue.lng) {
                    this.val = newValue
                    this.map.setCenter(this.val);
                    // this.map.setZoom(14);
                    this.marker.setPosition(this.val);
                    this.$emit('input', this.val)
                }
            }
        },
        mounted() {

            if (!(this.value == undefined || typeof this.value != 'object' || (typeof this.value == 'object' && (!this.value.lat || !this.value.lng)))) {
                this.val = this.value
            }
            if (!this.options.map) this.options.map = {}
            if (!this.options.marker) this.options.marker = {}
            if (!this.options.autocomplete) this.options.autocomplete = {}
            this.$emit('input', this.val)
            this.options.map.center = this.val
            let input = document.getElementById('pac-input');
            this.map = new google.maps.Map(document.getElementById('map'), Object.assign({
                center: {lat: 0, lng: 0},
                zoom: 15,
            }, this.options.map))
            this.marker = new google.maps.Marker(Object.assign({
                map: this.map,
                position: this.map.getCenter(),
                draggable: true
            }, this.options.marker))


            this.autocomplete = new google.maps.places.Autocomplete(input, this.options.autocomplete)
            this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
            // events
            this.marker.addListener('dragend', this.geocodeLocation)
            this.autocomplete.addListener('place_changed', this.moveMarker)

        },
    }
</script>
<style>
    .map_container, #map {
        min-height: 200px;
        height: 100%;
        width: 100%;
    }

    .pac-card {
        margin: 10px 10px 0 0;
        border-radius: 2px 0 0 2px;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        outline: none;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        background-color: #fff;
    }

    #pac-container {
        padding-bottom: 12px;
        margin-right: 12px;
    }

    .pac-container {
        z-index: 9999
    }

    .pac-controls {
        display: inline-block;
        padding: 5px 11px;
    }

    .pac-controls label {
        font-size: 13px;
        font-weight: 300;
    }

    #pac-input {
        padding: 7px 14px;
        margin: 10px;
        width: 30%;
        min-width: 300px;
        font-size: 15px;
        font-weight: 300;
        text-overflow: ellipsis;
        border: 0;
        border-radius: 2px 0 0 2px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, .3);
    }

    #pac-input:focus {
        border-color: #4d90fe;
    }
</style>
