import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
  reducers: {
    postAdded: (state, action: PayloadAction<Post>) => {
      state.push(action.payload)
    },
    postUpdated: (state, action: PayloadAction<Post>) => {
      // find the right post and mutate
      const { id, title, content } = action.payload
      const existingPost = state.find((post) => post.id === id)
      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    },
  },
})

export const { postAdded, postUpdated } = postsSlice.actions
export default postsSlice.reducer
