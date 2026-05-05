import * as z from 'zod';

export const LoginSchema = z
  .object({
    email: z.email(),
    password: z.string().min(6, 'Password cannot be empty !'),
  })
  .required();

export const ForgetPassSchema = z
  .object({
    email: z.email(),
    password: z
      .string()
      .min(1, 'Password cannot be empty')
      .min(6, 'Password must be at least 6 characters'),
    repeat_pass: z
      .string()
      .min(1, 'Password cannot be empty')
      .min(6, 'Password must be at least 6 characters'),
  })
  .refine((inputValue) => inputValue.password === inputValue.repeat_pass, {
    path: ['repeat_pass'],
    message: 'Repeat password does not match!',
  });
