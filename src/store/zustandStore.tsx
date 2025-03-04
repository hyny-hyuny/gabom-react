import { create } from 'zustand';
import {
  combine,
  createJSONStorage,
  devtools,
  persist,
} from 'zustand/middleware';

// interface State {
//   count: number;
//   name: string;
// }

// interface Action {
//   increase: () => void;
//   decrease: () => void;
//   getName: () => void;
// }

// type Store = State & Action;

const initialState = {
  count: 0,
  name: 'soo',
};

const useStore = create(
  devtools(
    persist(
      combine(
        initialState,

        (set, get) => {
          return {
            count: 0,
            name: 'soo',
            increase: () => {
              set(
                (state: { count: number }) => ({ count: state.count + 1 }),
                undefined,
                'store/increase'
              );
            },
            decrease: () => {
              set(
                (state: { count: number }) => ({ count: state.count - 1 }),
                undefined,
                'store/decrease'
              );
            },
            getName: () => get(),
          };
        }
      ),
      { name: 'soo', storage: createJSONStorage(() => sessionStorage) }
    )
  )
);

export default useStore;
