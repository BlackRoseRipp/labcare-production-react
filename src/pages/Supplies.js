import { Fragment, useState } from "react";

const Supplies = () => {
  const [suppliesTypeInput1, setSuppliesTypeInput1] = useState("Null");
  const [suppliesTypeInput2, setSuppliesTypeInput2] = useState("Null");
  const [suppliesTypeInput3, setSuppliesTypeInput3] = useState("Null");
  const [suppliesTypeInput4, setSuppliesTypeInput4] = useState("Null");
  const [suppliesTypeInput5, setSuppliesTypeInput5] = useState("Null");
  const [suppliesTypeInput6, setSuppliesTypeInput6] = useState("Null");
  return (
    <Fragment>
      <section className="py-16">
        <h1 className="text-center heading text-3xl font-semibold">
          Order Supplies - Medical Facility
        </h1>
      </section>
      <section className="max-w-screen-lg w-full mx-auto p-8 bg-slate-50 mb-24">
        <form className="grid lg:grid-cols-6 gap-x-2 gap-y-3 mx-2">
          <input
            className="form-input lg:col-span-3"
            type="name"
            id="suppliesNameInput"
            placeholder="Name"
            required
          ></input>
          <input
            className="form-input lg:col-span-3"
            type="name"
            id="suppliesCompanyInput"
            placeholder="Company Name"
            required
          ></input>
          <input
            className="form-input lg:col-span-2"
            type="phone"
            id="suppliesPhoneInput"
            placeholder="Phone Number"
            required
          ></input>
          <input
            className="form-input lg:col-span-2"
            type="email"
            id="suppliesEmailInput"
            placeholder="Email"
            required
          ></input>
          <input
            className="form-input lg:col-span-2"
            type="text"
            id="suppliesAcctInput"
            placeholder="Account Number"
            required
          ></input>
          <input
            className="form-input lg:col-span-6"
            type="text"
            id="suppliesAddressInput"
            placeholder="Address, City, State, ZIP"
            required
          ></input>
          <select
            className="form-input lg:col-span-3"
            value={suppliesTypeInput1}
            onChange={(e) => setSuppliesTypeInput1(e.target.value)}
          >
            <option selected="selected" value="none">
              None
            </option>
            <option value="Flu Swabs">Flu Swabs</option>
            <option value="Specimen Cups">Specimen Cups</option>
            <option value="Red Top Tube">Red Top Tube</option>
            <option value="SST Tube">SST Tube</option>
            <option value="Covid Swabs">Covid Swabs</option>
            <option value="Specimen Bags">Specimen Bags</option>
            <option value="Pink Top">Pink Top</option>
            <option value="Culture Swabs">Culture Swabs</option>
            <option value="Sputum Traps">Sputum Traps</option>
            <option value="Straight Needles">Straight Needles</option>
            <option value="Butterfly Needles">Butterfly Needles</option>
            <option value="Blood Culture Set">Blood Culture Set</option>
            <option value="24h Urine Kit">24h Urine Kit</option>
            <option value="Covid Kit">Covid Kit</option>
          </select>
          <input
            className="form-input lg:col-span-3"
            type="text"
            id="suppliesQtyInput1"
            placeholder="Qty"
            required
          ></input>
          <select
            className="form-input lg:col-span-3"
            value={suppliesTypeInput2}
            onChange={(e) => setSuppliesTypeInput2(e.target.value)}
          >
            <option selected="selected" value="none">
              None
            </option>
            <option value="Flu Swabs">Flu Swabs</option>
            <option value="Specimen Cups">Specimen Cups</option>
            <option value="Red Top Tube">Red Top Tube</option>
            <option value="SST Tube">SST Tube</option>
            <option value="Covid Swabs">Covid Swabs</option>
            <option value="Specimen Bags">Specimen Bags</option>
            <option value="Pink Top">Pink Top</option>
            <option value="Culture Swabs">Culture Swabs</option>
            <option value="Sputum Traps">Sputum Traps</option>
            <option value="Straight Needles">Straight Needles</option>
            <option value="Butterfly Needles">Butterfly Needles</option>
            <option value="Blood Culture Set">Blood Culture Set</option>
            <option value="24h Urine Kit">24h Urine Kit</option>
            <option value="Covid Kit">Covid Kit</option>
          </select>
          <input
            className="form-input lg:col-span-3"
            type="text"
            id="suppliesQtyInput2"
            placeholder="Qty"
            required
          ></input>
          <select
            className="form-input lg:col-span-3"
            value={suppliesTypeInput3}
            onChange={(e) => setSuppliesTypeInput3(e.target.value)}
          >
            <option selected="selected" value="none">
              None
            </option>
            <option value="Flu Swabs">Flu Swabs</option>
            <option value="Specimen Cups">Specimen Cups</option>
            <option value="Red Top Tube">Red Top Tube</option>
            <option value="SST Tube">SST Tube</option>
            <option value="Covid Swabs">Covid Swabs</option>
            <option value="Specimen Bags">Specimen Bags</option>
            <option value="Pink Top">Pink Top</option>
            <option value="Culture Swabs">Culture Swabs</option>
            <option value="Sputum Traps">Sputum Traps</option>
            <option value="Straight Needles">Straight Needles</option>
            <option value="Butterfly Needles">Butterfly Needles</option>
            <option value="Blood Culture Set">Blood Culture Set</option>
            <option value="24h Urine Kit">24h Urine Kit</option>
            <option value="Covid Kit">Covid Kit</option>
          </select>
          <input
            className="form-input lg:col-span-3"
            type="text"
            id="suppliesQtyInput3"
            placeholder="Qty"
            required
          ></input>
          <select
            className="form-input lg:col-span-3"
            value={suppliesTypeInput4}
            onChange={(e) => setSuppliesTypeInput4(e.target.value)}
          >
            <option selected="selected" value="none">
              None
            </option>
            <option value="Flu Swabs">Flu Swabs</option>
            <option value="Specimen Cups">Specimen Cups</option>
            <option value="Red Top Tube">Red Top Tube</option>
            <option value="SST Tube">SST Tube</option>
            <option value="Covid Swabs">Covid Swabs</option>
            <option value="Specimen Bags">Specimen Bags</option>
            <option value="Pink Top">Pink Top</option>
            <option value="Culture Swabs">Culture Swabs</option>
            <option value="Sputum Traps">Sputum Traps</option>
            <option value="Straight Needles">Straight Needles</option>
            <option value="Butterfly Needles">Butterfly Needles</option>
            <option value="Blood Culture Set">Blood Culture Set</option>
            <option value="24h Urine Kit">24h Urine Kit</option>
            <option value="Covid Kit">Covid Kit</option>
          </select>
          <input
            className="form-input lg:col-span-3"
            type="text"
            id="suppliesQtyInput4"
            placeholder="Qty"
            required
          ></input>
          <select
            className="form-input lg:col-span-3"
            value={suppliesTypeInput5}
            onChange={(e) => setSuppliesTypeInput5(e.target.value)}
          >
            <option selected="selected" value="none">
              None
            </option>
            <option value="Flu Swabs">Flu Swabs</option>
            <option value="Specimen Cups">Specimen Cups</option>
            <option value="Red Top Tube">Red Top Tube</option>
            <option value="SST Tube">SST Tube</option>
            <option value="Covid Swabs">Covid Swabs</option>
            <option value="Specimen Bags">Specimen Bags</option>
            <option value="Pink Top">Pink Top</option>
            <option value="Culture Swabs">Culture Swabs</option>
            <option value="Sputum Traps">Sputum Traps</option>
            <option value="Straight Needles">Straight Needles</option>
            <option value="Butterfly Needles">Butterfly Needles</option>
            <option value="Blood Culture Set">Blood Culture Set</option>
            <option value="24h Urine Kit">24h Urine Kit</option>
            <option value="Covid Kit">Covid Kit</option>
          </select>
          <input
            className="form-input lg:col-span-3"
            type="text"
            id="suppliesQtyInput5"
            placeholder="Qty"
            required
          ></input>
          <select
            className="form-input lg:col-span-3"
            value={suppliesTypeInput6}
            onChange={(e) => setSuppliesTypeInput6(e.target.value)}
          >
            <option selected="selected" value="none">
              None
            </option>
            <option value="Flu Swabs">Flu Swabs</option>
            <option value="Specimen Cups">Specimen Cups</option>
            <option value="Red Top Tube">Red Top Tube</option>
            <option value="SST Tube">SST Tube</option>
            <option value="Covid Swabs">Covid Swabs</option>
            <option value="Specimen Bags">Specimen Bags</option>
            <option value="Pink Top">Pink Top</option>
            <option value="Culture Swabs">Culture Swabs</option>
            <option value="Sputum Traps">Sputum Traps</option>
            <option value="Straight Needles">Straight Needles</option>
            <option value="Butterfly Needles">Butterfly Needles</option>
            <option value="Blood Culture Set">Blood Culture Set</option>
            <option value="24h Urine Kit">24h Urine Kit</option>
            <option value="Covid Kit">Covid Kit</option>
          </select>
          <input
            className="form-input lg:col-span-3"
            type="text"
            id="suppliesQtyInput6"
            placeholder="Qty"
            required
          ></input>
          <textarea
            className="form-input lg:col-span-6"
            id="contactMessageInput"
            placeholder="Comments"
            rows="6"
            required
          ></textarea>
          <button
            type="submit"
            disabled={false}
            className="lg:col-span-6 btn-primary font-semibold text-2xl text-white bg-neutral-900"
          >
            Send
          </button>
        </form>
      </section>
    </Fragment>
  );
};

export default Supplies;
