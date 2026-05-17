import { describe, it, expect} from "vitest";
import { getRating, formatDate } from "../app/utils/index"

describe("test utility functions", () => {
    it("get rating in proper format", () => {
        expect(getRating(5.12312321312)).toBe("5.1")
        expect(getRating(0)).toBe("0.0")
        expect(getRating(9)).toBe("9.0")
    })

    it("getting proper date format", () => {
        expect(formatDate("2015-05-14")).toBe("May 14th 2015")
    })
})