export default {
  root: {
    class: [
      // Shape
      'rounded-md',

      // Size
      'min-w-[12rem]',
    ],
  },
  menu: {
    class: [
      // Spacings and Shape
      'flex flex-col gap-6',
      'list-none',
      'm-0',
      'pl-6 pr-4 pt-2 pb-6',
      'outline-none',
      'rounded-md',
    ],
  },
  menuitem: {
    class: ['relative'],
  },
  content: ({ context }) => ({
    class: [
      'relative',
      '*:relative *:z-10',
      'before:z-0 before:absolute before:-top-2.5 before:-bottom-2.5 before:-left-4 before:-right-3 before:rounded-[4px] before:transition-shadow before:duration-200',
      context.active && 'before:bg-primary-50 !text-primary',

      // Colors
      'text-surface-700 dark:text-white/80',
      {
        'text-surface-500 dark:text-white/70': !context.active,
        'text-primary-highlight-inverse':
          (context.focused && context.active) ||
          context.active ||
          (!context.focused && context.active),
      },

      // Transitions
      'transition-shadow',
      'duration-200',

      // Disabled
      { 'opacity-60 pointer-events-none cursor-default': context.disabled },
    ],
  }),
  action: {
    class: [
      'relative',
      // Flexbox

      'flex',
      'items-center',

      // Spacing
      'py-2',
      'px-3',

      // Color
      'text-surface-700 dark:text-white/80',

      // Misc
      'no-underline',
      'overflow-hidden',
      'cursor-pointer',
      'select-none',
    ],
  },
  icon: {
    class: [
      // Spacing
      'mr-2',

      // Color
      'text-surface-600 dark:text-white/70',
    ],
  },
  label: {
    class: ['leading-none'],
  },
  submenuicon: {
    class: [
      // Position
      'ml-auto',
    ],
  },
  submenu: {
    class: [
      // Spacing
      'p-4',
      'm-0',
      'list-none',
      'min-w-[20rem]',

      // Shape
      'rounded-md shadow-lg',

      // Position
      'static sm:absolute',
      'z-10',

      // Color
      'bg-surface-0 dark:bg-surface-900',
      '!right-[calc(100%+12px+8px)] !left-auto',
      '!flex flex-col gap-6',
    ],
  },
  separator: {
    class: 'border-t border-surface-200 dark:border-surface-600 my-[2px]',
  },
};
