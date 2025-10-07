import api from '@/plugins/api'

class EstagioService{

  async GetEstagios() {
  try {
    const response = await api.get('/')
    return response.data
  }
  catch (error) {
    console.log('error in GetEstagios', error)
    throw error
  }
}

async GetEstagioById(estagioId) {
    try {
      const response = await api.get(`/api/?page=1&id=${estagioId}`)
      return response.data
    } catch (error) {
      console.log('error in GetEstagioById', error)
      throw error
    }
  }

async CreateEstagio(newEstagio) {
    try {
      const response = await api.post(`/api/`, newEstagio)
      return response.data
    } catch (error) {
      console.log('error in createEstagio', error)
      throw error
    }
  }

  async UpdateEstagio(estagio) {
    try {
      const response = await api.put(`/api/${estagio.id}/`, estagio)
      return response.data
    } catch (error) {
      console.log('error in updateEstagio', error)
      throw error
    }
  }

  async DeleteEstagio(id) {
    try {
      const response = await api.delete(`/api/${id}/`)
      return response.data
    } catch (error) {
      console.log('error in deleteEstagio', error)
      throw error
    }
  }

}

export default new EstagioService();
