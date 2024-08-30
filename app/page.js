import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full flex flex-col">
      <h1 className="text-3xl">
        <Link href="/faqs">Click here to go to FAQs page</Link>
      </h1>

      </div>
    </main>
  );
}
