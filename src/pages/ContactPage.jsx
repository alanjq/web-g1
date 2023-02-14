import React, { useState } from 'react';


function ContactPage() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const [data, setData] = useState({})

    const handleNameChange = ({ target }) => {
        setName(target.value)
    }

    const handleEmailChange = ({ value }) => setEmail(value)

    const handlePhoneChange = (value) => setPhone(value)

    // Armar payload
    const handleSubmit = () => {
        let payload = {
            name,
            email,
            phone,
            message
        }

        // Asignar el valor a data
        setData(payload)
    }

    return (
        <section className='contact'>
            <h1>Contacto</h1>

            <form>
                <div>
                    <label htmlFor="name">Nombre</label>
                    <input type="text" name="name" placeholder='Su nombre' onChange={handleNameChange} />
                </div>
                <div>
                    <label htmlFor="email">Correo</label>
                    <input type="text" name="email" placeholder='Correo'
                        onChange={({ target }) => handleEmailChange(target)} />
                </div>
                <div>
                    <label htmlFor="phone">Teléfono</label>
                    <input type="text" name="phone" placeholder='Teléfono' onChange={({ target }) => handlePhoneChange(target.value)} />
                </div>
                <div>
                    <label htmlFor="message">mensaje</label>
                    <textarea name='message' placeholder='Escriba su mensaje' onChange={({ target }) => setMessage(target.value)}></textarea>
                </div>
                <div>
                    <button type="button" onClick={handleSubmit}>Enviar</button>
                </div>
            </form>

            <div className='preview'>
                <span>
                    <label>Nombre:</label>
                    <span>{data.name}</span>
                </span>
                <span>
                    <label>Correo:</label>
                    <span>{data.email}</span>
                </span>
                <span>
                    <label>Teléfono:</label>
                    <span>{data.phone}</span>
                </span>
                <span>
                    <label>Mensaje:</label>
                    <span>{data.message}</span>
                </span>
            </div>
        </section>
    )
}
export default ContactPage
