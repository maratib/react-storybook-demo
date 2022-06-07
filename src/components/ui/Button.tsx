import React, { FC } from "react";

type Props = {
  title: string;
  outlined?: boolean;
  onClick?: () => void;
};

const BASE_BUTTON =
  "rounded outline-none shadow py-3 px-12 font-normal uppercase tracking-wider text-lg";
const CONTAINED_BUTTON = `${BASE_BUTTON} bg-teal-400 border border-teal-400 text-white`;
const OUTLINED_BUTTON = `${BASE_BUTTON} border border-teal-400 text-teal-400`;

const Button: FC<Props> = ({ title, outlined, onClick }) => (
  <button
    onClick={onClick}
    className={outlined ? OUTLINED_BUTTON : CONTAINED_BUTTON}
  >
    <span>{title}</span>
  </button>
);

export default Button;
