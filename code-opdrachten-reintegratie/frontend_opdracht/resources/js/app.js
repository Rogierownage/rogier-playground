import { createApp } from 'vue'
import ObjectForm from './components/ObjectForm.vue'
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

const app = createApp()

app.component('ObjectForm', ObjectForm)
app.component('VueDatePicker', VueDatePicker);
app.component('v-select', vSelect)

app.mount('#app')
