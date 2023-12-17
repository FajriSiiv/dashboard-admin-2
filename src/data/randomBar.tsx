import { faker } from "@faker-js/faker";

function createRandomBar() {
  const dataBars = [];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  for (let i = 0; i < 12; i++) {
    const randomBar = {
      name: months[i],
      Money: faker.string.numeric({ length: { min: 3, max: 3 } }),
    };

    dataBars.push(randomBar);
  }

  return dataBars;
}

export const dataBar: any = createRandomBar();
