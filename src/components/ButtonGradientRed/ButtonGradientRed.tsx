import './ButtonGradientRed.css';

interface Props {
  label: string;
}

export default function ButtonGradientRed({ label }: Props) {
  return <div className="ButtonGradientRed">{label}</div>;
}
