"use client";

const router = useRouter();

import { useSearchParams } from "next/navigation";
router.query.NEWPARAMS = "VALUE";
router.push(router);

export default function SearchBar() {
  const searchParams = useSearchParams();

  const post = searchParams.get("post");

  return <div className="text-white border-2 p-2 w-72"> Search: {post}</div>;
}
