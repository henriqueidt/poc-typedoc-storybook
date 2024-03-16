export interface ButtonProps {
  /** The text to display inside the button */
  title: string;
  /**
   * Whether the button can be interacted with
   * @default false */
  disabled: boolean;
}

const Button = ({ title, disabled }: ButtonProps) => {
  return <button disabled={disabled}>{title}</button>;
};

export { Button };
