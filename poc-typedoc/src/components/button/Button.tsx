export interface ButtonProps {
  /** The text to display inside the button */
  title: string;
  /**
   * Whether the button can be interacted with
   * @default false */
  disabled: boolean;
}

/**
 * Renders a button.
 *
 * @param title the title of the button.
 * @returns a button
 */
const Button = ({ title, disabled }: ButtonProps) => {
  return <button disabled={disabled}>{title}</button>;
};

export { Button };
