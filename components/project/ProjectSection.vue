<template>
	<section class="projects-section pt-100 pb-70">
		<div class="container">
			<main-title sub-title="Projektai" title="Mūsų įvykdyti projektai" />

			<div class="row justify-content-center">
				<div
					v-for="(item, index) in items"
					:key="index"
					class="col-lg-4 col-md-6"
				>
					<ProjectItem
						data-aos="fade-up"
						:data-aos-delay="item.dataDelay"
						:image="item.image"
						:title="item.title"
						:description="item.description"
						:link="item.link"
					/>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import ProjectItem from '~/components/project/ProjectItem'

import image1 from '~/assets/images/projects/projects-1.jpg'
import image2 from '~/assets/images/projects/projects-2.jpg'
import image3 from '~/assets/images/projects/projects-3.jpg'
import image4 from '~/assets/images/projects/projects-4.jpg'
import image5 from '~/assets/images/projects/projects-5.jpg'
import image6 from '~/assets/images/projects/projects-6.jpg'
export default {
	name: 'ProjectSection',
	components: { ProjectItem },
	data() {
		return {
			items: [
				{
					image: image1,
					title: 'Presentation Buldint',
					description:
						'we uptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni',
					link: 'project_details',
					dataDelay: '200',
				},
				{
					image: image2,
					title: 'Presentation Buldint',
					description:
						'we uptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni',
					link: 'project_details',
					dataDelay: '400',
				},
				{
					image: image3,
					title: 'Presentation Buldint',
					description:
						'we uptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni',
					link: 'project_details',
					dataDelay: '600',
				},
				{
					image: image4,
					title: 'Presentation Buldint',
					description:
						'we uptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni',
					link: 'project_details',
					dataDelay: '200',
				},
				{
					image: image5,
					title: 'Presentation Buldint',
					description:
						'we uptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni',
					link: 'project_details',
					dataDelay: '400',
				},
				{
					image: image6,
					title: 'Presentation Buldint',
					description:
						'we uptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni',
					link: 'project_details',
					dataDelay: '600',
				},
			],
		}
	},
}
</script>
