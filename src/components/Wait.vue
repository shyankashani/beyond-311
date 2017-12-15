<template>
  <div>
    <b-container class="p-5">
      <b-row>
        <b-col>
          <h3>
            <br /> <br /> <br />
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
          <div>
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
  </div>
</template>

<script>
  import { ScaleOut } from 'vue-loading-spinner';

  export default {
    name: 'Wait',
    components: {
      ScaleOut
    },
  }
</script>

<style>
</style>
