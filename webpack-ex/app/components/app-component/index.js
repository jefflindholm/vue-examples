import Vue from 'vue'
import Pusher from 'pusher-js'
import template from './template.html'
import SubscriptionComponent from '../subscription'

const AppComponent = Vue.extend({
    template,
    components: {
        'subscription-component': SubscriptionComponent,
    },
    created() {
        this.pusher = new Pusher('YOUR_PUSHERKEY')
    },
    data() {
        return {
            newSearchTerm: '',
            channels: [],
        }
    },
    methods: {
        newSubscription() {
            this.channels.push({
                term: this.newSearchTerm,
                active: true,
            })
            this.newSearchTerm = ''
        },
        toggleSearch(channel) {
            for (const ch of this.channels) {
                if (ch.term === channel.term) {
                    ch.active = !ch.active;
                    break;
                }
            }
        },
        clearSearch(channel) {
            this.channels = this.channels.filter(ch => ch.term !== channel.term)
        }
    }
})

export default AppComponent
