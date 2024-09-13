import { DataTable } from "@/components/DataTable";
import { PageHeader } from "@/components/PageHeader";
import { getInvoices } from "@/lib/getData";
import { columns } from "./_components/columns";

const InvoicePage = async () => {

  const allInvoices = await getInvoices();

  return (
    <>
      <PageHeader tittle="Invoice" />
      <div className="card-body mb-20">
          <div className="row">
            <div className="col-xl-12 col-md-12 col-sm-12">
              <div className="card card-round">
                <div className="card-body">
                  <div className="row">
                    <div className="table-responsive theme-scrollbar">
                      <DataTable columns={columns} data={allInvoices} searchColumn="invoice" />
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

export default InvoicePage;
