import Image from "next/image";
import PatientForm from "@/components/forms/PatientForm";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
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
// //PROJECT_ID=6698a37a0020ac728cad
// API_KEY=c90815d19d80ed60f9c2c04e31356af6c0bed687a69c279952161e2f1336d9b8252af8aa142bd9dff36016597d07b41de96f473ee0892abebf6a43d854bfc78576a91d6b6a74ba97c79024abe048daf09e86461e2573ee2da6d73f68a7661c36b486f873096681645d8d71830fd5b80ddc62520d1373ceeb827b2e2972c37610
// DATABASE_ID=6698a6f0002fba2d83fb
// PATIENT_COLLECTION_ID=6698a71e000ac4bf90b2
// DOCTOR_COLLECTION_ID=6698a7580033f4c314a0
// APPOINTMENT_COLLECTION_ID=6698a7960014f35ff07f
// NEXT_PUBLIC_BUCKET_ID=6698a7f700212fe0e488
// NEXT_PUBLIC_ENDPOINT=https://cloud.appwrite.io/v1