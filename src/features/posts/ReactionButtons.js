import React from "react"

const reactionEmoji = {
    thumbsUp: '👍',
    hooray: '🎉',
    heart: '❤️',
    rocket: '🚀',
    eyes: '👀'
}

export const ReactionButtons = ({ post }) => {
    const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
      const reactionCount = post.reactions[name]
      return (
        <button key={name} type="button" className="muted-button reaction-button">
          {emoji} {reactionCount > 1 && reactionCount }
        </button>
      )
    })
  
    return <div>{reactionButtons}</div>
  }