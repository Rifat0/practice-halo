import { Home } from "feather-icons-react";
import Link from "next/link";

export const PageHeader = ({ tittle }) => {
  return (
    <div className="card-header">
      <div className="col-xl-12 col-md-12 col-sm-12">
        <div className="row">
          <div className="col-xl-9 col-md-6 col-sm-12">
            <h4 className="mb-3">{tittle}</h4>
            <nav>
              <ol className="breadcrumb justify-content-sm-start align-items-center mb-0">
                <li className="breadcrumb-item">
                  <Link href="/dashboard">
                    <Home />
                  </Link>
                </li>
                <li className="breadcrumb-item f-w-400 active">{tittle}</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
