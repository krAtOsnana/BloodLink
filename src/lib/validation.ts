import { z } from "zod";

export const DonorFormValidation = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .refine(phone => /^\+\d{10,15}$/.test(phone), "Invalid phone number")
});

export const DonorRegistrationFormValidation = z.object({
  userId: z.string(),
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .refine(phone => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
  birthDate: z.date(),
  gender: z.enum(["Male", "Female", "Other"]),
  address: z
    .string()
    .min(5, "Address must be at least 5 characters")
    .max(500, "Address must be at most 500 characters"),
  postId: z.string().length(6, "Post ID must be exactly 6 characters"),
  occupation: z
    .string()
    .min(2, "Occupation must be at least 2 characters")
    .max(500, "Occupation must be at most 500 characters"),
  donationHistory: z.enum(["First-Time", "Regular"]),
  bloodType: z.enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]),
  lastDonationDate: z.date(),
  allergies: z.string().optional(),
  preExistingMedicalConditins: z.string().optional(),
  privacyConsent: z.boolean().default(false).refine(value => value === true, {
    message: "You must consent to privacy in order to proceed"
  }),
  disclosureConsent: z
    .boolean()
    .default(false)
    .refine(value => value === true, {
      message: "You must consent to disclosure in order to proceed"
    })
});

export const RecipientFormValidation = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .refine(phone => /^\+\d{10,15}$/.test(phone), "Invalid phone number")
});

export const RecipientRegistrationFormValidation = z
  .object({
    userId: z.string(),
    name: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be at most 50 characters"),
    email: z.string().email("Invalid email address"),
    phone: z
      .string()
      .refine(phone => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),

    address: z
      .string()
      .min(5, "Address must be at least 5 characters")
      .max(500, "Address must be at most 500 characters"),
    postId: z.string().length(6, "Post ID must be exactly 6 characters"),

    

    privacyConsent: z.boolean().default(false).refine(value => value === true, {
      message: "You must consent to privacy in order to proceed"
    }),
    disclosureConsent: z
      .boolean()
      .default(false)
      .refine(value => value === true, {
        message: "You must consent to disclosure in order to proceed"
      }),

    transfusionRequestDocument: z.custom<File[]>().optional(),
    unitRequired: z.string(),
    
  })
  
  
