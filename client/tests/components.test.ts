import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import { mountSuspended } from "@nuxt/test-utils/runtime";
import Loader from "../app/components/Atoms/Loader.vue";
import GamesCard from "../app/components/Organisms/GamesCard.vue";

describe("test components rendering", () => {
  it("renders loader", () => {
    const wrapper = mount(Loader, {
      props: {
        text: "Loading...",
      },
    });
    expect(wrapper.text()).toBe("Loading...");
  });

  it("render games card", async () => {
    const game = {
      id: 1,
      title: "GTA Vice City 6",
      genre: {
        name: "Action",
      },
      release_date: "2026-05-17",
      stats: {
        average_rating: 4.5576,
        total_reviews: 100,
      },
    };
    const wrapper = await mountSuspended(GamesCard, {
      props: {
        game,
      },
    });
    expect(wrapper.text()).toContain("GTA Vice City 6");
    expect(wrapper.text()).toContain("Action");
    expect(wrapper.text()).toContain("May 17th 2026");
    expect(wrapper.text()).toContain("4.6");
    expect(wrapper.text()).toContain("100");
  });
});
