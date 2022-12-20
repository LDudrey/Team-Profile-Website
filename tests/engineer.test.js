const Engineer = require("../lib/Engineer");


describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an Engineer object with 'name' string, 'id' number, 'email' string from Employee class adding 'github' id property", () => {
            const employee = new Engineer('Sarah', 1, 'sarah@gmail.com', 'Sarah01');

            expect(employee.gitHub).toEqual(expect.any(String));
        });
    });

    describe("getGitHub", () => {
        it("should add a github name to the 'github' property", () => {
            const employee = new Engineer('Sarah', 1, 'sarah@gmail.com', 'Sarah01');

            expect(employee.getGitHub()).toEqual(expect.any(String));
        })
    })

    describe("getRole", () => {
        it("should return the role", () => {
            const employee = new Engineer('Sarah', 1, 'sarah@gmail.com', 'Sarah01');

            expect(employee.getRole()).toEqual("Engineer");
        })
    })

});