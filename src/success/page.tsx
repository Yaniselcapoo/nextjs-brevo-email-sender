import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-4xl">Muy bien!</h1>
      <br />
      <Link href={"/"}>volver</Link>
    </div>
  );
}
