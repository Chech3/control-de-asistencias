"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"

type Post = {
  id: number
  title: string
  content: string | null
}

interface EditPostDialogProps {
  post: Post
  onSave: (post: Post) => Promise<void>
  onCancel: () => void
}

export function EditPostDialog({ post, onSave, onCancel }: EditPostDialogProps) {
  const [title, setTitle] = useState(post.title)
  const [content, setContent] = useState(post.content || "")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim()) {
      setError("Title is required")
      return
    }

    try {
      setLoading(true)
      setError(null)

      await onSave({
        ...post,
        title,
        content,
      })
    } catch (error) {
      console.error("Error updating post:", error)
      setError(error instanceof Error ? error.message : "An unknown error occurred")
      setLoading(false)
    }
  }

  return (
    <Dialog open={true} onOpenChange={onCancel}>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Edit Post</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <Input
                placeholder="Post title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="Post content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                disabled={loading}
                rows={5}
              />
            </div>

            {error && <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">{error}</div>}
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onCancel} disabled={loading}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading || !title.trim()}>
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
