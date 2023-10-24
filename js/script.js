function validation() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pesan = document.getElementById("message").value;
    let genderMale = document.getElementById("male").checked;
    let genderFemale = document.getElementById("female").checked;
    let agree = document.getElementById("agree").checked;

    // Cek Jika Nama Kosong
    if (name == "") {
        alert('Please input your Full Name!');
        return false;
    }

    // Cek Jika Email Kosong
    if (email == "") {
        alert('Please input your Email Address!');
        return false;
    }


    // Cek Jika Pesan Kosong
    if (pesan == "") {
        alert('Please input your Message!');
        return false;
    }

    // Cek jika gender belum dipilih
    if (genderMale == false && genderFemale == false) {
        alert('Please select your Gender!');
    }

    // Cek jika checklist belum dicentang
    if (agree == false) {
        alert('Please click agreement box!');
        return false;
    }

    // Jika Nama Kurang dari 5
    if (name.length < 5) {
        alert('Your Full Name length must be atleast 5 characters');
        return false;
    }

    // Cek Jika Pesan Kurang dari 10 huruf
    if (pesan.length < 10) {
        alert('Your Message must be atleast 10 characters');
        return false;
    }

    // Jika Nama Lebih dari 30 huruf
    if (name.length > 30) {
        alert('Your Full name length must not exceed 15 characters');
        return false;
    }

}