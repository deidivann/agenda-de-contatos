document.addEventListener("DOMContentLoaded", function() {

    var form = document.getElementById("seuFormulario");
    var nameInput = document.getElementById("seuNome");
    var phoneInput = document.getElementById("seuNumero");
    var table = document.getElementById("contact-table");

    document.getElementById("addcontato").addEventListener("click", function() {

        var name = nameInput.value;
        var phone = phoneInput.value;

        if (name === "" || phone === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        var newRow = table.insertRow(table.rows.length);
        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);
        cell1.innerHTML = name;
        cell2.innerHTML = phone;

        nameInput.value = "";
        phoneInput.value = "";
    });
});
