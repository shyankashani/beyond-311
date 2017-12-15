<template>
  <div>
    <b-navbar toggleable fixed="top" variant="white" type="light" class="border">
      <b-navbar-brand href="#/">
        Beyond 311
      </b-navbar-brand>
    </b-navbar>
    <b-container class="p-5">
      <b-row>
        <b-col>
          <h3>
            Can we use your location?
            <br />
            <br />
          </h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h6>
            <br />
            <br />
          </h6>
        </b-col>
      </b-row>
      <b-row class="mt-5 mb-4">
        <b-col>
          <b-button v-if="!locationAllowed" v-on:click="locate" size="lg">
            Use my location
          </b-button>
          <div v-if="locationAllowed">
            <scale-out />
            <h6>
              One moment...
            </h6>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h6>
            <br />
          </h6>
        </b-col>
      </b-row>
    </b-container>
    <b-navbar toggleable fixed="bottom" variant="white" type="light" class="border">
      <div>
        About
      </div>
    </b-navbar>
  </div>
</template>

<script>
  import { ScaleOut } from 'vue-loading-spinner';

  export default {
    name: 'Location',
    components: {
      ScaleOut
    },
    data: function () {
      return {
        locationAllowed: false
      }
    },
    methods: {
      locate: function (event) {
        this.locationAllowed = true;
        navigator.geolocation.getCurrentPosition(() => window.location.href = 'https://stackoverflow.com/questions/35664550/vue-js-redirection-to-another-page')
      },

    },

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  line-height: 1.4em;
}
h6 {
  line-height: 1.4em;
}
</style>
