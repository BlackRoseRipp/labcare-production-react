import { Fragment } from "react";
import { BsCheck2 } from "react-icons/bs";
import { FaBackspace } from "react-icons/fa";

const Insurance = () => {
  return (
    <Fragment>
      <section className="py-16 container mx-auto flex flex-col items-center">
        <h1 className="font-semibold text-center text-2xl mb-4">
          Insurances Accepted
        </h1>
        <p className="text-center mb-8">
          LabCare.Bio will bill the following insurance plans (patients will be
          responsible for any co-pays or deductibles):
        </p>
        <div className="w-[180px] pt-1.5 mx-2 bg-[#3892E7]"></div>
      </section>
      <section className="py-24">
        <div className="max-w-[800px] mx-auto grid xs:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <span className="flex items-center before:border-t before:border-black before:content-[''] before:w-full after:border-t after:border-black after:content-[''] after:w-full">
                <span className="text-4xl font-semibold px-3">A</span>
              </span>
              <div className="flex flex-col">
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>AARP Medicare</p>
                </div>
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>
                    Aetna (We can only accept PPO or POS plans, not HMO plans.
                    Only ME or W prefixes)
                  </p>
                </div>
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>AIG Employee Medical Plan</p>
                </div>
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>Affinity</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="flex items-center before:border-t before:border-black before:content-[''] before:w-full after:border-t after:border-black after:content-[''] after:w-full">
                <span className="text-4xl font-semibold px-3">B</span>
              </span>
              <div className="flex flex-col">
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>Beach Street</p>
                </div>
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>Blue Cross/Blue Shield</p>
                </div>
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>
                    Blue Choice and Medi-Blue *LabCare.Bio, Inc. can't accept:
                    BCBS with prefixes of ADA, BKJ, CAQ, CWZ, DCL, DZVAN, EEVAN,
                    EZVAN, FIF, FXZ, GF, GZM, HOK, HTC, IDYHQ, LWK, NAW, NGN,
                    NGO, NYY, PFF,PGI, POP, POS, PWE, PYL, QCB, SNB,Ã‚ UJAC,
                    WPV,XKC, XOF, YLA, YLD, YLF, YLK, YLL, YLM, YLN, YLQ, YLR,
                    YLS, YLT, YYM, ZOXM. Please contact us for more information.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="flex items-center before:border-t before:border-black before:content-[''] before:w-full after:border-t after:border-black after:content-[''] after:w-full">
                <span className="text-4xl font-semibold px-3">C</span>
              </span>
              <div className="flex flex-col">
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>CCM (Comprehensive Care Management)</p>
                </div>
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>CIGNA</p>
                </div>
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>Continuum</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="flex items-center before:border-t before:border-black before:content-[''] before:w-full after:border-t after:border-black after:content-[''] after:w-full">
                <span className="text-4xl font-semibold px-3 shrink-0">
                  E - F
                </span>
              </span>
              <div className="flex flex-col">
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>Emblem</p>
                </div>
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>Empire Place</p>
                </div>
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>Fidelis Care</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="flex items-center before:border-t before:border-black before:content-[''] before:w-full after:border-t after:border-black after:content-[''] after:w-full">
                <span className="text-4xl font-semibold px-3">G</span>
              </span>
              <div className="flex flex-col">
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>GEHA</p>
                </div>
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>GHI (Includes GHI Medicare)</p>
                </div>
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>Great West</p>
                </div>
                <div className="flex">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>Guardian</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col">
              <span className="flex items-center before:border-t before:border-black before:content-[''] before:w-full after:border-t after:border-black after:content-[''] after:w-full">
                <span className="text-4xl font-semibold px-3">H</span>
              </span>
              <div className="flex flex-col">
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>
                    HIP (Includes HIP Medicare. Physician must call to get
                    pre-authorization, 888-447-2884)
                  </p>
                </div>
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>Health Care Partners</p>
                </div>
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>Horizon BC/BS PPO only</p>
                </div>
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>Humana</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="flex items-center before:border-t before:border-black before:content-[''] before:w-full after:border-t after:border-black after:content-[''] after:w-full">
                <span className="text-4xl shrink-0 font-semibold px-3">
                  I - L
                </span>
              </span>
              <div className="flex flex-col">
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>Island Group Administration</p>
                </div>
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>Liberty Health Advantage, Inc. (LHA)</p>
                </div>
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>Local 201 (Unity Welfare fund)</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="flex items-center before:border-t before:border-black before:content-[''] before:w-full after:border-t after:border-black after:content-[''] after:w-full">
                <span className="text-4xl font-semibold px-3">M</span>
              </span>
              <div className="flex flex-col">
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>Mail Handlers</p>
                </div>
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>Magnacare</p>
                </div>
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>
                    Medicare (All traditional plans. We do not accept closed
                    HMOs)
                  </p>
                </div>
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>Metrolplus</p>
                </div>
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>Multi Plan</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="flex items-center before:border-t before:border-black before:content-[''] before:w-full after:border-t after:border-black after:content-[''] after:w-full">
                <span className="text-4xl shrink-0 font-semibold px-3">
                  N - P
                </span>
              </span>
              <div className="flex flex-col">
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>National Association of Letter Carriers (NALC)</p>
                </div>
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>Oxford (Liberty and Freedom)</p>
                </div>
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>Oxford Medicare</p>
                </div>
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>PHCS</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="flex items-center before:border-t before:border-black before:content-[''] before:w-full after:border-t after:border-black after:content-[''] after:w-full">
                <span className="text-4xl shrink-0 font-semibold px-3">
                  S - W
                </span>
              </span>
              <div className="flex flex-col">
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>Secured Horizon</p>
                </div>
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>United Healthcare</p>
                </div>
                <div className="flex my-2">
                  <BsCheck2 className="shrink-0 mr-2 mt-0.5" />
                  <p>
                    Workman's Compensation (Please include Ins. Co. name,
                    address and Case # etc.)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xs:w-[320px] w-full border-t border-black mx-auto my-4"></div>
      </section>
      <section className="mt-5 mb-24">
        <div className="max-w-[800px] mx-auto">
          <p className="mb-4">
            The following insurers will{" "}
            <span className="font-bold">not reimburse</span> LabCare.Bio
            <br />
            <br />
            LabCare.Bio can provide laboratory services, however, the specimens
            will be sent to one of our reference labs for testing and billing.
          </p>
          <div className="flex flex-col ml-5">
            <div className="flex my-2">
              <FaBackspace className="shrink-0 rotate-180 text-red-600 mr-2 mt-0.5 text-lg" />
              <p>Americare / Amerigroup</p>
            </div>
            <div className="flex my-2">
              <FaBackspace className="shrink-0 rotate-180 text-red-600 mr-2 mt-0.5 text-lg" />
              <p>Americhoice</p>
            </div>
            <div className="flex my-2">
              <FaBackspace className="shrink-0 rotate-180 text-red-600 mr-2 mt-0.5 text-lg" />
              <p>Health Plus</p>
            </div>
            <div className="flex my-2">
              <FaBackspace className="shrink-0 rotate-180 text-red-600 mr-2 mt-0.5 text-lg" />
              <p>Medicaid</p>
            </div>
            <div className="flex my-2">
              <FaBackspace className="shrink-0 rotate-180 text-red-600 mr-2 mt-0.5 text-lg" />
              <p>Wellcare</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Insurance;
