import React from "react";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="text-lg font-bold tracking-tighter text-blue-800 transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8"
    >
      Nutrition-IQ
    </Link>
  );
}
