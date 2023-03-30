import React from 'react';
import './GlassCard.css';

import ButtonBorderRed from '../ButtonBorderRed/ButtonBorderRed';

interface Props {
  title: string;
  onClick?: () => void;
}

export default function GlassCard({ title, onClick }: Props) {
  return (
    <div className="GlassCard">
      <h1 className="GlassCard__title">{title}</h1>
      <ButtonBorderRed label="READ MORE" isClickable={true} onClick={onClick} />
    </div>
  );
}
