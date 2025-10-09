import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useStorage } from '@vueuse/core'
import EventoService from '@/services/EventoService'

export const useEventoStore = defineStore('evento', () => {
  const state = useStorage('eventoStorage', {
    eventos: [],
    selectedEvento: null,
    eventoById: null,
  })

  const eventos = computed(() => state.value.eventos)
  const eventoById = computed(() => state.value.eventoById)
  const selectedEvento = computed(() => state.value.selectedEvento)

  const GetEventos = async () => {
    try {
      const response = await EventoService.GetEventos()
      state.value.eventos = response
      return response
    } catch (error) {
      return 'Erro ao buscar eventos'
    }
  }

  const GetEventoById = async (id) => {
    try {
      const response = await EventoService.GetEventoById(id)
      state.value.eventoById = response
      return response
    } catch (error) {
      return 'Erro ao buscar evento'
    }
  }

  const CreateEvento = async (newEvento) => {
    try {
      const response = await EventoService.CreateEvento(newEvento)
      state.value.eventos.push(response)
      state.value.selectedEvento = response.id
      return response
    } catch (error) {
      return 'Erro ao criar evento'
    }
  }

  const UpdateEvento = async (evento) => {
    try {
      const index = state.value.eventos.findIndex((e) => e.id === evento.id)
      if (index !== -1) {
        const updatedEvento = await EventoService.UpdateEvento(evento)
        state.value.eventos[index] = updatedEvento
        return updatedEvento
      }
    } catch (error) {
      return 'Erro ao atualizar evento'
    }
  }

  const DeleteEvento = async (id) => {
    try {
      const index = state.value.eventos.findIndex((e) => e.id === id)
      if (index !== -1) {
        await EventoService.DeleteEvento(id)
        state.value.eventos.splice(index, 1)
        return true
      }
      return false
    } catch (error) {
      return 'Erro ao deletar evento'
    }
  }

  return {
    state,
    eventos,
    eventoById,
    selectedEvento,
    GetEventos,
    GetEventoById,
    CreateEvento,
    UpdateEvento,
    DeleteEvento,
  }
})
