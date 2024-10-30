// Hide & Show Content Form
const containerForm = document.querySelector(".container-2");
const buttonEdit = document.querySelector("#btn-edit");
const buttonSubmit = document.querySelector("#btn-submit");
const buttonRemove = document.querySelector("#btn-remove");

buttonEdit.addEventListener('click', () => {
    
    if(containerForm.style.display === 'flex') {
        containerForm.style.display = 'none'
    } else {
        containerForm.style.display = 'flex'
    }

});

// Button untuk Submit data yang akan disimpan di localStorage
buttonSubmit.addEventListener('click', () => {

    let inputNama = document.querySelector('#form-nama');
    let inputRole = document.querySelector('#form-role');
    let inputAvailable = document.querySelector('#form-available');
    let inputUsia = document.querySelector('#form-usia');
    let inputLokasi = document.querySelector('#form-lokasi');
    let inputYearsExp = document.querySelector('#form-yearsExp');
    let inputEmail = document.querySelector('#form-email');

    const objectData = {
        nama : inputNama.value,
        role : inputRole.value,
        availability : inputAvailable.value,
        usia : inputUsia.value,
        lokasi : inputLokasi.value,
        yearsExperience : inputYearsExp.value,
        email : inputEmail.value,
    };

    localStorage.setItem ('data', JSON.stringify(objectData));
    
});

// Untuk menampilkan data Display dari localStorage
function displayData() {
    const dataStorage = JSON.parse(localStorage.getItem('data'));

    if(dataStorage) {
        // menampilkan data di display
        document.querySelector("#displayNama").innerHTML = dataStorage.nama || "Nama Anda";
        document.querySelector("#displayRole").innerHTML = dataStorage.role || "Role Anda";
        document.querySelector("#displayAvailable").innerHTML = dataStorage.availability || "-";
        document.querySelector("#displayAge").innerHTML = dataStorage.usia || "-";
        document.querySelector("#displayLocation").innerHTML = dataStorage.lokasi || "-";
        document.querySelector("#displayExp").innerHTML = dataStorage.yearsExperience || "-";
        document.querySelector("#displayEmail").innerHTML = dataStorage.email || "-";

        // menampilkan value pada input form sesuai data yang ada di display
        document.querySelector("#form-nama").value = dataStorage.nama;
        document.querySelector("#form-role").value = dataStorage.role;
        document.querySelector("#form-available").value = dataStorage.availability;
        document.querySelector("#form-usia").value = dataStorage.usia;
        document.querySelector("#form-lokasi").value = dataStorage.lokasi;
        document.querySelector("#form-yearsExp").value = dataStorage.yearsExperience;
        document.querySelector("#form-email").value = dataStorage.email;
    } 
};

// Button untuk menghapus data di localStorage
buttonRemove.addEventListener('click', () => {
    localStorage.removeItem('data');
    location.reload();
});


displayData();
window.onload = displayData;





