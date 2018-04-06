import test from "tape";

import { incrementAsync } from "./sagas";

test("incremental Saga test", assert => {
  const gen = incrementAsync();

  assert.deepEqual(
    gen.next(),
    {
      done: false,
      value: call(delay, 1000)
    },
    "increment Async should return a Promise that will resolve after 1 second"
  );
});
