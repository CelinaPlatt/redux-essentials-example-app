import React from "react"
import { useDispatch } from "react-redux"

import { reactionAdded } from "./postsSlice"

const reactionEmoji = {
  thumbsUp: '👍',
  hooray: '🎉',
  heart: '❤️',
  rocket: '🚀',
  eyes: '👀'
}

export const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch()

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    const reactionCount = post.reactions[name]
    return (
      <button key={name}
        type="button"
        className="muted-button reaction-button"
        onClick={() => 
          dispatch(reactionAdded({ postId : post.id, reaction: name }))
        }>
        {emoji} {reactionCount > 0 && reactionCount}
      </button>
    )
  })

  return <div>{reactionButtons}</div>
}