export const GenderOptions = ["Male", "Female", "Other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "Male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "Birth Certificate",
  "Driver's License",
  "Medical Insurance Card/Policy",
  "Military ID Card",
  "National Identity Card",
  "Passport",
  "Resident Alien Card (Green Card)",
  "Social Security Card",
  "State ID Card",
  "Student ID Card",
  "Voter ID Card",
];

export const BloodGroups = [
  {
    image: "/assets/images/a+.png",
    name: "A+",
  },
  {
    image: "/assets/images/a-.png",
    name: "A-",
  },
  {
    image: "/assets/images/b+.png",
    name: "B+",
  },
  {
    image: "/assets/images/b-.png",
    name: "B-",
  },
  {
    image: "/assets/images/ab+.png",
    name: "AB+",
  },
  {
    image: "/assets/images/ab-.png",
    name: "AB-",
  },
  {
    image: "/assets/images/o+.png",
    name: "O+",
  },
  {
    image: "/assets/images/o-.png",
    name: "O-",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};