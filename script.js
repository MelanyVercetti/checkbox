const checkboxes = document.querySelectorAll('.checkbox');

const smart = document.getElementById('smart');
const beautiful = document.getElementById('beautiful');
const happy = document.getElementById('happy');

const checkYou = lastClick => {
    if (smart.checked && beautiful.checked && happy.checked) {
        if (smart === lastClick) {
            beautiful.checked = false;
        }
        if (beautiful === lastClick) {
            happy.checked = false;
        }
        if (happy === lastClick) {
            smart.checked = false;
        }
    }
};

checkboxes.forEach(checkbox => checkbox.addEventListener('change', e => checkYou(e.target)));