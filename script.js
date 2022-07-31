const doughnut = document.getElementById('doughnut');

new Chart(doughnut, {
    type: 'doughnut',
    data: {
        labels: ['12345678, broj koriscenja (u mil.)', 'password, broj koriscenja (u mil.)', '123456, broj koriscenja (u mil.)', 'password1, broj koriscenja (u mil.)', '12345789, broj koriscenja (u mil.)', '12345, broj koriscenja (u mil.)', 'qwerty, broj koriscenja (u mil.)'],
        datasets: [
            {
                label: 'Najkoriscenije lozinke (u milionima)',
                data: [3.4, 1.7, 0.9, 0.8, 0.6, 0.5, 0.4],
                backgroundColor: [
                    'rgba(52, 235, 143, 1)',
                    'rgba(52, 0, 143, 1)',
                    'rgba(52, 235, 0, 1)',
                    'rgba(0, 235, 143, 1)',
                    'rgba(255, 235, 143, 1)',
                    'rgba(52, 235, 60, 1)',
                    'rgba(20, 20, 100, 1)'
                ]
            }
        ]
    }
});