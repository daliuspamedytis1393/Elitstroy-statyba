export default {
	beforeMount () {
		window.addEventListener('scroll', this.count);
	},
	beforeDestroy () {
		window.removeEventListener('scroll', this.count);
	},
	mounted() {
		this.count();
	},
	methods: {
		counterUp () {
			const elements = document.querySelectorAll('[data-vanilla-counter]')
			elements.forEach(i => {
				const data = {
					startAt: parseInt(i.getAttribute('data-start-at')),
					endAt: parseInt(i.getAttribute('data-end-at')),
					delay: parseInt(i.getAttribute('data-delay')) || 0,
					format: '{}',
					time: parseInt(i.getAttribute('data-time')) || 1000
				}
				if (i.getAttribute('data-format')) {
					data.format = i.getAttribute('data-format')
				} else if (i.innerHTML !== '') {
					data.format = i.innerHTML
				}

				if (data.startAt == null) {
					throw new Error('data-start-at attribute is required')
				}
				if (data.endAt == null) {
					throw new Error('data-end-at attribute is required')
				}
				let counter = data.startAt
				i.innerHTML = data.format.replace('{}', counter)
				const intervalTime = Math.ceil(data.time / (data.endAt - data.startAt))
				setTimeout(() => {
					const interval = setInterval(intervalHandler, intervalTime)

					function intervalHandler() {
						counter += (data.endAt - data.startAt) / Math.abs(data.endAt - data.startAt) * 1
						i.innerHTML = data.format.replace('{}', counter)
						if (counter === data.endAt) {
							clearInterval(interval)
						}
					}
				}, data.delay)
			})

		},
		count(){
			const element  = document.getElementById('counter_section')
			const rect = element.getBoundingClientRect();
			const elemTop = rect.top;
			const elemBottom = rect.bottom;

			if( (elemTop >= 0) && (elemBottom <= window.innerHeight)){
				this.counterUp()
				window.removeEventListener('scroll', this.count)
			}
		},
	}
}
