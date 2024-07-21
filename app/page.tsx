import Image from "next/image";
import PatientForm from "@/components/forms/PatientForm";
import Link from "next/link";
import PasskeyModal from "@/components/PasskeyModal";

export default function Home({searchParams}:SearchParamProps) {
  const isAdmin =searchParams?.admin==='true';
  return (
    <div className="flex h-screen max-h-screen">
      {isAdmin && <PasskeyModal/>}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image
            src='/assets/icons/logo-full.svg'
            width={1000}
            height={1000}
            alt="logo"
            className="mb-12 h-10 w-fit">

          </Image>
          <PatientForm/>
          <div className="text-14-regular mt-20 justify-between flex">
            <p className="justify-items-end text-dark-600 xl:text-left">©2024 LifeLine</p>
            <Link
              href="/?admin=true"
              className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        width={1000}
        height={1000}
        alt="patient"
        className="side-img max-w-[50%]"></Image>
    </div>
  );
}
// NEXT_PUBLIC_ADMIN_PASSKEY=123456