<script setup>
defineProps({ item: Object })
</script>

<template>
	<div class="text-white text-4xl caveat-400">
		<div
			:class="[
				'h-[200px]',
				'flex justify-center items-center',
				'relative before:absolute before:inset-0 before:blur before:bg-red-500 before:z-10 *:z-20 before:opacity-10',
				'border border-primary-500 rounded-md ',
			]"
		>
			{{ item.text }}
		</div>
	</div>
</template>
