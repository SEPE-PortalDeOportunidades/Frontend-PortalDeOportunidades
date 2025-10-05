import api from '@/plugins/api'

class OportunidadeService{

  async GetOportunidades() {
  try {
    const response = await api.get('/')
    return response.data
  }
  catch (error) {
    console.log('error in GetOportunidades', error)
    throw error
  }
}

async GetOportunidadeById(oportunidadeId) {
    try {
      const response = await api.get(`/api/?page=1&id=${oportunidadeId}`)
      return response.data
    } catch (error) {
      console.log('error in GetOportunidadeById', error)
      throw error
    }
  }

async CreateOportunidade(newOportunidade) {
    try {
      const response = await api.post(`/api/`, newOportunidade)
      return response.data
    } catch (error) {
      console.log('error in createOportunidade', error)
      throw error
    }
  }

  async UpdateOportunidade(oportunidade) {
    try {
      const response = await api.put(`/api/${oportunidade.id}/`, oportunidade)
      return response.data
    } catch (error) {
      console.log('error in updateOportunidade', error)
      throw error
    }
  }

  async DeleteOportunidade(id) {
    try {
      const response = await api.delete(`/api/${id}/`)
      return response.data
    } catch (error) {
      console.log('error in deleteOportunidade', error)
      throw error
    }
  }

}

export default new OportunidadeService();
