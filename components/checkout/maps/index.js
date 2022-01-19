import LocationPicker from './LocationPicker.vue'

export { LocationPicker }

export default function install(Vue, options) {
    options = Object.assign(
        {
            installComponents: true,
        }
        , options
    )
    if (options.installComponents) {
        Vue.component('LocationPicker', LocationPicker)
    }
}    
