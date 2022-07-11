// deps
import { useRouter } from "next/router";


export default function Show(props) {
  const router = useRouter();
  console.log(router.query)
  return (
    <div>{"hello"}</div>
  );
}
