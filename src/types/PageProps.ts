import type { Dispatch, SetStateAction } from 'react';
import CurrentPage from './CurrentPage';

export default interface PageProps {
  setCurrentPage: Dispatch<SetStateAction<keyof typeof CurrentPage>>;
}
