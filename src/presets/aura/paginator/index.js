export default {
  root: {
    class: [
      // Flex & Alignment
      'flex items-center justify-center flex-wrap',

      // Spacing
      'px-4 py-2',

      // Shape
      'border-0 rounded-md',

      // Color
      'bg-surface-0 dark:bg-surface-900',

      // custom
      'text-sm text-secondary-700 gap-1',
    ],
  },
  firstpagebutton: ({ context }) => ({
    class: [
      'relative',

      // Flex & Alignment
      'inline-flex items-center justify-center',

      // Shape
      'border-0',

      // Size
      'leading-none',

      // State
      {
        'hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]': !context.disabled,
        'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400':
          !context.disabled,
      },

      // Transition
      'transition duration-200',

      // Misc
      'user-none overflow-hidden',
      { 'cursor-default pointer-events-none opacity-60 invisible': context.disabled },

      // custom
      'min-w-[2.5rem] h-8',
      'hover:bg-primary-highlight-hover active:bg-primary-highlight-active rounded flex justify-center items-center p-2 cursor-pointer  rounded-md',
    ],
  }),
  previouspagebutton: ({ context }) => ({
    class: [
      'relative',

      // Flex & Alignment
      'inline-flex items-center justify-center',

      // Shape
      'border-0',

      // Size
      'leading-none',

      // Color
      'text-surface-500 dark:text-white/60',

      // State
      {
        'hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]': !context.disabled,
        'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400':
          !context.disabled,
      },

      // Transition
      'transition duration-200',

      // Misc
      'user-none overflow-hidden',
      { 'cursor-default pointer-events-none opacity-60 invisible': context.disabled },

      // custom
      'min-w-[2.5rem] h-8',
      'hover:bg-primary-highlight-hover active:bg-primary-highlight-active rounded flex justify-center items-center p-2 cursor-pointer  rounded-md',
    ],
  }),
  nextpagebutton: ({ context }) => ({
    class: [
      'relative',

      // Flex & Alignment
      'inline-flex items-center justify-center',

      // Shape
      'border-0',

      // Size
      'leading-none',

      // Color
      'text-surface-500 dark:text-white/60',

      // State
      {
        'hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]': !context.disabled,
        'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400':
          !context.disabled,
      },

      // Transition
      'transition duration-200',

      // Misc
      'user-none overflow-hidden',
      { 'cursor-default pointer-events-none opacity-60': context.disabled },

      // custom
      'min-w-[2.5rem] h-8',
      'hover:bg-primary-highlight-hover active:bg-primary-highlight-active rounded flex justify-center items-center p-2 cursor-pointer  rounded-md',
    ],
  }),
  lastpagebutton: ({ context }) => ({
    class: [
      'relative',

      // Flex & Alignment
      'inline-flex items-center justify-center',

      // Shape
      'border-0',

      // Size
      'leading-none',

      // Color
      'text-surface-500 dark:text-white/60',

      // State
      {
        'hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]': !context.disabled,
        'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400':
          !context.disabled,
      },

      // Transition
      'transition duration-200',

      // Misc
      'user-none overflow-hidden',
      { 'cursor-default pointer-events-none opacity-60': context.disabled },

      // custom
      'min-w-[2.5rem] h-8',
      'hover:bg-primary-highlight-hover active:bg-primary-highlight-active rounded flex justify-center items-center p-2 cursor-pointer  rounded-md',
    ],
  }),
  pagebutton: ({ context }) => ({
    class: [
      'relative',

      // Flex & Alignment
      'inline-flex items-center justify-center',

      // Shape
      'border-0',

      // Size
      'leading-none',

      // State
      {
        'hover:bg-surface-50 dark:hover:bg-[rgba(255,255,255,0.03)]': !context.disabled,
        'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400':
          !context.disabled,
      },

      // Transition
      'transition duration-200',

      // Misc
      'user-none overflow-hidden',
      { 'cursor-default pointer-events-none opacity-60': context.disabled },
    ],
  }),
  rowperpagedropdown: {
    root: ({ props, state }) => ({
      class: [
        // Display and Position
        'relative',

        // Transitions
        'transition-all',
        'duration-200',

        // Misc
        'cursor-pointer',
        'select-none',
        {
          'select-none pointer-events-none cursor-default': props.disabled,
        },

        // custom
        'w-[70px]',
        'px-2',
        'flex justify-between items-center gap-3',
        'rounded-md',
        'hover:border-0',
        'bg-primary-50 hover:bg-primary-100',
        'h-8',
        'm-0 text-center align-middle',
        state.overlayVisible && 'rowperpagedropdown--overlay-visible',
      ],
    }),
    input: {
      class: [
        // Display
        'block',
        'flex-auto',

        // Color and Background
        'bg-transparent',
        'border-0',

        // Sizing and Spacing
        'w-[1%]',

        //Shape
        'rounded-none',

        // Transitions
        'transition',
        'duration-200',

        // States
        'focus:outline-none focus:shadow-none',

        // Misc
        'relative',
        'cursor-pointer',
        'overflow-hidden overflow-ellipsis',
        'whitespace-nowrap',
        'appearance-none',

        // custom
        'min-w-[26px]',
      ],
    },
    trigger: {
      class: [
        // Flexbox
        'flex items-center justify-center',
        'shrink-0',

        // Color and Background
        'bg-transparent',
        'text-surface-500',

        // Shape
        'rounded-tr-md',
        'rounded-br-md',
      ],
    },
    panel: {
      class: ['pb-1'],
    },
    wrapper: {
      class: [
        // Sizing
        'max-h-[200px]',

        // Misc
        'overflow-auto',

        // Colors
        'bg-surface-0 dark:bg-surface-900',
        'text-surface-700 dark:text-white/80',

        // Shape
        'rounded-2xl',
        'shadow-xl',

        // custom
        'pt-4 pb-2',
      ],
    },
    list: {
      class: 'list-none m-0',
    },
    item: ({ context }) => ({
      class: [
        'relative',

        // Font
        'leading-none',

        // Spacing
        'm-0 pl-3 pr-5 py-2',

        // Shape
        'border-0',

        // Colors
        {
          'text-surface-700 dark:text-white/80': !context.selected,
          'bg-surface-200 dark:bg-surface-600/60': context.focused && !context.selected,
          'text-primary-highlight-inverse': context.selected,
        },

        // Transitions
        'transition-shadow',
        'duration-200',

        // Misc
        'cursor-pointer',
        'overflow-hidden',
        'whitespace-nowrap',
        context.selected && [
          'bg-primary-50 relative',
          'after:absolute after:size-3.5 after:right-2',
          'after:bg-primary after:[mask-image:url("/images/icons/ok.svg")] after:[mask-repeat:no-repeat] after:[mask-size:contain] after:[mask-position:center]',
        ],
        'hover:bg-primary-100',
      ],
    }),
  },
  jumptopageinput: {
    root: {
      class: 'inline-flex',
    },
    input: {
      root: {
        class: [
          'relative',

          //Font
          'leading-none',

          // Display
          'block',
          'flex-auto',

          //Shape

          // Transitions
          'transition',
          'duration-200',

          // Misc
          'cursor-pointer',
          'overflow-hidden overflow-ellipsis',
          'whitespace-nowrap',
          'appearance-none',

          // custom
          'rounded-md',
          'hover:border-0',
          'bg-primary-50 hover:bg-primary-100',
          'w-[56px] max-w-[3rem] h-[32px]',
          'm-0 text-center align-middle',
          'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500',
        ],
      },
    },
  },
  jumptopagedropdown: {
    root: ({ props, state }) => ({
      class: [
        // Display and Position
        'inline-flex',
        'relative',

        // Shape
        'h-10',
        'rounded-md',

        // Spacing
        'mx-2',

        // Color and Background
        'bg-surface-0 dark:bg-surface-950',
        'border border-surface-300 dark:border-surface-700',

        // Transitions
        'transition-all',
        'duration-200',

        // States
        'hover:border-surface-400 dark:hover:border-surface-600',
        {
          'focus:outline-none focus:outline-offset-0 focus:ring-1 focus:ring-primary-500 dark:focus:ring-primary-400':
            !state.focused,
        },

        // Misc
        'cursor-pointer',
        'select-none',
        {
          'bg-surface-200 dark:bg-surface-700 select-none pointer-events-none cursor-default':
            props.disabled,
        },
      ],
    }),
    input: {
      class: [
        //Font
        'leading-[normal]',

        // Display
        'block',
        'flex-auto',

        // Color and Background
        'bg-transparent',
        'border-0',
        'text-surface-800 dark:text-white/80',

        // Sizing and Spacing
        'w-[1%]',
        'py-2 pl-3 pr-0',

        //Shape
        'rounded-none',

        // Transitions
        'transition',
        'duration-200',

        // States
        'focus:outline-none focus:shadow-none',

        // Misc
        'relative',
        'cursor-pointer',
        'overflow-hidden overflow-ellipsis',
        'whitespace-nowrap',
        'appearance-none',
      ],
    },
    trigger: {
      class: [
        // Flexbox
        'flex items-center justify-center',
        'shrink-0',

        // Color and Background
        'bg-transparent',
        'text-surface-500',

        // Size
        'w-10',

        // Shape
        'rounded-tr-md',
        'rounded-br-md',
      ],
    },
    panel: {
      class: [
        // Colors
        'bg-surface-0 dark:bg-surface-900',
        'text-surface-700 dark:text-white/80',

        // Shape
        'border border-surface-300 dark:border-surface-700',
        'rounded-md',
        'shadow-md',
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
      class: 'p-1 list-none m-0',
    },
    item: ({ context }) => ({
      class: [
        'relative',

        // Font
        'leading-none',

        // Spacing
        'm-0 px-3 py-2',

        // Shape
        'border-0 rounded',

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

        // Transitions
        'transition-shadow',
        'duration-200',

        // Misc
        'cursor-pointer',
        'overflow-hidden',
        'whitespace-nowrap',
      ],
    }),
  },
  start: {
    class: 'mr-auto',
  },
  end: {
    class: 'ml-auto',
  },
};
