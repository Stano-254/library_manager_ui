import BaseInput from './components/Inputs/BaseInput.vue'
import BaseCheckbox from './components/Inputs/BaseCheckbox.vue'
import BaseRadio from './components/Inputs/BaseRadio.vue'
import Badge from "./components/Badge";
import BaseDropdown from './components/BaseDropdown.vue'
import Card from './components/Cards/Card.vue'
import BaseButton from './components/Buttons/BaseButton.vue'

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install (Vue) {
    Vue.component(BaseInput.name, BaseInput)
    Vue.component(Badge.name, Badge);
    Vue.component(BaseCheckbox.name, BaseCheckbox)
    Vue.component(BaseRadio.name, BaseRadio)
    Vue.component(BaseDropdown.name, BaseDropdown)
    Vue.component(BaseButton.name, BaseButton)
    Vue.component('card', Card)
  }
}

export default GlobalComponents
