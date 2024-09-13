import { PageHeader } from "@/components/PageHeader";
import { SingleCard } from "./_components/SingleCard";

export default function NewsAndEventsPage() {
  return (
    <>
      <PageHeader tittle="News & Events" />
      <div className="edit-profile mb-20">
        <div className="row">
          <div className="col-xl-12 col-md-12 col-sm-12">
            <div className="card card-round">
              <div className="card-body">
                <div className="row">
                  <section className="section gray-bg" id="blog">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-7 text-center">
                                <div className="section-title">
                                    <h2 className="mb-20">Latest News</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">

                            <SingleCard />
                            <SingleCard />
                            <SingleCard />
                            <SingleCard />
                            <SingleCard />
                            <SingleCard />

                        </div>
                    </div>
                </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
