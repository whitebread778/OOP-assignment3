import { Student } from "./Student";
import { Internship } from "./Internship";
import { CustomizedMap } from "./CustomizedMap";

const map = new CustomizedMap("map");
const student = new Student();
const internship = new Internship();
map.addMarker(student);
map.addMarker(internship);