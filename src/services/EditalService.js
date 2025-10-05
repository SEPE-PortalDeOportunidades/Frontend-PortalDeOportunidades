import api from '@/plugins/api'

class EditalService{

  async GetEditais() {
  try {
    const response = await api.get('/')
    return response.data
  }
  catch (error) {
    console.log('error in GetEditais', error)
    throw error
  }
}

async GetEditalById(eventoId) {
    try {
      const response = await api.get(`/api/?page=1&id=${eventoId}`)
      return response.data
    } catch (error) {
      console.log('error in GetEditalById', error)
      throw error
    }
  }

async CreateEdital(newEdital) {
    try {
      const response = await api.post(`/api/`, newEdital)
      return response.data
    } catch (error) {
      console.log('error in createEdital', error)
      throw error
    }
  }

  async UpdateEdital(edital) {
    try {
      const response = await api.put(`/api/${edital.id}/`, edital)
      return response.data
    } catch (error) {
      console.log('error in updateEdital', error)
      throw error
    }
  }

  async DeleteEdital(id) {
    try {
      const response = await api.delete(`/api/${id}/`)
      return response.data
    } catch (error) {
      console.log('error in deleteEdital', error)
      throw error
    }
  }

}

export default new EditalService();
