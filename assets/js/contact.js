/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // srviceID - templateID - #form - publicKey
    emailjs.sendForm ('service_6i5ee1c','template_7ig9bqh','#contact-form','XnAPwkDYU0PstIkv7')
        .then(() => {
            // Show Sent Message
            contactMessage.textContent = 'Message sent successfully ✅'

            // Remove Message after five seconds
            setTimeout(() => {
                contactMessage.textContent =''
            }, 5000)

            // Clear Input Fields
            contactForm.reset()

        }, () => {
            // Show error Message
            contactMessage.textContent = ' Message not sent (service error) ❌'
        })
}

contactForm.addEventListener ('submit', sendEmail)