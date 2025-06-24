import { v4 as uuidv4 } from "uuid";

import { getRandomInt } from "~/utils/getRandomInt";

export function generateSparkle() {
  let top = -1;
  do {
    const random = getRandomInt(-50, 50);
    top = random;
  } while (top < -25 || top > 25);

  const sparkle = {
    id: uuidv4(),
    createdAt: Date.now(),
    size: getRandomInt(10, 20),
    style: {
      top: top + "%",
      left: getRandomInt(0, 100) + "%",
    },
  };
  return sparkle;
}
