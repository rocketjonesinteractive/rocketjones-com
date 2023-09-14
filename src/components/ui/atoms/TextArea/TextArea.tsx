import React from 'react';

export const TextArea = ({
  name,
  value,
  error,
  className,
  onChange,
  placeholder,
  autoComplete,
  maxLength,
  ...rest
}: {
  name: string;
  value: string;
  error?: string;
  className?: string;
  placeholder?: string;
  autoComplete?: 'on' | 'off';
  maxLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => {
  const hasError = error !== '' && error !== undefined;
  return (
    <div>
      <textarea
        name={name}
        value={value}
        className={`min-h-[150px] w-full border border-greyBorder bg-white px-4 py-3 align-top text-sm text-grey focus:border-zinc-500 focus-visible:outline-none ${className} ${
          hasError && 'border-red'
        }`}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete={autoComplete}
        maxLength={maxLength}
        {...rest}
      />
      {hasError && <div className={'mt-1 text-sm text-red'}>{error}</div>}
    </div>
  );
};
