import React from 'react';

export interface IProps {
  color: string;
  // eslint-disable-next-line no-unused-vars
  onClick?: (color: string) => void;
}
export default (props: IProps) => {
  const { color, onClick } = props;
  return (
    <button
      type="button"
      style={{ color }}
      onClick={() => onClick && onClick(color)}
    >
      Color Button
    </button>
  );
};
