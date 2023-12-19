import { faker } from "@faker-js/faker";

function randomCardUser() {
  const userData = [];

  for (let i = 0; i < 4; i++) {
    const userCard = {
      name: faker.person.fullName(),
      money: faker.string.numeric({ length: { min: 2, max: 4 } }),
    };

    userData.push(userCard);
  }

  return userData;
}

export const userData: any = randomCardUser();
