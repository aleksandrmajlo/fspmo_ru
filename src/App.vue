<template>
  <div id="appcalendar">
    <div class="row">
      <div class="col-xl-7 col-lg-6">
        <vue-event-calendar
          :events="myEvents"
          @month-changed="handleMonthChanged"
          @day-changed="handleDayChanged"
        ></vue-event-calendar>
      </div>
      <div class="col">
        <calendar-caption v-if="$store.state.eventactive.title!==''"></calendar-caption>
      </div>
    </div>
  </div>
</template>

<script>
import calCaption from "./components/calendar-caption.vue";

export default {
  data() {
    return {};
  },
  name: "app",
  components: {
    "calendar-caption": calCaption
  },
  computed: {
    myEvents() {
      return this.$store.state.date;
    }
  },
  created() {
    this.$store.dispatch("getDate");
  },
  methods: {
    handleDayChanged(data) {
      this.$store.commit("setactive", data.date);
    },
    handleMonthChanged(data) {}
  }
};
</script>

<style>
#app {
}
</style>
