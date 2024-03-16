interface ButtonProps {
  /** The text to display inside the button */
  title: string;
  /** Whether the button can be interacted with */
  disabled: boolean;
}

export default function Button({ title, disabled }: ButtonProps) {
  return <button disabled={disabled}>{title}</button>;
}
