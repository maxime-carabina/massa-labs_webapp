import './ButtonBorderRed.css';

interface Props {
  label: string;
  isClickable?: boolean | true;
  onClick?: () => void;
}

export default function ButtonBorderRed({ label, isClickable, onClick }: Props) {
  return isClickable ? (
    <div className="ButtonBorderRed" onClick={onClick}>
      {label}
    </div>
  ) : (
    <div className="ButtonBorderRed__without-hover">{label}</div>
  );
}
