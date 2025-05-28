import two_crystal_balls from "@code/TwoCrystalBalls";

test("two crystal balls", function () {
    const arrLen = 10000
    let idx = Math.floor(Math.random() * arrLen);
    const data = new Array(arrLen).fill(false);

    for (let i = idx; i < arrLen; ++i) {
        data[i] = true;
    }

    expect(two_crystal_balls(data)).toEqual(idx);
    expect(two_crystal_balls(new Array(821).fill(false))).toEqual(-1);
});

