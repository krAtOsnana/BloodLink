"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import SubmitButton from "../SubmitButton";
import { useState } from "react";
import {DonorFormValidation} from "@/lib/validation"
import { useRouter } from "next/navigation";


const RecipientForm = () => {

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter()

  // 1. Define your form.
  const form = useForm<z.infer<typeof DonorFormValidation>>({
    resolver: zodResolver(DonorFormValidation),
    defaultValues: {
      name: "",
      email:"",
      phone:"",
    }
  });

  // 2. Define a submit handler.
  function onSubmit({name, email, phone}: z.infer<typeof DonorFormValidation>) {
    setIsLoading(true);

     try {
    //   const user = {
    //     name: name,
    //     email: email,
    //     phone: phone,
    //   };

    //   const newUser = await createUser(user);

    //   if (newUser) {
    //     router.push(`/donor/${newUser.$id}/register`);
    //   }
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi there 👋</h1>
          <p className="text-dark-700">Get started with Sign Up.</p>
        </section>
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Full name"
          placeholder="John Doe"
          iconSrc="/assets/icons/user.svg"
          iconAlt="user"
        />

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
        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  );
};

export default RecipientForm;
