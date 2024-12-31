import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import App from './App.vue'
import Aura from '@/presets/aura'

createApp(App)
	.use(PrimeVue, {
		unstyled: true,
		pt: Aura,
	})
	.mount('#app')
