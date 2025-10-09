import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useStorage } from '@vueuse/core'
import OportunidadeService from '@/services/OportunidadeService'

export const useOportunidadeStore = defineStore('oportunidade', () => {
  const state = useStorage('oportunidadeStorage', {
    oportunidades: [],
    selectedOportunidade: null,
    oportunidadeById: null,
  })

  const oportunidades = computed(() => state.value.oportunidades)
  const oportunidadeById = computed(() => state.value.oportunidadeById)
  const selectedOportunidade = computed(() => state.value.selectedOportunidade)

  const GetOportunidades = async () => {
    try {
      const response = await OportunidadeService.GetOportunidades()
      state.value.oportunidades = response
      return response
    } catch (error) {
      return 'Erro ao buscar oportunidades'
    }
  }

  const GetOportunidadeById = async (id) => {
    try {
      const response = await OportunidadeService.GetOportunidadeById(id)
      state.value.oportunidadeById = response
      return response
    } catch (error) {
      return 'Erro ao buscar oportunidade'
    }
  }

  const CreateOportunidade = async (newOportunidade) => {
    try {
      const response = await OportunidadeService.CreateOportunidade(newOportunidade)
      state.value.oportunidades.push(response)
      state.value.selectedOportunidade = response.id
      return response
    } catch (error) {
      return 'Erro ao criar oportunidade'
    }
  }

  const UpdateOportunidade = async (oportunidade) => {
    try {
      const index = state.value.oportunidades.findIndex((o) => o.id === oportunidade.id)
      if (index !== -1) {
        const updatedOportunidade = await OportunidadeService.UpdateOportunidade(oportunidade)
        state.value.oportunidades[index] = updatedOportunidade
        return updatedOportunidade
      }
    } catch (error) {
      return 'Erro ao atualizar oportunidade'
    }
  }

  const DeleteOportunidade = async (id) => {
    try {
      const index = state.value.oportunidades.findIndex((o) => o.id === id)
      if (index !== -1) {
        await OportunidadeService.DeleteOportunidade(id)
        state.value.oportunidades.splice(index, 1)
        return true
      }
      return false
    } catch (error) {
      return 'Erro ao deletar oportunidade'
    }
  }

  return {
    state,
    oportunidades,
    oportunidadeById,
    selectedOportunidade,
    GetOportunidades,
    GetOportunidadeById,
    CreateOportunidade,
    UpdateOportunidade,
    DeleteOportunidade,
  }
})
