import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    indexActive: 0,
    date: [],
    eventactive: {
      'title': "",
      'description': '',
      'color': '',
      'sport': '',
      'place': '',
      'text_date': ''
    }
  },
  mutations: {
    setdate(state, data) {
      state.date = data;
      this.commit('setFirstDate')
      this.commit('setCaption')
    },
    setFirstDate(state) {
      let b = false,
        thisDate = new Date(),
        thisTime = thisDate.getTime();

      state.date.forEach((element, key) => {
        if (!b) {
          let elDate = new Date(element.date),
            elTime = elDate.getTime();
          if (elTime >= thisTime) {
            state.indexActive = key;
            b = true;
          }
        }
      });
    },
    setactive(state, date) {
      let dateArr2 = date.split('/')
      state.date.forEach((event, index) => {
        let dateArr1 = event.date.split('/');
        if ((parseInt(dateArr1[0], 10) == parseInt(dateArr2[0], 10)) && (parseInt(dateArr1[1], 10) == parseInt(dateArr2[1], 10)) && (parseInt(dateArr1[2], 10) == parseInt(dateArr2[2], 10))) {
          state.indexActive = index;
          this.commit('setCaption')
        }
      })
    },
    setCaption(state) {
      state.eventactive.title = state.date[state.indexActive].title
      state.eventactive.description = state.date[state.indexActive].description
      state.eventactive.color = state.date[state.indexActive].color
      state.eventactive.sport = state.date[state.indexActive].sport
      state.eventactive.place = state.date[state.indexActive].place
      state.eventactive.text_date = state.date[state.indexActive].text_date
    },
    next(state) {
      state.indexActive++;
      this.commit('setCaption')
    },
    prev(state) {
      state.indexActive--;
      this.commit('setCaption')
    }
  },
  actions: {
    getDate({
      commit,
      state
    }) {
      let self = this;
      jQuery.ajax({
        url: process.env.VUE_APP_URLAJAX,
        type: 'POST',
        dataType: 'json',
        data: {
          action: 'getdate'
        },
        complete: function (xhr, textStatus) {

        },
        success: function (data, textStatus, xhr) {
          commit('setdate', data);
        },
        error: function (xhr, textStatus, errorThrown) {

        }
      });
    }
  }
})