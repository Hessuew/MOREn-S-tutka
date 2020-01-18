<template>
  <v-app>
    <v-content px-0>
      <Layout />
    </v-content>
    <v-snackbar
      v-for="(snackbar, index) in snackbars.filter(s => s.showing)"
      :key="snackbar.text + index"
      v-model="snackbar.showing"
      :timeout="snackbar.timeout"
      :color="snackbar.color"
      :style="`top: ${(index * 100) + 20}px`"
    >
      {{snackbar.text}}
      <v-btn text @click="snackbar.showing = false">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import Layout from "./views/Layout";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    Layout
  },
  data: () => ({}),
  computed: {
    ...mapState({
      snackbars: state => state.snackbar.snackbars
    })
  }
};
</script>
<style>
@import "./assets/styles.css";
</style>
