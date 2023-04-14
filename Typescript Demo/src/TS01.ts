const firstname: string = "Manoj";

console.log(`Heloo ${firstname}`);

let arr: any[] = [1, "M"];
arr.push("1");
console.log(arr);

let tuples: [string, number][] = [];

tuples.push(["Manoj", 21]);

console.log(typeof tuples);

let nums: readonly number[] = [1, 2, 3, 4];
// nums.push(4);
console.log(nums);
