import { InitState } from "@/app/interfaces";
import { mutationsGenerator } from "../mutations";
export interface Users {
  login: InitState;
}

describe("mutationsGenerator", () => {
  it("should generate mutation functions for a given prefix type and key", () => {
    const prefixType = "PREFIX_TYPE";
    const key = "login";
    const mutations = mutationsGenerator<Users>(prefixType, key);

    expect(mutations).toHaveProperty(`${prefixType}_REQUEST`);
    expect(mutations).toHaveProperty(`${prefixType}_SUCCESS`);
    expect(mutations).toHaveProperty(`${prefixType}_FAILURE`);
  });
});
