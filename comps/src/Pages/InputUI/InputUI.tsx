import { FC } from "react";
import ReactMarkdown from "react-markdown";
import { useCleanUrl } from "../../Hooks/useCleanUrl";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { useForm, SubmitHandler } from "react-hook-form"

import { Input } from "@material-tailwind/react";

const InputUI: FC = () => {
  const { register, handleSubmit } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)

  const { markdown } = useCleanUrl(
    "https://raw.githubusercontent.com/tsirysndr/top-github-users/main/markdown/public_contributions/madagascar.md"
  );
  

  return (
    <div className="markdown-body">
      <h2>Hello</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} />
      <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
      <input type="number" {...register("age", { min: 18, max: 99 })} />
      <input type="submit" />
      <div className="w-72">
      <Input label="Username" />
    </div>
    </form>
    </div>
  );
};

export default InputUI;
