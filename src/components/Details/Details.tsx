import React from 'react';
import './Details.css';

interface Props {
  infos: {
    question: string;
    answer: any;
  };
  onClick?: () => void;
}

export default function DetailsCard({ infos, onClick }: Props) {
  return (
    <details className="DetailsCard" onClick={onClick}>
      <summary className="DetailsCard__summary">{infos.question}</summary>
      <div className="DetailsCard__content">{infos.answer}</div>
    </details>
  );
}
