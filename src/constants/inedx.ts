import { BloodType, DonorHistory, Gender } from "@/types/ index";

export const GenderOptions = ["Male", "Female", "Other"];
export const DonorOption = ["First-Time", "Regular"];
export const DonorFormDefaultValues = {
  userId: "",
  name: "",
  email: "",
  phone: "",
  birthDate: new Date(),
  gender: "Male" as Gender,
  address: "",
  postId: "",
  occupation: "",
  donationHistory: "First-Time" as DonorHistory,
  bloodGroup: "" as BloodType,
  lastDonationDate: new Date(),
  allergies: "",
  preExistingMedicalConditins: "",
  disclosureConsent: false,
  privacyConsent: false
};
export const RecipientFormDefaultValues = {
  userId: "",
  name: "",
  email: "",
  phone: "",

  address: "",
  postId: "",

  disclosureConsent: false,
  privacyConsent: false,

  transfusionRequestDocument: [] ,
  unitRequired: "1",
};

export const BloodGroups = [
  {
    image: "/assets/images/a+.png",
    name: "A+"
  },
  {
    image: "/assets/images/a-.png",
    name: "A-"
  },
  {
    image: "/assets/images/b+.png",
    name: "B+"
  },
  {
    image: "/assets/images/b-.png",
    name: "B-"
  },
  {
    image: "/assets/images/ab+.png",
    name: "AB+"
  },
  {
    image: "/assets/images/ab-.png",
    name: "AB-"
  },
  {
    image: "/assets/images/o+.png",
    name: "O+"
  },
  {
    image: "/assets/images/o-.png",
    name: "O-"
  }
];
