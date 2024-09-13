import { PageHeader } from "@/components/PageHeader";
import { OfferCardDesign1 } from "./_components/OfferCardDesign1";
import { OfferCardDesign2 } from "./_components/OfferCardDesign2";

export default function SpecialPage() {
  return (
    <>
      <PageHeader tittle="Special" />
      <div className="edit-profile mb-20">
        <div className="row">
          <div className="col-xl-12 col-md-12 col-sm-12">
            <div className="card card-round">
              <div className="card-body">
                <div className="row">
                  <OfferCardDesign1 />

                  <OfferCardDesign2 />
                  
                  <OfferCardDesign1 />

                  <OfferCardDesign2 />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
