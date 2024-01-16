function Reserve() {
    let name = document.getElementById('fullname').value;
    let phone = document.getElementById("phone").value; // Make sure you have an input with id "phone"
    let selectedDate = document.getElementById('datepick').value;
    let dateString = String(selectedDate);
    let msg = name + "\n, " + "with phone number : " +  phone + "," + "\nWith Date : " + dateString + ", Want to make a Reservation";
    let url = "https://wa.me/48690459063";

    if (name === "") {
        alert("you have to fill your fullname");
    } else if (phone === "") {
        alert("you have to fill your Phone Number");
    } else if (dateString === "") {
        alert("Please Pick a date of reservation");
    } else {
        let end_url = `${url}?text=${msg}`;
        window.open(end_url, '_blank'); // Open in a new tab or window
    }
}