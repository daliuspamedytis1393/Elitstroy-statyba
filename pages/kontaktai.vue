<template>
	<div>
		<page-banner
			class="bg-1"
			page-name="Kontaktai"
			:links="[{ name: 'Pagrindinis', url: '/' }, { name: 'Kontaktai' }]"
		/>

		<div class="contact-section ptb-100">
			<div class="container">
				<div class="contact-wrap">
					<div class="row">
						<div class="col-lg-6">
							<div class="contact-form ptb-100">
								<h2>Mes pasiruošę išspręsti jums padėti</h2>

								<form class="form-contact">
									<div class="row">
										<div class="col-lg-6">
											<div class="form-group">
												<input
													type="text"
													class="form-control"
													placeholder="Vardas"
												/>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="form-group">
												<input
													type="email"
													class="form-control"
													placeholder="Elektroninis paštas"
												/>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="form-group">
												<input
													type="text"
													class="form-control"
													placeholder="Telefono numeris"
												/>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="form-group">
												<input
													type="text"
													class="form-control"
													placeholder="Tema"
												/>
											</div>
										</div>
										<div class="col-lg-12">
											<div class="form-group">
												<textarea
													cols="30"
													rows="10"
													class="form-control"
													placeholder="Jūsų žinutė"
												></textarea>
											</div>
										</div>
										<div class="col-12">
											<button
												type="submit"
												class="main-btn"
											>
												<span>Siųsti</span>
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>

						<div class="col-lg-6 pe-0">
							<div class="contact-map">
								<iframe
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.1194399172473!2d25.427423115765887!3d54.68992578092452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ddbdf4b94c001f%3A0x6a5a247450f0fd5f!2sGerov%C4%97s%20g.%2051%2C%2011221%20Vilnius!5e0!3m2!1slt!2slt!4v1672950466407!5m2!1slt!2slt"
									width="600"
									height="450"
									style="border: 0"
									allowfullscreen=""
									loading="lazy"
									referrerpolicy="no-referrer-when-downgrade"
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import PageBanner from '~/components/banner/PageBanner'

export default {
	name: 'apie-mus',
	components: { PageBanner },
	layout: 'layoutTwo',
}
</script>
