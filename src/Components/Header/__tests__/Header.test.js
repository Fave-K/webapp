/* global  it, describe, expect */
import React from "react";
import { shallow } from "enzyme";
import Header from "../../Header/Header";

describe("Header component tests", () => {
  it("component can render without children ", function () {
    expect(shallow(<Header />));
  });
});
