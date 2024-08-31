function validateForm() {
    var fn = document.forms["myForm"]["fname"].value;
    var ln = document.forms["myForm"]["lname"].value;
    var mail = document.forms["myForm"]["email"].value;
    var no = document.forms["myForm"]["no"].value;
    var select = document.getElementById("opt").value;
    var zip = document.getElementById("zip").value;
    var dn = document.getElementById("domainname").value;

    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var regPhone = /^\d{10}$/; // Validates a 10-digit phone number
    var regName = /^[A-Za-z\s]+$/; // Validates names with alphabets and spaces only
    var regzip = /^\d{6}$/;
    var regDomain = /^[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,6}$/i;

    if (!regName.test(fn)) {
        alert("Kindly enter a valid First Name (letters and spaces only)!");
        return false;
    }

    if (!regName.test(ln)) {
        alert("Kindly enter a valid Last Name (letters and spaces only)!");
        return false;
    }

    if (mail == "" || !regEmail.test(mail)) {
        alert("Please enter a valid e-mail address.");
        return false;
    }

    if (!regPhone.test(no)) {
        alert("Please enter a valid 10-digit phone number!");
        return false;
    }

    if (select == "") {
        alert("Please select an option!");
        return false;
    }

    if (!regzip.test(zip)) {
        alert("Please enter a valid 6-digit zip code!");
        return false;
    }

    if (!regDomain.test(dn)) {
        alert("Please enter a valid domain name!");
        return false;
    }

    alert("Details Submitted!");
    return true;
}
