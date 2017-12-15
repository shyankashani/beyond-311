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
          <b-button size="lg">
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
    <b-navbar toggleable fixed="bottom" variant="white" type="light" class="border">
      <div>
        About
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
