<template>
  <div>
    <b-container class="p-5">
      <b-row>
        <b-col>
          <h3>
            Can we use your location? <br /> <br />
          </h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h6>
            <br /> <br />
          </h6>
        </b-col>
      </b-row>
      <b-row class="mt-5 mb-4">
        <b-col>
          <b-button size="lg" v-on:click="$emit('locate')">
            Use my location
          </b-button>
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
  </div>
</template>

<script>
  export default {
    name: 'Locate',
  }
</script>

<style>
</style>
