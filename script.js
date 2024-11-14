
document.getElementById('dataForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
        name: formData.get('name'),
        mobile: formData.get('mobile'),
        qualification: formData.get('qualification'),
        address: formData.get('address')
    };

    fetch('https://script.google.com/macros/s/AKfycbymRxzf1Q7fpiOcUAALqttcf-xxLYtffiqlNNugGi2krZJVwDPIfO1PePbUhDvPPYT9Dw/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        alert('Data submitted successfully!');

        // Clear all fields after successful submission
        e.target.reset();
    }).catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});

