import { betterAuth } from "better-auth";

export const auth = betterAuth({
  // Connect your database instance here (e.g., using drizzleAdapter or prismaAdapter)
  emailAndPassword: {
    enabled: true,
  }
});
