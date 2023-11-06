import { ButtonHTMLAttributes, DetailedHTMLProps, FC, PropsWithChildren } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

export const buttonStyles = cva(
  [
    'flex',
    'items-center',
    'font-bold',
    'justify-center',
    'uppercase',
    'tracking-wider',
    'transition-colors',
    'leading-none',
    'font-heading',
    'border-2',
    'border-transparent',
    'select-none',
  ],
  {
    variants: {
      size: {
        md: ['px-4', 'py-3', 'text-sm'],
      },
      variant: {
        primary: [
          'bg-red',
          'text-white',
          'hover:bg-transparent',
          'hover:border-red',
          'hover:text-red',
        ],
        secondary: ['bg-black', 'text-white', 'border-white', 'hover:border-red', 'hover:text-red'],
        tertiary: [
          'bg-transparent',
          'text-black',
          '!border-black',
          'hover:bg-red',
          'hover:!border-red',
          'hover:text-white',
        ],
        quaternary: [
          'bg-red',
          'text-white',
          'hover:bg-transparent',
          'hover:border-white',
          'hover:text-white',
          'group-hover:bg-transparent',
          'group-hover:border-white',
          'group-hover:text-white',
        ],
        quinary: [
          'bg-transparent',
          'text-white',
          'border-white',
          'hover:border-black',
          'hover:text-black',
        ],
        tan: [
          'bg-transparent',
          'text-tanDarkest',
          '!border-tanDarkest',
          ' hover:!border-black',
          'hover:text-black',
        ],
      },
      shape: {
        rectangle: ['rounded-xl'],
        rounded: ['rounded-full'],
        square: ['rounded-none'],
      },
      disabledVariants: {
        all: ['opacity-70', 'cursor-not-allowed'],
      },
    },
    defaultVariants: { size: 'md', variant: 'primary', shape: 'square' },
  },
);

export type ButtonProps = Pick<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'onClick' | 'onMouseEnter' | 'onMouseLeave' | 'type' | 'disabled' | 'id'
> &
  VariantProps<typeof buttonStyles> & {
    className?: string;
    type?: 'button' | 'submit';
  };

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  id,
  children,
  size,
  shape,
  variant,
  disabled,
  className,
  type = 'button',
  ...rest
}) => (
  <button
    id={id}
    type={type}
    disabled={disabled}
    className={`${buttonStyles({
      size,
      variant,
      shape,
      disabledVariants: disabled ? 'all' : null,
    })} ${className}`}
    {...rest}
  >
    {children}
  </button>
);
