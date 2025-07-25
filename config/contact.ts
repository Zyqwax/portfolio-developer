import {
  LucideIcon,
  Mail,
  MapPin,
  FileText,
  LinkedinIcon,
  GithubIcon,
  TwitterIcon,
  InstagramIcon,
} from "lucide-react";

export interface ContactLink {
  label: string;
  url: string;
  icon: LucideIcon;
  username: string;
}

interface ContactConfig {
  email: string;
  location: string;
  resumeUrl: string;
  socialLinks: ContactLink[];
}

export const contactConfig: ContactConfig = {
  email: "mail@enessamedgozlu.com",
  location: "Antalya, Türkiye",
  resumeUrl: "/cv.pdf", // veya bir Google Drive linki

  socialLinks: [
    {
      label: "GitHub",
      url: "https://github.com/zyqwax",
      icon: GithubIcon,
      username: "Zyqwax",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/zyqwax",
      icon: LinkedinIcon,
      username: "Enes Samed Gözlü",
    },
    {
      label: "X",
      url: "https://x.com/Zyqwax",
      icon: TwitterIcon,
      username: "@Zyqwax",
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/gozlu.enessamed_007/",
      icon: InstagramIcon,
      username: "@gozlu.enessamed_007",
    },
  ],
};
