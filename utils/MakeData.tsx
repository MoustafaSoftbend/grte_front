// makeData.js

import { faker } from "@faker-js/faker";
// import faker from "faker";

// Function to generate fake user data
const generateFakeUser = () => ({
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
