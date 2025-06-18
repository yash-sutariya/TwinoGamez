import React from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const FormComponent = ({ url, customFields = {}, onSuccess, onError }) => {

    const submitForm = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        for (const key in customFields) {
            if (customFields.hasOwnProperty(key)) {
                formData.append(key, customFields[key]);
            }
        }

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams(formData).toString()
            });

            const data = await response.json();

            if (data.success) {
                Swal.fire({
                    icon: 'success',
                    title: 'Thank you for contacting us',
                    text: 'We will contact you soon.'
                });
                event.target.reset();
                if (onSuccess) onSuccess(data);
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Invalid Details',
                    text: 'Please enter valid details'
                });
                if (onError) onError(data);
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'An error occurred while sending your message',
            });
            console.error(error);
            if (onError) onError(error);
        }
    };

    return (
        <form onSubmit={submitForm}>
            <div>
                <input type="text" name="name" placeholder="Name" id="name"
                    className="form-control in-put" required />
            </div>
            <div>
                <input type="email" name="email" placeholder="Email" id="email"
                    className="form-control in-put" required />
            </div>
            <input type="hidden" name="subject" id="subject" value="FitIT" />
            <div>
                <input type="number" name="mobile" placeholder="Mobile" id="mobile"
                    className="form-control in-put" required />
            </div>
            <textarea name="messages" placeholder="Messages" id="messages"
                className="in-put" required />
            <button type="submit" className="submit-btn">Submit</button>
        </form>
    );
};

export default FormComponent;
