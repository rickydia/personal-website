import { v4 as uuidv4 } from "uuid";

import { getRandomInt } from "~/utils/getRandomInt";

export function generateSparkle(isMounted: boolean) {
  let top = -1;
  do {
    const random = getRandomInt(-50, 50);
    top = random;
  } while (top < -25 || top > 25);

  const sparkle = {
    id: uuidv4(),
    createdAt: Date.now(),
    size: isMounted ? getRandomInt(10, 20) : 0,
    style: {
      top: isMounted ? top + "%" : "0%",
      left: isMounted ? getRandomInt(0, 100) + "%" : "0%",
    },
  };
  return sparkle;
}
