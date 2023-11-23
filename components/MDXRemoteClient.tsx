"use client";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

export default ({
  mdxSource,
  components,
}: {
  mdxSource: MDXRemoteSerializeResult;
  components?: any;
}) => <MDXRemote {...mdxSource} components={components} />;
