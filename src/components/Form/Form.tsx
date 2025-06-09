import { Container, ContainerSucces } from './styles'
import { toast, ToastContainer } from 'react-toastify'
import { useEffect, useRef, useState } from 'react'
import validator from 'validator'
import emailjs from '@emailjs/browser'

export function Form() {
  const [validEmail, setValidEmail] = useState(false)
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement | null>(null)

  function verifyEmail(email: string) {
    setValidEmail(validator.isEmail(email))
  }

  useEffect(() => {
    if (submitted) {
      toast.success('Email successfully sent!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      })
    }
  }, [submitted])

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!formRef.current) return

    emailjs
      .sendForm(
        'service_byj3j6o',     // 👈 Replace with your EmailJS service ID
        'template_p1pt0ov',    // 👈 Replace with your EmailJS template ID
        formRef.current,
        '-6rtBy5nPljuARXj_'      // 👈 Replace with your EmailJS public key
      )
      .then(
        () => {
          setSubmitted(true)
          setIsSubmitting(false)
        },
        (error) => {
          console.error('FAILED...', error)
          toast.error('Failed to send email.')
          setIsSubmitting(false)
        }
      )
  }

  if (submitted) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    )
  }

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form ref={formRef} onSubmit={sendEmail}>
        <input
          placeholder="Email"
          type="email"
          name="user_email"
          onChange={(e) => verifyEmail(e.target.value)}
          required
        />
        <textarea
          required
          placeholder="Send a message to get started."
          name="message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          disabled={isSubmitting || !validEmail || !message}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  )
}














// import { Container, ContainerSucces } from './styles'
// import { useForm, ValidationError } from '@formspree/react'
// import { toast, ToastContainer } from 'react-toastify'
// import ReCAPTCHA from 'react-google-recaptcha'
// import { useEffect, useState } from 'react'
// import validator from 'validator'

// export function Form() {
//   const [state, handleSubmit] = useForm('xknkpqry')
//   const [validEmail, setValidEmail] = useState(false)
//   const [message, setMessage] = useState('')
//   function verifyEmail(email: string) {
//     if (validator.isEmail(email)) {
//       setValidEmail(true)
//     } else {
//       setValidEmail(false)
//     }
//   }
//   useEffect(() => {
//     if (state.succeeded) {
//       toast.success('Email successfully sent!', {
//         position: toast.POSITION.BOTTOM_LEFT,
//         pauseOnFocusLoss: false,
//         closeOnClick: true,
//         hideProgressBar: false,
//         toastId: 'succeeded',
//       })
//     }
//   })
//   if (state.succeeded) {
//     return (
//       <ContainerSucces>
//         <h3>Thanks for getting in touch!</h3>
//         <button
//           onClick={() => {
//             window.scrollTo({ top: 0, behavior: 'smooth' })
//           }}
//         >
//           Back to the top
//         </button>
//         <ToastContainer />
//       </ContainerSucces>
//     )
//   }
//   return (
//     <Container>
//       <h2>Get in touch using the form</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           placeholder="Email"
//           id="email"
//           type="email"
//           name="email"
//           onChange={(e) => {
//             verifyEmail(e.target.value)
//           }}
//           required
//         />
//         <ValidationError prefix="Email" field="email" errors={state.errors} />
//         <textarea
//           required
//           placeholder="Send a message to get started."
//           id="message"
//           name="message"
//           onChange={(e) => {
//             setMessage(e.target.value)
//           }}
//         />
//         <ValidationError
//           prefix="Message"
//           field="message"
//           errors={state.errors}
//         />
//         <button
//           type="submit"
//           disabled={state.submitting || !validEmail || !message}
//         >
//           Submit
//         </button>
//       </form>
//       <ToastContainer />
//     </Container>
//   )
// }
