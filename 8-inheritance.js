//commom class for all the classes
class TeamMember {
    name;
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {
    groupSupportTime;
    designation = 'Support Web Dev';
    constructor(name, address, time) {
        super(name, address)
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

class StudentCare extends TeamMember {
    designation = 'Care Web Dev';
    buildARoutine(student) {
        console.log(this.name, 'Build a routine for', student);
    }
}

class NeptuneDev extends TeamMember {
    codeEditor;
    designation = 'Neptune App Dev';
    constructor(name, address, editor) {
        super(name, address);
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version);
    }
}


/* ALL CLASSES

class Support {
    name;
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    role = 'Support Web Dev';
    startSession() {
        console.log(this.name, 'Start a support Session');
    }
}
class StudentCare {
    name;
    designation = 'Student Care Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    builARoutine(student) {
        console.log(this.name, 'Build A Routin', student);
    }
}
class NeptuneDev {
    name;
    designation = 'Student Care Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    releaseApp(version) {
        console.log(this.name, 'Release App Version', version);
    }
}
*/

const aamir = new Support('Aamir Khan', 'BD', 11);
const salman = new Support('Solaiman Khan', 'Dubai', 4);
const sharuk = new Support('SRK Khan', 'Dubai', 9);
const akshay = new Support('Akshay Kumar', 'Dubai', 11);

const alia = new StudentCare('Alia Bhatt', 'Mumbai');
const ash = new NeptuneDev('Ash', 'Mumbai', 'Android studio');
ash.releaseApp('1.4.5');
console.log(ash.name);