import { assert } from "@std/assert";
import { world } from "../src/world.ts";

Deno.test("World Test", () => {
  world();
  assert(true);
});
