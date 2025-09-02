import AppContainer from "@/components/AppContainer";
import PostsContent from "@/components/posts/posts-content";
import React from "react";

const Page = () => {
  return (
    <AppContainer className=" mx-auto py-8">
      <PostsContent />
    </AppContainer>
  );
};

export default Page;
