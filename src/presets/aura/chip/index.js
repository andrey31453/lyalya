export default {
  root: ({ props }) => ({
    class: [
      // Flexbox
      'inline-flex items-center',

      // Spacing
      'px-3 py-1',

      // Shape
      'rounded-[1.14rem]',

      // Colors
      {
        'bg-surface-100 dark:bg-surface-700': !props.severity,
        'bg-blue-100/70 dark:bg-blue-500/20': props.severity == 'info',
        'bg-green-100/70 dark:bg-green-500/20': props.severity == 'success',
        'bg-surface-100/70 dark:bg-surface-500/20': props.severity == 'secondary',
        'bg-orange-100/70 dark:bg-orange-500/20': props.severity == 'warn',
        'bg-red-100/70 dark:bg-red-500/20': props.severity == 'error',
        'bg-surface-950 dark:bg-surface-0': props.severity == 'contrast',
      },
      {
        'text-surface-700 dark:text-white': !props.severity,
        'text-blue-700 dark:text-blue-300': props.severity == 'info',
        'text-green-700 dark:text-green-300': props.severity == 'success',
        'text-surface-700 dark:text-surface-300': props.severity == 'secondary',
        'text-orange-700 dark:text-orange-300': props.severity == 'warn',
        'text-red-700 dark:text-red-300': props.severity == 'error',
        'text-surface-0 dark:text-surface-950': props.severity == 'contrast',
      },
    ],
  }),
  label: {
    class: 'leading-6 m-0',
  },
  icon: {
    class: 'leading-6 mr-2',
  },
  image: {
    class: ['w-8 h-8 -ml-2 mr-2', 'rounded-full'],
  },
  removeIcon: {
    class: [
      // Shape
      'rounded-md leading-6',

      // Spacing
      'ml-[0.375rem]',

      // Size
      'w-4 h-4',

      // Transition
      'transition duration-200 ease-in-out',

      // Misc
      'cursor-pointer',
    ],
  },
};
