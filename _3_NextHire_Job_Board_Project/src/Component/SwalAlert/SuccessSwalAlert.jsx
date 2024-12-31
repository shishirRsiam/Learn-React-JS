import Swal from 'sweetalert2';

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
            window.location.href = props.next_url;
        }
    });
};

export default SuccessSwalAlert;
