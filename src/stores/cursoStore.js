import { defineStore } from 'pinia'
import { computed, reactive } from 'vue'
import CursoService from '@/services/CursoService'
import { useStorage } from '@vueuse/core'



export const useCursoStore = defineStore('curso', () => {
  const state = useStorage( 'cursoStorage', {
    cursos: [],
    selectedCurso: 1,
    cursoById: null,
  })


  const curso = computed(() => state.value.cursos)
  const cursoById = computed(() => state.value.cursoById)
  const selectedCurso = computed(() => state.value.selectedCurso)

  const GetCursos = async () => {
    try {
      state.value.loading = true
      state.value.error = null
      const response = await CursoService.GetCursos()
      state.value.cursos = response
      return response
    } catch (error) {
      return "Erro ao buscar cursos"
    }
  }

  const GetCursoById = async (cursoId) => {
    try {
      const response = await CursoService.GetCursoById(cursoId)
      state.value.cursoById = response
      return response
    } catch (error) {
      return "Erro ao buscar curso"
    }
  }

  const CreateCurso = async (newCurso) => {
    try {
      const response = await CursoService.CreateCurso(newCurso)
      state.value.cursos.push(response)
      state.value.selectedCurso = response.id
      return response
    } catch (error) {
      return "Erro ao criar curso"
    }
  }

  const UpdateCurso = async (curso) => {
    try {
      const index = state.value.cursos.findIndex((s) => s.id === curso.id)
      if (index !== -1) {
        const updatedCurso = await CursoService.UpdateCurso(curso)
        state.value.cursos[index] = updatedCurso
        return updatedCurso
      }
    } catch (error) {
      return "Erro ao atualizar curso"
    }
  }

  const DeleteCurso = async (id) => {
    try {
      const index = state.value.cursos.findIndex((s) => s.id === id)
      if (index !== -1) {
        await CursoService.DeleteCurso(id)
        state.value.cursos.splice(index, 1)
        return true
      }
      return false
    } catch (error) {
      return "Erro ao deletar curso"
    }
  }

    return {
      state,
      curso,
      cursoById,
      selectedCurso,
      GetCursos,
      GetCursoById,
      CreateCurso,
      UpdateCurso,
      DeleteCurso
    }
  })
