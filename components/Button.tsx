import styles from "./Button.module.css";

type ButtonProps = Omit<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  "className"
>;

export default function Button(props: ButtonProps) {
  return <button className={styles.button} {...props} />;
}
