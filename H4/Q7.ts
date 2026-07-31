interface Management {
  addStudent(): String;
  removeStudent(): String;
}
abstract class Institute {
  abstract getInstitutionType(): String;
}
class School extends Institute implements Management {
  studentCount: any = 0;
  addStudent(): String {
    this.studentCount++;
    return "Added Succesfully";
  }
  removeStudent(): String {
    if (this.studentCount !== 0) {
      this.studentCount--;
    } else {
      return "Cannot get Negative";
    }
    return "Removed Succesfully";
  }
  getInstitutionType(): String {
    return "Institution Type is School";
  }
  displayCount() {
    console.log(this.studentCount);
  }
}

class College extends Institute implements Management {
  studentCount: any = 0;
  addStudent(): String {
    this.studentCount++;
    return "Added Succesfully";
  }
  removeStudent(): String {
    if (this.studentCount !== 0) {
      this.studentCount--;
    } else {
      return "Cannot get Negative";
    }
    return "Removed Succesfully";
  }
  getInstitutionType(): String {
    return "Institution Type is College";
  }
  displayCount() {
    console.log(this.studentCount);
  }
}

const sch = new School();
console.log(sch.addStudent());

sch.displayCount();

const clg = new College();
clg.removeStudent();
clg.displayCount();
