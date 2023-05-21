let id: number | string;

id = 10;
id = "10";

let any: any;

any = true;
any = "true";
any = "false";

let any1 = true;

any1 = true;
// any1 = "true";
// any1 = "false";
type PersonName = {
    name: string
}
type PersonAge = {
    age: number;
};
type PersonUnion = PersonName & PersonAge;

let persona4: PersonUnion = {
    name: "Juan",
    age: 28
}