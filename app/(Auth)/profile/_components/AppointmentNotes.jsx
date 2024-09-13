import ListCard from "@/components/ListCard";
import { getAppointmentNotes } from "@/lib/getData";
import Image from "next/image";

export const AppointmentNotes = async () => {

  const notes = await getAppointmentNotes();
  
  return (
    <div className="col-xl-6 col-md-6 col-sm-12 mb-20">
        <div className="card card-round">
            <div className="card-header"><h4>Appointments Notes</h4></div>            
            {
                (notes.data?.data.length > 0) ? (
                    notes.data.data?.map((note, index) => (
                      <div key={index+10} className="card-body align-items-center">
                        <ListCard note={note} />
                      </div>
                    )
                  )
                ) : (
                  <div className="card-body align-items-center text-center">
                    <Image className="img-fluid for-light" src="/assets/images/user/note-remove.png" alt="" height={50} width={50} />
                  </div>
                )                    
            }
        </div>
    </div>
  )
}
