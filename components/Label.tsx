type LabelProps = {
  htmlFor: string;
  label: string;
};

export default function Label({ htmlFor, label }: LabelProps) {
  return (
    <label className="label" htmlFor={htmlFor}>
      {label}
    </label>
  );
}
