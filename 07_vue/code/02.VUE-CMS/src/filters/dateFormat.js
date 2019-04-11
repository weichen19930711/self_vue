import Vue from "vue"
import moment from 'moment'
const patterDefault = "YYYY-MM-DD HH:mm:ss"
Vue.filter("dateFormat", (dataStr, pattern=patterDefault) => moment(dataStr).format(pattern))