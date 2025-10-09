import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useStorage } from '@vueuse/core'
import EstagioService from '@/services/EstagioService'

export const useEstagioStore = defineStore('estagio', () => {
  const state = useStorage('estagioStorage', {
    estagios: [],
    selectedEstagio: 1,
    estagioById: null,
    loading: false,
    error: null
  })

  const estagios = computed(() => state.value.estagios)
  const estagioById = computed(() => state.value.estagioById)
  const selectedEstagio = computed(() => state.value.selectedEstagio)

  const GetEstagios = async () => {
    try {
      state.value.loading = true
      state.value.error = null
      const response = await EstagioService.GetEstagios()
      state.value.estagios = response
      return response
    } catch (error) {
      state.value.error = 'Erro ao buscar estágios'
      console.error(error)
    } finally {
      state.value.loading = false
    }
  }

  const GetEstagioById = async (estagioId) => {
    try {
      state.value.loading = true
      state.value.error = null
      const response = await EstagioService.GetEstagioById(estagioId)
      state.value.estagioById = response
      return response
    } catch (error) {
      state.value.error = 'Erro ao buscar estágio'
      console.error(error)
    } finally {
      state.value.loading = false
    }
  }

  const CreateEstagio = async (newEstagio) => {
    try {
      state.value.loading = true
      const response = await EstagioService.CreateEstagio(newEstagio)
      state.value.estagios.push(response)
      state.value.selectedEstagio = response.id
      return response
    } catch (error) {
      state.value.error = 'Erro ao criar estágio'
      console.error(error)
    } finally {
      state.value.loading = false
    }
  }

  const UpdateEstagio = async (estagio) => {
    try {
      state.value.loading = true
      const index = state.value.estagios.findIndex((s) => s.id === estagio.id)
      if (index !== -1) {
        const updatedEstagio = await EstagioService.UpdateEstagio(estagio)
        state.value.estagios[index] = updatedEstagio
        return updatedEstagio
      }
    } catch (error) {
      state.value.error = 'Erro ao atualizar estágio'
      console.error(error)
    } finally {
      state.value.loading = false
    }
  }

  const DeleteEstagio = async (id) => {
    try {
      state.value.loading = true
      const index = state.value.estagios.findIndex((s) => s.id === id)
      if (index !== -1) {
        await EstagioService.DeleteEstagio(id)
        state.value.estagios.splice(index, 1)
        return true
      }
      return false
    } catch (error) {
      state.value.error = 'Erro ao deletar estágio'
      console.error(error)
    } finally {
      state.value.loading = false
    }
  }

  return {
    state,
    estagios,
    estagioById,
    selectedEstagio,
    GetEstagios,
    GetEstagioById,
    CreateEstagio,
    UpdateEstagio,
    DeleteEstagio
  }
})
