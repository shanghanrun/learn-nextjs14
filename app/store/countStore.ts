import {create} from 'zustand'

interface CountState {
  count: number;
  addCount: () => void;
  setCount: (count: number) => void;
}

const countStore = create((set,get)=>({
	count:0,
	addCount:()=>set((state)=>({ count: state.count +1})),
	setCount:(count)=>set({count}),
}))
// const countStore = create<CountState>((set)=>({
// 	count:0,
// 	addCount:()=>set((state)=>({ count: state.count +1})),
// 	setCount:(count)=>set({count}),
// }))

export default countStore;