import Image from "next/image";
import Link from "next/link";

import instagramIcon from "../assets/icons/instagram.svg";
import facebookIcon from "../assets/icons/facebook.svg";
import linkedinIcon from "../assets/icons/linkedin.svg";
import twitterIcon from "../assets/icons/twitter.svg";

import phoneIcon from "../assets/icons/phone.svg";
import emailIcon from "../assets/icons/email.svg";
import locationIcon from "../assets/icons/location.svg";

import googlePlayBadge from "../assets/images/google-play.png";

const companyLinks = [
  { label: "About Us", href: "#" },
  { label: "Blog", href: "#" },
];

const supportLinks = [
  { label: "Help Center", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

const socialIcons = [
  { icon: instagramIcon, alt: "Instagram", href: "#" },
  { icon: facebookIcon, alt: "Facebook", href: "#" },
  { icon: linkedinIcon, alt: "LinkedIn", href: "#" },
  { icon: twitterIcon, alt: "Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#FF3E1D] text-white py-16 px-4 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pb-10 lg:justify-items-center">

          <div className="flex flex-col gap-5">
            <span className="text-2xl font-bold">AAVORide</span>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Image src={phoneIcon} alt="phone" width={14} height={14} />
                <span className="text-base">+91-0000000000</span>
              </div>


              <div className="flex items-start gap-2">
                <Image src={emailIcon} alt="email" width={14} height={14} className="mt-0.5" />
                <div className="flex flex-col text-base leading-relaxed">
                  <span>support@aavoride.com</span>
                  <span>info@aavoride.com</span>
                </div>
              </div>


              <div className="flex items-start gap-2">
                <Image src={locationIcon} alt="location" width={14} height={14} className="mt-0.5" />
                <p className="text-base leading-relaxed">
                  AAVORide Travel Services<br />
                  Sector 62, Noida, Uttar Pradesh, India
                </p>
              </div>
            </div>


            <div className="flex items-center gap-3 mt-8">
              {socialIcons.map((s) => (
                <Link key={s.alt} href={s.href} aria-label={s.alt}>
                  <Image src={s.icon} alt={s.alt} width={28} height={28} />
                </Link>
              ))}
            </div>


            <Link href="#" className="w-fit">
              <Image src={googlePlayBadge} alt="Get it on Google Play" height={40} className="h-10 w-auto" />
            </Link>
          </div>


          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold">Company</h4>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-base hover:underline opacity-90 hover:opacity-100 transition-opacity"
                  >
                    · {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          <div className="flex flex-col gap-4">
            <h4 className="text-base font-bold">Support</h4>
            <ul className="flex flex-col gap-2">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-base hover:underline opacity-90 hover:opacity-100 transition-opacity"
                  >
                    · {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>


        <div className="pt-5 text-center text-xs opacity-80">
          © 2025 <span className="font-semibold">AAVORide</span>. All rights reserved.
        </div>

      </div>
    </footer>
  );
}