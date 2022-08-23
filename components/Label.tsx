import styles from "./Label.module.css";

type LabelProps = {
  htmlFor: string;
  label: string;
};

export default function Label({ htmlFor, label }: LabelProps) {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {label}
    </label>
  );
}
