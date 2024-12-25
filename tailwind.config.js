/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'
import plugin from 'tailwindcss/plugin'

export default {
	darkMode: 'class', // // Это включает темный режим, основываясь на наличии класса "dark" в теге HTML
	content: ['./BackgroundStars.vue', './src/**/*.{vue,js,ts,jsx,tsx,md}'],
	safelist: [
		'fill-success',
		'fill-primary',
		'fill-primary-500',
		'fill-error',
		'fill-warning',
		'fill-secondary-400',
		'fill-secondary-500',
		'text-success',
		'text-primary',
		'text-primary-500',
		'text-error',
		'text-warning',
		'text-secondary-400',
		'text-secondary-500',
		'border-info',
		'border-success',
		'border-primary',
		'border-error',
		'border-warning',

		// size
		'h-[32px]',
		'h-[35px]',
		'h-[40px]',
	],
	theme: {
		extend: {
			colors: {
				primary: 'rgb(var(--primary))',
				'primary-inverse': 'rgb(var(--primary-inverse))',
				'primary-hover': 'rgb(var(--primary-hover))',
				'primary-active-color': 'rgb(var(--primary-active-color))',

				'primary-highlight':
					'rgb(var(--primary),var(--primary-highlight-opacity))',
				'primary-highlight-hover':
					'rgb(var(--primary),var(--primary-highlight-hover-opacity))',
				'primary-highlight-active':
					'rgb(var(--primary),var(--primary-highlight-active-opacity))',

				'primary-50': 'rgb(var(--primary-50))',
				'primary-100': 'rgb(var(--primary-100))',
				'primary-200': 'rgb(var(--primary-200))',
				'primary-300': 'rgb(var(--primary-300))',
				'primary-400': 'rgb(var(--primary-400))',
				'primary-500': 'rgb(var(--primary-500))',
				'primary-600': 'rgb(var(--primary-600))',
				'primary-700': 'rgb(var(--primary-700))',
				'primary-800': 'rgb(var(--primary-800))',
				'primary-900': 'rgb(var(--primary-900))',
				'primary-950': 'rgb(var(--primary-950))',

				'surface-0': 'rgb(var(--surface-0))',
				'surface-50': 'rgb(var(--surface-50))',
				'surface-100': 'rgb(var(--surface-100))',
				'surface-200': 'rgb(var(--surface-200))',
				'surface-300': 'rgb(var(--surface-300))',
				'surface-400': 'rgb(var(--surface-400))',
				'surface-500': 'rgb(var(--surface-500))',
				'surface-600': 'rgb(var(--surface-600))',
				'surface-700': 'rgb(var(--surface-700))',
				'surface-800': 'rgb(var(--surface-800))',
				'surface-900': 'rgb(var(--surface-900))',
				'surface-950': 'rgb(var(--surface-950))',

				// disaign

				'secondary-700': 'rgb(var(--secondary-700))',
				'secondary-600': 'rgb(var(--secondary-600))',
				'secondary-500': 'rgb(var(--secondary-500))',
				'secondary-400': 'rgb(var(--secondary-400))',
				'secondary-300': 'rgb(var(--secondary-300))',

				info: 'rgb(var(--info))',
				'info-highlight': 'rgb(var(--info),var(--primary-highlight-opacity))',
				'info-highlight-hover':
					'rgb(var(--info),var(--primary-highlight-hover-opacity))',
				'info-highlight-active':
					'rgb(var(--info),var(--primary-highlight-active-opacity))',

				light: 'rgb(var(--light))',
				'light-highlight': 'rgb(var(--light),var(--primary-highlight-opacity))',
				'light-highlight-hover':
					'rgb(var(--light),var(--primary-highlight-hover-opacity))',
				'light-highlight-active':
					'rgb(var(--light),var(--primary-highlight-active-opacity))',

				success: 'rgb(var(--success))',
				'success-highlight':
					'rgb(var(--success),var(--primary-highlight-opacity))',
				'success-highlight-hover':
					'rgb(var(--success),var(--primary-highlight-hover-opacity))',
				'success-highlight-active':
					'rgb(var(--success),var(--primary-highlight-active-opacity))',

				warning: 'rgb(var(--warning))',
				'warning-highlight':
					'rgb(var(--warning),var(--primary-highlight-opacity))',
				'warning-highlight-hover':
					'rgb(var(--warning),var(--primary-highlight-hover-opacity))',
				'warning-highlight-active':
					'rgb(var(--warning),var(--primary-highlight-active-opacity))',

				error: 'rgb(var(--error))',
				'error-highlight': 'rgb(var(--error),var(--primary-highlight-opacity))',
				'error-highlight-hover':
					'rgb(var(--error),var(--primary-highlight-hover-opacity))',
				'error-highlight-active':
					'rgb(var(--error),var(--primary-highlight-active-opacity))',
			},
		},
	},
	plugins: [
		typography,
		plugin(({ addUtilities }) => {
			addUtilities({
				'.is-disabled': {
					opacity: '60%',
					'pointer-events': 'none',
					cursor: 'default',
				},
				'.substrate': {
					'background-color': '#141417c0',
				},
			})
		}),
	],
}
