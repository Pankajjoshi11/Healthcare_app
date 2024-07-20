import Image from "next/image";
import Link from "next/link";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patients.actions";

export default async function NewAppointment({params:{userId}}:SearchParamProps) {
    const patient=await getPatient(userId)
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src='/assets/icons/logo-full.svg'
            width={1000}
            height={1000}
            alt="logo"
            className="mb-12 h-10 w-fit">

          </Image>
          <AppointmentForm
            type='create'
            userId={userId}
            patientId={patient.$id}
          />
            
            <p className="justify-items-end text-dark-600 xl:text-left">©2024 LifeLine</p>

        </div>
      </section>
      <Image
        src="/assets/images/appointment-img.png"
        width={1000}
        height={1000}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"></Image>
    </div>
  );
}
