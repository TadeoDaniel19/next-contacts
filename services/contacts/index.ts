import { instanceAPI } from "../axiosConfig"
import { Contact } from './interface';

export const getContactsAPI = (page = 1) => {
  return instanceAPI.get(`/contacts?page=${page}`)
}

export const getOneContactAPI = (id: string | any) => {
  return instanceAPI.get(`/contacts/${id}`)
}

export const createContactsAPI = (contact: Contact) => {
  return instanceAPI.post(`/contacts`, contact)
}

export const editContactAPI = (contact: Contact, id: string | any) => {
  return instanceAPI.put(`/contacts/${id}`, contact)
}

export const deleteOneContactAPI = (id: string | any) => {
  return instanceAPI.delete(`/contacts/${id}`)
}