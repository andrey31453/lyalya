export default {
  root: {
    class: [
      // Shape
      'rounded-md shadow-lg',

      // Position
      'absolute left-0 top-0',
      'z-40 transform origin-center',

      // Color
      'bg-surface-0 dark:bg-surface-900',
      'text-surface-700 dark:text-surface-0/80',
    ],
  },
  content: {
    class: ['p-5 items-center flex', 'rounded-lg'],
  },
  transition: {
    enterFromClass: 'opacity-0 scale-y-[0.8]',
    enterActiveClass:
      'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
    leaveActiveClass: 'transition-opacity duration-100 ease-linear',
    leaveToClass: 'opacity-0',
  },
};
