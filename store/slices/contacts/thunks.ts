import { getContactsAPI } from "../../../services/contacts";
import { setContacts, startLoadingContacts } from ".";

export const getContacts = (page = 1) => {
  return async(dispatch: any) => {
    dispatch(startLoadingContacts());
    const data: any = await getContactsAPI(page);
    dispatch(setContacts({
      results: data?.data?.results,
      pagination: {
        page: data?.data?.currentPage,
        totalPages: data?.data?.totalPages,
        totalCount: data?.data?.count,
      },
    }));

  }
}