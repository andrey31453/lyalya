<script setup>
defineProps({ header: String })
</script>

<template>
	<div class="grid gap-4">
		<div
			v-if="header"
			class="text-gradient text-[3rem] text-center caveat-400"
		>
			{{ header }}
		</div>
		<div class="bg-secondary-300 text-black p-6 rounded ubuntu-regular">
			<slot />
		</div>
	</div>
</template>

<style scoped lang="scss"></style>
