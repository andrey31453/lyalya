<script setup lang="ts">
import BackgroundStars from '@/components/BackgroundStars.vue'
import TextItem from '@/components/TextItem.vue'

const items = [
	{
		text: 'Веселая',
		image: '1.webp',
	},
	{
		text: 'Мазохистка',
		image: '1.webp',
	},
]
</script>

<template>
	<div class="min-h-screen min-w-full relative">
		<BackgroundStars class="z-0" />
		<div class="relative z-10 py-6 container mx-auto grid grid-cols-4 gap-4">
			<TextItem
				v-for="item in items"
				:key="item"
				:item="item"
				class=""
			/>
		</div>
	</div>
</template>
