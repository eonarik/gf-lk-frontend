import { add } from '@/apis/favourites';

export default ({ dispatch }, id) => add(id).then(() => dispatch('getFavouritesTotal'));
