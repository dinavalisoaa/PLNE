import { FC } from "react";
import ReactMarkdown from "react-markdown";
import { useCleanUrl } from "../../Hooks/useCleanUrl";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const PublicContributions: FC = () => {
  const { markdown } = useCleanUrl(
    "https://raw.githubusercontent.com/tsirysndr/top-github-users/main/markdown/public_contributions/madagascar.md"
  );

  return (
    <div className="markdown-body">
      <h2>Hello</h2>
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
      />
    </div>
  );
};

export default PublicContributions;
