import { defineStore } from 'pinia'
import { computed } from 'vue'
import EditalService from '@/services/EditalService'
import { useStorage } from '@vueuse/core'

export const useEditalStore = defineStore('edital', () => {
  const state = useStorage('editalStorage', {
    editais: [],
    editalById: null,
    selectedEdital: null,
    loading: false,
    error: null,
  })

  // acessar dados reativos //
  const editais = computed(() => state.value.editais)
  const editalById = computed(() => state.value.editalById)
  const selectedEdital = computed(() => state.value.selectedEdital)

  //  Buscar editais gerais //
  const GetEditais = async () => {
    try {
      state.value.loading = true
      state.value.error = null
      const response = await EditalService.GetEditais()
      state.value.editais = response
      return response
    } catch (error) {
      console.error('Erro em GetEditais:', error)
      state.value.error = error
      return 'Erro ao buscar editais'
    } finally {
      state.value.loading = false
    }
  }

  //  Buscar edital por ID //
  const GetEditalById = async (editalId) => {
    try {
      state.value.loading = true
      const response = await EditalService.GetEditalById(editalId)
      state.value.editalById = response
      return response
    } catch (error) {
      console.error('Erro em GetEditalById:', error)
      state.value.error = error
      return 'Erro ao buscar edital'
    } finally {
      state.value.loading = false
    }
  }

  //  Criar novo edital //
  const CreateEdital = async (newEdital) => {
    try {
      const response = await EditalService.CreateEdital(newEdital)
      state.value.editais.push(response)
      state.value.selectedEdital = response.id
      return response
    } catch (error) {
      console.error('Erro em CreateEdital:', error)
      state.value.error = error
      return 'Erro ao criar edital'
    }
  }

  //  Atualizar edital //
  const UpdateEdital = async (edital) => {
    try {
      const index = state.value.editais.findIndex((e) => e.id === edital.id)
      if (index !== -1) {
        const updatedEdital = await EditalService.UpdateEdital(edital)
        state.value.editais[index] = updatedEdital
        return updatedEdital
      }
      return null
    } catch (error) {
      console.error('Erro em UpdateEdital:', error)
      state.value.error = error
      return 'Erro ao atualizar edital'
    }
  }

  // Deletar edital //
  const DeleteEdital = async (id) => {
    try {
      const index = state.value.editais.findIndex((e) => e.id === id)
      if (index !== -1) {
        await EditalService.DeleteEdital(id)
        state.value.editais.splice(index, 1)
        return true
      }
      return false
    } catch (error) {
      console.error('Erro em DeleteEdital:', error)
      state.value.error = error
      return 'Erro ao deletar edital'
    }
  }

  // retorno //
  return {
    state,
    editais,
    editalById,
    selectedEdital,
    GetEditais,
    GetEditalById,
    CreateEdital,
    UpdateEdital,
    DeleteEdital,
  }
})
