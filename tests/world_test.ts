import { assert } from "./test_deps.ts";
import { world } from "../src/world.ts";

Deno.test("World Test", () => {
  world();
  assert(true);
});
