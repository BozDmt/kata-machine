import ArrayList from "@code/ArrayList";
import { test_list } from "./myListTest";

test("array-list", function () {
    const list = new ArrayList/*<number>*/(3);
    test_list(list);
});
