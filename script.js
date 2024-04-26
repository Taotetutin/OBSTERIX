document.getElementById('gestationCalculator').addEventListener('submit', function(event) {
    event.preventDefault();
    const lastMenstrualPeriod = new Date(document.getElementById('lastMenstrualPeriod').value);
    if(isNaN(lastMenstrualPeriod.getTime())) {
        alert('Por favor ingresa una fecha válida.');
        return;
    }
    const gestationalAge = getGestationalAge(lastMenstrualPeriod, new Date());
    const conceptionDate = addDays(lastMenstrualPeriod, 14);
    const dueDate = addDays(lastMenstrualPeriod, 280);
    const week20 = addDays(lastMenstrualPeriod, 140);
    const week30 = addDays(lastMenstrualPeriod, 210);
    const week34 = addDays(lastMenstrualPeriod, 238);

    document.getElementById('gestationalAge').textContent = `${gestationalAge.weeks} semanas y ${gestationalAge.days} días`;
    document.getElementById('conceptionDate').textContent = formatDate(conceptionDate);
    document.getElementById('dueDate').textContent = formatDate(dueDate);
    document.getElementById('week20').textContent = formatDate(week20);
    document.getElementById('week30').textContent = formatDate(week30);
    document.getElementById('week34').textContent = formatDate(week34);
});

function getGestationalAge(startDate, endDate) {
    const diffTime = Math.abs(endDate - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return {
        weeks: Math.floor(diffDays / 7),
        days: diffDays % 7
    };
}

function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function formatDate(date) {
    return date.toLocaleDateString('es-CL', { day: '2-digit', month: '2-digit', year: 'numeric' });
}
