export class FeedbackAPIClient {
    constructor() {
        this.HEADERS_DEFAULT = {
            headers: {
                'Accept': 'application/json',
            }
        }
        this.HEADERS_JSON = {
            headers: {
                ...this.HEADERS_DEFAULT.headers,
                'Content-Type': 'application/json',
            }
        }
        this.URL_BASE = 'http://localhost:8080/feedbacks'
    }

    async getByGestorAndColaboradorId(gestorId, colaboradorId) {
        if (!gestorId || !colaboradorId) {
            throw new Error('Gestor ID e Colaborador ID são obrigatórios.')
        }
        
        try {
            const resposta = await fetch(
                    `${this.URL_BASE}/gestor/${gestorId}/colaborador/${colaboradorId}`, 
                    this.HEADERS_DEFAULT
                )
            
                return resposta.ok ? 
                await resposta.json() : false
        } catch (error) {
            console.error(error)
        }
    }

    async getByColaboradorId(colaboradorId) {
        if (!colaboradorId) {
            throw new Error('Colaborador ID obrigatório.')
        }

        try {
            const resposta = await fetch(
                `${this.URL_BASE}/colaborador/${colaboradorId}`,
                this.HEADERS_DEFAULT
            )

            return resposta.ok ? 
            await resposta.json() : false
        } catch (error) {
            console.error(error)
        }
    }

    async getById(id) {
        if (!id) {
            throw new Error('O Feeback ID é obrigatório.')
        }

        try {
            const resposta = await fetch(`${this.URL_BASE}/${id}`, this.HEADERS_DEFAULT)

            return resposta.ok ? 
            await resposta.json() : false
        } catch (error) {
            console.error(error)
        }
    }

    async post(feedback) {
        if (!feedback) {
            throw new Error('O Feeback é obrigatório.')
        }

        try {
            const resposta = await fetch(this.URL_BASE, {
                method: 'POST',
                ...this.HEADERS_JSON,
                body: JSON.stringify(feedback)
            })
            
           return resposta.ok ? 
           await resposta.json() : false
        } catch (error) {
            console.error(error)
        }
    }

    async put(id, feedback) {
        if (!id) {
            throw new Error('O Feeback ID é obrigatório.')
        }

        try {
            const resposta = await fetch(`${this.URL_BASE}/${id}`, {
                method: 'PUT',
                ...this.HEADERS_JSON,
                body: JSON.stringify(feedback)
            })

            return resposta.ok ? 
            await resposta.json() : false
        } catch (error) {
            console.error(error)
        }
    }

    async delete(id) {
        if (!id) {
            throw new Error('O Feeback ID é obrigatório.')
        }

        try {
            const resposta = await fetch(`${this.URL_BASE}/${id}`, {
                method: 'DELETE',
                ...this.HEADERS_DEFAULT
            })
            
            return resposta.ok ? 
            await resposta.text() : false
        } catch (error) {
            console.error(error)
        }
    }
}