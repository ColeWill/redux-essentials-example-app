import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { postUpdated } from './postsSlice'

interface EditPostFormFields extends HTMLFormControlsCollection {
  postTitle: HTMLInputElement
  postContent: HTMLTextAreaElement
}
interface EditPostFormElements extends HTMLFormElement {
  readonly elements: EditPostFormFields
}

export const EditPostForm = () => {
  const { postId } = useParams()

  const post = useAppSelector((state) => state.posts.find((post) => post.id === postId))

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  if (!post) {
    return (
      <section>
        <h2>No post found!</h2>
      </section>
    )
  }

  const onSavePostClicked = (e: React.FormEvent<EditPostFormElements>) => {
    e.preventDefault()
    console.log('onSavePostClicked')

    const { elements } = e.currentTarget
    const title = elements.postTitle.value
    const content = elements.postContent.value

    if (title && content) {
      console.log('editing post')
      dispatch(postUpdated({ id: post.id, title, content }))
      navigate(`/posts/${postId}`)
    }
  }
  return (
    <section>
      <form action="submit" onSubmit={onSavePostClicked}>
        <h2>Edit Posts</h2>
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text" id="postTitle" defaultValue={post.title} required />
        <label htmlFor="postContent">Content:</label>
        <textarea name="postContent" id="postContent" defaultValue={post.title} required></textarea>
        <button className="button">Save Post</button>
      </form>
    </section>
  )
}
