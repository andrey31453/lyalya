<script setup lang="ts"></script>

<template>
	<div class="fixed inset-0 flex flex-wrap justify-between items-center">
		<div
			v-for="i in 6"
			:key="i"
			:class="[`item item--${i} w-1/2 h-[300px]`]"
			:style="{
				'background-position': `${Math.round(50 * Math.random())}% center`,
				height: '33dvh',
			}"
		></div>
	</div>
</template>

<style lang="scss" scoped>
.item {
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	opacity: 0.2;
}

@for $i from 1 through 6 {
	.item--#{$i} {
		background-image: url('/items/#{$i}.png');
	}
}
</style>
