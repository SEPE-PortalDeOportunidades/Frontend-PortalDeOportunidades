import api from '@/plugins/api'

class CursoService{

  async GetCursos() {
  try {
    const response = await api.get('/')
    return response.data
  }
  catch (error) {
    console.log('error in GetCurso', error)
    throw error
  }
}

async GetCursoById(cursoId) {
    try {
      const response = await api.get(`/api/?page=1&id=${cursoId}`)
      return response.data
    } catch (error) {
      console.log('error in GetCursoById', error)
      throw error
    }
  }

async CreateCurso(newCurso) {
    try {
      const response = await api.post(`/api/`, newCurso)
      return response.data
    } catch (error) {
      console.log('error in createCurso', error)
      throw error
    }
  }

  async UpdateCurso(curso) {
    try {
      const response = await api.put(`/api/${curso.id}/`, curso)
      return response.data
    } catch (error) {
      console.log('error in updateCurso', error)
      throw error
    }
  }

  async DeleteCurso(id) {
    try {
      const response = await api.delete(`/api/${id}/`)
      return response.data
    } catch (error) {
      console.log('error in deleteCurso', error)
      throw error
    }
  }

}

export default new CursoService();
