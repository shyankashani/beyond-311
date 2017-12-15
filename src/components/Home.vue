<template>
  <div>
    <b-navbar toggleable fixed="top" variant="white" type="light" class="border">
      <b-navbar-brand href="#/">
        Beyond 311
      </b-navbar-brand>
    </b-navbar>
    <start v-if="!isStarted" v-on:start="start" />
    <locate v-if="isStarted && !locationIsAllowed" v-on:locate="locate" />
    <wait v-if="locationIsAllowed" />
    <b-navbar toggleable fixed="bottom" variant="white" type="light" class="border">
      <div>
        About
      </div>
    </b-navbar>
  </div>
</template>

<script>
  import Start from './Start';
  import Locate from './Locate';
  import Wait from './Wait';

  export default {
    name: 'Home',
    components: {
      Start,
      Locate,
      Wait
    },
    data: function () {
      return {
        isStarted: false,
        locationIsAllowed: false,
      }
    },
    methods: {
      start: function (event) {
        this.isStarted = true;
      },
      locate: function (event) {
        this.locationIsAllowed = true;
        navigator.geolocation.getCurrentPosition(() => window.location.href = 'https://stackoverflow.com/questions/35664550/vue-js-redirection-to-another-page')
      },

    },

  }
</script>

<style>
h3 {
  line-height: 1.4em;
}
h6 {
  line-height: 1.4em;
}
</style>
