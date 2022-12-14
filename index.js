const inquirer = require('inquirer');
const fs = require('fs');
const Profile = require("./lib/Employee");

const profile = new Profile();

profile.init();