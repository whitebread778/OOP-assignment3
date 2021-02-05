import { Student } from "./Student"
import { Internship } from "./Internship"

export class CustomizedMap {
    private googleMap: google.maps.Map

    constructor(divID) {
        this.googleMap = new google.maps.Map(document.getElementById(divID), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }


    addMarker(pin: Student | Internship) {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: pin.location.latitude,
                lng: pin.location.longitude,
            },
        });

        if (pin instanceof Student) {
            this.markerMessage(marker, `Student Name:${pin.firstName} ${pin.lastName}`);
        } else {
            this.markerMessage(marker, `Welcome to ${pin.businessName}'s internship`);
        }
    }

    // addStudentMarker(student: Student) {
    //    new google.maps.Marker({
    //        map: this.googleMap,
    //        position: {
    //            lat: student.location.latitude,
    //            lng: student.location.longitude,
    //        },
    //    });
    //}
    
    //addInternshipMarker(internship: Internship) {
    //    new google.maps.Marker({
    //        map: this.googleMap,
    //        position: {
    //            lat: internship.location.latitude,
    //            lng: internship.location.longitude,
    //        }
    //    })
    //}

    private markerMessage(marker: google.maps.Marker, message: string): void {
        const infoWindow = new google.maps.InfoWindow({
            content: message,
        });

        marker.addListener("click", () => {
            infoWindow.open(this.googleMap, marker);
        });
    }
}
