import axios from 'axios';
import create from 'zustand'
import useUtilityStore from './UtilityStore';
import { Toastr } from '../utils/UtilityFunctions';
import { kuPostcardDetails, postcards_data_url } from '../utils/Url';
import i18next, { t } from 'i18next';

const { setLoading } = useUtilityStore.getState()

const usePostcardStore = create((set, get) => ({
  selected_tab: -1,
  setSelectedTab: (tab) => set({ selected_tab: tab }),
  postcards_data: {},
  setPostCardsData: (data) => {
    // console.log('data', data.categories);
    set({ postcards_data: data })
    set({ postcards: data.post_cards.data })
    set({ categories: data.categories })
    set({ paginationInfo: { current_page: data.post_cards.current_page, last_page: data.post_cards.last_page } });
  },
  postcards: [],
  setPostCards: (data) => set({ postcards: data }),
  categories: [],
  setCategories: (data) => set({ categories: data }),
  paginationInfo: {
    current_page: 1,
    last_page: 1,
  },
  setPaginationInfo: (data) => set({ paginationInfo: data }),
  is_pagination_loading: false,
  setIsPaginationLoading: (data) => set({ is_pagination_loading: data }),
  postcard_details: {},
  setPostCardDetails: (data) => set({ postcard_details: data }),
  related_cards: [],
  setRelatedCards: (data) => set({ related_cards: data }),
  search_key: '',
  setSearchKey: (key) => set({ search_key: key }),
  price_range_value: [0, 1000],
  setPriceRangeValue: (value) => set({ price_range_value: value }),
  is_price_range_applied: false,
  setIsPriceRangeApplied: (value) => set({ is_price_range_applied: value }),
}));



/* 
 # # "min_price": 250
 # # "max_price": 500
*/

export const getPostcardData = async (id = null, shop_id = null, search = null, min_price = null, max_price = null) => {
  try {
    const { setPostCardsData } = usePostcardStore.getState();

    setLoading(true)
    const params = {};

    if (id) params.categories = [id];
    if (shop_id) params.shop_id = shop_id;
    if (search) params.search = search;
    if (min_price) {
      params.min_price = min_price;
      params.max_price = max_price;
    }

    console.log('params', params);

    const res = await axios.get(postcards_data_url + "?take=20", {
      params: params,
    });
    console.log('getPostcardData: ', res.data);

    if (res.data.success) {
      setPostCardsData(res.data.data);
    } else {
      Toastr({ message: res.data.message, type: 'error' })
    }
    setLoading(false);
  } catch (error) {
    console.log('getPostcardData: ', error);
    Toastr({ message: t('An error occurred!'), type: 'error' })
    setLoading(false)
  }
}

export const getPostcardPaginateData = async (shop_id = null, search = null) => {
  const { paginationInfo, setPostCards, setPaginationInfo, setIsPaginationLoading, postcards, selected_tab } = usePostcardStore.getState();

  if (paginationInfo.current_page >= paginationInfo.last_page) return;

  try {
    setIsPaginationLoading(true);
    const params = {};
    if (selected_tab !== -1) params.categories = [selected_tab];
    if (shop_id) params.shop_id = shop_id;
    if (search) params.search = search;

    console.log('params', params);

    const res = await axios.get(postcards_data_url + "?page=" + (paginationInfo.current_page + 1) + "&take=10", {
      params: params,
    });
    console.log('getPostcardPaginateData: ', res.data);
    if (res.data.success) {
      console.log('new cards', [...postcards, ...res.data.data.post_cards.data]);
      setPostCards([...postcards, ...res.data.data.post_cards.data]);
      setPaginationInfo({ current_page: res.data.data.post_cards.current_page, last_page: res.data.data.post_cards.last_page });
    } else {
      Toastr({ message: res.data.message, type: 'error' })
    }
    setIsPaginationLoading(false);
  } catch (error) {
    console.log('getPostcardPaginateData: ', error);
    Toastr({ message: t('An error occurred!'), type: 'error' })
    setIsPaginationLoading(false)
  }
}

export const getPostcardDetailsData = async (id = null) => {
  try {

    if (!id) {
      Toastr({ message: t('Invalid Card!'), type: 'warning' })
      return;
    }
    const { setPostCardDetails, setRelatedCards } = usePostcardStore.getState();

    setLoading(true)

    const res = await axios.get(kuPostcardDetails, { params: { id: id } });
    console.log('getPostcardDetailsData: ', res.data);

    if (res.data.success) {
      setPostCardDetails(res.data.data.post_card);
      setRelatedCards(res.data.data.related_card);
      console.log('related cards', res.data.data.related_card);
    } else {
      Toastr({ message: res.data.message, type: 'error' })
    }
    setLoading(false);
  } catch (error) {
    console.log('getPostcardDetailsData: ', error);
    Toastr({ message: t('An error occurred!'), type: 'error' })
    setLoading(false)
  }
}


export default usePostcardStore