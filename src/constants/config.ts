import aarhus from "@/assets/aarhus.png";
import odense from "@/assets/odense.png";

export const site = {
  title: "Mercura",
};

export const location = {
  country: "Denmark",
  address: {
    line_1: "Aabogade 15",
    line_2: "8200 Aarhus N",
  },
};

export const contact = {
  official_name: "Mercura ApS",
  phone: "+45 20 77 12 96",
  email: "mj@mercura.io",
};

export const socials = {
  facebook: "https://www.facebook.com/mercura.dk",
  linkedin: "https://www.linkedin.com/company/20479997/",
};

export const offices: Record<
  string,
  {
    image: ImageMetadata;
    name: string;
    country: string;
    address: {
      line_1: string;
      line_2: string;
    };
  }
> = {
  aarhus: {
    image: aarhus,
    name: "Aarhus - Headquarters",
    country: "Denmark",
    address: {
      line_1: "Aabogade 15",
      line_2: "8200 Aarhus N",
    },
  },
  odense: {
    image: odense,
    name: "Odense",
    country: "Denmark",
    address: {
      line_1: "Forskerparken 10",
      line_2: "5230 Odense M",
    },
  },
};
