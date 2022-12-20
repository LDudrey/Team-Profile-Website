const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an Intern object with 'name' string, 'id' number, 'email' string from Employee class adding 'school' name property", () => {
            const employee = new Intern('Sarah', 1, 'sarah@gmail.com', 'UTSA');

            expect(employee.school).toEqual(expect.any(String));
        });
    });

    describe("getSchool", () => {
        it("should add a school name to the 'school' property", () => {
            const employee = new Intern('Sarah', 1, 'sarah@gmail.com', 'UTSA');

            expect(employee.getSchool()).toEqual(expect.any(String));
        })
    })

    describe("getRole", () => {
        it("should return the role", () => {
            const employee = new Intern('Sarah', 1, 'sarah@gmail.com', 'UTSA');

            expect(employee.getRole()).toEqual("Intern");
        })
    })

});