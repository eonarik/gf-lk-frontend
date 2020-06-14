import { remove } from '@/apis/favourites';

export default ({ dispatch }, id) => remove(id).then(() => dispatch('getFavouritesTotal'));
