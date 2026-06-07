/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form')
const contactMessage = document.getElementById('contact-message')

// ✅ Initialize EmailJS (REQUIRED)
emailjs.init('zT_yXH-_sHeWILXSR')

const sendEmail = (e) => {
    e.preventDefault()

    contactMessage.textContent = 'Sending... ⏳'

    emailjs.sendForm(
        'service_4sbv7ja',
        'template_7ig9bqh',
        contactForm
    )
    .then(() => {
        contactMessage.textContent = 'Message sent successfully ✅'
        contactMessage.style.color = 'green'

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    })
    .catch((error) => {
        console.error('EmailJS Error:', error)

        contactMessage.textContent = 'Message not sent ❌'
        contactMessage.style.color = 'red'
    })
}

// ✅ Prevent crash if form not found
if (contactForm) {
    contactForm.addEventListener('submit', sendEmail)
}
