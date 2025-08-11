import { createSlice } from '@reduxjs/toolkit'

export interface Post {
  id: string
  title: string
  content: string
}

const initialState: Post[] = [
  {
    id: '1',
    title: 'First post',
    content: `I'm baby pug tousled blog green juice, four loko man bun kale chips food truck drinking vinegar humblebrag pour-over live-edge art party big mood.`,
  },
  {
    id: '2',
    title: 'Second post',
    content: `Shoreditch portland kogi photo booth enamel pin yuccie vice retro poke tilde tofu kickstarter keffiyeh marfa. Organic trust fund cardigan, everyday carry sustainable raclette you probably haven't heard of them venmo fam pour-over neutra blog hella fit.`,
  },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
})

export default postsSlice.reducer
