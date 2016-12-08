new Vue({
    // We want to target the div with an id of 'events'
    el: '#events-app',
    data: {
        event: {
            name: '',
            description: '',
            date: ''
        },
        events: [],
    },
    created() {
        this.events = this.fetchEvents()
    },
    methods: {
        fetchEvents() {
            return [{
                id: 1,
                name: 'TIFF',
                description: 'Toronto International Film Festival',
                date: '2015-09-10'
            }, {
                id: 2,
                name: 'The Martian Premiere',
                description: 'The Martian comes to theatres.',
                date: '2015-10-02'
            }, {
                id: 3,
                name: 'SXSW',
                description: 'Music, film and interactive festival in Austin, TX.',
                date: '2016-03-11'
            }]
        },
        addEvent() {
            if (this.event.name) {
                this.events.push(this.event)
                this.event = {
                    name: '',
                    description: '',
                    date: ''
                }
                console.log(this.events.map(e => e))
            }
        },
        deleteEvent(index) {
            if (confirm(`Are you sure you want to delete ${this.events[index].name}?`)) {
                this.events.splice(index, 1)
            }
        }
    }
})
