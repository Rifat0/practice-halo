import { DataTable } from "@/components/DataTable";
import { PageHeader } from "@/components/PageHeader";
import { getAppointments } from "@/lib/getData";
import { columns } from "./_components/columns";

const AppointmentPage = async () => {

  const appointments = await getAppointments();

  return (
    <>
      <PageHeader tittle="Appointment" />
      <div className="card-body mb-20">
          <div className="row">
            <div className="col-xl-12 col-md-12 col-sm-12">
              <div className="card card-round">
                <div className="card-body">
                  <div className="row">
                    <div className="table-responsive theme-scrollbar">
                      <DataTable columns={columns} data={appointments} searchColumn="title" />
                    </div>                    
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default AppointmentPage;
