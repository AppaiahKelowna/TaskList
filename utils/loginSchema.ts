import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email format' }),
  password: z.string().min(6, { message: 'Password must me 6 characters ' }),
});

export default loginSchema;
