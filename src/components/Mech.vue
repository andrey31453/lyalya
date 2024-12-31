<template>
	<div class="wrapper">
		<div class="main">
			<h2 class="first">Привет,&nbsp;красотка)</h2>
			<h2 class="second">Привет,&nbsp;красотка)</h2>
		</div>
	</div>
</template>

<style scoped lang="scss">
.wrapper {
	margin: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 'Ubuntu';
	font-weight: 700;
}

.main {
	position: relative;
}

h2 {
	font-size: 80px;
	letter-spacing: 8px;
	position: absolute;
	transform: translate(-50%, -50%);
	margin: 0;
}

.first {
	color: transparent;
	-webkit-text-stroke: 2px #05a8f3;
}

.second {
	color: #05a8f3;
	-webkit-text-stroke: 2px #05a8f3;
	animation: waves 4s ease-in-out infinite;
}

@keyframes waves {
	0%,
	100% {
		clip-path: polygon(
			0% 45%,
			16% 44%,
			33% 50%,
			54% 60%,
			70% 61%,
			84% 59%,
			100% 52%,
			100% 100%,
			0% 100%
		);
	}

	50% {
		clip-path: polygon(
			0% 60%,
			15% 65%,
			34% 66%,
			51% 62%,
			67% 50%,
			84% 45%,
			100% 46%,
			100% 100%,
			0% 100%
		);
	}
}
</style>
