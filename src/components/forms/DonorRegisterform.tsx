"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form, FormControl } from "@/components/ui/form";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import { DonorFormValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { createDonor } from "@/lib/actions/donor.actions";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { BloodGroups, GenderOptions } from "@/constants/inedx";
import { SelectItem } from "../ui/select";
import Image from "next/image";

const DonorRegisterform = ({ donor }: { donor: Donor }) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // 1. Define your form.
  const form = useForm<z.infer<typeof DonorFormValidation>>({
    resolver: zodResolver(DonorFormValidation),
    defaultValues: {
      name: donor.name,
      email: donor.email,
      phone: donor.phone
    }
  });

  // 2. Define a submit handler.
  const onSubmit = async ({
    name,
    email,
    phone
  }: z.infer<typeof DonorFormValidation>) => {
    setIsLoading(true);

    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
            label="Phone number"
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
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="address"
            label="Address"
            placeholder="14 street, New york, NY - 5101"
          />

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="postId"
            label="Postal Id"
            placeholder=" 211011"
          />
        </div>

        {/* occupation */}
        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="occupation"
            label="Occupation"
            placeholder="Engineer"
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
            name="bloodGroup"
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
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="allergies"
            label="Allergies"
            placeholder="Latex or Severe Allergies"
          />

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="preExistingMedicalConditins"
            label="Pre-existing Medical Conditions"
            placeholder="Diabetic "
          />
        </div>

        {/* regularDonor && privacyConcent */}
        <CustomFormField
            fieldType={FormFieldType.CHECKBOX}
            control={form.control}
            name="isRegularDonor"
            label="Are you a regular blood donor?"
        />
        <CustomFormField
            fieldType={FormFieldType.CHECKBOX}
            control={form.control}
            name="privacyConcent"
            label="I consent to BloodLink using my information for blood donation purposes."
        />
        <CustomFormField
            fieldType={FormFieldType.CHECKBOX}
            control={form.control}
            name="disclosureConsent"
            label="I consent to BloodLink sharing my information with donors or recipients solely for facilitating blood donations."
        />

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
};

export default DonorRegisterform;
