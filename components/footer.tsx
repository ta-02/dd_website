import Link from "next/link";
import { BrandInstagram, BrandLinkedin } from "@mynaui/icons-react";

const footerSections = [
  {
    title: "About Us",
    links: [
      { text: "Our Mission", href: "/about/mission" },
      { text: "Our Team", href: "/about/team" },
      { text: "Contact", href: "/about/contact" },
    ],
  },
  {
    title: "Events",
    links: [
      { text: "Upcoming Events", href: "/events/upcoming" },
      { text: "Past Events", href: "/events/past" },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "Blog", href: "/blog" },
      { text: "FAQ", href: "/faq" },
    ],
  },
];

const socialMediaLinks = [
  { icon: BrandInstagram, href: "https://www.instagram.com/DoubleDegreeswlu/" },
  {
    icon: BrandLinkedin,
    href: "https://ca.linkedin.com/in/double-degrees-306b59302",
  },
];

export default function Footer() {
  return (
    <footer className="mx-auto mt-32 w-full max-w-screen-xl px-4 sm:px-6">
      <div className="grid grid-cols-2 gap-x-2 gap-y-8 pb-12 sm:grid-cols-4 sm:gap-6 xl:grid-cols-6">
        {/* Logo and tagline */}
        <div className="col-span-full mb-2 sm:mb-8 xl:col-span-2 xl:mb-0">
          <Link className="-ml-1 inline-block dark:invert" href="/"></Link>
          <p className="mt-5 text-sm leading-[1.75] text-neutral-500 dark:text-neutral-400">
            Connecting students in the Double Degrees program at Wilfrid Laurier
            University.
          </p>
        </div>
        {footerSections.map(({ title, links }, idx) => (
          <div key={idx}>
            <h5 className="font-semibold">{title}</h5>
            <ul className="mt-4 space-y-2 text-neutral-500 dark:text-neutral-400">
              {links.map(({ text, href }, idx) => (
                <li key={idx}>
                  <Link href={href} className="text-sm hover:text-primary-600">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="col-span-full mt-8 sm:mt-0 xl:col-span-2">
          <h5 className="font-semibold">Follow Us</h5>
          <ul className="mt-4 flex space-x-4">
            {socialMediaLinks.map(({ icon: Icon, href }, idx) => (
              <li key={idx}>
                <Link
                  href={href}
                  className="text-neutral-500 hover:text-primary-600"
                >
                  <Icon className="h-6 w-6" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
