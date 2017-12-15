<template>
  <div>
    <b-container class="p-5">
      <b-row>
        <b-col>
          <h3>
            Help homeless neighbors find a place to belong.
          </h3>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h6>
            Inform outreach-workers about people in need.
          </h6>
        </b-col>
      </b-row>
      <b-row class="mt-5 mb-4">
        <b-col>
          <b-button size="lg" v-on:click="$emit('start')">
            Get started
          </b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h6>
            If this is an emergency, call 911.
          </h6>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'Start',
  }
</script>

<style>
</style>
