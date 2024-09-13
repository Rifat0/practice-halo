import { PageHeader } from "@/components/PageHeader";
import { AppointmentNotes } from "./_components/AppointmentNotes";
import { GeneralNotes } from "./_components/GeneralNotes";
import { UserInfo } from "./_components/UserInfo";

export default function ProfilePage() {
  return (
    <>
    <PageHeader tittle="Profile" />
    <div className="edit-profile mb-20">
        <div className="row">
            <div className="col-xl-12 col-md-12 col-sm-12">
              <UserInfo />
              <div className="row mt-20 profile_notes_wrapper">
                <div className="col-xl-12 col-md-12 col-sm-12">
                    <div className="row">            
                        <GeneralNotes />
                        <AppointmentNotes />
                    </div>                
                  </div>                
              </div>
            </div>
        </div>
    </div>
    </>
  );
}
