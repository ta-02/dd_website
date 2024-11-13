import { BrandInstagram } from "@mynaui/icons-react";
import { BrandLinkedin } from "@mynaui/icons-react";

export default function Footer() {
  return (
    <footer className="px-4 text-center flex flex-col items-center">
      <small className="mb-2 block text-xs">
        &copy; 2024 WLU Double Degree Club. All rights reserved.
      </small>
      <p className="flex flex-row items-center text-xs">
        <a href="https://www.instagram.com/DoubleDegreeswlu/">
          <BrandInstagram />
        </a>
        <a href="https://ca.linkedin.com/in/double-degrees-306b59302">
          <BrandLinkedin />
        </a>
      </p>
    </footer>
  );
}
