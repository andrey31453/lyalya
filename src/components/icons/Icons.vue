<script setup>
import ass from './icons/ass.svg'
import banan from './icons/banan.svg'
import busy from './icons/busy.svg'
import dildo from './icons/dildo.svg'
import klyap from './icons/klyap.svg'
import naruch from './icons/naruch.svg'
import penis1 from './icons/penis-1.svg'
import penis2 from './icons/penis-2.svg'
import penis3 from './icons/penis-3.svg'
import plag from './icons/plag.svg'
import mask from './icons/mask.svg'
import pletka from './icons/pletka.svg'
import zajim from './icons/zajim.svg'
import posotionSverhu from './icons/posotion-sverhu.svg'
import gandon from './icons/gandon.svg'
import trusiki from './icons/trusiki.svg'

const icons = {
	ass,
	banan,
	busy,
	naruch,
	klyap,
	dildo,
	penis1,
	penis2,
	penis3,
	plag,
	mask,
	pletka,
	posotionSverhu,
	zajim,
	gandon,
	trusiki,
}

const props = defineProps({
	icons: Array,
	horizontal: Boolean,
	small: Boolean,
})
const currentIcons = props.icons.map((i) => icons[i])
</script>

<template>
	<div>
		<div
			:class="[
				'flex justify-center items-center',
				horizontal ? 'flex-row' : 'flex-col h-full',
				small ? 'gap-4' : 'gap-32',
			]"
		>
			<component
				v-for="icon in currentIcons"
				:key="icon"
				:is="icon"
				:class="[small ? 'size-12' : 'size-24', 'text-secondary-700']"
			/>
		</div>

		<svg class="h-0 w-0">
			<defs>
				<linearGradient id="svg-gradient">
					<stop
						class="stop1"
						offset="0%"
					/>
					<stop
						class="stop2"
						offset="100%"
					/>
				</linearGradient>
			</defs>
		</svg>
	</div>
</template>

<style scoped lang="scss">
svg {
	fill: url(#svg-gradient);
}

.stop1 {
	stop-color: #ec00ff;
}

.stop2 {
	stop-color: #05a8f3;
}
</style>
