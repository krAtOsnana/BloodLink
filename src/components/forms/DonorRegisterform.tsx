"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl } from "@/components/ui/form";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import React, { useState } from "react";
import { DonorRegistrationFormValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { registerDonor } from "@/lib/actions/donor.actions";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import {
  BloodGroups,
  GenderOptions,
  DonorFormDefaultValues,
  DonorOption
} from "@/constants/inedx";
import { SelectItem } from "../ui/select";
import Image from "next/image";

const DonorRegisterform = ({ donor }: { donor: Donor }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [postalId, setPostalId] = useState("");
  const router = useRouter();

  /********************************* */

  const fetchCurrentLocation = async (field: any) => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    setIsLocating(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        // Use a geocoding API to fetch the address (replace with your API)
        const geocodedAddress = await getAddressFromCoordinates(
          latitude,
          longitude
        );

        field.onChange(geocodedAddress || "Could not fetch address");
        setIsLocating(false);
      },
      (error) => {
        console.error("Error fetching location:", error);
        alert("Unable to fetch your location. Please enter it manually.");
        setIsLocating(false);
      }
    );
  };

  const getAddressFromCoordinates = async (
    lat: number,
    lon: number
  ): Promise<string | null> => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
      );
      const data = await response.json();
      setPostalId(data.address.postcode);
      form.setValue("postId", postalId || "");
      //console.log(postalId);
      return data.display_name || null;
    } catch (error) {
      console.error("Error fetching address:", error);
      return null;
    }
  };

  /********************************* */

  // 1. Define your form.
  const form = useForm<z.infer<typeof DonorRegistrationFormValidation>>({
    resolver: zodResolver(DonorRegistrationFormValidation),
    defaultValues: {
      ...DonorFormDefaultValues,
      name: donor.name,
      email: donor.email,
      phone: donor.phone
    }
  });

  // 2. Define a submit handler.
  // RegisterDonorParams
  const onError = async(error: any )=>{
    console.log(error);
    
  }
  const onSubmit = async (values: RegisterDonorParams) => {
    console.log("inside onSubmit")
    setIsLoading(true);
    //console.log(form.formState.errors);
    console.log(values);

    try {
        const donorsData = {
            ...values,
            userId: donor.$id,
            birthDate: new Date(values.birthDate),
        };
        console.log("Prepared donor data:", donorsData);

        const Donor = await registerDonor(donorsData);
        if (Donor) {
            console.log("Donor successfully registered:", Donor);
            router.push(`/donor/${donor.$id}/donorsDashboar`);
        } else {
            console.log("No response from registerDonor.");
        }
    } catch (error) {
        console.error("Error in form submission:", error);
    }

    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onError)}
        className="space-y-8"
      >
        <main>
          <section className=" space-y-4 flex-1">
            <h1 className="header">Welcome 👋</h1>
            <p className="text-red-500">Let us know more about yourself.</p>
          </section>

          <section className="space-y-6">
            <div className="mb-9 space-y-1">
              <h2 className="sub-header">Personal Information</h2>
            </div>
          </section>

          {/* name */}
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="name"
            label="Full name"
            placeholder="John Doe"
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
          />

          {/* email && phoneN0. */}
          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="email"
              label="Email"
              placeholder="johndoe@gmail.com"
              iconSrc="/assets/icons/email.svg"
              iconAlt="email"
            />

            <CustomFormField
              fieldType={FormFieldType.PHONE_INPUT}
              control={form.control}
              name="phone"
              label="Phone number (WhatsApp)"
              placeholder="(555) 123-4567"
            />
          </div>

          {/* gender && DOB */}
          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="birthDate"
              label="Date of birth"
            />

            <CustomFormField
              fieldType={FormFieldType.SKELETON}
              control={form.control}
              name="gender"
              label="Gender"
              renderSkeleton={(field) => (
                <FormControl>
                  <RadioGroup
                    className="flex h-11 gap-6 xl:justify-between"
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    {GenderOptions.map((option, i) => (
                      <div key={option + i} className="radio-group">
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option} className="cursor-pointer ">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
              )}
            />
          </div>

          {/* Address & postal Id */}
          <div className="flex flex-col gap-6 xl:flex-row">
            {/* ********************************************** */}
            <CustomFormField
              fieldType={FormFieldType.SKELETON}
              control={form.control}
              name="address"
              label="Address"
              renderSkeleton={(field) => (
                <FormControl>
                  <div className="flex flex-col p-2 rounded-md border border-dark-500 bg-dark-400">
                    {/* Address Input */}
                    <div>
                      <input
                        id="address"
                        type="text"
                        placeholder="14 Street, New York, NY - 5101"
                        className="shad-input w-full border-0"
                        value={
                          field.value !== "currentLocation" ? field.value : ""
                        }
                        onChange={(e) => field.onChange(e.target.value)}
                        disabled={field.value === "currentLocation"}
                      />
                    </div>

                    {/* Use Current Location Option */}
                    <RadioGroup
                      className="flex items-center space-x-3"
                      onValueChange={(value) => {
                        field.onChange(value);
                        if (value === "currentLocation") {
                          fetchCurrentLocation(field);
                        }
                      }}
                      value={field.value}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="currentLocation"
                          id="currentLocation"
                        />
                        <Label
                          htmlFor="currentLocation"
                          className="cursor-pointer"
                        >
                          current location
                        </Label>
                      </div>
                    </RadioGroup>

                    {isLocating && (
                      <span className="text-sm text-blue-500">Locating...</span>
                    )}
                  </div>
                </FormControl>
              )}
            />

            {/* ********************************************** */}

            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="postId"
              label="Postal Id"
              placeholder="211011"
              renderSkeleton={(field) => (
                <input
                  id="postId"
                  type="text"
                  placeholder="211011"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 dark:bg-gray-800 dark:border-gray-600"
                  value={postalId} // Bind postalId state to the input
                  onChange={(e) => {
                    setPostalId(e.target.value); // Allow manual input
                    field.onChange(e.target.value);
                  }}
                  disabled={isLocating} // Disable field during geolocation lookup
                />
              )}
            />
          </div>

          {/* occupation && donation history*/}
          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="occupation"
              label="Occupation"
              placeholder="Engineer"
            />
            <CustomFormField
              fieldType={FormFieldType.SKELETON}
              control={form.control}
              name="donationHistory"
              label="Have you donated blood before?"
              renderSkeleton={(field) => (
                <FormControl>
                  <RadioGroup
                    className="flex h-11 gap-6 xl:justify-between"
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    {DonorOption.map((option, i) => (
                      <div key={option + i} className="radio-group">
                        <RadioGroupItem value={option} id={option} />
                        <Label htmlFor={option} className="cursor-pointer ">
                          {option}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
              )}
            />
          </div>

          <section className="space-y-6">
            <div className="mb-9 space-y-1">
              <h2 className="sub-header">Medical Information</h2>
            </div>
          </section>

          {/* blood Group and Last Date of donation */}
          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.SELECT}
              control={form.control}
              name="bloodType"
              label="Blood Group"
              placeholder="Select a Blood Group"
            >
              {BloodGroups.map((bloodGroup, i) => (
                <SelectItem key={bloodGroup.name + i} value={bloodGroup.name}>
                  <div className="flex cursor-pointer items-center gap-2">
                    <Image
                      src={bloodGroup.image}
                      width={42}
                      height={42}
                      alt="bloodGroup"
                      className="py-1   "
                    />
                    <p>{bloodGroup.name}</p>
                  </div>
                </SelectItem>
              ))}
            </CustomFormField>

            <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name="lastDonationDate"
              label="Last Date of Blood Donation"
            />
          </div>

          {/* Allergies && preExisting Medical condition */}
          <div className="flex flex-col gap-6 xl:flex-row">
            <CustomFormField
              fieldType={FormFieldType.TEXTAREA}
              control={form.control}
              name="allergies"
              label="Allergies (If any)"
              placeholder="Latex or Severe Allergies "
            />

            <CustomFormField
              fieldType={FormFieldType.TEXTAREA}
              control={form.control}
              name="preExistingMedicalConditins"
              label="Pre-existing Medical Conditions (If any)"
              placeholder="Diabetic or Anemia "
            />
          </div>

          {/* regularDonor && privacyConsent */}
          {/* <CustomFormField
          fieldType={FormFieldType.CHECKBOX}
          control={form.control}
          name="isRegularDonor"
          label="Are you a regular blood donor?"
        /> */}
          <CustomFormField
            fieldType={FormFieldType.CHECKBOX}
            control={form.control}
            name="privacyConsent"
            label="I consent to BloodLink using my phone number for notifications and WhatsApp messages, and my email for blood request updates."
          />
          <CustomFormField
            fieldType={FormFieldType.CHECKBOX}
            control={form.control}
            name="disclosureConsent"
            label="I consent to BloodLink sharing my contact details with recipients or donors for blood donation coordination."
          />

          {/* ToDo verification Document */}
          {/* why not now: 

          Verification Happens at Blood Banks/Hospitals:

          Since donors are medically screened and verified by professionals at the donation center, requiring additional verification on your platform is redundant.
          Simplicity Encourages Sign-Ups:

          Simplifying the registration process can attract more donors. Asking for extensive personal information could deter them.
          Reduced Liability:

          By not collecting sensitive data (e.g., ID numbers, documents), you minimize the risk of being held responsible for handling such data securely.
          Privacy Concerns:

          Collecting IDs or other sensitive information may raise privacy concerns among users, leading to distrust in your platform. Keeping the process simple builds user confidence.
          Focus on Connecting, Not Screening:

          Your app serves as a platform to connect donors with recipients, not as a substitute for medical or legal verification. You only need enough information to make matches reliable (e.g., location, blood type).
          */}

          {/* Disclaimer Section */}
          <section>
            <h2 className="text-lg font-bold text-red-500">Disclaimer :</h2>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              BloodLink connects donors and recipients but does not verify donor
              eligibility or conduct medical checks. All checks are handled by
              certified hospitals or blood banks. By using BloodLink, you agree
              to these terms.
            </p>
          </section>
        </main>
        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
};

export default DonorRegisterform;
