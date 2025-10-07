import api from '@/plugins/api'

class EventoService{

  async GetEventos() {
  try {
    const response = await api.get('/')
    return response.data
  }
  catch (error) {
    console.log('error in GetEventos', error)
    throw error
  }
}

async GetEventoById(eventoId) {
    try {
      const response = await api.get(`/api/?page=1&id=${eventoId}`)
      return response.data
    } catch (error) {
      console.log('error in GetEventoById', error)
      throw error
    }
  }

async CreateEvento(newEvento) {
    try {
      const response = await api.post(`/api/`, newEvento)
      return response.data
    } catch (error) {
      console.log('error in createEvento', error)
      throw error
    }
  }

  async UpdateEvento(evento) {
    try {
      const response = await api.put(`/api/${evento.id}/`, evento)
      return response.data
    } catch (error) {
      console.log('error in updateEvento', error)
      throw error
    }
  }

  async DeleteEvento(id) {
    try {
      const response = await api.delete(`/api/${id}/`)
      return response.data
    } catch (error) {
      console.log('error in deleteEvento', error)
      throw error
    }
  }

}

export default new EventoService();
