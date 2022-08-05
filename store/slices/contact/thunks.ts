import { getOneContactAPI } from "../../../services/contacts";
import { setContact, startLoadingContact } from ".";

export const getContact = (id: string | any) => {
  return async(dispatch: any) => {
    dispatch(startLoadingContact());
    const data: any = await getOneContactAPI(id);
    dispatch(setContact({
      contact: data?.data,
    }));

  }
}