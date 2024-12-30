import Swal from 'sweetalert2'; // Directly import Swal

const SuccessSwalAlert = (props) => {
    Swal.fire({
        title: props.title,
        text: props.text,
        icon: props.icon || 'success',
        confirmButtonText: props.confirmButtonText || 'Okay',
        background: '#e8f5e9',
        confirmButtonColor: '#2e7d32',
        iconColor: '#2e7d32',
    }).then((result) => {
        if (result.isConfirmed) {
            // After the alert is closed, navigate to the login page
            window.location.href = props.next_url;
        }
    });
};

export default SuccessSwalAlert;
