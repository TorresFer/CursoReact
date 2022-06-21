import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {
    // 6. Controlled Inputs
    // 3. Gerenciamento de dados de input
    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')

    const [bio, setBio] = useState("")

    const [role, setRole] = useState("")

    const handleName = (e) => {
        setName(e.target.value)
    }

    console.log(name)
    console.log(email)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, bio, role)

    // Limpar form
    setName("")
    setEmail("")
    setBio("")
    }

    /*1. Criação do form */
    /* 5. Envio de form */
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Digite o seu nome" 
                    onChange={handleName}
                    value={name}
                />
            </div>

            {/*2. Label envolvendo input; depois manipulando o input com onChange de forma simples*/}
            <label>
                <span>E-mail:</span>
                <input 
                    type="email" 
                    name="email" 
                    placeholder='Digite o seu e-mail' 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </label>

            {/* 8. Textarea */}
            <label>
                <span>Bio:</span>
                <textarea 
                    name="bio" 
                    placeholder='Descrição do usuário' 
                    onChange={(e) => setBio(e.target.value)} 
                    value={bio}
                ></textarea>
            </label>

            {/*9. Select */}
            <label>
                <span>Função no sistema</span>
                <select name="role" onChange={(e) => setRole(e.target.value)}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm