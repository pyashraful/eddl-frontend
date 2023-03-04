import Login from '~/Login';
import Test from './components/TestPdf';

export default function Home() {
  return (
    <div>
      <Login />

      <div className="m-8 shadow-md p-4">
        <div>
          <h1 className="text-4xl mb-4">Payment</h1>
          <div>
            <label htmlFor="name" className="ml-1 font-medium text-lg">
              Name
            </label>
            <input type="text" className="form_input" placeholder="Md Nazmul" />
          </div>
          <div>
            <label htmlFor="foloi" className="ml-1 font-medium text-lg">
              Folio No
            </label>
            <input type="text" id="foloi" className="form_input" />
          </div>
          <div>
            <label htmlFor="payment" className="ml-1 font-medium text-lg">
              Pay Amount
            </label>
            <input type="text" id="payment" className="form_input" />
          </div>
          <div>
            <label htmlFor="paymentType" className="ml-1 font-medium text-lg">
              Payment Type
            </label>
            <select name="paymentType" id="paymentType" className="form_input">
              <option className="text-sm" value="cash">
                Cash
              </option>
              <option value="cheque">Cheque</option>
              <option value="bank">Bank</option>
            </select>
          </div>

          <div>
            <label htmlFor="city" className="ml-1 font-medium text-lg">
              City
            </label>
            <input type="text" id="city" className="form_input" />
          </div>
          <div>
            <label htmlFor="area" className="ml-1 font-medium text-lg">
              Area
            </label>
            <input type="text" id="area" className="form_input" />
          </div>
          <div>
            <label htmlFor="block" className="ml-1 font-medium text-lg">
              Block No
            </label>
            <input type="text" id="block" className="form_input" />
          </div>
          <div>
            <label htmlFor="road" className="ml-1 font-medium text-lg">
              Road No
              <input type="text" id="road" className="form_input" />
            </label>
          </div>
          <div>
            <label htmlFor="plot" className="ml-1 font-medium text-lg">
              Plot No
            </label>
            <input type="text" id="plot" className="form_input" />
          </div>
        </div>
      </div>

      <Test />
    </div>
  );
}
