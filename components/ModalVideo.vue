<template>
	<div v-if="isOpen">
		<div
			:class="classNames.modalVideo"
			tabIndex="-1"
			role="dialog"
			:aria-label="aria.openMessage"
			@click="$emit('update:isOpen', false)"
			@keydown.esc="$emit('update:isOpen', false)"
		>
			<div :class="classNames.modalVideoBody">
				<button
					ref="closeBtn"
					:class="classNames.modalVideoCloseBtn"
					:aria-label="aria.dismissBtnMessage"
					@click="$emit('update:isOpen', false)"
				/>
				<div :class="classNames.modalVideoInner">
					<div
						:class="classNames.modalVideoIframeWrap"
						:style="{ 'padding-bottom': paddingBottom }"
					>
						<iframe
							width="460"
							height="230"
							:src="fullVideoUrl"
							frameBorder="0"
							:allowFullScreen="allowFullScreen"
							tabIndex="-1"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'modalVideo',
	props: {
		videoId: {
			type: String,
			required: true,
		},
		channel: {
			type: String,
			default: 'youtube',
		},
		isOpen: {
			type: Boolean,
			default: false,
		},
		youtube: {
			type: Object,
			default() {
				return {
					autoplay: 1,
					cc_load_policy: 1,
					color: null,
					controls: 1,
					disablekb: 0,
					enablejsapi: 0,
					end: null,
					fs: 1,
					h1: null,
					iv_load_policy: 1,
					list: null,
					listType: null,
					loop: 0,
					modestbranding: null,
					origin: null,
					playlist: null,
					playsinline: null,
					rel: 0,
					showinfo: 1,
					start: 0,
					wmode: 'transparent',
					theme: 'dark',
				}
			},
		},
		ratio: {
			type: String,
			default: '16:9',
		},
		vimeo: {
			type: Object,
			default() {
				return {
					api: false,
					autopause: true,
					autoplay: true,
					byline: true,
					callback: null,
					color: null,
					height: null,
					loop: false,
					maxheight: null,
					maxwidth: null,
					player_id: null,
					portrait: true,
					title: true,
					width: null,
					xhtml: false,
				}
			},
		},
		allowFullScreen: {
			type: Boolean,
			default: true,
		},
		animationSpeed: {
			type: Number,
			default: 300,
		},
		classNames: {
			type: Object,
			default() {
				return {
					modalVideoEffect: 'modal-video-effect',
					modalVideo: 'modal-video',
					modalVideoClose: 'modal-video-close',
					modalVideoBody: 'modal-video-body',
					modalVideoInner: 'modal-video-inner',
					modalVideoIframeWrap: 'modal-video-movie-wrap',
					modalVideoCloseBtn: 'modal-video-close-btn',
				}
			},
		},
		aria: {
			type: Object,
			default() {
				return {
					openMessage: 'Modal video opened',
					dismissBtnMessage: 'Close the modal video',
				}
			},
		},
	},
	computed: {
		// eslint-disable-next-line vue/return-in-computed-property
		fullVideoUrl() {
			if (this.channel === 'youtube') {
				return this.getYoutubeUrl(this.youtube, this.videoId)
			} else if (this.channel === 'vimeo') {
				return this.getVimeoUrl(this.vimeo, this.videoId)
			}
		},
		paddingBottom() {
			return this.getPadding(this.ratio)
		},
	},
	watch: {
		isOpen: {
			handler(val) {
				this.$nextTick(() => {
					if (typeof this.$refs.closeBtn !== 'undefined') {
						this.$refs.closeBtn.focus()
					}
				})
			},
			deep: true,
		},
	},
	methods: {
		getQueryString(obj) {
			let url = ''
			for (const key in obj) {
				// eslint-disable-next-line no-prototype-builtins
				if (obj.hasOwnProperty(key)) {
					if (obj[key] !== null) {
						url += key + '=' + obj[key] + '&'
					}
				}
			}
			return url.substr(0, url.length - 1)
		},
		getYoutubeUrl(youtube, videoId) {
			const query = this.getQueryString(youtube)
			return '//www.youtube.com/embed/' + videoId + '?' + query
		},
		getVimeoUrl(vimeo, videoId) {
			const query = this.getQueryString(vimeo)
			return '//player.vimeo.com/video/' + videoId + '?' + query
		},
		getPadding(ratio) {
			const arr = ratio.split(':')
			const width = Number(arr[0])
			const height = Number(arr[1])
			const padding = (height * 100) / width
			return padding + '%'
		},
	},
}
</script>
<style lang="scss" scoped>
$animation-speed: 0.3s;
$animation-function: ease-out;
$backdrop-color: rgba(0, 0, 0, 0.7);
$modal-bg-color: #333;
@keyframes modal-video {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
@keyframes modal-video-inner {
	from {
		transform: translate(0, 100px);
	}
	to {
		transform: translate(0, 0);
	}
}
.modal-video {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: $backdrop-color;
	z-index: 1000000;
	cursor: pointer;
	opacity: 1;
	animation-timing-function: $animation-function;
	animation-duration: $animation-speed;
	animation-name: modal-video;
	transition: opacity $animation-speed $animation-function;
}
.modal-video-close {
	opacity: 0;
	& .modal-video-movie-wrap {
		transform: translate(0, 100px);
	}
}
.modal-video-body {
	max-width: 1100px;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	display: table;
}
.modal-video-inner {
	display: table-cell;
	vertical-align: middle;
	width: 100%;
	height: 100%;
}
.modal-video-movie-wrap {
	width: 100%;
	height: 0;
	position: relative;
	padding-bottom: 56.25%;
	background-color: $modal-bg-color;
	animation-timing-function: $animation-function;
	animation-duration: $animation-speed;
	animation-name: modal-video-inner;
	transform: translate(0, 0);
	transition: transform $animation-speed $animation-function;
	& iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
}
.modal-video-close-btn {
	position: absolute;
	z-index: 2;
	top: 50px;
	right: 50px;
	display: inline-block;
	width: 35px;
	height: 35px;
	overflow: hidden;
	border: none;
	background: transparent;

	&:before {
		transform: rotate(45deg) translateY(-50%);
	}
	&:after {
		transform: rotate(-45deg) translateY(-50%);
	}
	&:before,
	&:after {
		content: '';
		position: absolute;
		height: 2px;
		width: 100%;
		top: 50%;
		left: 0;
		background: $white-color;
		border-radius: 5px;
	}
}
</style>
