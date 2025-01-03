export default {
  root: ({ props, state, parent }) => ({
    class: [
      // Display and Position
      'inline-flex',
      'relative',
      // Shape
      { 'rounded-lg': parent.instance.$name !== 'InputGroup' },
      {
        'first:rounded-l-lg rounded-none last:rounded-r-lg': parent.instance.$name == 'InputGroup',
      },
      { 'border-0 border-y border-l last:border-r': parent.instance.$name == 'InputGroup' },
      { 'first:ml-0 ml-[-1px]': parent.instance.$name == 'InputGroup' && !props.showButtons },

      // Color and Background

      'border',
      { 'dark:border-surface-700': parent.instance.$name != 'InputGroup' },
      { 'dark:border-surface-600': parent.instance.$name == 'InputGroup' },
      { 'border-surface-300 dark:border-surface-600': !props.invalid },

      // Invalid State

      'invalid:focus:ring-red-200',
      'invalid:hover:border-red-500',
      { 'border-red-500 dark:border-red-400': props.invalid },

      // Transitions

      'transition-all',
      'duration-200',

      // States

      { 'hover:border-surface-400 dark:hover:border-surface-600': !props.invalid },
      {
        'outline-none outline-offset-0 ring-1 ring-primary-500 dark:ring-primary-400 z-10':
          state.focused,
      },

      // Misc

      'cursor-pointer',
      'select-none',
      {
        'select-none pointer-events-none cursor-default !text-secondary-500 dropdown--disabled':
          props.disabled,
      },

      // open

      // отсылает к assets/icon.css
      'dropdown',
      state.overlayVisible && 'bg-primary-50 dropdown--overlay-visible',
    ],
  }),
  input: ({ props, parent }) => ({
    class: [
      //Font
      'leading-[normal]',

      // Display
      'block',
      'flex-auto',

      // Color and Background
      'bg-transparent',
      'border-0',
      'placeholder:text-surface-400 dark:placeholder:text-surface-500',

      // Sizing and Spacing
      'w-[1%]',
      'py-3 px-3',
      { 'pr-7': props.showClear },

      //Shape
      'rounded-none',

      // Transitions
      'transition',
      'duration-200',

      // States
      'focus:outline-none focus:shadow-none',

      // Filled State *for FloatLabel
      { filled: parent.instance?.$name == 'FloatLabel' && props.modelValue !== null },

      // Misc
      'relative',
      'cursor-pointer',
      'overflow-hidden overflow-ellipsis',
      'whitespace-nowrap',
      'appearance-none',

      'font-medium',
    ],
  }),
  trigger: {
    class: [
      // Flexbox
      'flex items-center justify-center',
      'shrink-0',

      // Color and Background
      'bg-transparent',
      'text-surface-500',

      // Size
      'w-12',

      // Shape
      'rounded-r-lg',
    ],
  },
  panel: {
    class: [
      // Colors
      'bg-surface-0 dark:bg-surface-900',
      'text-surface-700 dark:text-white/80',

      // Shape
      'border border-surface-300 dark:border-surface-700',
      'rounded-lg',
      'shadow-md',

      '!mt-2',
    ],
  },
  wrapper: {
    class: [
      // Sizing
      'max-h-[200px]',

      // Misc
      'overflow-auto',
    ],
  },
  list: {
    class: ['list-none m-0'],
  },
  item: ({ context }) => ({
    class: [
      'relative',

      // Font
      'leading-none',

      // Spacing
      'm-0 px-3 py-2',

      // Shape
      'border-0',

      // Colors
      {
        'text-surface-700 dark:text-white/80': !context.focused && !context.selected,
        'bg-surface-200 dark:bg-surface-600/60': context.focused && !context.selected,
        'text-surface-700 dark:text-white/80': context.focused && !context.selected,

        'text-primary-highlight-inverse': context.selected,
        'bg-primary-highlight': context.selected,
      },

      //States
      {
        'hover:bg-surface-100 dark:hover:bg-[rgba(255,255,255,0.03)]':
          !context.focused && !context.selected,
      },
      { 'hover:bg-primary-highlight-hover': context.selected },
      {
        'hover:text-surface-700 hover:bg-surface-100 dark:hover:text-white dark:hover:bg-[rgba(255,255,255,0.03)]':
          context.focused && !context.selected,
      },

      // Transition
      'transition-shadow duration-200',

      // Misc
      'cursor-pointer overflow-hidden whitespace-nowrap',

      // hover

      'first:rounded-t-lg',
      'last:rounded-b-lg',

      // selected

      context.selected && [
        'bg-primary-50 relative',
        'after:absolute after:size-3.5 after:right-2',
        'after:bg-primary after:[mask-image:url("/images/icons/ok.svg")] after:[mask-repeat:no-repeat] after:[mask-size:contain] after:[mask-position:center]',
      ],
    ],
  }),
  itemgroup: {
    class: [
      'font-semibold',

      // Spacing
      'm-0 py-2 px-3',

      // Colors
      'text-surface-400 dark:text-surface-500',

      // Misc
      'cursor-auto',
    ],
  },
  emptymessage: {
    class: [
      // Font
      'leading-none',

      // Spacing
      'py-2 px-3',

      // Color
      'text-surface-800 dark:text-white/80',
      'bg-transparent',
    ],
  },
  header: {
    class: [
      // Spacing
      'pt-2 px-2 pb-0',
      'm-0',

      //Shape
      'border-b-0',
      'rounded-tl-lg',
      'rounded-tr-lg',

      // Color
      'text-surface-700 dark:text-white/80',
      'bg-surface-0 dark:bg-surface-900',
      'border-surface-300 dark:border-surface-700',
    ],
  },
  filtercontainer: {
    class: 'relative',
  },
  filterinput: {
    class: [
      // Font
      'leading-[normal]',

      // Sizing
      'py-2 pl-3 pr-7',
      '-mr-7',
      'w-full',

      //Color
      'text-surface-700 dark:text-white/80',
      'bg-surface-0 dark:bg-surface-950',
      'border-surface-200 dark:border-surface-700',

      // Shape
      'border',
      'rounded-lg',
      'appearance-none',

      // Transitions
      'transition',
      'duration-200',

      // States
      'hover:border-surface-400 dark:hover:border-surface-600',
      'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400 focus:z-10',

      // Misc
      'appearance-none',
    ],
  },
  filtericon: {
    class: ['absolute', 'top-1/2 right-3', '-mt-2'],
  },
  clearicon: {
    class: [
      // Color
      'text-surface-400 dark:text-surface-500',

      // Position
      'absolute',
      'top-1/2',
      'right-12',

      // Spacing
      '-mt-2',
    ],
  },
  loadingicon: {
    class: 'text-surface-400 dark:text-surface-500 animate-spin',
  },
  transition: {
    enterFromClass: 'opacity-0 scale-y-[0.8]',
    enterActiveClass:
      'transition-[transform,opacity] duration-[120ms] ease-[cubic-bezier(0,0,0.2,1)]',
    leaveActiveClass: 'transition-opacity duration-100 ease-linear',
    leaveToClass: 'opacity-0',
  },
};
