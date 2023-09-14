import React from 'react';

export const TextInput = ({
  name,
  value,
  error,
  className,
  placeholder,
  onChange,
  onClick,
  onKeyDown,
  maxLength,
  type = 'text',
  autoComplete,
  id,
  ...rest
}: {
  name: string;
  value: string | number;
  type?: 'text' | 'number' | 'email';
  placeholder?: string;
  error?: string;
  className?: string;
  maxLength?: number;
  autoComplete?: 'on' | 'off';
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
}) => {
  const hasError = error !== '' && error !== undefined;
  return (
    <div>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`w-full border border-greyBorder bg-white px-4 py-3 text-sm text-grey focus:border-zinc-500 focus-visible:outline-none ${className} ${
          hasError && 'border-red'
        }`}
        onChange={onChange}
        onClick={onClick}
        onKeyDown={onKeyDown}
        autoComplete={autoComplete}
        {...rest}
      />
      {hasError && <div className={'mt-1 text-sm text-red'}>{error}</div>}
    </div>
  );
};
