const dateInput = document.getElementById('dateInput');
const dateInput2 = document.getElementById('dateInput2');

function showPicker() {
    datePicker.show();
}

function showPicker2() {
    datePicker2.show();
}

const datePicker = new Pikaday({
    field: dateInput,
    format: 'YYYY-MM-DD',
    onSelect: function(date) {
        dateInput.value = datePicker.toString();
    }
})

const datePicker2 = new Pikaday({
    field: dateInput2,
    format: 'YYYY-MM-DD',
    onSelect: function(date) {
        dateInput2.value = datePicker2.toString();
    }
})