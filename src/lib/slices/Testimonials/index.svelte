<script>
	import { PrismicImage, PrismicRichText } from '@prismicio/svelte'

	/** @type {import("@prismicio/client").Content.TestimonialsSlice} */
	export let slice
	export let testimonials
	$$restProps
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<PrismicRichText field={slice.primary.heading} />
	<div class="cards">
		{#each testimonials as item, index}
			<div class="card">
				<div class="img">
					<PrismicImage
						width="56px"
						height="56px"
						field={item.data.avatar}
						imgixParams={{ ar: '1:1', fit: 'crop' }}
					/>
				</div>
				<!-- this is lazy lol do better -->

				<header>
					<b>
						{item.data.person}
					</b>
					<br />
					<i>
						{item.data.title}
					</i>
				</header>
				<div class="text">
					<PrismicRichText field={item.data.text} />
				</div>
			</div>
		{/each}
	</div>
</section>

<style lang="scss">
	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1rem;
	}

	.card {
		padding: 1rem;
		display: grid;
		grid-template-columns: max-content 1fr;
		grid-template-rows: max-content 1fr;
		grid-template-areas:
			'img header'
			'text text';
		gap: 1rem;
		background: var(--secondary-bg);
		border-radius: var(--border-md);

		@media (max-width: 830px) and (min-width: 555px) {
			&:last-child {
				grid-column: span 2;
				grid-template-areas:
					'img header'
					'img text';
			}
		}
	}

	header {
		align-self: center;
	}

	.img {
		grid-area: img;
		width: max-content;
		height: max-content;
		border-radius: 9999px;
		border: 3px solid var(--primary-bg);
		overflow: hidden;
	}

	.text {
		grid-area: text;
	}
</style>
