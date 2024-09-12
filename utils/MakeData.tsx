// makeData.ts
import { faker } from "@faker-js/faker";

// Define the User type
export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  state: string;
};

// Function to generate fake user data
const generateFakeUser = (): User => ({
  id: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  state: faker.address.state(),
});

// Generate an array of fake users
const fakeData = Array.from({ length: 10 }, generateFakeUser);

// Array of US states for select options
const usStates = [
  "Alabama",
  "Alaska",
  // ... (other states)
];

export { fakeData, usStates };
