<script setup>
const props = defineProps({ item: Object })
const imageSrc =
	`${import.meta.env.BASE_URL}/tests/${props.item.image}`.replace(/\/\//, '/')
</script>

<template>
	<div
		ref="item"
		class="item"
	>
		<img
			class="item__img"
			:src="imageSrc"
		/>

		<div class="item__title">
			<span class="great-vibes-regular">
				{{ item.title }}
			</span>
		</div>

		<div class="item__description caveat-400">
			<span
				v-for="d in item.description"
				:key="d"
				v-html="d"
			/>
		</div>
	</div>
</template>

<style scoped lang="scss">
.item {
	@apply relative z-0 flex flex-col gap-2 justify-start items-start py-[92px];

	&__img {
		@apply shadow-2xl min-h-[200px] rounded-lg;
	}

	&__title {
		@apply text-[3.5rem] text-center;
		@apply p-2 text-secondary-700;
	}

	&__description {
		@apply p-2;
		@apply text-xl text-2xl text-secondary-300;
		@apply flex flex-col gap-4 justify-start items-start;
	}
}
</style>
