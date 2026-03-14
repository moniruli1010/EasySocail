import { PostComposer } from "@/components/forms/post-composer";

export default function CreatePostPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Create post</h1>
      <PostComposer />
    </div>
  );
}
